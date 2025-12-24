---
title: "Customer account fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-debit-memos/customer-account-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:30.023Z"
---

# Customer account fields

This article details the mapping of Customer Account fields between Word templates and HTML templates for debit memos.

The following table lists the mapping for Customer Account fields in Word templates and HTML templates for debit memos.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| Account.AccountNumber | DebitMemo.Account.AccountNumber |
| Account.Autopay | DebitMemo.Account.AutoPay |
| Account.Balance | DebitMemo.Account.Balance |
| Account.BillCycleDay | DebitMemo.Account.BillCycleDay |
| Account.BillingBatch | DebitMemo.Account.Batch |
| Account.CompanyCode | DebitMemo.Account.TaxCompanyCode |
| Account.CreditBalance | DebitMemo.Account.CreditBalance |
| Account.CrmId | DebitMemo.Account.CrmId |
| Account.Currency | DebitMemo.Account.Currency |
| Account.CustomerSupportRepName | DebitMemo.Account.CustomerServiceRepName |
| Account.DefaultPaymentMethod | DebitMemo.Account.DefaultPaymentMethodId |
| Account.MRR | DebitMemo.Account.Mrr |
| Account.Name | DebitMemo.Account.Name |
| Account.NewBalance | {{#Wp_Eval}} "{{DebitMemo.Status}}" == "Draft" ? {{DebitMemo.Account.Balance}} + {{DebitMemo.Balance}} : {{DebitMemo.Account.Balance}} {{/Wp_Eval}} |
| Account.Notes | DebitMemo.Account.Notes |
| Account.Parent.Name | DebitMemo.Account.Parent.Name |
| Account.PaymentTerm | DebitMemo.Account.PaymentTerm |
| Account.PaymentMethodMandateId | DebitMemo.Account.DefaultPaymentMethod.MandateID |
| Account.PreviousBalance | {{#Wp_Eval}} "{{DebitMemo.Status}}" == "Draft" ? {{DebitMemo.Account.Balance}} : {{DebitMemo.Account.Balance}} - {{DebitMemo.Balance}} {{/Wp_Eval}} |
| Account.PreviousTransactionImpactTotal | Currently unavailable |
| Account.PreviousTransactionStartAmount | Currently unavailable |
| Account.PurchaseOrderNumber | DebitMemo.Account.PurchaseOrderNumber |
| Account.SalesRep | DebitMemo.Account.SalesRepName |
| Account.TaxExempt | DebitMemo.Account.TaxExemptStatus |
| Account.TaxExemptCertificateID | DebitMemo.Account.TaxExemptCertificateID |
| Account.TaxExemptCertificateType | DebitMemo.Account.TaxExemptCertificateType |
| Account.TaxExemptDescription | DebitMemo.Account.TaxExemptDescription |
| Account.TaxExemptEffectiveDate | DebitMemo.Account.TaxExemptEffectiveDate |
| Account.TaxExemptExpirationDate | DebitMemo.Account.TaxExemptExpirationDate |
| Account.TaxExemptIssuingJurisdiction | DebitMemo.Account.TaxExemptIssuingJurisdiction |
| Account.VATID | DebitMemo.Account.VATId |
