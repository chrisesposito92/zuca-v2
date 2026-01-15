---
title: "Generate a data source export"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:35.036Z"
---

# Generate a data source export

Learn how to generate a data source export

You can create data source exports through the Zuora application and the Zuora API. This article describes how to create data source exports through the Zuora application. See [Export ZOQL](/zuora-platform/data/legacy-query-methods/export-zoql) for how to generate data source exports through the Zuora API.

After creating a data source export, you can download the exported data from the Zuora user interface. Each exported file is available for download for 7 days.

The supported file formats are CSV, CSV ZIP, and Excel (.xlsx). The format of dates in exported data is controlled by your tenant’s locale setting. See [Personal Settings](/zuora-platform/system-management/additional-tenant-management-settings/personal-settings) for more information. Note that the formatting of the exported data, for example the date formatting, might not be correctly rendered if you open an exported CSV file with Excel.

To know how to create a data source export, refer to [Create a data source export](/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export/create-a-data-source-export).

## Save frequently used data source exports

If you select Save As Default when creating a data source export, Zuora will save your fields and filters for the data source and will automatically apply those settings the next time you select that data source. This enables you to create custom data source export configurations for future use.

## Encrypted data source exports

You can export a secure version of encrypted data source fields. Using this option, you can view and export the `AchAccountNumber` field of any `PaymentMethod` or `DefaultPaymentMethod` data source objects.

Note:

This is a Controlled Release feature. Contact [Zuora Global Support](https://support.zuora.com/) for information about using this feature. To use this feature, you must sign a security contract with Zuora and store your public key in the Zuora System. Zuora decrypts the fields and exports them to a file. Zuora then encrypts the file using your public key, ensuring that the fields are never available in plain text format.

To use this feature:

-   Ensure that you have an available GPG encryption key pair and send your public key to Zuora Support via a ticket.
    Note: For information about how to generate and send the key to Zuora Support, see [Working with GPG keys](/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export/working-with-gpg-keys).

-   In the Zuora user interface, select Encrypt Export before making an export.

-   Using the Zuora API, when creating an [Export](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/export) object, set the `Encrypted` field to `true`.


Zuora will create a file with the `.gpg` extension. You can then use your private key to decrypt the file.

If you exported encrypted fields without specifying the encryption option ( Encrypt Export or setting `Encrypted` to `true` ), the encrypted fields are masked (replaced with \*\*\*\*\*\*).

If you delete the record, both the exported file and the export record will be removed. In the export record table, a lock icon in File Type indicates an encrypted record.

If this feature is not enabled for your tenant, you can use the API to set Encrypted to true, but the API will return an error message.

The encrypted fields are never selectable in a [query( )](/zuora-platform/integration/apis/soap-api/soap-api-calls/query) operation. If you attempt to select an encrypted field, you will receive an "invalid field" error.

Encrypted Data Source Exports disables data integrity check by default. If you want to decrypt the exported files with Workflow, where a data integrity check is required, contact [Zuora Global Support](https://support.zuora.com/) to enable the data integrity check for your tenant.

## Notes and Limitations

-   In Data Source Export, currencies are exported as currency names but not currency codes. For mappings of currency codes and currency names used in Zuora, see [ISO Currency Codes](/basics/about-zuora/currency-codes).

-   If ' `=` ', ' `+` ', ' `-` ', ' `@` ', or ' `;` ' is the first character of a field value, Zuora inserts an apostrophe ( `'` ) at the beginning of the field value when generating the exported data files. This avoids CSV injection vulnerability. However, if the data type is `integer` and ' `-` ' is the first character of the field value, Zuora does not insert an apostrophe ( `'` ).

-   If the field value contains the following 2-character string, Zuora will insert an apostrophe ( `'` ) in between:

    -   `;=`

    -   `;+`

    -   `;-`

    -   `;@`

-   wiki.page{path: "z\_Source/limits", heading: "1", section: "File Size Limitation"}

-   If you export data in Excel (.xlsx) format, the export will fail if the data contains more than 1,048,575 rows. In this scenario, Zuora recommends that you export the data in CSV or CSV ZIP format instead, then import the data into Excel.

-   Zuora enforces the following limits on data source exports:

    -   The maximum processing time per export is 3 hours. If an export is executed for longer than 3 hours, it will be killed automatically.

    -   The maximum number of concurrent exports is 50 per tenant. Exports in `Pending` and `Processing` status are counted towards the concurrent export limit. Zuora system will reject the subsequent data source export requests once the concurrent export limit is reached.

    -   The maximum number of tables in the `JOIN` statement per query is 61. The number of joined tables of the current query is based on the data source export settings and related object details in your Zuora tenant. The following is a non-exhaustive list of how many tables are joined in different scenarios: For example, you have created 30 picklist custom fields for the Subscription object in your Zuora tenant. When exporting all fields of the Subscription object in Data Source Exports, the export fails because the number of joined tables of this query exceeds 61.

        -   One joined table for each selected data source object.

        -   One additional joined table for each data source object that contains custom fields.

        -   Two joined tables for each selected custom field of the Picklist field type.
