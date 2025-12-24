---
title: "Tax engine mapping formula"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-engine-mapping-formula"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:06.438Z"
---

# Tax engine mapping formula

This topic covers information on configuration of multiple tax engines using mapping formulas to handle tax calculations for different regions and countries.

When you set up tax codes and choose to use Multiple Tax Engines, you have the flexibility to select Multiple Tax Engines based on the mapping formula you have set up. For example, you can define a mapping formula where the Connect Tax Engine for the U.S. will handle tax calculations for your customers in the U.S., and the Connect Tax Engine for India will handle tax calculations for your customers in India.

## Define the mapping formula

The mapping formula is constructed using the Liquid control flow tags (IF/ELSIF/ELSE/ENDIF). To define a mapping formula, you can use the following standard fields and custom fields on the `account` and `soldToContact` objects.

| account |  |
| --- | --- |
| Field name | Notes |
| batch | Any system-defined batch ( Batch1 - Batch50 ) or customized batch name . |
| billCycleDay | Any activated system-defined bill cycle day ( 1 - 31 ). |
| currency | 3-letter currency codes . |
| companyCode | A unique code that identifies a company account in a tax vendor, such as Avalara. |
| Custom fields | See Manage custom fields for details. |

| soldToContact |  |
| --- | --- |
| Field name | Notes |
| country | Valid country names in Zuora. For a complete list of supported country names, see View countries or regions . |
| state | Valid subregion names in Zuora. For a complete list of subregions of a specific country or region, see View subregions . |
| city | Specifies the city in the contact's address. |

Note:

-   Advanced custom fields (custom fields created using Object Manage) can be used with the Tax Engine Mapping Formula.

-   When you define the mapping formula, both the Multiple Tax Engines' names and the company codes associated with the Connect Tax Engines are required. To get the tax engine names and use the names in the formula, see the following examples. Note that Zuora Tax does not need a company code associated with it.

-   When the invoice owner and subscription owner are different for an invoice item, Multiple Tax Engines use the invoice owner's Account and Sold-to Contact information.


## Example 1

Assuming that you use Zuora Tax in Japan, and use Direct Avalara Integration Tax Engine in the US and other countries. Create a new tax code for Zuora Tax first and then edit it in the tax code details page. For more information about how to add a tax code for Multiple Tax Engines, see Set up tax codes .

An example of the mapping formula is as follows. You can click Edit in the Basic Information panel, and fill in the Mapping formula tab with the following example:

{% if account.soldToContact.country == 'Japan' %} Zuora Tax {% elsif account.soldToContact.country == 'United States' %} Avalara Direct Integration Tax Engine | Company\_Code\_1 | External\_Tax\_Code\_1 {% else %} Avalara Direct Integration Tax Engine | Company\_Code\_2 | External\_Tax\_Code\_2 {% endif %}

The `Avalara Direct Integration Tax Engine` in the formula is the tax engine name that you fill in the Name field when you first set up the engine for direct Avalara integration. The `Zuora Tax` in the formula is the tax engine name for Zuora Tax.

Note: The `Company_Code` in the example refers to the code configured when using the Direct Avalara Integration Tax Engine . The `External_Tax_Code` represents the Avalara Tax Code set in Zuora Billing, which should match the corresponding value in Avalara’s system.

The formula defines how to select Multiple Tax Engines based on the country name of the Sold To Contact, a key contact for customer accounts :

-   When the country of the Sold To Contact of the customer account is Japan, select Zuora Tax for tax calculation.

-   When the country of the Sold To Contact of the customer account is the US, select Avalara Direct Integration Tax Engine for tax calculation.

-   By default, select Avalara Direct Integration Tax Engine for tax calculation.


## Example 2

Based on Example 1 , assuming that you use Direct Avalara Integration Tax Engine in the US and use Zuora tax in Japan, Germany, Austria, Switzerland, or other countries.

An example of the mapping formula is as follows. You can click Edit in Basic Information panel, and fill in the Mapping formula tab with the following example:

{% if account.soldToContact.country == 'United States' %} Avalara Direct Integration Tax Engine | Company\_Code | External\_Tax\_Code {% else %} Zuora Tax {% endif %}

The `Avalara Direct Integration Tax Engine` in the formula is the tax engine name that you fill in the Name field when you first set up the engine for the corresponding tax apps, in this case it is Vertex. The `Zuora Tax` in the formula is the tax engine name for Zuora Tax.

Note that the `External_Tax_Code` in the example is the Avalara Tax Code that is configured in Zuora Billing, whose value is expected to match with that defined in Avalara systems.

The formula defines how to select Multiple Tax Engines based on the country name of the Sold To Contact, a key contact for customer accounts :

-   When the country of the Sold To Contact of the customer account is the US, select the Avalara Direct Integration Tax Engine for tax calculation.

-   By default, select Zuora Tax for tax calculation.


## Example 3

Assuming that you use the Vertex O Series tax connector app in the US and use Zuora tax in Japan, Germany, Austria, Switzerland, or other countries. Create a new tax code for Zuora Tax first and then edit it in the tax code details page. For more information about how to add a tax code for Multiple Tax Engines, see Set up tax codes .

An example of the mapping formula is as follows. You can click Edit in Basic Information panel, and fill in the Mapping formula tab with the following example:

{% if account.soldToContact.country == 'United States' %} Vertex\_TaxConnector\_engine\_name | Company\_Code {% else %} Zuora Tax {% endif %}

The `Vertex_TaxConnector_engine_name` in the formula is the tax engine name that you fill in the Name field when you first set up the engine for the corresponding tax apps, in this case it is Vertex. The `Zuora Tax` in the formula is the tax engine name for Zuora Tax.

Note that the `Company_Code` in the example is the code that is configured when you set up Connect Tax Engines .

The formula defines how to select Multiple Tax Engines based on the country name of the Sold To Contact, a key contact for customer accounts :

-   When the country of the Sold To Contact of the customer account is the US, select the Vertex\_TaxConnector\_engine\_name for tax calculation.

-   By default, select Zuora Tax for tax calculation.


## Example 4

Based on Example 3 , assuming that you have two company codes separately for the UK and the US.

An example of the mapping formula is as follows. You can click Edit in Basic Information panel, and fill in the Mapping formula tab with the following example:

{% if account.soldToContact.country == 'United States' %} Vertex\_TaxConnector\_engine\_name | Company\_Code\_US {% elsif account.soldToContact.country == 'United Kingdom' %} Vertex\_TaxConnector\_engine\_name | Company\_Code\_UK {% else %} Zuora Tax {% endif %}

The `Vertex_TaxConnector_engine_name` in the formula is the tax engine name that you fill in the Name field when you first set up the engine for the corresponding tax apps, in this case it is Vertex. The `Zuora Tax` in the formula is the tax engine name for Zuora Tax.

The formula defines how to select Multiple Tax Engines based on the country name of the Sold To Contact, a key contact for customer accounts :

-   When the country of the Sold To Contact of the customer account is the UK or the US, select the corresponding Vertex\_TaxConnector\_engine\_name with different company codes for tax calculation.

-   By default, select Zuora Tax for tax calculation.


## Example 5

Assuming that you have business in multiple countries and regions, and you use multiple tax engines that integrate with tax vendors through Configurable tax apps . For example, you have acquired three companies in the supported regions, and those companies have separate contracts with Vertex.

Create a new tax code for Connect Tax Engine with the Use Multiple Connect Tax Engines checkbox selected. Alternatively, if you have an existing tax code for Connect Tax Engine, enable Use Multiple Connect Tax Engines . For more information about how to add a tax code for Multiple Tax Engines, see Set up tax codes .

You can fill in the Mapping formula tab with the following example of the mapping formula:

{% if account.region\_\_c == 'North America' %} Vertex\_TaxConnect\_Engine\_1 | Company\_Code\_1 {% elsif account.region\_\_c == 'EMEA' %} Vertex\_TaxConnect\_Engine\_2 | Company\_Code\_2 {% elsif account.region\_\_c == 'LATAM' %} Vertex\_TaxConnect\_Engine\_3 | Company\_Code\_3 {% else %} TaxConnect\_Engine\_Default | Company\_Code\_Default {% endif %}

The `Vertex_TaxConnect_Engine_1` in the formula is the tax engine name that you fill in the Name field when you first set up the engine for the corresponding tax apps, in this case it is Vertex. Likewise, `Vertex_TaxConnect_Engine_2` , `Vertex_TaxConnect_Engine_3` , and `TaxConnect_Engine_` `Default` in the formula are the tax engine names that you fill in the Name field when you first set up the engine for the corresponding tax apps.

The preceding example illustrates that you can select Connect Tax Engines based on custom fields on Account.

Zuora provides more examples for you to copy and customize. To use these examples, refer to the Example tab after selecting the Use Multiple Connect Tax Engines checkbox when setting up tax codes.

## Use the mapping formula

After setting up the tax formula, you need to associate the tax code to a product rate plan charge and set the tax mode . The system looks for tax engines through the tax code associated to the taxable product when calculating the tax amount on a billing document, such as invoice, credit memo, or debit memo.
