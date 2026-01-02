---
title: "Create a subscription"
url: "https://developer.zuora.com/docs/get-started/api-tutorials/orders-tutorials/create-subscriptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:59.329Z"
---

#

Create a subscription

This section showcases the cURL examples for creating a subscription in different scenarios by calling the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation. The corresponding Zuora client libraries code examples are also provided.

Note that we're using the US API Sandbox Cloud 2 environment ([https://rest.apisandbox.zuora.com](https://rest.apisandbox.zuora.com)) as the base URL. You need to substitiute it with your own environment URL.

##

Create a subscription without charge overrides

Create an order subscribing to a Monthly recurring plan (`id`\=`8ad08ea194da7ba00194df52a41f04c6`) for an existing account (`accountNumber` = `A00000001`). The order date is today - Feb 1, 2025, the same as the billing target date.

The invoice is generated immediately along with the order creation.

cURLJavaNode.jsPythonC#

```bash
curl --location 'https://rest.apisandbox.zuora.com/v1/orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer $token' \
--data '{
    "orderDate": "2025-02-01",
    "processingOptions": {
        "runBilling": true,
        "billingOptions": {
            "targetDate": "2025-02-01"
        }
    },
    "existingAccountNumber": "A00000001",
    "subscriptions": [
        {
            "orderActions": [
                {
                    "type": "CreateSubscription",
                    "createSubscription": {
                       "terms": {
                         "initialTerm": {
                           "startDate": "2025-02-01",
                            "period": 12,
                            "periodType": "Month",
                            "termType": "TERMED"
                           },
                           "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",
                           "renewalTerms": [
                            {
                                "period": 12,
                                "periodType": "Month"
                            }
                        ]
                        },
                        "subscribeToRatePlans":[
                            {
                            "productRatePlanId": "8ad08ea194da7ba00194df52a41f04c6"
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
// Define terms
InitialTerm initialTerm = new InitialTerm()
        .periodType(TermPeriodType.MONTH)
        .period(12)
        .termType(TermType.TERMED);
RenewalTerm renewalTerm = new RenewalTerm()
        .period(12)
        .periodType(TermPeriodType.MONTH);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms()
        .renewalTerms(List.of(renewalTerm))
        .initialTerm(initialTerm)
        .renewalSetting(RenewalSetting.WITH_SPECIFIC_TERM)
        .autoRenew(true);

CreateOrderCreateSubscription createOrderCreateSubs = new CreateOrderCreateSubscription()
        .terms(terms)
        .subscribeToRatePlans(List.of(new CreateOrderRatePlanOverride().productRatePlanId("8ad08ea194da7ba00194df52a41f04c6")));

TriggerDate triggerDate = new TriggerDate().name(TriggerDateName.CONTRACTEFFECTIVE).triggerDate(LocalDate.of(2025,2,1));

CreateOrderAction createOrderAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .triggerDates(List.of(triggerDate))
        .createSubscription(createOrderCreateSubs);

CreateOrderSubscription subscription = new CreateOrderSubscription().addOrderActionsItem(createOrderAction);


ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true)
        .billingOptions(new BillingOptions().targetDate(LocalDate.of(2025,2,1)));

CreateOrderRequest request = new CreateOrderRequest()
        .existingAccountNumber("A00000001")
        .description("One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later. ")
        .orderDate(LocalDate.of(2025,2,1))
        .subscriptions(List.of(subscription))
        .processingOptions(processingOptions);

CreateOrderResponse createOrderResp = zuoraClient.ordersApi().createOrderApi(request).execute();
System.out.print(createOrderResp);
```

```javascript
const orderDate = '2025-02-01';

// Define terms
const initialTerm = {
    period: 12,
    periodType: 'Month',
    termType: 'TERMED'
};

const renewalTerm = {
    period: 12,
    periodType: 'Month'
};

const terms = {
    initialTerm,
    renewalTerms: [renewalTerm],
    renewalSetting: 'RENEW_WITH_SPECIFIC_TERM',
    autoRenew: true
};

// Define Rate Plan
const ratePlan = {
    productRatePlanId: '8ad08ea194da7ba00194df52a41f04c6'
};

// Define subscription creation action
const createSubscription = {
    terms,
    subscribeToRatePlans: [ratePlan]
};

const triggerDate = {
    name: 'ContractEffective',
    triggerDate: orderDate
};

const createOrderAction = {
    type: 'CreateSubscription',
    triggerDates: [triggerDate],
    createSubscription
};

const subscription = {
    orderActions: [createOrderAction]
};

// Define processing options
const processingOptions = {
    runBilling: true,
    billingOptions: {
    targetDate: orderDate
    }
};

// Build the CreateOrderRequest
const request = {
    existingAccountNumber: 'A00000001',
    description: 'One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.',
    orderDate,
    subscriptions: [subscription],
    processingOptions
};

const response = await zuoraClient.ordersApi.createOrder(request);
console.log('Order created:', response.orderNumber);
```

```python
# Define Initial and Renewal Terms
initial_term = InitialTerm(
    period=12,
    period_type='Month',
    term_type='TERMED'
)

renewal_term = RenewalTerm(
    period=12,
    period_type='Month'
)

terms = OrderActionCreateSubscriptionTerms(
    initial_term=initial_term,
    renewal_terms=[renewal_term],
    renewal_setting='RENEW_WITH_SPECIFIC_TERM',
    auto_renew=True
)

# Define rate plan
rate_plan = CreateOrderRatePlanOverride(
    product_rate_plan_id='8ad08ea194da7ba00194df52a41f04c6'
)

# Define Create Subscription
create_subscription = CreateOrderCreateSubscription(
    terms=terms,
    subscribe_to_rate_plans=[rate_plan]
)

# Trigger date for the subscription
trigger_date = TriggerDate(
    name='ContractEffective',
    trigger_date=date(2025, 2, 1)
)

# Define the subscription creation order action
create_order_action = CreateOrderAction(
    type='CreateSubscription',
    trigger_dates=[trigger_date],
    create_subscription=create_subscription
)

# Add the order action to a subscription object
subscription = CreateOrderSubscription(
    order_actions=[create_order_action]
)

# Define processing options
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True,
    billing_options=BillingOptions(target_date=date(2025, 2, 1))
)

# Assemble final order request
order_request = CreateOrderRequest(
    existing_account_number='A00000001',
    description='One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.',
    order_date=date(2025, 2, 1),
    subscriptions=[subscription],
    processing_options=processing_options
)

# Send request
try:
    create_order_resp = client.orders_api().create_order(order_request)
    print("Order created successfully!")
    print(f"Order Number: {create_order_resp.order_number}")
except Exception as e:
    print(f"Failed to create order: {e}")
```

```csharp
var orderDate = new DateOnly(2025, 2, 1);

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

// Define Rate Plan
CreateOrderRatePlanOverride ratePlan = new CreateOrderRatePlanOverride(
    productRatePlanId: "8ad08ea194da7ba00194df52a41f04c6"
);

// Define Create Subscription action
CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription(
    terms: terms,
    subscribeToRatePlans: new List<CreateOrderRatePlanOverride> { ratePlan }
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
    runBilling: true,
    collectPayment: false,
    billingOptions: new BillingOptions(targetDate: orderDate)
);

// Construct Order Request for Existing Account
CreateOrderRequest request = new CreateOrderRequest(
    existingAccountNumber: "A00000001",
    description: "One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.",
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
    Console.WriteLine($"Error: {ex.Message}");
}
```

##

Create a subscription with tiered charges

Create an order with a 12-month subscription of tiered charges for an existing account (A00000135). The order date is today - Feb 1, 2025.

| Tier | Unit | Price | Price format |
| --- | --- | --- | --- |
| 1 | 1-5 | $100 | Per Unit |
| 2 | 6 and above | $80 | Per Unit |

The subscribed quantity is 15.

The invoice is generated immediately along with the order creation.

cURLJavaNode.jsPythonC#

```bash
curl -i -X POST "https://rest.apisandbox.zuora.com/v1/orders" \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Example tiered pricing order",
    "existingAccountNumber": "A00000135",
    "orderDate": "2025-02-01",
    "processingOptions": {
        "billingOptions": {
            "targetDate": "2025-02-01"
        },
        "collectPayment": false,
        "runBilling": true
    },
    "subscriptions": [
        {
            "orderActions": [
                {
                    "createSubscription": {
                        "invoiceSeparately": true,
                        "subscribeToRatePlans": [
                            {
                                "chargeOverrides": [
                                    {
                                        "productRatePlanChargeId": "f94f166281e952195f35223e4b2f002f",
                                        "pricing": {
                                            "recurringTiered": {
                                                "quantity": 15,
                                                "tiers": [
                                                    {
                                                        "tier": 1,
                                                        "startingUnit": 1,
                                                        "endingUnit": 5,
                                                        "price": 100.00,
                                                        "priceFormat": "PerUnit"
                                                        },
                                                    {
                                                        "tier": 2,
                                                        "startingUnit": 6,
                                                        "price": 80.00,
                                                        "priceFormat": "PerUnit"
                                                        }
                                                ]
                                            }
                                        }
                                    }
                                ],
                                "productRatePlanId": "f94fbebf61e952182765223a7a1d0000",
                                "uniqueToken": "Tiered Annual"
                            }
                        ],
                        "terms": {
                            "autoRenew": true,
                            "initialTerm": {
                                "period": 12,
                                "periodType": "Month",
                                "termType": "TERMED"
                            },
                            "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",
                            "renewalTerms": [
                                {
                                    "period": 12,
                                    "periodType": "Month"
                                }
                            ]
                        }
                    },
                    "triggerDates": [
                        {
                            "name": "ContractEffective",
                            "triggerDate": "2025-02-01"
                        }
                    ],
                    "type": "CreateSubscription"
                }
            ]
        }
    ]
}'
```

```java
// Define terms
InitialTerm initialTerm = new InitialTerm()
        .periodType(TermPeriodType.MONTH)
        .period(12)
        .termType(TermType.TERMED);
RenewalTerm renewalTerm = new RenewalTerm()
        .period(12)
        .periodType(TermPeriodType.MONTH);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms()
        .renewalTerms(List.of(renewalTerm))
        .initialTerm(initialTerm)
        .renewalSetting(RenewalSetting.WITH_SPECIFIC_TERM)
        .autoRenew(true);

// Create charge override with tiered pricing
ChargeTier tier1 =  new ChargeTier()
        .tier(1)
        .startingUnit(new BigDecimal(1))
        .endingUnit(new BigDecimal(5))
        .price(new BigDecimal(100))
        .priceFormat(PriceFormat.PERUNIT);

ChargeTier tier2 = new ChargeTier()
        .tier(2)
        .startingUnit(new BigDecimal(6))
        .price(new BigDecimal(80))
        .priceFormat(PriceFormat.PERUNIT);


// Define charge overrides
CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride()
        .productRatePlanId("f94fbebf61e952182765223a7a1d0000")
        .uniqueToken("Tiered Annual")
        .chargeOverrides(List.of(new ChargeOverride()
                .productRatePlanChargeId("f94f166281e952195f35223e4b2f002f")
                .pricing(new ChargeOverridePricing()
                        .recurringTiered(new RecurringTieredPricingOverride()
                                .quantity(new BigDecimal(15)).tiers(List.of(tier1, tier2))))));

CreateOrderCreateSubscription createOrderCreateSubs = new CreateOrderCreateSubscription()
        .terms(terms)
        .subscribeToRatePlans(List.of(ratePlanOverride))
        .invoiceSeparately(true);

TriggerDate triggerDate = new TriggerDate().name(TriggerDateName.CONTRACTEFFECTIVE).triggerDate(LocalDate.of(2025,2,1));

CreateOrderAction createOrderAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .triggerDates(List.of(triggerDate))
        .createSubscription(createOrderCreateSubs);

CreateOrderSubscription subscription = new CreateOrderSubscription().addOrderActionsItem(createOrderAction);


ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true)
        .collectPayment(false);

CreateOrderRequest request = new CreateOrderRequest()
        .existingAccountNumber("A00000135")
        .description("One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later. ")
        .orderDate(LocalDate.of(2025,2,1))
        .subscriptions(List.of(subscription))
        .processingOptions(processingOptions);

CreateOrderResponse createOrderResp = zuoraClient.ordersApi().createOrderApi(request).execute();
System.out.print(createOrderResp);
```

```javascript
const subscription = {
    orderActions: [
        {
        type: 'CreateSubscription',
        triggerDates: [
            {
            name: 'ContractEffective',
            triggerDate: '2025-02-01',
            },
        ],
        createSubscription: {
            invoiceSeparately: true,
            terms: {
            autoRenew: true,
            renewalSetting: 'RENEW_WITH_SPECIFIC_TERM',
            initialTerm: {
                period: 12,
                periodType: 'Month',
                termType: 'TERMED',
            },
            renewalTerms: [
                {
                period: 12,
                periodType: 'Month',
                },
            ],
            },
            subscribeToRatePlans: [
            {
                productRatePlanId: 'f94fbebf61e952182765223a7a1d0000',
                uniqueToken: 'Tiered Annual',
                chargeOverrides: [
                {
                    productRatePlanChargeId:
                    'f94f166281e952195f35223e4b2f002f',
                    pricing: {
                    recurringTiered: {
                        quantity: 15,
                        tiers: [
                        {
                            tier: 1,
                            startingUnit: 1,
                            endingUnit: 5,
                            price: 100.0,
                            priceFormat: 'PerUnit',
                        },
                        {
                            tier: 2,
                            startingUnit: 6,
                            price: 80.0,
                            priceFormat: 'PerUnit',
                        },
                        ],
                    },
                    },
                },
                ],
            },
            ],
        }
        }
    ]
};

const orderRequest = {
    existingAccountNumber: 'A00000135',
    description:
        'One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.',
    orderDate: '2025-02-01',
    processingOptions: {
        runBilling: true,
        collectPayment: false,
    },
    subscriptions: [ subscription ],
};

const createOrderResp = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log(JSON.stringify(createOrderResp, (k, v) => v ?? undefined, 2));
```

```python
# Define Initial and Renewal Terms
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

# Define Tiered Pricing
tier1 = ChargeTier(
    tier=1,
    starting_unit=1,
    ending_unit=5,
    price=100.00,
    price_format="PerUnit"
)

tier2 = ChargeTier(
    tier=2,
    starting_unit=6,
    ending_unit=None,
    price=80.00,
    price_format="PerUnit"
)

tiered_pricing = RecurringTieredPricingOverride(
    quantity=15,
    tiers=[tier1, tier2]
)

charge_override = ChargeOverride(
    product_rate_plan_charge_id="f94f166281e952195f35223e4b2f002f",
    pricing=ChargeOverridePricing(recurring_tiered=tiered_pricing)
)

rate_plan_override = CreateOrderRatePlanOverride(
    product_rate_plan_id="f94fbebf61e952182765223a7a1d0000",
    unique_token="Tiered Annual",
    charge_overrides=[charge_override]
)

# Define Subscription Creation
create_subscription = CreateOrderCreateSubscription(
    invoice_separately=True,
    subscribe_to_rate_plans=[rate_plan_override],
    terms=terms
)

trigger_date = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2025, 2, 1)
)

create_order_action = CreateOrderAction(
    type="CreateSubscription",
    trigger_dates=[trigger_date],
    create_subscription=create_subscription
)

subscription = CreateOrderSubscription(
    order_actions=[create_order_action]
)

# Define Order Request
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True,
    collect_payment=False
)

order_request = CreateOrderRequest(
    existing_account_number="A00000135",
    description="One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.",
    order_date=date(2025, 2, 1),
    subscriptions=[subscription],
    processing_options=processing_options
)


# Create the order
create_order_resp = client.orders_api().create_order(order_request)
print(create_order_resp.to_json())
```

```csharp
// Define Initial and Renewal Terms
InitialTerm initialTerm = new InitialTerm(
  period:12,
  periodType: TermPeriodType.Month,
  termType: TermType.TERMED
);

RenewalTerm renewalTerm = new RenewalTerm(
    period: 12,
    periodType:TermPeriodType.Month
);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms(
    renewalTerms: [renewalTerm],
    initialTerm: initialTerm,
    renewalSetting: RenewalSetting.WITHSPECIFICTERM,
    autoRenew: true
);

// Define Charge Tiers
ChargeTier tier1 = new ChargeTier
(
    tier: 1,
    startingUnit: 1,
    endingUnit: 5,
    price: 100,
    priceFormat: PriceFormat.PerUnit
);

ChargeTier tier2 = new ChargeTier(
    tier: 2,
    startingUnit: 6,
    price: 80,
    priceFormat: PriceFormat.PerUnit
);

RecurringTieredPricingOverride recurringTieredPricing = new RecurringTieredPricingOverride
(
    quantity: 15,
    tiers: new List<ChargeTier> { tier1, tier2 }
);

ChargeOverride chargeOverride = new ChargeOverride
(
    productRatePlanChargeId: "f94f166281e952195f35223e4b2f002f",
    pricing: new ChargeOverridePricing(recurringTiered: recurringTieredPricing)
);

CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride
(
    productRatePlanId: "f94fbebf61e952182765223a7a1d0000",
    uniqueToken: "Tiered Annual",
    chargeOverrides: new List<ChargeOverride> { chargeOverride }
);

// Create Subscription Action
CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription
(
    invoiceSeparately: true,
    subscribeToRatePlans: new List<CreateOrderRatePlanOverride> { ratePlanOverride },
    terms: terms
);

TriggerDate triggerDate = new TriggerDate
(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: new DateOnly(2025, 2, 1)
);

CreateOrderAction orderAction = new CreateOrderAction
(
    type: OrderActionType.CreateSubscription,
    triggerDates: new List<TriggerDate> { triggerDate },
    createSubscription: createSubscription
);

CreateOrderSubscription subscription = new CreateOrderSubscription(
    orderActions: new List<CreateOrderAction> { orderAction }
);

// Define Order Request
CreateOrderRequest request = new CreateOrderRequest
(
    existingAccountNumber: "A00000135",
    description: "One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.",
    orderDate: new DateOnly(2025, 2, 1),
    subscriptions: new List<CreateOrderSubscription> { subscription },
    processingOptions: new ProcessingOptionsWithDelayedCapturePayment(
        runBilling: true,
        collectPayment: false
    )
);

// Execute the Request
try
{
    CreateOrderResponse response = await zuoraClient.OrdersApi.CreateOrderAsync(request);
    Console.WriteLine("Order created successfully:");
    Console.WriteLine($"Order Number: {response.OrderNumber}");
}
catch (ApiException ex)
{
    Console.WriteLine($"Exception when calling OrdersApi: {ex.Message}");
}
```

##

Create a subscription with percentage discount override

Create an order with a 12-month subscription of a 30%-off discount charge while creating a new account. The order date is today - Feb 1, 2025.

The new account information is as follows:

-   Name: Amy Lawrence account
-   Bill cycle day: 1
-   Currency of the account: USD
-   Bill-to-contact:
    -   Address: 1051 E Hillsdale, Foster City, CA, United States, 94404
    -   Name: Bella Lawrence
    -   work email: [myorder@example.com](mailto:myorder@example.com)
-   Create a credit card as the payment method:
    -   Card number: 4111111111111111
    -   Card type: Visa
    -   Card expiration date: Dec 2025
    -   Security code: 111
    -   Cardholder name: Bella Lawrence
    -   Cardholder address: 1051 E Hillsdale, Foster City, CA, United States, 94404
    -   Email: [myorder@example.com](mailto:myorder@example.com)

The invoice is generated immediately along with the order creation.

cURLJavaNode.jsPythonC#

```bash
curl -i -X POST https://rest.apisandbox.zuora.com/v1/orders \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  -d '
{
  "orderDate": "2025-02-01",
  "newAccount": {
    "name": "Amy Lawrence account",
    "billCycleDay": 1,
    "currency": "USD",
    "paymentTerm": "Due Upon Receipt",
    "billToContact": {
      "address1": "1051 E Hillsdale",
      "city": "Foster City",
      "country": "United States",
      "firstName": "Bella",
      "lastName": "Lawrence",
      "postalCode": "94404",
      "state": "CA",
      "workEmail": "myorder@example.com"
    },
    "creditCard": {
      "cardType": "Visa",
      "cardNumber": "4111111111111111",
      "expirationMonth": 12,
      "expirationYear": 2035,
      "securityCode": "111",
      "cardHolderInfo": {
        "cardHolderName": "Bella Lawrence",
        "addressLine1": "1051 E Hillsdale",
        "city": "Foster City",
        "state": "CA",
        "zipCode": "94404",
        "country": "United States",
        "email": "myorder@example.com"
      }
    }
  },
  "subscriptions": [
    {
      "orderActions": [
        {
          "type": "CreateSubscription",
          "triggerDates": [
            {
              "name": "ContractEffective",
              "triggerDate": "2025-02-01"
            },
            {
              "name": "ServiceActivation",
              "triggerDate": "2025-02-01"
            },
            {
              "name": "CustomerAcceptance",
              "triggerDate": "2025-02-01"
            }
          ],
          "createSubscription": {
            "terms": {
              "initialTerm": {
                "startDate": "2025-02-01",
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
                "productRatePlanId": "f94fbebf61e952182765223a7a1d0000",
                "chargeOverrides": [
                    {
                        "productRatePlanChargeId": "f94f16628be952195f3522404efb0010",
                        "description": "Overriding the default 20% discount to 30%",
                        "pricing": {
                          "discount":
                            {
                              "discountPercentage": 30
                            }
                        }
                    }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  "processingOptions": {
    "runBilling": true,
    "billingOptions": {
      "documentDate": "2025-02-01",
      "targetDate": "2025-02-01"
    }
  }
}
'
```

```java
// Define terms
InitialTerm initialTerm = new InitialTerm()
        .periodType(TermPeriodType.MONTH)
        .period(12)
        .termType(TermType.TERMED);
RenewalTerm renewalTerm = new RenewalTerm()
        .period(12)
        .periodType(TermPeriodType.MONTH);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms()
        .renewalTerms(List.of(renewalTerm))
        .initialTerm(initialTerm)
        .renewalSetting(RenewalSetting.WITH_SPECIFIC_TERM)
        .autoRenew(true);

// Define charge overrides
CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride()
        .productRatePlanId("f94fbebf61e952182765223a7a1d0000")
        .chargeOverrides(List.of(new ChargeOverride()
                .productRatePlanChargeId("f94f16628be952195f3522404efb0010")
                .description("Overriding the default 20% discount to 30%")
                .pricing(new ChargeOverridePricing().discount(new DiscountPricingOverride().discountPercentage(new BigDecimal(30))))));


CreateOrderCreateSubscription createOrderCreateSubs = new CreateOrderCreateSubscription()
        .terms(terms)
        .subscribeToRatePlans(List.of(ratePlanOverride))
        .invoiceSeparately(true);

TriggerDate triggerDate = new TriggerDate().name(TriggerDateName.CONTRACTEFFECTIVE).triggerDate(LocalDate.of(2025,2,1));

CreateOrderAction createOrderAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .triggerDates(List.of(triggerDate))
        .createSubscription(createOrderCreateSubs);

CreateOrderSubscription subscription = new CreateOrderSubscription().addOrderActionsItem(createOrderAction);


ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true)
        .collectPayment(false);


OrderCreateAccount newAccount = new OrderCreateAccount()
        .name("Account for Percentage Discount Override order")
        .billCycleDay(1)
        .currency("USD")
        .paymentTerm("Due Upon Receipt")
        .billToContact(new OrderCreateAccountContact()
                .address1("1051 E Hillsdale")
                .city("Foster City")
                .state("CA")
                .country("United States")
                .postalCode("94404")
                .firstName("Bella")
                .lastName("Lawrence"))
        .creditCard(new CreditCard()
                .cardHolderInfo(new AccountCreditCardHolder()
                        .cardHolderName("Bella Lawrence")
                        .addressLine1("1051 E Hillsdale")
                        .city("Foster City")
                        .state("CA")
                        .email("myOrder@example.com"))
                .cardType(CreditCardCardType.VISA)
                .cardNumber("4111111111111111")
                .expirationMonth(12)
                .expirationYear(2030)
                .securityCode("111"));


CreateOrderRequest request = new CreateOrderRequest()
        .newAccount(newAccount)
        .description("Create a subscription with percentage discount overrides")
        .orderDate(LocalDate.of(2025,2,1))
        .subscriptions(List.of(subscription))
        .processingOptions(processingOptions);

CreateOrderResponse createOrderResp = zuoraClient.ordersApi().createOrderApi(request).execute();
System.out.print(createOrderResp);
```

```javascript
const subscription = {
    orderActions: [
    {
        type: 'CreateSubscription',
        triggerDates: [
        {
            name: 'ContractEffective',
            triggerDate: '2025-02-01',
        },
        ],
        createSubscription: {
        invoiceSeparately: true,
        terms: {
            autoRenew: true,
            renewalSetting: 'RENEW_WITH_SPECIFIC_TERM',
            initialTerm: {
            period: 12,
            periodType: 'Month',
            termType: 'TERMED',
            },
            renewalTerms: [
            {
                period: 12,
                periodType: 'Month',
            },
            ],
        },
        subscribeToRatePlans: [
            {
            productRatePlanId: 'f94fbebf61e952182765223a7a1d0000',
            chargeOverrides: [
                {
                productRatePlanChargeId: 'f94f16628be952195f3522404efb0010',
                description: 'Overriding the default 20% discount to 30%',
                pricing: {
                    discount: {
                    discountPercentage: 30.0,
                    },
                },
                },
            ],
            },
        ],
        },
    },
    ],
};

const orderRequest = {
    newAccount: {
    name: 'Account for Percentage Discount Override order',
    billCycleDay: 1,
    currency: 'USD',
    paymentTerm: 'Due Upon Receipt',
    billToContact: {
        address1: '1051 E Hillsdale',
        city: 'Foster City',
        state: 'CA',
        country: 'United States',
        postalCode: '94404',
        firstName: 'Bella',
        lastName: 'Lawrence',
    },
    creditCard: {
        cardHolderInfo: {
        cardHolderName: 'Bella Lawrence',
        addressLine1: '1051 E Hillsdale',
        city: 'Foster City',
        state: 'CA',
        email: 'myOrder@example.com',
        },
        cardType: 'Visa',
        cardNumber: '4111111111111111',
        expirationMonth: 12,
        expirationYear: 2030,
        securityCode: '111',
    },
    },
    description:
    'Create a subscription with percentage discount overrides',
    orderDate: '2025-02-01',
    processingOptions: {
    runBilling: true,
    collectPayment: false,
    },
    subscriptions: [ subscription ],
};

const createOrderResp = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log(JSON.stringify(createOrderResp, (k, v) => v ?? undefined, 2));
```

```python
# Define Initial and Renewal Terms
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

# Define Discount Override
discount_override = DiscountPricingOverride(
    discount_percentage=30.0
)

charge_override = ChargeOverride(
    product_rate_plan_charge_id="f94f16628be952195f3522404efb0010",
    description="Overriding the default 20% discount to 30%",
    pricing=ChargeOverridePricing(discount=discount_override)
)

rate_plan_override = CreateOrderRatePlanOverride(
    product_rate_plan_id="f94fbebf61e952182765223a7a1d0000",
    charge_overrides=[charge_override]
)

# Define Subscription Creation
create_subscription = CreateOrderCreateSubscription(
    invoice_separately=True,
    subscribe_to_rate_plans=[rate_plan_override],
    terms=terms
)

trigger_date = TriggerDate(
    name="ContractEffective",
    trigger_date=date(2025, 2, 1)
)

create_order_action = CreateOrderAction(
    type="CreateSubscription",
    trigger_dates=[trigger_date],
    create_subscription=create_subscription
)

subscription = CreateOrderSubscription(
    order_actions=[create_order_action]
)

# Define New Account
account = OrderCreateAccount(
    name="Account for Percentage Discount Override order",
    bill_cycle_day=1,
    currency="USD",
    payment_term="Due Upon Receipt",
    bill_to_contact=OrderCreateAccountContact(
        address1="1051 E Hillsdale",
        city="Foster City",
        state="CA",
        country="United States",
        postal_code="94404",
        first_name="Bella",
        last_name="Lawrence"
    ),
    credit_card=CreditCard(
        card_holder_info=AccountCreditCardHolder(
            card_holder_name="Bella Lawrence",
            address_line1="1051 E Hillsdale",
            city="Foster City",
            state="CA",
            email="myOrder@example.com"
        ),
        card_type="Visa",
        card_number="4111111111111111",
        expiration_month=12,
        expiration_year=2030,
        security_code="111"
    )
)

# Define Order Request
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True,
    collect_payment=False
)

order_request = CreateOrderRequest(
    new_account=account,
    description="Create a subscription with percentage discount overrides",
    order_date=date(2025, 2, 1),
    subscriptions=[subscription],
    processing_options=processing_options
)

# Create the order
create_order_resp = client.orders_api().create_order(order_request)
print(create_order_resp.to_json())
```

```csharp
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

// Define Discount Pricing Override
DiscountPricingOverride discountOverride = new DiscountPricingOverride(
    discountPercentage: 30
);

ChargeOverridePricing pricing = new ChargeOverridePricing(
    discount: discountOverride
);

ChargeOverride chargeOverride = new ChargeOverride(
    productRatePlanChargeId: "f94f16628be952195f3522404efb0010",
    description: "Overriding the default 20% discount to 30%",
    pricing: pricing
);

CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride(
    productRatePlanId: "f94fbebf61e952182765223a7a1d0000",
    chargeOverrides: new List<ChargeOverride> { chargeOverride }
);

// Create the subscription
CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription(
    terms: terms,
    subscribeToRatePlans: new List<CreateOrderRatePlanOverride> { ratePlanOverride },
    invoiceSeparately: true
);

TriggerDate triggerDate = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: new DateOnly(2025, 2, 1)
);

CreateOrderAction orderAction = new CreateOrderAction(
    type: OrderActionType.CreateSubscription,
    triggerDates: new List<TriggerDate> { triggerDate },
    createSubscription: createSubscription
);

CreateOrderSubscription subscription = new CreateOrderSubscription(
    orderActions: new List<CreateOrderAction> { orderAction }
);

// Processing options
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment(
    runBilling: true,
    collectPayment: false
);

// Account Info
AccountCreditCardHolder cardHolder = new AccountCreditCardHolder(
    cardHolderName: "Bella Lawrence",
    addressLine1: "1051 E Hillsdale",
    city: "Foster City",
    state: "CA",
    email: "myOrder@example.com"
);

CreditCard creditCard = new CreditCard(
    cardHolderInfo: cardHolder,
    cardType: CreditCardCardType.Visa,
    cardNumber: "4111111111111111",
    expirationMonth: 12,
    expirationYear: 2030,
    securityCode: "111"
);

OrderCreateAccountContact billToContact = new OrderCreateAccountContact(
    address1: "1051 E Hillsdale",
    city: "Foster City",
    state: "CA",
    country: "United States",
    postalCode: "94404",
    firstName: "Bella",
    lastName: "Lawrence"
);

OrderCreateAccount newAccount = new OrderCreateAccount(
    name: "Account for Percentage Discount Override order",
    billCycleDay: 1,
    currency: "USD",
    paymentTerm: "Due Upon Receipt",
    billToContact: billToContact,
    creditCard: creditCard
);

// Final CreateOrderRequest
CreateOrderRequest request = new CreateOrderRequest(
    newAccount: newAccount,
    description: "Create a subscription with percentage discount overrides",
    orderDate: new DateOnly(2025, 2, 1),
    subscriptions: new List<CreateOrderSubscription> { subscription },
    processingOptions: processingOptions
);

// Execute the request
try
{
    CreateOrderResponse response = await zuoraClient.OrdersApi.CreateOrderAsync(request);
    Console.WriteLine("Order created successfully!");
    Console.WriteLine($"Order Number: {response.OrderNumber}");
}
catch (ApiException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

##

Create a subscription for a product rate plan with two charges, one charge starting on a future date

Create an order for a new subscription on an existing account (A00000135) that includes a product rate plan (`id` = `8ad08ae28adb8e2f018af22a5799226a`) that has the following two charges. The order date is today - Feb 1, 2025.

-   A one-time charge ( `id` = `f94fbebf60e95218276522506ac30001` ) where the customer wishes to purchase 100 units.
-   A recurring charge ( `id` = `f94f166281e952195f35223e4b2f002f` ) for 20 seats that will automatically start billing 15 days after the one time charge.

The invoice is generated immediately along with the order creation.

cURLJavaNode.jsPythonC#

```bash
curl -i  -X POST https://rest.apisandbox.zuora.com/v1/orders \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  -d '
    {
    "orderDate": "2025-02-01",
    "description": "One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later. The specific date override changes the default -bill on the Contract Effective Date behavior - defined on the charge in the product catalog. ",
    "existingAccountNumber": "A00000135",
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
                    "productRatePlanId": "8ad08ae28adb8e2f018af22a5799226a",
                    "chargeOverrides": [
                    {
                        "productRatePlanChargeId": "f94fbebf60e95218276522506ac30001",
                        "pricing": {
                        "oneTimeVolume": {
                            "quantity" : 100
                        }
                        }
                    }
                    ]
                },
                {
                    "productRatePlanId": "8ad08ae28adb8e2f018af22a5799226a",
                    "chargeOverrides": [
                    {
                        "productRatePlanChargeId": "f94f166281e952195f35223e4b2f002f",
                        "description": "Overriding the charge specified default behavior of billing on contract effective date with this specified date",
                        "startDate": {
                        "specificTriggerDate": "2025-02-15",
                        "triggerEvent": "SpecificDate"
                        },
                        "pricing": {
                          "recurringTiered": {
                            "quantity" : 20
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
                "triggerDate": "2025-02-01"
                }
            ]
            }
        ]
        }
        ],
        "processingOptions": {
            "runBilling": true
        }
    }
    '
```

```java
// Define terms
InitialTerm initialTerm = new InitialTerm()
        .periodType(TermPeriodType.MONTH)
        .period(12)
        .termType(TermType.TERMED);
RenewalTerm renewalTerm = new RenewalTerm()
        .period(12)
        .periodType(TermPeriodType.MONTH);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms()
        .renewalTerms(List.of(renewalTerm))
        .initialTerm(initialTerm)
        .renewalSetting(RenewalSetting.WITH_SPECIFIC_TERM)
        .autoRenew(true);

// Define charge overrides
CreateOrderRatePlanOverride ratePlanOverride1 = new CreateOrderRatePlanOverride()
        .productRatePlanId("8ad08ae28adb8e2f018af22a5799226a")
        .chargeOverrides(List.of(new ChargeOverride()
                .productRatePlanChargeId("f94fbebf60e95218276522506ac30001")
                .pricing(new ChargeOverridePricing()
                        .oneTimeVolume(new OneTimeVolumePricingOverride().quantity(new BigDecimal(100))))));

CreateOrderRatePlanOverride ratePlanOverride2 = new CreateOrderRatePlanOverride()
        .productRatePlanId("8ad08ae28adb8e2f018af22a5799226a")
        .chargeOverrides(List.of(new ChargeOverride()
                .productRatePlanChargeId("f94f166281e952195f35223e4b2f002f")
                .startDate(new TriggerParams().specificTriggerDate(LocalDate.of(2025,2,15)).triggerEvent(TriggerEvent.SPECIFICDATE))
                .description( "Over riding the charge specified default behavior of billing on contract effective date with this specified date")
                .pricing(new ChargeOverridePricing().recurringTiered(new RecurringTieredPricingOverride().quantity(new BigDecimal(20))))));

CreateOrderCreateSubscription createOrderCreateSubs = new CreateOrderCreateSubscription()
        .terms(terms)
        .subscribeToRatePlans(List.of(ratePlanOverride1,ratePlanOverride2))
        .invoiceSeparately(true);

TriggerDate triggerDate = new TriggerDate().name(TriggerDateName.CONTRACTEFFECTIVE).triggerDate(LocalDate.of(2025,2,1));

CreateOrderAction createOrderAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .triggerDates(List.of(triggerDate))
        .createSubscription(createOrderCreateSubs);

CreateOrderSubscription subscription = new CreateOrderSubscription().addOrderActionsItem(createOrderAction);

// Define processing options
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment().runBilling(true);

// Define the order request body
CreateOrderRequest request = new CreateOrderRequest()
        .existingAccountNumber("A00000135")
        .description("One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later. ")
        .orderDate(LocalDate.of(2025,2,1))
        .subscriptions(List.of(subscription))
        .processingOptions(processingOptions);

CreateOrderResponse createOrderResp = zuoraClient.ordersApi().createOrderApi(request).execute();
System.out.print(createOrderResp);
```

```javascript
const initialTerm ={
    period: 12,
    periodType: "Month",
    termType: "TERMED",
};

const renewalTerm = {
    period: 12,
    periodType: "Month"
};

const terms = {
    renewalTerms: [renewalTerm],
    initialTerm: initialTerm,
    renewalSetting: "RENEW_WITH_SPECIFIC_TERM",
    autoRenew: true
};


const ratePlanOverride1 = {
    productRatePlanId: "8ad08ae28adb8e2f018af22a5799226a",
    chargeOverrides: [
        {
        productRatePlanChargeId: "f94fbebf60e95218276522506ac30001",
        pricing: {
            oneTimeVolume: {
                quantity: 100,
            }
        }
        }
    ]
    };

const ratePlanOverride2 = {
    productRatePlanId: "8ad08ae28adb8e2f018af22a5799226a",
    chargeOverrides: [
        {
        productRatePlanChargeId: "f94f166281e952195f35223e4b2f002f",
        description: "Over riding the charge specified default behavior of billing on contract effective date with this specified date",
        startDate: {
            specificTriggerDate: "2025-02-15",
            triggerEvent: "SpecificDate",
        },
        pricing: {
            recurringTiered: {
                quantity : 20
            }
        }
        }
    ]
    };

    // Define trigger date
const triggerDate = {
    name: "ContractEffective",
    triggerDate: "2025-02-01",
};

const orderActionRequest = {
    type: "CreateSubscription",
    createSubscription: {
        terms: terms,
        subscribeToRatePlans: [ratePlanOverride1, ratePlanOverride2],
        invoiceSeparately: true,
    },
    triggerDates: [triggerDate]
};


const subscription = {
    orderActions: [orderActionRequest],
};

const orderRequest = {
    orderDate: "2025-02-01",
    description: "One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later. The specific date override changes the default -bill on the Contract Effective Date behavior- defined on the charge in the product catalog.",
    existingAccountNumber: "A00000001",
    subscriptions: [subscription],
    processingOptions:{
        runBilling: true
    }
};

const createOrderResp = await zuoraClient.ordersApi.createOrder(orderRequest);
console.log(JSON.stringify(createOrderResp, (k, v) => v ?? undefined, 2));
```

```python
# Define subscription terms
initial_term = InitialTerm(
    period=12,
    period_type=TermPeriodType.MONTH,
    term_type=TermType.TERMED
)

renewal_term = RenewalTerm(
    period=12,
    period_type=TermPeriodType.MONTH
)

terms = OrderActionCreateSubscriptionTerms(
    renewal_terms=[renewal_term],
    initial_term=initial_term,
    renewal_setting=RenewalSetting.RENEW_WITH_SPECIFIC_TERM,
    auto_renew=True
)

# Define charge overrides
charge_overrides1 = [
    ChargeOverride(
        product_rate_plan_charge_id="f94fbebf60e95218276522506ac30001",
        pricing=ChargeOverridePricing(
            one_time_volume=OneTimeVolumePricingOverride(quantity=100)
        )
    )
]

charge_overrides2 = [
    ChargeOverride(
        product_rate_plan_charge_id="f94f166281e952195f35223e4b2f002f",
        start_date=TriggerParams(
            specific_trigger_date=date(2025, 2, 15),
            trigger_event=TriggerEvent.SPECIFICDATE
        ),
        description="Overriding the charge specified default behavior of billing on contract effective date with this specified date",
        pricing=ChargeOverridePricing(
            recurring_tiered=RecurringTieredPricingOverride(quantity=20)
        )
    )
]

rate_plan_override1 = CreateOrderRatePlanOverride(
    product_rate_plan_id="8ad08ae28adb8e2f018af22a5799226a",
    charge_overrides=charge_overrides1
)

rate_plan_override2 = CreateOrderRatePlanOverride(
    product_rate_plan_id="8ad08ae28adb8e2f018af22a5799226a",
    charge_overrides=charge_overrides2
)

# Create subscription
create_order_create_subs = CreateOrderCreateSubscription(
    terms=terms,
    subscribe_to_rate_plans=[rate_plan_override1, rate_plan_override2],
    invoice_separately=True
)

# Define trigger date
trigger_date = TriggerDate(
    name=TriggerDateName.CONTRACTEFFECTIVE,
    var_trigger_date=date(2025, 2, 1)
)

# Define order action
create_order_action = CreateOrderAction(
    type=OrderActionType.CREATESUBSCRIPTION,
    trigger_dates=[trigger_date],
    create_subscription=create_order_create_subs
)

order_actions = [create_order_action]

# Create subscription order
subscription = CreateOrderSubscription(
    order_actions=order_actions
)

processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True
)

subscriptions = [subscription]

request = CreateOrderRequest(
    existing_account_number="A00000061",
    description="One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.",
    order_date=date(2025, 2, 1),
    subscriptions=subscriptions,
    processing_options=processing_options
)

# Create the order
create_order_resp = client.orders_api().create_order(request)
print(create_order_resp.to_json())
```

```csharp
InitialTerm initialTerm = new InitialTerm(
  period:12,
  periodType: TermPeriodType.Month,
  termType: TermType.TERMED
);

RenewalTerm renewalTerm = new RenewalTerm(
    period: 12,
    periodType:TermPeriodType.Month
);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms(
    renewalTerms: [renewalTerm],
    initialTerm: initialTerm,
    renewalSetting: RenewalSetting.WITHSPECIFICTERM,
    autoRenew: true
);

// Define charge overrides

List<ChargeOverride> chargeOverrides1 = new List<ChargeOverride>();
chargeOverrides1.Add(new ChargeOverride(
    productRatePlanChargeId: "f94fbebf60e95218276522506ac30001",
    pricing: new ChargeOverridePricing(
        oneTimeVolume: new OneTimeVolumePricingOverride(
            quantity: 100
        )
    )
)
);

List<ChargeOverride> chargeOverrides2 = new List<ChargeOverride>();
chargeOverrides1.Add(new ChargeOverride(
    productRatePlanChargeId: "f94f166281e952195f35223e4b2f002f",
    startDate: new TriggerParams(
        specificTriggerDate: new DateOnly(2025,2,15),
        triggerEvent: TriggerEvent.SpecificDate
        ),
    description: "Over riding the charge specified default behavior of billing on contract effective date with this specified date",
    pricing: new ChargeOverridePricing(
        recurringTiered: new RecurringTieredPricingOverride(
            quantity: 20
        )
    )
    ));

CreateOrderRatePlanOverride ratePlanOverride1 = new CreateOrderRatePlanOverride(
    productRatePlanId: "8ad08ae28adb8e2f018af22a5799226a",
    chargeOverrides: chargeOverrides1
);

CreateOrderRatePlanOverride ratePlanOverride2 = new CreateOrderRatePlanOverride(
    productRatePlanId: "8ad08ae28adb8e2f018af22a5799226a",
    chargeOverrides: chargeOverrides2
);


CreateOrderCreateSubscription createOrderCreateSubs = new CreateOrderCreateSubscription(
    terms: terms,
    subscribeToRatePlans: [ratePlanOverride1, ratePlanOverride2],
    invoiceSeparately: true
);

TriggerDate triggerDate = new TriggerDate(
    name: TriggerDateName.ContractEffective,
    varTriggerDate: new DateOnly(2025, 2, 1)
);


CreateOrderAction createOrderAction = new CreateOrderAction(
    type: OrderActionType.CreateSubscription,
    triggerDates: [triggerDate],
    createSubscription: createOrderCreateSubs
);

List<CreateOrderAction> orderActions = new List<CreateOrderAction>();
orderActions.Add(createOrderAction);

CreateOrderSubscription subscription = new CreateOrderSubscription(
    orderActions: orderActions
);


ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment(
    runBilling: true
);

List<CreateOrderSubscription> subscriptions = new List<CreateOrderSubscription>();
subscriptions.Add(subscription);

CreateOrderRequest request = new CreateOrderRequest(
    existingAccountNumber: "A00000130",
    description: "One Time Volume charge will be billed immediately, but recurring charge delayed until specified date, 15 days later.",
    orderDate: new DateOnly(2025,2,1),
    subscriptions: subscriptions,
    processingOptions: processingOptions
);

CreateOrderResponse createOrderResp = zuoraClient.OrdersApi.CreateOrder(request);
Console.WriteLine(createOrderResp.ToJson());
```

##

Create a future-dated swap order

Create an order with a future-dated swap action while creating a new account. The order date is today - Feb 1, 2025.

The new account information is as follows:

-   Name: Amy Lawrence account
-   Bill cycle day: 1
-   Currency of the account: USD
-   Bill-to-contact:
    -   Address: 1051 E Hillsdale, Foster City, CA, United States, 94404
    -   Name: Bella Lawrence
    -   work email: [myorder@example.com](mailto:myorder@example.com)
-   Create a tokenized credit card as the payment method:
    -   Token ID: 42342axdsa3243
    -   Second token ID: 23423423mnsdsd

The three order actions are as follows:

-   On Feb 1, 2025, create a subscription for product rate plan A ( `id` = `e41259a14f7cecfa38893a4541890b01` ). The subscription term is 1 year.
-   On Feb 15, 2025, remove this product rate plan A.
-   On Feb 15, 2025, add a product rate plan B ( `id` = `8ad08e1a8634dd1c018638acd24c4fcc` ) to this subscription.

The invoice is generated immediately along with the order creation.

cURLJavaNode.jsPythonC#

```bash
curl -i  -X POST https://rest.apisandbox.zuora.com/v1/orders \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  -d '
    {
    "orderDate": "2025-02-01",
    "description": "Three order actions for a subscription in one order. Note externally generated token as payment method, token is often a proxy for a credit card stored in an external to Zuora, system. Example of using uniqueToken to ensure the right rate plan is removed even though you do not know the rate plan id when the order is submitted.",
    "newAccount":{
        "batch": "Batch49",
        "autoPay": false,
        "billCycleDay": "0",
        "currency":	"USD",
        "name": "Amy Lawrence account",
        "paymentMethod": {
        "type": "CreditCardReferenceTransaction",
        "tokenId": "42342axdsa3243",
        "secondTokenId": "23423423mnsdsd"
        },
        "billToContact":	{
        "firstName": "Amy",
        "lastName": "Lawrence",
        "postalCode": "94044",
        "country": "United States",
        "state": "California"
        }
    },
    "processingOptions": {
        "billingOptions": {
        "targetDate": "2025-02-01"
        },
        "collectPayment": false,
        "runBilling": true
    },
    "subscriptions": [
        {
        "orderActions": [
        {
            "createSubscription": {
                "subscribeToRatePlans": [
                    {
                        "productRatePlanId": "e41259a14f7cecfa38893a4541890b01",
                        "uniqueToken": "320984329048239042380423"
                    }
                    ],
                    "terms": {
                        "autoRenew": true ,
                        "initialTerm": {
                            "startDate": "2025-02-01",
                            "termType": "TERMED",
                            "period": "1",
                            "periodType": "Year"
                        },
                        "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",
                        "renewalTerms": [{"period": "1", "periodType": "Year"}]
                    }
                },
                "triggerDates": [
                    {
                        "name": "ContractEffective",
                        "triggerDate": "2025-02-01"
                    },
                    {
                        "name": "ServiceActivation",
                        "triggerDate": "2025-02-01"
                    },
                    {
                        "name": "CustomerAcceptance",
                        "triggerDate": "2025-02-01"
                    }
                ],
                "type": "CreateSubscription"
            },
            {
                "removeProduct": {
                        "uniqueToken": "320984329048239042380423"
                    },
                "triggerDates": [
                    {
                        "name": "ContractEffective",
                        "triggerDate": "2025-02-15"
                    },
                    {
                        "name": "ServiceActivation",
                        "triggerDate": "2025-02-15"
                    },
                    {
                        "name": "CustomerAcceptance",
                        "triggerDate": "2025-02-15"
                    }
                ],
                "type": "RemoveProduct"
            },
            {
                "addProduct": {
                    "productRatePlanId": "8ad08e1a8634dd1c018638acd24c4fcc"
                },
                "triggerDates": [
                    {
                        "name": "ContractEffective",
                        "triggerDate": "2025-02-15"
                    },
                    {
                        "name": "ServiceActivation",
                        "triggerDate": "2025-02-15"
                    },
                    {
                        "name": "CustomerAcceptance",
                        "triggerDate": "2025-02-15"
                    }
                ],
                "type": "AddProduct"
            }
        ]
        }
    ]
    }'
```

```java
// Define initial and renewal terms
InitialTerm initialTerm = new InitialTerm()
        .termType(TermType.TERMED)
        .period(1)
        .periodType(TermPeriodType.YEAR)
        .startDate(LocalDate.of(2025, 2, 1));

RenewalTerm renewalTerm = new RenewalTerm()
        .period(1)
        .periodType(TermPeriodType.YEAR);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms()
        .initialTerm(initialTerm)
        .renewalTerms(List.of(renewalTerm))
        .renewalSetting(RenewalSetting.WITH_SPECIFIC_TERM)
        .autoRenew(true);

// Define CreateSubscription action
CreateOrderRatePlanOverride ratePlan = new CreateOrderRatePlanOverride()
        .productRatePlanId("e41259a14f7cecfa38893a4541890b01")
        .uniqueToken("320984329048239042380423");

CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription()
        .subscribeToRatePlans(List.of(ratePlan))
        .terms(terms);

List<TriggerDate> triggerDatesFeb1 = List.of(
        new TriggerDate().name(TriggerDateName.CONTRACTEFFECTIVE).triggerDate(LocalDate.of(2025, 2, 1)),
        new TriggerDate().name(TriggerDateName.SERVICEACTIVATION).triggerDate(LocalDate.of(2025, 2, 1)),
        new TriggerDate().name(TriggerDateName.CUSTOMERACCEPTANCE).triggerDate(LocalDate.of(2025, 2, 1))
);

CreateOrderAction createSubAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .triggerDates(triggerDatesFeb1)
        .createSubscription(createSubscription);

// Define RemoveProduct action
OrderActionRemoveProduct removeProduct = new OrderActionRemoveProduct()
        .uniqueToken("320984329048239042380423");

List<TriggerDate> triggerDatesFeb15 = List.of(
        new TriggerDate().name(TriggerDateName.CONTRACTEFFECTIVE).triggerDate(LocalDate.of(2025, 2, 15)),
        new TriggerDate().name(TriggerDateName.SERVICEACTIVATION).triggerDate(LocalDate.of(2025, 2, 15)),
        new TriggerDate().name(TriggerDateName.CUSTOMERACCEPTANCE).triggerDate(LocalDate.of(2025, 2, 15))
);

CreateOrderAction removeProductAction = new CreateOrderAction()
        .type(OrderActionType.REMOVEPRODUCT)
        .triggerDates(triggerDatesFeb15)
        .removeProduct(removeProduct);

// Define AddProduct action
CreateOrderAddProduct addProduct = new CreateOrderAddProduct()
        .productRatePlanId("8ad08e1a8634dd1c018638acd24c4fcc");

CreateOrderAction addProductAction = new CreateOrderAction()
        .type(OrderActionType.ADDPRODUCT)
        .triggerDates(triggerDatesFeb15)
        .addProduct(addProduct);

// Assemble all order actions into subscription object
CreateOrderSubscription subscription = new CreateOrderSubscription()
        .addOrderActionsItem(createSubAction)
        .addOrderActionsItem(removeProductAction)
        .addOrderActionsItem(addProductAction);

// Define new account and reference transaction payment method
OrderCreateAccountContact contact = new OrderCreateAccountContact()
        .firstName("Amy")
        .lastName("Lawrence")
        .postalCode("11545")
        .country("United States");

CreateAccountPaymentMethod paymentMethod = new CreateAccountPaymentMethod()
        .type("CreditCardReferenceTransaction")
        .tokenId("42342axdsa3243")
        .secondTokenId("23423423mnsdsd");

OrderCreateAccount newAccount = new OrderCreateAccount()
        .name("Amy Lawrence Account")
        .billCycleDay(0)
        .batch("Batch49")
        .autoPay(false)
        .currency("USD")
        .billToContact(contact)
        .paymentMethod(paymentMethod);

// Define processing options
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true)
        .collectPayment(false)
        .billingOptions(new BillingOptions().targetDate(LocalDate.of(2025, 2, 1)));

// Create order request
CreateOrderRequest request = new CreateOrderRequest()
        .orderDate(LocalDate.of(2025, 2, 1))
        .description("Three order actions for a subscription in one order.")
        .newAccount(newAccount)
        .subscriptions(List.of(subscription))
        .processingOptions(processingOptions);

// Execute order
CreateOrderResponse response = zuoraClient.ordersApi().createOrderApi(request).execute();
System.out.println("Order created: " + response.getOrderNumber());
}
```

```javascript
// Trigger Dates
const triggerDatesFeb1 = [
    { name: 'ContractEffective', triggerDate: '2025-02-01' },
    { name: 'ServiceActivation', triggerDate: '2025-02-01' },
    { name: 'CustomerAcceptance', triggerDate: '2025-02-01' },
];

const triggerDatesFeb15 = [
    { name: 'ContractEffective', triggerDate: '2025-02-15' },
    { name: 'ServiceActivation', triggerDate: '2025-02-15' },
    { name: 'CustomerAcceptance', triggerDate: '2025-02-15' },
];

// CreateSubscription Action
const createSubscriptionAction = {
type: 'CreateSubscription',
triggerDates: triggerDatesFeb1,
createSubscription: {
    terms: {
    initialTerm: {
        termType: 'TERMED',
        period: 1,
        periodType: 'Year',
        startDate: '2025-02-01',
    },
    renewalTerms: [
        {
        period: 1,
        periodType: 'Year',
        },
    ],
    renewalSetting: 'RENEW_WITH_SPECIFIC_TERM',
    autoRenew: true,
    },
    subscribeToRatePlans: [
    {
        productRatePlanId: 'e41259a14f7cecfa38893a4541890b01',
        uniqueToken: '320984329048239042380423',
    },
    ],
},
};

// RemoveProduct Action
const removeProductAction = {
type: 'RemoveProduct',
triggerDates: triggerDatesFeb15,
removeProduct: {
    uniqueToken: '320984329048239042380423',
},
};

// AddProduct Action
const addProductAction = {
type: 'AddProduct',
triggerDates: triggerDatesFeb15,
addProduct: {
    productRatePlanId: '8ad08e1a8634dd1c018638acd24c4fcc',
},
};

// Create Account
const newAccount = {
name: 'Amy Lawrence Account',
billCycleDay: 0,
batch: 'Batch49',
autoPay: false,
currency: 'USD',
billToContact: {
    firstName: 'Amy',
    lastName: 'Lawrence',
    postalCode: '11545',
    country: 'United States',
    state: 'California'
},
paymentMethod: {
    type: 'CreditCardReferenceTransaction',
    tokenId: '42342axdsa3243',
    secondTokenId: '23423423mnsdsd',
},
};

// Processing Options
const processingOptions = {
runBilling: true,
collectPayment: false,
billingOptions: {
    targetDate: '2025-02-01',
},
};

// Create Order Request
const createOrderRequest = {
orderDate: '2025-02-01',
description: 'Three order actions for a subscription in one order.',
newAccount,
subscriptions: [
    {
    orderActions: [
        createSubscriptionAction,
        removeProductAction,
        addProductAction,
    ],
    },
],
processingOptions,
};

const createOrderResp = await zuoraClient.ordersApi.createOrder(createOrderRequest);
console.log(JSON.stringify(createOrderResp, (k, v) => v ?? undefined, 2));
```

```python
# Define terms
initial_term = InitialTerm(
    term_type="TERMED",
    period=1,
    period_type="Year",
    start_date=date(2025, 2, 1)
)

renewal_term = RenewalTerm(
    period=1,
    period_type="Year"
)

terms = OrderActionCreateSubscriptionTerms(
    initial_term=initial_term,
    renewal_terms=[renewal_term],
    renewal_setting="RENEW_WITH_SPECIFIC_TERM",
    auto_renew=True
)

# Create subscription action
rate_plan = CreateOrderRatePlanOverride(
    product_rate_plan_id="e41259a14f7cecfa38893a4541890b01",
    unique_token="320984329048239042380423"
)

create_subscription = CreateOrderCreateSubscription(
    subscribe_to_rate_plans=[rate_plan],
    terms=terms
)

trigger_dates_feb1 = [
    TriggerDate(name="ContractEffective", trigger_date=date(2025, 2, 1)),
    TriggerDate(name="ServiceActivation", trigger_date=date(2025, 2, 1)),
    TriggerDate(name="CustomerAcceptance", trigger_date=date(2025, 2, 1))
]

create_sub_action = CreateOrderAction(
    type="CreateSubscription",
    trigger_dates=trigger_dates_feb1,
    create_subscription=create_subscription
)

# Remove product action
remove_product = OrderActionRemoveProduct(
    unique_token="320984329048239042380423"
)

trigger_dates_feb15 = [
    TriggerDate(name="ContractEffective", trigger_date=date(2025, 2, 15)),
    TriggerDate(name="ServiceActivation", trigger_date=date(2025, 2, 15)),
    TriggerDate(name="CustomerAcceptance", trigger_date=date(2025, 2, 15))
]

remove_product_action = CreateOrderAction(
    type="RemoveProduct",
    trigger_dates=trigger_dates_feb15,
    remove_product=remove_product
)

# Add product action
add_product = CreateOrderAddProduct(
    product_rate_plan_id="8ad08e1a8634dd1c018638acd24c4fcc"
)

add_product_action = CreateOrderAction(
    type="AddProduct",
    trigger_dates=trigger_dates_feb15,
    add_product=add_product
)

# Combine actions under subscription
subscription = CreateOrderSubscription(
    order_actions=[
        create_sub_action,
        remove_product_action,
        add_product_action
    ]
)

# Define account and contact
contact = OrderCreateAccountContact(
    first_name="Amy",
    last_name="Lawrence",
    postal_code="11545",
    country="United States",
    state="California"
)

payment_method = CreateAccountPaymentMethod(
    type="CreditCardReferenceTransaction",
    token_id="42342axdsa3243",
    second_token_id="23423423mnsdsd"
)

new_account = OrderCreateAccount(
    name="Amy Lawrence Account",
    bill_cycle_day=0,
    batch="Batch49",
    auto_pay=False,
    currency="USD",
    bill_to_contact=contact,
    payment_method=payment_method
)

# Processing options
processing_options = ProcessingOptionsWithDelayedCapturePayment(
    run_billing=True,
    collect_payment=False,
    billing_options=BillingOptions(target_date=date(2025, 2, 1))
)

# Create order request
order_request = CreateOrderRequest(
    order_date=date(2025, 2, 1),
    description="Three order actions for a subscription in one order.",
    new_account=new_account,
    subscriptions=[subscription],
    processing_options=processing_options
)

# Submit the order
create_order_resp = client.orders_api().create_order(order_request)
print(f"Order created: {create_order_resp.order_number}")
```

```csharp
var startDate = new DateOnly(2025, 2, 1);
var switchDate = new DateOnly(2025, 2, 15);

// Define Initial and Renewal Terms
InitialTerm initialTerm = new InitialTerm(
    period: 1,
    periodType: TermPeriodType.Year,
    termType: TermType.TERMED,
    startDate: startDate
);

RenewalTerm renewalTerm = new RenewalTerm(
    period: 1,
    periodType: TermPeriodType.Year
);

OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms(
    initialTerm: initialTerm,
    renewalTerms: new List<RenewalTerm> { renewalTerm },
    renewalSetting: RenewalSetting.WITHSPECIFICTERM,
    autoRenew: true
);

// Define CreateSubscription action
CreateOrderRatePlanOverride ratePlan = new CreateOrderRatePlanOverride(
    productRatePlanId: "e41259a14f7cecfa38893a4541890b01",
    uniqueToken: "320984329048239042380423"
);

CreateOrderCreateSubscription createSubscription = new CreateOrderCreateSubscription(
    terms: terms,
    subscribeToRatePlans: new List<CreateOrderRatePlanOverride> { ratePlan }
);

List<TriggerDate> triggerDatesFeb1 = new List<TriggerDate>
{
    new TriggerDate(TriggerDateName.ContractEffective, startDate),
    new TriggerDate(TriggerDateName.ServiceActivation, startDate),
    new TriggerDate(TriggerDateName.CustomerAcceptance, startDate)
};

CreateOrderAction createSubAction = new CreateOrderAction(
    type: OrderActionType.CreateSubscription,
    triggerDates: triggerDatesFeb1,
    createSubscription: createSubscription
);

// Define RemoveProduct action
OrderActionRemoveProduct removeProduct = new OrderActionRemoveProduct(
    uniqueToken: "320984329048239042380423"
);

List<TriggerDate> triggerDatesFeb15 = new List<TriggerDate>
{
    new TriggerDate(TriggerDateName.ContractEffective, switchDate),
    new TriggerDate(TriggerDateName.ServiceActivation, switchDate),
    new TriggerDate(TriggerDateName.CustomerAcceptance, switchDate)
};

CreateOrderAction removeProductAction = new CreateOrderAction(
    type: OrderActionType.RemoveProduct,
    triggerDates: triggerDatesFeb15,
    removeProduct: removeProduct
);

// Define AddProduct action
CreateOrderAddProduct addProduct = new CreateOrderAddProduct(
    productRatePlanId: "8ad08e1a8634dd1c018638acd24c4fcc"
);

CreateOrderAction addProductAction = new CreateOrderAction(
    type: OrderActionType.AddProduct,
    triggerDates: triggerDatesFeb15,
    addProduct: addProduct
);

// Bundle all actions into a subscription
CreateOrderSubscription subscription = new CreateOrderSubscription(
    orderActions: new List<CreateOrderAction> { createSubAction, removeProductAction, addProductAction }
);

// Define account
OrderCreateAccountContact contact = new OrderCreateAccountContact(
    firstName: "Amy",
    lastName: "Lawrence",
    postalCode: "11545",
    country: "United States",
    state: "California"

);

CreateAccountPaymentMethod paymentMethod = new CreateAccountPaymentMethod(
    type: "CreditCardReferenceTransaction",
    tokenId: "42342axdsa3243",
    secondTokenId: "23423423mnsdsd"
);

OrderCreateAccount newAccount = new OrderCreateAccount(
    name: "Amy Lawrence Account",
    billCycleDay: 0,
    batch: "Batch49",
    autoPay: false,
    currency: "USD",
    billToContact: contact,
    paymentMethod: paymentMethod
);

// Processing options
ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment(
    runBilling: true,
    collectPayment: false,
    billingOptions: new BillingOptions(targetDate: startDate)
);

// Create order request
CreateOrderRequest request = new CreateOrderRequest(
    newAccount: newAccount,
    description: "Three order actions for a subscription in one order.",
    orderDate: startDate,
    subscriptions: new List<CreateOrderSubscription> { subscription },
    processingOptions: processingOptions
);

// Execute the request
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
