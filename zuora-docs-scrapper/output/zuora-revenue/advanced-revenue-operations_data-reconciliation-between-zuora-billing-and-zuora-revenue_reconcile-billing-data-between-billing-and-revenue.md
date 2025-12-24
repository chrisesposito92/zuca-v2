---
title: "Reconcile billing data between Billing and Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/data-reconciliation-between-zuora-billing-and-zuora-revenue/reconcile-billing-data-between-billing-and-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:45.968Z"
---

# Reconcile billing data between Billing and Revenue

The Billing to Revenue Billing Report identifies mismatches between Zuora Billing and Zuora Revenue Line Staging by comparing data on various billing objects.

Billing to Revenue Billing Report allows you to easily identify the billing data mismatch between Zuora Billing and Zuora Revenue Line Staging. This report automatically runs the reconciliation by comparing the data on the following objects:

-   Invoice Item

-   Debit Memo Item, if Invoice Settlement is enabled in Billing

-   Credit Memo Item, if Invoice Settlement is enabled in Billing

-   Invoice Item Adjustment, if Invoice Settlement is not enabled in Billing


## Procedure

1.  Navigate to Data Interface > Revenue Sync > Billing to Revenue Billing Report. The Billing to Revenue Billing Report page is displayed.
2.  Specify the following filter conditions:
    -   Entity: If you have multiple Zuora Billing entities, select an entity that you want to compare the Revenue data with. If you have only one Billing entity, the entity Id is automatically populated and you can skip this step.
    -   Currency: Select the target currency code for which you want to do the reconciliation.
    -   Invoice/Memo Date Range: Select a start date and an end date. Data of invoices, credit memos, debit memos, or invoice item adjustments that fall into this period will be reconciled.
3.  Click Start Billing to Revenue Reconciliation. If the job is successfully submitted, the corresponding report is displayed in the Billing to Revenue Billing Report History table.
4.  Hover over the job in the table and click the view icon . The summary information of the report is then displayed.
5.  To locate the root cause of the discrepancy, you can click the Run Detail Report button in the report. You are then directed to the Billing to Revenue Billing Report reporting page where you can check the detailed report.
6.  From the Rate Plan Charge Type dropdown list, select the charge type upon which the report will be run. The following options are available for selection:
    -   All (default)
    -   OneTime
    -   Recurring
    -   Usage
7.  From the Transaction Currency dropdown list, select the currency upon which the report will be run. The available options are the currencies defined in your Zuora Billing tenant.
8.  Click Run Report to run the report. If the job is successfully submitted, the corresponding report is displayed in the Billing to Revenue Billings Report Layout table.

## Results

You can find the mismatched transaction details in the Billing to Revenue Billing Report Layout table. The Reason Message column describes the reason for the mismatch.

![Billing Detail Report](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/31c49859-9ffa-4d91-be53-aaeb371eb57d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMxYzQ5ODU5LTlmZmEtNGQ5MS1iZTUzLWFhZWIzNzFlYjU3ZCIsImV4cCI6MTc2NjYzNzQwMywianRpIjoiMmVlY2E1ZjI2MmJmNDJjOGJhZDc5YTZjMzg1NjU2YzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Gmb4XRbWoieJUwKHc-g4xcSTpnV198oulQ-tl-cXUls)

## What to do next

Submit a request at [Zuora Global Support](https://support.zuora.com/) for troubleshooting assistance.

## Known limitations

Currently, Billing to Revenue Billing Report does not support the use case of deleting amendments or unposting invoices.
