---
title: "Manage invoice items of draft standalone invoices through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/invoice-items-of-draft-standalone-invoices/manage-invoice-items-of-draft-standalone-invoices-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:16.265Z"
---

# Manage invoice items of draft standalone invoices through the REST API

Learn how to manage invoice items of draft standalone invoices using the REST API, including adding, updating, and deleting items.

You can use the [Update an invoice](https://www.zuora.com/developer/api-references/api/operation/PUT_UpdateInvoice) operation to add and delete an invoice item of a draft standalone invoice, or the [Update invoices](https://www.zuora.com/developer/api-references/api/operation/PUT_BatchUpdateInvoices) operation to add and delete invoice items of multiple draft standalone invoices in one single request.

1.  To create and add an invoice item of a draft standalone invoice through the "Update an invoice" operation, perform the following steps:
    1.  Determine the mandatory fields that you need for creating and adding an invoice item, including:

        -   Path parameter: `invoiceKey`

        -   Request fields: `amount`, `serviceStartDate`, `chargeName`, and `unitPrice`.


    2.  Use the "Update an invoice" operation to create and add an invoice item to a draft standalone invoice.

        The following sample API request creates and adds an invoice item to a draft standalone invoice:

        | Request | PUT /v1/invoices/{invoiceKey} |
        | --- | --- |
        | Request body | { "invoiceItems": [ { "amount": 100, "serviceStartDate": "2024-07-11", "chargeName": "C-0000001", "unitPrice": 100 } ] } |

2.  To add an existing product rate plan charge as an invoice item of a draft standalone invoice through the "Update an invoice" operation, perform the following steps:
    1.  Determine the mandatory fields that you need for adding an existing product rate plan charge as an invoice item, including:

        -   Path parameter: `invoiceKey`

        -   Request fields: `amount`, `serviceStartDate`, and `productRatePlanChargeId`


    2.  Use the "Update an invoice" operation to add an existing product rate plan charge as an invoice item to a draft standalone invoice.

        The following sample API request adds an existing product rate plan charge as an invoice item to a draft standalone invoice:

        | Request | PUT /v1/invoices/{invoiceKey} |
        | --- | --- |
        | Request body | { "invoiceItems": [ { "amount": 100, "serviceStartDate": "2024-07-11", "productRatePlanChargeId": "8ad097b4909708e001909b41bb085d38" } ] } |

3.  To delete an invoice item of a draft standalone invoice through the "Update an invoice" operation, perform the following steps:
    1.  Determine the mandatory fields that you need for deleting an invoice item, including:

        -   Path parameter: `invoiceKey`

        -   Request fields: `id` and `delete`


    2.  Use the "Update an invoice" operation to delete an invoice item from a draft standalone invoice.

        The following sample API request deletes an invoice item from a draft standalone invoice:

        | Request | PUT /v1/invoices/{invoiceKey} |
        | --- | --- |
        | Request body | { "invoiceItems": [ { "id": "8ad097b4909708e001909b41bb085d38", "delete": true } ] } |
