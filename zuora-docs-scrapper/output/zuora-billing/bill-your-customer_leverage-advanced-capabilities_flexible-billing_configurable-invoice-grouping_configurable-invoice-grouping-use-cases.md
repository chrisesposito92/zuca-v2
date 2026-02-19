---
title: "Configurable Invoice Grouping use cases"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/configurable-invoice-grouping/configurable-invoice-grouping-use-cases"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:38.387Z"
---

# Configurable Invoice Grouping use cases

Explore the use cases for configurable invoice grouping, including separate invoices for recurring, usage, and onetime charges.

## Use Case 1: Separate invoices for recurring and usage charges

Group Rate Plan Charges by `ChargeType` to produce one invoice for recurring and another for usage charges.

-   Invoice Group for Subscription Rate Plan Charge: `RatePlanCharge.ChargeType`

-   Invoice Group for Order Line Item: None

-   Subscription and Rate Plan Charges:

    | Subscription # | Rate Plan Charge | Charge Type |
    | --- | --- | --- |
    | S1 | C1 | Recurring |
    | S1 | C2 | Usage |
    | S2 | C3 | Recurring |
    | S2 | C4 | Usage |

-   Invoices:

    | Invoice # | Account | Currency | Invoice Group Value | Invoice Item | Rate Plan Charge |
    | --- | --- | --- | --- | --- | --- |
    | INV1 | Account 1 | USD | Recurring |  |  |
    |  |  |  |  | II1 | C1 |
    |  |  |  |  | II2 | C3 |
    | INV2 | Account 1 | USD | Usage |  |  |
    |  |  |  |  | II1 | C2 |
    |  |  |  |  | II2 | C4 |


## Use Case 2: Separate invoices for usage vs. recurring/onetime charges

Group by a custom field such as `TransactType` to combine recurring and onetime charges together and separate usage charges.

-   Invoice Group for Subscription Rate Plan Charge: `RatePlanCharge.TransactType`

    Note: `TransactType` is a custom field on Rate Plan Charge.

-   Invoice Group for Order Line Item: None

-   Subscription and Rate Plan Charges:
    | Subscription | Rate Plan Charge | Charge Type | Transact Type |
    | --- | --- | --- | --- |
    | S1 | C1 | Onetime | Non-Transaction |
    | S1 | C2 | Recurring | Non-Transaction |
    | S1 | C3 | Usage | Transaction |
    | S2 | C4 | Onetime | Non-Transaction |
    | S2 | C5 | Recurring | Non-Transaction |
    | S2 | C6 | Usage | Transaction |

-   Invoices:
    | Invoice | Account | Currency | Invoice Group | Invoice Item | Rate Plan Charge |
    | --- | --- | --- | --- | --- | --- |
    | INV1 | Account 1 | USD | Non-Transaction |  |  |
    |  |  |  |  | II1 | C1 |
    |  |  |  |  | II2 | C2 |
    |  |  |  |  | II3 | C4 |
    |  |  |  |  | II4 | C5 |
    | INV2 | Account 1 | USD | Transaction |  |  |
    |  |  |  |  | II1 | C3 |
    |  |  |  |  | II2 | C6 |


## Use Case 3: Separate invoices for usage and recurring/onetime charges/OLI

Use the same grouping field (Example, `TransactType`) across Rate Plan Charges and OLIs to generate unified invoice groups that span both subscriptions and order-level items.

-   Invoice Group for Subscription Rate Plan Charge: `RatePlanCharge.TransactType`

    Note: `TransactType` is a custom field on Rate Plan Charge and Order Line Item.

-   Invoice Group for Order Line Item: `RatePlanCharge.TransactType`

    Note: `TransactType` is a custom field on Rate Plan Charge and Order Line Item.

-   Subscription and Rate Plan Charges:
    | Subscription # | Rate Plan Charge | Charge Type | Transact Type |
    | --- | --- | --- | --- |
    | S1 | C1 | Onetime | Non-Transaction |
    | S1 | C2 | Recurring | Non-Transaction |
    | S1 | C3 | Usage | Transaction |
    | — | OLI1 | N/A | Non-Transaction |
    | S2 | C4 | Onetime | Non-Transaction |
    | S2 | C5 | Recurring | Non-Transaction |
    | S2 | C6 | Usage | Transaction |
    | — | OLI2 | N/A | Non-Transaction |

-   Invoices:
    | Invoice | Account | Currency | Invoice Group | Invoice Item | Rate Plan Charge |
    | --- | --- | --- | --- | --- | --- |
    | INV1 | Account 1 | USD | Non-Transaction |  |  |
    |  |  |  |  | II1 | C1 |
    |  |  |  |  | II2 | C2 |
    |  |  |  |  | II3 | C4 |
    |  |  |  |  | II4 | C5 |
    |  |  |  |  | II5 | OLI1 |
    |  |  |  |  | II6 | OLI2 |
    | INV2 | Account 1 | USD | Transaction |  |  |
    |  |  |  |  | II1 | C3 |
    |  |  |  |  | II2 | C6 |


## Use Case 4: Group Subscriptions and OLIs

This use case explains how to configure Zuora to include subscription rate plan charges and order line items (OLIs) on the same invoice by using Unified Invoicing together with Configurable Invoice Grouping (CIG). It also provides practical scenarios to illustrate how grouping works in real-world billing models.

Many businesses bill customers for a mix of recurring subscriptions and one-time or usage-based charges created through orders. With Zuora, you can consolidate these different charge types into a single invoice when they meet the same grouping criteria. This capability is especially useful for customers who want invoices organized by business dimensions such as region, cost center, or project.

Two features work together to enable this behavior - Unified Invoicing (Consolidation) and Configurable Invoice Grouping (CIG).

Zuora creates invoices by grouping billing document items based on a defined set of grouping attributes. Items are placed on the same invoice only when all applicable grouping attributes match.

These attributes include:

-   `Baseline Attributes`, which always apply and must match, such as Bill To Contact, Payment Terms, Invoice Template, and Currency.

-   `Consolidate Rule`, which must be enabled. Specifically, the billing rule Allow consolidation of subscriptions, order line items, and standalone invoice items into a single invoice must be set to Yes.

-   `Configurable Invoice Grouping`, which is added when Configurable Invoice Grouping is enabled. This value is dynamically generated based on the fields you configure in CIG.


When CIG is enabled, Zuora generates an Invoice Group Value for each billing item. This value determines whether subscription charges and order line items can be grouped together.

To ensure they appear on the same invoice:

-   Field values must align: The fields selected for subscriptions and OLIs must resolve to the same resulting value for the items you want to group.

-   Field names do not have to match: Subscription charges and OLIs can use different field names, as long as the resulting values are equivalent.

-   Field order matters: If you select multiple fields, Zuora concatenates their values in order using an underscore (\_). The order must be consistent across subscriptions and OLIs so that the final Invoice Group Value matches exactly.


## Scenario 1: Grouping by Global Region

A company wants to group all charges—both recurring subscriptions and one-time order charges—by the geographic region of the sale, such as Americas or EMEA.

Configuration: Both subscriptions and order line items include a custom field that stores the region:

-   Subscription: `Region__c`

-   Order Line Item: `Region__c`


Configurable Invoice Grouping is set up to use this field for both object types:

{ "subscriptionGroup": \[ { "objectType": "Subscription", "field": "Region\_\_c" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "Region\_\_c" } \] }

Example outcome for customer Account: Acme Corp has the following:

1.  Subscription A:
    -   Charge: `Cloud Storage Fee` ($100/mo)
    -   Region\_\_c: `Americas`
2.  Order O-123:

    -   Line Item: `Setup Service` ($500)
    -   Region\_\_c: `Americas`

Resulting Invoice Creation:

-   Zuora calculates the Invoice Group Value as `Americas` for both items.
-   Since baseline attributes match and Invoice Group Value matches, both items appear on Invoice INV-001 for a total of $600.

## Scenario 2: Grouping by cost center with different field names

An enterprise customer wants invoices grouped by Cost Center and Project ID, even though subscriptions and order line items use different custom field names to store this information.

Configuration:

-   Subscriptions use `CostCenter__c` and `ProjectID__c`.

-   Order line items use `CC_Code__c` and `Proj_Code__c`.


Both sets of fields are configured in the same order in Configurable Invoice Grouping so that Zuora generates a consistent Invoice Group Value.

{ "subscriptionGroup": \[ { "objectType": "Subscription", "field": "CostCenter\_\_c" }, { "objectType": "Subscription", "field": "ProjectID\_\_c" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "CC\_Code\_\_c" }, { "objectType": "OrderLineItem", "field": "Proj\_Code\_\_c" } \] }

Data setup:

-   Subscription 1:

    -   Charge: `API Access Platinum` ($2,000/mo)

    -   CostCenter\_\_c = `IT`

    -   ProjectID\_\_c = `X99` → Invoice Group Value = `IT_X99`

-   Order Line Item 1:

    -   Name: `Professional Services - Integration` ($5,000)

    -   CC\_Code\_\_c = `IT`

    -   Proj\_Code\_\_c = `X99` → Invoice Group Value = `IT_X99`

-   Order Line Item 2:

    -   Name: `Onsite Training` ($3,000)

    -   CC\_Code\_\_c = `HR`

    -   Proj\_Code\_\_c = `H11` → Invoice Group Value = `HR_H11`


Resulting Invoice Outcome:

-   Invoice INV-002:

    -   Items: Subscription 1 ($2,000) + OLI 1 ($5,000)

    -   Value: IT\_X99

    -   Invoice Total: $7,000

-   Invoice INV-003:

    -   Items: OLI 2 ($3,000)

    -   Value: HR\_H11

    -   Invoice Total: $3,000
