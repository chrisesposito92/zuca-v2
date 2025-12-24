---
title: "Overview of the Zuora Reporting API"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:54.906Z"
---

# Overview of the Zuora Reporting API

The purpose of the Zuora Reporting API

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Zuora Reporting API enables you to access reports that you have created in the Zuora UI, manage report runs, and export the results of report runs.

## Endpoints

The endpoints of the Reporting API are the same as the [endpoints of Zuora REST API](https://developer.zuora.com/api-references/api/overview/#section/Introduction/Access-to-the-API). Please refer to [Zuora API reference](https://developer.zuora.com/api-references/older-api/tag/Reporting/) for more information.

The following endpoints have been deprecated:

| Environment | API Endpoint |
| --- | --- |
| API Sandbox (US Cloud Data Center 1) | https://zconnect.sandbox.na.zuora.com/api/rest/v1 |
| Production (US Cloud Data Center 1) | https://zconnect.na.zuora.com/api/rest/v1 |
| API Sandbox (US Cloud Data Center 2) | https://zconnectsandbox.zuora.com/api/rest/v1 |
| Production (US Cloud Data Center 2) | https://zconnect.zuora.com/api/rest/v1 |
| API Sandbox (EU Data Center) | https://zconnect.sandbox.eu.zuora.com/api/rest/v1 |
| Production (EU Data Center) | https://zconnect.eu.zuora.com/api/rest/v1 |
| US Central Sandbox | https://zconnect-services0001.test.zuora.com/api/rest/v1 |
| EU Central Sandbox | https://zconnect-services0002.test.eu.zuora.com/api/rest/v1 |
| APAC Developer & Central Sandbox | https://zconnect-services0003.test.ap.zuora.com |
| APAC Production | http://zconnect-prod05.ap.zuora.com |

The following API operations are available:

-   [Search by Report Name](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name)
-   [Run a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report)
-   [Get Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-run)
-   [Get Last Completed Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-last-completed-report-run)
-   [Get Report Data](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-data)
-   [Export Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/export-report-run)
-   [Cancel a Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/cancel-a-report-run)

## Authentication

You can use the following methods to authenticate to the Reporting API:

-   Set the `apiAccessKeyId` and `apiSecretAccessKey` headers to the username and password of a Zuora user. For example:

    curl https://zconnectsandbox.zuora.com/api/rest/v1/reports/search?query=customer%20report \\ -H "apiAccessKeyId: {username}" \\ -H "apiSecretAccessKey: {password}" \\

    Do not include the braces when setting the `apiAccessKeyId` and `apiSecretAccessKey` headers. For example, if your Zuora username is user@example.com and your Zuora password is LfBeS7KK, the sample call above would be:

    curl https://zconnectsandbox.zuora.com/api/rest/v1/reports/search?query=customer%20report \\ -H "apiAccessKeyId: user@example.com" \\ -H "apiSecretAccessKey: LfBeS7KK" \\

    Note: Zuora recommends that you authenticate to the Reporting API using the credentials of a dedicated API user, rather than using your own Zuora credentials. See

    [Create an API User](/zuora-platform/system-management/administrator-settings/manage-users/create-an-api-user/create-an-api-user-process-flow)

    for more information.

    To ensure that the user credentials can be used to access the Reporting API, the user must have logged in to the Zuora UI and navigated to Reporting at least once. If you plan to authenticate to the Reporting API using the credentials of a dedicated API user, the user must navigate to Reporting in the Zuora UI before becoming a dedicated API user.

    When you authenticate to the Reporting API using the credentials of a dedicated API user, you can only access reports that are visible to the API user. To ensure that your reports are visible to the API user, save your reports in a shared folder. See [Folders and Sharing](/zuora-platform/data/reporting/use-reporting/folders-and-sharing) for more information.

-   Use the Zuora session token from your active browser session. Log in to Zuora and your browser will store a cookie that can be used to authenticate and send API requests. To use your browser session key to authenticate to the Reporting API, you will need an API client that is integrated with your browser.


The Reporting API does not support OAuth or Basic Authentication.

## Entity authentication

If your tenant has the [Multi-entity feature](https://knowledgecenter.zuora.com/Zuora_Platform/User_Management/Multi-entity) enabled, you can use the `entityId` or `entityName` header to specify which entity to authenticate against. For example:

curl https://zconnectsandbox.zuora.com/api/rest/v1/reports/search?query=customer%20report \\ -H "entityName: EuropeanBU" \\ -H "apiAccessKeyId: {username}" \\ -H "apiSecretAccessKey: {password}" \\

If you do not specify `entityId` or `entityName`, you will authenticate against the entity in which your user account was created. If you specify `entityId` and `entityName`, an error will occur.

You can use the Multi-entity: List entities REST API operation to retrieve entity information.

## Examples

You can use the Reporting API to export the results of a report that you created in the Zuora UI. At a high level, the process is:

1.  Use the report builder to create a report in the Zuora UI. See [Create a Summary Report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report) for more information.
2.  Use the Reporting API to obtain the internal identifier of the report.
3.  Use the Reporting API to run the report.
4.  Use the Reporting API to download the report results as a CSV file.

## Obtain the internal identifier of a report

Before you can run a report via the Reporting API, you must obtain the internal identifier of the report. To do this, use the [Search by Report Name](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name) operation.

For example, to find the internal identifier of a report called "Customer report" that you created in the Zuora UI, send the following request:

| Request | GET /api/rest/v1/reports/search?query=customer%20reportThe value of the query parameter must be URL-encoded. In this example, the space character in "customer report" is URL-encoded as %20. |
| --- | --- |
| Response Body (JSON) | { "success": true, "response": { "reports": [ { "createdBy": "2c92c0f956bc8fcb0156f8eee04b4d54", "updatedBy": "2c92c0f956bc8fcb0156f8eee04b4d54", "createdOn": "2018-04-13T01:52:10+0000", "updatedOn": "2018-04-13T01:52:10+0000", "id": "ff8080816293d35b0162bcb3e7780a75", "deleted": false, "name": "Customer report", "number": "REP0000007", "type": "Common", "datasource": "Account", "dsName": "Account", "namespace": "BASIC", "definition": "...", "userId": "2c92c0f956bc8fcb0156f8eee04b4d54", "creator": "user@example.com", "updater": "user@example.com", "favorite": false, "shared": true, "zuora": false, "hidden": false } ], "count": 1 } } |

The `response` > `reports` field in the response body contains an array of the reports that match the search query. The internal identifier of each report is given by the `id` field. In the above example, the internal identifier of the report is `ff8080816293d35b0162bcb3e7780a75`.

## Run a report

After you have obtained the internal identifier of the report, you can use the [Run a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report) operation to run the report. You must provide the internal identifier of the report in the request URL.

For example, to run the report as a summary report, send the following request:

| Request | POST /api/rest/v1/reports/ff8080816293d35b0162bcb3e7780a75/reportrun?viewType=Summary |
| --- | --- |
| Request Body (JSON) | Empty |
| Response Body (JSON) | { "success": true, "response": { "reportRunId": "ff808081629755b80162bcc5bd624d2d" } } |

The `response` > `reportRunId` field in the response body contains the internal identifier of the report run. This identifier is not the same as the internal identifier of the report.

After you have run the report, you can use the [Get Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-run) operation to check the status of the report run. You must provide the internal identifier of the report run in the request URL.

For example:

| Request | GET /api/rest/v1/reportruns/ff808081629755b80162bcc5bd624d2d |
| --- | --- |
| Response Body (JSON) | { "success": true, "response": { "reportType": "Summary", "id": "ff808081629755b80162bcc5bd624d2d", "reportId": "ff8080816293d35b0162bcb3e7780a75", "startedOn": "2018-04-13T02:11:38.464+0000", "status": "COMPLETED", "reportDefinition": "...", "updatedOn": "2018-04-13T02:11:40.008+0000" } } |

The `response` > `status` field in the response body indicates whether the report run finished successfully.

## Export the results of a report run

After the report run has finished successfully, you can use the [Export Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/export-report-run) operation to download the results as a CSV file. You must provide the internal identifier of the report run in the request URL.

For example:

| Request | GET /api/rest/v1/reportruns/export/ff808081629755b80162bcc5bd624d2d |
| --- | --- |
| Response Body (CSV) | Account: Currency Sum of Account: Account Balance EUR 4,800 USD 22,600.95 |

Alternatively, you can use the [Get Report Data](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-data) operation to download the results in JSON format.
