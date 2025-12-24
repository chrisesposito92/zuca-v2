---
title: "Triggering conditions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/triggering-conditions"
product: "zuora-billing"
scraped_at: "2025-12-24T04:47:44.947Z"
---

# Triggering conditions

Learn about the trigger conditions that determine when a recurring charge becomes active and starts billing within a product rate plan charge.

Within a product rate plan charge, under Timing and Frequency of Charges , there is a trigger condition that controls when the recurring charge becomes active and starts billing. Note that in the trigger condition, a date exceeding 2100 is not supported.

## Triggering condition types

When setting up your rate plan charge, the following triggering conditions are available

-   Upon Contract Effective : This charge is active on the effective date of the contract that governs the applicable subscription.

-   Upon Service Activation : This charge is active on the date the customer is provided access to the services or products.

-   Upon Customer Acceptance : This charge is active on the date the customer accepts the services or products.

-   Upon a Specific Date: This charge is active on the specified date and billing can start. This trigger is available only from a subscription rate plan charge, not from the product rate plan charge.
