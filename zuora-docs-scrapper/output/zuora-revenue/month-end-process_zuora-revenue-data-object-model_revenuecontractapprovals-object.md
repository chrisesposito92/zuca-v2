---
title: "RevenueContractApprovals object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractapprovals-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:06.820Z"
---

# RevenueContractApprovals object

The RevenueContractApprovals object contains details and history of revenue contract approvals, with unique identifiers and joining expressions for integration.

The RevenueContractApprovals object holds the details of the revenue contract approvals and its history that is configured in the system.

## Unique identifiers

The following fields on the RevenueContractApprovals object can be used as unique identifiers to distinguish different RevenueContractApprovals objects.

RCApproverID

Unique identifier of each approval applied in regular and manual journal revenue contracts.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractApprovals object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContracts | RevenueContractID = RevenueContractID |
