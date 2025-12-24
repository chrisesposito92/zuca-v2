---
title: "Set up Connect Tax Engine"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/install-vertex-o-series-tax-connector-app/set-up-connect-tax-engine"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:45.035Z"
---

# Set up Connect Tax Engine

Learn how to configure and set up a Connect Tax Engine in Zuora, including specifying basic information, selecting custom fields, and saving configurations.

After the Tax app is installed and configured, take the following tasks before using the configured tax instance:

To set up a Connect Tax Engine :

1.  In your Zuora tenant, click your username at the top right and navigate to
2.  Click Setup Tax Engine and Tax Date.
3.  Click Setup New Tax Engine > Connect from the list. You can create a maximum of 10 Connect Tax Engines.
4.  In the Basic Information area on the Setup Tax Engine page, specify the basic information for the new tax engine:

    -   Name: Name the Connect Tax Engine you would like to use in Zuora. For example, Avalara Brazil, India Local Tax, Avalara Telco, etc.

    -   Connect Token: Enter the unique 32-character API Token of the Tax app. To obtain your API Token:

        1.  Access the app through Setup Tax Engine and Tax Date under Billing settings .

        2.  Navigate to the APP INFORMATION tab, the API token is listed near the top of the tab.


5.  In the Custom Fields sent to the Open Tax Connecto area, select all the custom fields that you want to use in the tax request for tax calculation. Failure to select them will result in blank values being used in the corresponding Liquid objects. See Manage Custom fields for more information.

    Note: The maximum number of custom fields you can select varies depending on your Zuora edition or Zuora modules. For more information, see Zuora Editions and Zuora Modules .

6.  Click Save to save the configurations.
7.  In the Company Information area, add at least one Company Code to activate a tax code.

After completing the previous steps, you can click back to the Tax Engine list to view the Connect Tax Engine you just created.

Note:

-   If you want to remove an existing Connect Tax Engine referred to by a tax code, you must first remove the tax code before removing the Connect Tax Engine.

-   When setting up a new tax engine, you will encounter the old user interface (UI). However, to access advanced settings such as Tax Void Call Handling, Custom Fields, Seller Information, request templates, preview a rendered request, and much more, you must utilize the new UI. This new UI is accessible only when editing an existing tax engine that you have created. Ensure to use the Edit function to access the new UI for configuring advanced settings and making modifications to your tax engine setup.
