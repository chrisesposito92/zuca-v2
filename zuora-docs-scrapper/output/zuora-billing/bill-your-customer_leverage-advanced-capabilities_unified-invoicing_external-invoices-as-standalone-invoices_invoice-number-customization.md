---
title: "Invoice number customization"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/external-invoices-as-standalone-invoices/invoice-number-customization"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:49.419Z"
---

# Invoice number customization

You can customize invoice numbers when creating standalone invoices through the REST API.

When you create standalone invoices through the REST API, you can use the `invoiceNumber` field to input a customized invoice number, for example, \`6LU5F8NW00001\`. A typical use case is to keep the original invoice number when importing invoices from other billing systems into Zuora for easy cross-reference and reporting. Things to note when using this field:

-   Format requirements:

    -   Max length: 16 characters

    -   Acceptable characters: a-z, A-Z, 0-9, -, \_,

-   Must be unique.

-   Only available in the request body of the Create a standalone invoice and Create standalone invoices operations. Operations to update standalone invoices are not supported. Subscription invoices are not supported.

-   When an invoice with a customized invoice number is deleted, the system will change the value by adding a random suffix, for example, from \`CUSINV00000001\` to \`CUSINV00000001\_14230a434ea\`. This behavior ensures that if you use the same invoice number again, it is still unique in the system.

-   Avoid using the system default prefixes , prefixes for internal use , or any customized prefixes you have configured because that might have a numbering conflict and cause issues with bill runs and subscribe/amend. To resolve the conflict if it happens, go to Billing Settings > Define Numbering and SKU Formats > Define Prefixes, Numbers and Sequence Sets to identify the prefix in conflict. For more information, see Configure prefix and numbering for billing documents .

    -   Change the Prefix to a new one; Or

    -   Change the Starting Document Number to a value greater than the current value.
