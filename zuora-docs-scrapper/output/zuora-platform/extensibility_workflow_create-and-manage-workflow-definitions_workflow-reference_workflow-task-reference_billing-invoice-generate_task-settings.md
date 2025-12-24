---
title: "Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-invoice-generate/task-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:00.427Z"
---

# Task settings

Use this reference to understand the task settings of the Billing: Invoice Generate task.

## Setup

-   Account.Id - Manually enter an ID or select a data field to identify the account.

-   Call Type - The API call type to generate invoices. If you need to generate multiple invoices, select REST. The SOAP API call does not support generating more than one invoice.
-   Invoice Date - The date when the billing document is generated. This field is specific to the SOAP API call.

-   Target Date - The date that is used to determine what charges will be invoiced. All charges that are to be billed on this date or prior will be included in this invoice.

-   Effective Date - The date on which to generate the invoices. This field is specific to the REST API call.

-   Subscription IDs - The IDs of the subscriptions that you want to create the billing documents for. Each value must be the ID of the latest version of an active subscription. This field is specific to the REST API call.

-   Auto Post - Whether to automatically post the invoices after the draft invoices are generated. If an error occurs during posting invoices, the draft invoices are not generated too. This field is specific to the REST API call.

-   Auto Renew - Whether to automatically renew the subscriptions. This field is specific to the REST API call.

-   Include OneTime Charges - Select to include one-time charges in the invoice.

-   Include Recurring Charges - Select to include recurring charges in the invoice.

-   Include Usage Charges - Select to include usage charges in the invoice.


## Validation

-   Ignore Blank Invoices - Enabled by default. APIs for generating invoices will throw errors if an account has no charges to be invoiced. If this option is enabled, the task will ignore such errors.
