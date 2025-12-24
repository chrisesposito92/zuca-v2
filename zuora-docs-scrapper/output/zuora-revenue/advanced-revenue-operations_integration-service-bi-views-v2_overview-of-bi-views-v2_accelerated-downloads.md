---
title: "Accelerated downloads"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/integration-service-bi-views-v2/overview-of-bi-views-v2/accelerated-downloads"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:21.719Z"
---

# Accelerated downloads

Learn about enhanced data download features in BI Views V2, including compressed downloads, increased row counts, and the use of continuation tokens for faster and more efficient data retrieval.

The data download in BI Views V2 is enhanced with the following features provided.

## Compressed download

It is recommended to download data in the compressed format. The compressed download essentially takes the comma-delimited data, compresses this data in the gzip format, and then transfers the data to the client. In this way, the data size can be reduced by 90%, which can significantly impact the download speed.

## Increased row count

The following two query parameters are available in the GET/POST method, which can make data download faster.

| Parameter name | Parameter type | Values | Description |
| --- | --- | --- | --- |
| outputType | Query parameter | csvgzip | Use this parameter to download content in CSV format for gzip format. |
| pageSize | Query parameter | 1 to 10,000 (for CSV)1 to 20,000 (for gzip)Note: The above values are configuration driven soft limits. They can be adjusted as needed. | Use this parameter to specify the number of pages to be downloaded.For CSV format, the maximum page size is 10,000 rows.For gzip format, the maximum page size is 20,000 rows.Any value that is more than 20,000 is invalid. |

The following code sample downloads 10000 pages of the BI3\_RC\_SCHD view in CSV format:

https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD?fromDate=&toDate=&pagenum=1&outputType=csv&pageSize=10000

## Continuation token

A continuation token is issued when you make a request to the integration service. If you want to download data that spread across multiple pages, it is recommended to use the continuation token in the request header.

When a request for the first page is made to the service, the system will fetch content for the first page and returns the result for the first page with a continuation token in the response header. In the backend, the system will fetch page by page ahead and store the data in a cache. To retrieve the subsequent pages following the first page, the continuation token provides context to the service so that the service can fetch data from the cache instead of re-executing the query against the database. This asynchronous execution not only enables faster downloads but also ensures data consistency and reduces database workloads.

If a continuation token is not provided, every page will be executed against the database tables and rate limits will prevent fetching data faster. If you choose not to use the continuation token, it is recommended to use the previous version of BI Views (V1). However, BI Views V1 might be deprecated in the future. One key point with this asynchronous paradigm is that there might be a possibility that the client has downloaded the first page and moves to the second page before the second page is actually cached. In such cases, it is recommended to retry after a few cycles or to check the activity queue to see whether the request is still active. More details of this are covered in Activity monitoring.

Note:

Circumstances in which continuation token not available:

There is a possibility that the integration service does not issue a continuation token. This situation occurs when the query execution for the first page takes too long and the client gets disconnected due to a gateway timeout error.

To solve this problem, you can use the activity monitoring APIs to check whether there is a running query based on the specified criteria. If there is a running query, record the task\_id value returned and use it as the continuation token. If there is no running query, issue a new request.

Typically, the initial request is made to request for the first page.

Initial request:

https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD?fromDate=&toDate=&pagenum=1

Then, the server responds with data in the response body. With BI Views V2 of the integration service, the continuation-token header pair is added to the response header:

continuation-token: xxxxxx-xxxxxx-xxxxxxx-xxxxxxxxx

For all subsequent requests, you can make those requests with the continuation-token header pair provided in the request header.

Subsequent request:

https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD?fromDate=&toDate=&pagenum=N

Request header:

continuation-token: xxxxxx-xxxxxx-xxxxxxx-xxxxxxxxx

## Selectable fields for download

To further accelerate performance on large datasets, it is recommended to consider downloading only the fields of interest instead of downloading all fields. For example, the RC LINES view is a comprehensive dataset. However, only a subset of fields is usually required for data warehouse needs.

1.  To get a list of available columns that are contained in a BI view, use the Get column list operation.

    For example, issue the following request to get the column list for the BI3\_RC\_SCHD view:

    https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD/describe-columns

    The response body will return the column name, data type, data length, precision, and scale in JSON format.

2.  To specify the fields to be downloaded, provide the list of fields in JSON array as part of the request body.

    Initial request:

    https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD?fromDate=&toDate=&pagenum=1

    Request body:

    | 1 | ["RC_LINE", "SO_LINE_NO", "RC_AMT", "SCHD_ID"] |
    | --- | --- |
