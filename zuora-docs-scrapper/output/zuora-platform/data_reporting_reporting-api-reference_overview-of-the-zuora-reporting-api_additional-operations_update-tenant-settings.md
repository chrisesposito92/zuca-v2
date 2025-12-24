---
title: "Update Tenant Settings"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/update-tenant-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:46.124Z"
---

# Update Tenant Settings

A Reporting API that posts a JSON formatted name value pair of email domains that will be allowed as recipients of scheduled report results

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Update Tenant Settings Reporting API posts a JSON formatted name value pair of email domains that will be allowed as recipients of scheduled report results. Once a domain or set of domains are set as allowed email domains then report schedules can not be saved and run if any email recipient address does not match the specified mask.

Posting an update to the tenant settings overrides any previous email domain setting for the tenant.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | POST https://zconnectsandbox.zuora.com/api/rest/v1/settings |
| Production (US Data Center) | POST https://zconnect.zuora.com/api/rest/v1/settings |
| API Sandbox (EU Data Center) | POST https://zconnect.sandbox.eu.zuora.com/api/rest/v1/settings |
| Production (EU Data Center) | POST https://zconnect.eu.zuora.com/api/rest/v1/settings |
| API Sandbox(US Cloud Data Center) | POST https://zconnect.sandbox.na.zuora.com/api/rest/v1/settings |
| Production (US Cloud Data Center) | POST https://zconnect.na.zuora.com/api/rest/v1/settings |

## Request POST Body

The request post body is a very simple JSON pair. One or more values can be submitted alone or as a comma separated list that takes the following form:

`}`

Posting the following request body would remove any defined domain mask.

`{ "emailDomains" : [] }`

## Example

HTTPS Request

`POST https://zconnectsandbox.zuora.com/api/rest/v1/settings`

JSON Response

{ "success" : true, "response" : { "status" : "OK", "code" : 100, "message" : "Success" } }

## Exceptions

| Exception | Condition |
| --- | --- |
| Bad Request | The API endpoint is likely malformed. Check the API URL request name space. |
