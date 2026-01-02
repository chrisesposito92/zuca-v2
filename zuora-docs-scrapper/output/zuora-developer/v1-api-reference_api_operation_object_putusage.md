---
title: "Object PUTUsage"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_PUTUsage/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:08.031Z"
---

## CRUD: Update a usage record

Updates a usage record.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringObject id |
| --- | --- |

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| EndDateTime | string <date-time>The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation. Character limit: 29 Values: a valid date and time value |
| --- | --- |
| Quantity | number <double>Indicates the number of units used.Character limit: 16Values: A valid decimal amount. |
| RbeStatus | stringIndicates if the rating and billing engine (RBE) processed usage data for an invoice. Character limit: 9 Values: automatically generated to be one of the following values: Importing, Pending, Processed |
| StartDateTime | string <date-time>The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the EndDateTime, the StartDateTime field does affect usage calculation. Character limit: 29 Values: a valid date and time value |
| UOM | stringSpecifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in Billing Settings. Character limit: Values: a valid unit of measure |
| property name*additional property | anyCustom fields of the Usage object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

401

Unauthorized

put/v1/object/usage/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "EndDateTime": "2024-06-30T02:00:00.000+01:00"


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

`{

-   "Id": "8ad08ae29085a77b0190908bfdd67abb",

-   "Success": true


}`
