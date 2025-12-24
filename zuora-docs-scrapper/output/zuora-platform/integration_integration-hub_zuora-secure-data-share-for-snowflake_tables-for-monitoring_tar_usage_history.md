---
title: "TAR_USAGE_HISTORY"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/tables-for-monitoring/tar_usage_history"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:28.507Z"
---

# TAR\_USAGE\_HISTORY

Total Active Rows (TAR) is the total count of rows made available from Zuora to your Snowflake account in your secure data share.

You can use the `TAR_USAGE_HISTORY` table to monitor the TAR usage of your Snowflake account.

Zuora updates the `TAR_USAGE_HISTORY` table on a daily basis. Each row in this table represents the TAR usage record of a specific Zuora business object.

Zuora does not charge for rows used by the TAR\_USAGE\_HISTORY table in your secure data share. As such, the TAR\_USAGE\_HISTORY table does not include row counts from this table itself, whereas soft deleted records of Zuora business objects are included.

## Columns

The following table provides information on columns:
| Column name | Data type | Description |
| --- | --- | --- |
| TENANT_ID | VARCHAR | ID of your Zuora tenant who owns the object that this TAR usage record was created for. |
| USAGE_DATE | DATE | Valid date of the TAR usage value of this record. |
| CREATED_ON | TIMESTAMP_TZ | Date and time when this TAR usage record was created. |
| TOTAL_ACTIVE_ROWS | NUMBER | TAR usage value of the Zuora business object. |
| VIEW_NAME | VARCHAR | View name of the Zuora business object in Snowflake. |
| SECURE_SHARE_NAME | VARCHAR | The shared database name, in the format of ZUORA_<tenant ID> . |

## Table example

The following is an example of the `TAR_USAGE_HISTORY` table with TAR usage records for the Account, Invoice and Payment objects:

TENANT\_ID,USAGE\_DATE,CREATED\_ON,TOTAL\_ACTIVE\_ROWS,VIEW\_NAME,SECURE\_SHARE\_NAME 33456,2023-08-15,2023-08-15T00:33:42.936Z,8507,ACCOUNT,ZUORA\_33456 33456,2023-08-15,2023-08-15T00:33:42.936Z,28936,INVOICE,ZUORA\_33456 33456,2023-08-15,2023-08-15T00:33:42.936Z,91200,PAYMENT,ZUORA\_33456
