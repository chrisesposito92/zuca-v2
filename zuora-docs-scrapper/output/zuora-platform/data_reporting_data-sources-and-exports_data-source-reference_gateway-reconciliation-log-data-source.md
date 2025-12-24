---
title: "Gateway Reconciliation Log data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/gateway-reconciliation-log-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:55.729Z"
---

# Gateway Reconciliation Log data source

Data source to export Gateway Reconciliation Log data

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com/).

Use this data source to export Gateway Reconciliation Log data. This data source only includes the events, by job, that matched a Zuora transaction. Use this data to identify which transactions have been actually reconciled.

## Accessing the data source

Navigation: Reporting > Data Sources and select Gateway Reconciliation Event as the data source.

## Objects available in the data source

![gateway_reconciliation_log_datasource.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fb667ada-85e5-48a5-afd2-1a4238bd461a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZiNjY3YWRhLTg1ZTUtNDhhNS1hZmQyLTFhNDIzOGJkNDYxYSIsImV4cCI6MTc2NjY4ODIzMywianRpIjoiZmQxMTJkMjBlOGU5NDllNWJhZjdjMzAyOTI2YjcyZTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FLee9yUTyuVqzlwa_2_s6Np846ydnAQ4zSyk4rABwgQ)

## Gateway reconciliation log

| Object | Description |
| --- | --- |
| Created Date | Time the job was created. |
| Created Object ID | The result of the event processing. |
| Created Object Type | The type of result of the even processing. Currently, the only result type is Refund. |
| Error Code | The code assigned to a specific gateway error. |
| Error Message | The message associated with a specific gateway error code. |
| ID | The reconciliation ID. |
| Related Object ID | The object influenced by the event. |
| Related Object Type | Related object types are:PaymentRefund |
| Status | The status of the reconciliation job.Processing -- The job is processing.Completed -- The job has completed and the report was successfully processed.Error -- The job failed due to an error. The job details page provides additional information. |

## Gateway reconciliation event

| Object | Description |
| --- | --- |
| Amount | The event amount returned by the gateway. |
| Created Date | Time the job was created. |
| Event Date | Event execution date. |
| Event Type | The event types are as follows:Transaction SettledTransaction RejectedTransaction Reversed |
| Gateway Raw Record | The gateway response string. |
| Gateway Reason Code | The error code returned by the gateway. |
| Gateway Reason Message | The reason message corresponding to the Gateway Reason Code. |
| ID | The gateway reconciliation event ID. |
| Related Gateway Reference ID | This is used in relation to the payment gateway transaction. |
| Related Gateway Second Reference ID | This is used in relation to the payment gateway transaction. |

## Gateway reconciliation job

| Object | Description |
| --- | --- |
| Created Date | Time when the job was created. |
| Gateway | The name of the gateway from which the source information will be retrieved. |
| ID | The job ID. |
| Job Number | The number assigned to the job for a particular reconciliation period. |
| Period End | This is the latest date for which reconciliation events are expected for this job. |
| Period Start | This is the earliest date for which reconciliation events are expected for this job. |
| Status | The status of the reconciliation job.Processing -- The job is processing.Completed -- The job has completed and the report was successfully processed.Error -- The job failed due to an error. The job details page provides additional information. |

## Entity

| Zuora object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
