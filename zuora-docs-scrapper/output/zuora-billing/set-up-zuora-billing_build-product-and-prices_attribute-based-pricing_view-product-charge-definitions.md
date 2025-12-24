---
title: "View product charge definitions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/view-product-charge-definitions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:42.480Z"
---

# View product charge definitions

Learn how to view product charge definitions using the UI or REST API operations.

After a charge definition is created, you can view its details either from the UI or through REST API.

## With REST API

There are multiple REST APIs you can use to get the product charge definition information:

-   Use the

    [Retrieve a product charge definition](https://www.zuora.com/developer/api-references/api/operation/GET_RetrieveProductChargeDefinition/) operation to get information about a specific charge by its unique ID or number.
-   Use the [List product charge definitions](https://www.zuora.com/developer/api-references/api/operation/GET_RetrieveProductChargeDefinitions/) operation to get information about all charge definitions defined in the system.

-   Use the [Retrieve a product rate plan charge](https://www.zuora.com/developer/api-references/api/operation/GET_RetrieveProductRatePlanCharge/) operation with the show-charge-definitions parameter set to true to get the charge definitions for the specified charge.
