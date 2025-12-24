---
title: "Biling Rules - Proration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/biling-rules---proration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:11.612Z"
---

# Biling Rules - Proration

Explore billing rules for proration, including settings for credit proration, recurring charges, usage charges, and discount handling.

The Proration section contains billing rules specific to credit proration configurations.

## Enable credit back for removing or canceling one time charges

Use this setting to specify whether to create a credit when you remove or cancel one-time charges.

See Proration for information.

Note that when the Enable credit back for removing or canceling one time charges billing rule setting is set to Yes in Zuora Billing, canceling negative one-time charges will cause the booking and billing variances in Zuora Revenue. Positive one-time charges can work well.

## Prorate recurring charges for partial period

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

You can choose whether or not to prorate for partial quarterly, semi-annual or annual billing periods.

The Prorate recurring charges for partial period billing rule is set to Yes by default, and will prorate recurring charges for any periods less than the billing period. If you have this setting enabled in your tenant, you can disable proration for partial periods by selecting No.

This setting works in combination with the Bill recurring charges for partial month (with monthly based billing periods) setting.

See Proration for information on how proration can affect subscriptions.

This rule is not applied to the Discount - Fixed Amount charge model, as Discount - Fixed Amount always prorates.

## Bill recurring charges for partial month (with monthly based billing periods)

As well as proration for partial period, you can choose whether or not to bill recurring charges for any periods less than a month with the Bill recurring charges for partial month (with monthly based billing periods) option.

This setting works in combination with the Prorate recurring charges for partial period setting.

See Proration for information on how proration can affect subscriptions.

This rule is not applied to the Discount - Fixed Amount charge model, as Discount - Fixed Amount always prorates.

## Bill recurring charges for partial week (with weekly based billing periods)

You can choose whether to bill recurring charges for partial weekly billing periods. If this billing rule is set to Yes (the default), Zuora will prorate recurring charges for any periods less than a week.

This setting works in combination with the Prorate recurring charges for partial period setting.

See Proration for information on how proration can affect subscriptions.

This rule is not applied to the Discount - Fixed Amount charge model, as Discount - Fixed Amount always prorates.

## Bill usage charges for partial months (with monthly based billing periods)

Usage charges are not prorated in the same way as recurring charges. See Proration for information on how proration can affect subscriptions.

This rule is not applied to the Discount - Fixed Amount charge model, as Discount - Fixed Amount always prorates.

## Bill usage charges for partial week (with weekly based billing periods)

Usage charges are not prorated in the same way as recurring charges. If Prorate usage charges for partial week (with weekly based billing periods) is set to Yes (by default), all usage charges that occur within a prorated week will be billed. If set to No, then no usage charges that occur within a prorated week are billed.

This rule is not applied to the Discount - Fixed Amount charge model, as Discount - Fixed Amount always prorates.

## When prorating a month, assume 30 days in a month or use actual days

In this setting, you choose how to calculate the proration in a month.

-   With the Use actual number of days option, a charge is prorated to the actual number of days divided by the actual total number of days of that month, multiplied by the total charge.

-   With the Assume 30 days - Actual / 360 option, the charge is prorated to the actual number of days divided by 30 days, multiplied by the total charge.

-   With the Assume 30 days - Strict 30 / 360 option, instead of counting the actual number of days between the start and end dates of the service period, we strictly assume a month always contains 30 days. For example:

    -   If the end date is the last day of the month, it is always the 30th day.

    -   If the end day is in the next month, the month where the start day is in always contains 30 days.


See examples in Proration .

## When prorating periods greater than a month, prorate by month first, or by day

If you are billing annually, semi-annually or quarterly and you are prorating, you can choose Prorate by month first for proration to be calculated based on whole months first, with the remaining days prorated over a month, or choose Prorate by day for the proration to be based on the exact number of days.

This setting works in combination with the When prorating a month, assume 30 days in a month or use actual days setting.

See Proration for more information.

## Credit for Prorated Discounts (Fixed-amount Discount Charge Only)

Select whether to prorate the discount when issuing credits back to your customers when they shorten or cancel a regular charge in their subscriptions and the regular charge has a fixed-amount discount charge applied to it.

-   Yes Prorate the discount your customer can have.

-   No (Default) Do not prorate the discount and let your customer have the original discount as much as possible.


See Credit for prorated discounts for more information.

## When bill credit for recurring charges, based on billed period or credit period

Select whether to bill credit for recurring charges based on billed period.

The following options are provided:

-   From effective end date to end of the current billing period If this option is selected, the credit amount is calculated by considering the remaining time in the current billing period.

-   Based on the total billing period amount and charged amount (default for new tenants) If this option is selected, the credit amount is calculated by considering the total billing period and the charged amount during the period. This approach ensures that the calculated credit amount is more accurate and consistent with the invoice amount, minimizing rounding discrepancies.


See Probation credit for more information.
