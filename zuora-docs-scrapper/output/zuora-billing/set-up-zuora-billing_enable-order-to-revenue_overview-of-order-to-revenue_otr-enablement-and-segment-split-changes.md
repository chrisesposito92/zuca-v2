---
title: "OTR enablement and segment-split changes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/otr-enablement-and-segment-split-changes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:26.783Z"
---

# OTR enablement and segment-split changes

This guide explains the changes in segment-split behavior due to OTR enablement when renewing subscriptions.

When you renew a subscription to generate a new term, the segment-split by term behavior changes because of OTR enablement. Let’s understand how the segment-split by term behavior changes before and after you enable OTR.

Before you enable OTR, when a subscription is renewed to generate a new term, the charge will be extended to the same Segment for existing billing customers. The TCV is calculated for the two terms at $200 in this case.

After you enable OTR, when a subscription is renewed to generate a new term, the charge will be split to a different segment. As there will be two sales order lines from a revenue recognition perspective, the CCV will be calculated for each charge segment. In this scenario, it is split into two charge segments:

-   Charge segment 1 $100, and

-   Charge segment 2 $100


The behavior impacts the following:

-   The recurring charges

-   The usage charges

-   Auto renew, renew to evergreen, renew order action


![segment split charges](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/18dea35d-e14a-414a-9df8-376c9a6c3639?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE4ZGVhMzVkLWUxNGEtNDE0YS05ZGY4LTM3NmM5YTZjMzYzOSIsImV4cCI6MTc2NjYzOTU0NCwianRpIjoiOGI3NjBlOTE3M2RkNGQ0ZTgxOTBmY2ZjMTk0MjI2OWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.cDslABoAtPCMPwJDS1NDMzm8pVz0eqoeL-hVzLdLIV8)
