---
title: "Place order and pay"
url: "https://developer.zuora.com/docs/get-started/tutorials/create-orders/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:48.629Z"
---

#

Place order and pay

##

End-user flow

After end customers enter the payment method information in the Payment Form, the order is created when they click **Pay Now**. If the subscription is created and the payment is successfully collected, an invoice is generated with a zero balance that you can choose to send to the customer using their bill-to contact.

##

Sample code

The following sample code creates an order with the following information:

-   `existingAccountNumber`: A00024362 (obtained from the "Create a billing account" section)
-   `subscribeToRatePlans`:
    -   `productRatePlanNumber`: PRP-00000180 (obtained from the "Show specific product details" section)
    -   `productRatePlanId`: `8a90a9b784ae5f180184c6c4650446a1`
-   `orderDate`: Today's date (assuming that today is 2025-01-01).
-   `processingOptions`:
    -   `runBilling`: `true`. It means that the invoice is generated while the subscription is created.
    -   `collectPayment` : `true`. Collects the payment when the invoice is generated.
    -   `targetDate`: the same as the `orderDate`. The invoice is generated and posted on the same day the order is created.

cURLJavaNode.jsPythonC#

```bash
curl -L -X POST 'https://rest.test.zuora.com/v1/orders' \
-H 'Authorization: Bearer 82db6bcc9b384c159a37262795f12a0a' \
-H 'Content-Type: application/json' \
-d '{
    "orderDate": "2025-01-01",
    "processingOptions": {
        "runBilling": true,
        "collectPayment": true,
        "billingOptions": {
            "targetDate": "2025-01-01"
        }
    },
    "existingAccountNumber": "A00024362",
    "subscriptions": [
        {
            "orderActions": [
                {
                    "type": "CreateSubscription",
                    "createSubscription": {
                        "terms": {
                         "initialTerm": {
                           "termType": "EVERGREEN"
                         }
                        },
                        "subscribeToRatePlans":[
                            {
                            "productRatePlanNumber": "PRP-00000180"
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
InitialTerm initialTerm = new InitialTerm().periodType(null).termType(TermType.EVERGREEN);
OrderActionCreateSubscriptionTerms terms = new OrderActionCreateSubscriptionTerms().renewalTerms(null).initialTerm(initialTerm);
CreateOrderRatePlanOverride ratePlanOverride = new CreateOrderRatePlanOverride().productRatePlanNumber("PRP-00000180");

CreateOrderCreateSubscription createOrderCreateSubs = new CreateOrderCreateSubscription()
        .terms(terms)
        .addSubscribeToRatePlansItem(ratePlanOverride);

CreateOrderAction createOrderAction = new CreateOrderAction()
        .type(OrderActionType.CREATESUBSCRIPTION)
        .createSubscription(createOrderCreateSubs);
CreateOrderSubscription subscription = new CreateOrderSubscription().addOrderActionsItem(createOrderAction);

ProcessingOptionsWithDelayedCapturePayment processingOptions = new ProcessingOptionsWithDelayedCapturePayment()
        .runBilling(true)
        .collectPayment(true)
        .billingOptions(new BillingOptions().targetDate(LocalDate.of(2024,7,1)));

CreateOrderRequest request = new CreateOrderRequest()
        .existingAccountNumber("A00024362")
        .orderDate(LocalDate.of(2025,1,1))
        .addSubscriptionsItem(subscription)
        .processingOptions(processingOptions);

CreateOrderResponse createOrderResp = zuoraClient.ordersApi().createOrderApi(request).execute();
System.out.print(createOrderResp);
```

```javascript
const initialTerm = new InitialTerm();
initialTerm.termType = 'EVERGREEN';
const terms = new OrderActionCreateSubscriptionTerms(initialTerm, null);
const ratePlanOverride = new CreateOrderRatePlanOverride()
ratePlanOverride.productRatePlanNumber = 'PRP-00000770';


const createOrderCreateSubs = new CreateOrderCreateSubscription();
createOrderCreateSubs.terms = terms;
createOrderCreateSubs.subscribeToRatePlans = [ratePlanOverride];


const createOrderAction = new CreateOrderAction('CreateSubscription');
createOrderAction.createSubscription = createOrderCreateSubs;


const subscription = new CreateOrderSubscription();
subscription.orderActions = [createOrderAction];

const date = new Date();
date.setFullYear(2025,0,1);

const processingOptions = new ProcessingOptionsWithDelayedCapturePayment();
processingOptions.runBilling = true;
processingOptions.collectPayment = true;
const billingOptions = new BillingOptions();
billingOptions.targetDate = date.toISOString().split('T')[0];
processingOptions.billingOptions = billingOptions;

const request = new CreateOrderRequest();
request.existingAccountNumber = 'A00000099';
request.orderDate = date.toISOString().split('T')[0];
request.subscriptions = [subscription];
request.processingOptions = processingOptions;

const createOrderResp = await zuoraClient.ordersApi.createOrder(request);
console.log(JSON.stringify(createOrderResp, (k, v) => v ?? undefined, 2));
```

```python
from datetime import date
from zuora_sdk import CreateOrderRequest, PreviewOrderRequest, PreviewOrderResponse, CreateOrderResponse, CreateOrderSubscription, \
    ProcessingOptionsWithDelayedCapturePayment
...

def create_order(client=None):
    if not client:
        client = get_client()
    try:
        request = CreateOrderRequest(
            order_date=date.today().strftime('%Y-%m-%d'),
            existing_account_number='A00024362',
            subscriptions=[{
                'order_actions': [{
                    'type': 'CreateSubscription',
                    'create_subscription': {
                        'terms': {'initial_term': {'term_type': 'EVERGREEN'}},
                        'subscribe_to_rate_plans': [{'product_rate_plan_number': 'PRP-00000151'}]
                    }
                }]
            }],
            processing_options=ProcessingOptionsWithDelayedCapturePayment(run_billing=True, collect_payment=True, billing_options={'target_date': date.today().strftime('%Y-%m-%d')}))
        api_response: CreateOrderResponse = client.orders_api().create_order(request)
        print(api_response.to_json())
    except ApiException as e:
        print("Exception when calling OrdersApi->create_order: %s\n" % e)
    return None

if __name__ == '__main__':
    create_order()
```

```csharp
CreateOrderResponse createOrderResponse = zuoraClient.OrdersApi.CreateOrder
(
    new CreateOrderRequest
    (
        orderDate: DateOnly.FromDateTime(DateTime.Today),
        existingAccountNumber: "A00024362",
        subscriptions:
        [
            new CreateOrderSubscription
            (
                orderActions:
                [
                    new CreateOrderAction
                    (
                        type: OrderActionType.CreateSubscription,
                        createSubscription: new CreateOrderCreateSubscription
                        (
                            terms: new OrderActionCreateSubscriptionTerms
                            (
                                initialTerm: new InitialTerm(termType: TermType.EVERGREEN)
                            ),
                            subscribeToRatePlans: [new CreateOrderRatePlanOverride(productRatePlanId: "86d488ab76f92793376289ff161a0ada")]
                        )
                    )
                ]
            )
        ],
        processingOptions: new ProcessingOptionsWithDelayedCapturePayment
        (
            runBilling: true,
            billingOptions: new BillingOptions(targetDate: DateOnly.FromDateTime(DateTime.Today))
        )
    )
);

Console.WriteLine(createOrderResponse.ToJson());
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "success": true,
    "orderNumber": "O-00000047",
    "accountNumber": "A00024362",
    "status": "Completed",
    "subscriptionNumbers": [
        "A-S00000031"
    ],
    "invoiceNumbers": [
        "INV00000041"
    ]
}
```

##

Next step

[View the generated invoice](/docs/get-started/tutorials/view-invoice/)
