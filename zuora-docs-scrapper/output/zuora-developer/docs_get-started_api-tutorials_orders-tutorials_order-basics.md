---
title: "Orders basics for developers"
url: "https://developer.zuora.com/docs/get-started/api-tutorials/orders-tutorials/order-basics/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:48.299Z"
---

#

Orders basics for developers

In Zuora, nearly every monetizable event such as sign‑ups, upsells, and renewals, ultimately routes through a single orchestrator: [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/)(POST /v1/orders). Master this call and you control account creation, subscription lifecycles, and revenue recognition with one payload.

Orders makes these use cases easy:

-   **Freemium and trial conversion** : Move from leads to paying customers
-   **Plan changes** : Immediately bill and collect when customers add/upgrade/downgrade
-   **Discounting** : Offer discounts to lock customers in
-   **Renewal processing** : Quote Renewals with and without changes easily using [Preview an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewOrder/)
-   **One billing system** : Capture physical goods orders, on their own, or combined with recurring and consumption price models. Zuora Billing is your Total Monetization Solution

**Why this matters:**

-   **Data consistency** : Atomic operations prevent partial updates that create billing discrepancies
-   **Revenue recognition** : Proper structure ensures accurate financial reporting
-   **Customer experience** : Immediate invoice generation and payment collection
-   **Proration logic** : Configurable, automatic calculations for mid-cycle plan changes
-   **Tax calculation** : Real-time tax engine integration
-   **Integration simplification** : Single webhook event for downstream systems

We have a more extensive treatment of our [object model](https://developer.zuora.com/v1-api-reference/object-model/) but the essentials are:

-   An Order must either create a new billing account OR specify an existing billing account.
-   An Order captures products and services, along with pricing and quantities, requested by a customer, not just at the start of their contract but for all changes to a customer's portfolio of products and services over the entire time they are your customer.
-   Orders consist of either:
    -   'Order Line Items', one time charges for physical goods, or
    -   'Order Actions', for recurring or consumption products or services, or
    -   Any combination of both
-   Order Actions allow you to add, remove, change quantity or pricing for the subscription based products or services and they also allow you to suspend, resume, renew, or cancel that subscription.

##

Prerequisites

Before starting, ensure you have the following:

1.  **API Access Credentials** : For both your ERP and Zuora Billing in both production and test/dev environments. Zuora’s Developer [Get Started tutorial](https://developer.zuora.com/docs/get-started/introduction/) explains how.
2.  **Access to a Zuora Billing Sandbox** : Use your sandbox for this tutorial. Contact your company's Zuora administrator if you don't already have access. **Do not run these examples in Production.**
3.  **Product Catalog Configuration** : This document assumes pricing is captured in Zuora Billing’s Product Catalog.

##

Orders basics

The following sample payload is one of the simpliest order JSON payloads:

```json
{
  "existingAccountNumber": "A00024529",
  "orderDate": "2025-07-26",
  "orderLineItems": [
    {
      "itemType": "Product",
      "quantity": 5,
      "productRatePlanChargeId": "e51b0c6265f9840d1a485899706d019d"
    }
  ]
}
```

To try this on your own, you'll need the correct URL for your Sandbox, an active billing account in that Sandbox, and the ID of any one-time charge that has either flat-fee or per-unit pricing and is the only charge in the rate plan.

While being a simple order, it still contains the essentials of an order:

-   An order date
-   A billing account
-   A product to bill for, in the above case, 5 items of the product

Since the product rate plan contains all the billing and financial details for the product, they do not have to be included in this order. But you can overwrite the default details and specify quanties and pricing when placing the order.

That simple order generated this response payload:

```json
{
  "success" : true,
  "orderNumber" : "O-00028289",
  "accountNumber" : "A00024529",
  "status" : "Completed",
  "orderLineItems" : [ {
    "itemNumber" : "1",
    "id" : "8ad097d19840e1020198589b67ee0fb9"
  } ]
  }
```

Note that the returned ID is not the one supplied in the Order. A copy of the specified ProductRatePlanCharge object was made, the quantity on the copy was set to 5, and that copy's object ID is the one returned. You will see a lot of this 'copy' behavior with Orders. See the two diagrams below.

The first tutorial, [Create subscriptions](https://developer.zuora.com/docs/get-started/api-tutorials/orders-tutorials/create-subscriptions/), focuses on some examples of creating subscriptions using Orders. The second tutorial gives examples of some of the post creation and [subscription lifecycle](https://developer.zuora.com/docs/get-started/api-tutorials/orders-tutorials/modify-subscriptions/) options. The [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call has links to examples of every order action.

If you're doing data migrations, don't miss the [Create an order asynchronously](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateOrderAsynchronously/) option that allows for 300 subscriptions to be created in a single call.

This diagram attempts to show how product catalog items are invoked in Orders and copies are made specifically for the affected subscription so you can overwrite and capture order specific quantities and pricing:

![Subscriptions in orders explained](/89c5e469fe903c94c58a2c952da346b7/subscription-orders-explained.png)

The same diagram for physical goods orders is similar but slightly simpler as there's no requirement to have a subscription to capture the time based contractural information:

![Order line item explained](/f38f697fc3ce529161542a37448315e1/order-line-items-explained.png)

##

JSON payload construction

**Problem:** The Orders JSON nested structures quickly become complex resulting in syntax errors

**Solution strategy:**

-   Build payloads incrementally, starting with minimal required fields
-   Validate each section before adding complexity
-   Use object/array structure templates for consistency

**Alternative solution:**

-   Don't use JSON payloads! [Use one of our SDKs instead, they're available for Java, node.js, Python and C#](https://developer.zuora.com/docs/guides/libraries/) . The code samples in the other tutorials all include SDK code examples.

Since the `v1/orders` request payload can be tricky to read, understand, and construct. This graphic may help:

![Anatomy of orders payload](/c5c3825287f411d9d456167807103b65/anatomy-of-orders-payload.png)

##

Check your knowledge

-   **API structure comprehension** : What are the three essential components every Orders API call must contain, and why is each component required for successful order processing?
-   **Object relationship analysis** : Explain the difference between Order Line Items and Order Actions, providing a specific use case where you would use each approach.
-   **Data flow understanding** : When an order references a product rate plan charge ID, what happens to the original product catalog item, and what are the implications for pricing modifications?

##

Hands-on exercises

###

Order creation exercise

-   Create a simple Order payload for a new customer purchasing 3 units of a one-time product
-   Submit the order to your sandbox environment
-   Analyze the response and identify all generated object IDs
-   Ensure you understand the relationship between the IDs you provided in the call and the IDs in the response

###

Error handling and validation exercise

-   Intentionally create malformed Orders with: missing required fields, invalid account references, and incorrect data types
-   Document all error responses and categorize by error type
-   Create a troubleshooting guide based on your findings
-   Develop a validation checklist for Order payload construction
