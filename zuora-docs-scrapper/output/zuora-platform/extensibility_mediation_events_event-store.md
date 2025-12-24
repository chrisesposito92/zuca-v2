---
title: "Event Store"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/event-store"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:58.753Z"
---

# Event Store

The Event Store is a versatile data storage solution in the mediation system, enabling data ingestion, storage, and processing for various scenarios such as multi-region data collection, time-shifted processing, and data validation.

The Event Store is an intermediate data storage solution in the mediation system that serves as both a source to ingest data and a target to store event data. You can add an event store to a custom meter to capture, store, and process event data.

The Event Store can be used in the following scenarios:
| Business need | Using the Event Store |
| --- | --- |
| Multi-region data collection and business consolidation | You can use the Event Store to collect data from different geographic regions that may generate data at different times, the Event Store can serve as a central repository before processing the aggregated data.The Event Store collects data from all regions as it becomes available throughout the month, then a single meter pulls from the Event Store to process the consolidated data once all regions have reported.Example: A global company has operations in Asia, Europe, and North America. Each region has its own billing system that generates usage data. The company needs to consolidate all this data before processing it for customer invoicing. |
| Time-shifted processing | You can use the Event Store to ingest data at one time but process it at a later point (e.g., collecting usage throughout the month but only processing at month-end) |
| Data transformation | You can use the Event Store to collect data in different formats for subsequent processing, the Event Store can serve as the intermediary storage. |
| Error recovery and reprocessing | If there are issues with downstream processing, having data in the Event Store allows for data reprocessing without needing to re-extract from source systems. |
| Data validation | You can use the Event Store to verify data completeness or correctness before submitting it for billing or other critical processes. |
| Usage-based Pricing with Verification | You can use the Event Store to collect the raw usage events, then at month-end, run a verification process before determining the final billable amount.Example: A SaaS provider charges customers based on API usage. They want to collect raw usage data throughout the month, but need to verify and clean the data before calculating charges. |
| Regulatory Reporting with Historical Access | You can use the Event Store to store all communication events in the Event Store. Use that data to generate monthly compliance reports while maintaining the ability to query data during the billing cycle, before pushing that data into a data warehouse.Example: A telecom company must maintain records of all customer communications for regulatory purposes. |

-   You cannot select the same event store as different output targets for the same meter.
-   You cannot use the same event store as both a source and target in the same meter.

Click the Event Store button on the Meters landing page to see the list of event stores. Click on an event store name to see the details.
