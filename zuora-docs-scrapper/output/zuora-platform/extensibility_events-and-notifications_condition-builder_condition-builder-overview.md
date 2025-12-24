---
title: "Condition builder overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/condition-builder/condition-builder-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:30.838Z"
---

# Condition builder overview

Describes the UI elements and basic concepts of the condition builder.

The condition builder, a complement to the Java-Expression-Language-based (JEXL-based) approach for defining conditions, enables you to define trigger conditions for custom events or define filter conditions for notification definitions in the Zuora UI in an intuitive and visualized way.

## UI elements

The following figure shows the user interface of the condition builder:

Figure 1.

![UI elements of condition builder](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4866dceb-9ef3-4621-8874-f413cf233b93?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ4NjZkY2ViLTllZjMtNDYyMS04ODc0LWY0MTNjZjIzM2I5MyIsImV4cCI6MTc2NjY0MDMyOCwianRpIjoiNmUzNDJkZjRlOTk1NGYwNWE4NjljZjczYzZlYWM1MmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.w1_AQQMCt2vgEf7dbA17F-MZ3IrTM7FcD1qSx7Bnj1g)

You can find the details of each numbered element in the following table:

| Element number | Description | Note |
| --- | --- | --- |
| 1 | The button for adding conditions. | The group-level Add Condition button allows you to add a condition to that specific group. |
| 2 | The button for adding groups. | The group-level Add Group button allows you to add a sub-group to that specific group. |
| 3 | The field component of a condition. |  |
| 4 | The comparison operator component of a condition. | Available values are as follows:Is equal toIs not equal toIs greater thanIs greater than or equal toIs less thanIs less than or equal toStarts withIn or matchIs nullIs not nullIs emptyIs not emptyFor more complex operators, switch to Advanced (JEXL) mode. |
| 5 | The value component of a condition. |  |
| 6 | The Static toggle that controls the value type. |  |
| 7 | The button for deleting conditions. |  |
| 8 | The logical operator that connects conditions and groups. | Available values are as follows:ANDOR |

## Basic concepts

Condition and group are basic components in the condition builder:

![condition structure](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5aa6ce15-3ce7-4b5a-91aa-e342a9b81b79?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVhYTZjZTE1LTNjZTctNGI1YS05MWFhLWUzNDJhOWI4MWI3OSIsImV4cCI6MTc2NjY0MDMyOCwianRpIjoiM2VkMTI0NzExMjkzNGZmYmI5Y2NiMTM4ZGUyYjc5YjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.l2x6w_4LiyP1-23lyHhm_qUGmCPgST6ga-f7gTvt4Cw)

## Condition

A condition consists of three fields: Field , Operator (comparison operator), and Value . For example:

-   Field: Amount

-   Operator: is greater than

-   Value: 1000.0


Each custom event or notification definition can contain multiple conditions, which must be connected by logical operators (AND or OR).

## Operator precedence and group

The evaluation order of conditions is based on operator precedence. The AND operator has higher precedence than the OR operator. To customize the order, you can use groups, which have the highest precedence.

The following is an example:

| Conditions | Evaluation order |
| --- | --- |
| ConA AND ConB OR ConC | ConA AND ConB → ResultResult OR ConC |
| ConA AND (ConB OR ConC)ConB and ConC are grouped. | ConB OR ConC → ResultConA AND Result |

## Notes and limitations

-   You can use only one logical operator type (AND or OR) to connect the conditions in a specific group. Use a sub-group to combine the AND and OR operators in a group. For example, `ConA AND (ConB OR (ConC AND ConD))` .

-   The Value field is not available if the operator is one of the following:

    -   Is null

    -   Is not null

    -   Is empty

    -   Is not empty
