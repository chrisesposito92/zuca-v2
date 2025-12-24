---
title: "Example: Use the merge task in a workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-merge/example-use-the-merge-task-in-a-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:50.818Z"
---

# Example: Use the merge task in a workflow

This example demonstrates how to use the merge task to enable two sub-branches to run at the same time.

## Use case

You want to first update both the customer accounts and invoices, then send an email to the customers.

## Configuration

With the merge task, the workflow can be designed as below so that the customer account update and invoice update can happen simultaneously. When both are complete, the merge task will be triggered and the downstream notification task will be run.

![Sample Merge workflow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/801599cd-e9ab-433b-b65b-da35e40d3569?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgwMTU5OWNkLWU5YWItNDMzYi1iNjViLWRhMzVlNDBkMzU2OSIsImV4cCI6MTc2NjY0MDg4OSwianRpIjoiNzEwZjQwMDcxNDg1NDJjMjgzYTAzZGYzZjZkOTljMjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9EjiV7RkMWzEDHY9USWyMVbAyxQL8bAU9TmRjhz-3Ms)

The merge task in this case helps reduce the implementation time of the workflow.
