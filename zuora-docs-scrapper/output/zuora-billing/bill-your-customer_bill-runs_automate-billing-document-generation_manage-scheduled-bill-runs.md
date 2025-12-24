---
title: "Manage scheduled bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/manage-scheduled-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:20.237Z"
---

# Manage scheduled bill runs

Learn how to manage scheduled bill runs in Zuora, including navigating to the Bill Runs page, managing scheduled bill runs, sorting and searching for specific runs, and pausing or resuming scheduled bill runs.

You can easily manage scheduled bill runs in one place from the Zuora UI. Perform the following steps to manage scheduled bill runs:

1.  Navigate to
2.  On the bill run page, click the three vertical dots icon on the right side and then click Manage Scheduled Bill Runs.

    A list of upcoming scheduled bill runs, both one-time and recurring, is displayed.

    ![Manage scheduled bill runs](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9125e4b9-7045-438d-8e0e-4ffc4234d586?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxMjVlNGI5LTcwNDUtNDM4ZC04ZTBlLTRmZmM0MjM0ZDU4NiIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiYzUwZTBkMWY0OGY5NDc0MjgzZGI4YzlmNjE5ZGE4YzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.m-2tRZmoNeJGqua4d_qDHPuG5WtcDmUnc8-neF6pmmI)

3.  To find the scheduled bill runs you want to act on do sorting or search as follows:

    -   Sorting: The Bill Run Number column and the Next Run Time columns are sortable. By default, the list is sorted by the Next Run Time .
    -   Direct search: Status and Recurrence are common search criteria. For example, if you want to get a list of scheduled bill runs that happen at 10 a.m. or daily, you can type "10 a.m." or "Daily" in the search bar.
    -   If you want to search bill runs by batches, remember to search by one word, such as "batch7" instead of "batch 7".

4.  To Pause and resume scheduled bill runs:

    Note: Sometimes, you might want to stop a scheduled bill run temporarily and resume it later. The reason could be that your cloud infrastructure is undergoing a downtime, you need to wait for your tax vendor to finish deployment, you need to fix invoice template errors, or you run into a production incident.

    1.  Click ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a1c4abf9-14f8-4c85-8369-74c6fc1337b8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImExYzRhYmY5LTE0ZjgtNGM4NS04MzY5LTc0YzZmYzEzMzdiOCIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiNjQzNDFhYWEwN2YyNGY3YThhMTFlMDdjNTI5NWEwZjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4HVPATjsu_q_I4tZx--FJC-JFUQZ5FVnSp-STBEJvm8) to pause the affected bill run.
    2.  Click ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9e9631fb-594f-4bda-b728-d1904e7d38dc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjllOTYzMWZiLTU5NGYtNGJkYS1iNzI4LWQxOTA0ZTdkMzhkYyIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiNTY0M2VhMzNkNDExNDgyM2I5NWY4MWEwN2QwMTAyZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.VF0w1dDRp_tnMW1lPSg-cwiQR63M2wTv_4prRvHgmg8) to resume the bill run or click ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8c2798d7-5ba6-4531-8fb9-63ac6570fa8c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhjMjc5OGQ3LTViYTYtNDUzMS04ZmI5LTYzYWM2NTcwZmE4YyIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiZGQ3MTRhNmU0YTJhNDk3ODg1ZTdhMDAyODI4NmRkN2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.90vWuiyW8uS6qqIcEKUC2YuhMzc1upvLyqpTE3zu7Bo) to resume the bill run schedule and start a one-time bill run to catch up the billing immediately.

    Note: You can only pause pending scheduled bill runs.
    | Icon | Action | Description |
    | --- | --- | --- |
    |  | Resume | The bill run schedule is resumed and waiting to start the next run. The next run will pick up all billable charges since the last run except that the bill run is non-recurring and the resume time is after the scheduled run time. |
    |  | Resume and run one-time immediately | The bill run schedule is resumed and a one-time bill run starts immediately to pick up billable charges since the last bill run if:The bill run is recurring and the resume time is after the next scheduled run time, orThe bill run is non-recurring. |

    Let's use the following examples to explain how pause and resume work.

    Pause and resume scheduled recurring bill runs

    Suppose today is Oct 2, and you have a scheduled recurring bill run that repeats at 2 pm every day.

    Scenario 1: Resume before the scheduled next run time

    Whether you resume or resume with one-time immediately, the result is the same as illustrated below by the table and the diagram.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 2 | 8 am |  | Status: Paused |
    | Oct 2 | 10 am | or | Status: PendingNext run time: Oct 2, 2 pmNote:Since there is no missing scheduled bill runs from the last bill run until now, even though you click "Resume and run one-time immediately", the system will wait until 2 pm to start the next bill run as scheduled. |
    | Oct 2 | 2 pm | No action | The scheduled bill run starts and picks up all billable charges since the last bill run. |

    ![Example 1: Scenario 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1520ce91-f185-4184-880d-79425a067b61?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE1MjBjZTkxLWYxODUtNDE4NC04ODBkLTc5NDI1YTA2N2I2MSIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiMWY2OTM3YzkzOTk0NDNmYmI1NTBmNTZmOTU3ODM4YzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MUp2QBNLW5Ka3b6QnH2Ap3X-cHg_PyEE610R5aOs_As)

    Scenario 2: Resume after the scheduled next run time

    If you resume, the result is illustrated below in the table and the diagram.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 2 | 8 am |  | Status: Paused |
    | Oct 2 | 2 pm | No action | Status: PausedThe scheduled bill run doesn't start. |
    | Oct 2 | 4 pm |  | Status: PendingNext run time: Oct 3, 2 pm |
    | Oct 3 | 2 pm | No action | The scheduled bill run starts and picks up all billable charges since the last bill run. |

    ![Example 1: Scenario 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a70d1dfe-b30e-420d-83a8-2a3f84293a67?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE3MGQxZGZlLWIzMGUtNDIwZC04M2E4LTJhM2Y4NDI5M2E2NyIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiYmQ3Mjg5ODgyZmU3NDk3OGFmMjA4YjYzZjU3MDEzNjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.SFKCmDeKloTVYV4pn6AwNTHyNljTRvs6Tqp_YP-uttU)

    If you resume with one-time immediately, the result is illustrated below in the table and the diagram.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 2 | 8 am |  | Status: Paused |
    | Oct 2 | 2 pm | No action | Status: PausedThe scheduled bill run doesn't start. |
    | Oct 2 | 4 pm |  | Status: PendingA one-time bill run starts immediately to pick up all billable charges until Oct 2, 4 pm.Next run time: Oct 3, 2 pm |
    | Oct 3 | 2 pm | No action | The scheduled bill run starts and picks up all billable charges since Oct 2, 4 pm. |

    ![Example 1: Scenario 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/43fdbb6e-5569-47f7-accd-b0f38bfe8109?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQzZmRiYjZlLTU1NjktNDdmNy1hY2NkLWIwZjM4YmZlODEwOSIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiYjQ2MzQ2NDk1MjhkNDZmNTk3NTMyOWYyZTM0MmE1OTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.SGZaWvsIoVmlbrbdEOoenVPTDKGlP3UlCFmnMnQQBM4)

    Pause and resume scheduled non-recurring bill runs

    Suppose today is Oct 1, and you have a scheduled non-recurring bill run that will happen on Oct 1, 2 pm.

    Scenario 1: Resume before the scheduled run time

    If you resume, the result is illustrated below in the table and the diagram.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 1 | 8 am |  | Status: Paused |
    | Oct 1 | 10 am |  | Status: PendingNext run time: Oct 1, 2 pm |
    | Oct 1 | 2 pm | No action | The scheduled bill run starts and picks up all billable charges since the last bill run. |

    ![Example 2: Scenario 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/db4e2656-ccfb-487a-a7a0-bd49f8c406e5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRiNGUyNjU2LWNjZmItNDg3YS1hN2EwLWJkNDlmOGM0MDZlNSIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiZDJiNmQ3NzNhYjA4NDVhYzg0ZmExMDk4MmE2NzFiZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.uHPYNGvp55Ztt0Uq1fFlMFt1CV-XTy8bwXarFH1NhKs)

    If you resume with one-time immediately, the result is as below in the table and the diagram.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 1 | 8 am |  | Status: Paused |
    | Oct 1 | 10 am |  | Status: PendingA one-time bill run starts immediately to pick up all billable charges until Oct 1, 10 am.Next run time: Oct 1, 2 pm |
    | Oct 1 | 2 pm | No action | The scheduled bill run starts and picks up all billable charges since Oct 1, 10 am. |

    ![Example 2: Scenario 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7b176069-e934-4b3c-bd07-692d29cf0267?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdiMTc2MDY5LWU5MzQtNGIzYy1iZDA3LTY5MmQyOWNmMDI2NyIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiM2FlZmFjZTc5NzY0NGJjZmE2YzVhMzkzYWRhZWIzYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wW8dA7yEI_2uQZ3-Et9DsEVnEJ4GM-kzktg-g0uPpq0)

    Scenario 2: Resume after the scheduled run time

    If you resume, the result is illustrated below in the table.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 1 | 8 am |  | Status: Paused |
    | Oct 1 | 2 pm | No action | Status: PausedThe scheduled bill run doesn't start. |
    | Oct 1 | 4 pm |  | Status: CancelledNext run time is not applicable. |

    If you resume with one-time immediately, the result is illustrated below in the table and the diagram.

    | Date | Time | Action | Result |
    | --- | --- | --- | --- |
    | Oct 1 | 8 am |  | Status: Paused |
    | Oct 1 | 2 pm | No action | Status: PausedThe scheduled bill run doesn't start. |
    | Oct 1 | 4 pm |  | Status: CancelledA one-time bill run starts immediately to pick up all billable charges until Oct 1, 4 pm.Next run time is not applicable. |

    ![Example 2: Scenario 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1a106cab-e6f1-47f7-aed2-d12a0813a811?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhMTA2Y2FiLWU2ZjEtNDdmNy1hZWQyLWQxMmEwODEzYTgxMSIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiMjU2N2Q3ZjY1ZDI5NDY4Y2I4YWNmM2EwODFjNGZiZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TlO98SAk5FULbzTAsJZl0rZJQrhyNJ64wMweHpfy7aE)

5.  To cancel all future occurrences in a scheduled bill runs:
    1.  Click ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0ec34dec-f1ef-4d6e-a97d-f4f0e32e5760?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBlYzM0ZGVjLWYxZWYtNGQ2ZS1hOTdkLWY0ZjBlMzJlNTc2MCIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiM2Y0YzkwM2M3ZDlkNDMzZGE2M2QwNzAwZDFmOGZhMGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MJe95UtJOWfg7YzmQs7mDj1MR1NKBwu7fCwj52MhvSs) to cancel all future occurrences in a scheduled bill run.

        After being canceled, the bill run will no longer appear on the Scheduled Bill Runs page. It will be moved to the All Bill Runs list.

        Note: Scheduled bill runs in Paused status can't be canceled.

6.  To do bulk actions, select multiple scheduled bill runs from the list.

    Upon selecting the scheduled bill runs you want to act on, applicable action icons will appear in the top-right corner.

    ![Bulk bill runs](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ac8092f1-f539-4ed2-98dc-ff3aa112f6b9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFjODA5MmYxLWY1MzktNGVkMi05OGRjLWZmM2FhMTEyZjZiOSIsImV4cCI6MTc2NjY1MTE3OCwianRpIjoiNDE2ODVlZGZhMTM3NDA1OWEzYWIxZjJhNDcwZGI4YmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ftpGnKAD2CQcoij8TpHKLmuR1Shn9nx_YDdcDbBrJfE)

    The system allows partial success for bulk actions. For example, when you try to resume three paused scheduled bill runs, even though one fails, it will not block the other two from being resumed.
