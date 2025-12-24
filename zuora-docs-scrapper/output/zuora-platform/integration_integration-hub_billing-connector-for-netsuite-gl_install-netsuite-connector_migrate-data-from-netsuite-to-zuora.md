---
title: "Migrate data from NetSuite to Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/migrate-data-from-netsuite-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:25:41.211Z"
---

# Migrate data from NetSuite to Zuora

Migrate existing customers and items from NetSuite to Zuora

## Overview

You can migrate existing customers and items from NetSuite to Zuora.

Note:

You must perform this task before running the integration process and synchronizing data between Zuora and NetSuite.

## Migrating existing customers

If you want to link Zuora Accounts to existing NetSuite customers instead of creating new records, you must identify the NetSuite Internal IDs and manually populate those in the Zuora Account as part of a migration effort. If you choose to do this, configure your integration preferences to not sync customer changes to avoid overwriting your existing NetSuite records.

To migrate existing customers:

1.  Find the customer ID in NetSuite. Select Lists > Relationships > Customers.

2.  Record the Internal ID for the customers that you want to migrate.

    ![NS_migrate_customerid.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47d09144-f783-47f7-94d5-536524f1eb0a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3ZDA5MTQ0LWY3ODMtNDdmNy05NGQ1LTUzNjUyNGYxZWIwYSIsImV4cCI6MTc2NjY1MTEzOCwianRpIjoiODk3YTkwZTk4MzMzNDUwYzg1YmY5M2FmMzcxYzQ1ZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.80KKa9xR9Eo5LKyJNPNe74g7Y157KqpeibZaGv0NDVA)

3.  In Zuora, edit an existing customer account, or create a new account.

4.  Enter the NetSuite customer ID in the NetSuite Integration ID field.

5.  Click Save.


## Migrating existing customers

If you want to link Zuora charges to existing NetSuite Items, you must identify the NetSuite Internal ID and Item Types and manually populate that in Zuora as part of the migration.

To migrate existing items:

1.  Find the item ID in NetSuite. Select Lists > Accounting > Items.
2.  Record the Internal ID for the items that you want to migrate.

    ![NS_migrate_customerid.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47d09144-f783-47f7-94d5-536524f1eb0a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3ZDA5MTQ0LWY3ODMtNDdmNy05NGQ1LTUzNjUyNGYxZWIwYSIsImV4cCI6MTc2NjY1MTEzOCwianRpIjoiZTVlZWIwMTEzMDQ4NDkzMDgwOTE1ODYyMDI3M2U0YjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ssCJ4szNIhw7jvhQcF7h6i75zVdgg6zCvDcaiz3KgiM)

3.  In Zuora, select an existing product, or create a new product.

4.  Edit an existing charge, or create a new charge.

5.  Enter the NetSuite item's Internal ID in the NetSuite Integration ID field.

6.  Click Save.
