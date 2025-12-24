---
title: "Workflow"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/workflow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:11.832Z"
---

# Workflow

Learn how to build a product catalog with Attribute-based Pricing, including creating products, rate plans, and charge definitions, and subscribing customers to rate plans.

When you build your product catalog with Attribute-based Pricing enabled, the major steps to build your product catalog are outlined as follows:

1.  Create a product .
2.  Create product rate plans for the product .
3.  Add rate plan charges to the product rate plan.
4.  For each rate plan charge, create as many charge definitions as needed to build the attribute-based pricing structure.
5.  Subscribe to the product rate plan for your end customers in the same way as before.

    -   When an order or order preview is submitted either from the UI or with REST APIs, Zuora Billing automatically determines the valid charge definition to be associated with the subscription. This automated process is done by the price lookup function .

    -   When the order or order preview is submitted with REST API, if the price lookup function fails, the [Create an order](https://developer.zuora.com/api-references/api/operation/POST_Order/?_gl=1*1no9ljp*_gcl_au*MzA3MDYwMTc2LjE3NTY3MjY5ODE.*_ga*MTUxMTcwNjg5MS4xNzU4NTU3NjA1*_ga_MY8CQ650DH*czE3NTk1NjIyOTkkbzE3OCRnMSR0MTc1OTU2MjM2MCRqNTkkbDAkaDYxMjU2MzczNA..) or [Preview an order](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrder/?_gl=1*h5eu6d*_gcl_au*MzA3MDYwMTc2LjE3NTY3MjY5ODE.*_ga*MTUxMTcwNjg5MS4xNzU4NTU3NjA1*_ga_MY8CQ650DH*czE3NTk1NjIyOTkkbzE3OCRnMSR0MTc1OTU2MjM2MCRqNTkkbDAkaDYxMjU2MzczNA..#!path=previewOptions&t=request) operation will return an error.

    -   For Subscribe and Amend tenants, you can use the charge definitions defined by the Attribute-based Pricing feature to override the charge information specified in the subscribe() call.


6.  (Optional): Use Dynamic Offers with Attribute-based Pricing.
