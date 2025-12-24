---
title: "RevenuePeriods object"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenueperiods-object"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:30:44.981Z"
---

# RevenuePeriods object

The RevenuePeriods object contains details of the open period configured in the system, including unique identifiers and joining expressions.

The RevenuePeriods object holds the details of the open period that is configured in the system.

## Unique identifiers

The following fields on the RevenuePeriods object can be used as unique identifiers to distinguish different RevenuePeriods objects.

RevenueAccountingOpenPeriod

Unique identifier of the current open period that is defined within the revenue context. Users can configure the open period calendar rules.

RevenueBookID

Unique identifier of the revenue book to which the cost line is associated.

RevenueOrganizationCode

Unique identifier of the revenue organization that drives all the data security. It acts as a security attribute that restricts data access.

RevenueClientID

Unique identifier that is assigned by the Zuora Revenue, which cannot be updated by any other method.

## Joining objects and expressions

The following table lists the objects that are joined with the RevenuePeriods object and the joining expression to be used.

| Joining objects | Joining expressions |
| --- | --- |
| RevenueCalendar - AccountingPeriodID | AccountingPeriodID = RevenueAccountingOpenPeriod |
