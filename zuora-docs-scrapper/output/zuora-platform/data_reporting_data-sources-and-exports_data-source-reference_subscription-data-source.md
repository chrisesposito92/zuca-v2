---
title: "Subscription data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/subscription-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:42.999Z"
---

# Subscription data source

Data source to export summary data about subscriptions and associated accounts

Use this data source to export summary data about subscriptions and associated accounts, including Start and End Dates, Term, Status and Renewal data.

## Objects available in the data source

The following sections list objects available in the data source.

## Base object description

Descriptions for the base Zuora objects.

| Zuora Object | Description |
| --- | --- |
| Subscription | Contains the following fields:Auto RenewCancel Reason - The reason for a subscription cancellation copied from the changeReason field of a Cancel Subscription order action. This field contains valid value only if a subscription is cancelled through the Orders UI or API. Otherwise, the value for this field will always be null.Cancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account ID： This field is not available for single version subscriptions.Creator Invoice Owner ID： This field is not available for single version subscriptions.CurrencyCurrent TermCurrent Term Period TypeThe following fields whose names starting with "External" are only available for omnichannel subscriptions:External Activation DateExternal Application IdExternal Bundle IdExternal Expiration DateExternal In App Ownership TypeExternal Last Renewal DateExternal Next Renewal DateExternal PriceExternal Product IdExternal Purchase DateExternal Purchase TypeExternal QuantityExternal Replace By ProductIdExternal Source SystemExternal StateExternal Subscriber IdExternal Subscription IdExternal Transaction ReasonExternally Managed ByIDInitial TermInitial Term Period TypeInvoice Group NumberInvoice Owner IDInvoice SeparateInvoice Template IDIs Latest Version - Indicates whether the current subscription object is the latest version. This field is not available for single version subscriptions.Last Booking Date - The last change date of a subscription. The value of this field is as follows:For a new subscription created by the Subscribe and Amend APIs and UI, this field has the value of the subscription creation date.For a subscription changed by an amendment, this field has the value of the amendment booking date.For a subscription created or changed by an order, this field has the value of the order date.NameNotesOpportunity Close DateOpportunity NameOrder IDOriginal Created DateOriginal ID: This field is not available for single-version subscriptions.Original Purchase Date: This field is only available for omnichannel subscriptions.Payment TermPrevious Subscription ID: This field is not available for single-version subscriptions.Quote Business TypeQuote NumberQuote TypeRamp ID - Indicates the ramp that is related to this subscription. Note that this field is only available if you have enabled the Ramps feature.Renewal SettingRenewal TermRenewal Term Period TypeRevisionSequence Set IDService Activation DateState: This field is only available for omnichannel subscriptions.StatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated by IDUpdated DateVersion |

## Related object descriptions

| Object | Description |
| --- | --- |
| Account | The customer account to which the subscription belongs. |
| Bill To Contact | The bill to contact of the account to whom the subscription belongs. |
| Bill To Contact Snapshot | The snapshot of the bill to contact which stores the historical bill to contact. |
| Default Payment Method | The default payment method information for the subscription. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice Owner | Account BalanceAccount NumberAdditional Email AddressesAllow Invoice EditingAuto PayBill Cycle DayBill Cycle Day Setting OptionBilling BatchCMRRCRM Account IDCSRCommunicationProfile ID (In the case that this field has no value, the system will use the default Communication Profile to send out notifications.)Created By IDCreated DateCredit BalanceCurrencyDefault Payment Method IDFeeIDInvoice Delivery Preferences EmailInvoice Delivery Preferences PrintInvoice Template IDLast Invoice DateLast Metrics Update (available only if you have the Reseller Account feature enabled)NameNotesPO NumberParent IDPartner Account (available only if you have the Reseller Account feature enabled)Payment Gateway NamePayment Method Cascading ConsentPayment TermReserved Payment AmountRoll Up Usage to Parent AccountSales RepSequence Set IDStatusTax Company CodeTax Exempt Certificate IDTax Exempt Certificate TypeTax Exempt DescriptionTax Exempt Effective DateTax Exempt Entity/Use CodeTax Exempt Expiration DateTax Exempt Issuing JurisdictionTax Exempt StatusTotal Debit Memo Balance (This field is only used for Credit and Debit Memo.)Total Invoice BalanceUnapplied Balance (The value of this field is the unapplied payment amount.)Unapplied Credit Memo Amount (This field is only used for Credit and Debit Memo.)Updated By IDUpdated DateVAT ID |
| Parent Account | The parent account of the Account. |
| Sold To Contact | The sold to contact of the account to whom the subscription belongs. |
| Subscription Status History | The status history information of a subscription. Contains the following fields:Created By ID - The ID of the user who creates the subscription.Created Date - The date when the subscription is created.End Date - The latest date that the status ends.ID - The unique identifier of the subscription.Sort Order - The chronological order of the subscription statuses.Start Date - The effective start date of the status history.Status - The status of the subscription.Subscription Number - The subscription number that uniquely identifies each subscription.Updated By ID - The ID of the user who last updates the subscription.Updated Date - The date when the subscription is last updated. |
| Subscription Version Amendment | The amendment that generated a particular version of a subscription. |
