---
title: "Data management"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-management"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:11.048Z"
---

# Data management

The Data Interface main menu allows for managing transaction data on the Staging table, including updating and deleting transactions individually or in bulk.

The Data Interface main menu provides you with the capability of managing transaction data on the Staging table. You can update the unprocessed transactions or events one by one. Or, you can do bulk updates or deletion of transaction lines on the Staging table.

## Manage data on Staging

The Revenue Stage tab on the Manage Inbound page is used to bulk update or delete transaction lines and stage events in the Staging table. You can access this page either from the Close Process dashboard or from the Data Interface main menu.

## Access the Revenue Stage tab

You can open the Revenue Stage page by using one of the following methods:

-   From the main menu, navigate to Data Interface > Manage Inbound. The page by default displays the Revenue Stage tab. The benefit of using this method is that you can define filters to identify the target lines to be updated, which are not limited to the transaction lines with stage validation errors. You can also bulk update or delete revenue event data in a similar way.

-   Open the Inbound Stage Detail page in one of the following ways, and then click the Manage icon. The benefit of using this method is that you do not need to create a filter to identify the target transaction lines on Staging tables. As instructed in the following procedure, you can start from Step 4 directly and skip all previous steps.

    -   From the Data Validation tab on the [Close Process dashboard](/zuora-revenue/month-end-process/close-process-dashboard), on the Line Stage Exceptions row, click Summary. On the Inbound Stage Summary page, select the target transaction type and/or error message combination, and then click View Detail.

    -   From the main menu, navigate to Data Interface > Inbound.


The benefit of using this method is that you do not need to create a filter to identify the target transaction lines on Staging tables. As instructed in the following procedure, you can start from Step 4 directly and skip all previous steps.

For steps on managing the data on Staging, see [here](/zuora-revenue/data-management/data-management/manage-data-on-staging-procedure).

## What to do next

Use the Status column on the Revenue Stage tab to understand the action status.

| Status | Description |
| --- | --- |
| No Data Found | The system does not identify any transaction line or stage event to be eligible for the action based on the definition. You might want to modify the specified filter criteria or dimension field values and then resubmit the action. |
| Define | The definition of the action has not been submitted to the system. You can still change the filter criteria or data update details. |
| Error - Review | Error occurs to the action definition. You need to review the action definition and correct the errors. |
| Ready for Review | Target transaction lines or stage events have been identified and are waiting for review. You need to review the action details for identified data and ensure it is what you expect. Then, you can proceed to complete the action. |
| Complete | The action has been completed. Data has been updated or deleted on the Staging table. |
