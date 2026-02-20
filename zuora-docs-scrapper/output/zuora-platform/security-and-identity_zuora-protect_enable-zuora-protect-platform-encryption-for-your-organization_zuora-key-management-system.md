---
title: "Zuora Key Management System"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/zuora-protect/enable-zuora-protect-platform-encryption-for-your-organization/zuora-key-management-system"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:54.032Z"
---

# Zuora Key Management System

Learn how to manage encryption keys in Zuora, including creating keys in the Zuora UI or importing them from AWS KMS.

Zuora Key Management System supports both types of encryption keys that are either created and managed in the Zuora UI or by bringing your own key (BYOK) to Zuora to encrypt your data. For BYOK keys, you can currently import your keys only from your AWS Key Management System.

Complete the following steps to start creating your own keys:

1.  Onboard to Zuora OneID. For more information, see Activate OneID for your organization.
2.  You must have a Zuora OneID Administrator role to be able to generate and manage the encryption keys from the Zuora UI. For more information, see Users in OneID.
3.  In OneID, navigate to Admin console > Encryption Key Management in the left-hand navigation section.

Create a new encryption key within Zuora Managed Keys or Integrate with your existing external Key Store (AWS KMS) with Zuora. After creating the Encryption Key in OneID, assign the keys to the Zuora tenants for the data encryption.
