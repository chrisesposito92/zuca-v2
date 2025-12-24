---
title: "Logic: Liquid"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-liquid"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:18.855Z"
---

# Logic: Liquid

This reference describes the Logic: Liquid task.

If you need to define Liquid variables or perform Liquid-based operations, you can use a Liquid task. The version of Liquid used in Workflow is 5.0.1.

Use assign commands to define variables. Variables will be saved in the payload under the Liquid key. For variables that are used only in this task, you can start their names with an underscore.

Switch to the Help tab to find common Liquid expressions.

Note:

When you reference a Liquid variable in downstream tasks, you must check Skip Validation in the task settings. Otherwise, you may get an error indicating that the variable is invalid.

![Liquid task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49b96b78-c381-4a31-adf5-aa0c191e4804?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5Yjk2Yjc4LWMzODEtNGEzMS1hZGY1LWFhMGMxOTFlNDgwNCIsImV4cCI6MTc2NjY0MDg1NiwianRpIjoiOTZmOTQyMjIxZTY4NGVhMThlYzllMDZiZDFlODk4NDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.n7YfwRbEDU16eFjQfLE6uxI6OWzYBfgUHOygtl2wPDU)
