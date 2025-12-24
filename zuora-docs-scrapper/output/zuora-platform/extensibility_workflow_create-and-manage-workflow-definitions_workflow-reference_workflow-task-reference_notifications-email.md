---
title: "Notifications: Email"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:33.675Z"
---

# Notifications: Email

This reference explains the Notification: Email task.

Use this task to notify specific email addresses about changes in your Zuora tenant, or send invoices to customers via email.

Note that you cannot resend email notifications created by Workflow.

## Basic settings

By default, the Preview Email in Logs Without Sending checkbox is checked in the Address tab. When your workflow is ready for use, disable this option. Otherwise, emails would not be sent out.

To allow the logs of emails sent via this task to be included in the Email History report, check the Customer Notification History checkbox. When this option is enabled, you must also specify the Zuora Account ID to which the history will be attached. You can also optionally specify the ID of the object associated with this callout notification in the Zuora Object ID field. Note that there is no validation on the Zuora Object ID field. It is only used for informational metadata and reporting purposes.

The default value of the 'From' email is [workflow@zuora.com](mailto:workflow@zuora.com). If you want to add a custom email address, submit a request at [Zuora Global Support](https://support.zuora.com/).

Your emails may fail to deliver because of security mechanisms from your customers if you change your sending address without correctly authorizing Zuora to send on your behalf. This is done by creating entries in your SPF records and validating your mail with DKIM.

To receive information about such failures or replies to your emails from customers for the current workflow, you can configure your return path in the Return Path (Email) field. To configure a global return path for all Email tasks in your tenant, see [Additional information about return path](#concept-4878__additional_return_path_info).

If workflows in a tenant have issued more than 1,000 bounced emails in one day, Zuora may suspend the workflows in that tenant. If you find your workflow(s) are suspended due to this reason, fix the error causing the bounced emails.

## Custom headers

Custom email headers allow you to include additional information in your email notifications, such as tracking identifiers, unsubscribe links, and other metadata tailored to your specific needs.

You can configure custom email headers in the Custom Headers tab. For more information, see [Manage email templates](/zuora-platform/extensibility/events-and-notifications/email-templates/email-template-overview#concept-6800).

## Body

On the Body tab, you can use the merge field assistant above the text field to obtain the Liquid expression for a merge field.

For security reasons, some HTML tags and JavaScript events are not permitted in the email body, such as HTML, head, and so on. For more information, see Notes and limitations on email templates .

Note: Zuora Workflow evaluates the input email template for potential risks and, if necessary, disables the HTML editor for safety.

## Email attachments

If invoice data is included in the data payload and invoice IDs are present, you can attach invoices to your email by selecting Attach Invoices to Email .

In the Attach Invoices to Email option, the file naming convention for the attachment is `invoice number.pdf` where the `invoice number` denotes the number of the invoice.

You can also attach other files in the payload in your email. All available files in the payload are displayed in the Workflow Files section. You can rename the listed files. Click a file name to edit it.

You can attach additional files if the file IDs are included in the payload. You can specify the file IDs using Liquid syntax. The Liquid syntax can be for a file ID or an array of file IDs in JSON format. All files in the array must be valid. Otherwise, the task will fail.

For example, you have the following data payload in your workflow.

"Data":{ "Liquid":{ "files": \["23123khj42342k3","4233234982934","24358349028dfsk"\], "file":"2c92c085783724872" } }

You can attach the "files" array and the "file" to the email task using the following Liquid syntax.

{{Data.Liquid.files | to\_json}} {{Data.Liquid.file}}

Note that the maximum data size for an email including attachments is 10 MB. If your email exceeds this limit, an error will occur.

## Additional information about return path

If you want to use one email address as the return path for all email tasks in your tenant, go to Workflow's global settings, and enter the Return Path in the Email Settings section.

You can test how special scenarios like email bounces or complaints are handled. For details, refer to the following page: [https://aws.amazon.com/blogs/aws/mailbox-simulator-for-the-amazon-simple-email-service/](https://aws.amazon.com/blogs/aws/mailbox-simulator-for-the-amazon-simple-email-service/)

Zuora Workflow uses Amazon SES for sending emails. If you do not use your own SMTP server for sending emails, you must add the following statement to the SPF record in the DNS configuration for your domain.

include:amazonses.com

For details about adding an SPF record, see [Authenticating Email with SPF in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-spf.html).

## Additional Amazon DKIM and MAIL FROM settings

If you decide to use your own email address from your domain, submit a request for DNS CNAME records at [Zuora Global Support](https://support.zuora.com/). Then add three CNAME records you received to your domain's DNS settings for DKIM verification. How you update the DNS settings depends on who provides your DNS service. If your DNS service is provided by a domain name registrar, contact that registrar to update your DNS records. The domain verification might take up to 72 hours.

After the domain verification is successful, you can use the email address in Workflow across different Zuora environments, such as Production, API Sandbox, Developer Sandbox, or Central Sandbox environment.

Note that the domain verification applies only to Workflow email notifications. If you want to use the same email address for other email notifications, such as an invoice due event, you must add an identity to the SMTP settings in your tenant. For more information, see [Configure advanced SMTP server](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-advanced-smtp-server).

If Zuora Support cannot confirm DKIM, you need to verify the three CNAME records are present in the DNS configuration for your organization. You can follow the instructions on [this troubleshooting page](https://aws.amazon.com/blogs/messaging-and-targeting/dkim-troubleshooting-series-your-dkim-status-is-still-pending/).

If the DKIM validation fails, an email will be sent from [workflow@zuora.com](mailto:workflow@zuora.com) to you with the subject "DKIM Verification Failed". The email includes CNAME records that you need to enter in your DNS settings. Here is an example of the DKIM validation failure email.

![Sample DIKM validation failure email](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f7187d17-cb8f-47ca-8f4c-23a692b1b64f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3MTg3ZDE3LWNiOGYtNDdjYS04ZjRjLTIzYTY5MmIxYjY0ZiIsImV4cCI6MTc2NjY0MDk5MSwianRpIjoiN2IxYzFhOTgyZjU1NGY1OThiNWQ2NTE0MzE3ODc0MmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.j69TW_LeIGxUAF8stX-8vYHXazATYSkT_WFDZqEcJFI)

For details about CNAME records or DKIM settings, see [Setting Up Easy DKIM for a Domain](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dkim-easy-setup-domain.html).

Additionally, you can set the MAIL FROM domain by adding MX and SPF recording to your DNS configuration. For details, see [Setting Up a Custom MAIL FROM Domain](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html).

![Sample MAIL FROM domain configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/38ff898a-76f2-43f9-8f0a-92276e39e3c2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM4ZmY4OThhLTc2ZjItNDNmOS04ZjBhLTkyMjc2ZTM5ZTNjMiIsImV4cCI6MTc2NjY0MDk5MSwianRpIjoiZWQxYjM5Njk2Mzg5NDFhMzg5ZDM1MmQ4MDUzYmIwZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gGlOixGogf6HWqmqZhCjNBWwFNNv0k2JXjQ4xqDZKL0)
