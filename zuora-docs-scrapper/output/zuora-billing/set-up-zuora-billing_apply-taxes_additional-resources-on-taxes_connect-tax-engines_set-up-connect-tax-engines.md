---
title: "Set up Connect Tax Engines"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/connect-tax-engines/set-up-connect-tax-engines"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:36.915Z"
---

# Set up Connect Tax Engines

Create and manage Connect Tax Engines to integrate a third-party tax app with Zuora Billing.

Before you begin, purchase the tax app you want from Marketplace and install it in your Zuora tenant.

See [Configurable tax app](/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/overview-of-tax-apps) for information about [purchasing](/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/purchase-an-app) an app and [installing](/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/overview-of-tax-apps) it in Zuora Billing.

To set up a Connect Tax Engine:

1.  In your Zuora tenant, click your username at the top right and navigate to .
2.  Click Setup Tax Engine and Tax Date.
3.  Select Connect Tax Engine from the list, and click setup new tax engine.

    Note: You can create at most 10 Connect Tax Engines.

4.  In the Basic Information area on the Setup Tax Engine page, specify the basic information for the new tax engine:

    -   Name: Name the Connect Tax Engine you would like to use in Zuora. For example, Avalara Brazil, India Local Tax, Avalara Telco, etc.
    -   Connect Token: Enter the unique 32-character API Token of the Tax app. To obtain your API Token:
        1.  Access the app through Setup Tax Engine and Tax Date under Billing settings. Billing settings
        2.  Navigate to the APP INFORMATION tab, the API token is listed near the top of the tab.

5.  In the Custom Fields sent to Open Tax Connector area, select all the custom fields that you want to use in the tax request for tax calculation. You can select both Legacy Custom Fields and Advanced Custom Fields.
    Failure to select them will result in that blank values are used in the corresponding Liquid objects. See Manage custom fields for more information. The maximum number of custom fields you can select varies depending on your Zuora edition or Zuora modules. For more information, see Zuora Editions and Zuora Modules.

6.  Click Save to save the configurations.
7.  In the Company Information area, add at least one Company Code to activate a tax code.

    After completing the previous steps, you can click back to Tax Engine list to view the Connect Tax Engine you just created. If you want to modify it, click Edit. If you want to remove it, click Delete.
    Note: If you want to remove an existing Connect Tax Engine referred by a tax code, you need to first remove the tax code before removing the Connect Tax Engine.

    You can also set up and configure Connect Tax Engines through the Settings API. The following operations are supported:

    | Operation | HTTP Method | HTTP URL | Note |
    | --- | --- | --- | --- |
    | Create a Connect Tax Engine | POST | https://rest.zuora.com/settings/tax-engines/connector | You can create at most 10 Connect Tax Engines for your Zuora tenant. |
    | Retrieve a Connect Tax Engine | GET | https://rest.zuora.com/settings/tax-engines/connector/{id } |  |
    | Update a Connect Tax Engine | PUT | https://rest.zuora.com/settings/tax-engines/connector/{id} |  |
    | Delete a Connect Tax Engine | DELETE | https://rest.zuora.com/settings/tax-engines/connector/{id} |  |

    See Connect Tax Engines Settings for request/response samples.
