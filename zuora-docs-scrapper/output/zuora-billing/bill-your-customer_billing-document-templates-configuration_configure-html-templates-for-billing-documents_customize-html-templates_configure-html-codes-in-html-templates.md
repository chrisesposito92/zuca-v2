---
title: "Configure HTML codes in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-html-codes-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:59.051Z"
---

# Configure HTML codes in HTML templates

Learn how to configure HTML codes in templates using existing components and HTML skills to customize invoice displays.

You can use the HTML component to customize your template with complex logic. You might need HTML skills including HTML Cascading Style Sheets(CSS ), HTML Tables, and so on. See the [HTML Tutorial](https://www.w3schools.com/html/default.asp) for more information.

When you configure HTML codes in HTML templates, you do not have to build the code from scratch. For example, you can use the existing components like Charge Details, Tax Summary, and Data Table to build a table first, copy their HTML source code, and then create an HTML component.

The following tutorial demonstrates how to use the HTML component to display the charge details table per subscription.

This tutorial takes invoices as an example; the configuration procedure is similar for credit memos and debit memos.

To configure HTML codes in an HTML invoice template, perform the following steps:

1.  In the HTML template, configure a charge details table through the Data Table component. See Configure data tables in HTML templates for more information. As shown in the following image, the data table contains four columns, and its records are sorted by service start date and grouped by the `Subscription.Name` field of the InvoiceItems object.
2.  In the HTML template, click the Data Table block. The Content panel is displayed on the right of the template editor.
3.  In the Data Table section, scroll down to the HTML Source text box, and copy all the HTML source code. You can delete the data table after you copy the source code.
4.  In the HTML template, click the Rows block where you want to configure HTML codes. The Content panel is displayed on the right of the template editor.
5.  In the Content tab, drag the HTML component into the HTML template.
6.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
7.  In the HTML section, paste the copied HTML source code into the HTML editor, and modify the code as follows. The code iterates all subscriptions, displays a charge details table per subscription, and shows the subtotal amount for each table.

    {{#Invoice}} {{#InvoiceItems|SortBy(ServiceStartDate,ASC)|GroupBy(Subscription.Name)}} <h4>Subscription: {{Subscription.Name}}</h4> {{Cmd\_Assign(BySubscriptionName,\_Group)}} <table class="table-grid u\_content\_custom\_generic\_table\_1"\> <thead><tr> <th style="width:auto; text-align:right;"\> Description </th> <th style="width:auto; text-align:right;"\> Charge Amount </th> <th style="width:auto;text-align:right; "\> Tax </th> <th style="width:auto; text-align:right;"\> Total </th></tr></thead> <tbody> {{#BySubscriptionName}} <tr> <td style=""\>{{ChargeName}}</td> <td style="text-align:right;"\>{{ChargeAmount}}</td> <td style="text-align:right;"\>{{TaxAmount}}</td> <td style="text-align:right;"\>{{#Wp\_Eval}}{{ChargeAmount}}+{{TaxAmount}}{{/Wp\_Eval}}</td> </tr> {{/BySubscriptionName}} <tr> <td style="text-align:right;"\>Subtotal</td> <td style="text-align:right;"\>{{BySubscriptionName|Sum(ChargeAmount)}}</td> <td style="text-align:right;"\>{{BySubscriptionName|Sum(TaxAmount)}}</td> <td style="text-align:right;"\>{{#Wp\_Eval}}{{BySubscriptionName|Sum(ChargeAmount)}}+{{BySubscriptionName|Sum(TaxAmount)}}{{/Wp\_Eval}}</td> </tr> </tbody> </table> {{/InvoiceItems|SortBy(ServiceStartDate,ASC)|GroupBy(Subscription.Name)}} {{/Invoice}}

    Note:

    Do not assign values to standard field names. For example, the standard field UOM must not be used as a variable or repurposed to store other values. For example:

    {{Cmd\_Assign(UOM,OrderLineItem.UOM)}}

8.  Click Save to save the configurations.
9.  Click Preview to switch to the Preview mode, and select a real invoice to preview the rendered results.

The following image shows an example of the preview result.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8c75e618-ba27-4088-957d-59258141560b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhjNzVlNjE4LWJhMjctNDA4OC05NTdkLTU5MjU4MTQxNTYwYiIsImV4cCI6MTc2NjY0MTMxNywianRpIjoiNmYyNzc4NjJiMWI2NDFkYTg5NmY1Zjk2NzU0NzVmZGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZqspzYrdD8O2MfWBTkJL6p9pSibyto7UZf4Ij51q71M)
