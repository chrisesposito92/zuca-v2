---
title: "Best practices for accurate field mapping"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-accurate-field-mapping"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:31.910Z"
---

# Best practices for accurate field mapping

Learn how to facilitate field mapping by matching target fields with CSV column headers.

Zuora Data Loader maps fields by matching the target Zuora object fields with column headers in the source CSV file. Automatic mapping is based on exact or similar field names. For example, the Account Name field is automatically mapped when the CSV includes a column header named Account Name.

![Zuora field mapping](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3c318342-faf9-4223-ac8e-0a06f128b574?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNjMzE4MzQyLWZhZjktNDIyMy1hYzhlLTBhMDZmMTI4YjU3NCIsImV4cCI6MTc3MTY5NTUwNiwianRpIjoiNmZmNjU5MzJlMDk1NDQ5NThhZDA0YzVlMzBlMWIyZjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.dgPoTe7uNr9ioS4GyjXrnoQhRs1PINtRucP4tiHRYX8)

-   Ensure that all required fields are mapped. Unmapped required fields can cause upload failures.

-   On the Field Mapping page, required fields are displayed by default. Use the Field dropdown to view and compare both mapped and unmapped fields.

-   Retain the original letter case of column headers in the CSV template. Changing the header case may prevent Data Loader from correctly identifying fields and can result in upload or validation errors.

-   If automatic mapping does not map all fields, you can manually map CSV columns using the dropdown lists.

-   Field mappings can be saved for reuse in future uploads. However, if the CSV structure or target object changes, such as adding a new custom field, you must update the mapping accordingly.

-   Data Loader supports only one-to-one field mappings. Mapping a single source column to multiple target fields is not supported and triggers a validation warning.

-   To update non-mandatory fields, the field must be included as a column in the CSV file and mapped correctly in the field mapping interface. For example, to update the custom field `CollectionAgent__c` on the Product Rate Plan Charge object, the field must be present in the CSV and explicitly mapped. Proper field mapping is required to ensure successful record creation and updates.
