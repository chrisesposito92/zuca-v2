---
title: "Billing Connector for Netsuite GL"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:48.960Z"
---

# Billing Connector for Netsuite GL

An optional solution that leverages the core capabilities of both the Zuora and NetSuite applications

NetSuite Connector is an optional solution that leverages the core capabilities of both the Zuora and NetSuite applications. Zuora manages complex subscriptions and NetSuite is a hosted General Ledger (GL) System.

The NetSuite Connector User Guide describes how to install, configure, and use NetSuite Connector. In addition, it contains reference and troubleshooting information.

## Limitations

The NetSuite Connector has the following limitations:

-   NetSuite Connector is not compatible with the Prepaid Drawdown Zuora Connect app.

-   NetSuite Connector is not compatible with Automated Revenue Management (ARM).

-   Zuora does not recommend that you create orders from NetSuite to Zuora because it can cause potential problems.

-   Netsuite’s integration ID is not synchronized on invoice items when Invoice settlement is enabled.

-   NetSuite Connector cannot sync adjusted accounting codes from the Invoice Item Adjustment (IIA) to Netsuite.

-   NetSuite Connector does not support the “Fortis Bundle” NetSuite Feature.

-   You cannot sync existing custom fields or add custom fields to the synced objects.

-   Avoid using double quotation mark ( `"` ) and comma ( `,` ) in Account Name because it will cause data sync issues.

-   NetSuite Connector can support syncing a maximum of 6,000 credit memos in a single job run.

-   Unsupported charge models include high water mark, pre-rated, and multi-attribute pricing. For more information, see Charge Models .
