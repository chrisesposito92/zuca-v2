---
title: "Waterfall calculation"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/forecasting/waterfall-calculation"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:08.262Z"
---

# Waterfall calculation

Examples to help you better understand the calculations done in the waterfall

The following waterfall tables are provided as examples to help you better understand the calculations done in the waterfall. Different actual and forecast schedules are presented based on different percentages of released revenue in a revenue contract.

In the example, there are two sales order lines in the revenue contract. The revenue start date is 01-May-2019 and the revenue end date is 31-Aug-2019. In the forecast template definition, Revenue Start Date is selected for Forecast Start Date and Prorate is the adjustment method.

In the Workbench, the following filter is applied to generate waterfall at the transaction level.

![waterfall-filter.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b9bef49f-4c0e-43f6-af96-264b206ff6e6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5YmVmNDlmLTRjMGUtNDNmNi1hZjk2LTI2NGIyMDZmZjZlNiIsImV4cCI6MTc2NjYzNjgyNiwianRpIjoiNjYyMDQzYWVmZWU3NGZhNGEzN2RhYmIyZjg0NThjZjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ORE3qlEJGP6G1DBlVTzbFvSc7mpJ_rCPTwWOkw7wxpI)

When the revenue has not been released (Revenue Released PCT = 0%), the following waterfall data is generated:

![released-revenue-0.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9824dd80-3ad9-43b6-b09d-bbc23df28a88?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk4MjRkZDgwLTNhZDktNDNiNi1iMDlkLWJiYzIzZGYyOGE4OCIsImV4cCI6MTc2NjYzNjgyNiwianRpIjoiNjVlMWVkMmI2MGFhNDZmOWE1MzhiMDljZGFlMTU2MDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lqYtvManQiS5MPQat6n-DagWLEqSRfySaqe0MRAZDXE)

When the revenue is partially released (Revenue Released PCT = 40%), the waterfall data is as follows:

![released-revenue-40.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4f0b4b07-d70b-4093-9ccd-5464d2fa4ed6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRmMGI0YjA3LWQ3MGItNDA5My05Y2NkLTU0NjRkMmZhNGVkNiIsImV4cCI6MTc2NjYzNjgyNiwianRpIjoiYTA1NjZjZTQ4NjhiNDAzNThiZDIxZDFmZDFhOGJiYjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.sZ0_G5hSuTN7bEG-G438RxaO4zk7y6rorHwyZChDXdQ)

When the revenue is all released (Revenue Released PCT = 100%), the following waterfall data is generated:

![released-revenue-100.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9824dd80-3ad9-43b6-b09d-bbc23df28a88?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk4MjRkZDgwLTNhZDktNDNiNi1iMDlkLWJiYzIzZGYyOGE4OCIsImV4cCI6MTc2NjYzNjgyNiwianRpIjoiNzkwZjZiYWJkOThmNDNiNTg1ZWUwZWU4MmRjMWI0NWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JMU-TrBIqNm80jFYHP1nrYUBjdPKNDrYTr3W7wipKTk)

All the above waterfall tables can also be downloaded in the [attached CSV file](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a253f6a9-4825-4bbc-904c-27b3448cc8cf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEyNTNmNmE5LTQ4MjUtNGJiYy05MDRjLTI3YjM0NDhjYzhjZiIsImV4cCI6MTc2NjYzNjgyNiwianRpIjoiMjRmY2QzY2NhNWM1NDhhMzk0NjA0ZGExMTE1ZDE1OWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EwcrUKxOf_MigV2I22ISMR79oNzks8jgABBKdG8wdgU&response-content-disposition=attachment%3B+filename%3D%22forecast-waterfall.csv%22) for your reference.
