---
title: "Upload transactions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/upload-transactions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:31.415Z"
---

# Upload transactions

Manually upload transaction lines as data files without any dependency on upstream integration

In Zuora Revenue, you can manually upload the transaction lines as data files without any dependency on upstream integration.

Note:

Different transaction types required different mandatory fields in the uploaded file. For more information, see [Mandatory fields of transactions](/zuora-revenue/data-management/transaction-processing/mandatory-fields-of-transactions).

## Prerequisites

Before the transaction data is uploaded, you must configure an RC grouping template to define how to form the revenue contract and assign the SSP hierarchy. For more information, see [Create RC grouping template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template).

For steps on uploading transaction lines, see [here](/zuora-revenue/data-management/transaction-processing/upload-transactions/upload-transaction-lines).

## Result

The uploaded file status is displayed in the Uploaded Files section on the Transactions/Cost page with the following information:

-   File Name: Name of the uploaded file.

-   Status: The status of the uploaded file.

-   Message: The number of successes and failures that occur during the file upload.

-   Next Action: The next action is enabled only after the file is successfully uploaded. When you click the Next Action icon, the data collection process is started.
    Note: Only the data that falls into the current open period will be collected by Zuora Revenue.

-   RC Batch: The batch ID that is generated and the batch status. The batch status can be one of the following:

    -   Data Collected (when data is collected successfully)

    -   Warning (when there is any mismatch in the data)

    -   No Data Found (when the uploaded file does not have any eligible data)


## What to do next

Depending on the file upload status and the data collection status, you can do the following things in the Uploaded Files section:

-   If errors occur during the file upload, hover the mouse over the line and click the View Log icon to check the logged errors.

-   After the file upload is successful, to view the file data and summary, hover the mouse over the line and click the View Uploaded File Data and Summary icon. The Uploaded File Data and Summary window is displayed listing the number of records uploaded, the batch IDs, and the file details.

-   After the data collection process completes, the RC batch status is changed to Data Collected. To view the revenue contracts that are associated with the uploaded file, click the View RC Data icon. The View Revenue Contracts page is opened to show the book name and the relevant RC details.
