---
title: "Manage payment methods and payments"
url: "https://developer.zuora.com/docs/get-started/tutorials/deprecated-payments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:03.994Z"
---

#

Manage payment methods and payments

You can create a payment method using the "Create a payment method" operation. However, to guarantee PCI-compliance, we recommend that you create payment methods using Zuora’s Payment Pages 2.0 feature.

Zuora’s Payment Pages allow end subscribers to send payment method details to your company in a secure and PCI-compliant manner. The payment page is hosted in Zuora and iframed directly onto your company’s website.

Payment Pages are usually embedded into the customer acquisition flow and shown to the end subscribers prior to an order submission. When the payment method details have been captured in Zuora, subsequent payments can be processed through that payment method.

The following diagram shows the default workflow of Zuora Payment Pages:

![Payment Pages 2.0 flow](/02d95b6fdfcfa808c48944fc5162fe44/HPM2workflow.jpeg)

For more information, see [Payment Pages 2.0 implementation overview](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/1_Payment_Pages_2.0_Implementation_Overview).

##

Create payment methods

Suppose that you want to create a credit card payment method for your customer's account (`account_id`\= `8ad093d07ae636bb017ae97518762aa3`) and this card needs to be the default payment method on this account. You must configure the following fields:

-   `type`: Set this field to `card`.
-   `card`: Provide the credit card information as appropriate. The following fields are mandatory:
    -   `card_number`
    -   `brand`
    -   `expiry_month`
    -   `expiry_year`
-   `account_id`: Set this field to `8ad093d07ae636bb017ae97518762aa3`, the unique identifier of this account.

cURLJavaNode

```bash
curl --request POST \
  --url https://rest.test.zuora.com/v2/payment_methods \
  --header 'Authorization: Bearer 723aa66a78384cb69ddb067fc448a776' \
  --header 'Content-Type: application/json' \
  --data '{
  "type": "card",
  "billing_details": {
    "name": "Amy Lawrence",
    "address": {
      "line1": "Apt 101, 123 Street",
      "city": "Atlanta",
      "state": "Georgia",
      "country": "USA"
    }
  },
  "card": {
    "card_number": "41111111111",
    "brand": "visa",
    "expiry_month": 11,
    "expiry_year": 2025,
    "security_code": "123"
  },
  "is_default": true,
  "account_id": "8ad093d07ae636bb017ae97518762aa3"
}'
```

```java
Card cardInfo = new Card()
          .cardNumber("41111111111")
          .brand(Card.BrandEnum.VISA)
          .expiryMonth(new BigDecimal(11))
          .expiryYear(new BigDecimal(2025))
          .securityCode("123");

AddressFieldDefinitions addressInfo = new AddressFieldDefinitions()
        .line1("Apt 101, 123 Street")
        .city("Atlanta")
        .state("Georgia")
        .country("USA");

BillingDetails billingDetails = new BillingDetails()
        .name("Amy Lawrence")
        .address(addressInfo);

PaymentMethodCreateRequest paymentMethodInfo = new PaymentMethodCreateRequest()
        .type(PaymentMethodCreateRequest.TypeEnum.CARD)
        .accountId("8ad093d07ae636bb017ae97518762aa3")
        .isDefault(true)
        .card(cardInfo)
        .billingDetails(billingDetails);

PaymentMethod createdPaymentMethod = zuoraClient.paymentMethods().createPaymentMethod(paymentMethodInfo);

System.out.print(createdPaymentMethod);
```

```javascript
const cardInfo = {
  card_number: '41111111111',
  brand: 'visa',
  expiry_month: 11,
  expiry_year: 2025,
  security_code: '123'
};

const billingDetails = {
  name: 'Amy Lawrence',
  address:{
      line1: 'Apt 101, 123 Street',
      city: 'Atlanta',
      state: 'Georgia',
      country: 'USA',
  }
};

const paymentMethodInfo = {
  card: cardInfo,
  billing_details: billingDetails,
  type: 'card',
  is_default: true,
  account_id: '8ad093d07ae636bb017ae97518762aa3',
}

const creditCardRequest = await zuoraClient.paymentMethods.createPaymentMethod(paymentMethodInfo);

console.log(creditCardRequest);
```

##

Create payment runs

After invoices have been created in the bill run, they are ready to collect payments. This is where payment runs come in: they are used to collect cash from your customers.

Suppose that you have created an ad hoc bill run (id=`8ad094b98736ff1f01874b6f2f307eae`) for a batch of your customers (`Batch1`), you can create a payment run for this batch to collect payment. In addition, you want to apply credit memos to their invoices before using their default payment methods.

```bash
curl --request POST \
  --url https://rest.test.zuora.com/v2/payment_runs \
  --header 'Authorization: Bearer ac8a7ba092414c9c96c7243699ee6a6b' \
  --header 'Content-Type: application/json' \
  --data '{
	"apply_credit_memos": true,
	"target_date": "2023-04-01",
	"batch": "Batch1",
  	"bill_run_id": "8ad094b98736ff1f01874b6f2f307eae"

}'
```

If the payment run request succeeds, you will get the following `201 Created` response:

```json
{
	"id": "8ad09e2087554ccb018755d12c7d4f62",
	"created_by_id": "8ad09bce80507dab0180688bdabc20cb",
	"created_time": "2023-04-06T02:06:24-07:00",
	"custom_fields": {},
	"custom_objects": {},
	"apply_credit_memos": true,
	"batch": "Batch1",
	"bill_run_id": "BR-00000128",
	"state_transitions": {},
	"payment_gateway_id": "",
	"payment_run_number": "PR-00000033",
	"payment_run_date": "2023-04-01",
	"target_date": "2023-04-01",
	"state": "pending"
}
```

##

Create payments

The Payment object holds all of the information about a payment, including the payment amount and to which billing documents the payment is applied.

The following code sample creates a payment to the invoice created for your customer account, Amy Lawrence (`account_id=2c92c0f96abc17de016abd62bd0c5854`), using the payment method (`payment_method_id=8f64d4d7b1b989f6c571d931f84e0458`) associated with this account.

cURLJavaNode

```bash
curl -X POST "https://rest.test.zuora.com/v2/payments"
-H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
-H "Content-Type: application/json"
-d '{
	"account_id": "2c92c0f96abc17de016abd62bd0c5854",
    "billing_documents": [{
		"id": "8ad093f27f54fa8d017f6b191ff02543",
		"amount": 50,
		"type": "invoice"
    }],
    "amount": 50,
    "currency": "USD",
    "payment_date": "2022-03-08",
    "payment_method_id": "8f64d4d7b1b989f6c571d931f84e0458",
    "external": true
}'
```

```java
LocalDate date = LocalDate.of(2022,3,8);

BillingDocumentApplicationRequest invoiceApplicationRequest = new BillingDocumentApplicationRequest()
    .amount(new BigDecimal(30))
    .type(BillingDocumentApplicationRequest.TypeEnum.INVOICE)
    .id("8ad093f27f54fa8d017f6b191ff02543");

PaymentCreateRequest paymentCreateRequest = new PaymentCreateRequest()
    .accountId("2c92c0f96abc17de016abd62bd0c5854")
    .amount(new BigDecimal(50))
    .paymentDate(date)
    .paymentMethodId("8f64d4d7b1b989f6c571d931f84e0458")
    .external(true)
    .currency("USD")
    .billingDocuments(Collections.singletonList(invoiceApplicationRequest));

Payment newPayment = zuoraClient.payments().createPayment(paymentCreateRequest);
```

```javascript
const invoiceApplicationRequest = {
    amount: 30,
    type: 'invoice',
    id: '8ad093f27f54fa8d017f6b191ff02543',
};

const paymentCreateRequest = {
    account_id: '2c92c0f96abc17de016abd62bd0c5854',
    amount: 50,
    payment_date: '2022-03-08',
    payment_method_id: '8f64d4d7b1b989f6c571d931f84e0458',
    external: true,
    currency: 'USD',
    billing_documents: [invoiceApplicationRequest]
};

const newPayment = await zuoraClient.payments.createPayment(paymentCreateRequest);
```

##

Create refunds

In Zuora, you can refund fully or partially unapplied payments to your end subscribers by refunding from payment.

When you issue a refund, the `amount` field is required, which represents the total amount of the refund.

The total amount of the refund cannot exceed the unapplied amount of the associated payment. If you want to refund the applied amount of the associated payment, you must first unapply the applied amount from the billing documents, and then refund the unapplied amount to your end subscribers.

The `external` filed indicates whether this refund is an external refund or an electronic refund. External refunds are performed outside of Zuora and electronic refunds are issued by using supported payment gateways.

If the refund type is electronic, you cannot specify the refund date because the electronic refund will automatically refund money to the end subscriber’s credit card.

The following example uses the [Create a refund](https://developer.zuora.com/other-api/quickstart-api/operation/createRefund) operation to refund part of the unapplied amount ($10) from the payment:

cURLJavaNode

```bash
curl -X POST "https://rest.test.zuora.com/v2/refunds"
     -H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
     -H "Content-Type: application/json"
     -d '{
            "account_id": "8ad09b7d8292b85d0182a4d6f875225a",
            "payment_id": "8ad0887e82d94f5d0182d967a49c1a63",
            "amount": 10,
            "external": false
          }'
```

```java
String accountId = "8ad09b7d8292b85d0182a4d6f875225a";
String paymentId = newPayment.getId();

RefundCreateRequest refundRequest = new RefundCreateRequest()
    .amount(new BigDecimal(10))
    .accountId(accountId)
    .paymentId(paymentId)
    .external(false);

Refund refund = zuoraClient.refunds().createRefund(refundRequest);
```

```javascript
const refundRequest = {
    amount: 10,
    account_id: '8ad09b7d8292b85d0182a4d6f875225a',
    payment_id: '8ad0887e82d94f5d0182d967a49c1a63',
    external: false
};

const refund = await zuoraClient.refunds.createRefund(refundRequest);
```
