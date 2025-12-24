---
title: "Create standalone invoices through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/standalone-invoices-creation/create-standalone-invoices-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:08.637Z"
---

# Create standalone invoices through the REST API

Create standalone invoices using the Zuora REST API by determining mandatory fields and utilizing the Create a standalone invoice operation.

You can use the [Create a standalone invoice](https://www.zuora.com/developer/api-references/api/operation/POST_StandaloneInvoice) operation and the following sample API request to create a standalone invoice for the "Consulting days purchase" one-time charge.

To create a standalone invoice through the Zuora REST API, perform the following steps:

1.  Determine the mandatory fields you need for creating a standalone invoice, including:

    -   `accountId`

    -   `invoiceDate`

    -   `invoiceItems` > `amount`

    -   `invoiceItems` > `serviceStartDate`


2.  Use the [Create a standalone invoice](https://www.zuora.com/developer/api-references/api/operation/POST_StandaloneInvoice) operation to create a standalone invoice. If you create a standalone invoice from an existing product, set the `invoiceItems` > `productRatePlanChargeId` field in the request. You must have the Create Standalone Invoice With Product Catalog billing permission to do this. For more information, see Billing Roles . Zuora directly reads the values of the following fields from the corresponding product rate plan charge, regardless of the values specified in the request body:

-   `chargeName`

-   `sku`

-   `uom`

-   `taxCode`

-   `taxMode`

-   `accountingCode`

-   `deferredRevenueAccountingCode`

-   `recognizedRevenueAccountingCode`


The following sample API request creates a standalone invoice from an existing product rate plan charge:

| Request | POST /v1/invoices |
| --- | --- |
| Request body | { "accountId": "2c92c8f95bd63b98015bd7ab09ef0926", "invoiceDate": "2021-08-01", "dueDate": "2021-08-01", "autoPay": true, "invoiceItems": [ { "description": "Professional Service - consulting days purchase", "amount": "100", "quantity": "1", "serviceStartDate": "2021-09-01", "itemType": "service", "productRatePlanChargeId": "402890555a87d7f5015a88c613c5001e" }, { "chargeName": "Equipment", "description": "Equipment fee", "amount": "200", "quantity": "10", "uom": "day", "sku": "SKU-0001", "serviceStartDate": "2021-09-01" } ] } |

After the sample API request is submitted, the following sample API response is returned:

| Request | POST /v1/invoices |
| --- | --- |
| Response body | { "id":"4028948777ed0d460177ed157f840002", "invoiceNumber":"INV00000034", "accountId":"2c92c8f95bd63b98015bd7ab09ef0926", "amount":300, "amountWithoutTax":300, "invoiceDate":"2021-08-01 00:00:00", "dueDate":"2021-08-01 00:00:00", "autoPay":true, "comments":"comments string", "status":"Draft", "taxAmount":0, "taxExemptAmount":0, "transferredToAccounting":null, "success":true } |
