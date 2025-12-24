---
title: "Get Report by ID"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-report-by-id"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:28.585Z"
---

# Get Report by ID

A Reporting API that returns the report definition and other metadata

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Report by ID Reporting API returns the report definition and other metadata.

Get Report by ID requires a `reportId` value for the request path value. You can obtain the `reportId` from the `id` value in the JSON response to a call of [Search by Report Names](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name), [Get Reports by Label](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-reports-by-label), or [Save a Report](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/save-a-report) to name a few.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/report/{reportId} |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reports/report/{reportId} |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/report/{reportId} |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reports/report/{reportId} |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/report/{reportId} |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reports/report/{reportId} |

## Request parameters

| reportId | required | path | The unique identifier for a report. You can get the reportId from the id value in the JSON response to Save a Report or get it from the response to either the Search by Report Namesor Get Reports by Labelcall. |
| --- | --- | --- | --- |

## Example

HTTPS Request

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/report/0000000050b0ade40150b4966498003f`

JSON Response

{ "success": true "response": { "createdBy": "8a8081d250440d000150a829710626fa" "updatedBy": "8a8081d250440d000150a821c273268a" "createdOn": "2015-10-29T10:12:46-0700" "updatedOn": "2015-11-30T12:28:47-0800" "id": "0000000050b0ade40150b4966498003f" "deleted": false "name": "Gross MRR (as of date) over time" "number": "REP0000270" "type": "Common" "datasource": "Rate Plan Charge" "dsName": "RatePlanCharge" "description": "RatePlanCharge.EffectiveDateRange (not New Date Range Field, but StartDate and EndDate), grouped by month Product.Name, Account.Currency; Sum of RatePlanCharge.MRR; Subscription.Status is not in "Expired", "Draft"" "definition": "{"rowFields":\[{"name":"Name","id":"Product.Name","label":"Name","type":"text","order":8,"dataSourceName":"Product","dataSourceLabel":"Product","dataSourceType":"Product","searchKey":"Product Name","sortDir":"NONE","sortPriority":-1,"groupable":true,"sortable":true,"custom":false,"filterable":true},{"name":"Currency","id":"Account.Currency","label":"Currency","type":"text","order":14,"dataSourceName":"Account","dataSourceLabel":"Account","dataSourceType":"Account","searchKey":"Account Currency","options":\["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMK","ZWD"\],"sortDir":"NONE","sortPriority":-1,"groupable":true,"sortable":true,"custom":false,"filterable":true}\],"colFields":\[{"name":"EffectiveStartDate","id":"RatePlanCharge.EffectiveStartDate","label":"Effective Start Date","type":"date","order":19,"dataSourceName":"RatePlanCharge","dataSourceLabel":"Rate Plan Charge","dataSourceType":"RatePlanCharge","searchKey":"Rate Plan Charge Effective Start Date","sortDir":"NONE","sortPriority":-1,"dateOptions":{"groupBy":"CM","cohortAnalysis":false},"groupable":true,"sortable":true,"custom":false,"filterable":true},{"name":"EffectiveEndDate","id":"ProductRatePlan.EffectiveEndDate","label":"Effective End Date","type":"date","order":4,"dataSourceName":"ProductRatePlan","dataSourceLabel":"Product Rate Plan","dataSourceType":"ProductRatePlan","searchKey":"Product Rate Plan Effective End Date","sortDir":"NONE","sortPriority":-1,"dateOptions":{"groupBy":"CM","cohortAnalysis":false},"groupable":true,"sortable":true,"custom":false,"filterable":true}\],"valFields":\[{"name":"MRR","id":"RatePlanCharge.MRR","label":"MRR","type":"decimal","aggregation":"SUM","order":23,"dataSourceName":"RatePlanCharge","dataSourceLabel":"Rate Plan Charge","dataSourceType":"RatePlanCharge","searchKey":"Rate Plan Charge MRR","extendedType":"Currency","relatedField":"Account.Currency","groupable":true,"sortable":true,"custom":false,"filterable":true}\],"summaryFilters":\[{"field":{"name":"Status","id":"Subscription.Status","label":"Status","type":"text","order":21,"dataSourceName":"Subscription","dataSourceLabel":"Subscription","dataSourceType":"Subscription","searchKey":"Subscription Status","options":\["Draft","Pending Activation","Pending Acceptance","Active","Cancelled","Expired"\],"groupable":true,"sortable":true,"custom":false,"filterable":true},"value":"Expired","operator":{"name":"is not equal to","value":"!="}},{"field":{"name":"Status","id":"Subscription.Status","label":"Status","type":"text","order":21,"dataSourceName":"Subscription","dataSourceLabel":"Subscription","dataSourceType":"Subscription","searchKey":"Subscription Status","options":\["Draft","Pending Activation","Pending Acceptance","Active","Cancelled","Expired"\],"groupable":true,"sortable":true,"custom":false,"filterable":true},"value":"Draft","operator":{"name":"is not equal to","value":"!="}}\],"detailFilters":\[\],"selectedFields":\[\],\\"shareAsReadOnly\\":false}" "version": 1 "userId": "8a8081d250440d000150a829710626fa" "creator": "tim@zuora.com" "updater": "gail@zuora.com" "executedOn": 1452683152000 "favorite": false "shared": true "zuora": false "hidden": false } }

## Exceptions

| Exception | Condition |
| --- | --- |
| The report with id {XYZ} does not exist.errorCode : ZAN-USAGE-REST-ERROR | Check that the reportId is correct before submitting again. |
| Bad Request | The API endpoint is likely malformed. Check the API URL request name space. |
