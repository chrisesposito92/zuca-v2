---
title: "Accounts sync between Salesforce CPQ and Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/accounts-sync-between-salesforce-cpq-and-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:59.273Z"
---

# Accounts sync between Salesforce CPQ and Zuora

The synchronization process between Salesforce CPQ and Zuora ensures that account information, including billing and shipping addresses, is accurately reflected in both systems. The connector facilitates updates to accounts and associated contacts, supports customer account hierarchies, and manages order synchronization.

The account in Salesforce CPQ is linked to the Account object in Zuora. The connector synchronizes the Billing Address and Shipping Address from the account to the Contact object in Zuora under Accounts, along with any additional contacts associated with the account.

## About Account Sync

-   Billing Address Requirement: The Salesforce account must have a Billing Address for successful synchronization. Shipping Address is optional.
-   Address Details: The Billing Address in Salesforce must include country and state; additional details like city and postal/ZIP code are supported for tax compliance in Zuora.
-   Update Operations: The account sync feature facilitates updating the corresponding account in Zuora. Additionally, it supports updating the relevant contacts associated with orders or those designated as bill-to/sold-to contacts on the accounts.
-   Associated Data Sync: All orders linked to the account are synchronized during the account sync.
-   CRM ID Field: The CRM ID field in Zuora's account stores the SFDC account ID, preventing the creation of a new account during resynchronization.
-   Support for customer account hierarchy: The connector enables rolling up of accounts into parent accounts. The Parent Account ID field in Salesforce corresponds to Parent accounts in Zuora. If the parent account is not found in Zuora, the connector will create it.

## Event Flow for Account Synchronization

The connector follows these steps to synchronize data between Salesforce CPQ and Zuora:

1.  Account Check: The connector checks Zuora for an existing account using the CRM ID field.
    -   If an account in Zuora has a CRM ID that matches the Salesforce account ID, the connector updates the account in Zuora.
    -   If no matching account is found, the connector creates a new account in Zuora with the associated Bill To/Sold To contact information.
2.  Order Synchronization:
    -   The connector syncs new orders only for existing accounts in Zuora.
    -   If the account does not exist, the connector will sync all orders associated with that account after creating it in Zuora.

Figure 1. Account sync

![Account sync](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7189b078-8b5a-440c-b4e0-532314cb3daa?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxODliMDc4LThiNWEtNDQwYy1iNGUwLTUzMjMxNGNiM2RhYSIsImV4cCI6MTc2NjY1MTIxNywianRpIjoiYWQwMmRkNWQyZjZlNDk0YjlhODg3ZmE5NjkwNGQxYWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MfIENxpCrzLyqdJTU1hzzktezt9pDxKUqKfSMwXbZVY)
