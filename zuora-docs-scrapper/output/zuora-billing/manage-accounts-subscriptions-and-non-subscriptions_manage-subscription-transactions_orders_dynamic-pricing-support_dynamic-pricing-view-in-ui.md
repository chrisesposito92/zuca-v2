---
title: "Dynamic Pricing view in UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/dynamic-pricing-view-in-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:53.668Z"
---

# Dynamic Pricing view in UI

The Dynamic Pricing view allows users to see pricing attribute details and original list prices for charges on both order and subscription details pages, applicable to charges with and without Dynamic Pricing.

## Order details page

-   The user can view a charge's pricing attribute details on the order details page if this charge has Dynamic Pricing defined.

-   The user can view a charge's original list price on the order details page. This applies to both charges with Dynamic Pricing and charges without Dynamic Pricing.

    -   The user can view a charge's pricing attribute details on the order details page if this charge has Dynamic Pricing defined.

    -   The user can view a charge's original list price on the order details page. This applies to both charges with Dynamic Pricing and charges without Dynamic Pricing.

        ![All products](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/42a80d4c-e901-4eb2-8dff-f4b0b96efd1d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQyYTgwZDRjLWU5MDEtNGViMi04ZGZmLWY0YjBiOTZlZmQxZCIsImV4cCI6MTc2NjY0MDcxMiwianRpIjoiZmRmZDE0MmFmMjkxNGUzNmI0MzQzYjcxMDBmY2M4YzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gC1RWQHeWWJk1Pbti03Jh_DMd43JqgMHfJUt-bwYLPE)

        The additional pricing details are shown below:

        ![Pricing Details](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a36529a2-1bc4-453a-8b70-a6ab200558e3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEzNjUyOWEyLTFiYzQtNDUzYS04YjcwLWE2YWIyMDA1NThlMyIsImV4cCI6MTc2NjY0MDcxMiwianRpIjoiNmEzYTM2ODdkNDI5NDYxM2JkZWYzMGE5NDk4YzllOGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.myLXrhyXz6KCQGvs8DfzuU71Ux7u_-Z6Vou7RptXdso)



## Subscription details page

The user can view a charge's original list price and pricing attribute values on the subscription details page.

![view subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8cacaa7d-7507-4302-888c-3fda5f085224?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhjYWNhYTdkLTc1MDctNDMwMi04ODhjLTNmZGE1ZjA4NTIyNCIsImV4cCI6MTc2NjY0MDcxMiwianRpIjoiMjY2ZWRjOWQ0ZGNmNGY1ZTg5MjYyZjkwYTI4ZjMyODgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HB0oLRP5FkrJggxUZxRHhUn-Rd4gGZslmIGAQBqJ4EI)

The additional pricing details are shown below:

![additional pricing](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/80e9c2c3-913e-428e-a525-9749fc2c7205?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgwZTljMmMzLTkxM2UtNDI4ZS1hNTI1LTk3NDlmYzJjNzIwNSIsImV4cCI6MTc2NjY0MDcxMiwianRpIjoiMzhlOWM3NWYwZWFjNGNhODhmZTI4YmQ4YmJhY2I2MDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.u61qSq1zZpfRIWi43CHU93yxaxyL7Dz6NBAiZ4U82No)

Note:

-   The new field, Original List Price on the charge details section - is a read-only column reflecting the list price retrieved from the product catalog. This applies to both charges with Dynamic Pricing and charges without Dynamic Pricing.

    -   If the charge is subscribed via Orders API, Original List Price value depends on the value of originalListPrice field provided by the user in the order payload.

-   The pricing attribute values always reflect the latest values of this charge.
