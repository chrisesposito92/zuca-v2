---
title: "Decision table overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/decision-table/decision-table-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:41.463Z"
---

# Decision table overview

Decision table, a supported custom logic type in Zuora, allows you to define logic rules for standard objects with a table-like codeless user interface.

You can create logic rules with if-then statements in decision tables. When objects are created or updated, Zuora triggers the rules in decision tables to validate data accuracy or manipulate field values.

If you want to create logic rules with if-then-else statements, see [Decision tree](/zuora-platform/extensibility/custom-logic/decision-tree/decision-tree-overview). If you want to create more complicated logic rules with advanced calculations or operations, see [Function](/zuora-platform/extensibility/custom-logic/function/function-overview).

## Supported objects

For all supported objects and fields, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

## Rows in decision tables

Each row in a decision table is an if-then statement.

The relationship between two rows is OR.

## Columns in decision tables

There are two column types in a decision table:

-   Condition: A rule on an object field to validate the field value.

-   Result: A rule on an object field to set the field value or on the result to control the result status and error message.


You can add one or more conditions or results in one row. All conditions in one row compose the IF part of the if-then statement, while all results in one row compose the THEN part of the if-then statement. The relationship between two conditions or two results is AND.

## Rule evaluation process

When an object is created or updated, Zuora evaluates conditions in the first row. If all conditions are met, Zuora executes all results in the same row and ends the evaluation process. If one or more conditions are not met, Zuora skips this row and evaluates the conditions in the next row.

When executing results, if a result with `Result.Success = false` exists, the rule evaluation fails and Zuora will not create or update the object. Otherwise, Zuora will create or update the object by using the updated field values in the results.

If all rows are skipped, Zuora will create or update the object by using the default field values.

## Example

![decision table](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/88b64a3b-f2ef-44f2-bd79-852baa8d5193?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg4YjY0YTNiLWYyZWYtNDRmMi1iZDc5LTg1MmJhYThkNTE5MyIsImV4cCI6MTc2NjY0MDA5OSwianRpIjoiYjdmOWNjZmVhODNhNGFjMGIzOTdiYzI0NjI4NzY0YzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ystlpGMXBD-s2z_9GCdYk7ZIiGvznl1FSGUapKcsyYU)

In this example, when an account object is created or updated, if the `Country__c` custom field of this account is `United States` , the evaluation succeeds and Zuora will create or update the account object and set the `Valid__c` custom field as `true` .
