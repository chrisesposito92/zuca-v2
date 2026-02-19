---
title: "Anrok Flexible Tax  Mapping"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/zuora-billing-use-cases-and-api-mapping/anrok-flexible-tax-mapping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:03.381Z"
---

# Anrok Flexible Tax Mapping

Learn how to map additional fields from the Anrok tax response to the Zuora TaxationItem object, including standard and custom fields.

Flexible tax mapping allows you to extract additional fields from the Anrok tax response and store them on the Zuora TaxationItem object.

## Supported fields

You can map values to the following standard fields on the TaxationItem object:

-   name

-   locationCode

-   jurisdiction

-   taxCodeDescription

-   taxRateDescription


After activating invoice tax fields in the Zuora UI, you can also map custom fields. Custom fields must use the \_\_c suffix and are returned in the tax response.

## Field path rules

-   Only fields in the jurises block, including nested fields, are supported.

-   Use commas (,) to specify nested paths.

    | Field Name | Field Path |
    | --- | --- |
    | my_jurise_name__c | name |
    | myTaxName__c | taxes,taxName |
    | notTaxedReason__c | notTaxedReason,type |
    | notTaxedReasonExemptType__c | notTaxedReason,reason,type |


## Sample response

{ "version": 1, "taxAmountToCollect": 1219, "lineItems": \[ { "taxAmountToCollect": 1219, "id": "item-1", "preTaxAmount": "15000", "jurises": \[ { "name": "New York", "taxes": \[ { "taxName": "Tax", "taxableAmount": "15000", "taxAmount": "1218.75", "taxRate": "0.08125" } \], "notTaxedReason": null } \] } \] }
