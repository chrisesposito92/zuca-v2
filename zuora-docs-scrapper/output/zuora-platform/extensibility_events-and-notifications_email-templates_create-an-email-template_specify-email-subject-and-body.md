---
title: "Specify email subject and body"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/email-templates/create-an-email-template/specify-email-subject-and-body"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:48.510Z"
---

# Specify email subject and body

Learn how to specify email subject and edit the content of email notifications when creating or updating an email template.

1.  Enter the email subject in the Subject field.
2.  Configure the email body in the Email body section with the email template editor. For more information about how to use the editor, see [Email template customization with the email template editor](/zuora-platform/extensibility/events-and-notifications/email-templates/email-template-overview#concept-6800__email-template-customization). Note that the email template editor supports various fonts. However, email clients used by recipients might only support a subset of these fonts. To ensure consistent rendering, Zuora recommends using web-safe fonts or specifying fallback fonts.
3.  Optional: Insert merge fields into the email subject or body.
    1.  From the Field Type list, select an object.
    2.  From the Field list, select a field from this object.
    3.  Copy the merge field value in the Merge Field Tag field and paste it in the appropriate place in the email subject or body.
4.  Click the Preview icon ![preview email icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/535d9a0a-5f50-4276-881c-4a4ade03bbb8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUzNWQ5YTBhLTVmNTAtNDI3Ni04ODFjLTRhNGFkZTAzYmJiOCIsImV4cCI6MTc2NjY0MDM0NiwianRpIjoiNGQyMzFhYmUzY2E2NDYzZWJiZmFiMDYzODgyMTA4ZWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.2xI8955tKB6-Q5S0Kxdr-Jx29ZpiSHErg2Vj4HenvL4) to see how your email template looks on different screens, such as desktop, tablet, or mobile. You can also switch the color scheme in preview mode.
5.  Optional: Add custom email headers.
    1.  In the Additional Settings section, click Add Custom Email Header.
    2.  Specify the following fields:

        -   Header Name: Enter the header name of the custom email header.
        -   Header Value: Enter the header value of the custom email header.

        You can add merge fields in the header name or header value.

    3.  Repeat steps a and b to add more custom email headers.
6.  Optional: Click Preview to send an email to a specified email address to preview the email format and merge field configuration. For more information, see [Preview an email template](/zuora-platform/extensibility/events-and-notifications/email-templates/preview-an-email-template).
7.  Click Create.
