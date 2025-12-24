---
title: "Predefined contract modification rules"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:13.072Z"
---

# Predefined contract modification rules

In Zuora Revenue, contract modifications require selecting treatments for predefined rules, each aligned with specific contract amendments.

When you configure contract modifications in Zuora Revenue, you need to select the appropriate treatment for each predefined contract modification rules. Predefined contract modification rules are categorized as follows. Refer to the rule description to understand the contract amendment that each contract modification rule applies.

-   [Cancelation/returns](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/cancelationreturns)
-   [New POB](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/new-pob)
-   [New transactions](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/new-transactions)

-   [Price modification](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/price-modification)
-   [Quantity modification](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/quantity-modification)
-   [Term modification](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules/term-modification)

## Others

The following modification rules do not fit in any of the categories above:

| Rule name | Description |
| --- | --- |
| Manual Link Line/POB/RC | A transaction line or POB is manually linked to the existing revenue contract.For example, two SO lines starting from January 2019 to December 2019 are collected in Zuora Revenue based on the distinct POB template. The release event is Upon Booking. Revenue has been recognized until May 2019. The current open period is January 2019. In the current open period, one line is manually delinked from one revenue contract and then linked to another one. |
| MR Eligibility disabled for a transaction | During the contract revision timeline, the Material Right flag of a transaction line is changed from Y to N. After the contract modification, if there is no material right eligible line in the revenue contract, the existing material right lines in the contract will be updated with all columns set to 0. If there is still more than one material right line in the contract, the existing material right lines in the contract will be updated with new values.For more information about material rights, see . |
| MR Eligibility enabled for a transaction | During the contract revision timeline, the Material Right flag of a transaction line is changed from N to Y, a material right line is created in the contract.For example, a contract is created with one product line and one service line. The Material Right flag of the service line is set to N. After the contract enters the revision timeline, the SO line update is collected to update the Material Right flag of the service line to Y. Then, a material right line is created in the revenue contract. |
| Quantity Changes to existing VC Eligible lines - Within SSP Range | During the contract revision timeline, the quantity of a VC eligible line is changed and the fair value of this line is within the SSP range.For example, a contract is created with 3 lines. One line is eligible for variable change. The fair value of this line is within the SSP range. Allocation has been triggered for this contract because the fair value of some other line is not within the range. This period has been closed and then move to the next period. Amendment occurs to change the quantity of the VC eligible line. |
| Quantity Changes to existing VC Eligible lines - Not Within SSP Range | During the contract revision timeline, the quantity of a VC eligible line is changed and the fair value of this line is not within the SSP range.For example, a contract is created with 3 lines. One line is eligible for variable change. The fair value of this line is not within the SSP range. Allocation has been triggered for this contract because the fair value of one or more lines is not within the range. This period has been closed and then move to the next period. Amendment occurs to change the quantity of the VC eligible line. |
| Existing Line Changed allocation to In-Eligible | The CV Eligible Flag of the line is changed from Y to N.For example, a line is collected with the CV Eligible Flag being Y. In the next period, an SO update is collected to change this line to an allocation ineligible line. |
| Existing Line Changed allocation to Eligible | The CV Eligible Flag of the line is changed from N to Y.For example, a line is collected with the CV Eligible Flag being N. In the next period, an SO update is collected to change this line to an allocation eligible line. |
| Change to Existing Line-Delete Subscription/Amendment | This rule is applicable to the Billing - Revenue Integration environment.The subscription or amendment is deleted in Zuora Billing and gets consumed in Zuora Revenue. |
| Manually Unfreeze the RC | The RC, which was previously frozen, is manually unfrozen in Workbench. |
| Changes to SSP Stratification Fields | During the revision period, values of the SSP stratification fields are changed on the SO line.For example, the Product Family field is used as an SSP stratification column. During the revision period, SO updates are collected with a new value for the Product Family field. |
