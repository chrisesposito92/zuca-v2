---
title: "Revenue contract example"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/revenue-contract-example"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:42.511Z"
---

# Revenue contract example

This concept provides a sample revenue contract to illustrate the calculations in the Revenue from Prior/Current CL/CA report.

A sample revenue contract is provided as an example to help you understand the calculations that are involved in the Revenue from Prior/Current CL/CA report. The sample reports are calculated for the sample revenue contract based on the steps outlined in [Calculation logic](/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/calculation-logic). for the Jan-2019 and Feb-2019 periods.

The following table shows the details of this sample revenue contract. All the tables in this section are available for download [in this spreadsheet](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/aaac388d-a00f-4703-9440-29d6d3c52a9c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFhYWMzODhkLWEwMGYtNDcwMy05NDQwLTI5ZDZkM2M1MmE5YyIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiOWFmZDJjN2RhYWQ1NDkzYWE5MDE4ODI2NmRiNjc5NWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mZ4QaONaFLfaX0bFxZ06qEO4YNypr3MQoU2Vr6RZV8s&response-content-disposition=attachment%3B+filename%3D%22Revenue_contract_example_for_disclosure.xlsx%22).

## Sample revenue contract details

The following table shows the details of this sample revenue contract.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a9296912-36f2-4c0f-bba3-4136f0afbf23?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5Mjk2OTEyLTM2ZjItNGMwZi1iYmEzLTQxMzZmMGFmYmYyMyIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiOTU4OWE1NTViMmFiNDExZGExZmU3ZWY5YWJmZGZlNzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yJWiu0sAEBiYPmeY_PmM_80iAQzv2YnfyEUEhGna_t4)

The following table shows the billing information.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3ff6577a-b5ae-44f5-972b-7ea65c2e683c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNmZjY1NzdhLWI1YWUtNDRmNS05NzJiLTdlYTY1YzJlNjgzYyIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiZmE5YWRmNzJmYTZjNGNlYjg3Njg3MGIyZDEzZGI3YmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JPguJ4SKfIk_2E9fu63pmqFiiyXXzTu8aILS7CrEml8)

The two hardware lines are right to bill transaction lines. The ratable methods for the other two lines are Contract Ratable. The waterfall report for the contractual revenue is shown below:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/434ebb6c-b595-480d-8ed1-56537363a294?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQzNGViYjZjLWI1OTUtNDgwZC04ZWQxLTU2NTM3MzYzYTI5NCIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiNTg0OThhODE2YTJiNGMxYWFlNGUyN2NiNTU1NmI4MzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0Zo9jV6B9DJdX0QP5-6V710o7wlRUp991jsZct0E0-I)

The waterfall report for the adjustment revenue is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9fd47b53-4da9-4878-8407-6b02becdd8e4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlmZDQ3YjUzLTRkYTktNDg3OC04NDA3LTZiMDJiZWNkZDhlNCIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiZTYxYjUzMTk4MTMyNDI5ZmI2MWM0NDk5YzI0MWVjODgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.z7mwyCrMD6Llb-OvYc0hm7KMXkM-5YY6ietd9-OEAB4)

The RC Rollforward report for Jan-2019 is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0ccfbfde-b42f-4987-9bdf-343024623871?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBjY2ZiZmRlLWI0MmYtNDk4Ny05YmRmLTM0MzAyNDYyMzg3MSIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiMTM1ZjM2YmRiMjNkNDJmMzkxNzYyMjY3ZTk3OThhMWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GglW8rYxRjXRnt8GnFJGQp5ckDqsqAzIqWY-DAjRzR8)

The RC Rollforward report for Feb-2019 is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/969d1026-4848-4418-b26e-1e1c6d2e289c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk2OWQxMDI2LTQ4NDgtNDQxOC1iMjZlLTFlMWM2ZDJlMjg5YyIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiMTcxMWIyOGZlMTExNDBkYTljMmI3OGYwY2EwMTZiZGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GjMJEX6Z8QbvLPfBP7mZ06W1Aq1fUQ-6qxwgot2chGk)

The journal entries that are created for the two right-to-bill lines in the Jan-2019 period are as follows:

| Hardware 1 | Dr | Cr |
| --- | --- | --- |
| Unbilled AR | 8000 |  |
| Revenue |  | 8000 |
| Account Receivable | 4000 |  |
| Contract Liability |  | 4000 |
| Revenue | 4000 |  |
| Unbilled AR |  | 4000 |
| Contract Liability | 4000 |  |
| Revenue |  | 4000 |
| Hardware 2 | Dr | Cr |
| Account Receivable | 2000 |  |
| Contract Liability |  | 2000 |

In the Feb-2019 period, there is no journal entry created for the Hardware 1 line. The journal entries for the Hardware 2 line are as follows:

| Hardware 2 | Dr | Cr |
| --- | --- | --- |
| Contract Liability | 2000 |  |
| Revenue |  | 2000 |
| Unbilled AR | 2000 |  |
| Revenue |  | 2000 |

The Unbill RollForward report in the Jan-2019 period is as follows. The total unbilled billings from the right-to-bill transaction lines (Hardware 1 and Hardware 2) is 4,000. The total unbilled revenue from the right-to-bill transaction lines is 8,000.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4d98d25d-bfc8-441a-b120-2c2189cfcc4e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkOThkMjVkLWJmYzgtNDQxYS1iMTIwLTJjMjE4OWNmY2M0ZSIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiYjQ3YjI0OTY4MmRlNDIxMTkzMDk4NmU4MGJkMDI1ZjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.T1BKYsGSEgkmZFZNM0fV2HW8O2zSjVPH7ZJE5wsPQ6Y)

The Unbill RollForward report in the Feb-2019 period is as follows. The total unbilled billings from the right-to-bill transaction lines (Hardware 1 and Hardware 2) is 0. The total unbilled revenue from the right-to-bill transaction lines is 2,000.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/02b2f386-9421-4f5f-abf8-1379fbdd629a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyYjJmMzg2LTk0MjEtNGY1Zi1hYmY4LTEzNzlmYmRkNjI5YSIsImV4cCI6MTc2NjYzNjkyMCwianRpIjoiOWQ1YTFmNWQ0ODJhNGNlNWEwZjkwYmY0NGJkYmFjZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.axEilcPEgTu7oW-Co1y6m2w432_mxw0hmMxjO0Y6Nes)
