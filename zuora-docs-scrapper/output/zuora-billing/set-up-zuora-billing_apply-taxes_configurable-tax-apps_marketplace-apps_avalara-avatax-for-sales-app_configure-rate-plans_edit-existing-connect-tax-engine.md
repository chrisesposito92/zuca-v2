---
title: "Edit existing Connect Tax Engine"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/avalara-avatax-for-sales-app/configure-rate-plans/edit-existing-connect-tax-engine"
product: "zuora-billing"
scraped_at: "2025-12-24T05:07:30.702Z"
---

# Edit existing Connect Tax Engine

Learn how to edit an existing Connect Tax Engine using the new UI for advanced settings and modifications.

It is highly recommended that you utilize the New Tax UI for editing, as it provides a convenient way to modify all Connect Tax Engine settings in a centralized location. The old UI can still be used to modify important details such as name, connect token, and custom fields sent to the Connect Tax App. But you'll have to access the Connect UI to modify credentials and configure the templates.

When editing an existing Connect Tax Engine, access the advanced settings available exclusively in the new UI. To modify a previously created tax engine, follow these steps:

1.  In your Zuora tenant, navigate to by clicking your username at the top right.
2.  Click Setup Tax Engine and Tax Date.
3.  From the Tax Engines list, click Edit next to the tax engine you want to modify. The tax engine details will open with the new UI containing the Engine Name, Vendor, Environment, and Authentication details that you created.
4.  You can now create advanced settings as listed here:

    | Field | Description |
    | --- | --- |
    | Engine Name | The name of the engine you wish to use. |
    | Vendor | The name of the third-party vendor. |
    | Environment | The environment where the tax engine will be applied. |
    | Authentication Type | For Basic Auth, your tax vendor account credentials are your username and password.If Avalara Brazil is selected as the vendor, OAuth 2.0 is the default authentication type. Enter the client ID and client secret from your tax vendor. Refer to Avalara Brazil's documentation for authentication setup. |
    | Advanced Settings |  |
    | Tax Void Call Handling | The option to determine whether the external Vendor must be voided. The available options are:PassThrough - No call will be made to the vendor; however, the Invoice Cancel Post will be successful (as it says Pass Through)Enable - A call will be made to the vendor.Block - No call will be made to the vendor, and it will return blocked (i.e., Invoice Cancel Post wouldn't be successful). |
    | Netread Timeout | The duration of time is minutes before the timeout occurs. |
    | Request Headers | The option to add additional headers to your tax requests. While custom headers may not be frequently necessary, they prove beneficial in situations where authentication is required through firewalls or in other specific scenarios. |
    | Field Mappings | The option to retrieve data from the tax engine response and store it on the Taxation Item object. For more information on Flexible Field Mapping, see Flexible Tax Mapping. |
    | Custom Fields | The option to select existing custom fields for the tax engine. |
    | Company and Seller Information | The option to add company code, name, and address. |

5.  In the Request Template section, configure the template as required. Click Use Default Template to use the preconfigured template. The Request Template, in Text/XML or Application/JSON format, is where Zuora populates invoice information based on your configuration.
6.  Click Save after updating the settings to ensure the changes are saved.
