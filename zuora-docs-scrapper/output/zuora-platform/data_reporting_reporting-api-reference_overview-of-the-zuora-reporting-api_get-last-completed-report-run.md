---
title: "Get Last Completed Report Run"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-last-completed-report-run"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:05.246Z"
---

# Get Last Completed Report Run

A Reporting API that returns the report definition and the ReportRunId of the latest completed report run by the current user in the last 60 days

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Last Completed Report Run Reporting API returns the report definition and the ReportRunId of the latest completed report run by the current user in the last 60 days.

The ReportRunId appears in the response as `id.` ReportRunId is a common input for many Reporting API calls. The ReportRunId value is used as an input parameter value to get the report run result data using either [Get Report Data](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/get-report-data) or [Export Report Run](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/export-report-run)Export Report Run.

If the current user did not run the report using [Run a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report) and the report was created by a different user, Get Last Completed Report Run will fail. For instance, Get Last Completed Report Run will fail if the latest completed report run is a scheduled run of a report that was created by a different user. In this case, Get Last Completed Report Run returns the following warning:

The current user has not run this report yet. Please run the report before retrying.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/{reportId}/reportruns/latest |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reports/{reportId}/reportruns/latest |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/{reportId}/reportruns/latest |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reports/{reportId}/reportruns/latest |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/{reportId}/reportruns/latest |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reports/{reportId}/reportruns/latest |

## Request parameter

| reportID | required | path | The ID of the report. You can get the reportID from the JSON response to Search by Report Names. |
| --- | --- | --- | --- |

## Example

HTTPS request:

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/ff808081521b051c01521d9f81c70021/reportruns/latest​`

JSON response:

{ "success": true, "response": { "reportType": "Detail", "id": "ff8080815242b1810152577c07480931", "reportId": "ff808081521b051c01521d9f81c70021", "startedOn": 1453166692000, "status": "COMPLETED", "reportDefinition": "{\\"datasource\\":\\"Invoice Item Adjustment\\",\\"id\\":\\"ff808081521b051c01521d9f81c70021\\",\\"name\\":\\"Daily Invoices Detail Report\\",\\"dsName\\":\\"InvoiceItemAdjustment\\",\\"number\\":\\"REP0000532\\",\\"description\\":\\"This report will be run daily Monday through Friday.\\",\\"creator\\":\\"tim@zuora.com\\",\\"updater\\":\\"revenue@zuora.com\\",\\"viewType\\":\\"Detail\\",\\"updatedDate\\":\\"Jan 13, 2016\\",\\"zuora\\":false,\\"hidden\\":false,\\"shared\\":true,\\"favorite\\":true,\\"viewFields\\":{\\"rowFields\\":\[\],\\"colFields\\":\[\],\\"valFields\\":\[\],\\"selectedFields\\":\[{\\"name\\":\\"CreatedDate\\",\\"id\\":\\"Invoice.CreatedDate\\",\\"label\\":\\"Created Date\\",\\"type\\":\\"datetime\\",\\"order\\":7,\\"dataSourceName\\":\\"Invoice\\",\\"dataSourceLabel\\":\\"Invoice\\",\\"dataSourceType\\":\\"Invoice\\",\\"searchKey\\":\\"Invoice Created Date\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"Currency\\",\\"id\\":\\"Account.Currency\\",\\"label\\":\\"Currency\\",\\"type\\":\\"text\\",\\"order\\":14,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Currency\\",\\"options\\":\[\\"AED\\",\\"AFN\\",\\"ALL\\",\\"AMD\\",\\"ANG\\",\\"AOA\\",\\"ARS\\",\\"AUD\\",\\"AWG\\",\\"AZN\\",\\"BAM\\",\\"BBD\\",\\"BDT\\",\\"BGN\\",\\"BHD\\",\\"BIF\\",\\"BMD\\",\\"BND\\",\\"BOB\\",\\"BRL\\",\\"BSD\\",\\"BTN\\",\\"BWP\\",\\"BYR\\",\\"BZD\\",\\"CAD\\",\\"CDF\\",\\"CHF\\",\\"CLP\\",\\"CNY\\",\\"COP\\",\\"CRC\\",\\"CUP\\",\\"CVE\\",\\"CZK\\",\\"DJF\\",\\"DKK\\",\\"DOP\\",\\"DZD\\",\\"EEK\\",\\"EGP\\",\\"ERN\\",\\"ETB\\",\\"EUR\\",\\"FJD\\",\\"FKP\\",\\"GBP\\",\\"GEL\\",\\"GHS\\",\\"GIP\\",\\"GMD\\",\\"GNF\\",\\"GTQ\\",\\"GYD\\",\\"HKD\\",\\"HNL\\",\\"HRK\\",\\"HTG\\",\\"HUF\\",\\"IDR\\",\\"ILS\\",\\"INR\\",\\"IQD\\",\\"IRR\\",\\"ISK\\",\\"JMD\\",\\"JOD\\",\\"JPY\\",\\"KES\\",\\"KGS\\",\\"KHR\\",\\"KMF\\",\\"KPW\\",\\"KRW\\",\\"KWD\\",\\"KYD\\",\\"KZT\\",\\"LAK\\",\\"LBP\\",\\"LKR\\",\\"LRD\\",\\"LSL\\",\\"LTL\\",\\"LVL\\",\\"LYD\\",\\"MAD\\",\\"MDL\\",\\"MGA\\",\\"MKD\\",\\"MMK\\",\\"MNT\\",\\"MOP\\",\\"MRO\\",\\"MUR\\",\\"MVR\\",\\"MWK\\",\\"MXN\\",\\"MYR\\",\\"MZN\\",\\"NAD\\",\\"NGN\\",\\"NIO\\",\\"NOK\\",\\"NPR\\",\\"NZD\\",\\"OMR\\",\\"PAB\\",\\"PEN\\",\\"PGK\\",\\"PHP\\",\\"PKR\\",\\"PLN\\",\\"PYG\\",\\"QAR\\",\\"RON\\",\\"RSD\\",\\"RUB\\",\\"RWF\\",\\"SAR\\",\\"SBD\\",\\"SCR\\",\\"SDG\\",\\"SEK\\",\\"SGD\\",\\"SHP\\",\\"SLL\\",\\"SOS\\",\\"SRD\\",\\"STD\\",\\"SVC\\",\\"SYP\\",\\"SZL\\",\\"THB\\",\\"TJS\\",\\"TND\\",\\"TOP\\",\\"TRY\\",\\"TTD\\",\\"TWD\\",\\"TZS\\",\\"UAH\\",\\"UGX\\",\\"USD\\",\\"UYU\\",\\"UZS\\",\\"VEF\\",\\"VND\\",\\"VUV\\",\\"WST\\",\\"XAF\\",\\"XCD\\",\\"XOF\\",\\"XPF\\",\\"YER\\",\\"ZAR\\",\\"ZMK\\",\\"ZWD\\"\],\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"Amount\\",\\"id\\":\\"Invoice.Amount\\",\\"label\\":\\"Amount\\",\\"type\\":\\"decimal\\",\\"order\\":2,\\"dataSourceName\\":\\"Invoice\\",\\"dataSourceLabel\\":\\"Invoice\\",\\"dataSourceType\\":\\"Invoice\\",\\"searchKey\\":\\"Invoice Amount\\",\\"extendedType\\":\\"Currency\\",\\"relatedField\\":\\"Account.Currency\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true},{\\"name\\":\\"AccountId\\",\\"id\\":\\"BillToContact.AccountId\\",\\"label\\":\\"Account ID\\",\\"type\\":\\"text\\",\\"order\\":1,\\"dataSourceName\\":\\"BillToContact\\",\\"dataSourceLabel\\":\\"Bill To\\",\\"dataSourceType\\":\\"Contact\\",\\"searchKey\\":\\"Bill To Account ID\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"sortable\\":true,\\"groupable\\":true}\],\\"detailFilters\\":\[\],\\"summaryFilters\\":\[\],\\"shareAsReadOnly\\":false}}", "updatedOn": 1453166695000 } }
