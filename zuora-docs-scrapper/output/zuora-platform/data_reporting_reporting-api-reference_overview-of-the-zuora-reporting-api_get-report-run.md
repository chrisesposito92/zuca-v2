---
title: "Get Report Run"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-run"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:02.966Z"
---

# Get Report Run

A Reporting API that returns details of the specified report run

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Report Run Reporting API returns details of the specified report run. You can use Get Report Run to check the status of a report run. To retrieve the results of a completed report run, use [Get Report Data](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-data) or [Export Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/export-report-run) .

To retrieve details of the last completed run of a report, use [Get Last Completed Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-last-completed-report-run) .

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reportruns/{reportRunId} |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reportruns/{reportRunId} |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reportruns/{reportRunId} |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reportruns/{reportRunId} |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reportruns/{reportRunId} |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reportruns/{reportRunId} |

## Request parameter

| reportRunId | required | path | The ID of the report run. You can get the ID from the JSON response to Run a Report. |
| --- | --- | --- | --- |

## Response

The JSON response contains the following details about the report run:

| Response Field | Description |
| --- | --- |
| id | The ID of the report run. This value matches the value of the reportRunId request parameter. |
| status | The status of the report run:"STARTED" - The report run has started. The query has not been submitted."QUERYDATA" - The query has been submitted. The results have not been received."PROCESSINGDATA" - The results have been received. The results are being processed."COMPLETED" - The report run has finished successfully. The results are available for download using Get Report Data or Export Report Run."CANCELLED" - The report run was canceled by the user."INVALID" - The report definition or data is invalid."ERROR" - The report run has finished with an error. |
| startedOn | The timestamp of when the report run was started. |
| updatedOn | The timestamp of when the status of the report run was last updated. |
| reportID | The ID of the report that was run. |
| reportType | The report type: "Detail" or "Summary". |
| reportDefinition | The report definition. |

## Example

HTTPS request:

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reportruns/ff808081529f4e3401529fd61f080074`

JSON response:

{ "success": true, "response": { "reportType": "Detail", "id": "ff808081529f4e3401529fd61f080074", "reportId": "ff808081529f4e3401529fd373730070", "startedOn": 1453166692000, "status": "COMPLETED", "reportDefinition": "...", "updatedOn": 1453166695000 } }
