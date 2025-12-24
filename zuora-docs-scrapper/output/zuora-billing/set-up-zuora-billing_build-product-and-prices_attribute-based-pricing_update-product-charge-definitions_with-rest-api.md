---
title: "With REST API"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/update-product-charge-definitions/with-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:52.003Z"
---

# With REST API

Learn how to update a charge definition using the REST API, including modifying fields in the request body for a specified charge.

Use the [Update a charge definition](https://www.zuora.com/developer/api-references/api/operation/PUT_UpdateProductChargeDefinition/) operation to make changes to a charge definition after creation.

The following example updates the fields listed in the request body for the charge specified by the {product-charge-definition-key} in the request header.

| Request | PUT /v1/product-charge-definitions/{product-charge-definition-key} |
| --- | --- |
| Request body | { "effectiveStartDate": "2024-01-01 00:00:00", "effectiveEndDate": "2024-07-01 00:00:00", "listPriceBase": "Per_Billing_Period", "specificListPriceBase": 10, "billingPeriod": "Specific_Months", "specificBillingPeriod": 5, "termType": "TERMED", "termPeriodType": "Month", "term": 12, "uom": "Each", "defaultQuantity": 10, "prices": [ { "price": 15, "currency": "USD" } ] } |
