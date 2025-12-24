---
title: "Copy a Report and Assign Labels"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/copy-a-report-and-assign-labels"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:18.286Z"
---

# Copy a Report and Assign Labels

A Reporting API that copies an existing report specified by a ReportId and assigns a new and unique ReportId to the copy

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Copy a Report and Assign Labels Reporting API copies an existing report specified by a ReportId and assigns a new and unique ReportId to the copy. Optionally the method allows for the copy of the report to be renamed and for a list of labels to be associated with the new report copy. The call returns the report metadata, report details, report definition and a new and unique ReportId.

Copy a Report requires the ReportId value as a request query value. You can obtain the ReportId from the `id` value in the JSON response to a call of [Search by Report Names](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name) or [Get Reports by Label](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-reports-by-label) you can get it definitively from the response to the Create a Report call.

If you want to modify a copy of a report definition you may be more interested in [Create a Report and Assign a Label](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/create-a-report-and-assign-labels).

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | POST https://zconnectsandbox.zuora.com/api/rest/v1/reports/copy?from={ReportId}&labelIds={labelId1},{labelId2},{laelIdX}&name={NewReportName} |
| Production (US Data Center) | POST https://zconnect.zuora.com/api/rest/v1/reports/copy?from={ReportId}&labelIds={labelId1},{labelId2},{laelIdX}&name={NewReportName} |
| API Sandbox (EU Data Center) | POST https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/copy?from={ReportId}&labelIds={labelId1},{labelId2},{laelIdX}&name={NewReportName} |
| Production (EU Data Center) | POST https://zconnect.eu.zuora.com/api/rest/v1/reports/copy?from={ReportId}&labelIds={labelId1},{labelId2},{laelIdX}&name={NewReportName} |
| API Sandbox(US Cloud Data Center) | POST https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/copy?from={ReportId}&labelIds={labelId1},{labelId2},{laelIdX}&name={NewReportName} |
| Production (US Cloud Data Center) | POST https://zconnect.na.zuora.com/api/rest/v1/reports/copy?from={ReportId}&labelIds={labelId1},{labelId2},{laelIdX}&name={NewReportName} |

This POST request must be submitted with: `Content-Type: application/json`

## Request path parameters

| from | required | query | The value of from is set to the ReportId, the unique identifier, for the report you want to copy.You can obtain the ReportId from the id value in the JSON response to a call of Search by Report Namesor Get Reports by Label. |
| --- | --- | --- | --- |
| labelIds | optional | query | If present, the value of labelIds must be at least one labelId value or a list of comma separated labelId values.If you omit labelIds specification, then the report will be copied to the My Reports folder of the user who submits the method call. |
| name | optional | query | You can set the value of name to define the newly copied report name.If you do not set the name, the name will be the same as the copied report name.In all cases the new report will have a new and unique ReportID. |

## Request body

No request body is accepted for this method.

## Response

A successful invocation of Copy a Report and Assign Labels returns a JSON response with a new and unique ReportRunId with the report metadata, details and definition. Refer to the JSON response in the example below to see how the response is structured.

## Example

HTTPS Request

This POST copies the report, 000000004ffbd1e5014ffbee997c0000​, into two folders and renames the report to "Subs expiring <3months".

`POST https://zconnectsandbox.zuora.com/api/rest/v1/reports/copy?from=000000004ffbd1e5014ffbee997c0000&labelIds=00000000500258ba0150056829230000,00000000500f749901501a70c906001a&name=Subs expiring <3months`

JSON Response:

{ "success": true, "response": { "createdBy": "2c92c0f84ed8ca02014ee6604b8903af", "updatedBy": "2c92c0f84ed8ca02014ee6604b8903af", "createdOn": "2016-02-04T18:05:54-0800", "updatedOn": "2016-02-04T18:05:54-0800", "id": "ff80808152aeee960152af2db4960014", "deleted": false, "name": "Subs expiring <3months", "number": "REP0000067", "type": "Common", "datasource": "Rate Plan Charge", "dsName": "RatePlanCharge", "definition": "{\\"selectedFields\\":\[{\\"name\\":\\"Name\\",\\"id\\":\\"Account.Name\\",\\"label\\":\\"Name\\",\\"type\\":\\"text\\",\\"order\\":22,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Name\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"SalesRepName\\",\\"id\\":\\"Account.SalesRepName\\",\\"label\\":\\"Sales Rep\\",\\"type\\":\\"text\\",\\"order\\":28,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Sales Rep\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"ServiceActivationDate\\",\\"id\\":\\"Subscription.ServiceActivationDate\\",\\"label\\":\\"Service Activation Date\\",\\"type\\":\\"date\\",\\"order\\":20,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Service Activation Date\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"Status\\",\\"id\\":\\"Subscription.Status\\",\\"label\\":\\"Status\\",\\"type\\":\\"text\\",\\"order\\":21,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Status\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"TermEndDate\\",\\"id\\":\\"Subscription.TermEndDate\\",\\"label\\":\\"Term End Date\\",\\"type\\":\\"date\\",\\"order\\":24,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Term End Date\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"SubscriptionEndDate\\",\\"id\\":\\"Subscription.SubscriptionEndDate\\",\\"label\\":\\"Subscription End Date\\",\\"type\\":\\"date\\",\\"order\\":22,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Subscription End Date\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true}\],\\"detailFilters\\":\[{\\"field\\":{\\"name\\":\\"SubscriptionEndDate\\",\\"id\\":\\"Subscription.SubscriptionEndDate\\",\\"label\\":\\"Subscription End Date\\",\\"type\\":\\"date\\",\\"order\\":22,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Subscription End Date\\",\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},\\"value\\":\\"2016-02-04\\",\\"operator\\":{\\"name\\":\\"is equal to\\",\\"value\\":\\"=\\"}},{\\"field\\":{\\"name\\":\\"SubscriptionEndDate\\",\\"id\\":\\"Subscription.SubscriptionEndDate\\",\\"label\\":\\"Subscription End Date\\",\\"type\\":\\"date\\",\\"order\\":22,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Subscription End Date\\",\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},\\"value\\":\\"2016-02-04\\",\\"operator\\":{\\"name\\":\\"is equal to\\",\\"value\\":\\"=\\"}}\],\\"summaryFilters\\":\[{\\"field\\":{\\"name\\":\\"SubscriptionEndDate\\",\\"id\\":\\"Subscription.SubscriptionEndDate\\",\\"label\\":\\"Subscription End Date\\",\\"type\\":\\"date\\",\\"order\\":22,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Subscription End Date\\",\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},\\"value\\":\\"2016-02-04\\",\\"operator\\":{\\"name\\":\\"is equal to\\",\\"value\\":\\"=\\"}},{\\"field\\":{\\"name\\":\\"SubscriptionEndDate\\",\\"id\\":\\"Subscription.SubscriptionEndDate\\",\\"label\\":\\"Subscription End Date\\",\\"type\\":\\"date\\",\\"order\\":22,\\"dataSourceName\\":\\"Subscription\\",\\"dataSourceLabel\\":\\"Subscription\\",\\"dataSourceType\\":\\"Subscription\\",\\"searchKey\\":\\"Subscription Subscription End Date\\",\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},\\"value\\":\\"2016-02-04\\",\\"operator\\":{\\"name\\":\\"is equal to\\",\\"value\\":\\"=\\"}}\],\\"rowFields\\":\[\],\\"colFields\\":\[\],\\"valFields\\":\[\],\\"shareAsReadOnly\\":false}", "version": 1, "prototypeId": "000000004ffbd1e5014ffbee997c0000", "userId": "2c92c0f84ed8ca02014ee6604b8903af", "creator": "tim.riley@zuora.com", "updater": "tim.riley@zuora.com", "favorite": false, "shared": false, "zuora": false, "hidden": false } }

## Exceptions

| Exception | Condition |
| --- | --- |
| { "success": false, "response": "{\n \"errorId\" : \"{ErrorId}\",\n \"message\" : \"Cannot find any matching label(s) for id(s) provided in request.\",\n \"errorCode\" : \"ZAN-USAGE-REST-ERROR\"\n}", "links": null} | One or more of the labelId submitted could not be found. Check that the value of the labelId is correct. |
| { "success":false, "response":"{\n \"errorId\" : \"{ErrorId}\",\n \"message\" : \"An error occurred. The report with ID {ReportId} does not exist.\",\n \"errorCode\" : \"ZAN-USAGE-REST-ERROR\"\n}", "links":null} | The ReportId submitted was not found. Check that the value of the ReportId is correct. |
| Bad Request; That's a bad request | API endpoint or submission is incorrect. |
| header: HTTP/1.1 401 Unauthorized | Basic authentication failed. Check apiAccessKeyId or apiSecretAccessKey. |
