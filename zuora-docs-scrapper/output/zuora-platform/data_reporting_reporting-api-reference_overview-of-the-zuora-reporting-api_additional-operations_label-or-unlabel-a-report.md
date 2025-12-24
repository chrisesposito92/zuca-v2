---
title: "Label or Unlabel a Report"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/label-or-unlabel-a-report"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:40.954Z"
---

# Label or Unlabel a Report

A Reporting API that posts one or more `labelId` attribute values (folders) to an existing report definition

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Label a Report Reporting API posts one or more `labelId` attribute values (folders) to an existing report definition. The report `labelId` attributes make the report accessible from the corresponding folders.

As a preferred alternative you may want to set `labelId` s when you [Copy a Report and Assign Labels](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/copy-a-report-and-assign-labels) or when you [Save a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/save-a-report).

To remove label attributes you can make a `DELETE` call to remove the reports's `labelId` attributes using a request body with an array of `labelId` s that you want to be removed from the specified `ReportId`.

## Prerequisites

The following sections explain the prerequisites.

## `ReportId`

The `ReportId` to which you want to add or remove labels must be known prior to using these Reporting API calls. The `ReportId` is added as a request path value as is shown in the Request section below.

You can obtain the `ReportId` ( `id` ) from the JSON response to the call: [Search by Report Names](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name). `ReportId` is also given in the response to [Create a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/create-a-report-and-assign-labels) or [Save a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/save-a-report) .

## `labelIds`

Folder `labelIds` must also be known ahead of time to add or remove them from a report. Folder `labelIds` are added to the request body as an array of one, or many labels.

## Getting `labelIds`

You can get all the current report label Ids for a particular report with the response to [Get Report Labels for ReportId](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-labels-for-reportid), or you can call the following to get all labels under the root label:

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reportlabels`

`GET https://zconnect.zuora.com/api/rest/v1/reportlabels`

Or add in a parent `labelId` to get subordinate `labelId` s with a call like the following:

`GET https://zconnectsandbox.zuora.com/api/rest/v1reportlabels/{labelId}/reportlabels`

`GET https://zconnect.zuora.com/api/rest/v1reportlabels/{labelId}/reportlabels`

## Request

The next two sections include the request information.

## To add labels to a report

API Sandbox:

`POST https://zconnectsandbox.zuora.com/api/rest/v1/reports` `/{ReportId}/` `reportlabels`

Production:

`POST https://zconnect.zuora.com/api/rest/v1/reports` `/{ReportId}/` `reportlabels`

## To remove labels from a report

API Sandbox:

`DELETE https://zconnectsandbox.zuora.com/api/rest/v1/reports` `/{ReportId}/` `reportlabels`

Production:

`DELETE https://zconnect.zuora.com/api/rest/v1/reports` `/{ReportId}/` `reportlabels`

This POST request must be submitted with: `Content-Type: application/json`

## Request body

The request body must include the `labelIds,` as a comma-separated list inside a bracketed array (enclosed by \[square brackets\]) as is shown in the example request body below.

## Response

A successful invocation of Save a Report and Assign La﻿bels returns a JSON response with a new and unique ReportId with the report metadata, details and definition. Refer to the JSON response in the example below to see how the response is structured.

## Example

HTTPS Requests

To add labels to a report with a `ReportId` : `ab123`

`POST https://zconnectsandbox.zuora.com/api/rest/v1/reports/` `ab123` `/reportlabels`

To remove labels from a report with a `ReportId` : `ab123`

`DELETE https://zconnectsandbox.zuora.com/api/rest/v1/reports/` `ab123` `/reportlabels`

Both the `POST` and the `DELETE` REST method calls must be accompanied by a JSON request body containing a comma-separated array of `labelId` s.

Request Body:

The request body has the same format regardless of whether the REST method is `POST` or `DELETE`.

`{`

`"labelIds":["00000000500258ba0150060a9346000","ff80808152431fff0152a42a27f9024d"]`

`}`

JSON Response:

`{`

`"success": true`

`"response": "The reports label status has successfully been changed."`

`}`

## Exceptions

| Exception | Condition |
| --- | --- |
| Header: HTTP/1.1 401 Unauthorized | Basic authentication failed. Check apiAccessKeyId or apiSecretAccessKey. |
| Bad Request; That's a bad request | API endpoint or submission is incorrect. Check your URL. |
| Status 400: Bad Request<zanResponse success="false"><response xsi:type="xs:string">{ "errorId" : "1d644185-1b92-4ffc-a5f4-740c96d9e187", "message" : "Cannot find any matching label(s) for id(s) provided in request.", "errorCode" : "ZAN-USAGE-REST-ERROR" }</response></zanResponse> | One or more of the labelId values submitted could not be found. Check that the value of the labelId is correct. |
| Status 500: Internal Server Error"Required request body content is missing: org.springframework.web.method.HandlerMethod$HandlerMethodParameter@49d1be25" | POST and DELETE for update of report labels requires a request body message with the labelId values. |
| <?xml version="1.0" encoding="UTF-8" standalone="yes" ?><zanResponse success="false"><response xsi:type="xs:string">{ "errorId" : "e57be6da-ef02-418b-9b7b-8bcecbcdd51c", "message" : "Could not read JSON: Can not deserialize instance of java.util.ArrayList out of VALUE_STRING token\n at [Source: java.io.PushbackInputStream@48a96409; line: 1, column: 41] (through reference chain: com.zuora.zan.reportlabel.controller.LabelParam[\"labelIds\"]); nested exception is com.fasterxml.jackson.databind.JsonMappingException: Can not deserialize instance of java.util.ArrayList out of VALUE_STRING token\n at [Source: java.io.PushbackInputStream@48a96409; line: 1, column: 41] (through reference chain: com.zuora.zan.reportlabel.controller.LabelParam[\"labelIds\"])", "errorCode" : "ZAN-REST-ERROR" }</response></zanResponse> | This can happen because the request body labelId values are not enclosed within square brackets as an array: ["labelId1","labelId2", "labelIdN"]. |
