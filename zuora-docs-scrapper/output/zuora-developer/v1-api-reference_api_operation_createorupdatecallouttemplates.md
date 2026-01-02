---
title: "CreateOrUpdateCalloutTemplates"
url: "https://developer.zuora.com/v1-api-reference/api/operation/CreateOrUpdateCalloutTemplates/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:14:05.713Z"
---

## Create or update callout templates

Creates callout templates for standard or custom events if you do not specify callout template IDs, or updates existing callout templates if you specify valid callout template IDs.

For each callout template when you are creating callout templates, whether the template is created for a standard event, a custom event, or a custom scheduled event is dependent on whether you specify the `eventCategory` or `eventTypeName` field.

-   If you specify the `eventCategory` field, the callout template is created based on a standard event. See [Standard event category code for events and notifications](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Events_and_Notifications) for all standard event category codes.
-   If you specify the `eventTypeName` field, the callout template is created based on the corresponding custom event, Zuora custom event, or custom scheduled event. See [Custom event triggers](https://developer.zuora.com/api-references/api/tag/Custom-Event-Triggers/) for more information about custom events, and [Custom scheduled events](https://developer.zuora.com/api-references/api/tag/Custom-Scheduled-Events/) for more information about custom scheduled events.

The maximum number of callout templates that you can create or update by one call is 1,000.

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

The request body to import or update callout templates.

| allowPartialSuccess | booleanWhen set to false, the call will fail if one or multiple instances fail to import, and a 200 response is returned if all callout templates have been successfully updated. When set to true, a success (200) response is returned if one or more instances have imported successfully. All failed instances are also returned in the response. |
| --- | --- |
| calloutTemplates | Array of Callout - without authentication (object) or Callout - Base authentication (object) or Callout - OAuth 2.0 authentication (object)A container for callout templates. |

Responses

200

OK

post/notifications/callout-templates/import

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "allowPartialSuccess": true,

-   "calloutTemplates": [

    -   {

        -   "name": "Account Edit",

        -   "eventTypeName": "AccountEdit",

        -   "calloutBaseurl": "[https://www.example.com/callout/AccountEdit](https://www.example.com/callout/AccountEdit)",

        -   "httpMethod": "POST"


        },

    -   {

        -   "name": "Account Delete",

        -   "eventTypeName": "AccountDelete",

        -   "calloutBaseurl": "[https://www.example.com/callout/AccountDelete](https://www.example.com/callout/AccountDelete)",

        -   "httpMethod": "POST"


        }


    ]


}`

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "reasons": [ ]


}`
