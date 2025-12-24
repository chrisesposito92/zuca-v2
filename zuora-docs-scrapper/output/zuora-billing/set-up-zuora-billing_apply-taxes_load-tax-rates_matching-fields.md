---
title: "Matching fields"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/load-tax-rates/matching-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:42.627Z"
---

# Matching fields

This reference details the matching algorithm used by Zuora for tax mapping, including how null values are treated and the fields involved in matching sold-to contact addresses.

The matching algorithm considers null values in the matching fields as valid matches. For example, if the zip code in the matching fields is null, the system will consider values in the zip code field of the sold-to contact to determine the match.

For each field, including state, county, city, postal code, and tax region, the system considers a field to match the condition if it has the same value as the input or if the field has a null value. If all the fields match the condition, the system considers it a candidate. It then compares tax orders and returns the one with the smallest tax order.

Zuora recommends entering a country and state entry for each state, with taxation as a "catch all" as the last entry searched for that state, either through sorting or as the last records.

The Zuora Tax mapping process will search for a match only and will not try to identify the closest best match. The country, state, county, city, postal code and tax region are matched between the entry in this file and the sold-to contact address.

If a match is not found, Zuora Billing will write `<nomatch>` in the Tax Jurisdiction field on the following exports:

-   Invoice Details Export
-   Credit Taxation Item Details Export (This feature is in Limited Availability)
-   Debit Taxation Item Details Export (This feature is in Limited Availability)

Additionally, if you want to find the tax rate for a state such as AB, both tax rates with a state value of AB and null values are considered. The system will select the tax rate with the smallest tax order, considering match conditions where the field value is null or matches. To illustrate further, consider the following example with three tax rates:

| Tax Order | Tax Code Name | Country | State | Country | City | Postal Code | Tax Region | Tax Name | Tax Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | RD - IVA FULL - B2BG | Spain | Santa Cruz de Tenerife | None | None | None | None | G5 | 0.07 |
| 2 | RD - IVA FULL - B2BG | Spain | None | None | None | None | None | RD | 0.21 |
| 3 | RD - IVA FULL - B2BG | Spain | STA CRUZ DE TENERIFE | None | None | None | None | G5 | 0.07 |

If Spain is selected as the country and Santa Cruz de Tenerife as the state, the system will select the first tax rate as both the first and second tax rates match the condition, and the first tax rate has a smaller tax order. Similarly, Spain is selected as the country and STA CRUZ DE TENERIFE as the state, the system will select the second tax rate based on the same matching conditions.

The following fields are used to match the fields in the Sold To Contact:
| Field | Required? | Description |
| --- | --- | --- |
| Country | Yes | Country code using the allowable values from Zuora Billing. This field is matched to the Country field in the Sold To Contact.For a complete list of supported countries, see View countries or regions . |
| State/Province | Conditional | State or province code using the allowable values from Zuora Billing.This field is required if Country is US or Canada. |
| County | No | Customer-defined field to aid in taxation. This field is matched to the County field in the Sold To Contact.This field is available for customers using Zuora Tax. |
| City | No | This field is matched to the City field in the Sold To Contact. |
| Postal Code | No | This field is matched to the Postal Code field in the Sold To Contact. |
| Tax Region | No | Customer-defined field to aid in taxation. This field is matched to the Tax Region field in the Sold To Contact.This field is available for customers using Zuora Tax. |
| Description | No | Customer-defined field. This field is used for reporting purposes and is available on:Invoice TemplateInvoice extract filesCredit Taxation Item extract files (This feature is in Limited AvailabilityDebit Taxation Item extract files (This feature is in Limited Availability) |
