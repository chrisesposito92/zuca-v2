---
title: "Payment fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/payment-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:30.907Z"
---

# Payment fields

This document provides guidance on configuring payment tables in HTML invoice templates and lists the mapping of payment fields between Word and HTML templates.

To build a payment table in the HTML template editor, follow the procedure described in How to configure payment tables in HTML invoice templates .

The following table lists the mapping for Payment fields in Word and HTML templates.

| Merge field in Word template | Equivalent in HTML template |
| --- | --- |
| Payment.AccountingCode | Payment.AccountingCode |
| Payment.AppliedAmount | Payment.AppliedAmount |
| Payment.CreditCardNumberMasked | Payment.PaymentMethodSnapshot.CreditCardMaskNumber |
| Payment.CreditCardType | Payment.PaymentMethodSnapshot.CreditCardType |
| Payment.Date | Payment.EffectiveDate |
| Payment.Description | Payment.Comment |
| Payment.Method | {{#Wp_Eval}} "{{Payment.Type}}" == "External" ? "{{Payment.PaymentMethod.Type}}" : "{{Payment.PaymentMethodSnapshot.Type}}" {{/Wp_Eval}} |
| Payment.Number | Payment.PaymentNumber |
| Payment.PaymentType | Payment.Type |
| Payment.ReferenceId | Payment.ReferenceId |
