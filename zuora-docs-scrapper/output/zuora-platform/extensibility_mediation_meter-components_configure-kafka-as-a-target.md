---
title: "Configure Kafka as a target"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-kafka-as-a-target"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:19.930Z"
---

# Configure Kafka as a target

Learn how to configure custom meters to use Apache Kafka as a target for data transition in Zuora.

Custom meters can be configured to use Apache Kafka as a target.

Note: Kafka Connections can only be used in Mediation as source or target for Zuora internal Kafka data transition. Connecting to external Kafka as a streaming data source is not supported.
The following table specifies the mediation meter volume limits:
|  | API Sandbox | Zuora Developer Sandbox | Zuora Central Sandbox |
| --- | --- | --- | --- |
| Kafka | 4KB single message size10K messages/ min | 4KB single message size20K messages/ min | Same as required for production |
| The guidelines for Zuora Central Sandbox must be followed for your Production environment. |  |  |  |

To configure a custom meter to use Kafka as a target:

1.  Create a Custom Meter.
2.  Select Kafka as the target. The Kafka settings page is displayed. ![Kafka target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b74f1abf-43cc-4a60-8a26-def482e605ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3NGYxYWJmLTQzY2MtNGE2MC04YTI2LWRlZjQ4MmU2MDVlZiIsImV4cCI6MTc2NjY0MDYxNywianRpIjoiYzIwYzJhMGUyNDU2NDExMjgwMTQ4NmM5NTk5OWY1MGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.OgoNj_RY0noLBsCWF3Q6U3CPJnI2IUNF31w_CdJyU_g)
3.  Click Select to select an Event Definition on the Kafka settings page. Only event schema import from an AVSC schema is supported.
4.  Under the Kafka Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select a connection from the Connection drop-down list. To set up a connection, contact Zuora Support. |
    | Topic | Select a topic from Apache Kafka for events output. |
    | Data Format | Select a data format from the Kafka events. If you choose the AVRO format, you must also specify an event definition which is imported from an AVRO schema. |
    | Key Fields | Click the Key Fields Format drop-down list to select one or more key fields.The output usage event generates the partition key based on the order of key field selections. The key fields are connected by a “_” character to generate a final partition key if multiple fields are selected.For example, uom_product_accountId |

5.  Click Save to save the Kafka target settings.

The custom meter is configured to use Kafka as a target.
