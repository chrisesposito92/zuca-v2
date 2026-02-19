---
title: "Add a Dynamic Pricing enabled product rate plan using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/add-a-dynamic-pricing-enabled-product-rate-plan-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:26.202Z"
---

# Add a Dynamic Pricing enabled product rate plan using the Zuora UI

This topic explains how to add a Dynamic Pricing enabled product rate plan using the Zuora UI, including configuring pricing attributes and reviewing order details.

When subscribing to a rate plan, Demo Rate Plan 1, some extra steps are added to lookup the list price based on the pricing attribute values:

1.  Click Add Product after selecting Demo Rate Plan 1. The user will be prompted to enter values for external attributes and attributes mapped to Subscription Rate Plan object fields to lookup the list price from product catalog.

    ![Rate Plan Additional](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bc29fb16-6fba-4fb3-abf2-b85221528713?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJjMjlmYjE2LTZmYmEtNGZiMy1hYmYyLWI4NTIyMTUyODcxMyIsImV4cCI6MTc3MTU1NzE0MSwianRpIjoiYTkyZDNjOTZjMjVmNGViZDkwMTg3YjdiMGRhNDM4NjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vUFkhZG4_UAUcUKdRZA7YA_004JMdkpoTHnY-T5S9Mw)

    Note:

    For the attributes mapped to other Zuora objects (account, account.billto, account.soldto, payment method, subscription), their values are retrieved from those objects automatically and remain read-only during the order creation process. You must configure the values properly before creating an order.

    The effective date is automatically set to the order date. You can override this value to retrieve a list price that is effective from another specified date.

2.  Enter the pricing attribute values and save the changes. The Products and Charges page is displayed. The list price from the product catalog is displayed in the Original List Price column. Based on the pricing attribute values provided in the previous step, it matches the list price = $9 entry in the decision table.

    ![Rate Plan Pricing](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/29c09923-9435-4320-8e15-07d280c6905e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5YzA5OTIzLTk0MzUtNDMyMC04ZTE1LTA3ZDI4MGM2OTA1ZSIsImV4cCI6MTc3MTU1NzE0MSwianRpIjoiNWUxOTYzMjI5Y2IxNGFkMzhlNDc1N2JhMTVhMGE4MzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.g91yyJJwwZnd54ZOnd7ItTIqNZ7LmZAWKlHEtW558k0)

3.  (Optional) For individual charges, you can update the values of external attributes and attributes mapped to the Subscription Rate Plan field by selecting the pencil ![pencil icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/01e871ac-8abe-44dc-aa88-41846e6028bb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxZTg3MWFjLThhYmUtNDRkYy1hYTg4LTQxODQ2ZTYwMjhiYiIsImV4cCI6MTc3MTU1NzE0MSwianRpIjoiZDIyZTRlMGNiMTRlNDhhZDg4OGU4YTRjMWYyZjNhMDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.diDvWRJftPvdLkM9GmT25I-ts7NnM2DFcO2Zis7wyP4)icon next to the original list price. After you save the updated attribute values, Zuora refreshes the list price from the product catalog. If any charge uses the Subscription Rate Plan object field as the pricing attribute, updating one charge’s pricing attribute could refresh the list price and sales price of all charges under the same rate plan.

    ![Products and charges](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/75267948-b26a-4b00-bd68-d96f313ef26c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc1MjY3OTQ4LWIyNmEtNGIwMC1iZDY4LWQ5NmYzMTNlZjI2YyIsImV4cCI6MTc3MTU1NzE0MSwianRpIjoiNDliNGQ2MTNjNWMxNDFjOTgwZDgwNzgxNTg3ZTBhNGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.T7LTGwYqClpwmi_QEagg76xy0KT1b62EmvTZ0iGepo0)

    Note:

    The original list price is a read-only reference to determine the sales price.

4.  (Optional) For individual charges, you can update the values of external attributes and attributes mapped to the Subscription Rate Plan field by selecting the pencil ![Pencil icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/01e871ac-8abe-44dc-aa88-41846e6028bb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxZTg3MWFjLThhYmUtNDRkYy1hYTg4LTQxODQ2ZTYwMjhiYiIsImV4cCI6MTc3MTU1NzE0MSwianRpIjoiMWUxNTM2NDBmZTEzNDFlNjkzZjFlYWVjOTllMDU1YjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.fme7ntbUIKiVvwgKPJpg66KxVkFrjNjNy4bOQe-RRGo) icon next to the original list price. After you save the updated attribute values, Zuora refreshes the list price from the product catalog. If any charge uses the Subscription Rate Plan object field as the pricing attribute, updating one charge’s pricing attribute could refresh the list price and sales price of all charges under the same rate plan.

    ![Additional pricing](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7033cabc-d369-4100-b183-f6b7b8a5e803?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcwMzNjYWJjLWQzNjktNDEwMC1iMTgzLWY2YjdiOGE1ZTgwMyIsImV4cCI6MTc3MTU1NzE0MSwianRpIjoiOTk5MzEyYjBmZjA5NGQ3Y2FiNmNjMDYzMWYzOTQ5MzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.8Jeijb3ThkP7a8cFqbHEfgNHuBi0fzA88lidHX8CroE)

    Note:

    If any charge uses the Subscription Rate Plan object field as the pricing attribute, updating one charge's pricing attribute could refresh the list price and sales price of all charges under the same rate plan.

5.  Click Review Order after configuring the correct price for the rate plans. In the Review Order page for the order actions that include Dynamic Pricing charges, you are not allowed to edit them to change the pricing attributes or other information again.
