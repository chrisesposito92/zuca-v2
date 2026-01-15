---
title: "Upgrade Data Access Control tenant to Zuora Multi-Org through APIs"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/multi-org-upgrade-models/upgrade-data-access-control-tenant-to-zuora-multi-org-through-apis"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:54.799Z"
---

# Upgrade Data Access Control tenant to Zuora Multi-Org through APIs

Learn how to upgrade from Data Access Control(DAC) to Zuora Multi-Org, leveraging existing DAC tag hierarchies for a seamless transition.

-   Data Access Control(DAC) customers must be enabled with Invoice Settlement capability to upgrade to Zuora Multi-Org
-   DAC allows the removal of children and associated date after they have been added to an Org. Hierarchy with limitations on the ability to delete a node that has children under it.
-   In DAC, a user with access to the parent has implicit access to all the objects that are children of the parent.
-   In Multi-Org objects are visible only if the user has explicit permission to access one or more Org. units.

As a first step to migrate to Zuora Multi-Org contact [Zuora Global Support](https://support.zuora.com/hc/en-us) team. They will direct you to the Zuora Multi-Org team to help you with the migration process.

Note: The steps mentioned below are only to demonstrate the working of our internal upgrade API to help you (DAC customers) understand what this upgrade does, and does not require you to perform any of these actions.

Upgrading an existing DAC-enabled tenant with the first existing active org hierarchy among multiple org hierarchies through a 1:1 mapping to the newly enabled Zuora Multi-Org hierarchy involves the following steps:

1.  Cloning the DAC tag hierarchy to create the new Zuora Multi-Org organizational hierarchy
2.  Labeling the key objects based on the DAC tags

    -   Customer Accounts
    -   Products in the Product Catalog
    -   Users

3.  Export all current DAC tags using the Zuora Data Query export. This will help you understand your existing business unit definitions and their associated data. It is recommended that you take a backup of the data prior to migration. Zuora Data Query can be leveraged for exports.
4.  Deactivating the DAC tag hierarchy.
5.  Activating the Zuora Multi-Org org hierarchy.

    See the

    [Multiple Organizations API reference](https://www.zuora.com/developer/api-references/api/tag/Data-Labeling/)

    for details on Data Labeling.


Once Multi-Org is activated, a user will only have access to the data they are permitted by the org admin.
