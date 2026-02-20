---
title: "Data ingestion using bulk jobs API"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-ingestion-using-bulk-jobs-api"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:26.361Z"
---

# Data ingestion using bulk jobs API

Learn how to perform data ingestion with a CSV file using the Data Loader Bulk Jobs API.

You can perform data ingestion with a CSV file using the [Data Loader Bulk Jobs API](https://developer.zuora.com/v1-api-reference/api/tag/Bulk-Data/). It outlines the required actions to ensure a seamless and efficient data ingestion process. In the context of data ingestion, this includes all jobs related to Import, Update, Delete, and Cancel.

Zuora recommends retrieving the following API clusters to validate supported objects and fields before programmatically submitting a job. These steps help ensure data accuracy and proactively validate data before ingestion, reducing errors and preventing failed ingestion jobs.

1.  Object Type - Retrieve or Get Request

    First, select the object type for which the data ingestion has to be performed. This step will validate the following information:

    -   Supported Object Types by the API
    -   Supported Data Ingestion Actions on each object - Import, Delete, Cancel, Update
    -   The required permissions and links to the Data Dictionary for the object

    API Requestcurl --request GET \\ --url https://rest.zuora.com/data-loader/metadata/csv/objects \\ --header 'Authorization: Bearer YOUR\_ACCESS\_TOKEN'

    Understanding the API Response{ "metadata": \[ { "value": "Accounts and Contacts", "label": "Accounts and Contacts", "objectType": "Account", "canDelete": true, "canUpdate": true, "canImport": true, "cancellable": false, "createPermissions": \["permission.accountCreate"\], "updatePermissions": \["permission.ModifyAccount"\], "deletePermissions": \["permission.AccountDelete"\], "importDataDictionaryUrl": "https://knowledgecenter.zuora.com/Zuora\_Platform/Data\_Management/Data\_Loader/Data\_dictionary\_for\_Data\_Loader/Accounts\_and\_Contacts\_Data\_dictionary", "updateDataDictionaryUrl": "https://knowledgecenter.zuora.com/Zuora\_Platform/Data\_Management/Data\_Loader/Data\_dictionary\_for\_Data\_Loader/Update\_Accounts\_and\_Contact\_-\_Data\_dictionary" } \] }

    Key Information to use from the API Request

    -   Object Type - The object for which the data ingestion job has to be performed
    -   Supported Actions - Check canImport, canUpdate, canDelete, and cancellable fields to verify if the action you need is allowed.
    -   Permissions - Ensure you have the right API permissions (createPermissions, updatePermissions, deletePermissions).
    -   Data Dictionary URLs - Refer to the provided links for details on the required fields and data structure.

2.  Object Name - Retrieve or Get Request
    Now, retrieve the Object Name for the Object Type selected in Step 1. The objectName is required for ensuring that data is ingested accurately. The API call below will provide a list of supported objectNames along with the actions (import, update, delete) that can be performed on each object.

    API Requestcurl --request GET \\ --url https://rest.zuora.com/data-loader/metadata/csv/objects \\ --header 'Authorization: Bearer YOUR\_ACCESS\_TOKEN'

    Understanding the API Response{ "metadata": \[ { "objectName": "accounting-code", "actionsSupported": \["import", "update", "delete"\] }, { "objectName": "accounting-period", "actionsSupported": \["import", "delete"\] }, { "objectName": "accounts-and-contacts", "actionsSupported": \["import", "update", "delete"\] } \] }

    Key Information to use from the API Request

    -   Identify the objectName corresponding to your objectType from the previous step.
    -   Ensure that the action (e.g., import, update, delete) required to perform is supported for that object.
    -   Use objectName when initiating the csv bulk job request.

3.  Retrieve Field Metadata for Object Name.
    After objectName in the previous step, the next step is to fetch the field metadata for that object. Each object has a unique set of fields and supported data types, which vary based on the action type (e.g., Import, Update, Cancel, Delete).

    API Requestcurl --request GET \\ --url https://rest.zuora.com/data-loader/metadata/csv/objects/accounts-and-contacts/fields?action=Import' \\ \--header 'Authorization: Bearer YOUR\_ACCESS\_TOKEN'

    In this example, we are fetching the field metadata for:

    -   objectType: Account
    -   objectName: accounts-and-contacts
    -   Action Type: Import

    Understanding the API Response

    The response provides a detailed structure of the fields, their data types, and validation rules.

    Sample Response (Truncated for Clarity): { "name": { "type": "string", "regex": "(^(?!\\\\s\*$).{1,255})$", "required": true }, "billCycleDay": { "type": "number", "regex": "^(0|1|2|...|31)$", "required": true }, "currency": { "type": "string", "regex": "^(AUD|USD|EUR|GBP|JPY|CAD)$", "required": true }, "notes": { "type": "string", "regex": "^.{0,65535}$", "required": false }, "additionalEmailAddresses": \[ { "type": "string", "regex": "^(|(\[a-zA-Z0-9\_.%+-\]+@\[a-zA-Z0-9.-\]+.\[a-zA-Z\]{2,}))$", "required": false } \], "autoPay": { "type": "boolean", "regex": "^(true|false)$", "required": false } }Key Information to use from the API Request

    -   Each field has a defined data type:"name": { "type": "string" } → Must be a string with max 255 characters."billCycleDay": { "type": "number" } → Must be a number between 0-31."currency": { "type": "string" } → Only allows specific currency codes.
    -   Required vs. Optional Fields:"name" is required, meaning it must be present in every record."notes" is optional, meaning it can be left out of the record.
    -   Handling Arrays: `additionalEmailAddresses` is an array of strings, meaning multiple email addresses can be provided.
    -   Boolean Field Format: autoPay must be either "true" or "false"

4.  Creating a Data ingestion job with Bulk Jobs API

    When your CSV file is ready with object type and action, create a job with the following API.

    API Request

    curl --request POST \\ --url 'https://rest.zuora.com/bulk-data/bulk-jobs' \\ --header 'Authorization: Bearer <YOUR\_ACCESS\_TOKEN>' \\ --header 'Content-Type: application/json' \\ --data '{ "name": "Import Accounts", "description": "A test Import file", "objectType": "Account", "jobType": "Import", "fileType": "csv" }'

    Request Parameters

    | Field | Description |
    | --- | --- |
    | name | A name for the job. This is for your reference |
    | description | Optional, provide a description for the job |
    | objectType | The type of object selected for data ingestion, for e.g. “Account” |
    | JobType | The type of job: Import, Update, Cancel, or Delete |
    | file Type | Format of the data file |

    Sample Response{ "id": "dd447e38-6d9e-418d-9e61-6b553479727a", "uploadRequest": { "uri": "https://bulk-data-uploads-prod.s3.us-west-2.amazonaws.com", "fields": { "key": "dd447e38-6d9e-418d-9e61-6b553479727a", "bucket": "bulk-data-uploads-stg", "x-amz-algorithm": "AWS4-HMAC-SHA256", "x-amz-date": "...", "x-amz-credential": "...", "x-amz-security-token": "...", "x-amz-signature": "...", "Policy": "..." } }, "status": "Created", "jobType": "Import" }

    Key Information to use from the API Request

    -   id: This is your unique job ID. You'll need it in later steps to upload your file and track job progress.
    -   uploadRequest: This section provides the pre-signed S3 URL and necessary fields for securely uploading your JSON-lines file. This is a one-time use URL specific to this job.
    -   The uploadRequest.uri is the destination URL for uploading the file, and the fields contain all form fields required for the S3 POST upload.

5.  Upload CSV file
    After you've successfully created a bulk job using the Create Bulk Data API, the response will contain a pre-signed S3 POST URL and associated fields required to upload your data file. Before submitting the bulk job for processing, you must upload your CSV file to the specified S3 location.

    API Request curl --request POST \\ --url 'https://bulk-data-uploads-prod.s3.us-west-2.amazonaws.com/' \\ --header 'Content-Type: multipart/form-data' \\

    Sample Requestcurl --request POST \\ --url 'https://bulk-data-uploads-prod.s3.us-west-2.amazonaws.com/' \\ --header 'Content-Type: multipart/form-data' \\ --form bucket=bulk-data-uploads-stg \\ --form Policy=... \\ --form x-amz-date=... \\ --form x-amz-signature=... \\ --form x-amz-credential=... \\ --form x-amz-algorithm=AWS4-HMAC-SHA256 \\ --form key=... \\ --form x-amz-security-token=... \\ --form file=@/path/to/your/data.csv

    Key Information to use from the API Request

    -   Do not modify any of the form fields (bucket, Policy, x-amz-\*, key, etc.). These must be used exactly as provided in the Create Bulk Job API response.
    -   Only change the file parameter to point to your actual .csv file on your local machine.
    -   The file format must match the job's expected input format — in this case, CSV.

6.  Submit bulk job with CSV for processing
    Once you have created the bulk job and successfully uploaded the CSV file to S3, the final step is to submit the job for processing. For this, make a POST request to the job submissions endpoint, using the job ID returned in the response from the Creating Data Ingestion job Bulk data API in step 4.

    API Request curl --request POST \\ --url https://rest.zuora.com/bulk-data/bulk-jobs/dd447e38-6d9e-418d-9e61-6b553479727a/submissions \\ --header 'Authorization: Bearer e970cc57b54246c79dc44934fa30bb69'

    Key Information to use from the API Request

    -   Replace the job ID in the URL (dd447e38-6d9e-418d-9e61-6b553479727a) with the actual ID from your Create Job response.
    -   Ensure your access token (Bearer <token>) is valid and up to date.

7.  Query the Bulk Data Job
    After submitting the job, you can monitor its progress by querying the Bulk Job Summary API. Use the job ID returned from the Create Job API in the URL path.

    API Request curl --request GET \\ --url https://rest.zuora.com/bulk-data/bulk-jobs/dd447e38-6d9e-418d-9e61-6b553479727a/summary \\ --header 'Authorization: Bearer 1c5e8844694144e0b5034a2a1b3068e6'

    Sample Request{ "id": "dd447e38-6d9e-418d-9e61-6b553479727a", "name": "Import Accounts", "description": "A test Import file", "createdAt": "2025-01-29T03:02:14Z", "submittedAt": "2025-01-29T03:02:26Z", "status": "Completed", "rowCount": 20, "rowsSucceeded": 15, "rowsFailed": 5, "lastUpdatedAt": "2025-01-29T03:02:35Z", "objectType": "accounts-and-contacts", "jobType": "Import", "fileType": "csv" }

    Key Information to use from the API Request

    -   The status field will update as the job progresses (Submitted, In Progress, and eventually Completed).
    -   Poll the endpoint periodically until the job reaches Completed.
    -   Wait a few seconds or minutes between each poll, depending on the size (number of rows) of your job, to avoid unnecessary load.

8.  Download URLs for Source, Success, and Error Files
    Once the job has completed processing, you can download the result files to review the outcome of your import. These files provide a clear view of which records were successfully imported and which ones failed, along with error details. Replace <JOB\_ID> with the ID returned by the Create Job API, and <ACCESS\_TOKEN> with your valid OAuth token.

    API Requestcurl --request GET \\ --url https://rest.zuora.com/bulk-data/bulk-jobs/<JOB\_ID>/downloads \\ --header 'Authorization: Bearer <ACCESS\_TOKEN>'

    Sample Request { "jobId": "dd447e38-6d9e-418d-9e61-6b553479727a", "status": "Completed", "sourceFile": "https://...source.csv", "errorRowsFile": "https://...error\_rows.csv", "successRowsFile": "https://...success\_rows.csv", "delimiter": "," }

    Key Information to use from the API Request:

    -   sourceFile: URL to download the original source csv file you uploaded.

    -   successRowsFile: csv file containing all records that were successfully processed.

    -   errorRowsFile: csv file containing the records that failed, along with detailed error messages.

    -   delimiter: Specifies the delimiter used if your file was in CSV format.
