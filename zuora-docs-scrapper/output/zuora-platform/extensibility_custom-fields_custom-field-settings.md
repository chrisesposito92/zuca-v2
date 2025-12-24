---
title: "Custom field settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-field-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:05.953Z"
---

# Custom field settings

This reference lists the general custom field settings supported in Zuora, along with the specific settings applicable to each custom field type.

The available custom field settings vary based on the custom field type.

The following common settings are available for most custom field types:

-   Required: Indicates whether this custom field is required when creating an object.

-   Filterable (Indexed): Indicates whether this custom field is an indexed field in the object. Any custom field can be used as a filter in Data Query, regardless of whether this field setting is turned on or not. However, querying data from indexed fields has better performance than from non-indexed fields. For indexed fields in custom objects, you can also use them as filters in high-performance queries submitted through the [List records for a custom object](https://developer.zuora.com/v1-api-reference/api/operation/GET_AllRecordsForCustomObjectType/) API operation.

-   Unique: Indicates whether the value in this custom field is unique. The Unique setting applies only to custom fields for custom objects.

-   Auditable: Indicates whether Audit Trail will record the changes of this custom field. The changes include creation, modification, and deletion. The Auditable setting applies only to custom fields for custom objects. You must enable the Custom Object Definition audit trail setting in your Zuora tenant before auditing custom field changes. For more information, see Manage audit trail settings.


The following table lists the specific settings applicable to each custom field type.

| Custom field type | Required | Filterable (Indexed) | Unique | Auditable | Other settings |
| --- | --- | --- | --- | --- | --- |
| Text |  |  |  |  | Default value: the default value of this field.Max Length: the maximum length of the text.Display Name: indicates this field is used to store the user-friendly name for a custom object linked to other objects. This checkbox applies only to custom objects.UUID: indicates this field is used to store 32-character UUIDs. |
| Long Text |  | N/A | N/A |  | Default value: the default value of this field.Max Length: the maximum length of the text. |
| URL |  | N/A | N/A |  | Default value: the default value of this fieldMax Length: the maximum length of the URL |
| Integer |  |  |  |  | Default value: the default value of this field.Maximum: the maximum value of the integer.Exclusive Maximum: indicates whether to exclude the Maximum value from the allowable input values.Minimum: the minimum value of the integer.Exclusive Minimum: indicates whether to exclude the Minimum value from the allowable input values. |
| Number |  |  |  |  | Default value: the default value of this field.Maximum: the maximum value of the number.Exclusive Maximum: indicates whether to exclude the Maximum value from the allowable input values.Minimum: the minimum value of the number.Exclusive Minimum: indicates whether to exclude the Minimum value from the allowable input values. |
| Boolean |  |  |  |  | Default value: the default value of this field. The available values are as follows:NoneTrueFalse |
| Date |  |  |  |  | Default value: the default value of this field |
| Datetime |  |  |  |  | Default value: the default value of this field |
| Picklist |  |  |  |  | Default value: the default option of this field. You can select only one value from the available options.Max Length: the maximum length of the option name.Options: the name of an option. You can create multiple options as needed. |
| Multiselect |  | N/A | N/A |  | Default value: the default options of this field. You can select one or multiple values from available options.Max Length: the maximum length of the option name.Options: the name of an option. You can create multiple options as needed. |
| Relationship |  |  |  |  | Related Object: the type of the target object. The available values are as follows:Standard ObjectCustom ObjectObject Name: the name of the target object that you want to link this custom field to. |

## Notes and limitations

General notes and limitations are as follows:

-   You can change a required custom field to optional at any time. However, you should note the following limitations:

    -   For custom objects, you can create a required custom field or change an optional custom field to required only if the object to which this custom field belongs has no record.

    -   For standard objects, you can change an optional custom field to required only if the object to which this custom field belongs has no record.

-   Only filterable custom fields can be set to unique.

-   One custom object can have a maximum of five unique custom fields.

-   One custom object can have a maximum of five auditable custom fields.

-   The maximum number of each object's total custom fields or filterable custom fields varies depending on your Zuora edition or Zuora modules. For more information, see [Zuora Editions](/entitlements/current-entitlements/zuora-editions) and [Zuora Modules](/entitlements/current-entitlements/zuora-platform-modules).


The following table lists the notes and limitations of each custom field type:

| Custom field type | Notes and limitations |
| --- | --- |
| Text | You cannot select Display Name and UUID at the same time.The maximum length is 255. |
| Long Text | The maximum length is from 256 to 8,192.The Filterable and Unique settings do not apply. |
| URL | The maximum length is 8,192.The Filterable and Unique settings do not apply. |
| Integer | The maximum value is (2^63)-1.The minimum value is -2^63. |
| Number | The maximum number of digits to the left of the decimal point is 13 and to the right is 9. |
| Datetime | Both data and time values are needed. |
| Picklist | The maximum number of options is 250.The maximum length of an option name is 255.You must add at least one option for a picklist-type field.The option name must be unique.The option name is case-sensitive. For example, "Business" and "BUSINESS" are treated as different names and can be added together. |
| Multiselect | The maximum number of options is 250.The maximum length of an option name is 255.The Filterable and Unique settings do not apply.You must add at least one option for a multiselect-type field.The option name must be unique.The option name is case-sensitive. For example, "Business" and "BUSINESS" are treated as different names and can be added together. |
| Relationship | This field type applies only to custom objects.The relationship between an object and its related object is many-to-one. For example, multiple records of the Vehicle custom object can be related to the same Subscription object. |
