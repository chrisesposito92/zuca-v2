---
title: "Customer account sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences/customer-account-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:25:32.774Z"
---

# Customer account sync

Learn about customer account sync, product catalog sync, and transaction sync

## Customer account sync

Use these settings to configure how customer accounts are synced between Zuora and NetSuite.

![CustomerAccountSync.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e61d61b6-719d-4e65-b093-43d6ef21db17?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2MWQ2MWI2LTcxOWQtNGU2NS1iMDkzLTQzZDZlZjIxZGIxNyIsImV4cCI6MTc2NjY1MTEzMSwianRpIjoiOTc5MjZkMjg0NTVmNDNkZWFmMTJhMTdmNjM5YjRlNjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gsMZYuYiLfnFfDF4oe0Blp_fbyofU-2lEHn2s0JoPsQ) ![CustomerAccountSync.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e61d61b6-719d-4e65-b093-43d6ef21db17?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2MWQ2MWI2LTcxOWQtNGU2NS1iMDkzLTQzZDZlZjIxZGIxNyIsImV4cCI6MTc2NjY1MTEzMSwianRpIjoiY2IxODE4ODBjYmRmNDA2Nzg2NGMzMDJmNjM4MzUyOGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iJLylPDnKm5OjYu95zlo-r59luqeh3L7mP7Y6LDGTlc)

## Customer account master

Select the application that is the Customer Master, which is where the account will be managed. Only Customer Accounts created or modified in the master application will be synced to the "destination" application.

## Customer account sync behavior

Select whether you want to sync all new and modified records from the Customer Account master application ( Sync New and Modified Records ), overwriting any existing values in the other application, or if you only want to sync new records ( Sync New Records Only ). If you select `Sync New Records Only` , no subsequent changes will be synced once a record has been created.

## Customer account number mapping

Specify how to map Customer Account numbers.

-   Use Number From Source Record: Use the Customer Account Number/Customer ID from the source application.

-   Use Name From Source Record: Use the Customer Account Name from the source application.

-   Let Destination Auto-Number: The destination application will determine the next sequential Customer Account Number/Customer ID.


Note:

If Zuora is the Customer Master and you choose to use a value from the source record, if Auto-Generated Numbers are enabled for customers in NetSuite, you must also enable Allow Override in NetSuite. Additionally, if you want to sync both new and modified records, you must enable Update in NetSuite. In NetSuite, navigate to Setup > Company > Auto-Generated Numbers.

## Customer account number update behavior

If you selected Sync New and Modified Records, you can select whether the sync should also update the Customer Account number field.

Note:

If Zuora is the customer master and you have enabled Auto-Generated Numbers in NetSuite, but do not permit updates, you must select Do Not Allow Updates in NetSuite. In NetSuite, navigate to Setup > Company > Auto-Generated Numbers.

Zuora Connector for NetSuite will allow updates by default.

## De-concatenate account number

If you selected "Yes", the connector will take the value of the Customer Id field from Netsuite up until the first space (" ") and use that value to populate the Zuora Account Number field.

This will only occur when the Zuora account does not have any transactions. For example, Zuora does not allow an account number to be changed when the account contains transactions, the connector checks the Zuora accounts for a Last Invoiced date and will not update an account number if a Last Invoiced date is found.

## Unassigned payments

Note:

This feature is currently in development and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters.

If you want to sync all unassigned payments from your Zuora tenant that Invoice Settlement is enabled for, you need to enter into this field the Id of the NetSuite customer record that you have created to store all Zuora unassigned payments.

## Product catalog sync

-   Item ID Mapping: Select `Use Zuora Charge ID` or `Use Zuora Charge Name`. This determines the NetSuite Item ID value when syncing new Zuora charges. If you select `Use Zuora Charge ID` , a combination of a static Zuora Charge plus a unique ID will be mapped. If you select `Use Zuora Charge Name`, the Charge Name will be mapped as-is. However, you must ensure the Charge Name is globally unique.

-   Product Catalog Sync Behavior: Select whether you want to sync all new and modified records from the Zuora Product Catalog ( Sync New and Modified Records ), overwriting any existing values in the other application, or if you only want to sync new records ( Sync New Records Only ). If you select `Sync New Records Only`, no subsequent changes will be synced once a record has been created.


## Transaction sync

Transaction Number Mapping: Select how Transaction Numbers should be mapped. If you select `Use Number From Source Record`, the Transaction number from the source application will be used. If you select `Let Destination Auto-Number`, the next sequential Transaction number in the destination application will be used to generate new records. You can enable this feature in NetSuite by selecting Setup > Company Auto-Generated Numbers.
