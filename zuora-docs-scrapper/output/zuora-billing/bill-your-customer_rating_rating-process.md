---
title: "Rating process"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/rating-process"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:18.079Z"
---

# Rating process

The rating process involves calculating invoice amounts through initialization, charge processing, and output generation phases.

The rating process calculates the amounts on the invoices you send to your customers. It starts when a bill run is triggered and consists of three phases:

-   Initialization
-   Charge processing
-   Output generation

## 1\. Initialization

The initialization phase gathers the following information to process charges in a subscription:

-   Tenant and account information
-   Billing settings
-   Subscription charges
-   Usage records if a subscription rate plan has a usage charge

Tenant and account information are essential for determining the correct start and end dates of the billing period for a charge:

-   Bill cycle day
-   Timing and frequency of charges
-   Billing period alignment

Proration, or proportional division, of a charge will happen as a result of certain business actions mid-billing period. How you decide to handle proration will impact the amount you charge your customers in these scenarios.

-   Bill recurring charges for partial month (with monthly based billing periods)?
-   Bill recurring charges for partial week (with weekly based billing periods)?
-   Bill usage charges for partial month (with monthly based billing periods)?
-   Bill usage charges for partial week (with weekly based billing periods)?
-   When prorating a month, assume 30 days in a month or use actual days?
-   Prorate recurring charges for partial period?
-   When prorating periods greater than a month, prorate by month first, or by day?
-   Enable credit back for removing or canceling one time charges?
-   Credit for prorated discounts

If a subscription charge is based on usage, configure settings and rating options related to usage charges.

-   Usage-related settings:
    -   Include usage from child accounts when billing?
    -   Round and determine a price for usage records individually when rating usage charges?
    -   Customize units of measure
    -   Usage rounding rules
-   Usage rating
-   Usage rating by group
-   On-demand usage rating

## 2\. Charge processing

After collecting the necessary information in the initialization phase, all the charges in a subscription are ready to be processed.

The rating process handles the following charge models:

-   Per-unit
-   Flat fee
-   Discount
-   Volume
-   Tiered
-   Delivery Pricing
-   Overage
-   Tiered with overage
-   Overage with smoothing window

These charge models will have the following charge types:

-   One time charge
-   Recurring charge
-   Usage charge
-   Discount charge: You can create a discount charge to give your customers discounts. This is also included in the rating process.

All charges of a subscription are calculated one after another in a tight loop.

First, a charge processor is selected according to the charge type and charge model. If a charge is of the usage type, usages of the current billing period are picked up for calculation.

Then, the charge processor calculates the rating result for the current charge segment in the target billing period(s).

Next, rating begins to process discount charges if there are any. Discounts are implemented as if they are regular charges, but they cannot exist alone. Discounts have to be applied to non-discount charges.

## 3\. Output generation

After the charges are processed, chargeable events are produced and will be converted to invoice items. Besides chargeable events, the rating process also produces processed usages if the subscription contains usage charges. A processed usage represents a usage that applies to a charge with a rating amount.

Taken together, chargeable events and processed usages become the inputs for the invoicing process .

Use the Rating Information Page to see how the invoice amount is calculated.

## Rating Information page

The Rating Information page provides calculation details. Click the amount of an invoice item in the Amount column under the Invoice Details section on the invoice details pages.

The Rating Information page has the following limitations:

-   The calculation details are present only on the invoices that have been generated after this feature is enabled. You cannot obtain the calculation information on the invoices that have already been generated.
-   The calculation displayed on this page is before tax engine calculation. You can set the Amount as tax inclusive or exclusive.
-   The information is not provided for Canceled invoices.
-   For recurring charge calculation, the Rating Information does not support billing periods set to specific days.
-   Billing Schedule is not supported.
-   For usage charge calculation:
    -   The overage charge model is not supported.
    -   In terms of rating group options, only the Usage rating by billing period is supported.
    -   Rolling window is not supported.
    -   No usage details are displayed on the calculation page.
