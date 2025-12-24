---
title: "Project-based revenue"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/project-based-revenue"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:00.869Z"
---

# Project-based revenue

Learn how to set up project-based revenue

The debit memo sync also supports project-based revenue recognition. In this case, debit memo charges are recognized based on a project delivery instead of the time-of-sale or standard subscription schedule. This is common for items such as implementation services.

To set up project-based revenue, complete these steps.

1.  Create a project in NetSuite.
2.  Copy the NetSuite project's internal ID to the Zuora subscription's NetSuite Project ID.
3.  On the Zuora product rate plan charge, set the NetSuite Revenue Recognition Template Type to `Variable`.
4.  When the debit memo is synced, any `Variable` Template Type charges will be synced with a reference to the project specified on the Zuora subscription. `Standard` Template Type charges will be synced without the project reference.
5.  Manage the project and track time manually in NetSuite to recognize the revenue.
