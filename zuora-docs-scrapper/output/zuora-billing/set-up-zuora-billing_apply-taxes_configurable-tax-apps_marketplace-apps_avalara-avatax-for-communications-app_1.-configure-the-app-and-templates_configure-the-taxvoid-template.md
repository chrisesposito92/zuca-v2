---
title: "Configure the taxVoid template"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/avalara-avatax-for-communications-app/1.-configure-the-app-and-templates/configure-the-taxvoid-template"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:48.416Z"
---

# Configure the taxVoid template

Learn how to configure the taxVoid template to void billing documents and tax records using Zuora's system.

If the taxVoid Call Handling option is set to Enable, Zuora uses the taxVoid template when sending a request to the tax vendor to void billing documents and subsequent tax records.

In the taxVoid template, identify the document to void and set`cmmt` to`false`. When identifying the document to void, use the same document identifier as in the Standard template. For example:

| Standard template | taxVoid template |
| --- | --- |
| { "doc": "{{document["invoiceNumber"]}}", "cmmt": "{{document["preview_mode"]}}" } | { "doc": "{{document["invoiceNumber"]}}", "cmmt": false } |

Tax vendor requirements for voiding tax calls vary. Contact your tax vendor to determine whether additional information needs to be included to void the document. Note that the taxVoid template currently only supports the`id`, `transactionId`, `taxCompanyCode` and `invoiceNumber` fields on the document object.

Note: In the Dynamic Request Template you can specify exemptions for invoices. For information about how to do this, see the

[Avalara developer documentation](https://developer.avalara.com/communications/dev-guide_rest_v2/reference/exemption/)

. Note that Avalara does not support specifying exemptions for invoice items.
