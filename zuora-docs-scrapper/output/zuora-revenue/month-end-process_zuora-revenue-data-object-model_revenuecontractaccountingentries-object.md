---
title: "RevenueContractAccountingEntries object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractaccountingentries-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:56.761Z"
---

# RevenueContractAccountingEntries object

The RevenueContractAccountingEntries object contains detailed accounting and journal entries for transactions, utilizing unique identifiers to distinguish between different entries based on performance obligation templates.

The RevenueContractAccountingEntries holds the details of accounting entries and/or journal entries of every transaction based on its performance obligation (POB) template that is configured in the system.

## Unique identifiers

The following fields on the RevenueContractAccountingEntries can be used as unique identifiers to distinguish different RevenueContractAccountingEntries.

RevenueContractID

Unique identifier of the revenue contract.

RevenueContractLineID

Unique identifier that is assigned to the revenue contract line record by Zuora Revenue, which cannot be updated by any other method.

RevenueContractPOBID

Unique identifier of the POB that is assigned to the revenue contract line.

RevenueContractReleaseID

Unique identifier for revenue contract release schedules.

RevenueContractBillID

Unique identifier that is assigned to billing line record by Zuora Revenue, which cannot be updated by any other method.

RevenueContractAccountingType

Unique identifier of the revenue contract accounting type to determine the account name and details.

RevenueContractSegments

Unique identifier of the revenue contract segment details.

AccountingPeriodID

The accounting period ID that is assigned to the file data record by Zuora Revenue, which shall not be updated by any other method.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractAccountingEntries and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContractActions | RevenueContractReleaseID = RevenueContractReleaseID |
| RevenueContractLinesDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractBillDimensions | RevenueContractBillID = RevenueContractBillID |
| RevenueContractCostDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractVCDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractMJEntriesDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractAccountingType | AccountingTypeID = RevenueAccountTypeID |
| RevenueContractAccountingSegments | AccountingSegment = AccountingSegment |
