---
title: "Export an object sharing exception report"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/export-an-object-sharing-exception-report"
product: "zuora-platform"
scraped_at: "2026-02-20T17:46:54.421Z"
---

# Export an object sharing exception report

Learn how to export an report to track and resolve synchronization errors between source and target entities in Zuora.

Zuora provides you an object sharing exceptions report to record detailed information about the errors. You can track the errors that occurred when:

-   Synchronizing the shared objects from the source entity to target entities
-   Synchronizing the updates of the shared objects from the source entity to target entities

This report is available for all entities. The export data in the report depends on the entity you export from:

-   If you export the report from the global entity (the source entity), the report includes the errors for all the target entities.
-   If you export the report from a target entity, the report includes the errors only for this entity.

You can export the report on-demand to review the error messages and fix the errors. After you fixed the errors, the related data will not be displayed in your newly exported report.

The following objects related errors can be included in the reports:

-   Product
-   Product Rate Plan
-   Product Rate Plan Charge
-   Accounting Period

To export a report from an entity:

Note: This feature is deprecated and is not enabled by default. Contact [Zuora Global Support](https://www.zuora.com/support-center/) to enable this feature in your tenant.

1.  Navigate to Reporting > Exports in the left-hand navigation section.
2.  Select Object Sharing Exceptions from the Export Data list.
3.  In the Filters panel, select one of the following object types from the Value list:

    -   Product

    -   Product Rate Plan

    -   Product Rate Plan Charge

    -   AccountingPeriod


4.  In the Time Frame panel, specify the dates of sharing synchronization or a date range to export.
5.  Click Export .

    Column Description in Exported Report

    The following table describes the columns that are included in the exported report.

    | Column | Description |
    | --- | --- |
    | Object | The error related object. |
    | Source Object Internal Identifier | The universally unique identifier of the shared object in the source entity. |
    | Target Object Internal Identifier | The universally unique identifier of the shared object in the target entity. |
    | Source Object User Identifier | The identifier of the shared object in the source entity:Product: SKU numberProduct Rate Plan: Rate plan nameProduct Rate Plan Charge: Rate plan charge nameAccountingPeriod: Accounting period name |
    | Target Object User Identifier | The identifier of the shared object in the target entity:Product: SKU numberProduct Rate Plan: Rate plan nameProduct Rate Plan Charge: Rate plan charge nameAccountingPeriod: Accounting period name |
    | Source Entity Name | The display name of the source entity. |
    | Target Entity Name | The display name of the target entity. |
    | Performed By | The login name of the user who performed the error related operation. |
    | Sync Date & Time | The date and time when the error occurred. This is the local date and time of the target entity. |
    | Error Message | The detailed description of the error. |
