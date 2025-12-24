---
title: "Resource codes for Billing and Payments REST API"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/rest-api/resource-codes-for-billing-and-payments-rest-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:24.635Z"
---

# Resource codes for Billing and Payments REST API

Check the resource codes for Billing and Payments REST API.

The 8-digit error code of Billing REST API consists of two components: a 6-digit REST API resource code, and a 2-digit error category code. This page focuses on the resource codes only. All available error category codes are summarized in [Error category codes](https://developer.zuora.com/docs/guides/error-codes/#error-category-codes) for the v1 API.

The resource code indicates the Billing REST API resource, typically a field of a Zuora object, on which the issue occurs. For example, 531003 refers to the `termType` field of the `subscription` object. The resource code that corresponds to an object without any field indicates that the issue is related to this object but not one specific field. One resource code might correspond to multiple API operations or resources.

Note that Zuora determines resource codes based on the request payload. Therefore, if GET and DELETE requests that do not contain payloads fail, you will get `500000` as the resource code, which indicates an unknown object and an unknown field. The error category code of these requests is valid and still follows the rules described in the [Error category codes](https://developer.zuora.com/docs/guides/error-codes/#error-category-codes) section. In such case, you can refer to the returned error message to troubleshoot.

The following information is a full list of all effective resource codes of Zuora Billing REST API. You can also download this [CSV file](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/16bf434f-bddb-4f38-a2e6-ffcb14191dab?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE2YmY0MzRmLWJkZGItNGYzOC1hMmU2LWZmY2IxNDE5MWRhYiIsImV4cCI6MTc2NjY0MTA0MiwianRpIjoiMjgyM2MxNjhhNjg3NGFlNjhhNTIxODYzN2FjYmIwYzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3Ax4CU2CdWilR0r9V1l154I0XF2nloGutKWjUd1H6lU&response-content-disposition=attachment%3B+filename%3D%22Billing_REST_API_Resource_Code_-_2025_09_18.csv%22) that includes all Billing resource codes for reference.
