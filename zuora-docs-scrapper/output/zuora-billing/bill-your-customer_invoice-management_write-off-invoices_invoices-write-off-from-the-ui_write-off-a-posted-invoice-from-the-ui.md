---
title: "Write off a posted invoice from the UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoices-write-off-from-the-ui/write-off-a-posted-invoice-from-the-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:14.801Z"
---

# Write off a posted invoice from the UI

Learn how to write off a posted invoice using the Zuora UI, including configuring write-off details and saving the changes.

You can write off invoices only if you have Invoice Settlement enabled.

1.  In the left navigation area, navigate to Billing > Invoices.
2.  On the All Invoices page, click the invoice that you want to write off.
3.  On the invoice detail page, click the three vertical dots icon to display more applicable actions, then click Write Off Invoice.
4.  In the displayed Write Off Invoice dialog, configure the following information:
    1.  In the Write-Off Date field, specify the date when the credit memo is created. The memo date must be later than or equal to the invoice date.
    2.  In the Reason Code field, enter a reason code for the credit memo to be created.
    3.  In the Comment field, enter a comment for the credit memo to be created.
    4.  In the Write-Off Details section, enable the Revenue Impacting option if the write off to set the Accounting Code should be of type ‘Revenue.’ Or unselect the Revenue impacting option to select an expense accounting code such as bad-debt expense. Note that for Revenue impacting write offs, the system will automatically pick the deferred revenue accounting code from the corresponding invoice/debit memo. In case of non-revenue impacting write offs, users can select a write off accounting code. Note: This field is available only if you have enabled the enhanced write-off permission for your tenant. Contact [Zuora Global Support](https://support.zuora.com/hc/en-us) to enable this permission.
    5.  Specify the Write-Off Amount.
5.  Click Save.

If the invoice is written off successfully, you can find the auto-generated credit memo in the transaction table. See [Invoice Write-Off](/zuora-billing/bill-your-customer/invoice-management/write-off-invoices) for more information.
