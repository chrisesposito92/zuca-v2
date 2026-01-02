---
title: "GetSubscriptionChangelogByVersion"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getSubscriptionChangelogByVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:51:03.327Z"
---

## Retrieve a change history of a subscription by version

Retrieves the change history of a single version subscription by version. This version indicates the creation sequence of the orders associated with the subscription and starts from `1`. See the `subscription` > `fields`, `ratePlans` > `fields`, and `ratePlanCharges` > `fields` fields for the changes in the subscription, subscription rate plans, and subscription rate plan charges.

**Note**: This operation is only available if you have the following features turned on:

-   [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders)

-   [Single Version Subscription](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/Single_Version_Subscription)


Security**bearerAuth**

Request

##### path Parameters

| subscriptionNumberrequired | stringThe subscription number to be retrieved. |
| --- | --- |
| versionrequired | stringThis version indicates the creation sequence of the orders associated with the subscription and starts from 1. |

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

Invalid input

get/v1/subscription-change-logs/{subscriptionNumber}/versions/{version}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/subscription-change-logs/{subscriptionNumber}/versions/{version}' \\
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

Copy

Expand allCollapse all

`{

-   "success": true,

-   "subscription": {

    -   "subscriptionNumber": "A-S00000001",

    -   "version": 2,

    -   "subscriptionStartDate": "2021-01-01",

    -   "subscriptionEndDate": "2023-02-01",

    -   "termStartDate": "2021-02-01",

    -   "termEndDate": "2023-02-01",

    -   "accountNumber": "AN_1723454733315",

    -   "invoiceOwnerAccountNumber": "AN_1723454733315",

    -   "currency": "USD",

    -   "orderNumber": "O-00000002",

    -   "type": "Standard",

    -   "externalSubscriptionId": null,

    -   "changedTime": "2024-08-12 02:25:36",

    -   "ratePlans": [

        -   {

            -   "ratePlanNumber": "SRP-00000001",

            -   "ratePlanCharges": [

                -   {

                    -   "chargeNumber": "C-00000001",

                    -   "ratePlanChargeId": "28b907304229145dff3145e84432000a",

                    -   "effectiveStartDate": "2021-01-01",

                    -   "effectiveEndDate": "2023-02-01",

                    -   "fields": [

                        -   {

                            -   "fieldName": "effectiveEndDate",

                            -   "oldValue": "2022-01-01",

                            -   "newValue": "2023-02-01"


                            }


                        ]


                    }


                ],

            -   "fields": [ ]


            }


        ],

    -   "fields": [

        -   {

            -   "fieldName": "initialTerm",

            -   "oldValue": "12",

            -   "newValue": "2"


            },

        -   {

            -   "fieldName": "initialTermPeriodType",

            -   "oldValue": "Month",

            -   "newValue": "Year"


            }


        ]


    }


}`
