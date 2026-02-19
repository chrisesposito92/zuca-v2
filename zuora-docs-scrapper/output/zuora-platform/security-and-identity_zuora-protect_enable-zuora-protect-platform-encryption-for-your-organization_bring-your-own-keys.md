---
title: "Bring your own keys"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/zuora-protect/enable-zuora-protect-platform-encryption-for-your-organization/bring-your-own-keys"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:00.435Z"
---

# Bring your own keys

Learn how to connect and integrate your external AWS key store with Zuora to manage encryption keys.

You can connect with your external AWS key store and import keys from your key store to encrypt your data. Follow the steps mentioned below to connect with an external key store:

1.  In OneID, navigate to Admin console > Encryption Key Management in the left-hand navigation section.
2.  On the External Key Store page, click Connect External Key Store .
3.  Add the following values to integrate your external AWS Key Store with Zuora:

    -   Key Store Name

    -   Region

    -   Access Key ID

    -   Key Secret


4.  Click Save .

Once the connection has been established, your external store will be listed in the External Key Store section.

Note:

ith Zuora Protect platform encryption, you can only encrypt standard fields on standard objects. We recommend you encrypt the least number of fields possible, for best results.
