---
title: "Advanced configuration and Data management"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/advanced-configuration-and-data-management"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:14.470Z"
---

# Advanced configuration and Data management

This document details advanced configuration and data management features in the Billing Salesforce CPQ connector, including syncing Invoice and Subscription Owners, and using specific list base pricing for recurring charges.

This section introduces additional functionalities and data structuring options available within the Billing Salesforce CPQ connector. These features include syncing Invoice Owner and Subscription Owner and using specific list base pricing for recurring charges. These enhancements contribute to a more robust data model and streamlined billing processes.

## Sync Invoice Owner and Subscription Owner

Billing Salesforce CPQ connector allows setting Invoice Owner and Subscription Owner on every Order in SFDC. If not existing in Zuora, they will be created during order synchronization.

Create new fields

To enhance the data structure and facilitate a more comprehensive representation of information within the Order object, the following steps guide the creation of two new fields: Invoice Owner and Subscription Owner.

Setting up these fields through Setup is crucial for connecting data with 'Account' and creating a robust data model. To do this,

1.  Go to Setup > Object Manager > Order > Fields & Relationships > New.
2.  Create Invoice Owner Field:
    -   Name: Invoice Owner
    -   API Name: InvoiceOwner\_\_c
    -   Data Type: Lookup
    -   Related To: Account
    -   Create Subscription Owner Field:
    -   Name: Subscription Owner
    -   API Name: SubscriptionOwner\_\_c
    -   Data Type: Lookup
    -   Related To: Account

## Behavioral Changes around Bill To and Sold To Contact

If the order includes specifications for both the Invoice Owner and Subscription Owner, make a note of the following behavioral changes concerning the Bill To and Sold To contact details.

Bill To:

-   The Bill To Contact on the Order must belong to the Invoice Owner, else the connector will error out the sync.
-   The connector checks for the Billing Address if the Order does not contain the Bill To Contact. If present, the connector will create a new contact in the Invoice Owner Account using this Billing Address.
-   If both of the above are empty, the connector will Default the Bill To contact from the Invoice Owner account.

Sold To:

-   The Ship To Contact on the Order must belong to the Subscription Owner, else the connector will error out the sync.
-   If the Order does not contain the Ship-To Contact, the connector checks for the Shipping Address. If present, the connector will create a new contact in the Subscription Owner Account using this Shipping Address.
-   If both of the above are empty, the connector will Default the Sold To contact from the Subscription Owner account.

## Synchronize subscriptions based on Salesforce quoting process

This feature allows you to sync subscriptions in Zuora according to your quoting process in Salesforce. If you are quoting for the entire subscription term in Salesforce, use this setting instead of pricing per billing period.

By configuring the `useListPriceBase` field in the connector setup, you can ensure that the pricing model in Zuora aligns with your subscription quoting strategy in Salesforce, leading to accurate synchronization and billing management.

## Example use cases

Assume you are selling a product with an annual price of $120, billed monthly.

-   Scenario 1: SFDC product billing frequency: Monthly, Subscription term: 12 months, Net Price on the Subscription in SFDC: $120. In this case, you are quoting for the full term and should set `useListPriceBase` to `true`.

-   Scenario 2: SFDC product billing frequency: Monthly, Subscription term: 12 months, Net Price on the Subscription in SFDC: $10. Here, you are quoting for the billing period and should set `useListPriceBase` to `false`.


## Use specific list base price for recurring charges

The specific months list price base feature enables the configuration of recurring charges based on a specific list price for a defined duration. This allows precise control over pricing for subscription-based services.

When the `useListPriceBase` field is set to true, the following rules apply to subscription rate plan charge items in Zuora:

-   List Price Base: Set to "Per Specific Months".
-   Months: Determined by calculating the duration between the start and end dates of the subscription object in Salesforce CPQ.

Note:

The connector supports only full-month subscriptions and cannot handle List Price Base for incomplete months. Ensure that the subscriptions synchronized from Salesforce are configured for the entire month.

## Prices based on custom logic

The connector syncs the Net Price field from the subscription field in Salesforce to the list price field in Zuora by default. The Net Price field in Salesforce is the price for the entire subscription term, post discounts and adjustments, if any.However, if you would like to add a custom pricing logic in Salesforce, for example, to send in prices per billing period instead of the price for the entire term, this can be supported by overriding the default price mapping of the connector.To do this, create a custom field on the subscription object in Salesforce to set the price based on custom logic, if any. You can map this field to a field called Price in the connector mapping configuration on the Subscription flexible field mapping to override the default mapping. If the price on the custom field is empty for any reason, the connector will fall back to using the default pricing field.This support will apply to non-usage-based subscriptions and products only. For subscriptions using consumption schedules, the price will be derived from the consumption schedule object.

## Common use cases of Quote to Order

Using the Contracting Method and Order By fields in the Salesforce Quote:

The Contracting Method and Order By standard fields in Salesforce CPQ can be leveraged when you want to segment the orders based on a certain criterion, like region/BU/legal entity, from a single quote.The connector functions using Order and Subscription objects and does not use the Quote or Contract object. Irrespective of the contracting method or order by behaviour, there will be no impact on the connector.

Ramps:

The connector does not support syncing Multi-Dimensional Quoting (MDQ) based orders to represent ramps. Alternatively, complete the following steps:

1.  While quoting, create quote line groups where each group represents one term of the ramp.
2.  Select \`Contracting Method\` to \`Single Contract\` to ensure all the quote line groups are tied to a single contract in your quote screen.
3.  Set \`Order By Quote Line Group\` on the quote to true.
4.  Save the quote and proceed to create the order.
