---
title: "Product rate plan charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/example/product-rate-plan-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:24.653Z"
---

# Product rate plan charges

Create and manage rate plan charges with customizable settings for charge model, price, and billing frequency.

Create as many rate plan charges as needed within appropriate product rate plans. Each rate plan charge has its own setting for charge model, price, billing period and frequency, accounting, and so on. The list price you specified when creating a charge is used as the default product charge definition. You can further define other charge definitions to have different prices.

The price lookup formula is defined for the recurring charge based on the Flat Fee charge model. It indicates the `state` custom field on the Product Charge Definition object will be used to identify the target charge definition, and its value will be mapped from the `state` field on the account object.

The one-time charge for the setup fee does not vary by location. This charge does not have the price formula specified, and only the default charge definition exists.

| Name | PRPC Number | Charge Type | Charge Model | Price Formula | List Price |
| --- | --- | --- | --- | --- | --- |
| Membership Fee | PRPC-001 | Recurring | Flat Fee | priceLookup("state__c"= fieldLookup("account", "state__c") | 15.00 |
| Setup Fee | PRPC-002 | One Time | Flat Fee | - | 50.00 |

If the Charge Reuse feature is enabled, you can reuse the same product rate plan charge under multiple product rate plans without the need to duplicate the same charges for different product rate plans. For more information, see the section below.

Note:

The Charge Reuse feature is still in the Beta phase. Please reach out to your account team if you are interested.
