---
title: "Logic: Case"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-case"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:12.891Z"
---

# Logic: Case

This reference describes the Logic: Case task.

The case task splits the execution of a workflow into several branches based on the value of a data field or a combination of multiple data fields, or based on the conditional statements that you define.

## Task settings

Enter the data field, data field combination, or conditional statements in [Liquid](https://shopify.github.io/liquid/) as the case definition. Add specific values of the data field or the conditional statements as case values. Regular expressions are supported as case values.

Click Add Case to add a new case and click the delete icon to delete a case.

Note:

If you want to use a Liquid variable that is defined in an upstream task in the current task, you must select Skip Validation . Otherwise, the variable cannot be parsed and you will get an error.

## A single data field

Branching based on the value of a single data field is straightforward. For example, if you need to branch a workflow based on account currencies, you can specify `Data.Account.Currency` (in double curly brackets) as the case value, and define USD, JPY, and CNY as the cases.

## Combination of multiple data fields

To handle outcomes that involve multiple data fields, you can use the append method to combine these fields in Case Value. For example, you can define a combination of account currency and bill contact state using this statement:

{{ Data.Account.Currency | append: ‘--’ | append: Data.BillToContact.State }}

For cases, you can use "USD--GA" or "USD--IL".

## Conditional statements

If you need to branch a workflow based on conditions, you can enter the conditional statements in Liquid in the Case Value field. Here is an example of defining cases based on conditions.

{% if Data.Invoice.Balance <= 1000 %} Small {% elsif Data.Invoice.Balance > 1000 and Data.Invoice.Balance <= 5000 %} Medium {% elsif Data.Invoice.Balance > 5000 and Data.Invoice.Balance <= 10000 %} Large {% else %} Exception {% endif %}

## Regular expressions in case values

For example, if you want to define three cases for gateway responses (Settled, Reject, and Reverse) based on the first two characters of the reason codes returned from gateways, you can use regular expressions.

For example, if a reason code starting with ST means the corresponding payment is settled, you can specify `[ST].+` as the case for Settled.

![Regular expression example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/893003d4-0801-4448-8986-236ee61fb423?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg5MzAwM2Q0LTA4MDEtNDQ0OC04OTg2LTIzNmVlNjFmYjQyMyIsImV4cCI6MTc2NjY0MDg1MCwianRpIjoiZWY2MzVlM2JmMTY2NDNkNzhiMjkxYTFlNjIyOWJkMjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YJsvYnTdpcqupVwtAJkh3AuxbTZUNnAIco5qZAhuXFs)

## Workflow design considerations

After you complete the configuration of a case task, you must add a task following the case task for each defined case to start a branch.

Note that you can select Else to handle all values that are not defined in cases.
