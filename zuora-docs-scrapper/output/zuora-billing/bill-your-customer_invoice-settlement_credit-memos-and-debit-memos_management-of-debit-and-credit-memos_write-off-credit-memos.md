---
title: "Write off credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/write-off-credit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:53.526Z"
---

# Write off credit memos

Learn how to write off credit memos through the Zuora UI.

You can write off credit memos if the credit memos are fully unapplied.

To write off a credit memo through the Zuora REST API, see [Write off a credit memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_WriteOffCreditMemo/).

1.  Navigate to Billing > Credit and Debit Memos in the left-hand navigation section.
2.  On the Credit and Debit Memos page, click the credit memo that you want to write off.
3.  On the credit memo details page, click more > Write Off Credit Memo.
4.  In the Write Off Credit Memo dialog, specify the following information:

    -   In the Memo Date field, specify the effective date of creating the debit memo.
        Note: When writing off a credit memo, a debit memo is automatically created, and then the credit memo to be written off is fully applied to the debit memo. This field is the effective date of creating the debit memo.

    -   In the Reason Code field, select a predefined reason code from the drop-down list. These reason codes are defined in Payments Settings \> Define Reason Codes.

    -   In the Comments field, write down any descriptions or notes regarding this write-off operation.


5.  Click Save to save the configurations.
