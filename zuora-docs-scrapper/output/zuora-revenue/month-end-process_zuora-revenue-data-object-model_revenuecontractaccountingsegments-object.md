---
title: "RevenueContractAccountingSegments object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractaccountingsegments-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:59.218Z"
---

# RevenueContractAccountingSegments object

The RevenueContractAccountingSegments object details accounting segments for defer and release segments, with unique identifiers for distinguishing entries.

The RevenueContractAccountingSegments object holds the details of the accounting segments for defer and release segments of every accounting entry that is configured in the system.

## Unique identifiers

The following fields on the RevenueContractAccountingSegments object can be used as unique identifiers to distinguish different RevenueContractAccountingSegments objects.

RevenueAccountValueID

Unique identifier for the accounting values.

AccountingSegment

Unique identifier of the accounting segment, which is part of the business with separate financial information and a separate management strategy.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenueContractAccountingSegments object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueContractAccountingEntries | AccountingSegment = AccountingSegment |
