---
title: "Generation rules and examples of Charge Metrics object"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics/generation-rules-and-examples-of-charge-metrics-object"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:07.358Z"
---

# Generation rules and examples of Charge Metrics object

This article outlines the rules for generating the Charge Metrics object and provides examples of scenarios such as subscription creation or modification.

This article explains the rules for generating the Charge Metrics object and includes examples of various scenarios for generating Charge Metrics objects, such as subscription creation or modification.

## Generation rules

The Charge Metrics object is typically generated when subscription rate plan charges (RPCs) are created or updated. Zuora follows these rules when generating the Charge Metrics object:

-   Each Charge Metrics object is linked to a specific service period within a subscription.

-   If multiple RPCs with identical charge details exist for a service period, the Charge Metrics object is associated with the earliest created RPC.

-   If multiple RPCs with different charge details exist for a service period, the Charge Metrics object is associated with the most recently modified RPC.
