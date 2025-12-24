---
title: "Manage usage transactions"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-usage-transactions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:00.798Z"
---

# Manage usage transactions

Learn how to manage usage transactions in Zuora Revenue, including manual uploads and automatic integration from Zuora Billing.

After system configurations are completed, usage transactions can be uploaded or automatically integrated from the upstream system to Zuora Revenue.

-   If you are a Zuora Revenue standalone user, usage transactions are manually uploaded to trigger revenue recognition events and/or for usage tracking depending on the configured revenue recognition method.

-   If you enabled Billing - Revenue Integration, usage transactions uploaded to Zuora Billing are automatically integrated to Zuora Revenue on a daily basis. An alternative way to manually upload usage transactions is also provided as a flexible fail-safe way to upload usage transactions when necessary. The best practice is always to use the automatic way as the primary option.
    Note: There is no system validation to prevent duplicate data uploads for Billing - Revenue Integration environments. If the same usage transactions are both automatically integrated and manually uploaded to Zuora Revenue, it will lead to over-accrual because both sets of data will be processed.


## Manually upload consumption usage (for standalone Revenue users)

To manually upload usage transactions to Zuora Revenue, you can do it either from the UI or by using the API.

To upload usage transactions, complete the following steps:

1.  Navigate to File Upload > Consumption. A template called RevPro Usage Upload is predefined and displayed. CSV is the default file format defined in the template.
2.  (Optional): To change the file format between CSV and TXT, in the Templates section, hover your mouse over the template line, click the Edit icon, and specify the file format for the Data Format field.
3.  To download the template, hover over the template line and click the Download icon. The template is downloaded to your local system.
4.  Fill in your data in the downloaded template file and save the changes. The following fields are mandatory in the template file:
    | Field | Description |
    | --- | --- |
    | SO Line ID | The ID of the SO line for which the usage data is uploaded. |
    | Usage Amount | The usage amount to be uploaded (total dollar value) |
    | Unit Price | Per unit price associated with the usage transaction |
    | Quantity | Quantity incurred associated with the usage transaction |
    | DD_Rev_Segments | Revenue Recognition GL Account reference related to the associated usage transaction. |
    | Sub Product | Referenced product name or SKU name associated with the usage transaction |
    | TRX_DATE | Transaction date referenced to when the associated usage transaction was incurred. |

5.  To upload the file, hover your mouse over the template line and click the upload icon. Alternatively, you can also use the REST API called [Upload file](https://www.zuora.com/developer/revpro-api/#operation/POST_UploadFile).

The uploaded file status is displayed in the Uploaded Files section on the current page.

## Integrate usage data to Revenue (for Billing - Revenue Integration users)

With Billing - Revenue Integration enabled, usage data that you upload to Zuora Billing are automatically integrated by the Usage Sync job to Zuora Revenue on a daily basis. The Usage Sync job will intake usage transactions into Zuora Revenue to trigger revenue recognition events and/or for usage tracking depending on configured revenue recognition method. No action is required for the end-users.

## Usage data mapping

The following table explains how the fields in Zuora Revenue are mapped to fields in Zuora Billing during the usage integration process:

| Field names in Zuora Billing | Field names in Zuora Revenue |
| --- | --- |
| Sales Order ID | SO Line ID |
| Subscription ID | Committed Subscription/Item ID |
| Subscription Name | Committed Subscription/Item Name |
| Rate Plan Number | RPC Num |
| Rate Plan Segment | RPC Segment |
| Usage Amount | Usage Amount |
| Unit Price | Unit Price |
| Quantity | Quantity |
| Usage Charge Name | Sub Product |
| Draw Down charge Segment | DD_Rev_Segment |
| Type | Type |
| TRX_DATE | TRX_DATE |
| Draw Down Charge Number | DD_Charge_Num |

## Usage integration process

During the usage integration process, how the usage data flows from Zuora Billing to Zuora Revenue is explained as follows:

1.  [Usage data is uploaded to Zuora Billing](/zuora-billing/bill-your-customer/usage-billing/import-usage-data).
2.  Usage data is integrated to Zuora Revenue Pre-stage table on a daily basis. The Update Date in Zuora Billing on each line is considered as the Transaction Date in Zuora Revenue.
3.  Usage data of the line that falls into the current open period is integrated from the Pre-stage table to the Staging table. If the line already exists in the Staging table, the system will calculate the change in the usage amount between the latest and the previous records of the line. The incremental amount and updated date will be saved in the latest record for the line in the Staging table.
4.  All records of the line are saved in the internal usage tracking table where data is aggregated at the line level. The usage tracking data is used to present the usage data in Workbench and in reports.

## Manually start usage integration

In addition to the automatic usage integration on a daily basis, you can also start an ad-hoc Usage Sync job to integrate usage data from Zuora Billing to Zuora Revenue. To do this, navigate to Data Interface > Usage Sync.

Note: Do not manually upload usage data unless necessary. If the same usage transactions are both automatically integrated and manually uploaded to Zuora Revenue, it will lead to over-accrual because both sets of data will be processed.
