---
title: "Make API Calls to Salesforce from Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/integration-with-other-products/make-api-calls-to-salesforce-from-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:01.178Z"
---

# Make API Calls to Salesforce from Workflow

Learn how to make API calls from Workflow to Salesforce.

Configurations and credentials for making API calls to Salesforce are different from typical API calls. You need to create a connected app in Salesforce and obtain additional credentials.

-   Ensure you have an account on the developer edition of Salesforce. If you don't have an account, sign up at [https://www.salesforce.com/form/developer-signup/](https://www.salesforce.com/form/developer-signup/).

-   Ensure your workflow includes a callout task for invoking API calls to Salesforce endpoints.

-   Optional: Zuora recommends that you create global constants for the Salesforce user name and password, so that you do not need to manually enter the credentials every time you create a callout task to Salesforce endpoints. To learn about how to define and reference global constants, see "Configure global constants of Workflow".


1.  Create a connected app for the integration in the Salesforce developer edition. If you already have a connected app created for the integration with Workflow, skip this step.
    1.  In Salesforce, select Create > Apps under Build .
    2.  In the Connected Apps section, click New .
    3.  On the page that opens, specify information for the app. Ensure Enable OAuth Settings is selected.
    4.  Click Save .
2.  When the app is created, click the app name in the Connected Apps section to view its details. Copy the Consumer Key and Consumer Secret to a separate place. We will need them for the authentication configuration in the callout task in Workflow. You can also define global constants for the Consumer Key and Consumer Secret.
3.  Edit the callout task in your workflow. In the Authentication tab, specify the following authentication details.

    -   Authentication Type : Select oauth\_2.0 .

    -   Grant Type : Select Password Credentials .

    -   URL : Enter the Salesforce login URL.

    -   Client ID : Enter the Consumer Key obtained in step 2 or the global constant for Consumer Key.

    -   Client Secret : Enter the Consumer Secret obtained in step 2 or the global constant for Consumer Secret.

    -   Token URL : Enter the Salesforce endpoint for token requests.

    -   Username : Enter your Salesforce user name or the global constant for the user name.

    -   Password : Enter your Salesforce account password or the global constant for the password.


4.  In the Headers tab of the callout task, specify the HTTP method and the endpoint URL in its full form, for example, `https://na46.salesforce.com/services/data/v45.0/query/?q=select id, name from account`), and add the following header: `Key: Content-type` and `Value: application/json`.
5.  Save the settings and start the workflow.
