---
title: "Scope of Audit Trail for  Zuora Billing, Payments, Finance, and Platform"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/scope-of-audit-trail-for-zuora-billing-payments-finance-and-platform"
product: "zuora-platform"
scraped_at: "2025-12-24T05:05:10.251Z"
---

# Scope of Audit Trail for Zuora Billing, Payments, Finance, and Platform

Zuora Audit Trail enables tracking, logging, and reporting of user activities, setting changes, and business object modifications across Billing, Payments, Finance, and Platform features.

## Features supported by Audit Trail

Zuora Audit Trail supports the following capabilities:

-   Track, log, and report on a user’s login history

-   Track, log, and report on setting changes . Changes on the following settings can be audited:

    -   Billing

        -   Default Subscription and Order Settings

        -   Define Billing Rules

        -   Manage Tax codes

        -   Define Discount Settings

        -   Manage Revenue Recognition Codes

        -   Configure Tax Dates

        -   Payment Terms

    -   Payment

        -   Configure Application Rules

    -   Payment Method Type

    -   Commerce

        -   Synchronize Salesforce.com Data

    -   Finance

        -   Configure Accounting Codes

        -   Configure Accounting Rules

        -   Manage Currency Conversion

        -   Set Revenue Automation Start Date

        -   Configure Revenue Event Types

        -   Manage Revenue Recognition Models

        -   Configure Segments

        -   Configure GL Segmentation Rules

        -   Manage Revenue Recognition Rules

        -   Manage Chart of Accounts

    -   Audit Trail

-   Track, log, and report on activities in user management settings . Changes on the following user management settings can be audited:

    -   User

    -   Role & Permission


-   Track, log, and report on changes of the following business objects. For more information about tracking subscription and billing document histories, see Financial transaction histories .

    -   Account

    -   Contact

    -   CreditMemo

    -   CreditMemoItem

    -   CreditTaxationItem

    -   Custom Logic (see [Data Model of Audit Trail](/zuora-platform/system-management/audit-trail/data-model-of-audit-trail) for supported objects)

    -   Custom Object (see [Data Model of Audit Trail](/zuora-platform/system-management/audit-trail/data-model-of-audit-trail) for supported objects)

    -   DebitMemo

    -   DebitMemoItem

    -   DebitTaxationItem

    -   Invoice

    -   InvoiceItem

    -   Orders

        -   Order Action

    -   Notification (see [Data Model of Audit Trail](/zuora-platform/system-management/audit-trail/data-model-of-audit-trail) for supported objects)

    -   Order Line Item

        -   Fulfillment

    -   Product Catalog (see [Data Model of Audit Trail](/zuora-platform/system-management/audit-trail/data-model-of-audit-trail) for supported objects)

    -   Payment

    -   Payment Method

    -   Payment Gateway (Only available to Chase Orbital payment gateway)

    -   Refund

    -   Subscription

        -   Rate Plan Charge

    -   TaxationItem

    -   Workflow (see [Data Model of Audit Trail](/zuora-platform/system-management/audit-trail/data-model-of-audit-trail) for supported objects)

    -   Google Cloud Enterprise credentials used for Payment Page reCAPTCHA Enterprise configuration (represented as the `HpmCaptchaCredential` object)

-   Audit Trail supports the Custom Field Definition object, which represents a custom field that has been defined on a business object.

-   Audit Trail retrieves jobs performed through Deployment Manager.

-   Administrators can enable or disable auditing the above objects through Manage Audit Trail Settings .


Authorized users can generate the Audit Trail reports through [Data Query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) . The Audit Trail records are stored in the following tables:

-   `auditloginevent` for login history

-   `auditsettingchangeevent` for user management and other settings changes

-   `auditobjectchangeevent` for business object changes


Additionally, you can contact [Zuora Global Support](https:support) for advanced auditing requirements.

## Limitations

The Audit Trail feature has the following limitations:

-   Audit Trail reports are retrieved through Data Query. All the Data Query limitations are applicable when you generate Audit Trail reports. See [Data Query Limitations](/zuora-platform/data/data-query/overview-of-data-query) for the details.

-   The usage-based charges with the following charge models are not audited even if the Product Catalog auditing is enabled, including:

    -   Multi-Attribute Pricing

    -   High Water Mark Volume Pricing

    -   High Water Mark Tiered Pricing

    -   Pre-Rated Pricing

    -   Pre-Rated Per Unit Pricing

-   Auditing the changes of business objects has performance impact.

-   To audit custom field changes of a custom object, you must set the custom field as an auditable field. One custom object can have a maximum of five auditable fields. For more information, see Create a new custom object definition .


## Delete or anonymize audit log data

According to the applicable privacy laws, if you want any of your audit trail data/records deleted, Zuora recommends you open a ticket with support. We will assist you in logging into AWS and manually deleting it all.
