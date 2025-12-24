---
title: "Product rate plan definitions (optional)"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/example/product-rate-plan-definitions-optional"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:27.166Z"
---

# Product rate plan definitions (optional)

Learn how product rate plan definitions help associate rate plan charges with product rate plans, enabling efficient charge reuse without duplication.

When the Charge Reuse feature is enabled, you can use product rate plan definitions to associate the product rate plan with its containing rate plan charges. Each row in the following table represents a definition that associates one rate plan charge with one product rate plan.

With this object introduced by the Charge Reuse feature, you do not need to duplicate the rate plan charges in each of the product rate plans. Instead, you are linking the same product rate plan charges across the three product rate plans.

| PRP Reference | PRPC Reference | Description |
| --- | --- | --- |
| PRP-01 | PRPC-001 | The membership fee for the Bronze plan |
| PRP-01 | PRPC-002 | The setup fee for the Bronze plan |
| PRP-02 | PRPC-001 | The membership fee for the Silver plan |
| PRP-02 | PRPC-002 | The setup fee for the Silver plan |
| PRP-03 | PRPC-001 | The membership fee for the Gold plan |
| PRP-03 | PRPC-002 | The setup fee for the Gold plan |
