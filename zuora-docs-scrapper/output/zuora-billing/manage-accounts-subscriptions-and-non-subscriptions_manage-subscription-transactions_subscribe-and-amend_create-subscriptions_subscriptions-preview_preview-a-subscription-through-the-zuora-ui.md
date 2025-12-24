---
title: "Preview a subscription through the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/subscriptions-preview/preview-a-subscription-through-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:33:43.733Z"
---

# Preview a subscription through the Zuora UI

This article explains how to preview a subscription with various statuses through the Zuora UI, including setting preview start and through dates, and simulating usage charges.

You can preview a subscription with a draft, active, or canceled status from the Zuora UI.

## QTY for Usage

You can enter usage values in QTY for Usage to simulate usage charge calculation.

See the Tiered pricing example. If you entered 8.5 units that fall into Tier 3, you will see the total fees of $300 displayed in the Subtotal column in the Preview Invoice section as part of the preview result.

Note: You can see the QTY for Usage section only if you added usage-based charges to this subscription, and this functionality is not supported in API.

## Preview Start Date

The start date of the subscription preview.

If you preview a subscription from the reinvented subscription details page, you can specify the preview start date with one of the following options:

-   Start of Term (Default Option)
-   Today
-   Specific Date

## Preview Through Date

The end date of the subscription preview. You can preview the invoice charges through the preview through date.

When you set the preview through date, pay attention to the following scenarios:

-   If the subscription ends after the last invoice date plus 60 months, the latest preview through date you can set is the last invoice date plus 60 months.
-   If the subscription ends before the last invoice date plus 60 months, the latest preview through date you can set is the term end date.

-   If the subscription is not billed through the subscription term, the latest preview through date is the subscription start date plus 60 months.

You can specify the preview through date with one of the following options:

Next Number Billing Periods: This shows you the invoice charges for the next number of billing periods. The preview through date is the last invoice date plus the number of billing periods. If the subscription is not billed through the subscription term, the preview through date is the term start date plus the number of billing periods.

For example:

-   Subscription Start Date: January 1, 2020
-   Subscription End Date: January 1, 2022
-   Billing Period: Month
-   Last invoice date: June 1, 2020
-   Preview Start Date: January 1, 2020
-   Preview Through Date: Next 5 billing periods

The preview through date is on November 1, 2021. You can preview invoice charges from January 1, 2020 to November 1, 2021.

After you specify Next number Billing periods, the preview through date is calculated automatically and displayed in the field under the Specific Date field. The invoice of the next three billing periods is showed by default. You can specify the number of periods to override the default value.

If there are more than two charges in the subscription, Zuora shows the preview through date of the invoice charges based on the shortest billing period of the charge in the subscription. For example, if there is a charge bills for every month and a charge bills for every five weeks, Zuora shows the preview through date of the invoice charges based on the monthly billing period.

End of Term: This shows you what the invoice charges will be through the end of the subscription term. After you select the End of Term option, the preview through date is automatically displayed in the field under the Specific Date field.

Specific Date: This shows you what the invoice charges will be based on the preview through date you specified.
