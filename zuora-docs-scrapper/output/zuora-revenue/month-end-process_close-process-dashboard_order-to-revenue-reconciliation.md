---
title: "Order to Revenue Reconciliation"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/close-process-dashboard/order-to-revenue-reconciliation"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:41.963Z"
---

# Order to Revenue Reconciliation

Zuora Order to Revenue Transaction Reconciliation allows you to reconcile booking and billing transaction data for the current open accounting period, highlighting any variances in CPD.

Zuora Order to Revenue Transaction Reconciliation enables you to reconcile booking and billing transaction data for the current open accounting period. Note that this job only applies to Zuora Billing and Revenue data reconciliation when you have enabled OTR.

This job displays any variances in CPD along with the results. (CPD > Bookings and Billings)

Due to OTR's real-time nature, there could be variances until all the transactions for the current open period are processed.

The booking reconciliation uses the combination of the subscription's last booking date within the current accounting period and the exclusion flags between booking transactions and revenue contract lines. On the other hand, the billing reconciliation uses the combination of document date and exclusion flags between billing transactions and revenue contract billings.

In case of variances, ensure 100% of the inbound for the current open accounting period is processed. If still there are variances even after processing the above, please submit a ticket.

You can initiate this job on demand or by or by scheduling. Complete the steps [provided here](/zuora-revenue/month-end-process/close-process-dashboard/order-to-revenue-reconciliation/submit-otr-reconciliation-job) to submit the program.
