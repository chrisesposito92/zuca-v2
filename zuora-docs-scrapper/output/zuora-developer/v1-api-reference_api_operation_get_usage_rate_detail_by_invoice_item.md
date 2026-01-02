---
title: "GET Usage Rate Detail By Invoice Item"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Usage_Rate_Detail_By_Invoice_Item/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:06.623Z"
---

## Retrieve usage rate detail for an invoice item

Use this REST API operation to retrieve the usage rate detail for an invoice item to understand how the total amount is calculated. The information is the same as the Rate Detail presented on [PDF invoices](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/IA_Invoices/Create_a_custom_invoice_template/DD_Display_Usage_Charge_Breakdown#How_UsageSummary.RateDetail_is_displayed_on_invoices).

**Notes and limitations:**

-   Do not support the Overage Charge Model, Tiered with Overage Charge Model, and Multi-attribute Pricing Charge Model.
-   Do not support invoices in `Cancelled` or `Reversed` status.
-   Do not support Active rating.
-   In terms of rating group options, only the [Usage rating by billing period](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Rating/Usage_Rating_by_Group#Usage_rating_by_billing_period) is supported.
-   Do not support [On-demand usage rating](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Rating/On-demand_Usage_Rating).
-   Tax calculation is not involved.

Security**bearerAuth**

Request

##### path Parameters

| invoice-item-idrequired | stringInvoice item ID. For example, 402880e57f725d85017f7267c4ad002b. Available through Data Source export. |
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

get/v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail' \\
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

-   "data": {

    -   "amountWithoutTax": 58,

    -   "chargeNumber": "C-00000001",

    -   "invoiceId": "402880e57f725d85017f7267c44c0028",

    -   "invoiceItemId": "402880e57f725d85017f7267c4ad002b",

    -   "invoiceNumber": "INV00000007",

    -   "listPrice": "Tier / From / To / List Price / Price Format\n1 / 0 / 9 / 0.00 / Per Unit\n2 / 10 / 20 / 1.00 / Per Unit\n3 / 21 / 30 / 2.00 / Flat Fee\n4 / 31 / / 3.00 / Per Unit\n",

    -   "quantity": 45,

    -   "rateDetail": "Tier 1: 0-9, 9 Each(s) x $0.00/Each = $0.00\nTier 2: 10-20, 11 Each(s) x $1.00/Each = $11.00\nTier 3: 21-30, $2.00 Flat Fee\nTier 4: >=31, 15 Each(s) x $3.00/Each = $45.00\nTotal = $58.00",

    -   "servicePeriod": "03/01/2022-03/31/2022",

    -   "uom": "Each"


    },

-   "success": true


}`
