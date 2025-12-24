---
title: "Invite users to portal"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/work-with-subscriber-portal/invite-users-to-portal"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:42.773Z"
---

# Invite users to portal

Learn how to invite users to the Subscriber Portal by sending customized email invitations and managing user access through CSV uploads.

You can invite users to set up login credentials via an email sent by the Subscriber Portal app. The app will send emails to the work email of the Zuora customer account that will also be the email for login. The invitation content of the email can be customized to fit the requirements of your business. For more information, see [Example of configuring email templates](/zuora-platform/integration/integration-hub/subscriber-portal/configure-user-interface/example-of-configuring-email-templates). for more information.

1.  Enter the installed Subscriber Portal instance and click the Users tab.
2.  Click the ![add_icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/11c5727e-771d-4894-8f05-34e4e32fc563?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjExYzU3MjdlLTc3MWQtNDg5NC04ZjA1LTM0ZTRlMzJmYzU2MyIsImV4cCI6MTc2NjY0MTcyMSwianRpIjoiYTdmYzBjNDIxZjJiNGU4YWE1Yjg2MmNmZGIwNTEyOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.d6K4E8IIOIxhaLIA_92PY8hReHJPC-PDTj0cn9hVRPQ) icon. The New User dialog is displayed.
3.  Enter the user email in the User Email field in the New User dialog.
4.  Click Create .
5.  Enter the installed Subscriber Portal instance and click the Users tab.
6.  Navigate to Actions > Send Activation Emails from CSV .
7.  Select the CSV file to upload. The file must be formatted with only one column of email addresses. No header is required. Users will only be recognized by the associated work email in your Zuora tenant. Note that it may take a few minutes to upload a CSV. The uploaded email addresses will be displayed in the table. Email addresses can only be added once to prevent duplicates.
8.  Click Run after the CSV file has been successfully uploaded.

Navigate to Users > Actions to view other available actions:

-   Send Activation Emails from CSV - Send activation emails to the email addresses of end users contained in a CSV file.

-   Add Users from CSV (No Invite) \- This option is applicable to you if you are using SSO integrations and want to add users in bulk. It will require a CSV file that contains the following columns:

    -   Provider : An example value is `email` .

    -   Uid : An example value is `customer1@example.com` .

    -   Zuora Account Ids : An example value is `A00000143` .

-   Add Users from CSV (Non-Email UID) - This option is applicable to you if you are using SSO integrations and it will require a CSV file that contains the following two columns. End Users will receive an invitation or acceptance email to be added to the tenant because no email addresses are associated with their account.

    -   Account User Name

    -   Account ID

-   Export Users as CSV - Export all the user information in the table as a CSV file.

-   Reinvite Users - Resend invitation emails to end users.


Provide the portal URL to end users and allow them to sign up directly from the portal. End users will only be recognized by the associated work email in your Zuora tenant and will be prompted to enter their email addresses associated with their customer account and password. ![Activate User from Portal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/46d7299f-7575-4b9d-bc25-21a08e452300?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ2ZDcyOTlmLTc1NzUtNGI5ZC1iYzI1LTIxYTA4ZTQ1MjMwMCIsImV4cCI6MTc2NjY0MTcyMSwianRpIjoiMzdlYjM0NzZkYWY5NGIyY2FmYjMzZmFhNDFmM2ZlZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.t1zK4ojO_8j_iI0pSaFPLvNy41OSV2-LlJVv6bFOQNU)
