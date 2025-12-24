---
title: "Unpost credit and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/unpost-credit-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:52.146Z"
---

# Unpost credit and debit memos

Learn how to unpost credit and debit memos

You can unpost credit and debit memos that are in Posted status. You can unpost credit and debit memos only if you have the Billing user permission. See Billing Roles for more information about Billing user permissions.

If a credit memo has been applied or refunded, you are not allowed to unpost it. If any credit memo or payment has been applied to a debit memo, you are not allowed to unpost the debit memo.

To unpost a credit or debit memo from the REST API, see [PUT Unpost credit memo](https://www.zuora.com/developer/api-references/api/operation/PUT_UnpostCreditMemo) or [PUT Unpost debit memo](https://www.zuora.com/developer/api-references/api/operation/PUT_UnpostDebitMemo).

To unpost a credit or debit memo from the Zuora UI, complete the following steps.

1.  Navigate to Billing > Credit and Debit Memos in the navigation section.
2.  On the Credit and Debit Memos page, click the memo number that you want to unpost in the Credit Memos or Debit Memos tab. The memo detail page opens.
3.  Click the three vertical dots icon to display more applicable actions, then click C ancel Post .
4.  Click Yes to confirm the action.

    After a credit or debit memo is unposted, its status becomes Draft.
