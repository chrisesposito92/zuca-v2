---
title: "Use OAuth Credentials"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/installation/set-up-sync-credentials-to-connect-to-salesforce/use-oauth-credentials"
product: "zuora-platform"
scraped_at: "2025-12-24T18:34:04.185Z"
---

# Use OAuth Credentials

Learn how to use OAuth credentials for secure authentication with Salesforce through the Salesforce Connected App.

OAuth credentials is a secured option for authenticating into Salesforce through Salesforce Connected App :

-   Tokens only are used instead of a Salesforce login or password that is stored in Zuora.

-   Salesforce integration can be controlled centrally from Salesforce, instead of from Zuora, the sending application.


Salesforce Connected Apps is deployed with Zuora 360 and requires the installed Zuora 360 Package, version 2.102 or higher.

Salesforce Connected App is not deployed with Zuora Quotes. If OAuth authentication is used in Zuora Quotes, the Zuora 360 Package, version 2.102 and higher, must be installed in the same Salesforce Org as Zuora Quotes.

To set up OAuth credentials and the token :

1.  Select Use OAuth Credentials . ![OAuthSetup.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8d2c832b-3b22-4bc4-adf8-d6362488e200?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhkMmM4MzJiLTNiMjItNGJjNC1hZGY4LWQ2MzYyNDg4ZTIwMCIsImV4cCI6MTc2NjY4NzY0MiwianRpIjoiM2FiMjQyZmQ5Yjk4NDMwMDg4NGIyMmVlYTg3MDdjM2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YQzEQmo2pAnARVEadOrT5H42uecvFmX1EoeOPLHNalk)
2.  Enter your 15 or 18-character Salesforce Org ID in the Salesforce Org ID field. [How do I find my Salesforce Org ID?](https://success.salesforce.com/answers?id=90630000000gnFqAAI)
3.  Enter your 15 or 18-character Salesforce User ID in the Salesforce User ID field. [How do I find my Salesforce User ID?](https://help.salesforce.com/apex/HTViewSolution?urlname=How-do-I-locate-a-Salesforce-User-ID&language=en_US)
4.  Select the Use salesforce.com Sandbox check box if you are using this connection for Salesforce Sandbox Orgs. You have an option to connect with a salesforce.com sandbox environment. If you select Use salesforce.com Sandbox , this environment will have its own set of Salesforce Org ID and Salesforce User IDs. You may need to change the OAuth Credentials if you switch between a production and sandbox environment.
5.  Click Save . Options to set up the OAuth token, reset, test access, and delete these credentials are displayed on save. ![OAuthMenu.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bd3c5041-0e6d-41e5-a4b4-e29dfb5d3c00?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJkM2M1MDQxLTBlNmQtNDFlNS1hNGI0LWUyOWRmYjVkM2MwMCIsImV4cCI6MTc2NjY4NzY0MiwianRpIjoiODE2YTczMTFhY2EyNDgxYTgyMDQ3MGMwZTU3YThkNjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3QrFqGlJUCYp1kIMvd5U9Xb4ccc6ALTfx3rTnnMBO7U)
6.  Click setup oauth tokens to set up the credentials used to connect to Salesforce. Use the Salesforce credentials for connecting to 360 Sync.

To reset OAuth credentials :

-   Click reset to periodically change or update OAuth credentials. When you click reset, you can edit the credentials without clearing them.


To test accessing Salesforce with OAuth :

-   Click Test Access to check if you can connect to Salesforce using the token:

    -   If successful, a message appears indicating that access test was successful.

    -   If failed, a message appears asking you to set up the OAuth token.


To delete the OAuth credentials :

-   Click delete to permanently remove OAuth credentials and the token.
