---
title: "Save a Report"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/save-a-report"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:43.902Z"
---

# Save a Report

A Reporting API that posts a report definition to create a new report

Note:

Contact Zuora Global Support to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Save a Report - Reporting API posts a report definition to create a new report.

Use the copy of the existing report definition as a template to make modifications according to your requirements. Name your new report and optionally assign one or several label IDs to make the report appear in the specified folders.

Note:

Description of the report definition is beyond the scope of this API call documentation, however here are a few pointers to get started modifying the copy of an existing report.

The minimum parameters needed are: `name`, `dsName`, `datasource`, and `definition`. All of those specific object values will be present in the response that gave you the report definition. Change what you want If you know the base object names or parameter values to specify.

Please note that all double-quotes in the definition need to be escaped with a forward-slash: `\"`

The Create a Report and Assign Labels Reporting API returns a JSON response with an `id`, the report ID, and it echoes back all the report metadata and report definition that you submitted in the request post body.

## Prerequisites

Because the report definitions are a little complex and the database objects names are difficult to get just right. It is nearly required that you get the report definition of a report that is close to what you want to create with this API call. You can get the report definition with the response to one of the following calls: [Get Report Details](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-details), [Get Report Details by Label](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-details-by-label), [Search by Report Name](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name), and [Get Report by ID](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-by-id).

Optionally you can assign one or more labels by specifying label IDs, as is shown in the example request body. You can get all your existing report label IDs in that environment by calling:

-   `GET https://zconnectsandbox.zuora.com/api/rest/v1` `/reportlabels`

-   `GET` `https://zconnect.zuora.com/api/rest/v1/` `reportlabels`


## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | POST https://zconnectsandbox.zuora.com/api/rest/v1/reports |
| Production (US Data Center) | POST https://zconnect.zuora.com/api/rest/v1/reports |
| API Sandbox (EU Data Center) | POST https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports |
| Production (EU Data Center) | POST https://zconnect.eu.zuora.com/api/rest/v1/reports |
| API Sandbox(US Cloud Data Center) | POST https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports |
| Production (US Cloud Data Center) | POST https://zconnect.na.zuora.com/api/rest/v1/reports |

This POST request must be submitted with: `Content-Type: application/json`

## Request path parameters

The next two sections provide information on the request path parameters.

## For a new report

There are no request path parameters to save the posted definition in the request body as a new report. The response to the POST will return your new `ReportId` ( `id` ).

## To update an existing report

If you want to update an existing report, append the `ReportId` of the existing report to the end of the Save a Report post call like this:

API Sandbox:

`POST https://zconnectsandbox.zuora.com/api/rest/v1/reports /{ReportId}`

Production:

`POST https://zconnect.zuora.com/api/rest/v1/reports /{ReportId}`

Note:

A successful post of a report definition to an existing `ReportId` will overwrite the previous report definition.

## Request body

The request body must include the following JSON parameters: `name`, `dsName`, `datasource`, `definition`, and optionally `labelIds`, as shown in the example request body below.

To make the report read-only, set `definition` > `shareAsReadOnly` to `true` in the request body. See [Folders and sharing](/zuora-platform/data/reporting/use-reporting/folders-and-sharing) for information about read-only reports.

## Response

A successful invocation of Create a Report and Assign La﻿bels returns a JSON response with a new and unique ReportId with the report metadata, details and definition. Refer to the JSON response in the example below to see how the response is structured.

## Example

HTTPS Request

This POST must be accompanied by a request body that includes name, dsName, datasource, and definition JSON pairs.

`POST https://zconnectsandbox.zuora.com/api/rest/v1/reports`

Request Body:

`{`

`"name"` `:` `"Zuora Invoice Report 2"` `,`

`"dsName"` `:` `"InvoiceItem"` `,`

`"datasource"` `:` `"Invoice Item"` `,`

`"definition"` `: "{\"rowFields\":[{\"name\":\"CreatedDate\",\"id\":\"Account.CreatedDate\",\"label\":\"Created Date\",\"type\":\"datetime\",\"order\":11,\"dataSourceName\":\"Account\",\"dataSourceLabel\":\"Account\",\"dataSourceType\":\"Account\",\"searchKey\":\"Account Created Date\",\"custom\":false,\"filterable\":true,\"sortable\":true,\"groupable\":true,\"dateOptions\":{\"groupBy\":\"NG\",\"cohortStartDate\":\"\"}}],\"colFields\":[{\"name\":\"AccountNumber\",\"id\":\"Account.AccountNumber\",\"label\":\"Account Number\",\"type\":\"text\",\"order\":1,\"dataSourceName\":\"Account\",\"dataSourceLabel\":\"Account\",\"dataSourceType\":\"Account\",\"searchKey\":\"Account Account Number\",\"custom\":false,\"filterable\":true,\"sortable\":true,\"groupable\":true}],\"valFields\":[{\"name\":\"SalesRepName\",\"id\":\"Account.SalesRepName\",\"label\":\"Sales Rep\",\"type\":\"text\",\"order\":28,\"dataSourceName\":\"Account\",\"dataSourceLabel\":\"Account\",\"dataSourceType\":\"Account\",\"searchKey\":\"Account Sales Rep\",\"custom\":false,\"filterable\":true,\"sortable\":true,\"groupable\":true,\"aggregation\":\"COUNT\"}],\"detailFilters\":[],\"summaryFilters\":[],\"selectedFields\":[],\"shareAsReadOnly\":false}",`

`"labelIds": ["00000000500258ba0150060a93460003", "8a808049510229980151023d6e36000c"]`

`}`

JSON Response:

`{ "success" : true, "response" : { "createdBy" : "2c92c0f84ed8ca02014ee6604b8903af", "updatedBy" : "2c92c0f84ed8ca02014ee6604b8903af", "createdOn" : 1460148476928, "updatedOn" : 1460148476928, "id" : "ff80808153ee88730153f7a19c00056e", "deleted" : false, "name" : "Zuora Invoice Report 2", "number" : "REP0000083", "type" : "Common", "datasource" : "Invoice Item", "dsName" : "InvoiceItem", "definition" : "{\"rowFields\":[{\"name\":\"CreatedDate\",\"id\":\"Account.CreatedDate\",\"label\":\"Created Date\",\"type\":\"datetime\",\"order\":11,\"dataSourceName\":\"Account\",\"dataSourceLabel\":\"Account\",\"dataSourceType\":\"Account\",\"searchKey\":\"Account Created Date\",\"custom\":false,\"filterable\":true,\"sortable\":true,\"groupable\":true,\"dateOptions\":{\"groupBy\":\"NG\",\"cohortStartDate\":\"\"}}],\"colFields\":[{\"name\":\"AccountNumber\",\"id\":\"Account.AccountNumber\",\"label\":\"Account Number\",\"type\":\"text\",\"order\":1,\"dataSourceName\":\"Account\",\"dataSourceLabel\":\"Account\",\"dataSourceType\":\"Account\",\"searchKey\":\"Account Account Number\",\"custom\":false,\"filterable\":true,\"sortable\":true,\"groupable\":true}],\"valFields\":[{\"name\":\"SalesRepName\",\"id\":\"Account.SalesRepName\",\"label\":\"Sales Rep\",\"type\":\"text\",\"order\":28,\"dataSourceName\":\"Account\",\"dataSourceLabel\":\"Account\",\"dataSourceType\":\"Account\",\"searchKey\":\"Account Sales Rep\",\"custom\":false,\"filterable\":true,\"sortable\":true,\"groupable\":true,\"aggregation\":\"COUNT\"}],\"detailFilters\":[],\"summaryFilters\":[],\"selectedFields\":[],\"shareAsReadOnly\":false}", "version" : 1, "userId" : "2c92c0f84ed8ca02014ee6604b8903af", "creator" : "yourlogin", "updater" : "yourlogin", "favorite" : false, "shared" : false, "zuora" : false, "hidden" : false } }`

## Exceptions

| Exception | Condition |
| --- | --- |
| Header: HTTP/1.1 401 Unauthorized | Basic authentication failed. Check apiAccessKeyId or apiSecretAccessKey. |
| Bad Request; That's a bad request | API endpoint or submission is incorrect. Check your URL. |
| Status 400: Bad Request<zanResponse success="false"><response xsi:type="xs:string">{ "errorId" : "a7983e5f-d58c-4be0-b732-9588ff95171c", "message" : "The datasource name is not a valid datasource.", "errorCode" : "ZAN-USAGE-REST-ERROR" }</response></zanResponse> | One or more of the label IDs submitted could not be found. Check that the value of the datasource is correct. |
| Status: 500: Internal Server Error<?xml version="1.0" encoding="UTF-8" standalone="yes"?><zanResponse success="false"><response xsi:type="xs:string">{ "errorId" : "3f6c48ff-c4e2-43e4-897a-69701cd11829", "message" : "Could not read JSON: Unexpected character ('n' (code 110)): was expecting comma to separate OBJECT entries\n at [Source: java.io.PushbackInputStream@35f78220; line: 5, column: 37]; nested exception is com.fasterxml.jackson.core.JsonParseException: Unexpected character ('n' (code 110)): was expecting comma to separate OBJECT entries\n at [Source: java.io.PushbackInputStream@35f78220; line: 5, column: 37]", "errorCode" : "ZAN-REST-ERROR"}</response></zanResponse> | A double quote in the report definition was not escaped correctly. Check that all double-quotes have backslashes to escape them. |
