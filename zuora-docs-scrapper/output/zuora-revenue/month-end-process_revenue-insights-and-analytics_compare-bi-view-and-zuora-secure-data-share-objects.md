---
title: "Compare BI view and Zuora secure data share objects"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/revenue-insights-and-analytics/compare-bi-view-and-zuora-secure-data-share-objects"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:11.735Z"
---

# Compare BI view and Zuora secure data share objects

Zuora Secure Data Share (ZSDS) and BI view offer methods for syncing and extracting data from Zuora applications, enabling reporting and business intelligence operations.

## Zuora Secure Data Share (ZSDS)

Zuora secure data share is a native method of syncing data between Zuora applications with your Snowflake warehouse. The method extracts Zuora data without requiring API integration or data ingestion pipeline setup.

For more information on ZSDS, [see here](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data) . For information on data objects of ZSDS, [see here](/zuora-revenue/month-end-process/zuora-revenue-data-object-model) .

Through BI view API, Zuora Revenue provides data required to perform any reporting or business intelligence operations at the most granular level. ETL experts, data engineers, or BI engineers can use the API to extract data from Zuora Revenue and store the data in the native warehouse/database.

For more information on BI view and data objects of BI view, [see here](/zuora-revenue/advanced-revenue-operations/zuora-revenue-bi-views) .

The following table displays a comparison between the BI view and Zuora secure data share objects:

| Object Name | Object present in BI view? | Object present in ZSDS? | BI View Name | Physical Table Mapping (BI View) | ZSDS Object Name |
| --- | --- | --- | --- | --- | --- |
| Account Type | Yes | Yes | Account Type | RPRO_BI3_ACCT_TYPE_V | REVENUECONTRACTACCOUNTINGTYPE |
| Accounting Pre-Summary | Yes | No | Accounting Pre-Summary | RPRO_BI3_RI_ACCT_SUMM_V | Object not available in ZSDS |
| Accounting Summary (Derived) | Yes | No | Acct Summary (Derived) | RPRO_BI3_LN_ACCT_SUMM_V | Object not available in ZSDS |
| Accounting Segments | No | Yes | Accounting Segments | Object not available in BI View | REVENUECONTRACTACCOUNTINGSEGMENTS |
| Approvals | Yes | Yes | Approvals | RPRO_BI3_APPR_DTL_V | REVENUECONTRACTAPPROVALS |
| Bill | Yes | Yes | Bill | RPRO_BI3_RC_BILL_V | REVENUECONTRACTBILLSDIMENSIONSREVENUECONTRACTBILLSFACTS |
| Book | Yes | Yes | Book | RPRO_BI3_BOOK_V | Object available as part of all ZSDS object |
| Calendar | Yes | Yes | Calendar | RPRO_BI3_CALENDAR_V | REVENUECALENDAR |
| Cost | Yes | Yes | Cost | RPRO_BI3_RC_LN_COST_V | REVENUECONTRACTCOSTDIMENSIONSREVENUECONTRACTCOSTFACTS |
| Deleted Schedules | Yes | No | Deleted Schedules | RPRO_BI3_RC_SCHD_DEL_V | Object not available in ZSDS |
| Header | Yes | Yes | Header | RPRO_BI3_RC_HEAD_V | REVENUECONTRACT |
| Holds | Yes | Yes | Holds | RPRO_BI3_RC_HOLD_V | REVENUECONTRACTHOLDS |
| Lines | Yes | Yes | Lines | RPRO_BI3_RC_LNS_V | REVENUECONTRACTLINESDIMENSIONSREVENUECONTRACTLINESFACTS |
| MJE | Yes | Yes | MJE | RPRO_BI3_MJE_V | REVENUECONTRACTMJENTRIESDIMENSIONSREVENUECONTRACTMJENTRIESFACTS |
| Org | Yes | Yes | Org | RPRO_BI3_ORG_V | Object available as part of all ZSDS object |
| Period | Yes | Yes | Period | RPRO_BI3_CALENDAR_V | REVENUEPERIODS |
| POB | Yes | Yes | POB | RPRO_BI3_RC_POB_V | Object available as part of all ZSDS object |
| Revenue Contract (RC) Actions | No | Yes | RC Actions | Object not available in BI View | REVENUECONTRACTACTIONS |
| Schedules | Yes | Yes | Schedules | RPRO_BI3_RC_SCHD_V | REVENUECONTRACT |
| Waterfall (Derived) | Yes | No | Waterfall (Derived) | RPRO_BI3_WF_SUMM_V | Object not available in ZSDS |
| Variable Considerations (VC) | No | Yes | VC | Object not available in BI View | REVENUECONTRACTVCDIMENSIONSREVENUECONTRACTVCFACTS |
