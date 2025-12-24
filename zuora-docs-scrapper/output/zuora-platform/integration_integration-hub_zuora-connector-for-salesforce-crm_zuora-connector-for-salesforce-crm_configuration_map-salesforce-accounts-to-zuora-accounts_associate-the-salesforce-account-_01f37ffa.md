---
title: "Associate the Salesforce account ID with Zuora account ID"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/map-salesforce-accounts-to-zuora-accounts/associate-the-salesforce-account-id-with-zuora-account-id"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:27.793Z"
---

# Associate the Salesforce account ID with Zuora account ID

Learn how to associate Salesforce Account IDs with Zuora Account IDs to synchronize data between the two platforms.

Zuora Connector for Salesforce CRM uses the CRM Account IDs to synchronize Zuora data to Salesforce. Once you have a list of Salesforce accounts with Account IDs, associate each Zuora Customer Account with a Salesforce Account by entering the Salesforce Account ID in the CRM Account ID field in Zuora.

Note:

If you are pulling information containing the Salesforce account ID from the API, the Salesforce account ID contains 18-characters. However, if you are viewing the Salesforce account record or running a report, both the URL and the reports will show the 15-character ID.

To associate a Salesforce Account ID with a Zuora Account ID:

Note:

Multiple Billing Accounts can be assigned to a single Salesforce Account. In this context, the Salesforce account acts as the parent account, while the Billing Accounts function as its children. All related child records can be found within the SFDC Account object.

1.  In Zuora, open the customer account that you want to link to a Salesforce account.
2.  Click Edit to edit the Customer Account.
3.  Enter the Salesforce Account ID into the CRM Account ID field.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f6b0221f-472e-45da-9f0f-a82ca116c7ae?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2YjAyMjFmLTQ3MmUtNDVkYS05ZjBmLWE4MmNhMTE2YzdhZSIsImV4cCI6MTc2NjY1MTU0NSwianRpIjoiMzIxZWY5NDUwMTVhNGJhMGIyMTRjMWRmNmNhMTU1ZjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qsSBeETzIXx0tslMZfVEOFVyl2gKDme1AwdAJ-xHhE0)

4.  Click Save.

    If you have a large number of accounts to map, you can use the Customer Account Import feature in Zuora to import the CRM Account IDs.

5.  To associate a list of Salesforce Account IDs with a Zuora Account IDs:
    1.  In Zuora, click Customer Accounts.
    2.  In the Action section on the right-hand side, click the Import field and select Customer Accounts.
    3.  Follow the steps in Importing Customer Accounts to import the Salesforce Account IDs.
