---
title: "Use and manage OAuth credentials"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm/set-up-sync-credentials-to-connect-to-salesforce/use-and-manage-oauth-credentials"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:18.864Z"
---

# Use and manage OAuth credentials

Learn how to use and manage OAuth credentials for secure authentication with Salesforce through a Connected App.

OAuth credentials is a secured option for authenticating into Salesforce through [Salesforce Connected App](https://developer.salesforce.com/page/Connected_Apps):

-   Tokens are only used instead of a Salesforce login or password that is stored in Zuora.

-   Salesforce integration can be controlled centrally from Salesforce, instead of from Zuora, the sending application.


To set up OAuth credentials and the token:

1.  Select Use OAuth Credentials . ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/faeefefd-c6d3-40ae-8783-6068e0829304?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZhZWVmZWZkLWM2ZDMtNDBhZS04NzgzLTYwNjhlMDgyOTMwNCIsImV4cCI6MTc2ODYwMDg3MiwianRpIjoiMjIzOWYzMTYxZmUzNDJhY2I5ZTEzYThmZjUzYWMwZDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Yg1xlBeDkkLC_L7EpCoXwcp-Cdc-3gYWkDH9-vWtAjQ)
2.  Enter your 15 or 18-character Salesforce Org ID in the Salesforce Org IDfield. [How do I find my Salesforce Org ID?](https://success.salesforce.com/answers?id=90630000000gnFqAAI)
3.  Enter your 15 or 18-character Salesforce User ID in the Salesforce User IDfield. [How do I find my Salesforce User ID?](https://help.salesforce.com/apex/HTViewSolution?urlname=How-do-I-locate-a-Salesforce-User-ID&language=en_US)
4.  Select the Use salesforce.com Sandbox check box if you are using this connection for Salesforce Sandbox Orgs. You have an option to connect with a salesforce.com sandbox environment. If you select Use salesforce.com Sandbox , this environment will have its own set of Salesforce Org ID and Salesforce User IDs. You may need to change the OAuth Credentials if you switch between a production and sandbox environment.
5.  Click Save . Options to set up the OAuth token, reset, test access, and delete these credentials are displayed on save. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/beb6ca64-7708-420e-b435-5f9b0ce45008?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJlYjZjYTY0LTc3MDgtNDIwZS1iNDM1LTVmOWIwY2U0NTAwOCIsImV4cCI6MTc2ODYwMDg3MiwianRpIjoiMmIyMzhkZmMzOWNiNGVhZDllODQ4OTRjMTE4MGM4MzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.1V6VCQ_NX17o3qUN7gewh-iywPFyqbAmMMS068-qFQw)
6.  Click setup oauth tokens to set up the credentials used to connect to Salesforce. Use the Salesforce credentials for connecting to Zuora Connector for Salesforce CRM.
7.  Login to the Salesforce account using the same account that was used to set up up credentials for OAuth.
8.  To reset OAuth credentials:
    1.  Click Reset to periodically change or update OAuth credentials. When you click reset, you can edit the credentials without clearing them.
9.  To test accessing Salesforce with OAuth:
    1.  Click Test Access to check if you can connect to Salesforce using the token. If successful, a message appears indicating that access test was successful. If failed, a message appears asking you to set up the OAuth token.
10.  To delete the OAuth credentials:
     1.  Click Delete to permanently remove OAuth credentials and the token.
