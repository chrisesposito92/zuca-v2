---
title: "Run report of actively billed customer accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/run-report-of-actively-billed-customer-accounts"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:01.622Z"
---

# Run report of actively billed customer accounts

This task topic explains how to generate a report of customer accounts that are actively billed using Zuora's standard "MRR by Account" report.

Note that the Account object in Zuora has its own Status field, of which one possible status is Active. Zuora sets the status of an Account to Active once created regardless if there is a subscription or not. Listing Accounts by account status may include accounts that are yet to bill or have finished billing at some time in the past. Therefore, to view "active customers", Zuora recommends listing the customer accounts that have subscriptions actively billed.

To get a list of customers that are being actively billed, run the Zuora standard "MRR by Account" report:

1.  Navigate to Reporting \> Reporting in Zuora.
2.  Navigate to Standard Reports \> Booking > Drivers.
3.  Navigate to MRR by account, and click the down arrow next to Run Detail Report.
4.  In the expanded drop-down menu, click Run Summary Report.

A list of all customers you are actively billing will be displayed grouped by Currency.

See the video [Make Sense of Standard Report](https://share.vidyard.com/watch/uQkaXbo4zTkHuGTE26zg9x) for how to customize a Zuora report if you are to customize the report.
