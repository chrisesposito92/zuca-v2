---
title: "Revenue contract versions"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/revenue-contract-versions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:36.393Z"
---

# Revenue contract versions

Zuora Revenue creates versions of revenue contracts to track changes during the Initial Contract Timeline and Revision Timelines, capturing snapshots of contract modifications and revenue recognition.

To help you track the history of changes during the Initial Contract Timeline and the contract modifications during the Revision Timelines, Zuora Revenue creates versions of the revenue contract. Each version of the revenue contract is a snapshot of the revenue contract.

## Initial contract timeline

Within the initial contract timeline, Zuora Revenue creates a version only when the following two conditions are both met:

-   There is a change to the contract.

-   Revenue has been recognized and posted on the contract either within the same period or across fiscal periods.


Although a new version of the contract might be created, Zuora Revenue continues to show the allocation treatment for the contract as Initial in the Workbench.

## Revision timeline

Within a revision timeline, if revenue has been recognized on the contract, Zuora Revenue always creates a version for the first contract modification that occurs.

Zuora Revenue also creates versions within a revision timeline in either of the following circumstances:

-   There are multiple contract modifications both within and across fiscal periods.

-   There are multiple contract modifications that happen at the same time in one fiscal period that will cause different allocations methods to be applied. For example, there is a contract modification to an existing performance obligation that is treated retrospectively as a cumulative catch-up. Then, new transaction lines that represent new distinct performance obligations are added to the revenue contract. Zuora Revenue will create a version for the retrospective change and then another version for the prospective addition of performance obligations.


## Examples of revenue contract versioning

Example 1: The settings about contract modification timeline in Zuora Revenue are as follows:

| Contract Timeline | Duration Type | Duration |
| --- | --- | --- |
| Initial Contract Timeline | RC Creation Period | 0 |
| Revision Timeline | RC Modified Period | N/A |

Revenue contracts are created in Zuora Revenue in January. The Initial Contract Timeline is January and the first Revision Timeline starts from February. The following table shows the versioning of five different revenue contracts.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1bc428cd-72cd-4c01-98cf-fc7205c94954?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFiYzQyOGNkLTcyY2QtNGMwMS05OGNmLWZjNzIwNWM5NDk1NCIsImV4cCI6MTc2NjYzNzIxNCwianRpIjoiMmRiNmQ2Yjc5NjgwNDIxYmJiOGZhZmQwMjkyOWEwM2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MZGEuET17SBIgqQ0uex5XNyl7lbdHXjPsMDGF3TEmao)

Example 2: The settings about contract modification timeline in Zuora Revenue are as follows:

| Contract Timeline | Duration Type | Duration |
| --- | --- | --- |
| Initial Contract Timeline | RC Creation Qtr | 0 |
| Revision Timeline | RC Modified Period | N/A |

Revenue contracts are created in Zuora Revenue in January. The initial contract timeline is Q1 of the year and the first revision timeline starts from April. The following table shows the versioning of five different revenue contracts.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ea617629-bf23-42aa-b812-b297ed280cda?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVhNjE3NjI5LWJmMjMtNDJhYS1iODEyLWIyOTdlZDI4MGNkYSIsImV4cCI6MTc2NjYzNzIxNCwianRpIjoiMGY2YWM4MGZiYjZkNGU3MDhjYjY2MDBlMDJlNjBhOTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FyphLfqz0L7-56KV97Is6vuev5PfObajNLgx9fogN20)
