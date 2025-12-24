---
title: "Create a schedule for summary runs"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface/using-the-gl-interface/create-a-schedule-for-summary-runs"
product: "zuora-platform"
scraped_at: "2025-12-24T05:46:23.999Z"
---

# Create a schedule for summary runs

Learn how to create a schedule for summary runs

If you want summary runs to be performed on a schedule, you need to create a schedule. You can have multiple schedules.

To create a schedule, perform these steps.

1.  Launch the app.
2.  Select the Schedules tab, and click New Schedule .
3.  Specify a name to identify this schedule.
4.  Optionally, modify the settings that are auto-populated from global settings. To learn about how to configure the global settings, see [Configure Settings for the GL Interface](/zuora-platform/integration/integration-hub/configurable-summary-level-gl-interface).

    -   Day Offset

    -   Run Type

    -   Billing Types

    -   Cash Types

    -   Revenue Types


5.  Select the time zone for the schedule and use the schedule builder to create a schedule.

    -   Click the schedule builder list and select a frequency for the schedule. After you select a frequency, additional settings for the frequency will be displayed. ![gl_connector_frequency_list.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/89bf12a7-b05c-44b7-8afb-91e15d06c547?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg5YmYxMmE3LWIwNWMtNDRiNy04YWZiLTkxZTE1ZDA2YzU0NyIsImV4cCI6MTc2NjY0MTU4MSwianRpIjoiY2U3Y2ZlZTFiOTViNDlhN2E2NDQ0YzM1NWI4MDFiYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.58HHOKOAQQM8a6c0l-bjQiVgSYGm-LUWYCUqDd4Qfcw) The available settings are different for different frequencies. For example, the Monthly settings look like this: ![gl_connector_schedule_monthly.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9a09f201-f030-4658-b54e-2bda7aad314e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlhMDlmMjAxLWYwMzAtNDY1OC1iNTRlLTJiZGE3YWFkMzE0ZSIsImV4cCI6MTc2NjY0MTU4MSwianRpIjoiYzcwNTA3YzgzMTcxNDU1MGEwNjM2ZDVhMGNhMWQ5YjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wZ_qfhcfAEMg2pgrXWHXHk022VveGIrNAXNGminWXWk)

    -   Configure the settings in the schedule builder. For Monthly, you can configure a schedule to run once every several months. For Weekly, you can pick the days in a week when summary runs will be performed.

    -   The Interval field displays the corresponding cron expression for the schedule that you have configured. You do not need to configure the expression.


6.  Add a filtering SQL statement, or remove a statement that you have added previously. If you do not use any filtering statements, click the delete icon to remove the prompt message in the text field. Otherwise, this message will be used as a filtering statement and your summary run may fail. ![gl_connector_remove_filter.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/169f14d4-f507-475e-ba52-0c95366a3258?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE2OWYxNGQ0LWY1MDctNDc1ZS1iYTUyLTBjOTUzNjZhMzI1OCIsImV4cCI6MTc2NjY0MTU4MSwianRpIjoiYjhlOTk4ZjgzZGZjNDRhNWE0MTIzY2JiOTMyMjZhNjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6HC7aaXT3z_-0XzyH37ycNAdHX61LCTEnE7dswuR3To)
7.  Click Submit to save the settings.

    Once a schedule is created, it displays in the Schedules tab. Using the action menu, you can view the details of a schedule, edit or delete a schedule.

    Go to the Summary Runs tab to view summary runs that are completed or in progress.
