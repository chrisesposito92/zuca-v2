---
title: "Tax calculation for charge"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/integration-configuration-with-avalara/tax-calculation-for-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:26.659Z"
---

# Tax calculation for charge

This topic provides guidance on calculating tax for charges by detailing the mapping of Zuora's data fields to Avalara's tax calculation fields, including handling multiple currencies and constant components.

## Mapping details

The following mapping table shows how Zuora's data fields are used in Avalara to calculate the tax of a normal charge.

For example, `TaxRequest.DocCode` in Avalara is mapped to `Invoice.ID` in Zuora. The mapping to a Constant Component in Zuora means that the data field in Avalara will always be set to the same value. For example, the value of `TaxRequest.Commit` in Avalara is always set to `TRUE` .

By default, the account-level currency is always linked to the currency code in the tax request for Direct Avalara Integration. If you have enabled the Multiple Currencies feature, the currency at the billing document level, including invoices, credit memos, and debit memos, is used for this mapping.

| Avalara Object | Avalara Field | Avalara Nested Field | Zuora Component | Zuora Field |
| --- | --- | --- | --- | --- |
| CreateTransaction | DocCode |  | Invoice | ID or InvoiceNumber. See this article for information on how the system determines which field to use. |
| DocDate | InvoiceDate |  |  |  |
| CurrencyCode | Billing documents, including invoices, credit memos, and debit memos | Currency |  |  |
| CustomerCode | Account | ID |  |  |
| Commit | Constant | isPreview? FALSE: TRUEIf it’s a preview, the status is FALSE ; if not, it’s TRUE . |  |  |
| DocType | isPreview? SalesOrder: SalesInvoiceIf it's a preview, the document type is a Sales Order; otherwise, it's a Sales Invoice |  |  |  |
| DetailLevel | Tax |  |  |  |
| shipTo |  | Contact |  |  |
| Country | Country |  |  |  |
| City | City |  |  |  |
| Region | State |  |  |  |
| PostalCode | PostalCode |  |  |  |
| Line1 | Address1 |  |  |  |
| Line2 | Address2 |  |  |  |
| shipFrom |  | Company |  |  |
| Country | Country |  |  |  |
| City | City |  |  |  |
| Region | State |  |  |  |
| PostalCode | PostalCode |  |  |  |
| Line1 | Address1 |  |  |  |
| Line2 | Address2 |  |  |  |
| Amount |  |  | ChargeAmount. If tax mode is inclusive, it is chargeAmount + taxAmount. |  |
| TaxIncluded |  |  | TaxMode. Validate if the TaxMode is TaxInclusive or not. |  |
| ExemptionNo |  |  | TaxExemptCertificateID |  |
| CustomerUsageType |  | Account.TaxExemption | TaxExemptEntityUseCode |  |
| BusinessIdentificationNo |  | VATId |  |  |
| TaxCode |  | TaxCode.ExternalTaxCode | ExternalTaxCode. The Avalara Tax Code configured in Zuora Billing. See this article for more information. |  |
| ItemCode |  | TaxCode |  |  |
| Ref1 | N.A. | N.A. | N.A |  |
| Ref2 | N.A. | N.A | N.A |  |
| Line.TaxOverride | TaxOverrideType | n/a | n/a |  |
| Reason | n/a | n/a |  |  |
| TaxDate | n/a | n/a |  |  |
| TaxAmount | n/a | n/a |  |  |

Note: Tax Request Mapping Between Zuora and Avalara
