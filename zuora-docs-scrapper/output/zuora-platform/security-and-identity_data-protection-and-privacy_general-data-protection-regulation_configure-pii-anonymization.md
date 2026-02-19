---
title: "Configure PII anonymization"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/data-protection-and-privacy/general-data-protection-regulation/configure-pii-anonymization"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:00.415Z"
---

# Configure PII anonymization

Learn how to configure the User Deactivation PII Policy in OneID to control the anonymization of PII when a user is deactivated.

You can control whether PII is anonymized when a user is deactivated in OneID by configuring the User Deactivation PII Policy.

1.  In OneID, go to Settings > Security Policies.
2.  Click Edit.
3.  From the User Deactivation PII Policy drop-down list, one of the following options:

    -   Retain PII: To keep the user's profile data after deactivation.

    -   Anonymize PII: To Replace supported PII fields with anonymized values when the user is deactivated.


4.  Click Save.

When the Anonymize PII policy is enabled, the following user PII data is anonymized at the time of deactivation:

-   First Name


-   Last Name


-   Work Email


-   Login Name


These fields are replaced with anonymized values so that deactivated users can no longer be identified from their account information in OneID or in connected Zuora tenants. This helps reduce the exposure of personal data while preserving user records for operational and reporting needs.
