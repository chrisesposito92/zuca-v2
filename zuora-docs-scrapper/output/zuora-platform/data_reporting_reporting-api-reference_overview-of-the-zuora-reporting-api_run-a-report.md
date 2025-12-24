---
title: "Run a Report"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/run-a-report"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:00.245Z"
---

# Run a Report

A Reporting API that starts a new report run and returns the ReportRunId

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Run a Report Reporting API starts a new report run and returns the ReportRunId.

Run a Report requires the ReportId value as a request path value. You can obtain the ReportId from the `id` value in the JSON response to a call of [Search by Report Names](/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/search-by-report-name) or you can get it definitively from the response to the Create a Report call.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | POST https://zconnectsandbox.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| Production (US Data Center) | POST https://zconnect.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| API Sandbox (EU Data Center) | POST https://zconnect.sandbox.eu.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| Production (EU Data Center) | POST https://zconnect.eu.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| API Sandbox(US Cloud Data Center) | POST https://zconnect.sandbox.na.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| Production (US Cloud Data Center) | POST https://zconnect.na.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| US Central Sandbox | POST https://zconnect-services0001.test.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |
| EU Central Sandbox | POST https://zconnect-services0002.test.eu.zuora.com/api/rest/v1/reports/{ReportId}/reportrun?viewType={viewType} |

The Run a Report POST request body must be submitted as JSON content. Set the body content type to "application/json" in the request header: `Content-Type: application/json`

## Request path parameters

| ReportId | required | path | The unique identifier for a report.You can obtain the ReportId from the id value in the JSON response to a call of Search by Report Namesor you can get it definitively from the response to the Create a Report call. |
| --- | --- | --- | --- |
| viewType | required | query | The value of viewType must be either Detail or Summary depending on the report definition. |

## Request body

You can use the request body of Run a Report to specify filters to apply when running the report. However, you should only specify filters if you need to override the filters that are defined in the report.

Instead of specifying filters in the request body of Run a Report , you can define filters via the report builder in the Zuora UI. For example:

![Reporting_Filters_For_API_2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f60e5355-24c5-438e-9dc2-60cc4e558b35?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2MGU1MzU1LTI0YzUtNDM4ZS05ZGMyLTYwY2M0ZTU1OGIzNSIsImV4cCI6MTc2NjY4ODUzOCwianRpIjoiYzI4YjdmZmJhYWUyNGQ3Y2I3NDdiZjM3Mzc4NWYzMGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Hx72tirrqIiS8ZDqfv4wyzLK8hMUZnpOEeL2Bdb3XQg)

To specify these filters when calling Run a Report, submit the following JSON in the request body:

\[ { "logicalOperator": { "value": "OR", "label": "OPERATOR\_OR", "name": "or" }, "filterClauses": \[ { "field": { "name": "Name", "id": "Product.Name", "label": "Name", "type": "text", "custom": false, "virtual": false, "filterable": true, "sortable": true, "groupable": true, "fxEnabled": false, "order": 8, "dataSourceName": "Product", "dataSourceLabel": "Product", "dataSourceType": "Product", "searchKey": "Product Name" }, "value": "Hockey", "operator": { "name": "contains", "value": "contains" } }, { "field": { "name": "EffectiveStartDate", "id": "Product.EffectiveStartDate", "label": "Effective Start Date", "type": "date", "custom": false, "virtual": false, "filterable": true, "sortable": true, "groupable": true, "fxEnabled": false, "order": 6, "dataSourceName": "Product", "dataSourceLabel": "Product", "dataSourceType": "Product", "searchKey": "Product Effective Start Date" }, "value": "2018-03-31", "operator": { "name": "is greater than", "value": ">" } } \] } \]
