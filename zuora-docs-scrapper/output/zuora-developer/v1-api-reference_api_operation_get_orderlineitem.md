---
title: "GET OrderLineItem"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_OrderLineItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:20.218Z"
---

## Retrieve an order line item

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default. If you are a new customer who onboard on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) and want to enable the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature, submit a request at [Zuora Global Support](https://support.zuora.com/). If you are an existing [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) customer and want to enable the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature, submit a request at [Zuora Global Support](https://support.zuora.com/).

Retrieves the detailed information about a specified order line item. The following tutorial demonstrates how to use this operation:

-   [View details of an order line item](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/GJ_View_details_of_an_order_line_item)

Security**bearerAuth**

Request

##### path Parameters

| itemIdrequired | string <UUID>The id of the Order Line Item to retrieve. |
| --- | --- |

##### query Parameters

| fulfillment | booleanDefault: falseReturn the related fulfillments or not. |
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

get/v1/order-line-items/{itemId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/order-line-items/{itemId}?fulfillment=false' \\
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

-   "orderLineItem": {

    -   "UOM": null,

    -   "accountingCode": null,

    -   "amount": 10000,

    -   "amountPerUnit": 5000,

    -   "amountWithoutTax": 10000,

    -   "billTargetDate": null,

    -   "billTo": "2c9081a03c6d7b51013c6d7e2dfc09fa",

    -   "billToSnapshotId": "4028fc8487c0a43c0187c12a91500060",

    -   "customFields": {

        -   "externalNumber5__c": "olinumber-023"


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

    -   "relatedSubscriptionNumber": "Warranty-00002",

    -   "soldTo": "4028fc828244a0ac018244dfc9a90bee",

    -   "soldToSnapshotId": "4028fc828244a0ac018244dfc9b00bf0",

    -   "transactionDate": "2021-02-01"


    },

-   "success": true


}`
