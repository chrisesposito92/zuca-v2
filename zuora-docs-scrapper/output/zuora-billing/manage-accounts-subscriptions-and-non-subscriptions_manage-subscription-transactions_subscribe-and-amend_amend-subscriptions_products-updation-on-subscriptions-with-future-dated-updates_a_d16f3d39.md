---
title: "APIs - update a product with future-dated Update Product  amendments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-on-subscriptions-with-future-dated-updates/apis---update-a-product-with-future-dated-update-product-amendments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:00.275Z"
---

# APIs - update a product with future-dated Update Product amendments

This topic provides an outline on using the Zuora SOAP and REST APIs to update products on subscriptions, even with future-dated amendments.

You can use Zuora SOAP API and REST API to update a product even when future-dated Update Product amendments already exist on the subscription:

-   For SOAP API, use the SpecificUpdateDate field on the Amendment object, see the Create an UpdateProduct Amendment Before a Future-dated Update use case.

-   For REST API, use the specificUpdateDate field in the Update subscription method.
