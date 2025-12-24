---
title: "Verify an email identity"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-advanced-smtp-server/verify-an-email-identity"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:01.907Z"
---

# Verify an email identity

Learn how to verify an email identify when configuring advanced SMTP server.

1.  Open the verification email sent from Amazon SES to your identity’s email address.
2.  Click the link in the email to complete the verification process. Note that the verification link expires in 24 hours.
3.  Wait for the verification to take effect and check the verification status:

    -   If the verification succeeds, the value in the Verification Status column changes from `Pending` to `Success`. You have finished the verification.

    -   If the verification fails, the value in the Verification Status column changes from `Pending` to `Failed`. You need to verify the email identity again:

        1.  Click Retry in the Verification Status column to send a verification email.

        2.  Repeat steps 1 to 3.
