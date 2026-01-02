---
title: "PUT UpdateOpenPaymentMethodType"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateOpenPaymentMethodType/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:19.297Z"
---

## Update a custom payment method type

Update the latest draft version of your custom payment method type. If the latest draft version has been published, the revision number is increased by 1 after the draft version is updated. You must publish your latest revision again through the [Publish a custom payment method type](https://developer.zuora.com/api-references/api/operation/PUT_PublishOpenPaymentMethodType/) operation before your updated custom payment method type goes live.

**Note**: In the request body, provide all the fields that define this custom payment method type including fields to be updated and the unchanged fields.

Security**bearerAuth**

Request

##### path Parameters

| paymentMethodTypeNamerequired | stringThe API name of the custom payment method type, such as AmazonPay__c_12368. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json
required

| entityId | stringIf this custom payment method type is specific to one entity only, specify the entity ID in UUID format when creating the draft payment method type, such as 123e4567-e89b-12d3-a456-426614174000.You can only update this field to be empty, indicating that this custom payment method type is available to the global entity and all the sub entities in the tenant. |
| --- | --- |
| fieldsrequired | Array of objects (fields)An array containing field metadata of the custom payment method type.Notes:All the following nested metadata fields must be provided in the request to define a field.At least one field must be defined in the fields array for a custom payment method type.Up to 20 fields can be defined in the fields array for a custom method type. |
| internalNamerequired | string <= 19 charactersA string to identify the custom payment method type in the API name of the payment method type.The value of this field must be the same as the value specified when creating the draft revision of this custom payment method type.This field cannot be updated after the creation of the custom payment method type.This field is used along with the tenantId field by the system to construct and generate the API name of the custom payment method type in the following way:<internalName>__c_<tenantId>For example, if internalName is AmazonPay, and tenantId is 12368, the API name of the custom payment method type will be AmazonPay__c_12368. |
| isSupportAsyncPayment | booleanDefault: falseIf you want to enable the Asynchronous Payment Statuses feature in handling transactions with your custom payment method, specify true in this field. You also need to complete tasks described in Enable the Asynchronous Payment Statuses feature in Zuora Knowledge Center. |
| labelrequired | string <= 40 charactersThe label that is used to refer to this type in the Zuora UI.This value must be alphanumeric, excluding JSON preserved characters such as * \ ’ ” |
| methodReferenceIdFieldrequired | stringThe identification reference of the custom payment method.This field should be mapped to a field name defined in the fields array for the purpose of being used as a filter in reporting tools such as Payment Method Data Source Exports and Data Query.The value of this field must be the same as the value specified when creating the draft revision of this custom payment method type.This field cannot be updated after the creation of the custom payment method type. |
| subTypeField | stringThe identification reference indicating the subtype of the custom payment method.This field should be mapped to a field name defined in the fields array for the purpose of being used as a filter in reporting tools such as Data Source Exports and Data Query.This field cannot be updated after the creation of the custom payment method type. |
| tenantIdrequired | stringZuora tenant ID. If multi-entity is enabled in your tenant, this is the ID of the parent tenant of all the sub entities.This field cannot be updated after the creation of the custom payment method type. |
| userReferenceIdField | stringThe identification reference of the user or customer account.This field should be mapped to a field name defined in the fields array for the purpose of being used as a filter in reporting tools such as Data Source Exports and Data Query.This field cannot be updated after the creation of the custom payment method type. |

Responses

200

OK

put/open-payment-method-types/{paymentMethodTypeName}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "entityId": "",

-   "fields": [

    -   {

        -   "checksum": true,

        -   "defaultValue": null,

        -   "description": "The Token value",

        -   "editable": true,

        -   "index": 1,

        -   "label": "AmazonToken",

        -   "maxLength": 100,

        -   "minLength": 1,

        -   "name": "AmazonToken",

        -   "representer": true,

        -   "required": true,

        -   "type": "string",

        -   "visible": true


        },

    -   {

        -   "checksum": true,

        -   "defaultValue": null,

        -   "description": "The Type of Token, e.g. GoCardlessToken",

        -   "editable": true,

        -   "index": 2,

        -   "label": "Amazon TokenType",

        -   "maxLength": 100,

        -   "minLength": 1,

        -   "name": "AmazonTokenType",

        -   "representer": true,

        -   "required": true,

        -   "type": "string",

        -   "visible": true


        }


    ],

-   "internalName": "AmazonPay",

-   "label": "ZuoraQA Amazon Pay",

-   "methodReferenceIdField": "AmazonToken",

-   "subTypeField": "AmazonTokenType",

-   "tenantId": "9",

-   "userReferenceIdField": ""


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "paymentMethodType": "AmazonPay__c_12368",

-   "publishDate": "",

-   "revision": 2,

-   "status": "Draft"


}`
