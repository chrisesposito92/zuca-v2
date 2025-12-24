---
title: "Multiple Currencies use cases"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/multiple-currencies/multiple-currencies-use-cases"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:55.753Z"
---

# Multiple Currencies use cases

This topic provides some typical use cases for the Multiple Currencies feature.

## Support Multiple Currencies on a single billing account

Suppose your company sells products and services on an international scale. Your customer has two branches in different countries:

-   One branch in Australia wants to purchase products and services in Australian dollars (AUD).

-   The other branch in the United States wants to purchase the same products and services in United States dollars (USD).


You can maintain your customer records under one single account. The following table lists detailed information about multiple subscriptions, invoices, and payments in different currencies under one account.

| Subscription | Currency | Invoice | Payment |
| --- | --- | --- | --- |
| Subscription S1Charge C1, $100 AUD per month | AUD | INV001Charge C1, $100 AUDCharge C2, $200 AUD | Payment P001: $300 AUD |
| Subscription S2Charge C2, $200 AUD per month | AUD |  |  |
| Subscription S3Charge C3, $200 USD per month | USD | INV002Charge C3, $200 USDCharge C4, $300 USD | Payment P002: $500 USD |
| Subscription S4Charge C4, $300 USD per month | USD |  |  |

You can create some subscriptions in AUD for the Australian branch, and other subscriptions in USD for the United States branch under the single account. When you bill all subscriptions for this account, two invoices are generated for two different currencies, and your customers pay the invoices according to the currency of each invoice. For more information, see [How Multiple Currencies works](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/multiple-currencies/multiple-currencies-overview).

## Switch to the local currency for your customers' subscriptions

In the following two scenarios, you can keep the existing subscriptions with the original currency, and create subscriptions with the local currency:

-   Scenario 1: You decide to localize a particular market. For example, you start selling your service in JPY in Japan instead of USD. You want to maintain your existing subscriptions, which are billed in USD, for customers in Japan. At the same time, you expect to acquire new subscriptions from these customers, but to bill them in JPY. In this case, one customer account has a mix of subscriptions, some billed in USD and the others in JPY. The Multiple Currencies feature comes into play in this scenario, allowing you to handle different currencies within the same customer account and streamline your billing process.

-   Scenario 2: Your company is planning a local currency pricing launch. Currently, all the services are priced in USD. Your customers in Japan purchasing products in USD originally want to switch to JPY. The switch increases the payment collection success rate as local customers can pay with the local currency. To facilitate this transition, you have two options to ensure a smooth switch to the new currency. You can choose one of them based on your specific business requirements.

    -   Cancellation of original subscriptions You can cancel the existing subscriptions in USD and then proceed to create subscriptions in JPY. This approach essentially involves ending the original subscription and starting fresh with a new one in the desired currency.

    -   Discontinuation of renewals for original subscriptions Alternatively, you can stop renewing the current subscriptions billed in USD. Then, you can create entirely new subscriptions in JPY to complete the transition.
