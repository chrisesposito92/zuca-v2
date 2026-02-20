---
title: "About SAP (Billing) connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/about-sap-billing-connector"
product: "zuora-platform"
scraped_at: "2026-02-20T21:12:14.036Z"
---

# About SAP (Billing) connector

The SAP (Billing) connector automates the integration of Zuora with SAP, facilitating seamless transfer of journal entries and billing documents without the need for custom-built solutions.

The SAP (Billing) connector automates the posting of accounts receivable journals to your SAP general ledger. This no-code solution eliminates the need for a custom-built integration between Zuora and SAP.

The SAP Connector automates the following transfer operations between Zuora and SAP:

-   Zuora Billing and Payments Journal Entries to SAP FI-GL Journal Entries.

    -   Create SAP Financial Accounting - General Ledger journal entries from Zuora Billing and Zuora Payments journal entries.

-   Zuora Revenue Journal Entries to SAP FI-GL Journal Entries.

    -   Create SAP Financial Accounting - General Ledger journal entries from Zuora Revenue journal entries.

-   Zuora Billing Documents to SAP SD Billing Documents.

    -   Create SAP SD billing documents from billing documents in Zuora Billing.

-   Zuora Billing Documents to SAP FI-AR Postings.

    -   Create SAP Financial Accounting - Accounts Receivable postings from billing documents in Zuora Billing.


This no-code solution eliminates the need for custom-built integrations between Zuora and SAP.

## Key features of SAP connector

-   No-code setup

-   User-configurable field mappings

-   On-demand and scheduled execution

-   Grouping criteria selection for revenue accounting entries

-   Summary reports

-   User-defined revenue journal accounting batch size

-   Multi-org support

-   SAP ECC, S/4HANA Private Cloud, and S/4HANA Public Cloud support


## Prerequisites

To use the SAP (Billing) connector, ensure the following prerequisites are met:

-   SAP (Billing) is enabled.

-   Finance is enabled.


And optionally:

-   Multi-org is enabled.


## Configuration flow

The following flow diagram outlines the steps in configuring the SAP (Billing) connector.

![SAP configuration for billing](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/integration_hub/media/SAP_CONN.png)

## Execution flow

The following flow diagram outlines the steps in executing the SAP (Billing) connector.

![SAP Connector_Billing_Execution flow.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9f3fcde0-6dea-4632-8c67-b456a757c921?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlmM2ZjZGUwLTZkZWEtNDYzMi04YzY3LWI0NTZhNzU3YzkyMSIsImV4cCI6MTc3MTcwODMyOCwianRpIjoiNzE3ZmI4ZGQ2YTFlNGNlN2E2NWI2YTI0MTM1Y2I0MmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.RkkUWg3Z0sdAfLCQAdNKke3imc3l0pqqcoVuZUHiw6E)

To start using SAP (Billing), perform the tasks described in the following sections:

-   [Prepare SAP S/4HANA private cloud](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/prepare-sap-s4hana-private-cloud)

-   [Configure S/4HANA public cloud](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/configure-s4hana-public-cloud)

-   [Configure the Zuora SAP-BTP agent](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/configure-the-zuora-sap-btp-agent)

-   [Prepare Zuora billing](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/prepare-zuora-billing)

-   [Prepare Zuora Revenue](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/prepare-zuora-revenue-for-sap-gl-connector)

-   [Configure the SAP connector](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/configure-the-sap-connector)

-   [Execute the SAP Connector](/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/execute-the-sap-gl-billing-connector)
