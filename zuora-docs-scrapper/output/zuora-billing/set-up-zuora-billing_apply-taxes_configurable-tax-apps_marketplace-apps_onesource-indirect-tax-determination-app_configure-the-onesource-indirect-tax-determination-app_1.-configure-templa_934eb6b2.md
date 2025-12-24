---
title: "Configure the taxVoid template"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/onesource-indirect-tax-determination-app/configure-the-onesource-indirect-tax-determination-app/1.-configure-templates/configure-the-taxvoid-template"
product: "zuora-billing"
scraped_at: "2025-12-24T05:08:17.507Z"
---

# Configure the taxVoid template

The taxVoid template is used to void billing documents and tax records when the taxVoid Call Handling option is enabled in Zuora.

If the taxVoid Call Handling option is set to Enable, Zuora uses the taxVoid template when sending a request to the tax vendor to void billing documents and subsequent tax records. The supported document types are Invoice, Credit Memo, and Debit Memo.

In the taxVoid template, set`code` to`DocVoided`. For example:

{ "code": "DocVoided" }

Tax vendor requirements for voiding tax calls vary. Contact your tax vendor to determine whether additional information needs to be included to void the document. Note that the taxVoid template currently only supports the`id`, `transactionId`, `taxCompanyCode` and `invoiceNumber` fields on the document object.
