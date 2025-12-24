---
title: "Examples of conditions for common use cases"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/condition-builder/examples-of-conditions-for-common-use-cases"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:38.188Z"
---

# Examples of conditions for common use cases

Provides examples and explanations of conditions for common use cases.

## Conditions with the AND operator

![example - AND operator](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/96166f74-3479-475f-a7d7-ecc5e6fa4efc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk2MTY2Zjc0LTM0NzktNDc1Zi1hN2Q3LWVjYzVlNmZhNGVmYyIsImV4cCI6MTc2NjY0MDMzNiwianRpIjoiN2JmMWExMGJhNGNiNGFkNzkyMzcyZTllZWQ3ZGRjMDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.kK0m1TZx4bbasQDpJ9ivp3FHfrlj0REQXgMfQskWyfQ)

The conditions defined in the figure are equal to the following JEXL expression:

`changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0`

It is triggered when an invoice is posted with an amount greater than 1000.

## Conditions for multiple change types

![example - multiple change types](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/457e3132-433b-49e9-bdce-153371598e5b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ1N2UzMTMyLTQzM2ItNDllOS1iZGNlLTE1MzM3MTU5OGU1YiIsImV4cCI6MTc2NjY0MDMzNiwianRpIjoiNGQ0OTYzNGE5NGZiNDQ4Njg5NjhmMDA0NTc5OTQ2Y2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FF4cNn3unBX6JzjWzfEfWNoyV2-YqdP7Ad4e_iUdYkQ) The conditions defined in the figure are equal to the following JEXL expression:

`changeType == 'INSERT' || changeType == 'UPDATE'`

It is triggered when a record of the base object is created or updated.

## Conditions for custom objects

![example - custom object](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/613ae7ce-96cf-4f32-96fb-aaefd4529702?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYxM2FlN2NlLTk2Y2YtNGYzMi05NmZiLWFhZWZkNDUyOTcwMiIsImV4cCI6MTc2NjY0MDMzNiwianRpIjoiMzhkNTk1MTI1ZTczNGViMTgxODI3YzY5NGUwNTcyZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.T2s4KNWK4hpLHHy4OKFf_I7ceCO3GdKsTL0ywwJcLZ0)

The conditions defined in the figure are equal to the following JEXL expression:

`changeType == 'UPDATE' && default__entitlement.Usage__c >= default__entitlement.Entitled__c && default__entitlement.Status != 'Trial'`

It is triggered when an entitlement record is updated if the usage equals to or greater than the entitlement and the entitlement status is not trial.

## Conditions and groups

![example - groups](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4d079ef8-bce3-4a8e-b622-d284ad2e2d75?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkMDc5ZWY4LWJjZTMtNGE4ZS1iNjIyLWQyODRhZDJlMmQ3NSIsImV4cCI6MTc2NjY0MDMzNiwianRpIjoiYTY0ZTY3MTU0N2IzNDAyYjk2ZDM5ZGFlM2U3NzAyNWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.epIQzXgFhqZsLsIcUWHSEq1JsK7QnNn63ymOqrbQtro)

The conditions defined in the figure are equal to the following JEXL expression:

`changeType == 'UPDATE' && (Invoice.Status == 'Draft' || Invoice.Status == 'Posted') && (Invoice.Amount < 20.0 || Invoice.Amount > 1000.0)`

It is triggered when an invoice of Draft or Posted status is updated with an amount less than 20 or greater than 1000.

## Groups and sub-groups

![example - subgroup](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dcd737e1-1516-4d87-a5cc-b7397dcc9cdc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRjZDczN2UxLTE1MTYtNGQ4Ny1hNWNjLWI3Mzk3ZGNjOWNkYyIsImV4cCI6MTc2NjY0MDMzNiwianRpIjoiNGNkOGRjMjE3YjIzNDVjYWE2MTBiM2IxOGRiYTE5YzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Agh5-tYj-RZK30hg8o8wu4W-81GGReM8-aV8h9OAwZs)

The conditions defined in the figure are equal to the following JEXL expression:

`changeType == 'UPDATE' && (default__entitlements.Status__c == 'Trial' || (default__entitlements.Usage__c < default__entitlements.Entitled__c && default__entitlements.Usage__c > 10.0))`

It is triggered when an entitlement record is updated and the entitlement status is trial, or the usage is less than the entitled value and greater than 10.
