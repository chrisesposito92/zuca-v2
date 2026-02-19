---
title: "CRM Account ID"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configuration/crm-account-id"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:23.820Z"
---

# CRM Account ID

Explains how to update CRM Account IDs in Zuora.

To change CRM IDs for a large number of CRM accounts, such as when you redirect your Zuora tenant to a different Salesforce org, we do recommend that you first perform a Sync Cleanup of Accounts and Related Objects before changing CRM IDs. The Sync Cleanup removes all Zuora Billing and Payment data previously synchronized over to Salesforce. Simultaneously, the Sync Cleanup resets your Salesforce associations so that you can now edit your CRM Account IDs.

To change CRM IDs for one or a few CRM accounts from Zuora UI, we do not recommend a Sync Cleanup followed by a full sync operation as it is a time consuming operation that could cause an extended interruption of business operations.

After updating the CRM Account IDs, perform a Zuora 360+ Sync to re-synchronize your data back into Salesforce. If you performed a Sync Cleanup before the update, the next sync, manual or scheduled, will be automatically a full sync.
