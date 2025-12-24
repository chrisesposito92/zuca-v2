---
title: "E-invoicing with Sovos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:04.550Z"
---

# E-invoicing with Sovos

This topic is intended for Zuora Global Service engineers and customer developers who wish to configure e-invoice file templates for Sovos integration.

The Zuora E-Invoicing feature provides the extensibility and configurability to empower you to build country- and customer-specific integrations with Sovos E-Invoice solution including:

-   Create e-invoice file templates to streamline integration for new countries

-   Customize standard e-invoice file templates to meet specific customer requirements


## Standard business documents for Sovos

When e-invoicing with Sovos, Zuora generates electronic billing documents (standard business documents) based on Sovos-compliant e-invoicing file templates and then sends the documents to Sovos.

Each document sent to Sovos consists of the following parts:

-   Standard Business Document Header (SBDH): Provides semantic information required for the routing, processing, and business domain context of the document.

-   Sovos Document (SD): Contains a Sovos Canonical Invoice (SCI) or a Sovos Local Document (SLD).

    -   Sovos Canonical Invoice: details of the billing document. SCI is a standard created by Sovos based on the Universal Business Language (UBL2.1). For more information about SCI and a spreadsheet with country-specific details, see [Sovos Canonical Invoice](https://developer-guide.sovos.com/connect-once-api/standard-business-document/sovos-canonical-invoice/).

    -   Sovos Legal Document: local format for a specific country or document encoded in Base64, optionally including Additional Data. Note that Zuora does not support Sovos Legal Document for now.


For more information, see [Standard Business Document](https://developer-guide.sovos.com/connect-once-api/standard-business-document).
