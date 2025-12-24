---
title: "Configure merge fields by using the Merge Field component"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-text-and-merge-fields-in-html-templates/configure-merge-fields-in-html-templates/configure-merge-fields-by-using-the-merge-field-component"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:02.878Z"
---

# Configure merge fields by using the Merge Field component

Learn how to configure merge fields in an HTML template using the Merge Field component in the Zuora UI.

To configure merge fields in an HTML template by using the Merge Field component through the Zuora UI, perform the following steps:

1.  In the HTML template, click one Row block where you want to add a merge field, and then click Add Content in the block. The Content tab is displayed in the right panel.
2.  In the Content tab, drag the Merge Field component into the HTML template. A Merge Field block is displayed in the HTML template.
3.  Click the Merge Field block in the HTML template. The Content panel is displayed on the right of the template editor.
4.  In the Merge Field section of the Content panel, configure merge fields.
    1.  Configure a simple merge field of the base Invoice object.

        1.  From the Merge Field list, select a field of the Invoice object. A corresponding merge field is displayed in the Merge Field block of the HTML invoice template. For example, if you want to add a merge field to display the invoice balance, select Balance from the Merge Field list. Then, the merge field is displayed as `{{Invoice.Balance}}` in the Merge Field block.

        2.  In the Function field, enter the functions that you want to decorate the merge field with. For example, if you want to localize the merge field based on the local profile, enter Localise . Then, the merge field is displayed as `{{Invoice.Balance}}|Localise}}` in the Merge Field block.

        3.  Optional: Configure the font family, font size, formatting, text color, background color, and content alignment for the merge field.


    2.  Configure a merge field of a child or grandchild object of the base Invoice object. For example, if you want to add a merge field to display the Bill To Contact's first name of the account that invoices are issued for, perform the following steps:

        1.  From the Merge Field list, select Account: Account .

        2.  From the displayed drop-down list, select BillTo: Contact .

        3.  From the displayed drop-down list, select FirstName . The merge field is displayed as `{{Invoice.Account.BillTo.FirstName}}` in the Merge Field block. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f28cf705-c5b0-448e-a7ea-40e21b0109dd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYyOGNmNzA1LWM1YjAtNDQ4ZS1hN2VhLTQwZTIxYjAxMDlkZCIsImV4cCI6MTc2NjY0MTI2MSwianRpIjoiNDQ2NGY2ZGVhZTU1NGQyNzhiZTc4NzQ5MmI5NzEzOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3Z7ydtG8MNDSC6uU7TuYMHa-_g8lT5Mh_gdipMTx66o)

        4.  Optional: Configure the font family, font size, formatting, text color, background color, and content alignment for the merge field.


    3.  If you want to define complex merge fields, set Advanced Options to on, and then type the code for customized merge fields in the text box. For example, if you want to add merge fields to display the Bill To Contact's first name and last name of the account that invoices are issued for, type `{{Invoice.Account.BillTo.FirstName}} {{Invoice.Account.BillTo.LastName}}` in the text box. Then, the merge fields configured by using the Merge Field component are displayed in a compact manner in the Merge Field block of the template. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/316b5f4f-da09-4400-b4af-7d93a0c7ce4c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMxNmI1ZjRmLWRhMDktNDQwMC1iNGFmLTdkOTNhMGM3Y2U0YyIsImV4cCI6MTc2NjY0MTI2MSwianRpIjoiNjcxMmJjZjUwYTU5NGEzNzllMTEwMjNkNWI2NGFmNTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.OjR9e_Ie9e8yBSY2-PNqq-I9_t4NHKScIWgzerIB23c)
    4.  Optional: Configure the font family, font size, formatting, text color, background color, and content alignment for the merge field.
5.  In the General section, configure container paddings for the merge field.
6.  Click Save to save the configurations.
