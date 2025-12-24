---
title: "Use case of display name in custom objects"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-definition-management/use-case-of-display-name-in-custom-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:19.810Z"
---

# Use case of display name in custom objects

This use case explains the display name in custom objects and demonstrates how to create display names in the Zuora UI.

The display name can be used as a user-friendly name for a custom object linked to other custom objects.

For example, suppose that you have created two custom object definitions named "Vehicle" and "Tire Manufacturer" in your tenant. The Vehicle object contains a relationship-type field `Tire` linking to the Tire Manufacturer object. You can enable the display name for the Tire Manufacturer object by creating a text-type field `Manufacturer Name` . When creating custom object records for the Vehicle object, real manufacturer names can be recorded as values for the `Tire` field, instead of meaningless 36-character record IDs.

![Custom object relationship and display name](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9d6f6b7e-938e-45fc-9cff-aabe56873ffe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlkNmY2YjdlLTkzOGUtNDVmYy05Y2ZmLWFhYmU1Njg3M2ZmZSIsImV4cCI6MTc2NjY0MDE5NywianRpIjoiMzdhYmNmMGFmNmNmNDBiZGIzZDhkZmFkZjhiODI1MDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1PJk0jGYuzCbxCzP-TXWdg7G1elrfiLISDbL46RUb4o)

To create the display name, complete the following steps when creating or editing a custom object definition:

-   Create a text-type custom field definition.

-   Ensure none of the format checkboxes (UUID or URL) is selected.

-   Select the Display Name checkbox.


Display names have the following limitations:

-   Each custom object definition can have at most one field as the display name.

-   Only text-type fields with no format (such as UUID or URL) can be used as display names.
