---
title: "Amend or cancel subscription before renewal term starts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/amendment-or-cancelation-of-subscription-before-start-of-renewal-term/amend-or-cancel-subscription-before-renewal-term-starts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:17.814Z"
---

# Amend or cancel subscription before renewal term starts

This topic explains how to amend or cancel a subscription before the renewal term starts, including adding new products and handling invoices.

After receiving the early renewal invoices, some customers want to change or cancel their subscription before the start of the renewal term. For example, one customer wants to add a new product to their subscription on the date of today.

The following diagram shows the date of today and you have already invoiced the renewal term.

![Today's Date and Renewal Term Invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/94409a30-25ef-44c9-a354-46aea67179d3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk0NDA5YTMwLTI1ZWYtNDRjOS1hMzU0LTQ2YWVhNjcxNzlkMyIsImV4cCI6MTc2NjY0MDk3NiwianRpIjoiNDk4NjBhYWY1ZWJkNGQ2MzhiZDg1ODY1ZmI4ZGI5YzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9m4R-0n7OShxb-jnXtnzgjfq1o5TZ2G5S-VAS9aATS0)

To add a new product to the customer's subscription, do the following steps:

1.  Create an Add a Product amendment and use the date of today as the effective date. The amendment will stay effective into the renewal term and any subsequent terms.
2.  Create a bill run.
3.  Post the new invoice.

As shown in the following diagram, the amendment is included in the new invoice.

![Create Amendment and Generate New Invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1585161d-2952-4aa6-ad0b-61967d82ec31?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE1ODUxNjFkLTI5NTItNGFhNi1hZDBiLTYxOTY3ZDgyZWMzMSIsImV4cCI6MTc2NjY0MDk3NiwianRpIjoiZDFhODcwNjBhMmRjNDZjM2JmOTdlZDBmZjE0OWU1OGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Alz1kulJTDIAPpbG9K_UWhS_j5WNcTnxnfnVEXHe4bs)

Zuora bills for amendments and cancelations even if they become effect before the following date:

-   The start date of the renewal term

-   The last invoice date


Zuora then reflects the changes in the new invoice. You do not need to cancel the renewal amendment or unpost, cancel, and delete the first invoice.
