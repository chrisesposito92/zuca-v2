---
title: "Custom Logic overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/custom-logic-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:38.690Z"
---

# Custom Logic overview

The Custom Logic feature allows you to define logic rules for standard and custom objects by using decision tables, decision trees, or functions. When objects are created or updated, Zuora triggers the rules to validate data accuracy or manipulate field values.

Note:

This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available.

To turn on the Custom Logic feature in Production environments, submit a request at [Zuora Global Support](https://support.zuora.com/).

## Triggering mechanism

When an object is created or updated through the UI or API, Zuora triggers the custom logic defined on this object type. If the custom logic is evaluated successfully, Zuora will create or update the object. If the evaluation fails, Zuora will display the error message configured in the custom logic and will not create or update the object.

## Supported custom logic types

Zuora supports the following custom logic types:

| Custom logic type | Coding experience needed? | Support standard objects? | Support custom objects? | Support logic rules with if-then statements? | Support logic rules with if-then-else statements? |
| --- | --- | --- | --- | --- | --- |
| Decision table | No | Yes | No | Yes | No |
| Decision tree | No | Yes | No | Yes | Yes |
| Function | Yes (JavaScript) | Yes | Yes | Yes | Yes |

## User permissions for Custom Logic

To view or manage Custom Logic data, you must have the appropriate platform user permissions:

-   View Logic: Allows you to view Custom Logic data in the UI or through API operations.

-   Manage Logic: Allows you to create, update, or delete Custom Logic data in the UI or through API operations.


Users with the Platform Administrator user role are granted these permissions by default.

## Audit Trail for Custom Logic

Zuora supports auditing changes to Custom Logic definitions, including decision tables, decision trees, and functions. For more information about how to enable this feature, see [Manage Audit Trail Settings](/zuora-platform/system-management/administrator-settings/manage-audit-trail-settings).
