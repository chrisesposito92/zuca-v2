---
title: "About filters in Deployment Manager"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-filters-in-deployment-manager"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:48.741Z"
---

# About filters in Deployment Manager

This article details an overview about filters and the operators to refine your filter conditions in Deployment Manager.

Filters on the compare screen enable you to find a custom object or components you want to deploy in a tenant. You can use the quick filter feature to run basic queries to filter data and create specialized views. You can create new filters, save filters, and view and update the filter conditions. The saved filters are available to all users of a tenant.

The following sections can be accessed during the new deployment run procedure. For more information, see [run a deployment](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/run-a-deployment-process).

-   [Configure and apply filter](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-filters-in-deployment-manager/configure-and-apply-filters-in-deployment-manager)
-   [Filter operators and search results](#reference-8068__section-1396)
-   [Create and save a quick filter](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-filters-in-deployment-manager/create-and-save-a-quick-filter)

## Filter operators

| Filter Operator | Description | Example |
| --- | --- | --- |
| Equals | Returns records that contain the exact search value. | Adjustments_1.4 Will return a workflow that has a name Adjustments_1.4. |
| Starts with | Returns records that contain the entered alphanumeric text. | b Will return the result that contains b in the text like Billing Cycle Type, Billing List Price Base, Billing Period Start, Billing Period, Billing Rules and Batch Aliases. |
| Contains | Returns records that contain the entered search text. | Billing Will return the result that contains Billing Cycle type, Billing List Price Base, Billing Period Start, Billing Period, Billing Rules. |
| Does not Contain | Returns records that does not contain the entered search text. | Charge Will return the result that does not contain the text Charge in it. |
