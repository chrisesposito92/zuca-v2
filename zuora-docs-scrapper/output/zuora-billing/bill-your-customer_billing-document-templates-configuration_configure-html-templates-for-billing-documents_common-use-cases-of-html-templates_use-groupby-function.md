---
title: "Use GroupBy function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/use-groupby-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:44.218Z"
---

# Use GroupBy function

The GroupBy function processes a list of objects to produce a grouped list, useful for data transformation, nested loops, and aggregation in HTML invoice templates.

`GroupBy` is a function that accepts a list of objects as input and generates a grouped list as output. You can use this function for data transformation, nested loops, and aggregation.

This function can act as a powerful tool to implement the use cases of grouping the total or subtotal. For example, you can use this function to group invoice items with the same charge name together and show the subtotal amount of each charge.

## Data transformation

Assume that you have a list-type input Items as follows:

\[ { "A": "a1", "B": "b1", "C": "c1", "D": "d1" }, { "A": "a1", "B": "b1", "C": "c1", "D": "d2" }, { "A": "a1", "B": "b2", "C": "c1", "D": "d1" }, { "A": "a2" } \]

The value object has four named properties: `A` , `B` , `C` , and `D` . You can use the `Items|GroupBy(A,B,C)` function to return the following output in the rendering result:

\[ { "A": "a1", ① "\_Group": \[ ② { "B": "b1", "\_Group": \[ ③ { "C": "c1", "\_Group": \[ { "A": "a1", "B": "b1", "C": "c1", "D": "d1" }, ④ { "A": "a1", "B": "b1", "C": "c1", "D": "d2" } \] } \] }, { "B": "b2", "\_Group": \[ { "C": "c1", "\_Group": \[ { "A": "a1", "B": "b2", "C": "c1", "D": "d1" } \] } \] } \] }, { "A": "a2", "\_Group": \[\] } \]

Read the following information to understand how data transformation works in the preceding output:

-   ①: Instead of using the value of the `groupBy` property as the key name, like `{"a1": [ { "b1": [ { "c1": [.. ] } ] } ], "a2": []}` , the example keeps the original key name, because the example needs to refer to this key value by property name.

-   ②: `_Group` is a reserved keyword, and it is the hard-coded property name of the grouped list.

-   ③: Multiple `_Group` properties might exist at different levels, so it is good practice to give each property a meaningful name by using the `Cmd_Assign` command.

-   ④: At the deepest level of grouped items, the object schema is the same as the original in the input list.


## Aggregation

If you want to aggregate some numeric fields for a certain group, you have to be aware of the data structure and the variable scope.

For example, if you want to aggregate field E for all items with the same B property, use the following example merge fields containing the `GroupBy` function:

{{#Items|GroupBy(A,B,C)}} {{Cmd\_Assign(ItemsWithSameA,\_Group)}} {{#ItemsWithSameA}} {{Cmd\_Assign(ItemsWithSameB,\_Group)}} {{#ItemsWithSameB}} {{Cmd\_Assign(ItemsWithSameC,\_Group)}} {{#ItemsWithSameC}} {{A}} - {{B}} {{/ItemsWithSameC}} {{/ItemsWithSameB}} {{ItemsWithSameB|FlatMap(\_Group)|Sum(E)}} ① {{/ItemsWithSameA}} {{/Items|GroupBy(A,B,C)}}

In the line marked with ①:

-   ItemsWithSameB is a variable defined in the context of ItemsWithSameA, so you can only refer to the former within the section of ItemsWithSameA.

-   The object schema of items in ItemsWithSameB is `{ "C": "..", "_Group": [] }` , so you cannot directly conduct aggregation by using `{{ItemsWithSameB|Sum(E)}}` . You have to flatten the `_Group` list first. For more information, see FlatMap function for its usage.


## Limitations and restrictions

The `GroupBy` function supported in HTML invoice templates has the following limitations and restrictions:

-   Currently, the `GroupBy` function can support at most six arguments.

-   If the value of a `GroupBy` property is null, it is treated as blank.

-   The argument property name can be dotted data path, for example, `InvoiceItems|GroupBy(RatePlanCharge.ChargeType)` .
