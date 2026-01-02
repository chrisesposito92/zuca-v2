---
title: "View the generated invoice"
url: "https://developer.zuora.com/docs/get-started/tutorials/view-invoice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:05.020Z"
---

#

View the generated invoice

##

End-user flow

Imagine you want to present a confirmation page similar to the one below:

![Show the generated invoice](/b63e7034284e5642ecc6e94b955e9f4b/Generated-invoice.png)

This step calls the [Retrieve an invoice](https://developer.zuora.com/v1-api-reference/api/operation/queryInvoiceByKey/) Object Query API, passing in the invoice number obtained from the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call (INV00026831).

##

Sample code

The following sample code retrieves the detailed information for the invoice where the invoice number is `INV00026831`.Note that the account ID (`3A8b48f158e0b6af326c49d9b098a1db84`) can be obtained from the "Create an account" API call.

cURLJavaNode.jsPythonC#

```bash
curl -L -g -X GET 'https://rest.test.zuora.com/object-query/invoices/INV00026831?expand[]=invoiceitems' \
-H 'Authorization: Bearer df19194eb1d64153b71bff6af33c039a'
```

```java
ExpandedInvoice invoice = zuoraClient.objectQueriesApi()
        .queryInvoiceByKeyApi("INV00026831")
        .expand(List.of("invoiceitems"))
        .execute();

System.out.println(invoice);
```

```javascript
const invoices = await zuoraClient.objectQueriesApi.queryInvoiceByKey('INV00026831',{
    expand: ['invoiceitems']
});

console.log(JSON.stringify(invoices, (k, v) => v ?? undefined, 2))
```

```python
def query_invoice_by_number(invoice_number, client=None):
    if not client:
        client = get_client()
    try:
        api_response = client.object_queries_api().query_invoice_by_key(
            invoice_number,
            expand=['invoiceItems'])
        print(api_response)
    except ApiException as e:
        if e.status == 404:
            print("Invoice %s not found" % invoice_number)
        else:
            print("Exception when calling ObjectQueriesApi->query_invoice_by_key: status: %s, reason: %s"
                  % (e.status, e.reason))

if __name__ == '__main__':
    query_invoice_by_number('INV00026826')
```

```csharp
ExpandedInvoice invoice = zuoraClient.ObjectQueriesApi.QueryInvoiceByKey("INV00147298",expand:["invoiceitems"]);

Console.WriteLine(invoice.ToJson());
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "accountId": "8a8aa3bc90e7ff5f019125e2893f6fef",
    "adjustmentAmount": 0.0,
    "amount": 49.99,
    "amountWithoutTax": 49.99,
    "autoPay": true,
    "balance": 0.0,
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
    "invoiceNumber": "INV00026831",
    "paymentAmount": 49.99,
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
    "updatedDate": "2024-08-07T09:30:39Z",
    "invoiceItems": [
        {
            "accountId": "8a8aa3bc90e7ff5f019125e2893f6fef",
            "accountReceivableAccountingCodeId": "8a368bbf87b6d5910187b80aaa9b0be0",
            "accountingCode": "Subscription Revenue",
            "balance": 0.0,
            "billToContactId": "8a8aa3bc90e7ff5f019125e2896e6ff0",
            "chargeAmount": 49.99,
            "chargeDate": "2024-08-07T09:30:39Z",
            "chargeName": "Recurring per unit fee",
            "chargeNumber": "C-00000041",
            "createdById": "ebd653b0f1ea46df87835085e26897ce",
            "createdDate": "2024-08-07T09:30:39Z",
            "deferredRevenueAccountingCodeId": "8a368d0d87b6d5a10187b82c04c62ef7",
            "description": "No refund if you cancel after 7 days.",
            "discountAmount": 0.0,
            "excludeItemBillingFromRevenueAccounting": false,
            "id": "8a8aa2fe912c061f01912c2d1c58525f",
            "invoiceId": "8a8aa2fe912c061f01912c2d1c4a525e",
            "numberOfDeliveries": 0.0,
            "processingType": "0",
            "productId": "8a8aa36c90e7ff7c0190ece0f3153aff",
            "productRatePlanChargeId": "8a8aa19590e7dea30190ecf807da39ab",
            "productRatePlanId": "8a8aa19590e7dea30190ecf74de939a9",
            "quantity": 1.0,
            "ratePlanChargeId": "8a8aa2fe912c061f01912c2d1b79524e",
            "ratePlanId": "8a8aa2fe912c061f01912c2d1b6c524d",
            "recognizedRevenueAccountingCodeId": "8a368d0d87b6d5a10187b82c04c62ef7",
            "reflectDiscountInNetAmount": false,
            "sKU": "SKU-00000019",
            "serviceEndDate": "2024-07-31",
            "serviceStartDate": "2024-07-01",
            "soldToContactId": "8a8aa3bc90e7ff5f019125e2897b6ff2",
            "sourceItemType": "SubscriptionComponent",
            "subscriptionId": "8a8aa2fe912c061f01912c2d1b0d5248",
            "subscriptionNumber": "A-S00000031",
            "taxAmount": 0.0,
            "taxExemptAmount": 0.0,
            "uOM": "License",
            "unitPrice": 49.99,
            "updatedById": "ebd653b0f1ea46df87835085e26897ce",
            "updatedDate": "2024-08-07T09:30:40Z"
        }
    ]
}
```
