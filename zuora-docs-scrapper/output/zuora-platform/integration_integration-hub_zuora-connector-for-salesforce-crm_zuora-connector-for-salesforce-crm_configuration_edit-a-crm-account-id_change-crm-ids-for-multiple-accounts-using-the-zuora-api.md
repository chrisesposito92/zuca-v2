---
title: "Change CRM IDs for multiple accounts using the Zuora API"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/edit-a-crm-account-id/change-crm-ids-for-multiple-accounts-using-the-zuora-api"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:49.586Z"
---

# Change CRM IDs for multiple accounts using the Zuora API

Learn how to change CRM Account IDs using the Zuora API, including necessary permissions and recommended pre-change actions.

To change CRM Account IDs using the Zuora API, you must:

-   Grant the required user permissions

-   Enable the History Trackingsettingfor the Account field on the Billing Account object.


We recommend that you perform a Sync Cleanup of the Accounts & Related Objects before you change CRM IDs using the API.

## Required Permissions

To view the CRM Account ID change results, the Salesforce Sync User's user profile must have the following permissions:

-   Custom Tab Settings

    -   Sync Histories: Default On

-   Custom Object Permissions

    -   Sync History: View All, Modify All
