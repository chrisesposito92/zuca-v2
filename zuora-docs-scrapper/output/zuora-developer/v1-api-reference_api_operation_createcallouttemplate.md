---
title: "CreateCalloutTemplate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/CreateCalloutTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:07.359Z"
---

## Create a callout template

Creates a callout template.

This operation supports creating the callout template for all event types:

-   To create a callout template for a standard event, you must specify the `eventCategory` field. For more information about standard event category codes, see [Standard event category code for events and notifications](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Events_and_Notifications).
-   To create a callout template for a Zuora custom event, custom event, or custom scheduled event, you must specify the `eventTypeName` field. For more information, see [Zuora custom events](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_C_Zuora_Custom_Events), [Custom event triggers](https://developer.zuora.com/api-references/api/tag/Custom-Event-Triggers/), and [Custom scheduled events](https://developer.zuora.com/api-references/api/tag/Custom-Scheduled-Events/).

You must specify either `eventCategory` or `eventTypeName`, but not both at the same time.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json
required

The request body to create a callout template.

One of:

Callout - without authenticationCallout - Base authenticationCallout - OAuth 2.0 authentication

Common information for callout templates.

| active | booleanDefault: trueThe status of the callout. The default is true. |
| --- | --- |
| calloutBaseurlrequired | string <url> >= 10 charactersThe callout URL. It must start with https://.Zuora uses port 443 to send callout notifications by default. If you want to use other ports, submit a request at Zuora Global Support.You can add merge fields in the callout URL. For example, https://mywebsite.com/zuora/{{DataSource.Account.Id}}. For more information, see Merge field syntax for email and callout templates. |
| calloutHeaders | object (calloutHeader)Container for custom callout headers. Each custom callout header consists of a header name and a header value. |
| calloutParams | object (calloutParameter)Container for callout parameters sent in the request body. Each callout parameter consists of a parameter name and a parameter value. |
| calloutRetry | booleanDefault: trueSpecified whether to retry the callout when the callout fails. The default value is true. |
| certificate | stringThe SSL certificate for the domain of the callout receiver server specified in calloutBaseurl.The value must be in PEM format, which typically starts with -----BEGIN CERTIFICATE----- and ends with -----END CERTIFICATE-----.Specifying the SSL certificate can eliminate SSL certificate errors (HTTP status code 495) for callout notifications. |
| customRequestBody | stringCustomized request body. This field is available only for callouts whose Content-Type in the request body is application/json. The value must be in JSON format and double quotes in the value must be escaped.You can add merge fields to the request body. For example, {\"AccountNumber\": \"{{DataSource.Account.AccountNumber}}\",\"AccountId\": \"{{DataSource.Account.Id}}\"}. For more information, see Merge field syntax for email and callout templates.You must set useCustomRequestBody to true if you want to customize the callout request body with this field. Alternatively, you can use the calloutParams field. |
| description | string <= 255 charactersDescription for the callout template. |
| eventCategory | numberThe event category code for a standard event that the callout template relates to.This field is required when creating callout templates for standard events.For the list of supported standard event category codes, see Standard event category code for events and notifications. |
| eventTypeName | string non-emptyThe name of a custom event that the callout template relates to.This field is required when creating callout templates for Zuora custom events, custom events, or custom scheduled events.If this field is provided, you can specify the event namespace in the eventTypeNamespace field. |
| eventTypeNamespace | stringDefault: "user.notification"The namespace of the eventTypeName field. It indicates who created the event and which namespace the event is assigned to.Supported values are as follows:com.zuora.notification: events that are created by Zuora. This value applies to Zuora custom events.user.notification: events that are created by tenant users. This value applies to custom events and custom scheduled events. This is the default value.For example, if you want to create a callout template that relates to the OrderActionProcessed event, which is a Zuora custom event, you must specify com.zuora.notification for this field.Enum: "user.notification" "com.zuora.notification" |
| hmacAlgorithm | stringThe hash function Zuora uses to generate the signed data for HMAC authentication.Enum: "MD5" "SHA-1" "SHA-224" "SHA-256" "SHA-384" "SHA-512" |
| hmacData | stringThe message to be authenticated for HMAC authentication.You can use merge fields in this value:{{Request.Headers.<header_name>}}: Refers to the value of a particular request header. For example, {{Request.Headers.Date}} refers to the value of the request header called Date.{{Request.Body}}: Refers to the request body.Other merge fields: See Merge field syntax for email and callout templates. |
| hmacKey | stringThe header key that Zuora uses to send the header value for HMAC authentication. The header value is specified in the hmacValue field and typically contains the signed data. |
| hmacOutputFormat | stringThe format of the signed data for HMAC authentication.Enum: "BASE64" "HEX" |
| hmacSecret | stringThe shared secret key that Zuora uses to generate the signed data for HMAC authentication. |
| hmacValue | stringThe header value for HMAC authentication. The header key is specified in the hmacKey field.You can use merge fields in this value:{{Request.HMAC.Signed}}: Refers to the signed data.Other merge fields: See Merge field syntax for email and callout templates.The following is a header value example: The algorithm is SHA-256 and the signed data is {{Request.HMAC.Signed}}. |
| httpMethodrequired | stringThe HTTP method of the callout.Enum: "POST" "GET" "PUT" "PATCH" "DELETE" |
| namerequired | string <= 255 charactersThe name of the callout template. It must be unique across all callout templates. |
| useCustomRequestBody | booleanIndicates whether to enable the customized request body configured in the customRequestBody field. |

Responses

200

OK

400

Bad Request

404

Not Found

405

Method Not Allowed

415

Unsupported Media Type

500

Internal Server Error

post/notifications/callout-templates

Request samples

-   Payload
-   cURL

application/json

Callout - Without authenticationCallout - Base authenticationCallout - OAuth 2.0 authenticationCallout - Without authentication

Copy

`{

-   "name": "Account Edit",

-   "eventTypeName": "AccountEdit",

-   "calloutBaseurl": "[https://www.example.com/callout/AccountEdit](https://www.example.com/callout/AccountEdit)",

-   "httpMethod": "POST"


}`

Response samples

-   200
-   400
-   404
-   405
-   415
-   500

1 more5001 more

application/json

responseresponse

Copy

`{

-   "id": "dcc5a61ee76e496c984206131b5b83e7",

-   "createdBy": "8a90e08282f4ed040182f67bab2902ff",

-   "createdOn": "2024-06-17T04:07:13.000 UTC",

-   "updatedBy": "8a90e08282f4ed040182f67bab2902ff",

-   "updatedOn": "2024-06-17T04:07:13.000 UTC",

-   "eventTypeName": "AccountEdit",

-   "eventTypeNamespace": "user.notification",

-   "name": "Account Edit",

-   "description": "Callout when an account is edited",

-   "active": true,

-   "calloutBaseurl": "[https://www.example.com/callout/AccountEdit](https://www.example.com/callout/AccountEdit)",

-   "calloutParams": null,

-   "calloutHeaders": null,

-   "httpMethod": "POST",

-   "requiredAuth": false,

-   "calloutAuth": null,

-   "requiredOauth2": false,

-   "oauth2ProviderId": null,

-   "calloutRetry": true,

-   "contentType": "APPLICATION_JSON",

-   "useCustomRequestBody": false,

-   "customRequestBody": null,

-   "certificate": null,

-   "hmacKey": null,

-   "hmacValue": null,

-   "hmacData": null,

-   "hmacAlgorithm": null,

-   "hmacSecret": null,

-   "hmacOutputFormat": null


}`
