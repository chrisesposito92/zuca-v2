---
title: "Get Report Labels for ReportID"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-labels-for-reportid"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:35.291Z"
---

# Get Report Labels for ReportID

A Reporting API returns label names and label details such as `lableId` associated with a specified ReportId

Note: Contact

[Zuora Global Support](http://support.zuora.com)

to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Report Labels for a ReportId Reporting API returns label names and label details such as `lableId` associated with a specified ReportId.

Get Report Labels for a ReportId requires a ReportId value as a request path value. ReportId is available from the response to many different API calls. You can call [Search by Report Name](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name) or [Get Reports by Label](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-reports-by-label) and the ReportId will be the `id` value in the JSON response. You can also make the following call to list all reports to get the ReportId: `GET https://zconnectsandbox.zuora.com/api/rest/v1/reports`

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/{ReportId}/reportlabels |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reports/{ReportId}/reportlabels |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/{ReportId}/reportlabels |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reports/{ReportId}/reportlabels |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/{ReportId}/reportlabels |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reports/{ReportId}/reportlabels |

## Request parameters

| ReportId | required | path | The unique identifier for a report. You can get the ReportId from the id value in the JSON response to Search by Report Name or Get Reports by Label call. |
| --- | --- | --- | --- |

## Response

A successful invocation of Get Report Labels for a ReportId returns a JSON response with a list of report labels that includes LableId.

## Example

HTTPS Request

GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/0000000050deb5e80150fe5c73990040/reportlabels

JSON Response:

{ "success" : true, "response" : \[ { "createdBy" : "2c92c0f84ed8ca02014ee6604b8903af", "updatedBy" : "2c92c0f84ed8ca02014ee6604b8903af", "createdOn" : "2015-09-25T12:45:24-0700", "updatedOn" : "2015-09-25T12:45:24-0700", "id" : "00000000500258ba01500609e9790002", "deleted" : false, "name" : "Shared Reports", "type" : "Private", "parentId" : "000000004f531a08014f608ef1cd0065", "pshareId" : "000000004f531a08014f608ef1bc0064", "order" : 2, "userId" : "2c92c0f84ed8ca02014ee6604b8903af", "creator" : "tim.riley@zuora.com", "updater" : "tim.riley@zuora.com", "favorite" : false, "shared" : true, "zuora" : false, "home" : false, "root" : false, "labelNamePath" : "/1/Shared Reports" }, { "createdBy" : "2c92c0f84ed8ca02014ee6604b8903af", "updatedBy" : "2c92c0f84ed8ca02014ee6604b8903af", "createdOn" : "2015-09-25T12:46:08-0700", "updatedOn" : "2015-09-25T12:46:08-0700", "id" : "00000000500258ba0150060a93460003", "deleted" : false, "name" : "Invoices", "type" : "Private", "parentId" : "000000004f531a08014f608ef1cd0065", "order" : 3, "userId" : "2c92c0f84ed8ca02014ee6604b8903af", "creator" : "tim.riley@zuora.com", "updater" : "tim.riley@zuora.com", "favorite" : false, "shared" : false, "zuora" : false, "home" : false, "root" : false, "labelNamePath" : "/1/Invoices" } \] }

## Exceptions

| Exception | Condition |
| --- | --- |
| <?xml version="1.0" encoding="UTF-8" standalone="yes"?><zanResponse success="false"><response xsi:type="xs:string">{ "errorId" : "{ErrorId}", "message" : "An error occurred. The label with ID {BadReportId} does not exist.", "errorCode" : "ZAN-USAGE-REST-ERROR"}</response></zanResponse> | The ReportId submitted was not found. Check that the value of the ReportId is correct. |
| Bad Request; That's a bad request | API endpoint or submission is incorrect. |
| header: HTTP/1.1 401 Unauthorized | Basic authentication failed. Check apiAccessKeyId or apiSecretAccessKey. |
