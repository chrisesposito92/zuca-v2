---
title: "Orders sync between Salesforce CPQ and Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/orders-sync-between-salesforce-cpq-and-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:02.078Z"
---

# Orders sync between Salesforce CPQ and Zuora

The Connector synchronizes orders from Salesforce CPQ to Zuora Billing, managing products, subscriptions, and contacts while supporting asynchronous order creation and updates.

The Connector facilitates the synchronization of orders from Salesforce CPQ to Zuora Billing. This synchronization process relies on a comprehensive set of objects, including contacts, order products, products, subscriptions, and quotes within Salesforce.

## About Order sync

-   Order Product Types: SFDC CPQ orders can include contracted and non-contracted products. If an order product has a contract or subscription associated with it, Zuora creates a corresponding subscription. Conversely, if the order includes a one-time charge, Zuora generates an Order Line Item.
-   Order Status in Zuora: The status of orders and subscriptions in Zuora is influenced by billing settings. By default, the connector sets only the Contract Effective date. If a Customer Activation Date or Service Acceptance Dates are required for an order to be marked as Completed, the order's status after synchronization will be designated as Pending.
-   Associations: There exists a one-to-one mapping between subscriptions in Salesforce CPQ and subscriptions in Zuora. Additionally, during order synchronization, associated accounts such as Invoice Owner Account and Subscription Owner Account are synced if they are not already present in Zuora.
-   ProductSync: The Product object within the Order Product is also synchronized to the Product Catalog in Zuora if it does not exist there. However, if the Product ID matches any Externally Managed Plan ID fields on the Product Rate Plan object in Zuora, the product catalog sync is skipped.
-   Asynchronous order creation: The connector utilizes asynchronous order API to create orders, enabling the synchronization of large orders without exceeding the order action limits in Zuora.
-   Update operations: The connector supports updates to quantities, prices, invoice owner transfers (if applicable), and their effective dates during order amendments. However, fields such as currency, billing period, and bill cycle type cannot be updated once an order is created in Zuora, and the connector does not support changes to these or other non-updatable attributes.

## Bill to and Sold to contact management

The connector functions in the following manner for contact management.

-   If the Bill To Contact is specified on the order, all subscriptions in Zuora will be billed to this contact. If the contact does not exist in Zuora, the connector will automatically create it.
-   If the Bill To Contact is not provided on the order, the connector will check for the Billing Address. If found, it will create a new contact using this address and assign it as the bill-to contact for all subscriptions.
-   If neither the Bill To Contact nor the Billing Address is provided, the connector will default to the Bill To contact from the account associated with the order.

Similar behavior applies to the Sold To contact; precedence is given to the Sold To contact on the order, followed by the shipping address. If both are absent, the Sold To contact will be defaulted from the account.

Note:

When using the Billing Address and Shipping Address on orders, the connector creates new contacts for each order due to the one-to-one mapping. Consequently, updates to these addresses are not supported because there is no unique identifier for the address in Salesforce. We highly recommend using the Bill To and Ship To contact fields on orders, as this approach supports updates and allows for contact reusability.

## Event Flow for Order Synchronization

The connector follows these steps for order synchronization:

1.  Account Verification: The account is checked using the CRM ID lookup, similar to the process used for accounts.
2.  Product Catalog Verification: The product catalog is checked using a combination of the Product Code in Salesforce and the product ID or product consumption schedule ID

## Support for Usage-Based Orders

The connector provides a streamlined solution for managing usage-based product catalog synchronization. When products in Salesforce (SFDC) include consumption schedules, the integration automatically translates them into usage charge types within Zuora. This seamless process ensures accurate billing representation and simplifies the management of complex pricing structures across platforms.

## Usage Data setup in Salesforce

-   Each product in Salesforce can include multiple product consumption schedules, each mapped to a product rate plan in Zuora.
-   A consumption schedule in Salesforce can be associated with multiple product consumption schedules across different products, resulting in the creation of a new charge in Zuora for each schedule.
-   Every consumption rate within a consumption schedule must share a single currency

## Impact on Product Catalog Synchronization

-   Default Tier Creation: During product catalog synchronization from Salesforce, only one tier is created by default, regardless of the number of consumption rates linked to the consumption schedule. This default behavior is overridden when creating a subscription.
-   Verification of Consumption Schedules: If a new consumption schedule is added to an existing product in SFDC after the initial synchronization, the connector verifies in Zuora whether all product consumption schedules exist. Failure to find all necessary schedules will result in errors.
-   Multicurrency Support: Each product consumption schedule in Salesforce has a single currency, and Zuora maintains a corresponding structure to ensure a one-to-one mapping between product consumption schedules and product rate plans.
-   Linking Product Consumption Schedule to Rate Plan: The connector stores the product consumption schedule ID from Salesforce in the Externally Managed Plan ID field within the Zuora rate plan.

## Order Synchronization Impact

-   Subscription Items: A single order product in Salesforce may have multiple order product consumption schedules, resulting in a subscription in Zuora containing multiple charges, each with tiers based on the order product consumption rates.
-   Order Line Item Support: Order line items in Zuora do not support usage-based charges. If the order in SFDC does not have a subscription, the synchronization process will result in an error.
-   Currency: The currency on all order product consumption schedules and order product consumption rates must be the same and equal to the order currency. Combining different currencies within a single order is not supported.
-   Capping: If the T9 permission for ChargeModifiers is enabled, each tier in Zuora will be capped based on the cap set in the order product consumption rate. A custom field called Cap should be created in Salesforce under the order product consumption rate to set this value.
-   Tier Manipulation: In Salesforce consumption rates, lower bounds are inclusive, and upper bounds are exclusive, while in Zuora, tiers are inclusive on both ends. To accommodate this difference, the connector adjusts the upper bound of each tier in Zuora to match the upper bound of the consumption rate minus one, while directly mapping the lower bounds.
-   Verification of Product Catalog Sync: The connector uses a combination of the product ID and the consumption schedule ID from the Order Product consumption schedule in the Salesforce order to identify the corresponding product consumption schedule. This ID is then verified in Zuora to identify the corresponding rate plan. If the rate plan does not exist, the connector will produce a synchronization error. Refer to the [troubleshooting section](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/error-logging-and-troubleshooting-sfdc-cpq-connector) to resolve these errors.

## Impact of Unit of Measurement (UOM) on Tier Syncing

In Salesforce CPQ, the upper bounds in Consumption Rates are [not inclusive by default](https://help.salesforce.com/s/articleView?language=en_US&id=sf.cpq_usage_product_prices.htm&type=5), unlike Zuora's standard charge tier behavior where both lower and upper bounds are inclusive. The behavior remains the same for both the product catalog and subscription rate plan charge levels in Zuora. Knowing these platform variances is critical for configuring the connector. In order to handle these differences, the connector decreases the upper bound value set in Salesforce by the smallest unit based on the charge's UOM, except for the last tier.

Here's an example with 2 tiers where the UOM is an integer with no decimals:

| Tiers in Salesforce CPQ | Tiers in Zuora | Comments |
| --- | --- | --- |
| 0 - 185 | 0 - 184 | When there are no decimal places in a UOM, the smallest unit is a whole number. The behavior of the connector involves decreasing the upper bound by one unit. |
| 185 - 999 | 185 - 999 | The maximum value of the last tier remains constant. |

When UOMs have no decimal places, the connector decreases the upper bound to synchronize with Salesforce behavior, as the smallest unit is a whole number.

Note:

-   Salesforce does not allow decimal places for consumption schedule rates or Order Item Consumption Rates, while Zuora supports decimal digits in UOMs. To maintain consistency between systems, it's recommended to use UOMs in Zuora with no decimal places.
-   The connector provides a customizable feature Increment Tier Upper Bound for decimal point (optional) if your business needs UOMs with decimal digits. This feature decides if the lower bounds of the tiers should increase instead of decreasing the upper bounds by the smallest possible amount.

Example with UOM precision of 2 digits:

| Tiers in Salesforce CPQ | Tiers in Zuora without the feature enabled | Tiers in Zuora with the feature | Comments |
| --- | --- | --- | --- |
| 0 -185 | 0 - 184.99 | 0 - 185.00 | The UOM's smallest unit is 0.01 with 2 decimal places. |
| 185 - 999 | 185.00 to 999 | 185.01 to 999 | The last tier's upper limit remains unchanged in both scenarios. |
