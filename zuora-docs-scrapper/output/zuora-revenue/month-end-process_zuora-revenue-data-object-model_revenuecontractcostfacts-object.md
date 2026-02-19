---
title: "RevenueContractCostFacts object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractcostfacts-object"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:55.527Z"
---

# RevenueContractCostFacts object

The RevenueContractCostFacts object holds the details of cost transaction fact which includes both standard cost and user-defined cost that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractCostFacts object can be used as unique identifiers to distinguish different RevenueContractCostFacts objects.

RevenueContractLineCostID

Unique identifier that is assigned to the lookup type record by Zuora Revenue, which cannot be updated by any other method.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractCostFacts object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractCostsDimensions | RevenueContractLineCostID = RevenueContractLineCostID |
