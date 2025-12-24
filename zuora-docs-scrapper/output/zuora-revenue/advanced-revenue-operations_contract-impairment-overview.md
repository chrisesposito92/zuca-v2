---
title: "Contract impairment overview"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:05.819Z"
---

# Contract impairment overview

Customers can request a contract rip and restructure to align all subscription start and end dates within a revenue contract.

During the life cycle of a revenue contract, the customer might want easier subscription management by having all subscriptions with the same start and end dates. To achieve this goal, the customer will request to rip and restructure the contract by canceling the existing revenue contract and then creating a new one with the alignment of start and end dates on all subscriptions.

The new structured contract can be sold within or outside the SSP range, which will be processed by Zuora Revenue in different ways:

-   If the restructured contract is sold outside the SSP range, it will be linked to the original ripped contract with the Prospective allocation treatment.

-   If the restructured contract is sold within the SSP range, there will be no linking between the ripped and restructured contracts. The restructured contract will be treated as a new revenue contract within the initial timeline. Prospective allocation will be applied to the ripped contract. If impairment amount exists, Zuora Revenue will handle revenue accounting based on the Impairment Type flag that is populated when the canceled line (i.e. RORD line) is collected.


## Supported impairment types

The supported Impairment Type flag on the canceled line is as follows:

-   [CONTRACT IMPAIRMENT (Type 1)](/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/contract-impairment) When the Impairment Type flag is set to CONTRACT IMPAIRMENT, an Impairment Account must be set up in the system. When the RORD line is collected, the impairment amount goes to the impairment account type immediately.

-   [NEW POB RATABLE (Type 2)](/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/new-pob-ratable) When the Impairment Type flag is set to NEW POB RATABLE, the system creates a new POB based on the canceled line with the remaining negative adjustment amount (impairment amount), which is to be amortized over the remaining terms.

-   [NULL (Type 3)](/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/null) When the Impairment Type flag is null on the RORD line, the impairment amount remains on the SO line. If a new SO line joins the existing contract, the system performs reallocation on the new and existing SO lines, and the deferral balance sitting on the canceled line is spread into the remaining SO lines. If you do not want to have the new SO joining the revenue contract in this scenario, you can set the revenue contract to Retrospective and then reallocate the contract.

-   [R AND R WITHIN SSP (Type 4) Example -1 Partial impairment](/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/r-and-r-within-ssp---full-impairment) and [R AND R WITHIN SSP (Type 4) Example - 2 Partial impairment](/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/r-and-r-within-ssp---partial-impairment) The impairment amount is kept as is and amortized over the term of the ripped contract. The ripped contract is closed for further linking. No new POB can be collected for the ripped contract. Instead, the new POB will go to a new revenue contract created by the system. If any deferral (either full or partial) happens to any line in the existing revenue contract, the system will not unfreeze the revenue contract and the allocation remains unaffected.

-   RETROSPECTIVE (Type 5) When this type of contract impairment occurs, the revenue contract is reallocated in retrospective mode.

-   [NEW POB IMMEDIATE (Type 6)](/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/new-pob-immediate) When this type of impairment occurs, the impairment amount is released immediately.


Note:

For a contract to get into any of the above contract impairment types except Type 5, the contract must trigger prospective allocation based on the contract modification rule set for line cancellation. Also, The revenue contract is considered completed after processing the Type 4 impairment type and no further contract modifications are expected.
