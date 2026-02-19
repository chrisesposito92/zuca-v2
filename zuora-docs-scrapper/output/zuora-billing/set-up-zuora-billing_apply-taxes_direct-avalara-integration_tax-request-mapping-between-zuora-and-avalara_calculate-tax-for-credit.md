---
title: "Calculate tax for credit"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/tax-request-mapping-between-zuora-and-avalara/calculate-tax-for-credit"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:53.637Z"
---

# Calculate tax for credit

This section details the mapping of Zuora's data fields to Avalara for calculating tax when issuing a credit.

## Mapping details

The following mapping table shows how Zuora's data fields are used in Avalara to calculate tax when you issue a credit.

For example, `TaxRequest.DocCode` in Avalara is mapped to `Invoice.ID` in Zuora. The mapping to a Constant Component in Zuora means that the data field in Avalara will always be set to the same value. For example, the value of `TaxRequest.Commit` in Avalara is always set to `TRUE` .

| Avalara Object | Avalara Field | Avalara Nested Field | Zuora Component | Zuora Field |
| --- | --- | --- | --- | --- |
| CreateTransaction | DocCode |  | Invoice | ID or InvoiceNumber. |
| DocDate | InvoiceDate |  |  |  |
| CurrencyCode | Billing documents, including invoices, credit memos, and debit memos | Currency |  |  |
| CustomerCode | Account | ID |  |  |
| Commit | Constant | True |  |  |
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
| Region | Region |  |  |  |
| PostalCode | PostalCode |  |  |  |
| Line1 | Address1 |  |  |  |
| Line2 | Address2 |  |  |  |
| Amount |  |  | ChargeAmount. If tax mode is inclusive, it is chargeAmount + taxAmount. |  |
| TaxIncluded |  |  | TaxMode. Validate if the TaxMode is TaxInclusive or not. |  |
| ExemptionNo |  | Account.TaxExemption | TaxExemptCertificateID |  |
| CustomerUsageType |  | TaxExemptEntityUseCode |  |  |
| BusinessIdentificationNo |  | VATId |  |  |
| TaxCode |  | TaxCode.ExternalTaxCode | ExternalTaxCode. The Avalara Tax Code configured in Zuora Billing. See this article for more information. |  |
| itemCode |  | TaxCode |  |  |
| Ref1 | Invoice |  | InvoiceNumber |  |
| Ref2 | Invoice |  | CustomerPONumber |  |
| Line.TaxOverride | TaxOverrideType | n/a | n/a |  |
| ReasonTaxDate Overwrite if TaxOverrideType = DateCredit if overriding TaxAmount or for credits | n/a | n/a |  |  |
| TaxDateApplies when TaxOverrideType = Date | n/a | n/a |  |  |
| TaxAmountApplies when TaxOverrideType = TaxAmount or for credits | n/a | n/a |  |  |
