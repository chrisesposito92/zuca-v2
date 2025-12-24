---
title: "Terms and conditions of subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/terms-and-conditions-of-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:24.296Z"
---

# Terms and conditions of subscriptions

This topic explains how to change the terms and conditions of subscriptions, including extending or shortening terms and handling future-dated amendments.

Note:

Creating and amending subscriptions in the Zuora Billing UI is:

-   Only relevant for existing Subscribe and Amend customers who have not transitioned to Orders or Orders Harmonization . Any new customers will not see this UI.

-   Restricted if you are an existing Subscribe and Amend customer and have enabled Order Metrics only. See Known Limitations in Orders and Order Metrics .


## Overview

Changing the terms and conditions allows you to extend or shorten the initial term or renewal term of the subscription. You can also autorenew a subscription in advance of the subscription's autorenewal date.

This amendment cannot be used to change the term start date. Although the amendment detail has a field to amend the value for Current Term Start Date, the amended date will only affect the initial term's end date. This does not affect the initial term start date. For example, if you create a subscription that has an initial term of twelve months with a term start date of 1/1/2009, and then amend the current term start date to 2/1/2009, your current term end date will be changed from 1/1/2010 to 2/1/2010. This effectively extends the subscription term by one month.

Use the following steps to change the terms and conditions on a subscription. Follow these steps for each subscription you want to change.

## Using the Zuora API to Change Subscription Terms and Conditions

See Changing the Terms and Conditions and follow the instructions based on your WSDL version.

## Terms and Conditions﻿ changes with Future-dated Amendments on Subscription

You can change terms and conditions when certain types of future-dated amendments exist on the subscription.

See Future-dated Amendments for more information about supported types of future-dated amendments.
