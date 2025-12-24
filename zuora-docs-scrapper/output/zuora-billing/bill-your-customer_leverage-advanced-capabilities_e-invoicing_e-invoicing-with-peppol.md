---
title: "E-invoicing with PEPPOL"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:25.947Z"
---

# E-invoicing with PEPPOL

The E-invoicing with PEPPOL feature enables the export of billing documents in PEPPOL BIS 3.0 format, facilitating secure and streamlined electronic document exchange globally.

The E-Invoicing feature offers the ability to export billing documents in PEPPOL BIS 3.0 format, streamlining the e-invoicing process with the flexibility of customizing e-invoice templates to accommodate country-specific mappings and customer-specific configurations.

PEPPOL (Pan-European Public Procurement Online) provides the ability to exchange electronic billing documents between parties with a secure and streamlined e-invoicing process. PEPPOL has been adopted not only by European countries but also by countries around the world.

The data exchanged via the PEPPOL network must conform to the XML PEPPOL BIS (Business Interoperability Specification) 3.0 format. For more information about the format specification, see [PEPPOL BIS Billing](https://docs.peppol.eu/poacc/billing/3.0/bis/).

## Availability

The E-invoicing with PEPPOL feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early availability program, submit a request at [Zuora Global Support](https://support.zuora.com/).

## PEPPOL e-invoicing workflow

To exchange electronic billing documents between a seller and a buyer via the PEPPOL network, each party must set up a converter and connect to a PEPPOL access point. The converter helps convert billing documents to or from the PEPPOL format files, and the PEPPOL access point will send the data to your business partners via the network.

In this workflow, you are the seller and Zuora acts as the converter on your end. That is to say, you can define e-invoice file templates in Zuora, and Zuora will generate the PEPPOL-compliant XML files based on the templates and billing documents in your Zuora tenant. However, Zuora is not a PEPPOL access point and cannot connect to any PEPPOL access point for you. Your system must connect to a PEPPOL access point and send these electronic documents by following PEPPOL specifications.
