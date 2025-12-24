---
title: "Event Monitoring in OneID"
url: "https://docs.zuora.com/en/zuora-platform/user-management/oneid/event-monitoring-in-oneid"
product: "zuora-platform"
scraped_at: "2025-12-24T05:16:57.078Z"
---

# Event Monitoring in OneID

Event Monitoring in OneID streams audit events to Splunk for real-time monitoring and supports broader SIEM integrations through Zuora Audit APIs.

Event Monitoring in OneID streams audit events from Zuora systems into external monitoring tools. It provides an out-of-the-box integration with Splunk and supports broader SIEM platforms through Zuora Audit APIs. You can use Event Monitoring to analyze real-time activity, set up alerts, and consolidate audit data across your environment.

Event Monitoring includes the following capabilities:

-   Stream OneID and Billing audit events directly to Splunk using the native HEC (HTTP Event Collector) integration.

-   Use Zuora Audit APIs to retrieve audit events and forward them to other SIEM tools such as Datadog or Sentinel.

-   Build custom pipelines to route Zuora audit data into any external monitoring system.


## Event Monitoring Architecture

Event Monitoring serves as the high-level framework for exporting audit events. Under this framework, Zuora provides:

-   Splunk Integration (native) – Streams events directly to Splunk using HEC.

-   Audit Log APIs – Allows you to retrieve audit events programmatically and integrate with any third-party SIEM or logging tool.


Splunk is the only built-in integration today. If you do not use Splunk, you can use Audit APIs to connect Zuora audit events to your preferred system.

## Integrate Zuora Audit Events with Other Monitoring Tools

If you use a monitoring platform other than Splunk, you can stream events using the Audit Log APIs. These APIs allow you to:

-   Retrieve audit events programmatically

-   Ingest them into tools such as Datadog, Sentinel, or custom logging pipelines

-   Build automated workflows for continuous event ingestion


For more detailed information, see
