---
title: "RevenueContractVCFacts object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractvcfacts-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:39.994Z"
---

# RevenueContractVCFacts object

The RevenueContractVCFacts object contains details of variable consideration transactions, including standard and user-defined configurations, with unique identifiers for data security and distinction.

The RevenueContractVCFacts object holds the details of the variable consideration transaction (VC) fact, which includes both standard VC and user-defined VC that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractVCFacts object can be used as unique identifiers to distinguish different RevenueContractVCFacts objects.

RevenuePriceAdjLineID

Unique identifier of the revenue price adjustment line.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractVCFacts object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractVCDimensions | RevenuePriceAdjLineID = RevenuePriceAdjLineID |
