---
title: "Transition to Revenue Sync"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/transition-to-revenue-sync"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:58.148Z"
---

# Transition to Revenue Sync

Guidelines for transitioning from legacy Data Sync and Data Transformation programs to the Revenue Sync program to ensure a smooth integration process.

To simplify the integration process and minimize your effort, we recommend that you transit to the Revenue Sync program from legacy Data Sync and Data Transformation programs.

Take the following steps to ensure a smooth transition:

1.  Close the current open period. Because the data picked up by the legacy Data Sync or Data Transformation jobs is in flight, we recommend that you start using the Revenue Sync after closing the current period.
2.  Stop all the existing Data Sync and Data Transformation scheduler programs.
3.  Determine the start date for the new Revenue Sync process. The best practice is to use the last day of the previous accounting period. It can help you catch up any data that might have been missed. For example, if you are in the mid of August and the current open period is AUG-2020, the Revenue Sync start date should be set to July 30, 2020. Note that you only need to configure the start date for the first Revenue Sync program. Subsequent Revenue Sync jobs will determine the start date based on the previous Revenue Sync job. See [Run Revenue Sync jobs](/zuora-revenue/advanced-revenue-operations/run-revenue-sync-jobs) for more information.
