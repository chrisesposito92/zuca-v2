---
title: "Billing: Reverse Invoice"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-reverse-invoice"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:05.426Z"
---

# Billing: Reverse Invoice

This reference describes the Billing: Reverse Invoice task.

Note:

This task is only available if [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled in your tenant.

The Reverse Invoice task reverses an invoice for correcting a posted invoice and re-billing. This task simplifies the invoice reversal process by automatically completing multiple operations in a single task, including generating a credit memo, applying the credit memo to the incorrect voice, resetting the charge through date, and flagging the incorrect invoice as reversed.

For more information about invoice reversal, see [Invoice reversal](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal).

## Task settings

-   Apply Effective Date - The date when the credit memo was applied to the invoice that will be reversed. The effective date must be later than or equal to the memo date.

-   Memo Date - The date when the credit memo was created. The memo date must be later than or equal to the invoice date.


## Restrictions

An invoice cannot be reversed under certain conditions. Refer to the Restrictions section of [Invoice reversal](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal) for details.
