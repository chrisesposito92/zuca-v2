---
title: "Overview of long-term and short-term reclassification"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/overview-of-long-term-and-short-term-reclassification"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:12.450Z"
---

# Overview of long-term and short-term reclassification

Long-term and short-term reclassification (LT/ST Reclass) to reclassify recognized revenue between contract liability accounts, providing clarity on an organization's revenue position

In Zuora Revenue, when revenue is recognized for the Contract Liability account, there is a provision to reclassify the revenue to both the long-term and short-term accounts. This provisioning process is referred to as long-term and short-term reclassification (LT/ST Reclass) in Zuora Revenue. The main purpose of performing LT/ST reclassification is to reclassify the revenue to be recognized in both long term and short term to understand the revenue position of your organization.

## Configuration overview

The LT/ST reclassification functionality in Zuora Revenue is driven by profiles and primarily works based on the specified profile values. Navigate to Setups > Application > Profiles and use the following profiles to configure the LT/ST reclassification functionality:

-   LT\_ACCT\_MONTHS Use this profile to specify the number of months that are to be considered for the LT/ST reclassification process. For example, if this profile is set to 12, 12 months after the current open period will be considered as long-term periods. If the current open period is January 2019, the long-term periods will start from February 2020 until the revenue end date.

-   LT/ST\_PROCESS\_FOR\_RC\_CA\_STATUS Use this profile to specify whether the revenue contract in CA position should participate in the LT/ST reclassification process. If this profile is set to Yes, LT/ST schedules can be booked for the revenue contract in CA position. Otherwise, the revenue contract in CA position will not participate in the LT/ST reclassification process.


In addition to profile configuration, for the LT/ST reclassification functionality to work, the following configurations are required in the system:

-   ![revenue-book-setup.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ff80f154-340a-4a5f-85ff-b0f4e12cfdcb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZmODBmMTU0LTM0MGEtNGE1Zi04NWZmLWIwZjRlMTJjZmRjYiIsImV4cCI6MTc2NjYzNzI1MCwianRpIjoiMmU0ZTc2OWU5MGEwNDg4M2E1MmUxMmZjNWYyYzBiYzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iS7MsTId8dj7BvXYiZjP4Hpbigx5QNyh58jzqZwOzV4)


Note:

The LTST Enabled radio button must be configured to No if you do not wish to use the LT/ST process. From 37.014.00.00 release onwards, the system will automatically calculate the LT/ST if this radio button is enabled.

-   ![accounting-setup.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8430b47f-41ef-4206-a4a5-d9e0121f2b6e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg0MzBiNDdmLTQxZWYtNDIwNi1hNGE1LWQ5ZTAxMjFmMmI2ZSIsImV4cCI6MTc2NjYzNzI1MCwianRpIjoiMzE0MjU4OTdiZDA5NDFmOThjNjYyMTk0NzliOTczN2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.A0tApZqMXyEKHDTihYFXV2px1PCSJKL3LOKH3EOVxr4)

-   ![role-access-setup.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9bc72cc1-799b-4fea-a507-9c50aa1ce0be?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjliYzcyY2MxLTc5OWItNGZlYS1hNTA3LTljNTBhYTFjZTBiZSIsImV4cCI6MTc2NjYzNzI1MCwianRpIjoiMGE2YWRiNjJhNWVlNDU5ODlmMmQ4ZGExZDA1NTFiYTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._geX4uUcM9Nz4huzzfferR56Xb74xMc555_-CUjbHEc)

    In the Assign Jobs tab, the role of the user access to the RevPro3.0 LT/ST Reclass jobs as shown in the following graphic.

    ![role-access-jobs.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5192c07f-3b9f-4d49-a901-c4a2c3fcc6a3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUxOTJjMDdmLTNiOWYtNGQ0OS1hOTAxLWM0YTJjM2ZjYzZhMyIsImV4cCI6MTc2NjYzNzI1MCwianRpIjoiNzUyNWEwNWM1N2I4NGViMWEwOGFjM2EyN2NmMTVkZmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.2o3rwbBSh2mJ3DUX_xC8LBLypfqZ-UG_y9ikMBJCVYw)

## Transaction input requirements

For LT/ST schedules to be created for eligible transaction lines, make sure the following fields are populated appropriately for the transaction lines that will participate in the LT/ST reclassification:

-   Company Code
-   SOB Id
