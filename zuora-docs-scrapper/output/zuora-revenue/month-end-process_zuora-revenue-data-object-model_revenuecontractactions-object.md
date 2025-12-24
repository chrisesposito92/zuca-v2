---
title: "RevenueContractActions object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractactions-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:04.027Z"
---

# RevenueContractActions object

The RevenueContractActions object details POB release and deferral actions, completed by the system or manually, with unique identifiers for each action.

The RevenueContractActions object holds the details of POB release and deferal actions on every revenue contract. These actions are completed either by the system or manually.

## Unique identifiers

The following fields on the RevenueContractActions object can be used as unique identifiers to distinguish different RevenueContractActions objects.

RevenueContractReleaseID

Unique identifier for revenue contract release schedules.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractActions object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractLinesDimensions | RevenueContractPOBID = RevenueContractPOBID |
| RevenueContractAccountingEntries | RevenueContractReleaseID = RevenueContractReleaseID |
