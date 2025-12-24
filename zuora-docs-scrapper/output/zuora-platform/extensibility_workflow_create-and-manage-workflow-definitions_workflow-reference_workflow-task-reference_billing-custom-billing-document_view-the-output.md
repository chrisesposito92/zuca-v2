---
title: "View the output"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document/view-the-output"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:20.748Z"
---

# View the output

Learn how to view the output of the Billing: Custom Billing Document task.

If the task runs successfully, you can view the output in the Tasks tab. Click the menu icon on the left of the task and hover on Files. You can select either the HTML or PDF version of the document. The PDF file is generated based on the HTML file. If you want to do one-time changes, you can modify the HTML file and then generate a PDF file based on the HTML file.

![Custom billing document files](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/05a5ffcf-d5d3-4d48-92c9-54941cc89fe7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA1YTVmZmNmLWQ1ZDMtNGQ0OC05MmM5LTU0OTQxY2M4OWZlNyIsImV4cCI6MTc2NjY0MDk3OCwianRpIjoiMmU0NzJhZDc2NTg1NDIwYzlkMjE3ZmViMGQwMjVhNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xU4Mv77c1O4aUOlFKUtxk2Dor7F67jm3fKkajic4biI)

You can also view the PDF in Zuora UI. It is shown in the History section of the specific document.

An invoice PDF that is attached by a Custom Invoice task is marked as uploaded. An invoice PDF that is generated using the template in Zuora is marked as generated.

If you regenerate the billing document PDF from Zuora, the default Microsoft Word Mail Merge template will be used. If you want to regenerate the billing document PDF using the HTML template, you need to run the workflow again.
