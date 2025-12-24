---
title: "Get Report Details by Label"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-details-by-label"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:33.610Z"
---

# Get Report Details by Label

A Reporting API returns report details and metadata for all reports that have the specified label

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Report Details by Label Reporting API returns report details and metadata for all reports that have the specified label.

Get Report Details by Label requires a LabelId value as a request path value. LabelId is available from the response to many different API calls. You can call List Labels or Create a New Label and the LabelId will be the `id` value in the JSON response.

You can also make a call like the following to get a list of all labels under the root label:

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reportlabels`

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/{LabelId}/report-details |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reports/reportlabels/{LabelId}/report-details |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/reportlabels/{LabelId}/report-details |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reports/reportlabels/{LabelId}/report-details |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/reportlabels/{LabelId}/report-details |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reports/reportlabels/{LabelId}/report-details |

## Request parameter

| labelId | optional | path | labelId is set to display all reports with the specified label. The value of labelId is a unique string that can be obtained from the List Labels call or Create a New Label call. |
| --- | --- | --- | --- |

## Example

HTTPS Request

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/0000000050f7c2700150f8ee1d580090/report-details`

JSON Response;

{ "success" : true, "response" : \[ { "createdBy" : "8a8081d250440d000150a829710626fa", "updatedBy" : "8a8081d250440d000150a829710626fa", "createdOn" : "2015-11-20T13:04:03-0800", "updatedOn" : "2015-11-20T13:07:35-0800", "id" : "0000000051267fea015126b6083f0085", "deleted" : false, "name" : "Account Sales Rep", "number" : "REP0000376", "type" : "Common", "datasource" : "Invoice Item", "dsName" : "InvoiceItem", "definition" : "{\\"rowFields\\":\[{\\"name\\":\\"AccountNumber\\",\\"id\\":\\"Account.AccountNumber\\",\\"label\\":\\"Account Number\\",\\"type\\":\\"text\\",\\"order\\":1,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Account Number\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"groupable\\":true,\\"sortable\\":true,\\"filterable\\":true,\\"custom\\":false},{\\"name\\":\\"Currency\\",\\"id\\":\\"Account.Currency\\",\\"label\\":\\"Currency\\",\\"type\\":\\"text\\",\\"order\\":14,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Currency\\",\\"options\\":\[\\"AED\\",\\"AFN\\",\\"ALL\\",\\"AMD\\",\\"ANG\\",\\"AOA\\",\\"ARS\\",\\"AUD\\",\\"AWG\\",\\"AZN\\",\\"BAM\\",\\"BBD\\",\\"BDT\\",\\"BGN\\",\\"BHD\\",\\"BIF\\",\\"BMD\\",\\"BND\\",\\"BOB\\",\\"BRL\\",\\"BSD\\",\\"BTN\\",\\"BWP\\",\\"BYR\\",\\"BZD\\",\\"CAD\\",\\"CDF\\",\\"CHF\\",\\"CLP\\",\\"CNY\\",\\"COP\\",\\"CRC\\",\\"CUP\\",\\"CVE\\",\\"CZK\\",\\"DJF\\",\\"DKK\\",\\"DOP\\",\\"DZD\\",\\"EEK\\",\\"EGP\\",\\"ERN\\",\\"ETB\\",\\"EUR\\",\\"FJD\\",\\"FKP\\",\\"GBP\\",\\"GEL\\",\\"GHS\\",\\"GIP\\",\\"GMD\\",\\"GNF\\",\\"GTQ\\",\\"GYD\\",\\"HKD\\",\\"HNL\\",\\"HRK\\",\\"HTG\\",\\"HUF\\",\\"IDR\\",\\"ILS\\",\\"INR\\",\\"IQD\\",\\"IRR\\",\\"ISK\\",\\"JMD\\",\\"JOD\\",\\"JPY\\",\\"KES\\",\\"KGS\\",\\"KHR\\",\\"KMF\\",\\"KPW\\",\\"KRW\\",\\"KWD\\",\\"KYD\\",\\"KZT\\",\\"LAK\\",\\"LBP\\",\\"LKR\\",\\"LRD\\",\\"LSL\\",\\"LTL\\",\\"LVL\\",\\"LYD\\",\\"MAD\\",\\"MDL\\",\\"MGA\\",\\"MKD\\",\\"MMK\\",\\"MNT\\",\\"MOP\\",\\"MRO\\",\\"MUR\\",\\"MVR\\",\\"MWK\\",\\"MXN\\",\\"MYR\\",\\"MZN\\",\\"NAD\\",\\"NGN\\",\\"NIO\\",\\"NOK\\",\\"NPR\\",\\"NZD\\",\\"OMR\\",\\"PAB\\",\\"PEN\\",\\"PGK\\",\\"PHP\\",\\"PKR\\",\\"PLN\\",\\"PYG\\",\\"QAR\\",\\"RON\\",\\"RSD\\",\\"RUB\\",\\"RWF\\",\\"SAR\\",\\"SBD\\",\\"SCR\\",\\"SDG\\",\\"SEK\\",\\"SGD\\",\\"SHP\\",\\"SLL\\",\\"SOS\\",\\"SRD\\",\\"STD\\",\\"SVC\\",\\"SYP\\",\\"SZL\\",\\"THB\\",\\"TJS\\",\\"TND\\",\\"TOP\\",\\"TRY\\",\\"TTD\\",\\"TWD\\",\\"TZS\\",\\"UAH\\",\\"UGX\\",\\"USD\\",\\"UYU\\",\\"UZS\\",\\"VEF\\",\\"VND\\",\\"VUV\\",\\"WST\\",\\"XAF\\",\\"XCD\\",\\"XOF\\",\\"XPF\\",\\"YER\\",\\"ZAR\\",\\"ZMK\\",\\"ZWD\\"\],\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"groupable\\":true,\\"sortable\\":true,\\"filterable\\":true,\\"custom\\":false}\],\\"colFields\\":\[{\\"name\\":\\"SalesRepName\\",\\"id\\":\\"Account.SalesRepName\\",\\"label\\":\\"Sales Rep\\",\\"type\\":\\"text\\",\\"order\\":28,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Sales Rep\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":-1,\\"groupable\\":true,\\"sortable\\":true,\\"filterable\\":true,\\"custom\\":false}\],\\"valFields\\":\[{\\"name\\":\\"CreditBalance\\",\\"id\\":\\"Account.CreditBalance\\",\\"label\\":\\"Credit Balance\\",\\"type\\":\\"decimal\\",\\"aggregation\\":\\"SUM\\",\\"order\\":12,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Credit Balance\\",\\"extendedType\\":\\"Currency\\",\\"relatedField\\":\\"Account.Currency\\",\\"groupable\\":true,\\"sortable\\":true,\\"filterable\\":true,\\"custom\\":false},{\\"name\\":\\"Status\\",\\"id\\":\\"Account.Status\\",\\"label\\":\\"Status\\",\\"type\\":\\"picklist\\",\\"aggregation\\":\\"COUNT\\",\\"order\\":29,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Status\\",\\"options\\":\[\\"Draft\\",\\"Active\\",\\"Canceled\\"\],\\"groupable\\":true,\\"sortable\\":true,\\"filterable\\":true,\\"custom\\":false}\],\\"detailFilters\\":\[{\\"field\\":{\\"name\\":\\"BillCycleDay\\",\\"id\\":\\"Account.BillCycleDay\\",\\"label\\":\\"Bill Cycle Day\\",\\"type\\":\\"integer\\",\\"order\\":8,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Bill Cycle Day\\",\\"options\\":\[\\"0\\",\\"1\\",\\"2\\",\\"3\\",\\"4\\",\\"5\\",\\"6\\",\\"7\\",\\"8\\",\\"9\\",\\"10\\",\\"11\\",\\"12\\",\\"13\\",\\"14\\",\\"15\\",\\"16\\",\\"17\\",\\"18\\",\\"19\\",\\"20\\",\\"21\\",\\"22\\",\\"23\\",\\"24\\",\\"25\\",\\"26\\",\\"27\\",\\"28\\",\\"29\\",\\"30\\",\\"31\\"\],\\"groupable\\":true,\\"sortable\\":true,\\"filterable\\":true,\\"custom\\":false},\\"value\\":\[2,\\"3\\",\\"4\\",\\"5\\"\],\\"operator\\":{\\"name\\":\\"not in\\",\\"value\\":\\"not in\\"}}\],\\"summaryFilters\\":\[\],\\"selectedFields\\":\[\],\\"shareAsReadOnly\\":false}", "version" : 1, "userId" : "8a8081d250440d000150a829710626fa", "creator" : "tim@zuora.com", "updater" : "tim@zuora.com", "executedOn" : 1448053655000, "favorite" : false, "shared" : true, "zuora" : false, "hidden" : false }, { "createdBy" : "8a8081d250440d000150a829710626fa", "updatedBy" : "8a8081d250440d000150a829710626fa", "createdOn" : "2016-01-08T11:19:37-0800", "updatedOn" : "2016-01-27T23:43:18-0800", "id" : "ff808081521afeb0015222ae076e004b", "deleted" : false, "name" : "Account Name and Status", "number" : "REP0000536", "type" : "Common", "datasource" : "Invoice Item Adjustment", "dsName" : "InvoiceItemAdjustment", "description" : "Simple test", "definition" : "{\\"selectedFields\\":\[{\\"name\\":\\"Name\\",\\"id\\":\\"Account.Name\\",\\"label\\":\\"Name\\",\\"type\\":\\"text\\",\\"order\\":22,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Name\\",\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"groupable\\":true,\\"sortable\\":true},{\\"name\\":\\"Status\\",\\"id\\":\\"Account.Status\\",\\"label\\":\\"Status\\",\\"type\\":\\"picklist\\",\\"order\\":29,\\"dataSourceName\\":\\"Account\\",\\"dataSourceLabel\\":\\"Account\\",\\"dataSourceType\\":\\"Account\\",\\"searchKey\\":\\"Account Status\\",\\"options\\":\[\\"Draft\\",\\"Active\\",\\"Canceled\\"\],\\"sortDir\\":\\"NONE\\",\\"sortPriority\\":0,\\"custom\\":false,\\"filterable\\":true,\\"virtual\\":false,\\"groupable\\":true,\\"sortable\\":true}\],\\"rowFields\\":\[\],\\"colFields\\":\[\],\\"valFields\\":\[\],\\"detailFilters\\":\[\],\\"summaryFilters\\":\[\],\\"shareAsReadOnly\\":false}", "version" : 1, "userId" : "8a8081d250440d000150a829710626fa", "creator" : "tim@zuora.com", "updater" : "tim@zuora.com", "executedOn" : 1453966998000, "favorite" : false, "shared" : true, "zuora" : false, "hidden" : false } \] }

## Exceptions

| Exception | Condition |
| --- | --- |
| "success": true | Not really an exception. Your invocation was correct, but no reports were found with that label. |
| Required String parameter 'query' is not present. "errorCode" : "ZAN-REST-ERROR" | Query request parameter must be present to invoke this method. |
| Token time was {timeStamp}."errorCode" : "loginFailed" | Authentication failed. Check the values of apiAccessKeyId and apiSecretAccessKey. |
| 405: Method Not Allowed | This can occur if you submit a request with the reportlabels namespace but without the labelId.This request is not allowed:GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/ |
