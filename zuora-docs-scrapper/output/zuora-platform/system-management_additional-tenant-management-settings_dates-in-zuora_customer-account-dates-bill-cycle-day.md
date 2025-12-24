---
title: "Customer account dates: Bill cycle day"
url: "https://docs.zuora.com/en/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/customer-account-dates-bill-cycle-day"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:02.696Z"
---

# Customer account dates: Bill cycle day

Describes the bill cycle day (BCD) that determines the day of the month in which your customers are billed.

## Using single or multiple bill cycle days

In Zuora Billing, the BCD can be the same for all customers, or it can vary for different customers. For example, Company A might be billed on the "first of the month" while Company B is billed on the "fifteenth of the month." Some companies choose to have a single bill cycle day for all their customers (for example, first of the month, fifteenth of the month, or even the end of the month). Other customers choose to bill throughout the month (for example, because they do anniversary billing).

## Anniversary billing

To bill the customer on the anniversary of their subscription billing start date, set the BCD to be the same as the contract effective, service activation, or customer acceptance date (use the subscription date that is the trigger for the subscription charges).

As an example of a common use for anniversary billing, if one of your customers signed up on December 26 and set their bill cycle day to "twenty-sixth of the month," there would be no proration charges for this customer. Using this configuration, you can take advantage of billing for prorated charges that result from add-ons to existing subscriptions.

## BCD and proration

If you are not using anniversary billing, the way in which your billing will align with the BCD depends on whether your proration settings are enabled or disabled. You can set proration in the [Zuora billing admin settings](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules).

-   If your proration settings are enabled, your subscription will start billing from the subscription billing start date through the BCD-1 (that is, for a prorated period).

-   If your proration settings are disabled, your first invoice will not generate until the next BCD day, and Zuora will not bill for the first (partial) service period.


For example, if a customer account has the BCD set to the fifteenth of the month and a monthly subscription with a billing start date of March 1:

-   If proration settings are enabled, the account’s first invoice will be from March 1 to March 14, and their second invoice will be from March 15 to April 14. In this case, the subscription aligns with the BCD beginning with the second invoice.

-   If your proration settings are disabled, the account’s first invoice will be from April 1 to April 30, and their second invoice will be from May 1 to May 31. In this case, billing aligns with the BCD beginning with the first invoice, but there is no proration charge for the period from March 15 to March 31.


## End-of-month option

Set the bill cycle day to `EOM` to enable end-of-month (EOM) billing. With EOM billing enabled, you can bill your customer on the last day of any given month. If you are using the API, set the value of the `BillCycleDay` field to `31` to use end-of-month billing.

Zuora correctly calculates the last day of the month. For example, Zuora uses the 31st for January, 28th or 29th for February (depending on whether it is a leap year), and 30th for April.

## Auto-set option

Use the Auto-set option to simplify sign-up by allowing the account BCD to be set to the same day as the triggering date of the first recurring charge on the account.

Do not use this option if you have complex charge types, such as usage charges or multiple charge types. In addition, you can use this option only for initial orders on an account, and not for change orders.

Once auto-set, you must manually change the BCD manually. You cannot have the system auto-set the BCD again.

To enable the Auto-set option for accounts, enable the Auto-set option in the Customize Billing Period Start Days section of .

If you use the auto-set option, Zuora sets the BCD to the triggering date of the first recurring charge, and is not limited to the billing period start days that you have enabled. If you want your accounts to use auto-set, then you do not need to enable specific days of the month. Zuora recommends that you either enable the auto-set option or enable specific billing period start days.

-   For WSDL 30 - 32: Set the value to 0 to automatically set the BCD to the same day as the triggering date of the account's first recurring charge. This auto-set function applies only to recurring charges, not to one-time charges nor usage charges.

-   For WSDL 33+: If you want to automatically set the BCD to the same day as the triggering date of the account's first recurring charge, then set the optional field, `BcdSettingOption` to `AutoSet`, and set the `BillCycleDay` field to null or to 0.


This feature allows you to align the account BCD and triggering dates of all charges in the subscriptions to the same day. If you do not use this setting, you must change the account BCD manually when the triggering date of the first recurring charge is known.

## Auto-Set BCD: Changing BCD and related dates

The following limitations apply to the Auto-Set BCD feature:

-   If Zuora has automatically set the BCD for an account, when a new subscription is created with the charge trigger set to `Align to Charge`, changing the charge trigger date will not change the customer account BCD.

-   Zuora will not allow you to create a subscription if the subscription contains only usage charges that depend on the account BCD (`Default from Customer Account`). In this case, Zuora will not be able to determine the BCD, since the BCD can only be auto-set for recurring charges.

-   Once Zuora has automatically set the BCD, you can edit the BCD and select another date value from the list of possible BCDs. However, you cannot set the customer account back to `Auto-set BCD`. See the following table for examples:

    | Initial BCD Value | New BCD Value | Allowed? |
    | --- | --- | --- |
    | Auto-set (blank) | Auto-set (15th) | Set by the system |
    | Auto-set (blank) | 10th of the month(specific value) | Allowed in the UIUsing the API, you must set BcdSettingOption to AutoSet, and BillCycleDay to a specific value. See Account object for more information. |
    | Auto-set (15th) | Auto-set (blank) | Not allowed |
    | Auto-set (15th) | 10th of the month(specific value) | Allowed |


## Automatic BCD updates based on changing trigger dates

Because the triggering condition and trigger date of the first recurring charge can change before the charge occurs (and the subscription is invoiced), the auto-set BCD value will change when the triggering condition or the trigger date of the first recurring charge changes.

For example: You create a customer account with the BCD set to be auto-set. Next, you create a new subscription with a recurring charge R1. The charge R1 is triggered on the contract effective date, which is set to 1/20/2011. On that date, the customer account BCD value is set to the 20th of the month. Now you want to change the contract effective date to 1/22/2011 due to a last minute delay with the contract. When you change this contract effective date to the 22nd, the account BCD value automatically changes to the 22nd (from its original setting of the 20th). Because of this, automatic change, Zuora will not need to create a 2-day proration for your subscription because of the change to the contract effective date.

You do not need to do anything to activate or use this feature. As described in the example, Zuora applies the change to the BCD automatically.
