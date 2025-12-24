---
title: "Specify basic template information"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/email-templates/create-an-email-template/specify-basic-template-information"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:46.225Z"
---

# Specify basic template information

Learn how to specify the basic information when creating or updating an email template.

1.  Navigate to in the left navigation menu.
2.  Click the Email Templates tab, and then click add new email template to create a new template, or click a template name in the list to edit an existing template.
3.  In the Basic Information Section, enter the following information about the template:

    -   Name: Specifies the template name. The name displays in the Email Templates list in Zuora.

    -   Active: Specifies whether the template is active. You can only add active templates to notifications.

    -   Related Event: Specifies the event that the template is associated with.

    -   Description: Optionally, describes the purpose of the email template.


4.  In the Email Information Section, enter the following information to configure the email settings:

    -   From Name: Specifies the name that appears in the From field in the notification message.

    -   From Email: Specifies the email address that appears in the From field in the notification message. Note that Zuora notification system sends any undeliverable emails to the From Email address.

        -   Tenant Email: With this option selected, the email address configured in your tenant profile is used.

        -   Run Owner: With this option selected, the work email address of the owner who runs the operation is used. This option is only available for specific event triggers, such as Bill Run Completion, Payment Run Completion, Import Processed, and Payment Method Updater Batch Started.

        -   A Specific Email: Select this option and enter an email address if you want to use a specific email address as the From Email.

        -   Advanced SMTP: This option is available for selection only if an advanced SMTP server has been set up and verified. With a verified advanced SMTP server in place, you can also see the email addresses or domains that are specified in the advanced SMTP server with their verification status. Select an email address or a domain, and its value is automatically populated to the text box next to this dropdown list.

    -   To Email: Specifies the email address that receives the notification message. The options depend on the Related Event that you selected. Typically, you can select Bill To Contact , Sold To Contact , Ship To Contact , Both Bill and Sold To Contacts , or All Customer Contacts from the list. You can also select Specific Email(s) and then enter an email address. For subscription-related events (for example, Create New Subscription), you can select options that send the notification to contacts of the invoice owner rather than the subscription owner. Select the Include Additional Email check box to enable the support for additional email addresses. With this check box selected, you can send email notifications for standard or custom events to a list of recipients’ email addresses specified in the Additional Email Addresses field on the customer account details page. Note that this check box is selected by default for the email template associated with the Invoice Posted event.

        Note: Whichever option you select from the To Email list, event notifications are sent only to work email addresses or only to personal email addresses.

        -   If a contact has only work email addresses, the work email addresses are used.

        -   If a contact has no work email addresses but has personal email addresses, the personal email addresses are used.

        -   If a contact has both work and personal email addresses, only the work email addresses are used.


    -   Reply-to Email: Specifies the email address that appears in the Reply-to field in the notification message.

        -   Tenant Email: With this option selected, the email address configured in your tenant profile is used.

        -   Run Owner: With this option selected, the work email address of the owner who runs the operation is used. This option is only available for specific event triggers, such as Bill Run Completion, Payment Run Completion, Import Processed, and Payment Method Updater Batch Started.

        -   A Specific Email: Select this option and enter an email address if you want to use a specific email address as the Reply-to Email.

    -   CC Email: Specifies email addresses to be included in the CC (carbon copy) list of recipients.

    -   BCC Email: Specifies email addresses to be included in the BCC (blind carbon copy) list of recipients. To specify several email addresses for From Email, To Email, Reply-to Email, CC Email, or BCC Email fields, select Specific Email(s) from the drop-down list on any of these fields. Enter the comma-separated email addresses.
