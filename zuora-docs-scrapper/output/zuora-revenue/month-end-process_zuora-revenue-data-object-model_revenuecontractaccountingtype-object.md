---
title: "RevenueContractAccountingType object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractaccountingtype-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:01.765Z"
---

# RevenueContractAccountingType object

The RevenueContractAccountingType object details the accounting type for each entry, with unique identifiers and joining expressions for integration.

The RevenueContractAccountingType object holds the details of the accounting type of every accounting entry that is configured in the system.

## Unique identifiers

The following fields on the RevenueContractAccountingType object can be used as unique identifiers to distinguish different RevenueContractAccountingType objects.

RevenueAccountTypeID

Unique identifier of the revenue contract accounting type to determine the account name and details.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractAccountingType object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractAccountingEntries | RevenueAccountTypeID = AccountingTypeID AND RevenueClientID = RevenueClientID |
