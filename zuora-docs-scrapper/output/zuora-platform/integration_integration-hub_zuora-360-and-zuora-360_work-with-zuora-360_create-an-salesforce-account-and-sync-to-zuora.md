---
title: "Create  an Salesforce account and sync to Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/work-with-zuora-360/create-an-salesforce-account-and-sync-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:36.087Z"
---

# Create an Salesforce account and sync to Zuora

This article explains how to create the account in Salesforce and link it to the CRM Account ID field in the Zuora customer account.

Because self-service websites and infrastructure to support those website vary, it is beyond the sc​​ope of this article to provide source-code.

Merchants often have a self-service website where customers make product selections, and upon checkout, a subscription is created in Zuora via the Zuora API. In these situations, if the merchant deployed Zuora CPQ to connect Zuora and their Salesforce instance, there is an extra step th​at must be performed before subscriptions created in Zuora are synced to Salesforce. This extra step is the creation of an account in Salesforce and linking it to the CRM ID field in the customer account in Zuora. The Zuora 360 sync is one-way, from Zuora to Salesforce, and works only if the Salesforce account already exists and the CRM Account ID exists in the Zuora account

Custom programming is required to create the account in Salesforce. There are also checks and validations if the account already exists in Salesforce.

![Entering self-service orders into SFDC](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/02f1d5b7-70f8-4963-a0f2-fc6d5254d63e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyZjFkNWI3LTcwZjgtNDk2My1hMGYyLWZjNmQ1MjU0ZDYzZSIsImV4cCI6MTc2NjY4NzkxNCwianRpIjoiMjE5YjBkNTU5MzhhNDEyOGExYmNlOWNiOWIyNTUzNzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LT0JlSzIsOQKrjLQcheVlaAdHz3WGd6ChNMOZ1EOSBw)

1.  From the self-service user interface, create a call to Salesforce that creates the account and subscription in Zuora.
2.  Query Salesforce to verify whether account/contact already exists using the email address or domain as a unique key.

    -   If it exists: Pull the account ID to populate CRM account ID in Zuora in a [Create order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call.

    -   If it does not exist: Create a new account (you must specify the Account Name) and pull the account ID to populate CRM account ID in Zuora in a [Create order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call.


3.  Once the Zuora account is created with the Salesforce/CRM Account ID, the sync will use this field to map the two accounts and push over all of the account information.

    This should take place immediately before the [Create order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call is invoked from the website to Zuora. This ensures that the Salesforce account is not created unnecessarily if the customer cancels the checkout process at the last minute.


This article explains how to create the account in Salesforce and link it to the CRM Account ID field in the Zuora customer account.
