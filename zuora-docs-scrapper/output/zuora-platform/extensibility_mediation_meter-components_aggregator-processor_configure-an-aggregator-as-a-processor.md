---
title: "Configure an Aggregator as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/aggregator-processor/configure-an-aggregator-as-a-processor"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:53.081Z"
---

# Configure an Aggregator as a processor

Use the Aggregator processor to calculate aggregate values over incoming usage events without reducing the number of records.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Aggregator as the processor. The Aggregator settings page is displayed.

    ![Aggregator processor fields](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e4a86998-6164-4f43-9dc0-b18752b83824?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0YTg2OTk4LTYxNjQtNGY0My05ZGMwLWIxODc1MmI4MzgyNCIsImV4cCI6MTc3MTU1ODAwNywianRpIjoiZDA2NjZiMmFlYTUwNGJhOWFmNjE3NTI3ZDI3MzRmM2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wGgVh_hJ1gdTXm13xAetBE3g4P7cY_RAkOb7kpSTdxA)

4.  Enter a name for the aggregator component.

    The Operator ID is a system‑generated, non-editable identifier for this operator, used in audit and API integrations.

5.  In the Partition By field, select the fields you want to group events by.

    Events that share the same values for these fields belong to the same partition or group.

6.  (Optional) In Field to Sort By, choose the field that defines the order of records within each partition. Also specify the Sort Order by selecting Ascending or Descending.

    Typically this is a timestamp field such as eventTime or UsageDate. Use a sort field when the order of events matters for your aggregation logic, for example when you use the delta operator.

7.  In the aggregation section, define the aggregates you want to compute for each partition.
    1.  For each aggregate field, select an Operator such as sum, avg, min, max, count, or delta.
    2.  Select the Source Field that you want to aggregate.
    3.  Enter the Result Field name where the aggregate value will be stored.

        If you reuse the same name as the source field for the result field, the original field is overwritten. If you specify a new result field name, the source field is preserved and the aggregate value is added as a new field.

    4.  Use the Add Field option to define multiple aggregate operations in one configuration, for example to calculate sum, avg, and delta for the same source field.
8.  (Optional) In Advanced Aggregation, you can configure custom JavaScript or Python logic to process events using more complex rules.

    Use this feature carefully in high-volume environments because custom code can impact performance.

9.  Click Save to save the processor settings.
