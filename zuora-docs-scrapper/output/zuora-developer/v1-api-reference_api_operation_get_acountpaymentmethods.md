---
title: "GET AcountPaymentMethods"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AcountPaymentMethods/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:35.982Z"
---

## List payment methods of an account

Retrieves the payment methods of the specified customer account.

**Note:** This operation also supports retrieving custom payment methods created through the [Open Payment Method](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) service.

Security**bearerAuth**

Request

##### path Parameters

| account-keyrequired | stringAccount number or account ID. |
| --- | --- |

##### query Parameters

| isDefaultOnly | booleanIndicates whether to only retrieve the default payment method of the account. The default value is false. If this parameter is set to true, only the default payment method is retrieved. |
| --- | --- |
| isActiveOnly | booleanIndicates whether to only retrieve the active payment methods of the account. The default value is false. If this parameter is set to true, only the active payment methods are retrieved. |

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

get/v1/accounts/{account-key}/payment-methods

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/accounts/{account-key}/payment-methods?isDefaultOnly=true&isActiveOnly=true' \\
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

-   "ach": [

    -   {

        -   "AA_PICKLIST__c": null,

        -   "accountHolderInfo": {

            -   "accountHolderName": null,

            -   "addressLine1": "DSDFD",

            -   "addressLine2": "",

            -   "city": "Example City",

            -   "country": "United States",

            -   "email": "test@test.com",

            -   "phone": "2554444",

            -   "state": "Example State",

            -   "zipCode": "123456"


            },

        -   "accountKey": "4028839f7ca29000017ca29c1ce8003f",

        -   "bankABACode": "110000000",

        -   "bankAccountName": "Test",

        -   "bankAccountNumber": "********6789",

        -   "bankAccountType": "Checking",

        -   "bankIdentificationNumber": null,

        -   "bankName": "Chase",

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2021-10-27 05:32:19",

        -   "deviceSessionId": null,

        -   "existingMandate": null,

        -   "id": "4028839f7cc14262017cc1bca9eb0008",

        -   "ipAddress": null,

        -   "isDefault": false,

        -   "lastFailedSaleTransactionDate": null,

        -   "lastTransaction": "Approved",

        -   "lastTransactionDateTime": "2021-10-27 05:32:19",

        -   "lastTransactionStatus": "Approved",

        -   "mandateInfo": {

            -   "existingMandateStatus": null,

            -   "mandateCreationDate": null,

            -   "mandateId": null,

            -   "mandateReason": null,

            -   "mandateReceivedStatus": null,

            -   "mandateStatus": null,

            -   "mandateUpdateDate": null


            },

        -   "maxConsecutivePaymentFailures": null,

        -   "numConsecutiveFailures": 0,

        -   "paymentRetryWindow": null,

        -   "status": "Active",

        -   "totalNumberOfErrorPayments": 0,

        -   "totalNumberOfProcessedPayments": 0,

        -   "type": "ACH",

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2021-11-10 00:50:12",

        -   "useDefaultRetryRule": true


        }


    ],

-   "creditcard": [

    -   {

        -   "AA_PICKLIST__c": null,

        -   "accountHolderInfo": {

            -   "accountHolderName": "John Smith",

            -   "addressLine1": "ABC",

            -   "addressLine2": "EFT",

            -   "city": "Example City",

            -   "country": "United States",

            -   "email": "example@google.com",

            -   "phone": "86123456789",

            -   "state": "Example State",

            -   "zipCode": "123456"


            },

        -   "accountKey": "4028839f7ca29000017ca29c1ce8003f",

        -   "bankIdentificationNumber": "411111",

        -   "cardNumber": "************1111",

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2021-11-15 18:59:08",

        -   "creditCardType": "Visa",

        -   "deviceSessionId": null,

        -   "existingMandate": null,

        -   "expirationMonth": 11,

        -   "expirationYear": 2027,

        -   "id": "4028839f7d26a155017d26af16ef0001",

        -   "identityNumber": "97370192024",

        -   "ipAddress": null,

        -   "isDefault": true,

        -   "lastFailedSaleTransactionDate": null,

        -   "lastTransaction": "Approved",

        -   "lastTransactionDateTime": "2021-11-15 18:59:08",

        -   "lastTransactionStatus": "Approved",

        -   "mandateInfo": {

            -   "mitConsentAgreementRef": null,

            -   "mitConsentAgreementSrc": null,

            -   "mitProfileAction": null,

            -   "mitProfileAgreedOn": null,

            -   "mitProfileType": null,

            -   "mitTransactionId": null


            },

        -   "maxConsecutivePaymentFailures": null,

        -   "numConsecutiveFailures": 0,

        -   "paymentRetryWindow": null,

        -   "status": "Active",

        -   "totalNumberOfErrorPayments": 0,

        -   "totalNumberOfProcessedPayments": 0,

        -   "type": "CreditCard",

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2021-11-15 18:59:08",

        -   "useDefaultRetryRule": true


        }


    ],

-   "creditcardreferencetransaction": [

    -   {

        -   "AA_PICKLIST__c": null,

        -   "accountHolderInfo": {

            -   "accountHolderName": "",

            -   "addressLine1": "",

            -   "addressLine2": "",

            -   "city": "",

            -   "country": null,

            -   "email": "",

            -   "phone": null,

            -   "state": "",

            -   "zipCode": ""


            },

        -   "accountKey": "4028839f7ca29000017ca29c1ce8003f",

        -   "bankIdentificationNumber": null,

        -   "cardNumber": null,

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2021-11-03 22:35:59",

        -   "creditCardType": "Visa",

        -   "deviceSessionId": null,

        -   "existingMandate": null,

        -   "expirationMonth": 11,

        -   "expirationYear": 2021,

        -   "id": "4028839f7ce8c530017ce9725e2c0003",

        -   "ipAddress": null,

        -   "isDefault": false,

        -   "lastFailedSaleTransactionDate": null,

        -   "lastTransaction": "Approved",

        -   "lastTransactionDateTime": "2021-11-03 22:35:59",

        -   "lastTransactionStatus": "Approved",

        -   "mandateInfo": {

            -   "mitConsentAgreementRef": null,

            -   "mitConsentAgreementSrc": null,

            -   "mitProfileAction": null,

            -   "mitProfileAgreedOn": null,

            -   "mitProfileType": null,

            -   "mitTransactionId": null


            },

        -   "maxConsecutivePaymentFailures": null,

        -   "numConsecutiveFailures": 0,

        -   "paymentRetryWindow": null,

        -   "secondTokenId": "FGDSDF",

        -   "status": "Active",

        -   "tokenId": "ABCE",

        -   "totalNumberOfErrorPayments": 0,

        -   "totalNumberOfProcessedPayments": 0,

        -   "type": "CreditCardReferenceTransaction",

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2021-11-03 22:35:59",

        -   "useDefaultRetryRule": true


        }


    ],

-   "debitcard": [

    -   {

        -   "AA_PICKLIST__c": null,

        -   "accountHolderInfo": {

            -   "accountHolderName": "John Smith",

            -   "addressLine1": "1051 E Hillsdale Blvd",

            -   "addressLine2": "",

            -   "city": "Tynan",

            -   "country": "United States",

            -   "email": "smith@example.com",

            -   "phone": "",

            -   "state": "California",

            -   "zipCode": "45101"


            },

        -   "accountKey": "4028839f7ca29000017ca29c1ce8003f",

        -   "bankIdentificationNumber": "588888",

        -   "cardNumber": "************8888",

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2021-11-01 00:01:52",

        -   "creditCardType": "Electron",

        -   "deviceSessionId": null,

        -   "existingMandate": null,

        -   "expirationMonth": 11,

        -   "expirationYear": 2021,

        -   "id": "4028839f7cd92a6b017cda4defd00006",

        -   "ipAddress": null,

        -   "isDefault": false,

        -   "lastFailedSaleTransactionDate": null,

        -   "lastTransaction": "Approved",

        -   "lastTransactionDateTime": "2021-11-01 00:01:53",

        -   "lastTransactionStatus": "Approved",

        -   "mandateInfo": {

            -   "mitConsentAgreementRef": null,

            -   "mitConsentAgreementSrc": null,

            -   "mitProfileAction": null,

            -   "mitProfileAgreedOn": null,

            -   "mitProfileType": null,

            -   "mitTransactionId": null


            },

        -   "maxConsecutivePaymentFailures": null,

        -   "numConsecutiveFailures": 0,

        -   "paymentRetryWindow": null,

        -   "status": "Active",

        -   "totalNumberOfErrorPayments": 0,

        -   "totalNumberOfProcessedPayments": 0,

        -   "type": "CreditCard",

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2021-11-01 00:01:52",

        -   "useDefaultRetryRule": true


        }


    ],

-   "defaultPaymentMethodId": "4028839f7d26a155017d26af16ef0001",

-   "paymentGateway": null,

-   "success": true


}`
