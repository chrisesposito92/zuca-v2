---
title: "Country-specific configurations Sovos for Brazil"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-sovos-for-brazil"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:42.877Z"
---

# Country-specific configurations Sovos for Brazil

This topic outlines the e-invoicing system in Brazil, detailing the authorization process, specialized invoice formats, and configuration requirements in Sovos for compliance.

Brazil employs an authorization-based e‑invoicing system, meaning invoices must be validated and approved by the tax authority before they become legally valid for transactions. This applies to all business types (B2B, B2C, and B2G) . Brazil uses multiple specialized electronic invoice formats based on the nature of the transaction:

-   NF‑e: For goods (business-to-business or business-to-consumer)

-   NFS‑e: For local service providers, managed at the municipality level (though a national standard is being introduced)

-   NFCom: For telecommunications services – mandatory from November 1, 2025.

-   CT‑e: For freight transport. All documents must be in XML format, digitally signed using ICP-Brasil certificates, and require validation by SEFAZ (federal or state) before issuance.


Brazil's e-invoicing system has separate, highly regulated cancellation workflows for invoices related to goods (NF-e) and services (NFS-e). The cancellation workflow for electronic invoices is a strict, time-sensitive, and document-specific process governed by different authorities. Zuora supports the cancellation process through both UI and API.

Note: Zuora’s default e-invoice file template supports NFS-e only. It does not support NF-e and CT-e. You could customize the default template in order to support other types of transactions.

## E-invoicing configurations in Sovos for Brazil

To configure e-invoicing for invoice clearance in Brazil, you must create a company profile in Sovos. To get started with Sovos’ Sandbox (UAT) and/or Production environments, customers must meet the following prerequisites:

-   A valid [CNPJ](https://developer-guide.sovos.com/e-invoicing-glossary/#cnpj) (obtained via the [RFB](https://developer-guide.sovos.com/e-invoicing-glossary/#rfb)).

-   A valid [IE](https://developer-guide.sovos.com/e-invoicing-glossary/#inscricao-estadual) (obtained via the relevant [SEFAZ](https://developer-guide.sovos.com/e-invoicing-glossary/#sefaz)).

-   A valid [CCM](https://developer-guide.sovos.com/e-invoicing-glossary/#ccm) (obtained via the relevant municipality).

-   A valid [e-NFE certificate](https://developer-guide.sovos.com/e-invoicing-glossary/#e-nfe).


This information is needed for setting up a business region.

| CNPJ | CNPJ stands for Cadastro Nacional de Pessoas Jurídicas (Portuguese: National Registry of Legal Entities). It is a unique ID assigned to all Brazilian companies by the Receita Federal do Brasil (Portuguese: Brazilian Federal Revenue Service). Each CNPJ consists of a 14-digit number formatted as XX.XXX.XXX/YYYY-ZZ:First 8 digits (XX.XXX.XXX): company identification.4 digits after the slash (YYYY): company's branch or subsidiary ("0001" defaults to the headquarters).Last 2 digits (ZZ) |
| --- | --- |
| IE | IE stands for Inscrição Estadual (Portuguese: State Tax ID). It is a unique number that identifies a company as the taxpayer of the ICMS (Tax on the Circulation of Goods and Services) in the state where it operates. This registration is required for companies that manufacture or sell goods, as well as for certain services involving transportation, communication, and energy. The IE allows these companies to collect and pay the ICMS and to issue NF-e invoices for their products. Companies can obtain their IE through the SEFAZ website of their respective state, once they are legally constituted. |
| CCM | CCM stands for Cadastro de Contribuintes Mobiliários (Portuguese: Taxpayer Contribution System) and it is a municipal registration used to regulate all economic activities and to record the taxpayer's details for all municipal taxes. It is assigned to every supplier upon registration with the municipality.There can be multiple CCMs registered for every company's CNPJ. This allows for the tracking of the various branches or locations of a given company within a Brazilian municipality. |
| e-NFE Certificate | The e-NFE certificate is used for issuing NF-es and is usually issued to a representative of the company.A company must have a valid CNPJ ID before requesting an e-NFE certificate. Its validity is limited to representing the company in the process of issuing tax documents. |
