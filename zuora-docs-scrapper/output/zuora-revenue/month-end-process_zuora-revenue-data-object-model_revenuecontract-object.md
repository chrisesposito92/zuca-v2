---
title: "RevenueContract object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontract-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:42.227Z"
---

# RevenueContract object

The RevenueContract object contains details of revenue contracts, including unique identifiers and joining expressions for related objects.

The RevenueContracts object holds the details of each distinct revenue contract based on the revenue contract grouping template that is configured in the system.

## Unique identifiers

The following fields on the RevenueContracts object can be used as unique identifiers to distinguish different RevenueContracts objects.

RevenueContractID

Unique identifier of the revenue contract.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security in this field. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining object and expressions

The following table lists the objects that are joined with the RevenueContracts object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractLinesDimensions | RevenueContractID = RevenueContractID AND RevenueBookID = RevenueBookID AND RevenueOrganizationCode = RevenueOrganizationCode AND RevenueClientID = RevenueClientID |
| RevenueContractMJEntriesDimensions | (RevenueJournalHeaderID = RevenueContractID OR RevenueContractID = RevenueContractID) AND RevenueBookID = RevenueBookID AND RevenueOrganizationCode = RevenueOrganizationCode AND RevenueClientID = RevenueClientID |
| RevenueContractHolds | RevenueContractID = RevenueContractID AND RevenueBookID = RevenueBookID AND RevenueOrganizationCode = RevenueOrganizationCode AND RevenueClientID = RevenueClientID |
| RevenueContractApprovals | RevenueContractID = RevenueContractID AND RevenueBookID = RevenueBookID AND RevenueOrganizationCode = RevenueOrganizationCode AND RevenueClientID = RevenueClientID |
