---
title: "CCV calculation examples"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/overview-of-ccv-calculation-in-order-to-revenue/ccv-calculation-examples"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:37.118Z"
---

# CCV calculation examples

This document provides examples of CCV calculations for a 12-month subscription with monthly charges, illustrating changes in billing cycles and subscription updates.

A customer subscribes to your product for 12 months, from January 1, 2024, to December 31, 2024. The subscription includes a monthly Per Unit charge, for 10 units each month, with a price of $5 per unit. The billing date for the subscription is set to use the customer account’s billing cycle date (BCD): the 1st of each month.

The CCV is generated as below when this subscription is created:

| Charge | Segment | Version | CCV | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 1 | Billed amount: 0 Preview amount: 10 * 5 * 12 = 600.00 Total CCV = 0+600 = 600 | 2024-01-01 | 2024-12-31 |

After the billing occurs on January 1, the invoice amount is generated as follows:

| Charge | Segment | Version | Invoice Number | Invoice Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 1 | INV-001 | 50 | 2024-01-01 | 2024-01-31 |

On February 1, your customer's BCD is updated to the 15th of each month, and the invoice for February is subsequently generated as follows. Note that the change of the billing date to the 15th of each month means that this invoice only covers the charge fee for the period from February 1 to February 14.

| Charge | Segment | Version | Invoice Number | Invoice Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 1 | INV-002 | 50*14/29 = 24.13 | 2024-02-01 | 2024-02-14 |

On March 15, the subscription was updated to increase the monthly units from 10 to 13. This change creates a new charge segment and accordingly, the CCV is generated as follows:

| Charge | Segment | Version | CCV | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 2 | Billed amount: 50+ 24.13 = 74.13Preview amount: 10 * 5 * 1 = 50Total CCV = 74.15+50 = 124.13 | 2024-01-01 | 2024-03-14 |
| C-0000001 | 2 | 2 | Billed amount: 0Preview amount: 13 * 5 * (9 + 17/31) = 620.65Total CCV= 0+ 620.65=620.65 | 2024-03-15 | 2024-12-31 |

Suppose your customer's BCD remains unchanged as of the 1st of each month; for the subscription update on March 15, the CCV is generated as follows:

| Charge | Segment | Version | CCV | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 2 | Billed amount: 50+50=100Preview amount: 10 * 5 * 14/31 =22.58Total CCV= 100 + 22.58=122.58 | 2024-01-01 | 2024-03-14 |
| C-0000001 | 2 | 2 | Billed amount: 0Preview amount: 13 * 5 * (17/31 + 9) = 620.65Total CCV= 0+ 620.65=620.65 | 2024-03-15 | 2024-12-31 |
