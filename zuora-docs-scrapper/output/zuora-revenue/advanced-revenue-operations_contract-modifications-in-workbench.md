---
title: "Contract modifications in Workbench"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications-in-workbench"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:38.746Z"
---

# Contract modifications in Workbench

Learn how to view and manage contract modifications and allocation treatments in the Zuora Revenue Workbench.

In the Zuora Revenue Workbench, you can view detailed information about contract modifications and allocation treatments for the contract. You can also compare different revenue contract versions to see differences on a POB summary or line level. You can also retain or switch allocation for a contract in certain circumstances.

## Identification of allocation treatment for a contract

On the Revenue Contract Detail page, the last treatment for the contract is displayed within parentheses next to the contract number in the header, as highlighted in the following graphic.

![image-treatment.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c2422f0f-e0d3-415f-99e3-9dffffb8b28c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyNDIyZjBmLWUwZDMtNDE1Zi05OWUzLTlkZmZmZmI4YjI4YyIsImV4cCI6MTc2NjYzNzIxNywianRpIjoiMzkwYzZhODIwMDMzNDk3MDliMDM2ZDBlMzNhYjIzZGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.OIt1tZcHSxRfm3zJFu_llmb2Vq5WbA5jw60Ja4S_lCg)

Three types of treatments are indicated as follows:

-   Initial The contract is in the Contract Initial Timeline, or no change has occurred during the Revision Timeline.

-   P The contract is in the Revision Timeline and the latest treatment that is triggered for the contract is prospective.

-   R The contract is in the Revision Timeline and the latest treatment that is triggered for the contract is retrospective.


## Compare contract versions in workbench

You can track the history of contract changes by viewing different versions of a contract in the Workbench. To find the reason for the contract change, you can compare two versions on the POB summary or transaction line level.

Complete the following steps to compare two versions of a contract in Zuora Revenue: Open the Workbench and locate the revenue contract that you are interested in.

1.  Open the Workbench and locate the revenue contract that you are interested in.
2.  Click the menu icon next to Switch to POB and click Allocation Management > Version.
    ![image-version1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e90b7f1f-83da-4fda-86b4-b0237d844f02?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5MGI3ZjFmLTgzZGEtNGZkYS04NmI0LWIwMjM3ZDg0NGYwMiIsImV4cCI6MTc2NjYzNzIxNywianRpIjoiYjg4MTAyZDlhODE4NGM1Mzg5NTVmMmQxZDE2M2IyYTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nMnyuJwCA0C-0VXDBIJuz_isGlmnFKq3t3xaGdR9XDk)

3.  In the Version History window, select the two versions you want to compare and click Compare. The comparison on the POB summary level is displayed by default.
    ![image-versionhistory.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f86dcbe7-b6d3-4772-865c-6587aa4ffa25?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4NmRjYmU3LWI2ZDMtNDc3Mi04NjVjLTY1ODdhYTRmZmEyNSIsImV4cCI6MTc2NjYzNzIxNywianRpIjoiMDZjYzU4ZmUxMzdjNGNjMDg1ZWU2YTk3NzdiMzkzZDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Sr6SLU3_I0BNervcFDx9m1Q_reLFEI3DcBkxvsEP8yI)

4.  To view the differences on a transaction line level, click View Details. On the line level, the values of each line are displayed.

5.  To switch back to the POB summary level, click View Summary. On the POB summary level, values are consolidated from the transaction lines and displayed as a single line.


## Contract Modification tab in Workbench

On the Revenue Contract Details page, use the Contract Modification tab to view detailed information about contract modifications, such as:

-   The transaction lines that trigger contract modifications.
-   The transaction prices that are allocated for the line.
-   The duration type of the contract revision timeline (either RC Modified Period or RC Modified Qtr) is in the Contract Modification Type column.
-   The rule that is triggered for the line in the Contract Modification Rule column.
-   The accounting period in which the contract change happens is in the Contract Mod Period column.

-   The allocation treatment is performed for the accounting period in the Modification Treatment column.
-   The end date for the revision timeline is in the Revision End Date column.

![image-contractmod.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/36984fcf-8f2f-4790-b687-7a560ce562a3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM2OTg0ZmNmLThmMmYtNDc5MC1iNjg3LTdhNTYwY2U1NjJhMyIsImV4cCI6MTc2NjYzNzIxNywianRpIjoiOGVhN2FhNmFhNjc2NDg5MjliZjcwYWZiYWZmMTAxNzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.m3Rjej4YSKZIVDoPQbli1Ui0WFOCsGK1ZX-Mbq1pdJU)

## Switch allocation in Workbench

From the Workbench, you can switch allocation for a revenue contract from prospective to retrospective or the other way around.

Note:

For a revenue contract to be eligible for the Switch Allocation operation, all the following conditions must be met:

-   Allocation is enabled for the book.
-   The revenue contract is in the revision timeline.
-   There is no default treatment configured for the revenue contract.
-   The accounting entries of the contract have been posted.

Complete the following steps to switch allocation for a contract:

1.  Open the Revenue Contract Detail page for the contract.
2.  Click the menu icon (horizontal three dot icon) next to Switch to POB.
3.  To switch the allocation treatment, click Allocation Management > Unfreeze > Switch.

The allocation for the contact is changed from prospective to retrospective or from retrospective to prospective.

## Retain allocation in Workbench

From the Workbench, you can retain allocation for a revenue contract, so any treatment triggered holds back the contract as it is.

Note:

For a revenue contract to be eligible for the Retain Allocation operation, the following conditions must be met:

-   Allocation is enabled for the book.
-   The revenue allocation treatment has been posted for the accounting period.

Complete the following steps to retain allocation for a contract:

1.  Open the Revenue Contract Detail page for the contract.
2.  Click the menu icon ( (horizontal three dot icon) next to Switch to POB.
3.  Click Allocation Management > Unfreeze > Retain.
