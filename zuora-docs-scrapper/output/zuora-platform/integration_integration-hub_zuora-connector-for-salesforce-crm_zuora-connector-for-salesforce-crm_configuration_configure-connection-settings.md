---
title: "Configure connection settings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/configure-connection-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:25.844Z"
---

# Configure connection settings

This article describes how to configure connection settings for the Zuora Connector for Salesforce CRM package to connect to Zuora.

To configure the connection settings:

1.  In your Salesforce org, click the current app and select Zuora 360 Sync . ![360Sync.png](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Zuora_360__and_Zuora_360/C_Configuring_Z-Force_360_plus/D_Configure_Connection_Settings/360Sync.png)
2.  Click the Connection Setup tab.
3.  On the Zuora API Login Setup page, click Organization and select your organization in the Location Selection section,
4.  In the Connection Settings section, click Edit and specify the following field values:

    -   Endpoint : Specify the URL provided by Zuora, including the WSDL version that you want to use. This will typically be in the following formats.

        | Zuora Environment | Endpoint URL |
        | --- | --- |
        | US Cloud 1 Production | https://na.zuora.com/apps/services/a/WSDL_version |
        | US Cloud 1 API Sandbox | https://sandbox.na.zuora.com/apps/services/a/WSDL_version |
        | US Cloud 2 Production | https://www.zuora.com/apps/services/a/WSDL_version |
        | US Cloud 2 API Sandbox | https://apisandbox.zuora.com/apps/services/a/WSDL_version |
        | US Central Sandbox | https://test.zuora.com/apps/services/a/WSDL_version |
        | US Production Copy | https://servicesNNN.zuora.com/apps/services/a/WSDL_version |
        | US Performance Test | https://pt1.zuora.com/apps/services/a/WSDL_version |
        | EU Cloud Production | https://eu.zuora.com/apps/services/a/WSDL_version |
        | EU Cloud Sandbox | https://sandbox.eu.zuora.com/apps/services/a/WSDL_version |
        | EU Central Sandbox | https://test.eu.zuora.com/apps/services/a/WSDL_version |
        | APAC Production | https://ap.zuora.com/apps/services/a/WSDL_version |
        | APAC Central Sandbox | https://test.ap.zuora.com/apps/services/a/WSDL_version |

    -   Username and Password : Enter a valid Zuora user name and password. Zuora recommends that you use an API user so that the password does not expire. However, you can use either a UI or an API user to successfully establish a connection.


5.  Configure timeout values for HTTP callouts to Zuora based on the type of callouts. The default is 120 seconds, and the values must be 120 seconds or less.

    -   Default Timeout : Default timeout value for callouts in seconds

    -   Subscribe Timeout : Timeout value for the subscribe callouts in seconds

    -   Amend Timeout : Timeout value for the amend callouts in seconds

    -   Query Timeout : Timeout value for the query callouts in seconds


6.  Click Save .
7.  Click Test Connection to verify that you can successfully connect to Zuora.

    Note:

    The Test Connection button only tests whether the username / password are valid. It does not check whether the password has expired. Thus it is possible that you may see a success message in this test, but still get an error when actually connecting to Zuora if the user account has expired.
