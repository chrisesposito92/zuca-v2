---
title: "Date attributes for product rate plan charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/date-attributes-for-product-rate-plan-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T04:47:47.285Z"
---

# Date attributes for product rate plan charges

Explains the date attributes for product rate plan charges, including timing, frequency, trigger day, billing period, end date, and billing day options, which determine when charges are billed in a subscription.

When you define your products, rate plans, and rate plan charges in your product catalog you can also specify certain rate plan charge attributes (in the Timing and Frequency of Charges section) that affect when the charge is billed once it has been added to a subscription. Subscriptions contain the products, rate plans, and rate plan charges that the customer has purchased. You can set the charge to bill based on the customer account’s bill cycle day, or create a schedule for the charge.

## Timing and Frequency of Charges

The timing and frequency of charges is determined by the following charge attributes:

## Trigger Day

Select one of the three subscription/amendment billing trigger dates to be the date the charge is triggered to bill. For example, if you have a subscription with a charge that uses a trigger day of `Contract Effective` , the subscription’s contract effective date is the day the charge is ready to be billed. The actual time that the charge is billed depends on the bill cycle day on the account or the billing day selected on the charge.

## Billing Period

The billing period determines how often your charge is billed (for example, Monthly, Quarterly, Annual). Configure the billing periods in the Zuora Billing settings ( ).

## End Date

The end date determines when the charge ends after the charge trigger date. You can select one of the following options to specify the charge end date. The charge ends on the subscription end date by default.

You can configure an email or callout to send a notification when the charge ends. See Key Dates: Rate Plan Charge End Date for more information.

## Align to Subscription End Date

The charge ends when the subscription ends after the charge trigger date.

## Fixed Period after the Charge is Triggered

The charge ends after a specified period based on the trigger date of the charge. But pay attention to the following scenarios:

-   If the subscription ends before the charge end date, the charge ends when the subscription ends.

-   If the subscription is renewed before the initial end term and renewal term ends after the charge end date, the charge will end on the charge end date.


If you select Fixed Period after the Charge is triggered , the charge will end as of the specified period. Specify the length of the period and select one of the following period types: Billing Periods , Years , Months , Weeks , and Days .

The following example shows the charge ends after a specified period:

-   A subscription ends on December 31, 2026.

-   In August, you trigger a charge to bill on September 1, 2026 and set the End Date to Fixed Period after the Charge is triggered with a time period of 3 months .


The charge ends on November 30, 2016.

The following example shows a case where the fixed period extends past the subscription end date:

-   A subscription ends on October 31, 2026.

-   In August, you trigger a charge to bill on September 1, 2026 and set the End Date to Fixed Period after the Charge is triggered with a time period of 3 months .


The charge ends on October 31, 2026 when the subscription ends rather than on November 30, 2026.

But if your subscription is renewed:

-   You renew your subscription before October 31, 2026.

-   Set the end date for the renewal term to October 31, 2027.


The charge ends on November 30, 2026.

## Specific End Date

The charge ends on a specific date after the charge trigger date. But pay attention to the following scenarios:

-   If the subscription ends before the specific end date, the charge ends when the subscription ends.

-   If the subscription is renewed before the initial end term and renewal term ends after the specific end date, the charge will end on the specific end date.


If you select Specific End Date , specify a date to end the charge. This option is available when creating a subscription, editing a subscription in `Draft` status, or creating a New Product amendment.

The following example shows the charge ends on a specific date:

-   A subscription ends on December 31, 2026.

-   In August, you trigger a charge to bill on September 1, 2026 and set Specific End Date to November 17, 2026.


The charge ends on November 17, 2026.

The following example shows a case where the specific end date past the subscription end date:

-   A subscription ends on October 31, 2026.

-   In August, you trigger a charge to bill on September 1, 2026 and set Specific End Date to November 17, 2026.


The charge ends on October 31, 2026 when the subscription ends rather than on November 17, 2026.

But if your subscription is renewed:

-   You renew your subscription before October 31, 2026.

-   Set the end date for the renewal term to October 31, 2027.


The charge ends on November 17, 2026.

## Billing Day

The Bill Cycle Day (BCD) and Billing Day are not specific dates but rather a recurring day of the month such as "1st of the month," "15th of the month," or "Last day of the month." The BCD is set in the Customer Account. The Billing Day is set in the Product Catalog and overrides the BCD. You can also set the Bill Day in the Subscription Rate Plan Charge and thus further override the Billing Day in the Product Catalog.

For example, when a Billing Cycle Day is specified on the customer account, all of the subscription charges contained within that customer account will be billed on that day of the month (if charges are due) except the subscription charges that have their own Billing Day. The Billing Day for the charge can be either inherited from the product rate plan charge or set when the charge is created.

When adding a subscription rate plan charge to a subscription, you can override the default billing day for that charge (the default value is set in the product catalog) and instead select one of the following billing days:

## Default from Customer Account

Subscription rate plan charges that have the billing day set to Default from Customer Account will be billed on the Bill Cycle Day indicated on the invoice owner account.

## Specific Day of the Month

Subscription rate plan charges that have the billing day set to Specific Day of Month will be prompted to select a day of the month and will be billed each month on that specific day.

This setting overrides the customer account BCD.

## Subscription Start Date

Subscription rate plan charges that have the billing day set to Subscription Start Day will be billed on the day of the month on which the subscription begins. For example, if the subscription starts on September 15, 2012 and it is a monthly charge, the billing day for the charge will be the 15th of each month, and it will bill for the full month. If it is an annual charge, the billing day for the charge will be September 15th of each year, and it will bill for the full year.

## Charge Trigger Day

Subscription rate plan charges that have the billing day set to Charge Trigger Day will be billed on the day of the month specified by the charge's Trigger Condition. The charge's trigger condition can be set to Upon Contract Effective , Upon Service Activation , Upon Customer Acceptance , or a Specific Date .

After a charge is created, you cannot modify the subscription rate plan charge’s charge trigger day. Also, all charge segments of a charge share the charge trigger day of the first charge segment. For example, a monthly charge in an evergreen subscription has the charge trigger day as October 1st and the price as $10 per month. Then you update the price to $20 per month from October 15th. For the first charge segment, the charge start day is October 1st and the charge trigger day is October 1st. For the second charge segment, the charge start day is October 15th, and the charge trigger day remains October 1st. Therefore, if you set the charge’s billing day as Charge Trigger Day, both charge segments and any future charge segments of this charge will be billed on the first day of a month.

## Term Start Day

Subscription rate plan charges that have the billing day set to Term Start Day will be billed on the day of the month on which the term starts. This supports recurring charges only.

## Term End Day

Subscription rate plan charges that have the billing day set to Term End Day will be billed on the day of the month on which the term ends. This supports recurring charges only.

## Specific Day of Week

Note:

This feature is in the Early Availability phase. If you want to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com/hc/en-us).

Subscription rate plan charges that have the billing day set to Specific Day of Week will be prompted to select a day of the week and will be billed each week on that specific day. This option is only applicable for weekly based billing period. You can only set weekly based billing period in the Product Catalog.

## Billing Timing

Billing Timing lets you choose to charge your customers in advance or in arrears when using a recurring charge type. The default setting for recurring charges is billing in advance.

## Billing Period Alignment

Use Billing Period Alignment to align charges within the same subscription if two charges begin on different dates. Set this option in the product rate plan recurring charges under Timing and Frequency of Charge or within the product rate plan Usage Charges under the Timing of Charge . You can select from one of three available billing period alignment options: align to charge, align to subscription start, and align to term start.

The billing charge alignment option "anchors" your quarterly, semiannual, or annual charges. If you select the same option for your charges and these charges have the same Billing Day, you can guarantee that charges added to the same subscription on different dates will have their billing periods aligned.

## Align to Charge

Select align to charge to begin the billing period on the bill cycle day on or after the charge trigger date. If you select align to charge, each charge will bill on its own schedule. A charge will not align with other charges within the subscription.

## Align to Charge: Example 1

If a charge is triggered on October 20, and the billing day is the 1st, the first full quarterly period is November 1 to February 1 of the following year.

## Align to Charge: Example 2

If a charge is triggered with the following settings:

-   Charge starts on October 12 (Tuesday)

-   The billing period is set to Week

-   The billing day is set on every Monday


The first full week period is from October 18 (Monday) to October 24 (Sunday).

## Align to Subscription Start

Select this to align all billing periods to the bill cycle day on or after the subscription start date. This option uses the beginning of the subscription as the anchor. If you select this option, your charges will be aligned as soon as they are triggered.

## Align to Subscription Start: Example 1

A subscription begins on January 1, with two quarterly charges: Charge A begins on January 1 and Charge B begins on February 1. Charge A is billed for the quarterly period of January 1 through March 31. When Charge B becomes effective on February 1, Charge B will be billed for a prorated period of February 1 through March 31 (prorated from January 1), so that it aligns itself with Charge A as of the next billing period (beginning April 1). The subsequent invoice will bill for both Charge A and Charge B for the second quarter, from April 1 through June 30.

If you did not align the charges, you would have two quarterly charges that are offset by one month, which could confuse your customer.

## Align to Subscription Start: Example 2

If a subscription with a quarterly charge model has a start date of June 15, 2011 and the Billing Day is the 1st of the month, then the quarterly billing periods will start on July 1st, October 1st, January 1st, and April 1st (and June 15 through June 30 will be prorated). If another charge begins billing on October 20, 2011, the first invoice will be prorated from October 20, 2011 to December 31, 2011, and the first full quarterly period for that charge is from January 1, 2012 through April 30, 2012.

## Align to Subscription Start: Example 3 (Weekly Based Billing Period)

Note:

Weekly based billing period is in Limited Availability . If you wish to have access to this feature, submit a request at Zuora Global Support .

A subscription begins on January 1, with two charges that are billed for every four weeks:

-   Charge A begins on January 1 (Monday)

-   Charge B begins on January 4 (Thursday)


Charges are billed on invoices in the following way:

-   Charge A is billed for the four-weeks billing period first from January 1 (Monday) through January 28 (Sunday).

-   When Charge B becomes effective on January 4 (Thursday), Charge B is billed for a prorated period of January 4 through January 28 (Sunday), then it aligns itself with Charge A for the next billing period.

-   The subsequent invoice bills for both Charge A and Charge B for the four-weeks billing period from January 29 (Monday) through February 25 (Sunday).


## Align to Term Start

Select this option to align all periods to the bill cycle day on or after the current term start date. This option uses the term start date as the anchor. Charges will be billed on their own schedule until the subscription reaches the end of term and renews. Once the subscription renews, the billing period for these charges will be aligned.

## Align to Term Start: Example 1 (Quarterly Billing Period)

A ten-month subscription begins on January 1, 2018 with two charges are billed quarterly without subscription renewal:

-   Charge A is triggered on January 1, 2018

-   Charge B is triggered on February 1, 2018


The billing day is based on the subscription start day. The term start date is on January 1, 2018.

Charges are billed on invoices in the following way:

-   Charge A is billed quarterly through the subscription term.

-   Charge B is billed for a prorated period (02/01/2018 - 03/31/2018) so that it aligns itself to the term. Then this charge is billed quarterly through the subscription term.


## Align to Term Start: Example 2 (Quarterly Billing Period with Subscription Renewal)

A ten-month subscription begins on January 1, 2018 with two charges are billed quarterly:

-   Charge A is triggered on January 1, 2018

-   Charge B is triggered on February 1, 2018


The billing day is based on the subscription start day. Later you renew the subscription for three months, then the current term is the three-month renewal term. The term start date is on November 1, 2018.

Charges are billed on invoices in the following way:

-   Charge A is billed for a prorated period (01/01/2018 - 01/31/2018) so that it aligns itself to the current term. Then this charge is billed quarterly through the subscription term.

-   Charge B is billed for a prorated period (02/01/2018 - 04/30/2018) so that it aligns itself to the current term. Then this charge is billed quarterly through the subscription term.


## Align to Term Start: Example 3 (Weekly Billing Period)

A one-month subscription begins on January 1, 2018 (Monday) with a charge is billed for every two weeks. The billing day is based on the subscription start day (Monday). later you renew the subscription for two months, then the current term is the two-month renewal term. The term start date is on February 1, 2018.

The charge is billed for a prorated period (01/01/2018 - 01/07/2018) so that it aligns itself to the current term (starting on February 5, 2018, Monday). Then the charge are billed for every two weeks through the subscription term.

## Align to Term End

Select this option to align the billing periods of the charges based on the Term End Day and the specified billing cycle. This option uses the term end day as the anchor to determine the billing days.

This option enables you to create subscriptions with partial period . This supports recurring charges only.
