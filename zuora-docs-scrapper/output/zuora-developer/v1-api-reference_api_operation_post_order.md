---
title: "POST Order"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:35.799Z"
---

## Create an order

**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora [Subscribe and Amend](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend) customer, we recommend you enable [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization) to access the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders) feature. With Orders, you can access both existing functions for subscription and billing management and the [new features](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders) on Zuora Billing.

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.

You can use this operation to create subscriptions and make changes to subscriptions by creating orders. You can also use this operation to create order line items by creating orders. The following tutorials demonstrate how to use this operation:

-   [Create a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/A_Create_a_Subscription)
-   [Add a Product to a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/A_Add_a_Product_to_a_Subscription)
-   [Create a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/B_Create_a_Ramp_Deal)
-   [Add a Product Mid-Interval Update on a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/E_Update_a_Product_in_a_Ramp_Deal)
-   [Add a Product in a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/C_Add_a_Product_in_a_Ramp_Deal)
-   [Change the Terms and Conditions of a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/D_Change_the_Terms_and_Conditions_of_a_Ramp_Deal_and_Update_the_Ramp)
-   [Change the Owner of a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Change_the_Owner_of_a_Subscription)
-   [Change the Terms and Conditions of a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Change_the_Terms_and_Conditions_of_a_Subscription)
-   [Renew a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Renew_a_Subscription)
-   [Renew a Subscription and Upgrade a Product](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Renew_a_Subscription_and_Upgrade_a_Product)
-   [Replace a Product in a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Replace_a_Product_in_a_Subscription)
-   [Update a Product in a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Update_a_Product_in_a_Subscription)
-   [Cancel a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/D_Cancel_a_Subscription)
-   [Remove a Product from a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/D_Remove_a_Product_from_a_Subscription)
-   [Create sales order line items](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_non-subscription_transactions/Order_Line_Items/B_Manage_Order_Line_Items/AA_Create_a_sales_order_line_item_with_fulfillments)
-   [Associate order line items with new subscriptions](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_non-subscription_transactions/Order_Line_Items/B_Manage_Order_Line_Items/C_Associate_an_order_line_item_with_a_new_subscription)
-   [Return order line items](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_non-subscription_transactions/Order_Line_Items/B_Manage_Order_Line_Items/DA_Return_an_order_line_item_with_fulfillments)

You can also use this operation to create orders and save the orders as [Scheduled Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/AA_Overview_of_Orders/P_Scheduled_Orders).

In addition, you can use this operation to place a standalone order to subscribe without pre-defining a product catalog in Zuora Billing. For more information, see [Create a subscription using a standalone order](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/Standalone_Orders/Create_a_subscription_using_a_standalone_order).

**Note:** If you received a timeout error message when creating an order, the call is still running in the backend and the order will be created.

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

**Note:** When you are to suspend a subcription (via the `suspend` order action), if in the same "Create an order" call you are to perform other subsequent order actions on the supscription to suspend, you must first resume the subscription (via a `resume` order action).

**Note:** When using this operation to create an account, create a subscription, run billing, and collect payment in a single call, if any error occurs during the call, such as a payment processing failure and a tax engine failure, then all the other steps will be rolled back. This means that the invoice will not be generated, the subscription will not be created, and the account will not be created.

**Note:** The characters `#`, `?`, and `/` are not allowed in the Orders operations.

Security**bearerAuth**

Request

##### query Parameters

| returnIds | booleanDefault: falseSpecify whether to return IDs associated with the numbers returned in the "Create an order" operation. |
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
| commitments | Array of objects (UpsertCommitmentInput)It contains a list of commitments to create or update. Use the action nested field to indicate whether to create or update the commitment. |
| customFields | object (OrderCustomFields)Container for custom fields of an Order object. |
| description | string <= 500 charactersA description of the order. |
| existingAccountId | stringThe account ID under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the subscriptionOwnerAccountNumber and invoiceOwnerAccountNumber nested fields in the subscriptions field. If you want to relax the restriction that the existingAccountNumber must be the invoice owner of the subscriptions in this order, submit a request to Zuora Global Support.Note: You can specify either the existingAccountNumber or existingAccountId field, but not both. |
| existingAccountNumber | string <= 70 charactersThe account number under which this order will be created. This field sets the default invoice owner account and subscription owner account for any new subscriptions in the order. To override these defaults for individual subscriptions, use the subscriptionOwnerAccountNumber and invoiceOwnerAccountNumber nested fields in the subscriptions field. If you want to relax the restriction that the existingAccountNumber must be the invoice owner of the subscriptions in this order, submit a request to Zuora Global Support. |
| newAccount | object (CreateOrderNewAccount)The information of the new account to be created with the order. To create the new account, either a creditCard structure or the hpmCreditCardPaymentMethodId field (but not both) should be provided. The one provided becomes the default payment method for this account. If the credit card information is declined or can't be verified, then the account is not created. |
| orderDaterequired | string <date>The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. |
| orderLineItems | Array of objects (CreateOrderOrderLineItem)Order Line Items are non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services.With the Order Line Items feature enabled, you can now launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models.If you do not have the Create Order Line Items Without Product Catalog billing permission, you can only create order line items from existing products by specifying the product rate plan charge ID in the productRatePlanChargeId field. For more information about billing permissions, see Billing Roles.Note: The Order Line Items feature is now generally available to all Zuora customers. You need to enable the Orders feature to access the Order Line Items feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on Orders will have the Order Line Items feature enabled by default. |
| orderNumber | string <= 100 charactersThe order number of the new order. If not provided, system will auto-generate a number for this order.Note: The characters #, ?, and / are not allowed in this field. |
| processingOptions | object (processingOptionsOrdersWithDelayedCapturePayment)The container for billing processing options and payment processing options.Note:This field is not supported in draft orders.When you use the "Create an order" operation to create an account, create a subscription, run billing, and collect payment in a single call, if any error occurs during the call, such as a payment processing failure and a tax engine failure, then all the other steps will be rolled back. In this case, neither the invoice will be generated, nor the subscription nor the account will be created.When you use the "Create an order" operation to cancel a subscription with refund and writeOff, if the refund or writeOff fails, cancelSubscription, runBilling, and collectPayment still can succeed.When you use the "Create an order" operation, the collectPayment and refund fields cannot be set to true simultaneously. Otherwise, the order will not be proceeded. |
| reasonCode | string <= 255 charactersValues of reason code configured in Billing Settings > Configure Reason Codes through Zuora UI. Indicates the reason when a return order line item occurs. |
| schedulingOptions | objectInformation of scheduled order. |
| status | stringThe status of the order. The default value is Completed. The following values are supported:Draft: The order is in draft status.Pending: The order is in pending status.Completed: The order is in completed status.Scheduled: The order is in scheduled status and it is only valid if the Scheduled Orders feature is enabled.Executing: The scheduled order is executed by a scheduler and it is only valid if the Scheduled Orders feature is enabled.Failed: The scheduled order has failed.Note: If you have the Pending Subscription Processing feature turned on and want to create a completed order with an active subscription with pending charges, you must specify Completed in this field because the default order status is Pending for this scenario.Enum: "Draft" "Pending" "Completed" "Scheduled" "Executing" "Failed" |
| subscriptions | Array of objectsEach item includes a set of order actions, which will be applied to the same base subscription. When you create an order that involves multiple subscriptions, these subscriptions can have different invoice owner accounts or subscription owner accounts. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/orders

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "existingAccountNumber": "A00000097",

-   "orderDate": "2024-07-01",

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


                    }


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

Expand allCollapse all

`{

-   "success": true,

-   "orderNumber": "O-00000354",

-   "accountNumber": "A00000097",

-   "status": "Completed",

-   "subscriptions": [

    -   {

        -   "subscriptionNumber": "A-S00000129",

        -   "subscriptionOwnerId": "2c92c0f87270a5970172747e289a5e66",

        -   "subscriptionOwnerNumber": "A00000001",

        -   "status": "Active"


        }


    ]


}`
