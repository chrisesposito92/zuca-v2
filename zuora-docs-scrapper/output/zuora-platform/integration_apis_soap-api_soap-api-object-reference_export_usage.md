---
title: "Usage"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/export/usage"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:55.043Z"
---

# Usage

Introduces the how to use the Export object.

You can use this object with the following calls:

-   query()

-   create()


Here are some common ways to use this object:

-   Export objects that are joined with other objects.

-   Export large data sets.


The following steps are the basic workflow for exporting data:

## Supported calls

You can use this object with the following calls:

-   query()
-   create()

## Walkthroughs and use cases

Here are some common ways to use this object:

-   Export objects that are joined with other objects.
-   Export large data sets.

## Basic workflow

The following steps are the basic workflow for exporting data:

1.  Define your data set by selecting the relevant fields.
2.  Use `create() Export` to pass your query to Zuora.
3.  Zuora processes your request asynchronously. Typically, this process takes a few minutes to complete.
4.  Query Zuora for the status of your request.
5.  Once the status of the export is completed, use the REST API to download the export.

## File size limitations

The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora: `<security:max-object-size>2047MB</security:max-object-size>`

Submit a request at [Zuora Global Support](https://support.zuora.com/) if you require additional assistance.

We can work with you to determine if large file optimization is an option for you.
