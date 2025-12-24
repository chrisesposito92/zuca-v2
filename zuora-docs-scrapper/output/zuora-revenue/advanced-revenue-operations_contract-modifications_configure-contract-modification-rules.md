---
title: "Configure contract modification rules"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/configure-contract-modification-rules"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:10.743Z"
---

# Configure contract modification rules

Learn how to configure contract modification rules in Zuora Revenue to manage revenue allocation treatments based on contract changes.

A contract modification rule is designed to identify what type of change that has occurred and trigger a revenue allocation treatment for a revenue contract. When the Skip Contract Modification Rules toggle is switched to Yes, Zuora Revenue automatically skips the contract modification rules and does the reallocation based on the existing treatment. When the Skip Contract Modification Rules toggle is switched to No, Zuora Revenue performs allocation treatment based on the configuration modification rules that are set on the Contract Modification page.

## Predefined contract modification rules

Predefined contract modification rules are provided and categorized as follows:

-   Cancelation/Returns: This rule is triggered when the amendment of a contract is caused by the cancelation or return that occurs in the contract.

-   New POB: This rule is triggered when a new POB is added during the contract revision timeline as the amendment for the revenue contract.

-   New Transaction: This rule is triggered when a new line is added to the existing POB during the contract revision timeline as the amendment for the revenue contract.

-   Price Modification: This rule is triggered when there is a change in price in the contract as the amendment.

-   Quantity Modification: This rule is triggered when there is a change in quantity in the contract as the amendment.

-   Term Modification: This rule is triggered when there is a change in the term in the contract as the amendment.


-   Others: The rule is triggered for the change in the contract value that is caused by linking, delinking, material rights, and variable change.


For more information, see [Predefined contract modification rules](/zuora-revenue/advanced-revenue-operations/contract-modifications/predefined-contract-modification-rules) .

Note:

Default allocation treatment is provided for the contract modification rule. However, the default allocation treatment might not suit your business needs. Ensure that you have reviewed the default allocation treatment and made adjustments as needed.

## Procedure

Complete the following steps [provided hereNo Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/revenue/E\_Advanced\_revenue\_operation/topics/procedure\_1.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/E_Advanced_revenue_operation/topics/procedure_1.dita) to configure contract Modification rules.

## Result

After the contract modification rules are set up, when a change comes for a transaction line during the contract revision timeline, Zuora Revenue automatically applies the corresponding treatment for the contract based on the rules that you set up.

Note:

When multiple amendments that trigger different types of treatments occur during one single revision timeline, the final treatment is retrospective if the following two conditions are BOTH met:

-   The treatment is distinct.
-   The system-level value of the ENABLE\_RETRO\_PROSPECTIVE profile is NO .

## Impact of SKIP\_CT\_MOD\_FLAG field

Flexibility is also provided in Zuora Revenue for you to restrict a specific transaction line from triggering contract modification rules due to amendments. When you set the SKIP\_CT\_MOD\_FLAG field to Yes for a transaction line, the system only performs the re-allocation and does not trigger contract modification rules for prospective or retrospective allocation.
