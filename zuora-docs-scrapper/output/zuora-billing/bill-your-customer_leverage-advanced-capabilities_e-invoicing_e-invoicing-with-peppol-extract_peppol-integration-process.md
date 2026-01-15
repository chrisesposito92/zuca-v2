---
title: "PEPPOL integration process"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/peppol-integration-process"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:17.869Z"
---

# PEPPOL integration process

This task outlines the steps to integrate PEPPOL, including setting up e-invoicing services and connecting to a PEPPOL access point.

The high-level procedure of PEPPOL integration is as follows:

1.  Perform the following steps in your Zuora tenant:
    1.  Create an e-invoicing service provider for PEPPOL.
    2.  Create e-invoicing business regions for the PEPPOL service provider.
    3.  Configure e-invoice file templates for billing documents.
    4.  Configure the e-invoicing profile for customer accounts.
    5.  (Optional) Create custom events and notifications for e-invoice file generations.
2.  Perform the following steps in your system:
    1.  Connect to a PEPPOL access point.
    2.  Extract the generated e-invoice files from Zuora through the REST API.
    3.  Send the retrieved e-invoice files to your business partner via the PEPPOL network.

For more information about the configuration details, see [Integrate PEPPOL](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/integrate-peppol).
