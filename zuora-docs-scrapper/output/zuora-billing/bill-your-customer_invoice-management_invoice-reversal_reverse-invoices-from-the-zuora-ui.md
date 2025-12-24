---
title: "Reverse invoices from the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/reverse-invoices-from-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:16.434Z"
---

# Reverse invoices from the Zuora UI

Learn how to reverse incorrect invoices in the Zuora UI, ensuring accurate billing by generating corrected versions upon customer request.

-   You can reverse invoices only if you have Invoice Settlement enabled.
-   You must have the following permissions enabled. For more information about the permissions, see Billing permissions.
    -   Reverse Invoice
    -   Post Credit Memo
    -   Apply Credit Memo

Occasionally, you may post an incorrect invoice that contains either charge mistakes or other errors. Upon customer request, you can reverse the incorrect invoice and generate a corrected version for that same billing period.

1.  In the left navigation area, navigate to .
2.  On the All Invoices page, click the invoice that you want to write off.
3.  On the invoice detail page, click the three vertical dots icon to display more applicable actions, then click Reverse Invoice.
4.  Specify the following information in the Reverse Invoice dialog:

    -   Memo Date : The date when the credit memo is created. The memo date must be later than or equal to the invoice date.
    -   Apply Effective Date : The date when the credit memo is applied to the invoice that will be reversed. The effective date must be later than or equal to the memo date.
    -   Reason Code : The reason for the reversal. It will be used as the reason code of the auto-generated credit memo.
    -   Comment : The details about the reversal. It will be used as the comment of the auto-generated credit memo.

5.  Click Save .

If the invoice to be reversed contains more than 2,000 items, including invoice items, discount items, and taxation items, the reversal action is performed asynchronously to prevent timeouts. Once the process is completed, refresh the UI to view the reversal result.

If the invoice is reversed successfully, you can find the auto-generated credit memo in the transaction table. See [Reverse invoices](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal) for more information.
