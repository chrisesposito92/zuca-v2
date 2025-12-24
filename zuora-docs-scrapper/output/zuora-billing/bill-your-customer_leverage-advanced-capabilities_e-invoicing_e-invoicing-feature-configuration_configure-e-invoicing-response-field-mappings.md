---
title: "Configure e-invoicing response field mappings"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-response-field-mappings"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:16.230Z"
---

# Configure e-invoicing response field mappings

Describes the prerequisites and procedure of configuring e-invoicing response field mappings for the Sovos or Avalara service provider.

Before configuring the response field mappings, you must complete the following prerequisites:

-   Get an XML-formatted sample of a particular country from the e-invoicing service provider:

    -   For the Sovos service provider, it is an XML response payload returned by Sovos.

    -   For the Avalara service provider, it is an XML file returned by the tax authority.

-   Get familiar with the field path format. For more information, see XPath syntax for e-invoicing response field mappings .


For more information about e-invoicing response field mapping, see the following articles:

-   E-invoicing response field mapping for Sovos

-   E-invoicing response field mapping for Avalara


To configure response field mappings, perform the following steps:

1.  Click your avatar in the upper right and click .
2.  On the Billing Settings page, click E-Invoice .
3.  On the E-Invoice Settings page, perform one of the following operations:

    -   If you want to configure response field mappings for a new business region, click \+ Add in the Business Regions section.

    -   If you want to configure response field mappings for an existing business region, locate the business region in the Business Regions section and then click the Edit icon.


4.  In the displayed Add Business Region dialog, click \+ Add Field Mapping in the Response Mapping section.

    You can configure response field mappings only if you configure the following settings:

    -   Specify Sovos or Avalara as the service provider.

    -   Specify a country that is not pre-integrated with Sovos or any country for Avalara. For pre-integrated countries for Sovos , the default response mappings have been configured and cannot be changed. For more information, see Manage country-specific configurations .


5.  Complete the following information:

    -   Field Name : Select a field name from the list. This is the name of the mapped field on the EInvoiceData object. For more information, see Supported response fields of Sovos and Supported response fields of Avalara .

    -   Field Path : Refer to the XML-formatted sample provided by the e-invoicing service provider and specify the field path of an XML node. The format of this field must comply with the XML Path Language (XPath) syntax. For more information, see XPath syntax for e-invoicing response field mappings .


    Note:

    When the e-invoice file status of a billing document is Success, you can retrieve the e-invoicing response data stored in the EInvoiceData object.

    For more information, see Retrieve e-invoice results .
