---
title: "Example use case"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/out-of-the-box-effective-dating-support/example-use-case"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:33.674Z"
---

# Example use case

Provides an example of rate card adjustments based on age and effective dates, illustrating changes in pricing for different age groups.

Assume the current UTC is 2024-08-08T00:00:00+00:00.

\[ { "attributes": \[ { "name": "age", "operator": ">=", "value": 60 }, { "name": "EffectiveDate", "operator": ">=", "value": "2024-10-01T00:00:00+00:00" } \], "pricing": { "unit\_amounts": { "USD": 300 } } }, { "attributes": \[ { "name": "age", "operator": "<", "value": 60 } \], "pricing": { "unit\_amounts": { "USD": 400 } } } \]

Resulting Rate Card:

| Age | Start | End | Charge | Price (USD) |
| --- | --- | --- | --- | --- |
| >=60 | 2024-10-01T00:00:00+00:00 |  | PRPC-00000031 | 300 |
| <60 | 2024-08-08T00:00:00+00:00 |  | PRPC-00000031 | 400 |

## Update Request (PUT)

If you want to:

-   Change the price for Age ≥ 60 effective 2024-11-01T00:00:00+00:00 from $300 → $320

-   Change the price for Age < 60 effective immediately from $400 → $420


Assume the current UTC time is 2024-08-10T00:00:00+00:00.

\[ { "attributes": \[ { "name": "age", "operator": ">=", "value": 60 }, { "name": "EffectiveDate", "operator": ">=", "value": "2024-11-01T00:00:00+00:00" } \], "pricing": { "unit\_amounts": { "USD": 320 } } }, { "attributes": \[ { "name": "age", "operator": "<", "value": 60 } \], "pricing": { "unit\_amounts": { "USD": 420 } } } \]

Resulting Rate Card:

| Age | Start | End | Charge | Price (USD) |
| --- | --- | --- | --- | --- |
| >=60 | 2024-10-01T00:00:00+00:00 | 2024-10-31T23:59:59+00:00 | PRPC-00000031 | 300 |
| >=60 | 2024-11-01T00:00:00+00:00 |  | PRPC-00000031 | 320 |
| <60 | 2024-08-08T00:00:00+00:00 | 2024-08-09T23:59:59+00:00 | PRPC-00000031 | 400 |
| <60 | 2024-08-10T00:00:00+00:00 |  | PRPC-00000031 | 420 |
