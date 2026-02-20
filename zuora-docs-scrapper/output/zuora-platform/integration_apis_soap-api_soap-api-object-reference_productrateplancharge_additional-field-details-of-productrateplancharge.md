---
title: "Additional field details of ProductRatePlanCharge"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/additional-field-details-of-productrateplancharge"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:39.829Z"
---

# Additional field details of ProductRatePlanCharge

Additional field details of the ProductRatePlanCharge object.

## BillCycleDay

Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed. The BCD value in the account can override the BCD in this object.

Use this field for recurring charges and usage charges. Omit this field for one-time charges.

Set this field value to whole number, 1 - 31. Set the value to 31 if you want to bill this charge at the end of the month, including months with fewer than 31 days. The number, 0, isn't a valid value for this object; 0 represents the auto-set trigger, which applies to `Account` objects, not `ProductRatePlanCharge` objects.

## BillCycleType

Specifies how to determine the billing day for the charge. Use one of the following values:

-   `DefaultFromCustomer` sets the bill cycle day (BCD) according to the `BillCycleDay` field value in related `Account` objects.

-   `SpecificDayofMonth` sets the BCD to a specific day of every month on a recurring basis. If you use this value, then you need to specify a BCD value for the `BillCycleDay` field in this object.

-   `SubscriptionStartDay` sets the BCD to the day that the subscription starts, which equates to one of the following dates. The date depends on which one you assigned to trigger the start of subscription charges in the `Subscription` object.

    -   Contract effective date: the date that the contract for this subscription takes effect.

    -   Service activation date: the date that services or products for this subscription are delivered or rendered.

    -   Customer acceptance date: the date that the customer accepts the services or products for this subscription.

-   `ChargeTriggerDay` sets the BCD to the day that charges for this product rate plan are triggered to start.

-   `SpecificDayofWeek` sets the BCD to a specific day of every week on a recurring basis. If you use this value, then you need to specify a BCD value for the `WeeklyBillCycleDay` field in this object.


## BillingPeriod

The billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).

Set a billing period for a charge only if the charge is recurring. Omit this field for one-time charges.

If the value is set to `Specific Months` or `Specific Weeks` then you must also set a value for the `SpecificBillingPeriod` field. The `Specific Months` or `Specific Weeks` value lets you specify a month or a week in the `SpecificBillingPeriod` field to customize the billing period for the charge.

## BillingPeriodAlignment

Aligns charges within the same subscription if multiple charges begin on different dates.

The billing period alignment field anchors quarterly, semiannual, or annual charges. When you set the same value for charges, then charges added to the same subscription on different dates have aligned billing periods.

Use one of the following values:

-   `AlignToCharge` starts the biling period on the first bill cycle day (BCD) on or after the charge trigger date. Charges bill on their own schedules and don't align with each other within the subscription. This value is the default value.

-   `AlignToSubscriptionStart` aligns all billing period to the first BCD on or after the subscription start date. Charges are aligned as soon as they're triggered.

-   `AlignToTermStart` aligns all billing periods to the first BCD on or after the current term start date. Charges are billed on their own schedules until the subscription reaches the end of its term and renews. The billing period for charges aligns when the subscription renews.


## Proration

Proration allows you to select the proration behavior for a charge instead of using the tenant-level proration logic configured in the billing setting. The proration option under product rate plan charge level(recurring charges), allows you to select the proration behavior for a specific charge instead of using the tenant level proration logic configured in the billing setting.

You can choose different proration behaviors for different charges and settings.

-   Recurring charges

    -   `DefaultFromTenantSetting` allows to follow the customer billing rule proration setting.

    -   `ChargeFullPeriod` allows to charge the full period amount for a partial billing period.

-   Usage charges (under unbilled usage)

    -   `NoProration` is a default current system behavior for a usage charge.

    -   `TimeBased` prorates the usage charge amount using the actual number of days if the billing period is a partial period.


## ChargeModel

Determines how to calculate charges. Charge models must be individually activated in Z-Billing administration .

Use one of the following values if they are active on your tenant:

-   `Discount-Fixed Amount` is a fixed amount discount charge model , such as a one-time, $100 discount if the customer signs up for a subscription in January.

-   `Discount-Percentage` is a percentage discount charge model, such as a 15% discount on all subscription charges for the initial six months of service.

-   `Flat Fee Pricing` is a single price or fixed amount.

-   `Per Unit Pricing` charges per unit.

-   `Overage Pricing` charges a per-unit price on units in excess of included units in the base charge. Use this charge model only for usage-based charges.

-   `Tiered Pricing` changes pricing progressively as volume increases. A price table calculates pricing based on tiers that each define a range of volume and the corresponding pricing rule to apply when customers purchase a quantity of units that falls within the range of the tier.

-   `Tiered with Overage Pricing` is similar to the tiered charge model, except an overage charge exists for any units consumed above the ending units of the final tier.

-   `Volume Pricing` charges the price based on the volume purchased.

-   `MultiAttributePricing` This value is only available in WSDL 102.0 and later if you have the Multi-Attribute Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see "Zuora Editions" for pricing information.

-   `PreratedPerUnit` determines the total rated amount by multiplying the per unit rate with the provided quantity. This value is only available in WSDL 102.0 and later if you have the Pre-Rated Per Unit Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see "Zuora Editions" for pricing information.

-   `PreratedPricing` charges the total rated amount that is passed in on the usage records that are uploaded to Zuora. This value is only available in WSDL 102.0 and later if you have the Pre-Rated Pricing model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see "Zuora Editions" for pricing information.

-   `HighWaterMarkVolumePricing` charges end users only for the highest aggregated quantity of usage consumed on any day during a billing period. This value isonly available in WSDL 102.0 and later if you have the Volume with High Water Mark Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see "Zuora Editions" for pricing information.

-   `HighWaterMarkTieredPricing` charges end users only for the highest aggregated quantity of usage consumed on any day during a billing period. This value is only available in WSDL 102.0 and later if you have the Tiered with High Water Mark Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see "Zuora Editions" for pricing information.


You cannot create multiple discounts in a single product rate plan.

You cannot update the charge model on a product rate plan charge if it's part of an existing subscription.

## ChargeType

Specifies the type of charge:

-   `OneTime` is a charge that happens once during the subscription, such as an activation or initiation fee.

-   `Recurring` is a charge that repeats during the subscription, such as monthly or annually.

-   `Usage` is a charge assessed on a customer's actual usage during a specific billing period of a subscription. Usage is always billed in arrears because it's based on actual usage. For example, a customer's usage in January is billed in February in a monthly billing period plan.


## DiscountLevel

Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account. This field is required if your `ChargeModel` field value is `DiscountFixedAmount` or `DiscountPercentage`.

You can't create multiple discounts in a single rate plan. However, you can apply multiple discounts to an individual customer. Customers can have a discount of each discount level type.

For example, Sergio has a $1000 recurring subscriptioncharge. He has the following discounts to apply to that $1000 charge:

-   A rate plan discount of 10%, which equals $100, and reduces his charge from $1000 to $900: $1000 charge - 10% discount = $900 charge

-   A subscription discount of 20%, which equals $180, and reduces his charge from $900 to $720: $900 charge - 20% discount = $720 charge

-   An account discount of 30%, which equals $216, and reduces his charge from $720 to $504: $720 charge - 30% discount = $504 charge


Discount charge models don't support tax inclusive modes; don't use this field if you set the `TaxMode` field value to `TaxInclusive` .

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `ProductRatePlanCharge` object is `ProductRatePlanChargeId` .

## IncludedUnits

Specifies the number of units in the base set of units. For example, in the Topaz product rate plan example, 500 minutes are included in the plan. This field is for usage-based fees only. This field isn't supported for tiered or volume-pricing.

## NumberOfPeriod

Specifies the number of periods to use when calculating charges in an overage smoothing charge model, which is an advanced type of usage model that avoids spikes in usage charges. If a customer's usage spikes in a single period, an overage smoothing model eases overage charges by considering usage over multiple periods. The value that you provide in the `NumberOfPeriod` field determines the number of these periods to consider.

## OverageCalculationOption

Determines whether to calculate overage charges at the end of the smoothing period or at the individual billing periods. Use this field for usage charges that use either an overage charge model or a tiered overage charge model.

## OverageUnusedUnitsCreditOption

Determines whether to credit the customer with unused units of usage. Use this field for usage charges that use either an overage charge model or a tiered overage charge model.

Use `NoCredit` to issue no credit to the customer for unused usage. Use `CreditBySpecificRate` to issue credit to the customer for unused usage at a specified rate of units to credit.

## PriceChangeOption

Applies an automatic price change when a termed subscription is renewed. Typically, this price change is an increase, and is commonly called an uplift. To enable this feature, use this field with one of the following values:

-   `FromTenantPercentageValue` uses the tenant-level percentage uplift, which you set in the web-based UI: Z-Billing > Define Default Subscription Settings

-   `SpecificPercentageValue` overrides the tenant-level uplift value with a specific value that you provide in the `PriceIncreasePercentage` field.


## RevRecCode

Associates this product rate plan charge with a specific revenue recognition code. This code facilitates revenue recognition in accounting systems and reports.

Revenue recognition is commonly called rev rec.

Rev rec is an accounting principle and process for reporting revenue. Rev rec allows companies to recognize the monetary value of a subscription over a period of time as the revenue is realized and earned when services are rendered or goods are delivered.

Use any rev rec code for the `RevRecCode` field value that's active in Z-Billing. Open Z-Billing > Settings in the web-based UI to configure rev rec codes .

## RevRecTriggerCondition

Specifies when revenue recognition begins. This code facilitates revenue recognition in accounting systems and reports.

Revenue recognition is commonly called rev rec.

Rev rec is an accounting principle and process for reporting revenue. Rev rec allows companies to recognize the monetary value of a subscription over a period of time as the revenue is realized and earned when services are rendered or goods are delivered.

Use one of the following values to specify when to recognize revenue:

-   `ContractEffectiveDate` is the date when the charge is ready to be billed.

-   `ServiceActivationDate` is the date when the services or products for a subscription are activated and the customers have access.

-   `CustomerAcceptanceDate` is the date when then customer accepts the services or products for a subscription.


## SmoothingModel

Specifies the smoothing model for an overage smoothing charge model, which is an advanced type of a usage model that avoids spikes in usage charges. If a customer's usage spikes in a single period, then an overage smoothing model eases overage charges by considering usage and multiple periods.

Use one of the following values to specify which smoothing model to apply to the charge:

-   `RollingWindow` considers a number of periods to smooth usage. The rolling window starts and increments forward based on billing frequency. When allowed usage is met, then period resets and a new window begins.

-   `Rollover` considers a fixed number of periods before calculating usage. The net balance at the end of a period is unused usage, which is carried over to the next period's balance.


## SpecificBillingPeriod

Customizes the number of month for the charges billing period. This field is required if you set the value of the `BillingPeriod` field to `Specific Months` .

If you want to charge a customer annually, semi-annually, quarterly, or monthly, then use the `BillingPeriod` field; don't use the `SpecificBillingPeriod` field.

## TaxCode

Specifies the tax code for taxation rules. Tax codes identify which tax rules and rates to apply to a specific charge.

A tax code must be activated before you can use it as a valid `TaxCode` field value. For more information on tax codes in the Zuora API, see the TaxationItem object. For instructions on configuring tax codes in the web-based UI, see Configure Tax Codes in Z-Billing.

## TaxMode

Determines how to define taxation for the charge.

Set the value to one of the following options:

-   `TaxExclusive` excludes tax in charge prices. Tax is calculated and added to the charge.

-   `TaxInclusive` includes tax in charge prices. Tax is part of the charge.


For example, a taxable service costs $100. If your tax mode is exclusive, then the invoice shows a charge of $100, adds a tax of $8.75, and shows a total of $108.75. If your tax mode is inclusive, then the invoices shows a total charge of $108.75, which includes both the $100 charge and the $8.75 tax.

Tax inclusive mode is typically used in Europe, Australia, and New Zealand. Tax exclusive mode is typically used in the United States.

The tax inclusive mode has the following limitations:

-   Tax codes can includes only one tax rate.

-   Tax codes can't include flat taxes.

-   Discount charge models aren't supported in WSDL 42.0 and older.WSDL 42.0 and older.


## UsageRecordRatingOption

Determines how Zuora processes usage records for per-unit usage charges.

This field value on ProductRatePlanCharge object is the "Master" value, and it can be created, updated, queried, and deleted. The value of the UsageRecordRatingOption field on the RatePlanCharge object is inherited from the ProductRatePlanCharge object, and thus it can only be queried.

The UsageRecordRatingOption field on the ProductRatePlanCharge object is available in WSDL version 83.0 and above.

## UseDiscountSpecificAccountingCode

Determines whether to define a new accounting code for the new discount charge.

Set the value to `True` to define a dedicated accounting code for the discount charge. Set the value to `False` to copy the accounting code from the regular charge that the discount applies to.
