---
title: "Custom field management with the Object Manager"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:08.812Z"
---

# Custom field management with the Object Manager

With the Object Manager, you can extend the standard objects by defining custom fields.

After defining a custom field, you can view and edit the field's value through the Zuora UI, exports and imports, and the Zuora API.

For example, if you define a custom field for the Account object, the field is included on the New Customer Account page and is supported in customer account imports. For more information, see [Create a customer account](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/create-a-customer-account) and [Import customer accounts](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/import-customer-accounts).

Note:

The bulk deletion of custom fields on standard and custom objects is temporarily unavailable as we refine the Custom Field feature. This change affects both the Zuora UI and API:

-   UI: Navigate to in the left navigation menu and then access the custom field list page of a standard or custom object.

-   API: Submit custom field deletion requests via the [Update a custom object definition](https://developer.zuora.com/v1-api-reference/api/operation/POST_UpdateCustomObjectDefinition/) API operation.


You can still delete custom fields individually during this refinement process. The bulk deletion capability will be restored once the refinement is complete.

Note:

You may experience higher-than-normal latency for multi-field update operations in the Zuora UI or through the API while we are enhancing the Custom Fields feature.

## User permissions for custom fields

To view or manage custom fields for standard objects in particular product areas, you must have the appropriate administrator permissions.

The following table lists the required user permissions for each product area.
| Product area | Required user permission |
| --- | --- |
| Billing | Manage Billing Settings |
| Payments | Manage Payments Settings |
| Finance | Manage Finance Settings |

## Field type of custom fields created via the Object Manager

The following table lists the field type of custom fields created via the Object Manager for different standard objects:

|  | Standard objects that support advanced custom fields | Other standard objects |
| --- | --- | --- |
| Field type | Advanced custom field | Legacy custom field |

For more information about advanced custom fields, and which standard objects support advanced custom fields, see [Custom fields and legacy custom fields](/zuora-platform/extensibility/custom-fields/custom-fields-and-legacy-custom-fields).

## Notes and limitations

-   Custom fields defined via the Object Manager are available for Zuora 360+. If you are using Zuora 360 and want to sync custom fields defined via the Object Manager, upgrade to Zuora 360+.

-   Advanced custom fields cannot be used with Word Template and Tax Engine Mapping Formula. Similarly, custom fields created using Object Manage cannot be utilized with Mail Merge Template or Tax Engine Mapping Formula.

-   Credit Balance is not a supported object in the advanced custom fields. The custom fields will not show up when you refund a credit balance that has custom fields created through advanced custom fields.

    -   You cannot specify values to those custom fields as they would not show up in the UI.

    -   If one of the custom fields is marked mandatory, you cannot create a refund.


    In such cases, create the refund custom fields through the legacy custom fields feature and then refund the credit balance.

-   If your tenant has the legacy Active Rating feature enabled, the Usage object does not support advanced custom fields.

-   Custom fields created via the Object Manager are not visible on the following settings pages:

    -   Settings > Billing > Manage Custom Fields

    -   Settings > Payments > Manage Custom Fields

    -   Settings > Finance > Manage Custom Fields


    These pages will be deprecated soon.
