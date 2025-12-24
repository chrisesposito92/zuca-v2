---
title: "SubmitContractOrder Plugin"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/global-classes-in-zuora-connector-for-salesforce-cpq/submitcontractorder-class/submitcontractorder-plugin"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:27.612Z"
---

# SubmitContractOrder Plugin

The SubmitContractOrder plugin translates Salesforce CPQ Contracts to Zuora Orders, customizable for specific requirements, and is applicable when Orders are enabled in Zuora.

Note:

This functionality is only available if you have the Orders feature enabled.

The SubmitContractOrder plugin is designed to translate a Salesforce CPQ Contract to a Zuora Order. You can customize the translation for your own requirements.

The following diagram shows the SubmitContractOrder plugin in Zuora Connector for Salesforce CPQ.

Figure 1. SubmitContractOrder plugin

![SubmitContractOrder plugin](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e96084cd-ed44-4087-a7ef-3949b6ba3858?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5NjA4NGNkLWVkNDQtNDA4Ny1hN2VmLTM5NDliNmJhMzg1OCIsImV4cCI6MTc2NjY1MTc4NSwianRpIjoiOGI2NzRiOWEyYTBlNGQxY2EyNDllMWVjYTMzNzljMzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9uEtOGv2ClVoQ7ffMSFaesGcXMIsxdtDfMMAhH0sYpw)

The workflow of sending a Contract to Zuora as an Order includes the following steps:

1.  Click Send To Zuora on the Send To Zuora page in the Connector UI.

2.  The Connector calls the Custom Implementation of the SubmitContractOrder plugin.

3.  The Custom Implementation of the plugin translates the Contract to an Order Request.

4.  The Connector sends the Order Request to Zuora.

5.  The Connector uses the created Order to backfill the required Ids and references for future amendments.


Note that the Connector flow has been changed since version 3.0 if Zuora Orders is enabled. The Preview page is no longer necessary. Preview is now initiated when loading the Send To Zuora page. If you are unable to send a successful preview, you will be unable to initiate a contract submission.

## Limits

The SubmitContractOrder plugin has the following limits.

-   This plugin is only applicable when Orders is enabled for your Zuora tenant.
-   You could only submit a Contract to Zuora as an Order when you use an external implementation of this plugin.
-   You could only create one Order per submission.
-   Submission volume is limited by constraints of the Orders API.
-   The plugin only supports Contract level integration.
-   The external custom implementation must pass SBQQ Subscription names as Order Action names to facilitate the backfill
