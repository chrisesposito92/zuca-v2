---
title: "Upgrade a Multi-Entity sub-entity to Zuora Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models/upgrade-a-multi-entity-sub-entity-to-zuora-multi-org"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:26.427Z"
---

# Upgrade a Multi-Entity sub-entity to Zuora Multi-Org

Learn how to upgrade a leaf sub-entity in a Multi-Entity setup to Multi-Org.

-   Only a leaf sub-entity in a Multi-Entity setup can be upgraded to Zuora Multi-Org
-   User access controls and data segmentation will have to be set up separately for the Zuora Multi-Org sub-entity as compared to the existing Multi-entity setup. The user and application behavior may vary for Zuora Multi-Org from Multi-Entity.
-   You must have Zuora Universal User (One ID) activated for a seamless login experience between Zuora Multi-Entity and Zuora Multi-Org sub-entity.
-   The behavior of platform components like custom objects, workflows, etc., may vary between Zuora Multi-Entity and Zuora Multi-Org sub-entity.
-   Financial roll-ups will work for Zuora Multi-Org sub-entity and do not apply to Multi-Entity.
-   Settings including Invoice Numbering, Product in the Product Catalog, Product Rate Plan Changes, Notifications, etc. that exist at a per-entity level will be applied at the tenant level post upgrade and apply to all org units in Zuora Multi-Org.
-   Product sharing across sub-entities in a Multi-entity setup will differ from sharing products in the product catalog in Zuora Multi-Org setup.
-   Any transactional data within a closed accounting period will be subject to the labeling and data segmentation rules of Zuora Multi-Org The same will apply to any transactional data in the accounting period that closed after the enablement of Zuora Multi-Org.
-   Zuora Revenue will exclusively sync 1:1 through the OTR sync with each org unit defined in Zuora Billing.

1.  Create a Zuora Multi-Org organizational hierarchy
2.  Label the key objects:
    1.  Customer Accounts
    2.  Products in the Product Catalog
    3.  Users
3.  Repeat Step 2 to label all the key objects.
4.  Review the audit log actively for labeling changes to the key objects.
5.  After thoroughly reviewing, ensure that appropriate internal change management actions are initiated to familiarize your org users with their visibility within the organizational hierarchy.
6.  Verify and activate Zuora Multi-Org.

    In addition to the three key objects specified in Step 2, at least 100+ dependent objects will also be labeled based on the labels created in Step 3.

    See the [Multiple Organizations API reference](https://www.zuora.com/developer/api-references/api/tag/Data-Labeling/) for details about data labeling.

    Note: Once Zuora Multi-Org is activated in the sub-entity of the Zuora Multi-Entity setup, data segmentation rules take effect. As a result, any user that had access to all the data within the sub-entity will be restricted to access only the data based on the user's roles in the Multi-Org setup provided by the IT admin. And the org unit that the user now belongs to.
