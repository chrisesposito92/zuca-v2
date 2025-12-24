---
title: "Write off debit memos from the UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/write-off-debit-memos-from-the-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:13.528Z"
---

# Write off debit memos from the UI

Learn how to write off debit memos from the UI

You can write off debit memos with the Zuora UI or REST API. If any exception occurs during invoice write-off, the operation will roll back.

-   This operation is only available if you have [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) enabled. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

-   This feature is available only if you have enabled the enhanced write-off permission for your tenant. Contact [Zuora Global Support](https://support.zuora.com/) to enable this permission.


To write off a debit memo through the REST API, see [Write off a debit memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_WriteOffDebitMemo/) for more information.

To write off a debit memo through the Zuora UI, complete the following steps.

1.  Navigate to Billing \> Credit and Debit Memos in the left-hand navigation section.
2.  On the Credit and Debit Memos page, click the debit memo that you want to write off from the debit memo tab.
3.  On the debit memo detail page, click the three vertical dots icon to display more applicable actions, then click Write Off Debit Memo .
4.  In the Write Off Debit Memo dialog, configure the following information:
    1.  In the Write-Off Date field, specify the write off date for the debit memo. The memo date must be later than or equal to the debit memo date.
    2.  In the Reason Code field, enter a reason code for the debit memo to be written off.
    3.  In the Comment field, enter an optional comment for the debit memo to be written off.
    4.  In the Write-Off Details section, enable the Revenue Impacting option if the write off to set the Accounting Code should be of type ‘Revenue.’ Or unselect the Revenue impacting option to select an expense accounting code such as bad-debt expense. Note that for Revenue impacting write offs, the system will automatically pick the deferred revenue accounting code from the corresponding invoice/debit memo. In case of non-revenue impacting write offs, users can select a write off accounting code.
    5.  Specify the Write-Off Amount .
5.  Click Save .
