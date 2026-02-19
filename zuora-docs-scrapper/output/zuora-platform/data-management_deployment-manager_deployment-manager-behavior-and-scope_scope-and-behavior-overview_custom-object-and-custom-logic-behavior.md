---
title: "Custom object and custom logic  behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/custom-object-and-custom-logic-behavior"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:55.425Z"
---

# Custom object and custom logic behavior

The article outlines the behavior of custom object and custom logic deployment.

## Custom Objects

-   Deployment Manager supports the migration of custom object definitions.
-   Deployment Manager does not support the migration of custom object records.

For more information, see [Custom Objects](/zuora-platform/extensibility/custom-objects/custom-objects-overview)

## Custom Logic

Deployment Manager supports migrating Functions in Custom Logic. For more information, see [Custom Logic](/zuora-platform/extensibility/custom-logic/custom-logic-overview).

The display names on the user interface of Functions are mapped to the following fields displayed on the Compare screen of Deployment Manager:

| Configuration | Function User Interface | Display Names on Compare Screen |
| --- | --- | --- |
| Event Trigger | Select Event Trigger | Hook_points |
| Object | Object | Input and Output |

These mappings ensure the interface display names align with the corresponding fields in Deployment Manager during configuration comparison.

Decision Tables and Decision Trees do not support pre-validation. Zuora recommends deploying custom fields before deploying the Decision Table or Decision Tree to ensure successful deployment.
