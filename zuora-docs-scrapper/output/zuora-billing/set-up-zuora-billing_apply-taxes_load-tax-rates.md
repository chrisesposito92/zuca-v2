---
title: "Load tax rates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/load-tax-rates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:39.905Z"
---

# Load tax rates

Learn how to upload tax rates as CSV files for each tax code, allowing for specialized taxation and handling large imports efficiently.

You can upload one tax rate load as a CSV file for each tax code. Most Zuora Billing customers will have a small number of tax codes, and this functionality allows greater flexibility to have specialized taxation where one charge can trigger a state or country specific tax.

Note:

To handle large tax rate imports, split the tax rates into smaller files and append them as needed. Due to file size limitations and the UI dependency for tax rate uploads, there is an upper limit for uploads. While this is the current system, future updates will aim to support larger tax-rate imports.

The tax rate Import File has two main sections: matching fields and tax rates.
