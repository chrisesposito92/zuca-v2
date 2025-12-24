---
title: "Reconcile booking data between Billing and Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/data-reconciliation-between-zuora-billing-and-zuora-revenue/reconcile-booking-data-between-billing-and-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:48.271Z"
---

# Reconcile booking data between Billing and Revenue

Billing and Revenue booking reconciliation

Billing to Revenue Booking Report allows you to easily identify the booking data mismatch between Zuora Billing and Zuora Revenue Line Staging. This report runs the reconciliation by comparing the data on the Rate Plan Charge object.

For steps on how to reconcile booking data between Billing and Revenue, refer to [Billing and Revenue data booking reconciliation: Procedure](/zuora-revenue/advanced-revenue-operations/data-reconciliation-between-zuora-billing-and-zuora-revenue/reconcile-booking-data-between-billing-and-revenue/billing-and-revenue-data-booking-reconciliation-procedure).

## What to do next

The mismatched transactions are displayed in the Billing to Revenue Booking Report Layout table. The Reason Message column describes the reason for the mismatch.

-   To display more columns in the table, complete the following steps: When you run the report next time, the custom layout will be applied to display the result.

    1.  Run the detailed Billing to Revenue Booking Report as instructed in the above procedure. The report is displayed after you click Run Detail Report in Step 5 of [Billing and Revenue data booking reconciliation: Procedure](/zuora-revenue/advanced-revenue-operations/data-reconciliation-between-zuora-billing-and-zuora-revenue/reconcile-booking-data-between-billing-and-revenue/billing-and-revenue-data-booking-reconciliation-procedure).

    2.  Click the menu icon and then click Edit Report. The Edit Report window opens.

        ![edit-report-option.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b3788de9-e4cb-41a0-b9c6-78239c9fa49a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIzNzg4ZGU5LWU0Y2ItNDFhMC1iOWM2LTc4MjM5YzlmYTQ5YSIsImV4cCI6MTc2NjYzNzQwNiwianRpIjoiOTcyYjdmYjk1NWVkNGU3NDlkYzdjNjhlMjBmMDhmMTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mDE2kbS8Pmz-t9l6aonrlSuEsAxcJrV1mQnbbPNmoN8)

    3.  Create a custom layout of this report to add additional columns. .

    4.  Navigate to Setups > Application > Profiles.

    5.  Find the profile named AUTO\_RECON\_DTL\_REP\_LAYOUT and then set its value to be the name of the custom layout that you just created.

-   For troubleshooting assistance, submit a request to [Zuora Global Support](https://support.zuora.com/).


## Known limitations

Currently, the following limitations are applicable to this report:

-   The report can only be run against the Rate Plan Charge object.
