---
title: "Batch price update"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/batch-price-update"
product: "zuora-billing"
scraped_at: "2025-12-24T05:17:53.006Z"
---

# Batch price update

This topic explains how to update prices for multiple subscriptions in customer account batches, including prerequisites and process flow.

You can update a charge's price for multiple active subscriptions in one or more customer account batches by defining a subscription cohort and specifying a new price and an effective date. After you submit the Batch Price Update request, you can also view the batch execution history and retrieve the price update result for all affected subscriptions.

## Prerequisites

Consider the following prerequisites before using this feature:

-   You must enable the Workflow feature by clicking the Workflow tab on the left navigation panel.
-   Only available if the charge is of the recurring flat fee or per unit pricing charge model.
-   All tenant-type users can access this feature. For the Orders Harmonization tenant users, if the Orders UI is enabled, the Order Action is used to reflect the price update; otherwise, the Amendment is used.

## Batch Price Update flow

If you click the Batch Price Update drop-down button on the Subscriptions page, you will initiate the Batch Price Update flow. The following flowchart illustrates the user inputs needed and the process flow for different user input options.

![batch price update](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/137194c0-dc8e-4356-aaa7-59565d4f3c5e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEzNzE5NGMwLWRjOGUtNDM1Ni1hYWE3LTU5NTY1ZDRmM2M1ZSIsImV4cCI6MTc2NjYzOTg3MCwianRpIjoiNWIwNGYzMjk3NTk4NDQxZTg1ODQ0YTY2YTVmNDhlMDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.L_sw-9iXubeb4EEMn4CgnjqvQZOrYAptwdrPY4QEn40)
