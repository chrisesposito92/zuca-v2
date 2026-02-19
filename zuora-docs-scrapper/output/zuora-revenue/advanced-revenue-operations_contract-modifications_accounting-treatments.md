---
title: "Accounting treatments"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/accounting-treatments"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:14.002Z"
---

# Accounting treatments

This document outlines the accounting treatments in Zuora Revenue, detailing how contract modifications trigger specific allocation treatments such as retrospective, prospective, and retro-prospective.

Based on the nature of amendment that occurs to the revenue contract, such as price, quantity or term, the corresponding contract modification rule is triggered in Zuora Revenue. Accounting entries are created based on the treatment that is derived from the contract modification rule triggered.

Note: If a revenue contract (RC) is not subject to allocation, then even if it is amended and a contract modification rule code is derived, the RC remains in its initial state.

The following types of allocation treatment can happen based on the contract modification rules:

-   [Retrospective](#concept-eiz0wklv__title-20) (also known as cumulative catch-up)
-   [Prospective](#concept-eiz0wklv__title-81)
-   [No allocation](#concept-eiz0wklv__title-157)
-   [New revenue contract (for new POB only)](#concept-eiz0wklv__title-160)
-   [Retro-prospective](#concept-eiz0wklv__title-171)

## Retrospective

The increase or decrease of goods or services is combined with the promised goods or services in the original contract to create a single performance obligation that is partially or fully satisfied at the date of the contract modification. The revenue that has been recognized is adjusted to reflect the changes in the modification to the transaction price.

Retrospective allocation happens when contract modification occurs to the line that has Retrospective selected for the Modification Treatment column in Zuora Revenue contract modification rules. The contract modification impacts the allocatable amounts. For retrospective allocation, both allocatable and allocated amounts are re-calculated in Zuora Revenue.

## Allocation pattern

The following table illustrates the retrospective pattern. When contract modification happens, Zuora Revenue re-calculates the monthly breakup amounts for all impacted periods (closed periods, current open period, and future periods). The values for the closed periods are already posted so they cannot be changed. The differences between the posted values and the new calculated values for closed periods derives a catch-up value in the current open period. For the current open period, the actual amount is the sum of the catch-up value and the newly calculated amount for the current open period. The values for the future periods are not posted yet so they will be changed to the newly calculated amounts.

| Closed Period | Closed Period | Closed Period | Current Open Period | Future Period | Future Period | Future Period |
| --- | --- | --- | --- | --- | --- | --- |
| X | X | X | Y(= Z + Catch-up) | Z | Z | Z |
| Posted old value | Posted old value | Posted old value | New value + Catch-up | New value | New value | New value |

Note: During the allocation calculation, if there is any rounding difference, one of the lines that participate in allocation will be adjusted to clear the rounding difference. This processing logic applies to all types of allocation treatments.

## Allocation example

In the following example, the allocation in the initial period for two existing lines, Line-1 and Line-2, is as follows:

![retrospective-previous-allocation.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1e518415-ee89-45ce-bcd5-cc87aae48338?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlNTE4NDE1LWVlODktNDVjZS1iY2Q1LWNjODdhYWU0ODMzOCIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiYjQ5NjFlY2EwYjc4NGM2M2EwYTk4N2NhMzQyMzlmZDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.eufWh204jM0ZyXwg3SzrWvL5XhKZ4d2fr81MbiUk4V0)

The Jan-19 and Feb-19 periods have been closed. The current open period is Mar-19. The values for Line-1 and Line-2 have been posted for the closed periods. The current revenue schedules are shown in the following table.

![retrospective-previous-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3efc32cf-4f99-4a09-adac-84dcba95f9b3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNlZmMzMmNmLTRmOTktNGEwOS1hZGFjLTg0ZGNiYTk1ZjliMyIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiODg3NzJmNGQ0NTQ1NDNkZjkxMWZjZjkxN2NmOWFiOGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.BIwV2oM_ldyl50v8hWVXBMCCMJMNda0lJYSGxYixHys)

In Mar-19, a new line, Line-3, is collected, which triggers retrospective allocation according to the contract modification rules. After retrospective allocation, the new allocation information is as follows:

![retrospective-new-allocation.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ca90416b-60aa-487a-8a38-9cdd3bd10e24?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNhOTA0MTZiLTYwYWEtNDg3YS04YTM4LTljZGQzYmQxMGUyNCIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiZTM1MWM2Y2JhYjU3NGM1MTkxOWFhOTkzNWVkNDdiN2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.5kP-mEPC_Y0ORLrjH9M3mMVXCCTgiFEmUL3yndI_EAA)

The new revenue schedules are shown in the following table:

![retrospective-new-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e0c243a-43da-4cfb-908a-191b4e6275b7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMGMyNDNhLTQzZGEtNGNmYi05MDhhLTE5MWI0ZTYyNzViNyIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiZjI0MTQ4MDJjMGQ3NDcyOTkwZGM0OGFiNTU1MGRiNjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.y6-NlVJ16IwwQSz9-Tb7xtSOCpczzL8Iqh_hepZOXx8) .

The following table further explains how the revenue adjustment for each line (highlighted in orange, green, and blue) in the above table is calculated:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47f4bddb-ea18-4a9a-994e-65a99c485aa6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3ZjRiZGRiLWVhMTgtNGE5YS05OTRlLTY1YTk5YzQ4NWFhNiIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiODk5MzQyYmUzZTBhNGZmYmEyYWRlMzJmMDFlNTYyYTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.2w2VmMKpUWM3fHfICcFX3qikTw3jr6NSIutwSsz1lU4)

## Prospective

The remaining goods or services are distinct from those in the original contract, but the modification does not meet the separate contract criteria (that is, the additional goods or services are not sold at a price that is comparable to their standalone values). The revenue that has been recognized in the contract is not adjusted. All the remaining transactions are accounted for on a prospective basis and unrecognized consideration is allocated to the remaining performance obligations.

Prospective allocation happens when an amendment occurs to the line that has Prospective selected for the Modification Treatment column in Zuora Revenue contract modification rules. The contract modification impacts the allocatable amounts. The amounts that have been posted in closed periods are not taken into account for prospective allocation.

Zuora Revenue also provides the functionality to recast the remaining ratable contractual revenue based on the contract modification date. Use the ENABLE\_CONTRACTUAL\_PROSPECTIVE profile to enable or disable this contractual prospective functionality:

-   When this profile is set to Yes, the contract modification date on the sales order line will be used as the start date of the remaining contractual revenue to recast. If the contract modification date is null, Zuora Revenue will use the start date of the current period as the start date to recast. Adjustment revenue will be recast following the contractual revenue timing after SSP allocation is completed.

-   When this profile is set to No, only adjustment revenue will be recast following the contractual revenue timing after SSP allocation is completed. The contractual revenue waterfall remains as is.


The ENABLE\_CONTRACTUAL\_PROSPECTIVE profile has no impact on the determination of the remaining balance for SSP allocation calculation. The remaining balance for SSP allocation of the sales order line is always the beginning balance in the current revision period for prospective allocation.

Note:

Known issue: If the revenue of a line in the prospective revenue contract is partially deferred, the calculation of adjustment revenue will be incorrect. As a workaround, you can fully reverse the revenue of the line and then manually release it based on your requirement.

## Allocation Pattern

The following table illustrates the prospective allocation pattern. Zuora Revenue re-calculates the monthly breakup amounts only for the current open period and future periods. The values that have been posted in the closed periods remain the same and there is no catch-up value for the closed periods.

| Closed Period | Closed Period | Closed Period | Current Open Period | Future Period | Future Period | Future Period |
| --- | --- | --- | --- | --- | --- | --- |
| X | X | X | Z | Z | Z | Z |
| Posted old value | Posted old value | Posted old value | New value | New value | New value | New value |

## Allocation example

In the following example, Jan-19 and Feb-19 periods have been closed. The current open period is Mar-19. The values for Line-1 and Line-2 have been posted for the closed periods. The current revenue schedules are shown in the following table.

![prospective-previous-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/82ad7ee9-b828-49f9-bf60-35930478fc29?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyYWQ3ZWU5LWI4MjgtNDlmOS1iZjYwLTM1OTMwNDc4ZmMyOSIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiYmYwNTMwMjllZDY2NDg0MzgxZGYyMmRkY2JlYjE3YjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Vbeu8vnfMSdYJN98F0SOO_UTxXncQPejgwtzwkguGwA) .

In Mar-19, a new line, Line-3, is collected, which triggers prospective allocation. Zuora Revenue does the following calculations to derive the new allocatable amounts for Line-1 and Line-2.

![prospective-calculation-1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e3330a2-04f4-4e57-b755-c92ff8e1c8a4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMzMzMGEyLTA0ZjQtNGU1Ny1iNzU1LWM5MmZmOGUxYzhhNCIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiMDAzMDMzYTRjMzA2NDQ0MzkzNGQ5NWY3MjdiZDZlMDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.WPawcj3auiczf7BGxU0VabDjnMqkYrJn6ADmZYYfw-E)

The following table explains how the allocatable and allocated amounts are derived for the three lines.

![prospective-calculation-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d4f09d95-2b45-4348-93dd-4eebf7d10726?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ0ZjA5ZDk1LTJiNDUtNDM0OC05M2RkLTRlZWJmN2QxMDcyNiIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiYTM1NGJmNDE3Zjk5NDM5NjhjOTMwZTM3NGY2OTdhMjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Kprloilg6jHfDwX3zsGYKefQRzit3-udDXZX1tjKTIE) .

The new revenue schedules after prospective allocation are shown in the following table:

![prospective-new-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f1c9bc79-6c97-4454-806b-e3bb6f3e6fb3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYxYzliYzc5LTZjOTctNDQ1NC04MDZiLWUzYmI2ZjNlNmZiMyIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiZDM2OTczMjg5YTMxNDEwZGFjNzI4MmZmYzUzZDllMGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.G4RUzsTaTnLYDoW75aH6GgKSvpHhTthnIzB3SxLtckM) .

The comparison of the carves amounts for Line-1 and Line-2 and the carves for the new line are shown below:

![prospective-carve-comparison.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1f2bfc6d-ab67-44bd-b4d0-41a2d4ab1b8b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFmMmJmYzZkLWFiNjctNDRiZC1iNGQwLTQxYTJkNGFiMWI4YiIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiNzcwMWQ3NDk4NzAwNGQ5OWIyMGJmMGVjNWJmNGI0NWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.RjuTWw0yqN2k7ky_ylVQK8DLay_X_eu1-2NTx_T56NM) .

## Calculation changes for $0 line to determine SSP

The posted percentage will not be used for the $0 line for determining SSP in the perspective calculation. The value of SSP is derived based on the current contract position, and the SSP is calculated based on the quantity and remaining term. The value calculated in the previous version is not carried forward to the subsequent version. For more information refer to [$0 (Non-Event\_Manual Based) Line SSP Calculations .xlsx](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d3ea4612-f45e-4275-b952-36c9ba4c03bf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQzZWE0NjEyLWY0NWUtNDI3NS1iOTUyLTM2YzliYTRjMDNiZiIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiN2JhOGNhNzgxMjIxNDNkNzk3NDE4MmNjOTM1NDc2Y2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Tr7Yf4_Pw8QT4TE1Xj6l3PiyfvLrux6GFBQbeCJ2d14&response-content-disposition=attachment%3B+filename%3D%22percent_240_Non-Event_Manual_Based_Line_SSP_Calculations.xlsx%22) .

## No allocation

No allocation happens when the contract modification does not impact the treatment in the revenue contract. It is usually applied to the performance obligation that does not participate in revenue allocation. Both the allocatable and allocated amounts remain the same for this line.

## New revenue contract

The remaining goods or services are distinct from those in the original contract, but the contract modification does meet the separate contract criteria (that is, the additional goods or services are sold at a price that is comparable to their standalone values).

When New Revenue Contract is selected for the Modification Treatment column in Zuora Revenue, existing lines will not be changed by the contract modification that comes in. Instead, Zuora Revenue creates another revenue contract to contain the line. There are two options when a new contract is to be created:

-   Create and Keep Open Zuora Revenue closes the previous revenue contract and freezes it for any future amendments. All the future amendments will be made in the newly created revenue contract. Any amendment to the existing line of the closed contract always goes to the previous one.
-   Create and Close RC Zuora Revenue closes the newly created revenue contract. All the future amendments will be made in the previous revenue contract based on the RC grouping rule. Any amendment to the newly created line will go to the new contract.

## Retro-prospective

In Zuora Revenue, contract modification usually results in either retrospective (cumulative catch-up) or prospective accounting treatment based on the nature of the change. However, there is a case when the new performance obligation is created in a revenue contract, which triggers prospective treatment, and the revenue contract is subject to retrospective treatment in the same period. In this case, the revenue contract will be subject to both retrospective and prospective treatment in the same period, which is referred to as retro-prospective treatment.

## Configuration requirements

For retro-prospective treatment to happen in Zuora Revenue, the following configurations are both required:

-   The ENABLE\_RETRO\_PROSPECTIVE profile must be toggled to Yes ( Setups > Application > Profile ).
-   In contract modification setup, Prospective must be selected for the New POB rule ( Policies > Contract Modification ).

## Calculation example

In the following example, the allocation in the initial period for Line-1 and Line-2 is as follows:

![retro-prospective-previous-allocation.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3675ac3a-f14d-45f0-82fc-4892ca0919c5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM2NzVhYzNhLWYxNGQtNDVmMC04MmZjLTQ4OTJjYTA5MTljNSIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiMDExNzMzMGRkYWQyNDMyZmFmODA1ZDUwYmMyMGExODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.7j_CsLYP2rXFMUsi-H0YT5yPTef8PErR5ALtlzOwUsI)

The Jan-19 and Feb-19 periods have been closed. The current open period is Mar-19. The values for Line-1 and Line-2 have been posted for the closed periods. The current revenue schedules are shown in the following table.

![retro-prospective-initial-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b69e80cd-005e-48df-a10f-2ed4eb79ac97?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2OWU4MGNkLTAwNWUtNDhkZi1hMTBmLTJlZDRlYjc5YWM5NyIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiOGU3Y2E1ZWQyYTc2NDE3YmIwYjhmNmNiNWZhZjYzMzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.QwfXzvde4xYMweR_uSYLBph57Gs4UzCNnbWGIsf4WW4) .

In Mar-19, contract modification occurs to Line-1 with a price decrease of 100, which triggers retrospective allocation.

![retro-prospective-retrospective-allocation.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9b09c565-cc7e-4087-9554-b9b52ae93b1c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjliMDljNTY1LWNjN2UtNDA4Ny05NTU0LWI5YjUyYWU5M2IxYyIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiZThmOWU1ZjQ4NTQwNDM3YjgwZWU4NTM4YjcyZjQ3OTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.2ALpkSuD3Pk4YT4ZYrvpD7zh6I56Iz2tL4JonJl_COA) .

The revenue schedules are updated after retrospective allocation, which is shown in the following table:

![retro-prospective-retrospective-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7f0f606a-fd04-4884-9786-1106df060b84?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdmMGY2MDZhLWZkMDQtNDg4NC05Nzg2LTExMDZkZjA2MGI4NCIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiYmM1YWRkYTMxNjdhNGU0ZDgxMTJiNjRhZTFkZDY0MDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gQLE55lKhxFm0thveGZLVotBUBlnlVZITuJsRPGjpOE) .

Again, in Mar-19, a new POB is added to the revenue contract, which triggers prospective allocation in the current open period. Zuora Revenue does the following calculations to derive the new values for Line-1 and Line-2:

![retro-prospective-calculation.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bdf44164-5e1d-4e38-a83f-8c3b25a40499?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJkZjQ0MTY0LTVlMWQtNGUzOC1hODNmLThjM2IyNWE0MDQ5OSIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiMWMwZDA2MDdkYTc3NDZiNGIzMWNmNzNhYzhjZWI5MzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wXm3OaSL_PM6oLBRJiQ9Ap4f2MNf1P-KrJKWWrXGF6g) .

The updated allocation with the new Line-3 is shown in the following table:

![retro-prospective-new-allocation.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2a5d64a5-ca41-41f0-aaac-a2f5f6f7b2c6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhNWQ2NGE1LWNhNDEtNDFmMC1hYWFjLWEyZjVmNmY3YjJjNiIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiZWFlOWM2OTk1OTRmNDEyMWJiYzA1NjA3ZWU3MGZiM2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.CkaY5OPj3jgRdBTW2DwEF3fzJLDX6LZQwQzQtawfL04)

After retro-prospective allocation, the revenue schedules are as follows:

![retro-prospective-new-schedules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/012f40ca-ecf3-46d5-973a-212157f98f30?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxMmY0MGNhLWVjZjMtNDZkNS05NzNhLTIxMjE1N2Y5OGYzMCIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiNDk2M2JlNjY4NjdmNDg3Yjg0ZjU4MWJkZDc4ZTY3ODciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.yQVC-jt4X7CFlroeQGMkda9kjmjkakcHtyhytJG6eiY)

The following table further explains how the revenue adjustment for each line (highlighted in orange, green, and blue) in the above schedules are calculated:

![retro-prospective-rev-adjustments.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b27a3fc2-0aa7-4e26-89dd-ec03ac368274?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyN2EzZmMyLTBhYTctNGUyNi04OWRkLWVjMDNhYzM2ODI3NCIsImV4cCI6MTc3MTU1ODc1MSwianRpIjoiMGI0YjI1NDIwNmNlNGI2NGI3NjgyYmU0ZmE5ODU0YjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.QtC8mkbO1i0oPAwUvozEKXqXNRBaUu5pZJI9TooCYMs) .
