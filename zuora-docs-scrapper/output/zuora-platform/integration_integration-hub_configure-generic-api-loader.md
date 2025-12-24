---
title: "Configure Generic API Loader"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-generic-api-loader"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:10.874Z"
---

# Configure Generic API Loader

The Generic API Loader application facilitates bulk operations on Zuora objects using CSV templates and APIs, allowing for efficient creation, updating, and deletion of data.

The Generic API Loader application uses Zuora APIs in combination with CSV templates to perform mass requests. It enables you to create, update, and delete any Zuora object in bulk.

The Generic API Loader takes in a CSV file, reads through each line, performs the desired operation, and generates a results file and a failures file. If no error is encountered during the execution job, the failures file will be blank and the results file will report success statements for each line in the CSV. Otherwise, the lines are added to the failures file and each error is listed in the results file. This allows for an iterative approach where the failures file can be corrected based on the error received in the status file and re-uploaded as a new task.

Note that If you want to update the following objects, you are recommended to configure the [API loader for those specific objects](/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects) and use the [standard templates](/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/import-csv-files) :

| Object | Supported functions |
| --- | --- |
| Product Catalog | Export / Import / Migrate / Import Discounts |
| Account & Contact | Export / Import / Migrate |
| Subscription | Export / Import / Migrate |
| Amendment | Export / Import |
| Accounting Period | Import |
| Orders | Export / Import |

## Prerequisites

-   Ensure that the "API Write Access" permission is enabled for your user role in the Zuora tenant.
-   If you want to manage Credit Memo or Debit Memo objects, ensure the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature is enabled for your Zuora tenant.
-   If you want to manage Order or Order Action objects, ensure the [Orders](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders) feature is enabled for your Zuora tenant.

## Create a Generic API Loader Task

Take the following steps to create a task using the Generic API Loader:

Navigate to New Task\>Generic API Loader

1.  Navigate to New Task\> Generic API Loader.

2.  In the General tab, complete the following configuration:

    1.  Enter the name of the task in the Name field.
    2.  Select a run mode from the Run Mode drop-down list. See the Templates section below for more information.
        -   Create - Allows you to upload a CSV file where all columns are the API fields of the selected object in the Advanced tab. The Create requests will be executed for each row in the uploaded file.
        -   Delete - Allows you to upload a CSV file for mass deletions.
        -   Update - Allows you to upload a CSV file to update the information on the selected object in bulk.
    3.  Select the timing of execution in the Execution drop-down list. The default execution is Onetime.
        -   Onetime - The task will be executed immediately when the resource is available.
        -   Scheduled - The task will be executed on the date and time specified in the schedule builder.
    4.  (Optional) Select the build name in the Build Name drop-down list and the build version in the Version drop-down list if you want to run a task at a previous build version. The latest build name and version are populated by default. It is not recommended to update these fields because this could stop you from using the latest functionality built in the tool.
    5.  Select the login to your Zuora tenant from the Target drop-down list or create a new login. Do not select the existing OAuth credentials or create new logins using OAuth because OAuth is not supported by Developer Tools.

3.  In the Advanced tab, complete the following settings:

    1.  Select the object on which you want to operate from the Object drop-down list.
    2.  Click Choose File and upload the CSV file that includes the desired API fields of the selected object.Note: The SOAP API framework does not support localized number formats such as `1,234`. Therefore, do not use thousand separators in SOAP requests. Use the standard numbering format such as `1234` instead.
    3.  (Optional) Select a value from the Max Threads and Max zObjects drop-down lists.
        -   Max Threads - Sets the number of threads that can be processed concurrently by the loader. The value for this field should not exceed Zuora's concurrent request limits. The default value is 3.
        -   Max zObjects - Sets the maximum number of the objects used in each call to Zuora. The default value is 50.
4.  If you selected Scheduled for the Execution field, complete the scheduler settings in the Schedule tab.
    1.  Select the time zone from the Timezone drop-down list. Zuora strongly recommends you to select the same time zone as for your Zuora tenant to avoid payment errors.
    2.  In the drop-down list next to Timezone, select the time frame of the schedule and complete the details of the selected time frame. The Timezone field and schedule builder are used to set how frequently the data is synchronized. It is recommended to set a Daily schedule and align the timezone to your Zuora tenant, which can align operations and ensure the app displays the latest data. The Interval field displays the specified schedules as a Cron expression and needs no further configuration.
5.  Click Create.

## Templates

When configuring the Generic API Loader instance, you have to upload a CSV file for the selected operation. Note that if you are using Microsoft Excel on Mac OS, you must save the .csv file in MS-DOS Comma Separated (.csv) format.

The following table describes the template and API operation Zuora uses for each object type:

| Object type | Template | API operation | Note |
| --- | --- | --- | --- |
| Credit MemoDebit MemoOrderOrder ActionStored Credential Profile | Generic API Loader Templates | Specific API operations for each object type. |  |
| PaymentsRefund | Generic API Loader Templates | Specific API operations for each object type. | The Invoice Settlement feature is enabled for your Zuora tenant. |
| CSV template file based on the available fields of the corresponding SOAP API Object. Each column in the CSV template file represents an object field.For more information about available fields and their descriptions, see List of SOAP API Objects. | The Actions API operations, such as Create, Delete, and Update. | The Invoice Settlement feature is not enabled for your Zuora tenant. |  |
| Other objects | CSV template file based on the available fields of the corresponding SOAP API Object. Each column in the CSV template file represents an object field. | The Actions API operations, such as Create, Delete, and Update. |  |

## Known Limitations

The following limitations are applicable to Generic API Loader:

-   When the Invoice Settlement feature is enabled for your tenant, Developer Tool defaults to the REST calls for the following objects:

    -   Credit Memo
    -   Debit Memo
    -   Payment
    -   Refund

    Currently, only the fields in SOAP calls, and the fields in the REST calls to these objects can be updated. The Generic API Loader only supports updating custom fields on the main objects listed above; it does not support updating custom fields sub-items, such as Debit Memo Item.

-   The Developer Tools do not support updating custom fields on the Order Action object. You can use the REST [Update order custom fields](https://www.zuora.com/developer/api-references/api/operation/PUT_UpdateOrderCustomFields/) call to update custom fields on the Order Action object.

-   When updating the ProductRatePlanCharge object where the Tax feature is enabled, you must include the `TaxMode` and `TaxableCode` fields in the CSV file.
-   The files encoded with UTF-8 are supported, but encoded with UTF-8 with byte order mark (BOM) are not supported.
