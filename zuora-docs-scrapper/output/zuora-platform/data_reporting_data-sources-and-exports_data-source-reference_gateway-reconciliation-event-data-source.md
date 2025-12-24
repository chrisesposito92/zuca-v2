---
title: "Gateway Reconciliation Event data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/gateway-reconciliation-event-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:53.225Z"
---

# Gateway Reconciliation Event data source

Data source to export Gateway Reconciliation Event data

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com/).

Use this data source to export Gateway Reconciliation Event data. This data source will include all events processed by the reconciliation job, regardless if the event matched a Zuora transaction or not.

## Accessing the data source

​Navigation: Reporting > Data Sources and select Gateway Reconciliation Event as the data source.

## Objects available in the data source

![gateway_reconciliation_event_datasource.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1959ee66-9963-4747-a853-b627e70cd8bd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE5NTllZTY2LTk5NjMtNDc0Ny1hODUzLWI2MjdlNzBjZDhiZCIsImV4cCI6MTc2NjY4ODIzMSwianRpIjoiMDVjZmQ1YTUwMGE1NDgwNTg0OGZjZjgwYmFhMDU5NzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1f4OFUtcbHqY-yXQq-Qng6cTr8q4rcVq1YfQ8aAVm7Y)

## Gateway Reconciliation Event

| Object | Description |
| --- | --- |
| Amount | The event amount returned by the gateway. |
| Created Date | Time when the job was created. |
| Event Date | Event execution date. |
| Event Type | The event types are as follows:Transaction SettledTransaction RejectedTransaction Reversed |
| Gateway Raw Record | The gateway response string |
| Gateway Reason Code | The error code returned by the gateway. |
| Gateway Reason Message | The reason message corresponding to the Gateway Reason Code. |
| ID | The gateway reconciliation event ID. |
| Related Gateway Reference ID | This is used in relation to the payment gateway transaction. |
| Related Gateway Second Reference ID | This is used in relation to the payment gateway transaction. |

## Gateway Reconciliation Job

| Object | Description |
| --- | --- |
| Created Date | Time the job was created. |
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
