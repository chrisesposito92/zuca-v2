---
title: "Custom object record management"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-record-management"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:22.297Z"
---

# Custom object record management

You can create and manage custom object records for custom objects with bulk operations or integration with other Zuora features, such as Events and Notifications, and Workflow.

## Query custom object records

You can query custom object records by the following ways:

-   UI: Use [Data Query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita). This is an asynchronous query and any field can be used in the WHERE clause to filter results. See [SQL Queries in Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query) for details. Note that it may take up to 60 minutes for a newly created custom object to be available in Data Query. To query custom objects in Data Query, the custom object name needs to be prefixed with `default__` and custom field API names should be used in the SELECT statement. For example: `SELECT make__c, model__c, year__c, VIN__c FROM default__Vehicle`

-   API: Make a [List records for a custom object](https://developer.zuora.com/v1-api-reference/api/operation/GET_AllRecordsForCustomObjectType/) call. This is a high-performance query and only filterable fields can be used as filters in this query. See Query syntax of custom object records for details.


## Events for custom object records

Zuora provides the following events that focus on the usage of custom object records:

-   Custom Object Records High Usage

-   Custom Object Records Max Usage


These events are evaluated on a daily basis. If the number of custom object records of a specific custom object definition exceeds the pre-defined limit value, Zuora will trigger notifications related to these events. For more information about event details and limit values, see [Standard events for Zuora Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform).

## Manage custom object records in Workflow

Zuora Workflow provides the following tasks for you to create, query, update, or delete custom object records. For more information, see [Zuora Workflow](/zuora-platform/extensibility/workflow/workflow-overview).

-   Custom Object: Create Record

-   Custom Object: Query Record

-   Custom Object: Update Record

-   Custom Object: Delete Record


## Notes and limitations

When managing custom object fields, keep the following notes and limitations in mind:

-   The maximum size of .csv files is 15 MB.

-   The uploaded `.csv` file cannot contain system fields such as `CreatedDate`, `UpdatedDate`, and others.

-   The `Id` system field applies only to the `.csv` file for updating custom object records in bulk.

-   When creating or updating custom object records in bulk, Zuora uses the value in columns in the `.csv` file for corresponding custom fields, and uses the default value for fields that are not present in the file. For example, assume that a custom object record contains the following custom fields:

    | Field name | Field API name | Default field value | Field value in this record |
    | --- | --- | --- | --- |
    | Sold | sold__c | False | False |
    | Color | color__c | White | Red |

    When updating this record via a `.csv` file that contains only the `Id` and `sold__c` columns, the Color will be set to `White` instead of `Red` because the `color__c` field is not provided in the file.

-   When creating or updating custom object records in bulk, if the `.csv` file contains records with duplicated values for a unique-type field, Zuora will accept the first record by sequential order in the file, and reject other records with duplicated values. Other records that do not have duplicated values in the same file will be accepted as usual. You can find all rejected records of a particular bulk job for creation through the [List all errors for a custom object bulk job](https://developer.zuora.com/v1-api-reference/api/operation/GET_CustomObjectBulkJobErrors/) API operation. The following is an example of a `.csv` file for creating records:

    | Row number | Unique_text_field__c | The_other_boolean_field__c |
    | --- | --- | --- |
    | 2 | region001 | true |
    | 3 | region002 | true |
    | 4 | region003 | false |
    | 5 | region002 | false |
    | 6 | region004 | true |

    By receiving this file, Zuora will create four records for rows 2, 3, 4, and 6. Row 5 will be rejected because it has a duplicated value (`region002`) for the unique field (`Unique_text_field__c`) and is after row 3, which shares the same value for this field.
