---
title: "Create ramp deals in upstream systems"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ramp-deals/create-ramp-deals-in-upstream-systems"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:09.991Z"
---

# Create ramp deals in upstream systems

Learn how to create ramp deals in upstream systems and understand the processing and limitations involved.

There are many ways to create ramp deals in the upstream systems. For detailed information, refer to the documentation of the upstream system. The following articles are for your quick reference.

-   Create ramp deals with [Zuora Quotes](/zuora-cpq/additional-and-supplementary-knowledge-of-cpq/zuora-cpq-object-model/zuora-quotes) .

-   Create ramp deals with Zuora [Orders](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions) .


For information about how to create ramp deals in Salesforce, see the documentation of Salesforce.

## Ramp deal processing in Zuora Revenue

After the ramp deals are collected by Zuora Revenue, Zuora Revenue provides the ramp allocation functionality to identify the ramp deal lines in a revenue contract and perform allocation based on the ramp percentage that is calculated according to the average pricing method of each ramp group. The calculation of ramp allocation is different depending on whether you user Central Revenue or Advanced Revenue.

For more information, see the following articles:

-   Ramp allocation in Zuora Central Revenue.

-   Ramp allocation in [Zuora Advanced Revenue](/zuora-revenue/day-to-day-operation/ramp-deals).


## Known limitations

Be aware of the limitations during the whole processing cycle of a ramp deal. Some limitations are imposed by the upstream system while some limitations exist in Zuora Revenue.

-   If you use Zuora Quotes to create ramp deals, check Zuora Quotes documentation.

-   If you use the Ramps feature provided by Zuora Orders to create ramp deals, see [Ramps limitations](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/overview-of-ramps-and-ramp-metrics#concept-5uiofql6__title-2807).

-   For known limitations in Zuora Revenue, see [Limitations](/zuora-revenue/day-to-day-operation/ramp-deals#concept-kb4ob91i__title-154) .
