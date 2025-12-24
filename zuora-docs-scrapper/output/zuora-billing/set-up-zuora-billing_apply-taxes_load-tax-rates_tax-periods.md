---
title: "Tax periods"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/load-tax-rates/tax-periods"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:50.157Z"
---

# Tax periods

Learn how to manage tax periods, including setting effective dates and updating tax rates in Zuora.

When the first tax rate is loaded, the effective period is created with a default start date of the current date, and with no end date.

You can edit the periods by selecting .

If tax rates change, please click New Period to create a new tax period, and upload the appropriate tax rates to be used for that period.

## Update the tax period effective dates

When you update a tax rate and set a new period, Zuora will display a confirmation of the change. For example, if your previous tax rate had an effective period starting on 03/01/2012, with no end date, and you upload a rate with an effective period starting on 03/01/2012 and ending on 08/31/2012, Zuora will display the following message:

The Effective End Date of the Current period will be changed. Old value: 03/01/2012 - No End Date New Value: 03/01/2012 - 08/31/2012

In this example, based on the previous tax rate, all of the subscription rate plan charges that were created with a product which is taxed with this tax rate will be computed with the said tax given that the invoice date is starting from 03/01/2012. This tax rate also does not have an end date, so the subscription rate plan charges will be generated with invoices which are applied with the tax rate until this subscription's term has ended.

However, when updating the tax rate, the Effective Period will be modified with an End Date of 08/31/2012. New invoices with an invoice date starting from 09/01/2012 will not use this tax rate.

The Tax Rate will only be applied to invoices with an invoice date from 03/01/2012 - 08/31/2012. This tax rate will not be applied to invoices created outside of this time frame.
