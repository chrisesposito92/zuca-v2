---
title: "Calculate tax with tax amount overridden"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/tax-request-mapping-between-zuora-and-avalara/calculate-tax-with-tax-amount-overridden"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:52.251Z"
---

# Calculate tax with tax amount overridden

This section details the mapping of Zuora's data fields to Avalara for tax calculation, with an emphasis on overriding the tax amount calculated by Avalara.

## Mapping details

The following mapping table shows how Zuora's data fields are used in Avalara to calculate tax for credit memos and the tax amount calculated by Avalara is overridden.

For example, `TaxRequest.DocCode` in Avalara is mapped to `Invoice.ID` in Zuora. The mapping to a Constant Component in Zuora means that the data field in Avalara will always be set to the same value. For example, the value of `TaxRequest.Commit` in Avalara is always set to `TRUE` .

| Avalara Object | Avalara Field | Avalara Nested Field | Zuora Component | Zuora Field |
| --- | --- | --- | --- | --- |
| CreateTransaction | DocCode |  | Invoice | ID or InvoiceNumber. See this article for information on how the system determines which field to use. |
| CreateTransaction | DocDate |  | Invoice | InvoiceDate |
| CreateTransaction | CurrencyCode |  | Billing documents | Currency |
| CreateTransaction | CustomerCode |  | Account | ID |
| CreateTransaction | Commit |  | Constant | TRUE |
| CreateTransaction | DocType |  | Constant | SalesInvoice |
| CreateTransaction | DetailLevel |  | Constant | Tax |
| CreateTransaction | shipTo | Country | Snapshot | Country |
| CreateTransaction | shipTo | City | Snapshot | City |
| CreateTransaction | shipTo | Region | Snapshot | State |
| CreateTransaction | shipTo | PostalCode | Snapshot | PostalCode |
| CreateTransaction | shipTo | Line1 | Snapshot | Address1 |
| CreateTransaction | shipTo | Line2 | Snapshot | Address2 |
| CreateTransaction | shipFrom | Country | Snapshot | Country |
| CreateTransaction | shipFrom | City | Snapshot | City |
| CreateTransaction | shipFrom | Region | Snapshot | State |
| CreateTransaction | shipFrom | PostalCode | Snapshot | PostalCode |
| CreateTransaction | shipFrom | Line1 | Snapshot | Address1 |
| CreateTransaction | shipFrom | Line2 | Snapshot | Address2 |
| CreateTransaction | Amount |  | Charge | ChargeAmount. If tax mode is inclusive, it is chargeAmount + taxAmount. |
| CreateTransaction | TaxIncluded |  | Charge | TaxMode. Validate if the TaxMode is TaxInclusive or not. |
| CreateTransaction | ExemptionNo |  | Account | TaxExemptCertificateID |
| CreateTransaction | CustomerUsageType |  | Account | TaxExemptEntityUseCode |
| CreateTransaction | BusinessIdentificationNo |  | Account | VATId |
| CreateTransaction | TaxCode |  | TaxCode | ExternalTaxCode (Avalara tax code configured in Zuora) |
| CreateTransaction | ItemCode |  | TaxCode | ExternalTaxCode. The Avalara Tax Code configured in Zuora Billing. See this article for more information. |
| CreateTransaction | Ref1 |  | n/a | n/a |
| CreateTransaction | Ref2 |  | n/a | n/a |
| CreateTransaction | Line.TaxOverride | TaxOverrideType | n/a | n/a |
| CreateTransaction | Line.TaxOverride | Reason | n/a | n/a |
| CreateTransaction | Line.TaxOverride | TaxDate | n/a | n/a |
| CreateTransaction | Line.TaxOverride | TaxAmount | n/a | n/a |
