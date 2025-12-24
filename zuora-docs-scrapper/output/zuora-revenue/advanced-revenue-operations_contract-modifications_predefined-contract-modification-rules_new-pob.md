---
title: "New POB"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/new-pob"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:18.762Z"
---

# New POB

This reference provides information on the new POB category of the predefined contract modification rules.

The following modification rules in this category are triggered when a new POB is added during the contract revision timeline as the amendment for the revenue contract.

| Rule name | Description |
| --- | --- |
| New POB Within SSP Range | A new POB is added to the revenue contract and the allocatable value of all the POB's lines falls within the SSP range.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a non-distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period to add a new line to the revenue contract and the sell price of the new line is within the SSP range. |
| New POB Not Within SSP Range | A new POB is added to the revenue contract and at least one of the POB's lines has the allocatable value that falls out of the SSP range.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a non-distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period to add a new line to the revenue contract and the sell price of the new line is out of the SSP range. |
