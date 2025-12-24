---
title: "Auto-Set Option"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/billing-periods-customization/auto-set-option"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:06.598Z"
---

# Auto-Set Option

The Auto-Set Option in Zuora allows the account billing cycle day (BCD) to align with the triggering date of the first recurring charge, simplifying billing processes by automatically setting the BCD for recurring charges.

Use the Auto-set option to allow the account billing cycle day (BCD) to be set to the same day as the triggering date of the first recurring charge on the account. This only applies to recurring charges, and not to one-time or usage charges.

If you use the Auto-set option, Zuora sets the BCD to the triggering date of the first recurring charge, and is not limited to the billing period start days that you have enabled. If you want your accounts to use auto-set, then you do not need to enable specific days of the month. Zuora recommends that you either enable the auto-set option or enable specific billing period start days.

If you are using the API, set the value of the `BillCycleDay` field to `0` to use auto-set.

This feature allows you to align the account BCD and triggering dates of all charges in the subscriptions to the same day. If you do not use this setting, you must change the account BCD manually when the triggering date of the first recurring charge is known.

The following limitations apply to the Auto-Set BCD feature:

-   If Zuora has automatically set the BCD for an account, if a new Subscription is created up with the Charge Trigger set to `Align to Charge` , changing the Charge Trigger Date will not change the Customer Account BCD.

-   Zuora will not allow you to create a Subscription if the Subscription contains only Usage charges that depend on the Account BCD ( `Default from Customer Account` ). In this case, Zuora will not be able to determine the BCD, since the BCD can only be auto-set for recurring charges.

-   Once Zuora has automatically set the BCD, you can edit the BCD and select another date value from the list of possible BCDs. However, you cannot set the customer account back to `Auto-set BCD` .

    See the following table for examples:
    | Initial BCD Value | New BCD Value | Allowed? |
    | --- | --- | --- |
    | Auto-set (blank) | Auto-set (15th) | Allowed |
    | Auto-set (blank) | 10th of the month(specific value) | Allowed |
    | Auto-set (15th) | Auto-set (blank) | Not allowed |
    | Auto-set (15th) | 10th of the month(specific value) | Allowed |
    | 10th of month(specific value) | Auto-set (blank) | Allowed |
    | 10th of month(specific value) | Auto-set (15th) | Not allowed; you can only set this to Auto-set without a specific date value. |

    Click Save in the Customize Billing Period Start Days section to save your selected billing period start days.
