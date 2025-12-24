---
title: "How effective dating works"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/out-of-the-box-effective-dating-support/how-effective-dating-works"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:28.350Z"
---

# How effective dating works

Learn how effective dating is applied during PRPC creation and editing, ensuring automatic versioning of price changes.

Effective dating is implemented in one of two ways:

-   During PRPC creation (OOB Behaviour)

-   During PRPC editing (UI or API)


## During PRPC creation (OOB Behaviour)

When defining attributes for a rate card during PRPC creation, Zuora automatically creates a reserved attribute:

{ "name": "EffectiveDate", "type": "Datetime" }

-   The EffectiveDate field is system-seeded automatically with the current UTC datetime when a charge is first created.

-   All subsequent price updates are automatically effective-dated. This means that every price change creates a new version valid from that timestamp onward.


## While Editing a PRPC

When editing a Product Rate Plan Charge (PRPC) via the API or UI:

-   UI - The system automatically uses the current UTC timestamp as the `EffectiveDate`. This creates a new version of the price behind the scenes, and no manual input is required.

-   API - You have two options:

    -   You can schedule a future price version by explicitly providing an `EffectiveDate`, which must be a future datetime.

    -   You can omit the `EffectiveDate` to have the system automatically use the current UTC timestamp.

        Note:

        Setting a past EffectiveDate is not supported in UI and not recommended in API, as it overwrites all future-dated prices.
