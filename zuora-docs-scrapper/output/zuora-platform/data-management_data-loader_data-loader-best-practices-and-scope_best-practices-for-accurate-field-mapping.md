---
title: "Best practices for accurate field mapping"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-accurate-field-mapping"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:27.057Z"
---

# Best practices for accurate field mapping

Learn how to facilitate field mapping by matching target fields with CSV column headers.

Zuora Data Loader performs field mapping by matching the fields in the target Zuora object with the column headers in the source CSV file. Data Loader attempts to automatically match field names in Zuora with the column headers in the CSV file based on exact or similar names. For example, if Account Name is the target field and the CSV has a column named Account Name, the tool maps them.

![Zuora field mapping](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3c318342-faf9-4223-ac8e-0a06f128b574?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNjMzE4MzQyLWZhZjktNDIyMy1hYzhlLTBhMDZmMTI4YjU3NCIsImV4cCI6MTc2ODYwMDcwMSwianRpIjoiNzU4YjcxM2ZkNWRkNGJhMTk0Y2IxMWFkY2UyMzYxNTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.or0FfGfu68EV16Pgr0J0Qa2xsn3ZmOhYk1-rlKPX5Hg)

The following are some key points to remember while using Zuora field mapping:

-   In the Field Mapping page, required fields are displayed by default. To compare mapped and unmapped fields, click the Field dropdown.
-   Zuora recommends retaining the letter case of any column headers in the CSV template. Modifying the header letter case may prevent Data Loader from correctly recognizing the fields and can cause upload or validation errors.
-   If automatic mapping does not identify all fields, the user can manually map the CSV columns by clicking on the drop-down.
-   If any required field is unmapped, a warning message is displayed to guide the user, as unmapped required fields can cause errors.
-   Data Loader allows users to save field mappings for future uploads. However, if the source CSV file or target fields change, such as by adding a new custom field, the user will need to update the mappings to include the new field.
-   Data Loader supports one-to-one field mapping only. Attempting to map a single source field to multiple target fields will result in errors. In such cases, a warning message is displayed to help resolve the mismatch.
-   If a non-mandatory field needs to be modified, ensure the field is included in the CSV template and properly mapped in the field mapping interface between the target and source columns. For example, consider a custom field like `CollectionAgent_c` on the Product Rate Plan Charge object. Although this field is not mandatory, if records need to be updated for this field, it must be present in the CSV and correctly mapped in the field mapping interface. Proper mapping is essential for the successful creation and update of records.
