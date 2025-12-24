---
title: "Configure advanced SMTP server"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-advanced-smtp-server"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:57.485Z"
---

# Configure advanced SMTP server

Learn how to configure advanced SMTP server to send email notifications.

For security purposes, Zuora only allows for identity types that can be actively identified in your Zuora tenant. For example, an email identity must exist as an active user in your Zuora tenant, and a domain identity must match a domain of an active user in your Zuora tenant. Therefore, if the intended email identities or domain identities do not have the corresponding active users in Zuora, you must set up the users and activate them before configuring the advanced SMTP server.

This article is about configuring Amazon SES for the Events and Notifications feature. Zuora also utilizes Amazon SES for Workflow email notifications. You do not need to perform the following steps if you want to verify an identity for Workflow. For more information about how to use your own email address in Workflow, see [Email notifications in Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email).

1.  Navigate to in the left navigation menu.
2.  Click the Settings tab.
3.  In the Email Settings section, click the Advanced SMTP tab and then click Edit.
4.  Create an identity.

    -   To create a domain identity:

        1.  From the New Identity Type list, select Domain Identity.

        2.  Enter a valid domain name in the Add New Identity field. A domain name is valid only if it matches an active user's work email domain in your Zuora tenant. For example, if an active user's email address is `employee@yourcompany.com`, then `yourcompany.com` and `en.yourcompany.com` are both valid domain names.


    -   To create an email identity:

        1.  From the New Identity Type list, select Email Identity.

        2.  Enter a valid email address in the Add New Identity field. An email address is valid only if it matches an active user's work email domain in your Zuora tenant, regardless of the local-part. For example, if an active user's email address is `employee@yourcompany.com`, then `contact@yourcompany.com`, `employee@yourcompany.com`, and `noreply@en.yourcompany.com` are all valid email addresses.



5.  Click Save.
6.  Verify the identity. For more information, see [Verifying identities in Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html).

    -   To verify a domain identity, see [Verify a domain identity](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-advanced-smtp-server/verify-a-domain-identity).

    -   To verify an email identity, see [Verity an email identity](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-advanced-smtp-server/verify-an-email-identity).


7.  Select the Select Advanced SMTP Server checkbox.
