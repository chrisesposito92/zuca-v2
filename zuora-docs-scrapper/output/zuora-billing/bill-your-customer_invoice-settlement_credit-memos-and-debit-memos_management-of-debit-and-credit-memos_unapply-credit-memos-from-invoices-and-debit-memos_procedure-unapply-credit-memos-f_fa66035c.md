---
title: "Procedure: Unapply credit memos from invoices and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/unapply-credit-memos-from-invoices-and-debit-memos/procedure-unapply-credit-memos-from-invoices-and-debit-memos"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:20.400Z"
---

# Procedure: Unapply credit memos from invoices and debit memos

Steps for unapplying credit memos from invoices and debit memos

To unapply a credit memo through the Zuora REST API, see [PUT Unapply Credit Memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_UnapplyCreditMemo/).

To unapply a credit memo through the Zuora UI, complete the following steps.

1.  Navigate to Billing > Credit and Debit Memos in the left-hand navigation.
2.  On the Credit and Debit Memos page, click the target memo number in the Credit Memo tab. The credit memo detail page opens.
3.  Click the more actions icon on the right, and then click Unapply This Credit Memo.
4.  In the Effective Date field, specify when the unapply operation takes effect. The default value of the effective date is latest credit memo application's effective date.

    Note:

    The following validation takes place at the system level on the effective date:

    The effective date fed by the customer should be greater than or equal to the maximum value of Refund application effective date and Credit Memo application effective date.

5.  If you want to unapply all the amount of this memo from the invoices and debit memos, select the Unapply from all check box.
6.  In the Apply Credit Memo section, select the invoices and debit memos you want to unapply.
7.  For each invoice and debit memo, you can unapply the credit memo in item level:
    1.  Click the plus icon (+) next to the document. The items of the invoice or debit memo are displayed.
    2.  Select the items you want to unapply.
    3.  Specify the amount you want to unapply for each item in the Amount to Unapply column.
8.  Click Unapply.

    Note:

    To ensure optimal performance of the credit memos page, the UI displays a maximum of 200 line-level items for an invoice. The line items include invoice items and taxation items. When an invoice includes more than 200 line-level items, the individual items will not be displayed in the UI when applying or unapplying a credit memo. You can still apply or unapply credit memo amounts at the header level for an invoice with more than 200 items.
