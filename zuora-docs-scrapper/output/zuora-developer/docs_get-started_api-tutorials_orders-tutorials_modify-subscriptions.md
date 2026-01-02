---
title: "Modify subscriptions throughout subscription lifecycle"
url: "https://developer.zuora.com/docs/get-started/api-tutorials/orders-tutorials/modify-subscriptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:49.425Z"
---

#

Modify subscriptions throughout subscription lifecycle

This guide covers the basics of modifying existing subscriptions to reflect the customer's changing needs. Ensure you've completed the [Get started](/docs/get-started/introduction/) section to authenticate with Zuora. This tutorial is part of the Essential Skills Path.

Customers don't just sign up for new subscriptions, they add products to, remove products from, suspend, resume, renew, and cancel their subscriptions. This tutorial builds upon the examples in the previous [Create subscriptions](/docs/get-started/api-tutorials/orders-tutorials/create-subscriptions/) tutorial.

For this tutorial, we will build out this example subscription timeline starting **Jan 1st, 2024** and ending **March 21st, 2025**:

![Modify subscription tutorial timeline](/5e72618e5c45b15aad10d2bf09b121ca/modify-subscription-example-timeline.png)

When created, the subscription had a 12 month initial term with the option to extend that for another 12 months. Initially the customer started with a 5 user license for CloudStream SaaS Pro, then added another two seats on May 15th, combining that order with the addition of 3 licenses of CloudStream Digital Access. Both rate plans are configured to bill monthly. Invoice activity was intentionally left out of the above timeline for simplicity.

The following screenshots are the Product Catalog UI for these two products. They include the object IDs we will need for the orders calls:

![CloudStream SaaS Pro Plan](/2d4a1b11611ba7194163d47cc81404b2/cloudstream-saas-pro-plan.png) ![CloudStream Digital Access Plan](/f72d8462999c138dd7dd72e0a0142951/cloudstream-digital-access-plan.png)

##

Create an initial subscription

The following sample code shows you how to create this subscription with an order and start date of **Jan 1st, 2024** for 5 users of "CloudStream SaaS Pro":

cURLJavaNode.jsPythonC#

```bash
curl -i  -X POST https://rest.apisandbox.zuora.com/v1/orders \
 -H "Authorization: Bearer $ztoken" \
 -H "Content-Type: application/json" \
 -d '
   {
   "orderDate": "2024-01-01",
   "existingAccountNumber": "A00000001",
   "subscriptions": [
       {
       "orderActions": [
           {
           "type": "CreateSubscription",
           "createSubscription": {
               "terms": {
               "initialTerm": {
                   "period": 12,
                   "periodType": "Month",
                   "termType": "TERMED"
               },
               "renewalTerms": [
                   {
                   "period": 12,
                   "periodType": "Month"
                   }
               ],
               "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",
               "autoRenew": true
               },
               "invoiceSeparately": true,
               "subscribeToRatePlans": [
               {
                   "productRatePlanId": "e41259a192a5df1cfcc1c07da760a68a",
                   "chargeOverrides": [
                   {
                       "productRatePlanChargeId": "e41259a145c41b9cbae0c653d2b37b92",
                       "pricing": {
                         "recurringPerUnit": {
                           "quantity" : 5
                         }
                       }
                   }
                   ]
               }
               ]
           },
           "triggerDates": [
               {
               "name": "ContractEffective",
               "triggerDate": "2024-01-01"
               }
           ]
           }
       ]
       }
       ],
       "processingOptions": {
           "runBilling": true
       }
   }'
```

```java
// Define initial and renewal terms
InitialTerm initialTerm = new InitialTerm()
        .period(12)
        .periodType(TermPeriodType.MONTH)
        .termType(TermType.TERMED);

RenewalTerm renewalTerm = new RenewalTerm()
        .period(12)
        .periodType(TermPeriodType.MONTH);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms()
        .initialTerm(initialTerm)
        .renewalTerms(List.of(renewalTerm))
        .renewalSetting(RenewalSetting.WITH_SPECIFIC_TERM)
        .autoRenew(true);

// Define charge override
ChargeOverridePricing pricing = new ChargeOverridePricing()
        .recurringPerUnit(new RecurringPerUnitPricingOverride().quantity(new BigDecimal(5)));

ChargeOverride chargeOverride = new ChargeOverride()
        .productRatePlanChargeId("e41259a145c41b9cbae0c653d2b37b92")
        .pricing(pricing);

CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride()
        .productRatePlanId("e41259a192a5df1cfcc1c07da760a68a")
        .chargeOverrides(List.of(chargeOverride));

// Create subscription action
CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription()
        .terms(terms)
        .invoiceSeparately(true)
        .subscribeToRatePlans(List.of(ratePlanOverride));

// Trigger date
TriggerDate triggerDate = new TriggerDate()
        .name(TriggerDateName.CONTRACTEFFECTIVE)
        .triggerDate(LocalDate.of(2024, 1, 1));

// Order action
CreateOrderAction createOrderAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .triggerDates(List.of(triggerDate))
        .createSubscription(createSubscription);

// Subscription
CreateOrderSubscription subscription = new CreateOrderSubscription()
        .addOrderActionsItem(createOrderAction);

// Processing options
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true);

// Build the order request
CreateOrderRequest orderRequest = new CreateOrderRequest()
        .orderDate(LocalDate.of(2024, 1, 1))
        .existingAccountNumber("A00000001")
        .subscriptions(List.of(subscription))
        .processingOptions(processingOptions);

// Call the API
CreateOrderResponse response = zuoraClient.ordersApi().createOrderApi(orderRequest).execute();

if (response.getSuccess()) {
    System.out.println("Order created! Order Number: " + response.getOrderNumber());
} else {
    System.out.println("Failed to create order: " + response.getReasons());
}
```

```javascript
// Build the order request as a plain object
const orderRequest = {
  orderDate: "2024-01-01",
  existingAccountNumber: "A00000001",
  subscriptions: [
    {
      orderActions: [
        {
          type: "CreateSubscription",
          createSubscription: {
            terms: {
              initialTerm: {
                period: 12,
                periodType: "Month",
                termType: "TERMED",
              },
              renewalTerms: [
                {
                  period: 12,
                  periodType: "Month",
                },
              ],
              renewalSetting: "RENEW_WITH_SPECIFIC_TERM",
              autoRenew: true,
            },
            invoiceSeparately: true,
            subscribeToRatePlans: [
              {
                productRatePlanId: "e41259a192a5df1cfcc1c07da760a68a",
                chargeOverrides: [
                  {
                    productRatePlanChargeId: "e41259a145c41b9cbae0c653d2b37b92",
                    pricing: {
                      recurringPerUnit: {
                        quantity: 5,
                      },
                    },
                  },
                ],
              },
            ],
          },
          triggerDates: [
            {
              name: "ContractEffective",
              triggerDate: "2024-01-01",
            },
          ],
        },
      ],
    },
  ],
  processingOptions: {
    runBilling: true,
  },
};

// Call the API
const response = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log("Order created!", response);
```

```python
# Define terms
initial_term = InitialTerm(
    period=12,
    period_type="Month",
    term_type="TERMED"
)

renewal_term = RenewalTerm(
    period=12,
    period_type="Month"
)

terms = OrderActionCreateSubscriptionTerms(
    initial_term=initial_term,
    renewal_terms=[renewal_term],
    renewal_setting="RENEW_WITH_SPECIFIC_TERM",
    auto_renew=True
)

# Define charge override
charge_override = ChargeOverride(
    product_rate_plan_charge_id="e41259a145c41b9cbae0c653d2b37b92",
    pricing=ChargeOverridePricing(
        recurring_per_unit=RecurringPerUnitPricingOverride(
            quantity=5
        )
    )
)

rate_plan_override = CreateOrderRatePlanOverride(
    product_rate_plan_id="e41259a192a5df1cfcc1c07da760a68a",
    charge_overrides=[charge_override]
)

# Create subscription action
create_subscription = CreateOrderCreateSubscription(
    terms=terms,
    invoice_separately=True,
    subscribe_to_rate_plans=[rate_plan_override]
)

trigger_date = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2024, 1, 1)
)

create_order_action = CreateOrderAction(
    type="CreateSubscription",
    trigger_dates=[trigger_date],
    create_subscription=create_subscription
)

# Subscription
subscription = CreateOrderSubscription(
    order_actions=[create_order_action]
)

# Processing options
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True
)

# Create order request
order_request = CreateOrderRequest(
    order_date=date(2024, 1, 1),
    existing_account_number="A00000001",
    subscriptions=[subscription],
    processing_options=processing_options
)

# Submit the order
create_order_resp = client.orders_api().create_order(order_request)
print(f"Order created: {create_order_resp.order_number}")
```

```csharp
var orderDate = new DateOnly(2024, 1, 1);

// Define Initial and Renewal Terms
InitialTerm initialTerm = new InitialTerm(
    period: 12,
    periodType: TermPeriodType.Month,
    termType: TermType.TERMED
);

RenewalTerm renewalTerm = new RenewalTerm(
    period: 12,
    periodType: TermPeriodType.Month
);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms(
    initialTerm: initialTerm,
    renewalTerms: new List<RenewalTerm> { renewalTerm },
    renewalSetting: RenewalSetting.WITHSPECIFICTERM,
    autoRenew: true
);

// Define Charge Override
ChargeOverride chargeOverride = new ChargeOverride(
    productRatePlanChargeId: "e41259a145c41b9cbae0c653d2b37b92",
    pricing: new ChargeOverridePricing(
        recurringPerUnit: new RecurringPerUnitPricingOverride(
            quantity: 5
        )
    )
);

// Define Rate Plan Override
CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride(
    productRatePlanId: "e41259a192a5df1cfcc1c07da760a68a",
    chargeOverrides: new List<ChargeOverride> { chargeOverride }
);

// Define Create Subscription action
CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription(
    terms: terms,
    invoiceSeparately: true,
    subscribeToRatePlans: new List<CreateOrderRatePlanOverride> { ratePlanOverride }
);

TriggerDate triggerDate = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: orderDate
);

CreateOrderAction createOrderAction = new CreateOrderAction(
    type: OrderActionType.CreateSubscription,
    triggerDates: new List<TriggerDate> { triggerDate },
    createSubscription: createSubscription
);

CreateOrderSubscription subscription = new CreateOrderSubscription(
    orderActions: new List<CreateOrderAction> { createOrderAction }
);

// Processing Options
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment(
    runBilling: true
);

// Construct Order Request for Existing Account
CreateOrderRequest request = new CreateOrderRequest(
    existingAccountNumber: "A00000001",
    orderDate: orderDate,
    subscriptions: new List<CreateOrderSubscription> { subscription },
    processingOptions: processingOptions
);

// Execute the Order Request
try
{
    CreateOrderResponse response = await zuoraClient.OrdersApi.CreateOrderAsync(request);
    Console.WriteLine("Order created successfully!");
    Console.WriteLine($"Order Number: {response.OrderNumber}");
}
catch (ApiException ex)
{
    Console.WriteLine($"Zuora API Error: {ex.Message}");
}
```

You should expect to see a response payload similar to this:

```json
{
  "success" : true,
  "orderNumber" : "O-00027967",
  "accountNumber" : "A00000001",
  "status" : "Completed",
  "subscriptionNumbers" : [ "A-S00000181" ],
  "invoiceNumbers" : [ "INV00029120" ]
}
```

If the returned status is `Pending`, you should specify the additional `triggerDates` your tenant is configured to require:

```json
{"name": "ServiceActivation", "triggerDate": "2024-05-15"},
{"name": "CustomerAcceptance", "triggerDate": "2024-05-15"}
```

If you know this account has an active default payment method on file, you can also configure an immediate payment for the new invoice by modifying `processingOptions`:

```json
"processingOptions": {
    "runBilling": true,
    "collectPayment": true
}
```

When you combine the `runBilling` and `collectPayment` options with an order, all these operations become atomic. They either all succeed or roll back. So if the payment fails for any reason, for example, the customer has maxed out their credit card, then the new subscription and invoice are also rolled back and undone.

##

Add a product and increase the number of users

On our subscription timeline, the next event occurs on **May 15th, 2024** when the customer places an "add on" order for 2 extra users of "CloudStream SaaS Pro" and for 3 licenses of "CloudStream Digital Access". This will require an order with two order actions:

-   An `UpdateProduct` order action to change the product quantity for "CloudStream SaaS Pro"
-   An `AddProduct` order action to add the 3 licenses for "CloudStream Digital Access"

Before we can update the existing product quantity on the subscription we need to know the rate plan ID, rate plan charge ID, and the current quantity of "CloudStream SaaS Pro" for this customer. So we first need to query this information using the synchronous Object Query endpoints for subscription:

cURLJavaNode.jsPythonC#

```bash
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/subscriptions/A-S00000181?subscription.fields[]=name,version&expand[]=rateplans&rateplans.fields[]=id,name&expand[]=rateplans.rateplancharges&rateplancharges.fields[]=id,chargenumber,name,quantity'\
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

```java
// Define the subscription key and expand parameters
String subscriptionNumber = "A-S00000181";
List<String> expand = List.of("rateplans", "rateplans.rateplancharges");

// Call the API
ExpandedSubscription response = zuoraClient.objectQueriesApi()
        .querySubscriptionByKeyApi(subscriptionNumber)
        .expand(expand)
        .execute();

// Print the subscription details
System.out.println("Subscription details: " + response);
```

```javascript
// Define the subscription key and expand parameters
const subscriptionNumber = "A-S00000181";
const expand = ["rateplans", "rateplans.rateplancharges"];

// Call the API
const response = await zuoraClient.objectQueriesApi.querySubscriptionByKey(
  subscriptionNumber,
  { expand }
);

console.log("Subscription details:", JSON.stringify(response, null, 2));
```

```python
# Define the subscription key and query parameters
subscription_number = "A-S00000181"

# Call the API
response = client.object_queries_api().query_subscription_by_key(
    subscription_number,
    expand=["rateplans","rateplans.rateplancharges"] #fields[] are not supported in SDK yet
)

print("Subscription details:", response.to_json())
```

```csharp
// Define the subscription key
string subscriptionNumber = "A-S00000181";

// Call the API
var response = await zuoraClient.ObjectQueriesApi.QuerySubscriptionByKeyAsync(
    subscriptionNumber,
    expand: new List<string> { "rateplans", "rateplans.rateplancharges" }
);

Console.WriteLine("Subscription details:");
Console.WriteLine(response.ToJson());
```

This will return:

```json
{
  "name": "A-S00000181",
  "version": 1,
  "ratePlans": [
    {
      "id": "f94fb5249a496ecf5dc6f2710b912d0d",
      "name": "CloudStream SaaS Pro Month to Month Plan",
      "ratePlanCharges": [
        {
          "id": "e51b5a88a0996d238ea6e9a227033d6a",
          "chargeNumber": "C-00000595",
          "name": "CloudStream SaaS Pro Monthly User Charge",
          "quantity": 5.0
        }
      ]
    }
  ]
}
```

The following sample code calls the Orders API using this information:

cURLJavaNode.jsPythonC#

```bash
curl -i  -X POST https://rest.apisandbox.zuora.com/v1/orders \
 -H "Authorization: Bearer $ztoken" \
 -H "Content-Type: application/json" \
 -d '
{
    "orderDate": "2024-05-15",
    "existingAccountNumber": "A00000001",
    "processingOptions":
        {
          "runBilling": true
        },
    "subscriptions": [
        {
            "subscriptionNumber": "A-S00000181",
            "orderActions": [
                {
                    "type": "AddProduct",
                    "triggerDates": [
                            {"name": "ContractEffective", "triggerDate": "2024-05-15"}
                        ],
                    "addProduct": {
                        "productRatePlanId": "8ad08c0f7f54e6b5017f6af6b0fa5b44",
                        "chargeOverrides": [
                            {
                                "productRatePlanChargeId": "8ad08c0f7f54e6b5017f6af6b11b5b46",
                                "pricing": {"recurringPerUnit": {"quantity": 3}}
                            }
                        ]
                    }
                },
                {
                    "type": "UpdateProduct",
                    "triggerDates": [
                          {"name": "ContractEffective", "triggerDate": "2024-05-15"}
                    ],
                    "updateProduct": {
                        "ratePlanId": "f94fb5249a496ecf5dc6f2710b912d0d",
                        "chargeUpdates": [
                            {
                                "chargeNumber": "C-00000595",
                                "pricing": {"recurringPerUnit": {"quantity": 7}}
                            }
                        ]
                    }
                }
            ]
        }
    ]
}'
```

```java
// --- AddProduct Action ---
ChargeOverride addProductChargeOverride = new ChargeOverride()
        .productRatePlanChargeId("8ad08c0f7f54e6b5017f6af6b11b5b46")
        .pricing(new ChargeOverridePricing()
                .recurringPerUnit(new RecurringPerUnitPricingOverride()
                        .quantity(BigDecimal.valueOf(3)))
        );

CreateOrderAddProduct addProduct = new CreateOrderAddProduct()
        .productRatePlanId("8ad08c0f7f54e6b5017f6af6b0fa5b44")
        .chargeOverrides(List.of(addProductChargeOverride));

TriggerDate addProductTrigger = new TriggerDate()
        .name(TriggerDateName.CONTRACTEFFECTIVE)
        .triggerDate(LocalDate.of(2024, 5, 15));

CreateOrderAction addProductAction = new CreateOrderAction()
        .type(OrderActionType.ADDPRODUCT)
        .triggerDates(List.of(addProductTrigger))
        .addProduct(addProduct);

// --- UpdateProduct Action ---
CreateOrderChargeUpdate updateCharge = new CreateOrderChargeUpdate()
        .chargeNumber("C-00000595")
        .pricing(new CreateOrderPricingUpdate()
                .recurringPerUnit(new RecurringPerUnitPricingUpdate()
                        .quantity(BigDecimal.valueOf(7))));

CreateOrderUpdateProduct updateProduct = new CreateOrderUpdateProduct()
        .ratePlanId("f94fb5249a496ecf5dc6f2710b912d0d")
        .chargeUpdates(List.of(updateCharge));

TriggerDate updateProductTrigger = new TriggerDate()
        .name(TriggerDateName.CONTRACTEFFECTIVE)
        .triggerDate(LocalDate.of(2024, 5, 15));

CreateOrderAction updateProductAction = new CreateOrderAction()
        .type(OrderActionType.UPDATEPRODUCT)
        .triggerDates(List.of(updateProductTrigger))
        .updateProduct(updateProduct);

// --- Subscription with both actions ---
CreateOrderSubscription subscription = new CreateOrderSubscription()
        .subscriptionNumber("A-S00000181")
        .orderActions(List.of(addProductAction, updateProductAction));

// --- Processing options ---
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true);

// --- Build the order request ---
CreateOrderRequest orderRequest = new CreateOrderRequest()
        .orderDate(LocalDate.of(2024, 5, 15))
        .existingAccountNumber("A00000001")
        .processingOptions(processingOptions)
        .subscriptions(List.of(subscription));

// --- Call the API ---
CreateOrderResponse response = zuoraClient.ordersApi().createOrderApi(orderRequest).execute();

if (response.getSuccess()) {
    System.out.println("Order created! Order Number: " + response.getOrderNumber());
} else {
    System.out.println("Failed to create order: " + response.getReasons());
}
```

```javascript
const orderRequest = {
  orderDate: "2024-05-15",
  existingAccountNumber: "A00000001",
  processingOptions: {
    runBilling: true,
  },
  subscriptions: [
    {
      subscriptionNumber: "A-S00000181",
      orderActions: [
        {
          type: "AddProduct",
          triggerDates: [
            {
              name: "ContractEffective",
              triggerDate: "2024-05-15",
            },
          ],
          addProduct: {
            productRatePlanId: "8ad08c0f7f54e6b5017f6af6b0fa5b44",
            chargeOverrides: [
              {
                productRatePlanChargeId: "8ad08c0f7f54e6b5017f6af6b11b5b46",
                pricing: {
                  recurringPerUnit: {
                    quantity: 3,
                  },
                },
              },
            ],
          },
        },
        {
          type: "UpdateProduct",
          triggerDates: [
            {
              name: "ContractEffective",
              triggerDate: "2024-05-15",
            },
          ],
          updateProduct: {
            ratePlanId: "f94fb5249a496ecf5dc6f2710b912d0d",
            chargeUpdates: [
              {
                chargeNumber: "C-00000595",
                pricing: {
                  recurringPerUnit: {
                    quantity: 7,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  ],
};

const response = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log("Order created!", response);
```

```python
# AddProduct action
add_product_charge_override = ChargeOverride(
    product_rate_plan_charge_id="8ad08c0f7f54e6b5017f6af6b11b5b46",
    pricing=ChargeOverridePricing(
        recurring_per_unit=RecurringPerUnitPricingOverride(
            quantity=3
        )
    )
)

add_product = CreateOrderAddProduct(
    product_rate_plan_id="8ad08c0f7f54e6b5017f6af6b0fa5b44",
    charge_overrides=[add_product_charge_override]
)

add_product_trigger = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2024, 5, 15)
)

add_product_action = CreateOrderAction(
    type="AddProduct",
    trigger_dates=[add_product_trigger],
    add_product=add_product
)

# UpdateProduct action
update_product_charge_update = ChargeUpdate(
    charge_number="C-00000595",
    pricing=ChargeOverridePricing(
        recurring_per_unit=RecurringPerUnitPricingOverride(
            quantity=7
        )
    )
)

update_product = CreateOrderUpdateProduct(
    rate_plan_id="f94fb5249a496ecf5dc6f2710b912d0d",
    charge_updates=[update_product_charge_update]
)

update_product_trigger = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2024, 5, 15)
)

update_product_action = CreateOrderAction(
    type="UpdateProduct",
    trigger_dates=[update_product_trigger],
    update_product=update_product
)

# Subscription with both actions
subscription = CreateOrderSubscription(
    subscription_number="A-S00000181",
    order_actions=[add_product_action, update_product_action]
)

# Processing options
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True
)

# Create order request
order_request = CreateOrderRequest(
    order_date=date(2024, 5, 15),
    existing_account_number="A00000001",
    subscriptions=[subscription],
    processing_options=processing_options
)

# Submit the order
create_order_resp = client.orders_api().create_order(order_request)
print(f"Order created: {create_order_resp.order_number}")
```

```csharp
var orderDate = new DateOnly(2024, 5, 15);

// --- AddProduct Action ---
var addProductChargeOverride = new ChargeOverride(
    productRatePlanChargeId: "8ad08c0f7f54e6b5017f6af6b11b5b46",
    pricing: new ChargeOverridePricing(
        recurringPerUnit: new RecurringPerUnitPricingOverride(
            quantity: 3
        )
    )
);

var addProduct = new CreateOrderAddProduct(
    productRatePlanId: "8ad08c0f7f54e6b5017f6af6b0fa5b44",
    chargeOverrides: new List<ChargeOverride> { addProductChargeOverride }
);

var addProductTrigger = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: orderDate
);

var addProductAction = new CreateOrderAction(
    type: OrderActionType.AddProduct,
    triggerDates: new List<TriggerDate> { addProductTrigger },
    addProduct: addProduct
);

// --- UpdateProduct Action ---
var updateCharge = new CreateOrderChargeUpdate(
    chargeNumber: "C-00000595",
    pricing: new CreateOrderPricingUpdate(
        recurringPerUnit: new RecurringPerUnitPricingUpdate(
            quantity: 7
        )
    )
);

var updateProduct = new CreateOrderUpdateProduct(
    ratePlanId: "f94fb5249a496ecf5dc6f2710b912d0d",
    chargeUpdates: new List<CreateOrderChargeUpdate> { updateCharge }
);

var updateProductTrigger = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: orderDate
);

var updateProductAction = new CreateOrderAction(
    type: OrderActionType.UpdateProduct,
    triggerDates: new List<TriggerDate> { updateProductTrigger },
    updateProduct: updateProduct
);

// --- Subscription with both actions ---
var subscription = new CreateOrderSubscription(
    subscriptionNumber: "A-S00000181",
    orderActions: new List<CreateOrderAction> { addProductAction, updateProductAction }
);

// --- Processing options ---
var processingOptions = new ProcessingOptionsWithDelayedCapturePayment(
    runBilling: true
);

// --- Build the order request ---
var orderRequest = new CreateOrderRequest(
    orderDate: orderDate,
    existingAccountNumber: "A00000001",
    subscriptions: new List<CreateOrderSubscription> { subscription },
    processingOptions: processingOptions
);

// --- Call the API ---
try
{
    var response = await zuoraClient.OrdersApi.CreateOrderAsync(orderRequest);
    if (response.Success == true)
    {
        Console.WriteLine("Order created! Order Number: " + response.OrderNumber);
    }
    else
    {
        Console.WriteLine("Failed to create order: " + response.Reasons);
    }
}
catch (ApiException ex)
{
    Console.WriteLine($"Zuora API Error: {ex.Message}");
}
```

This will return a response similar to the following example:

```json
{
  "success" : true,
  "orderNumber" : "O-00000919",
  "accountNumber" : "A00000001",
  "status" : "Completed",
  "subscriptionNumber": ["A-S00000182"],
  "invoiceNumbers" : [ "INV00000284" ]
}
```

##

Renew and remove product

Towards the end of the year, the customer agrees to renew but they also want to remove the CloudStream Digital plan from their subscription. Therefore, we need a second order with two order actions:

-   An `RenewSubscription` order action for subscription renewal
-   An `RemoveProduct` order action for removing the Digital Access rate plan.

Running an Object Query call on the subscription now returns:

```json
{
  "name": "A00000001",
  "version": 2,
  "ratePlans": [
    {
      "id": "f94f5a88a8a96ecf5e06f6643b2b737f",
      "name": "CloudStream Monthly Digital Access Plan - Per User",
      "ratePlanCharges": [
        {
          "chargeNumber": "C-00026073",
          "effectiveEndDate": "2025-01-01",
          "effectiveStartDate": "2024-05-15",
          "id": "e51b9da0c8d96d24c9e6ea1bd1b3820d",
          "name": "CloudStream Digital Access Plan Monthly Flat Fee Charge",
          "quantity": 3.0,
          "segment": 1
        }
      ]
    },
    {
      "id": "f94fb5249a496ecf5dc6f2710b912d0d",
      "name": "CloudStream SaaS Pro Month to Month Plan",
      "ratePlanCharges": [
        {
          "chargeNumber": "C-00000595",
          "effectiveEndDate": "2025-01-01",
          "effectiveStartDate": "2024-05-15",
          "id": "e51b9da0c8d96d24c9e6ea1bd283821a",
          "name": "CloudStream SaaS Pro Monthly User Charge",
          "quantity": 7.0,
          "segment": 2
        },
        {
          "chargeNumber": "C-00000595",
          "effectiveEndDate": "2024-05-15",
          "effectiveStartDate": "2024-01-01",
          "id": "e51b5a88a0996d238ea6e9a227033d6a",
          "name": "CloudStream SaaS Pro Monthly User Charge",
          "quantity": 5.0,
          "segment": 1
        }
      ]
    }
  ]
}
```

We modified the subscription Object Query call to add some additional fields. Now we'll explain why there appear to be two rate plan charges for SaaS Pro.

There aren’t actually two charges. They share the same charge number, but the charge has two segments - one documenting the quantity prior to the update on May 15th and the other showing the changed quantity of 7 starting May 15th. These seamlessly contiguous segments document the charge quantity in effect on any date.

The second segment’s effective end date is January 1st, 2025. If no changes are made to this subscription, the subscription would end on January 1st, 2025, and billing would stop with their last invoice on December 1st, 2024. But we will make the following changes to this subscription:

-   Renew the subscription for another 12 months. After the renewal, the second segment will have an end date of January 1st, 2026.
-   Remove the "CloudStream Digital Access" plan.

The query results above provide us with the necessary IDs and numbers for the new order:

cURLJavaNode.jsPythonC#

```bash
curl -i  -X POST https://rest.apisandbox.zuora.com/v1/orders \
 -H "Authorization: Bearer $ztoken" \
 -H "Content-Type: application/json" \
 -d '
{
    "orderDate": "2025-01-01",
    "existingAccountNumber": "A00000001",
    "processingOptions": {
        "runBilling": false
    },
    "subscriptions": [
        {
            "subscriptionNumber": "A-S00000181",
            "orderActions": [
                {
                    "type": "RenewSubscription",
                    "triggerDates": [
                          {
                            "name": "ContractEffective",
                            "triggerDate": "2025-01-01"
                          }
                      ]
                },
                {
                    "type": "RemoveProduct",
                    "triggerDates": [
                          {
                            "name": "ContractEffective",
                            "triggerDate": "2025-01-01"
                          }
                      ],
                    "removeProduct": {
                        "ratePlanId": "f94f5a88a8a96ecf5e06f6643b2b737f"
                    }
                }
            ]
        }
    ]
}'
```

```java
// --- RenewSubscription Action ---
TriggerDate renewTrigger = new TriggerDate()
        .name(TriggerDateName.CONTRACTEFFECTIVE)
        .triggerDate(LocalDate.of(2025, 1, 1));

CreateOrderAction renewAction = new CreateOrderAction()
        .type(OrderActionType.RENEWSUBSCRIPTION)
        .triggerDates(List.of(renewTrigger));

// --- RemoveProduct Action ---
TriggerDate removeTrigger = new TriggerDate()
        .name(TriggerDateName.CONTRACTEFFECTIVE)
        .triggerDate(LocalDate.of(2025, 1, 1));

OrderActionRemoveProduct removeProduct = new OrderActionRemoveProduct()
        .ratePlanId("f94f5a88a8a96ecf5e06f6643b2b737f");

CreateOrderAction removeProductAction = new CreateOrderAction()
        .type(OrderActionType.REMOVEPRODUCT)
        .triggerDates(List.of(removeTrigger))
        .removeProduct(removeProduct);

// --- Subscription with both actions ---
CreateOrderSubscription subscription = new CreateOrderSubscription()
        .subscriptionNumber("A-S00000181")
        .orderActions(List.of(renewAction, removeProductAction));

// --- Processing options ---
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(false);

// --- Build the order request ---
CreateOrderRequest orderRequest = new CreateOrderRequest()
        .orderDate(LocalDate.of(2025, 1, 1))
        .existingAccountNumber("A00000001")
        .processingOptions(processingOptions)
        .subscriptions(List.of(subscription));

// --- Call the API ---
CreateOrderResponse response = zuoraClient.ordersApi().createOrderApi(orderRequest).execute();

if (response.getSuccess()) {
    System.out.println("Order created! Order Number: " + response.getOrderNumber());
} else {
    System.out.println("Failed to create order: " + response.getReasons());
}
```

```javascript
const orderRequest = {
  orderDate: "2025-01-01",
  existingAccountNumber: "A00000001",
  processingOptions: {
    runBilling: false,
  },
  subscriptions: [
    {
      subscriptionNumber: "A-S00000181",
      orderActions: [
        {
          type: "RenewSubscription",
          triggerDates: [
            {
              name: "ContractEffective",
              triggerDate: "2025-01-01",
            },
          ],
        },
        {
          type: "RemoveProduct",
          triggerDates: [
            {
              name: "ContractEffective",
              triggerDate: "2025-01-01",
            },
          ],
          removeProduct: {
            ratePlanId: "f94f5a88a8a96ecf5e06f6643b2b737f",
          },
        },
      ],
    },
  ],
};

const response = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log("Order created!", response);
```

```python
# RenewSubscription action
renew_trigger = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2025, 1, 1)
)

renew_action = CreateOrderAction(
    type="RenewSubscription",
    trigger_dates=[renew_trigger]
)

# RemoveProduct action
remove_trigger = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2025, 1, 1)
)

remove_product = OrderActionRemoveProduct(
    rate_plan_id="f94f5a88a8a96ecf5e06f6643b2b737f"
)

remove_action = CreateOrderAction(
    type="RemoveProduct",
    trigger_dates=[remove_trigger],
    remove_product=remove_product
)

# Subscription with both actions
subscription = CreateOrderSubscription(
    subscription_number="A-S00000181",
    order_actions=[renew_action, remove_action]
)

# Processing options
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=False
)

# Create order request
order_request = CreateOrderRequest(
    order_date=date(2025, 1, 1),
    existing_account_number="A00000001",
    subscriptions=[subscription],
    processing_options=processing_options
)

# Submit the order
create_order_resp = client.orders_api().create_order(order_request)
print(f"Order created: {create_order_resp.order_number}")
```

```csharp
var orderDate = new DateOnly(2025, 1, 1);

// --- RenewSubscription Action ---
var renewTrigger = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: orderDate
);

var renewAction = new CreateOrderAction(
    type: OrderActionType.RenewSubscription,
    triggerDates: new List<TriggerDate> { renewTrigger }
);

// --- RemoveProduct Action ---
var removeTrigger = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: orderDate
);

var removeProduct = new OrderActionRemoveProduct(
    ratePlanId: "f94f5a88a8a96ecf5e06f6643b2b737f"
);

var removeProductAction = new CreateOrderAction(
    type: OrderActionType.RemoveProduct,
    triggerDates: new List<TriggerDate> { removeTrigger },
    removeProduct: removeProduct
);

// --- Subscription with both actions ---
var subscription = new CreateOrderSubscription(
    subscriptionNumber: "A-S00000181",
    orderActions: new List<CreateOrderAction> { renewAction, removeProductAction }
);

// --- Processing options ---
var processingOptions = new ProcessingOptionsWithDelayedCapturePayment(
    runBilling: false
);

// --- Build the order request ---
var orderRequest = new CreateOrderRequest(
    orderDate: orderDate,
    existingAccountNumber: "A00000001",
    subscriptions: new List<CreateOrderSubscription> { subscription },
    processingOptions: processingOptions
);

// --- Call the API ---
try
{
    var response = await zuoraClient.OrdersApi.CreateOrderAsync(orderRequest);
    if (response.Success == true)
    {
        Console.WriteLine("Order created! Order Number: " + response.OrderNumber);
    }
    else
    {
        Console.WriteLine("Failed to create order: " + response.Reasons);
    }
}
catch (ApiException ex)
{
    Console.WriteLine($"Zuora API Error: {ex.Message}");
}
```

This should return a response similar to this:

```json
{
  "success" : true,
  "orderNumber" : "O-00000921",
  "accountNumber" : "A00000001",
  "status" : "Completed",
  "subscriptionNumbers" : [ "A-S00000181" ],
}
```

In the response, `subscriptionNumbers` is an array as you can create or modify multiple subscriptions in a single order. The subscriptions have to belong to the same billing account sharing the same `accountNumber`.

##

Cancel a subscription

The final step in this subscription’s life cycle is the customer’s decision to cancel their subscription on **March 21st, 2025**. Our [Cancel a subscription tutorial](https://developer.zuora.com/docs/get-started/tutorials/cancel-subscription/) explains the options available to you. We won’t repeat this material here, but we have included a cancelation order that assumes the cancelation will take effect on the customer’s next billing day, **April 1st, 2025**. It prevents any refunds of the prepaid month of March.

cURLJavaNode.jsPythonC#

```bash
curl -i -X POST https://rest.apisandbox.zuora.com/v1/orders \
 -H "Authorization: Bearer $ztoken" \
 -H "Content-Type: application/json" \
 -d '{
  "orderDate": "2025-03-21",
  "existingAccountNumber": "A00000001",
  "subscriptions": [
    {
      "subscriptionNumber": "A-S00000181",
      "orderActions": [
        {
          "type": "CancelSubscription",
          "triggerDates": [
            {
              "name": "ContractEffective",
              "triggerDate": "2025-03-21"
            }
          ],
          "cancelSubscription": {
            "cancellationPolicy": "EndOfLastInvoicePeriod"
          }
        }
      ]
    }
  ]
}'
```

```java
// --- CancelSubscription Action ---
TriggerDate cancelTrigger = new TriggerDate()
        .name(TriggerDateName.CONTRACTEFFECTIVE)
        .triggerDate(LocalDate.of(2025, 3, 21));

// Use the correct class for cancel subscription action
OrderActionCancelSubscription cancelSubscription = new OrderActionCancelSubscription()
        .cancellationPolicy(SubscriptionCancellationPolicy.ENDOFLASTINVOICEPERIOD);

CreateOrderAction cancelAction = new CreateOrderAction()
        .type(OrderActionType.CANCELSUBSCRIPTION)
        .triggerDates(List.of(cancelTrigger))
        .cancelSubscription(cancelSubscription);

// --- Subscription with cancel action ---
CreateOrderSubscription subscription = new CreateOrderSubscription()
        .subscriptionNumber("A-S00000181")
        .orderActions(List.of(cancelAction));

// --- Build the order request ---
CreateOrderRequest orderRequest = new CreateOrderRequest()
        .orderDate(LocalDate.of(2025, 3, 21))
        .existingAccountNumber("A00000001")
        .subscriptions(List.of(subscription));

// --- Call the API ---
CreateOrderResponse response = zuoraClient.ordersApi().createOrderApi(orderRequest).execute();

if (response.getSuccess()) {
    System.out.println("Order created! Order Number: " + response.getOrderNumber());
} else {
    System.out.println("Failed to create order: " + response.getReasons());
}
```

```javascript
const orderRequest = {
  orderDate: "2025-03-21",
  existingAccountNumber: "A00000001",
  subscriptions: [
    {
      subscriptionNumber: "A-S00000181",
      orderActions: [
        {
          type: "CancelSubscription",
          triggerDates: [
            {
              name: "ContractEffective",
              triggerDate: "2025-03-21",
            },
          ],
          cancelSubscription: {
            cancellationPolicy: "EndOfLastInvoicePeriod",
          },
        },
      ],
    },
  ],
};

const response = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log("Order created!", response);
```

```python
# CancelSubscription action
cancel_trigger = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2025, 3, 21)
)

cancel_subscription = OrderActionCancelSubscription(
    cancellation_policy="EndOfLastInvoicePeriod"
)

cancel_action = CreateOrderAction(
    type="CancelSubscription",
    trigger_dates=[cancel_trigger],
    cancel_subscription=cancel_subscription
)

# Subscription with cancel action
subscription = CreateOrderSubscription(
    subscription_number="A-S00000181",
    order_actions=[cancel_action]
)

# Create order request
order_request = CreateOrderRequest(
    order_date=date(2025, 3, 21),
    existing_account_number="A00000001",
    subscriptions=[subscription]
)

# Submit the order
create_order_resp = client.orders_api().create_order(order_request)
print(f"Order created: {create_order_resp.order_number}")
```

```csharp
var orderDate = new DateOnly(2025, 3, 21);

// --- CancelSubscription Action ---
var cancelTrigger = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: orderDate
);

var cancelSubscription = new OrderActionCancelSubscription(
    cancellationPolicy: SubscriptionCancellationPolicy.EndOfLastInvoicePeriod
);

var cancelAction = new CreateOrderAction(
    type: OrderActionType.CancelSubscription,
    triggerDates: new List<TriggerDate> { cancelTrigger },
    cancelSubscription: cancelSubscription
);

// --- Subscription with cancel action ---
var subscription = new CreateOrderSubscription(
    subscriptionNumber: "A-S00000181",
    orderActions: new List<CreateOrderAction> { cancelAction }
);

// --- Build the order request ---
var orderRequest = new CreateOrderRequest(
    orderDate: orderDate,
    existingAccountNumber: "A00000001",
    subscriptions: new List<CreateOrderSubscription> { subscription }
);

// --- Call the API ---
try
{
    var response = await zuoraClient.OrdersApi.CreateOrderAsync(orderRequest);
    if (response.Success == true)
    {
        Console.WriteLine("Order created! Order Number: " + response.OrderNumber);
    }
    else
    {
        Console.WriteLine("Failed to create order: " + response.Reasons);
    }
}
catch (ApiException ex)
{
    Console.WriteLine($"Zuora API Error: {ex.Message}");
}
```

You should receive a response similar to the following example:

```json
{
  "success" : true,
  "orderNumber" : "O-00000922",
  "accountNumber" : "A00000001",
  "status" : "Completed",
  "subscriptionNumbers" : [ "A-S00000181" ]
}
```

With this cancelation, the customer has received their last invoice, the one from March 1st 2025. No new invoices will be generated for this subscription going forward.

##

Summary

You should now be able to update product quantity or pricing, add products to, remove products from, renew, and cancel customer subscriptions using the Orders API.

The Order Actions covered in this tutorial are by far the most common. There are [additional Order Action types](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_accounts%2C_subscriptions%2C_and_non-subscription_transactions/Manage_subscription_transactions/Orders/AA_Overview_of_Orders/Order_actions) that we haven’t looked at, but they follow the same pattern. You should have little difficulty using them.

We also offer an [asynchronous option](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateOrderAsynchronously/) for the creating an order when you have to bulk load many orders.

##

Check your knowledge

**Subscription state management**: When updating a subscription's quantity mid-cycle, explain the relationship between segments, charge numbers, and effective dates. How would you calculate the prorated amount for a quantity change on day 15 of a 30-day billing cycle?

**Order action sequencing**: In the renewal and product removal example, why must both actions be included in the same Order? What would happen if you executed them as separate API calls, and how would this impact billing and customer experience?

**Error recovery scenarios**: If an order with multiple actions fails at the payment collection step (when `collectPayment: true`), describe the rollback behavior for subscription changes, invoice generation, and charge modifications. How would you design a retry mechanism?

##

Hands-On exercises

###

Data validation and query exercise

-   Build a monitoring script that queries subscription details before and after each Order operation
-   Compare expected vs. actual charge segments, quantities, and effective dates using the examples provided

###

Error handling and recovery exercise

-   Intentionally create Orders with invalid subscription numbers, overlapping effective dates, and insufficient payment methods
-   Document all error responses and categorize by error type and recovery strategy
-   Build a troubleshooting decision tree for common Order failures
-   Design automated retry logic with exponential backoff for transient failures

###

Your customer's subscription lifecycle

-   Create a subscription that reflects what your business requires
-   Execute a mid-cycle upgrade increasing quantities and adding an additional product
-   Process an early renewal after generating an order preview
-   Document all generated invoices, prorations, and subscription state changes
