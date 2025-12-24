---
title: "Set up vertex advantage tax app v2"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/vertex-advantage-tax-app-v2/set-up-vertex-advantage-tax-app-v2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:33.572Z"
---

# Set up vertex advantage tax app v2

Streamline your tax compliance process by configuring the Vertex Advantage Tax app in Zuora Billing.

Follow these steps to streamline your tax compliance process:

1.  Configure Vertex Advantage Tax in Zuora Billing:
    1.  Navigate to
    2.  Click Setup New Tax Engine and select Vertex Advantage Tax V2 from the dropdown list.
    3.  Toggle Use Test Environment if you want Billing to use the test service URL. This enables you to test tax calculations during your Billing setup.
    4.  In the Basic Information area, enter the following:

        1.  Engine Name - The name of the engine to be used.

        2.  Authentication Type - The type of authentication required. To integrate with Vertex Advantage, use your tax vendor account credentials (Username and Password) for Private Token authentication. Access your dashboard and uncover the hidden private token to obtain API tokens.


    5.  Enter the following in the Company and Seller Information section:

        1.  Company Code - A unique identifier for the company in the AvaTax system, used to link billing information to the appropriate business entity. This field is critical for ensuring the correct company is referenced in tax calculations.

        2.  Origin Address - The address where transactions originate from, which is essential for accurate tax calculation. The tax rate can vary depending on the origin location, as different jurisdictions may have different tax rules. This field helps ensure that the correct tax rates are applied based on where the transaction begins.

        3.  Add Company \- The option to add new company details.


    6.  Toggle to enable Advanced Settings and adjust the settings.

        | Field | Description |
        | --- | --- |
        | Request Template | Configure the template as required. Click Use Default Template to use the pre-configured template.Zuora uses the Request Template in Text/XML or Application/JSON format to populate invoice information according to your setup. Templates are rendered dynamically using theLiquid Template Language, available in Text/XML or Application/JSON format.Ensure the utilization of Context Object information while creating a tax template.Note: transaction_items is no longer supported as a context object for template rendering in V2; instead, the default document_items must be used. In V1, transaction_items were specifically tailored to exclude discount charges from being sent to Taxamo as negative transaction lines. In V2, however, we now manage discount and credit items as negative transaction lines by default, so transaction_items are no longer necessary. |
        | Custom Fields | Choose from the available custom fields from the tax engine. |
        | Response Field Mapping: Field Mappings | The option to retrieve data from the tax engine response and store it on the Taxation Item object. For more information on Flexible Field Mapping, see Flexible Tax Mapping. |
        | Network: TimeoutNet Read Timeout | The timeout period for tax requests. The available options are 1 minute, 2 minutes, 5 minutes, and 10 minutes. |
        | Request Headers | Additional headers to tax requests are beneficial in scenarios requiring authentication through firewalls or other specific cases. |

    7.  Click Save .
2.  Create and Activate Tax Code:
    1.  To do this, follow the steps in Set Up Tax Codes - Zuora.
3.  Associate Product Rate Plan Charge with Tax Code
    1.  To do this, follow the steps outlined in Avalara AvaTax for Communications App - Zuora.
4.  Generate Invoice
    1.  Create a bill run for the test account and generate an invoice. For more information, see Creating Bill Runs.
    2.  Verify whether the tax amount is displayed correctly on the invoice.
5.  View Tax Logs on System Health
    1.  Navigate to the Tax Dashboard under System Health to review request and response logs from the newly configured tax engine.
