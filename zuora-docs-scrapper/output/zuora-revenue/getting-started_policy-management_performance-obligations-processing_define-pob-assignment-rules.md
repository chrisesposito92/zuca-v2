---
title: "Define POB assignment rules"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:12.056Z"
---

# Define POB assignment rules

Zuora Revenue uses POB assignment rules to group transaction lines into performance obligations within a revenue contract. There are four methods to assign a performance obligation template, which are attempted in a specific order.

Zuora Revenue uses POB assignment rules to group transaction lines within each revenue contract into performance obligations. There are four ways to assign a performance obligation template to transaction lines within a revenue contract. Zuora Revenue attempts all available POB assignment rules in the following order:

1.  Advance Rule: This rule is usually used for more complex performance obligation templates. You can specify one mandatory leading line that drives revenue recognition of the performance obligation and other mandatory elements that must be present to create the performance obligation. Use Advance Rule to form consolidated POBs in Zuora Revenue.
2.  Assignment - By Attributes: This rule is usually used when there is a one-to-one relationship between a line and a performance obligation. You can specify aggregated attributes to create the performance obligation in this assignment rule. The combination of up to 10 attributes is supported.
3.  Assignment - By Item/SKU# : This rule is also used when there is a one-to-one relationship between a line and a performance obligation. However, performance obligations are created based on the line item number only.
4.  Auto POB : If no above-mentioned assignment rules are applicable to the line within a revenue contract, Zuora Revenue will assign the AUTO POB template to the line. The AUTO POB template is by default defined in the system and can be modified based on your business needs.
