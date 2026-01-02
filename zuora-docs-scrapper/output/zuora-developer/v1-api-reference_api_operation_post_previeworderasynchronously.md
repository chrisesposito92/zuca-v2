---
title: "POST PreviewOrderAsynchronously"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewOrderAsynchronously/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:42.769Z"
---

## Preview an order asynchronously

**Notes:**

-   This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora [Subscribe and Amend](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend) customer, we recommend you enable [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization) to access the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders) feature. With Orders, you can access both existing functions for subscription and billing management and the [new features](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders) on Zuora Billing.
-   The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.
-   You cannot preview enhanced discounts and usage charges.

In the case where a normal "Preview an order" operation call will time out, use this operation instead to preview an order asynchronously. A job will be previewing the order in the back end; the job ID will be returned for tracking the job status and result.

#### Billing preview behavior regarding draft invoices

By default, the billing preview behavior regarding draft invoices is as below:

-   When you preview billing for your order and the order contains subscriptions only, the draft invoices are excluded.
-   When you preview billing for your order and the order contains order line items only, the draft invoices are included.
-   When you preview billing for an order that contains both subscriptions order line items, the draft invoices are included for both subscriptions and order line items.

However, if you want to always exclude the draft invoices in billing preview, submit a request at [Zuora Global Support](https://support.zuora.com).

#### Limits on Orders API

The limit of orders allowed on a subscription is 1000.

The limit of order line items allowed in an order is 100.

Zuora has the following limits on the Orders synchronous API to prevent performance degradation:

-   Up to 50 subscriptions are allowed in a single [Create an order](https://developer.zuora.com/api-references/api/operation/POST_Order) or [Preview an order](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrder) operation call.
-   Up to 50 order actions are allowed in a single [Create an order](https://developer.zuora.com/api-references/api/operation/POST_Order) or [Preview an order](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrder) operation call.
-   Up to 50 order actions are allowed on a single subscription in a [Create an order](https://developer.zuora.com/api-references/api/operation/POST_Order) or [Preview an order](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrder) operation call.

If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:

-   [Create an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_CreateOrderAsynchronously)
-   [Preview an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrderAsynchronously)
-   [Retrieve the status and response of a job](https://developer.zuora.com/api-references/api/operation/GET_JobStatusAndResponse) for checking the status of the asynchronous API operations

Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:

-   Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrderAsynchronously) operation call.
-   Up to 300 order actions are allowed in a single [Create an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrderAsynchronously) operation call.
-   Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrderAsynchronously) operation call.

Security**bearerAuth**

Request

##### query Parameters

| summarizeInvoiceItem | booleanDefault: falseIndicates whether to return aggregated invoice item summaries for each invoice.With this parameter set to true, the invoices > invoiceItemSummary field is returned in the preview result. The aggregated invoiceItemSummary field provides a forecast of the number of future invoices (previewInvoiceSequence), and the following information for each invoice:subTotaltotaltaxAmountdiscountAmountservicePeriodStartDateservicePeriodEndDate |
| --- | --- |

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

| category | stringDefault: "NewSales"Category of the order to indicate a product sale or return. Default value is NewSales.Enum: "NewSales" "Return" |
| --- | --- |
| customFields | object (OrderCustomFields)Container for custom fields of an Order object. |
| description | string <= 500 charactersA description of the order. |
| existingAccountId | stringThe account ID under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the subscriptionOwnerAccountNumber and invoiceOwnerAccountNumber nested fields in the subscriptions field.Note: You can specify either the existingAccountNumber or existingAccountId field, but not both. |
| existingAccountNumber | string <= 70 charactersThe account number under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the subscriptionOwnerAccountNumber and invoiceOwnerAccountNumber nested fields in the subscriptions field. |
| orderDaterequired | string <date>The date when the order is signed. All of the order actions under this order will use this order date as the contract effective date. |
| orderLineItems | Array of objects (CreateOrderOrderLineItem)Order Line Items are non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services.With the Order Line Items feature enabled, you can now launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models.If you do not have the Create Order Line Items Without Product Catalog billing permission, you can only create order line items from existing products by specifying the product rate plan charge ID in the productRatePlanChargeId field. For more information about billing permissions, see Billing Roles.Note: The Order Line Items feature is now generally available to all Zuora customers. You need to enable the Orders feature to access the Order Line Items feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on Orders will have the Order Line Items feature enabled by default. |
| orderNumber | string <= 100 charactersThe order number of this order.Note: The characters #, ?, and / are not allowed in this field. |
| previewAccountInfo | object (previewAccountInfo)Information about the account that will own the order. |
| previewOptionsrequired | object (PreviewOptions) |
| reasonCode | string <= 255 charactersValues of reason code configured in Billing Settings > Configure Reason Codes through Zuora UI. Indicates the reason when a return order line item occurs. |
| subscriptions | Array of objectsEach item includes a set of order actions, which will be applied to the same base subscription. When you create an order that involves multiple subscriptions, these subscriptions can have different invoice owner accounts or subscription owner accounts. |

Responses

202

Accepted

post/v1/async/orders/preview

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "existingAccountNumber": "A00000097",

-   "orderDate": "2024-07-01",

-   "previewOptions": {

    -   "previewTypes": [

        -   "BillingDocs"


        ],

    -   "previewThruType": "SpecificDate",

    -   "specificPreviewThruDate": "2024-07-31"


    },

-   "subscriptions": [

    -   {

        -   "orderActions": [

            -   {

                -   "type": "CreateSubscription",

                -   "createSubscription": {

                    -   "terms": {

                        -   "initialTerm": {

                            -   "period": 12,

                            -   "periodType": "Month",

                            -   "termType": "TERMED"


                            },

                        -   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

                        -   "renewalTerms": [

                            -   {

                                -   "period": 12,

                                -   "periodType": "Month"


                                }


                            ]


                        },

                    -   "subscribeToRatePlans": [

                        -   {

                            -   "productRatePlanId": "8ad081dd9096ef9501909b40bb4e74a4"


                            }


                        ]


                    },

                -   "triggerDates": [

                    -   {

                        -   "name": "ContractEffective",

                        -   "triggerDate": "2024-07-01"


                        },

                    -   {

                        -   "name": "ServiceActivation",

                        -   "triggerDate": "2024-07-01"


                        },

                    -   {

                        -   "name": "CustomerAcceptance",

                        -   "triggerDate": "2024-07-01"


                        }


                    ]


                }


            ]


        }


    ]


}`

Response samples

-   202

application/json

responseresponse

Copy

`{

-   "jobId": "2c90a02d676688200167770ce20601b6"


}`
