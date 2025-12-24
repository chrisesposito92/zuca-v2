---
title: "Tax preview use cases"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/tax-preview-to-prevent-negative-billing-documents/tax-preview-use-cases"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:37.252Z"
---

# Tax preview use cases

Explains use cases where tax calculations result in a negative total invoice amount, including scenarios with both positive and negative invoice items.

You can apply this billing rule to scenarios where you might have unexpected negative billing comments.

## Total invoice amount changing to negative from zero

One invoice has both positive and negative items. The total amount without tax is zero before the tax is calculated. After the tax is calculated, the total amount changes from zero to a negative value due to taxable negative invoice items.

The following table lists information about an invoice with a total amount of zero before the tax is calculated.

| Invoice item | SKU name | Unit price | Amount without tax | Tax mode | Tax amount | Charge amount |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Freeze Adjustment | -29.99 | -29.99 | Exclusive | 0.00 | -29.99 |
| 2 | Freeze Charge | 0.00 | 0.00 | Exclusive | 0.00 | 0.00 |
| 3 | Dues | 29.99 | 29.99 | None | 0.00 | 29.99 |

After the tax is calculated, the total amount of the invoice becomes negative. The following table lists information about the invoice with a negative total amount.

| Invoice item | SKU name | Unit price | Amount without tax | Tax mode | Tax amount | Charge amount |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Freeze Adjustment | -29.99 | -29.99 | Exclusive | -3.03 | -33.02 |
| 2 | Freeze Charge | 0.00 | 0.00 | Exclusive | 0.00 | 0.00 |
| 3 | Dues | 29.99 | 29.99 | None | 0.00 | 29.99 |

## Total invoice amount changing to negative from positive

One invoice has both positive and negative items. The total amount without tax is postive before the tax is calculated. After the tax is calculated, the total amount changes to a negative value because the invoice contains taxable or non-taxable invoice items, or the tax rates are different.

The following table lists information about an invoice with a positive total amount before the tax is calculated.

| nvoice item | SKU name | Unit price | Amount without tax | Tax mode | Tax amount | Charge amount |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Freeze Adjustment | -1,200.00 | -1,200.00 | Exclusive | 0.00 | -1,200.00 |
| 2 | Freeze Charge | 1,250.00 | 1,250.00 | None | 0.00 | 1,250.00 |

After the tax is calculated, the total amount of the invoice becomes negative. The following table lists information about the invoice with a negative total amount.
| Invoice item | SKU name | Unit price | Amount without tax | Tax mode | Tax amount | Charge amount |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Freeze Adjustment | -1,200.00 | -1,200.00 | Exclusive | -120.00 | -1,320.00 |
| 2 | Freeze Charge | 1,250.00 | 1,250.00 | None | 0.00 | 1,250.00 |
