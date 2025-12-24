---
title: "Set permissions for Zuora Salesforce connector package"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/set-permissions-for-zuora-salesforce-connector-package"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:34.258Z"
---

# Set permissions for Zuora Salesforce connector package

This guide explains the necessary permissions to synchronize data between Zuora and Salesforce, including setting permissions for custom objects and ensuring system settings for package upgrades.

This article describes how to set the permissions required to synchronize your data from Zuora to Salesforce.

## Permissions Required

Before you can synchronize your data from Zuora to Salesforce, you must set the following permissions for the Salesforce profiles of the appropriate user accounts:

-   The Read, Create, Edit, Delete, Modify All permissions on the following custom objects to synchronize Product Catalog:

    -   Feature

    -   Product

    -   Product Feature

    -   Product Rate Plans

    -   Product Rate Plan Charges

    -   Product Rate Plan Charge Tiers

    -   Unit Of Measure (Zuora\_\_UnitOfMeasure\_\_c)

-   The Read, Create, Edit, Delete, Modify All permissions on the following custom objects to synchronize Accounts and Related Objects:

    -   Billing Accounts

    -   Invoices

    -   Invoice Payments

    -   Payments

    -   Payment Gateway

    -   Payment Methods

    -   Payment Term

    -   Refunds

    -   Refund Invoice Payments

    -   Subscriptions

    -   Subscription Product & Charges

    -   Subscription Rate Plan

    -   Subscription Rate Plan Charge Tier

    -   Sync Histories

    -   Unit Of Measure (zqu\_\_ZUnitOfMeasure\_\_c)

-   The View All Data permission on all custom objects

    During a sync session, in order to supply a unique ID for each record inserted, the sync user needs to be able to see all records in the data set and ensure that the new ID is not used by existing records.


You should restrict all other users to the Read access only.

## Permission Required for upgrading Zuora Salesforce Package

When you upgrade to a newer version of the Salesforce package or start running Zuora Salesforce Connector for the first time, the Zuora Salesforce Connector user must have the Customize Application system permission. This permission is used for field migration when new fields are introduced for existing objects.

To check and enable the permission, log on to Salesforce as an admin user, and verify that the sync user has the Customize Application system permission. If the user does not have this permission, grant this permission to the user. This user permission is necessary for the package data migration and is used for the first full sync when you start using Zuora Connector for Salesforce CRM.

If you have Zuora Salesforce Connector enabled, whether the installed Zuora Salesforce package version supports syncing the configured objects will be verified. Before upgrading the package, you must ensure that the profiles of sync users must have the View All Custom Settings system setting enabled in the Salesforce organization. It is to ensure sync users can read the Zuora Config custom setting. If they cannot read this setting, object syncs will be throttled.
