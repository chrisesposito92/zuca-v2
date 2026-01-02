---
title: "GET Account"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Account/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:57.929Z"
---

## Retrieve an account

Retrieves basic information about a customer account.

This operation is a quick retrieval that doesn't include the account's subscriptions, invoices, payments, or usage details. Use Get account summary to get more detailed information about an account.

Security**bearerAuth**

Request

##### path Parameters

| account-keyrequired | stringAccount number or account ID. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/accounts/{account-key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/accounts/{account-key}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "basicInfo": {

    -   "accountNumber": "A00000001",

    -   "batch": "Batch1",

    -   "communicationProfileId": "303d186840e611df817c002185d714e1",

    -   "crmId": "",

    -   "id": "402892c74c9193cd014c91d35b0a0132",

    -   "invoiceTemplateId": null,

    -   "name": "Test",

    -   "notes": "",

    -   "partnerAccount": false,

    -   "profileNumber": "CP-00000012",

    -   "salesRep": "",

    -   "sequenceSetId": null,

    -   "status": "Active",

    -   "summaryStatementTemplateId": "ff808081298c6e5401298c7a845c007b"


    },

-   "billToContact": {

    -   "address1": "",

    -   "address2": "",

    -   "city": "",

    -   "country": null,

    -   "county": null,

    -   "fax": "",

    -   "firstName": "Test",

    -   "homePhone": "",

    -   "id": "2c9081a03c6d7b51013c6d7e46c80a17",

    -   "lastName": "Test",

    -   "mobilePhone": "",

    -   "nickname": "",

    -   "otherPhone": "",

    -   "otherPhoneType": null,

    -   "personalEmail": "",

    -   "state": "",

    -   "taxRegion": null,

    -   "workEmail": "contact@example.com",

    -   "workPhone": "",

    -   "zipCode": ""


    },

-   "billingAndPayment": {

    -   "additionalEmailAddresses": [

        -   "contact1@example.com",

        -   "contact2@example.com"


        ],

    -   "autoPay": true,

    -   "billCycleDay": 1,

    -   "currency": "USD",

    -   "defaultPaymentMethodId": "2c93808457d787030157e03220ec4fad",

    -   "invoiceDeliveryPrefsEmail": true,

    -   "invoiceDeliveryPrefsPrint": false,

    -   "paymentMethodCascadingConsent": false,

    -   "paymentGateway": "TestGateway",

    -   "paymentTerm": "Net 30"


    },

-   "einvoiceProfile": {

    -   "businessCategory": "B2B",

    -   "businessName": "legal business name",

    -   "businessNumber": "20002039",

    -   "businessNumberSchemeId": "88",

    -   "enabled": true,

    -   "endpointId": "8992",

    -   "endpointSchemeId": "88",

    -   "taxRegisterNumber": "TAX393999"


    },

-   "metrics": {

    -   "balance": 0,

    -   "contractedMrr": -900,

    -   "creditBalance": 0,

    -   "totalInvoiceBalance": 0


    },

-   "metricsData": [

    -   {

        -   "balance": 0,

        -   "contractedMrr": -900,

        -   "currency": "USD",

        -   "reservedPaymentAmount": 900,

        -   "totalDebitMemoBalance": 0,

        -   "totalInvoiceBalance": 0,

        -   "unappliedCreditMemoAmount": 0,

        -   "unappliedPaymentAmount": 0


        },

    -   {

        -   "balance": 0,

        -   "contractedMrr": -900,

        -   "currency": "EUR",

        -   "reservedPaymentAmount": -900,

        -   "totalDebitMemoBalance": 0,

        -   "totalInvoiceBalance": 0,

        -   "unappliedCreditMemoAmount": 0,

        -   "unappliedPaymentAmount": 0


        }


    ],

-   "soldToContact": {

    -   "address1": "",

    -   "address2": "",

    -   "city": "",

    -   "country": null,

    -   "county": null,

    -   "fax": "",

    -   "firstName": "Test",

    -   "homePhone": "",

    -   "id": "2c9081a03c6d7b51013c6d7e46cf0a18",

    -   "lastName": "Test",

    -   "mobilePhone": "",

    -   "nickname": "",

    -   "otherPhone": "",

    -   "otherPhoneType": null,

    -   "personalEmail": "",

    -   "state": "",

    -   "taxRegion": null,

    -   "workEmail": "contact@example.com",

    -   "workPhone": "",

    -   "zipCode": ""


    },

-   "success": true


}`
