---
title: "Configure profiles in Zuora revenue"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_revenue/prepare-zuora-revenue-for-sap-gl-connector/configure-profiles-in-zuora-revenue"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:16.643Z"
---

# Configure profiles in Zuora revenue

Learn how to configure profiles in Zuora Revenue to enable integration and manage accounting entries effectively.

Configure the following profiles in Zuora Revenue:

| Profiles | Description/steps |
| --- | --- |
| WEB_SERVICE_ENABLED | Enables Zuora Revenue to update the status of the Transfer Accounting Batch from READY TO TRANSFER state to TRANSFERRED state.This profile is required for the connector to work to post Revenue accounting journal entries into NetSuite GLComplete the following steps to enable this profile:Type TRANSFER in the Profile Category field.Type WEB_SERVICE_ENABLED in the Profile Name field.Select System in the Profile Level drop-down field.Toggle the System Level Value radio button to Yes.Select Checkbox in the Profile Type drop-down field |
| ENABLE_ZR_CONNECTORS | Enabling the Integration Hub Marketplace in the Zuora Revenue Navigation Menu UI allows you to run the SAP GL connector directly from the Transfer Accounting UI. This profile allows you to group accounting entries based on your selection criteria.Complete the following steps to enable this profile:Type ENABLE_ZR_CONNECTORS in the Profile Name field.Select System in the Profile Level drop-down field.Type SAP_GL in the System Level Value field.Select Text in the Profile Type drop-down field. |
| TA_SUB_BATCH_SPLIT_SIZE | Enables Zuora Revenue to split a Journal Accounting Batch into multiple smaller chunks of accounting entries.Complete the following steps to enable this profile:Type TA_SUB_BATCH_SPLIT_SIZE in the Profile Name field.Select System in the Profile Level drop-down field.Type a value 999 in the System Level Value field. If the value is left blank, the connector execution fails.Select Number in the Profile Type drop-down field. |

Ensure Zuora Revenue APIs are enabled/provisioned on your tenant. If you have any issues creating API users, submit a request to [Zuora Global Support](https://www.zuora.com/support-center/).
