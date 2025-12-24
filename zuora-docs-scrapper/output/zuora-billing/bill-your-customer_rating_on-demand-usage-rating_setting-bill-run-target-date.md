---
title: "Setting bill run target date"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/on-demand-usage-rating/setting-bill-run-target-date"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:23.076Z"
---

# Setting bill run target date

Learn how setting the bill run target date affects the timing of usage billing and the transition between open and closed billing periods.

The on-demand rating still bills for usage in arrears, but you don't have to wait until the end of the billing period. That is to say, a usage charge for January 1 can be rated and billed as soon as the day after, on January 2 (this is the bill run target date).

Open billing period

Your customer has a bill cycle day set to the 1st of the month and has subscribed to a plan with monthly usage. With the on-demand rating, you can rate and bill for usage as frequently as you would like throughout the month of April by setting the bill run target date equal to a date within the open period for the month of April (between April 1st and April 30th). Any usage uploaded during the open period will be picked up in the next bill run. Therefore, if usage is uploaded every day, each time a bill run is executed to generate an invoice, it will pick up all the usage that has not yet been billed, rate the usage, and include the usage charge amount on the invoice.

Closed billing period

In this same example, the billing period for April is closed once an invoice is generated using a bill run target date of May 1st. For this monthly charge, setting the bill run target date to the next bill cycle day (that is, May 1st) will close the April billing period and open up the next billing period for May. Once the April billing period is closed, any additional usage records dated in April will not be picked up and rated for billing.

Alternatively, with the end of billing period usage rating option, you are allowed to bill for April usage only once. After you have created a bill run with a target date of May 1st, it closes the April billing period. It is important to note that after the billing period of a charge is closed, you can still upload usage records for the closed billing period, but they will not be processed.
