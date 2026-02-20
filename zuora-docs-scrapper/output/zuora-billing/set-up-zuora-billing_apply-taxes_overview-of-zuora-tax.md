---
title: "Overview of Zuora Tax"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/overview-of-zuora-tax"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:50.104Z"
---

# Overview of Zuora Tax

This topic covers information about configure and manage tax rates in Zuora Billing, including applying multiple taxes, displaying taxes in billing documents, and maintaining tax rate updates.

With our taxation module, you have the ability to apply tax rates for addresses with matching performed at any level from country, state, county, city, zip, or a string value for the tax region. Additionally, Zuora Billing allows you to apply up to three independent taxes to a single charge, and each tax can have a type of Flat Fee or Percentage.

Note:

Currently, Zuora does not support calculating taxes for negative charges if the tax type is Flat Fee.

You can display taxes in billing documents (invoices , credit and debit memos ). The Credit and Debit Memos feature is available if you enable the Invoice Settlement feature.

At a high level, configuring your taxes using this module involves the following steps:

-   Gathering information: You must gather the tax rules and rates that will be applied to your products.
-   Configuring Tax Codes in Zuora Billing: Loading your tax rates. Based on the information gathered, create one or more Tax Rate Load CSV files and load the files into Zuora Billing. You can upload one Tax Rate Load CSV file per Tax Code.
-   Associate Tax Codes to Product Charges: You will need to set the Taxable flag on the charge in order for it to display the Tax Codes, after which you will choose the applicable Tax Code to use for that product.
-   Modify your billing document template to display taxes: Zuora's standard invoices includes three ways to display taxes. You can choose to display taxes by total, subtotal (and have it grouped by Tax Rate, Tax Rate Type and Tax Name), or you can choose to individually display each tax associated with the invoices.

Once you have configured your taxes, you may need to create tax exemptions, specifying for each customer account whether they are tax-exempt or not tax-exempt.

Additionally, you must enter the required ship-to address information in order to calculate taxes based on the regions. Zuora will accurately calculate tax on each invoice based on your configuration above. If you need to update your tax rates, you may upload new tax rates at any time.

## How do I keep my tax rates updated?

Tax rates are the percentage or fixed amount values used to apply tax. These rates can change on a monthly basis in the United States (US), while international tax rates (such as VAT, PST, or GST) tend to change less frequently than in the US. Tax rates in Zuora are the amounts that you would display on the invoices, and these are not the remittance amounts that you may need to pay for the various taxing authorities. As an example, in California, you may apply sales tax of 8.75%. The sales tax of 8.75% is a tax rate. This tax rate is composed of various taxes that you may need to remit (for example, California state tax, city tax, county tax, special assessments). Zuora Taxation Module has the ability to apply taxes at any level ranging from city/county combinations, zip code, country, state, county, and geocode. Any combination of values on the Zuora Sold to Contact can be used to drive taxation.

Zuora has extensive effective dating of the tax rates so you can apply different tax rates by time period. You can preload tax rates based on a specific effective date. This solution will describe the options you have to maintain these tax rates. If tax rates change, you can follow the instructions in the Tax Periods section to update the tax rates loaded in Zuora.

If your business sells to countries with simple taxes, like European VAT as an example, you have the option to maintain these taxes yourself as these taxes change somewhat rarely. Also, Zuora Tax has the ability to apply tax rate changes by date, so you can input the changes in tax rates well in advance of the change.

If your business is just starting out and you are operating from a single location (nexus) selling primarily to a small region, you have the option to maintain the tax rates yourself.

In the US, the volume of tax rate changes is significant, so it is a best practice to rely on a third-party provider that provides tax rates.

Zuora Tax was designed to be open and flexible so you can use any tax rate provider you use as your corporate standard. So, if you are using Taxware or CCH or any other provider, you can use those rates with Zuora. The input format for Zuora Tax is straightforward, so defining the tax rate mapping from any source is a one time task that can be re-used as regularly as you need.

If you do not have a corporate standard for your tax rates, you may wish to take advantage of our [integration with third-party tax engine Avalara](/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/overview-of-direct-avalara-integration) or use our [configurable Tax app](/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/overview-of-tax-apps).
