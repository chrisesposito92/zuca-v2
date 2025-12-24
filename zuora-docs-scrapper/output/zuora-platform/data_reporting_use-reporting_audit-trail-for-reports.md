---
title: "Audit trail for reports"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/audit-trail-for-reports"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:42.851Z"
---

# Audit trail for reports

This reference explains the audit trail functionality for reports.

The following table lists the various fields and their expected values for report saves.

| Field | Value(s) |
| --- | --- |
| id | ID of the Saved Report Definition |
| type | auditobjectchangeevent |
| createdbyid | The login user’s ID |
| createddate | The record's creation date |
| updateddate | The record's latest updation date |
| timestamp | The timestamp of the object change |
| eventid | ID of the object change event |
| action | Use standard audit trail behaviorCREATEDUPDATEDDELETED |
| sequencenumber | The sequence number of the login record |
| objecttype | “Report” |
| tokenid | The ID of the login token |
| transactionid | ID of the transaction that the change belongs to |
| username | Username of the user who made the report change |
| attributeid | Enumeration of report metadata that can be changed. These are based on values taken before and after from the zc_report table. The token values include:TitleDescriptionFolderShareAsReadOnlyDatasourceColumnGroups (JSON, based on zc_report.definition colFields)RowGroups (JSON, based on zc_report.definition rowFields)ValueFields (JSON, based on zc_report.definition valFields)SelectedFields (JSON, based on zc_report.definition selectedFields)DetailFilters (JSON, zc_report.definition detailFilters)SummaryFilters (JSON, zc_report.definition summaryFilters)RollingTotals |
| oldvalue | Previous value for the attributeid right before clicking Save (if the attributeid was changed) |
| namespace | “ReportManagement” |
| userid | User ID of user who edited the report. |
| objectid | The name of the changes object. |
| newvalue | New value for the attributeid right before clicking Save (if the attributeid was changed). |
| objectname | Title of Report that was updated. |
| year | The year when the record is created. |
| month | The month when the record is created. |
| day | The day of record creation. |
