---
title: "Apply credit memos and debit memos through Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/application-of-credit-memos-to-invoices-and-debit-memos/apply-credit-memos-and-debit-memos-through-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:57.139Z"
---

# Apply credit memos and debit memos through Zuora UI

Learn how to apply credit memos to invoices and debit memos through the Zuora UI.

1.  Navigate to Billing > Credit and Debit Memos in the navigation section.
2.  On the Credit and Debit Memos page, find the target credit memo in the Credit Memos tab.
3.  Locate the row of the target credit memo and click Apply on the right side of the row. The Apply this credit memo page opens.
4.  In the Effective Date field, specify when the application will take effect.
5.  Select the invoices and debit memos to which you want to apply.
6.  For each invoice and debit memo, you can apply the credit memo at item level:
    1.  Click the plus icon (+) next to the document. The items of the invoice or debit memo are displayed.
    2.  Select the items to which you want to apply the credit memo.
    3.  Specify the amount you want to pay for each item in the Credit Applied column. The Balance column shows the total amount you must pay for that item.
7.  Click Apply.
    A table is then displayed at the bottom of this memo page. This table records detailed information about the invoices and debit memos that the memo is applied to.
    To ensure optimal performance of the credit memos page, the UI displays a maximum of 200 line-level items for an invoice. The line items include invoice items and taxation items. When an invoice includes more than 200 line-level items, the individual items will not be displayed in the UI when applying or unapplying a credit memo. You can still apply or unapply credit memo amounts at the header level for an invoice with more than 200 items.

    Note: To apply a credit memo through the Zuora REST API, see [PUT Apply Credit Memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ApplyCreditMemo/).
