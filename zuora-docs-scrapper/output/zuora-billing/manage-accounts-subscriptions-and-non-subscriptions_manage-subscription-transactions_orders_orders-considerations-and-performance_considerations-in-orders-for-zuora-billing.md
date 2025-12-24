---
title: "Considerations in Orders for Zuora Billing"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/considerations-in-orders-for-zuora-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:09.063Z"
---

# Considerations in Orders for Zuora Billing

This article outlines the known limitations in Orders (Orders Harmonization) for Zuora Billing, including restrictions on order actions, discounts, pending subscriptions, and more.

The table below describes known limitations in Orders (Orders Harmonization) for Zuora Billing. The Orders (Orders Harmonization) feature shares the same limits as Order Metrics and extends to a few more limits.

| Feature | Limitations |
| --- | --- |
| Order Actions | You can change the term start date of a renewed subscription through a T&Cs order action. However, when changing it to an earlier date, this date must not be earlier than the term start date of the current term before this T&Cs. Before you can change the term start date of a renewed subscription, you must contact Zuora Global Support to enable this functionality.With the Single Transaction Subscribe and Amend functionality enabled, when you suspend a subscription in Subscribe/Amend, you cannot resume it in Orders, and vise verse, when you suspend a subscription in Orders, you cannot resume it in Subscribe/Amend. |
| Discounts | Discounts are supported at the account, subscription, and rate plan levels. However, discount metrics are calculated for subscription and rate plan level discounts only. Discount metrics are not calculated for account level discounts.You can perform the following actions for subscriptions with account level discounts, however no metrics will be generated:Create SubscriptionAdd ProductUpdateRemoveT&CsCancellationRenewSuspend / ResumeAccount level discounts are not supported in the Preview order or Get order metrics for evergreen subscription operation.Update of a fixed amount discount is not supported. |
| Pending Subscriptions and Pending Amendments | Creation of pending subscriptions is supported via API and UI.Migration of pending subscriptions and amendments are not supported in the current amendment migration job to orders. However, since the Subscribe/Amend APIs are now available on Orders tenants, you can still activate these pending subscriptions and amendments via the Subscribe/Amend APIs.Pending order actions/amendments are supported via API and UI with limitations . |
| Invoice Processing Scope | You cannot currently set the invoice processing scope of an Order. |
| Prepayment | Prepayment is a deprecated feature of Zuora and is not supported in Orders. |
| MRR Trend Export | MRR Trend Export is not supported with Orders. |
| MRR (Contracted) Changes Export | MRR (Contracted) Changes Export is not supported with Orders. |
| For Usage Charges, Amend or Cancel a Subscription Before the Last Invoice Date | If you have usage charges, you cannot perform the following order actions with an effective date before the last invoice date:Create a "Cancel a Subscription" order action to cancel a subscription that has a usage charge.Create a "Remove a Product" order action to remove a product that has a usage charge.Create an "Update a Product" order action to update a usage charge.However, you can create an "Add a Product" order action to add a product that has a usage charge before the last invoice date. |
| Orders Metrics for Usage Charges | Order Metrics will not be generated for usage charges. |
| Managing subscription product features | The Orders UI does not support the Managing subscription product features function; only the Orders API operations support it.The Subscribe and Amend UI in Orders Harmonization environment does not have the preceding limit. |

Zuora Billing supports only BMP encoding in the Unicode Standard . When submitting data through the Zuora UI or API, you must use the characters supported in BMP.

See the REST API Reference for how to programmatically implement orders in Zuora.
