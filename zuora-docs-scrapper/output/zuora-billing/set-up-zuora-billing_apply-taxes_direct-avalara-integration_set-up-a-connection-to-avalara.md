---
title: "Set up a connection to Avalara"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/set-up-a-connection-to-avalara"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:16.605Z"
---

# Set up a connection to Avalara

Learn how to set up a connection to Avalara, including necessary credentials and configuration steps, to ensure seamless integration with Zuora.

Before you begin the setup process, you should have the following information:

-   Avalara Account Number: This is a 10-digit number used to authenticate the API call to Avalara. It is not the Avatax Admin Console user name. You can find your Account Number at the top right of the window when you log in to the AvaTax Admin Console .
-   Avalara License Key: This is a 13-character or 16-character string used to authenticate the API call to Avalara. If you ever reset your license key, you must update it in Zuora too, or else calls to Avalara will fail. See License keys for more information on how to find or reset your license key.
-   Avalara User Name and Password: These are the credentials you use to log in to the AvaTax Admin Console . This user must have the correct permissions required, for example, Account Admin, in order for the Zuora/Avalara integration to function correctly. See the Avalara documentation for detailed information on user permissions.
    Note: To avoid duplicate records in Avalara, you must use different Avalara credentials for your Zuora Production and API Sandbox environments. For instance, invoices with the same invoice number in Zuora Production and API Sandbox map to the same document in Avalara.

-   Company Code: This is a unique code that identifies the company in the AvaTax account where the document should be posted. The maximum length allowed is 50 characters. You must have at least one of these for calls to Avalara to succeed. While the majority of users only need one Company Code, you can use multiple Company Codes in Zuora. Currently, up to 40 Company Codes defined in Avalara can be used for integration between Zuora and Avalara. Every Company Code defined in Avalara and used to post billing documents (invoices, credit, and debit memos) must be configured in Zuora. See the Company Code Identification for more information.

Note:

If an account has a Tax Company Code, that company code will be sent to Avalara instead of the one configured in the Tax Engine, potentially resulting in an error such as: The Zuora GetTax call to Avalara returned the following error(s): Company not found. Verify the CompanyCode. For example, if the company code in the Avalara tax engine is DEFAULT and the account's Tax Company Code is ABCD , then ABCD will be sent to Avalara instead of DEFAULT .

You must ensure that the account’s Company Code matches the one configured in the tax engine to avoid such errors.

-   Company Id: This is a unique identifier for the company in the Avalara database. It is a 6-digit number in Avalara production but could be a 7-digit number in the Avalara sandbox. To find your company ID, log in to the AvaTax Admin Console . Within your AvaTax account, click the Settings tab and select Company details . The Company ID can be found in the URL. You can confirm your Company ID with Avalara Support before reaching out to the Zuora team.

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at Zuora Global Support .

You can only create an Avalara tax engine from the Zuora UI. There is no API support for creating tax engines or modifying connection details. To set up Avalara as a new tax engine in Zuora, perform the following steps:

1.  Click your user name at the top right and navigate to .
2.  Click Setup Tax Engine and Tax Date.
3.  Click Setup New Tax Engine and select Avalara from the list.
4.  Toggle Use Test Environment if you want Billing to use the test service URL. This enables you to test tax calculations during your Billing setup.
5.  Specify the basic information for the new tax engine:
    1.  Enter a name for your new tax engine in the Engine Name field.
    2.  Select the authentication type required.
    3.  Configure the other details as required.
6.  Enter the following in the Company and Seller Information section:
    1.  Company Code - A unique identifier for the company in the AvaTax system, used to link billing information to the appropriate business entity. This field is critical for ensuring the correct company is referenced in tax calculations.
    2.  Company ID \- A system-generated, unique identifier assigned by AvaTax when a company is created.
    3.  Origin Address - The address where transactions originate from, which is essential for accurate tax calculation. The tax rate can vary depending on the origin location, as different jurisdictions may have different tax rules. This field helps ensure that the correct tax rates are applied based on where the transaction begins.
    4.  Add Company \- The option to add new company details.
7.  Toggle to enable Advanced Settings . Use this option to customize request templates, add custom request headers, and map Zuora fields to tax vendor-specific fields to better align with your specific business needs. For information on these settings, click here .
8.  Click Save .
