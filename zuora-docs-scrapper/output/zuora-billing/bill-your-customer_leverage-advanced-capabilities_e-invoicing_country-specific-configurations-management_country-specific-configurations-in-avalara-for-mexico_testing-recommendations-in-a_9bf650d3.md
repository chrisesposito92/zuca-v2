---
title: "Testing recommendations in Avalara for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-avalara-for-mexico/testing-recommendations-in-avalara-for-mexico"
product: "zuora-billing"
scraped_at: "2026-02-20T17:35:32.127Z"
---

# Testing recommendations in Avalara for Mexico

Zuora's e-invoicing tests cover various billing document types and operations, with detailed test cases provided for reference.

Zuora has tested e-invoicing on various billing document types and operations with the default e-invoice file templates.The following table lists the test cases for your reference.

| Billing document type | Document source | Case category | Description |
| --- | --- | --- | --- |
| Invoice | Subscription | One charge | Create a subscription containing one rate plan charge with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Credit Memo | Invoice | One charge | Create a credit memo from the invoice, and post the credit memo. |
| Debit Memo | Invoice | One charge | Create a debit memo from the invoice, and post the debit memo. |
| Credit Memo | Invoice | One charge | Generate an invoice from the subscription, and reverse the invoice to create a credit memo from the invoice. |
| Credit Memo | Invoice | One charge | Generate an invoice from the subscription, and write off the invoice to create a credit memo from the invoice. |
| Credit Memo | Subscription | One charge | Generate a credit memo from the subscription cancellation, and post the credit memo. |
| Debit Memo | Credit Memo | One charge | Reverse the credit memo to create a debit memo from the invoice. |
| Invoice | Subscription | Multiple charges | Create a subscription containing multiple charges with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Credit Memo | Invoice | Multiple charges | Create a credit memo from the invoice, and post the credit memo. |
| Debit Memo | Invoice | Multiple charges | Create a debit memo from the invoice, and post the debit memo. |
| Credit Memo | Invoice | Multiple charges | Generate an invoice from the subscription, and reverse the invoice to create a credit memo from the invoice. |
| Credit Memo | Invoice | Multiple charges | Generate an invoice from the subscription, and write off the invoice to create a credit memo from the invoice. |
| Credit Memo | Subscription | Multiple charges | Generate a credit memo from the subscription cancellation, and post the credit memo. |
| Debit Memo | Credit Memo | Multiple charges | Reverse the credit memo to create a debit memo from the invoice. |
| Invoice | Standalone | Multiple charges | Create a standalone invoice containing multiple items from product rate plan charges, and post the invoice. |
| Credit Memo | Standalone | Multiple charges | Create a standalone credit memo containing multiple items from product rate plan charges, and post the credit memo. |
| Debit Memo | Standalone | Multiple charges | Create a standalone debit memo containing multiple items from product rate plan charges, and post the debit memo. |

Note: Zuora has not tested Mexico with a RFC number as Zuora can't apply for the RFC from the Mexican tax authority (SAT). RFC is a unique tax identification number assigned by the Mexican tax authority (SAT) to individuals and companies that are required to pay taxes in Mexico.
