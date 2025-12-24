---
title: "Billing Preview Run Result Difference data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/billing-preview-run-result-difference-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:57.008Z"
---

# Billing Preview Run Result Difference data source

Data source to view the difference between the current billing preview run result and a specified billing preview run result

Use this data source to view the difference between the current billing preview run result and a specified billing preview run result.

Note:

This feature is in the Early Adopter phase. If you want to use the feature, submit a request at [Zuora Global Support](https://support.zuora.com/), and we will evaluate whether the feature is suitable for your use cases.

## Objects available in the data source

The following sections provide information on objects available in the data source.

## Basic object description

Descriptions for the base Zuora objects.

| Zuora Object | Description |
| --- | --- |
| Billing Preview Run Result Difference | Contains the following fields:Account IDAppliedToInvoiceItemIdBilling Preview Run IDCompared Billing Preview Run IDCreated By IDCreated DateCreditMemoItem AmountCreditMemoItem DescriptionCreditMemoItem IDCreditMemoItem QuantityCreditMemoItem SKUCreditMemoItem SKU NameCreditMemoItem Service EndDateCreditMemoItem Service StartDateCreditMemoItem UomDifference TypeIDInvoiceItem ChargeAmountInvoiceItem ChargeDateInvoiceItem ChargeTypeInvoiceItem IDInvoiceItem Processing TypeInvoiceItem QuantityInvoiceItem Service EndDateInvoiceItem Service StartDateInvoiceItem UomLegalDocumentationTypeRatePlanCharge IDRatePlanChargeNumberSubscription IDSubscription NumberUpdated By IDUpdated Date |

## Related object descriptions

| Object | Description |
| --- | --- |
| Account | The customer account information. Note that this is the Invoice Owner account. |
| Bill To Contact | The bill to contact of the Invoice Owner account. |
| Default Payment Method | The default payment method used to make payments. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Product | The product information. |
| Product Rate Plan | The rate plan from the product catalog. |
| Product Rate Plan Charge | Charge information from the product catalog. |
| Rate Plan | Refers to the rate plan or pricing plan information associated with the subscription. |
| Rate Plan Charge | The charge information associated with the subscription. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge NumberCharge TypeCharged Through DateCreated By IDCreated DateDMRCDTCVDescriptionDiscount LevelEffective End DateEffective Start DateEnd Date ConditionIDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate plan chargeIs Last SegmentIs ProcessedList Price BaseMRRNameNumber of PeriodsOriginal IDOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageProcessed Through DateQuantityRating GroupRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition Trigger ConditionSegmentSpecific Billing PeriodSpecific End DateSubscription Id: the ID of the subscription that contains the rate plan chargeSubscription Owner ID: the subscription owner ID of the subscription that contains the rate plan chargeTCVTrigger DateTrigger EventUnit of MeasureUp To PeriodsUp To Periods TypeUpdated By IDUpdated DateVersionWeekly Bill Cycle Day |
| Sold To Contact | The contact associated with the account to whom your product or service is sold. |
| Subscription | The subscription to which the rate plan is associated. Contains the following fields:Auto RenewCancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account IDCreator Invoice Owner IDCurrent TermCurrent Term Period TypeIDInitial TermInitial Term Period TypeInvoice Owner IDInvoice SeparateNameNotesOpportunity Close DateOpportunity NameOriginal Created DateOriginal IDPrevious Subscription IDQuote Business TypeQuote NumberQuote TypeRenewal SettingRenewal TermRenewal Term Period TypeService Activation DateStatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated By IDUpdated DateVersion |
