---
title: "Drawdown charge"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/drawdown-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:12.786Z"
---

# Drawdown charge

Create a drawdown charge to track customer consumption of prepaid units, configurable through the Zuora UI, REST API, or SOAP API, with options for UOM conversion and specific charge models.

After creating a prepayment charge, you must create a drawdown charge, to track how your customers consume the units they have prepaid for. The drawdown charge does not need to be in the same product rate plan.

You can create a drawdown charge through the Zuora UI, REST API, or SOAP API.

## UOM conversion

You can configure a drawdown charge where the Usage UOM and Drawdown UOM are different and connected through a Drawdown Rate, like the exchange rate between two currencies. The Drawdown UOM, Usage UOM, and Drawdown Rate need to have the same number of decimal places.

Suppose a gaming company has two UOMs: Hour and Point. It can configure the following prepayment charges and drawdown charges where customers purchase Points to get gaming time measured in Hours.

-   Prepayment charge: $10/one-time, 100 Points, Prepaid UOM (Point)

-   Drawdown charge: Drawdown UOM (Point), Usage UOM (Hour), Drawdown Exchange: 2 Points = 1 Hour


When you upload 10 hours of usage for a customer, it will be converted to 20 Points (10 \* 2). The customer’s remaining balance will be 80 Points (100-20).

In the case where a drawdown rate is a float number (a number that has decimal places, for example, 2.5), the system keeps the most accurate calculation when doing the conversion.

For example, assume the following scenario:

-   Drawdown Exchange is 2.5 Points = 1 Hour

-   Your customer’s remaining prepaid balance is 1 Point


You upload 0.1 Hour of usage for this customer -> The usage is converted to 0.25 Point (0.1 \* 2.5) -> This customer’s prepaid balance is drawn down to 0.75 Point (1.00 - 0.25).

## Notes and limitations

-   When a subscription contains a prepayment charge, it should also contain a drawdown charge to track usage consumption, and the Drawdown UOM should be the same as the Prepayment UOM.

-   Flat-fee charge model is not supported on drawdown charges.

-   When a drawdown charge is configured in the tiered pricing charge model, the Tier 1 price is effective only after the prepaid units are used up. For example, if you set Tier 1 price = 0 to give your customers some free units, they will enjoy the zero price only after their prepaid units are drawn down to 0.

-   You can update both the `pending` and `processed` drawdown usage records before their associated drawdown usages are billed. After the charges are billed, you cannot edit the drawdown usage records anymore.


Note the following behaviors of the drawdown usage charge status:

-   After uploading a drawdown usage record to Zuora, if the usage record is fully drawn down by the prepayment balance, the usage record will turn to `processed*` . After invoices being generated, the usage record in `processed*` status will be changed to `processed` status.

-   If the usage record is not fully drawn down by the prepayment balance, the record will stay in `pending` . After the drawdown charges are billed, the status of the usage will turn to `processed` .

-   The Pre-Rated Per Unit Pricing and Pre-Rated Pricing charge models are unavailable on drawdown charges.

-   High Water Mark Pricing charge models are not supported for drawdown charges.
