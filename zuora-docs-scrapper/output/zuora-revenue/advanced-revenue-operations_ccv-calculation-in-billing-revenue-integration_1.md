---
title: "CCV calculation in Billing - Revenue Integration"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/ccv-calculation-in-billing---revenue-integration_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:28.405Z"
---

# CCV calculation in Billing - Revenue Integration

Understand how Charge Contractual Value (CCV) is calculated in Billing - Revenue Integration, including scenarios where CCV may differ from actual invoice amounts and the factors influencing its calculation.

Charge contractual value (CCV) is the estimated cumulative sum of all invoiced or to-be-invoiced charges against a rate plan charge upon booking, inclusive of any proration. CCV is generated when a subscription is created, and it can be updated during the subscription lifecycle.

In the following scenarios, the CCV amount might be different from the actual invoice amount:

-   Remove or cancel one-time charges without enabling credit back.

-   Cancel regular charges and percentage discounts in a period that has been billed.

-   Change the Bill Cycle Day (BCD) of customer accounts.

-   Add subscription-level discounts after the regular charge is billed.

-   Change billing rule settings.

-   Apply multiple discount charges to the same regular charge that has been billed.


To learn more about these scenarios and how to handle the variances, see Handle variances for reconciliation between booking and billing for more information.

To understand how CCV is calculated for evergreen subscriptions, see CCV calculation for evergreen subscriptions .

## Indicators for CCV calculation

The CCV calculation is dependent on the following indicators:

-   Charge-level fields, including: See RatePlanCharge for more information.

    -   Charge price

    -   Charge quantity

    -   Charge effective date, including effective start date and effective end date

-   Tenant-level or account-level settings in Zuora Billing, including:

    -   Billing rules

    -   Billing periods

    -   Bill cycle day (BCD)

        .


## Supported tax engines

Zuora Revenue requires the tax to be excluded from CCV because the tax amount does not impact the revenue. Therefore, even if the Tax Mode setting is set to Tax Inclusive for product rate plan charges in Zuora Billing, the tax amount is excluded from the charge price to derive the correct CCV in Zuora Revenue. If the tax rate is changed in Zuora Billing, Zuora Revenue will calculate the CCV based on the new tax rate. The tax rate date is the subscription term start date.

The following tax engines are currently supported by Billing - Revenue Integration. For other tax engines, the CCV calculation will result in zero.

-   Zuora Tax

-   Avalara Tax

-   Connect Tax Engine


## CCV Calculation Examples

Your customer subscribed to 10 units of your product for 12 months, from 2020-01-01 to 2020-12-31, with a monthly billing period and a list price of $5.00 per unit. The BCD is the 1st day of each month.

The CCV is generated when this subscription is created:

| Charge | Segment | Version | CCV | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 1 | 10 * 12 * 5= 600.00 | 2020-01-01 | 2020-12-31 |

On 2020-03-31, you update the product and increase the quantity from 10 to 13. A new rate plan charge segment is created. CCV is recalculated accordingly:

| Charge | Segment | Version | CCV | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 1 | 10 * 3 * 5 = 150.00 | 2020-01-01 | 2020-03-31 |
| C-0000001 | 2 | 2 | 13 * 9 * 5 = 585.00 | 2020-04-01 | 2020-12-31 |

## View CCV

You can use one of the following methods to view the CCV of transactions:

-   Use the Zuora UI: See Preview CCV in Zuora Billing for more information.

-   Use the Data Query API: See Overview of Data Query to understand how to use Data Query and its known limitations.
