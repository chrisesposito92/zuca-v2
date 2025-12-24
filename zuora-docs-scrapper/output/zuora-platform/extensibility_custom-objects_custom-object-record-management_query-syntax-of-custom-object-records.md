---
title: "Query syntax of custom object records"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-record-management/query-syntax-of-custom-object-records"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:55.392Z"
---

# Query syntax of custom object records

The query syntax for retrieving custom object records through the API.

You can use the [List records for a custom object](https://developer.zuora.com/v1-api-reference/api/operation/GET_AllRecordsForCustomObjectType/) API operation to query custom object records. You can define your query through the `q` query parameter of this operation.

## Complex Query Using Boolean Operators

Custom object query currently supports the `AND (&&)` , `OR (||)` and `NOT (!)` operators. Note that the operators are case-sensitive. You must use uppercase.

## AND

-   Search for custom fields data whose `status` is `active` and `activeDate` is less than `2018` . `status:active AND activeDate:<2018` or `status:active && activeDate:<2018`


## OR

-   Search for custom fields data whose `status` is `active` or `activeDate` is less than `2018` . `status:active OR activeDate:<2018` or `status:active || activeDate:<2018`


## NOT

-   Search for custom fields data whose `status` is missing or `status` has a null value. `!_exists_:status` or `NOT _exists_:status`

-   Search for custom fields data whose `status` is not `active` ( `status` is either missing or null). `!status:active` or `NOT status:active` Note : To search for custom fields data where `status` exists and its value not equal to `active` , use `_exists_:status AND !status:active` .

-   Search for custom fields data with field `activeDate` no less than `2018` (including `activeDate` is missing or null). `!activeDate:<2018` or `NOT activeDate:<2018` Note : To search for custom fields data where `activeDate` exists and its value is no less than `2018` , use `_exists_:activeDate AND !activeDate:<2018` .


## Deal with the null value

The null value fields cannot be distinguished from the missing fields. Therefore, when querying by the existence of a field, it only returns the records that contain the field and the field value is not null. Query by the non-existence of one field will return the records that either miss this field or have a null value in this field.
