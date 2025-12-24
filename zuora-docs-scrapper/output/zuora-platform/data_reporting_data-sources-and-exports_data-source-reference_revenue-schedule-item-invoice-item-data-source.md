---
title: "Revenue Schedule Item Invoice Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/revenue-schedule-item-invoice-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:30.159Z"
---

# Revenue Schedule Item Invoice Item data source

Data source to export revenue schedule item – invoice item data

## Overview

Use this data source to export revenue schedule item – invoice item data.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Revenue Schedule Item Invoice Item as the data source.

## Data source diagram

This diagram illustrates the hierarchical association between the base Revenue Schedule Item Invoice Item object and related (joined) Zuora objects.

![Revenue Schedule Item Invoice Item Data Source Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/54be2650-e080-43aa-82b2-12a68bd84e6b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0YmUyNjUwLWUwODAtNDNhYS04MmIyLTEyYTY4YmQ4NGU2YiIsImV4cCI6MTc2NjY4ODUwOCwianRpIjoiM2M4ZTViNGJhYmM2NDhlNzg4OTkzMTQwNzQ3MDE0MjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iUqteKEb_5ksbu8ECVdPm8ZvHq_adix_kr61lM-MiHo)

## Data source details

The following sections provide data source details.

## Base object description

| Zuora Object | Description |
| --- | --- |
| Revenue Schedule Item Invoice Item | The revenue item - invoice item.This is the base Zuora object for the Revenue Schedule Item Invoice Item data source export and includes the following fields:AmountCreated By IDCreated DateCurrencyIDUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The customer account information. Note this is the Subscription Owner account. |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Amendment | The amendment that is tied to the rate plan charge, if applicable. |
| Bill To | The contact associated with the account to whom your product or service is billed. |
| Default Payment Method | The default payment method used to make payments. |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Invoice Item | Represents one line item on the invoice. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameNetSuite Integration IDNetSuite Integration StatusNetSuite Item TypeNetSuite Sync DateSKUUpdated By IDUpdated Date |
| Product Rate Plan | The rate plan coming from the product catalog. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalldSourceSystemGradeIDNameUpdated By IDUpdated Date |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateDefault QuantityDeferred Revenue AccountDescriptionDiscount LevelEnd Date ConditionIDIncluded UnitsLegacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeWeekly Bill Cycle Day |
| Rate Plan | Refers to the rate plan or pricing plan information associated with the subscription. Contains the following fields:Amendment Type: Note that a filter on this field using the unequal operator cannot return those Rate Plan records with a blank Amendment Type field.Created By IDCreated DateExternally Managed Plan ID: a text field. This field indicates the unique identifier of a rate plan purchased on a third-party store.IDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate planNameOriginal Rate Plan ID: the original ID of the subscription rate plan, which is the ID of the subscription rate plan in the version-1 subscriptionSubscription Owner ID: the subscription owner ID of the subscription that contains the rate planSubscription Rate Plan NumberUpdated By IDUpdated Date |
| Rate Plan Charge | The charge information associated with the subscription. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge NumberCharge TypeCharged Through DateCreated By IDCreated DateDMRCDTCVDescriptionDiscount LevelEffective End DateEffective Start DateEnd Date ConditionIDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate plan chargeIs Last SegmentIs ProcessedList Price BaseMRRNameNumber of PeriodsOriginal IDOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageProcessed Through DateQuantityRating GroupRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition Trigger ConditionSegmentSpecific Billing PeriodSpecific End DateSubscription Id: the ID of the subscription that contains the rate plan chargeSubscription Owner ID: the subscription owner ID of the subscription that contains the rate plan chargeTCVTrigger DateTrigger EventUnit of MeasureUp To PeriodsUp To Periods TypeUpdated By IDUpdated DateVersionWeekly Bill Cycle Day |
| Recognized Revenue Accounting Code | Accounting code for recognized revenue. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Revenue Charge Summary | Revenue summary for the subscription charge. Contains the following fields:Created By IDCreated DateCurrencyIDNotesRevenue Summary Charge NumberUpdated By IDUpdated Date |
| Revenue Schedule Invoice Item | Revenue schedule for invoice items.This object contains the following fields:AmountCreated By IDCreated DateCurrencyExchange Rate Date (only available if you have the Currency Conversion feature enabled)FieldLabelIDLinked Transaction DateLinked Transaction NumberLinked Transaction TypeNotesRecognition Rule NameReference IdRevenue Schedule DateRevenue Schedule NumberRevenue Schedule Recognition EndRevenue Schedule Recognition StartUndistributed Unrecognized RevenueUpdated By IDUpdated Date |
| Revenue Schedule Item Invoice Item FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Sold To | The contact associated with the account to whom your product or service is sold. |
| Subscription | The subscription to which the rate plan is associated. Contains the following fields:Auto RenewCancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account IDCreator Invoice Owner IDCurrent TermCurrent Term Period TypeIDInitial TermInitial Term Period TypeInvoice Owner IDInvoice SeparateNameNotesOpportunity Close DateOpportunity NameOriginal Created DateOriginal IDPrevious Subscription IDQuote Business TypeQuote NumberQuote TypeRenewal SettingRenewal TermRenewal Term Period TypeService Activation DateStatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated By IDUpdated DateVersion |
