---
title: "query()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:56.873Z"
---

# query()

Use the query() to query against an object in Zuora.

The query() call sends a query expression by specifying the object to query, the fields to retrieve from that object, and any filters to determine whether a given object should be queried.

## Usage

Zuora has a SQL-like query language you can use to construct those queries, passing them through the queryString.

Once the call is made, the API executes the query against the specified object and returns a query response object to your application. Your application can then iterate through rows in the query response to retrieve information.

## The < character in query calls

The character, `<`, indicates to the Zuora API the beginning mark of an element. Unless that is your intent, substitute these characters for the `<` character: `&lt;`

The character, `>`, does not require substitution.

## Example request

select id,accountId,autorenew,initialTerm,renewalTerm,termEndDate,termStartDate from Subscription where accountId='2c92a0gc4030cg1b01392af7533f48a6' and status='active' and subscriptionStartDate &lt;= '2012-08-15' and subscriptionEndDate >= '2012-08-15='

## Example response

<ns2:Id>2c92a0fb3929bf1a01392af6426748a9</ns2:Id> <ns2:AccountId>2c92a0fb3929bf1a01392af6422f48a6</ns2:AccountId> <ns2:AutoRenew>true</ns2:AutoRenew> <ns2:InitialTerm>1</ns2:InitialTerm> <ns2:RenewalTerm>1</ns2:RenewalTerm> <ns2:TermEndDate>2012-09-15</ns2:TermEndDate> <ns2:TermStartDate>2012-08-15</ns2:TermStartDate>

## Limitations

This call has the following limitations:

-   All keywords must be in lower case.

-   The number of records returned is limited to 2000 records (100 records for WSDL v5 and earlier).
