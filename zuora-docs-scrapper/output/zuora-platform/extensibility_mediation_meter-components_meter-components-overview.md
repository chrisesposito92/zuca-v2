---
title: "Meter components overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/meter-components-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:11.436Z"
---

# Meter components overview

Meter components are essential for data processing, including source, processor, and target components, each performing specific actions to manage and transform data efficiently.

Components are the building blocks of meters. A component receives data from the preceding component, performs predefined actions, and passes the data on to the next component. There are different types of components.

## Source components

A source component can pull, upload, or ingest data to the meters. You can pull data from a data warehouse, upload data from files, or ingest data from a streaming API.

| Component | Description |
| --- | --- |
| Streaming API | Streaming API source is used for long-running requests left open so data can be pushed into it. These APIs are used to read data from the web in real-time and provide users with precise and up-to-date information. Streaming API or Kafka Source can handle up to 10K records per second. |
| Amazon S3 | Amazon S3 source is used to set up the S3 connection, including the S3 bucket, credentials, and base path to ingest data into Meter. To set up a connection and provisioning, contact Zuora Support. The throughput can also reach a max of 10K records per second. |
| Upload File | Upload File source is used to upload data files into Meter. The Supported formats are CSV, JSON, XML, PARQUET, and AVRO. The maximum size of an uploaded file is 10MB, and the maximum number of lines of an uploaded file is 10K. |
| Snowflake | Snowflake source is used to set up Snowflake connection, including the connection path, table, or query to ingest data into Meter. To set up a connection and provisioning, contact Zuora Support . The throughput can also reach a max of 10K records per second. |
| Kafka | Kafka source is used to set up Kafka connection, including the connection path, topic, and data format to ingest data into Meter. To set up a connection and provisioning, contact Zuora Support . The throughput can also reach a max of 10K records per second. |

## Processor components

A processor component can process data, such as map, enrichment, aggregation, advanced data transformation, individual rating, and so on, to support customers' requirements. Both standard and advanced customer-specific scripts are supported.

| Component | Description |
| --- | --- |
| Enrichment | Enrichment is used to provide additional data information to the original events. If the raw events do not come with all the data fields required for rating and billing, this processor adds additional data, such as Zuora Subscription Number, Charge Number, UOM, and so on as additional data fields, based on lookup the raw event attributes from Zuora system. |
| Map | Map operator allows the transformation of the column name or its value to another field name and value. This component allows renaming, dropping, and transforming the event fields and field data. |
| Aggregator | Aggregator is the operator where you can group values by different fields, that is, time, ID and so on. The aggregate fields can be operated by sum, count, max, min, and so on based on the group criteria. |
| Accumulator | Accumulator is used to mount the value up with a certain period of time. “Accumulates” or collects events into a set that are to be processed together rather than in a streaming fashion. The aggregate fields can be operated by sum, count, max, min, and on based on group criteria. |
| Filter | Filter operator allows to exclude certain events from further processing based on the preset conditions. |
| Deduplicator | Deduplication is a technique for eliminating duplicate copies of repetitive events. This component guarantees the processing of unique events. |
| Advanced Transformer | Advanced Transformer is where you can put a self-written script into the pipeline to transform your data. Use the Advanced Transformer to add actual code to perform the transformation you need. We support JavaScript and Python. |
| Currency Lookup | The Currency Lookup processor converts transaction amounts between currencies using exchange rates from a chosen source. It adds the converted values to your data for billing or analytics. |
| Rating | The Rating processor lets you to generate an individual rated amount for each usage event by calculating charges based on usage quantity and pricing configuration. |
| HTTP | The HTTP processor enables your mediation pipelines to connect with external systems using HTTP or HTTPS requests. Use this processor to enrich, validate, and integrate data with third-party REST APIs directly within your pipeline. |

## Target components

A target component can export data into a data warehouse or load events such as Usage Records to Zuora Billing, that is, to Snowflake, AWS S3, or load the resulting usage records into Zuora Billing.

| Component | Description |
| --- | --- |
| Usage Records | Usage Records target is used to take the result events and loads them as Usage Records into Zuora Billing. |
| Snowflake | Snowflake target is used to set up the connection, including the connection path, table, or query to export the output data in your Snowflake. To set up a connection and provisioning, contact Zuora Support . |
| Amazon S3 | Amazon S3 target is used to set up the S3 connection, including the S3 bucket, credentials, and base path here to export the output data in your Amazon S3. To set up a connection and provisioning, contact Zuora Support . |
| Kafka | Kafka target is used to set up the Kafka connection, including the connection path, topic, and data format, to export the output events to your Kafka. To set up a connection and provisioning, contact Zuora Support . |
