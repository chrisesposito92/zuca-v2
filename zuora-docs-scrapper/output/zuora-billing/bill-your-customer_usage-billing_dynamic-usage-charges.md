---
title: "Dynamic Usage Charges"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/dynamic-usage-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:52.405Z"
---

# Dynamic Usage Charges

The Dynamic Usage Charges feature allows billing based on actual product or service usage without subscriptions, with dynamic pricing updates reflected in customer bills.

With the Dynamic Usage Charges feature, you can bill your customers for standalone usage charges directly attached to their accounts without managing subscriptions. This means that you can charge your customers based on how much of a product or service they use without requiring them to subscribe to a product or service. Also, the change in product pricing can be dynamically reflected in the bills for all of your customers without having to modify subscriptions.

The Dynamic Usage Charges feature is supported end-to-end by the Order to Revenue feature.

## Availability

The Dynamic Usage Charges feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early availability program, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/). You need to turn on the Unbilled Usage feature from the self-service interface.

## Use case and functions

You can use dynamic usage charges to charge your customer directly by usage with dynamic pricing.

The prerequisites for using a dynamic usage charge are as follows:

-   There should be an existing account.

-   There should be a regular usage charge defined in the product catalog.


You do not create subscriptions or orders to create a dynamic usage charge. Instead, you create a dynamic usage charge directly from the product catalog by uploading a usage record with a product rate plan charge number specified. You can upload a usage record through the UI or using APIs. For more information, see [Import usage data](/zuora-billing/bill-your-customer/usage-billing/import-usage-data) and [CRUD: Create a usage record](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTUsage/).

If a dynamic usage charge of the same product type exists in the account, the uploaded usage record will be guided to the existing dynamic usage charge.

As the dynamic usage charge is a standalone usage charge directly attached to an account, you can run a bill run from the account to bill the dynamic usage charge.

If you update the price of the product rate plan charge in the product catalog, the updated price will take effect for the usages that are uploaded after the price change. Run a bill run for the newly uploaded usage, and you can see that the price change will be reflected in the invoices for all those customer accounts that have the corresponding dynamic usage charges attached.

## Billing day of dynamic usage charge

The billing day of a dynamic usage charge is determined by that of the corresponding product rate plan charge, in the following manner:

-   The billing day of a dynamic usage charge is the Billing Cycle Day (BCD) for the customer account when the billing day of the corresponding product rate plan charge is one of the following values:

    -   Default from Customer Account

    -   Subscription Start Day

    -   Charge Trigger Day

-   The billing day of a dynamic usage charge is the same as that is set for the corresponding product rate plan charge when the billing day of the corresponding product rate plan charge is one of the following values:

    -   Specific Day of Month

    -   Specific Day of Week


## Expectations

The Dynamic Usage Charges feature has the following expectations:

-   Currently, you cannot view, update, or remove a dynamic usage charge. The functions will be available in future releases.

-   You cannot change the billing day of a dynamic usage charge.

-   When the billing day of a dynamic usage charge is the BCD for the customer account, you cannot set the BCD for that account to Auto-set.

-   You cannot change the price of a dynamic usage charge in the middle of a billing period.

-   The Dynamic Usage Charges feature is not supported by the following:

    -   The Billing-Revenue integration feature.

    -   The Legacy Z Revenue feature.


-   The following usage charge models are not supported for a dynamic usage charge:

    -   High Water Mark Pricing
    -   Pre-Rated Pricing
    -   Multi-Attribute Pricing
-   The effective start date of a dynamic usage charge is determined by the earliest among the account’s creation date, usage’s start date, and the billing day of the dynamic usage charge. Therefore, you cannot upload a usage record for an existing dynamic usage charge if the further usage’s start date is earlier than the effective start date of the existing dynamic usage charge.
