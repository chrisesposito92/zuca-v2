---
title: "Custom field types"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-field-types"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:03.611Z"
---

# Custom field types

This reference lists the custom field types supported in Zuora, including the description, data format, and examples for each type.

| Custom field type | Data format | Description | Example field values in the UI |
| --- | --- | --- | --- |
| Text | String | Used to store string values. | Blue, ax-23, Completed |
| Long Text | String | Used to store long string values. | Long text information… |
| URL | String | Used to store URL-formatted string values. | https://mycompany/additionalinfo/437825 |
| Integer | Integer | Used to store integer values. | 5, -18, 0 |
| Number | Number | Used to store number values. | 5, -18, 0, 20.6, -100.32 |
| Boolean | Boolean | Used to store boolean values. | True, False |
| Date | String | Used to store date-formatted string values. | 06/18/2023Note:The date format is based on the locale settings in your tenant. For more information, see Locale date formats. |
| Datetime | String | Used to store datetime-formatted string values. | 06/18/2023 02:54 PMNote:The date format is based on the locale settings in your tenant. For more information, see Locale date formats. |
| Picklist | String | Used to store a single selection from several pre-defined options. | a |
| Multiselect | String | Used to store multiple selections from several pre-defined options. | a and b |
| Relationship | String | Used to store links to other related objects. | AcmeCorporation |
