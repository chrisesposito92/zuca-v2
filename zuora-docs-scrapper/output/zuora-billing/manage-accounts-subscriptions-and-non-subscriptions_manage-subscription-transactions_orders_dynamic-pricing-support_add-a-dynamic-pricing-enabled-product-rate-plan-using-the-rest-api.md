---
title: "Add a Dynamic Pricing enabled product rate plan using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/add-a-dynamic-pricing-enabled-product-rate-plan-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:43.877Z"
---

# Add a Dynamic Pricing enabled product rate plan using the REST API

Learn how to subscribe to rate plans with dynamic pricing enabled charges using the REST API.

You can subscribe to rate plans with dynamic pricing enabled charges via REST API.

Use the "Create an order" operation to create an order under an existing account:

1.  When subscribing to a rate plan with dynamic pricing charges, you can enter attribute values via the `pricingAttributes` tag at charge level to lookup list price from product catalog in the following order actions.
2.  The attribute values will be used to lookup the charge’s list price and set it as the charge’s sales price if it is not specified.
3.  For the attributes mapped to a Zuora standard object, Zuora retrieves the attribute values from the existing Zuora objects automatically. For more information on understanding pricing attributes mapped to Zuora object fields, refer to this section.
4.  We recommend you not to include such attributes in the `pricingAttributes` tag in the Order payload. If you do include such attributes, in order to ensure data integrity, Zuora will validate it against the latest value in the Zuora objects and return an error if there is any discrepancy.
5.  If the effective date is not provided by the user via `pricingAttributes` tag, its value is set to the order date automatically.
