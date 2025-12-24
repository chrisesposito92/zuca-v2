---
title: "Subscriptions and invoices"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing/subscriptions-and-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:31.063Z"
---

# Subscriptions and invoices

This document details subscription plans and corresponding invoices for customers in different states, highlighting variations in membership fees based on location-specific charge definitions.

An end customer in New York subscribes to the Bronze plan (PRP-01) without any charge override. For the membership fee (PRPC-001), the PRPC-001-CD-03 charge definition is identified as the single match for the lookup field ( `state=New York` ). So, the customer will be charged $18.00 monthly as the membership fee, with the invoice for the first three months being as follows:

| Charge Date | Charge Name | Service Period | Billing Period | UOM | Unit Price |
| --- | --- | --- | --- | --- | --- |
| 01/01/2024 | Setup Fee | 01/01/2024 - 01/01/2024 | - | - | $50.00 |
| 01/01/2024 | Membership Fee | 01/01/2024 - 01/31/2024 | Month | - | $18.00 |
| 02/01/2024 | Membership Fee | 02/01/2024 - 02/29/2024 | Month | - | $18.00 |
| 03/01/2024 | Membership Fee | 03/01/2024 - 03/31/2024 | Month | - | $18.00 |

When another end customer in Texas subscribes to the same rate plan, the monthly membership fee will be $12 because the PRPC-001-CD-05 charge definition matching the lookup field ( `state=Texas` ) is identified and applied.

| 01/01/2024 | Setup Fee | 01/01/2024 - 01/01/2024 | - | - | $50.00 |
| --- | --- | --- | --- | --- | --- |
| 01/01/2024 | Membership Fee | 01/01/2024 - 01/31/2024 | Month | - | $12.00 |
| 02/01/2024 | Membership Fee | 02/01/2024 - 02/29/2024 | Month | - | $12.00 |
| 03/01/2024 | Membership Fee | 03/01/2024 - 03/31/2024 | Month | - | $12.00 |

When a customer in Oregon subscribes to this product rate plan, the default charge definition will be identified and applied because other charge definitions do not match the lookup field (`state=Oregon`). The monthly membership fee will be $20.00 for this customer.

| 01/01/2024 | Setup Fee | 01/01/2024 - 01/01/2024 | - | - | $50.00 |
| --- | --- | --- | --- | --- | --- |
| 01/01/2024 | Membership Fee | 01/01/2024 - 01/31/2024 | Month | - | $20.00 |
| 02/01/2024 | Membership Fee | 02/01/2024 - 02/29/2024 | Month | - | $20.00 |
| 03/01/2024 | Membership Fee | 03/01/2024 - 03/31/2024 | Month | - | $20.00 |
