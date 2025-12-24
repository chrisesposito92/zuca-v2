---
title: "Discount-percentage"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount/discount-percentage"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:19.648Z"
---

# Discount-percentage

Configure percentage discount charges by selecting the appropriate charge model and applying discounts to specific charges or billing periods.

When configuring the Charge Amount section for the percentage charge, refer to the following table.

| Field | Description |
| --- | --- |
| Charge Model | Select Discount-Percentage. |
| Discount Percentage | Enter the discount percentage. |
| Apply Discount To | Select one of the following:All charges in the rate planAll charges in the subscriptionNote:The charges to be applied with the enhanced discount must not be prepayment and drawdown, or discount charges. |
| Allow apply to billing period partially | You must check this checkbox to change your current discounts to enhanced discounts. |
| Select one of the following charge types:One-TimeRecurring |  |
| Stacked | If you want to configure a percentage discount charge as the enhanced discount, you must select this checkbox. The sequence of discount classes is preserved while applying the discount when multiple stacked discount charges are configured to a regular charge. The computation of each stacked discount charge's amount is based on the regular charge's amount of overlapping portion of the full billing period amount, rather than from the remaining amount after applying the previous discount charge. |

Note:

If you apply percentage discounts to delivery pricing charges, you must also set other fields. For more information, see Delivery-based Billing standard use case.
