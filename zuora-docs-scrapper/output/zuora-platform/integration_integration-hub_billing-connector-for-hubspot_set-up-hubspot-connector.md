---
title: "Set up HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/set-up-hubspot-connector"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:01.911Z"
---

# Set up HubSpot connector

Follow the steps to configure HubSpot connector in Zuora and install the HubSpot app.

1.  In Zuora, navigate to to access the HubSpot connector.

    If the HubSpot connector is not listed, contact [Zuora Global Support](https://support.zuora.com/) to install it.

2.  Enter the HubSpot Portal ID of your HubSpot account.
3.  Authenticate to Zuora using the provided Client ID and Client Secret. See [Create an OAuth client for a user](/zuora-platform/system-management/administrator-settings/manage-users/create-an-oauth-client-for-a-user).
    1.  Set the environment to the REST Zuora endpoint. For example, rest.apisandbox.zuora.com.
    2.  Generate Zuora credentials.
4.  Enter the Zuora environment endpoint. For example, rest.apisandbox.zuora.com in the Zuora\_host field.
5.  Set up the custom field mapping. See [HubSpot synchronization with custom fields](/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-synchronization-with-custom-fields).
    If there is no mapping, assign an empty array( \[ \] ) to the mapping field.

6.  The mandatory configuration requires the addition of custom fields as follows:
    1.  In the contact section, create an indexed custom field with the API name crmId\_\_c . Set the field type as Text with a length of 255 .
    2.  In the subscription section, create an indexed custom field with the API name hubspotDealId\_\_c . Set the field type to Text with a length of 255 .
7.  Contact [Zuora Global Support](https://support.zuora.com/) to obtain the installation URL for the HubSpot app.
8.  Use the provided URL for one-step installation of the app in your HubSpot instance.
