---
title: "Customer Account fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-credit-memos/customer-account-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:11.985Z"
---

# Customer Account fields

This article provides a mapping of Customer Account fields between Word templates and HTML templates for credit memos.

The following table lists the mapping for Customer Account fields in Word templates and HTML templates for credit memos.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| Account.AccountNumber | CreditMemo.Account.AccountNumber |
| Account.Autopay | CreditMemo.Account.AutoPay |
| Account.Balance | CreditMemo.Account.Balance |
| Account.BillCycleDay | CreditMemo.Account.BillCycleDay |
| Account.BillingBatch | CreditMemo.Account.Batch |
| Account.CompanyCode | CreditMemo.Account.TaxCompanyCode |
| Account.CreditBalance | CreditMemo.Account.CreditBalance |
| Account.CrmId | CreditMemo.Account.CrmId |
| Account.Currency | CreditMemo.Account.Currency |
| Account.CustomerSupportRepName | CreditMemo.Account.CustomerServiceRepName |
| Account.DefaultPaymentMethod | CreditMemo.Account.DefaultPaymentMethodId |
| Account.MRR | CreditMemo.Account.Mrr |
| Account.Name | CreditMemo.Account.Name |
| Account.NewBalance | {{#Wp_Eval}} "{{CreditMemo.Status}}" == "Draft" ? {{CreditMemo.Account.Balance}} - {{CreditMemo.Balance}} : {{CreditMemo.Account.Balance}} {{/Wp_Eval}} |
| Account.Notes | CreditMemo.Account.Notes |
| Account.Parent.Name | CreditMemo.Account.Parent.Name |
| Account.PaymentTerm | CreditMemo.Account.PaymentTerm |
| Account.PaymentMethodMandateId | CreditMemo.Account.DefaultPaymentMethod.MandateID |
| Account.PreviousBalance | {{#Wp_Eval}} "{{CreditMemo.Status}}" == "Draft" ? {{CreditMemo.Account.Balance}} : {{CreditMemo.Account.Balance}} + {{CreditMemo.Balance}} {{/Wp_Eval}} |
| Account.PreviousTransactionImpactTotal | Currently unavailable |
| Account.PreviousTransactionStartAmount | Currently unavailable |
| Account.PurchaseOrderNumber | CreditMemo.Account.PurchaseOrderNumber |
| Account.SalesRep | CreditMemo.Account.SalesRepName |
| Account.TaxExempt | CreditMemo.Account.TaxExemptStatus |
| Account.TaxExemptCertificateID | CreditMemo.Account.TaxExemptCertificateID |
| Account.TaxExemptCertificateType | CreditMemo.Account.TaxExemptCertificateType |
| Account.TaxExemptDescription | CreditMemo.Account.TaxExemptDescription |
| Account.TaxExemptEffectiveDate | CreditMemo.Account.TaxExemptEffectiveDate |
| Account.TaxExemptExpirationDate | CreditMemo.Account.TaxExemptExpirationDate |
| Account.TaxExemptIssuingJurisdiction | CreditMemo.Account.TaxExemptIssuingJurisdiction |
| Account.VATID | CreditMemo.Account.VATId |
