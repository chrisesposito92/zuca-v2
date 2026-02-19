---
title: "Testing recommendations in Sovos for India"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-india/testing-recommendations-in-sovos-for-india"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:47.597Z"
---

# Testing recommendations in Sovos for India

Zuora's testing of billing documents using default e-invoice templates covers various document types, operations, and tax scenarios, with specific assumptions applied in the Sovos Sandbox environment.

Zuora has tested various billing document types and operations using the default e-invoice file templates. The test cases cover the following scenarios:

-   Billing document types: invoices, credit memos, and debit memos.

-   Each billing document can include one or multiple charges.

-   Billing document creation scenarios include standalone documents, such as creating an invoice, credit memo, or debit memo from a product rate plan charge, or generating a credit or debit memo from an invoice.

-   Billing operations cover invoice write-offs and reversals, resulting in credit memo creation.

-   Tax scenarios include both interstate and intrastate taxation.


Please note that the testing was performed in the Sovos Sandbox with a testing account, and the following assumptions are applied:

-   Zuora uses the Sovos-provided dummy credentials, including GSTIN, user name, and password for both the business supplier and buyer. However, these credentials do not include the real GSTIN.

-   All billing documents have taxation enabled. The documents without taxation have not been tested. If you have business scenarios where documents have no taxation, you need to test those scenarios and modify the default e-invoice file template accordingly.

-   The taxation addresses are test address data and do not represent the addresses of real business entities.

-   Zuora tests the supply type B2B-Business to Business only. The testing does not cover other supply types: SEZWP - SEZ with payment, SEZWOP - SEZ without payment, EXPWP - Export with Payment, EXPWOP - Export without payment, and DEXP - Deemed EXport.

-   The billing documents include only regular charges, without discount charges. If you use Zuora discount charges, you must customize the default e-invoicing file template.
