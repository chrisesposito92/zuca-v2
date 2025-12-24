---
title: "RevenueContractMJEntriesDimensions object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractmjentriesdimensions-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:26.903Z"
---

# RevenueContractMJEntriesDimensions object

The RevenueContractMJEntriesDimensions object details the manual journal transaction dimensions, including unique identifiers like RevenueJournalLineID and RevenueBookID.

The RevenueContractMJEntriesDimensions object holds the details of the manual journal transaction dimensions that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractMJEntriesDimensions object can be used as unique identifiers to distinguish different RevenueContractMJEntriesDimensions objects.

RevenueJournalLineID

Unique identifier of the journal line.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractMJEntriesDimensions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContractLines | RevenueContractLineID = LinkedtoRCLineID |
| RevenueContracts | RevenueContractID = RevenueContractID |
