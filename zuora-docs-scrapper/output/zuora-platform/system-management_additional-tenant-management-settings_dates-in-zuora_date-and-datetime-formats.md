---
title: "Date and dateTime formats"
url: "https://docs.zuora.com/en/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/date-and-datetime-formats"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:00.205Z"
---

# Date and dateTime formats

Introduces how dates and dateTimes are stored in Zuora.

## Timestamps in Zuora

In Zuora, dates change at midnight (12:00 AM), which is considered to be the beginning of the day. For example, a period of time that extends from January 1 through February 1 begins at midnight January 1 (immediately after 11:59 PM, December 31), and ends at midnight on February 1 (immediately after 11:59 PM, January 31). Zuora creates charges based on calendar days, and the time of day does not affect billing. Whether a charge begins at 4 PM or 4 AM on a given day, Zuora calculates the charge in the same way.

## dateTime formatting convention

Zuora supports the following dateTime formatting conventions:

|  | Formatting Convention | Example |
| --- | --- | --- |
| With Offset | YYYY-MM-DD T HH:MM:SS[+ -]HH:MM | 2015-03-08T02:00:00+08:00 |
| Without Offset | YYYY-MM-DD T HH:MM:SS | 2015-03-08T02:00:00 |

## dateTime time zone offset rules

By default, Zuora system time is Pacific Standard Time (GMT-08:00) or Pacific Daylight Time (GMT-07:00) depending on the time of the year. For example:

-   dateTime values that fall between `2015-03-08T02:00:00` and `2015-11-01T02:00:00` will have a time zone offset of GMT-7

-   dateTime values that fall between `2015-11-01:02:00:00` and `2016-03-13T02:00:00` will have a time zone offset of GMT-8


If your tenant does not use Pacific Time, Zuora converts dateTime values into your tenant time zone with time zone offset. For example, for a tenant in Paris:

-   `2015-01-01T03:18:09` becomes `2015-01-01T03:18:09+1:00`


See [DateTime field behavior after changing your time zone](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone) for more information.

Note:

In WSDL 68 and earlier, 56 Zuora SOAP API date fields are treated as dateTime fields. As of WSDL 69, Zuora will treat these fields as date only fields. These fields are no longer compatible with dateTime values. Date and dateTime values in WSDL 69 are now the same as date and dateTime values in the Zuora application.

Before downloading and using WSDL 69, check to see if your SOAP integration passes or receives dateTime values to or from any of these fields.

## Working with dates in WSDL 68 and earlier

Dates and dateTimes are stored as dateTime values. To reduce potential mistranslations of time, Zuora recommends that you use one of the following methods when working with dateTimes:

-   When passing a dateTime value to a field, do not pass a time zone offset component. For example:

    -   The preferred format for passing a dateTime value is: `2011-01-01T03:18:09`

    -   Do not pass a value like this: `2011-01-01T03:18:09-08:00`

-   If you must use a time zone offset, use the time zone offset GMT-7/-8.

    -   For example, if your local time is `2011-01-01T03:18:09+02:00`, do not translate the dateTime value to GMT-7/-8. In this case, you should switch the time zone offset to GMT-7/-8 like so: `2011-01-01T03:18:09-08:00`.


## Working With dateTimes in WSDL 69 and later

From WSDL 69 and later, Zuora treats date fields as date fields and dateTime fields as dateTime fields. For WSDL 69 and later, use the following methods:​

-   Only pass date values to date fields. Date fields will return a date value. For example:

    -   `2015-02-13`

-   Only pass dateTime values to dateTime fields. dateTime fields will return a dateTime value. For example:

    -   `2015-02-13T23:54:00`


## Reading dateTimes via data source exports

In WSDL 68 and earlier, the output format of dates and times in data source exports depended on the value stored in the database. If a time is stored with the date, it is displayed as a date and time. If no time is stored with the date or the time component is `00:00:00`, the result will be displayed as a date only, with no time.

From WSDL 69 and later, the output from dateTime fields will be a dateTime and the output from date fields will be a date.

## Reading dateTimes via queries

If you are using WSDL 69 or later, the output from dateTime fields will be a dateTime and the output from date fields will be a date.

In WSDL 68 and earlier, dateTimes read via the query() call from Zuora are returned in GMT-7/-8. To overcome the SOAP native field limitation, a time zone offset is not returned for select fields.

For example:

-   `2010-12-31T19:18:09-08:00`


This date will be returned as:

-   `2010-12-31T19:18:09`


The following fields do not return a time zone offset in WSDL 68 and earlier:

-   Account.LastInvoiceDate

-   Account.TaxExemptEffectiveDate

-   Account.TaxExemptExpirationDate

-   AccountingPeriod.EndDate

-   AccountingPeriod.StartDate

-   Amendment.TermStartDate

-   BillRun.InvoiceDate

-   BillRun.TargetDate

-   BillingPreviewRequest.TargetDate

-   BillingPreviewRun.TargetDate

-   ChargeMetrics.UpToDate

-   CreditBalanceAdjustment.AdjustmentDate

-   Invoice.DueDate

-   Invoice.InvoiceDate

-   Invoice.TargetDate

-   InvoiceAdjustment.AdjustmentDate

-   InvoiceItemAdjustment.AdjustmentDate

-   InvoiceItem.RevRecStartDate

-   InvoiceItem.ServiceEndDate

-   InvoiceItem.ServiceStartDate

-   InvoiceItemAdjustment.ServiceEndDate

-   InvoiceItemAdjustment.ServiceStartDate

-   InvoiceProcessingOptions.InvoiceDate

-   InvoiceProcessingOptions.InvoiceTargetDate

-   InvoiceSplitItem.InvoiceDate

-   Payment.EffectiveDate

-   PaymentMethod.MandateCreationDate

-   PaymentMethod.MandateUpdateDate

-   PaymentMethodSnapshot.MandateCreationDate

-   PaymentMethodSnapshot.MandateUpdateDate

-   Product.EffectiveEndDate

-   Product.EffectiveStartDate

-   ProductRatePlan.EffectiveEndDate

-   ProductRatePlan.EffectiveStartDate

-   RatePlanCharge.ChargedThroughDate

-   RatePlanCharge.ProcessedThroughDate

-   Refund.RefundDate

-   Subscription.CancelledDate

-   Subscription.SubscriptionEndDate

-   Subscription.SubscriptionStartDate

-   Subscription.TermEndDate

-   Subscription.TermStartDate

-   TaxationItem.TaxDate
