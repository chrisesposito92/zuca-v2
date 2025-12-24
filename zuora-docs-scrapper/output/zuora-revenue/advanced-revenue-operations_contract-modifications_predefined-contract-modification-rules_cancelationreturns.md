---
title: "Cancelation/returns"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/cancelationreturns"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:15.744Z"
---

# Cancelation/returns

This reference provides information on the cancelation/returns category of the predefined contract modification rules.

The following modification rules in this category are triggered when the amendment of a contract is caused by the cancelation or return that occurs in the contract.

| Rule name | Description |
| --- | --- |
| Credit Memo - If remaining QTY or Term less than or equal to Credit Term/QTY on a Series Distinct POB | There is a reduction in term or in quantity of a distinct POB and the canceled term or quantity is greater than or equal to the remaining value of the POB.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period with term reversal from March to December 2019. |
| Credit Memo - If remaining Qty and Term greater than or equal to Credit Term/Qty on a Series Distinct POB. | There is a reduction in term or in quantity of a distinct POB and the canceled term or quantity is less than or equal to the remaining value of the POB.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period with term reversal from October to December 2019. |
| Credit Memo - If remaining QTY or Term less than or equal to Credit Term/QTY on a Series Non Distinct POB. | There is a reduction in term or in quantity of a non-distinct POB and the canceled term or quantity is greater than or equal to the remaining value of the POB.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a non-distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period with term reversal from March to December 2019. |
| Credit Memo - If remaining QTY or Term Greater than Credit Term/QTY on a Series Non Distinct POB | There is a reduction in term or in quantity of a non-distinct POB and the canceled term or quantity is less than or equal to the remaining value of the POB.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a non-distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period with term reversal from October to December 2019. |
| Credit Memo - If Only change in price related to Series Distinct POB | There is a credit memo for the distinct POB, which reduces the transaction price of the contract and the unit sell price of the item.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period with a reduction in price for the same quantity and term. |
| Credit Memo - If Only change in price related to Series Non Distinct POB | There is a credit memo for the non-distinct POB, which reduces the transaction price of the contract and the unit sell price of the item.For example, the current open period is Jan-2019. A contract (SO) is created in January 2019 based on a non-distinct POB and ends in December 2019. The POB release event is upon booking. Amendment occurs in the Jun-2019 period with a reduction in price for the same quantity and term. |
| Full/Partial Cancellation of Invoice for existing line | Whenever a CM-C (full or partial) is collected to the system, the system decides whether to defer the Revenue and recreate it (or not — based on the POB setup). At this point, there is no visible reason for this action to happen. To gain visibility, we have introduced the ‘Impairment Type5’ rule. This rule triggers a retrospective when a line is collected with impairment type as ‘Retrospective’. |
