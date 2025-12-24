---
title: "Get Reports by Label"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-reports-by-label"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:25.615Z"
---

# Get Reports by Label

A Reporting API that returns all reports with a particular label

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Reports by Label Reporting API returns all reports with a particular label, or if the `labelId` is not specified then all the reports in the My Reports folder are returned according to the user making the API request.

You can get a list of all labels and associated ``labelId`` ​ values with the List Labels call or you can call Get Shared Labels to return all shared folders (folders and labels are synonymous). The `labelId` ​ value is returned as the `id` field in the JSON response. The Create a New Label call also responds with the new label `id` after successful invocation.

Optional query parameters enable pagination and sorting of results by name or by date the report was last updated. More information on their use is shown in the examples and the Request Parameters description.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/{labelId}/report-details |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/reports/reportlabels/{labelId}/report-details |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/reportlabels/{labelId}/report-details |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/reports/reportlabels/{labelId}/report-details |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/reportlabels/{labelId}/report-details |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/reports/reportlabels/{labelId}/report-details |

## Request parameters

| labelId | optional | path | labelId is set to display all reports with the specified label. The value of labelId is a unique string that can be obtained from the List Labels call or Get Shared Labels call.labelId is not required. The following request gets all reports with the My Reports label (for the user making the call):GET https://zconnectsandbox.zuora.com/api/rest/v1/reports |
| --- | --- | --- | --- |
| paging | optional | query | Sets the page number and page size to support display of multiple pages of results. The page number determines the number of report results to skip, based on multiples of the pageSize. The value of paging takes the following form:{"pageNo": 0, "pageSize": 20}Where the respective integer values may be changed for the page number and the number of report results to display per page. |
| orderBy | optional | query | Sorts the results by name or updated_on value.The value of the orderBy statement request path parameter must match the following syntax exactly:[{"field": "updated_on", "ascend": "false"}]Where the value of field can be either "name" or "updated_on". The value of ascend can be either "true" or "false" when sorting on name. The value must be "false" for other field values. |

## Examples

GET My Reports Request

To get reports in the My Reports folder, remove reportlabels/labelId from the request.

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reports`

HTTPS Request

This request gets all reports that have a `labelId` with the value: `0000000050f401150150f52e9f080010` ​.

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/0000000050f401150150f52e9f080010/report-details`

HTTPS Request with Paging and Sorting

This request gets all reports that have a `labelId` with the value: `000000005087685a01508baa4d9701f5` ​.

The request query path parameters limit the display to the first ten reports according to an alphabetical sort order by name.

`GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/000000005087685a01508baa4d9701f5/report-details?paging={"pageNo": 0, "pageSize": 10}&orderBy=[{"field": "name", "ascend": "true"}]`

JSON Response

{ "success": true "response": { "totalCount": 37 "totalPage": 4 "pageNo": 0 "pageSize": 10 "elements": \[10\] 0: { "createdBy": "402892f9423062950142306f2f530002" "updatedBy": "402892f9423062950142306f2f530002" "createdOn": "2016-01-13T10:26:52-0800" "updatedOn": "2016-01-13T10:28:37-0800" "id": "ff8080815239fdde01523c3d8b660049" "deleted": false "name": "AA Days Overdue2" "number": "REP0000574" "type": "Common" "datasource": "Invoice Item" "dsName": "InvoiceItem" "definition": "{"rowFields":\[{"name":"Currency","id":"Account.Currency","label":"Currency","type":"text","order":14,"dataSourceName":"Account","dataSourceLabel":"Account","dataSourceType":"Account","searchKey":"Account Currency","options":\["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMK","ZWD"\],"sortDir":"ASC","sortPriority":-1,"sortable":true,"groupable":true,"custom":false,"filterable":true,"virtual":false},{"name":"DaysOverdue","id":"Invoice.DaysOverdue","label":"Days Overdue","type":"integer","order":31,"dataSourceName":"Invoice","dataSourceLabel":"Invoice","dataSourceType":"Invoice","searchKey":"Invoice Days Overdue","dependOnFields":\["DueDate"\],"sortDir":"ASC","sortPriority":-1,"numOptions":{"groupBy":"NG"},"sortable":true,"groupable":true,"custom":false,"filterable":true,"virtual":true}\],"colFields":\[\],"valFields":\[{"name":"ChargeAmount","id":"InvoiceItem.ChargeAmount","label":"Charge Amount","type":"decimal","aggregation":"SUM","order":3,"dataSourceName":"InvoiceItem","dataSourceLabel":"Invoice Item","dataSourceType":"InvoiceItem","searchKey":"Invoice Item Charge Amount","extendedType":"Currency","relatedField":"Account.Currency","sortable":true,"groupable":true,"custom":false,"filterable":true,"virtual":false}\],"detailFilters":\[\],"summaryFilters":\[\],"selectedFields":\[\],\\"shareAsReadOnly\\":false}" "version": 1 "userId": "402892f9423062950142306f2f530002" "creator": "revenue@zuora.com" "updater": "revenue@zuora.com" "favorite": false "shared": true "zuora": false "hidden": false } -1: { ... }

\-- Nine more report results omitted for brevity.

## Exceptions

| Exception | Condition |
| --- | --- |
| "success": true | Not really an exception. Your invocation was correct, but no reports were found with that label. |
| Required String parameter 'query' is not present. "errorCode" : "ZAN-REST-ERROR" | Query request parameter must be present to invoke this method. |
| Token time was {timeStamp}."errorCode" : "loginFailed" | Authentication failed. Check the values of apiAccessKeyId and apiSecretAccessKey. |
| 405: Method Not Allowed | This can occur if you submit a request with the reportlabels namespace but without the labelId.This request is not allowed:GET https://zconnectsandbox.zuora.com/api/rest/v1/reports/reportlabels/ |
