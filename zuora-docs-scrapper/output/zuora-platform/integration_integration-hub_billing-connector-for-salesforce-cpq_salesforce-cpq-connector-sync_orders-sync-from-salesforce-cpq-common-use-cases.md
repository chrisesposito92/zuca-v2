---
title: "Orders sync from Salesforce CPQ: Common Use Cases"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/orders-sync-from-salesforce-cpq-common-use-cases"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:16.587Z"
---

# Orders sync from Salesforce CPQ: Common Use Cases

This document outlines common use cases for syncing orders from Salesforce CPQ to Zuora, including new orders, cancellations, quantity updates, renewals, and price adjustments.

The following outlines common use cases for syncing orders from Salesforce CPQ. However, these scenarios are not limited to the ones mentioned below.

## New Order

-   When synchronizing a fresh order, you can include multiple order products.
-   The Flexible Billing Attribute in Zuora enables the syncing of additional features like Invoice Owner, Subscription Owner, Bill to Contact, and Ship to Contact. Refer to [Advanced Configuration and Data Management](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/advanced-configuration-and-data-management) to setup these fields in your salesforce account.
-   If multicurrency is enabled in Zuora, the connector will set the currency on the orders in your Zuora order, else it would be defaulted from the Zuora Account.
-   The connector enables synchronization of new assets, including one-time hardware-based products. These assets will be generated as line items in the same order in Zuora.
-   The connector also syncs new assets, which are one-time hardware products created as order line items in the same Zuora order.

Figure 1. New order

![neworder](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7c2bab2e-efc4-4bb7-bf17-812ac032e842?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdjMmJhYjJlLWVmYzQtNGJiNy1iZjE3LTgxMmFjMDMyZTg0MiIsImV4cCI6MTc2NjY1MTIzNSwianRpIjoiM2ZhNGM1OTFhNGEzNDMwOWIxZDQ2OTY3NDczMzJhZjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nqvO4-pM52P7pWy6hLP01BLNK5EbMJxCdDyHYvlEBtw)

## Cancel Subscriptions

-   When the amendment quote line editor quantity is set to 0, the associated Salesforce order product is marked as Cancel.
-   The Zuora subscription is marked as canceled with a cancellation date, and the trigger dates are set to the amended order's effective date from Salesforce.

Figure 2. Cancel subscription

![cancelsubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/115c69c7-e4aa-47ea-ab3b-0da6bf0e564b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjExNWM2OWM3LWU0YWEtNDdlYS1hYjNiLTBkYTZiZjBlNTY0YiIsImV4cCI6MTc2NjY1MTIzNSwianRpIjoiZTE1YTBhM2JmNDU1NDJlNzlhMWViZjU4ODhiMmI0MTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.AsiH-fx_aFRxz_o0YAIf5CbZkkvzyPtcyfw-ZFC9BYw)

## Quantity Update

When the quantity is altered on the amendment quote line editor (excluding a change to 0) with no price adjustment, the subscription in Zuora is updated to reflect the new quantity.

Figure 3. Quantity update

![quantityupdate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0596c596-325d-4721-ba23-c6f498eb6159?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA1OTZjNTk2LTMyNWQtNDcyMS1iYTIzLWM2ZjQ5OGViNjE1OSIsImV4cCI6MTc2NjY1MTIzNSwianRpIjoiNTFlZmY2OGEwOWVlNDU3NGIyOWJkMzljMDg2MTk3NzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JG10ksihi167HwTJNH6HwnqT3LRmZpvWBYwn6YlQzdo)

## Renewal

-   When the renewal order is synced in Salesforce, it triggers the subscription renewal in Zuora. The subscription start and end dates in Salesforce determine the renewal term.
-   Support for renewal price lifts can be achieved by directly updating the price against the corresponding quote line.
-   The connector enables contract renewal for asset-based products. The renewed assets will appear as New order line items in Zuora.
-   The connector enables the renewal of contracts with asset-based products, generating New order line items in Zuora.

Figure 4. Renewal

![renewal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d03e5369-54c2-4b13-a2e8-33386b2ddc8b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQwM2U1MzY5LTU0YzItNGIxMy1hMmU4LTMzMzg2YjJkZGM4YiIsImV4cCI6MTc2NjY1MTIzNSwianRpIjoiMWRmNjc1NTRhODAxNGM2ODk0ZmVjN2JhYzEzNWIyOGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.medeRznwRpaKknONOdRl4HZxrn-11IlhBT0iE3QMVtE)

## Adding a new product

When a new product is added during an amendment, it generates a new subscription in Salesforce that is automatically synced as a new subscription in Zuora.

## Price updates

-   Salesforce does not support price updates on the existing quote line; instead, it uses the debook and rebook approach. This involves adjusting the quantity of the quote line with the old price to 0 and generating a new quote line with the updated price. Essentially, this process combines a "cancel + new" action, resulting in the creation of a cancellation order product and a new order product in Salesforce.
-   The connector replicates the Salesforce behavior by applying the same logic of canceling and creating a new subscription

## Invoice Owner Transfer

-   The connector can transfer the invoice owner account when amending or renewing orders. On the order object, you can update the account in your custom field for invoice owner. If the account is not present in Zuora, the connector will instantly sync it and exclude the orders from being transferred to the new invoice owner account.
-   The connector will check if the bill-to-contact is present on the order in the invoice owner account. In the absence of a bill-to-contact, the invoice owner's account will generate it.

## Amendments and Renewal Guidelines

Salesforce and Zuora have different approaches to managing amendments and renewals. The connector adheres to Zuora's best practices for streamlined downstream processes. Refer to [Salesforce CPQ Amend Contracts](https://help.salesforce.com/s/articleView?id=sf.cpq_amend_contracts.htm&type=5) for guidance on creating amendments in Salesforce.

For successful syncing of amendments, adhere to the following guidelines:

-   Ensure that the original order in Salesforce CPQ is synced to Zuora before trying to sync the amendment order. For instance, check Salesforce CPQ original order with subscription S-000001 and Order Product ID = XXXX0001 has been synced, before syncing amendment order.
-   When syncing the amendment order, ensure that each order product contains the Revised Order Product that points to the original order product, in this case, XXXX0001.
-   If the subscription in Zuora has been manually altered at any point, ensure that the Externally Managed Plan ID in the original subscription rate plan in Zuora still contains the Revised Order Product ID that is on the amendment order product. That is, subscription S–000001 in Zuora must have an Externally Managed Plan ID set as XXXX0001 on the rate plan. This linking is crucial for the connector to identify the original subscription in Zuora before making amendments to it.
