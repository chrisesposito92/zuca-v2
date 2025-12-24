---
title: "Rollover"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/rollover"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:57.881Z"
---

# Rollover

The rollover model allows unused units to be carried forward to subsequent periods, expiring if not used within the specified rollover period.

The rollover model carries unused units forward from one period to another, and expires them if they are not used by the end of the rollover period. You can specify the number of periods that the unused usage can be retained in the Number of Periods option. For example, if a cell phone plan allows you 500 minutes of usage per month, and has a 6-month rollover period, then you get to "keep" any minutes you haven't used in a particular month, but you must use them within six months otherwise they automatically expire.

If a partial period exists at the beginning of a product rate plan charge, rollover does not not apply. It is best practice to create a product rate plan charge with the start date aligning to the billing cycle day so that no partial period exists.
