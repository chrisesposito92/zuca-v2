---
title: "1. Configure templates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/cch-suretax-connector-app/configure-the-cch-suretax-connector-app/1.-configure-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:07:46.970Z"
---

# 1\. Configure templates

Learn how to configure dynamic request templates in Zuora using the Liquid Template Language, with options for Standard and taxVoid templates.

The Dynamic Request Template is the body of the request where Zuora populates invoice information that can be configured based on your needs. Templates are dynamically rendered using the [Liquid Template Language](https://help.shopify.com/en/themes/liquid/basics) and are provided in the Text/XML or Application/JSON format.

Perform the following steps to configure a dynamic request template:

1.  Launch the created Tax instance and click the TEMPLATE CONFIGURATION tab.
2.  Select the tax engine for which you want to configure templates from the Tax Engine dropdown list.
3.  Select the tab for the template (Standard or taxVoid) you want to configure.

    Zuora offers two templates: the Standard template and the taxVoid template, with only the Standard template being mandatory. Configuration options for tax systems vary, and templates should be tailored to required information. They can include additional fields beyond those in the request. Zuora provides default Standard templates in SOAP and REST formats. Both SOAP API and REST API are supported. For failed payments requiring a rollback of the Subscribe call and invoice deletion, a taxVoid template is necessary to void the invoice and associated tax records from the tax vendor's system. Refer to your tax vendor's API documentation or contact support for further details on field formatting. For SureTax taxVoid templates, see [SureTax Templates](/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/cch-suretax-connector-app/configure-the-cch-suretax-connector-app/1.-configure-templates/suretax-templates).

4.  Add a new template or modify the default template in the text box. To view all available fields and corresponding values that can be used in the template:
5.  When you complete the configuration, click ![](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/billing/configurable_tax_apps/_media/configure_icon.png)
    and then select Preview Template to preview the configured template. If you want to start over, you can click the Configure icon and select Revert Template to Default.
6.  Click Save Both Template below the text box to save the template configurations.

    Note:

    Notes on building the templates:

    -   If you include

        `lineNumber` in the standard template, it should be a sequential number starting from 1. As a best practice, it is recommended not to use this field in the template.
    -   The taxVoid template currently only supports the

        `id`, `transactionId`, `taxCompanyCode` and `invoiceNumber` fields on the document object.
