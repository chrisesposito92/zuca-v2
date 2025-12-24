---
title: "Filter statements"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/zoql/filter-statements"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:56.051Z"
---

# Filter statements

Filter statements in queries must evaluate as true to include items in the results. Various operators are supported, but parentheses for order of operations are not.

A query includes filter statements. A filter statement must evaluate as true, or the item will not be included in the query results. Filter statements can use different operators, which are described in the following sections. Parentheses to indicate order of operation are not supported in `query()` calls.

Comparison between two fields is not supported by ZOQL.

## Operators

The supported operators are explained in the following table. When the conditions are met, the expression evaluates as true and the item is included in the query results. See [Field Types](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/field-types) for more information about the field types used in Zuora.

| Operator | Supported Data Types | Conditions |
| --- | --- | --- |
| = | booleans, dateTimes, numbers, and strings Items on both sides of this operator must be exactly equal to each other | Items on both sides of this operator must be equal to each other. |
| != | booleans, dateTimes, numbers, and strings | Items on both sides of this operator cannot be equal to each other. |
| > | dateTimes, numbers, and strings | The item to the left of this operator must be greater than the item on the right of this operator. |
| >= | dateTimes, numbers, and strings | The item to the left of this operator must be greater than or equal to the item on the right of this operator. |
| < | dateTimes, numbers, and strings | The item to the left of this operator must be less than the item on the right of this operator. |
| <= | dateTimes, numbers, and strings | The item to the left of this operator must be less than or equal to the item on the right of this operator. |
| like | strings | The item to the left of this operator must match a specific pattern to the right of this operator.For example, in the following statement, customer accounts whose Name starts with abc will be returned: select AccountNumber from account where Name like 'abc%' |
| and | strings | This is a logical operator that requires both specified items to be true. For example, in the following statement, IDs will only be returned for accounts where AutoPay is set to true and Status is Active. The and operator takes priority over the or operator in order of operations.select AccountNumber from account where AutoPay = true and Status='Active' |
| or | strings | This is a logical operator that requires either one or both specified items to be true. For example, in the following statement, IDs will be returned for all accounts whose status is either Draft or Active (or both). The and operator takes priority over the or operator in order of operations.select AccountNumber from account where Status='Draft' or Status='Active' |

## Operators supported by data types

| Data Type | Supported Operators | Example | Notes |
| --- | --- | --- | --- |
| boolean | =, != | select AccountNumber from account where AutoPay != true | Use true or false. Do not use quotation marks around the desired value. |
| dateTime | =, !=, >, >=, <. <= | select AccountNumber from account where CreatedDate <= 2012-09-12T05:07:32 | Use the following format for dateTime values, where T indicates time: YYYY-MM-DDThh:mm:ssIf a date or time is a single-digit number, supply a leading zero (0) as shown in the example. |
| number | =, !=, >, >=, <, <= | select AccountNumber from account where BillCycleDay >= 15 |  |
| string | =, !=, >, >=, <, <=, like, and, or, not | select AccountNumber from account where Status = 'Draft' | Use true or false. Do not use quotation marks around the desired value. Parentheses to indicate order of operation are not supported. The and operator takes priority over the or operator in order of operations. |

## Using Null

You can use null as a value in a filter statement; for example, to find all accounts with a purchase order number, you might use the following statement:

select AccountNumber from account where PurchaseOrderNumber != null

You cannot use `null` on date-type custom fields in filter statements.

## Reserved and escaped characters

You cannot use either the single quotation mark (') or the backslash character (\\) as string values in your queries without using a special character to indicate that they are part of your search and not a command or the end of a string. If you need to use them, you must place a backslash before them. (They are then called escaped characters.)

In the following example, where there is an apostrophe in the name, a backslash has been used to indicate that this is part of the search and not the end of the string:

select AccountNumber from account where Name = 'San Francisco\\'s Finest'

In addition, you can use the following escaped characters:

| Escaped Character Sequence | Description |
| --- | --- |
| \b | Bell |
| \f | Form feed |
| \n | New line |
| \r | Carriage return |
| \t | Tab |
| \' | Single quotation mark, as a character |
| \" | Double quotation mark, as a character |
| \\ | Backslash |

## Using wildcards within Like statements

You can use the percent ( `%` ) and underscore ( `_` ) characters as wildcards in patterns within `like` statements:

-   Percent ( `%` ): Represents zero, one, or multiple characters. It can be used only once in each query, either at the beginning or end of the pattern.

-   Underscore ( `_` ): Represents a single character. It can be used multiple times and in any position within the pattern.


The following table lists common wildcard use cases and the corresponding matching value examples:

| Wildcard use case | Description | Matching value examples |
| --- | --- | --- |
| abc% | Any string starts with abc | abc, abcd, abc123 |
| abc_ | Any four-character string starts with abc | abcd, abc1 |
| t__t | Any four-character string starts and ends with t | test, tilt, t@at |
| %__ or __% | Any string with two or more characters | at, number, account1 |
| %abc% or a%c | (Not allowed) | (N/A) |
