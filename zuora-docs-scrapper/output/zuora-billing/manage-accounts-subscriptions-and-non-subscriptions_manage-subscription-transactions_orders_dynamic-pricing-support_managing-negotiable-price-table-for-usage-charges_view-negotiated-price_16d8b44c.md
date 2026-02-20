---
title: "View Negotiated Price table in the Orders UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/managing-negotiable-price-table-for-usage-charges/view-negotiated-price-table-in-the-orders-ui"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:00.113Z"
---

# View Negotiated Price table in the Orders UI

This task topic allows you to view the negotiated price table for dynamic‑pricing usage charges directly in the Order details page.

Consider a scenario of creating a subscription for the usage charge using the REST API to negotiate the price in the payload of the first rate card entry in the standard price table in the product catalog from $110 to $115 when the usage product is Product1, usage location is UK, and effective date is Feb 1, 2026.

![standard pricing table](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/81e07166-94d1-446f-af66-52cc0da01451?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxZTA3MTY2LTk0ZDEtNDQ2Zi1hZjY2LTUyY2MwZGEwMTQ1MSIsImV4cCI6MTc3MTY5NTExNCwianRpIjoiMGE4YzNjMTg5MWIzNGQ0Yzg3ZWM0MmI5ODgxZDYyNjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.V_KM86LojVf5kL6zGRt8_yT79FC_agC9dsHgLE8Za48) ![API Payload](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eb8d0d3c-ad6e-4383-8d7e-b8035fe2ee90?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImViOGQwZDNjLWFkNmUtNDM4My04ZDdlLWI4MDM1ZmUyZWU5MCIsImV4cCI6MTc3MTY5NTExNCwianRpIjoiMDVmY2NlZjNlMDczNDdhNTkxNjQwNGZkNjVjNWZhNWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.8-0IrYQ0Ul_z80NLmdEeqCqzBOo78WkjehcR9wwCXTM)

1.  Log in to the Zuora application and navigate to Customers > Orders. The Order details page opens.

    Note:

    In the Charge Details section, the Dynamic Pricing Table field with a View link is displayed after an order with a dynamic‑pricing usage charge negotiated price is completed.

    ![charge pricing orders UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e70b64a0-f478-4924-a71f-25e4be9284d9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU3MGI2NGEwLWY0NzgtNDkyNC1hNzFmLTI1ZTRiZTkyODRkOSIsImV4cCI6MTc3MTY5NTExNCwianRpIjoiMTExMDU5ZTgxOGFhNDJhNGIyMTU3YTFmOWU1ODQ4ZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.CIImDJW9OOUlKbftUMEs2UAM4aIUEuKX3OltDkluSLo)

2.  Click the View link to view the latest Dynamic Pricing Decision Table for the usage charge that represents the latest effective pricing based on the negotiated price.

    Note: The usage charge with number $chargeNumber was added by the create subscription order in the previous sectio

    ![Dynamic Pricing Table - Orders UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7256cbfb-3b4a-4c4b-b8ca-b373aaf2324a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcyNTZjYmZiLTNiNGEtNGM0Yi1iOGNhLWIzNzNhYWYyMzI0YSIsImV4cCI6MTc3MTY5NTExNCwianRpIjoiNGNiODM5OWYwZTZkNGU3YWE0YzA4MGU0N2I1MjA2ZGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.bEwnbxLq0jRQ5SiNfIObChgTSFsJiRE6_XiGEm6Jfbc)

3.  Access the Order Actions tab.
4.  In the Charge Pricing section, click the View link under the Negotiated Price field. A table displays the rate card entries as they existed when the charges were added to the subscription for that order or updated later on. This helps you to verify the price, which has been negotiated.

    ![Negotiated Price-Orders UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b7c381aa-9823-4fb3-810f-2747b1e82755?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3YzM4MWFhLTk4MjMtNGZiMy04MTBmLTI3NDdiMWU4Mjc1NSIsImV4cCI6MTc3MTY5NTExNCwianRpIjoiZWM4MTMwNTY4MTdjNDllZThjZWQ4M2ZlNGFiNDQwODQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.6Fpa6txlHQm3Rfm4-GoH_K-sNofs3LFcqzJb6TPE-lg)
