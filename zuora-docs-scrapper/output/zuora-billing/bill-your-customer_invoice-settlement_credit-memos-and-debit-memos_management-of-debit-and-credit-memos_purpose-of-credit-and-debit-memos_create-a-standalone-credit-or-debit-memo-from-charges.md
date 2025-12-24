---
title: "Create a standalone credit or debit memo from charges"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos/create-a-standalone-credit-or-debit-memo-from-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:41.798Z"
---

# Create a standalone credit or debit memo from charges

Learn how to create a memo from charges through the Zuora UI.

To create a memo from a charge through the Zuora REST API, see [POST Credit Memo from Charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromPrpc/) and [POST Debit Memo from Charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromPrpc/).

1.  Navigate to Billing > Credit and Debit Memos in the left-hand navigation section.
2.  Select between the Credit Memos or Debit Memos tab to create a credit memo or debit memo.

    -   To create a credit memo, click Create Credit Memo in the Credit Memos tab, and select Standalone.

    -   To create a debit memo, click Create Debit Memo in the Debit Memos tab, and select Standalone.


3.  Specify the following information in the Basic Information section:
    1.  From the Account list, select a customer account.
    2.  From the Invoice list, select Standalone.
    3.  In the Memo Date field, specify the date when the memo takes effect. The default value is today's date. Note that the memo date must not be in the closed accounting periods.
    4.  From the Reason Code list, select the reason for the memo.
    5.  (Credit memo only): Select the Exclude from auto apply rules checkbox to unapply the payment run processing rule to this memo. The payment run processing rule is to auto-apply the unapplied credit memos on invoices and debit memos during the payment runs.
    6.  (Debit memo only): Select the Auto-Pay checkbox to automatically pick up debit memos for processing in the corresponding payment run. By default, the check box is selected.
    7.  (Optional): In the Comments field, enter comments related to this adjustment.
4.  In the Charge Line Items area, click Additional Charge.
5.  In the dialog that is displayed, specify credit or debit charges.
    1.  From the Product list, select the product that the charge belongs to.
    2.  From the Rate Plan list, select the product rate plan that the charge belongs to.
    3.  In the row of the charge that you want to create a memo from, click Select. The Edit Charge dialog is displayed. In the Charge Name column, click the name of the charge that you want to create a memo from.

        Note: Zuora supports the creation of credit and debit memos from any type of product rate plan charges, except for discount charges.

6.  In the Basic Information section, specify the following fields:
    1.  In the Comment column, enter comments for the memo.
    2.  (Credit memo only): Specify the amount you want to offset as credit in the Credit Amount column.
    3.  (Debit memo only): Specify the amount you want to debit in the Debit Amount column.
    4.  Specify the Service Start Date and Service End Date for the credit or debit memo.
    5.  Enter the Description field.
7.  (Optional) In the Finance Information section, specify values in the following drop-down lists. The displayed values are inherited from the charge, and you can change these values for your credit and debit memos.

    -   Recognized Revenue

    -   Deferred Revenue

    -   On-Account

    -   Revenue Recognition Rule ​​​


8.  If you want to add more charge items for this memo, repeat Steps 4 to 7.
9.  Click Save.
    The memo is then saved in the draft status.
