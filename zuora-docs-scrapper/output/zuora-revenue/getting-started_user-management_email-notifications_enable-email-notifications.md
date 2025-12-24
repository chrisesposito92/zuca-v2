---
title: "Enable email notifications"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/user-management/email-notifications/enable-email-notifications"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:00.897Z"
---

# Enable email notifications

Learn how to enable the email framework and configure email templates to support notifications for key revenue processes in Zuora Revenue.

To enable the email framework for your environment, complete the following steps:

1.  Contact Zuora Global Support or your implementation partner and provide the following details:

    -   Name of your company
    -   Environment tenant ID
    -   Zuora Revenue version number
    -   Type of the request (which is to enable the email framework to support email notifications of key revenue processes)
    -   The system URL of Zuora Revenue

2.  If there are previously configured email templates in the application before the email framework is enabled, use the following commands to purge data from the email-specific tables. It is unnecessary to store data in these tables before the email framework gets enabled. Purging this data can prevent sending mass or bad emails to users after the email framework is enabled.

    -   TRUNCATE TABLE rpro\_eml\_hdr\_g
    -   TRUNCATE TABLE rpro\_eml\_dt\_g

3.  After your email framework request is processed, complete the following steps in the UI to configure the email template:
    1.  Navigate to Setups > Application > Email Template .
    2.  To add an email template, click the New Template icon.The New Template window opens.
    3.  On the Email Template tab, specify the template's name in the Name field and select the target notification type from the Notification Type list.
    4.  Specify the email's subject, header, body, and footer as required.
    5.   ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c017fd81-ef05-444f-975b-821d7dcb9126?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMwMTdmZDgxLWVmMDUtNDQ0Zi05NzViLTgyMWQ3ZGNiOTEyNiIsImV4cCI6MTc2NjYzNjY5OCwianRpIjoiNzhlYmEzYWRjMWRjNDdhNzk0ZDRhYzU0N2E0MzgwNjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5l0kvYYZ7zerfg8mcpLBqt3NdyOX8vi9keodUab3bHw) You can add variables to these items using the tokens provided for each notification type. To find the available tokens for the selected notification type, click the Insert Tokens icon . For example, the following email template is configured for scheduled jobs. The tokens, <program name>, <request id>, and <job status> will be replaced with the actual values in the email.
    6.  After configuring the email template, click the save icon.
    7.  Click the Subscribers tab, select the subscribed object type, select the user or user role who receives the email notifications, and click the save icon.
    8.  Click the Assign Books tab, click the target revenue books from the Available Books list and move your selection to the Selected Books list by clicking double arrow , and then click the save icon. .
    9.  Close the window. The email template is set up.

What to do next

If you cannot receive email notifications after completing the configuration steps for the Zuora Revenue processes, create an L3 ticket to [Zuora Support](https://www.zuora.com/support-center/) using Zendesk.
