---
title: "File: Attachment"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/file-attachment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:14.187Z"
---

# File: Attachment

This reference explains the File: Attachment task.

The attachment task attaches a document file in the workflow data payload to a specified account, subscription, or invoice. If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) is enabled, files for credit memos and debit memos can be attached.

The document file to upload must be available in the data payload. It can be generated from upstream tasks or directly uploaded to the workflow.

Files with the following extensions are supported: .pdf, .csv, .png, .xlsx, .xls, .doc, .docx, .msg, .jpg, .txt, .htm, .html, .eml, .pptx, .gif, .rtf, .xml, .jpeg, .log, .cls

The maximum size of an attachment is 4 MB. The maximum number of attachments on one record is 25. The actual number of attachments that can be uploaded to a record depends on the number of attachments that are already on the record.

## Task settings

-   In the Configuration tab, select the object and the ID of the record that you want to attach files to. Optionally you can add some notes.

-   In the Attachment tab, select the files that you want to upload. You can rename the files that you want to upload by typing the new names in the file name fields. Liquid expressions are allowed in file names. For a list of common Liquid expression examples, see [Common Liquid expressions in Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow).

    By default, a timestamp will be appended to each file. The timestamp will be replaced with the runtime timestamp.

    ![Attachment task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3f3e6f6c-599c-492f-8c92-e93a819ffef6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNmM2U2ZjZjLTU5OWMtNDkyZi04YzkyLWU5M2E4MTlmZmVmNiIsImV4cCI6MTc2NjY0MDkxMiwianRpIjoiN2IxNWM3ZTE0OWRjNGYxM2I3OWE3YzQzMDI3NGZlZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dp342R-dnvNADBsY60R4aVE9OPXNTmNLC7VNlERGzJw)
