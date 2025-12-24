---
title: "RevenueAccountingSummary object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenueaccountingsummary-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:47.239Z"
---

# RevenueAccountingSummary object

The RevenueAccountingSummary object provides calculated fields for various schedule types and account segment values, enabling the creation of detailed revenue reports.

This object provides the calculated fields such as the opening balance, additions, releases, activity, and ending balances for the various schedule types & Account segment values. The balances are maintained period-wise at a Revenue Contract line level. With this object, you can easily create revenue reports in Warehouse. You can generate the following reports with the RevenueAccountingSummary object:

-   Unbill RollForward Report

-   Revenue Insight

-   Unsatisfied POB Report

-   Cost Insight

-   Cost Cap/Accrued Rollforward Report

-   VC Rollforward Report

-   VC Insight

-   Revenue Book Comparison Report

-   Revenue Summary

-   Financing Transaction Details Report

-   Financing Accrual Rollforward

-   Financing Insight


## Unique identifiers

RevenuePeriodID

The accounting period ID assigned by Zuora Revenue to the file data record. Do not update this object using any other method.

RevenueContractLineID

The Unique identifier Zuora Revenue assigns to the revenue contract line record. It cannot be updated by any other method.

RootRevenueContractLineID

The Unique identifier Zuora Revenue assigns to the revenue contract line record. It cannot be updated by any other method.

RevenueContractID

Unique identifier of the revenue contract.

AccountingTypeID

Unique identifier of the revenue contract accounting type to determine the account name and details.

AccountingSegment

Unique identifier of the revenue contract segment details.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

A unique identifier of the revenue organization—that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

A unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueAccountingSummary and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar | AccountingPeriodID = RevenuePeriodID |
| RevenueContractLiinesDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractCostDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractVCDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractMJEntriesDimensions | RevenueContractLineID = RevenueContractLineID |
| RevenueContractAccountingType | AccountingTypeID = RevenueAccountTypeID |
| RevenueContractAccountingSegments | AccountingSegment = AccountingSegment |
| RevenueContractAccountingEntries | RevenuePeriodID = PostingPeriodID |
| RevenueContractAccountingEntries | RevenueContractLineID = RevenueContractLineID |
| RevenueContractAccountingEntries | RootRevenueContractLineID = RootRevenueContractLineID |
