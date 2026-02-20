---
title: "Basic concepts and terms of Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/basic-concepts-and-terms-of-multi-org"
product: "zuora-platform"
scraped_at: "2026-02-20T17:47:14.039Z"
---

# Basic concepts and terms of Multi-Org

Use this topic as a glossary for Multi-Org concepts and UI elements such as the Org Context Switcher, Org Picker, and currency types.

Before you start with Zuora Multi-Org, understanding some basic concepts and essential terms is recommended to help you make better choices or decisions while interacting with it.

## Core entities

Company

This is the root of your organizational hierarchy and serves as the root Org Unit. It is the only location where your Org admin can define the [currency](#concept-8797__section-649).

Tenant

A tenant can be any Zuora tenant in any environment or type. Your organization may use multiple tenants, such as development, testing, and production. Zuora Multi-Org is available in your Central Sandbox and Production environments.

Organizational Hierarchy (Org hierarchy)

The Org hierarchy represents how an organization is grouped based on factors such as geo-location, products, or target markets. Together, these groups form your overall business structure.

Org Unit

An Org Unit is a child of the parent company (root). It can either be a branch with additional child Org Units beneath it or a leaf with no children. For example, Western Europe and Central Europe are branch Org Units, while Austria, Germany, France, and Spain are leaf Org Units.

## UI controls & access

Org Context Switcher

The Org Context Switcher is a UI widget that lists all the Org Units created in the Multi-Org hierarchy. After you log in from the Zuora UI, you can switch context between the Org Units that you have permission to access using the Org Context Switcher.

![Org context switcher home page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/59e29bbc-90c0-4380-8362-c891c75ee6a3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU5ZTI5YmJjLTkwYzAtNDM4MC04MzYyLWM4OTFjNzVlZTZhMyIsImV4cCI6MTc3MTY5NjAyNiwianRpIjoiNDAxODRiNjliYzFjNGQ4M2E3NDUyNGYwNWY2MzQwNjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.RYpNAJgzC9YDRVzYZR1i_3QJHR8nXSQT96ZpxZpoFjg)

The Org Context Switcher is located in the upper-right corner of the page, next to your username. Clicking the current Org display name opens the Multi-Org hierarchy. From here, you can select one or more Org Units to set your data-access scope, depending on your assigned permissions. You can also search for an Org Unit by its display name using the search field. Org Units that you do not have permission to access will appear but cannot be selected. For example, if a user only has access to the leaf Org (Acme UK), the branch Org Units will still be visible in the hierarchy but will not be selectable.

Each user is assigned a default Org Unit during user creation. The user can update their default Org Unit during their first login to match their personalization preferences.

How to use the Org Context Switcher?

The Org Context Switcher is used to define your working context by selecting one or more Org Units. This allows you to filter data and access only the objects that fall within the selected org scope. The working context affects the following scenarios:

1.  List Page - On list pages for objects such as Customer Accounts or Products, only the objects that are accessible within the current org context are displayed. For example, if Acme France and Acme Spain are selected in the Org Context Switcher, the Customer Accounts list page will show only the accounts associated with those two Org Units.
2.  When creating or editing objects such as Customer Accounts or Products, you must explicitly assign the Org Units that the object should be associated with. This is done through the Org Picker.

    ![Org selection](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0082ccf9-d9d0-4939-ac4f-ac1b620d954a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAwODJjY2Y5LWQ5ZDAtNDkzOS1hYzRmLWFjMWI2MjBkOTU0YSIsImV4cCI6MTc3MTY5NjAyNiwianRpIjoiOWVmYTI2Y2YwNTlkNGQwZjg3NTM0NDc1MzYyNDZiMzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.cktMgtY-TdKnNpNOPDH3F9uNaQYJhg1K-jREOXBb15Y)

    The Org Picker displays a sub-tree of the org hierarchy, limited to the Org Units that are available in your current org context. For example, when creating a new Product in the Product Catalog, the Org Picker will allow selection only from the Org Units chosen in the Org Context Switcher. Selecting specific Org Units in the Org Picker makes the Product available to those Org Units.


Org Picker

Similar to the Org Context Switcher, the Org Picker appears throughout the Billing UI and allows you to select one or more Org Units where applicable. For example, when creating a customer account, you must assign it to exactly one Org Unit. In contrast, during user creation, a user can be assigned to one or more Org Units using the Org Picker.

![Org picker UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/030a076c-486d-4d54-99d8-b3b91aa4c43f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAzMGEwNzZjLTQ4NmQtNGQ1NC05OWQ4LWIzYjkxYWE0YzQzZiIsImV4cCI6MTc3MTY5NjAyNiwianRpIjoiZGRmYjQyM2ZhODllNDlhM2JjNmU2MjZhYWVhOTVlM2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.0Tl6M4hpWsOx_LbTUaEAEFreqCS2xvBmkYuN1Dhfbfk)

## Currency

User Access in Multi-Org Across One or Multiple Org Units Edit Section

This currency is used to create financial reports including corporate roll-up reporting for Multi-Org business. The Reporting Currency is defined at the root level and inherited by the child org units. The child org units cannot change or override their reporting currency. Your business can have only one reporting currency.

Reporting Currency

The Reporting Currency is used to generate financial reports, including corporate roll-up reporting for Multi-Org businesses. It is defined at the root org unit and automatically inherited by all child org units. Child org units cannot modify or override this setting. Each business can have only one Reporting Currency.

Functional Currency

The Functional Currency is used by each org unit for its own financial reporting. Every org unit in the hierarchy can define its own Functional Currency, and once configured, it cannot be changed. Exchange rate settings are defined at the root level when the tenant is created and are inherited by all child org units.

Transaction Currency

The Transaction Currency is used in the product catalog and customer accounts. It is inherited from the product rate plan charge and remains consistent across Zuora processes such as Invoices, Payments, Credits, and Debit Memos. As an exception, Transaction APIs allow creating transactions in a different currency than the billing account or product rate plan charge. In these cases, the Transaction Currency is the currency specified in the API request.

## Multi-Org considerations

-   Zuora Analytics does not support Multi-Org.

-   When the Enhanced OTR feature is enabled, accounting periods cannot be configured at the org level in Zuora Revenue. In integrated Zuora Revenue environments, accounting periods must be consistent across all org units.

-   Zuora 360 supports integration with only a single Salesforce environment. Currently, a 1:1 mapping is enforced between a Zuora Multi-Org tenant and a single Salesforce org.

-   Zuora Mediation does not segment events based on Org configuration.

-   For Marketplace/Connect Apps hosted on the Connect Framework, each app instance is visible to all Org units as this is a tenant level setting. For example, Promo Code App, Zuora Collections.

-   Tenant-level settings (example, numbering/SKU formats, tax engine, accounting codes) are shared by all org units; per–org unit overrides are not available. .

-   If using Multi-entity, Multi-Org can be enabled at the leaf entity level. See [Multi-Org upgrade path](/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models) for more information on the co-existence of Zuora Multi-Org as a leaf entity in the Zuora Multi-entity environment.

-   Multi‑Org does not support intercompany transactions between org units (upstream, downstream, or lateral). Any intercompany activity across org units must be processed outside of Multi‑Org.

-   Multi‑Org does not support a many‑to‑many relationship between customer accounts and org units. Each customer account must be assigned to exactly one org unit at any given time.

-   Files generated from Zuora Billing such as Data Sources Exports (DSE), AQuA, and reports are not labeled with org tags and therefore are not automatically segmented by org unit in their output.

-   Multi-Org does not support configuring Custom Objects or their records at the org level. Custom Objects do not carry org labels and cannot be segmented natively by org unit.

-   Zuora Collections supports data synchronization for Multi-Org tenants; however, it does not support org-level data labeling. All synchronized data is handled the same across the tenant, and org hierarchy or labels are not applied within Collections.

-   Orders are created at a single org unit. Each order is associated with exactly one org unit, and you cannot combine order lines from multiple org units into a single consolidated order.
