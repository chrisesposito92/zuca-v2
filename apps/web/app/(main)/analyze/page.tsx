"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
  Divider,
} from "@heroui/react";
import { useState } from "react";

const currencies = [
  { key: "USD", label: "USD - US Dollar" },
  { key: "EUR", label: "EUR - Euro" },
  { key: "CAD", label: "CAD - Canadian Dollar" },
];

const billingPeriods = [
  { key: "Monthly", label: "Monthly" },
  { key: "Quarterly", label: "Quarterly" },
  { key: "Semi-Annually", label: "Semi-Annually" },
  { key: "Annually", label: "Annually" },
];

const allocationMethods = [
  { key: "Use List Price", label: "Use List Price" },
  { key: "Use Sell Price", label: "Use Sell Price" },
  { key: "Custom Formula", label: "Custom Formula" },
  { key: "N/A", label: "N/A" },
];

export default function AnalyzePage() {
  const [isAllocations, setIsAllocations] = useState(false);
  const [allocationMethod, setAllocationMethod] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">New Analysis</h1>
          <p className="text-default-500">
            Enter your use case details to generate a Zuora billing and revenue solution
          </p>
        </div>
        <Button
          variant="bordered"
          color="secondary"
          startContent={<span>✨</span>}
        >
          Generate Use Cases
        </Button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          {/* Required Fields */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Required Information</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                name="customer_name"
                label="Customer Name"
                placeholder="Enter customer name"
                isRequired
                labelPlacement="outside"
              />

              <Input
                name="contract_start_date"
                label="Contract Start Date"
                placeholder="MM/DD/YYYY"
                isRequired
                labelPlacement="outside"
              />

              <Textarea
                name="use_case_description"
                label="Use Case Description"
                placeholder="Describe the customer's use case, including products, pricing, billing terms, and any special requirements..."
                isRequired
                minRows={4}
                labelPlacement="outside"
              />
            </CardBody>
          </Card>

          {/* Contract Settings */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Contract Settings</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  name="terms_months"
                  type="number"
                  label="Term (Months)"
                  placeholder="12"
                  defaultValue="12"
                  labelPlacement="outside"
                />

                <Select
                  name="transaction_currency"
                  label="Currency"
                  placeholder="Select currency"
                  defaultSelectedKeys={["USD"]}
                  labelPlacement="outside"
                >
                  {currencies.map((currency) => (
                    <SelectItem key={currency.key}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  name="billing_period"
                  label="Billing Period"
                  placeholder="Select billing period"
                  defaultSelectedKeys={["Monthly"]}
                  labelPlacement="outside"
                >
                  {billingPeriods.map((period) => (
                    <SelectItem key={period.key}>
                      {period.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>

          {/* Revenue Recognition */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Revenue Recognition</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center gap-4">
                <Switch
                  isSelected={isAllocations}
                  onValueChange={setIsAllocations}
                >
                  Enable Allocations
                </Switch>
                <span className="text-sm text-default-500">
                  Enable if this deal requires SSP-based allocation across multiple POBs
                </span>
              </div>

              {isAllocations && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <Select
                    name="allocation_method"
                    label="Allocation Method"
                    placeholder="Select allocation method"
                    labelPlacement="outside"
                    selectedKeys={allocationMethod ? [allocationMethod] : []}
                    onSelectionChange={(keys) =>
                      setAllocationMethod(Array.from(keys)[0] as string)
                    }
                  >
                    {allocationMethods.map((method) => (
                      <SelectItem key={method.key}>
                        {method.label}
                      </SelectItem>
                    ))}
                  </Select>

                  {allocationMethod === "Custom Formula" && (
                    <Textarea
                      name="allocation_custom_formula"
                      label="Custom Formula"
                      placeholder="Enter your custom allocation formula..."
                      labelPlacement="outside"
                    />
                  )}
                </div>
              )}

              <Divider className="my-4" />

              <Textarea
                name="rev_rec_notes"
                label="Revenue Recognition Notes (Optional)"
                placeholder="Add any additional notes about revenue recognition requirements..."
                labelPlacement="outside"
              />
            </CardBody>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="bordered">
              Clear
            </Button>
            <Button
              type="submit"
              color="primary"
              isLoading={isLoading}
            >
              Analyze Use Case
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
