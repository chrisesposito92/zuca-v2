---
title: "Edit a CRM account ID"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/edit-a-crm-account-id"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:42.841Z"
---

# Edit a CRM account ID

Guidelines for updating CRM account IDs, including recommendations for performing a Sync Cleanup and re-synchronizing data with Salesforce.

To change CRM IDs for a large number of CRM accounts, such as when you redirect your Zuora tenant to a different Salesforce org, we do recommend that you first perform a Sync Cleanup of Accounts and Related Objects before changing CRM IDs. The Sync Cleanup removes all Zuora Billing and Payment data previously synchronized over to Salesforce. Simultaneously, the Sync Cleanup resets your Salesforce associations so that you can now edit your CRM Account IDs.

To change CRM IDs for one or a few CRM accounts from Zuora UI, we do not recommend a Sync Cleanup followed by a full sync operation as it is a time consuming operation that could cause an extended interruption of business operations.

After updating the CRM Account IDs, perform a Zuora Connector for Salesforce CRM Sync to re-synchronize your data back into Salesforce. If you performed a Sync Cleanup before the update, the next sync, manual or scheduled, will be automatically a full sync.
