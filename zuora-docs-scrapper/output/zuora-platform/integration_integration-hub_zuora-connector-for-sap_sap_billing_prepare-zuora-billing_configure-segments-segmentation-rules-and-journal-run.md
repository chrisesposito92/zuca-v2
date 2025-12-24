---
title: "Configure segments, segmentation rules, and journal run"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/prepare-zuora-billing/configure-segments-segmentation-rules-and-journal-run"
product: "zuora-platform"
scraped_at: "2025-12-24T08:37:26.233Z"
---

# Configure segments, segmentation rules, and journal run

Learn how to configure segments, set up general ledger segmentation rules, and create journal runs to manage your financial data effectively in Zuora.

## Configure Segments

A segment is an association with a field on a Zuora object. After configuring segments, data for these segments is automatically included in your journal entries.

To configure segments, click your username at the top right and navigate toSettings\>Finance\>Configure Segments. For more information, see [Configure Segments.](/accounts-receivable/finance/zuora-finance-settings/configure-segments)

When you perform a journal run, you can add segments to a segmentation rule to determine how your transactions are segmented into journal entries.

## Configure general ledger segmentation rules

A general ledger segmentation rule determines how your journal entries are segmented when you perform a journal run. A general ledger segmentation rule contains a set of segments, and transactions are grouped into summary journal entries according to the transactions' values for those segments.

Transactions are grouped into summary journal entries based on the following fields:

-   Transaction type

-   Currency

-   Debit account

-   Fields associated with the active general ledger segmentation rule


To configure GL segmentation rules, click your username at the top right and navigate toSettings\>Finance\>Configure GL Segmentation Rules.

For more information, see [Configure GL Segmentation Rules](/accounts-receivable/finance/zuora-finance-settings/gl-segmentation-rules).

## Create a journal run

Journal runs create journal entries suitable for importing into your general ledger.

To create a journal run, clickFinance\>Journal Runsfrom the left navigation panel and clickNew Journal Run.

For more information, see [Create a Journal Run](/accounts-receivable/finance/summary-journal-entries/journal-runs) .
