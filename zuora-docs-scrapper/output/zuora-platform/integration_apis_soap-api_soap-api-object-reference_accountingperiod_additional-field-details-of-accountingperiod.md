---
title: "Additional field details of AccountingPeriod"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/accountingperiod/additional-field-details-of-accountingperiod"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:55.755Z"
---

# Additional field details of AccountingPeriod

Provides additional field details of the Accounting Period object.

## EndDate

You can update the end date only for your open accounting periods.

When you update the end date of an accounting period, then the start date of the next accounting period is automatically updated to the day after the new end date. For example:

The accounting period, August 2012, starts on 08/01/2012 and ends on 08/30/2012. The accounting period, September 2012, starts on 08/31/2012 and ends on 09/29/2012. You change the end date of August 2012 to 08/31/2012. The start date of September 2012 automatically changes to 09/01/2012.

Any existing trial balance results are removed when you alter the dates of accounting periods.

The accounting period history is updated when you change it. If you change dates, then the history of the accounting period you edited and the histories of the accounting periods that automatically change are also updated.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `AccountingPeriod` object is `AccountingPeriodId` .

## StartDate

You can update the start date only for your first accounting period. The `StartDate` field is available to you only the first time the very first accounting period is created. After the first accounting period is created, subsequent accounting periods automatically start the day after the most recent end date.

## Status

The status of the accounting period is automatically generated as `Open` when you create an accounting period.

When you run a `query()` call against the `Status` field, the value can be one of the following:

-   `Open` : The accounting period is open, and transactions can be recorded in the period. A new accounting period always starts in Open status.

-   `Closed` : The accounting period is locked down. You can change only the values in the `Name` , `Notes` , and `FiscalYear` fields. To make any other changes, you must reopen the accounting period.


An API call that updates the `Status` field cannot update any other fields.
