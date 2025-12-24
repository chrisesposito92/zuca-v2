---
title: "Order Actions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/single-version-subscription/overview-of-single-version-subscription/order-actions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:26.725Z"
---

# Order Actions

This topic outlines various order actions such as creating, updating, and canceling subscriptions, along with their respective change histories and implications.

| Order action | Change history displayed |
| --- | --- |
| Create Subscription | Create Subscription: Subscription start date and end date.Add Product: Product rate plans and charges, including the quantity and price of regular charges and the fixed amount or percentage of the discount charges. |
| Add Product | Add Product: Product rate plans and charges, including the quantity and price of regular charges and the fixed amount or percentage of the discount charges. |
| Update Product | Update Product: Subscription rate plans and charges, including the updated quantity and price of regular charges and the updated fixed amount or percentage of the discount charges. |
| Remove Product | Remove Product: Removed subscription rate plan name. |
| Terms And Conditions | Terms And Conditions changed: The changes in the following settings:Auto RenewRenewal settings: renew to Evergreen or a specific termTerm: new term start date and end date |
| Suspend | Suspend Subscription: The date on which the subscription is suspended. |
| Resume | Resume Subscription: The date on which the subscription is resumed. |
| Renewal | Renew Subscription:For a subscription renewed to an evergreen subscription, displays the new subscription term start date and the evergreen subscription type.For a subscription renewed to a specific date, displays the new subscription term start date and end date. |
| Owner Transfer | Owner Transfer:If the invoice owner account is transferred, displays the new invoice owner account.If the subscription owner account is transferred, displays the new subscription owner account. |
| Cancelation | Cancel Subscription: The date on which the subscription is canceled. |
| RevertNote: This order action is only available to single version subscriptions | If you revert order O-00000637. Order O-00000638 is automatically generated, including the Revert Order order action. The order O-00000637 is a reverted order, and the order O-00000638 is a revert order.Information about reverted order O-00000637 and revert order O-00000638 are both displayed:Order has been reverted on: Displays information for the reverted order O-00000637, that is, the date on which this order is reverted.Reverted Order: Displays information for revert order O-00000638, that is, the order number of the associated reverted order O-00000637.For more information, see Revert orders . |
| Change Plan | Only available in API. For more information, see Subscription Change History . |

Note:

Regardless of the order action types, the charge tier level change is not available in UI and API.
