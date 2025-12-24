---
title: "Other filters"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/other-filters"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:12.822Z"
---

# Other filters

This reference provides the other filters in Liquid expressions.

## data\_type

Return the type of the parameter.

{{ 'abc' | data\_type }} {% comment %} String {% endcomment %}

## money

Rounds to two decimal points with an optional currency symbol.

Parameters: money, currency (optional)

{{ 9099.000909 | money }} {% comment %} 9099.00 {% endcomment %} {{ 9099.000909 | money: 'USD' }} {% comment %} $9,099.00 {% endcomment %} {{ Data.Account.Balance | money: Data.Account.Currency }} {% comment %} £582.62 {% endcomment %}

## random

Return a random integer between the input parameters.

Parameters: nil, parameter1, parameter2

{{ nil | random: 1,10 }} {% comment %} 8 {% endcomment %}

## random\_variable

Return a random UUID.

Parameters: input, type\['uuid'\]

{{ nil | random\_variable: 'uuid' }} {% comment %} d6bbd069-7a24-4357-a6cc-1aec5852067d {% endcomment %}
