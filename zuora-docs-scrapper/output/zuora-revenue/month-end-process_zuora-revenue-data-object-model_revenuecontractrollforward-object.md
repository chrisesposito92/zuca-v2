---
title: "RevenueContractRollforward object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractrollforward-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:34.658Z"
---

# RevenueContractRollforward object

The RevenueContractRollforward object allows direct access to the Roll forward report from your data warehouse, utilizing unique identifiers for revenue contract segments, books, and lines.

Use this object to access the Roll forward report directly from your data warehouse.

## Unique identifiers

Accounting\_Segment

Unique identifier of the revenue contract segment details

Revenue\_BookID

Unique identifier of the revenue book to which the cost line is associated.

Revenue\_ContractID

Unique identifier of the revenue contract.

Root\_Revenue\_ContractLineID

This unique identifier is assigned to the revenue contract line record by Zuora Revenue; It cannot be updated by any other method.

Accounting\_PeriodID

Unique identifier of the revenue contract accounting type; used to determine the account name and details.

Revenue\_OrganizationCode

A Unique identifier (of the revenue organization) that drives all the data security. It acts as a security attribute that restricts data access.

Revenue\_ClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RCRollforward and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = Accouting_PeriodID |
| RevenueContractLinesDimensions | RevenueContractLineID = Root_Revenue_ContractLineID |
| RevenueContractCostDimensions | RevenueContractLineID = Root_Revenue_ContractLineID |
| RevenueContractVCDimensions | RevenueContractLineID = Root_RevenueContractLineID |
| RevenueContractMJEntriesDimensions | RevenueContractLineID = Root_Revenue_ContractLineID |
| RevenueContractAccountingSegments | AccountingSegment = Accounting_Segment |
| RevenueContractAccountingEntries | PostingPeriodID = Accounting_PeriodID |
| RevenueContractAccountingEntries | RootRevenueContractLineID = Root_Revenue_ContractLineID |
| RevenueContractBillDimensions | RevenueContractLineID = Root_Revenue_ContractLineID |
| RevenueContractNettingStatusObjects | RootContractID = Revenue_ContractID |
