---
title: "Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document/task-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:15.743Z"
---

# Task settings

Use this reference to understand the task settings of the Billing: Custom Billing Document task.

## Template

-   Document Type : Select the billing document type.

-   Document Id : Select or specify a data field to identify the billing document. Ensure you retrieve document IDs in upstream tasks.

-   Template : Enter your body template in this text area. The header and footer of your template should be entered in the Advanced Settings tab.

-   Enable Email : Select this option if you want to send the generated billing document to the selected email address.

    -   Include additional email : Select this option if you want to send the generated file also to the billing document owner via email.

    -   Use email template : Select this option if you want to use the default email template (instead of the HTML template) in the emails.

-   Preload Data : Select this option to automatically load invoice data according to the invoice ID instead of querying the data.


If you need to use custom fonts in your template, ensure to use font binary in the template instead of loading fonts from a website to avoid performance issues.

## Advanced settings

-   Paper Size : Select the page size that you want to use. The options include Letter, Legal, Tabloid, Ledger, A0, A1, and A2.

-   Margin Left , Margin Right , Margin Top , and Margin Bottom : Margins are in pixels. See the diagram below for the different parts and margins of a template. Ensure that the margin-top is greater than the height of the header template, and the margin-bottom is greater than the height of the footer template. For example, if your header HTML is 200 px high, you must specify a number larger than 200 for the margin-top, in order for the header HTML to display on the document. You also need to consider padding above and below the header and footer templates.

    ![Workflow custom invoice sizes](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/538b8ade-917e-43e2-8f4e-6792e584327b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUzOGI4YWRlLTkxN2UtNDNlMi04ZjRlLTY3OTJlNTg0MzI3YiIsImV4cCI6MTc2NjY0MDk3MywianRpIjoiNDBlODYzOGMwYzJjNDg4YTkyNDQ1OTRjMjkyNzA5NzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6YqzTJR6Wt_4YZbj-C3w4fwwIm6nBOa4nAXfeagHb_0)

-   Header Template and Footer Template: The header and footer templates are HTML templates. JavaScript and online fonts or images are not supported in the header and footer templates. To use images in the header or footer, convert them into Base64-encoded strings. To test the sizes of your header and footer, save the HTML and view it in the Chrome browser. You may need to test-run the workflow to see how the margin values affect the layout of the document.
