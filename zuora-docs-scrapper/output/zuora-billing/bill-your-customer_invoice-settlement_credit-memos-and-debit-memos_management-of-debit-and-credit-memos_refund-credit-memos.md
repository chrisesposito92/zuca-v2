---
title: "Refund credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/refund-credit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:40.307Z"
---

# Refund credit memos

Learn how to issue full or partial refunds for credit memos, configure refund rules, and understand the implications of refund dates.

You can issue full or partial refunds for posted credit memos to your customers only if you have appropriate user permission.

After a credit memo is fully refunded, it doesn’t contain any credit memo part.

You can configure an application rule to determine how to refund the credit memos to your customers.

For steps on how to refund credit memos, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/refund-credit-memos/refund-credit-memo---procedure).

To know how to refund a credit memo through the Zuora REST API, see [POST Refund Credit Memo](https://developer.zuora.com/v1-api-reference/api/operation/POST_RefundCreditMemo/).

## Notes

When you refund a credit memo, the refund date may not equal to the RefundApplication.EffectiveDate and the RefundApplicationItem.EffectiveDate.

The RefundApplication.EffectiveDate and RefundApplicationItem.EffectiveDate will equal to or later than the effective date of the last apply or unapply action on the credit memo.

For example, you refund a credit memo on 3/29/2021, and the refund date is 3/29/2021. But if an apply or unapply action is performed on the credit memo and its effective date is 3/30/2021, then the RefundApplication.EffectiveDate and the RefundApplicationItem.EffectiveDate will be 3/30/2021.
