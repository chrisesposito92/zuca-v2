---
title: "Create a new login for NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/create-a-new-login-for-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:49.125Z"
---

# Create a new login for NetSuite

Learn how to create a new login for NetSuite

To sync data between your Zuora tenant and NetSuite, you must create a New Login for your NetSuite account in Zuora Integration Hub. To create a New Login for Netsuite, follow this procedure.

1.  Click My Connect > Tenants in Zuora Integration Hub.
2.  Click New Login and select NetSuite in the drop-down list.
3.  Specify the following information in the New Login window:

    -   Select OAUTH from the drop-down list in the New Login window. You must enable Token-based Authentication for your NetSuite account. In NetSuite,

        1.  Go to Setup > Company > Enable Features > Suite Cloud > Manage Authentication.

        2.  Enable TOKEN-BASED AUTHENTICATION and click Save.

    -   Username : Enter your NetSuite login Name.

    -   Password : Enter your NetSuite password.

    -   Account ID : The NetSuite Tenant Account ID is provided by NetSuite. To find the Account ID in NetSuite, go to Setup > Integration > Web Services Preferences and check the value of the Account ID field in NetSuite. For example, `TSTDRV678100`.

    -   To get the Application ID, Consumer Key and Consumer Secret, you must create a new Integration record for the iPaaS in NetSuite.

        1.  Go to Setup > Integration > Manage Integrations > New.

        2.  Select Enabled for State and enable TOKEN-BASED AUTHENTICATION.

        3.  Click Save and you will be prompted to the confirmation.

        4.  Make a note for the Application ID, Consumer Key, and Consumer Secret in the confirmation. Note that the Consumer Key and Consumer Secret are displayed only once.

    -   To get the Token ID and Token Secret, you must create a new Access Token in NetSuite.

        1.  Go to Dashboard > Settings > Manage My Access Tokens > New.

        2.  Select the Integration record for the iPaaS you just created in the drop-down list of APPLICATION NAME.

        3.  Click Save and you will be prompted to the confirmation.

        4.  Make a note for the Token ID and Token Secret in the confirmation. Note that the Token ID and Token Secret are displayed only once.


4.  Click Save Login.
