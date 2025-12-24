---
title: "Considerations in Orders for Zuora CPQ"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/considerations-in-orders-for-zuora-cpq"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:14.112Z"
---

# Considerations in Orders for Zuora CPQ

This reference details the limitations in Zuora CPQ, such as constraints in PDF generation for Ramp Deals and unsupported Legacy SFDC Bundling with Orders.

The below table describes known limitations in Zuora CPQ.

| Feature | Limitations |
| --- | --- |
| PDF for Ramp Deals | Zuora Quotes will only output a Ramp Deal in a single table, representing date ranges from one Action to the next Action. There is no custom grouping of Charges into arbitrary time periods. This is due to the limitation of Zuora’s quote document generation. You need to use other tools, such as Workflow Custom Document or Conga, to do the custom grouping of information. |
| Legacy SFDC Bundling (an old CPQ-only feature that has been replaced by native Zuora Offers functionality across the Zuora ecosystem) | Zuora Quotes does not currently support Legacy SFDC Bundling with Orders. Also, you cannot send the CpqBundleJsonId__QT field to Zuora when Orders is enabled. |
