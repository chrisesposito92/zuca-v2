---
title: "Configure Anrok tax engine in Zuora Billing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/set-up-the-anrok-tax-connector/configure-anrok-tax-engine-in-zuora-billing"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:10.571Z"
---

# Configure Anrok tax engine in Zuora Billing

Learn how to configure the Anrok tax engine in Zuora Billing, including setting up the tax engine, entering necessary information, and adjusting advanced settings for accurate tax calculations.

1.  Go to .
2.  Click Setup New Tax Engine and select Anrok.
3.  Toggle Use Test Environment if you want to test tax calculations during your Billing setup. Ensure you use the testing credentials when you enable the toggle.
4.  Enter the following information:

    -   Engine Name \- The name of the engine.

    -   Authentication Type - Private Token is the default authentication type. It’s actually the bearer token authentication type.

    -   Security Token - The bearer token you created in the Anrok portal.

        Note:

        This integration requires an integration-specific Anrok API key. Generate the key in the Anrok portal by navigating to .


5.  From the Tax Void Call Handling drop-down list, select one of the following options:

    -   Pass Through - No call is made to the tax vendor. The invoice cancel post succeeds. When Advanced Settings is enabled, Pass Through is selected by default. You can change this setting if needed.

    -   Enabled - A tax void call is sent to the vendor.

    -   Block - No call is made to the vendor, and the invoice cancel post fails.


6.  In the Company and Seller Information section, configure:

    -   Company Code \- A unique identifier for the company when you set up multiple companies or organizations in Zuora. This field is critical for ensuring the correct company is referenced in tax calculations. This depends on the vendor, you can pass the company code into the vendor and use the company code to link billing information to the appropriate business entity.

    -   Origin Address - The address where transactions originate from, which is essential for accurate tax calculation. The tax rate can vary depending on the origin location, as different jurisdictions may have different tax rules. This field helps ensure that the correct tax rates are applied based on where the transaction begins.

    -   Add Company - The option to add new company details.


7.  Toggle to enable Advanced Settings and adjust the settings as needed.

    | Field | Description |
    | --- | --- |
    | Request Template | Configure the template as required. Click Use Default Template to use the preconfigured template.Zuora uses the Request Template in Text/XML or Application/JSON format to populate billing document information according to your setup. Templates are rendered dynamically using the Liquid Template Language, available in Text/XML or Application/JSON format.Ensure the utilization of Context Object information while creating a tax template. |
    | Custom Fields | Choose from the available custom fields from the tax engine. |
    | Response Field Mapping: Field Mappings | The option to retrieve data from the tax engine response and store it on the Taxation Item object. For more information on Flexible Field Mapping, see Flexible Tax Mapping. |
    | Network : TimeoutNet Read Timeout | The timeout period for tax requests. The available options are 1 minute, 2 minutes, 5 minutes, and 10 minutes. |
    | Request Headers | Additional headers to tax requests are beneficial in scenarios requiring authentication through firewalls or other specific cases. |

    You can refer to [Anrok API Reference](https://apidocs.anrok.com/#section/API-reference) to understand the request payload fields for tax calculation API.

    Note:

    The Anrok tax engine does not require a default Tax Void Template. When Advanced Settings are disabled, Tax Void Call Handling is set to Enabled by default. When Advanced Settings are enabled, Tax Void Call Handling is set to Pass Through by default. You can change this setting if needed.

8.  Click Save.
9.  Create and Activate Tax Code
    1.  After configuring the tax engine, create and activate a tax code.
    2.  Follow the steps in [Set Up Tax Codes - Zuora](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup).
10.  Associate Product Rate Plan Charge with Tax Code
     1.  After configuring the tax engine, create and activate a tax code.
     2.  Follow the steps in [Set Up Tax Codes - Zuora](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup).
11.  Generate Invoice
     1.  Create a bill run for the test account and generate an invoice. For more information, see [Creating Bill Runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation).
     2.  Verify that the tax value is correctly displayed on the invoice.
