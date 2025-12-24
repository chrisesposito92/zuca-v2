---
title: "Billing periods customization"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/billing-periods-customization"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:04.276Z"
---

# Billing periods customization

Learn how to define and customize billing periods, cycle types, and start days in your Zuora Business system.

On the Define Billing Periods page, you can define your company's accepted billing periods and billing period start days. You can add and remove the billing periods and days that you use in your Zuora Business system.

Click your username at the top right and navigate to .

## Customize Billing Periods

Use the Customize Billing Periods section to specify the billing periods your organization uses to charge for its services.

You can either select the following individual billing periods or select all of them together by clicking the Select All checkbox:

-   Month

-   Quarter

-   Semi-Annual

-   Annual

-   Eighteen Months

-   Two Years

-   Three Years

-   Five Years

-   Specific Months

-   Subscription Term

    Note: If any charge in your subscription has the billing period set as `Subscription Term` , note the following:

    -   You must not change this subscription's term to evergreen. Otherwise, that charge on the subscription will be invalidated due to the term type being inconsistent with the evergreen concept. However, if you remove the charge that has its billing period set as `Subscription Term` , you can then perform the change.

    -   When you renew a subscription, the current subscription term is extended by creating a new term. A new charge segment is generated for the new term.


-   Week

-   Specific Weeks

-   Specific Days

    Note: When specifying the billing period to a specific number of days:

    -   Billing Day will be unavailable. ​​​​​

    -   You can specify how the billing period of the charge will be aligned using the Billing Period Alignment field.

    -   The following features are not supported: Prepaid with Drawdown, Rating Information Tool, Active Rating, and Rating details.



Click Save in the Customize Billing Periods section to save your selected billing periods.

## Customize Billing Cycle Types

Use the Customize Billing Cycle Types section to define the billing cycle type that your organization uses to charge for service.

You can either select the following individual billing cycle type or select all of them together by clicking the Select All checkbox:

-   Default from Customer

-   Specific Day of Month

-   Subscription Start Day

-   Charge Trigger Day

-   Specific Day of Week

-   Term Start Day

-   Term End Day


Note that `Term Start Day` and `Term End Day` are disabled by default. You need to reach out to Zuora Global Support to enable the two options.

Click Save in the Customize Billing Cycle Types section to save your selected billing cycle types.

## Customize Billing Period Start Days

Use the Customize Billing Period Start Days section to define which days of the month or week your billing periods can start. You can select the first through the thirtieth of the month, the end of the month (EOM), or Auto-Set. You can also select all of them together by clicking the Select All checkbox.

Note:

The billing period start day is also called the billing cycle day (BCD). You can also define which day of the week your billing periods can start.

## Customize Weekly Billing Period Start Days

Use the Customize Weekly Billing Period Start Days section to define which day of the week your billing periods can start. You can select any weekday from Sunday through Saturday, or multiple days. You can also select all the weekdays by selecting the Select All checkbox.

Click Save in the Customize Weekly Billing Period Start Days section to save your selected billing period start days.

## Customize List Price Base Options

The List Price Base determines whether the list price on a product rate plan charge is based on a month or on a billing period. Select the base options that you want to have available for rate plan charges. The selected options will appear in the pick list in the List Price Base field of rate plan charges.

Select:

-   Billing Period. For example, if your List Price is $1200, the charge for a 12-month billing period is $1200.

    Note: You cannot select the Billing Period option if the charge billing period is set to Subscription Term , or vice versa, unless one of the following conditions applies:

    -   The charge model is Discount-Fixed Amount , Discount Percentage , or Delivery Pricing .

    -   The charge function is Prepayment . For prepaid charges, it is recommended to set Validity Period to Subscription Term . Otherwise, errors might occur when processing related orders and subscriptions.


-   Month. For example, if your List Price is $100, the charge for a 12-month billing period is $1200.

-   Week. For example, if the list price is $100, the invoice for a 12-week period is $1200.

-   Year. For more information, see Annual List Price .

-   Specific Months. For more information, see Specific Months List Price .

-   Validity Period. For example, if your List Price is $100 and the validity period is 1 month, the charge for a 12-month billing period is $1200.


See Recurring Charges for Different Initial and Renewal Periods for more information on using the Per Month option and Subscription Term set as the billing period.
