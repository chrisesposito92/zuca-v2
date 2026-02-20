---
title: "Pre-configuration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/pre-configuration"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:43.635Z"
---

# Pre-configuration

Create a demo rate plan with a recurring License Fee charge, define pricing attributes, and configure dynamic pricing using the Product Catalog UI.

Create a rate plan, Demo Rate Plan 1 with one recurring per Unit charge, License Fee. Define the following pricing attribute for License Fee.

| Pricing Attribute Name | Description | Category | Mapping Relationship / Data Type |
| --- | --- | --- | --- |
| SubscriptionRenewalTerm | The term length for subscription renewal. | Mapped | {"field": "RenewalTerm", "object": "subscription"} |
| AccountType | The account type. | Mapped | {"field": "Type__c", "object": "account"} |
| SubscriptionRatePlanClass | The class of the subscription rate plan. | Mapped | {"field": "RateClass__c", "object": "rateplan"} |
| Site_Size | The size of the site. | External | Integer |
| EffectiveDate | The effective date of the price. | Default | Datetime |

Configure the License Fee dynamic pricing decision table on the Product Catalog UI as follows:

![License fee](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2a07769e-6d8c-4419-8075-9431d94ac5bf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhMDc3NjllLTZkOGMtNDQxOS04MDc1LTk0MzFkOTRhYzViZiIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiODJhYWZlMmZhOTAwNGQ4NWIzZjViNWEzZGZlYjYzZTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.SGZNFUzECGqve5GH-WfgzDULtyAi1ABbnvgBY57Kzqk)

Note:

In the examples below, we assume the parent Account's custom field, Type\_\_c = "VIP"
