---
title: "Asynchronous requests"
url: "https://developer.zuora.com/docs/guides/async-requests/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:34.522Z"
---

#

Asynchronous requests

This article explains the benefits of making API calls asynchronously, and shows you how to make asynchronous requests and use callout notifications to track their success.

##

Advantages of asynchronous requests

Most API endpoints documented in the [API Reference](https://developer.zuora.com/api-references/api/overview/) process requests synchronously. In high-throughput scenarios, your requests to these endpoints are usually rate limited.

One strategy for avoiding rate limits is to make these requests asynchronously, and Zuora offers you this option.

Making asynchronous requests allows you to scale your applications more efficiently by leveraging the infrastructure of Zuora to enqueue and execute requests without blocking. With built-in retry semantics, these requests are much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when sending a request to one of these asynchronous endpoints, you can receive a response in less than 150 milliseconds, and these calls are unlikely to trigger rate limit errors.

You can make asynchronous requests to the POST, PUT, and DELETE operations (except [Actions](https://developer.zuora.com/api-references/api/tag/Actions/) for all resources documented in the [API Reference](https://developer.zuora.com/api-references/api/overview/).

##

Limitations

-   You can make asynchronous requests to only the API operations with the `Content-Type: application/json` header.
-   The asynchronous API framework is an addition to the following previously introduced operations that support asynchronous request processing. These operations do not work with the **Async Request Succeeded** and **Async Request Failed** standard events referenced below.
    -   [Create an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_CreateOrderAsynchronously)
    -   [Preview an order asynchronously](https://developer.zuora.com/api-references/api/operation/POST_PreviewOrderAsynchronously)
    -   [Create a job to hard delete billing document files](https://developer.zuora.com/api-references/api/operation/POST_BillingDocumentFilesDeletionJob)
    -   [Cancel a journal run](https://developer.zuora.com/api-references/api/operation/PUT_JournalRun)
    -   [Run trial balance](https://developer.zuora.com/api-references/api/operation/PUT_RunTrialBalance)

##

Making asynchronous requests

###

Prerequisites

-   Ensure that you are familiar with corresponding synchronous API operations documented in the [API Reference](https://developer.zuora.com/api-references/api/overview/) , and the  [Events and Notifications](https://knowledgecenter.zuora.com/Central_Platform/Events_and_Notifications) feature of Zuora.
-   Ensure that you have your system used to receive callouts in place. You need to specify a URL that uses the HTTP Secure ( `https://` ) protocol when setting up notifications.
-   Ensure that you can log into the Zuora UI as of the following user roles:
    -   Tenant administrator
    -   Billing administrator
    -   Payments administrator
    -   Finance administrator

###

Procedure

Take the following steps to work with the asynchronous API:

1.  [Set up notifications for asynchronous requests](#set-up-notifications)
2.  [Make asynchronous requests](#make-asynchronous-requests-1)

####

Set up notifications

Before making asynchronous requests, you should create callout notifications based on the following standard events through the Zuora UI or REST API:

-   Async Request Succeeded
-   Async Request Failed

With these notifications set up, your system will receive a callout when an asynchronous request succeeds or fails.

**Set up notifications through Zuora UI**

To create callout notifications through the Zuora UI:

1.  Log into the Zuora UI as an administrator of Billing, Payments, Finance, or the entire tenant.
2.  If you log in as a tenant administrator, navigate to **Settings > Administration > Setup Profiles, Notifications and Email Templates** .
3.  If you log in as an administrator of Billing, Payments, or Finance:
4.  Navigate to **Settings > Billing** , **Settings > Payments** , or **Settings > Finance** .
5.  Click **Setup Profiles, Notifications and Email Templates** .
6.  Select **System** from the notification category list in the **Notifications** section.
7.  Click **Add New Notifications** .
8.  Configure the new notification. Note that the following list only describes the required steps and does not include the configuration for optional fields. For more detailed information, see [Configure callout notifications](https://knowledgecenter.zuora.com/Central_Platform/Events_and_Notifications/C_Configure_Callout_Notifications) .
    1.  Select **Async Request Succeeded** from the **Related Event** dropdown list.
    2.  Specify a name for the callout notification in the **Name** field.
    3.  Select the **Active** check box.
    4.  In the **Delivery Options** section, select the **Callout** check box.
    5.  Enter the path to the receiver service of the callout in the **Base URL** field. You must specify a URL using the HTTP Secure ( `https://` ) protocol. Do not specify a port when entering the URL. Zuora does not support custom ports.
    6.  Select **POST** from the **Http Method** dropdown list.
9.  Click **Add New Notification** to save your configuration.
10.  Repeat Step 3 to Step 5 to create the notification for the Async Request Failed event. Note that in Step 4.a, you should select **Async Request Failed** .

**Set up notifications through API**

To create callout notifications through the API, use the [Create a notification definition](https://developer.zuora.com/api-references/api/operation/POST_Create_Notification_Definition) operation and specify the following required fields and other conditional or optional fields as needed:

-   `calloutBaseurl`
-   `eventTypeName`
-   `httpMethod`
-   `name`
-   `requiredAuth`

The following code snippet is a sample request payload to create a callout notification definition:

```json
{
  "callout": {
    "active": true,
    "calloutAuth": {
        "domain": "example_domain",
        "password": "example_password",
        "preemptive": true,
        "username": "example_user"
      },
    "calloutBaseurl": "https://www.example.com/callout/123456",
    "calloutRetry": true,
    "eventTypeName": "Async Request Succeeded",
    "httpMethod": "POST",
    "name": "Callout for Async Request Succeeded",
    "requiredAuth": true
  },
  "calloutActive": true,
  "communicationProfileId": "6e569e1e05f040eda51a927b140c0ac5",
  "description": "Notification sent out when an async request succeeds",
  "eventTypeName": "Async Request Succeeded"
}
```

####

Make asynchronous requests

The POST, PUT, and DELETE operations (except [Actions](https://developer.zuora.com/api-references/api/tag/Actions/)) for all resources documented in the [API Reference](https://developer.zuora.com/api-references/api/overview/) support asynchronous request processing.

By design, asynchronous requests differ from their synchronous counterparts in the endpoints, the HTTP status response codes, and the response body they return. ​​The header parameters and request body schema for asynchronous API operations are the same as their synchronous counterparts.

-   The endpoints for asynchronous API operations contain `/async` in the path after `/v1` . See the following table for examples:
    | API operation | Existing synchronous endpoint | Asynchronous endpoint |
    | --- | --- | --- |
    | Create an account | /v1/accounts | /v1/async/accounts |
    | CRUD: Create an account | /v1/object/account | /v1/async/object/account |

-   Unlike the 200 OK response for synchronous requests, Zuora returns a 202 Accepted response for all asynchronous requests, and the response body contains only a request ID.

###

Results

With callout notification definitions set up and asynchronous requests sent, Zuora sends a callout to your system once an asynchronous request succeeds or fails.

This section showcases the callout payload for the Async Request Success event and Async Request Failure event respectively.

####

Callout payload for Async Request Succeeded

On successful completion, an Async Request Succeeded callout notification is triggered. The following code snippet is an example of the triggered callout for Async Request Succeeded:

```json
{
    "createTime": "2021-10-03T10:33:12Z",
    "completeTime": "2021-10-03T10:34:22Z",
    "request": {
        "id": "<request-id>",
        "method": "<request-method>",
        "url": "<request-url>",
        "trackId": "<zuora-track-id>"
    },
    "state": "succeeded",
    "data": {
        "id": "<resource-id>"
    }
}
```

####

Callout payload for Async Request Failed

On failure, an Async Request Failed callout notification is triggered. The following code snippet is an example of the triggered callout for Async Request Failed:

```json
{
    "createTime": "2021-10-03T10:33:12Z",
    "completeTime": "2021-10-03T10:34:22Z",
    "request": {
        "id": "<request-id>",
        "method": "<request-method>",
        "url": "<request-url>",
        "trackId": "<zuora-track-id>"
    },
    "state": "failed",
    "reasons": [{
       "code": "<error-code>",
       "message": "<error-message>"
    }],
    "processId": "<process-id>"
}
```
