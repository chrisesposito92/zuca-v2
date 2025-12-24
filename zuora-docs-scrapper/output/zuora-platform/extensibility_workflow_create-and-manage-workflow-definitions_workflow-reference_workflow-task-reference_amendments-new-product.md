---
title: "Amendments: New Product"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-new-product"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:34.799Z"
---

# Amendments: New Product

This reference describes the Amendments: New Product task.

The NewProduct amendment task adds an existing product to an existing subscription.

This task corresponds to a set of Amendment object APIs in which `Type` is set to `NewProduct`. For details about specific data fields of the object, refer to [Amendment](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment).

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, this task can support to generate credit memos and apply outstanding credit memos and unapplied payments.

## Task settings

-   Subscription.Id - Manually enter a subscription ID or select a data field from the payload to identify the subscription that receives the amendment.

-   Product - Select a product from the auto-populated list of products.

-   RatePlan - Select a rate plan for the product from the auto-populated list of rate plans.

-   Name - Specify a name to identify the amendment.

-   Description - Optionally enter some description.

-   Billing Trigger Dates - See [Order, subscription, and amendment dates](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates) for details.

-   Generate Invoice - Enable if you want the workflow to generate an invoice to bill the customer immediately for the new product.

-   Apply Credit Balance - This option is available only when Generate Invoice is enabled. Enable this option if you want any credit balance on the customer account to be automatically applied to invoices.

-   Process Payment - This option is available only when Generate Invoice is enabled. Enable this option if you want Zuora to collect payment against the invoice. The payment is processed only when AutoPay is enabled.
