---
title: "Locale date formats"
url: "https://docs.zuora.com/en/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/locale-date-formats"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:57.544Z"
---

# Locale date formats

Introduces locale date formatting conventions and locale settings in Zuora Billing and Zuora Payments.

Date formats in the Zuora UI and other features (for example, invoice PDFs, quote PDFs, and Data Source Exports) are based on the locale settings in your tenant.

For example, if you set the locale setting in your user profile to English (United States), Zuora displays the account creation date as 02/14/2022 on a customer account page. After you update the setting to English (United Kingdom), the date is displayed as 14/02/2022.

This article explains the locale settings that determine date formats in Zuora UI and other features except Zuora API. For more information about date formats in the Zuora API, see [Date and dateTime formats](/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/date-and-datetime-formats).

## Locale date formatting conventions

Zuora supports the following locale date formatting conventions:

| Locale setting | Formatting convention | Example |
| --- | --- | --- |
| Dansk (Danmark) | DD-MM-YYYY | 14-02-2022 |
| Deutsch (Deutschland) | DD.MM.YYYY | 14.02.2022 |
| English (United Kingdom) | DD/MM/YYYY | 14/02/2022 |
| English (United States) | MM/DD/YYYY | 02/14/2022 |
| español (España) | DD/MM/YYYY | 14/02/2022 |
| français (France) | DD/MM/YYYY | 14/02/2022 |
| italiano (Italia) | DD/MM/YYYY | 14/02/2022 |
| português (Portugal) | DD-MM-YYYY | 14-02-2022 |
| 日本語 (日本) | YYYY/MM/DD | 2022/02/14 |

## Locale settings in Zuora

You can configure locale settings in the following profiles in your tenant:

-   [Tenant profile](#concept-ac-770__locale-setting-in-tenant-and-user-profiles)

-   [User profile](#concept-ac-770__locale-setting-in-tenant-and-user-profiles)

-   [Communication profile](#concept-ac-770__locale-setting-in-communication-profiles)


Different profiles control the date format of different features.

## Locale setting in tenant and user profiles

The locale setting in tenant profile and user profile controls the date format of the following features:

-   Zuora UI

-   Data Source Exports from Zuora UI

-   Quote PDFs

-   Import Customer Account

-   Import Payment Method

-   Mass Order Entry (Subscription and Amendment)

-   Usage Upload

-   Reporting

-   Custom fields (Date and Datetime custom field types)


The locale setting in user profile takes precedence over the locale setting in tenant profile.

For more information about how to manage these profiles, see [Manage your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile) and [Edit your user profile](/zuora-platform/system-management/additional-tenant-management-settings/personal-settings/edit-your-user-profile).

## Locale setting in communication profiles

The locale setting in communication profiles controls the date format of the following features:

-   Email notification (merge fields from Data Source Exports)

-   Invoice PDFs


Note that Zuora uses your tenant locale setting as the default locale for communication profiles.

The following table explains the date format details of merge fields in notifications:

| Notification type | Merge fields from Data Source Exports | Legacy merge fields |
| --- | --- | --- |
| Email notification | Determined by the locale setting | Not determined by the locale setting |
| Callout notification | YYYY-MM-DD | Not determined by the locale setting |

For example, if you set the locale setting in the communication profile to English (United Kingdom), the `<DataSource.Subscription.TermEndDate>` merge field from Data Source Exports in an email notification is in the format of `DD/MM/YYYY`. However, the date format of the `<Subscription.TermEndDate>` legacy merge field in the same email notification is not affected.

For more information about how to manage the communication profiles, see [Communication profiles](/zuora-platform/extensibility/events-and-notifications/communication-profiles/communication-profile-overview).
