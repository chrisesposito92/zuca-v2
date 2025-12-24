---
title: "RevenueContractLinesDimensions object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractlinesdimensions-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:22.152Z"
---

# RevenueContractLinesDimensions object

The RevenueContractLinesDimensions object details sales order transaction dimensions, unique identifiers, and joining expressions with other objects.

The RevenueContractLinesDimensions object holds the details of the sales order (SO) transaction dimensions that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractLinesDimensions object can be used as unique identifiers to distinguish different RevenueContractLinesDimensions objects.

RevenueContractLineID

Unique identifier that is assigned to the revenue contract line record by Zuora Revenue, which cannot be updated by any other method.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractLinesDimensions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContracts | RevenueContractID = RevenueContractID AND RevenueBookID = RevenueBookID AND RevenueOrganizationCode = RevenueOrganizationCode AND RevenueClientID = RevenueClientID |
| RevenueContractMJEntriesDimensions | RevenueContractLineID = LinkedtoRCLineID |
| RevenueContractVCDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractCostDimensions | RevenueContractLineID = RevenueContractLineID |
