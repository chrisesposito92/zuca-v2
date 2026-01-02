---
title: "Deliverability of emails"
url: "https://developer.zuora.com/zephr-docs/others/deliverability-of-emails/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:30.826Z"
---

#

Deliverability of emails

If you’re using Zephr’s Identity Module, your end-users will, from time-to-time, receive hygiene emails for tasks such as logging in, registering, and resetting passwords.

It’s important for these emails to reach your end-users, to enable them to get the most out of your platform. Generally speaking, there are three key pillars to an email being received first-time, every-time for a user, rather than being sent to spam. They are:

-   The sender server and IP addresses
-   Your domain settings and reputation (whether your emails have been marked as spam)
-   The content of the emails

With that in mind, this article details what we do – and what you can do – to ensure they reach a user’s inbox.

##

How We Send and Deliver Emails

###

**Sender Server & IP Addresses**

The first point above – the sender server and IP addresses – references how emails are sent to your users.

Zephr sends all emails (found under Settings > Emails) using Amazon SES, an Amazon product with a high reputation for deliverability.

Amazon SES closely monitors guidelines to help ensure that legitimate, high-quality email is delivered reliably to recipient inboxes. However, neither Amazon SES nor any other email-sending service can guarantee the delivery of every single email. ISPs can drop or lose email messages, recipients can accidentally provide the wrong email address, and if recipients do not wish to receive your email messages, ISPs may choose to reject or silently drop them.

That being said, Zephr continues to regularly check our email deliverability, currently scoring 10/10 for deliverability stats on Mailtester.com.

##

How You Can Improve Email Deliverability

###

**Domain Settings and Reputation**

When you send high-quality content, your reputation becomes more trusted over time. Excessive bounces and complaints negatively impact your reputation and result in Zephr emails ending up in a user’s spam folder. From a best practice perspective, sending marketing emails from a different email address to your hygiene emails will help protect hygiene emails from the effects of marketing emails bouncing or being marked as spam.

Likewise, there are email authentication mechanisms available which may help.

[SPF](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-spf.html), [DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dkim.html), and [DMARC](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dmarc.html) all require you to add records to your DNS Configuration and improve email authentication or help to prevent email spoofing. Take a look at the Amazon SES guides for more details.

###

**Email Content**

The final key piece to high email deliverability falls on the content within the email. Zephr’s standard email templates have been tested with high score results on Mailtester.com, however, if you wish to update the copy, here are some things to consider:

-   Include accurate header and subject lines
-   Requiring email verification to register helps to confirm opt-in for email sending.
-   If you send an email that contains links, check those links against the Spamhaus Domain Block List (DBL). To test your links, use the  [Domain Lookup Tool](https://www.spamhaus.org/lookup/)  on the Spamhaus website.
-   Avoid having too many links in your email, as this can look suspicious. When adding a link, use the  `https://`  prefix wherever possible
-   Use consistent design elements and writing styles in each message that you send to ensure that customers can easily identify messages from you.
-   Using your brand’s name in your “from” line will help to reduce spam complaints. It’s also been proven to improve open rates. Increasingly, companies use a front person to give their emails a more personal feel. To use this approach, add “from \[ business name \] ” after the individual’s name – for example, Gwen from Zephr.
-   Personalize the “To” field, and don’t use the recipient’s email address, or user id, in the subject line.
-   Avoid using capslock and unnecessary punctuation such as “!!!” or “$$$”
-   Avoid JavaScript and HTML embedded forms
-   Double-check your grammar and spelling
-   Avoid spam terms such as “100% free”, “Act Immediately”, and “F R E E”
