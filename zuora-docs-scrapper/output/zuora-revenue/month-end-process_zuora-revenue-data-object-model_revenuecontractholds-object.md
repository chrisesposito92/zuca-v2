---
title: "RevenueContractHolds object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractholds-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:19.347Z"
---

# RevenueContractHolds object

The RevenueContractHolds object holds the details of the revenue contract hold at the line level, POB level, and revenue contract level that are configured in the system.

## Unique identifiers

The following fields on the RevenueContractHolds object can be used as unique identifiers to distinguish different RevenueContractHolds objects.

RevenueLineHoldID

Unique identifier of each hold assignment on each line, performance obligation, and revenue contract.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractHolds object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContacts | RevenueContractID = RevenueContractID |
| RevenueContractLinesDimensions | RevenueContractLineID = RevenueContractLineID |
