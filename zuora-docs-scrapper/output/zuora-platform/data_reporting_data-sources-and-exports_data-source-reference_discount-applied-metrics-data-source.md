---
title: "Discount Applied Metrics data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/discount-applied-metrics-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:45.565Z"
---

# Discount Applied Metrics data source

Data source to understand how the MRR and TCV of Rate Plan Charges are affected by discounts

Note:

This feature is deprecated and is not enabled by default. Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant.

You are strongly recommended to disable the Discount Applied Metrics when the Order Metrics feature is enabled.

This feature does not support account level discounts .

Use the Unknown data source to understand how the MRR and TCV of Rate Plan Charges are affected by discounts. Each record in the Unknown data source corresponds to an application of a Discount Rate Plan Charge to another Rate Plan Charge.

A Discount Rate Plan Charge is a Rate Plan Charge that uses one of the following charge models:

-   Discount-Fixed Amount

-   Discount-Percentage


See Discount Charge Models for more information.

The following objects are available in the Unknown data source:

| Object | Description |
| --- | --- |
| Discount Applied Metrics | Contains the following fields:Created By ID - The Zuora user who created the discount application.Created Date - The date when the discount application was created.Discount Rate Plan Charge ID - The internal ID of the Rate Plan Charge that represents the discount. To obtain information about the Rate Plan Charge that the discount applies to, use the Rate Plan Charge object in the data source.End Date - The latest date that the discount applies.ID - The internal ID of the discount application.MRR - The monthly recurring revenue associated with the discount. This value is negative.Start Date - The earliest date that the discount applies.TCV - The total contract value of the discount. This value is negative.Updated By ID - The Zuora user who last updated the discount application.Updated Date - The date when the discount application was last updated. |
| Account | The customer account information. Note this is the Subscription Owner account. |
| Amendment | The change made to subscription. Contains the following fields:Auto RenewCodeContract Effective DateCreated By IDCreated DateCurrent TermCurrent Term Period TypeCustomer Acceptance DateDescriptionEffective DateIDNameRenewal SettingRenewal TermRenewal Term Period TypeResume DateService Activation DateSpecific Update DateStatusSubscription IDSuspend DateTerm Start DateTerm TypeTypeUpdated By IDUpdated Date |
| Bill To | The contact associated with the account to whom your product or service is billed. |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameNetSuite Integration IDNetSuite Integration StatusNetSuite Item TypeNetSuite Sync DateSKUUpdated By IDUpdated Date |
| Product Rate Plan | The rate plan coming from the product catalog. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalldSourceSystemGradeIDNameUpdated By IDUpdated Date |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateDefault QuantityDeferred Revenue AccountDescriptionDiscount LevelEnd Date ConditionIDIncluded UnitsLegacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeWeekly Bill Cycle Day |
| Rate Plan | Refers to the rate plan or pricing plan information associated with the subscription. Contains the following fields:Amendment Type: Note that a filter on this field using the unequal operator cannot return those Rate Plan records with a blank Amendment Type field.Created By IDCreated DateExternally Managed Plan ID: a text field. This field indicates the unique identifier of a rate plan purchased on a third-party store.IDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate planNameOriginal Rate Plan ID: the original ID of the subscription rate plan, which is the ID of the subscription rate plan in the version-1 subscriptionSubscription Owner ID: the subscription owner ID of the subscription that contains the rate planSubscription Rate Plan NumberUpdated By IDUpdated Date |
| Rate Plan Charge | The Rate Plan Charge that the discount applies to. |
| Sold To | The contact associated with the account to whom your product or service is sold. |
| Subscription | The subscription to which the rate plan is associated. Contains the following fields:Auto RenewCancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account IDCreator Invoice Owner IDCurrent TermCurrent Term Period TypeIDInitial TermInitial Term Period TypeInvoice Owner IDInvoice SeparateNameNotesOpportunity Close DateOpportunity NameOriginal Created DateOriginal IDPrevious Subscription IDQuote Business TypeQuote NumberQuote TypeRenewal SettingRenewal TermRenewal Term Period TypeService Activation DateStatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated By IDUpdated DateVersion |
