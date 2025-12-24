---
title: "Uploaded file processing"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/upload-a-csv-file-in-a-workflow/uploaded-file-processing"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:19.182Z"
---

# Uploaded file processing

Use this reference to learn more about uploaded CSV file processing.

## Parse and break up the data in the uploaded File

If you need to process the data entries separately, you can add an Iterate task to parse and break up the data in the file.

If you want to iterate unique fields, you must manually enter the unique field, because the data in the file is not parsed until the workflow is run.

## Determine the data structure of the payload

If you are not sure about the data structure or the exact data fields to be used in Liquid statements, you can test run the workflow. Ensure you have at least one task subsequent to the Iterate task.

When the workflow is completed, start the Swimlane on the task after the iterate task.

![Sample Swimlane after the iterate task](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f1b36c0d-5778-4f73-9932-aeec67a556af?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYxYjM2YzBkLTU3NzgtNGY3My05OTMyLWFlZWM2N2E1NTZhZiIsImV4cCI6MTc2NjY0MDczNiwianRpIjoiM2IwOWU0OWE3ZmY3NGMzZjlkZWVhYzNmMTkxZjIwYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hSQyAxjQqohNfltM9vX_WhdDjniwHBaBx5-Xc2u83Z0)

You can find the data structure of the payload from the bottom left. Use the Liquid Tester to test Liquid statements. When you get a desirable statement, copy it and paste to the target task. To edit a task in Swimlane, select the task and click Workflow Task Config to open the task editing window.

## Data payload extraction

The Iterate task extracts headers from the CSV file and creates a nested data structure based on the headers. It accepts `[.]` or `[:]` as the field delimiter and trims spaces within each field. Finally, it connects different levels of fields using `[.]`. For example, a header `Account : Account Id` in a CSV file will be parsed as `Account.AccountId`.

To access the value, you can use this Liquid statement:

{{ Data.<file\_name>.Account.AccountId }}
