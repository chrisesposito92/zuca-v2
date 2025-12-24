---
title: "Mapping from memo or invoice item adjustment tax items to invoice tax items"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/mapping-from-memo-or-invoice-item-adjustment-tax-items-to-invoice-tax-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:26.931Z"
---

# Mapping from memo or invoice item adjustment tax items to invoice tax items

Zuora associates taxation items on memos or invoice item adjustments with corresponding invoice taxation items to ensure traceability during tasks performed via the Zuora UI or REST API.

When you do the following tasks through the Zuora UI or REST API, Zuora needs to associate the taxation items on the memo/Invoice Item Adjustment (IIA) to the taxation items on the corresponding invoice, so the settlement records are traceable.

-   Zuora UI:

    -   Create credit or debit memos from taxable invoices with the Tax Auto Calculation checkbox selected.

    -   Create IIA for taxable invoices with the Use Avalara to calculate taxes for invoice item adjustments feature enabled.

-   REST API:

    -   Create taxation items for a credit memo or create taxation items for a debit memo without specifying the `sourceTaxItemId` field in the request body.


## Distinct mapping and indistinct mapping

By default, Zuora maps the taxation items based on a combination of specific taxation item fields, including the `LocationCode` , `Jurisdiction` , and `TaxRate` fields. This is distinct mapping.

However, when distinct mapping is insufficient to establish the association, you will be blocked from completing your task. In this case, you can enable indistinct mapping, which ensures that each memo/IIA taxation item is associated with an invoice taxation item, no matter whether the `LocationCode`, `Jurisdiction`, and `TaxRate` fields are matching.
