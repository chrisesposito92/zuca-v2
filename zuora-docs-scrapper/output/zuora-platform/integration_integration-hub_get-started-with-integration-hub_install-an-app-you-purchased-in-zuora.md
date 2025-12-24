---
title: "Install an app you purchased in Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/install-an-app-you-purchased-in-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:58.369Z"
---

# Install an app you purchased in Zuora

Learn how to install an app on your Zuora tenant to be able to use it.

-   You have a Zuora Connect account.

-   You have purchased the app.

-   You have created an OAuth login for your Zuora tenant.

-   To install the Zuora Collections feature, you must have the Platform Adminrole.


1.  From Zuora, navigate to .
2.  Locate the app to install, then hover and click Deploy or Download.

    Deploy corresponds to apps that have been purchased; Download corresponds to apps that are automatically available for you to install.

3.  In the New Configuration window that opens, specify the configuration details for the app:

    -   Name - A name is automatically populated. Modify the name if necessary.

    -   Run Mode -See the app's documentation to learn about how to choose a run mode.

    -   Execution - Select External unless otherwise specified in the app's documentation.

    -   Build Name - Select Production - US, irrespective of your environment.

    -   Source , Target , etc - Select the tenant login for the app. Some apps or functions require using OAuth. In this case, select the OAuth tenant login for the installation.


4.  Click Create . The app is installed and will be populated under Marketplace in Zuora shortly. You may need to refresh the page for the app name to display.

After an app is installed in the tenant, you can launch, configure, and use the app in Zuora.

Contact your Engagement Manager or Zuora Global Support if you have further questions.

Now Zuora Connect is only used for creating OAuth tenant logins. You cannot launch, configure, or use an app in Zuora Connect anymore.

When a new user role is created in the tenant, the platform permission for Integration Hub is enabled by default. Administrators can restrict access to base roles by disabling these permissions.

To learn about how to configure and use an app, refer to the documentation of the app on App Documentation .

For the Tax app installation, see Configurable tax apps and select the respective vendor app page that you are seeking to install.
