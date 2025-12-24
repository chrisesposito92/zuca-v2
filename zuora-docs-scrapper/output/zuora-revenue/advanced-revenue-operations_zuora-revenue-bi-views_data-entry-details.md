---
title: "Data entry details"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-bi-views/data-entry-details"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:42.373Z"
---

# Data entry details

Download a spreadsheet of BI view columns and sources

The columns that are contained in each BI view and their sources are listed in a downloadable spreadsheet. The BI view data updated in the current version is highlighted in yellow. Click [BI\_Views\_37.019.00.00.xlsx](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fcf401a9-a053-4cc0-9f43-10df73f6b581?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZjZjQwMWE5LWEwNTMtNGNjMC05ZjQzLTEwZGY3M2Y2YjU4MSIsImV4cCI6MTc2NjYzNzU4MCwianRpIjoiOTljYTM0YmU5MGQ0NGE1MGI3YzVhMzc4M2RkYTI2YTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q_OBUatQRn4J_H7KxD8hIfOQlfu_eXC1AGELZm58xyY&response-content-disposition=attachment%3B+filename%3D%22BI_Views_37_019_00_00.xlsx%22) to download the spreadsheet for the latest version. For information about BI views in a previous version, see [BI views in previous versions](#concept-hvybt7do__BI_views_in_previous_versions).

Each tab in the spreadsheet provides the details about one BI view. Starting from the second row on a tab, each row represents one column in the BI view with the following information provided:

-   Entity: The physical table name based on which the BI view is created.

-   Column:: The column name in the BI view.

-   Key: Indicates whether the current column is a primary key of the BI view. The primary key indicator indicates the minimum columns that are required to uniquely identify a record in the BI view.

-   Data Type: The data type of the column.

-   Source Table: The source table from which the column originates.

-   Source Column: The name of the column in the source table from which this column origins.

-   Function/Expression: Indicates the function or expression that is used to derive the current column.

-   Description: A short description of the column.


Some columns exist in each BI view for audit purposes. These audit columns track the creation date, last update date, and the name of the user who updates the record. You can use the audit columns and the primary key columns to process the records for an incremental load strategy.

## BI views in previous versions

Zuora Revenue BI views are updated on a quarterly basis. The spreadsheet file name indicates the version that provides the contained BI views. Compared with the last quarterly update, the BI view data updated in the current version is highlighted in yellow. Click the following file to download the BI view information in a previous quarterly update:

-   RPRO\_BI3\_RC\_BILL\_V
-   RPRO\_BI3\_RC\_LNS\_V
-   RPRO\_BI3\_MJE\_V
-   RPRO\_BI3\_RC\_POB\_V

| File to download | Change history |
| --- | --- |
| BI_Views_37.008.00.00.xlsx | New columns are added to the following BI view: |
| BI_Views_37.007.00.00.xlsx | New columns are added to the following BI views:RPRO_BI3_APPR_DTL_VRPRO_BI3_RC_HEAD_VRPRO_BI3_RC_LNS_VRPRO_BI3_MJE_VData type is changed for some columns in the following BI views:RPRO_BI3_APPR_DTL_VRPRO_BI3_BOOK_VRPRO_BI3_CALENDAR_VRPRO_BI3_RC_LN_COST_VRPRO_BI3_RC_HOLD_VRPRO_BI3_MJE_VRPRO_BI3_ORG_VRPRO_BI3_PERIODSRPRO_BI3_RC_POB_VRPRO_BI3_RC_SCHD_V |
| BI_Views_37.006.00.00.xlsx | New columns are added to the following BI views:RPRO_BI3_RC_BILL_VRPRO_BI3_RC_HEAD_VRPRO_BI3_RC_LNS_V |
| BI_Views_37.005.00.00.xlsx | New columns are added to the following BI views:RPRO_BI3_RC_LN_COST_VRPRO_BI3_RC_LNS_VData type is changed for some columns in the following BI views:RPRO_BI3_LN_ACCT_SUMM_VRPRO_BI3_RC_BILL_VRPRO_BI3_BOOK_VRPRO_BI3_RC_LN_COST_VRPRO_BI3_RC_HEAD_VRPRO_BI3_RC_HOLD_VRPRO_BI3_RC_LNS_VRPRO_BI3_MJE_VRPRO_BI3_RC_POB_VRPRO_BI3_RC_SCHD_VRPRO_BI3_WF_SUMM_VThe column called ZBILL_TRUE_UP_FLAG is deprecated in RPRO_BI3_RC_BILL_V. |
| BI Views 37.004.00.00.xlsx | N/A |
| BI Views 37.003.00.00.xlsx | N/A |
| BI Views 37.002.00.00.xlsx | N/A |
| BI Views 37.001.00.00.xlsx | N/A |
| BI Views 36.009.00.xlsx | N/A |
| BI Views 36.008.00.xlsx | N/A |
| BI Views 36.006.00.xlsx | N/A |
| BI Views 36.010.00.xlsx | N/A |
