---
title: "Reconcile CCV reports"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation/reconcile-ccv-reports"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:40.967Z"
---

# Reconcile CCV reports

Learn how to reconcile Zuora Billing CCV reports with Zuora Revenue's Rate Plan Charge Booking reports to identify discrepancies.

After both the Zuora Billing CCV report and Zuora Revenue's Run Rate Plan Charge Booking report are generated, you can reconcile two reports to identify discrepancies.

## Procedure

Take the following steps to reconcile two reports:

1.  Use Charge Last Updated Date as the filter criteria in both reports.
2.  Pivot the transactions:
    1.  Include the latest subscription version for both reports.
    2.  Include only Sales Order lines from Zuora Revenue transactions.
    3.  Exclude discount charges from Zuora Revenue transactions.
    4.  Exclude RC lines and RC Staging lines.
3.  Reconcile Zuora Billing CCV Report against Rate Plan Charge Booking Report using the entry count, CCV amount, ELP amount, and Quantity. See the "Data points for reconciliation" section below for more information.

## Data points for reconciliation

With two reports, you can perform the data reconciliation process between Zuora Billing and Zuora Revenue. The following table lists the key data points between two reports:

| Zuora Billing CCV Report | Rate Plan Charge Booking Report |
| --- | --- |
| Account Name | Customer Name |
| Account Number | Customer Number |
| Charge Contractual Value | Ext Sell Price |
| ELP | Ext List Price |
| Subscription Version Creation Date | Subscription Version Creation Date |
| Charge Quantity | Ordered Qty |
| Charge Number | Sales order number |
| Original Charge ID | Original Charge ID |
| Charge Segment | Charge Segment |
| Subscription Name | Subscription Name |
| Subscription version | Subscription version |
| Last Update Date | Charge last updated date |
| Org Charge Segment | Org Charge Segment |
