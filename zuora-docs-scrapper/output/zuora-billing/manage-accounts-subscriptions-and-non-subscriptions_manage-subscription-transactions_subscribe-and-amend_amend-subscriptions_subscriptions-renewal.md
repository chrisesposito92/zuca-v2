---
title: "Subscriptions renewal"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-renewal"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:44.971Z"
---

# Subscriptions renewal

This topic explains how to renew subscriptions in Zuora Billing, including extending terms and handling charges.

Note:

Creating and amending subscriptions in the Zuora Billing UI is only relevant for existing Subscribe and Amend customers who have not transitioned to Orders or Orders Harmonization . Any new customers will not see this UI.

When you renew a subscription, the current subscription term is extended by creating a new term. The number of periods that a subscription is extended is defined by the Renewal Term attributed to the subscription. If any charge in your subscription has the billing period set as `SubscriptionTerm` ，a new charge segment is generated for the new term. For more information, see Define Billing Periods and Segmented rate plan charges (charge segments) . The renewal skips removed charges whatever the `ContractEffectiveDate` is.

Use the following steps to renew a subscription.

## Renew a subscription using the Zuora API

See Renewing a Subscription and follow the instructions based on your WSDL version.

## Amend or cancel a subscription before the renewal term starts

After you have renewed a subscription, you can still create amendments or cancel the subscription before the renewal term starts. See Amend or Cancel a Subscription Before the Renewal Term for more information.
