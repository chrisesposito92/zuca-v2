---
title: "Retrieve the login history"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-the-login-history"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:31.602Z"
---

# Retrieve the login history

Learn how to retrieve login history records by submitting a data query job with SQL, checking the job status, and downloading the results.

The following use case retrieves the records in the login history during a date range.

1.  Submit a data query job through UI or API with the following SQL query. For more information on data query, see [Overview of Data Query](/zuora-platform/data/data-query/overview-of-data-query)

    SELECT username AS Username, logintype AS Type, status AS Status, timestamp AS Timestamp, browsertype AS Browser, browserversion AS BrowserVersion, ipaddress AS IPAddress FROM auditloginevent WHERE year = 2022 AND month >= 10 AND month < 11 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or API operation. For more inforamtion on how to retrieve a data query job using API, see .[Retrieve a data query job](https://developer.zuora.com/v1-api-reference/api/operation/GET_DataQueryJob/)
3.  Download the query result when the job is completed. See the following snippet of the query result.

    Username,Type,Status,Timestamp,Browser,BrowserVersion,IPAddress audit-trail@example.com,PASSWORD,Success,2022-10-30T04:29:06.571Z,Chrome,77.0,67.180.238.89 audit-trail@example.com,PASSWORD,Success,2022-10-29T16:34:09.092Z,Chrome,77.0,216.129.127.1 audit-trail@example.com,PASSWORD,Success,2022-10-29T16:34:09.042Z,Chrome,77.0,216.129.127.1 audit-trail@example.com,PASSWORD,Success,2022-10-29T01:15:38.693Z,Chrome,77.0,103.104.131.160 zconnect.api.9439@example.com,PASSWORD,Success,2022-10-17T18:50:16.763Z,RestBiz,0.0,54.187.61.166 audit-trail@example.com,PASSWORD,Success,2022-10-17T18:49:13.393Z,Chrome,77.0,67.180.238.89 audit-trail@example.com,PASSWORD,Success,2022-10-17T18:38:24.001Z,Chrome,77.0,67.180.238.89 audit-trail@example.com,CLIENT\_CREDENTIALS,Success,2022-10-17T03:43:05.423Z,RestBiz,0.0,103.104.131.160 audit-trail@example.com,PASSWORD,Success,2022-10-17T03:33:34.209Z,Chrome,77.0,103.104.131.160 audit-trail@example.com,PASSWORD,PasswordExpired,2022-10-17T03:29:43.207Z,Chrome,77.0,103.104.131.160
