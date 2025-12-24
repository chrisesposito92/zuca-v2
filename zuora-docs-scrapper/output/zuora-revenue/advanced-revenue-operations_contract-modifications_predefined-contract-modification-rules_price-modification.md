---
title: "Price modification"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/price-modification"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:23.405Z"
---

# Price modification

This reference provides information on the price modification category of the predefined contract modification rules.

The following modification rules in this category are triggered when there is a change in price in the contract as the amendment.

| Rule name | Description |
| --- | --- |
| Changes to existing lines - Increase in price on a Series Distinct POB | The unit sell price of the existing distinct POB is increased.For example, the current open period is Jan-2019. A contract (SO) is created for $12000 in January 2019 based on a distinct POB and ends in December 2019. The POB release event is upon booking. The contract has been recognized until May 2019. Amendment occurs in the Jun-2019 period with an increase in the contract value to $13000 for the same term and quantity. |
| Changes to existing lines - Increase in price on a Series Non Distinct POB | The unit sell price of the existing non-distinct POB is increased.For example, the current open period is Jan-2019. A contract (SO) is created for $12000 in January 2019 based on a non-distinct POB and ends in December 2019. The POB release event is upon booking. The contract has been recognized until May 2019. Amendment occurs in the Jun-2019 period with an increase in the contract value to $13000 for the same term and quantity. |
| Changes to existing lines - Decrease in price less than recognized on a Series Distinct POB | The extended sell price of the existing distinct POB is decreased to a value that is more than the recognized amount.For example, the current open period is Jan-2019. A contract (SO) is created for $13000 in January 2019 based on distinct POB and ends in December 2019. The POB release event is upon booking and the ratable method is contract ratable. $5000 has been recognized until May 2019. Amendment occurs in the Jun-2019 period to reduce the contract value to $12000 (which is more than the recognized $5000) for the same term and quantity. |
| Changes to existing lines - Decrease in price less than recognized on a Series Non Distinct POB | The extended sell price of the existing non-distinct POB is decreased to a value that is more than the recognized amount.For example, the current open period is Jan-2019. A contract (SO) is created for $13000 in January 2019 based on non-distinct POB and ends in December 2019. The POB release event is upon booking and the ratable method is contract ratable. $5000 has been recognized until May 2019. Amendment occurs in the Jun-2019 period to reduce the contract value to $12000 for the same term and quantity. |
| Changes to existing lines - Decrease in price more than recognized on a Series Distinct/Non Distinct POB | The extended sell price of the existing distinct or non-distinct POB is decreased to a value that is less than the recognized amount.For example, the current open period is Jan-2019. A contract (SO) is created for $12000 in January 2019 based on distinct/non-distinct POB and ends in December 2019. The POB release event is upon booking and the ratable method is contract ratable. $5000 has been recognized until May 2019. Amendment occurs in the Jun-2019 period to reduce the contract value to $4000 for the same term and quantity. |
| Changes to existing lines - Extended List Price | During the revision period, the extended list price of the existing line is changed. |
