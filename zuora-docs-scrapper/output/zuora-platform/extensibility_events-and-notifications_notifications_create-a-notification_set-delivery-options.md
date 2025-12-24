---
title: "Set delivery options"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/set-delivery-options"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:49.150Z"
---

# Set delivery options

Learn how to set delivery options, such as email or callout, when creating a notification definition.

Complete [Set system and custom filters](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/set-system-and-custom-filters).

1.  Configure email template:
    1.  Optional: Click Create New Email Template and create a new email template in the pop-up window. For more information, see [Create an email template](/zuora-platform/extensibility/events-and-notifications/email-templates/create-an-email-template). You can skip this step if the email template you want to use already exists.
    2.  Select an email template from the Delivered By Email list.
    3.  Optional: Specify whether to attach billing document PDF files when sending email notifications by selecting the following checkboxes. The available options depend on the base object of the related event:

        -   Include Invoice PDF: Available only if the base object is Invoice or Payment. Do not select this checkbox if the event tracks payment failures and the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) feature is turned on. Otherwise, the email notification will fail.

        -   Include Credit Memo PDF: Available only if the base object is Credit Memo.

        -   Include Debit Memo PDF: Available only if the base object is Debit Memo.


2.  Configure callout templates:
    1.  Optional: Click Create New Callout Template and create a new callout template in the pop-up window. For more information, see [Create a callout template](/zuora-platform/extensibility/events-and-notifications/callout-templates/create-a-callout-template). You can skip this step if the callout template you want to use already exists.
    2.  Repeat step a to create more callout templates as needed.
    3.  Select one or more callout templates from the Delivered By Callout list. Zuora sends the notification to all endpoints configured in the callout templates when the related event is triggered.
3.  Click Next.

See [Define target accounts](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification/define-target-accounts).
