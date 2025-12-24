---
title: "String utilities"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/string-utilities"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:00.728Z"
---

# String utilities

This reference provides the sample string utilities in Liquid expressions.

## to\_json

Convert the format from hash to JSON.

{{ Data.Workflow | to\_json }} {% comment %} {"ExecutionDate":"2021-01-01","LastRunDate":"2020-12-31"...} {% endcomment %}

## parse\_json

Convert the format from JSON to hash.

{% assign input = '{"name":"INV-100","balance":1}' | parse\_json %} {{ input }} {% comment %} {"name"\=>"INV-100","balance"\=>1} {% endcomment %}

## string\_escape

Escape special characters.

{{ '\\abc\\' | string\_escape }} {% comment %} \\\\abc\\\\ {% endcomment %}

## to\_xml

Convert the format from hash to XML.

{{ Data.Workflow | to\_xml}} {% comment %} <?xml version="1.0" encoding="UTF-8"?><hash\><ExecutionDate>2021-01-01</ExecutionDate>...</hash\> {% endcomment %}

## regex

Return array of strings that match the regular expression.

Parameters: input, regular expression, operation\['match\_first', 'match\_all'\]

{{ 'INV-100,INV-101' | regex: 'INV-\\d+', 'match\_first' }} {% comment %} \["INV-100"\] {% endcomment %} {{ 'INV-100,INV-101' | regex: 'INV-\\d+', 'match\_all' }} {% comment %} \["INV-100","INV-101"\] {% endcomment %}

## input\_byte\_8x

Add spaces to a string to reach the byte mark.

{{ 'abc' | input\_byte\_8x }} {% comment %} 'abc ' {% endcomment %}
