---
title: "Performance obligations processing"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:17:49.892Z"
---

# Performance obligations processing

Performance obligations processing involves grouping transaction lines into promises made to customers, defined by POB templates and assignment rules, to determine revenue recognition patterns and dependencies.

After the transaction lines are grouped into the revenue contract based on the RC grouping templates, the transaction lines within one revenue contract must be grouped into promises that are made to customers. These promises are referred to as performance obligations (POB) by ASC 606. Revenue can be recognized as or when the performance obligation is satisfied.

In Zuora Revenue, performance obligations are defined by POB templates and POB assignment rules. A performance obligation template determines the revenue recognition pattern (trigger and timing) for each distinct performance obligation and might also define cost treatment, variable consideration assignment, and any performance obligation dependencies if applicable.

## Revenue release event

When you create a POB template, you must specify the revenue release event for the performance obligation. The revenue associated with a performance obligation can be released in one of the following ways:

-   Upon Event - For example, upon shipment by quantity.
-   Upon Billing (Billed Release) — This option recognizes the exact billed percentage with respect to the line when billing data is collected to revenue.
-   Upon Billing (Full Booking Release) — This option recognizes the total booking amount when a bill is collected, irrespective of whether the billed value is partial or full.
-   Upon Booking (Full Booking Release) — This option recognizes the booking amount when a line is collected.
-   Upon Manual Release — For example, a revenue user manually performs the release of revenue for the performance obligation.
-   Upon Expiry — For example, after 30 days from the sales order book date.
-   Upon Satisfying a POB Dependency — For example, when a parent POB within the same revenue contract is satisfied.

Predefined release events are provided for you to select when you create a POB template. You can also create your own revenue events in Setups > Application > Event Setup based on your business needs. Both the predefined and user-defined revenue events can be displayed when you create a POB template. For more information about release event setup, see [Event Setup](/zuora-revenue/data-management/event-processing) .

Note:

If the POB release is Upon Event with process type as quantity, any manual or mass action of revenue deferral or release will break the integrity of revenue recognized with event processing.

## Ratable method

To perform revenue recognition, a ratable method must be specified for each performance obligation within a revenue contract. A ratable method describes how Zuora Revenue will schedule revenue based on the triggered release events and how Zuora Revenue interacts with the start and end dates that come in with the sales order transaction line.

For example, when a revenue action such as Upon Delivery By Qty triggers a release of revenue on a performance obligation, the ratable method that is assigned to the POB template determines whether the revenue of a performance obligation is scheduled for immediate recognition or whether the revenue is scheduled over a duration of time such as contract ratable. The Contract Ratable method indicates that the release of revenue is based on the revenue start date and end date of the sales order. When you create a POB template in Zuora Revenue, you must select one ratable method.

For information about the predefined ratable methods, see [Predefined POB ratable methods](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/predefined-pob-ratable-methods) .

## POB assignment order

Zuora Revenue identifies the correct performance obligation template to assign to the transaction lines within a revenue contract by attempting all available POB assignment rules in the following order:

1.  Advanced Rule
2.  Assignment - By Attributes
3.  Assignment - By Item/SKU#

If Zuora Revenue does not find a rule to assign a performance obligation template, Zuora Revenue assigns the Auto POB template by default.

## Related articles

1.  For Zuora Revenue to automatically group transaction lines into POBs within a revenue contract, complete the following tasks:

    1.  Create POB template. For information, see [Create POB template](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/create-pob-template).
    2.  Define POB assignment rules. For information, see [Define POB assignment rules](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules).


    For information about consolidated POBs, see [Consolidated performance obligations](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/consolidated-performance-obligations).
