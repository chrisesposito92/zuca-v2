---
title: "File: Custom Document"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/file-custom-document"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:16.796Z"
---

# File: Custom Document

This reference explains the File: Custom Document task.

The custom document task generates a billing document based on the HTML template that you provide in the task. This task is similar to the [Custom Billing Document](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document) task. The only difference is that the custom document task does not attach the generated billing document to an object record.

To learn about task settings, template design, and data manipulation techniques, as well as how to view the output, see [Custom Billing Document](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document).

Note that a timeout error will occur if this task is not completed in 3 minutes.

Note:

If you need to use custom fonts in your template, ensure to use font binary in the template instead of loading fonts from a website to avoid performance issues.
