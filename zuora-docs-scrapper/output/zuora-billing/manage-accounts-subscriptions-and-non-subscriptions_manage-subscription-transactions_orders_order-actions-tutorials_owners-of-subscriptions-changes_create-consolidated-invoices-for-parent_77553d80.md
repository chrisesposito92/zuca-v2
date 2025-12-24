---
title: "Prerequisites"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/owners-of-subscriptions-changes/create-consolidated-invoices-for-parent-accounts/prerequisites"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:52.979Z"
---

# Prerequisites

This topic explains the necessary features to enable before creating a consolidated invoice in a parent-child account hierarchy using the Orders feature.

Before creating a consolidated invoice for a parent account in a parent-child account hierarchy through the Orders feature, you need to enable the following features:

-   Customer Hierarchy feature. To access this feature, submit a request at Zuora Global Support .

-   Orders feature. If you are an existing Zuora Subscribe and Amend customer, we recommend you enable Orders Harmonization to access the Orders feature. With Orders, you can access both existing functions for subscription and billing management and the new features on Zuora Billing. To access this feature, submit a request at Zuora Global Support .

-   Owner Transfer order action feature. Once the feature is enabled, you can transfer subscription ownership to child accounts. To activate this feature through the self-serve interface, see Feature Management.

-   Create Bill Runs. To activate the Create Bill Runs permission, see Billing Roles .


## Create a parent-child account hierarchy

You need to create a parent account and multiple child accounts. For how to create customer accounts, see Create a customer account .

When creating the parent and child accounts, you need to set the following fields properly:

-   Parent : When creating the child accounts, you need to enter the parent account in the Parent field in the Basic Information section to associate child accounts with the parent account in a parent-child account hierarchy.

-   Currency: The parent account and the child accounts must use the same currency.


Once completed, you can open either the parent or a child account details page and click the Navigate Hierarchy link next to the account name to view the parent-child account hierarchy.

![Navigate Hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8a1e51bb-50a3-4f1a-8d94-043174bbed26?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhhMWU1MWJiLTUwYTMtNGYxYS04ZDk0LTA0MzE3NGJiZWQyNiIsImV4cCI6MTc2NjY0MDI5MCwianRpIjoiZTNkYjFmMjY2NzdlNGM3NGJjNTMwZjQ4NTQ2MDAyNzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZxKVr2NOBDNXSGHg8g9yYybWXKYr7G6lvyi5K6_NiRs)
