---
title: "Activity monitoring"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/integration-service-bi-views-v2/overview-of-bi-views-v2/activity-monitoring"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:24.564Z"
---

# Activity monitoring

Activity monitoring in BI Views V2 utilizes continuation tokens to track the status of tasks across four queues: active, completed, draining, and stale.

The introduction of the continuation token makes activity monitoring possible in BI Views V2. There are four queues in the lifecycle of the token:

-   Active queue Tokens that are being actively processed are in the active queue.

-   Completed queue Tokens for which all data has been cached are in the completed queue. Completed tasks will be in this queue for a stipulated time (300 seconds) before they are removed from the queue.

-   Draining queue Tokens that are completed or stale are in the draining queue. Drained tasks will be in this queue for a stipulated time (five seconds) before they are removed from the queue.

-   Stale queue If an active query does not perform any activity for more 240 seconds, its token is in the stale queue. If the query gets back to normal within 300 seconds, its token will be put in the active queue; otherwise, the token will be put to the draining queue.


You can use the activity monitoring feature to check the status of the continuation token by querying the queue status.

## Request examples

To get the status information about all tokens, issue the following request:

GET request:

https://$tenant/api/integrations/v2/biviews-status

To get the details of a specific continuation token, issue the following request, where task\_id is the continuation token that was returned in the initial request:

GET request:

https://$tenant/api/integrations/v2/biviews-status/<task\_id>

To cancel a task, issue the following request, where task\_id is the continuation token that was returned in the initial request:

DELETE request:

https://$tenant/api/integrations/v2/biviews-status/<task\_id>
