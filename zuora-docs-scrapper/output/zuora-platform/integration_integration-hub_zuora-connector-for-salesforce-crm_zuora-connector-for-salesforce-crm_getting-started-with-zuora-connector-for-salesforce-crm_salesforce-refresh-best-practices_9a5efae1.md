---
title: "Update customer account CRM org Id"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm/salesforce-refresh-best-practices-ensuring-seamless-data-transition/update-customer-account-crm-org-id"
product: "zuora-platform"
scraped_at: "2025-12-24T08:30:33.304Z"
---

# Update customer account CRM org Id

After the Salesforce refresh, customer accounts in your Zuora tenant might display an Invalid CRM Org Id, as these are no longer valid in the refreshed Salesforce org. To prevent sync errors, promptly update the customer accounts with the accurate CRM Org Id to ensure proper synchronization of Accounts and Catalog Objects. To change the CRM Account ID in the customer account, take the following steps:

1.  Go to Zuora and access the "Customer Accounts" section.
2.  Select the specific customer account you wish to make changes to.
3.  Click Edit.
4.  Update the CRM Account ID for the relevant customer account. See Find the Salesforce Account IDs to retrieve the CRM Account ID.
5.  Click Save.
6.  To change CRM IDs for multiple accounts through the Zuora API:
    1.  Ensure that you grant the necessary user permissions.
    2.  Enable the History Tracking setting for the Account field on the Billing Account object.
7.  To view the results of the CRM Account ID changes, the Salesforce Sync User's user profile must have the following permissions:
    1.  Custom Tab Settings: Sync Histories set to "Default On".
    2.  Custom Object Permissions: Sync History with "View All" and "Modify All" privileges.
        For more information, see Edit a CRM Account ID.
