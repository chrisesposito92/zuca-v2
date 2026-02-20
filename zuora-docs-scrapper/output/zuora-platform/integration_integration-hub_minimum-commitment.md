---
title: "Minimum Commitment"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/minimum-commitment"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:56.568Z"
---

# Minimum Commitment

The Minimum Commitment app, now in maintenance mode, supports usage-based business models by allowing customers to be charged at their commitment level, even if they don't meet the committed usage.

Note:

The Minimum Commitment app is not available for purchase anymore and is in maintenance mode. The information in this documentation is intended to be used by customers who have purchased the app.

## Overview

Does your company’s business and cost model rely on usage? Do you use commitment levels and thresholds to drive upsells among your existing customers? But what happens if your customer doesn't hit their committed volume? Wouldn’t it be nice if you could charge your customer at their commitment level on each invoice if they don’t consume enough usage?

All of these use cases are supported out of the box with Minimum Commitment app.

## Features available

-   Charge your customer at their commitment level on each invoice, even if they don’t fully consume the committed usage amount.

-   Use one or many charges towards the minimum commitment amount when calculating your threshold.

-   True Up based on a currency amount or quantity of usage.

-   Set your “True Up Period” and execute it once the “True Up Period” has passed, regardless of how many invoices are a part of that True Up period. Available periods include Monthly, Semi Monthly, Quarterly, Semi Annually, Annually.


## Getting started

## Prerequisites

-   Active Connect license

-   A Zuora API Sandbox tenant, Performance test or Production tenant

    -   See [Zuora Testing Environments](/basics/environments/zuora-billing-testing-environments) for more information.

    -   Note: Production Copy Environment tenant is not supported
-   Administrative rights for the Zuora tenant

-   Configured Product Catalog

    -   See [Product Catalog](/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms) for more information.
