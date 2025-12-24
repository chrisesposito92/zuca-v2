---
title: "Migration keys for migration field sets"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/upgrade-zuora-360/migration-keys-for-migration-field-sets"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:06.000Z"
---

# Migration keys for migration field sets

This document details the migration keys, the Zuora 360 package versions they were introduced in, and the fields that were added or updated.

If you have a big volume of data, syncing all the data for updated objects can potentially take a long time after a package upgrade. You can use the Migration Custom Setting to control the sync of the updated objects.

By default, the Migrated field in the Migration Keys is set to true, and the data for the updated objects are not migrated in the first sync session after the Zuora 360 upgrade. If you want the fields populated in the existing object records, take the below steps to trigger the data migration of the fields in next Zuora 360 sync session.

The following are the migration keys, the Zuora 360 package versions the keys were added, and the fields added or updated.

| AddedinVersion | Migration Key | Object.Field Synchronized |
| --- | --- | --- |
| 4.2 | PE-501-Charge | Rate Plan Charge.Billing TimingProduct Rate Plan Charge.Billing Timing |
| 4.2 | PE-520-PaymentMethod | PaymentMethod.TokenID |
| 3.44 | PE_303_SubscriptionProductCharge | Subscription Product & Charge.Weekly Bill Cycle Day |
| 3.4 | PE-81_Subscription | Subscription.Current TermSubscription.Current Term Period TypeSubscription.Initial Term Period TypeSubscription.Renewal.Term.Period.Type |
| 3.3 | COM11312_BillingAccount | Billing Account.Communication Profile Id(Zuora__Communication_Profile_Id__c) |
| 3.2 | MultiEntity_BillingAccount | Billing Account.Entity ID |
| 3.2 | MultiEntity_Product | Product(Zuora__Product__c).Entity ID |
| 3.0 | CPQ_InvoiceMigration | Invoice.Credit Balance Adjustment Amount |
| 3.0 | CPQ_Subscription | Subscription.Original IdSubscription.Cancelled DateSubscription.Previous Subscription Id |
| 3.0 | CPQ_SubscriptionCharge | Subscription Product & Charge.Apply Discount ToSubscription Product & Charge. Bill Cycle DaySubscription Product & Charge.Bill Cycle TypeSubscription Product & Charge.Billing Period AlignmentSubscription Product & Charge.Charged Through DateSubscription Product & Charge.Discount AmountSubscription Product & Charge.Discount LevelSubscription Product & Charge.Discount PercentageSubscription Product & Charge. DMRCSubscription Product & Charge.DTCVSubscription Product & Charge.Included UnitsSubscription Product & Charge. Is LastS egmentSubscription Product & Charge.List Price BaseSubscription Product & Charge.Number Of PeriodsSubscription Product & Charge. Original IdSubscription Product & Charge.Overage Calculation OptionSubscription Product & Charge.Overage PriceSubscription Product & Charge.Overage Unused Units Credit OptionSubscription Product & Charge.Price Increase PercentageSubscription Product & Charge.Processed Through DateSubscription Product & Charge.Product Rate Plan Charge IdSubscription Product & Charge.Rev Rec CodeSubscription Product & Charge.ev Rec Trigger ConditionSubscription Product & Charge.SegmentSubscription Product & Charge. Specific Billing PeriodSubscription Product & Charge.Trigger DateSubscription Product & Charge.Trigger EventSubscription Product & Charge.Unused Units Credit RatesSubscription Product & Charge.Usage Record Rating OptionSubscription Product & Charge.UseDiscountSpecificAccountingCodeSubscription Product & Charge.Original Product Rate Plan Charge IdSubscription Product & Charge.Price Change OptionSubscription Product & Charge.Billing TimingSubscription Product & Charge.VersionSubscription Product & Charge.Subscription Rate Plan |
| 3.0 | COM-9137_Quote_Subscription | Quote.Quote TypeQuote. Quote Business TypeQuote.Quote NumberQuote.Opportunity Close DateQuote.Opportunity Number |
| 3.0 | COM-9137_SoldToContact | Billing Account.Sold To CityBilling Account.Sold To CountryBilling Account.Sold To Address1Billing Account.Sold To Address2Billing Account.Sold To StateBilling Account.Sold To Postal CodeBilling Account.Sold To FaxBilling Account.Sold To Work EmailBilling Account.Sold To Work Phone |
| 2.111 | COM_10097_SubscriptionCharge | Product Rate Plan Charge.Up To How Many PeriodsProduct Rate Plan Charge.Up To Periods TypeProduct Rate Plan Charge.End Date ConditionSubscription Product & Charge.Up To How Many PeriodsSubscription Product & Charge.Up To Periods TypeSubscription Product & Charge.End Date ConditionSubscription Product & Charge.Specific End Date |
| 2.110 | COM-8422_InvoiceMigration | Invoice.Posted DateInvoice.Generated Date |
| 2.110 | COM-8422_PaymentMethod | Payment Method. Mandate Creation DatePayment Method.Mandate Update Date |
| 2.110 | COM-8422_SubscriptionMigration | Subscription.Original Created Date |
| 2.110 | COM-8422_RefundMigration | Refund.Refund Date |
| 2.110 | COM-8422_PaymentMigration | Paymen.Effective Date |
| 2.104 | COM8903_OnlySubUpdate_Subscription | Subscription.Subscription Number |
| 2.104 | COM8903_OnlySubUpdate_Charges | Subscription Product Charge.Charge Number |
| 2.80 | COM618_RateplanId | Subscription Product & Charge.Rate Plan ID |
