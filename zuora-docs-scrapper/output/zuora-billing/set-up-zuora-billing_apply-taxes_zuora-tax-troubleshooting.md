---
title: "Zuora tax troubleshooting"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/zuora-tax-troubleshooting"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:02.930Z"
---

# Zuora tax troubleshooting

This topic provides troubleshooting information for Zuora Tax, including solutions to common problems.

## I need to identify which tax rate was applied

The tax rates are available in the Tax Rates Import file. You can use this to identify which taxes were applied.

If there are multiple taxes and it is not possible to identify which tax was applied, you can enter troubleshooting data in the Tax Rate Description, Location Code, and/or Jurisdiction that is associated with those taxes. When you run billing again, you should be able to identify the specific tax used by reviewing these fields in the Invoice Details Extract file.

## I need to know which tax rate will be used

The order of the Tax Rate Load file will be preserved when importing the tax rules into Zuora Tax. If multiple tax rate rows in the tax rule import file match, the first row in the file that matches will be applied. Verify that the data is loaded in the correct order by comparing the sequential Tax Order field with the records in the import file. If the order is different, contact Zuora Global Support for help.

## The incorrect tax rate was applied

Identify which tax rate was applied, then review matching rules with the Sold To address.

If the fields in the tax rate match the corresponding address filed for the Sold To Contact, contact Zuora Global Support for help.

## No taxes were applied

1.  Verify that the charge was taxable
2.  Verify that the tax code was active and has tax rates associated with the tax code.
3.  Verify that the tax code was correctly applied to products. See Associate Tax Codes to Product Charges for more information.
4.  Review the Invoice Details Extract file. For the charge, there should be `<nomatch>` in the Tax Jurisdiction field if Zuora Tax did not match a tax rate.
5.  If `<nomatch>` is found, then the matching process did not match the address to the tax rate.
6.  If the charge is taxable with a valid tax code and `<nomatch>` was not found in the Invoice Details Extract file, contact Zuora Global Support .

## The CSV file is incorrect: The column is different from the file format

Excel might have incorrectly converted the file to a CSV file (comma-separated values). Open the file using a text editor (such as WordPad) and verify that the commas line up with the columns in the Tax Rate Upload file.

## Draft amendment previews in the Zuora application always show zero taxes

This is a known limitation. Taxes on previews of draft amendments in the Zuora application are incorrectly displayed as zero. This issue only occurs when the draft amendment preview is viewed in the Zuora application. Calls to the amend API with the preview option enabled do not have this issue, and taxes are returned correctly.

## Draft subscription previews in the Zuora application show incorrect taxes

This is a known limitation. Previews of draft subscriptions in the Zuora application show incorrect tax values when the following conditions are true:

-   The subscription contains at least one taxable rate plan charge that uses the inclusive tax mode.

-   The draft subscription preview is viewed in the Zuora application.


Calls to the subscribe API with the preview option enabled do not have this issue, and taxes are returned correctly.
