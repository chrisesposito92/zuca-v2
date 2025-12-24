---
title: "Project-based revenue"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/project-based-revenue"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:16.506Z"
---

# Project-based revenue

Learn how to set up project-based revenue

If you use NetSuite for managing projects, the invoice sync can also support project-based revenue recognition for invoice charges that should be recognized based on a project delivery instead of time-of-sale or standard subscription schedules. This is common for items such as implementation services.

To set up project-based revenue, complete these steps.

1.  Create a project in NetSuite.
2.  Copy the NetSuite project’s internal ID to the Zuora subscription’s NetSuite Project ID .
3.  On the Zuora product rate plan charge, set the NetSuite Revenue Recognition Template Type to `Variable` .
4.  When the invoice is synced, any variable template type charges will be mapped with a reference to the project specified on the Zuora subscription. Template type charges of type `Standard` will be synced without the project reference.
5.  Manage the project and track time manually in NetSuite to recognize the revenue.

    See "Delayed Revenue Recognition Logic" below for mapping details.
