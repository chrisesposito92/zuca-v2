---
title: "Calculate tax with tax dates overridden"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/tax-request-mapping-between-zuora-and-avalara/calculate-tax-with-tax-dates-overridden"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:53.081Z"
---

# Calculate tax with tax dates overridden

This section explains how Zuora's data fields are mapped to Avalara for tax calculation when default tax dates are overridden.

## Mapping details

The following mapping table shows how Zuora's data fields are used in Avalara to calculate tax when the [default tax dates are overridden](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/configure-tax-dates) .

For example, `TaxRequest.DocCode` in Avalara is mapped to `Invoice.ID` in Zuora. The mapping to a Constant Component in Zuora means that the data field in Avalara will always be set to the same value. For example, the value of `TaxRequest.Commit` in Avalara is always set to `TRUE` .

| Avalara Object | Avalara Field | Avalara Nested Field | Zuora Component | Zuora Field |
| --- | --- | --- | --- | --- |
| CreateTransaction | DocCode |  | Invoice | ID or InvoiceNumber. |
| DocDate | InvoiceDate |  |  |  |
| CurrencyCode | Billing documents, including invoices, credit memos, and debit memos. | Currency |  |  |
| CustomerCode | Account | ID |  |  |
| Commit | Constant | TRUE |  |  |
| DocType | SalesInvoice |  |  |  |
| DetailLevel | Tax |  |  |  |
| shipTo |  | Snapshot |  |  |
| Country | Country |  |  |  |
| City | City |  |  |  |
| Region | State |  |  |  |
| PostalCode | PostalCode |  |  |  |
| Line1 | Address1 |  |  |  |
| Line2 | Address2 |  |  |  |
| shipFrom |  | Snapshot |  |  |
| Country | Country |  |  |  |
| City | City |  |  |  |
| Region | State |  |  |  |
| PostalCode | PostalCode |  |  |  |
| Line1 | Address1 |  |  |  |
| Line2 | Address2 |  |  |  |
|  | Amount |  |  | ChargeAmount. If tax mode is inclusive, it is chargeAmount + taxAmount. |
|  | TaxIncluded |  |  | TaxMode. Validate if the TaxMode is TaxInclusive or not. |
|  | ExemptionNo |  | Account.TaxExemption | TaxExemptCertificateID |
|  | CustomerUsageType |  | TaxExemptEntityUseCode |  |
|  | BusinessIdentificationNo |  | VATId |  |
|  | TaxCode |  | TaxCode.ExternalTaxCode | ExternalTaxCode. The Avalara Tax Code configured in Zuora Billing. See this article for more information. |
|  | ItemCode |  | TaxCode |  |
|  | Ref1 |  | N.A. | N.A. |
|  | Ref2 |  | N.A. | N.A. |
|  | Line.TaxOverride | TaxOverrideType | N.A. | N.A. |
|  | Reason | N.A. | N.A. |  |
|  | TaxDate | N.A. | N.A. |  |
|  | TaxAmount | N.A. | N.A. |  |
