---
title: "Cancel a Report Run"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/cancel-a-report-run"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:13.241Z"
---

# Cancel a Report Run

A Reporting API that terminates a report run that is currently in-progress

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Cancel a Report Run Reporting API terminates a report run that is currently in-progress.

To Cancel a Report Run send a DELETE call with a ReportRunId value in the request path as is shown below.

## Prerequisite

You can obtain the ReportRunId from the `id` value in the JSON response to the [Run a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report) call. Alternatively, you can get a list of all reports with an "in-progress" status by posting a query like the following:

Request:

`POST https://zconnectsandbox.zuora.com/api/rest/v1reportruns?status=STARTED&status=QUERYDATA&status=PROCESSINGDATA`

Request body:

`{"columns": "reportId","startedOn","reportType","createdByUserProfile.username","status"," "],"pagination":{"currentPage":1,"pageSize":250},"sort":[{"field":"startedOn","direction":"desc","priority":0}]}`

That POST returns a list of reports with a status of in-progress. The metadata for each report returned includes the ReportRunId expressed as the `id` value in the JSON response.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | POST https://zconnectsandbox.zuora.com/api/rest/v1/reportruns/{ReportRunId} |
| Production (US Data Center) | POST https://zconnect.zuora.com/api/rest/v1/reportruns/{ReportRunId} |
| API Sandbox (EU Data Center) | POST https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reportruns/{ReportRunId} |
| Production (EU Data Center) | POST https://zconnect.eu.zuora.com/api/rest/v1/reportruns/{ReportRunId} |
| API Sandbox(US Cloud Data Center) | POST https://zconnect.sandbox.na.zuora.com/api/rest/v1/reportruns/{ReportRunId} |
| Production (US Cloud Data Center) | POST https://zconnect.na.zuora.com/api/rest/v1/reportruns/{ReportRunId} |

## Request path parameters

| ReportRunId | required | path | The unique identifier for a report run. You can get the ReportRunId from the id value in the JSON response to Run a Report |
| --- | --- | --- | --- |

## Example

HTTPS Request

`DELETE https://zconnectsandbox.zuora.com/api/rest/v1/rest/v1/reportruns/ff808081527368d401527b24d20900d9`

JSON Response

{ "success" : true "response" : "The report run has been canceled" }

If the report run was cancelled previously, then the response would be.

{ "success": true "response": "The report run was canceled" }
