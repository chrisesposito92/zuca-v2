---
title: "Best practices and validation rules"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/out-of-the-box-effective-dating-support/best-practices-and-validation-rules"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:35.972Z"
---

# Best practices and validation rules

Outlines best practices and validation rules for using operators and rate card entries in requests, including examples of invalid requests.

-   The only supported operator for `EffectiveDate` is >=. This specifies a new price start time and avoids overlaps or gaps.

-   It is allowed to include only one rate card entry with the same attribute values (except EffectiveDate) in a single request. Sending multiple entries with identical attributes will be rejected.


Examples of invalid requests:

Step 1 - Create the charge

{ "attributes": \[ { "name": "Country", "operator": "==", "value": "USA" }, { "name": "EffectiveDate", "operator": ">=", "value": "2025-01-01T00:00:00+00:00" } \], "pricing": { "unit\_amounts": { "USD": 200 } } }

Step 2 - Update the charge

{ "attributes": \[ { "name": "Country", "operator": "==", "value": "USA" }, { "name": "EffectiveDate", "operator": ">=", "value": "2026-01-01T00:00:00+00:00" } \], "pricing": { "unit\_amounts": { "USD": 300 } } }
