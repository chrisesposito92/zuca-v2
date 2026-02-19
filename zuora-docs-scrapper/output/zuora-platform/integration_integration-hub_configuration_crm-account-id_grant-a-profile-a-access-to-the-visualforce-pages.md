---
title: "Change CRM IDs for Multiple Accounts Using the Zuora API"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configuration/crm-account-id/grant-a-profile-a-access-to-the-visualforce-pages"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:24.325Z"
---

# Change CRM IDs for Multiple Accounts Using the Zuora API

Learn how to update CRM Account IDs for multiple accounts using the Zuora API, including required permissions and settings adjustments.

To change CRM Account IDs using the Zuora API, you must:

-   Grant the required user permissions

-   Enable the History Trackingsettingfor the Account field on the Billing Account object.


We recommend that you perform a Sync Cleanup of the Accounts & Related Objects before you change CRM IDs using the API.

To view the CRM Account ID change results, the Salesforce Sync User's user profile must have the following permissions.

-   Custom Tab Settings

    -   Sync Histories: Default ON

-   Custom Object Permissions

    -   Sync History: View All, Modify All


To grant the Custom Object permissions to a profile

1.  Navigate to Setup > Administer > Manage Users > Profiles .
2.  Click the profile to whom you want to grant permissions.
3.  Click Edit .
4.  In the Custom Tab Setting section on the Profile Edit page, click and select Default On for Sync Histories. ![SyncHistoriesTab.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/225d3fb6-b187-4d73-8871-5eeaf4a56ccc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIyNWQzZmI2LWIxODctNGQ3My04ODcxLTVlZWFmNGE1NmNjYyIsImV4cCI6MTc3MTU1ODQ1OCwianRpIjoiOTgzODZkMjA2MmU2NDY3MTg3ZTAzMGU5N2FmZTRlODgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.oQs_un953opAUfsJF8NwVIezuQcu216CgP43jhNe3Y8)
5.  In the Custom Object Permissions section, select View All and Modify All for the Sync History object.
6.  Click Save .

## Grant a profile access to the Apex classes

1.  Navigate to Setup > Administer > Manage Users > Profiles .
2.  Click the profile to whom you want to grant permissions.
3.  Click Enable Apex Class Access . ![EnableApexAccess.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6ced142a-a42d-4464-bad2-3dd81458d63a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjZWQxNDJhLWE0MmQtNDQ2NC1iYWQyLTNkZDgxNDU4ZDYzYSIsImV4cCI6MTc3MTU1ODQ1OCwianRpIjoiMWM5YTE0NjljY2I5NDYxMDkxZWUwOGU3MDQxNzYzZjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.uQB8H_V2F2m6mSPUQruzOgn8NSGpVkDEzOulDI1Zbi0)
4.  In the Enabled Apex Class Access section, click Edit .
5.  Click the following classes in the Available Apex Classes list and click the Add arrow to move them to the Enabled Apex Classes list:

    -   Zuora.PaymentCrmIdChangeBatchable

    -   Zuora.RefundCrmIdChangeBatchable

    -   Zuora.SubObjectBatchableForCrmId

    -   Zuora.SubProdChargeCrmIdChangeBatchable

    -   Zuora.SubscriptionCrmIdChangeBatchable

    -   Zuora.ZInvoiceCrmIdChangeBatchable

    -   Zuora.SyncHistoryController


6.  Click Save .

### Grant a profile a access to the Visualforce pages

1.  Navigate to Setup > Administer > Manage Users > Profiles .
2.  Click the profile to whom you want to grant permissions.
3.  Click Enabled Visualforce Page Access .
4.  In the Enabled Visualforce Page Access section, click Edit .
5.  Click the following Visualforce pages in the Available Visualforce Pages list and click the Add arrow to move them to the Enabled Visualforce Pages list:

    -   Zuora.CrmIdChangeResult

    -   Zuora.SyncResult


6.  Click Save .

Enable History Tracking for the Account field of the Billing Account object ( `Zuora__CustomerAccount__c.Account__c` ). This setting supports the ability to change CRM Account IDs in bulk.
