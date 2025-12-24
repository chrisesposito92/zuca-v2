---
title: "Configure attribute-based pricing in Dynamic Pricing screen"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/configure-attribute-based-pricing-in-dynamic-pricing-screen"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:50.414Z"
---

# Configure attribute-based pricing in Dynamic Pricing screen

Learn how to configure attribute-based pricing rules in the Dynamic Pricing screen using decision tables to support various pricing strategies such as region-based and segment-based pricing.

The Dynamic Pricing screen allows you to configure attribute-based pricing rules using a decision table. This enables you to set different prices based on customer context, catalog attributes, or location.

This is especially useful when you want to support region-based pricing, segment-based pricing, contract-specific rates, or tier-level overrides.

To configure attribute-based pricing in the Decision Table screen:

1.  Add complex conditional logic using formulas in the Enter Formula text box. You can select the operator, such as +,-,\*/,(,), or field (USD), from the Select Operator/Field option.
2.  In the Field column, select an attribute, for example, Country (STRING). When you map your uploaded file to these attributes, Zuora (across CPQ and Orders) automatically fetches the corresponding attribute values. This ensures that pricing rules are applied consistently without requiring manual data entry.
3.  Click the = icon and select the conditions from the available options.
4.  In the Price column, enter the output price for the matched condition.
    1.  Automatic effective dating: When you update a condition or price, Zuora automatically applies effective dating in the background. No separate field needs to be configured; existing subscriptions retain the old price, while new subscriptions or transactions use the updated one. For more information, see [Effective Dating](/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/configure-attribute-based-pricing-in-dynamic-pricing-screen/effective-dating).

        Note:

        -   The Effective Date Condition row you see in the UI is generated automatically. It reflects Zuora's effective dating logic and cannot be removed or disabled.

        -   You can update an effective date to a future date, but not to a past date. Attempting to set a past date results in an error.

        -   If you do not explicitly provide an effective date when updating pricing, Zuora automatically applies the current UTC time.


    2.  Minimum and maximum thresholds: You can define min and max price boundaries to ensure the system prevents prices from going below or above the configured limits.For example, suppose Country = US is set to 20 USD. Later, you update the price to 25 USD. Zuora creates a new effective version where the existing US subscriptions continue at 20 USD, while new subscriptions created after the change will be billed at 25 USD. If you configure a Min = 15 USD and Max = 30 USD, the system will validate that any future price updates stay within that range.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/81cdce1a-74a5-48f9-b848-40c39ee25eac?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxY2RjZTFhLTc0YTUtNDhmOS1iODQ4LTQwYzM5ZWUyNWVhYyIsImV4cCI6MTc2NjYzODkwOCwianRpIjoiMTQ3M2QxMTU5NTI4NDY5ZDkzYTI5NTc5MTY0ZmQ3YTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.W5RIOX5QcgleKUy0hsCh1qRcw7sv-vX9UtomRpQK9qA)

    3.  Tier-level minimum and maximum thresholds: You can also define minimum and maximum price boundaries at the tier level. This ensures that each tier of usage or volume pricing remains within the expected range.Example:Tier 1 (1–100 units) = 10 USD per unit (Min = 8, Max = 12)Tier 2 (101–500 units) = 8 USD per unit (Min = 7, Max = 9)If you later update Tier 1 to 13 USD, the system blocks the change because it exceeds the Max = 12 threshold. Similarly, if Tier 2 is updated to 6 USD, it is rejected because it falls below the Min = 7 threshold.
5.  To add more rules, click Add Row.
6.  Click Save once the configuration is complete.
    For a relevant use case, see [Country-Based Dynamic Pricing with Multi-Currency Support.](/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/country-based-dynamic-pricing-with-multi-currency-support).
