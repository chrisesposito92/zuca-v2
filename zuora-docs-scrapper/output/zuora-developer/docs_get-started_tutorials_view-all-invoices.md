---
title: "View all invoices on the account"
url: "https://developer.zuora.com/docs/get-started/tutorials/view-all-invoices/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:04.657Z"
---

#

View all invoices on the account

##

End-user flow

On the My Account page, they click the **My invoices** option to check all the invoices associated with their accounts.

##

Sample code

The following sample code calls the [List invoices](https://developer.zuora.com/v1-api-reference/api/operation/queryInvoices/) operation, which returns all invoices (including invoice items) associated with their account.

Note that The account ID (`3A8b48f158e0b6af326c49d9b098a1db84`) can be obtained from the "Create an account" API call.

cURLJavaNode.jsPythonC#

```bash
curl -L -g -X GET 'https://rest.apisandbox.zuora.com/object-query/invoices?expand[]=invoiceitems&filter[]=accountId.EQ%3A8b48f158e0b6af326c49d9b098a1db84' \
-H 'Authorization: Bearer 42759df698e348528d5ec2a1df53f7ac'
```

```java
QueryInvoicesResponse invoicesList = zuoraClient.objectQueriesApi()
            .queryInvoicesApi()
            .filter(List.of("accountId.EQ:3A8b48f158e0b6af326c49d9b098a1db84"))
            .execute();

System.out.print(invoicesList);
```

```javascript
const invoices = await zuoraClient.objectQueriesApi.queryInvoices({
    filter: ['accountId.EQ:3A8b48f158e0b6af326c49d9b098a1db84'],
}
);

console.log(JSON.stringify(invoices, (k, v) => v ?? undefined, 2))
```

```python
def query_invoices_by_account(account_key, client=None):
    if not client:
        client = get_client()
    try:
        api_response = client.object_queries_api().query_invoices(
            filter=['accountId.EQ:%s' % account_key])
        print(api_response)
    except ApiException as e:
        print("Exception when calling ObjectQueriesApi->query_invoices_by_account: %s" % e)

if __name__ == '__main__':
    query_invoices_by_account('3A8b48f158e0b6af326c49d9b098a1db84')
```

```csharp
QueryInvoicesResponse invoices = zuoraClient.ObjectQueriesApi.QueryInvoices
(
    expand:["invoiceitems"],
    filter:["accountId.EQ:8ad0875993ba396701943ed381591dad"]
);

Console.WriteLine(invoices.ToJson());
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "data": [
        {
            "accountId": "3A8b48f158e0b6af326c49d9b098a1db84",
            "adjustmentAmount": 0.0,
            "amount": 49.99,
            "amountWithoutTax": 49.99,
            "autoPay": true,
            "balance": 49.99,
            "comments": "",
            "createdById": "ebd653b0f1ea46df87835085e26897ce",
            "createdDate": "2024-08-07T09:30:39Z",
            "creditBalanceAdjustmentAmount": 0.0,
            "creditMemoAmount": 0.0,
            "currency": "USD",
            "dueDate": "2024-08-07",
            "id": "8a8aa2fe912c061f01912c2d1c4a525e",
            "includesOneTime": true,
            "includesRecurring": true,
            "includesUsage": true,
            "invoiceDate": "2024-08-07",
            "invoiceNumber": "INV00000041",
            "paymentAmount": 0.0,
            "postedBy": "ebd653b0f1ea46df87835085e26897ce",
            "postedDate": "2024-08-07T09:30:39Z",
            "refundAmount": 0.0,
            "reversed": false,
            "source": "API",
            "sourceType": "Subscription",
            "status": "Posted",
            "targetDate": "2024-07-01",
            "taxAmount": 0.0,
            "taxExemptAmount": 0.0,
            "updatedById": "ebd653b0f1ea46df87835085e26897ce",
            "updatedDate": "2024-08-07T09:30:39Z"
        },
        {
            "accountId": "3A8b48f158e0b6af326c49d9b098a1db84",
            "adjustmentAmount": 0.0,
            "amount": 49.99,
            "amountWithoutTax": 49.99,
            "autoPay": true,
            "balance": 49.99,
            "comments": "",
            "createdById": "ebd653b0f1ea46df87835085e26897ce",
            "createdDate": "2024-08-07T09:19:08Z",
            "creditBalanceAdjustmentAmount": 0.0,
            "creditMemoAmount": 0.0,
            "currency": "USD",
            "dueDate": "2024-08-07",
            "id": "8a8aa16f912bed7901912c22904a15f0",
            "includesOneTime": true,
            "includesRecurring": true,
            "includesUsage": true,
            "invoiceDate": "2024-08-07",
            "invoiceNumber": "INV00000040",
            "paymentAmount": 0.0,
            "postedBy": "ebd653b0f1ea46df87835085e26897ce",
            "postedDate": "2024-08-07T09:19:08Z",
            "refundAmount": 0.0,
            "reversed": false,
            "source": "API",
            "sourceType": "Subscription",
            "status": "Posted",
            "targetDate": "2024-07-01",
            "taxAmount": 0.0,
            "taxExemptAmount": 0.0,
            "updatedById": "ebd653b0f1ea46df87835085e26897ce",
            "updatedDate": "2024-08-07T09:19:08Z"
        }
    ]
}
```
