---
title: "Zuora Protect FAQ"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-protect/zuora-protect-faq"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:43.511Z"
---

# Zuora Protect FAQ

Frequently asked questions about Zuora Protect, including its availability, features, and key management services.

1\. Is Zuora Protect a paid feature?

Yes, Zuora protect is a paid capability. For further information, please reach out to your Zuora account team, or contact Zuora support at [support@zuora.com](mailto:support@zuora.com).

2\. Is Zuora Protect Generally Available (GA)?

No, Zuora Protect is in the early adopter phase, and offers data encryption and enhanced audit trail features.

3\. After enabling data encryption, will I see encrypted data in the Zuora UI?

No, Data encryption is different from data masking. Data encryption only encrypts your business data at rest in the Zuora databases.

4\. What are the external Key Management Services that Zuora Supports?

The AWS Key Management Service (AWS KMS) is supported with Zuora Platform Encryption for performing BYOK encryption.

5\. Can I use a single encryption key to encrypt the data across all my tenants?

Yes, you can assign/use a single master encryption key to encrypt data across all the tenants. However, as a best practice, we highly recommend that you use separate encryption keys for each of your Zuora tenants.

6\. With the Zuora Managed Keys, is there any limitation in the number of keys created?

No, there is no limit to the number of keys that can be created in the Zuora Key Management system.

7\. Is Zuora Protect supported across all the Zuora product lines (Billing, Revenue, Zephr)?

Zuora Protect is supported only in the Billing application across all environments.
