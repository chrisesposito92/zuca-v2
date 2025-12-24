---
title: "Using Prepaid Drawdown"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/prepaid-drawdown/using-prepaid-drawdown"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:31.094Z"
---

# Using Prepaid Drawdown

Provides guidance on setting up and using the Prepaid Drawdown app, including prerequisites, examples, and additional information on prepayments and drawdowns.

## Prerequisites

Ensure that the Prepaid Drawdown app has been correctly set up. See Set Up Prepaid Drawdown for more information.

## Examples

To facilitate your understanding of how to set up the prepayment and drawdown charges for different use cases, the examples of the Prepaid Drawdown configurations are provided. See Examples of Prepaid and Drawdown Configuration for more information.

## Additional Information

Prepayments:

-   Prepayments can be either a recurring or a one-time charge depending on the configured charge type.

-   If a prepayment is not recurring, a new rate plan for the prepayment will be needed and added to the subscription.

-   Prepayments can be of any amount and do not have to directly correlate to a particular charge.


Drawdowns:

-   Drawdowns can be applied to any charge but are commonly used for recurring charges.

-   Drawdowns are applied to a charge within the charge configuration when the rate plan is linked to the Prepaid Drawdown app.

-   Drawdown charges usually correlate with the rate plan charge and can be of any amount.
