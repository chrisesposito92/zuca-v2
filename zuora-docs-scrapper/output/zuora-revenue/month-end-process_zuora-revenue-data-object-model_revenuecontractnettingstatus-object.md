---
title: "RevenueContractNettingStatus object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractnettingstatus-object"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:55.925Z"
---

# RevenueContractNettingStatus object

The RevenueContractNettingStatus object contains the revenue contract's asset/liability position period-wise. This applies if you use CA/CL Netting in Zuora Revenue.

## Unique identifiers

The following fields on the RevenueContractNettingStatus object can be used as unique identifiers to distinguish different RevenueContractNettingStatus objects.

RevenueContractID

Unique identifier of the revenue contract.

RevenueBookID

Unique identifier of the revenue book to which the Revenue Contract is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

CompanyCode

Unique identifier of your company code value, which is a part of revenue contract lines.

PeriodID

The accounting Period ID that is assigned to the record by Zuora Revenue.

## Joining objects and expressions

The following table lists the objects joined with the RevenueContractNettingStatus object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractAccountingEntries | PeriodID = AccountingPeriodID |
| RevenueContractLinesFacts/RevenueContract | RevenueOrganizationCode = RevenueOrganizationCode |
| RevenueContractLinesFacts/RevenueContract | RevenueBookID = RevenueBookID |
| RevenueContractLinesFacts/RevenueContract | RevenueContractID= RevenueContractID |
| RevenueContractLinesFacts/RevenueContract | CompanyCode= CompanyCode |
