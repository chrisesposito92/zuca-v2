---
title: "Pre-configuration - Negotiated Price Table"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/managing-negotiable-price-table-for-usage-charges/pre-configuration---negotiated-price-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:01.423Z"
---

# Pre-configuration - Negotiated Price Table

This topic explains how to create and configure usage charges with specific pricing attributes for a negotiated price table.

Create the usage charge with the following pricing attributes:

| Pricing Attribute Name | Description | Category | Mapping Relationship / Data Type |
| --- | --- | --- | --- |
| AccountType | The account type. | Mapped | {"field": "Type__c", "object": "account"} |
| UsageState | The state associated with the usage record. | Mapped | {"field": "state__c", "object": "usage"} |
| SubscriptionRatePlanChannel | The sales channel of the rate plan. | Mapped | {"field": "Channel__c", "object": "rateplan" } |
| Age | The end user's age. | External | Integer |
| CustomerReference | Reserved attribute to enable negotiated price table. | Reserved . | String |
| EffectiveDate | The effective date of the price. | Default | Datetime |

Configure the usage charge's standard price table as follows:

![NPT1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eabc35b9-9575-4b63-bbd8-fbb8696b64fe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVhYmMzNWI5LTk1NzUtNGI2My1iYmQ4LWZiYjg2OTZiNjRmZSIsImV4cCI6MTc2NjY0MDcxOSwianRpIjoiMDc3Y2VkZGIyNGEyNDM2MzhlM2Q5NzRjMmQ3YWJjYjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Tvb9MA-G8H2oZ5fO2EviqowLpYFCm8-T2mZvzDgnWK0)
