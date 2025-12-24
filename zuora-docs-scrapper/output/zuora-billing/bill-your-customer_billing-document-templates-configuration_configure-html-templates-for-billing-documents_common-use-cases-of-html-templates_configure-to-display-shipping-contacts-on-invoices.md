---
title: "Configure to display shipping contacts on invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-to-display-shipping-contacts-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:13.421Z"
---

# Configure to display shipping contacts on invoices

Learn how to configure HTML templates to display shipping contacts on invoices using merge fields.

Occasionally, you might want to access other contacts associated with an account, in addition to Bill To and Sold To contacts. In this scenario, when defining HTML templates, you can use the `{{Invoice.Account.Contacts}}` merge field to access a list of Contact objects that belong to an account.

For example, if you want to display shipping contacts on invoices, perform the following steps:

1.  Create a custom field to distinguish the list of Contact objects that belong to an account. In this use case, you can create a custom field named `ContactType__c` , with the value being `Shipping` .
2.  In an HTML invoice template, click one Row block, and then click Add Content in the block. The Content tab is displayed in the right panel.
3.  In the Content tab, drag and drop the Text component into the HTML template. A Text block is displayed in the HTML template.
4.  In the Text block, type the following merge field code to filter out the shipping contact and display its fields: If you want to display the shipping contact only if it exists, type the following merge field code with the `IsEmpty` function to check whether a shipping contact exists:

    Shipping To:

    {{#Invoice.Account.Contacts|FilterByValue(ContactType\_\_c,EQ,"Shipping")}} {{FirstName}} {{LastName}} {{Address1}} {{City}}, {{State}} {{PostalCode}} {{/Invoice.Account.Contacts|FilterByValue(ContactType\_\_c,EQ,"Shipping")}}

    If you want to display the shipping contact only if it exists, type the following merge field code with the `IsEmpty` function to check whether a shipping contact exists:

    {{^Invoice.Account.Contacts|FilterByValue(ContactType\_\_c,EQ,"Shipping")|IsEmpty}} Shipping To: {{#Invoice.Account.Contacts|FilterByValue(ContactType\_\_c,EQ,"Shipping")|First(1)}} {{FirstName}} {{LastName}} {{Address1}} {{City}}, {{State}} {{PostalCode}} {{/Invoice.Account.Contacts|FilterByValue(ContactType\_\_c,EQ,"Shipping")|First(1)}} {{/Invoice.Account.Contacts|FilterByValue(ContactType\_\_c,EQ,"Shipping")|IsEmpty}}

5.  Click Save to save the configurations.
6.  Click Preview to switch to the Preview mode.
7.  In the Preview Settings section, select an existing account and one invoice to preview the rendering result.
