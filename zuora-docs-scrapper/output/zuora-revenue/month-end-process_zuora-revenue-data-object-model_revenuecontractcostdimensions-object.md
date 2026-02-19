---
title: "RevenueContractCostDimensions object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractcostdimensions-object"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:55.122Z"
---

# RevenueContractCostDimensions object

The RevenueContractCostsDimensions object holds the details of the cost transaction dimension of both standard cost and user-defined cost, which are configured in the system.

## Unique identifiers

The following fields on the RevenueContractCostsDimensions object can be used as unique identifiers to distinguish different RevenueContractCostsDimensions objects.

RevenueContractLineCostID

Unique identifier that is assigned to the lookup type record by Zuora Revenue, which cannot be updated by any other method.

RevenueContractLineID

Unique identifier that is assigned to the revenue contract line record by Zuora Revenue, which cannot be updated by any other method.

RevenueContractID

Unique identifier of the revenue contract.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractCostsDimensions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContractLinesDimensions | RevenueContractLineID = RevenueContractLineID |
