---
title: "Support Fields for BYOK Encryption"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-protect/enable-zuora-protect-platform-encryption-for-your-organization/support-fields-for-byok-encryption"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:41.451Z"
---

# Support Fields for BYOK Encryption

Zuora field-level encryption lets you encrypt sensitive data on the standard fields. You can encrypt certain fields on standard objects with some exceptions. Encrypted fields work normally across the Zuora UI, business processes, and APIs.

| Zuora Object | Field |
| --- | --- |
| Contact | Address1 |
| Address2 |  |
| Fax |  |
| FirstName |  |
| HomePhone |  |
| LastName |  |
| MobilePhone |  |
| OtherPhone |  |
| PersonalEmail |  |
| WorkEmail |  |
| WorkPhone |  |
| Contact Snapshot | Address1 |
| Address2 |  |
| Fax |  |
| FirstName |  |
| HomePhone |  |
| LastName |  |
| MobilePhone |  |
| OtherPhone |  |
| PersonalEmail |  |
| WorkEmail |  |
| WorkPhone |  |
| Account | AdditionalEmailAddresses |
| NotificationHistoryCallout | RequestUrl |
| RequestPayload |  |
| TaxableItemSnapshot | DestAddressLine1 |
| DestAddressLine2 |  |

Note:

When you encrypt a field:

-   Only new values added through the UI post-enabling encryption will be encrypted.

-   Existing values will not be encrypted.


To encrypt your existing data after enabling field encryption, please reach out to the Zuora support team at support@zuora.com .
