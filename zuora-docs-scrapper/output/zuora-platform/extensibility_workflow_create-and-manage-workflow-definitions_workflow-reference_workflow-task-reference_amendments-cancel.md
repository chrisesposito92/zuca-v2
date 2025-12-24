---
title: "Amendments: Cancel"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-cancel"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:47.417Z"
---

# Amendments: Cancel

The cancel task cancels an active subscription. The task provides two groups of options based on the set of Zuora APIs being used (SOAP or REST).

For details about canceling a subscription, see [Cancellations](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-cancelation/canceling-a-subscription). To learn more about specific data fields, see [Amendment object](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment) for SOAP and [API Reference](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelSubscription/) for REST.

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, this task can support to generate credit memos and apply outstanding credit memos and unapplied payments.

Note:

Zuora recommends not using the Cancel Task in a workflow if your tenant has the Orders feature enabled. The Cancel Task only works when your tenant is on the Subscription model.

For example, While creating a Cancel Task, you fill in the subscription information, date type of information etc. and it would generate an API call to cancel a subscription. In cases where “Orders” is enabled, the Cancel Task will fail with the message "Order Date is required" while there is no option to enter an Order Date.

If the Orders feature is enabled in your tenant, use a callout with a PUT method. See [Notifications: Callout](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout) for more information.
