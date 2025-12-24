---
title: "Export Report Run"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/export-report-run"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:10.293Z"
---

# Export Report Run

A Reporting API operation that returns report run results in CSV format

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Export Report Run Reporting API operation returns report run results in CSV format.

Export Report Run requires a ReportRunId value in the request path. You can obtain the ReportRunId from the `id` value in the JSON response to a call of [Get Last Completed Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-last-completed-report-run) or get it from the response to the [Run a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report) call.

If you plan to use Export Report Run and [Get Last Completed Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-last-completed-report-run) to export the results of scheduled reports, Zuora recommends that the same user creates the report, schedules the report, and calls the Reporting API.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| US Central Sandbox | GET https://zconnect-services0001.test.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |
| EU Central Sandbox | GET https://zconnect-services0002.test.eu.zuora.com/api/rest/v1/reportruns/export/{ReportRunId}?pivoted={Pivoted} |

## Request parameter

| ReportRunId | required | path | The unique identifier for a report run. You can get the ReportRunId from the id value in the JSON response to Run a Report or get it from the response to the Get Last Completed Report Runcall. |
| --- | --- | --- | --- |
| Pivoted | optional | boolean | Specifies the layout of summary report results. This parameter does not affect detail report results.If true, the rows and columns in the CSV file are grouped in the same way as the report results displayed in the Zuora user interface.If false (default), the CSV file is formatted as a flat table. |

## Response

The response body contains a CSV file encoded as Little-endian UTF-16 Unicode text. The value of the `Content-Type` header in the response is `text/csv;charset=utf-16`.

Note:

The response content type is not affected by the content type you request when calling the API.

The fields in the CSV file are separated by tab characters.

## Example

Curl Request

curl -H "apiAccessKeyId: {username}" -H "apiSecretAccessKey: {password}" https://zconnectsandbox.zuora.com/api/rest/v1/reportruns/export/ff808081693d821801694c91a9e406b9 > exported.csv

The file type of exported.csv is Little-endian UTF-16 Unicode text.

Exported CSV File

Account: Currency Account: Name SUM of 'Account: Account Balance' EUR East Inc -120.2 USD North Services 1,430.5 USD West Corp 279.75

## Exceptions

| Exception | Condition |
| --- | --- |
| "message" : "There are errors when exporting the report.""errorCode" : "ZAN-USAGE-REST-ERROR" | The ReportRunId value may not be correct. Check the value submitted. |
| Bad Request; That's a bad request | API endpoint or submission is incorrect. |
| header: HTTP/1.1 401 Unauthorized | Basic authentication failed. Check apiAccessKeyId or apiSecretAccessKey. |
