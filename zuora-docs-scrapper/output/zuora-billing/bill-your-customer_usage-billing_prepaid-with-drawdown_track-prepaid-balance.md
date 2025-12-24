---
title: "Track prepaid balance"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/track-prepaid-balance"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:29.520Z"
---

# Track prepaid balance

Learn how to track prepaid balance through the Zuora UI and Data Query.

## Track prepaid balance through the Zuora UI

You can view the prepaid balance transactions related to a subscription through the Zuora UI in the following ways:

-   Navigate to Customer Accounts > Orders & Subscriptions tab > Click a subscription number > Prepayment Balance tab.


![View prepaid transactions through the Zuora UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c76ad24c-4d60-4b1d-9e1c-e4ccb38a5bee?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM3NmFkMjRjLTRkNjAtNGIxZC05ZTFjLWU0Y2NiMzhhNWJlZSIsImV4cCI6MTc2NjY1MTQyNywianRpIjoiMWQ2Yzc5YWZmNGY0NGY2MzkxNWNkZjBmMDE3NTI0YjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wu1Oq8lcGDJO2-L71Z3aWFvvcLBWaWS-odP9IL2D6DY)

-   Subscriptions > Click a subscription number > Prepayment Balance tab.


![View prepaid transactions through the Zuora UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/85f9f95d-d3aa-4c86-9187-fa38d6dcc28b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg1ZjlmOTVkLWQzYWEtNGM4Ni05MTg3LWZhMzhkNmRjYzI4YiIsImV4cCI6MTc2NjY1MTQyNywianRpIjoiNGY5ZWM3MDc3OGNmNGE4Mjk3MmM0YTQzMTMyYzc2NGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NMQo-GDY1XGcQ6lSL8Uqk19irS4TRD_3CKaTZxFGjcc)

The UOM displayed on the Prepayment Balance tab is the Prepayment UOM configured in the prepayment charge.

![Prepayment Balance tab](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f8f651f9-1f73-4666-9f6b-2e8ef390c08a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4ZjY1MWY5LTFmNzMtNDY2Ni05ZjZiLTJlOGVmMzkwYzA4YSIsImV4cCI6MTc2NjY1MTQyNywianRpIjoiNmY3NTg2YWVlYjBlNDIzMTg3YThmZTFmNmY4ZTI3NTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.H8xi2NM5FUiodV1RiYMTxrpRJkP82mYOEX9ae6Iu1xo)

## Track prepaid balance through Data Query

You can track prepaid balance by querying the Prepaid Balance, Prepaid Balance Fund, and Prepaid Balance Transaction objects through Data Query.
