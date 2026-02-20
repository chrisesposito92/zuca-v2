---
title: "Amendments: Suspend - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-suspend/amendments-suspend---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-20T17:50:18.548Z"
---

# Amendments: Suspend - Task settings

Use this reference to understand the task settings of the Amendments: Suspend task.

-   Subscription.Id - Manually enter a subscription ID or select a data field from the payload to identify the subscription that you would like to suspend.


## SOAP

-   Name - Specify a name to identify the amendment.

-   Description - Optionally enter some description.

-   Suspend Date - The date when subscription suspension takes effect.

-   Contract Effective Date - The date when the customer notifies you that they want to suspend their subscription.

-   Generate Invoice - Enable if you want the workflow to generate an invoice immediately for the subscription.

-   Apply Credit Balance - This option is available only when Generate Invoice is enabled. Enable this option if you want any credit balance on the customer account to be automatically applied to invoices.

-   Process Payment - This option is available only when Generate Invoice is enabled. Enable this option if you want Zuora to collect payment against the invoice. The payment is processed only when AutoPay is enabled.


## REST

-   Suspend Policy

    -   EndOfLastInvoicePeriod - The subscription is suspended at the end of the last invoice period.

    -   SpecificDate - The subscription is suspended on a specific date.

    -   EndOfLastInvoicePeriod - The subscription is suspended after the specified period based on today's date. Specify the length of the period and select one of the following period types: Day(s), Week(s), Month(s), and Year(s).

-   Extend Terms - Enable if you want Zuora to automatically extend the subscription term.


## Custom fields

If needed, specify new values for the custom fields in the New Subscription Custom Fields section.
