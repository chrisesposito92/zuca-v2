---
title: "Display tax information on invoices"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/display-tax-information-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:47.238Z"
---

# Display tax information on invoices

This article explains how to display tax information on invoices using Zuora Billing, including summarizing taxes by charge, displaying individual tax details, and understanding tax exemption settings.

When taxes are displayed by charge, Zuora Billing will summarize all associated taxes to that charge. If you use Zuora Tax , you can have a maximum of three tax rate types per item. If you use configurable Tax apps , you can have more than three different taxes on a single charge. For example, if you have three different taxes that are displayed on the invoice PDF per charge, the tax amount associated with the charge is the summary of these three taxes. Please note that Zuora Billing also provides a listing of each individual tax that can be displayed in the Tax Details section of the invoice.

The standard Invoice PDF template includes three possibilities to display taxes. The simplest display is a total taxation field for the invoice. Zuora Billing will also provide a subtotal of all taxes and group them by Tax Rate, Tax Rate Type, and Tax Name.

![TaxSummaryExample.png](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/billing/additional_resources_on_taxes/_media/TaxSummaryExample.png)

Additionally, it is possible to display each tax associated with the invoice.

![TaxDetailsExample.png](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/billing/additional_resources_on_taxes/_media/TaxDetailsExample.png)

Note:

You cannot edit taxes manually on a draft invoice.

The tax information on invoice PDF is based on the tax exemption settings:

-   If tax exemption is disabled, all the tax items are displayed on the invoice PDF even if the tax amount is 0.

-   If tax exemption is enabled and the tax amount of a tax item is not 0, the tax item is displayed on the invoice PDF. If the tax amount is 0, the tax item is not displayed on the invoice PDF.
