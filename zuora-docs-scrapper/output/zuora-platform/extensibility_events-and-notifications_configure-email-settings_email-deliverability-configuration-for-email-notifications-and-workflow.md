---
title: "Email deliverability configuration for email notifications and Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/email-deliverability-configuration-for-email-notifications-and-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:04.846Z"
---

# Email deliverability configuration for email notifications and Workflow

Zuora allows you to email invoices and send a variety of customer notifications from within the Zuora Billing application and Workflow to your end customers.

When using the Zuora mail delivery system with a From address of your own domain, you need to specifically authorize the Zuora mail systems to send on the behalf of your domain. Otherwise, some emails might not reach their intended recipients, potentially due to spam and junk filters seeing the emails as phishing.

This can greatly impact your company's ability to collect payment. Customers who do not receive their invoices may not pay their invoices on time, and customers who do not receive notifications regarding their expiring credit cannot provide updated card information.

## Solution

Zuora provides two ways to send emails: Email notification and Workflow.

To ensure your emails reach the intended recipients, you should take one of the following approaches based on which feature and email server type you use:

-   Sending emails with Email notification:

    -   Configure Advanced SMTP server

    -   Configure External SMTP server

    -   Configure Zuora default email server

-   Sending emails with Workflow:

    -   Configure Amazon SES email settings for Workflow

    -   Configure External SMTP server for Workflow


See the following sections for details on each of the approaches above.

## Configure Advanced SMTP server

The Advanced SMTP solution in Zuora is a no-cost option to sending email securely, globally, and at scale. Powered by Amazon's Simple Email Service (SES) that has pre-integrated with Zuora, the Advanced SMTP server is a great solution requiring no partnership or integration work from your side.

All emails sent through Advanced SMTP server are authenticated using DomainKeys Identified Mail (DKIM) authentication mechanism. Authentication is one method to build trust with email providers and can validate legitimacy of emails. When authenticating an email, you must provide evidence that you are the owner of the account and your emails have not been modified in transit.

Meanwhile, Advanced SMTP complies with Domain-based Message Authentication, Reporting and Conformance (DMARC). DMARC is an email authentication protocol that uses DomainKeys Identified Mail (DKIM) to detect email spoofing, which serves as an additional step to ensure that your emails are identified as trusted by the email providers of your customers.

To prevent your emails from being blocked or sent to spam or junk filters, ensure to add `include:amazonses.com` to the Sender Policy Framework (SPF) record in your domain's DNS settings.

You can leverage the Amazon SES mailbox simulator to test different scenarios, such as email bounces or complaints, without bringing any negative impact on your company. See [Mailbox simulator for the Amazon Simple Email Service](https://aws.amazon.com/blogs/aws/mailbox-simulator-for-the-amazon-simple-email-service/) for more information.

For more information about enabling Advanced SMTP, configuring SPF records, and testing email bounces and complaints, see [Advanced SMTP server](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/smtp-server-for-email-notifications#concept-ac-1308__advanced-smtp-server).

## Configure External SMTP server

You can set up an external SMTP server in Zuora and configure either or both of SPF and DKIM records to send notification emails through your own server or a third-party vendor such as SendGrid.

To configure an external SMTP server in Zuora, see [Configure external SMTP server](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-server) for more information. If you use a third-party SMTP server, you can reach out to the vendor to get the setting details. [SendGrid's integration documentation](https://sendgrid.com/docs/API_Reference/SMTP_API/integrating_with_the_smtp_api.html) is provided as an example.

When using SMTP servers of your own or some third-party vendors, you might need to whitelist Zuora's IP addresses to ensure notification emails generated in Zuora are not blocked. For most third-party vendors, such as SendGrid, you do not need to whitelist any IP address. For a list of IP addresses of different Zuora environments, see [Inbound and outbound IP addresses](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses).

## Configure Zuora default email server

For Zuora's default email server, ensure that you publish your SPF record in DNS records of type TXT under your domain name (`yourcompanyname.com`). The terminology used herein is from a DNS context.

An SPF example to authorize Zuora's email server host is as follows:

`v=spf1 mx a:zgateway.zuora.com -all`

In this example, the only hosts authorized to send emails claiming to be from your domain are Zuora's [outbound email servers](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora) and the ones listed in your MX records.

You can check the status of your SPF records using an online tool such as MX Toolbox's Supertool.

## Configure Amazon SES email settings for Workflow

Zuora utilizes Amazon SES to send emails in Workflow with `workflow@zuora.com` as the default From email address. Zuora has validated this email address in Amazon SES, so you do not need to perform any configuration in your Zuora tenant.

If you decide to use your own email from your domain as the From email address, you should take the following steps to ensure emails in Workflow are delivered successfully:

1.  Add `include:amazonses.com` to the SPF record to your domain's DNS settings.This setting in your SPF record informs receiving mail servers that Amazon SES is authorized to send emails on your behalf, and can enhance the deliverability of your emails from being blocked or sent to spam or junk filters.
2.  Submit a request for DNS CNAME records at [Zuora Global Support](https://support.zuora.com/). Then you will receive three CNAME records.
3.  Add the three CNAME records to your domain's DNS settings for DKIM verification.The verification might take up to 72 hours.

## Configure External SMTP server for Workflow

As an alternative to Amazon SES, you can leverage an external SMTP server to send notification emails in Workflow. The approach to enhance email deliverability varies depending on which external SMTP server provider you choose. Reach out to your provider for more information.
