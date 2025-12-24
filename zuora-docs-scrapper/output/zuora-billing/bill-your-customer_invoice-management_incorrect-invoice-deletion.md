---
title: "Incorrect invoice deletion"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/incorrect-invoice-deletion"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:43.270Z"
---

# Incorrect invoice deletion

Learn about the responsibilities and restrictions involved in deleting incorrect invoices in Zuora.

Zuora provides flexibility when it comes to managing your billing and payments, and with flexibility comes responsibility. If your tenant is eligible to use the Cancel Posted Invoices feature, it means that users of your tenant (with the applicable user permissions) can unpost invoices. Unposting invoices is not the best practice and should only be done carefully. Deleted invoices cannot be restored. Thus, users should seek approval from their billing manager before performing this operation. Here are some reasons why a billing manager might approve canceling a posted invoice:

-   Tenant Permission: Cancel Posted Billing Document
-   User Permission: Cancel Posted Billing Document. See Creating a Custom User Role for more information.


## Prerequisites

To unpost an invoice, your tenant and the user performing the unposting operation must have the following permissions enabled:

-   A user entered the subscription information incorrectly and the resulting invoice is incorrect. Unpost the invoice to fix the subscription and regenerate the invoice.
-   A user generated an invoice before the usage for the account is uploaded. Unpost the invoice to upload usage, and then regenerate the invoice.

## Restrictions

The following invoice statuses are applicable and different actions can be taken to the invoice depending on its status:

-   Posted : Posted invoices are locked and cannot be edited.
    -   A posted invoice can be unposted (the operation is called Cancel Post), which reverts the invoice to draft status.
    -   Only the latest invoice in a customer account can be unposted.
    -   Invoices with associated payments or adjustments cannot be unposted, unless the associated payment or adjustment is canceled.
-   Draft : Draft invoices can be edited or regenerated. A draft invoice can be posted or canceled.
-   Canceled : Canceled invoices can be deleted, and deleted invoices cannot be restored.

If you have the Invoice Settlement feature enabled, the following statuses are applicable:

Posted

-   Invoices with associated credit memos or debit memos cannot be unposted. If a credit memo is applied to an invoice, you must fully unapply the credit memo from the invoice to unpost the invoice.
-   If a payment is applied to an invoice, you must fully unapply the payment from the invoice to unpost the invoice.

Draft

-   Invoices with associated credit memos or debit memos cannot be unposted.

## Error prevention

Deleting posted invoices should be a rare necessity. We suggest building a process around understanding the reason for invoice errors to prevent their recurrence. In the event this is needed, make sure your records downstream are also updated to reflect the unposting.
