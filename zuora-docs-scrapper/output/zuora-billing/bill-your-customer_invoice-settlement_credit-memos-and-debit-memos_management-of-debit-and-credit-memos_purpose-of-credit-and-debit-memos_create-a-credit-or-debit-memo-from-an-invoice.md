---
title: "Create a credit or debit memo from an invoice"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos/create-a-credit-or-debit-memo-from-an-invoice"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:39.412Z"
---

# Create a credit or debit memo from an invoice

Learn how to create a memo from an invoice through the Zuora UI.

To create a memo from an invoice through the Zuora REST API, see [POST Credit Memo from Invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromInvoice/) and [POST Debit Memo from Invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromInvoice/).

Zero-amount memo items are supported in the following scenarios:

-   If you want to correct taxation items only for an invoice, you can set the memo item amount to zero, but the taxation item amount to non-zero.

-   If you want to correct personal data in an invoice, you can set the memo item amount to zero to create a zero-amount credit memo from an invoice.


1.  Navigate to Billing > Credit and Debit Memos in the navigation section. The Credit and Debit Memos page opens.
2.  Select between the Credit Memos or Debit Memos tab to create a credit memo or debit memo.

    -   To create a credit memo, click Create Credit Memo in the Credit Memos tab, and select From Invoice.

    -   To create a debit memo, click Create Debit Memo in the Debit Memos tab, and select From Invoice.


3.  Specify the following information in the Basic Information section:
    1.  In the Memo Type area, select Credit or Debit.
    2.  From the Customer Account list, select a customer account.
    3.  From the Invoice list, select an invoice you want to adjust. The invoice items of this invoice are displayed under the Basic Information section.
    4.  In the Memo Date field, specify the date when the memo takes effect. The default value is today's date. Note that the memo date must not be earlier than the invoice date or in the closed accounting periods.
    5.  From the Reason Code list, select the reason for the memo.
    6.  If you want Zuora to calculate taxation automatically in the memo, select the Tax Auto Calculation check box. By default, this check box is selected.
    7.  (Credit memo only): For the Auto Apply section, specify the following information:

        -   Apply to this invoice upon posting: Select this checkbox to auto-apply the memo to pay the associated invoice after the memo is posted. The associated invoice is the one you selected from the Invoice list.

        -   Exclude from auto apply rules: Select this checkbox to unapply the payment run processing rule to this memo. The payment run processing rule is to auto-apply the unapplied credit memos on invoices and debit memos during the payment runs.


    8.  (Debit memo only): Select the Auto-Pay checkbox to automatically pick up debit memos for processing in the corresponding payment run. By default, the check box is selected.
    9.  (Optional): In the Comments field, enter the comments for this memo.
4.  In the invoice item rows you want to credit or debit, specify the following fields:
    1.  In the Invoice Item column, specify the name of the credit item or debit item.
    2.  (Optional): In the Description column, enter a description for the adjustment.
    3.  In the Tax-Included column, select the checkbox to specify the tax mode for tax calculation in this memo . Note that the checkbox in the Tax-Included column is available and can be selected only if the Tax Auto Calculation check box is selected. By default, the check box is not selected, indicating that the credit amount does not include tax.
    4.  (Credit memo only): Specify the amount you want to offset as credit in the Credit Amount column. The calculation for Available to credit is: Available to Credit = Invoice Amount - Posted Credit Memo Amount from this invoice. The value specified in the Credit Amount column cannot be greater than that displayed in the Available to Credit column. Note that the Available to Credit column is displayed only if you set the "Available to credit validation for credit memos " billing rule to Header and item-only.
    5.  (Debit memo only): Specify the amount you want to debit in the Debit Amount column.
    6.  If you manually added taxes to the invoice earlier, click the tax amount. Specify the adjusted amount for each tax item in the Credit Amount or Debit Amount column.
    7.  (Optional) To disable the text fields in an invoice item row, clear the checkbox in this row. By default, all checkboxes are selected. Note that you can select and deselect all invoice items by selecting and clearing the checkbox next to Invoice Item.
5.  Click Save.
    The memo is then saved in the draft status.
