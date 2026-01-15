---
title: "Overview of Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/overview-of-multi-org"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:01.019Z"
---

# Overview of Multi-Org

This topic gives an overview of Zuora Multi-Org and explains how it enables organizations to manage multiple operational units within a single Zuora environment.

As businesses expand into new geographies, form joint ventures, or grow through mergers and acquisitions, it becomes challenging to manage revenue across multiple organizational units, support new markets with different operating models and products, and work with multiple transactional and reporting currencies. At the same time, expectations for integrity, compliance, data protection, and security continue to rise.

Zuora offers Multi‑Entity and Data Access Controls (DAC) to address data security and data segmentation needs. While these capabilities provide important value, they are insufficient for the complex, multidimensional requirements of modern enterprises.

## What is Zuora Multi-Org?

Zuora Multi-Org allows you to model and operate multiple organizational units within a single Zuora tenant. You can define an org hierarchy under one company and assign users, configuration (such as the product catalog), customer accounts, and transactions to individual org units with clear, configurable boundaries. As a shared capability across Zuora Billing and Zuora Revenue, Multi-Org supports a unified, end-to-end order-to-revenue process across all org units..

Key capabilities include:

-   Managing all Org units under a single tenant as a hierarchy
-   Labeling and segmenting transactional and configuration data
-   Configuring selective user access to the data
-   Ensuring secure execution of operational processes within permission scopes
-   Supporting org-unit-specific and org-unit-independent processes

For core terminology see [Basic concepts and terms of Multi-Org](/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/basic-concepts-and-terms-of-multi-org).

## Prerequisites

-   Enable [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/enable-invoice-settlement) , Orders, and [Orders Harmonization](/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-and-invoice-settlement-harmonization) settings.

-   When the Enhanced OTR feature is enabled, accounting periods cannot be configured at the org level in Zuora Revenue. In integrated Zuora Revenue environments, accounting periods must be consistent across all org units.


## Multi-Org user personas

Multi-Org is relevant to the following personas:

-   Accounting and Finance teams (central or per org unit)

-   Product Catalog Maintainers and Product Managers

-   Pricing decision makers

-   Financial Controllers

-   Organization Hierarchy Administrators

-   IT and Enterprise Application Owners responsible for centrally managing Zuora users and access controls

Each persona interacts with Multi-Org differently- for example, defining the org hierarchy, assigning user access, maintaining shared or org‑specific product catalogs, or consuming org‑specific financial reports.

## How does Zuora Multi-Org work?

Zuora Multi‑Org lets you model your company as a parent–child org hierarchy. For example, Acme Corp, a global company headquartered in Germany, can be set up as the root org unit, with regional org units such as Western Europe and Central Europe, and country‑level org units such as Spain, France, Germany, and Austria beneath them.

![Mulit-Org hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/998bfdf3-c967-4c56-8387-0a460b0eef7d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk5OGJmZGYzLWM5NjctNGM1Ni04Mzg3LTBhNDYwYjBlZWY3ZCIsImV4cCI6MTc2ODYwMDczOCwianRpIjoiMTlmOGIwN2JiNTdmNGM3MWFiYWY0MmRjNTY1OWFiMzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.lhB3TqhhT4hgyuQVz5Ww3BYtFn88bkqIwKmbLKUD7sQ)

Each business unit in this hierarchy is an Org Unit and can transact at all levels of this organizational hierarchy. Each Org unit can be configured as either:

-   Transacting org unit – owns customer accounts and runs billing and revenue operations; businesses can transact at any level (for example, at the Acme Corp root level, a regional unit like Central Europe, or a country unit like Germany).

-   Reporting org unit – does not own customer accounts or transactions, but aggregates and reports on data from its child org units.

This Acme Corp example illustrates just one of many ways you can structure your company's organizational hierarchy in Zuora Multi‑Org.

## Multi-Org Object Model

The Multi-Org object model is a high-level view of how the key objects are related to each other and the Org Unit(s) within an organizational hierarchy.

![Multi-Org object model](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ae83338a-0354-4ecd-957d-39348dd8adce?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFlODMzMzhhLTAzNTQtNGVjZC05NTdkLTM5MzQ4ZGQ4YWRjZSIsImV4cCI6MTc2ODYwMDczOCwianRpIjoiYzNlZjI0NjgxMmFkNDE2MmEyYjU4NmRjZjZmNDg2MDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.ieiNAdcAnGv6NSUNEz8l8xGvXwVyKU0FYkSXpm9vl20)

-   Users to Org Units: Many-to-Many

    A single user can be assigned to multiple org units, and each org unit can have multiple users.

-   Org Units to Configuration Objects: Many-to-Many

    Configuration objects (for example, products, rate plans) can be shared across multiple org units, and each org unit can use many configuration objects.

-   Accounts to Org Unit: Many-to-One

    Each customer account is associated with exactly one org unit, but a single org unit can own many accounts.

## Multi-Org considerations

-   Zuora Analytics does not support Multi-Org.

-   When the Enhanced OTR feature is enabled, accounting periods cannot be configured at the org level in Zuora Revenue. In integrated Zuora Revenue environments, accounting periods must be consistent across all org units.

-   Zuora 360 supports integration with only a single Salesforce environment. Currently, a 1:1 mapping is enforced between a Zuora Multi-Org tenant and a single Salesforce org.

-   Zuora Mediation does not segment events based on Org configuration.

-   For Marketplace/Connect Apps hosted on the Connect Framework, each app instance is visible to all Org units as this is a tenant level setting. For example, Promo Code App, Zuora Collections. For more information, see [Marketplace](/zuora-platform/integration/integration-hub/get-started-with-integration-hub).

-   Tenant-level settings (example, numbering/SKU formats, tax engine, accounting codes) are shared by all org units; per–org unit overrides are not available. .

-   If using Multi-Entity, Multi-Org can be enabled at the leaf entity level. See [Multi-Org upgrade path](/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models/upgrade-a-multi-entity-sub-entity-to-zuora-multi-org) for more information on the co-existence of Zuora Multi-Org as a leaf entity in the Zuora Multi-Entity environment.

-   Multi‑Org does not support intercompany transactions between org units (upstream, downstream, or lateral). Any intercompany activity across org units must be processed outside of Multi‑Org.

-   Multi‑Org does not support a many‑to‑many relationship between customer accounts and org units. Each customer account must be assigned to exactly one org unit at any given time.

-   Files generated from Zuora Billing such as Data Sources Exports (DSE), AQuA, and reports are not labeled with org tags and therefore are not automatically segmented by org unit in their output.

-   Multi-Org does not support configuring Custom Objects or their records at the org level. Custom Objects do not carry org labels and cannot be segmented natively by org unit.

-   Zuora Collections supports data synchronization for Multi-Org tenants; however, it does not support org-level data labeling. All synchronized data is handled the same across the tenant, and org hierarchy or labels are not applied within Collections.

-   Orders are created at a single org unit. Each order is associated with exactly one org unit, and you cannot combine order lines from multiple org units into a single consolidated order.
