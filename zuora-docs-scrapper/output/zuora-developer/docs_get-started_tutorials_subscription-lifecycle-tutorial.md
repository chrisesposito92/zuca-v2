---
title: "Manage subscription lifecycle"
url: "https://developer.zuora.com/docs/get-started/tutorials/subscription-lifecycle-tutorial/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:49.077Z"
---

#

Manage subscription lifecycle

##

Overview

###

Purpose of this tutorial

Build a reusable, developer-friendly integration kit to simplify and accelerate implementations of Zuora's Subscription Lifecycle APIs. These are the most common and essential APIs used across Zuora Billing implementations. We name endpoints, we review best practices, provide sequence diagrams and sample Postman Collections and calls, everything you need for your subscription business implementation.

Included:

-   API sequencing guidance including sequence diagrams
-   Integration best practices
-   Postman collections

####

"Subscription lifecycle" with Zuora Billing

The subscription lifecycle is not just about customer acquisition, but about billing your customers throughout your relationship with them, relationships that can last years. Customers will want additional products, change the quantities of their existing products, remove products, swap one product for another, request a temporary suspension, or perhaps even cancellation. Our support for the subscription lifecycle is unparalleled. This tutorial helps you understand how to make effective use of Zuora's APIs for your subscribers subscription lifecycles.

###

Target audience

This accelerator pack is designed for those responsible for integrating Zuora into your customer’s monetization or subscription flow. The primary personas include:

####

Persona 1: Developer or integration engineer

**Role / Title**: Developer or Engineer, may be in customer IT or Engineering organizations.

**Goals**:

-   Implement business defined use cases using Zuora APIs quickly and accurately
-   Connect Zuora to their front-end signup experience or backend systems
-   Reduce hand-coded trial-and-error with pre-built payloads and flows

**Pain Points**:

-   API documentation and tutorials exist but may lack context for the business use cases.
-   Errors such as invalid payloads, missing field logic.
-   Missing end-to-end tested journey from account → subscription → invoice → payment

**Needs**:

-   Working Postman collections with payloads and sequence
-   SDK examples in languages like Python
-   Clear instructions on sequence and error logic
-   API endpoint and field guidance.

####

Persona 2: Architect

**Role / Title**: Architect responsible for project design and orchestration

**Goals**:

-   Understand Zuora implementation best practices
-   Design scalable and repeatable Zuora solutions

**Pain Points**:

-   No reusable blueprints for subscription lifecycle events such as upgrade flows
-   Development of technical design document is time-consuming

**Needs**:

-   Reusable API flows aligned to common subscription change use cases
-   Clear instructions on sequence and error logic
-   API endpoint and field guidance.

###

The problems we are solving

Even though Zuora provides detailed documentation, many struggle with:

-   Understanding the order in which to call Zuora Billing APIs
-   Writing correct and validated payloads
-   Figuring out required vs optional fields
-   Handling common errors such as validation and object mapping
-   Repeating this work from scratch in every project

We aim to eliminate trial-and-error saving hundreds of hours of development per mid-size implementation.

###

The problems we are not solving

The focus of this project is on implementing the subscription lifecycle quickly for our customers regardless of their business. Here we will NOT describe or tackle:

-   [Product catalog structure](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/product-catalog-concepts)
-   [Physical goods purchases using Order Line Items](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-introduction/overview-of-order-line-items)
-   [Ramps, discounting, trials or other free periods](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing)
-   [Mediation or usage](https://docs.zuora.com/en/zuora-platform/extensibility/mediation/mediation-overview)
-   [Payment method choice or payment method effectiveness](https://knowledgecenter.zuora.com/Zuora_Payments/Manage_payment_methods/Payment_Methods_overview)
-   [Collections or Dunning](https://docs.zuora.com/en/accounts-receivable/collections/account-settings/collections-management)
-   [Revenue guidance nor the Zuora Billing to Revenue integration](https://docs.zuora.com/en/zuora-revenue/getting-started/overview-of-zuora-revenue)
-   [Taxes](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/overview-of-zuora-tax)
-   [Zephr personalized experiences](https://docs.zuora.com/en/zephr/integration/integration-methods)
-   [Salesforce or other CRM integrations](https://developer.zuora.com/quickstart-guides/integrate-salesforce-with-zuora-billing/)
-   [ERP integration](https://developer.zuora.com/quickstart-guides/integrate-erp-with-zuora-billing-summarygl/)
-   [Provisioning of your services or fulfillment of your products](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-introduction/manage-order-line-items/details-view-of-fulfillments)
-   [Standalone orders, draft orders, standalone invoicing or dynamic usage](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_accounts%2C_subscriptions%2C_and_non-subscription_transactions/Manage_non-subscription_transactions/Standalone_Orders/Standalone_Orders_overview)
-   [Payment or invoice schedules](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule)

These are all worthy topics, each deserving their own tutorial, but not in this tutorial. Here we're focused on subscription lifecycle management.

##

Prerequisites

-   Familiarity with the Zuora product catalog and the difference between [products and rate plans](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/product-catalog-concepts) in Zuora.
-   Familiarity with the [Zuora business model basics](https://developer.zuora.com/v1-api-reference/object-model/) .
-   Familiar with the [Billing FAQ](https://developer.zuora.com/faq/billing-faq/) and the [Payments FAQ](https://developer.zuora.com/faq/payments-faq/) .
-   Completed the [Get Started tutorial](https://developer.zuora.com/docs/get-started/introduction/) and the [Basics tutorial](https://developer.zuora.com/docs/get-started/basics/) , and you have a suitable sandbox tenant and the related OAuth client ID and secret. You have also [downloaded the "Basics" Postman collection](https://developer.zuora.com/docs/get-started/basics/#prerequisites) and have the four calls in that collection running in your Postman against your sandbox.
-   You have reviewed our [API rate limits](https://developer.zuora.com/docs/guides/rate-limits/) .
-   You have reviewed our [subscription](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscription-limits) and [order limits](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-limitations-and-performance/orders-performance-guidance) .

##

Subscription lifecycle API basics

###

Major steps in any subscription lifecycle

This section includes examples of each of the major endpoints commonly used in the subscription lifecycle.

We provide three sequence diagrams for the following scenarios, and their corresponding Postman collections for you to download and run in Postman:

-   New customer acquisition
-   Subscription lifecycle updates for upsells, down-sells, and add-ons
-   Subscription lifecycle updates for renewals, cancellations, suspensions, and resumptions

We also provide a collection to create a recurring per-unit product that you can use in other collections, but we recommend that you use your own products.

####

New customer acquisition basics

![Typical Order Flow](/4df8005c429c7657dfeb13faf7ca9572/typical-order-flow.png)

Here is that same generalized order flow as a simplified sequence diagram:

[New customer acquisition sequence diagram](/88c0a49d8fe4f4d2d1c7e3cf2755bb48/new-customer-acquisition-flow.svg)

[New customer acquisition sequence diagram source](/ed5bf12fe9a93977cd963f6884933957/new-customer-acquisition-flow.txt). The sequence diagrams were created using [SequenceDiagram.org](https://sequencediagram.org/). We've included the source text files so you can customize them for your use cases.

[New customer acquisition Postman collection](/049b05fcae7ebfc8d75d560a10431479/new-customer-flow-postman_collection.json)

####

Subscription lifecycle basics

Here's what a typical flow is for an **existing customer** making changes to any of the rate plans in their subscription, for example an add-on, upsell, swap or removal:

[Post-acquisition order (rate plan changes) sequence diagram](/57503c83f14adbce9374c1e32d9ac019/post-acquisition-order-flow-rateplan-changes.svg)

[Post-acquisition order (rate plan changes) sequence diagram source](/b441d5a9360ae510622dd400406449ee/post-acquisition-order-flow-rateplan-changes.txt)

[Post-acquisition order (rate plan changes) Postman collection](/e4ca2d355d928f489751c18f855d7aeb/post-acquisition-rateplan-changes-postman_collection.json)

Basic flow for subscription level changes such as renewal, suspension, resumption or cancellation:

[Post-acquisition subscription changes order flow sequence diagram](/1af125997028ad060aae212585da1472/post-acquisition-order-flow-subscription-changes.svg)

[Post-acquisition subscription changes order flow sequence diagram source](/b96babba37bac36a2d58025febda8e90/post-acquisition-order-flow-subscription-changes.txt)

[Post-acquisition order flow (subscription changes) Postman collection](/ef91d93422e64f050ffec162dd6183de/post-acquisition-subscription-level-changes-postman_collection.json)

This last Postman Collection creates a recurring charge and rate plan in case your tenant has nothing suitable for you to use. You should use the preceding collections with some products and charges specific to your business. However, if you have nothing, you can use the following Postman collection:

[Simple recurring charge Postman collection](/10277a36225cce5de35ba7bdcef5bac1/zuora-catalog-create-PRPC-postman_collection.json)

###

Importance of "Create an order" call in the subscription lifecycle

Some Zuora endpoints offer overlapping features, which causes confusion. One such area is subscription creation. Zuora offers "Create an account" (`/v1/accounts`), Sign up (`/v1/sign-up`), "Create a subscription" (`/v1/subscription`) and "Create an order" (`v1/orders`) endpoints, and all can create subscriptions. We strongly recommend the most powerful of these, `POST /v1/orders`.

Only the `POST /v1/orders` call:

-   Provides options for managing the entire subscription lifecycle from creation through to cancellation using different order actions.
-   Allows the creation or modifying of multiple subscriptions in a single order.
-   Allows a single order to combine both recurring subscription digital goods or services with order line items for physical goods.
-   Are always treated as atomic transactions, if any part of the order process fails the entire order, subscription and billing account creation are rolled back cleanly.

`POST /v1/orders` also supports:

-   Combinging multiple actions into a single order, so renew and change the quantity in a single order.
-   Future dating any order action, capture the order today, Zuora automatically remembers to trigger the order action on the specified future date.
-   Back dating order actions, which is useful in migrations from other billing systems.
-   Optionally invoice and attempt payment collection at order creation time. These are also atomic, should either step fail the entire order is rolled back.

We will discuss alternatives, but our first recommendation is usually `POST /v1/orders`.

###

Payment method collection and the subscription lifecycle

To aid clarity, the above sequence diagrams have simplified the payment method collection process, for example, "I want to pay for my subscription using credit card, ACH, Direct Debit, or check". While each sequence clearly marks where payment collection can often occur, your particular needs may require payment method collection be done at a different time. This is a highly variable step of the customer acquisition and lifecycle flow, and you should modify the sequence to suit your exact needs. You may even need different flows for different payment method types.

Many older Zuora implementations use our Payment Pages feature to display a credit card or bank details but now have additional options, all options are PCI-compliant and secure:

-   If your use case is streamlining multiple payment options, Cards, eCheck/ACH, Apple and Google Pay, into a single and cohesive form, the [Payment Form](https://knowledgecenter.zuora.com/Zuora_Payments/Process_payments/Payment_Forms_and_Payment_Links/Payment_Form/A_Payment_Form_overview) is the recommended choice. Presents payment methods dynamically, minimizes required code and complexity compared to Payment Pages but has limited, but growing, Payment Gateway support. Consult the Overview page for supported options and limitations. Our documentation includes [a sequence diagram for implementation.](https://knowledgecenter.zuora.com/Zuora_Payments/Process_payments/Payment_Forms_and_Payment_Links/Payment_Form/D_Integrate_a_payment_form_with_your_website)
-   Use [Payment Pages 2.0](https://docs.zuora.com/en/zuora-payments/process-payments/integrate-payment-pages-2.0) for when you need total control over the look and feel, optionally includes a **Direct Post** option where you create the capture form. Does not support Apple Pay or Google Pay. Sequence diagram included on the linked page.
-   If your use case is collecting payment for a single, specific invoice via email or text message, and minimal setup is desired: [Payment Link](https://knowledgecenter.zuora.com/Zuora_Payments/Process_payments/Payment_Forms_and_Payment_Links/Payment_Link/A_Overview_of_Zuora_Payment_Link) is the best choice. This solution is template-based and requires no coding. It lacks support for debit memos and each link is for only one invoice. Payment Link is quickest to implement, but normally will augment use of either Payment Forms or Payment Pages, not replace them. Payment methods are not stored unless cardholders give their consent.

These options are not mutually exclusive, many implementations will combine Payment Links with either Payment Forms or Payment Pages. All options will automatically create a payment method object when successful, the payment method object ID is returned to you and can be used in later calls. A billing account can have multiple payment methods on file and one can be designated the default and used automatically during payment runs or later payment requests.

These options will use Zuora's PCI-compliant secure credit card vault to store and manage the card details. Some of our gateway integrations also support tokenization or credit card reference tokens where the payment gateway vault is used with a token issued. The tokens can then be stored in Zuora using a Payment Method object. The specifics vary by gateway and so are not covered in detail here.

Zuora also supports a collection of traditional payment method types such as Check and Wire Transfer. Consult with your Finance team on the variety of options they wish to utilize and ensure they are enabled in your tenant. Note that you cannot specify one of these traditional options as the default payment method in an order. You must update the billing account later.

##

Common subscription lifecycle errors and anti-patterns

-   Single most frequent error reported by developers is an authentication error. You must review and complete the [Get Started](https://developer.zuora.com/docs/get-started/introduction/) and [Basics](https://developer.zuora.com/docs/get-started/basics/) tutorials. These include written instructions as well as videos on how to obtain a valid OAuth client id, secret and token. You likely have the right client ID and secret, often you're using the wrong REST end point and are trying to access a tenant other than the one you intended. The result is an authentication error.
-   We see many `Malformed request/invalid format` error due to localized dates, missing required fields, or typos in expected enum values. Normalize date strings to ISO 8601 ( `YYYY‑MM‑DD` ), verify presence of key order fields such as contract/service/acceptance dates where applicable, and preflight with a lightweight preview using the code samples provided here.
-   Using SOAP, or sticking with SOAP. It's time to move to REST. It's been nearly 10 years since new features were only added to the REST APIs. Zuora is all about backward compatability, but it's very unlikely that your business is the same as it was a year ago, let alone ten years. You need to refactor and move to REST so you can stay current with your business needs using out-of-the-box features such as the newer charge models.
-   Implement client‑side exponential backoff, ideally with jitter, rate limit or lock contention errors. Respect `ratelimit-remaining` and smooth out bursts during month‑end or batch processing. This pattern alone resolves most repeated “spike” incidents. Zuora returns [rate limit related response headers](https://developer.zuora.com/docs/guides/rate-limits/#rate-limits-in-headers) , so use that knowledge, you will know when you are running out of allowed requests in your tenant's rate limits.
-   Make sure you understand how our [idempotency](https://developer.zuora.com/docs/guides/idempotent-requests/) works and how our [asynchronous requests](https://developer.zuora.com/docs/guides/async-requests/) work.
-   Creating a billing account and then in the next call creating a subscription. Take advantage of the 'combo' support where both billing account and subscription can be created in a single call. This saves you from having to manage multi-step purchase flow states.
-   Creating a subscription and in the next call changing the price or quantity on a rate plan in your new subscription. When adding a product rate plan to a subscription, regardless if it's a new or existing subscription, you can always change the quantity or pricing.
-   Failing to use either the `processingOptions` the `billingOptions` flags. We architected this system to enable you to immediately collect, not just invoice, but collect cash, when ANY order is placed. Not just orders for new customers, but for existing customers also.
-   Failing to adopt [flexible billing attributes](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/overview-of-flexible-billing) . Each subscription on an account can now have a different currency, contacts, payment terms, invoice format, and communication profile.
-   Not using [billing schedules](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule) or payment schedules to manage non-standard timing of invoices.
-   Not utilizing cancellation options, instead an immediately cancellation is recorded, this then results in a credit memo for the unused prepaid portion of the billing period. The credit memo must then be separately written off. A cancellation order can specify cancellation to take effect on the next billing day or at the end of the current term ensuring no over billing or credit memos occur.
-   Using the wrong query feature for your use case. Use Object Query for synchronous but small response payloads. Use either Data Query or Data Source for large response payloads. [Pros and Cons of each feature including a decision tree](https://developer.zuora.com/docs/guides/query-guide/) is on our Developer Center.

##

Subscription lifecycle deep dive

| Subscription lifecycle step | Recommended API endpoint | Notes |
| --- | --- | --- |
| Display product offerings and pricing | GET v1/catalog/products or GET v1/catalog/products/{product-key} | GET /object-query/products, GET /object-query/productrateplans, or GET /object-query/productrateplancharges is an alternative that can provide more granular and focused response payloads. Unless pricing changes frequently, you should consider caching pricing locally to avoid making any of these calls every time a prospect lands on your site. You must always have a product rate plan ID to place an order preview or order and you must also have the product rate plan charge ID of any charge you want to override the quantity or pricing of. |
| Quote or preview | POST /v1/orders/preview | This call allows you to retrieve accurate billing information, including proration and taxes, without actually creating the order, the subscription or billing account. The results are usually presented to the prospect or customer in a 'Confirm purchase?' step in your customer's onboarding and purchase flow. Remember you can optionally over-ride the pricing and quantities on any product catalog item when adding that item to a subscription, see 'chargeOverrides' clause under subscribeToRatePlans in both order preview and order calls. |
| Capture a payment method | For Credit Cards, Direct Debit, ACH, Google Pay, or Apple Pay, use our Payment Forms feature. Do not try to capture credit card data yourself. | Payment Pages 2.0 is designed for more granular implementations but the implementation cost is higher. Payment Forms is much simpler and faster to implement. Do not use POST v1/payment-methods to capture credit card or bank account information. |
| Create a billing account | POST v1/accounts | This should only be used when you must create the billing account ahead of creating the first subscription. The preferred POST v1/orders call can create both the billing account and the subscription in a single call and is recommended unless there are use case complications requiring a billing account be created ahead of subscription creation. Also POST v1/accounts can create multiple subscriptions in a single call. We do not recommend using POST v1/sign-up at this time. |
| Create a subscription | POST /v1/orders with CreateSubscription order action | Can optionally create the billing account as well as a subscription in a single call. POST v1/subscriptions can be used to create a subscription for an existing billing account but we recommend the superior POST v1/orders call. While this call supports creating a billing account and a subscription in a single call, that is optional, you can create a subscription for an existing billing account just as easily. We do not recommend using POST v1/sign-up at this time. |
| Provisioning and fulfillment | Your service should manage provisioning and fulfillment of purchased product and features throughout the subscription lifecycle. | Your systems should continue to manage provisioning and fulfillment of purchased products or services outside of Zuora. |
| Change quantity or pricing for rate plans on an existing subscription | POST /v1/orders with UpdateProduct order action | Changing the price in the product catalog only changes prices for new purchases and add-ons, when added to a subscription the charge details are copied, not referenced, to the subscription. So a mandated price increase across your subscriber base requires updating the subscriptions using the old pricing. More details on the specifics of this to come. |
| Add a new product to an existing subscription | POST /v1/orders with AddProduct order action | PUT v1/subscriptions/{subscription-key} is an older alternative that also supports this use case. |
| Exchange one product or rate plan for another on an existing subscription | POST /v1/orders with ChangePlan order action | PUT v1/subscriptions/{subscription-key} also supports this use case, for new development we recommend the orders call. |
| Remove a product or rate plan from an existing subscription | POST /v1/orders with RemoveProduct order action | PUT v1/subscriptions/{subscription-key} also supports this use case, for new development we recommend the orders call. |
| Renew a subscription | POST /v1/orders with Renewal order action | PUT v1/subscriptions/{subscription-key}/renew also supports this use case but you can only renew a single subscription per call. With v1/orders you can renew multiple subscriptions on the same billing account in a single call. |
| Suspend a subscription | POST /v1/orders with Suspend order action | PUT v1/subscriptions/{subscription-key}/suspend also supports this use case but you can only suspend a single subscription per call. With v1/orders you can suspend multiple subscriptions on the same billing account in a single call. |
| Resume a suspended subscription | POST /v1/orders with Resume order action | PUT v1/subscriptions/{subscription-key}/resume also supports this use case but you can only resume a single subscription per call. With POST v1/orders you can resume multiple subscriptions on the same billing account in a single call. |
| Cancel a subscription | POST /v1/orders with CancelSubscription order action | PUT v1/subscriptions/{subscription-key}/cancel also supports this use case but you can only cancel a single subscription per call. With POST v1/orders you can cancel multiple subscriptions on the same billing account in a single call. Orders-Cancel also supports writing off unpaid invoices or refunding automatically. |
| Fetch billing account and subscription data | GET v1/subscriptions/accounts/{account-key} | For more granular control over the response payload consider GET /object-query/accounts or GET /object-query/subscriptions. While GET v1/accounts/{account-key} is in common usage, the recommended call provides complete rate plan charge detail needed for some update scenarios. For invoice details you can use GET v1/accounts/{account-key}/summary |
| Fetch invoice and other billing document data | GET /object-query/invoicesGET /object-query/credit-memosGET /object-query/debit-memosGET /object-query/paymentsGET /object-query/refunds | We have a tutorial with examples on how to use Object Query's powerful, flexible, synchronous query capability.. But each document type also has their own endpoint:GET v1/invoices/{invoiceKey}GET v1/credit-memos/{creditMemoKey}GET v1/debit-memos/{debitMemoKey} |
| Fetch PDF files | GET v1/invoices/{invoiceKey}/filesGET v1/credit-memos/{creditMemoKey}/filesGET v1/debit-memos/{debitMemoKey}/files |  |

##

Zuora core object reference

This document lists the required fields and commonly referenced optional fields for three core Zuora objects: **Account**, **Subscription**, and **Order**.

* * *

###

Account

Only use `POST v1/accounts` if you have to create the billing account ahead of subscription creation.

| Field | Required? | Type | Purpose |
| --- | --- | --- | --- |
| accountNumber | No | string | Custom account number; autogenerated if omitted. |
| name | Yes | string | Typically company name or customer name. |
| currency | Yes | string | Default currency for all charges, you optionally create subscriptions with a different default currency. |
| billToContact | Yes | object | Bill-to contact details for the account. |
| billCycleDay | Conditionally | integer | Required if no subscription is created in the same call; determines billing cycle day. |
| autoPay | No | boolean | Enables automatic payment collection, default is False. |
| paymentMethod | Conditionally | object | Required if autoPay=true (or use hpmCreditCardPaymentMethodId). |
| hpmCreditCardPaymentMethodId | Conditionally | string | This Id is returned by Payment Pages or Payment Forms card capture processes. |
| paymentTerm | No | string | Payment terms for invoices (e.g., Net 30), set the default value in your tenant's 'Billing Settings' administration page. |
| batch | No | string | Assigns the account to a billing batch, default is 'Batch1'. |
| taxInfo | No | object | Can optionally be used to define tax exempt status or VAT Id. |
| communicationProfileId / profileNumber | No | string | Link to a communication profile for notifications, your administrator can specify the default. |
| runBilling / collect | No | boolean | Generate invoice and optionally collect payment during creation, default is false. |
| soldToContact / shipToContact | No | object | Optional sold-to and ship-to contact details, there are boolean flags for soldToSameAsBillTo and shipToSameAsBillTo. |

* * *

###

Subscription

| Field | Required? | Type | Purpose |
| --- | --- | --- | --- |
| accountKey | Yes | string | Account number or ID that owns the subscription. |
| subscriptionNumber | No | string | Custom subscription number; autogenerated if omitted. |
| status | Yes | string | Automatically set by system, beware poor terminology. An 'Active' subscription is the most recent version of the subscription with the most up to date charge values and most reporting should only report on subscription objects that have a status of 'Active'. 'Expired' status does not mean the subscription has expired, it means this is an older version of the 'Active' subscription and should be ignored unless you are interested in understanding subscription history. |
| version | Yes | string | Maintained by system, not user settable. As order actions change subscriptions, e.g. add, remove or replace rate plans, a copy of the subscription is created and the version number on the new copy incremented. |
| contractEffectiveDate | Yes | date | Contract effective trigger date, almost always the effective start date of billing for the subscription. Support for additional trigger dates is provided, see below. All trigger dates are dates and NOT timestamps. |
| termType | Conditionally | string | TERMED or EVERGREEN; determines term behavior. |
| initialTerm | Conditionally | integer | Required if termType=TERMED; defines initial term length. |
| initialTermPeriodType | Conditionally | string | Period unit for the initial term (Month, Year, etc.). |
| autoRenew | Conditionally | boolean | Required when termType=TERMED; controls renewal, default is false. |
| renewalSetting | Often | string | Renewal behavior (RENEW_WITH_SPECIFIC_TERM or RENEW_TO_EVERGREEN). |
| renewalTerm | Often | integer | Renewal term length. |
| renewalTermPeriodType | Often | string | Period unit for the renewal term. |
| customerAcceptanceDate / serviceActivationDate | No | date | Additional trigger dates, may be required based on tenant configuration. Permits you to define staggered billing starts for different charges in the same rate plan or subscription. Charges also support simply specifying the date you want them to start billing as a charge override. |
| invoiceSeparately | No | boolean | Bill this subscription on its own invoice. |
| subscriptionStartDate / termStartDate | Yes | date | Managed by system, term start moves forward the renewal term length each time the subscription renews. End dates are also tracked automatically by system for termed subscriptions. Evergreen subscriptions have no end dates. |

* * *

###

Order

Creating an order involves many of the fields listed in the previous two tables, here the focus is only on fields unique to orders.

| Field | Required? | Type | Purpose |
| --- | --- | --- | --- |
| orderDate | Yes | date | Signing date; default contract effective date for order actions if not set. |
| orderNumber | No | string | Custom order number; autogenerated if omitted. |
| subscriptions[].orderActions[] | Yes | array | Contains at least one action (e.g., CreateSubscription, AddProduct, etc.). |
| existingAccountId / existingAccountNumber or newAccount | Required (one of) | string / object | Specifies the account to use or to create for the order. |
| processingOptions | No | object | Options for billing and payment behavior (runBilling, collectPayment). |
| orderLineItems | No | array | Non-subscription line items typically used for physical goods. |
| schedulingOptions | No | object | Schedule the order for future execution. |

* * *

###

Notes

-   "Conditionally required" means the field must be included only if certain flags or configurations are present (for example, `autoPay=true` , `termType=TERMED` ).
-   Dates follow the ISO-8601 format ( `YYYY-MM-DD` ).
-   Most ID fields accept either UUID IDs or human-readable strings, for example, A00001234, depending on context.
-   All Zuora objects have system maintained `createddate` and `updateddate` that are actually datetimes.
