---
title: "Run Data Transformation jobs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/run-data-transformation-jobs_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:41:45.172Z"
---

# Run Data Transformation jobs

The Data Transformation job in Zuora Revenue converts object data from Pre-staging tables into transaction lines in Staging tables, allowing customization based on business requirements.

The Data Transformation job transforms the object data in Pre-staging tables into transaction lines that will be stored in Staging tables. To understand how data is transformed into Zuora Revenue Staging tables by default, see Introduction to standard field mapping . You can customize how you want to run the Data Transformation job based on your business requirements in the Zuora Revenue UI.

We recommend you to run Data Transformation jobs on a daily basis.

## Prerequisites

-   Ensure that the Billing object data required to perform the transformation is already synchronized into Pre-staging tables.

-   Ensure that the Data Transformation templates have been set up in Zuora Revenue. The following template definitions are required for Data Transformation and you can check these templates by navigating to File Upload > Transactions/Cost : For information about how to create a transaction or cost template, see Upload transactions or cost .

    -   ORDER - Always required. Charge level information will be transformed into sales order lines.

    -   INVOICE - Always required. Zuora Billing invoice items will be transformed as invoices.

    -   INVOICE\_ITEM\_ADJUSTMENTS - Required if Invoice Settlement is not enabled for your Zuora Billing tenant. It is used to transform invoice item adjustments in Zuora Billing.

    -   CREDIT\_MEMO - Required if you have Invoice Settlement enabled for your Zuora Billing tenant. It is used to transform credit memos in Zuora Billing.

    -   DEBIT\_MEMO - Required if you have Invoice Settlement enabled for your Zuora Billing tenant. It is used to transform debit memos in Zuora Billing.


## Start Data Transformation jobs

Note:

The following procedure is applicable to versions that are prior to 37.002.02.00. If you are using version 37.002.02.00 or later, the UI has changed and the new Revenue Sync job is provided to replace the Data Transformation job that is described here. To keep using the previous Data Transformation job, navigate to Reports > Schedule Jobs to start the RevPro3.0 Zuora Data Transformation program.

Take the following steps to configure and launch the Data Transformation job in Zuora Revenue:

1.  Navigate to Data Interface > Data Sync.
2.  Expand the side menu and then click Transformation Job. The Transformation Job page opens.
3.  If you have multiple Zuora Billing entities, select an entity from the Entity dropdown list. Other settings are not editable until an entity is selected.
4.  In the Data Source dropdown list, select the data source objects to be transformed. Possible data source objects include:
    -   Order
    -   InvoiceItem
    -   InvoiceItemAdjustment
    -   CreditMemoItem
    -   DebitMemoItem
5.  In the Template dropdown list, select a template used for data transformation.
6.  (Optional): Complete other optional settings to filter data.
    -   Account: Enter the number of the account from which you want to transform the data.
    -   Subscription: Enter the number of the subscription from which you want to transform the data.
    -   From Date and To Date: Select the last updated date and time range to filter the data source objects. The value for this parameter is in the `DD-MON-RRRR HH24:MI:SS` format. The date represents the UTC time zone because all the Data Sync information is stored in UTC. Additionally, the value should align with the From Date for Data Sync.
    -   Filter: Enter the filter statements to filter data that matches specific criteria. Both the *Zuora\_Revenue\_table\_name.field* and *Zuora\_Billing\_object.field* formats are supported. For example, if you want to filter the data for a particular subscription, you can enter `rpro_ds_subscription_g.name = ""A-S00000026""` or `Subscription.Name = ""A-S00000026""`. See [Query filter for Data Transformation](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/I_Billing_Revenue_integration/billing_revenue_integration.ditamap) for more information about the tables or objects that can be used in filter statements.
7.  Click Launch Data Transformation. If the Data Transformation job is successfully submitted, the corresponding item is displayed in the Data Transformation History table.

After the jobs are complete, the status of the job is updated to`Completed`and the queried data is transformed into transaction lines in Staging.

## Results

All updated records in Pre-staging are transformed into Staging tables (Line Staging). You can view all Staging data by navigating to Data Interface > Inbound . Note that duplicate records might exist in Staging tables. The Data Collection job can remove duplicate lines during the collection process.

If the job encounters an error or completes with warnings, hover over the job item and click the details icon to check the details. See Data Transformation errors for all possible error messages and the corresponding descriptions. Submit a request to Zuora Global Support if you need additional assistance with troubleshooting.

## What to do next

You can then start collecting data. See Collect data for Billing - Revenue Integration for more information.
