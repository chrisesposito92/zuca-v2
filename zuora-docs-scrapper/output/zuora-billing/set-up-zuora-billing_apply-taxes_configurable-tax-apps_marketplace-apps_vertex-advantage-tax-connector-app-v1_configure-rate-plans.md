---
title: "Configure rate plans"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/vertex-advantage-tax-connector-app-v1/configure-rate-plans"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:18.799Z"
---

# Configure rate plans

Learn how to configure rate plans by setting up a Connect Tax Engine in Zuora, including specifying basic information and managing custom fields.

After the tax app is installed and configured, take the following tasks before using the configured tax instance:

To set up a Connect Tax Engine, complete the following steps.

1.  In your Zuora tenant, click your username at the top right and navigate to .
2.  Click Setup Tax Engine and Tax Date. .
3.  Click from the list. You can create a maximum of 10 Connect Tax Engines.
4.  In the Basic Information area on the Setup Tax Engine page, specify the basic information for the new tax engine:

    -   Name: Name the Connect Tax Engine you would like to use in Zuora, for example, Avalara Brazil, India Local Tax, Avalara Telco, etc.

    -   Connect Token: Enter the unique 32-character API Token of the Tax app. To obtain your API Token:

        1.  Access the app through Setup Tax Engine and Tax Date under Billing settings.

        2.  Navigate to the APP INFORMATION tab, the API token is listed near the top of the tab.


5.  In the Custom Fields sent to the Open Tax Connector area, select all the custom fields that you want to use in the tax request for tax calculation. Failure to select them will result in blank values being used in the corresponding Liquid objects. See Manage Custom fields for more information. Note: The maximum number of custom fields you can select varies depending on your Zuora edition or Zuora modules. For more information, see Zuora Editions and Zuora Modules.
6.  To create the following custom fields specific to Vertex Advantage:
    1.  Open a new tab in your browser.
    2.  In your Zuora tenant, navigate to .
    3.  Click on Account Fields.
    4.  Click Add New Field.
    5.  Add the following custom fields:

        |  | Custom field 1 | Custom field 2 | Custom field 3 | Custom field 4 | Custom field 5 |
        | --- | --- | --- | --- | --- | --- |
        | Data type | Text | Text | Text | Text | Text |
        | Field label | Taxamo buyer ip | Taxamo billing country code | Taxamo buyer name | Taxamo buyer email | Taxamo buyer tax number |
        | API name | Taxamo_buyer_ip | Taxamo_billing_country_code | Taxamo_buyer_name | Taxamo_buyer_email | Taxamo_buyer_tax_number |
        | Length | 20 | 10 | 100 | 100 | 30 |

        These required fields are subject to change based on your organization's need and implementation.

    6.  Click Save to save the configurations.
    7.  In the Company Information area, add at least one Company Code to activate a tax code.

        After completing the previous steps, you can click Back to Tax Engine list to view the Connect Tax Engine you just created. If you want to modify it, click Edit. If you want to remove it, click Delete.

        Note:

        If you want to remove an existing Connect Tax Engine referred to by a tax code, you must first remove the tax code before removing the Connect Tax Engine.
