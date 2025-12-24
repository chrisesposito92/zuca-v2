---
title: "Aggregate Functions"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/export-zoql-select-statements/aggregate-functions"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:30.408Z"
---

# Aggregate Functions

Learn about the aggregate functions supported by Export ZOQL, including avg(), count(), max(), min(), and sum(), along with their limitations and examples.

## Overview

As of release 34.0, Export ZOQL supports several aggregate functions, detailed below.

Export ZOQL is used for creating exports from Zuora data sources, and uses a different syntax than standard ZOQL.

## avg()

Use `avg()` to return the average value.

Limitations

The `avg()` function supports only numeric values.

Example

select A.a,avg(A.c) from A group by A.a, B.b

## count()

Use `count()` to return the number of rows. Similar to standard SQL, you can use the following syntax with `count()` :

-   `count(*)`

-   `count(field)`


​The `count()` command is the only Export ZOQL command that supports the use of an asterisk ( `*` ).

Example

select count(\*) from A

## max()

Use `max()` to return the largest value.

select count(a),max(c),b from A group by b

## min()

Use `min()` to return the smallest value.

select count(a),min(c),b from A group by b

## sum()

Use `sum()` to return the sum.

Limitations

The `sum()` function supports only numeric values.

Example

select A.a, sum(A.b) from A

## Limitations of the Aggregate Functions

The aggregate functions have the same limitations as standard SQL aggregate functions.

In addition to specific limitations, you cannot nest aggregate functions.
