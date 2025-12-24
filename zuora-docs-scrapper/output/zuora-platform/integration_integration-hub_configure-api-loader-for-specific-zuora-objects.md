---
title: "Configure API Loader for Specific Zuora Objects"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:49.742Z"
---

# Configure API Loader for Specific Zuora Objects

Learn how to configure the API Loader for various Zuora objects, including Product Catalog, Account&Contact, and Orders, and understand the limitations and requirements for using these loaders.

The API Loader for the following Zuora objects are available in Developer Tools:

-   Product Catalog
-   Account & Contact
-   Subscription
-   Amendment
-   Accounting Period
-   Orders

Note:

The Orders API Loader requires that the Orders feature is enabled in your Zuora tenant. If you want to enable Orders, submit a request at Zuora Global Support.

You cannot use the Amendment API Loader with the Orders feature enabled.

These API loaders have three functions:

-   Export the information on an object from your Zuora tenant.

-   Import a CSV file with detailed information to create new instances of the corresponding object in Zuora.

-   Migrate the object information from one tenant to another.


## Create an API Loader Task

Take the following steps to create a new API Loader task:

-   Click New Task, select the object where you want to export the information, and click API Loader. Taking Product Catalog API Loader as an example, a dialog is then displayed:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d80008fa-de54-457d-bcd4-22dcefdebba2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ4MDAwOGZhLWRlNTQtNDU3ZC1iY2Q0LTIyZGNlZmRlYmJhMiIsImV4cCI6MTc2NjY0MTYwNywianRpIjoiMDVjYjI3ZDVmNjk3NDRkN2FmM2IzYzI0MTViNTYyZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xcejGdGKhNhNc-nZsRqRzmCvnl2S2BhxSAvbQVyzhM8)

-   Complete the following configuration based on the desired run mode. See the following topics for further information:

    -   [Export Object Information](/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/export-object-information)

    -   [Import CSV Files](/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/import-csv-files)

    -   [Migrate Tenant Information](/zuora-platform/integration/integration-hub/configure-api-loader-for-specific-zuora-objects/migrate-tenant-information)


## Limitation

Product Catalog API Loader does not allow you to create products, rate plans, or product rate plan charges using the same name on an existing product.

For example, a product rate plan charge named `TestCharge` already exists on a product. If you want to add another charge of the same name to this product, you must create the charge with a different name, then use Generic API Loader to update the name of the charge to`TestCharge`.
