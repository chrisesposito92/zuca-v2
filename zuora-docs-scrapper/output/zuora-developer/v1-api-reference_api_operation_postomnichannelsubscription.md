---
title: "PostOmnichannelSubscription"
url: "https://developer.zuora.com/v1-api-reference/api/operation/postOmnichannelSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:51:16.095Z"
---

## Create an omnichannel subscription

Creates or updates an omnichannel subscription for a customer account.

You can also create a new customer account and assign it to the new omnichannel subscription.

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
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| accountId | stringThe ID of the account associated with this subscription. |
| --- | --- |
| externalSubscriptionIdrequired | stringThe original transaction ID of the notification. This must be unique in the tenant. |
| externalTransactionReason | stringThe latest transaction reason. |
| externalSourceSystem | stringThe source app store from which the channel subscription originated. For example, Apple, Google, Roku, Amazon. |
| externalState | stringThe original status from client, such as active, canceled, expired, pastDue. |
| state | stringThe common external subscription state. |
| externalProductId | stringThe product ID in the external system. |
| externalReplaceByProductId | string or nullThe product ID is going to replace the existing product ID in the externalProductId field during the subscription renewal. |
| externalInAppOwnershipType | stringSuch as purchased, family_shared. |
| externalQuantity | integerDefault: 1The quantity of the product, must be greather than 0. |
| currency | stringThe currency code of the transaction. If not specified, get value from the Account. |
| autoRenew | booleanDefault: falseIf true, the subscription automatically renews at the end of the term. |
| externalPurchaseDate | string <datetime>When the App Store charged the user’s account for a purchase, restored product, subscription, or subscription renewal after a lapse. UTC time, yyyy-mm-dd hh:mm:ss. |
| externalActivationDate | string <datetime>When the external subscription was activated on the external platform. UTC time, yyyy-mm-dd hh:mm:ss. |
| externalExpirationDate | string <datetime>This expiration date is a static value that applies for each transaction. UTC time, yyyy-mm-dd hh:mm:ss. |
| externalApplicationId | stringThe external application ID. |
| externalBundleId | stringThe external bundler ID. |
| externalSubscriberId | stringThe external subscriber ID. |
| externalPrice | numberThe price in external system. |
| externalPurchaseType | stringThe external purchase type. |
| externalLastRenewalDate | string <datetime>This last renewal date is a static value that applies for each transaction. UTC time, yyyy-mm-dd hh:mm:ss. |
| externalNextRenewalDate | string <datetime>This next renewal date is a static value that applies for each transaction. UTC time, yyyy-mm-dd hh:mm:ss. |
| accountIdentifierField | stringThe account field used to identify the account in acountData. It could be a custom field. |
| accountData | object (OmniChannelAccountData)The information of the account that you want to create while creating an omnichannel subscription. |
| property name*additional property | anyCustom fields of the Subscription object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Invalid input

post/v1/omni-channel-subscriptions

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "externalSubscriptionId": "original-transaction-id1",

-   "accountId": "8a90b4488e602d56018e6062ff5700a3",

-   "externalSourceSystem": "Apple",

-   "externalTransactionReason": "Purchase",

-   "externalState": "Active",

-   "state": "Active",

-   "externalProductId": "external-product-id-1",

-   "externalInAppOwnershipType": "Purchased",

-   "externalQuantity": 1,

-   "currency": "USD",

-   "autoRenew": true,

-   "externalPurchaseDate": "2024-02-01 00:01:15",

-   "externalActivationDate": "2024-02-01 00:01:15",

-   "externalExpirationDate": "2024-05-01 00:01:15",

-   "externalApplicationId": "004d58fca978fec3697fec4af1d10065",

-   "externalBundleId": "43dcdc4562784ed8a59ece4ef7d98e57",

-   "externalSubscriberId": "2466082b6d1149c184a09b15bd5be694",

-   "externalPurchaseType": "Purchased",

-   "externalPrice": 100,

-   "externalLastRenewalDate": "2024-10-01 00:00:00",

-   "externalNextRenewalDate": "2025-01-01 00:00:00"


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

`{

-   "success": true,

-   "subscriptionId": "54be52bbb1b9288bbf82942e00de0000",

-   "subscriptionNumber": "A-S00000001",

-   "accountId": "2c98906e9288bc0b0192942dfbdc316d",

-   "accountNumber": "AN_1729062894303"


}`
