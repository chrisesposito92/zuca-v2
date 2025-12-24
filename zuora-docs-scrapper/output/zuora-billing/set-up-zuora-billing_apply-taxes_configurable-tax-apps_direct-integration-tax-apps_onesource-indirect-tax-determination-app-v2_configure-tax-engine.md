---
title: "Configure Tax Engine"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/onesource-indirect-tax-determination-app-v2/configure-tax-engine"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:23.550Z"
---

# Configure Tax Engine

Learn how to configure the tax engine in the billing settings, including setting up a new tax engine, entering company and seller information, and adjusting advanced settings.

1.  Navigate to .
2.  Click Setup New Tax Engine and select ONESOURCE Indirect Tax Determination V2 from the dropdown list.
3.  Toggle Use Test Environment if you want Billing to use the test service URL. This enables you to test tax calculations during your Billing setup.
4.  Enter the following details:
    1.  Engine Name - The name of the engine.
    2.  Authentication Type - OAuth 2.0 is the default authentication type. Enter the client ID and client secret from your tax vendor.
5.  Enter the following in the Company and Seller Information section:
    1.  Company Code - A unique identifier for the company in the AvaTax system, used to link billing information to the appropriate business entity. This field is critical for ensuring the correct company is referenced in tax calculations.
    2.  Origin Address - The address where transactions originate from, which is essential for accurate tax calculation. The tax rate can vary depending on the origin location, as different jurisdictions may have different tax rules. This field helps ensure that the correct tax rates are applied based on where the transaction begins.
    3.  Add Company \- The option to add new company details.
6.  Select the required authentication type from the drop-down list.
7.  Toggle to enable Advanced Settings and adjust the Settings as needed.
8.  Click Save .
9.  Toggle to enable Advanced Settings and adjust the Settings as needed.

    | Field | Description |
    | --- | --- |
    | Request Template | Configure the template as required. Click Use Default Template to use the preconfigured template.Zuora uses the Request Template in Text/XML or Application/JSON format to populate invoice information according to your setup. Templates are rendered dynamically using the Liquid Template Language , available in Text/XML or Application/JSON format.Ensure the utilization of Context Object information while creating a tax template.Note:transaction_items is no longer supported as a context object for template rendering in V2; instead, the default document_items must be used. In V1, transaction_items were specifically tailored to exclude discount charges from being sent to Taxamo as negative transaction lines. In V2, however, we now manage discount and credit items as negative transaction lines by default, so transaction_items are no longer necessary. |
    | Custom Fields | Choose from the available custom fields from the tax engine. |
    | Response Field Mapping: Field Mappings | The option to retrieve data from the tax engine response and store it on the Taxation Item object. For more information on Flexible Field Mapping, see Flexible Tax Mapping . |
    | Network : TimeoutNet Read Timeout | The timeout period for tax requests. The available options are 1 minute, 2 minutes, 5 minutes, and 10 minutes. |
    | Request Headers | Additional headers to tax requests are beneficial in scenarios requiring authentication through firewalls or other specific cases. |

    You can also enter the following in the Standard section of Request Templates:

    Default Standard Template { "callingSystemNumber": "SAP1000", "hostSystem": "VGD", "companyRole": "S", "externalCompanyId": "DPPZUORADEV\_1000", "processingOptions": { "chargeIncludedInAmounts": false, "chargeResponse": "SeparateAuthority", "responseSummary": "FullDetails", "documentAmountType": "GrossAmount" }, "documents": \[ { "documentType": "Sales Invoice", "documentNumber": "{{document\["invoiceNumber"\]}}", "currencyCode": "{{document\["currency"\]}}", "addresses": \[ { "type": "shipFrom", "country": "{{seller\["country"\]}}", "region": "{{seller\["state"\]}}", "city": "{{seller\["city"\]}}", "postcode": "{{seller\["zipCode"\]}}" }, { "type": "shipTo", "country": "{{customer\["country"\]}}", "region": "{{customer\["state"\]}}", "city": "{{customer\["city"\]}}", "postcode": "{{customer\["zipCode"\]}}" } \], "documentDate": "{{document\["invoiceDate"\]}}", "lines": \[ {% for document\_item in document\_items %} {% if forloop.first != true %},{% endif %} { "lineNumber": "{{document\_item\["id"\]}}", "amount": "{{document\_item\["totalAmount"\]}}", "productCode": "{{document\_item\["productName"\]}}" } {% endfor %} \] } \] }

    You can refer to [ONESOURCE Indirect Tax Calculation REST API](https://developers.thomsonreuters.com/pages/api-reference/de8cfb95-00c1-4158-948d-b86606c19409#Overview) to understand the request payload fields for tax calculation API.

10.  < Optional > Enter the following to void the default template:

     Note: Refer to

     [ONESOURCE Indirect Tax Calculation REST API](https://developers.thomsonreuters.com/pages/api-reference/de8cfb95-00c1-4158-948d-b86606c19409#Overview)

     to understand the request payload fields for reverse or void tax API.

     { "callingSystemNumber": "SAP1000", "companyRole": "S", "documentNumber": "{{document\["invoiceNumber"\]}}", "externalCompanyId": "DPPZUORADEV\_2000", "hostSystem": "VGD", "documentDate": "{{document\["documentDate"\]}}" }

11.  Click Save .
