---
title: "Troubleshoot workflow tasks"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/monitor-and-troubleshoot-workflow/troubleshoot-workflow-tasks"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:11.956Z"
---

# Troubleshoot workflow tasks

Learn how to troubleshoot a workflow task.

Zuora provides a Swimlane tool to help you diagnose the task issue and streamline the troubleshooting process. With Swimlane, you can adjust task parameters or configurations, and rerun a task instance.

1.  On the Tasks tab of Workflow, click the swimlane icon ![Swimlane icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/44031461-00fb-4b1e-abc5-5863dc020ebc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ0MDMxNDYxLTAwZmItNGIxZS1hYmM1LTU4NjNkYzAyMGViYyIsImV4cCI6MTc2NjY0MTAzMCwianRpIjoiODk1OTAyOWMwYjBhNDE2MzkyMGIwOTY0YjBiNDhkMzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PTzkvTsFUUu0WvcSodpp5AJWaIPymZS0brbO2s8I-Qs) from the action menu of a Workflow task to start the Swimlane tool.

    The Swimlane tab is then displayed. If a task fails, the error type and error message are displayed in the Error Details pane.

    -   The API Calls tab shows all the API calls that are performed in the task. Click an ID to view the complete request and response of the API call.

    -   The Data Payload tab provides a simplified presentation of the data payload in the API call of the current task.


2.  Click Task Config to view or modify a task. The left panel shows the graphic overview of this task. To maximize this panel for easier checking, click the task overview icon ![Task overview icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/809b4e8c-075f-41ac-b414-07e29fbf3e68?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgwOWI0ZThjLTA3NWYtNDFhYy1iNDE0LTA3ZTI5ZmJmM2U2OCIsImV4cCI6MTc2NjY0MTAzMCwianRpIjoiOTc0NTFkNTJmZmE3NGQzZjhjMTcyYWY5NmQwNjk2ZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.X11SestyiBFhzMQwM7pCyynl08ICuu7j-OeGX6kiiE8) in the right-side toolbar.
3.  If the errors are within the Liquid expression of the task, you can click the Liquid Tester icon ![Liquid tester icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5414b45e-77dc-4a18-8b63-c2e701636389?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0MTRiNDVlLTc3ZGMtNGExOC04YjYzLWMyZTcwMTYzNjM4OSIsImV4cCI6MTc2NjY0MTAzMCwianRpIjoiNjBiZTE5YThhYjkzNGY5NGI5MjYxODU2NzliYTA5NmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q2FhVLsEQKuwMKCusBgwcjxvkG-D_8SjnfJIDTolW5g) to test the Liquid expressions in the task. Liquid Tester is the playground where you can find potential Liquid expression errors that hinder successful workflow runs, and verify new Liquid expressions. Note that the changes are only saved to the task instance.
4.  After you have made changes to the task, click Rerun to verify whether the errors are fixed. Use this button to test possible configurations.
5.  When you have found a solution, click Promote to apply the updated task configuration to the task setup.
6.  If you cannot locate the issues in your tasks, click the task properties icon ![Task properties icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/08dc931f-dd56-4ee5-992b-3e1495cfef36?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA4ZGM5MzFmLWRkNTYtNGVlNS05OTJiLTNlMTQ5NWNmZWYzNiIsImV4cCI6MTc2NjY0MTAzMCwianRpIjoiMmE1YjI3OTdhZTMwNGU0Nzk2ODE0MjNkYWRlOWQ5MmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.s2bxcalpsoRK_Qt4EOl-fdnHBLbmIMHFdpjGP7aAMk0) to copy all the necessary information to troubleshoot the errors. You can provide these properties when submitting a ticket at [Zuora Global Support](https://support.zuora.com/), and our Support team will assist you in troubleshooting.
