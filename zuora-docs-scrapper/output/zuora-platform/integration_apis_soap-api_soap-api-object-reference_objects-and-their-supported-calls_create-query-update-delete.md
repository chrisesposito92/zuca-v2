---
title: "Create, query, update, delete"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/objects-and-their-supported-calls/create-query-update-delete"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:32.784Z"
---

# Create, query, update, delete

This reference lists all the supported objects and if they support create, query, update, or delete calls.

| Object name | Supported calls |  |  |  |
| --- | --- | --- | --- | --- |
|  | create | query | update | delete |
| Account | Yes | Yes | Yes | Yes |
| AccountingPeriod | Yes | Yes | Yes |  |
| Amendment | Yes | Yes | Yes | Yes only if the amendment has not been invoiced. |
| CommunicationProfile |  | Yes |  |  |
| Contact | Yes | Yes | Yes | Yes |
| Import | Yes | Yes |  |  |
| Invoice |  | Yes | Yes, update of status. | Yes, as of Version 11.0. Status must be set to Draft. To delete a Posted invoice, you must update the status to Draft first prior to deleting. |
| InvoiceAdjustment | Yes, as of version 24.0 | Yes | Yes, as of version 24.0 | Yes, as of version 24.0 |
| InvoiceItem |  | Yes |  |  |
| InvoiceItemAdjustment | Yes, as of version 23.0 | Yes, as of version 23.0 | Yes, as of version 23.0 | Yes, as of version 23.0 |
| InvoicePayment | Yes | Yes |  |  |
| Payment | Yes | Yes | Yes |  |
| PaymentMethod | Yes | Yes | Yes | Yes, but only if it is not set as the default payment method. |
| Product | Yes, as of version 22.0. | Yes | Yes, as of version 16.0. | Yes, as of version 16.0. |
| ProductRatePlan | Yes, as of version 22.0. | Yes | Yes, as of version 16.0. | Yes, as of version 16.0. |
| ProductRatePlanCharge | Yes, as of version 22.0. | Yes | Yes | Yes |
| ProductRatePlanChargeTier | Yes, as of version 22.0. | Yes | Yes, price only. |  |
| RatePlan | Yes | Yes |  |  |
| RatePlanCharge | Yes | Yes | Yes, but only when the charge belongs to a RatePlan that is currently being amended. |  |
| RatePlanChargeTier | Yes | Yes |  |  |
| RatePlanData1 | Not applicable | Not applicable | Not applicable | Not applicable |
| Refund | Yes, as of version 21.0 of the API. | Yes, as of version 21.0 of the API. |  |  |
| Subscription | No. Must create subscriptions using the subscribe() call. | Yes | Yes, but only for either meta-data fields such as Notes, or setting trigger dates. Other fields, such as term length and prices, must be changed with amendments. | Yes, as of version 16.0 of the API. If the subscription has multiple versions (it has been amended), it will delete the current version provided none of the amended charges have been invoiced. |
| SubscriptionData2 | Not applicable | Not applicable | Not applicable | Not applicable |
| TaxationItem | Yes, but only for InvoiceItems that belong to Invoices in Draft status. | Yes | Yes | Yes |
| Usage | Yes | Yes |  | Yes, but only for TaxationItems that are on invoices in draft status. |

[1](#fnsrc_1) RatePlanData and SubscriptionData are special objects for use only by the subscribe call, so the create, query, update, and read calls do not apply to them.
[2](#fnsrc_2) RatePlanData and SubscriptionData are special objects for use only by the subscribe call, so the create, query, update, and read calls do not apply to them.
