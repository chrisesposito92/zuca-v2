---
title: "Object Query - Expand, filter, fields, and sort"
url: "https://developer.zuora.com/docs/guides/expand-filter-fields-sort/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:49.428Z"
---

#

Object Query - Expand, filter, fields, and sort

The [Object Query](https://developer.zuora.com/api-references/api/tag/Object-Queries/) API operations allow you to query objects in your Zuora Billing tenant in an efficient, consistent, and flexible manne. Object Queries calls are synchronous. You can:

-   Dictate which object fields are returned for each record using `fields[]`
-   Retrieve fields from related records using `expand[]`
-   `filter[]` the records returned using logical operators
-   Sort the returned records using `sort[]`

For detailed information about the filterable, expandable, and sortable fields on each object, refer to the Query Parameters section for each API operation in the [API reference](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/).

Unlike Data Query, not every field can be filtered on or sorted on, and the list of related objects you can pull into your query is predefined. For detailed information about each object, check the Query Parameters section for each API operation in the [API reference](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/).

##

Using fields\[\] query parameter

The `fields[]` query parameter allows you to specify a subset of the fields on the named object that will be returned. A Billing Account object, for example, has at least 50 fields. The exact number depends on what options you have enabled and what custom fields you have added. When you query for multiple accounts, you might not want to see all 50+ fields for each account. Using the `fields[]` query parameter is how you get just the fields you care about.

Suppose that you want to query all accounts that use the Canadian Dollar as their currency, and you only want to see the name, number, and balance for each account:

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?account.fields[]=id,name,accountNumber,balance&filter[]=currency.EQ:CAD' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If the call succeeds, you would see results similar to this:

```json
{
  "data": [
    {
      "accountNumber": "A00024791",
      "balance": 0.0,
      "id": "8ad081dd904da165019051b001a02a3b",
      "name": "Oh Canada"
    },
    {
      "accountNumber": "A00024278",
      "balance": 0.0,
      "id": "e41259a16cb1f3aa5f4fd705bf3b05c4",
      "name": "Toronto Storage Co"
    }
  ]
}
```

Note that the order you list the fields in `fields[]` is not reflected in the output. So your custom code needs to get values by name instead of by location.

If you need to return a single record and you already know the ID or number of the object such as Account, you can use the companion [Retrieve an account](https://developer.zuora.com/v1-api-reference/api/operation/queryAccountByKey/) operation to get that specific record.

##

Using expand\[\] query parameter

Using the `expand[]` query parameter allows you to expand the collection of fields you can obtain beyond the named base object to the fields of the associated objects as well. We use the base object, Account, throughout this guide.

The associated objects available for expanding varies by object but is documented in each API operation in the API Reference.

Taking [List Accounts](https://developer.zuora.com/v1-api-reference/api/operation/queryAccounts/) as an example, in the Query Paremeters section, you can find all expandable objects in the `expand[]` parameter for Account like `billto`, `soldto`, `defaultpaymentmethod`, `subscriptions`, and so on. Note that the last two, `rateplans` and `rateplancharges` are not directly associated to the Account object, but to other objects such as Subscriptions that do belong to an Account. For example, we use the same basic Canadian Dollar filter, but we change the `fields[]` values and ask for the bill-to contact's first name and last name to be returned, and nothing else.

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?account.fields[]=name,accountNumber,balance&expand[]=billto&billto.fields[]=firstname,lastname&filter[]=currency.EQ:CAD' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

The returned response is similar to this:

```json
{
  "data": [
    {
      "accountNumber": "A00000133",
      "balance": 2170.0,
      "name": "PercentageDiscountOverrideOrder",
      "billTo": {
          "firstName": "Amy",
          "lastName": "Lawrence"
      }
    },
    {
      "accountNumber": "A00000132",
      "balance": 3250.0,
      "name": "PercentageDiscountOverrideOrder",
      "billTo": {
          "firstName": "Amy",
          "lastName": "Lawrence"
      }
    },
    {...}
  ]
}
```

##

Using filter\[\] query parameter

The `filter[]` query parameter allows you to filter the returned records by specifying spcific conditions. In our examples so far we've used a simple example: `filter[]=currency.EQ:CAD`. Multiple filters in a single call are combined using AND logic, and Object Query does not support an OR operator. You can only filter on fields listed in the `filter[]` parameter section of each API operation in the [API reference](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/).The following table lists all supported operators that you can use to construct a `filter[]` query, and an example for each operator.
| Operator | Description | Example |
| --- | --- | --- |
| EQ | Exact match operator | currency.EQ:EUR |
| NE | Returns objects that do not match the clause | currency.NE:CAN |
| LT | Less than operator | quantity.LT:200 |
| GT | Greater than operator | quantity.GT:200 |
| SW | Starts with operator | name.SW:Acc |
| IN | Specifies a list of values that will be returned | name.IN:[Amy,Bella] |
| GE | Greater than or equal with operator | quantity.GE:200 |
| LE | Less than or equal with operator | quantity.LE:200 |

All search fields support exact and case-insensitive matching with `EQ`, `NE`, and `IN`.
String type fields like email and name support case-insensitive matching with \`SW\`.
Numeric fields like amount and Date type fields like \`updateddate\` support numeric comparators like \`LT\`, \`LE\`, \`GT\` and \`GE\`.

For the example in the previous section, we've kept the 'CAD' filter on `currency`. Now we add another filter on `updateddate`, which is an auto-generated date timestamp of when the account was last updated. The `updateddate.LT:2024-01-01T00:00:00Z` filter will exclude Accounts updated after the end of 2023. Our two filters combined will only return accounts with a currency of CAD that haven't been updated recently.

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=currency.EQ:CAD&filter[]=updateddate.LT:2024-01-01T00:00:00Z' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If no accounts meet this criteria, you would get a '200 OK' response with an empty `data` array.

```json
{
  "data": []
}
```

To filter date fields, such as transaction dates like invoice date or payment date, you have to use the `YYYY-MM-DD` date format. Do not use quotes around a date.

The following example shows how to include accounts with the CAD currency that were last invoiced before April 22nd, 2024:

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=currency.EQ:CAD&filter[]=lastinvoicedate.LT:2024-04-22' \
-H "Authorization: Bearer $ztoken" \
-H "Content-Type: application/json"
```

The following example shows you how a space can be embedded into the filter condition. The name of the account we want to query is "Oh Canada":

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=name.EQ:Oh%20Canada' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If the records to be combined through the OR logic and are based on two or more values in a single field, you can use the `IN` operator. In the example in the operator table above, the records returned have either `Amy` OR `Bella` in the `name` field. In the scenario where you need to filter on different fields combined together with the OR logic, use two Object Query calls and "OR" the results in your code.
You have to make extensive use of the URL encoded values in queries, similar to using `%20` for a space in the previous example. When using the IN operator, you should URL encode the square brackets surrounding the IN list of values to match. A left square bracket is `%5B` and the right square bracket is `%5D`. So a query for Canadian Dollar or UK Pound billing accounts would be:

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=currency.IN:%5BCAD,GBP%5D' \
-H "Authorization: Bearer $ztoken" \
-H "Content-Type: application/json"
```

Failure to do so can result in the `curl: (3) bad range in URL position` error.

**Note**: To filter on a field with the `null` value, specify a filter condition using the `<field>.EQ:null` syntax.

##

Using sort\[\] query parameter

You can sort query results using the supported `sort[]` parameters for the base object. For supported `sort[]` values for each operation, check the Query Parameters section for each operation in the [API reference](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/). . You can change the sorting order using `ASC` or `DESC` as appropriate. You cannot sort on more than one field or any related object fields.

##

Using custom fields

You can include custom fields in the returned results, or filter on [indexed custom fields](https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Custom_Fields/Manage_custom_fields_with_the_Object_Manager).

##

Pagination

By default, records returned by your query are paginated 10 records at a time. You can change this value to be any positive integer up to 99 using the `pageSize` parameter. The following example specifies a `pageSize` to 2:

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?pageSize=2&filter[]=currency.EQ:CAD&account.fields[]=name,accountNumber,balance&expand[]=billto&billto.fields[]=firstname,lastname' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If multiple pages of records are returned, then a `nextPage` value is included in the results:

```json
{
  "nextPage": "W3sidmFsdWUiOiJPaCBDYW5hZGEiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiTmFtZSIsIm8zZGVyIjoiREVTQyJ9fSx7InZhbHVlIjoiOGFkMDgxZGQ5MDRkYTE2NTAxOTA1MWIwMDFhMDJhM2IiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiSWQiLCJvcmRlciI6IkRFU0MifX1d",
  "data": [
    {
      "accountNumber": "A00024278",
      "balance": 0.0,
      "name": "Toronto Storage Co",
      "billTo": {
        "firstName": "Michelle",
        "lastName": "Beckman"
      }
    },
    {...}
  ]
}
```

To obtain the next page of results, add the `nextPage` value returned as the value of the `cursor` parameter and resubmit your query. Nothing else needs to change. So in our example, it would mean resubmitting this:

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?pageSize=2&filter[]=currency.EQ:CAD&account.fields[]=name,accountNumber,balance&expand[]=billto&billto.fields[]=firstname,lastname&cursor=W3sidmFsdWUiOiJPaCBDYW5hZGEiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiTmFtZSIsIm8zZGVyIjoiREVTQyJ9fSx7InZhbHVlIjoiOGFkMDgxZGQ5MDRkYTE2NTAxOTA1MWIwMDFhMDJhM2IiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiSWQiLCJvcmRlciI6IkRFU0MifX1d' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

When you've retrieved the last page of results, `nextPage` will no longer appear in the response.

Bear in mind that pagination focuses the base object and is not designed for expanded objects. It means that not all expandable object records can be exposed through Object Query.

Assume you have a billing account with 20 subscriptions and you ask to expand the response with subscription details. You might run an object query similar to this:

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?filter[]=accountnumber.EQ:A00024824&expand[]=subscriptions' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

Since `pageSize` is not specified, the default value of 10 is used. It would result in one account with 10 subscription objects getting listed with no `nextPage` cursor because there are no more accounts to be returned. To obtain the remaining 10 subscriptions, you should specify `pageSize=20` in the query.
To summarize, the `pageSize` cursor behavior primarily applies to the base object, and the expanded objects are truncated at `pageSize`. You can increase the `pageSize` value to allow more expanded objects returned in the response. However, when an object has more than 99 expanded objects, the objects beyond 99 cannot be queried, which is a known limitation.

##

cURL example for using expand\[\], filter\[\], sort\[\], and fields\[\] query parameters

The following cURL example demonstrates how to query products with the following requirements:

-   Returns only the accounts with the default currency set to `CAD`
-   Displays only the `name`, `accountNumber`, `balance` and `ACC_Banner__c`(indexed) fields of each account
-   Expands the associated BillToContact object while only the first name and last name of the bill-to contact are returned
-   The results are sorted by account name in the descending order

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?account.fields[]=name,accountNumber,balance,ACC_Banner__c&expand[]=billto&billto.fields[]=firstname,lastname&filter[]=currency.EQ:CAD&sort[]=name.DESC' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

For better understanding, we decompose the URL into different components and provide description for each component in the following table:

| URL Component | Description |
| --- | --- |
| https://rest.apisandbox.zuora.com/object-query/accounts | Object Query root URL, indicating that we're using an API Sandbox tenant and running an object query on Accounts. You need to modify this root URL based on the tenant you are using or the object you are querying against. |
| account.fields[]=name,accountNumber,balance,ACC_Banner__c | We're using fields[] to tell the server that we only want the listed fields. In this example, we've shown you how to include a custom field. Remove this field from the list if you want this example to work in your tenant. The "API name" of the custom field is used. You can look up the available custom fields on each object in your Zuora tenant using the Object Manager feature from the Zuora UI. |
| expand[]=billto&billto.fields[]=firstname,lastname | We are using expand[] to add the BillToContact object to our result set but we're also using fields[] so that only firstname and lastname from the BilltoContact object are returned. |
| filter[]=currency.EQ:CAD | This filter only returns accounts with a default currency of CAD, the Canadian Dollar. |
| sort[]=name.DESC | A basic sort on the account name ensuring the returned accounts will be listed in an descending order of the account name. |

There is no required sequence for the query parameters.

##

SDK Examples

The same functionality is available using our client libraries, so you can also use these query parameters in our client libraries. Note that the v3 libraries (or v1 for C#) currently do not include support for `fields[]`.The following code examples use the `expand[]`, `filter[]`, and `sort[]` query parameters to filter the accounts based on currency, expanding on subscriptions and the default payment method, and sorting the results by the ascending order of account number. A subset of key fields are formatted and printed out to the console.

JavaNode.jsPythonC#

```java
QueryAccountsResponse response = zuoraClient.objectQueriesApi()
        .queryAccountsApi()
        .filter(List.of("currency.EQ:CAD"))
        .expand(List.of("subscriptions","defaultpaymentmethod"))
        .sort(List.of("accountNumber.ASC"))
        .execute();

// Process the response
List<ExpandedAccount> accounts = response.getData();
if (accounts != null) {
    for (ExpandedAccount account : accounts) {
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Currency: " + account.getCurrency());
        System.out.println("Name: " + account.getName());
        System.out.println("MRR: " + account.getMrr());

        // Print subscriptions
        if (account.getSubscriptions() != null) {
            for (ExpandedSubscription sub : account.getSubscriptions()) {
                System.out.println("Subscription: " + sub.getName());
            }
        }

        // Print default payment method
        ExpandedPaymentMethod defaultPaymentMethod = account.getDefaultPaymentMethod();
        if (defaultPaymentMethod != null) {
            System.out.println("Default Payment Method Type: " + defaultPaymentMethod.getType());
        }

        System.out.println("-".repeat(40));
}
}
```

```javascript
const response = await zuoraClient.objectQueriesApi.queryAccounts({
  filter: ['currency.EQ:USD'],
  expand: ['subscriptions','defaultpaymentmethod'],
  sort: ['accountNumber.ASC'],
});

const accounts = response.data;
accounts.forEach((account) => {
    console.log(`Account Number: ${account.accountNumber}`);
    console.log(`Currency: ${account.currency}`);
    console.log(`Name: ${account.name}`);
    console.log(`MRR: ${account.mrr}`);

    // Print subscriptions
    if (account.subscriptions) {
        account.subscriptions.forEach((sub) => {
            console.log(`Subscription: ${sub.name}`);
        });
    }

    // Print default payment method
    if (account.defaultPaymentMethod) {
        console.log(`Default Payment Method Type: ${account.defaultPaymentMethod.type}`);
    }

    console.log("-".repeat(40));
});
```

```python
response = client.object_queries_api().query_accounts(filter=['currency.EQ:CAD'],sort=['accountnumber.ASC'],expand=['subscriptions,defaultpaymentmethod'])
resp_data = response.data
# Iterating through each record in the 'data' list
for record in resp_data:
   print(f"Account Number: {record.account_number}")
   print(f"Currency: {record.currency}")
   print(f"Name: {record.name}")
   print(f"MRR: {record.mrr}")
   for sub in record.subscriptions:
       print(f"Subscription: {sub.name}")
   if record.default_payment_method:
       print(f"Default Payment Method Type: {record.default_payment_method.type}")
   print("-" * 40)
```

```csharp
QueryAccountsResponse response = await zuoraClient.ObjectQueriesApi.QueryAccountsAsync(
    expand:["subscriptions", "defaultpaymentmethod"],
    filter:["currency.EQ:CAD"],
    sort:["accountNumber.ASC"]
);

// Process the response
List<ExpandedAccount> accounts = response.Data;
foreach (var account in accounts)
{
    Console.WriteLine($"Account Number: {account.AccountNumber}");
    Console.WriteLine($"Currency: {account.Currency}");
    Console.WriteLine($"Name: {account.Name}");
    Console.WriteLine($"MRR: {account.Mrr}");

    // Print subscriptions
    if (account.Subscriptions != null)
    {
        foreach (var sub in account.Subscriptions)
        {
            Console.WriteLine($"Subscription: {sub.Name}");
        }
    }

    // Print default payment method
    if (account.DefaultPaymentMethod != null)
    {
        Console.WriteLine($"Default Payment Method Type: {account.DefaultPaymentMethod.Type}");
    }

    Console.WriteLine(new string('-', 40));
}
```

##

Throttling

-   Rate limits for Object Query operations are the same as the REST API rate limits. See [Rate Limits](https://developer.zuora.com/rest-api/general-concepts/rate-concurrency-limits/#rate-limits) for more information.

##

Limitations

-   It is not recommended to filter on unindexed standard or custom fields. Doing so can cause performance degradation.
-   Filtering on base objects is supported, but you cannot filter on the associated expandable objects. For example, when calling the [List subscriptions](https://developer.zuora.com/api-references/api/operation/querySubscriptions/) operation, you can only filter on the Subscription objects. Filtering on the Account object is not supported.
-   To filter on an empty string, specify a filter condition using the `<field>.EQ:%02%03` syntax. `<field>.EQ:''` is not supported.
-   If you want to expose a Relationship-type field on custom objects through Object Query, you must set the field name to be suffixed with `Id__c` (case-sensitive). For example, `RatePlanId__c`. Otherwise, it cannot be queried through the Object Query API.
-   It is not supported to filter custom objects using the `SW` or `NE` operator.
-   The pagination for Object Query is primarily designed for querying the base object. It means that not all expandable object items can be exposed through Object Query. For detailed example, see [Pagination](https://developer.zuora.com/docs/guides/pagination/#how-pagination-works-for-the-object-query-api).
-   The following objects are currently not supported:
    -   Catalog Group
    -   Product Rate Plan Definition
    -   E-Invoicing objects
    -   Payment Gateway
-   Some object types are only available when specific features are enabled. For example, the Invoice Settlement or the Invoice Settlement Harmonization feature must be enabled to access the CreditMemo object. If there is a feature enablement change, the changes in object availability may not take effect immediately. There may be a delay before newly enabled object types and their related fields become accessible via the API due to caching refresh intervals in the related services.
