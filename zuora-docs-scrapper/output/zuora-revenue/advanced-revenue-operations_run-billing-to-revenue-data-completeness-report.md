---
title: "Run Billing to Revenue Data Completeness report"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/run-billing-to-revenue-data-completeness-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:52.364Z"
---

# Run Billing to Revenue Data Completeness report

The Billing to Revenue Data Completeness report helps identify transaction count mismatches between Zuora Billing and Zuora Revenue Line Staging, facilitating data reconciliation based on charge type.

With the Billing to Revenue Data Completeness report, you can easily identify the transaction count mismatch between Billing and Revenue Line Staging. This report serves as a data reconciliation report between the two systems by comparing the transaction data in Zuora Billing and Zuora Revenue Line Staging. It is run based on the charge type, which allows you to drill down on the charge type and get all the details on the transactions.

## Procedure

1.  Navigate to Reports > Run Reports > Transactions and locate the Billing to Revenue Data Completeness.
2.  In the layout dropdown list, select Billing to Revenue Completeness Summary.
3.  Click Report Details. The Billing to Revenue Data Completeness page is displayed.
4.  In the Filter section, specify the following filter conditions:
    -   Last Updated Date: Select a comparison operator, and a date or a combination of the start date and end date.
    -   Objects: Select an object on which you want to run the report. Currently, only the Rate Plan Charge object is supported.
    -   Revenue Sync Id (Optional): If you want to filter the data of specific Revenue Sync jobs, select an operator and enter the Revenue Sync job Id as appropriate.
    -   Currency (Optional): Select an operator and enter the target currency code as appropriate. For example, `USD`.
    -   Entity Id: If you have multiple Zuora Billing entities, select an entity that you want to compare the Revenue data with. If you have only one Billing entity, the entity Id is automatically populated and you can skip this step.
5.  Click Run Report. If the job is successfully submitted, the corresponding report is displayed in the Billing to Revenue Completeness Summary table.

## Results

The generated Billing to Revenue Data Completeness report displays the following fields:

-   Objects

-   Total Transaction in Z-Billing (which indicates the total processed transaction count in Zuora Billing of the specified object type)

-   Total Transaction in Z-Revenue (which indicates the total processed transaction count in Zuora Revenue of the specified object type)

-   Currency


If the total transaction count in Zuora Billing mismatches the count in Zuora Revenue, you can hover over the job and click the three horizontal lines icon to view the details of mismatched transactions. The following use cases are likely to result in mismatched transactions:

-   Integration error. It will result in that some transactions are only recorded in Zuora Billing.

-   Transactions are deleted in Zuora Billing after they are collected by Zuora Revenue. It will result in that transactions are only recorded in Zuora Revenue.


## What to do next

Contact [Zuora Global Support](https://www.zuora.com/support-center/) to resolve the issue if there are mismatched transactions.

## Known limitations

Currently, the following limitations are applicable to this report:

-   The report can only be run against the Rate Plan Charge object.

-   The amount reconciliation of booking and billing transactions is not supported.
