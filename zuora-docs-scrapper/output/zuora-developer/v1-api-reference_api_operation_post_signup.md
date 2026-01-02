---
title: "POST SignUp"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_SignUp/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:42.624Z"
---

## Sign up

This call performs many actions. You can use this operation to implement the standard requirements for signing up a customer, such as validating the uniqueness of an account and limiting the number of subscriptions per account. Also, you can use this operation to create a subscription, generate an invoice, and collect payment for a new or existing customer.

**Note:** You need to have the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Orders/Orders_Harmonization) feature enabled to use this API. For a new customer, you can perform the following tasks in one call. Note that you can skip creating a payment meethod and still get the subscription and invoice successfully created.

-   Create an account
-   Create a payment method
-   Subscribe to a product in the product catalog and create a subscription
-   Generate an invoice
-   Collect payment

For an existing customer, you can use an account identification field of an external system to specify the account. You can make [make asynchronous requests](https://developer.zuora.com/rest-api/general-concepts/async-requests/) when using the "Sign up" operation.

This call supports a subset of the functionality of our [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call. We generally recommend using "Create an order" instead of this call because the Orders call has the following advantages:

-   Provides options for managing the entire subscription lifecycle from creation through to cancellation using different order actions.
-   Allows the creation or modifying of multiple subscriptions in a single order.
-   Allows a single order to combine both recurring subscription digital goods or services with order line items for physical goods.
-   Orders are treated as atomic transactions. If any part fails, the entire order, subscription, and billing account creation are rolled back.

This call does have some unique abilities not supported by "Create an order". You should consider using this call when you need to:

-   Use Account UPSERT functionality by specifying a custom external identifier.
-   Limit the number of subscriptions on an account

There are no deprecation plans for this call and we will continue to support this call.

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
| Accept | stringExpressed as MIME types that the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. The possible response MIME types are application/json-seq compatible with http://jsonlines.org/, and text/csv compatible with RFC 4180. application/json-seq is the default response MIME type. If the Accept header is not sepecified, or set /, the response body is returned in application/json-seq MIME type. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| accountData | object (AccountData)The information of the account that you are to create through the "Sign up" operation. |
| --- | --- |
| accountIdentifierField | stringSpecify the name of the field that holds external account id |
| customFields | object (CustomFields)Container for custom fields. |
| options | object (Options)Invoice or Payment. |
| paymentData | object (PaymentData) |
| subscriptionData | object (SubscriptionData) |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/sign-up

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountData": {

    -   "autoPay": false,

    -   "billCycleDay": 15,

    -   "billToContact": {

        -   "country": "US",

        -   "firstName": "foo",

        -   "lastName": "bar",

        -   "state": "California"


        },

    -   "currency": "USD",

    -   "customFields": {

        -   "CustomerUserId__c": "User_269145114619000"


        },

    -   "name": "User",

    -   "paymentMethod": {

        -   "makeDefault": true,

        -   "secondTokenId": "010",

        -   "tokenId": "User_269145114619000",

        -   "type": "CreditCardReferenceTransaction"


        }


    },

-   "accountIdentifierField": "CustomerUserId__c",

-   "options": {

    -   "billingTargetDate": "2021-07-01",

    -   "collectPayment": true,

    -   "maxSubscriptionsPerAccount": 0,

    -   "runBilling": true


    },

-   "subscriptionData": {

    -   "invoiceSeparately": false,

    -   "ratePlans": [

        -   {

            -   "productRatePlanId": "4028818284f5f8130184f5fe1a73101f"


            }


        ],

    -   "startDate": "2021-04-15",

    -   "terms": {

        -   "autoRenew": false,

        -   "initialTerm": {

            -   "period": 6,

            -   "periodType": "Month",

            -   "startDate": "2021-04-15",

            -   "termType": "TERMED"


            },

        -   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

        -   "renewalTerms": [

            -   {

                -   "period": 6,

                -   "periodType": "Month"


                }


            ]


        }


    }


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "accountId": "4028818284f5f8130184f5fe1e9011e8",

-   "accountNumber": "A00000001",

-   "invoiceId": "4028818284f5f8130184f5fe23b8120c",

-   "invoiceNumber": "INV00000001",

-   "orderNumber": "O-00000001",

-   "paidAmount": 300,

-   "paymentId": "4028818284f5f8130184f5fe24b71218",

-   "paymentNumber": "P-00000001",

-   "status": "Completed",

-   "subscriptionId": "4028818284f5f8130184f5fe214611f3",

-   "subscriptionNumber": "A-S00000001",

-   "success": true


}`
