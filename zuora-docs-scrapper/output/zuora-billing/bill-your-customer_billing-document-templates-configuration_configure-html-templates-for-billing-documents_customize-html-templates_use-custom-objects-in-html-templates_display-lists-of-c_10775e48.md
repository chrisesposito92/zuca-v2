---
title: "Display lists of custom object records"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates/display-lists-of-custom-object-records"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:12.087Z"
---

# Display lists of custom object records

Learn how to display lists of custom object records in invoices by defining custom objects and configuring HTML components.

To display a list of custom object records in invoices, perform the following steps:

1.  Define a custom object named reefer to store the reefers that each subscription has. One subscription can have multiple reefers. The following table lists the structures of the custom object. The custom object uses Subscription Name as the key, and its API name is `SubscriptionName__c` .

    | ID | Brand | Number | Volume | StartDate | Subscription Name |
    | --- | --- | --- | --- | --- | --- |
    | 0f9e8dc6-4256-4185-805a-efbb761245a4 | Brand1 | 10003 | 50m~3 | 2021-04-01 | A-S00000056 |
    | 0f9e8dc6-4256-4185-805a-efbb761245a5 | Brand2 | 10002 | 100m~3 | 2021-01-01 | A-S00000054 |
    | 0f9e8dc6-4256-4185-805a-efbb761245a9 | Brand3 | 10001 | 100m~3 | 2021-01-01 | A-S00000056 |

2.  Use the HTML component to configure how to display the reefers that an invoice contains. For more information about the configuration procedure, see Configure HTML codes in HTML templates.

    -   Use `{{#InvoiceItems|Map(Subscription)|Uniq}}`to construct the subscription list that the invoice contains.

    -   For each subscription, filter reefers based on the subscription number:

        {{#default\_\_reefers|FilterByRef(SubscriptionName\_\_c,EQ,SubscriptionNumber)}}
    -   For each reefer record, display its fields as a row in the table.


    The following information is an example of HTML codes. The style part is ignored.

    <style> ... </style> {{#Invoice}} <table class="table-grid u\_content\_custom\_generic\_table\_2"\> <thead><tr> <th style="width:auto; "\> Subscription Name </th> <th style="width:auto; "\> Brand </th> <th style="width:auto; "\> Number </th> <th style="width:auto; text-align:right;"\> Volume </th> <th style="width:auto; text-align:right;"\> Start Date </th></tr></thead> <tbody> {{#InvoiceItems|Map(Subscription)|Uniq}} {{Cmd\_Assign(SubscriptionNumber,Name)}} {{#default\_\_reefers|FilterByRef(SubscriptionName\_\_c,EQ,SubscriptionNumber)}} <tr> <td style=""\>{{SubscriptionName\_\_c}}</td> <td style=""\>{{Brand\_\_c}}</td> <td style=""\>{{Number\_\_c}}</td> <td style=""\>{{Volume\_\_c}}</td> <td style=""\>{{StartDate\_\_c}}</td> </tr> {{/default\_\_reefers|FilterByRef(SubscriptionName\_\_c,EQ,SubscriptionNumber)}} {{/InvoiceItems|Map(Subscription)|Uniq}} </tbody> </table> {{/Invoice}}

    The following image shows the preview result:

    ![Template Preview.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7667aebc-ac7d-41dc-93e5-2f2692b07e04?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2NjdhZWJjLWFjN2QtNDFkYy05M2U1LTJmMjY5MmIwN2UwNCIsImV4cCI6MTc2NjY0MTMzMCwianRpIjoiYTk3MmNmZmI1OTNhNGFlZGIzNWE3YWJlOGI4MmU3MGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.X5b43v3z8kKuuO2fXnDBDLwY4yqr7AYNI2zJqkPS_ow)
