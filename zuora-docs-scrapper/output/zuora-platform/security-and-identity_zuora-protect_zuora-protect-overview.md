---
title: "Zuora Protect Overview"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/zuora-protect/zuora-protect-overview"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:54.097Z"
---

# Zuora Protect Overview

Zuora Protect is a suite of security features that enhance data protection, privacy, and compliance within Zuora, offering tools like Platform Encryption and Enhanced Audit Trail to safeguard sensitive information and ensure regulatory compliance.

Zuora Protect is a comprehensive suite of security features designed to enhance data protection, privacy, and compliance capabilities within Zuora. It provides your organization with advanced tools to safeguard sensitive information, prevent unauthorized access, and maintain the integrity of your data.

With features such as Zuora Platform Encryption and Enhanced Audit Trail, Zuora Protect empowers your business to accomplish the following goals:

-   Add additional security to sensitive data by encrypting sensitive data at rest and manage keys with the Zuora Platform Encryption.

-   Meet compliance and industry regulations by monitoring your audit data that dates back a decade with Enhanced Audit Trail.

-   Meet regulatory requirements, mitigate risks, and build trust with your customers by ensuring a secure and compliant environment for your Zuora applications and data.


## How Zuora Protect enhances your security posture

Zuora Protect enhances your security posture by providing additional layers of protection:

![Zuora Protect Architecture](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/57af57ca-a226-4aaf-b787-6601028fdf0e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3YWY1N2NhLWEyMjYtNGFhZi1iNzg3LTY2MDEwMjhmZGYwZSIsImV4cCI6MTc3MTY5NTk0OCwianRpIjoiYWIzNjY0YmM4ZTYxNGZkYTk3MDc2NTc3OGRlNDhlNzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ov2cMSPGte8K6dDbG1ntsHLM_KHDfgp5GXlec13PnFQ)

## What’s controlled at your end?

-   Secure from Identity-related risks with a unified SSO for all Zuora applications.

-   Manage all your users and their access from OneID.

-   Create, rotate and manage your encryption keys from the Zuora UI.


## What’s controlled by Zuora?

-   Zuora platform encryption uses multiple layers of encryption keys to encrypt data, providing balance for security and performance.

-   With Bring Your Own Keys (BYOK), generate and manage your encryption keys outside of Zuora, on your own AWS infrastructure and use the keys to import into Zuora for encrypting and decrypting data.

-   Data is stored as an encrypted text in the MySQL database.


## What’s controlled by AWS?

-   Elastic Block Store (EBS) encryption is enabled, and data at rest on the EBS volumes is encrypted, providing an additional layer of protection against unauthorized access.
