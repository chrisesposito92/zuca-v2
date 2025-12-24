---
title: "Configure Kafka as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-kafka-as-a-source"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:21.464Z"
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

To configure a custom meter to use Kafka as a source:

1.  Create a Custom Meter.
2.  Select Kafka as the source. The Kafka settings page is displayed. ![Kafka source settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/760d8f02-1b70-41e1-9f01-06222300f1d9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2MGQ4ZjAyLTFiNzAtNDFlMS05ZjAxLTA2MjIyMzAwZjFkOSIsImV4cCI6MTc2NjY0MDU1OSwianRpIjoiOTFiMzNhYzI5ODRiNDU1M2EyM2IyMzJkMzY0N2FhMTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jlgbzyVgfugAAwYSUexnQqZKNNim0muEcbaGVa1EX8g)
3.  Click Select to select an Event Definition on the Kafka settings page. Only event schema import from an AVSC schema is supported.
4.  Under the Kafka Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select a connection from the Connection drop-down list. To set up a connection, contact Zuora Support. |
    | Topic | Select a topic from Apache Kafka for event ingestion. |
    | Data Format | Select a data format from the Kafka events. You must ensure that all the events in the Kafka topic must be in the same format, else the message ingestion fails.For example, use the event definition generated from the AVRO data file for the AVRO data format. |
    | Offset Reset Strategy | Select a value from the following options:Latest: Selecting this option causes the meter to ignore the existing data events in the Kafka topic and only ingest the new events added to the topic.Earliest: Selecting this option makes the meter ingest all the data events, including the existing data in the Kafka topic, and the new events added to the topic path. |

5.  Click Save to save the Kafka source settings.
6.  Create a Custom Meter.
7.  Select Kafka as the target. The Kafka settings page is displayed. ![Kafka target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b74f1abf-43cc-4a60-8a26-def482e605ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3NGYxYWJmLTQzY2MtNGE2MC04YTI2LWRlZjQ4MmU2MDVlZiIsImV4cCI6MTc2NjY0MDU1OSwianRpIjoiYWRkZDdjZjRjZTNiNGEyM2FkNTExNWZlODFmZDM0Y2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.eqA8z1elVgZvS3ZJBobCtRmqsFZu1Gg8eEVOqeQzgH0)
8.  Click Select to select an Event Definition on the Kafka settings page. Only event schema import from an AVSC schema is supported.
9.  Under the Kafka Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select a connection from the Connection drop-down list. To set up a connection, contact Zuora Support. |
    | Topic | Select a topic from Apache Kafka for events output. |
    | Data Format | Select a data format from the Kafka events. If you choose the AVRO format, you must also specify an event definition which is imported from an AVRO schema. |
    | Key Fields | Click the Key Fields Format drop-down list to select one or more key fields.The output usage event generates the partition key based on the order of key field selections. The key fields are connected by a “_” character to generate a final partition key if multiple fields are selected.For example, uom_product_accountId |

10.  Click Save to save the Kafka target settings.

The custom meter is configured to use an Apache Kafka source.
