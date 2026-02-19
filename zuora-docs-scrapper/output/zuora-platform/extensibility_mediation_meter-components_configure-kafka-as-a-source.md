---
title: "Configure Kafka as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-kafka-as-a-source"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:11.782Z"
---

# Configure Kafka as a source

Learn how to configure custom meters to use Apache Kafka as a source, including setting up connections, selecting topics, and configuring data formats.

Custom meters can be configured to use Apache Kafka as a source.

Note: Kafka Connections can only be used in Mediation as source or target for Zuora internal Kafka data transition. Connecting to external Kafka as a streaming data source is not supported.
The following table specifies the mediation meter volume limits:
|  | API Sandbox | Zuora Developer Sandbox | Zuora Central Sandbox |
| --- | --- | --- | --- |
| Kafka | 4KB single message size10K messages/ min | 4KB single message size20K messages/ min | Same as required for production |
| The guidelines for Zuora Central Sandbox must be followed for your Production environment. |  |  |  |

1.  Navigate to
2.  Create a Custom meter.
3.  Select Kafka as the source. The Kafka settings page is displayed. ![Kafka source settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/760d8f02-1b70-41e1-9f01-06222300f1d9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2MGQ4ZjAyLTFiNzAtNDFlMS05ZjAxLTA2MjIyMzAwZjFkOSIsImV4cCI6MTc3MTU1Nzk3MCwianRpIjoiMDQwNmVlNWRkOWVjNDgwZGIwYjc0NWQzMTk0YWUxYzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.06XZeSKZDDiep9ONC6LsallQJwuxdTIr9ePuTS-zILQ)
4.  Click Select to select an Event Definition on the Kafka settings page. Only event schema import from an AVSC schema is supported.
5.  Under the Kafka Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select a connection from the Connection drop-down list. To set up a connection, contact Zuora Support. |
    | Topic | Select a topic from Apache Kafka for event ingestion. |
    | Data Format | Select a data format from the Kafka events. You must ensure that all the events in the Kafka topic must be in the same format, else the message ingestion fails.For example, use the event definition generated from the AVRO data file for the AVRO data format. |
    | Offset Reset Strategy | Select a value from the following options:Latest: Selecting this option causes the meter to ignore the existing data events in the Kafka topic and only ingest the new events added to the topic.Earliest: Selecting this option makes the meter ingest all the data events, including the existing data in the Kafka topic, and the new events added to the topic path. |

6.  Click Save to save the Kafka source settings.
7.  Create a Custom Meter.
8.  Select Kafka as the target. The Kafka settings page is displayed. ![Kafka target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b74f1abf-43cc-4a60-8a26-def482e605ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3NGYxYWJmLTQzY2MtNGE2MC04YTI2LWRlZjQ4MmU2MDVlZiIsImV4cCI6MTc3MTU1Nzk3MCwianRpIjoiODg3N2VlZGY0OWJhNGUwYzg2OWUxNmRjMTQ5NTUzNjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.p6BJWvjR80jMVOTow2W3oFAUy_uez5NKCEXOtW6GpS0)
9.  Click Select to select an Event Definition on the Kafka settings page. Only event schema import from an AVSC schema is supported.
10.  Under the Kafka Settings section, configure the following settings:

     | Setting | Configuration |
     | --- | --- |
     | Connection | Select a connection from the Connection drop-down list. To set up a connection, contact Zuora Support. |
     | Topic | Select a topic from Apache Kafka for events output. |
     | Data Format | Select a data format from the Kafka events. If you choose the AVRO format, you must also specify an event definition which is imported from an AVRO schema. |
     | Key Fields | Click the Key Fields Format drop-down list to select one or more key fields.The output usage event generates the partition key based on the order of key field selections. The key fields are connected by a “_” character to generate a final partition key if multiple fields are selected.For example, uom_product_accountId |

11.  Click Save to save the Kafka target settings.
