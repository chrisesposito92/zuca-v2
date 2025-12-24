---
title: "Workarounds for changing currencies in customer accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/edit-customer-accounts/workarounds-for-changing-currencies-in-customer-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:16:54.200Z"
---

# Workarounds for changing currencies in customer accounts

This document provides workarounds for changing currencies in customer accounts within Zuora, addressing potential issues and offering solutions for common scenarios.

Zuora does not allow you to change the currency for a customer account after it has been created. For example, you cannot change the currency type in the Currency field of the Billing and Payment Info panel from the Zuora UI.

## Why Zuora Does Not Allow Changing the Currency

If Zuora allows you to change the currency for a customer, it would likely result in the customer account and its underlying subscriptions getting into an inconsistent state. For example:

-   The customer account has a payment gateway associated with it. An error might occur if the payment gateway does not support the new currency.
-   The customer account has one or more subscriptions associated with it. When you first created a subscription for a customer, you specified the subscription pricing in that customer currency for example, 15 US dollars per month. If you simply change the currency for that customer, for example, from US dollars to Euros, Zuora will not know what price to charge the customer in the new currency.
-   If you want to change the currency after you invoiced the customer and collected payments in the original currency, what should be done to all of these historical invoices and transactions? Moreover, if you collect a payment in US dollars and Zuora allowed you to then change the customer currency to Euros, what would it mean when issuing a refund in Euros if the original payment was in US dollars?

## Possible Workarounds

This section describes two common use cases and the workarounds you can use:

-   Flexible Billing Multi-Currency . Your customers can have the flexibility of transacting in their preferred currency. You can create transactions in any currency, regardless of your customer’s default currency, including:
    -   Specify a currency when creating a subscription
    -   Specify a currency when creating a standalone invoice, credit memo, or debit memo
-   You made a mistake when creating a customer account . When you originally created the customer, you might have simply made a mistake and selected the wrong currency. In this case, you can cancel or delete the problematic customer account and then create a new one with the correct currency.
-   A subscriber relocates to a new country and really wants to be billed in a different currency . In this case, you can follow the solution below: When you activate this new subscription, the customer will start being billed in the new currency.
    1.  Cancel the original subscription for the customer, so the customer is no longer billed in the old currency. Do not to delete the original customer account or subscription, because you might want to keep the historical data for that subscription such as, invoices, payments, and refund history within Zuora.
    2.  Create a new customer account for this subscriber and select the new currency to be used.
    3.  Add a subscription for this new customer account, with pricing defined in the new currency.
