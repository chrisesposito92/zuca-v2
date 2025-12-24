---
title: "Track usage consumption in Workbench"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/track-usage-consumption-in-workbench"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:50.471Z"
---

# Track usage consumption in Workbench

How to view consumption-related data in Revenue Workbench

After consumption data is synced to Zuora Revenue, you can track the consumption data at the line level from the Workbench. You can do the following things in the Contracts/Orders tab on the Revenue Contract Detail page:

-   [View the consumption history of a specific line](#concept-5seb584q__view_consumption_history)

-   [View individual usage entries associated with a specific line and make changes to the editable fields](#concept-5seb584q__view_usage_history)

-   [View the edit history of the usage entries](#concept-5seb584q__view_usage_history)

-   [Cancel the usage entry when it is not converted to revenue yet](#concept-5seb584q__cancel_usage_history)

-   [View the revenue actions that are related to the consumption POB](#concept-5seb584q__view_revenue_action)


## View consumption history

To view the consumption history, in the Contracts/Orders tab, click Line Details > Consumption History on the line that is based on the consumption POB. The Consumption History window opens to display the usage data, revenue, and VC estimate revenue in each period. If cancellation and replacement happen to the contract, the VC rollover information is also available to help you track the contract changes.

![consumption-history.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fc02b689-2c0a-41ee-8bc9-7c46ba5da7a6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZjMDJiNjg5LTJjMGEtNDFlZS04YmM5LTdjNDZiYTVkYTdhNiIsImV4cCI6MTc2NjYzNzI4OCwianRpIjoiOTBjZjQzZDgyODAyNGM2Njg3ZmMwNTFiNTU2ZTYwM2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._3RVX_ZFZBG5q07lM_Jr1mZkXFkclkfM6JRIyUI4ls0)

## View usage history

To view individual usage entries, click the number in the Usage column of the Consumption History window to open the Usage History window. In the Usage History window, you can do the following things:

-   View the individual usage records that are associated with the selected line in the current period. Each usage record includes the usage amount, source, status, and so on.

-   Change the editable fields on the selected line by hovering and clicking the Edit icon on a specific line in the Usage History window. A pop-up window opens to display the editable fields based on the selected layout of the Usage History window.

-   View the edit history by clicking the Audit Trail icon on a specific line in the Usage History window. You can also export the change history from the audit trail window.


![usage-history.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e0222703-7102-47e5-8e8f-bff15cc182ed?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUwMjIyNzAzLTcxMDItNDdlNS04ZThmLWJmZjE1Y2MxODJlZCIsImV4cCI6MTc2NjYzNzI4OCwianRpIjoiNzg2NmZmNDMzYTFhNGM3ODhjYmFjNmU3MGIyYTU3YTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hDlzlwAe3tQu0QafOrmXP1mGtsUcA9cQaxZ-zTMbqvA)

## Cancel usage entry

In the Usage History window, if the usage record is manually uploaded to Zuora Revenue and the status is being tracked or yet to be recognized, you can also cancel the record directly from this window. After the usage is converted to revenue, the cancellation operation is not applicable.

## View revenue action

Revenue actions related to consumption are visible at the POB level. There are two ways to open the Revenue Action view to check when and how much the usage revenue is released from the POB:

-   Select one of the usage POBs and click Line Details > Revenue Action.

-   Select one of the usage POBs and click Line Details > Consumption History. From the Consumption History window, click the total amount in the Revenue Amount column.


![revenue-action.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e566d1c8-3622-4bc2-a416-082310fd590b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU1NjZkMWM4LTM2MjItNGJjMi1hNDE2LTA4MjMxMGZkNTkwYiIsImV4cCI6MTc2NjYzNzI4OCwianRpIjoiMDMzOGQ5ZDhkOTFlNDJlY2FjZGFhNjBiM2E4NjRmYmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RocUVqNOPJBd0Ufwn-DEc1dZGg8TtL2TOcUiAhl5mWs)
