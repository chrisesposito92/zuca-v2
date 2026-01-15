---
title: "Upgrade single tenant to Zuora Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models/upgrade-single-tenant-to-zuora-multi-org"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:25.548Z"
---

# Upgrade single tenant to Zuora Multi-Org

Learn how to migrate a single tenant to Zuora Multi-Org using the Multiple Organization APIs.

As a first step to migrate your single tenant to Zuora Multi-Org, contact [Zuora Global Support team](https://support.zuora.com/hc/en-us). They will direct you to the Zuora Multi-Org team to help you understand the migration process.

Next, enabling Zuora Multi-Org for a single tenant with existing transactional data is done through the Multiple Organization APIs using the following steps:

1.  Create a Zuora Multi-Org organizational hierarchy.
2.  Label the key objects:
    1.  Customer Accounts
    2.  Products in the Product Catalog
    3.  Users
3.  Repeat Step 2 to label all the key objects.
4.  Review the audit log actively for labeling changes to the key objects.
5.  After thoroughly reviewing, ensure that appropriate internal change management actions are initiated to familiarize your org users with their visibility within the organizational hierarchy.
6.  Verify and activate Zuora Multi-Org.

In addition to the three key objects specified in Step 2, at least 100+ dependent objects will also be labeled based on the labels created in Step 3. See the [Multiple Organizations API reference](https://developer.zuora.com/v1-api-reference/api/tag/Data-Labeling/) for details about data labeling.
