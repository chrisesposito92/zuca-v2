---
title: "Use the strict variables option to verify Liquid expression"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/use-the-strict-variables-option-to-verify-liquid-expression"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:18.854Z"
---

# Use the strict variables option to verify Liquid expression

Introduces how to verify Liquid expression in Workflow.

When setting up a Workflow task, you can choose to verify the Liquid expression specified in this task by using the Strict Variable mode.

By selecting Strict Variables in the task setting page, Liquid expression errors, such as "Liquid::UndefinedVariable", "Liquid::UndefinedFilter", will be raised during the task runs. However, if you leave Strict Variables unselected, the fields that contain undefined liquid variables will be left empty without raising any errors.

For example, if you use Data.abc to name a workflow task, but the variable abc doesn't exist, the task will be errored out with a "Liquid::UndefinedVariable" error in the Strict Variables mode. If Strict Variables is not selected in the task setting, the task will not be error out. Instead, the task will be named to "Add name to task", which is the default placeholder for the Task Name field.
