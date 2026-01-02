---
title: "GET AccountSummary"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AccountSummary/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:20.584Z"
---

## Retrieve an account summary

Retrieves detailed information about the specified customer account.

The response includes the account information and a summary of the account’s subscriptions, invoices, payments, and usages.

### Notes

Returns only the six most recent subscriptions based on the subscription updatedDate. Within those subscriptions, there may be many rate plans and many rate plan charges. These items are subject to the maximum limit on the array size.

Security**bearerAuth**

Request

##### path Parameters

| account-keyrequired | stringAccount number or account ID. |
| --- | --- |

##### query Parameters

| excludeUsage | booleanIndicate whether to exclude usage information in the response. The default value is false. |
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

get/v1/accounts/{account-key}/summary

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/accounts/{account-key}/summary?excludeUsage=true' \\
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

    -   "accountNumber": "A00001115",

    -   "additionalEmailAddresses": [

        -   "contact1@example.com",

        -   "contact2@example.com"


        ],

    -   "autoPay": true,

    -   "balance": 0,

    -   "billCycleDay": 1,

    -   "currency": "USD",

    -   "defaultPaymentMethod": {

        -   "creditCardExpirationMonth": 10,

        -   "creditCardExpirationYear": 2020,

        -   "creditCardNumber": "************1111",

        -   "creditCardType": "Visa",

        -   "id": "2c92c8f83dabf9cf013daef12dd303b0",

        -   "paymentMethodType": "CreditCard"


        },

    -   "id": "2c92a0f9391832b10139183e277a0042",

    -   "invoiceDeliveryPrefsEmail": true,

    -   "invoiceDeliveryPrefsPrint": false,

    -   "lastInvoiceDate": "2013-02-11",

    -   "lastPaymentAmount": 150248.1,

    -   "lastPaymentDate": "2013-03-27",

    -   "name": "subscribeCallYan_1",

    -   "partnerAccount": false,

    -   "paymentMethodCascadingConsent": false,

    -   "status": "Active"


    },

-   "billToContact": {

    -   "address1": "1400 Bridge Pkwy",

    -   "address2": "",

    -   "city": "San Jose",

    -   "country": "United States",

    -   "county": "",

    -   "fax": "",

    -   "firstName": "Cheng",

    -   "id": "2c92a0f9391832b10139183e27940043",

    -   "lastName": "Zou",

    -   "state": "California",

    -   "taxRegion": "",

    -   "workEmail": "contact@example.com",

    -   "workPhone": "5555551212",

    -   "zipCode": "95135"


    },

-   "invoices": [

    -   {

        -   "amount": 139722.1,

        -   "balance": 0,

        -   "dueDate": "2013-02-11",

        -   "id": "2c92a0953a3fa95d013a407c10a60100",

        -   "invoiceDate": "2013-02-11",

        -   "invoiceNumber": "INV00000323",

        -   "status": "Posted"


        },

    -   {

        -   "amount": 10521,

        -   "balance": 0,

        -   "dueDate": "2012-08-11",

        -   "id": "2c92a09739190dc60139194bcf1b0098",

        -   "invoiceDate": "2012-08-11",

        -   "invoiceNumber": "INV00000160",

        -   "status": "Posted"


        },

    -   {

        -   "amount": 10,

        -   "balance": 0,

        -   "dueDate": "2012-08-11",

        -   "id": "2c92a09539190dbe0139190f42780012",

        -   "invoiceDate": "2012-08-11",

        -   "invoiceNumber": "INV00000159",

        -   "status": "Posted"


        }


    ],

-   "payments": [

    -   {

        -   "effectiveDate": "2013-03-27",

        -   "id": "2c92c8f83dabf9cf013daf3bfa0305a6",

        -   "paidInvoices": [

            -   {

                -   "appliedPaymentAmount": 5,

                -   "invoiceId": "2c92a09539190dbe0139190f42780012",

                -   "invoiceNumber": "INV00000159"


                },

            -   {

                -   "appliedPaymentAmount": 139722.1,

                -   "invoiceId": "2c92a0953a3fa95d013a407c10a60100",

                -   "invoiceNumber": "INV00000323"


                },

            -   {

                -   "appliedPaymentAmount": 10521,

                -   "invoiceId": "2c92a09739190dc60139194bcf1b0098",

                -   "invoiceNumber": "INV00000160"


                }


            ],

        -   "paymentNumber": "P-00000075",

        -   "paymentType": "Electronic",

        -   "status": "Processed"


        },

    -   {

        -   "effectiveDate": "2012-08-11",

        -   "id": "2c92a0f9391832b101391922ad5f049d",

        -   "paidInvoices": [

            -   {

                -   "appliedPaymentAmount": 5,

                -   "invoiceId": "2c92a09539190dbe0139190f42780012",

                -   "invoiceNumber": "INV00000159"


                }


            ],

        -   "paymentNumber": "P-00000056",

        -   "paymentType": "Electronic",

        -   "status": "Processed"


        }


    ],

-   "soldToContact": {

    -   "address1": "278 Bridgeton Circle",

    -   "address2": "",

    -   "city": "San Jose",

    -   "country": "United States",

    -   "county": "",

    -   "fax": "",

    -   "firstName": "Bill",

    -   "id": "2c92a0f9391832b10139183e27940043",

    -   "lastName": "Cho",

    -   "state": "California",

    -   "taxRegion": "",

    -   "workEmail": "contact@example.com",

    -   "workPhone": "5555551212",

    -   "zipCode": "95135"


    },

-   "subscriptions": [

    -   {

        -   "autoRenew": true,

        -   "id": "2c92c8f83dc4f752013dc72c24ee016d",

        -   "initialTerm": 12,

        -   "ratePlans": [

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "QSF_Tier"


                }


            ],

        -   "renewalTerm": 3,

        -   "status": "Active",

        -   "subscriptionNumber": "A-S00001081",

        -   "subscriptionStartDate": "2013-02-01",

        -   "termEndDate": "2014-02-01",

        -   "termStartDate": "2013-02-01",

        -   "termType": "TERMED"


        },

    -   {

        -   "autoRenew": true,

        -   "id": "2c92c8f83dc4f752013dc72bb85c0127",

        -   "initialTerm": 12,

        -   "ratePlans": [

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "QSF_Tier"


                }


            ],

        -   "renewalTerm": 3,

        -   "status": "Active",

        -   "subscriptionNumber": "A-S00001080",

        -   "subscriptionStartDate": "2013-02-01",

        -   "termEndDate": "2014-02-01",

        -   "termStartDate": "2013-02-01",

        -   "termType": "TERMED"


        },

    -   {

        -   "autoRenew": false,

        -   "id": "2c92c8f83dc4f752013dc723fdab00d4",

        -   "initialTerm": 10,

        -   "ratePlans": [

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "QSF_Tier"


                }


            ],

        -   "renewalTerm": 4,

        -   "status": "Cancelled",

        -   "subscriptionNumber": "A-S00001079",

        -   "subscriptionStartDate": "2013-02-01",

        -   "termEndDate": "2014-04-01",

        -   "termStartDate": "2013-12-01",

        -   "termType": "TERMED"


        },

    -   {

        -   "autoRenew": false,

        -   "id": "2c92c8f83db0b4b4013db4717ad000ec",

        -   "initialTerm": 12,

        -   "ratePlans": [

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "Month_PerUnit"


                },

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "Month_PerUnit"


                }


            ],

        -   "renewalTerm": 3,

        -   "status": "Active",

        -   "subscriptionNumber": "A-S00001076",

        -   "subscriptionStartDate": "2011-02-11",

        -   "termEndDate": "2012-02-11",

        -   "termStartDate": "2011-02-11",

        -   "termType": "TERMED"


        },

    -   {

        -   "autoRenew": false,

        -   "id": "2c92c8f83db0b4b4013db3ab6a4d00bc",

        -   "initialTerm": 12,

        -   "ratePlans": [

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "Month_PerUnit"


                },

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "Month_PerUnit"


                }


            ],

        -   "renewalTerm": 3,

        -   "status": "Active",

        -   "subscriptionNumber": "A-S00001075",

        -   "subscriptionStartDate": "2011-02-11",

        -   "termEndDate": "2012-02-11",

        -   "termStartDate": "2011-02-11",

        -   "termType": "TERMED"


        },

    -   {

        -   "autoRenew": false,

        -   "id": "2c92c8f83db0b4b4013db3aa9fbd0090",

        -   "initialTerm": 12,

        -   "ratePlans": [

            -   {

                -   "productName": "Recurring Charge",

                -   "ratePlanName": "Month_PerUnit"


                }


            ],

        -   "renewalTerm": 3,

        -   "status": "Active",

        -   "subscriptionNumber": "A-S00001074",

        -   "subscriptionStartDate": "2011-02-11",

        -   "termEndDate": "2012-02-11",

        -   "termStartDate": "2011-02-11",

        -   "termType": "TERMED"


        }


    ],

-   "success": true,

-   "usage": [

    -   {

        -   "quantity": 10,

        -   "startDate": "2012-02",

        -   "unitOfMeasure": "UOM"


        },

    -   {

        -   "quantity": 10,

        -   "startDate": "2012-01",

        -   "unitOfMeasure": "UOM"


        }


    ]


}`
