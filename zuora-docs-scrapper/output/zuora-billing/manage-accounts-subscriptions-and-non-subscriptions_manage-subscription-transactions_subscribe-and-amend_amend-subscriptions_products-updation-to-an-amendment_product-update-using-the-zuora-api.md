---
title: "Product update using the Zuora API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-to-an-amendment/product-update-using-the-zuora-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:43.020Z"
---

# Product update using the Zuora API

This topic explains how to update products using Zuora's SOAP and REST APIs, including handling effective dates and proration settings.

## Product update

You can use Zuora SOAP API and REST API to update a product:

-   For SOAP API, see the Updating a Product use case and follow the instructions based on your WSDL version.

-   For REST API, use the Update subscription method.


Set the contract effective, effective, service activation, and customer acceptance dates to the date you want the product update to take effect.

Most companies make product updates effective immediately during an invoice period.

-   If proration is enabled the next invoice will include a prorated charge for any recurring fees for the partial period and full charges for any usage and one time fees for the partial period.

-   If proration is disabled, the next invoice will only include one time fees for the partial period and will not include and recurring or usage fees for the partial period.


If you want to make product updates effective for the next invoice period or next term, set the contract effective date to the first day of the next invoice period or the first day of the next term.

## Products update with Future-dated Amendments on Subscription

You can update products even when future-dated amendments exist on the subscription. See Future-dated Amendments for more information about supported types of future-dated amendments. See Update a Product on Subscription with Future-dated Updates and Update a Product on Subscription with a Future-dated Remove for detailed information.
