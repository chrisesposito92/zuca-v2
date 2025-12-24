---
title: "Manage attachments in UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-attachment-management/manage-attachments-in-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:50.771Z"
---

# Manage attachments in UI

Learn how to add, view, edit, or delete attachments on various billing documents, requiring specific permissions and roles.

To view attachments on an account, subscription, invoice, credit memo, or debit memo, you must have the permission to view the specific account, subscription, or invoice. You must also have a Billing role that includes the Manage Attachments permission.

To add or edit attachments on an account, subscription, invoice, credit memo, or debit memo, you must have:

-   The permission to update (create or manage) the specific account, subscription, or invoice
-   The API Write Access platform permission
-   A Billing role that includes the Manage Attachments permission

To delete attachments, you must have a Billing role that includes the Manage Attachments permission and the Delete Attachments permission.

To change your Billing role, contact your Zuora platform administrator. For information about assigning Billing roles to users, see Billing roles.

Follow the steps in this section to add, view, edit, or delete an attachment on a Customer Account, Subscription, Invoice, Credit Memo, or Debit Memo detail page.

1.  Open the detail page of the target object. For example, the account detail page.
2.  Scroll down to the Attachments section.

    To add an attachment:

    1.  Click New or New Attachment.
    2.  Click Choose File and select the file you want to attach.
    3.  In the Description field, give a description of the attachment.
    4.  Click Save or Submit to start uploading the file.

    Note: If you upload attachments with malicious contents, an error message will be displayed indicating the uploaded file is not safe.

    To delete an attachment:

    1.  Find the target attachment you want to delete by the title.
    2.  Click the action menu bar and click Delete.

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69443730-85ea-462e-9c14-3158c9eb6042?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5NDQzNzMwLTg1ZWEtNDYyZS05YzE0LTMxNThjOWViNjA0MiIsImV4cCI6MTc2NjY1MTUwOSwianRpIjoiNjJiY2E5MTYzNDAxNDEwYzhkZjk4Yzk0YmEyZWZmNDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iy6bepJUUZTlsOYCW7puXI5MYbWqv0u_ieNcFMDvXCw)

    3.  Click OK to confirm the deletion.

    To edit an attachment:

    1.  Click the title of the attachment you want to edit.

        The file name and description fields become editable.

    2.  Make the changes and click Save.
        Note: You cannot edit the content in the attachment file. To edit the file content, delete the attachment and upload another updated attachment.


    To download an attachment:

    1.  Find the target attachment by the title.
    2.  Click the action menu bar and click Download.
