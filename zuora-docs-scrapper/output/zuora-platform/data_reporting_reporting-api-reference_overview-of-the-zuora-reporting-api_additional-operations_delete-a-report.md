---
title: "Delete a Report"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/delete-a-report"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:23.318Z"
---

# Delete a Report

A Reporting API that deletes the report you identify with the ReportId specified by the call

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Delete a Report Reporting API deletes the report you identify with the ReportId specified by the call.

Specify the ReportId as a request path value for the report you wish to delete as is shown in the example below. You can obtain the ReportId in many different ways. For example the ReportId value is returned as the `id` value in the JSON response to a call of [Search by Report Names](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name) , [Get Reports by Label](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-reports-by-label), or you can get it definitively from the response to the Create a Report or Save a Report calls.

## Request

API Sandbox:

`DELETE https://zconnectsandbox.zuora.com/api/rest/v1/reports/{ReportId}`

Production:

`DELETE https://zconnect.zuora.com/api/rest/v1/reports/{ReportId}`

The Delete a Report POST request body must be submitted as JSON content. Set the body content type to "application/json" in the request header: `Content-Type: application/json`

## Request path parameters

| ReportId | required | path | The unique identifier for a report.You can obtain the ReportId from the id value in the JSON response to a call of Search by Report Namesor you can get it definitively from the response to the Create a Report call. |
| --- | --- | --- | --- |

## Request body

No request body is used for the Delete a Report call.

## Response

A successful invocation of Delete a Report will result with a simple JSON response that the invocation was a success and that the report has been deleted.

## Example

HTTPS Request

`DELETE https://zconnectsandbox.zuora.com/api/rest/v1/reports/ff808081529f4e3401529fd373730070`

JSON Response:

{ "success" : true, "response" : "The report has been successfully deleted." }

## Exceptions

| Exception | Condition |
| --- | --- |
| An error occurred. The report with ID {XYZ} does not exist. "errorCode" : "ZAN-USAGE-REST-ERROR" | Check that the reportId is correct before submitting again.This error displays when a report has already been deleted. |
| <title>Bad Request</title><body> That's a bad request </body> | Check the URL for typos. |
| "message" : "Token could not be decrypted.","errorCode" : "loginFailed" | Check authentication header for errors. |
