---
title: "AQuA API error codes"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-api-error-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:09.554Z"
---

# AQuA API error codes

Provides a comprehensive list of AQuA API error codes and messages, describing the conditions under which they occur and the recommended corrective actions.

This table lists AQuA API error codes and messages. If any of these error codes are returned, it indicates that the AQuA execution was unsuccessful and the query should be corrected and resubmitted.

When the API user does not have permission to access one or more objects in a query, that query is ignored during execution.

| Error Code | Error Message |
| --- | --- |
| 90001 | Invalid Batch Id. |
| 90002 | Invalid Job Id. |
| 90003 | Invalid Job Id for job cancellation. |
| 90004 | Invalid number of queries allowed. A maximum of 50 queries are supported in an AQuA request. |
| 90005 | There is a syntax error in one of the queries in the AQuA input. |
| 90006 | Internal Storage Error. |
| 90007 | The query execution has been aborted. |
| 90008 | Internal Database Connection Error. |
| 90009 | User is not authorized. |
| 90010 | Internal Server Error. |
| 90012 | Stateless AQuA does not support deleted columns. |
| 90014 | notifyURL must be less than 5000 characters in length. |
| 90015 | The incremental timestamp is invalid. |
| 90016 | There are no queries included in the AQuA version 1.0 request. |
| 90017 | Objects included in the queries do not support the querying of deleted records. Remove "Deleted" section in the JSON request and retry the request. |
| 90018 | The API user does not have permission to one or more objects in the queries. These queries are ignored. |
| 90019 | Partner ID is not recognized.Note: Submit a request atZuora Global Supportto obtain a partner ID. |
| 90020 | Invalid Distinct column, without Count function. |
| 90021 | Invalid currency specified in the convertToCurrencies request parameter. |
| 90022 | Internal error. If you receive this error, you should retry the query. |
| 90027 | The query exceeded maximum processing time. |
| 90028 | The total number of concurrent jobs has exceeded the limit allowed by the system. |
| 90029 | The job was marked as Error as it exceeded maximum time limit in Processing status. |
