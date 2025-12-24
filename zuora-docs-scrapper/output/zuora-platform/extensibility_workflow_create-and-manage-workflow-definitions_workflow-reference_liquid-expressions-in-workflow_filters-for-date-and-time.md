---
title: "Filters for date and time"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/filters-for-date-and-time"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:54.306Z"
---

# Filters for date and time

This reference provides the sample filters for date and time in Liquid expressions.

## date

Convert a timestamp to another date format.

Parameters: input, date format

{{ "now" | date: "%Y-%m-%d" }} {% comment %} 2021-06-11 {% endcomment %} {{ "now" | date: "%FT%T%:z" }} {% comment %} 2021-06-11T02:00:00 {% endcomment %}

## date\_manip

Add or subtract time from a date.

Parameters: input, operation\['-', '+'\], an integer indicating the number of time to be added/subtracted, metric\['minute', 'hour', 'day', 'month', 'year'\]

{{ '2021-01-01' | date\_manip: '+', 1, 'day' | date: '%Y-%m-%d' }} {% comment %} 2021-01-02 {% endcomment %}

## date\_between

Check if the input is between date parameters. Both dates are inclusive.

Parameters: input, start date, end date

{{ '2021-01-01' | date\_between: '2000-01-01', '2050-01-01'}} {% comment %} true {% endcomment %}

## date\_diff

Calculate the number of days between parameters.

Parameters: input, date2

{{ '2021-01-01' | date\_diff: '2021-01-08'}} {% comment %} 7 {% endcomment %}

## timezone

Convert the date and time to a specific time zone.

Parameters: input, previous format, current format, timezone

{% assign dateTimeFormat = '%Y-%m-%d %H:%M %Z' %} {{Data.Workflow.ExecutionDateTimeUTC | date: dateTimeFormat | timezone: dateTimeFormat, dateTimeFormat, 'America/New\_York'}} {% comment %} 2021-01-01 03:00 EST {% endcomment %}

## http\_date

Convert the date and time to the HTTP-date format.

Parameters: input

{{ "now" | http\_date }} {% comment %} Tue, 11 Jul 2017 06:00:00 GMT {% endcomment %}

## in\_time\_zone

Convert a non-UNIX time to a specific time zone.

Parameters: input, timezone

{{ 'now' | in\_time\_zone: 'America/New\_York' }} {% comment %} 2021-01-01 03:00:00 -0300 {% endcomment %}
