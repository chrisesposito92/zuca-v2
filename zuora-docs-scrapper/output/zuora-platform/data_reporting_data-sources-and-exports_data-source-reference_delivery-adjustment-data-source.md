---
title: "Delivery Adjustment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/delivery-adjustment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:43.190Z"
---

# Delivery Adjustment data source

Data source to export data about delivery adjustment for the Delivery Pricing charge model

Use this data source to export data about delivery adjustment for the Delivery Pricing charge model, including information such as adjustment amount, associated subscription and charge, and reason for the adjustment.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Delivery Adjustment as the data source.

## Data source detail

The following sections provide data source details.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Debit Taxation Item | Taxation records on debit memos. It includes the following fields:Accounting CodeBalanceCreated By IDCreated DateExempt AmountIDJurisdictionLocation CodeNameTax AmountTax CodeTax Code DescriptionTax DateTax ModeTax RateTax Rate DescriptionTax Rate TypeUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Account | The account that made the payment. |
| AccountingPeriod | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Amendment | The change made to subscription. Contains the following fields:Auto RenewCodeContract Effective DateCreated By IDCreated DateCurrent TermCurrent Term Period TypeCustomer Acceptance DateDescriptionEffective DateIDNameRenewal SettingRenewal TermRenewal Term Period TypeResume DateService Activation DateSpecific Update DateStatusSubscription IDSuspend DateTerm Start DateTerm TypeTypeUpdated By IDUpdated Date |
| Bill To | The Bill-To Contact of the Account. |
| Debit Memo | Debit memos that you issued to your customers to increase the amount your customers owed you. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateDebit Memo DateMemo NumberDiscount AmountDue DateIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Debit Memo Item | Line items on debit memos. It includes the following fields:Amount Without TaxApplied To Others AmountBe Applied By Others AmountCharge DateCreated By IDCreated DateDescriptionIDProcessing TypeQuantitySKUService End DateService Start DateTax AmountTax Code NameTax Exempt AmountTax ModeUnit Of MeasureUnit PriceUpdated By IDUpdated Date |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated Date |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated Date |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameNetSuite Integration IDNetSuite Integration StatusNetSuite Item TypeNetSuite Sync DateSKUUpdated By IDUpdated Date |
| Product Rate Plan | The rate plan coming from the product catalog. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalldSourceSystemGradeIDNameUpdated By IDUpdated Date |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateDefault QuantityDeferred Revenue AccountDescriptionDiscount LevelEnd Date ConditionIDIncluded UnitsLegacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeWeekly Bill Cycle Day |
| Rate Plan | Refers to the rate plan or pricing plan information associated with the subscription. Contains the following fields:Amendment Type: Note that a filter on this field using the unequal operator cannot return those Rate Plan records with a blank Amendment Type field.Created By IDCreated DateExternally Managed Plan ID: a text field. This field indicates the unique identifier of a rate plan purchased on a third-party store.IDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate planNameOriginal Rate Plan ID: the original ID of the subscription rate plan, which is the ID of the subscription rate plan in the version-1 subscriptionSubscription Owner ID: the subscription owner ID of the subscription that contains the rate planSubscription Rate Plan NumberUpdated By IDUpdated Date |
| Rate Plan Charge | The charge information associated with the subscription. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge NumberCharge TypeCharged Through DateCreated By IDCreated DateDMRCDTCVDescriptionDiscount LevelEffective End DateEffective Start DateEnd Date ConditionIDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate plan chargeIs Last SegmentIs ProcessedList Price BaseMRRNameNumber of PeriodsOriginal IDOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageProcessed Through DateQuantityRating GroupRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition Trigger ConditionSegmentSpecific Billing PeriodSpecific End DateSubscription Id: the ID of the subscription that contains the rate plan chargeSubscription Owner ID: the subscription owner ID of the subscription that contains the rate plan chargeTCVTrigger DateTrigger EventUnit of MeasureUp To PeriodsUp To Periods TypeUpdated By IDUpdated DateVersionWeekly Bill Cycle Day |
| Sales Tax Payable Accounting Code | Accounting code for sales tax payable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Sold To | The Sold-To Contact of the Account. |
| Debit Taxation Item FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Subscription | The subscription to which the rate plan is associated. Contains the following fields:Auto RenewCancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account IDCreator Invoice Owner IDCurrent TermCurrent Term Period TypeIDInitial TermInitial Term Period TypeInvoice Owner IDInvoice SeparateNameNotesOpportunity Close DateOpportunity NameOriginal Created DateOriginal IDPrevious Subscription IDQuote Business TypeQuote NumberQuote TypeRenewal SettingRenewal TermRenewal Term Period TypeService Activation DateStatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated By IDUpdated DateVersion |
| Taxation Item | Related taxation record. |
