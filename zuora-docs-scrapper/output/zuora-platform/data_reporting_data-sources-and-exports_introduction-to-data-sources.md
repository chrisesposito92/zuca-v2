---
title: "Introduction to data sources"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/introduction-to-data-sources"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:21.210Z"
---

# Introduction to data sources

Learn about Zuora data sources

## What is a Zuora data source?

In Zuora, your data is contained in different objects, and those objects have different relationships to each other. An Account object contains basic information like the name of the account, its currency, and its payment terms. Each Account may have one or more Subscription objects associated with it. Each Subscription contains information like the term start and end dates and the renewal term. A data source is a way of joining those objects together.

## The Zuora object model

The Zuora object model is like a tree. Low level objects (like Invoice Items) link up to high level objects (like Account) through various branches (like Invoice).

![invoice_item_datasource.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bcafe839-3637-414b-bc27-75dabae2b818?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJjYWZlODM5LTM2MzctNDE0Yi1iYzI3LTc1ZGFiYWUyYjgxOCIsImV4cCI6MTc2NjY4ODEzOSwianRpIjoiM2I2YWVmZmVjN2Y4NDk0YWEzOTE1NjE0NzZmZjk5YTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vRGCe-3K1f1PNbgY3exPT9zYEFfzi4wC_JaSFHUd6LA)

When we create a data source, we start with a base object, which is basically a starting point on the tree. Each data source will contain one row for each instance of the base object. If you are in the Account data source and you have 100 Accounts, your Account data source will have 100 rows.

Then we go from that base object to the trunk of the object tree and link it with as many things as we can. It’s important to understand that Zuora only moves from leaves to trunk and not vice versa. In technical terms, when we form a data source, we avoid crossing one-to-many relationships. If we went the other direction, we would no longer have one row for each base object; instead, we would have duplicate base objects, which is something we want to avoid for reporting reasons. We would not, for example, want to double count a key metric.

Next, refer to [A data source reporting example](/zuora-platform/data/reporting/data-sources-and-exports/introduction-to-data-sources/a-data-source-reporting-example).

## When choosing a data source

When you want to choose a data source, it’s best to start by asking what object in Zuora contains the field or metric that you want to report on. Choose the data source named after that object.

## Data source details

Reporting users who can build reports can use the data sources listed in [Data source availability](/zuora-platform/data/reporting/data-sources-and-exports/data-source-availability).
