---
title: "POST Create Notification Definition"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Create_Notification_Definition/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:13:40.179Z"
---

## Create a notification definition

Creates a notification definition. If a filter rule is specified, it will be evaluated to see if the notification definition is qualified to handle the incoming events during runtime. If the notification is qualified, it will send the email and invoke the callout if it has an email template or a callout.

This operation supports creating notification definitions for all event types:

-   To create a notification definition for a standard event, you must specify the `eventCategory` field. For more information about standard event category codes, see [Standard event category code for events and notifications](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Events_and_Notifications).
-   To create a notification definition for a Zuora custom event, custom event, or custom scheduled event, you must specify the `eventTypeName` field. For more information, see [Zuora custom events](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_C_Zuora_Custom_Events), [Custom event triggers](https://developer.zuora.com/api-references/api/tag/Custom-Event-Triggers/), and [Custom scheduled events](https://developer.zuora.com/api-references/api/tag/Custom-Scheduled-Events/).

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

The request body used to create the notification definition.

| active | booleanDefault: trueThe status of the notification definition. The default value is true. |
| --- | --- |
| associatedAccount | stringThe account on which the histories of this notification will be displayed. The associated account does not enforce where the merge fields come from. Available values are as follows:Account.Id: ID of the primary customer account related to the notification. It is also the default value.ParentAccount.Id: this option is available only if you have Customer Hierarchy enabled for your tenant.SubscriptionOwnerAccount.Id: this option is available if the base object of the notification is Order Action.Note: before specifying this field, we recommend that you use Data Source to check the available types of accounts for the current notification. |
| callout | Callout - without authentication (object) or Callout - Base authentication (object) or Callout - OAuth 2.0 authentication (object)If this field is specified, Zuora will create a new callout template when creating the notification definition and associate the template with the notification definition.You cannot specify the calloutTemplateIds and callout fields at the same time.For more information about callout templates, see Manage callout templates. |
| calloutActive | booleanDefault: falseThe status of the callout action. The default value is false. |
| calloutTemplateIds | Array of stringsList of callout template IDs that the notification definition is associated with.You cannot specify the calloutTemplateIds and callout fields at the same time.For more information about callout templates, see Manage callout templates. |
| communicationProfileId | stringThe ID of the communication profile that the notification definition is associated with.You can use the Query Action to get the communication profile Id. See the following request sample:{ "queryString": "select Id, ProfileName from CommunicationProfile" }If you do not pass the communicationProfileId, notification service will be automatically added to the 'Default Profile'.If you want to associate the notification definition with multiple communication profiles, use the communicationProfileIds field, which overrides this field. |
| communicationProfileIds | Array of stringsList of communication profile IDs that the notification definition is associated with.This field overrides the communicationProfileId field. |
| description | string <= 255 charactersThe description of the notification definition. |
| emailActive | booleanDefault: falseThe status of the email action. The default value is false. |
| emailTemplateId | string <uuid>The ID of the email template. If emailActive is true, an email template is required. And EventType of the email template MUST be the same as the eventType. |
| eventCategory | numberThe event category code for a standard event, on which the notification definition is created.This field is required when creating notification definitions for standard events.For the list of supported standard event category codes, see Standard event category code for events and notifications. |
| eventTypeName | string non-emptyThe name of the event that the notification definition is based on.This field is required when creating notification definitions for Zuora custom events, custom events, or custom scheduled events.If this field is provided, you can specify the event namespace in the eventTypeNamespace field. |
| eventTypeNamespace | stringDefault: "user.notification"The namespace of the eventTypeName field. It indicates who created the event and which namespace the event is assigned to.Supported values are as follows:com.zuora.notification: events that are created by Zuora. This value applies to Zuora custom events.user.notification: events that are created by tenant users. This value applies to custom events and custom scheduled events. This is the default value.For example, if you want to create a notification definition on the OrderActionProcessed event, which is a Zuora custom event, you must specify com.zuora.notification for this field.Enum: "user.notification" "com.zuora.notification" |
| filterRule | object |
| filterRuleParams | object (filterRuleParams)The parameter values used to configure the filter rule. |
| namerequired | string <= 255 charactersThe name of the notification definition, unique per communication profile. |

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

post/notifications/notification-definitions

Request samples

-   Payload
-   cURL

application/json

Create a notification definitionCreate a notification definition with filter rulesCreate a notification definition

Copy

`{

-   "name": "Account Edit Notification",

-   "eventTypeName": "AccountEdit",

-   "emailActive": true,

-   "emailTemplateId": "f11e498862584a10a05b83ea70119659",

-   "communicationProfileId": "2c92c0f9446cd49501447539d6a72815"


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

Copy

Expand allCollapse all

`{

-   "id": "838bfafa9b224408809f8ecbdae198ef",

-   "createdBy": "8ad084a67f9c7138017fab8a8b511b5a",

-   "createdOn": "2024-11-11T03:00:03.000 UTC",

-   "updatedBy": "8ad084a67f9c7138017fab8a8b511b5a",

-   "updatedOn": "2024-11-11T03:00:03.000 UTC",

-   "eventTypeNamespace": "user.notification",

-   "eventTypeName": "AccountEdit",

-   "name": "Account Edit Notification",

-   "description": null,

-   "communicationProfileId": "2c92c0f9446cd49501447539d6a72815",

-   "communicationProfileIds": [

    -   "2c92c0f9446cd49501447539d6a72815"


    ],

-   "active": true,

-   "emailTemplateId": "f11e498862584a10a05b83ea70119659",

-   "callout": null,

-   "calloutTemplateIds": [ ],

-   "filterRule": {

    -   "id": "a1efc8cc717e48208b9f0fd5d7bf2a58",

    -   "createdBy": "8ad084a67f9c7138017fab8a8b511b5a",

    -   "createdOn": "2024-11-11T03:00:04.000 UTC",

    -   "updatedBy": null,

    -   "updatedOn": null,

    -   "description": "Filter rule to test if an account is a VIP account",

    -   "condition": "Account.Balance >= _VIP_BALANCE_AMOUNT && Account.Status == _ACCOUNT_STATUS",

    -   "parameters": {

        -   "_ACCOUNT_STATUS": {

            -   "displayName": "VIP Account Status",

            -   "description": "The status of the VIP Account",

            -   "options": [

                -   "Draft",

                -   "Active",

                -   "Canceled"


                ],

            -   "valueType": "STRING"


            },

        -   "_VIP_BALANCE_AMOUNT": {

            -   "displayName": "VIP Account Balance",

            -   "description": "The minimum account balance",

            -   "options": null,

            -   "valueType": "BIG_DECIMAL"


            }


        },

    -   "scheduled": false


    },

-   "filterRuleParams": {

    -   "_ACCOUNT_STATUS": "Active",

    -   "_VIP_BALANCE_AMOUNT": "100000.0"


    },

-   "emailActive": true,

-   "calloutActive": false,

-   "associatedAccount": null


}`
