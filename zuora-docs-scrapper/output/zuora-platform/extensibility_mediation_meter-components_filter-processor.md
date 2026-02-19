---
title: "Filter processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/filter-processor"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:38.875Z"
---

# Filter processor

Use the Filter processor to remove unwanted or irrelevant records early in the pipeline so that downstream processors work only on the data you care about.

The Filter processor controls which records continue through your Mediation pipeline. It evaluates each incoming record against the rules you configure. Records that satisfy the filter criteria pass through to downstream processors. Records that do not match are dropped and are not processed further.

## How the Filter processor works

A filter is made up of rules and groups:

-   A rule compares a single field to a value by using an operator.

    -   The field can be any supported attribute in the event record, such as Id, Status, Amount, or a custom field.

    -   The operator defines how the field is compared to the value, for example Equals, Greater Than, or Contains.

-   A group contains one or more rules. Groups let you build more complex expressions by combining multiple rules.


You can also control how rules and groups are combined:

-   AND – All rules in the group must be true for the group to be true.

-   OR – At least one rule in the group must be true for the group to be true.


During processing:

1.  Each record is evaluated against the configured rules and groups.

2.  The Filter processor computes the overall result based on your AND / OR configuration.

3.  If the result is true, the record continues to the next processor in the pipeline.

4.  If the result is false, the record is dropped and does not continue downstream.


You can create simple filters with a single rule, or use multiple rules and groups to implement more advanced logic.

## Example configurations

Example 1: Filter active customers

Goal: Pass through only records for active customers.

-   Field: Status

-   Operator: Equals

-   Value: Active


This configuration keeps only records where Status is Active. All other records are dropped.

{ "ruleCombiner": "and", "rules": \[ { "sourceField": "Status", "operator": "Equals", "value": "Active" } \] }

Example 2: Filter large transactions

Goal: Keep only records with a large transaction amount.

-   Field: Amount

-   Operator: Greater Than

-   Value: 1000


This configuration passes only records where Amount is greater than 1000. Smaller transactions are dropped.

{ "ruleCombiner": "and", "rules": \[ { "sourceField": "Amount", "operator": "Greater Than", "value": "1000" } \] }

Example 3: Combine multiple conditions

Goal: Keep only active customers in the US.

Group 1:

-   Combiner: AND

-   Rules:

    -   Status Equals Active

    -   Country Equals US


This configuration keeps only records that are both active and located in the US. You can add additional groups and use OR to support alternative conditions.

## Best practices

-   Use Add rule for single conditions and Add group when you need to group several related rules.

-   Keep rules simple and focused. Break complex expressions into multiple rules or groups where possible.

-   Use AND combinations to enforce strict conditions and OR combinations to support multiple acceptable conditions.

-   Place Filter processors early in your pipeline to remove unneeded records before they reach more resource intensive processors.

-   Test your filter with sample data to verify that it includes and excludes the expected records.


## Behavior notes

-   Records that do not match the filter criteria are dropped silently. They do not generate errors or alerts.

-   String comparisons are case-sensitive. For example, Status = "Active" does not match "active".

-   Numeric comparisons support both integers and decimal values.

-   For list operators such as In and Not In, the value is treated as a comma-separated list.


## Related processors

You can combine the Filter processor with other processors:

-   Map processor – Transform or enrich filtered data after it passes through the Filter.

-   Router processor – Send filtered records to different downstream paths based on routing rules.
