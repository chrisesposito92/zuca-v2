---
title: "Default Response Field Mapping"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/zuora-billing-use-cases-and-api-mapping/default-response-field-mapping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:11.144Z"
---

# Default Response Field Mapping

This section details the mapping of fields returned by Anrok to the Zuora TaxationItem object, including descriptions and specific notes on tax modes and rates.

The following table shows how fields returned by Anrok are mapped to the Zuora TaxationItem object:

| Zuora Field | Description and Mapping (Anrok Field) |
| --- | --- |
| name | taxType |
| locationCode | “” |
| jurisdiction | jurisdictionName |
| taxCode | Tax code of the invoice item. |
| taxCodeDescription | jurisdictionType |
| taxMode | Tax mode applied to the invoice item.Note: This field is not extracted from Avalara’s response. All tax items under the same invoice item must share the same tax mode. Mixing inclusive and exclusive tax modes within the same invoice item is not supported. |
| taxRate | Tax rate applied to the invoice item.This is mapped from the rate field in Avalara’s response, divided by 100. |
| taxRateType | Type of tax rate. Zuora Billing always uses Percentage and cannot map to FlatFee.Note: This field is not extracted from Avalara’s response. |
| taxRateDescription | citation |
| taxDate | This defaults to the invoice date and may differ based on configuration. For more details, see Configure tax dates. |
| taxAmount | TaxTotal tax amount applied to the invoice item. |
| exemptAmount | BigDecimal.ZEROExempt portion of the tax. |
| taxDescription |  |
