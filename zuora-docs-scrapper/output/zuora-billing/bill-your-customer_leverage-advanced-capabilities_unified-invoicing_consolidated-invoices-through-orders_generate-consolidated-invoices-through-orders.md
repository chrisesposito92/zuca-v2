---
title: "Generate consolidated invoices through Orders"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/consolidated-invoices-through-orders/generate-consolidated-invoices-through-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:39.220Z"
---

# Generate consolidated invoices through Orders

Learn how to generate consolidated invoices for hybrid orders containing both subscriptions and non-subscription charges using the Zuora REST API.

With Unified Invoicing, you can generate consolidated invoices while creating a hybrid order containing both subscriptions and non-subscription charges through the Zuora REST API.

Assume that your end customer places an order for subscribing to professional services and also purchases some hardware products, you want to create a consolidated invoice to include both the order and the non-subscription charge for hardware purchase in real time, and then collect the payment for the invoice. In this scenario, you can use the Create an order operation to create a hybrid order and generate a consolidated invoice directly. Later, you can use the Apply a payment operation to apply an existing payment to the consolidated invoice.

You can use the Create an order operation to create an order line item with a new subscription and generate a consolidated invoice.

To create an order line item with a new subscription:

1.  Determine the mandatory fields that you need for creating an order, including: These fields are a minimal set of fields required for an order. You can configure other optional fields based on your business needs.

    -   The following fields for a subscription:

        -   orderDate

        -   productRatePlanId

        -   existingAccountNumber
            Note: You can also create both a subscription and a new account at the same time. In this case, you need to provide several other fields instead of `existingAccountNumber` . See Create an order for details.

    -   The following fields and other required custom fields for order line items:

        -   itemName

        -   itemType

        -   itemState

        -   amountPerUnit


2.  Use the Create an order operation to create an order containing a subscription and one order line item.

    The following sample API request creates a subscription and one order line item under an existing account:

    | Request | POST /v1/orders |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "A00000776", "subscriptions": [ { "orderActions": [ { "createSubscription": { "subscribeToRatePlans": [ { "productRatePlanId": "402894847af12293017af1c0d12403cc" } ], "terms": { "initialTerm": { "period": 3, "periodType": "Month", "termType": "TERMED", "startDate": "2021-03-01" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 2, "periodType": "Month" } ], "autoRenew": false } }, "type": "CreateSubscription", "triggerDates": [ { "triggerDate": "2021-03-01", "name": "ContractEffective" }, { "triggerDate": "2021-03-01", "name": "ServiceActivation" }, { "triggerDate": "2021-03-01", "name": "CustomerAcceptance" } ] } ] } ], "processingOptions": { "billingOptions": { "documentDate": "2021-03-01", "targetDate": "2021-03-01" }, "collectPayment": false, "runBilling": true }, "orderLineItems": [ { "itemName": "OrderItemName", "itemType": "Product", "UOM": "Each", "quantity": 1, "amountPerUnit": 10, "description": "Description", "itemState": "SentToBilling", "billTargetDate": "2021-03-01", "transactionDate": "2021-03-01", "listPricePerUnit": 10 } ], "orderDate": "2021-03-01" } |

    After the sample API request is submitted, the following sample API response is returned:

    | Request | POST /v1/orders |
    | --- | --- |
    | Request Body | { "success": true, "orderNumber": "O-00000001", "accountNumber": "AN_1627553580589", "status": "Completed", "subscriptionNumbers": [ "A-S00000001" ], "invoiceNumbers": [ "INV00000001" ], "orderLineItems": [ { "id": "402894847af12293017af1c0dcb603eb", "itemNumber": "1" } ] } |

    A hybrid order is created, and a consolidated invoice is generated and posted.

    To create the order under a new account instead of an existing account, specify the `newAccount` field instead of the `existingAccountNumber` field.

    To preview invoices for the new subscription, use the Preview order operation.
