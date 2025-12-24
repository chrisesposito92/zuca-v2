---
title: "HubSpot product synchronization with Zuora Product Catalog"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-product-synchronization-with-zuora-product-catalog"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:19.031Z"
---

# HubSpot product synchronization with Zuora Product Catalog

The product catalog is not synced independently from HubSpot to Zuora through the connector. It is synced simultaneously with the transactional deal sync. Learn about key details and prerequisites for product synchronization.

When a deal is created and synchronized, the connector verifies whether the corresponding product exists in Zuora. The validation checks if the Product.record ID in HubSpot matches any corresponding Externally Managed Plan ID field on any of the product rate plans in Zuora. If the connector locates the product rate plan in Zuora, it uses the charge under the corresponding rate plan; otherwise, it creates a new product with a single rate plan and single charge under it (excluding the discount charges).

![Shows relationship between products and charge](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b2ebb2e4-7e5b-491a-a547-a164601d6090?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyZWJiMmU0LTdlNWItNDkxYS1hNTQ3LWExNjQ2MDFkNjA5MCIsImV4cCI6MTc2NjY1MTE3NiwianRpIjoiMDFjZWJmYTQyMTc5NDBkYWE2N2YzZTYzMTUxNDU2MTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zz3o8t4uBnxbdo_ZRAghoKww8wzHG159ujCWdbIoyxI)

The connector currently only supports creating the products but does not support product updates.

## Guidelines on product catalog in Zuora

Although the connector supports syncing products from HubSpot to Zuora during deal sync, it is recommended that you master the product catalog in Zuora before creating corresponding products in HubSpot.

This method is recommended if you have complex finance, revenue, or specific billing settings in the Zuora product catalog. It would make it easier for the Finance teams and Zuora admins to manage the product catalog. This method is also recommended if you would like to use different charge models and charge types that Zuora natively offers as compared to the more uncomplicated capabilities in HubSpot.

-   General setup

    Once the product catalog is created in both systems, ensure that the record ID of the product in HubSpot is populated on the Externally Managed Plan ID field on the rate plan in Zuora. Each rate plan in Zuora must have the base charge or the charge that is being quoted along with two additional discount charges (Fixed discount and percentage discount types). These discount charges will be used to update the discount value from the deal line items on the Zuora subscription. See supported charges models and type to set up the catalog accordingly.

-   Product bundling

    The connector links the products in HubSpot at the rate plan level in Zuora, which allows for grouping various HubSpot products into a single product in Zuora with a shared SKU and name.


## Supported charge models and types

| Charge model and type | Master required in |
| --- | --- |
| One time per unit | Zuora or HubSpot |
| Recurring per unit | Zuora or Hubspot |
| Recurring flat fee | Zuora |
| Recurring tiered | Zuora |
| Recurring volume | Zuora |
| Usage per unit | Zuora |

## Guidelines on product catalog in HubSpot

-   Setting up Zuora-specific fields

    To sync Zuora-specific product catalog fields from HubSpot, the connector supports mapping fields from the product in HubSpot to the product or rate plan or rate plan charge in Zuora.

-   Default product catalog sync behavior

    The connector creates one flat-structure product in Zuora for every product in HubSpot, with no bundling capabilities.
