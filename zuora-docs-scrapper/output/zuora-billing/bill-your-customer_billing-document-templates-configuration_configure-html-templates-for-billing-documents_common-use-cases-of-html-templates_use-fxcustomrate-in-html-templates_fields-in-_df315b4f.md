---
title: "Fields in the FxCustomRate object"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/use-fxcustomrate-in-html-templates/fields-in-the-fxcustomrate-object"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:41.729Z"
---

# Fields in the FxCustomRate object

The FxCustomRate object contains fields that define the exchange rate details, including identifiers, currency codes, and timestamps for creation and updates.

| Field Name | Type | Description |
| --- | --- | --- |
| Id | string | Unique identifier for the FX rate entry. |
| CreatedById | string | ID of the user who created the entry |
| CreatedDate | timestamp | Date and time the entry was created. |
| UpdatedById | string | ID of the user who last updated the entry. |
| UpdatedDate | timestamp | Date and time the entry was last updated. |
| CurrencyFrom | string | Source currency code, for example, USD. |
| CurrencyTo | string | Target currency code, for example, USD. |
| Rate | decimal | Exchange rate from source to target currency. |
| RateDate | date | Date the exchange rate applies to. |
| RateSetName | string | Name of the FX rate set. |
