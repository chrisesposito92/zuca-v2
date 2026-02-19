---
title: "Amendments: Cancel - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-cancel/amendments-cancel---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:22.240Z"
---

# Amendments: Cancel - Task settings

Use this reference to understand the task settings of the Amendments: Cancel task.

-   Subscription.Id - Manually enter a subscription ID, or select Subscription.Id or Subscription.Number to identify the subscription that you would like to cancel.


## SOAP

-   Name - Specify a name to identify the amendment.

-   Description - Optionally enter some description.

-   Cancellation Date - The date when the subscription cancellation takes effect.

-   Contract Effective Date - The date when the customer notifies you that they want to cancel the subscription.

-   Generate Invoice - Enable if you want the workflow to generate an invoice immediately for the subscription.

-   Apply Credit Balance - This option is available only when Generate Invoice is enabled. Enable this option if you want any credit balance on the customer account to be automatically applied to invoices.

-   Process Payment - This option is available only when Generate Invoice is enabled. Enable this option if you want Zuora to collect payment against the invoice. The payment is processed only when AutoPay is enabled.


## REST

-   Cancellation Policy

    -   EndOfCurrentTerm - The subscription is canceled upon the end of the current term. The billing continues through the end of the current term for the applicable subscription.

    -   EndOfLastInvoicePeriod - The subscription is canceled on the last day of the last invoice period.

    -   SpecificDate - The subscription is canceled on a specific date.
