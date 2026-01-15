---
title: "E-invoicing with PEPPOL Extract"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:24.626Z"
---

# E-invoicing with PEPPOL Extract

The E-Invoicing with PEPPOL Extract feature lets you create a custom e-invoicing integration by exporting invoice and billing document data in the PEPPOL-compliant XML format.

Note:

E-Invoicing with PEPPOL Extract is now Generally Available (GA).

Zuora offers two e-invoicing options:

-   Integration with E-Invoicing Partners
-   PEPPOL Extract for custom integrations

With PEPPOL Extract, you can export billing documents in the PEPPOL BIS 3.0 format and use the PEPPOL-compliant XML files in your own integration. This approach reduces manual effort by simplifying field mapping between Zuora and third-party vendor platforms.

PEPPOL (Pan-European Public Procurement Online) enables the secure and standardized exchange of electronic billing documents between organizations. Although PEPPOL originated in Europe, many countries around the world now use the network.

All data exchanged through the PEPPOL network must comply with the PEPPOL BIS (Business Interoperability Specification) 3.0 XML standard. For more information, see [PEPPOL BIS Billing](https://docs.peppol.eu/poacc/billing/3.0/bis/).

Note: PEPPOL Extract does not include prebuilt integrations with third-party vendors. You can use this feature to support custom e-invoicing integrations and to reduce the effort required to map data between Zuora and external systems.

## PEPPOL e-invoicing workflow

To exchange electronic billing documents between a seller and a buyer via the PEPPOL network, each party must set up a converter and connect to a PEPPOL access point. The converter helps convert billing documents to or from the PEPPOL format files, and the PEPPOL access point will send the data to your business partners via the network.

In this workflow, you are the seller and Zuora acts as the converter on your end. That is to say, you can define e-invoice file templates in Zuora, and Zuora will generate the PEPPOL-compliant XML files based on the templates and billing documents in your Zuora tenant. However, Zuora is not a PEPPOL access point and cannot connect to any PEPPOL access point for you. Your system must connect to a PEPPOL access point and send these electronic documents by following PEPPOL specifications.
