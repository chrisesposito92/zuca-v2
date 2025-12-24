---
title: "RevenueContractMJEntriesFacts object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractmjentriesfacts-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:29.663Z"
---

# RevenueContractMJEntriesFacts object

The RevenueContractMJEntriesFacts object contains details of manual journal transaction facts, including unique identifiers like RevenueJournalLineID and RevenueBookID.

The RevenueContractMJEntriesFacts object holds the details of the manual journal transaction fact that is configured in the system.

## Unique identifiers

The following fields on the RevenueContractMJEntriesFacts object can be used as unique identifiers to distinguish different RevenueContractMJEntriesFacts objects.

RevenueJournalLineID

Unique identifier of the journal line.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractMJEntriesFacts object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccoutingPeriodID |
| RevenueContractMJEntriesDimensions | RevenueJournalLineID = RevenueJournalLineID |
