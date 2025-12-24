---
title: "Legacy custom field management"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/legacy-custom-field-management"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:20.840Z"
---

# Legacy custom field management

You can extend the standard objects in your Zuora tenant by defining custom fields.

Depending on the object type and how custom fields are created, some custom fields on standard objects are recognized as legacy custom fields.

## Enable custom fields in Connect Tax Engines

For more information, see Set up Connect Tax Engines .

## Notes and limitations

-   The Required option is not available when defining custom fields for the following objects:

    -   Amendments

    -   Subscription Rate Plans

-   For the Usage object, do not create a custom field with the same name as a standard Zuora field. This avoids ambiguity when importing usage files.

-   The Integer and Number field types apply only to non-indexed custom fields.

-   The minimum and maximum values for custom fields with the Integer or Number field type are as follows:
    |  | Integer | Number |
    | --- | --- | --- |
    | Minimum value | -2^63 | -9999999999999.99 |
    | Maximum value | (2^63)-1 | 9999999999999.99 |
