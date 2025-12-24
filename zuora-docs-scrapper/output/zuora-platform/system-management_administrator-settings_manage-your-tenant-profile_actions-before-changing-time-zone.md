---
title: "Actions before changing time zone"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/actions-before-changing-time-zone"
product: "zuora-platform"
scraped_at: "2025-12-24T05:03:58.852Z"
---

# Actions before changing time zone

If you are thinking about changing the time zone of your tenant, there are steps you need to take before changing your time zone.

Before you change your time zone, do the following:

-   Ensure that your Zuora integration is using WSDL 69 or later: Previous WSDL versions allowed you to pass dateTime values into certain date fields. WSDL 69 addresses this issue so that date fields behave correctly as date fields. As a result, any dateTime values passed into these date fields must be updated or they will be rejected.

-   If you choose not to use WSDL 69 or later, ensure that you are not passing in time zone offsets to certain SOAP API fields: Zuora recommends that you do not pass time zone offsets into the fields listed in Date field changes in the SOAP API. If you do pass a value with a time zone offset into one of these fields, the value is converted into Pacific Time (Zuora system time), regardless of your tenant time zone. This could cause the date to change, which might not be what you intended.

-   Process all usage charges: See [Process existing usage charges](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/actions-before-changing-time-zone/process-existing-usage-charges) for details.

-   If you have a Zuora for Salesforce integration, ensure that your Zuora for Salesforce packages are up-to-date: You need to upgrade your Zuora CPQ package to the latest version, and ensure that your Zuora CPQ integration is using WSDL 69 or later.
