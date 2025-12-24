---
title: "Order Delta TCV Calculation II"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcv/order-delta-tcv-calculation-ii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:28.082Z"
---

# Order Delta TCV Calculation II

This section provides an example of a one-off renewal service charge and its impact on Order Delta TCV, including a detailed table of transaction details.

## Example 2

If there is also an one-off renewal service charge of $50 occurring on the renewal date, represented by an Order Line Item whose transaction date is set to be 2022-01-01. There will be an additional Order Delta Tcv generated for the Order Line Item.

![Order Delta TCV2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ee4550b6-8032-4f79-95d5-fb0b596b3fa2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVlNDU1MGI2LTgwMzItNGY3OS05NWQ1LWZiMGI1OTZiM2ZhMiIsImV4cCI6MTc2NjY0MDM4NiwianRpIjoiODNiMzk3MjVjNzYzNDE3NGJhMzZmZmUzMjIzY2E5NjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0SA3qQq1ZvQ1OYLloar8qm5coMGH_1W-GJbukwTlmcY)

| StartDate | EndDate | RatePanChargeId | OrderLineItemId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- | --- |
| 2022-01-01 | 2022-04-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | null | $150 | $150 |
| 2022-01-01 | 2022-01-02 | null | 4028fc827a0e48c1017a0e58b9330014(for OLI-1) | $50 | $50 |

See Object and Fields for more details about the fields on this object.
