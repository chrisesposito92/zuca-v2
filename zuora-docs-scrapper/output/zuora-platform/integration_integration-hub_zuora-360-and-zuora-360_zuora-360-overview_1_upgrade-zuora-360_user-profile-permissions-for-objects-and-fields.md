---
title: "User profile permissions for   objects and fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/upgrade-zuora-360/user-profile-permissions-for-objects-and-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:00.261Z"
---

# User profile permissions for objects and fields

This document outlines the permissions required for user profiles to access and manage new objects and fields.

## Read, Create, Edit, and Delete permissions

To enable access to the new objects added, grant the Read, Create, Edit, and Delete permissions on these objects to the sync user profile.

Additionally, grant the Read and Edit field level permissions on all fields in the new objects to the same sync user profile.

The following new custom objects were added in this and previous versions.

If you are upgrading from a version higher than what is specified in the Added in Versioncolumn, you do not need to grant permissions to that object.

| Object Name (API Name) | Added in Version |
| --- | --- |
| Refund(Zuora__Refund__c) | 2.7 |
| Refund Invoice Payment(Zuora__RefundInvoicePayment__c) | 2.7 |
| Subscription Product Feature(Zuora__SubscriptionProductFeature__c) | 2.9 |
| Payment Gateway(Zuora__PaymentGateway__c) | 3.0 |
| Subscription Rate Plan(Zuora__SubscriptionRatePlan__c) | 3.0 |
| Subscription Rate Plan Charge Tier(Zuora__SubscriptionRatePlanChargeTier__c) | 3.0 |
| Invoice Item(Zuora__InvoiceItem__c) | 4.0This feature is in Early Adopters program. You only need to grant permission to this object if the Zuora Tenant setting is enabled. |

## Read and Write permisions

Grant the Read and Edit permissions to the sync user profile on the following new fields.

If you are upgrading from a version higher than what is specified in the Added in Version column, you do not need to grant permissions to those fields.

| Object Name | Field Name | Added in Version |
| --- | --- | --- |
| Billing Account | Additional Email AddressesAllow Invoice EditBcd Setting OptionCommunication Profile IdInvoice Delivery Prefs EmailInvoice Delivery Prefs PrintInvoice Template IdNotesPayment GatewaySold To Address1Sold To Address2Sold To CitySold To CountrySold To FaxSold To Postal CodeSold To StateSold To Work Email EmailSold To Work PhoneTax Exempt Certificate IDTax Exempt Certificate TypeTax Exempt DescriptionTax Exempt Effective DateTax Exempt Expiration DateTax ExemptIssuing JurisdictionTax Exempt StatusTotal Invoice Balance | 3.0 |
| Invoice | Credit Balance Adjustment Amount | 3.0 |
| Subscription | Cancelled DateOpportunity Close DateOpportunity NameOriginal IdPrevious Subscription IdQuote Business TypeQuote NumberQuote Type | 3.0 |
| Subscription Product & Charge | Apply Discount ToBill Cycle DayBill Cycle TypeBilling Period AlignmentCharged Through DateDiscount AmountDiscount LevelDiscount PercentageDMRCDTCVIncluded UnitsIs Last SegmentList Price BaseNumber Of PeriodsOriginal IdOriginal Product Rate Plan Charge IdOverage Calculation OptionOverage PriceOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageProcessed Through DateProduct RatePlan Charge IdRev Rec CodeRev Rec Trigger ConditionSegmentSpecific Billing PeriodSubscription Rate PlanTrigger DateTrigger EventUnused Units Credit RatesUsageRecordRatingOptionUseDiscountSpecificAccountingCodeVersion | 3.0 |

## Update Field Sets

The following table lists the changes needed in field sets. Review the field sets in your org and make changes as necessary.

| Object | Field Set | ChangedinVersion | Field Change |
| --- | --- | --- | --- |
| Subscription Product & Charge(Zuora__SubscriptionProductCharge__c) | SubscriptionCharges | 4.8 | If you turned on the Get Subscriptions From 360 Zuora Config setting, add the new field to the field set to display the name in the Select Billing Account table in the quoting flow:Subscription Rate Plan Charge Name ( Zuora__SubscriptionRatePlanChargeName__c) |
