---
title: "Add a tax code for Avalara"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup/add-a-tax-code-for-avalara"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:51.094Z"
---

# Add a tax code for Avalara

Learn how to set up a tax code using the Avalara tax engine in Zuora.

This feature is in Controlled Release. Submit a request at

[Zuora Global Support](http://support.zuora.com/)

to get this feature enabled for your tenant.

To set up a tax code that uses the Avalara tax engine:

1.  Click your username at the top right and navigate to .
2.  Click Setup Taxation Codes.
3.  Click Add New Tax Code.
4.  Enter the following information in the Basic Information panel:
    1.  Specify a name in the Tax Code Name field to identify the tax code.
        This field is used to map to the product charge, for example, Freight service.

    2.  Select the name of the Avalara tax engine from the Tax Engine list.
        For example, Zuora SE. This determines which Avalara engine will be used to calculate tax rates for this tax code. See [Set Up Connections to Avalara](/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/set-up-a-connection-to-avalara)

    3.  Select the Avalara Company Code from the list.
        This is the unique code that identifies the company in the AvaTax account. See [Set Up Connections to Avalara](/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/set-up-a-connection-to-avalara) for more information.

    4.  Specify the Avalara Tax Code in this field.
        This is a unique label to group items (products, services, or charges) together as defined in your Avalara Tax account. See Configure Tax Codes in Zuora Billing for Avalara for more information.

    5.  Enter a description in the Description field.

        The description is available in the following documents:

        -   Invoice PDF
        -   Invoice Details Export
        -   Credit Taxation Item Details Export (Limited Availability)
        -   Debit Taxation Item Details Export (Limited Availability)

5.  Click Save.

The new tax code is now in Active status.
