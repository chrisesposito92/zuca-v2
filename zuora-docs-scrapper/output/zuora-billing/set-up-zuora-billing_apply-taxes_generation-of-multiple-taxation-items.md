---
title: "Generation of multiple taxation items"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/generation-of-multiple-taxation-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:00.487Z"
---

# Generation of multiple taxation items

Explains generation of multiple taxation items for invoice items spanning multiple tax rate periods using Zuora Tax, and configure billing rules for accurate tax calculations.

If the service period of an invoice item spans multiple tax rate periods, when you use the tax code of Zuora Tax for tax automation, Zuora supports the generation of one taxation item for each tax rate.

To use this feature, you have to set the When service period of an invoice item crosses multiple tax rate periods, it will generate: billing rule to Multiple Tax Items.

If you have the Invoice Settlement feature enabled, you can also generate multiple taxation items for credit or debit memo items spanning multiple tax rate periods.

Click your username at the top right and navigate to .

Note that your new configuration of the billing rule does not affect the invoices or memos that are generated earlier.

For example, imagine a scenario where:

-   A customer account only subscribes to one annual recurring charge with the fixed price of $12,000 and the tax-exclusive mode.

-   The charge effective start date is 2019-01-01; the charge effective end date is 2019-12-31.

-   An active Zuora Tax tax code involving two different tax rates is associated with the charge.

-   The first tax rate period is from 2019-01-01 to 2019-09-30, and the matched tax rate is 8%.

-   The second tax rate period is from 2019-10-01 to 2019-12-31, and the matched tax rate is 10%.


If this feature is enabled, an invoice containing one invoice item and two taxation items is generated for this account. Detailed information is as below.

-   Invoice item: The service period is from 2019-01-01 to 2019-12-31, and the amount is $12,000.

-   Taxation item 1: The tax date is 2019-01-01, and the tax amount is $720 ($9,000\*8%) for the invoice item billing period from 2019-01-01 to 2019-09-30.

-   Taxation item 2: The tax date is 2019-10-01, and the tax amount is $300 ($3,000\*10%) for the invoice item billing period from 2019-10-01 to 2019-12-31.


Note:

MultipleTaxItems are not supported for non-subscription invoice items.

## Rules for prorating taxable amount

In the generation of multiple taxation items, the taxable amount is basically prorated according to the defined billing rules .

-   For monthly-based billing period types (monthly, quarterly, and annually), the taxable amount is prorated based on the values of the "When prorating a month, assume 30 days in a month or use actual days? " and "When prorating periods greater than a month, prorate by month first, or by day? " billing rules.

-   For weekly-based billing period types (weekly and specific weeks), the taxable amount is prorated by the actual number of days in a period.

-   If the billing period is the subscription term, the taxable amount is prorated by the actual number of days in the subscription term.


Note:

The tax amount might be prorated according to the effective period of the corresponding product rate plan and that of tax rates if:

-   You have both this feature and Invoice Settlement enabled

-   Credit memos are created from a product rate plan charge.


## Tax date

The tax date is used to determine the specific tax rate period. If a tax date falls into a specific tax rate period, that tax rate period is active for tax calculation.

If you have this feature disabled, the invoice date is used as the tax date. After this feature is enabled, one taxation item is generated respectively for each tax rate period. Therefore, the start date of each partial service period is used as the tax date.

In the preceding scenario. the tax date is 2019-01-01 for the service period from 2019-01-01 to 2019-09-30, and 2019-10-01 for the service period from 2019-10-01 to 2019-12-31.

## Tax credit

If a charge has been processed and an invoice is generated, when this charge is removed, the charged amount will be credited and a credit back invoice item will be generated. Therefore, the corresponding tax amount will also be credited back.

In the preceding scenario, if the customer cancels the subscription on 2019-07-01 after being charged, one credit invoice item and two credit taxation items are generated.

-   Invoice item: The service period is from 2019-01-01 to 2019-12-31, and the amount is $-6,000.

-   Tax item 1: The tax date is 2019-07-01, and the tax amount is $-240 ($-3,000\*8%) for the invoice item billing period from 2019-07-01 to 2019-09-30.

-   Tax item 2: The tax date is 2019-10-01, and the tax amount is $-300 ($-3,000\*10%) for the invoice item billing period from 2019-10-01 to 2019-12-31.


## Tax discount

When you have this feature enabled, tax discounts will be applied to the whole service period of an invoice term instead of the discount charge service period.

Imagine that in the preceding scenario, a monthly discount charge with the discount percentage of 10% is applied to the annual charge. The total discount amount is $1,200 for the subscription. The tax discount is as follows:

-   The tax discount amount is $72 ($9,00\*8%) for the invoice item billing period from 2019-01-01 to 2019-09-30.

-   The tax discount amount is $30 ($3,00\*10%) for the invoice item billing period from 2019-10-01 to 2019-12-31.


## Period start date, end date, and taxable amount for multiple taxation items

The following fields within TaxationItem, CreditTaxationItem, and DebitTaxationItem in Data Query facilitate the display of tax rate and tax rate period details directly on the invoice PDF:

-   PeriodStartDate - Displays the tax rate and the tax rate start date directly on the invoice PDF for all tax engines.

-   PeriodEndDate - Displays the tax rate and the tax rate end date directly on the invoice PDF for all tax engines.

-   TaxableAmount - Displays the taxable amount only when the Z-Tax engine is used and loses relevance when alternative tax engines are employed.


With these fields, you can now ensure accurate representation of separate rates for distinct periods, particularly when an invoice item's service period extends across multiple tax rate periods.

These fields on TaxationItem are always the same as the ones on the InvoiceItem, provided you do not use the Generation of multiple taxation items feature. If you use the feature, then configure the rule as Multiple Tax Items. This configuration ensures precise tax calculation when an invoice item's service period overlaps multiple tax rate periods.

Example:

Suppose an invoice item has an amount of $100 with a service period from 1/1/2023 to 12/31/2024. If the tax rate changes from 6% to 7% on 1/1/2024, two taxation items are generated:

-   Taxation Item 1: Tax amount = $3.00, Tax rate = 6%, Period start = 1/1/2023, Period end = 12/31/2023, Taxable amount = $50.

-   Taxation Item 2: Tax amount = $3.50, Tax rate = 7%, Period start = 1/1/2024, Period end = 12/31/2024, Taxable amount = $50.


Also, the PeriodStartDate and PeriodEndDate fields are integrated into the HTML template as well. For more information, see HTML Templates .
