---
title: "RevenueCalendar object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecalendar-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:54.212Z"
---

# RevenueCalendar object

The RevenueCalendar object contains details about the accounting calendar and includes unique identifiers such as AccountingPeriodID and RevenueClientID.

The RevenueCalendar object holds the details about the accounting calendar configured in the system.

## Unique identifiers

The following fields on the RevenueCalendar object can be used as unique identifiers to distinguish different RevenueCalendar objects.

AccountingPeriodID

The accounting period ID that is assigned to the file data record by Zuora Revenue, which shall not be updated by any other method.

RevenueClientID

Unique identifier that is assigned by Zuora Revenue, which will not be updated by any other method.

The following table lists the objects that are joined with the RevenueCalendar object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenuePeriods | AccountingPeriodID = RevenueAccountingOpenPeriod AND RevenueClientID = RevenueClientID |
| RevenueContractLinesDimensions | AccountingPeriodID = CreatedAccountingPeriodID |
| RevenueContractMJEntriesDimensions | AccountingPeriodID = JeHeadCreatedAccountingPeriod OR JeLineCreatedAccountingPeriod |
| RevenueContractHolds | AccountingPeriodID = LnHoldCreatedAccountingPeriod |
