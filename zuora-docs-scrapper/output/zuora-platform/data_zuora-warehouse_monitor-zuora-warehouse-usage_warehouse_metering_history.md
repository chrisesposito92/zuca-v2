---
title: "WAREHOUSE_METERING_HISTORY"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-warehouse/monitor-zuora-warehouse-usage/warehouse_metering_history"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:01.431Z"
---

# WAREHOUSE\_METERING\_HISTORY

The `WAREHOUSE_METERING_HISTORY` table stores the compute credit usage of your Zuora Warehouse . Each row in this table represents an hourly compute credit usage.

The warehouse size determines how many credits it consumes. A warehouse of X-Small size consumes 15 credits per hour (0.0042 credits per second).

## Columns

The following table provides information on columns:
| Column name | Data type | Description |
| --- | --- | --- |
| TENANT_ID | VARCHAR | ID of your Zuora tenant that this compute credit usage relates to. |
| START_TIME | TIMESTAMP_TZ | The date and beginning of the hour when this compute credit usage occurred. |
| END_TIME | TIMESTAMP_TZ | The date and end of the hour when this compute credit usage occurred. |
| WAREHOUSE_SIZE | VARCHAR | Size of the warehouse where this compute credit usage occurred. |
| CREDITS_USED | NUMBER | Used credits during this hour. |

## Table example

The following is an example of the `WAREHOUSE_METERING_HISTORY` table with two compute credit usages whose used credits are `0.074588611` and `0.032626921`:

TENANT\_ID,START\_TIME,END\_TIME,WAREHOUSE\_SIZE,CREDITS\_USED 33456,2023-08-15T03:00:00Z,2023-08-15T04:00:00Z,X-Small,0.074588611 33456,2023-08-15T04:00:00Z,2023-08-15T05:00:00Z,X-Small,0.032626921
