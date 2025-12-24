---
title: "Refund credit memo - Procedure"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/refund-credit-memos/refund-credit-memo---procedure"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:43.190Z"
---

# Refund credit memo - Procedure

Learn how to refund a credit memo through the Zuora UI.

1.  Navigate to Billing > Credit and Debit Memos in the navigation section.
2.  On the Credit and Debit Memos page, click the credit memo that you want to refund.
3.  On the memo detail page, click the three vertical dots icon to display more applicable actions, then click Refund This Credit Memo.
4.  On the refund page, specify the following basic information:

    -   From the Payment Method to Refund list, select the payment method that is used to refund.

    -   In the Refund Date field, specify the date when to refund money to your customer.

    -   In the Amount to Refund field, specify the amount of the refund.

    -   (Optional) In the Comments field, specify the note of the refund.

    -   From the Reason Code list, select the reason of the refund. The Reason Code field is only editable if you have the user permission .


5.  Specify the following financial information:

    -   From the Transferred to Accounting list, select the status of the mapping from Zuora to a third party, such as NetSuite or Salesforce.

    -   From the Bank Account list, select the accounting code that maps to a bank account in your accounting system.

    -   From the Unapplied Payment list, select the accounting code for unapplied payment.

    -   From the On-Account list, select the on-account. On-account specifies the credit that is in your customer account and is not applied to pay invoices or debit memos.


6.  Click Refund.

    Note:

    To refund a credit memo through the Zuora REST API, see [POST Refund Credit Memo](https://developer.zuora.com/v1-api-reference/api/operation/POST_RefundCreditMemo/) .
