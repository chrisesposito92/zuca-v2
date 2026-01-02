---
title: "Show specific product details"
url: "https://developer.zuora.com/docs/get-started/tutorials/show-product-details/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:04.420Z"
---

#

Show specific product details

##

End-user flow

When your customers select a specific product, the product rate plans and product rate plan charges associated with this product are displayed.

##

Sample code

The following code sample calls the [List product rate plans](https://developer.zuora.com/v1-api-reference/api/operation/queryProductRatePlans/) API while expanding the charges and charge tiers and filtering on the product ID. The product ID can be obtained from the previous call.

The response returns the product rate plans and product rate plan charge details for the SmartLearn Tablet product.

cURLJavaNode.jsPythonC#

```bash
curl -L -g -X GET 'https://rest.test.zuora.com/object-query/product-rate-plans?expand[]=productrateplancharges%2Cproductrateplancharges.productrateplanchargetiers&filter[]=productId.EQ%8ad081dd90c4bafe0190ded235a71398' \
-H 'Authorization: Bearer d427f8217d6c48de8ad3888a6bf55e9e'
```

```java
QueryProductRatePlansResponse resp = zuoraClient.objectQueriesApi()
        .queryProductRatePlansApi()
        .filter(List.of("productId.EQ:" + productId))
        .expand(List.of("productrateplancharges"))
        .execute();

System.out.print(resp.getData());

//Print VIP package plan number and name
ExpandedProductRatePlan ratePlan0 = resp.getData().get(0);
System.out.println(String.format("Rate Plan Number: %s, Name: %s",
        ratePlan0.getProductRatePlanNumber(), ratePlan0.getName()));


// Print VIP package charge info
ExpandedProductRatePlanCharge charge0 = ratePlan0.getProductRatePlanCharges().get(0);
System.out.println(String.format("Charge Name: %s, Billing Period: %s",
        charge0.getName(), charge0.getBillingPeriod()));

// Print VIP package charge tier info
ExpandedProductRatePlanChargeTier tier0 = charge0.getProductRatePlanChargeTiers().get(0);
System.out.println(String.format("Tier Acive: %s, Currency: %s, Price: %s",
        tier0.getActive(), tier0.getCurrency(), tier0.getPrice()));

// Print other plans as needed
...
```

```node
const resp = await zuoraClient.objectQueriesApi.queryProductRatePlans({
       filter: ["productId.EQ:" + productId],
       expand: ['productrateplancharges', 'productrateplancharges.productrateplanchargetiers']
     });

console.log(JSON.stringify(resp, (k, v) => v ?? undefined, 2));
```

```python
def query_rate_plan_by_id(product_id: str = None, client=None):
    if client is None:
        client = get_client()
    try:
        api_response = client.object_queries_api().query_product_rate_plans(
            filter=['productId.EQ:%s' % product_id],
            expand=['productrateplancharges', 'productrateplancharges.productrateplanchargetiers'])
        if api_response.data and len(api_response.data) > 0:
            rate_plan = api_response.data[0]
            print('Rate Plan Number: %s, Name: %s' % (rate_plan.product_rate_plan_number, rate_plan.name))
            if rate_plan.product_rate_plan_charges and len(rate_plan.product_rate_plan_charges) > 0:
                rate_plan_charge = rate_plan.product_rate_plan_charges[0]
                print('Charge Name: %s, Billing Period: %s' %
                      (rate_plan_charge.product_rate_plan_charge_number, rate_plan_charge.billing_period))
                rate_plan_charge_tier = rate_plan_charge.product_rate_plan_charge_tiers[0]
                print('Tier Active: %s, Currency: %s, Price: %s' %
                      (rate_plan_charge_tier.active, rate_plan_charge_tier.currency, rate_plan_charge_tier.price))
            else:
                print('No rate plan charges found for rate plan %s' % rate_plan.name)
        else:
            print('No rate plans found for product %s' % product_id)
        return api_response
    except ApiException as e:
        print("Exception when calling ObjectQueriesApi->query_product_rate_plans: status: %s, reason: %s" %
        (e.status, e.reason))

if __name__ == '__main__':
    query_rate_plan_by_id('8ad081dd90c4bafe0190ded235a71398')
```

```csharp
QueryProductRatePlansResponse productRatePlans = zuoraClient.ObjectQueriesApi.QueryProductRatePlans
(
    expand:["productrateplancharges"],
    filter:["productId.EQ:"+ product.Id]
);

Console.WriteLine(productRatePlans.ToJson());
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "nextPage": "W3sidmFsdWUiOiIyMDIzLTA5LTE0VDA1OjQxOjIwWiIsIm9yZGVyQnkiOnsiZmllbGQiOiJVcGRhdGVkRGF0ZSIsIm9yZGVyIjoiREVTQyJ9fSx7InZhbHVlIjoiOGEzNjk5ZmY4N2I2ZTZjZDAxODdiOGU0ZjY5ODUyZmQiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiSWQiLCJvcmRlciI6IkRFU0MifX1d",
    "data": [
        {
            "createdById": "ebd653b0f1ea46df87835085e26897ce",
            "createdDate": "2024-07-26T02:55:48Z",
            "description": "Ultimate service for top-tier clients who require the best.",
            "effectiveEndDate": "2034-01-01",
            "effectiveStartDate": "2024-01-01",
            "id": "8a8aa19590e7dea30190ecf74de939a9",
            "name": "VIP Package",
            "productId": "8a8aa36c90e7ff7c0190ece0f3153aff",
            "productRatePlanNumber": "PRP-00000071",
            "updatedById": "ebd653b0f1ea46df87835085e26897ce",
            "updatedDate": "2024-07-26T02:55:48Z",
            "productRatePlanCharges": [
                {
                    "accountReceivableAccountingCodeId": "8a368bbf87b6d5910187b80aaa9b0be0",
                    "accountingCode": "Subscription Revenue",
                    "applyToBillingPeriodPartially": false,
                    "billCycleType": "DefaultFromCustomer",
                    "billingPeriod": "Month",
                    "billingPeriodAlignment": "AlignToCharge",
                    "billingTiming": "In Advance",
                    "chargeModel": "Per Unit Pricing",
                    "chargeType": "Recurring",
                    "createdById": "ebd653b0f1ea46df87835085e26897ce",
                    "createdDate": "2024-07-26T02:56:35Z",
                    "defaultQuantity": 1.0,
                    "deferredRevenueAccount": "Subscription Revenue",
                    "deferredRevenueAccountingCodeId": "8a368d0d87b6d5a10187b82c04c62ef7",
                    "description": "No refund if you cancel after 7 days.",
                    "endDateCondition": "SubscriptionEnd",
                    "excludeItemBillingFromRevenueAccounting": false,
                    "excludeItemBookingFromRevenueAccounting": false,
                    "id": "8a8aa19590e7dea30190ecf807da39ab",
                    "includedUnits": 0.0,
                    "isAllocationEligible": false,
                    "isCommitted": false,
                    "isPrepaid": false,
                    "isRollover": false,
                    "isStackedDiscount": false,
                    "isUnbilled": false,
                    "legacyRevenueReporting": false,
                    "listPriceBase": "Per Billing Period",
                    "name": "Recurring per unit fee",
                    "numberOfPeriod": 1,
                    "overageCalculationOption": "EndOfSmoothingPeriod",
                    "overageUnusedUnitsCreditOption": "NoCredit",
                    "priceChangeOption": "NoChange",
                    "priceIncreasePercentage": 0.0,
                    "priceUpsellQuantityStacked": false,
                    "productRatePlanChargeNumber": "PRPC-00000067",
                    "productRatePlanId": "8a8aa19590e7dea30190ecf74de939a9",
                    "recognizedRevenueAccount": "Subscription Revenue",
                    "recognizedRevenueAccountingCodeId": "8a368d0d87b6d5a10187b82c04c62ef7",
                    "revenueRecognitionRuleName": "Recognize upon invoicing",
                    "rolloverApply": "ApplyLast",
                    "rolloverPeriodLength": 0,
                    "rolloverPeriods": 0,
                    "taxCode": "",
                    "taxable": false,
                    "triggerEvent": "ContractEffective",
                    "uOM": "License",
                    "upToPeriodsType": "Billing Periods",
                    "updatedById": "ebd653b0f1ea46df87835085e26897ce",
                    "updatedDate": "2024-07-26T02:56:36Z",
                    "useTenantDefaultForPriceChange": true,
                    "productRatePlanChargeTiers": [
                     {
                            "active": true,
                            "createdById": "ebd653b0f1ea46df87835085e26897ce",
                            "createdDate": "2024-07-26T02:56:36Z",
                            "currency": "USD",
                            "id": "8a8aa19590e7dea30190ecf807da39ac",
                            "isDefault": true,
                            "price": 49.99,
                            "productChargeDefinitionId": "8a8aa19590e7dea30190ecf807da39ab",
                            "productRatePlanChargeId": "8a8aa19590e7dea30190ecf807da39ab",
                            "tier": 1,
                            "updatedById": "ebd653b0f1ea46df87835085e26897ce",
                            "updatedDate": "2024-07-26T02:56:36Z"
                     }
                   ]
                }
            ]
        },

       ...
    ]
}
```
