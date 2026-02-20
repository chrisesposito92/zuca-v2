---
title: "Basic concept"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-bi-views/basic-concept"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:53.043Z"
---

# Basic concept

Zuora Revenue BI views enable business intelligence professionals to model, extract, and develop analytical insights by understanding data structures and relationships.

As business intelligence (BI) architects, data modelers, ETL business analysts, or report developers, you can use the Zuora Revenue BI views for modeling, extraction, and development of your own analytical business intelligence for your organization.

The BI views provided by Zuora Revenue are a set of logical and physical database entities. Before you start designing your own analytical business intelligence by using Zuora Revenue BI views, it is necessary to understand the data structures and table relationships among these Zuora Revenue BI views.

## Overview

The data entities for Zuora Revenue BI views are based on the key physical tables. Some data entities are similar to the physical tables on which they are based and other BI data entities are derived. Derived data entities are created based on the physical tables with additional transformation rules that are used in reporting.

Derived data entities are mainly used to guide the development of the upstream ETL/ELT logic. Although derived data entities can be directly used for reports and data extraction, it is recommended that you extract the source data entities from Zuora Revenue and then carry out data transformation outside Zuora Revenue in dedicated ETL/ELT environments. After that, you can upload data to the target warehouse systems such as EDW or ODS for business analysis. To understand the BI view logic, contact [Zuora Support](https://www.zuora.com/support-center/).
Note: Zuora Revenue BI views do not have any security filtering applied. When you use the BI views, you should determine the best method to secure and segregate the data in your organization.

The following table lists the data entities and the physical tables on which Zuora Revenue BI views are based. Account Summary (RPRO\_BI3\_LN\_ACCT\_SUMM\_V) and Waterfall (RPRO\_BI3\_WF\_SUMM\_V) are derived.

| Data entity | Physical table |
| --- | --- |
| Account Type | RPRO_BI3_ACCT_TYPE_V |
| Accounting Pre-Summary | RPRO_BI3_RI_ACCT_SUMM_V |
| Acct Summary (Derived) | RPRO_BI3_LN_ACCT_SUMM_V |
| Approvals | RPRO_BI3_APPR_DTL_V |
| Bill | RPRO_BI3_RC_BILL_V |
| Book | RPRO_BI3_BOOK_V |
| Calendar | RPRO_BI3_CALENDAR_V |
| Cost | RPRO_BI3_RC_LN_COST_V |
| Deleted Schedules | RPRO_BI3_RC_SCHD_DEL_V |
| Header | RPRO_BI3_RC_HEAD_V |
| Holds | RPRO_BI3_RC_HOLD_V |
| Lines | RPRO_BI3_RC_LNS_V |
| MJE | RPRO_BI3_MJE_V |
| Org | RPRO_BI3_ORG_V |
| Period | RPRO_BI3_CALENDAR_V |
| POB | RPRO_BI3_RC_POB_V |
| Schedules | RPRO_BI3_RC_SCHD_V |
| Waterfall (Derived) | RPRO_BI3_WF_SUMM_V |

## Logical data model

The following diagram illustrates the relationship between the BI views in Zuora Revenue. The BI views in the dashed line boxes indicate that the BI views might be used by multiple roles.

## Physical data model

The following diagram illustrates the relationship between the physical tables used by Zuora Revenue BI views. The physical tables in the dashed line boxes indicate that the tables might be used by multiple roles.

![physical-data-model.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b611c229-1624-4f0b-b1a3-e72db48d0163?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2MTFjMjI5LTE2MjQtNGYwYi1iMWEzLWU3MmRiNDhkMDE2MyIsImV4cCI6MTc3MTcwODcxMywianRpIjoiOTUxZTE4YTMzNDUxNGRkMzgyNjA5YmJkYTkyYTY2NWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.au9H_qAK9AYYtXYFf3CEGOBH5nDKVwO378xLNBhXmH0)

## Related articles

For detailed information about each BI view including the contained columns, see [Data entry details](/zuora-revenue/advanced-revenue-operations/zuora-revenue-bi-views/data-entry-details) . Downloaded spreadsheets are also provided for Zuora Revenue BI views.

To see some query examples to derive results in different reporting scenarios, see [Sample queries](/zuora-revenue/advanced-revenue-operations/zuora-revenue-bi-views/sample-queries) .
