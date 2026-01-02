---
title: "GET Order"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Order/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:06.197Z"
---

## Retrieve an order

**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.

Retrieves the detailed information about a specified order.

Security**bearerAuth**

Request

##### path Parameters

| orderNumberrequired | string <string>The order number to be retrieved. |
| --- | --- |

##### query Parameters

| getAccountDetails | booleanRetrieves the invoice owner account details and subscription owner account details in the Order. |
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

get/v1/orders/{orderNumber}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/orders/{orderNumber}?getAccountDetails=true' \\
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

-   "order": {

    -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

    -   "createdDate": "2018-12-13 17:21:43",

    -   "currency": "USD",

    -   "customFields": { },

    -   "description": "This is a description for the Order.",

    -   "existingAccountNumber": "A00000101",

    -   "existingAccountDetails": {

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

            -   "summaryStatementTemplateId": null,

            -   "purchaseOrderNumber": ""


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


            }


        },

    -   "invoiceScheduleId": "ec6f0d5dc8af451ab95343fb3c588c1a",

    -   "orderDate": "2018-10-01",

    -   "orderLineItems": [

        -   {

            -   "UOM": "Unit",

            -   "accountingCode": "Revenue",

            -   "amount": 10000,

            -   "amountPerUnit": 5000,

            -   "amountWithoutTax": 10000,

            -   "billTargetDate": "2025-12-01",

            -   "billTo": "2c9081a03c6d7b51013c6d7e2dfc09fa",

            -   "billToSnapshotId": "4028fc8487c0a43c0187c12a91500060",

            -   "customFields": {

                -   "orderLineItemCF__c": "olinumber-023"


                },

            -   "description": "With Dual Stereo Microphones, HD 1080p, Black,USB connectivity for ease of use.",

            -   "id": "4028fc827a0e48c1017a0e4dccc60002",

            -   "invoiceGroupNumber": "N-0001",

            -   "invoiceOwnerAccountId": "ff80808187ff38570187ff433cbd38ef",

            -   "invoiceOwnerAccountName": "AC_AC_16836148090011683614809001",

            -   "invoiceOwnerAccountNumber": "AN_1683614809001",

            -   "itemName": "webcam",

            -   "itemNumber": "1",

            -   "itemState": "Executing",

            -   "itemType": "Product",

            -   "listPrice": 118,

            -   "listPricePerUnit": 59,

            -   "orderId": "4028fc827a0e48c1017a0e58b9330014",

            -   "ownerAccountId": "ff80808187ff38570187ff433f974203",

            -   "ownerAccountName": "AC_AC_16836148099861683614809986",

            -   "ownerAccountNumber": "AN_1683614809986",

            -   "productCode": "C9201",

            -   "productRatePlanChargeId": null,

            -   "purchaseOrderNumber": "960-000764",

            -   "quantity": 2,

            -   "soldTo": "4028fc828244a0ac018244dfc9a90bee",

            -   "soldToSnapshotId": "4028fc828244a0ac018244dfc9b00bf0",

            -   "transactionEndDate": "2021-02-01",

            -   "transactionStartDate": "2021-02-01"


            }


        ],

    -   "orderNumber": "O-00000282",

    -   "status": "Completed",

    -   "subscriptions": [

        -   {

            -   "baseVersion": 1,

            -   "customFields": { },

            -   "externallyManagedBy": null,

            -   "newVersion": 2,

            -   "orderActions": [

                -   {

                    -   "customFields": { },

                    -   "sequence": 0,

                    -   "triggerDates": [

                        -   {

                            -   "name": "ContractEffective",

                            -   "triggerDate": "2018-12-01"


                            },

                        -   {

                            -   "name": "ServiceActivation",

                            -   "triggerDate": "2018-12-01"


                            },

                        -   {

                            -   "name": "CustomerAcceptance",

                            -   "triggerDate": "2018-12-01"


                            }


                        ],

                    -   "type": "UpdateProduct",

                    -   "updateProduct": {

                        -   "chargeUpdates": [

                            -   {

                                -   "billing": {

                                    -   "billingPeriodAlignment": "AlignToCharge"


                                    },

                                -   "chargeNumber": "C-00000210",

                                -   "customFields": { },

                                -   "description": "New description",

                                -   "effectiveDate": {

                                    -   "specificTriggerDate": "2025-12-01"


                                    },

                                -   "newRatePlanChargeId": "2c98919c67a5ae9d0167a6df304b0372",

                                -   "pricing": {

                                    -   "recurringPerUnit": {

                                        -   "listPrice": 20,

                                        -   "priceChangeOption": "NoChange",

                                        -   "priceIncreasePercentage": 0,

                                        -   "quantity": 12


                                        }


                                    },

                                -   "uniqueToken": "TestUniqueToken1234"


                                }


                            ],

                        -   "customFields": { },

                        -   "newRatePlanId": "2c98919c67a5ae9d0167a6df3011036e",

                        -   "ratePlanId": "2c98919c67a5ae9d0167a68f8eb20262",

                        -   "specificUpdateDate": "2025-11-07",

                        -   "uniqueToken": "TestUniqueToken1234"


                        }


                    }


                ],

            -   "subscriptionNumber": "A-S00000100",

            -   "subscriptionOwnerAccountNumber": "A00000001",

            -   "subscriptionOwnerAccountDetails": {

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

                -   "summaryStatementTemplateId": null,

                -   "purchaseOrderNumber": "",

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


                    }


                }


            },

        -   {

            -   "baseVersion": 2,

            -   "customFields": { },

            -   "externallyManagedBy": "Google",

            -   "newVersion": 3,

            -   "orderActions": [

                -   {

                    -   "customFields": { },

                    -   "resume": {

                        -   "extendsTerm": true,

                        -   "resumeDate": "2018-12-23",

                        -   "resumePeriods": 10,

                        -   "resumePeriodsType": "Day",

                        -   "resumePolicy": "FixedPeriodsFromSuspendDate",

                        -   "resumeSpecificDate": null


                        },

                    -   "sequence": 0,

                    -   "triggerDates": [

                        -   {

                            -   "name": "ContractEffective",

                            -   "triggerDate": "2018-12-12"


                            },

                        -   {

                            -   "name": "ServiceActivation",

                            -   "triggerDate": "2018-12-12"


                            },

                        -   {

                            -   "name": "CustomerAcceptance",

                            -   "triggerDate": "2018-12-12"


                            }


                        ],

                    -   "type": "Resume"


                    },

                -   {

                    -   "customFields": { },

                    -   "sequence": 1,

                    -   "termsAndConditions": {

                        -   "autoRenew": true,

                        -   "invoiceGroupNumber": "N-0001",

                        -   "clearingExistingInvoiceGroupNumber": false,

                        -   "initialTerm": {

                            -   "period": 375,

                            -   "periodType": "Day",

                            -   "startDate": "2025-12-01",

                            -   "termType": "TERMED"


                            },

                        -   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

                        -   "renewalTerms": [

                            -   {

                                -   "period": 3,

                                -   "periodType": "Month"


                                }


                            ]


                        },

                    -   "triggerDates": [

                        -   {

                            -   "name": "ContractEffective",

                            -   "triggerDate": "2018-12-12"


                            },

                        -   {

                            -   "name": "ServiceActivation",

                            -   "triggerDate": "2018-12-12"


                            },

                        -   {

                            -   "name": "CustomerAcceptance",

                            -   "triggerDate": "2018-12-12"


                            }


                        ],

                    -   "type": "TermsAndConditions"


                    }


                ],

            -   "subscriptionNumber": "A-S00000102",

            -   "subscriptionOwnerAccountNumber": "A00000001"


            }


        ],

    -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

    -   "updatedDate": "2018-12-13 17:21:45"


    },

-   "success": true


}`
