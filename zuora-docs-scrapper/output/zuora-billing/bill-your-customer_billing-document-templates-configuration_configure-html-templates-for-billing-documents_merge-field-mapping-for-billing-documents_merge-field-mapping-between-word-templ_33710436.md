---
title: "Customer account fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/customer-account-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:51.285Z"
---

# Customer account fields

This document provides a mapping of Customer Account fields between Word and HTML invoice templates.

The following table lists the mapping for Customer Account fields in Word invoice templates and HTML invoice templates.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| Account.AccountNumber | Invoice.Account.AccountNumber |
| Account.Autopay | Invoice.Account.AutoPay |
| Account.Balance | Invoice.Account.Balance |
| Account.BillCycleDay | Invoice.Account.BillCycleDay |
| Account.BillingBatch | Invoice.Account.Batch |
| Account.CompanyCode | Invoice.Account.TaxCompanyCode |
| Account.CreditBalance | Invoice.Account.CreditBalance |
| Account.CrmId | Invoice.Account.CrmId |
| Account.Currency | Invoice.Account.Currency |
| Account.CustomerSupportRepName | Invoice.Account.CustomerServiceRepName |
| Account.DefaultPaymentMethod | Account.DefaultPaymentMethodId |
| Account.MRR | Invoice.Account.Mrr |
| Account.Name | Invoice.Account.Name |
| Account.NewBalance | {{#Wp_Eval}} "{{Invoice.Status}}" == "Draft" ? {{Invoice.Account.Balance}} + {{Invoice.Balance}} : {{Invoice.Account.Balance}} {{/Wp_Eval}} |
| Account.Notes | Invoice.Account.Notes |
| Account.Parent.Name | Invoice.Account.Parent.Name |
| Account.PaymentTerm | Invoice.Account.PaymentTerm |
| Account.PaymentMethodMandateId | Invoice.Account.DefaultPaymentMethod.MandateID |
| Account.PreviousBalance | {{#Wp_Eval}} "{{Invoice.Status}}" == "Draft" ? {{Invoice.Account.Balance}} : {{Invoice.Account.Balance}} - {{Invoice.Balance}} {{/Wp_Eval}} |
| Account.PreviousTransactionImpactTotal | Currently unavailable |
| Account.PreviousTransactionStartAmount | Currently unavailable |
| Account.PurchaseOrderNumber | Invoice.Account.PurchaseOrderNumber |
| Account.SalesRep | Invoice.Account.SalesRepName |
| Account.TaxExempt | Invoice.Account.TaxExemptStatus |
| Account.TaxExemptCertificateID | Invoice.Account.TaxExemptCertificateID |
| Account.TaxExemptCertificateType | Invoice.Account.TaxExemptCertificateType |
| Account.TaxExemptDescription | Invoice.Account.TaxExemptDescription |
| Account.TaxExemptEffectiveDate | Invoice.Account.TaxExemptEffectiveDate |
| Account.TaxExemptExpirationDate | Invoice.Account.TaxExemptExpirationDate |
| Account.TaxExemptIssuingJurisdiction | Invoice.Account.TaxExemptIssuingJurisdiction |
| Account.VATID | Invoice.Account.VATId |
