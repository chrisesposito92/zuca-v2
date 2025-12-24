---
title: "Filtering informative items"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/avalara-for-brazil-app/filtering-informative-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:18.243Z"
---

# Filtering informative items

Zuora filters out tax items marked as Informative, which do not affect final pricing, while retaining those with financial impact.

Zuora automatically filters out taxation items where impactOnFinalPrice is Informative. In the Avalara response, the field impactOnFinalPrice can have values such as Included, Add, Subtracted, or Informative. Zuora filters out all tax detail items where impactOnFinalPrice = Informative, regardless of whether the tax amount is zero. Tax detail items with other values (Included, Add, or Subtracted) are retained, even if their tax amount is 0 or their accounting field is set to none.

Informative items are used only for reference and do not affect the calculation of charges or the final price. As a result, these items are not stored in Zuora.

Only taxation items that have a direct financial impact are retained in the system.

## Sample response payload

"taxDetails": \[ { "jurisdictionName": "BRASIL", "jurisdictionType": "Country", "taxImpact": { "impactOnFinalPrice": "Informative", "impactOnNetAmount": "Informative", "accounting": "none" }, "taxType": "cbs", "subtotalTaxable": 18.86, "rate": 0.009, "tax": 0.1697 }, { "jurisdictionName": "BRASIL", "jurisdictionType": "Country", "taxImpact": { "impactOnFinalPrice": "Included", "impactOnNetAmount": "Included", "accounting": "liability" }, "taxType": "cofins", "citation": "Lei nº 10.833/2003, Artigos 1º e 2º", "subtotalTaxable": 21.99, "rate": 7.6, "tax": 1.6712 }, { "jurisdictionName": "RIO DE JANEIRO", "jurisdictionType": "City", "taxImpact": { "impactOnFinalPrice": "Included", "impactOnNetAmount": "Included", "accounting": "liability" }, "taxType": "iss", "citation": "Decreto nº 10.514/1991, Artigo 19, Inciso I", "subtotalTaxable": 21.99, "rate": 5, "tax": 1.0995 } \]
