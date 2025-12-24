---
title: "Field Mappings between Zuora and Avalara Brazil"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/avalara-for-brazil-app/field-mappings-between-zuora-and-avalara-brazil"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:15.805Z"
---

# Field Mappings between Zuora and Avalara Brazil

This article details the mapping of Zuora's TaxationItem object fields to Avalara Brazil fields, including tax types, jurisdictions, and tax rates.

The following table shows how Zuora's TaxationItem object fields map to Avalara Brazil fields:

| Zuora Field | Description and Mapping (Avalara Brazil Field) |
| --- | --- |
| name | taxType |
| locationCode | "" |
| jurisdiction | jurisdictionName |
| taxCode | Tax code of invoice item |
| taxCodeDescription | jurisdictionType |
| taxMode | Tax mode applied to the invoice item.Note:This field is not extracted from Avalara's response. All tax items under the same invoice item must share the same tax mode. Mixing inclusive and exclusive tax modes within the same invoice item is not supported. |
| taxRate | Tax rate applied to the invoice item.This is mapped from the rate field in Avalara's response, divided by 100. |
| taxRateType | Type of tax rate. Zuora Billing always uses Percentage and cannot map to FlatFee.Note:This field is not extracted from Avalara's response. |
| taxRateDescription | citation |
| taxDate | This defaults to the invoice date and may differ based on configuration. For more details, see Configure tax dates. |
| taxAmount | TaxTotal tax amount applied to the invoice item. |
| exemptAmount | BigDecimal.ZEROExempt portion of the tax. |
| taxDescription | Tax description |
