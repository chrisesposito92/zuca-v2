---
title: "Export ZOQL"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:22.887Z"
---

# Export ZOQL

Learn how to use Zuora Export ZOQL to create data source exports through the Zuora API, offering powerful querying capabilities for related business objects.

Zuora Export ZOQL (Zuora Object Query Language) is the query language you use to create data source exports through the Zuora API. Export ZOQL is more powerful than ZOQL because Export ZOQL queries can select data from related business objects in a single operation.

You can perform Export ZOQL queries in the following ways:

-   Use the AQuA API (recommended) You can use this method to perform multiple queries or continuously query data.

-   Use the "CRUD: Create Export" API operation You can use this method to create an Export object corresponding to a single query.

-   Create an Export object through the SOAP API(deprecated)


## Overview of Queries

When you write an Export ZOQL query, you must specify the data source to select data from. Each data source provides all your business objects of a particular type. Most data sources also provide related business objects. This saves you the effort of constructing nested queries, and results in better performance.

For example, the Invoice Item data source provides every Invoice Item object in your Zuora tenant, along with related Account, Contact, Invoice, Product, Rate Plan, and Subscription objects.

## Names in Queries

You must use API names of data sources, objects, fields, and field values in Export ZOQL queries. API names do not necessarily match the corresponding names displayed in the Zuora user interface. For example, you must use "InvoiceItem" instead of "Invoice Item" or "Rechnungsposten" (German):

select BillToContact.FirstName from InvoiceItem

In the example:

-   `InvoiceItem` is the API name of the Invoice Item data source.

-   `BillToContact` is the API name of a Contact object that is related to an Invoice Item object.

-   `FirstName` is the API name of the First Name field in the Contact object.


`InvoiceItem` is also called the "base" object of the Invoice Item data source. `BillToContact` is called a "joined" object.

To determine API names:

-   For data sources and objects, refer to the listing in the Data Sources and Objects section, below.

-   For fields and field values, use the [Describe object](https://developer.zuora.com/v1-api-reference/api/operation/GET_Describe/) API operation. Changes to the "Describe object" API operation were introduced in version 85 of the Zuora WSDL.


Prior to version 79 of the Zuora WSDL, some fields in data sources had different values from the corresponding fields in SOAP API objects.

## Limitations

A maximum of 20,000 characters is allowed in an Export ZOQL query.

The maximum export file size is 2047MB. If you have large data requests that go over this limit, you will get the following 403 HTTP response code from Zuora: `<security:max-object-size>2047MB</security:max-object-size>`

Submit a request at [Zuora Global Support](http://support.zuora.com/) if you require additional assistance. We can work with you to determine if large file optimization is an option for you.
