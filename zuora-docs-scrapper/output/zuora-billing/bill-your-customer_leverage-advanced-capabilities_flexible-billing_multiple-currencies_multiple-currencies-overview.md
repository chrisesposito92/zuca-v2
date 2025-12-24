---
title: "Multiple Currencies overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/multiple-currencies/multiple-currencies-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:45.685Z"
---

# Multiple Currencies overview

The Multiple Currencies feature allows businesses to manage transactions in any currency, enhancing customer experience by offering flexibility and personalization in transaction currency choices.

With the Multiple Currencies feature, you can manage transactions in any currency, regardless of your customer's default currency. This feature allows you to offer your customers a more customized and seamless experience so that they can choose the transaction currency according to their preferences.

With the Multiple Currencies feature, your business can target broader customers. Your customers can have the flexibility of transacting in their preferred currency. You can create transactions in any currency, regardless of your customer’s default currency, including:

-   Specify a currency when creating a subscription.
-   Specify a currency when creating an order line item through API.
-   Specify a currency when creating a standalone invoice, credit memo, or debit memo.
-   Specify a currency when creating an unapplied payment.

This feature ensures a smoother and more personalized experience, leading to increased satisfaction and stronger customer relationships.

## How Multiple Currencies works

With the Multiple Currencies feature, you can flexibly conduct transactions with your customers in their preferred currency. When selling your products and services to international customers, the process is made simple. First, define your products in multiple currencies to align with your customer base. Then, you sign contracts with your customers using their local currencies or their preferred currencies. If a customer account holds multiple subscriptions with varying currencies, separate invoices are generated according to the currency used. Ultimately, your customers have the flexibility to pay in their preferred currency.

The following diagram shows you how this feature works from pricing, subscription creation to payment collection.

![Multiple currencies overview](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cf04a094-557b-41f8-af32-cf0f74a72952?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNmMDRhMDk0LTU1N2ItNDFmOC1hZjMyLWNmMGY3NGE3Mjk1MiIsImV4cCI6MTc2NjY4Nzk4MywianRpIjoiNTE2YjdkNzc5NTMyNDQwOGJkMDg2NTY2OGFlMWIxNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FdhXm6jWrb6wLbIz_wPRFsdbisxCsl4wv1ykHese3OU)

As shown in the diagram, you define prices for your services in multiple currencies such as USD, JPY, and CAD. Your customer operates in various countries and prefers to purchase your services in a local currency. Suppose you have created the following subscriptions under an account for your customer:

-   Subscription 1 contains a charge with a monthly price of $200 (USD).
-   Subscription 2 contains a charge with a monthly price of $100 (USD).
-   Subscription 3 contains a charge with a monthly price of ¥1000 (JPY).
-   subscription 4 contains a charge with a monthly price of $150 (CAD).

After the subscription creation, you can view the monthly recurring revenue (MRR) of the subscriptions in different currencies that are displayed as key account metrics. For subscriptions 1 and 2, the total amount of these two subscriptions is displayed under the account.

When you bill the subscriptions, Zuora consolidates invoice items 1 and 2 corresponding to subscriptions 1 and 2 into invoice 1 because of the same USD currency. Invoices 2 and 3 are respectively generated for subscriptions 2 and 3 in different currencies. Payments 1, 2, and 3 are respectively processed in different currencies corresponding to invoices 1, 2, and 3. You can view the account-level metrics with totals in each currency. For example, the total balance of all posted invoices in USD is $300.

## Restrictions and limitations

When using the Multiple Currencies feature, keep the following restrictions and limitations in mind:

-   The following features are temporarily incompatible with the Multiple Currencies feature:
    -   Invoice Adjustment
    -   Invoice Item Adjustment
    -   Credit Balance
    -   Payment Schedules
-   The Order to Revenue feature is supported, while Billing - Revenue Integration is unsupported.
-   NetSuite Connector does not support the Multiple Currencies feature.
-   The Previous Transaction component is unsupported for HTML templates .
-   The previous transaction data for Word mail merge templates is unsupported, including:
    -   Previous Transaction fields
    -   `PreviousTransactionImpactTotal` field on the Account object
    -   `PreviousTransactionStartAmount` field on the Account object
-   The Subscribe and Amend actions are unsupported.
-   Once the create subscription order action is completed, you cannot change the currency. You must cancel the current subscription, and create another subscription with your preferred currency.
-   Lockbox does not support the Multiple Currencies feature.
