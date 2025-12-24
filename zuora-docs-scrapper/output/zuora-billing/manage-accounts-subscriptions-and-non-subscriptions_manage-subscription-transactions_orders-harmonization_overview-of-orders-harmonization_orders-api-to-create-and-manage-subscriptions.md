---
title: "Orders API to create and manage subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization/orders-api-to-create-and-manage-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:19.247Z"
---

# Orders API to create and manage subscriptions

This article explains how to use the Orders API to create and manage subscriptions, and understand the differences between the Orders API and the Subscribe and Amend APIs.

After enabling Orders Harmonization, you can use the `Orders` API to create and manage subscriptions.

See the following table for an API mapping between using `Subscribe and Amend` API and using `Orders` API for your common use cases:
| Subscribe and Amend APIs | Orders API |
| --- | --- |
| Create a subscriptionPreviously, you would use one of the following API functions:Create subscriptionSubscribeCreate accountsubscribe() | Use the Create order operation instead.See Create a Subscription . |
| Renew a subscriptionPreviously, you would use one of the following API functions:Renew subscriptionAmendamend() | Use the Create order operation instead.See Renew a Subscription . |
| Cancel a subscriptionPreviously, you would use one of the following API functions:Cancel subscriptionAmendamend() | Use the Create order operation instead.See Cancel a Subscription . |
| Add, update, or remove products in a subscriptionChange the terms and conditions of a subscriptionTransfer ownership of a subscriptionPreviously, you would use one of the following API functions:Update subscriptionAmendamend() | Use the Create order operation instead.See Orders Tutorials . |
| Suspend and resume a subscriptionPreviously, you would use the following API functions:Suspend subscriptionResume subscription | Use the Create order operation instead.See Orders Tutorials . |
| Update custom fields of a subscriptionPreviously, you would use one of the following API functions:Update subscriptionAmendupdate() | Use the Update subscription custom fields operation instead. |
| Preview a subscriptionPreviously, you would use the Preview subscription operation. | Use the Preview order operation instead. |

In addition, there are behavior differences between `Subscribe and Amend` APIs, and the `Orders` API. See the following table for a behavior difference summary:

| Subscribe and Amend APIs | Orders API |
| --- | --- |
| When creating a subscription using the Create a subscription operation, the runBilling field defaults to true. | When creating a subscription using the Create an order operation, the runBilling field defaults to false. |
| When adding a product to a subscription, the billCycleType field of the rate plan charge can be one of the following values:DefaultFromCustomer – the bill cycle day (BCD) of the accountSubscriptionStartDay – the subscription start dateChargeTriggerDay – the first segment start dateTermStartDay – the current term start dateTermEndDay – the current term end dateSpecificDayOfMonthSpecificDayOfWeekThe system always populates the billCycleDay field of the charge based on the billCycleType value. For example, if billingCycleType is set to DefaultFromCustomer, the system checks the BCD on the account and populates the account's BCD value to the rate plan charge. Hence, billCycelDay of the rate plan charge cannot be null. | When adding a product to a subscription, the billCycleType field of the rate plan charge can be one of the following values:DefaultFromCustomer – the bill cycle day (BCD) of the accountSubscriptionStartDay – the subscription start dateChargeTriggerDay – the first segment start dateTermStartDay – the current term start dateTermEndDay – the current term end dateSpecificDayOfMonthSpecificDayOfWeekThe system populates the billCycleDay field of the charge only if billingCycleType is set to SpecificDayOfMonth. In other cases, the system does not populate the BCD on the rate plan charge.Hence, billCycleDay of the rate plan charge can be null. |
