---
title: "E-Invoicing Overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:58.818Z"
---

# E-Invoicing Overview

Zuora's E-Invoicing feature enables seamless electronic billing document exchange, ensuring compliance with local regulations through partner integrations, and supports various operations like generating and uploading e-invoice files.

Electronic invoices (e-invoices) are a means of data interchange between business parties. In particular, electronic invoices enable you to send billing documents from Zuora to a receiving system for further processing. Billing documents might include invoices, credit memos, and debit memos. In addition, many countries have established standards and compliance requirements for these electronic documents, associated electronic reports, or both.

Zuora supports electronic invoices through an integration with partners that have a local presence, where required, which guarantees compliance with local invoice regulations. For information about the current and future support for electronic invoices, see [Support for Electronic Invoices (E-Invoices)](https://community.zuora.com/discussion/support-for-electronic-invoices-e-invoices#bmdf50b9ff-ef3a-41ae-9c61-73f179a6ed04-->).

Zuora provides prebuilt partner connectors for e-invoicing solutions. These connectors ensure that your billing documents meet e-invoicing compliance standards in supported countries.

After integrating with your e-invoicing service provider and configuring the E-Invoicing feature in Zuora, you can perform the following operations:

-   Generate e-invoice files for billing documents
-   Upload externally generated e-invoice files for billing documents
-   View e-invoicing data about billing documents

## Availability

The E-Invoicing feature provides the following capabilities:

-   [E-invoicing with Sovos](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos) is generally available.
-   [E-invoicing with Avalara](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara) is in the Early Availability phase.
-   [E-invoicing with PEPPOL](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol) is in the Early Availability phase.

We are actively soliciting feedback from a small set of Early Availability features before releasing them as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](http://support.zuora.com/).

To use the E-Invoicing feature, ensure the following:

-   Ensure that you have the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) feature enabled.
-   Check the following known restrictions and limitations of the E-Invoicing feature.
-   Submit a request at [Zuora Global Support](http://support.zuora.com/).

## Restrictions and limitations

When using the E-Invoicing feature, keep the following restrictions and limitations in mind:

-   You can only configure one e-invoicing business region for the same country and state.
-   You cannot cancel a posted billing document and trigger the cancellation to service providers. If you must cancel the posted invoice, manually cancel it with the tax authority. It is best practice to use [Invoice Reversal](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal) functionality, which generates credit memos against the invoice; then, you can reissue a new invoice.
-   eWaybill specific for India is not supported. e-Waybill is an electronic way bill in India for the movement of goods, which can be generated through the E-Way Bill system.
