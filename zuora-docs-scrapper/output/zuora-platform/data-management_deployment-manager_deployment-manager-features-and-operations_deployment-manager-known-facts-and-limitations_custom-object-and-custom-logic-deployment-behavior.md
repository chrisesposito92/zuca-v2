---
title: "Custom object and custom logic deployment behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/custom-object-and-custom-logic-deployment-behavior"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:19.356Z"
---

# Custom object and custom logic deployment behavior

The article outlines the behavior of Custom Object and Custom Logic deployment.

## Custom Objects

-   Deployment Manager supports the migration of custom object definitions.
-   Deployment Manager does not support the migration of custom object records.

## Custom Logic

Deployment Manager supports migrating Functions in Custom Logic.

The display names on the user interface of Functions are mapped to the following fields displayed on the Compare screen of Deployment Manager:

| Configuration | Function User Interface | Display Names on Compare Screen |
| --- | --- | --- |
| Event Trigger | Select Event Trigger | Hook_points |
| Object | Object | Input and Output |

These mappings ensure the interface display names align with the corresponding fields in Deployment Manager during configuration comparison.

Decision Tables and Decision Trees do not support pre-validation. Zuora recommends deploying custom fields before deploying the Decision Table or Decision Tree to ensure successful deployment.
