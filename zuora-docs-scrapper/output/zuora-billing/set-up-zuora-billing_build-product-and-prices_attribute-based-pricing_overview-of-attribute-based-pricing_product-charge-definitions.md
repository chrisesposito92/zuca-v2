---
title: "Product charge definitions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/product-charge-definitions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:29.251Z"
---

# Product charge definitions

Define attributes impacting pricing for rate plan charges, with variations based on state-specific attributes.

Use product charge definitions to define the attributes that impact pricing for a rate plan charge. One rate plan charge can have as many charge definitions as needed. The following table shows five definitions of the PRPC-001 rate plan charge. This price table overrides the monthly membership pricing, and other product rate plan charges in the PRPC table are not included in any pricing for this example.

The state attribute is a custom field whose value impacts the price charged for the membership fee. Prices vary depending on the state where it is sold. The PRPC-001-CD-01 charge definition is the default one without the `state` attribute being specified. When any other charge definition does not match the lookup field, the default charge definition will be applied.

| PRPC Reference | Number | Charge Model | Billing Period | state | Price |
| --- | --- | --- | --- | --- | --- |
| PRPC-001 | PRPC-001-CD-01 (default) | Flat Fee | Monthly | - | 20.00 |
| PRPC-001 | PRPC-001-CD-02 | Flat Fee | Monthly | California | 21.00 |
| PRPC-001 | PRPC-001-CD-03 | Flat Fee | Monthly | New York | 18.00 |
| PRPC-001 | PRPC-001-CD-04 | Flat Fee | Monthly | Florida | 15.00 |
| PRPC-001 | PRPC-001-CD-05 | Flat Fee | Monthly | Texas | 12.00 |
