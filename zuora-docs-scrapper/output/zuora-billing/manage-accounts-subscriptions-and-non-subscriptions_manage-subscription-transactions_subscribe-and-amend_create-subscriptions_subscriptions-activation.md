---
title: "Subscriptions activation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/subscriptions-activation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:33:53.986Z"
---

# Subscriptions activation

This article explains how to activate subscriptions by entering the necessary billing trigger dates and manage active and expired statuses for optimal recurring revenue.

A subscription must be active before you can bill your customers for that subscription.

Activating a subscription requires entering one, two, or three of the billing trigger dates: contract effective, service activation, and customer acceptance date. See Billing Trigger Dates for more information.

## Active subscriptions and statuses

Subscriptions will stay in the Active state until they are canceled.

A subscription is given the Expired status when you create amendments. The previous version of the subscription is set to Expired, while the current version is set to Active. The new version will remain Active unless you create another amendment (creating a newer version of the subscription), or if you cancel it.

There are two kinds of Active subscriptions: Within a term and Out of a term. You can use the All Subscriptions list in the Views area on the All Subscriptions page to filter the list of subscriptions.

These filters help you check subscriptions that should be renewed.

The goal of a subscription-based vendor is to never have any Expired recurring revenue. Ideally, all of your customers will continue on either their Evergreen or Auto-Renew subscriptions indefinitely, or consistently renew their termed Subscriptions. For a healthy recurring revenue business, new revenue continuously compounds on top of recurring revenue for maximum linear or logarithmic business growth.

## Viewing active subscriptions

If you export all active subscriptions, the export will also include out-of-term non-renewing subscriptions. However, you can use Data Source Exports or Zuora Reporting to add filters to export all subscriptions that are Active and Within Term.

From Data Sources, add the Subscription:Term End Date on the field selection to identify which subscriptions are technically Active (subscriptions that are within term).

Using Data Sources, you can generate all Active/Within-term or Out-of term-subscription/Active by using Subscription objects. Query on `Subcription.Name` and add the following filters:

`Subscription.Status = Active` `Subscription.Term End Date => Current Date`

To query out-of-term subscriptions, replace the greater than or equal to operator ( `=>` ) with the less than operator ( `<` ):

Subscription.Term End Date < Current Date

## Dates required to activate subscription

Your business may not require the use of all three dates, but instead require the use of two out of three dates, or just one of the dates. If only one date is used, that date must be the contract effective date.

The required trigger dates can vary by product and can be configured using the Default Subscription Settings . If your company's default subscription settings have Require Customer Acceptance of Orders? or Require Service Activation? set to Yes, you must enter those dates to fully activate the subscription. If either of these options are marked No, the applicable date (customer acceptance or service activation) will be made to match the contract effective date.

Note:

Often the contract effective date (or the date that triggers the subscription charges, such as the service activation date or customer acceptance date) lines up with the bill cycle day specified in the customer account. When the two dates align, your customer will be billed on the anniversary date of subscription activation. This is known as "anniversary billing."

You can also set these dates in the Zuora API. See the Subscription object for information about setting the ContractAcceptanceDate , ContractEffectiveDate , and ServiceActivationDate values to activate a subscription.
