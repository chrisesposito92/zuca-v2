---
title: "Get Report Data"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-data"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:07.964Z"
---

# Get Report Data

A Reporting API that returns the report run data results in a JSON array

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Report Data Reporting API returns the report run data results in a JSON array.

Get Report Data requires a ReportRunId value as a request path value. You can obtain the ReportRunId from the `id` value in the JSON response to a call of [Get Last Completed Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-last-completed-report-run) or get it from the response to the [Run a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report) call.

The Get Report Data request must also include the search parameters: `offset` and `pageSize`. These can be used to build paginated displays of report run data. Offset is the number of records that will be omitted from beginning of the report result set and the total number of records in the response is set by the pageSize value. When coding to support a paginated report results display, remember to ensure your report definition has appropriate sort ordering defined to get a reliable result set with successive Get Report Data calls.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reportruns/reportdata/{ReportRunId}?offset=1&pageSize=200 |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reportruns/reportdata/{ReportRunId}?offset=1&pageSize=200 |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reportruns/reportdata/{ReportRunId}?offset=1&pageSize=200 |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reportruns/reportdata/{ReportRunId}?offset=1&pageSize=200 |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reportruns/reportdata/{ReportRunId}?offset=1&pageSize=200 |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reportruns/reportdata/{ReportRunId}?offset=1&pageSize=200 |

## Request parameters

| ReportRunId | required | path | The unique identifier for a report run. You can get the ReportRunId from the id value in the JSON response to Run a Report or get it from the response to the Get Last Completed Report Runcall. |
| --- | --- | --- | --- |
| offset | required | query | Offset is usually set to a value of 1 to skip the header row. When implementing multiple pages of report result data, the value of offset becomes multiples of the pageSize to omit results displayed on previous pages. |
| pageSize | required | query | Sets the number of records that will be retrieved by the GET call. |

## Example

HTTPS Request

`GET https://zconnectsandbox.zuora.com/rest/v1/reportruns/reportdata/ff8080815242b012015261b9f77009a0?offset=1&pageSize=100`

JSON Response

{ "success" : true, "response" : { "page" : \[ { "Invoice.CreatedDate" : "Dec 7, 2013 2:18:00 PM", "Account.Currency" : "USD", "Invoice.Amount" : "900.00", "BillToContact.AccountId" : "2c90838f42cf16030142cf215ecb0014" }, { "Invoice.CreatedDate" : "Nov 7, 2013 11:20:00 AM", "Account.Currency" : "USD", "Invoice.Amount" : "400.00", "BillToContact.AccountId" : "402892f9423062950142308c64e503f3" }, { "Invoice.CreatedDate" : "Jan 20, 2014 3:19:01 PM", "Account.Currency" : "EUR", "Invoice.Amount" : "984.00", "BillToContact.AccountId" : "8a858290439c517a0143b1edf32800ba" }, { "Invoice.CreatedDate" : "Jan 20, 2014 3:24:00 PM", "Account.Currency" : "CAD", "Invoice.Amount" : "1,729.76", "BillToContact.AccountId" : "8a858290439c517a0143b1f4229c013f" } \], "size" : 100, "offset" : 1, "total" : 4 } }
