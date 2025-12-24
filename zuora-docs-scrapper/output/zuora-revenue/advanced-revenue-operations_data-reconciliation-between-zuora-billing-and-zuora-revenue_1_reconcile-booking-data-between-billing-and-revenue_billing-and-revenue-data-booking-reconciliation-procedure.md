---
title: "Billing and Revenue data booking reconciliation: Procedure"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/data-reconciliation-between-zuora-billing-and-zuora-revenue_1/reconcile-booking-data-between-billing-and-revenue/billing-and-revenue-data-booking-reconciliation-procedure"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:54.088Z"
---

# Billing and Revenue data booking reconciliation: Procedure

Learn how to reconcile booking data between Billing and Revenue

1.  Navigate to Data Interface > Revenue Sync > Billing to Revenue Booking Report. The Billing to Revenue Booking Reconciliation Report page is displayed.
2.  Specify the following filter conditions:

    -   Entity: If you have multiple Zuora Billing entities, select an entity that you want to compare the Revenue data with. If you have only one Billing entity, the entity Id is automatically populated and you can skip this step.

    -   Currency: Select the target currency code for which you want to do the reconciliation.

    -   RPC Updated Date: If the BOOKING\_RECON\_BY\_RPC\_UPDT\_ DT profile is set to Yes, the booking reconciliation process will run based on the last updated date of the rate plan charge. Specify the time range for the RPC updated time.

    -   Subscription Last Booking Date: If the BOOKING\_RECON\_BY\_RPC\_UPDT\_ DT profile is set to No, the booking reconciliation process will run based on the last booking date of the subscription. Specify the time range for the SO last booking date.


3.  Click Start Billing to Revenue Reconciliation. If the job is successfully submitted, the corresponding report is displayed in the Billing to Revenue Booking Report History table.
4.  Hover over the job in the table and click ![icon-view.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2c0e9ca6-fd69-4d0d-b001-21d8d6d2cf4e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJjMGU5Y2E2LWZkNjktNGQwZC1iMDAxLTIxZDhkNmQyY2Y0ZSIsImV4cCI6MTc2NjYzNzY1MiwianRpIjoiYzgzMDdjNDQ0ZTY1NGNiN2I3N2ZmYzcyZjRiZjU0NzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Rx7FjpVToqyi0lRWCvFwgXVWzsWt9V3elMCuldxhWpE) . The summary information of the report is then displayed.
5.  To locate the root cause of the discrepancy, in the pop-up window, click Run Detail Report. You are then directed to the Billing to Revenue Booking Report reporting page where you can check the detailed report.
6.  From the Rate Plan Charge Type dropdown list, select the charge type upon which the report will be run. The following options are available for selection:

    -   All (default)

    -   OneTime

    -   Recurring

    -   Usage


7.  From the Transaction Currency dropdown list, select the currency upon which the report will be run. The available options are the currencies defined in your Zuora Billing tenant.
8.  Click Run Report to run the report. If the job is successfully submitted, the corresponding report is displayed in the Billing to Revenue Booking Report Layout table.

    For information on what to do next, refer to [What to do next](/zuora-revenue/advanced-revenue-operations/data-reconciliation-between-zuora-billing-and-zuora-revenue/reconcile-booking-data-between-billing-and-revenue#concept-0cx1j4wo__what_to_do_next).
