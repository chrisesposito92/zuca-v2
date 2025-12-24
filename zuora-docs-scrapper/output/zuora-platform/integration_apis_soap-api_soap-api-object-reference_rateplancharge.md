---
title: "RatePlanCharge"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplancharge"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:41.464Z"
---

# RatePlanCharge

A rate plan charge is part of a subscription or an amendment to a subscription, and it comes from a product rate plan charge.

Like a product and its product rate plan charges, a subscription can have one or more rate plan charges.

Rate plan charges are sometimes called subscription rate plan charges to distinguish them from product rate plan charges. Rate plan charges that are part of an amendment are sometimes called amendment rate plan charges for the same reason. The object name is RatePlanCharge – not SubscriptionRatePlanCharge nor AmendmentRatePlanCharge.

Rate plan charges represent the actual charges for the rate plans or services that you sell.

Use the RatePlanCharge object to define the charges in a RatePlan. Upon creation, it inherits values from the corresponding ProductRatePlanCharge. You can alter some of the field values on an individual subscription or amendment basis using the RatePlanCharge object. To update it, first query it, then update the relevant fields and use it in a RatePlanChargeData array in a subscribe() call. See "Subscribe()" and "RatePlanChargeData" for more information.

Rate plan charges have the same types as their counterparts in product: one-time fees, recurring fees, and usage fees.

A one-time fee is a charge that your customer pays only once. One-time fees don't recur. Upfront setup fees and activation fees are examples of a one-time fee.

A recurring fee is a fee that repeats on a regular basis. You can set the schedule to be monthly, quarterly, semi-annually, or annually. Once the charge is triggered, the customer is automatically charged on the appropriate dates in the future. Monthly charges for satellite TV and yearly charges for authoring licenses on a hosted wiki are examples of a recurring fee. See "Triggering conditions" for more information.

A usage fee is a fee based on the quantity of units, such as media storage, that customers use during a given billing period. Usage charges are billed in arrears based on a customer's actual usage. Per-minute charges for phone calls and GB of media storage are examples of usage fees.

Zuora returns segmented rate plan charges, which are referred to as rate plan charge segments or charge segments. Every time an amendment (or an order action) changes a charge (except the Remove Product amendment), Zuora creates a new segmented RatePlanCharge object. Segmentation help you to use the fields, `Segment` , `EffectiveEndDate` , `EffectiveStartDate` , and `isLastSegment` , to determine the following:

-   The current price and quantity of a charge: `EffectiveStartDate` <= Today < `EffectiveEndDate` or `isLastSegment=` `true` (As this filter condition always returns the last charge segment, if a subscription has any future dated changes, the future dated charge segment will be returned rather than the current charge segment. In this scenario, use the filter condition above.)

-   The previous details of a charge, such as its price and quantity: `EffectiveStartDate` < Today

-   Pending charges: `EffectiveStartDate` > Today

-   The entire history of a charge: Order the RatePlanCharge object by segments, starting with the `Segment` field with the value, `1` .


Note:

Segmented rate plan charges are supported as of WSDL version 20.0+.

## Supported Calls

You can use this object with the following calls:

-   create()

-   subscribe()

-   query()

-   update()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Apply multiple discount charges

-   Override settings in the ProductRatePlanCharge object

-   Review the history of a charge


## Additional field details

## ApplyDiscountTo

Specifies the type of charges a specific discount applies to. This field inherits its value from `ProductRatePlanCharge.ApplyDiscountTo` , and can be one of the following values:

-   `RECURRING`

-   `USAGE`

-   `ONETIME`

-   `ONETIMERECURRING`

-   `ONETIMEUSAGE`

-   `RECURRINGUSAGE`

-   `ONETIMERECURRINGUSAGE`


All field values are case sensitive: note that these values are in all-caps.

## BillCycleDay

Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed. The BCD value in the account can override the BCD in this object.

Use this field in the `RatePlanCharge` object only if you want to override the settings in the product's `ProductRatePlanCharge` object.

Use this field for recurring charges and usage charges. Omit this field for one-time charges.

Set this field value to whole number, 1 - 31. Set the value to 31 if you want to bill this charge at the end of the month, including months with fewer than 31 days. The number, 0, isn't a valid value for this object; 0 represents the auto-set trigger, which applies to `Account` objects, not `ProductRatePlanCharge` objects.

## BillCycleType

Specifies how to determine the billing day for the charge.

Use this field in the `RatePlanCharge` object only if you want to override the settings in the product's `ProductRatePlanCharge` object.

Use one of the following values:

-   `DefaultFromCustomer` sets the bill cycle day (BCD) according to the `BillCycleDay` field value in related `Account` objects.

-   `SpecificDayofMonth` sets the BCD to a specific day of every month on a recurring basis. If you use this value, then you need to specify a BCD value for the `BillCycleDay` field in this object.

-   `SubscriptionStartDay` sets the BCD to the day that the subscription starts, which equates to one of the following dates. The date depends on which one you assigned to trigger the start of subscription charges in the `Subscription` object.

    -   Contract effective date: the date that the contract for this subscription takes effect.

    -   Service activation date: the date that services or products for this subscription are delivered or rendered.

    -   Customer acceptance date: the date that the customer accepts the services or products for this subscription.

-   `ChargeTriggerDay` sets the BCD to the day that charges for this product rate plan are triggered to start.

-   `SpecificDayofWeek` sets the BCD to a specific day of every week on a recurring basis. If you use this value, then you need to specify a BCD value for the `WeeklyBillCycleDay` field in this object.


## BillingPeriod

The billing period for the charge.

By default, this value is inherited from the product rate plan charge, but you have the option to override the value for recurring and usage charges when creating a new subscription or performing a New Product amendment. Omit this field for one-time charges.

If the value is set to `Specific Months` or `Specific Weeks` then you must also set a value for the `SpecificBillingPeriod` field. The `Specific Months` or `Specific Weeks` value lets you specify a month or a week in the `SpecificBillingPeriod` field to customize the billing period for the charge.

## BillingPeriodAlignment

Aligns charges within the same subscription if multiple charges begin on different dates.

This field anchors quarterly, semi-annual, or annual charges. When this value is the same for charges, then charges are added to the same subscription on different dates have aligned billing periods.

A typical use case for this object is to use the subscribe() call and default to the inherited value in `ProductRatePlanCharge.BillingPeriodAlignment` , then change the field value when you use an `amend()` call and `Amendment` object to add a new product.

Use one of the following values:

-   `AlignToCharge` starts the biling period on the first bill cycle day (BCD) on or after the charge trigger date. Charges bill on their own schedules and don't align with each other within the subscription. This value is the default value.

-   `AlignToSubscriptionStart` aligns all billing period to the first BCD on or after the subscription start date. Charges are aligned as soon as they're triggered.

-   `AlignToTermStart` aligns all billing periods to the first BCD on or after the current term start date. Charges are billed on their own schedules until the subscription reaches the end of its term and renews. The billing period for charges aligns when the subscription renews.


## ChargeModel

Determines how to calculate charges. Charge models must be individually activated in Z-Billing administration .

Use one of the following values if they're active on your tenant:

-   `Discount-Fixed Amount` is a fixed amount discount charge model , such as a one-time, $100 discount if the customer signs up for a subscription in January.

-   `Discount-Percentage` is a percentage discount charge model, such as a 15% discount on all subscription charges for the initial six months of service.

-   `Flat Fee Pricing` is a single price or fixed amount.

-   `Per Unit Pricing` charges per unit.

-   `Overage Pricing` charges a per-unit price on units in excess of included units in the base charge. Use this charge model only for usage-based charges.

-   `Tiered Pricing` changes pricing progressively as volume increases. A price table calculates pricing based on tiers that each define a range of volume and the corresponding pricing rule to apply when customers purchase a quantity of units that falls within the range of the tier.


You can't create multiple discounts in a single product rate plan.

You can't update the chage model on a product rate plan charge if it's part of an existing subscription.

## ChargeType

Specifies the type of charge:

-   `OneTime` is a charge that happens once during the subscription, such as an activation or initiation fee.

-   `Recurring` is a charge that repeats during the subscription, such as monthly or annually.

-   `Usage` is a charge assessed on a customer's actual usage during a specific billing period of a subscription. Usage is always billed in arrears because it's based on actual usage. For example, a customer's usage in January is billed in February in a monthly billing period plan.


## ChargedThroughDate

The date until when a customer was billed for the charge. Use this field value when you amend a subscription to determine an `EffectiveDate` field value or `SuspendDate` field value to set the amendment to a date that doesn't require proration, such as when the amendment cancels a subscription or suspending a subscription .

## DiscountLevel

Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account. This field is required in the associated `ProductRatePlanCharge` object if the `ChargeModel` field value is `DiscountFixedAmount` or `DiscountPercentage` .

You can't create multiple discounts in a single rate plan. However, you can apply multiple discounts to an individual customer. Customers can have a discount of each discount level type.

For example, Sergio has a $1000 recurring subscriptioncharge. He has the following discounts to apply to that $1000 charge:

-   A rate plan discount of 10%, which equals $100, and reduces his charge from $1000 to $900: $1000 charge - 10% discount = $900 charge

-   A subscription discount of 20%, which equals $180, and reduces his charge from $900 to $720: $900 charge - 20% discount = $720 charge

-   An account discount of 30%, which equals $216, and reduces his charge from $720 to $504: $720 charge - 30% discount = $504 charge


Discount charge models don't support tax inclusive modes; don't use this field if the `ProductRatePlanCharge.TaxMode` field value is set to `TaxInclusive` .

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `RatePlanCharge` object is `RatePlanChargeId` .

## IncludedUnits

Specifies the number of usage units that are provided as part of the plan's upfront fees. Any usage that exceeds the value set in `IncludedUnits` is recorded as overage. This field is for usage-based fees only.

## NumberOfPeriods

Specifies the number of periods to use when calculating charges in an overage smoothing charge model, which is an advanced type of usage model that avoids spikes in usage charges. If a customer's usage spikes in a single period, an overage smoothing model eases overage charges by considering usage over multiple periods. The value that you provide in the `NumberOfPeriod` field determines the number of these periods to consider.

## OverageCalculationOption

Determines whether to calculate overage charges at the end of the smoothing period or at the individual billing periods. This field is for usage charges that use either an overage charge model or a tiered overage charge model.

## OverageUnusedUnitsCreditOption

Determines whether to credit the customer with unused units of usage. Use this field for usage charges that use either an overage charge model or a tiered overage charge model.

Use `NoCredit` to issue no credit to the customer for unused usage. Use `CreditBySpecificRate` to issue credit to the customer for unused usage at a specified rate of units to credit.

## Price

The price for units in the subscription rate plan. Use this field with a `subscribe()` call to override the price in the associated subscription rate plan charge tiers.

Prices are always stored in subscription rate plan charge tiers even when the charge model isn't tiered pricing. You can query for `Price` from a `RatePlanCharge` object unless the charge model is volume or tiered pricing. If the charged model is volume or tiered pricing, then you need to query for `Price` from the relevant `RatePlanChargeTier` .

## SpecificBillingPeriod

Specifies a custom number of months for the billing period of a particular charge.

If you override the `BillingPeriod` when creating a new subscription or a New Product amendment, then this field is required if you set the value of the `BillingPeriod` field to `Specific Months` .

If you want to charge a customer annually, semi-annually, quarterly, or monthly, then you can simply specify that choice in the `BillingPeriod` field, rather than using this `SpecificBillingPeriod` field.

## UsageRecordRatingOption

This field cannot be updated. The `UsageRecordRatingOption` field on a charge is owned by the product catalog in the product rate plan charge. This value is not a property of the subscription rate plan charge. The subscription rate plan charge always points back to the original product rate plan charge for this data. The value for this field is `EndOfBillingPeriod` or `OnDemand` .

## UseDiscountSpecificAccountingCode

Determines whether to define a new accounting code for the new discount charge.

Set the value to `True` to define a dedicated accounting code for the discount charge. Set the value to `False` to copy the accounting code from the regular charge that the discount applies to.
