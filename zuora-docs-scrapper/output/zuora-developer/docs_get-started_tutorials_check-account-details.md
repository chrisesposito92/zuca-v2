---
title: "Check account details"
url: "https://developer.zuora.com/docs/get-started/tutorials/check-account-details/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:04.880Z"
---

#

Check account details

##

End-user flow

Imagine you want to create a "My Account Details" menu option or button. Your customers can confirm their bill-to address and view their account balances.

##

Sample code

The following sample code calls the [Retrieve an account](https://developer.zuora.com/v1-api-reference/api/operation/queryAccountByKey/) API, which returns their account details including the bill-to contact information.

The account number can be obtained from the "Create a billing account" section.

cURLJavaNode.jsPythonC#

```bash
curl -L -g -X GET 'https://rest.test.zuora.com/object-query/accounts/A00000029?expand[]=billto' \
-H 'Authorization: Bearer 55969055e1804f139126a5890fc9ff84'
```

```java
ExpandedAccount account = zuoraClient.objectQueriesApi()
            .queryAccountByKeyApi(accountKey)
            .expand(new ArrayList<>(Arrays.asList("billto")))
            .execute();

System.out.println(account);
```

```javascript
const account = await zuoraClient.objectQueriesApi.queryAccountByKey('A00024294',{
     expand: ['billto']
});

console.log(JSON.stringify(account, (k, v) => v ?? undefined, 2));
```

```python
def query_account_by_key(account_key, client=None):
    if not client:
        client = get_client()
    try:
        api_response = client.object_queries_api().query_account_by_key(
            account_key,
            expand=['billTo'])
        print(api_response.to_json())
        return api_response
    except ApiException as e:
        if e.status == 404:
            print("Account %s not found" % account_key)
        else:
            print("Exception when calling ObjectQueriesApi->query_account_by_key: status: %s, reason: %s, body: %s"
                  % (e.status, e.reason, e.body))

if __name__ == '__main__':
    query_account_by_key('A00024294')
```

```csharp
ExpandedAccount accountDetailResponse = zuoraClient.ObjectQueriesApi.QueryAccountByKey
(
    "8ad0980c93ba4d1b019421683f2d474b",
    expand: new List<String> {"billto","paymentmethods"}
);

Console.WriteLine(accountDetailResponse.ToJson());
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "accountNumber": "A00000029",
    "allowInvoiceEdit": false,
    "autoPay": false,
    "balance": 149.97,
    "batch": "Batch1",
    "bcdSettingOption": "ManualSet",
    "billCycleDay": 1,
    "billToId": "8a8aa3bc90e7ff5f019125e2896e6ff0",
    "createdById": "ebd653b0f1ea46df87835085e26897ce",
    "createdDate": "2024-08-06T04:11:28Z",
    "creditBalance": 0.0,
    "currency": "USD",
    "id": "8a8aa3bc90e7ff5f019125e2893f6fef",
    "invoiceDeliveryPrefsEmail": false,
    "invoiceDeliveryPrefsPrint": false,
    "invoiceTemplateId": "8a368bbf87b6d5910187b80ab8f40d0b",
    "lastInvoiceDate": "2024-08-07",
    "mrr": 249.95,
    "name": "Amy's account",
    "partnerAccount": false,
    "paymentMethodCascadingConsent": false,
    "paymentTerm": "Due Upon Receipt",
    "soldToId": "8a8aa3bc90e7ff5f019125e2897b6ff2",
    "status": "Active",
    "taxExemptStatus": "No",
    "totalDebitMemoBalance": 0.0,
    "totalInvoiceBalance": 149.97,
    "unappliedBalance": 0.0,
    "unappliedCreditMemoAmount": 0.0,
    "updatedById": "ebd653b0f1ea46df87835085e26897ce",
    "updatedDate": "2024-08-07T09:30:39Z",
    "billTo": {
        "accountId": "8a8aa3bc90e7ff5f019125e2893f6fef",
        "country": "United States",
        "createdById": "ebd653b0f1ea46df87835085e26897ce",
        "createdDate": "2024-08-06T04:11:28Z",
        "firstName": "Amy",
        "id": "8a8aa3bc90e7ff5f019125e2896e6ff0",
        "lastName": "Lawrence",
        "state": "California",
        "updatedById": "ebd653b0f1ea46df87835085e26897ce",
        "updatedDate": "2024-08-06T04:11:28Z"
    }
}
```
