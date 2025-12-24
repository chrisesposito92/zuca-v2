---
title: "RevenueContractVCDimensions object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractvcdimensions-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:37.284Z"
---

# RevenueContractVCDimensions object

The RevenueContractVCDimensions object holds the details of the variable consideration (VC) transaction dimensions that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractVCDimensions object can be used as unique identifiers to distinguish different RevenueContractVCDimensions objects.

RevenuePriceAdjLineID

Unique identifier of the revenue price adjustment line.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractVCDimensions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContractLinesDimensions | RevenueContractLineID = RevenueContractLineID |
