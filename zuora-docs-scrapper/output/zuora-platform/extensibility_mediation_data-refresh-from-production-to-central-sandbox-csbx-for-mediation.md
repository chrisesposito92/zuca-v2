---
title: "Data refresh from Production to Central Sandbox (CSBX) for Mediation"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/data-refresh-from-production-to-central-sandbox-csbx-for-mediation"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:08.412Z"
---

# Data refresh from Production to Central Sandbox (CSBX) for Mediation

Zuora Mediation currently provides limited support for Central Sandbox (CSBX) refreshes from Production. While a CSBX refresh updates Zuora Billing data, Mediation data and processing state are handled separately and require additional steps.

When a Central Sandbox (CSBX) environment is refreshed from Production, Mediation data is not automatically refreshed or reset. After the refresh:

-   Existing Mediation data, such as prefetched usage data, may still reflect the pre‑refresh state.
-   Meter results may become inaccurate or inconsistent.
-   Prefetch processes may stop or behave unexpectedly.

This behavior is expected and is a known limitation of the current Mediation–CSBX integration.

## Meter deployment after a refresh

You can redeploy meter configurations from Production to CSBX using Deployment Manager or export/import tools. However, this step only redeploys meter definitions and does not:

-   Clear existing prefetched data.
-   Reset Mediation processing state.
-   Reconcile pre‑refresh and post‑refresh data.

Redeploying meters alone is therefore not sufficient to restore correct Mediation behavior after a CSBX refresh.

## Required action after a CSBX refresh

After every CSBX refresh, customers using Mediation must contact Zuora Global Support to request a Mediation full refresh for the sandbox.

Zuora Support and the Mediation team will:

-   Trigger a full Mediation refresh for the CSBX tenant.
-   Rebuild prefetched data.
-   Ensure Mediation processing is aligned with the refreshed sandbox environment.

Restarting Prefetch manually, without a Mediation full refresh, may temporarily resume data ingestion, but data accuracy cannot be guaranteed.

During a Mediation full refresh in CSBX:

-   Meter results in that CSBX environment may be unavailable or unreliable until the refresh completes.
-   You are strongly encouraged to coordinate the timing of the refresh with Zuora Support.
-   The duration of the refresh can vary depending on the tenant size and data volume.

## Recommended process

If you plan to refresh a CSBX environment that uses Mediation:

1.  Before the refresh

    -   Identify whether Mediation is actively used in the CSBX tenant.
    -   Plan coordination with Zuora Support if you rely on Mediation for testing, validation, or demos.
2.  After the refresh

    -   Open a Support ticket and request:
        -   A full Mediation refresh for the CSBX tenant, including prefetch data.
        -   Coordination on timing to minimize meter downtime.
3.  Post‑refresh configuration

    -   Redeploy meter definitions to CSBX using Deployment Manager or export/import if needed.
    -   Verify that the Mediation menu is visible; if Mediation appears disabled after the refresh, contact Zuora Support to request re‑enablement.

Once the full Mediation refresh is complete and meters are redeployed, you can resume using CSBX to test Mediation pipelines against refreshed Billing data.
