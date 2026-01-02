---
title: "PUT Order"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Order/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:05.227Z"
---

## Update an order

**Notes:**

-   This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora [Subscribe and Amend](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend) customer, we recommend you enable [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization) to access the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders) feature. With Orders, you can access both existing functions for subscription and billing management and the [new features](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders) on Zuora Billing.
-   Update an order is only valid for draft or scheduled orders.
-   This operation doesn't support auto-refund and invoice write-off during subscription cancellation. Use the "Create an order" operation instead.
-   You must provide full payload when using the "Update an order" operation. That is, if you want to edit one order action, you need to provide all other order actions in the payload. Otherwise, the other order actions will be removed.

Security**bearerAuth**

Request

##### path Parameters

| orderNumberrequired | string <string>Order number of a order in which you are to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| category | stringDefault: "NewSales"Category of the order to indicate a product sale or return. Default value is NewSales.Enum: "NewSales" "Return" |
| --- | --- |
| commitments | Array of objects (UpsertCommitmentInput)A list of commitments you want to create or update. |
| customFields | object (OrderCustomFields)Container for custom fields of an Order object. |
| description | string <= 500 charactersA description of the order. |
| existingAccountId | stringThe account ID under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the subscriptionOwnerAccountNumber and invoiceOwnerAccountNumber nested fields in the subscriptions field.Note You can specify either the existingAccountNumber or existingAccountId field, but not both. |
| existingAccountNumber | string <= 70 charactersThe account number under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the subscriptionOwnerAccountNumber and invoiceOwnerAccountNumber nested fields in the subscriptions field. |
| orderDaterequired | string <date>The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. |
| orderNumber | string <= 100 charactersThe order number of the new order. If not provided, system will auto-generate a number for this order.Note: The characters #, ?, and / are not allowed in this field. |
| processingOptions | object (processingOptionsOrders)The container for billing processing options and payment processing options.Note:This field is not supported in draft orders.When you use the "Create an order" operation to create an account, create a subscription, run billing, and collect payment in a single call, if any error occurs during the call, such as a payment processing failure and a tax engine failure, then all the other steps will be rolled back. In this case, neither the invoice will be generated, nor the subscription nor the account will be created.When you use the "Create an order" operation to cancel a subscription with refund and writeOff, if the refund or writeOff fails, cancelSubscription, runBilling, and collectPayment still can succeed.When you use the "Create an order" operation, the collectPayment and refund fields cannot be set to true simultaneously. Otherwise, the order will not be proceeded. |
| reasonCode | string <= 255 charactersValues of reason code configured in Billing Settings > Configure Reason Codes through Zuora UI. Indicates the reason when a return order line item occurs. |
| schedulingOptions | objectInformation of scheduled order. |
| status | stringThe status of the order. The default value is Completed. The following values are supported:Draft: The order is in draft status.Pending: The order is in pending status.Completed: The order is in completed status.Scheduled: The order is in scheduled status and it is only valid if the Scheduled Orders feature is enabled.Executing: The scheduled order is executed by a scheduler and it is only valid if the Scheduled Orders feature is enabled.Failed: The scheduled order has failed.Note: If you have the Pending Subscription Processing feature turned on and want to update a completed order with an active subscription with pending charges, you must specify Completed in this field because the default order status is Pending for this scenario.Enum: "Draft" "Pending" "Completed" "Scheduled" "Executing" "Failed" |
| subscriptions | Array of objectsEach item includes a set of order actions, which will be applied to the same base subscription. When you create an order that involves multiple subscriptions, these subscriptions can have different invoice owner accounts or subscription owner accounts. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/orders/{orderNumber}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "existingAccountNumber": "A00000097",

-   "orderDate": "2024-11-11",

-   "subscriptions": [

    -   {

        -   "orderActions": [

            -   {

                -   "createSubscription": {

                    -   "notes": "Notes about the subscription",

                    -   "terms": {

                        -   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

                        -   "initialTerm": {

                            -   "startDate": "2024-11-10",

                            -   "period": 12,

                            -   "periodType": "Month",

                            -   "termType": "TERMED"


                            },

                        -   "renewalTerms": [

                            -   {

                                -   "period": 6,

                                -   "periodType": "Month"


                                }


                            ]


                        }


                    },

                -   "type": "CreateSubscription"


                }


            ]


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true,

-   "orderNumber": "O-00000758",

-   "accountNumber": "A00000097",

-   "status": "Draft"


}`
