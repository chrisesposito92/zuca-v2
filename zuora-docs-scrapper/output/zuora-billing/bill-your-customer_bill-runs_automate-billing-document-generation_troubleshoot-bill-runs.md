---
title: "Troubleshoot bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/troubleshoot-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:55.257Z"
---

# Troubleshoot bill runs

Troubleshoot bill runs by checking bill cycle days, triggering conditions, autorenew settings, and rating details.

## Bill Cycle Day

Check to see whether the Bill Cycle Day (day of the month) is less than the day of the month for your bill run's target date.

For example, if your bill run has a target date of 3/1/11 and the customer you invoiced has a bill cycle day set to be the 15th of the month, the invoice for this customer will not be generated until you set your bill run's target date to be 3/15/11. (This assumes that you have invoiced (and posted) this customer through the last period (through 2/15/11 if they are on a monthly billing period).

See [Customer Account Dates: Bill Cycle Day](/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/customer-account-dates-bill-cycle-day) for more information on the bill cycle day.

## Triggering Condition for the Subscription Charge

When setting up rate plans, you will specify triggering conditions for your charges. See [Triggering Conditions](/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/triggering-conditions) for more information. When you create a subscription, you can also override the default triggering condition for any charge. Check the triggering condition for the subscriptions you are billing for and ensure that your bill run's target date is on or after your subscription's triggering condition's date.

For example, if your triggering condition is contract effective and the contract effective date for your subscription is 3/15/11 but your bill run's target date is 3/1/11, then you will not see an invoice generated until you set your bill run's target date to be 3/15/11.

## Autorenew

Because the autorenew setting was set to no, you can create a Terms and Conditions amendment to change the setting to yes. [See Renewal (amendments)](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions) and [Renewing Subscriptions Automatically](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/automatic-subscriptions-renewal) for more information.

## Rating Details

If a bill run fails during the rating and billing process of the usage charges with the Pre-Rated Pricing or Multi-Attribute Pricing charge models, see [Retrieve rating details about usage charges or records](/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/retrieve-rating-details-about-usage-charges-or-records) for more information.
