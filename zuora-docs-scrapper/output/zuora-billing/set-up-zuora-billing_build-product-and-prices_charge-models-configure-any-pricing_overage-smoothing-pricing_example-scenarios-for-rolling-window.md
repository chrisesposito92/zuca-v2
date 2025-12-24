---
title: "Example scenarios for rolling window"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/example-scenarios-for-rolling-window"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:47.616Z"
---

# Example scenarios for rolling window

Explore how to set up rate plans for a monthly service with a rolling window model, including overage charges and billing options.

Suppose you provide a monthly service:

-   $50 per month includes up to 500 minutes free talk each month.

-   If the usage exceeds 1500 minutes in a three-month period, pay overage $0.1 per minute.


You can set the following rate plans for your service:

-   Create a recurring rate plan and set the flat rate of $50 per month.

-   Create an overage monthly rate plan.

    -   Set Included Units to 500 minutes.

    -   Set List Price to $0.1.

    -   Select Month from the Billing Period list.

    -   Select Rolling Window from the Smoothing Model list.

    -   Type 3 in the Number of Periods field.

    -   Select an option in the Overage Option When Smoothing area.


If a customer subscribes your service for a year, the charges will vary according to the overage option you choose. The following two examples show how the rolling window works with these two overage options.
