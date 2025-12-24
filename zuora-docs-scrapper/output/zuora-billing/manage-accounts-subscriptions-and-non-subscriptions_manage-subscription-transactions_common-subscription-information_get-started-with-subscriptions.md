---
title: "Get started with subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/get-started-with-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:17:50.340Z"
---

# Get started with subscriptions

This topic explains about termed and evergreen subscriptions, their settings, and how to manage renewals and cancellations.

## Termed and Evergreen Subscriptions

The Term Setting specifies whether the subscription has a set term until which it expires ( `Termed` ), or whether the subscription does not expire ( `Evergreen` ). Evergreen subscriptions have no end date, which means your customer will be automatically billed until the subscription is canceled. A termed subscription expires after a period specified in the initial term, and can be set to renew for additional renewal terms.

-   An Evergreen subscription never ends and does not require renewals.
-   A Termed subscription has a pre-defined Initial Term, Renewal Setting, Term Start Date, Term End Date, and Renewal Term. You can set term subscriptions to renew automatically (Auto Renew).

The setting defaults to `Termed` , which also populates the Initial Term, Renewal Setting, Renewal Term, and Autorenewal fields. These fields obtain their initial values from your default subscription settings. Use the Define Default Subscription Settings page to configure the default settings.

If you select `Evergreen` as your Term Setting, the Initial term, Renewal Setting, Renewal Term, and Auto Renew fields will not be displayed. Those fields are not applicable for an Evergreen subscription. When specifying your initial term and renewal term, you must use whole numbers. These terms are expressed as a whole number of periods.

The contract effective date for your subscription uses today's date by default. The format is MM/DD/YYYY.

In the Customers > Subscriptions > Export Subscriptions file, the Subscription Term Type column displays the term setting for the subscription. If the term setting is `Evergreen` , the TCV (Total Contract Value) for the subscription will be empty, since TCV cannot be calculated for subscriptions without an end date.

Note:

The Billing - Revenue Integration feature cannot automatically support the conversion from termed subscriptions to evergreen subscriptions or vice versa. You have to manually create new revenue contracts for the converted evergreen subscriptions. Note that the new solution, the Order to Revenue feature does not have this limitation.

## Renew to Termed or Evergreen

If you select `Termed` as your Term Setting, you must configure the Renewal Setting. The Renewal Setting gives you two options:

-   `Renew With Specific Term` -- The subscription remains termed when it is renewed. The subscription will renew for the number of periods you specified for the Renewal Term.
-   `Renew To Evergreen` -- The subscription automatically changes from termed to evergreen when it is renewed. Once the subscription is evergreen, it no longer needs to be renewed.

## Termed and Auto-Renew

A termed subscription with auto-renew enabled will continue to renew indefinitely until you (or your customer) cancels it manually. For example, if your subscription uses Auto-Renew with an Initial Term of 12 months and a Renewal Term of 6 months, after the first 12 months the subscription will be renewed automatically every 6 months.

## How do I handle subscriptions that do not auto-renew at the end of the subscription term?

There are several ways to handle subscriptions that do not auto renew at the end of the subscription term, and the appropriate action depends on whether you want to renew or cancel the subscription.

When a Term subscription that is set to Auto Renew reaches its Term End Date, a Renewal Amendment is automatically created. When a subscription is set to Auto Renew:

-   If the subscription's renewal setting is `Renew With Specific Term`, the subscription will start a new term.
-   If the subscription's renewal setting is `Renew To Evergreen`, the subscription will change to evergreen.

When a Term subscription that is not set to Auto Renew reaches its Term End Date, the subscription enters a status of Out of Term. Zuora does not automatically cancel subscriptions in this state and they will not invoice. Intervention is required to either Renew or Cancel the Out of Term subscription.

## How do I support evergreen subscriptions?

Many subscription businesses, especially those selling to consumers, want to offer evergreen subscriptions. You can think of evergreen subscriptions as "good until canceled" subscriptions, where a subscriber will automatically continue to be charged their recurring subscription fees unless they explicitly cancel their subscription with you. Netflix, Comcast, and SurveyMonkey are well-known examples of businesses that offer evergreen subscriptions.

See How do I support evergreen subscriptions? for detailed information about working with evergreen subscriptions.

## Working with Subscriptions

In addition to specifying the charges for your subscription, when creating a subscription you must also specify the subscription date, which is the date when you would like the charges for your subscription to take effect, and the bill cycle date, which is the day of the month that your customer is to be billed (for example, the fifth of the month). See Dates in Zuora for more information.

Once a subscription has been created, you can make amendments to it. Amendments allow you to make changes to active subscriptions.

When a subscription ends, you can either renew it or cancel it.

Before you can create subscriptions, you must create a product catalog and customer accounts. The product catalog includes the products that are used by subscriptions, and your customers pay for subscriptions.

## Subscription Dates

A subscription can have multiple charges that start on the different dates, so the Next Charge Date and Next Renewal Date fields are available at RatePlanCharge level. In Zuora API, you can access this date through `RatePlanCharge.ChargedThroughDate` field. For example, if a subscription's rate plan charge has been invoiced from 05/01/2012 to 05/31/2012, its `ChargedThroughDate` field would be 06/01/2012.

Every time a new subscription version is created (for example, by a renewal, by updating a product, creating a new product, or removing a product amendment), a new set of rate plan charge records are created with the `OriginalId` that references the original rate plan charge records.

See Subscription and Amendment Dates for more information.

## Subscription Versions

A new subscription version is created when you make amendment to the subscription.

Every time a new subscription version is created (for example, by a renewal, by updating a product, creating a new product, or removing a product amendment), a new set of rate plan charge records are created with the `OriginalId` that references the original rate plan charge records.

## Change the owner of a subscription

You can set separate owners for the subscription and for invoices generated by the subscription. When creating a new subscription, the owners can be specified as the same account (the default setting), or you can select a different customer account for each.

The accounts do not have to have a parent-child relationship configured in Zuora, although that configuration is typically used.

For existing subscriptions, you must create an amendment to set different subscription and invoice owners.

See Change the owner of a subscription for more information about configuring and using this feature.

## Finding Subscriptions

There are two ways to find your subscriptions in Zuora Billing:

-   You can scroll through the accounts in either expanded or list view and look for the one you need.
-   You can use the Search box to search for the subscription number, customer account name, subscription custom fields. The Search box is located on the dashboard on the right-hand side.
