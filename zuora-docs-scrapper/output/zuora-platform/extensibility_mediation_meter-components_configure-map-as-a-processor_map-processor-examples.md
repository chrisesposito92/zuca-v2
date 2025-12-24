---
title: "Map processor examples"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-map-as-a-processor/map-processor-examples"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:52.408Z"
---

# Map processor examples

This document provides examples and guidelines for using map processors to transform and map data fields effectively.

## Example

Input Event{ "CustomerId": "abc123", "UsageDate": "2025-06-01T00:00:00Z", "Quantity": 100, "Region": "us-west" }

Map Processor Configuration
| Source Field | Action | Target Field | Transform Value | Target Field Value |
| --- | --- | --- | --- | --- |
| CustomerId | Keep | customer_id | Yes | value.toUpperCase() |
| UsageDate | Keep | usage_date | No | — |
| Quantity | Drop | — | — | — |
| Region | Keep | geo_region | Yes | value.replace('-', '_') |

Output Event{ "customer\_id": "ABC123", "usage\_date": "2025-06-01T00:00:00Z", "geo\_region": "us\_west" }

## Using JavaScript with Transform Value

When the Transform Value option is enabled, you can use JavaScript to modify the field's value. The following examples illustrate supported operations:

-   String manipulation
    -   Use `value.trim()` to remove leading and trailing spaces.
    -   Use `value.toLowerCase()` to convert text to lowercase.
-   Numeric operations
    -   Use `parseFloat(value) * 100` to convert and scale a numeric value.
-   Conditional logic
    -   Use `value === 'A' ? 'Alpha' : 'Other'` to apply conditional transformations.

## Recommendations

To ensure efficient and consistent data processing, follow these recommendations:

-   Use the Drop action early to reduce the data size for downstream processors.
-   Use Target Field renaming to maintain consistency in the output schema.
-   Test transformation logic with sample events before deployment.
-   Limit complex transformations to maintain optimal pipeline performance.

## Duplicating fields

The Map processor supports mapping the same input field to multiple output attributes. This is useful when multiple ABP charges require the same input field but mapped to different attribute names.

Consider the following example:

If your input contains a field called `productTier` and you need to pass it as `tier` to one ABP charge and as `skuLevel` to another, you can add both mappings using the Add Field option in the UI.

To enable support for multiple mappings of the same source attribute:

-   Add a field to the Map processor.
-   Select the same Source Field as needed for multiple mappings.
-   Enter a different Target Field name for each mapping.
-   Ensure that each Target Field name is unique. Duplicate target field names are not supported.
