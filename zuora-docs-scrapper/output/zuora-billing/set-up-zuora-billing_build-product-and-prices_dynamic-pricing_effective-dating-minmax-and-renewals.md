---
title: "Effective dating, min/max, and renewals"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/effective-dating-minmax-and-renewals"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:23.351Z"
---

# Effective dating, min/max, and renewals

Outlines the features of effective dating, min/max settings, and renewals across various charge models, highlighting their application and constraints.

| Feature | Supported Charge Model | Notes |
| --- | --- | --- |
| Effective Dating | All charge models | Future dates only (cannot backdate)Defaults to current UTC if not setRenewal pricing always uses the catalog price effective at the renewal date |
| Min/Max (tier-level) | Tiered and Volume usage-based charges | Applied at the tier levelBoth Min and Max are optionalIf both are specified, Max must be greater than Min |
| Min/Max (charge-level) | Per unit, Tiered, Volume, Tiered with Overage, Overage | Applied to the total chargeNot supported for Flat Fee or Discounts |
| Renewals | All charge models | Always use the current effective catalog priceThe original subscription price is not carried forward unless still valid |
