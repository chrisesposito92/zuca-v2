---
title: "Audit Trail for meter errors"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/audit-trail-for-meter-errors"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:22.832Z"
---

# Audit Trail for meter errors

Learn how to use audit trails to track and filter meter errors by timeframe, session ID, and error category.

## Filter audit trails by timeframe

An audit trail provides a list of recorded logs. Each entry contains a record of the changes to the usage meter. For a meter error, audit trails are generated based on the error code. You can apply filter conditions to view the meter errors, based on your selection.

You can access this information under Audit Trail > Errors.

To view the errors by timeframe, select the Timeframe in the Filter By drop-down and set the duration. Once you apply the filters, an error breakdown chart and list are generated and displayed.

## Filter audit trails by session ID

To view the errors by session, select the Session in the Filter By drop-down. Once you apply the filters, an error breakdown chart and list are generated and displayed.

## View the error category breakdown and details

The pictorial chart and the list view display the audit trail for all errors. To view the errors by error codes, select an error code from the Error Category Breakdown & Details drop-down list. An error breakdown chart, and a list is displayed for the selected error code.

The chart displays the number of errors for the selected error code and the error category. The list view displays the following details:

| Field | Description |
| --- | --- |
| Ingestion Time | Ingestion time of the data. |
| Source, Processor, or Target | Category of the data |
| Operator Name | Operator name of the data |
| Error Code | Error code of the data |
| Error Message | Error message of the data |
| Actions | Click to view the input data |

Click View Input Data from the error list to view the input data for the selected list item.

![Input data view](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0695a30b-9cd3-4cd3-acd7-cd71fad6bdf3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA2OTVhMzBiLTljZDMtNGNkMy1hY2Q3LWNkNzFmYWQ2YmRmMyIsImV4cCI6MTc2NjY0MDUwMCwianRpIjoiZmU3YzVjMjlhN2MyNDkzNDk5NjRjYzY4MDdjOGQ1ZDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hEjbAoZHOIKiQVaqfAqkx7XI2HlnQsHPk-7fT0_9NcI)
