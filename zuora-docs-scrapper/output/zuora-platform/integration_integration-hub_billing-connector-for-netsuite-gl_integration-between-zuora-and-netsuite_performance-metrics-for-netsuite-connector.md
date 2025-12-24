---
title: "Performance metrics for NetSuite connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/performance-metrics-for-netsuite-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:29.176Z"
---

# Performance metrics for NetSuite connector

Metrics that outline transaction sync speeds for various objects in the NetSuite connector

The performance metrics outline transaction sync speeds for various objects in the NetSuite connector, emphasizing synchronization between Zuora and NetSuite.

| Object | Direction of sync | Transaction sync speed per minute |
| --- | --- | --- |
| Account | Zuora to NetSuite | 200 |
| Invoice | Zuora to NetSuite | 25 |
| Payment | Zuora to NetSuite | 35 |
| Payment | NetSuite to Zuora | 2 |
| Refund | Zuora to NetSuite | 30 |
| Credit Memo | Zuora to NetSuite | 25 |
| Debit Memo | Zuora to NetSuite | 10 |
| Product Rate Plan Charge | Zuora to NetSuite | 20 |

These performance metrics show the reference speeds with Multithreading enabled and 10 threads in NetSuite. The metrics may differ depending on the connector's configuration and setup.

Note:

-   The speeds only apply to the base object sync and do not include [custom field sync](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync).

-   The speed of syncing invoices, credit memos, and debit memos depends on the number of items in each record.

    -   The recorded invoice sync speed is based on an average of 3 invoice items per invoice.

    -   The recorded sync speed for credit memos displays an average of 1 item per memo.
