---
title: "Configure to display subscription owner information on invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-to-display-subscription-owner-information-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:16.023Z"
---

# Configure to display subscription owner information on invoices

Learn how to configure invoices to display subscription owner information using the HTML template editor.

If you want to see account information about the corresponding subscription owner on invoices, use the Text component in the HTML template editor to add the merge field code to display the bill-to and sold-to contact of the subscription owner.

Note that the displayed information is based on the fact that all subscriptions have the same subscription owner; alternatively, only information about the first subscription among all subscriptions is displayed if multiple subscriptions exist.

To display information about the corresponding subscription owner on invoices, perform the following steps:

1.  In the Content tab of the HTML template editor, drag the Columns component into the HTML template. A Row block is displayed in the HTML template.
2.  In the HTML template, click the Row block, and then click Add Content in the block. The Content tab is displayed in the right panel.
3.  In the Content tab, drag the Text component into the HTML template. A Text block is displayed in the HTML template.
4.  If you want to display the bill-to contact information of the subscription owner, input the following header and merge field code in the Text block: Alternatively, if you want to display the sold-to contact information of the subscription owner, input the following header and merge field code in the Text block:

    Bill To of Subscription Owner {{#Invoice}}  {{#InvoiceItems|Map(Subscription)|Uniq|First(1)}} {{#Account.BillTo}} {{FirstName}} {{LastName}} {{Address1}} {{City}}, {{State}} {{PostalCode}} {{WorkEmail}} {{WorkPhone}} {{/Account.BillTo}} {{/InvoiceItems|Map(Subscription)|Uniq|First(1)}} {{/Invoice}}

    Alternatively, if you want to display the sold-to contact information of the subscription owner, input the following header and merge field code in the Text block:

    Sold To of Subscription Owner {{#Invoice}}  {{#InvoiceItems|Map(Subscription)|Uniq|First(1)}} {{#Account.SoldTo}} {{FirstName}} {{LastName}} {{Address1}} {{City}}, {{State}} {{PostalCode}} {{WorkEmail}} {{WorkPhone}} {{/Account.SoldTo}} {{/InvoiceItems|Map(Subscription)|Uniq|First(1)}} {{/Invoice}}

5.  Click Preview , and select an account and an invoice in the Preview Settings section to preview the corresponding PDF file.

The following image shows an example of subscription owner information that is displayed on the previewed invoice PDF file.

![HTML_invoice_template_subscription_owner.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2e638e0d-4e45-4489-8675-95d2ddee1e76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJlNjM4ZTBkLTRlNDUtNDQ4OS04Njc1LTk1ZDJkZGVlMWU3NiIsImV4cCI6MTc2NjY0MTM5NCwianRpIjoiYzA3MTNiN2QyOTdmNDdiYTllMjQ2MmZjYWVhYTkxNzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.OJEQGmvrWrRr0WXb2JfGhout9TFvMlZ-o5uS92GpT8M)
