---
title: "Synchronize data from Zuora to Salesforce"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:58.935Z"
---

# Synchronize data from Zuora to Salesforce

This article explains how to set sync options and trigger various types of Zuora 360 sync operations to synchronize data from Zuora to Salesforce.

See Set up Credentials to Connect to Salesforce for more information on authentication options. You must have an established connection before you can sync data.

In Zuora, you can trigger or schedule the following types of synchronization:

-   Manual Sync
-   Scheduled Recurring Sync
-   Real-time Sync

The objects that you can sync from Zuora to Salesforce are:

-   Accounts & Related Objects When you set an account status to be cancelled in Zuora, the corresponding account in Salesforce is deleted during the next sync session.
-   Product CatalogBy default, the deleted products in Zuora are synchronized to Salesforce. The deleted products are flagged in Salesforce and will not be used in quotes.

For detail information on objects and fields synchronized, see Sync Field Reference.

Before synchronizing data, you need to install and configure Zuora 360, and associate your accounts in Zuora with your accounts in Salesforce, as described in Configuring Zuora 360.

1.  In the Zuora application, click the down arrow next to your user name.
2.  Select Settings > Commerce and click Synchronize Salesforce.com Data .
3.  On the Zuora for Salesforce - 360 Sync page, specify the sync settings in each section as described below.

    Note: If the Multi-entity feature is enabled in your tenant, you must add a unique entity prefix to every rate plan charge object, before synchronization.
