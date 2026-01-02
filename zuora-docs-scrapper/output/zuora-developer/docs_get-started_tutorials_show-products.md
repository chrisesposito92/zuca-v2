---
title: "Show products to your customers"
url: "https://developer.zuora.com/docs/get-started/tutorials/show-products/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:03.981Z"
---

#

Show products to your customers

##

End-user flow

Imagine you want to present a pricing page like below based on the products you have created in the Zuora Billing product catalog:

![Example product catalog page](/14cee3d4f7f6dab00add926e2441975b/SmartLearn-catalog.png)

##

Sample code

The following sample codes calls the [List products](https://developer.zuora.com/v1-api-reference/api/operation/queryProducts/) API and returns a list of products from your Zuora Billing tenant.

By default, only the Product object information is returned.

In the previous tutorial step, "Set up your product catalog", we only created one product. While that product had four rate plans added, here we are only querying for products, not rate plans or charges, so only one product is shown in the sample response.

The next tutorial step will retrieve charges.

cURLJavaNode.jsPythonC#

```bash
curl -L -g -X GET 'https://rest.test.zuora.com/object-query/products' \
-H 'Authorization: Bearer d427f8217d6c48de8ad3888a6bf55e9e'
```

```java
QueryProductsResponse resp = zuoraClient.objectQueriesApi()
        .queryProductsApi()
        .execute();

List<ExpandedProduct> productList = resp.getData();

System.out.print(productList);
```

```javascript
const products = await zuoraClient.objectQueriesApi.queryProducts();

console.log(JSON.stringify(products, (k, v) => v ?? undefined, 2))
```

```python
def query_products(client=None):
    if client is None:
        client = get_client()
    try:
        api_response = client.object_queries_api().query_products()
        if api_response.data and len(api_response.data) > 0:
            prod = api_response.data[0]
            print('Product Number: %s, Name: %s' % (prod.product_number, prod.name))
            return api_response
        else:
            print('No products found')
    except ApiException as e:
        print("Exception when calling ObjectQueriesApi->query_products: status: %s, reason: %s" % (e.status, e.reason))

if __name__ == '__main__':
    query_products()
```

```csharp
QueryProductsResponse products = zuoraClient.ObjectQueriesApi.QueryProducts();

foreach(var item in products.Data)
{
    Console.WriteLine("Product Number: " + item.ProductNumber + " Product Name: " + item.Name);
}
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "data": [
        {
            "allowFeatureChanges": false,
            "category": "Base Products",
            "createdById": "2c92c0f85df42d7e015e08765e854463",
            "createdDate": "2024-07-23T17:00:36+08:00",
            "description": "Portable tablet designed for kids' learning with pre-installed educational apps and games.",
            "effectiveEndDate": "2034-01-01",
            "effectiveStartDate": "2024-01-01",
            "id": "8ad081dd90c4bafe0190ded235a71398",
            "name": "SmartLearn Tablet",
            "productNumber": "PC-00000162",
            "sKU": "SKU-00000238",
            "syncDate__NS": "",
            "updatedById": "2c92c0f85df42d7e015e08765e854463",
            "updatedDate": "2024-07-23T17:00:36+08:00"
        }
    ]
}
```
