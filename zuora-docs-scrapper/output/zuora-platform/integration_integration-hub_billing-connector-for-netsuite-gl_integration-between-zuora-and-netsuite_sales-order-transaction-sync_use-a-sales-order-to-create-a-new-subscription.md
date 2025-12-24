---
title: "Use a Sales Order to create a new subscription"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync/use-a-sales-order-to-create-a-new-subscription"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:50.775Z"
---

# Use a Sales Order to create a new subscription

Learn how to create a sales order that will create a new subscription

You can enable the subscription sync in the NetSuite Connector Sync Preferences. It is disabled by default. Enabling the subscription sync will also enable the Product and Product Rate Plan syncs.

To create a sales order that will create a new subscription, complete these steps.

1.  Create a new sales order in NetSuite.
2.  Reference the customer and enter the other transaction-level information, as required.
3.  For the items, select at least one item that corresponds to a Zuora product rate plan. These will appear in the Item list with any other items, including Zuora charges.
4.  The quantity does not have any impact (a quantity of 1 is assumed). If you want to include more than one of the same rate plan, add the same item multiple times.
5.  On the Zuora Subscription tab, enter the subscription-specific details such as Auto Renewal and the subscription dates.

    -   The subscription date fields are optional, and the sales order will be synced without them. You can provide the dates directly within Zuora.


6.  To send the sales order to Zuora, go to the Zuora Subscription tab and set the Send to Zuora flag to `Yes`.

    The next time NetSuite Connector runs it will sync the new sales order to Zuora.
