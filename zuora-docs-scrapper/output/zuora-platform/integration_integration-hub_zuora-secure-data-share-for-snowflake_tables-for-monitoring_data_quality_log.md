---
title: "DATA_QUALITY_LOG"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/tables-for-monitoring/data_quality_log"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:26.049Z"
---

# DATA\_QUALITY\_LOG

Zuora runs a data quality check on each Zuora business object in your Snowflake account on a daily basis and stores the check logs in the `DATA_QUALITY_LOG` table.

You can use this table to monitor the completeness and accuracy of your Zuora data in Snowflake. Each row in this table represents the result of a data quality check of a specific Zuora business object.

If you want to enable the `DATA_QUALITY_LOG` table for your tenant, submit a request at [Zuora Global Support](https://support.zuora.com/).

## Columns

The following table provides information on columns:
| Column name | Data type | Description |
| --- | --- | --- |
| FROM_TIME | TIMESTAMP_TZ | Beginning date and time of this data quality check. |
| TO_TIME | TIMESTAMP_TZ | End date and time of this data quality check. |
| TENANT_ID | VARCHAR | ID of your Zuora tenant that the object data being checked belongs to. |
| STATUS | VARCHAR | Result of this data quality check:PASS : Data quality check succeeded, indicating the data of a specific object in your Zuora tenant and Snowflake is the same.FAIL : Data quality check failed because of differences between data in your Zuora tenant and Snowflake. For example, count of rows, field values, or checksum. If you encounter a check failure, contact your Zuora account representative for more details and solutions. |
| EVENT_TYPE | VARCHAR | Type of this event. The only available value is Snowflake Quality Check . |
| OBJECT | VARCHAR | Name of the object being checked. |
| MESSAGE | VARCHAR | Details of this data quality check. |

## Table example

The following is an example of the `DATA_QUALITY_LOG` table with two successful checks and one failed check:

FROM\_TIME,TO\_TIME,TENANT\_ID,STATUS,EVENT\_TYPE,OBJECT,MESSAGE 2023-08-15T00:05:00.981Z,2023-08-16T00:02:34.171Z,33456,PASS,Snowflake Quality Check,Account, 2023-08-15T00:05:00.981Z,2023-08-16T00:02:34.171Z,33456,PASS,Snowflake Quality Check,Contact, 2023-08-15T00:05:00.981Z,2023-08-16T00:02:34.171Z,33456,FAIL,Snowflake Quality Check,InvoiceItem,"Failed quality check; Zuora team alerted"
