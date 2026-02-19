---
title: "Aggregator processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/aggregator-processor"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:38.435Z"
---

# Aggregator processor

The Aggregator is a metering processor that calculates aggregate values over incoming usage events without reducing the number of records.

It groups events using Group By fields (the partition key), computes one or more Aggregate Fields such as sum, avg, min, max, count, or delta, and adds the results to each event. These enriched usage records can then be transferred to Billing. Records that share the same Group By values produce the same Usage Unique Key, enabling Billing to update matching usage records with the aggregated results.

Use the Aggregator when downstream rating requires every original event, but each event must also carry aggregate values, such as running totals or partition‑level metrics. If you need rollups that collapse many events into a single summarized record, use Accumulator instead.

## How the Aggregator works

The Aggregator operates in three main stages:

1.  Grouping events into partitions: The processor uses the fields you select as Group By (or Partition By) fields to form partitions of events. All events with the same values for the Group By fields belong to the same partition.

2.  Computing aggregates for each partition: Within each partition, the Aggregator applies the configured operators (for example, sum, avg, min, max, count, delta) to the selected source fields. It calculates one or more aggregate results per partition based on these operators.

3.  Enriching events with aggregate values: The Aggregator adds the aggregate values to each event in the partition, using the result field names that you specified. The number of records is not reduced; instead, each record is enriched with additional fields that contain the aggregate results.


## Group By fields and the usage unique key

The Group By fields you select act as partition keys and also determine the usage unique key that is used in Billing:

-   Events that share the same values for all Group By fields are treated as belonging to the same logical group or partition.

-   The system derives a usage unique key from these Group By values. Records with the same usage unique key can be matched in Billing and updated with aggregated results calculated by the Aggregator.


This design lets you preserve individual usage records while still communicating partition-level aggregates to downstream billing processes.

## Batch sort and sort field behavior

The Aggregator includes a batch sorting capability that lets you sort events before aggregation. This is especially important when the order of events affects the result, such as when you use the delta operator.

The batch sort feature lets you specify a Sort Field (also called Field to Sort By or Batch Sort Field) so that events are processed in a well-defined order. Sorting helps ensure consistent and predictable ordering within each partition, so that aggregates that depend on order, such as delta, produce stable and repeatable results across runs.

You configure batch sorting by specifying the Sort Field in the Aggregator settings. The Sort Field must be convertible to an unsigned long value. In practice, this usually means using a numeric type such as an epoch timestamp or a monotonically increasing sequence number. You can choose ascending or descending order, depending on whether you want the Aggregator to process the oldest events first or the newest events first.

## Partition-level vs global sorting

Sorting is applied within each partition defined by the Group By fields. All events that share the same Group By values are sorted relative to each other, but are not compared with events from other partitions. If you want to approximate a global sort across all events, you can use an empty partition key or a constant value such as "global" for the Group By key. This effectively treats all events as belonging to a single partition and applies a global ordering.

## Example: Sorting within a group

Consider a situation where you want to aggregate usage by accountNumber and sort within each account by eventTime.

Input:\[ { "accountNumber": "ACC-001", "eventTime": 1718203000, "usage": 8 }, { "accountNumber": "ACC-001", "eventTime": 1718201000, "usage": 2 }, { "accountNumber": "ACC-002", "eventTime": 1718202000, "usage": 5 }, { "accountNumber": "ACC-002", "eventTime": 1718204000, "usage": 3 } \]

Although these events may arrive out of order, the Aggregator sorts them by eventTime within each account before performing any aggregations. The sorted output is: { "ACC-001": \[ { "eventTime": 1718201000, "usage": 2 }, { "eventTime": 1718203000, "usage": 8 } \], "ACC-002": \[ { "eventTime": 1718202000, "usage": 5 }, { "eventTime": 1718204000, "usage": 3 } \] }

Here, both ACC-001 and ACC-002 events are internally ordered by their timestamp. This ensures that if you apply an operator such as delta, the processor will always calculate the difference in the correct chronological order.

## Global sorting

In some scenarios, you may want to treat all events as belonging to a single group and sort them together. You can achieve this by setting the partition key to an empty string or using a constant value such as "global." This effectively puts all events into one partition so that they can be ordered and aggregated at the dataset level rather than at the account or subscription level.

## Mode limitations

-   The batch sort feature is only available for batch-mode meters.

-   Batch mode is defined as pipelines without a Kafka source, without Streaming API, and without an incremental S3 source.

-   Pipelines that use an S3 source with a Kafka sink, for example, cannot leverage this feature because Kafka requires continuous streaming and does not support batch ordering.

-   If sorting is required in such pipelines, consider redesigning the sink to use S3, Event Store, or Zuora Usage, which support batch-oriented processing.
