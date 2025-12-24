---
title: "With REST API"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/create-product-charge-definitions/with-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:39.593Z"
---

# With REST API

Create a charge definition for a product, including optional fields for specific rate plans using the REST API.

Use the [Create a charge definition](https://www.zuora.com/developer/api-references/api/operation/POST_CreateProductChargeDefinition/?_gl=1*w1u60w*_gcl_au*MzA3MDYwMTc2LjE3NTY3MjY5ODE.*_ga*MTUxMTcwNjg5MS4xNzU4NTU3NjA1*_ga_MY8CQ650DH*czE3NTk1Njk0NDUkbzE4MCRnMSR0MTc1OTU3MDA5OCRqNjAkbDAkaDM3NDEzNDM0NA..) operation to create a charge definition for a charge.

The following example creates a charge definition for the PRPC-00000015 charge and also uses the optional fields to specify this charge definition only applies to the PRP-NEW-00000242 rate plan.

| Request | POST /v1/product-charge-definitions |
| --- | --- |
| Request body | { "productRatePlanChargeId": "2c9890e489f227bd0189f22f3482001f", "productRatePlanChargeNumber": "PRPC-00000015", "productRatePlanId": "2c9890e489f227bd0189f22c3c730002", "productRatePlanNumber": "PRP-NEW-00000242", "effectiveStartDate": "2024-01-01 00:00:00", "effectiveEndDate": "2025-01-01 00:00:00", "listPriceBase": "Per_Billing_Period", "specificListPriceBase": 101, "billingPeriod": "Specific_Months", "specificBillingPeriod": 10, "taxable": false, "taxMode": "TaxExclusive", "termType": "TERMED", "termPeriodType": "Month", "term": 24, "uom": "Each", "taxCode": "a valid tax code", "chargeModel": "FlatFee", "defaultQuantity": 10, "prices": [ { "price": 10, "currency": "USD" } ] } |
