---
title: "Manage your tenant profile"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:00.921Z"
---

# Manage your tenant profile

Administrators can manage tenant profiles like contact information, locale, and time zone using the Manage Tenant Profile admin setting.

Use the Manage Tenant Profile page to view and edit your tenant profile, including your contact information, locale, time zone, and environment banner.

## Locale

The locale setting controls the date and dateTime format. The format determines how the Zuora UI displays date information and how users enter a date. For example, if you set the locale to English – United States, the date format is displayed or entered as `MM/DD/YYYY`. If you set the locale to English (United Kingdom), the date format is displayed or entered as `DD/MM/YYYY`.

The user locale set in the user's Personal Settings overrides the locale setting in Tenant Profile.

The following table describes the Zuora inputs and outputs where the date and dateTime format is applied:

| Locale format applied | Locale format not applied |
| --- | --- |
| Zuora UIQuote PDFDatasource Export from Zuora UIDate and dateTime formats for the following are always based on the user locale:Import Customer AccountImport Payment MethodMass Order Entry (Subscription and Amendment)Usage Upload | Zuora API (SOAP and REST API)Export through the Zuora APICallout parametersFinance Mass Updater |

See [Personal settings](/zuora-platform/system-management/additional-tenant-management-settings/personal-settings) for more information about user locale. All tenants are set to use the English – United States locale by default.

## Time zone

Be careful when you select a time zone. When you change the time zone, operations for the UI, APIs, reporting, and data export are based on the new time zone.

Zuora observes Daylight Savings Time, if applicable. For example, if you select the time zone "(GMT-05:00) America/New\_York (Eastern Standard Time)" in January, your tenant's time zone will automatically change to "(GMT-04:00) America/New\_York (Eastern Daylight Time)" in March. Events scheduled for 16:00 EST before the automatic change will occur at 16:00 EDT after the automatic change.

See Before changing your time zone for more information.

## Display environment banner, banner color, and banner label

The Display Environment Banner setting controls whether to show your environment across the top of every screen. By default, the environment banner is not displayed in the production environment, and is displayed in sandbox and services environments.

You can use the Banner Color setting to customize the color of the environment banner. The available colors are Blue-Grey, Navy, Aqua, Rose, and Teal. The default color for sandbox environments is Teal. The default color for services environments is Rose.

The Banner Label setting specifies the environment label displayed in the environment banner. For example, if you set Banner Label to "primary sandbox", the environment banner will display "Viewing: primary sandbox" followed by the tenant name.

You must set Banner Label if you enable Display Environment Banner in a tenant.

## Attachment

The Attachment Limits section lists the read-only tenant-level settings for Attachments. Contact [Zuora Global Support](https://support.zuora.com/) to change the settings in your tenant. To configure CSV injection protection for attachments, see [Configure the CSV Injection Setting](/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/configure-csv-injection-protection-for-attachments) section.

The following settings are available.

| Setting | Default Value | Description |
| --- | --- | --- |
| Storage limit | 8GB | Total file storage limit for the tenant. |
| Available storage | 8GB | File storage available in the tenant. |
| Maximum number of attachments per record | 200 | The maximum number of attachments you can add to one record, for example, one invoice, one customer account, or one subscription. |

## Change History

The Change History list displays all changes made to the tenant profile, including when the change was made, which user made the change, and a description of the change.
