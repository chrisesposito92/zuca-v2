---
title: "Considerations before upgrading to Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/considerations-before-upgrading-to-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:53.624Z"
---

# Considerations before upgrading to Zuora 360+

This topic summarizes the requirements and key behavior changes before upgrading to Zuora 360+, including aspects like Object Type, Sync Mode, and Email Notification.

Before upgrading to Zuora 360+, you should learn about its requirements or key behavior changes compared with Zuora 360 in the following aspects:

-   Object Type

-   Sync Mode

-   Email Notification

-   SRPC Versions

-   Historical Data

-   On-Demand Sync

-   Payment

-   Subscription History

-   Draft invoice


The following table describes the details for each aspect. We encourage you to test thoroughly your use cases after enabling Zuora 360+ in the sandbox environment to avoid the risk of data loss in production.

| Feature | Requirements / Key behaviors |
| --- | --- |
| Object Type | The following object types are only supported in Zuora 360+ 5.0+:Credit MemoCredit Memo ItemCredit Memo PartDebit MemoDebit Memo ItemPayment PartRefund Part​​​​​The following object types are only supported in Zuora 360+ 5.2:Subscriptions HistorySubscription Rate Plans HistorySubscription Product & Charges HistorySubscription Charge Tier History.See the Subscription History item below in the table. |
| Sync Mode | You must turn on and use Real-Time Sync if you use both Zuora 360 and Zuora 360+ to sync your objects.Scheduled sync is not supported with Zuora 360+. This means that Zuora 360+ always syncs objects using Salesforce SOAP API instead of Bulk API. |
| Email Notification | Email Notification is currently not supported. |
| SRPC Versions | In Zuora, an Invoice Item is linked to a version of the Subscription Rate Plan Charge (SRPC) object that generated it.Zuora 360 by default only syncs the latest version of a Subscription and deletes the old version, therefore your Invoice Item in Salesforce could have a null lookup to the SRPC if generated based on a previous Subscription version.When you enable the feature of upserting Salesforce Subscriptions instead of deleting the old versions in sync, an Invoice Item in Salesforce will have a lookup to an SRPC even if this Invoice Item was generated from an old version of a Subscription. In this case, the SRPC is not the one that this Invoice Item was generated from. However, an Invoice Item in Salesforce could still have a null lookup to the SRPC even if this feature is enabled. For example, if a Remove Product amendment occurs, Zuora will delete the associated SRPC. An Invoice Item that is generated from this SRPC will then have a null reference in Salesforce. |
| Historical Data | When you turn on Zuora 360+, if you turn on the sync for any object types that are supported in Zuora 360+, you will not get the historical data on these types of objects. |
| On-Demand Sync | If you use both Zuora 360 and Zuora 360+ to sync your objects:Invoices will not be synchronized during On-Demand Sync.If Invoice Settlement is enabled for your Zuora tenant, Payment objects will not be synced during On-Demand Sync. Instead, they will be synced automatically through Zuora 360+. |
| Subscription History | Existing Subscription records synced before you turn on Subscription History in Zuora 360+ will stay under the Subscription object. Updates on these records after you turn on Subscription History in Zuora 360+ will be synced to Subscription History object through Zuora 360+. |
| Draft invoice | If Zuora 360+ was enabled for your tenant before January 2021, draft invoices are synced.If Zuora 360+ was enabled after January 2021, only posted invoices can be synced, which aligns with the behavior of Zuora 360. |
