---
title: "Object POSTUsage"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTUsage/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:08.487Z"
---

## CRUD: Create a usage record

Creates a usage record.

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| X-Zuora-WSDL-Version | stringDefault: 79Zuora WSDL version number. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| AccountId | stringThe ID of the account associated with the usage data. This field is only required if no value is specified for the AccountNumber field. Character limit: 32 Values: a valid account ID. |
| --- | --- |
| AccountNumber | stringThe number of the account associated with the usage data. This field is only required if no value is specified for the AccountId field. Character limit: 50 Values: a valid account number. |
| ChargeId | stringThe OrginalId of the rate plan charge related to the usage record, e.g., 2c9081a03c63c94c013c6873357a0117 Character limit: 32 Values: a valid rate plan charge OriginalID. |
| ChargeNumber | string <= 50 charactersA unique number for the rate plan charge related to the usage record. For example, C-00000007. |
| Description | string <= 200 charactersA description of the usage record. |
| EndDateTime | string <date-time>The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation. Character limit: 29 Values: a valid date and time value. |
| ProductRatePlanChargeNumber | stringSpecify a product rate plan charge number so that you can charge your customer with a dynamic usage charge for the corresponding uploaded usage record.To use this field, you must set the X-Zuora-WSDL-Version request header to 146 or higher. Otherwise, an error occurs.Note: This field is only available if you have the Dynamic Usage Charges feature enabled. |
| Quantityrequired | number <double>Indicates the number of units used.Character limit: 16Values: A valid decimal amount. |
| StartDateTimerequired | string <date-time>The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the EndDateTime, the StartDateTime field does affect usage calculation. Character limit: 29 Values: a valid date and time value |
| SubscriptionId | string <= 32 charactersThe original ID of the subscription that contains the fees related to the usage data.The ID of a subscription might change when you create amendments to the subscription. It is good practice to use the unique subscription number that you can specify in the SubscriptionNumber field. |
| SubscriptionNumber | string <= 100 charactersThe unique identifier number of the subscription that contains the fees related to the usage data.It is good practice to use this field when creating usage records. |
| UOMrequired | stringSpecifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in Billing Settings. Character limit: Values: a valid unit of measure |
| UniqueKey | stringThe unique external reference of the usage record. See Upload usage record with unique key for information on how to use this field. Note: This field is only available if you set the X-Zuora-WSDL-Version request header to 114 or later. This field is only available if you have the Prepaid with Drawdown feature or the Unbilled Usage feature enabled. See Upload usage record with unique key for more information. |
| property name*additional property | anyCustom fields of the Usage object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

400

OK

401

OK

post/v1/object/usage

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "AccountId": "8ad09378905a5af201907ca1edb524c2",

-   "UOM": "Minutes",

-   "Quantity": 200,

-   "StartDateTime": "2024-06-01T02:00:00.000+01:00"


}`

Response samples

-   200
-   400
-   401

application/json

responseresponse

Copy

`{

-   "Id": "8ad08ae29085a77b0190908bfdd67abb",

-   "Success": true


}`
