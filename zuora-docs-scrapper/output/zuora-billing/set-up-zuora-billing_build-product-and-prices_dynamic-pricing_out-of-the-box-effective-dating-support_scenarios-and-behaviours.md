---
title: "Scenarios and behaviours"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/out-of-the-box-effective-dating-support/scenarios-and-behaviours"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:30.986Z"
---

# Scenarios and behaviours

Explains how price updates trigger new entries in the rate card, detailing scenarios with effective dates and their outcomes.

Each price update triggers a new row insertion in the rate card with the new effective date. This ensures multiple time-based prices are maintained for the same charge.

| Scenario | Behaviour | Result |
| --- | --- | --- |
| No effective date provided | System picks the current UTC timestamp | New row created effective immediately |
| Future effective date provided | User-defined datetime used | New row will be effective in the future |
