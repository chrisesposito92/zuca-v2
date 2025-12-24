---
title: "Download data without row counts"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/integration-service-bi-views-v2/overview-of-bi-views-v2/download-data-without-row-counts"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:27.334Z"
---

# Download data without row counts

Explore two approaches for downloading data in BI Views V2: one with row counts and one without, suitable for large volume scenarios.

In BI Views V2, there are two approaches to download data:

-   Approach 1: Get the row count first and then scroll for pages.

-   Approach 2: Without knowing the row count, keep downloading and scrolling to the point where there is no more data.


One approach might be preferable to the other in certain circumstances.

## Approach 1

In this approach, the first step is to get the row count for the given criteria.

The following is a sample request to query the row count for the BI3\_RC\_SCHD view:

https://$tenant/api/integrations/v2/biviews/count/BI3\_RC\_SCHD?fromDate=&toDate=

Then, the following response will be returned:

{“count”: xx}

With the row count returned in the response, the number of pages to scroll for can be reduced for the download.

In the approach, when the initial request is received by the integration service, a count query is executed against the database, which leads to a full table scan. In large volume scenarios, this method might lead to timeout responses.

## Approach 2

This approach is recommended for large volume scenarios because this method can provide a more consistent and timely response.

In this approach, if the number of rows on the page is less than the requested page size value, it is determined that the end of data has been reached. However, in an extreme case, the number of rows on the last page is equal to the requested page size. In this case, the service will go to the next page and attempt to download data. Then, the 400 status code and the Page is not cached message will be returned in one of the following circumstances:

-   The end of data is reached. There is no data left to be downloaded.
-   The requested page has not been cached yet.

To check whether the data is available, the activity monitoring APIs can be used to check whether the query status is completed or active. If the query status is completed, it is determined the end of data is reached and there is no more data to be downloaded. If the query status is active, the integration service will pause for a few cycles to wait for the page caching to complete, and then retry data download.

Although this approach means writing additional codes, it is a more performant approach for large volume scenarios.

The workflow of this approach is as follows:

1.  Issue the initial request for the first page. The following example requests the first page for the BI3\_RC\_SCHD view.

    Initial request:

    https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD?fromDate=&toDate=&pagenum=1
2.  The server responds with data in the response body and the continuation-token pair is also provided in the response header.

    Response header:

    continuation-token: xxxxxx-xxxxxx-xxxxxxx-xxxxxxxxx
3.  Save the result for the first page and record the continuation-token pair in the response header.
4.  Make the request for subsequent pages with the continuation-token pair provided in the request header. The following example requests subsequent pages for the BI3\_RC\_SCHD view, where *n* is an integer between 2 and the total number of pages.

    Subsequent request:

    https://$tenant/api/integrations/v2/biviews/BI3\_RC\_SCHD?fromDate=&toDate=&pagenum=n

    Request header:

    continuation-token: xxxxxx-xxxxxx-xxxxxxx-xxxxxxxxx
5.  If the response code is 200, it means the queried page is cached and you can scroll forward for the next page. If the number of records in the output is less than the requested page size, it means the end of data is reached. The download task is completed.
6.  If the 400 response code is returned with the Page is not yet cached message, try the following options:
    -   Re-attempt the download with the continuation-token pair after a few seconds.

        In the background, 60 attempts are made by the reader task to fetch the query from the database before the 400 response code is returned. Sometimes, a network issue might occur when the reader is busy.

    -   Use the activity monitoring APIs to query the status of the task. For more information about activity monitoring, see [Activity monitoring](/zuora-revenue/advanced-revenue-operations/integration-service-bi-views-v2/overview-of-bi-views-v2/activity-monitoring).
        -   If the task is in the active queue and the stage is not Canceled, check for the number of rows that have been accumulated so far. If the number of the accumulated rows is greater than the rows that have been retrieved, attempt to download the files; otherwise, retry the download after 5 - 10 seconds.
        -   If the task is in the active queue and the stage is Canceled, or the task is in the stale queue, issue the query with the original criteria again.
        -   If the task is in the completed or draining queue, it means all requested data have been downloaded.
        -   If the task is not in the active queue, it means no query is being executed.
7.  If the 404 response code is returned, it means the specified page number in the request has exceeded the number of total pages for the continuation token. The data fetch is complete. The number of total pages and the number of total rows are also returned in the request body.
