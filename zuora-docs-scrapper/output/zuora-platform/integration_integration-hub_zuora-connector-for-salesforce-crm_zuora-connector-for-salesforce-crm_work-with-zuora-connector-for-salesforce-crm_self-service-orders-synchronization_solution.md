---
title: "Solution"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/work-with-zuora-connector-for-salesforce-crm/self-service-orders-synchronization/solution"
product: "zuora-platform"
scraped_at: "2026-02-19T03:31:58.038Z"
---

# Solution

Outlines the process of creating and verifying accounts in Salesforce and Zuora, ensuring proper synchronization and validation.

Custom programming is required to create the account in Salesforce. There are also checks and validations if the account already exists in Salesforce.

![Entering Self-Service orders into SFDC](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e941f8c7-8ba3-46c4-bd8a-359380bd3bb4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5NDFmOGM3LThiYTMtNDZjNC1iZDhhLTM1OTM4MGJkM2JiNCIsImV4cCI6MTc3MTU1ODMxMiwianRpIjoiMzQ2MjQxMjM3M2U5NDI1ZmEzYWM1MzFhMTI1ZDFhYzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.SLMlhNFHbq9rPKFukll3AzCv5wcbqcbZhRgUAcJQ0Dc)

1.  From the self-service user interface, create a call to Salesforce that creates the account and subscription in Zuora.
2.  Query Salesforce to verify whether account/contact already exists using the email address or domain as a unique key.

    -   If it exists: Pull the account ID to populate CRM account ID in Zuora in a [Create order](https://www.zuora.com/developer/api-references/api/operation/POST_Order/) call.

    -   If it does not exist: Create a new account (you must specify the Account Name) and pull the account ID to populate CRM account ID in Zuora in a [Create order](https://www.zuora.com/developer/api-references/api/operation/POST_Order/) call.


3.  Once the Zuora account is created with the Salesforce/CRM Account ID, the sync will use this field to map the two accounts and push over all of the account information

This should take place immediately before the [Create order](https://www.zuora.com/developer/api-references/api/operation/POST_Order/) call is invoked from the website to Zuora. This ensures that the Salesforce account is not created unnecessarily if the customer cancels the checkout process at the last minute.
