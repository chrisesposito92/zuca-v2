---
title: "Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/payment-payment-run/task-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:26.046Z"
---

# Task settings

Use this reference to understand the task settings of the Payment: Payment Run task.

## Payment Run Action

-   Create - Create a payment run for one or multiple accounts.

-   Update - Update a pending payment run for one or multiple accounts.

-   Get - Get the information for a particular payment run.

-   Delete - Delete a payment run that is in Canceled or Error status.


## Common options for Create and Update actions

-   Mode

    -   Single Account \- Create or update a payment run for a single account.

    -   Ad-hoc - Create or update a payment run for a particular batch or all batches of accounts.

    -   Use File Data - Create a payment run by using the data in a file that you selected.


-   Account Id - The ID of the account that you want to create or update payment runs for. This field is only available in the Single Account mode.

-   Run Date - The date and time when the scheduled payment run is to be executed, in `yyyy-mm-dd hh:mm:ss` format. The minutes and seconds will be ignored.

-   Target Date - This date is used to determine which invoices to be included in the payment run.

-   Apply Credit Balance - Whether to apply the credit balance to the invoice before attempting payment.

-   Auto Apply CreditMemo - Whether to automatically apply a posted credit memo to one or more receivables in the payment run. This option only works for tenants that have enabled [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview).

-   Auto Apply Unapplied Payment - Whether to automatically apply unapplied payments to one or more invoices in the payment run. This option only works for tenants that have enabled [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview).

-   Collect Payment - Whether to process electronic payments during the execution of payment runs.

-   Consolidated Payment - Whether to process a single payment for all invoices that are due on an account.

-   Process Payment with closed PM - Whether to process payments if the default payment method is closed.


## Options for filtering accounts in the Ad-hoc mode of Create and Update actions

-   Batch - The batch of accounts that you want to create or update payment runs for. This field is only available in the Ad-hoc mode.

-   Bill Cycle Day - Only accounts with the specified bill cycle day will be included in the payment run.

-   Currency - Only accounts with the specified currency will be included in the payment run.

-   Payment Gateway Id - Only accounts with the specified payment gateway will be included in the payment run.

-   Billing Run Id - Only invoices in the specified billing run will be included in the payment run.


## Options only available for the Use File Data mode of Create action

Input File - A CSV or JSON file containing the records of accounts and billing documents that will be collected and processed by a payment run task. A maximum of 50,000 records is allowed in a file.

You can select a CSV or JSON file with the following headers. `accountId` is required and others are optional.

-   `accountId` (required)

-   `amount`

-   `comment`

-   `documentId`

-   `documentType`

-   `paymentGatewayId`

-   `paymentMethodId`


You can generate such a CSV or JSON file through the [Retrieve: Data Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-data-query) task.

## Options only available for Update, Get or Delete actions

-   Payment Run Id - The unique ID of the payment run that you want to retrieve information for or delete.
