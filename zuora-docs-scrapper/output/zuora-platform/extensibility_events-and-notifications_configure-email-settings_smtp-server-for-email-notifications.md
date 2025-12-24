---
title: "SMTP server for email notifications"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/smtp-server-for-email-notifications"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:39.675Z"
---

# SMTP server for email notifications

An SMTP server handles the delivery of email notifications to your customers.

Zuora offers the following methods to sending email notifications to your customers:

-   Zuora default email server

-   External SMTP server

-   Advanced SMTP server


See the following sections for more information about each method.

## Zuora default email server

It is the out-of-the-box, quick, and scalable solution allowing Zuora to send emails on behalf of your organization.

Ensure that a valid email address is entered in the Email field in your tenant profile ( Administration Settings > Manage Tenant Profile). The email address is used as the `mail.from` value for notifications.

## External SMTP server

You can use your own SMTP server to send email notifications instead of using Zuora's default email server. The benefits for using your own SMTP server include:

-   More control over emails delivered to your customers because messages are sent through your own server

-   Ability to access sent email records through your SMTP server logs


Zuora recommends systems like Pendula (Zuora partner), Amazon SES, Sendgrid, MailJet or Zuora's provided email relay solution that offer larger throughputs on email relay. If you use Google or Microsoft email relay service, you might reach their service limits with Zuora's bulk invoice, payment and account statement processed notification events. Refer to [Gmail sending limits](https://support.google.com/a/answer/166852?hl=en) and [Microsoft 365 message rate limits and throttling](https://docs.microsoft.com/en-us/exchange/mail-flow/message-rate-limits?view=exchserver-2019) for details.

## Advanced SMTP server

Zuora also supports sending emails using DomainKeys Identified Mail (DKIM) through Amazon Simple Email Service (SES), allowing you to comply with Domain-based Message Authentication, Reporting and Conformance (DMARC). You must set up an advanced SMTP server in Zuora and go through the verification processes. For more information about DKIM in Amazon SES, see [Authenticating Email with DKIM in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dkim.html).

Emails are sent from Zuora using Zuora's Amazon Simple Email Service account, which alleviates any need for you to directly partner with Amazon. When your subscribers trigger an event, Zuora sends emails to recipients according to the configured notification definition through Amazon's [SendRawEmail](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html) API operation.

## Identity verifications across different Zuora environments for advanced SMTP server

Zuora Production and API Sandbox environments share verifications of email and domain identities for the advanced SMTP server. If you have verified an email or domain identity in one environment, you can use this verified identity in the other environment without the need to verify it again.

However, the verification-sharing strategy does not apply to Zuora Developer or Central Sandbox environment. For example, if you want to verify a domain identity in Zuora API Sandbox, Developer Sandbox, Central Sandbox, and Production environments, you need to add six CNAME records to that domain's DNS settings: three for the Production and API Sandbox environments and three for the Developer and Central Sandbox environments.

## Configure SPF records for advanced SMTP server

To prevent your emails from being blocked or sent to spam or junk filters, ensure to add `include:amazonses.com` to the SPF record in your domain's DNS settings.

Here is an SPF record example when using advanced SMTP server:`v=spf1 mx include:amazonses.com ~all`

For more information about SPF records for Amazon SES, see [Authenticating email with SPF in Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-spf.html).

## Test email bounces and complaints for advanced SMTP server

Bounce and complaint rates are important metrics for Amazon SES and email service providers. High bounce and complaint rates may lead to a negative impact on your company.

However, sometimes you need to test your product in different scenarios, including when an email bounce occurs. In this circumstance, you can leverage the Amazon SES mailbox simulator to simulate email bounces or complaints, without affecting your company's reputation.

For more information about the Amazon SES mailbox simulator, see [Mailbox simulator for the Amazon Simple Email Service](https://aws.amazon.com/blogs/aws/mailbox-simulator-for-the-amazon-simple-email-service/).

## Notes and limitations about advanced SMTP server

-   You can create at most one domain identity for your Zuora tenant.

-   You can create up to three email identities for your Zuora tenant.

-   You cannot create a domain identity and an email identity with the same domain.

-   With advanced SMTP server, you can only send emails from verified email addresses.

    -   For a verified email identity, the same email address is allowed. For example, if you have `contact@yourcompany.com` as a verified email identity, you can send emails from `contact@yourcompany.com`, but not `employee@yourcompany.com`.

    -   For a verified domain identity, all email addresses with the same domain and subdomains are allowed. For example, if you have `yourcompany.com` as a verified domain identity, you can send emails from `contact@yourcompany.com`, `employee@yourcompany.com`, or `noreply@en.yourcompany.com`.

-   Every email you send with the Advanced SMTP server contains a DKIM signature for `amazonses.com` in the email header. To comply with the DMARC authentication protocol by including another DKIM signature for your own domain, you must verify a domain identity for your domain and send emails with email addresses from that domain.
