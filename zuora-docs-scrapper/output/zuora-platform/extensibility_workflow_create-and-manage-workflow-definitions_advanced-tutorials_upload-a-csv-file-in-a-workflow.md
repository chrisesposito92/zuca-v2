---
title: "Upload a CSV file in a workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/upload-a-csv-file-in-a-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:16.334Z"
---

# Upload a CSV file in a workflow

Learn how to attach a CSV file to a workflow for data processing.

You can directly upload a CSV file to a workflow. After the file is uploaded, you can select the file as a data object or reference specific data fields of the file using Liquid template language in all tasks of the workflow.

1.  Open the workflow where you want to upload a CSV file, click the Settings tab of the workflow definition.
2.  In the Workflow Triggers section, if the Callout box is selected, deselect Callout.
3.  In the Mapped Input Fields and Params section, configure the input field settings for the file.
    1.  Select Files in the Object list.
    2.  Select File-Field in the Data Type list.
    3.  Specify a name in the Field Name text box to identify the file.
    4.  Select required to have the workflow prompt you to upload a file.
4.  Click Update to save the settings.

    ![Workflow file input setting](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a01b3244-d08d-4508-915e-49209d0d8599?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEwMWIzMjQ0LWQwOGQtNDUwOC05MTVlLTQ5MjA5ZDBkODU5OSIsImV4cCI6MTc2NjY0MDczNCwianRpIjoiZWNiN2Y0NjY4ZjNlNDE4Njk3ZTljYjg0ZmYxZGQzZWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1057r-FFhobPAokYgu7LmyBI0M_UUyTXdGK-IiwDEiI)

5.  Click the Workflow tab at the top, then click Run.

    When you manually run the workflow, a dialog is displayed prompting you to upload the file.

    ![Workflow file upload dialog](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ba0e849b-9dfa-446a-9004-7dc370be51fe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJhMGU4NDliLTlkZmEtNDQ2YS05MDA0LTdkYzM3MGJlNTFmZSIsImV4cCI6MTc2NjY0MDczNCwianRpIjoiYjVhOTlkOWQ3ODUyNDlmYmI0ZTFhMGQ5YWU5OTMwNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lh40R4WQnZEVD_E6-GbJpFkl-c2DQ3D4KNwdNC7NaBI)

6.  Upload the CSV file and configure other required fields, then click Run.

After the file is uploaded, you can select this file from data object lists in tasks or reference this file using Liquid templates in the format of `Data.<file_name>.<field_name>.<field_name>` .

For example, if we have uploaded a file with the file name `file_2`, we can select this file in an Iterate task.
