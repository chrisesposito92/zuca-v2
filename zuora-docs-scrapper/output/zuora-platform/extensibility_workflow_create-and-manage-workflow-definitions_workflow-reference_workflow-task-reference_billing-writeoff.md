---
title: "Billing: WriteOff"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-writeoff"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:02.733Z"
---

# Billing: WriteOff

This reference describes the Billing: WriteOff task.

The write off task creates a group of invoice item adjustments to write off an invoice if [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is not enabled. After writing off an invoice, the task outputs related invoice item data (of InvoiceItem object) and appends the data to the payload. However, if Invoice Settlement is enabled, the task creates credit memos but not invoice item adjustments.

## Task settings

General settings applicable for both Invoice Item Adjustment and Credit Memo:

-   Adjustment Date - The date when the invoice item adjustments are applied.

-   Reason Code - Optional. A code identifying the reason for the adjustments. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.

-   Reference Id - Optional. You can enter an ID or code that helps identify the adjustments or the reason for the adjustments. It could be a number in an external system.

-   Comment \- Enter additional information about the adjustments.

-   Custom Fields - The custom fields to be added to the object.
    Note: Refresh the cache if the custom fields that have been defined don't show in the drop-down list. To refresh the cache, navigate to the Workflows page, click .

    -   If Invoice Settlement is not enabled on your tenant, select the custom fields that are defined for the Invoice Item Adjustment object.

    -   If Invoice Settlement is enabled, select the custom fields that are defined for the Credit Memo object.


Settings that are specific to Invoice Item Adjustment:

-   Adjust Taxation Items - Select this option if you need to adjust taxation items.

-   Single Transaction - Select this option to process all related invoice item adjustments in one transaction. This option is selected by default. If an invoice contains both positive and negative charges, writing off the charges separately could result in errors due to an invoice-balance change restriction. Selecting this option can avoid the issue.
    Note: If your tenant is integrated with Avalara tax engine, do not select this option. A single transaction of multiple invoice item adjustments may cause timeout errors.

-   Recognized Revenue Account for InvoiceItem - The invoice-item revenue amount that has been recognized.

-   Deferred Revenue Amount for InvoiceItem - The invoice-item revenue amount that has been deferred.

-   Recognized Revenue Account for TaxItem - The tax-item revenue amount that has been recognized. Available only when Adjust Taxation Items is selected.

-   Deferred Revenue Amount for TaxItem - The tax-item revenue amount that has been deferred. Available only when Adjust Taxation Items is selected.

-   Writeoff Positive Charges Only - Select this option to write off only positive charges in the adjustments.
