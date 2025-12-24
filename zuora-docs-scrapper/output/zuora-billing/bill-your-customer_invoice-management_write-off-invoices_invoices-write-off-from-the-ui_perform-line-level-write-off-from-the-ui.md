---
title: "Perform line-level write-off from the UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoices-write-off-from-the-ui/perform-line-level-write-off-from-the-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:17.657Z"
---

# Perform line-level write-off from the UI

Learn how to perform line-level write-offs for invoices and debit memos using the Zuora UI, allowing for more granular management of write-offs.

Beyond writing off an invoice at the header (billing document) level, you can now write-off an invoice or debit memo at the line-item level. This functionality provides greater flexibility in managing write-offs at a more granular level, including specific invoice line items and their associated tax amounts.

To specify write off amount at line item levels within a posted invoice through the Zuora UI:

1.  In the left navigation area, navigate to Billing > Invoices .
2.  On the All Invoices page, click the invoice that you want to write off.
3.  On the invoice detail page, click the three vertical dots icon to display more applicable actions, then click Write Off Invoice .
4.  In the displayed Write Off Invoice dialog, configure the following information:
    1.  In the Write-Off Date field, specify the date when the write off should be effective. This date would also be used as the memo date for the resultant write-off credit memo. Note that the memo date must be later than or equal to the invoice date.
    2.  In the Reason Code field, enter a reason code for the credit memo to be created.
    3.  In the Comment field, enter a comment for the credit memo to be created.
    4.  In the Write-Off Details section, enable the Revenue Impacting option if the write off to set the Accounting Code should be of type ‘Revenue.’ Or unselect the Revenue impacting option to select an expense accounting code such as bad-debt expense. Note that for Revenue impacting write offs, the system will automatically pick the deferred revenue accounting code from the corresponding invoice/debit memo. In case of non-revenue impacting write offs, users can select a write off accounting code.

        Note: This field is available only if you have enabled the enhanced write-off permission for your tenant. Contact [Zuora Global Support](https://support.zuora.com/hc/en-us) to enable this permission.

5.  Go to the Line Items section. The Line Items section displays the items within the posted invoice. Charge items and the corresponding information of each charge item are displayed. The corresponding items include:
    1.  Subscription invoice item. For each item, the service date (that is, the issued date and due date), the amount, and balance are displayed.
    2.  The tax of the invoice item. For each item, the amount and balance are displayed.
    3.  The discount of the invoice item. For each item, the amount and balance are displayed.
    4.  The tax of the discount. For each item, the amount and balance are displayed.
6.  For each of the items, you can specify the write off amount in the respective Write-Off Amount field. As you specify the write-off amount for each item, the calculation is done automatically and the write-off amount is displayed in the Write-Off Amount field in the Write-Off Details section.
7.  After you specify the write-off amount in the Write-Off Amount fields, click Save .

If the invoice is written off successfully, you can find the auto-generated credit memo in the transaction (Credit Memo) UI and reporting.
