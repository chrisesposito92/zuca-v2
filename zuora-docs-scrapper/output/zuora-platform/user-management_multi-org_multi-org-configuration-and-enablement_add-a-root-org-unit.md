---
title: "Add a root org unit"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/add-a-root-org-unit"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:12.225Z"
---

# Add a root org unit

Learn how to add the root organization unit by specifying hierarchy details, invoice display information, and reporting currency settings.

1.  Navigate to the Hierarchy section in the Edit Organization Information pop-up, and specify the following information:

    -   Name: Specify a name for your organization's hierarchy
    -   Invoice Display Details: Add invoicing information such as the new org unit's location, Billing Address, Banking Information (routing number), Taxation ID, or any other helpful information for dynamic invoice generation.
    -   Reporting currency: The reporting currency is a tenant-level setting that is defined at the time of your account creation. This is a read-only, non-editable field.
    -   Description: Specify customized marketing messages or any other information for dynamic invoice generation for the new org unit.

    The following table lists the permissible values for each of the fields:

    | Org Unit Field | Characters allowed | Is Mandatory |
    | --- | --- | --- |
    | Org Unit Name | A-Z, a-z, 0-9, and underscore ( _ ) and dash ( - ) with max of 50 characters, Half-width space and Full-width space. | Yes |
    | Org Unit Description | A-Z, a-z, 0-9;,:,(,),[,], &,@,’,”,/,\,-,_,*, & !Half-width space and Full-width space. | No |
    | Invoice Display Name | A-Z, a-z, 0-9, and underscore ( _ ) and dash ( - ) with max of 50 charactersSpecial characters allowed are “.” & “,”Half-width space and Full-width space. | No |
    | Invoice Display Details | A-Z, a-z, 0-9;,:,(,),[,], &,@,’,”,/,\,-,_,*, & !Half-width space and Full-width space. | No |

2.  Click Save
