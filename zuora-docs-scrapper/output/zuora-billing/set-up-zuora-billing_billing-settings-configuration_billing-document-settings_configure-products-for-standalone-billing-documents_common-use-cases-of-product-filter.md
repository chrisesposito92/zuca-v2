---
title: "Common use cases of product filter"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configure-products-for-standalone-billing-documents/common-use-cases-of-product-filter"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:06.921Z"
---

# Common use cases of product filter

Outlines common use cases for filtering products, including filtering base products by SKU and products with one-time charges.

## Case 1: Filter base products along with other specific products

This use case shows you how to filter all base products along with specific products by SKU.

![Product filter use case - base products](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cbac3ecd-e721-450c-a02d-dc02dd515dc1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiYWMzZWNkLWU3MjEtNDUwYy1hMDJkLWRjMDJkZDUxNWRjMSIsImV4cCI6MTc2NjYzOTEwNCwianRpIjoiYjQ1YTAzMzIwOWEyNGU0NDhjNTViYjM1MjdhMzU4YmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Na9SHN8Y0lx7wi3Q_j_j11g66cCwa8t8AH_lADfHdjE)

The first condition filters all products in the Base Products category.

The condition group contains four conditions. Each condition filters a product with a specific SKU. The relationship between conditions within the group is Or, so any product with the SKU SKU-00000085, SKU-00000086, SKU-00000087, or SKU-00000091 matches the group conditions.

Since the relationship between the first condition and the condition group is Or, the product filter returns any product that either belongs to the Base Products category or has a SKU matching one of the specific values.

## Case 2: Filter products containing only one-time charges

This use case shows you how to filter products that contain only one-time charges.

![Product filter use case - one time charge](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cd069d92-558c-4ec8-a012-0c950517543a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNkMDY5ZDkyLTU1OGMtNGVjOC1hMDEyLTBjOTUwNTE3NTQzYSIsImV4cCI6MTc2NjYzOTEwNCwianRpIjoiYjJhMDI3NmI1YTVhNDAyNDlmZjhkNGM2MWM1NWQxNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sDyDa1mL6IQL9jjm8YG64NZBLzVXtZwGpr5sJng-UlE)

Assume that a custom field named `billing_type__c` has been defined for the Product object. For products with only one-time charges, this field is set to One-Time.

The condition in the product filter returns all products whose `billing_type__c` field value is One-Time.
