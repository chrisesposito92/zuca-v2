---
title: "Decision tree overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/decision-tree/decision-tree-overview"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:38.441Z"
---

# Decision tree overview

Decision tree, a supported custom logic type in Zuora, allows you to define logic rules for standard objects with a codeless user interface.

You can create logic rules with if-then-else statements in decision trees. When objects are created or updated, Zuora triggers the rules in decision trees to validate data accuracy or manipulate field values.

If you want to create more complicated logic rules with advanced calculations or operations, see [Function](/zuora-platform/extensibility/custom-logic/function/function-overview).

## Supported objects

For all supported objects and fields, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

## Rule evaluation process

A decision tree consists of one or more if-then statements and one else statement.

When an object is created or updated, Zuora evaluates the first if-then statement in the decision tree. If the conditions in the IF statement are met, Zuora executes all results in the THEN statement. If the conditions are not met, Zuora skips this if-then statement and evaluates the next one.

If all if-then statements are skipped, Zuora evaluates the results in the ELSE statement.

`Result.Success` determines the evaluation outcome, and `Result.Message` defines the error messages displayed on associated object pages in the Zuora UI.

## Example

![decision tree](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d5a08684-22f5-4ce3-af62-cf66c0532c50?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ1YTA4Njg0LTIyZjUtNGNlMy1hZjYyLWNmNjZjMDUzMmM1MCIsImV4cCI6MTc3MTU1NzkzMywianRpIjoiNjhjY2IwYTY5ZWZkNGE3MDk0MTdmZjc4NGM0NWEwNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Cg3UZ71qx3YYVlQsHWpI4utE12h5rOk9IhNLFRiVQTA)

In this example, when an account object is created or updated, if the `CustomerBalance__c` custom field of this account is greater than or equal to `0`, the evaluation succeeds and Zuora will create or update the account object. Otherwise, the evaluation fails and Zuora will not create or update the account object.
