"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Select,
  SelectItem,
  Textarea,
  Checkbox,
  addToast,
} from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import {
  useDeleteZuoraConnection,
  useRevenueSnapshotGenerate,
  useSaveZuoraConnection,
  useSetActiveZuoraConnection,
  useZuoraConnections,
  useZuoraSubscriptions,
  type SubscriptionSummary,
} from "@/hooks/useRevenueSnapshot";

const pageSizeOptions = [10, 25, 50, 100];
const sspMethodOptions = ["None", "List Price", "Sell Price", "Custom Formula"] as const;
const sortOptions = [
  { key: "subscription_number", label: "Subscription #" },
  { key: "subscription_name", label: "Subscription Name" },
  { key: "account_name", label: "Account Name" },
  { key: "status", label: "Status" },
  { key: "term_start_date", label: "Start Date" },
  { key: "term_end_date", label: "End Date" },
  { key: "has_allocation_eligible", label: "Allocation Eligible" },
] as const satisfies ReadonlyArray<{ key: keyof SubscriptionSummary; label: string }>;

type SortKey = (typeof sortOptions)[number]["key"];

export default function RevenueSnapshotPage() {
  const { data: connectionsData } = useZuoraConnections();
  const saveConnection = useSaveZuoraConnection();
  const deleteConnection = useDeleteZuoraConnection();
  const setActiveConnection = useSetActiveZuoraConnection();

  const connections = connectionsData?.connections || [];
  const activeConnectionId = connectionsData?.active_connection_id ?? null;
  const [selectedConnectionId, setSelectedConnectionId] = useState<string | null>(activeConnectionId);

  const [baseUrl, setBaseUrl] = useState("https://rest.test.zuora.com");
  const [tenantName, setTenantName] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (!selectedConnectionId && activeConnectionId) {
      setSelectedConnectionId(activeConnectionId);
    }
  }, [activeConnectionId, selectedConnectionId]);

  useEffect(() => {
    if (selectedConnectionId && !connections.some((conn) => conn.id === selectedConnectionId)) {
      setSelectedConnectionId(activeConnectionId ?? null);
    }
  }, [connections, selectedConnectionId, activeConnectionId]);

  const activeConnection = connections.find((conn) => conn.id === selectedConnectionId) || null;

  useEffect(() => {
    if (!activeConnection) return;
    setTenantName(activeConnection.tenant_name);
    setBaseUrl(activeConnection.base_url || "https://rest.test.zuora.com");
    setClientId(activeConnection.client_id || "");
    setClientSecret("");
  }, [activeConnection?.id]);

  const subscriptionsQuery = useZuoraSubscriptions(Boolean(activeConnection), selectedConnectionId);
  const generateSnapshot = useRevenueSnapshotGenerate();

  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [page, setPage] = useState(1);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState<Record<string, boolean>>({});
  const [sortKey, setSortKey] = useState<SortKey>("subscription_number");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [sspMethod, setSspMethod] = useState<(typeof sspMethodOptions)[number]>("None");
  const [sspCustomFormula, setSspCustomFormula] = useState("");
  const [dataAugmentationRules, setDataAugmentationRules] = useState("");
  const [notes, setNotes] = useState("");

  const subscriptions = subscriptionsQuery.data?.subscriptions || [];
  const subscriptionsError = subscriptionsQuery.error as { error?: string; details?: string; raw?: string } | null;

  useEffect(() => {
    if (!subscriptionsError) return;
    addToast({
      title: "Subscription Load Failed",
      description: subscriptionsError.details || subscriptionsError.error || subscriptionsError.raw || "Unable to load subscriptions",
      color: "danger",
    });
  }, [subscriptionsError]);

  const filteredSubscriptions = useMemo(() => {
    if (!search.trim()) return subscriptions;
    const term = search.toLowerCase();
    return subscriptions.filter((sub) =>
      [sub.subscription_number, sub.subscription_name, sub.account_name]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(term))
    );
  }, [subscriptions, search]);

  const sortedSubscriptions = useMemo(() => {
    const list = [...filteredSubscriptions];

    const getValue = (sub: SubscriptionSummary) => {
      switch (sortKey) {
        case "term_start_date":
          return sub.term_start_date ? new Date(sub.term_start_date).getTime() : null;
        case "term_end_date":
          return sub.term_end_date ? new Date(sub.term_end_date).getTime() : null;
        case "has_allocation_eligible":
          return sub.has_allocation_eligible ? 1 : 0;
        default:
          return sub[sortKey] ?? null;
      }
    };

    const direction = sortDirection === "asc" ? 1 : -1;

    list.sort((a, b) => {
      const aVal = getValue(a);
      const bVal = getValue(b);

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * direction;
      }

      return (
        String(aVal).localeCompare(String(bVal), undefined, {
          numeric: true,
          sensitivity: "base",
        }) * direction
      );
    });

    return list;
  }, [filteredSubscriptions, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(sortedSubscriptions.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedSubscriptions = sortedSubscriptions.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const selectedList = Object.keys(selectedSubscriptions).filter((key) => selectedSubscriptions[key]);
  const hasAllocationEligible = subscriptions
    .filter((sub) => selectedSubscriptions[sub.subscription_number])
    .some((sub) => sub.has_allocation_eligible);

  useEffect(() => {
    setSelectedSubscriptions({});
    setSearch("");
    setPage(1);
  }, [selectedConnectionId]);

  const handleToggleSubscription = (subscription: SubscriptionSummary) => {
    setSelectedSubscriptions((prev) => ({
      ...prev,
      [subscription.subscription_number]: !prev[subscription.subscription_number],
    }));
  };

  const handleSelectPage = (checked: boolean) => {
    const updates: Record<string, boolean> = {};
    for (const sub of pagedSubscriptions) {
      updates[sub.subscription_number] = checked;
    }
    setSelectedSubscriptions((prev) => ({ ...prev, ...updates }));
  };

  const handleConnect = async () => {
    if (!tenantName || !clientId || !clientSecret) {
      addToast({
        title: "Missing Credentials",
        description: "Tenant name, Client ID, and Client Secret are required",
        color: "warning",
      });
      return;
    }

    try {
      const result = await saveConnection.mutateAsync({
        tenant_name: tenantName,
        base_url: baseUrl,
        client_id: clientId,
        client_secret: clientSecret,
      });
      addToast({ title: "Connected", description: "Zuora tenant connected", color: "success" });
      setClientSecret("");
      if (result?.connection?.id) {
        setSelectedConnectionId(result.connection.id);
      }
    } catch (error) {
      const err = error as { error?: string; details?: string; raw?: string };
      addToast({
        title: "Connection Failed",
        description: err.details || err.error || err.raw || "Unable to connect to tenant",
        color: "danger",
      });
    }
  };

  const handleDisconnect = async () => {
    if (!selectedConnectionId) {
      addToast({
        title: "No Tenant Selected",
        description: "Select a tenant to remove",
        color: "warning",
      });
      return;
    }

    try {
      await deleteConnection.mutateAsync(selectedConnectionId);
      addToast({ title: "Removed", description: "Tenant connection removed", color: "success" });
      setSelectedSubscriptions({});
    } catch (error) {
      const err = error as { error?: string; details?: string; raw?: string };
      addToast({
        title: "Disconnect Failed",
        description: err.details || err.error || err.raw || "Unable to remove connection",
        color: "danger",
      });
    }
  };

  const handleGenerate = async () => {
    if (!selectedList.length) {
      addToast({
        title: "No Subscriptions Selected",
        description: "Select at least one subscription to continue",
        color: "warning",
      });
      return;
    }

    if (hasAllocationEligible && sspMethod === "Custom Formula" && !sspCustomFormula.trim()) {
      addToast({
        title: "Custom Formula Required",
        description: "Provide a custom formula or choose a different SSP method",
        color: "warning",
      });
      return;
    }

    try {
      await generateSnapshot.mutateAsync({
        connection_id: selectedConnectionId,
        input: {
          subscription_numbers: selectedList,
          ...(hasAllocationEligible && { ssp_method: sspMethod }),
          ...(hasAllocationEligible && sspMethod === "Custom Formula" && { ssp_custom_formula: sspCustomFormula }),
          ...(dataAugmentationRules && { data_augmentation_rules: dataAugmentationRules }),
          ...(notes && { notes }),
        },
      });
    } catch (error) {
      const err = error as { error?: string; details?: string; raw?: string };
      addToast({
        title: "Snapshot Failed",
        description: err.details || err.error || err.raw || "Unable to generate snapshot",
        color: "danger",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="gradient-text">Revenue Snapshot</span>
        </h1>
        <p className="text-default-500 text-lg mt-1">
          Connect to Zuora Billing, select subscriptions, and preview Revenue ingestion output.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="glass-card xl:col-span-1">
          <CardHeader className="px-6 pt-5 pb-0 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Tenant Connection</h3>
              <p className="text-xs text-default-500">Save multiple tenants with names, choose one to use.</p>
            </div>
            {activeConnection ? (
              <Chip size="sm" variant="flat" className="bg-success/20 text-success">
                Active: {activeConnection.tenant_name}
              </Chip>
            ) : connections.length ? (
              <Chip size="sm" variant="flat" className="bg-default-200/70 text-default-600">
                Saved
              </Chip>
            ) : null}
          </CardHeader>
          <CardBody className="p-6 space-y-4">
            {connections.length ? (
              <Select
                label="Saved Tenants"
                selectedKeys={selectedConnectionId ? [selectedConnectionId] : []}
                onSelectionChange={async (keys) => {
                  const value = Array.from(keys)[0] as string | undefined;
                  if (!value) return;
                  setSelectedConnectionId(value);
                  try {
                    await setActiveConnection.mutateAsync(value);
                  } catch (error) {
                    const err = error as { error?: string; details?: string; raw?: string };
                    addToast({
                      title: "Failed to Activate",
                      description: err.details || err.error || err.raw || "Unable to set active tenant",
                      color: "danger",
                    });
                  }
                }}
                size="sm"
              >
                {connections.map((conn) => (
                  <SelectItem key={conn.id}>{conn.tenant_name}</SelectItem>
                ))}
              </Select>
            ) : (
              <div className="text-xs text-default-500">No saved tenants yet.</div>
            )}

            <Input
              label="Tenant Name"
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
              placeholder="e.g., Sandbox US"
              variant="bordered"
              size="sm"
            />
            <Input
              label="Base URL"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="https://rest.test.zuora.com"
              variant="bordered"
              size="sm"
            />
            <Input
              label="Client ID"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="Your OAuth client id"
              variant="bordered"
              size="sm"
            />
            <Input
              label="Client Secret"
              type="password"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder={activeConnection ? "••••••••" : "Your OAuth client secret"}
              variant="bordered"
              size="sm"
            />
            <div className="flex items-center gap-3">
              <Button
                color="primary"
                className="font-semibold"
                onClick={handleConnect}
                isLoading={saveConnection.isPending}
              >
                {activeConnection ? "Update Connection" : "Connect"}
              </Button>
              {activeConnection && (
                <Button
                  variant="bordered"
                  onClick={handleDisconnect}
                  isLoading={deleteConnection.isPending}
                >
                  Remove
                </Button>
              )}
            </div>
          </CardBody>
        </Card>

        <Card className="glass-card xl:col-span-2">
          <CardHeader className="px-6 pt-5 pb-0 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Subscription Selection</h3>
              <p className="text-xs text-default-500">Select subscriptions to include in the snapshot.</p>
            </div>
            <Button
              size="sm"
              variant="bordered"
              isDisabled={!activeConnection}
              isLoading={subscriptionsQuery.isLoading}
              onClick={() => subscriptionsQuery.refetch()}
            >
              {subscriptionsQuery.isLoading ? "Loading" : "Load Subscriptions"}
            </Button>
          </CardHeader>
          <CardBody className="p-6 space-y-4">
            {!activeConnection ? (
              <div className="text-sm text-default-500">Select or add a tenant to load subscriptions.</div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row gap-3 md:items-center">
                  <Input
                    placeholder="Search by subscription or account name..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                    variant="bordered"
                    size="sm"
                    className="flex-1"
                  />
                  <Select
                    label="Rows"
                    selectedKeys={[String(pageSize)]}
                    onSelectionChange={(keys) => {
                      const value = Array.from(keys)[0];
                      if (value) {
                        setPageSize(Number(value));
                        setPage(1);
                      }
                    }}
                    size="sm"
                    className="w-32"
                  >
                    {pageSizeOptions.map((size) => (
                      <SelectItem key={String(size)}>{size}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Sort"
                    selectedKeys={[sortKey]}
                    onSelectionChange={(keys) => {
                      const value = Array.from(keys)[0] as SortKey | undefined;
                      if (value) {
                        setSortKey(value);
                        setPage(1);
                      }
                    }}
                    size="sm"
                    className="w-40"
                  >
                    {sortOptions.map((option) => (
                      <SelectItem key={option.key}>{option.label}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Order"
                    selectedKeys={[sortDirection]}
                    onSelectionChange={(keys) => {
                      const value = Array.from(keys)[0] as "asc" | "desc" | undefined;
                      if (value) {
                        setSortDirection(value);
                        setPage(1);
                      }
                    }}
                    size="sm"
                    className="w-28"
                  >
                    <SelectItem key="asc">Asc</SelectItem>
                    <SelectItem key="desc">Desc</SelectItem>
                  </Select>
                  <Button
                    size="sm"
                    variant="flat"
                    onClick={() => handleSelectPage(true)}
                    isDisabled={pagedSubscriptions.length === 0}
                  >
                    Select Page
                  </Button>
                  <Button
                    size="sm"
                    variant="flat"
                    onClick={() => handleSelectPage(false)}
                    isDisabled={pagedSubscriptions.length === 0}
                  >
                    Clear Page
                  </Button>
                </div>

                <div className="rounded-lg border border-default-200/50 overflow-hidden">
                  {pagedSubscriptions.length === 0 ? (
                    <div className="p-4 text-sm text-default-500">
                      {subscriptionsQuery.isLoading
                        ? "Loading subscriptions..."
                        : subscriptionsError
                        ? "Failed to load subscriptions. Check your Zuora connection and try again."
                        : "No subscriptions found."}
                    </div>
                  ) : (
                    <div className="divide-y divide-default-200/50">
                      {pagedSubscriptions.map((sub) => (
                        <div key={sub.subscription_number} className="p-4 flex items-start gap-3">
                          <Checkbox
                            isSelected={Boolean(selectedSubscriptions[sub.subscription_number])}
                            onValueChange={() => handleToggleSubscription(sub)}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-foreground">{sub.subscription_number}</span>
                              {sub.subscription_name && (
                                <Chip size="sm" variant="flat" className="bg-default-200/70 text-default-600">
                                  {sub.subscription_name}
                                </Chip>
                              )}
                              {sub.status && (
                                <Chip size="sm" variant="flat" className="bg-primary/10 text-primary">
                                  {sub.status}
                                </Chip>
                              )}
                              {sub.has_allocation_eligible && (
                                <Chip size="sm" variant="flat" className="bg-warning/20 text-warning">
                                  Allocation Eligible
                                </Chip>
                              )}
                            </div>
                            <div className="text-xs text-default-500 mt-1 flex flex-wrap gap-4">
                              {sub.account_name && <span>Account: {sub.account_name}</span>}
                              {sub.term_start_date && <span>Start: {sub.term_start_date}</span>}
                              {sub.term_end_date && <span>End: {sub.term_end_date}</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-default-500">
                  <span>{sortedSubscriptions.length} subscriptions</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="light"
                      isDisabled={currentPage <= 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      Prev
                    </Button>
                    <span>
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      size="sm"
                      variant="light"
                      isDisabled={currentPage >= totalPages}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardBody>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader className="px-6 pt-5 pb-0">
          <h3 className="text-lg font-semibold">Snapshot Configuration</h3>
        </CardHeader>
        <CardBody className="p-6 space-y-4">
          {hasAllocationEligible && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="SSP Method"
                selectedKeys={[sspMethod]}
                onSelectionChange={(keys) => {
                  const value = Array.from(keys)[0];
                  if (value && sspMethodOptions.includes(value as typeof sspMethod)) {
                    setSspMethod(value as typeof sspMethod);
                  }
                }}
                size="sm"
              >
                {sspMethodOptions.map((option) => (
                  <SelectItem key={option}>{option}</SelectItem>
                ))}
              </Select>
              {sspMethod === "Custom Formula" && (
                <Input
                  label="Custom Formula"
                  value={sspCustomFormula}
                  onChange={(e) => setSspCustomFormula(e.target.value)}
                  placeholder="Describe the allocation formula"
                  size="sm"
                />
              )}
            </div>
          )}

          <Textarea
            label="Data Augmentation Rules"
            placeholder="Describe any data adjustments to apply during snapshot processing"
            value={dataAugmentationRules}
            onChange={(e) => setDataAugmentationRules(e.target.value)}
            minRows={3}
          />

          <Textarea
            label="Notes"
            placeholder="Optional notes for this snapshot"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            minRows={2}
          />

          <div className="flex items-center justify-between">
            <div className="text-xs text-default-500">
              {selectedList.length} subscription{selectedList.length === 1 ? "" : "s"} selected
            </div>
            <Button
              color="primary"
              className="font-semibold teal-glow-subtle"
              onClick={handleGenerate}
              isLoading={generateSnapshot.isPending}
              isDisabled={generateSnapshot.isPending || !selectedList.length}
            >
              {generateSnapshot.isPending ? "Generating..." : "Generate Snapshot"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
