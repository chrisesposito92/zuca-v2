---
title: "E-invoice file templates creation and testing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/e-invoice-file-templates-creation-and-testing"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:51.925Z"
---

# E-invoice file templates creation and testing

Before sending electronic billing documents to the Avalara sandbox environment, you must create e-invoice file templates in Zuora for Invoice, Credit Memo, and Debit Memo.

When a billing document is posted for a customer from a country that supports Avalara E-Invoicing, Zuora generates an Avalara-compliant electronic billing document based on the e-invoice file template and then submits the electronic billing document to Avalara.

For more information about Avalara's file format regulations, see [E-Invoicing mandate definitions](https://developer.avalara.com/elr-usecases/) in Avalara's documents. On this page, you can view lists of required, conditional, and optional tags of each country mandate, along with the path and description of each tag.

The procedure for creating an e-invoice file template varies depending on whether or not it is for a pre-integrated country.
