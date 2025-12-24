---
title: "Object changes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/multiple-currencies/multiple-currencies-overview/object-changes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:50.877Z"
---

# Object changes

The Zuora API and related data sources have been enhanced to support Multiple Currencies, introducing changes to various objects in the Flexible Billing Attributes feature.

The Zuora API, data sources, AQuA, and Data Query are enhanced to support the Multiple Currencies feature. The following table lists the object changes introduced in the Flexible Billing Attributes feature.

| Base object | Field/Related object | Access approaches |
| --- | --- | --- |
| Account Key Metrics | currencytotalInvoiceBalancetotalDebitMemoBalanceunappliedPaymentAmountunappliedCreditMemoAmountcontractedMrrreservedPaymentAmount | APIKey Account Metrics data sourceAQuAData Query |
| Subscription | currency | SOAP APISubscription data sourceAQuAData Query |
| Order Line Items | currency | APIOrder Line Item data sourceAQuAData Query |
| Invoice | currency | APIInvoice data sourceAQuAData Query |
| Credit Memo | currency | APICredit Memo data sourceAQuAData Query |
| Debit Memo | currency | APIDebit Memo data sourceAQuAData Query |

For a summary of REST API updates specific to this feature, see the "API updates for the Multiple Currencies feature" section in 2023 API Changelog and REST API Reference .
