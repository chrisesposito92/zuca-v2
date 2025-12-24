---
title: "QueryOptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/queryoptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:23.936Z"
---

# QueryOptions

The QueryOptions object is used to define the batch size and case-sensitivity options for the query() and queryMore() calls.

This complex type is valid as of WSDL version 6.0.

## Field descriptions

All field names are case sensitive.

| Field | Description | ID | Name |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| batchSize | Defines the batch size of the query result.Type : IntegerRange : 1 - 2000 (inclusive). If a value higher than 2000 is submitted, only 2000 results are returned. |  |  |  |  |  |  |  |  |
| caseSensitive | Indicates if the query filter results returned consider case-sensitivity. If True, the query results must match the filter and the letter case. If False, the query must match the filter but ignores the letter case.Type : Boolean: True or FalseWSDL : Version 14.0+Example :Suppose you have three active accounts:IDName1mybigbusiness2MyBigBusiness3MYBIGBUSINESSUsing a SOAP API call, you send the query request:... select *from Account where name = 'mybigbusiness' ...The query result returns the following when the caseSensitive option is:True : Only one account, ID 1False : All three accounts, IDs 1, 2, and 3 | ID | Name | 1 | mybigbusiness | 2 | MyBigBusiness | 3 | MYBIGBUSINESS |
| ID | Name |  |  |  |  |  |  |  |  |
| 1 | mybigbusiness |  |  |  |  |  |  |  |  |
| 2 | MyBigBusiness |  |  |  |  |  |  |  |  |
| 3 | MYBIGBUSINESS |  |  |  |  |  |  |  |  |
| fastQuery | If True , Zuora will execute the query on a READ ONLY database. This option improves query performance.Type: Boolean, True or False |  |  |  |  |  |  |  |  |
