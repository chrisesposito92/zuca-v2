---
title: "Configure Empty Sink as a target"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/empty-sink/configure-empty-sink-as-a-target"
product: "zuora-platform"
scraped_at: "2026-02-20T17:50:01.143Z"
---

# Configure Empty Sink as a target

Learn how to configure an Empty Sink as a target to end a branch of a meter flow without sending data externally, while maintaining an audit trail in Mediation.

1.  Navigate to
2.  Create a Custom meter.
3.  Select and configure a source for your meter (for example, Upload File, S3, Kafka, or Streaming API).
4.  Select Empty Sink as the target type.
5.  On the empty sink settings page, specify a Name for this sink instance.

    The Operator ID is a system‑generated, non-editable identifier for this operator, used in audit and API integrations.

6.  Click Save.
7.  Add processors (for example, Enrichment, Map, HTTP, Rating) between the source and the Empty Sink as needed for your flow.

When the meter runs, any event that reaches the empty sink will stop there. The event and the optional termination reason are visible in the Mediation audit views for the corresponding operator, but no Event Store or external target records are created for that branch.
