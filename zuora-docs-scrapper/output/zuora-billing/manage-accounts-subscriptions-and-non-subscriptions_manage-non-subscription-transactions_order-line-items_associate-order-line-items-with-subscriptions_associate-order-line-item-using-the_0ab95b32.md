---
title: "Fields required for creating a subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/associate-order-line-items-with-subscriptions/associate-order-line-item-using-the-zuora-ui/fields-required-for-creating-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:48.012Z"
---

# Fields required for creating a subscription

This topic lists the fields required for creating a subscripton.

If you specify the same Unique Key value when creating the subscription and order line item, the subscription number is automatically synced to the Subscription Number field of the order line item after the order is activated.

If you do not associate a subscription with an order line item before activating the order, you still can edit an existing order line item from the order details page of the complete order and associate it with an existing subscription by specifying the subscription number or subscription name in the Subscription Number field on the order line item.

The following table lists the descriptions of all fields for creating a new subscription:

| Section | Field name | Description |
| --- | --- | --- |
| Subscription Overview | Subscription owner | Required field. The account owns the subscription. After selecting the Account Name or Account Number, type part of the name or number in the SUBSCRIPTION OWNER field. |
| Type | Required field. The subscription type. Specify the value as Termed or Evergreen . |  |
|  | Unique Key | A unique key to associate a new subscription with a new order line item in the same order during order creation. |
| Terms and Conditions | Term start date | Required field. Displayed for both termed and evergreen subscription. The term start date. |
| Initial term | Displayed for the termed subscription. The Initial term and Period type together indicate the length of the period for the initial subscription term. |  |
| Period type |  |  |
| Renewal setting | Displayed for the termed subscription. The value can be Renew with specific term or Renew to evergreen . |  |
| Renewal term | Displayed for the termed subscription. The Renewal term and Period type together indicate the length of the periods your subscription will renew after the initial term ends. |  |
| Period type |  |  |
| Auto renew | Displayed for the termed subscription. Specify whether enable auto-renewal of the subscription. |  |
| Invoice the subscription separately | Specify whether to create independent invoices per subscription . |  |
| Billing and Payment | Bill to contact | Select the account to be invoiced. You can click the View Detail link to view detailed information about the account. |
| Payment term | The payment term for the subscription. You can click the View Detail link to view detailed information about the payment term. |  |
| Ramp | Ramp enabled | Specify whether to have the Ramp settings. |
| Interval duration | Displayed if the Ramp enabled field is checked. Specify the Ramp intervals (charge segments). |  |
| Quote Fields | Quote Number | The unique identifier of the Quote. |
|  | Quote Type | The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew , or Cancel . |
|  | Quote Business Type | The specific identifier for the type of business transaction the Quote represents such as New, Upsell , Downsell, Renewal, or Churn . |
|  | Opportunity Name | The unique identifier of the Opportunity. |
|  | Opportunity Close Date | The closing date of the Opportunity. |
| Trigger Dates | Contract Effective | The contract effective date . |
| Service Activation | The service activation date . |  |
| Customer Acceptance | The customer acceptance date . |  |
