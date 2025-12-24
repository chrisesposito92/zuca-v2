---
title: "Filters for array manipulation"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/filters-for-array-manipulation"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:57.520Z"
---

# Filters for array manipulation

This reference provides the sample filters for array manipulation.

## pop

Remove elements from the end of the array.

Parameters: input, an integer indicating the number of elements to be removed (1 by default)

{{'a,b,c' | split: ',' | pop }} {% comment %} \['a','b'\] {% endcomment %} {{'a,b,c' | split: ',' | pop: 2 }} {% comment %} \['a'\] {% endcomment %}

## push

Add an element to the end of the array.

Parameters: input, the element to be added

{{'a,b,c' | split: ',' | push: 'd' }} {% comment %} \['a','b','c','d'\] {% endcomment %}

## shift

Remove elements from the start of the array.

Parameters: input, an integer indicating the number of elements to be removed (1 by default)

{{'a,b,c' | split: ',' | shift }} {% comment %} \['b','c'\] {% endcomment %}

## unshift

Add an element to the start of the array.

Parameters: input, the element to be added

{{'a,b,c' | split: ',' | unshift: 'z' }} {% comment %} \['z','a','b','c'\] {% endcomment %}

## where

Select all the objects in an array where the key has the given value.

Parameters: input, property, value

{{ Data.Invoice | where: 'AccountId', '2c92c0fb72a8521c0172a96f55581405' }} {% comment %} \[{"AccountId"\=>"2c92c0fb72a8521c0172a96f55581405","InvoiceNumber"\=>"INV00000001","Balance"\=>10}\] {% endcomment %}

## where\_exp

Select all the objects in an array where the expression is true.

Parameters: input, variable, expression

Note: The and/or operators are not currently supported in the expression, though you can replicate "and" with chained `where_exp` filters and "or" with the `concat` filter.

{{ Data.Invoice | where\_exp: 'item', 'item.Balance > 100' }} {% comment %} \[{"AccountId"\=>"2c92c0fb72a8521c0172a96f55581405","InvoiceNumber"\=>"INV00000002","Balance"\=>115}\] {% endcomment %}

## group\_by

Group the items in an array by a given property.

Parameters: input, property

{{ Data.Invoice | group\_by: 'Status' }} {% comment %} \[{"name"\=>"Draft","items"\=>\[{"Status"\=>"Draft","InvoiceNumber"\=>"INV00000003"}\],"size"\=>1},{"name"\=>"Posted","items"\=>\[{"Status"\=>"Posted","InvoiceNumber"\=>"INV00000004"}\],"size"\=>1}\] {% endcomment %}

## group\_by\_exp

Group the items in an array using a Liquid expression.

Parameters: input, variable, expression

{{ Data.Invoice | group\_by\_exp: 'item', 'item.InvoiceDate | date: "%m"' }} {% comment %} \[{"name"\=>"01","items"\=>\[{"InvoiceDate"\=>"01","InvoiceNumber"\=>"INV00000004"},{"InvoiceDate"\=>"01","InvoiceNumber"\=>"INV00000005"}\], "size"\=> 2},{"name"\=>"02","items"\=>\[{"InvoiceDate"\=>"02","InvoiceNumber"\=>"INV00000006"}\],"size"\=>1}\]{% endcomment %}

## map and join

RatePlanChargeId = '{{ Data.Usage | map: 'ChargeId' | join: "' OR RatePlanChargeId = '"}}' ProductId = '{{ Data.Product | map: 'Id' | join: "' AND Region\_\_c = 'US' OR ProductId = '"}}' AND Region\_\_c = 'US'

-   You can use `map` and `join` to query for an object using an array of records.

-   `map` lists the array values of `ChargeId` on `Data.Usage` . `join` puts the array in a single string with `OR RatePlanChargeId` in between each value.

-   There is a single space before `OR` .

-   If you need to include another operator, you can add `' AND [Field Name] = ''` before `OR` and close with one last `AND` condition.
