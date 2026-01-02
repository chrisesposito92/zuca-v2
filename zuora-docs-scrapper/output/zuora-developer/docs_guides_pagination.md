---
title: "Pagination"
url: "https://developer.zuora.com/docs/guides/pagination/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:48.416Z"
---

#

Pagination

The following query parameters are used for pagination:

-   `pageSize`: The maximum number of results to return in a single page. If the specified `pageSize` is less than 1 or greater than 50, Zuora will return a 400 error.
-   `cursor`: A cursor for use in pagination. cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects ending with `next_page=W3sib3JkZXJ=`, your subsequent call can include `cursor=W3sib3JkZXJ=` in order to fetch the next page of the list.

**Note**: These query parameter is applicable to partial v1 API operations. Check the [v1 API reference](https://developer.zuora.com/v1-api-reference/api/overview/). Operations that have the `pageSize` and `cursor` parameters are the ones that support pagination.

##

How pagination works for the Object Query API

For the Object Query API, the maximum value for `pageSize` is 99. If `pageSize` value is unspecified or invalid, `pageSize` typically defaults to `10`.

Although the pagination for Object Query applies to both the base object and expandable objects, it is primarily designed for querying the base object. It means that not all expandable object items can be exposed through Object Query.

For example, you are using the [List accounts](https://developer.zuora.com/v1-api-reference/api/operation/queryAccounts/) operation with `pageSize` set to `20` while expanding on subscriptions, then the base object is the account. A maximum of 20 accounts are returned for each page, and you can use the cursor to query all accounts. However, for each account, a maximum of 20 associated subscriptions will be returned. If an account is associated with more than 20 subscriptions, the remaining subscriptions cannot be accessed. It is a current known limitation.

##

How pagination works for other applicable v1 API

When retrieving information using GET methods of the REST API, the optional `pageSize` query parameter sets the maximum number of rows to return in a response. The maximum is `40`; larger values are treated as `40`. If this value is empty or invalid, `pageSize` typically defaults to `10`.

The default value for the maximum number of rows retrieved can be overridden at the method level.

If more rows are available, the response will include a `nextPage` element, which contains a URL for requesting the next page. If this value is not provided, no more rows are available. No "previous page" element is explicitly provided; to support backward paging, use the previous call.

##

Array Size

For data items that are not paginated, the REST API supports arrays of up to 300 rows. Thus, for instance, repeated pagination can retrieve thousands of customer accounts, but within any account an array of no more than 300 rate plans is returned.
