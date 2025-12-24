---
title: "Modify org labels in Multi Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/modify-org-labels-in-multi-org"
product: "zuora-platform"
scraped_at: "2025-12-24T05:19:14.150Z"
---

# Modify org labels in Multi Org

This guide introduces the prerequisites and best practices for modifying an org label.

Modifying Org Labels is a significant operation that requires careful consideration due to its potential effects on data accuracy, compliance, and reporting across finance, revenue, and integrated systems. These changes are typically prompted by external business decisions like re-branding or organizational restructuring. To help ensure a smooth transition and minimize potential disruptions, we recommend avoiding Org Label modifications for any active products or accounts in your production environment.

Note:

Please proceed with these changes only after all associated subscriptions are inactive, appropriate data backups have been created, and all connected downstream systems (such as ERP, Revenue, and Reporting) have been updated and confirmed to be in sync.

## Modifying Multi Org labels

Zuora’s Multi-Org setup supports evolving business needs, such as realignment by region or product category, or adjustments to test organizations. When updating configuration to align with changing requirements, ensure all potential downstream impacts are considered and managed.

Advanced Multi-Org setups utilize a parent-child hierarchy, allowing organizations to reflect complex reporting or operational structures. This hierarchy enables flexible assignment and inheritance of settings, including financial rules and reporting configurations, across related organizations.

-   Reassigning an existing Org to a different region or product category can impact reporting structures and change product availability within that Org. Before making any reassignment, evaluate downstream impacts with relevant stakeholders and document changes for audit purposes.

-   Before moving Orgs set up for testing from lower environments to production, review and adjust their configuration to ensure data and settings are accurate and consistent with production requirements.


## Prerequisites for modifying org labels in a multi org setup

Before modifying Org Labels, ensure every step in this checklist is completed in sequence:

1\. Ensure No Active Subscriptions:

Do not modify Org Labels on Products or Rate Plans linked to active subscriptions, as this can impact renewals, amendments, pricing, product availability, and reporting accuracy. If active subscriptions exist, complete or migrate them before making changes.

Do not attempt to change Org Labels on Products or Rate Plans with active subscriptions. Modifying labels in such cases can impact subscription renewals and amendments, pricing and product availability by org and reporting accuracy. Key Impacts of Org Label Changes on Subscriptions

Modifying the Org Label on a Product or Product Rate Plan Charge after it has been referenced in active subscriptions can cause significant issues in Zuora Billing and Revenue. Product Rate Plan Charges (PRPCs) define billing rules for products and services. When a subscription is created, the PRPC configuration is copied to Subscription Rate Plan Charges (SRPCs). PRPCs have multiple components that determine calculation, billing, accounting, and tax treatment of charges.

Modifying the Org Label on a Product or Product Rate Plan associated with an active Subscription can lead to downstream issues, such as misaligned data and billing errors.

-   Disrupts the link between Subscription Rate Plan Charges and their source Product Rate Plan Charges, potentially causing data inconsistencies.

-   Causes invoice items to be incorrectly generated or mapped, as Zuora relies on consistent org context for accurate billing.


Because Subscription Rate Plan Charges inherit the org context from the Product Rate Plan Charges, changing the Org Label at the Product or Product Rate Plan level can misalign subscription lifecycle processes.

2\. Review Customer Account Configuration:

Check the account's Org Label and ensure it matches the intended org structure. Confirm that changes will not cause issues with existing transactions or user access.

-   Transactional Data Segmentation: Org Labels identify which transactions (such as subscriptions, invoices, and payments) belong to each org. Changing the Org Label on an account can cause existing data to appear incorrectly in reports or be visible to unintended orgs, leading to data misalignment.

-   Product Catalog Access: Product visibility is often org-specific. After an Org Label change, the account may lose access to certain products or gain unintended product access, which can affect subscription creation or amendments.


3\. User Access & Permission Control:

User permissions are frequently based on org labels. Changing an Org Label can alter which users can view or edit accounts, potentially making them inaccessible or visible to unintended users.

4\. Bill Run & Payment Run:

Before modifying Org Labels, verify that all related Bill Runs and Payment Runs are complete. Close all open Accounting Periods and wait for any ongoing runs to finish before proceeding. Bill Runs and Payment Runs are filtered by org. If Org Labels are not properly aligned, accounts may be excluded from runs or appear in multiple orgs, causing billing and payment errors.

Unlabeled runs will only include transaction objects that have not been assigned a labe

5\. Validate Org Assignment for Journal Runs:

Confirm that the account’s org assignment is correct for Journal Runs to ensure accurate journal entry segmentation.

Journal Runs create journal entries from invoices, payments, refunds, and credit memos. Changing an Org Label affects how journal entries are segmented, which can impact integrations with ERP systems like NetSuite or Workday. Updates to integration mappings may be required to maintain data consistency.

6\. Close Open Accounting Periods:

Ensure all Accounting Periods in the Org are closed before modifying or deleting Org Labels to prevent data inconsistencies.

Do not modify Org Labels if there are open Accounting Periods. Always review and close all open periods before making changes to avoid data integrity issues.

7\. Integrations:

Review and update all integration mappings (such as Workday, NetSuite) that use Org Labels to identify business units or entities.

If integrations such as Workday or NetSuite rely on Org Labels, update all mappings after modifying labels to prevent errors and data misalignment. Data already synced with old Org Labels may not update automatically, leading to reporting discrepancies.

8\. Currency Conversion Settings:

Review and adjust currency conversion settings as needed when modifying Org Labels, especially in hierarchical org structures.

In Zuora's Multi-Org setup, currency conversion settings are set at the root org and inherited by child orgs, but child orgs can override settings for regional or operational needs.

-   Root Org Unit: Configures primary exchange rate settings (provider, date, rounding mode) that are inherited by all child organizations unless specifically overridden.

-   Child Org Units: Inherit exchange rate settings from the root org, but can override these for specific requirements.


If an Org Label is modified to reassign a child organization to a different parent, the child will inherit exchange rate settings from its new parent organization.

9\. Zuora Revenue Org Mappings:

Ensure any Org Label modifications in Zuora Billing are reflected in Zuora Revenue mappings to maintain alignment.

Each organization in Zuora Revenue is mapped to a corresponding org in Zuora Billing. Ensure Org Label changes are also updated in Zuora Revenue to maintain accurate billing and revenue recognition. User access in Zuora Revenue is controlled by these mappings.

10\. Billing and Revenue Order-to-Revenue (OTR) Mappings:

Review and update Org Label mappings to ensure accurate data flow between billing and revenue systems.

For order-to-revenue processes, Org Labels are mapped before transactional data is synced. If Org Labels are modified but the corresponding Revenue mappings are not updated, data in Zuora Revenue may be incomplete or incorrect.

## Best practices for modifying org labels

Careful management of Org Labels in a Multi-Org enabled Zuora Billing tenant is essential for data integrity, regulatory compliance, and uninterrupted financial operations.

-   Modify Org Labels for Products or Product Rate Plans before activating any related subscriptions. This helps prevent downstream data integrity and billing issues. If there is no org label defined to a product, it will be visible to all the orgs, but only unlabeled accounts can subscribe to it.

-   Change Org Label for an Account is only available as a data migration, all transaction of the account move to the target Org, please review the impact on the finance reporting carefully before proceeding.

-   Always test Org Label changes in lower environments first to identify potential issues before making changes in production.

-   Back up your data using Data Query Exports or Zuora Reporting prior to making any modifications to Org Labels to safeguard against data loss.
