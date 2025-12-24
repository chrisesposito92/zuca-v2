---
title: "Zuora Connector for Salesforce CRM metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/zuora-connector-for-salesforce-crm-dashboard/zuora-connector-for-salesforce-crm-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:37.112Z"
---

# Zuora Connector for Salesforce CRM metrics

Descriptions of the Zuora Connector for Salesforce CRM metrics

The following table provides descriptions of the Zuora Connector for Salesforce CRM metrics.

| Metric | Description | Error Code | Description |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Data Connect Overview(Total Objects Synchronized) | The number of object sync requests sent within a specified time range and details of each request, including successful and failed sync.When hovering over each time interval bar, you can view the breakdown data of that time range.Success Sync: The number of successful syncs. Success means the data is successfully sent from Zuora to Salesforce.Fail Sync: The number of failed syncs. Fail means records that were not successfully synchronized from Zuora to Salesforce. |  |  |  |  |  |  |  |  |
| Data Connect Failures(Failed Record Synchronized) | Records that were not successfully synchronized from Zuora to SFDC. You have the option to view the full error message for any specific failed record. There are three categories of error codes, which are outlined in the reference table below:Error CodeDescriptionDACO-01Known SFDC ExceptionDACO-02Missing CRM IDDACO-99Unknown Exception | Error Code | Description | DACO-01 | Known SFDC Exception | DACO-02 | Missing CRM ID | DACO-99 | Unknown Exception |
| Error Code | Description |  |  |  |  |  |  |  |  |
| DACO-01 | Known SFDC Exception |  |  |  |  |  |  |  |  |
| DACO-02 | Missing CRM ID |  |  |  |  |  |  |  |  |
| DACO-99 | Unknown Exception |  |  |  |  |  |  |  |  |
| Data Connect Performance(Sync Latency) | Data sync time from Zuora to Salesforce within a specified time range.P95: 95th percentile of the response time dataP90: 90th percentile of the response time dataP50: 50th percentile of the response time dataWhen hovering over each time interval point, you can view the breakdown data of that time range. |  |  |  |  |  |  |  |  |

You can configure notifications based on the Data Connect Failures or Data Connect Performance metrics. For more information, see [Standard events for Zuora Central Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform).
