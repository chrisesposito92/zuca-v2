---
title: "Rate Plan Charge data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:31.272Z"
---

# Rate Plan Charge data source

Data source to export charges on subscriptions

## Overview

Use this data source to export charges on subscriptions, representing individual streams of charges that the subscription will generate (for example, usage, recurring, one-time). Each subscription charge represents a row in the export, and this data can be combined with associated data such as [Accounts](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account), [Subscriptions](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription), and [Product Catalog](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product).

## Objects available in the data source

![rate_plan_charge_datasource.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/658b6bab-7e40-46f2-a8b5-c23e56f4e9a7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1OGI2YmFiLTdlNDAtNDZmMi1hOGI1LWMyM2U1NmY0ZTlhNyIsImV4cCI6MTc2NjY4ODQ0OSwianRpIjoiMTZkMDMxYmNiYjQwNDU4NGI4ZTU3ODY0ZWM5NzE4ZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7GKKXqia5kU8Y2L6X5h5HAtlBULZ4826_DLl8TGAJDM)

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Rate Plan Charge | Fields on a rate plan charge. It includes the following fields. See the field description in the Rate Plan Charge object reference.Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge NumberCharge TypeCharged Through Date - The date through which a customer has been billed for the charge.Before the charge is billed, the value of the Charged Through Date field is null.Created By IDCreated DateCredit OptionDMRCDTCVDescriptionDiscount LevelEffective End DateEffective Start DateEnd Date ConditionExclude Item Booking from Revenue - Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled the Order to Revenue feature or the Billing - Revenue Integration feature. The Order to Revenue feature or the Billing - Revenue Integration feature only supports the billing-based revenue recognition for fixed-amount discounts. Booking transactions must be excluded from revenue accounting. You can exclude the booking transactions by setting the Exclude Item Booking from Revenue Accounting field.Exclude Item Billing from Revenue - Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration.IDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate plan chargeIs Last SegmentIs Processed - It indicates whether a charge segment has been completely billed for all its relevant billing periods. This is determined by whether the End Date of the charge is earlier than or equal to the Target Date when generating invoices.List Price BaseMRRNameNumber of PeriodsNumber of Deliveries - dedicated to the Delivery Pricing chargesOriginal IDOverage Calculation OptionOverage Unused Units Credit OptionPayment Term SnapshotPrice Change OptionPrice Increase PercentageProcessed Through Date - The date until when charges have been processed. When billing in arrears, such as usage, this field value is the same as the ChargedThroughDate value. This date is the earliest date when a charge can be amended.Quantity - the value is always 1 for the Delivery Pricing chargesReflect Discount In Net Amount - indicates whether reflects the net amount of the Delivery Pricing charges after a percentage discountRating GroupRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition Trigger ConditionSales Price - The sales price associated with the rate plan charge expressed as a decimal. For field explanation, see Retrieve a rate plan charge of Object Query.SegmentSubscription ID: the ID of the subscription that contains the rate plan chargeSubscription Owner ID: the subscription owner ID of the subscription that contains the rate plan chargeSpecific Billing PeriodSpecific End DateTCVTax Code NameTax Mode OptionTaxableTrigger DateTrigger EventUnit of MeasureUp To PeriodsUp To Periods TypeUpdated By IDUpdated Date - The default behavior is that when Charged Through Date, Processed Through Date, or Is Processed is updated, the value of Updated Date for the Rate Plan Charge does not change. If you want the Updated Date field to change when Charged Through Date, Processed Through Date, or Is Processed is updated, submit a request at Zuora Global Support.VersionWeekly Bill Cycle DayThe following fields are only available if you have the Prepaid with Drawdown feature enabled.Is PrepaidPrepaid Operation TypePrepaid UOMPrepaid QuantityPrepaid Total QuantityValidity Period TypeCredit OptionDrawdown UOMDrawdown Rate |

## Related object descriptions

| Object | Description |
| --- | --- |
| Account | Customer account information |
| Amendment | The amendment that is tied to the rate plan charge, if applicable |
| Bill To Contact | The contact of the entity/person to whom you bill for your product or service |
| Bill To Contact Snapshot | The snapshot of the bill to contact which stores the bill to contact when this Rate Plan Charge is created. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Sold To Contact | The contact of the entity/person to whom your product or service is sold |
| Sold To Contact Snapshot | The snapshot of the sold to contact which stores the sold to contact when this Rate Plan Charge is created. |
| Default Payment Method | Payment method details, as a credit card, ACH or PayPal |
| Product | Product information |
| Product Rate Plan | Pricing plan information from the product catalog |
| Product Rate Plan Charge | Charge information from the product catalog |
| Rate Plan | Pricing Plan information from the Subscription |
| Rate Plan Charge | Charge information based on the subscription |
| Subscription Status History | The status history information of a subscription. Contains the following fields:Created By ID - The ID of the user who creates the subscription.Created Date - The date when the subscription is created.End Date - The latest date that the status ends.ID - The unique identifier of the subscription.Sort Order - The chronological order of the subscription statuses.Start Date - The effective start date of the status history.Status - The status of the subscription.Subscription Number - The subscription number that uniquely identifies each subscription.Updated By ID - The ID of the user who last updates the subscription.Updated Date - The date when the subscription is last updated. |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable |
| Recognized Revenue Accounting Code | Accounting code for recognized revenue |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue |

Next, refer to [Find Subscriptions that have a Rate Plan Charge](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source/find-subscriptions-that-have-a-rate-plan-charge).
