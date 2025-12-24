---
title: "AUSTRALIA_POST"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-barcodes-in-html-templates/australia_post"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:10.726Z"
---

# AUSTRALIA\_POST

Details the implementation of the Australia Post 4-state barcode, including supported characters, input data requirements, and barcode variants.

This barcode type implements Australia Post, a 4-state barcode.

This barcode type supports the following characters:

-   All numeric digits (0-9)

-   All uppercase letters (A-Z)

-   All lowercase letters (a-z)

-   Number signs (#)

-   Space character


A Format Control Code (FCC) is added and must not be included in the input data.

Input data include an 8-digit Delivery Point Identifier (DPID) optionally followed by customer information as it is shown in the following table.

| Description | Input length | Required input format | Barcode length | FCC value | Encoding table |
| --- | --- | --- | --- | --- | --- |
| Standard Customer Barcode | 8 | 99999999 | 37 bars | 11 | None |
| Customer Barcode 2 | 13 | 99999999AAAAA | 52 bars | 59 | C |
| 16 | 9999999999999999 | 52 bars | 59 | N |  |
| Customer Barcode 3 | 18 | 99999999AAAAAAAAAA | 67 bars | 62 | C |
| 23 | 99999999999999999999999 | 67 bars | 62 | N |  |

For more information about the AUSTRALIA\_POST barcode type, see AustraliaPost .

## Variants

-   AUSTRALIA\_POST\_CUSTOMER is for standard customers.

-   AUSTRALIA\_POST\_REPLY is a reply paid version of the Australia Post 4-State Barcode (FCC 45), which requires an 8-digit DPID input.

-   AUSTRALIA\_POST\_REDIRECT is a redirection version of the Australia Post 4-State Barcode (FCC 92), which requires an 8-digit DPID input.

-   AUSTRALIA\_POST\_ROUTING is a routing version of the Australia Post 4-State Barcode (FCC 87), which requires an 8-digit DPID input.


## Examples

You can use the following merge field examples to generate Australia Post barcodes:

<h1>AUSTRALIA\_POST\_CUSTOMER</h1>  {{#Wp\_Barcode}}  AUSTRALIA\_POST\_CUSTOMER,imageWidth=100,imageHeight=100  12345678  {{/Wp\_Barcode}} <h1>AUSTRALIA\_POST\_REPLY</h1>  {{#Wp\_Barcode}}  AUSTRALIA\_POST\_REPLY,imageWidth=100,imageHeight=100  12345678  {{/Wp\_Barcode}} <h1>AUSTRALIA\_POST\_REDIRECT</h1>  {{#Wp\_Barcode}}  AUSTRALIA\_POST\_REDIRECT,imageWidth=100,imageHeight=100  12345678  {{/Wp\_Barcode}} <h1>AUSTRALIA\_POST\_ROUTING</h1>  {{#Wp\_Barcode}}  AUSTRALIA\_POST\_ROUTING,imageWidth=100,imageHeight=100   12345678   {{/Wp\_Barcode}}
