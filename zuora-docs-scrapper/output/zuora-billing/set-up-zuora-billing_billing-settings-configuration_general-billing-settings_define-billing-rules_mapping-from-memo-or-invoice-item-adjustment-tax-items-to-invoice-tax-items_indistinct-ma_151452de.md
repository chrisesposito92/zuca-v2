---
title: "Indistinct mapping use cases"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/mapping-from-memo-or-invoice-item-adjustment-tax-items-to-invoice-tax-items/indistinct-mapping-use-cases"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:29.637Z"
---

# Indistinct mapping use cases

Indistinct mapping allows Zuora to handle mismatches in taxation items between credit memos, invoices, and IIA by enabling flexible mapping across similar items, even when using different tax engines.

## Use case 1: Credit memo taxation items and invoice taxation items do not match

When you try to create a credit memo from a taxable invoice, taxes are calculated by the tax engine as listed in the following table. Zuora cannot decide on a one-to-one mapping for the first two taxation items of the credit memo and the first two taxation items of the invoice because all of them have the same location code, jurisdiction, and tax rate. In this case, the error message of "Tax items of memo do not match that of the associated invoice item {0}" is returned. To avoid this situation, you can enable indistinct mapping . After that, Zuora will map Taxation Item 1 and Taxation Item 2 of Credit Memo Item 1 to Taxation Item 1 and Taxation Item 2 of Invoice Item 1.

| Invoice |  | Credit Memo |
| --- | --- | --- |
| nvoice Item 1 | Credit Memo Item 1 |  |
| Taxation Item 1: 3887600-City-0.01-Transit Tax | ✖ | Taxation Item 1: 3887600-City-0.01- CA Transit Tax |
| Taxation Item 2: 3887600-City-0.01-Sales Tax | Taxation Item 2: 3887600-City-0.01- CA Sales Tax |  |
| Taxation Item 3: 3887600-State-0.06-Sales Tax | ✔ | Taxation Item 3: 3887600-State-0.06-Sales Tax |

## Use case 2: IIA taxation items inconsistent with invoice taxation items

You try to create an IIA from a taxable invoice, and the IIA taxes are calculated by Avalara as listed by the following table. Zuora cannot decide on Taxation Item 3 of IIA, because the IIA has three taxation items while the invoice only has two taxation items. In this case, the error message “The IIA tax calculated by Avalara is inconsistent with the tax calculated when posting invoices” is returned. To avoid this situation, you can enable indistinct mapping . After that, Zuora will map Taxation Item 3 of IIA to either Taxation Item 1 or Taxation Item 2 on Invoice Item 1.

| Invoice |  |  |
| --- | --- | --- |
| Invoice Item 1 |  | Invoice Item Adjustment |
| Taxation Item 1: 08-COLORADO-0.01-STATE TAX | ✔ | Taxation Item 1: 08-COLORADO-0.01-CO STATE TAX |
| Taxation Item 2: 013-BOULDER-0.02-COUNTY TAX | ✔ | Taxation Item 2: 013-BOULDER-0.02-CO COUNTY TAX |
|  | ✖ | Taxation Item 3: 07850-BOULDER-0.03-CO CITY TAX |

## Use case 3: Invoices and credit memos using different tax engines

You initially use Avalara as the tax engine when generating invoices. When you switch the tax engine from Avalara to Vertex and try to create credit memos against the invoices, you will receive the error message, “The source invoice does not use this tax engine.” To avoid this situation, you can enable indistinct mapping . After that, Zuora will map taxation items from credit memo items to invoice items across the tax engines.
