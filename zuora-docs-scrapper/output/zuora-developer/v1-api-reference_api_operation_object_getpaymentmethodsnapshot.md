---
title: "Object GETPaymentMethodSnapshot"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_GETPaymentMethodSnapshot/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:48.745Z"
---

## CRUD: Retrieve a payment method snapshot

This REST API reference describes how to retrieve a Payment Method Snapshot.

A Payment Method Snapshot is a copy of the particular Payment Method used in a transaction. If the Payment Method is deleted, the Payment Method Snapshot continues to retain the data used in each of the past transactions.

### Notes

The following Payment Method fields are not available in Payment Method Snapshots:

-   `Active`
-   `AchAddress1`
-   `AchAddress2`
-   `CreatedById`
-   `CreatedDate`
-   `UpdatedById`
-   `UpdatedDate`

The Payment Method Snapshot field `PaymentMethodId` is not available in Payment Methods.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringObject id |
| --- | --- |

##### query Parameters

| fields | stringObject fields to return |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

401

Unauthorized

404

get/v1/object/payment-method-snapshot/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/object/payment-method-snapshot/{id}?fields=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   401
-   404

application/json

responseresponse

Copy

`{

-   "AccountId": "2c93808457d787030157e0314c0945d4",

-   "BankIdentificationNumber": "411111",

-   "CompanyName": "",

-   "CreditCardAddress1": "312 2nd Ave W",

-   "CreditCardCity": "Seattle",

-   "CreditCardCountry": "United States",

-   "CreditCardExpirationMonth": 12,

-   "CreditCardExpirationYear": 2020,

-   "CreditCardHolderName": "Somebody",

-   "CreditCardMaskNumber": "************1111",

-   "CreditCardPostalCode": "98119",

-   "CreditCardState": "Washington",

-   "CreditCardType": "Visa",

-   "Id": "2c93808457d787030157e0314f2245d8",

-   "IdentityNumber": "",

-   "IsCompany": false,

-   "NumConsecutiveFailures": 0,

-   "PaymentMethodId": "2c93808457d787030157e0314e8145d7",

-   "PaymentMethodStatus": "Active",

-   "TotalNumberOfErrorPayments": 0,

-   "TotalNumberOfProcessedPayments": 0,

-   "Type": "CreditCard",

-   "UseDefaultRetryRule": true


}`
