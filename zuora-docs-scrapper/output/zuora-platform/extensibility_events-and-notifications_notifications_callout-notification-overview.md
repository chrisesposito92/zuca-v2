---
title: "Callout notification overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/callout-notification-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:09.471Z"
---

# Callout notification overview

Callouts, also known as, webhooks, are event-based API calls that Zuora makes out to other systems, rather than directly to the customers. Callout notifications can be used by these systems to take information and act upon them based on configured workflows or triggers.

## Callout security

Zuora's callout security measures are built on the combination of HTTPS delivery and they need to authenticate with Zuora API's to retrieve follow-on information.

Zuora will make a callout over HTTPS to a customer-designated URL. HTTPS transport guarantees that no one will intercept the communication. The data transferred over the URL is non-sensitive data, typically an ID for the specific event reported. The recipient of the callout notification will then need to authenticate back with Zuora to retrieve additional information about the event.

## Callout header

Zuora adds the following header fields to callout notifications by default. You can leverage these header fieldss to trace callout notifications.

| Header field | Format | Description |
| --- | --- | --- |
| Zuora-Request-Id | uuid without hyphen | Globally identifies a callout request. A different Zuora-Request-Id value is used in any type of retrials. For example, the retrial when connection timeout. |
| X-Amzn-Trace-Id | See AWS request tracing syntax. (Derived from Zuora-Request-Id) | Particularly helps Workflow to trace a callout sent by Notification and the Configurable Event service. The Notification and the Configurable Event service logs the content of it when access logs is enabled. |
| Zuora-Notification-Id | Id of a notification from the Notification and Configurable Event service | Identifies a callout session. The same Zuora-Notification-Id value is used in any type of retrials for the same notification context. |

In addition, you can create custom callout headers in callout templates to deliver additional information in callout notifications.

## User locale and data format

The user locale setting provides an override tenant locale setting. You can change the locale according to your preferred format for display of date and dateTime fields. See the [User locale setting](/zuora-platform/system-management/additional-tenant-management-settings/personal-settings) for more information.

## Callout notification timeout

Every callout has a total of 25 seconds before timing out:

-   10 seconds to establish socket connection

-   15 seconds for data transfer


Currently, the timeout limit cannot be changed. You can change the maximum number of attempts, as well as the time interval between each attempt. For more information, see [Configure callout settings](/zuora-platform/extensibility/events-and-notifications/configure-callout-settings).

Zuora recommends creating asynchronous jobs that run in the background and are independent of callout transactions from Zuora. This is to ensure that your processes are not dependent on the timeframe in which Zuora keeps connections open.

## Callout response codes

Zuora uses the HTTP response code to determine whether to retry callouts. Zuora only retries a callout if the response code is one of the following:

-   1xx

-   403

-   408

-   429

-   5xx

-   Negative


Note that if the custom request body of callout notifications is invalid, a `-2000` response code is returned, and Zuora will neither send the callout notification nor retry it. For more information about Custom request entity body, see [Create a callout template](/zuora-platform/extensibility/events-and-notifications/callout-templates/create-a-callout-template).

Additionally, if Confirm success by parsing response content is enabled in callout settings, Zuora retries a callout if the response code is `200` and the response body contains a `success` field that is set to `false`. See [Configure callout settings](/zuora-platform/extensibility/events-and-notifications/configure-callout-settings) for more information.

Note:

Zuora does not support redirection of callouts via responses with 3xx codes. To change the URL of a callout, edit the callout definition in your Zuora tenant.

## Message sequence for callout basic authentication

The basic authentication for Zuora callout notifications is compliant with the HTTP Authentication ([RFC 7235](https://www.ietf.org/rfc/rfc7235.txt)) and Basic HTTP Authentication ([RFC 7617](https://www.ietf.org/rfc/rfc7617.txt)) specifications.

When using Basic authentication in callout notifications, Zuora transmits credentials with the `Authorization` field in HTTP request headers. The format of the `Authorization` field is as follows:

`Authorization: Basic <username:password>`

The `<username:password>` is a base64-encoded string.

The default message sequence for callout notifications with basic authentication is as follows:

1.  Zuora sends an HTTP request to the callout receiver without the `Authorization` field.

2.  The callout receiver responds to Zuora with a 401(Unauthorized) response that has a `WWW-Authenticate` header field with a `realm` value indicating the protection scope.

3.  Zuora sends to the callout receiver a second request that has an `Authorization` header field containing valid credentials.

4.  The callout receiver responds to Zuora with a 200 response upon validation of credentials.


Figure 1.

![Default message sequence for callout notifications with basic authentication](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/918b3287-98b1-4774-af2b-23c5ad7f88fb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxOGIzMjg3LTk4YjEtNDc3NC1hZjJiLTIzYzVhZDdmODhmYiIsImV4cCI6MTc2NjY0MDQyNywianRpIjoiZTdkNTMwOTNlYWFmNDY1OGFkYzE5ODZhNGUyZjk3MzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.a7EIG6kYXgnJififlE27iL_aIb_Oa-HtcM_pvU6UWSo)

If you want Zuora to provide the `Authorization` field in the first HTTP request, enable the Enable Preemptive Authentication setting in the associated callout template. For more information, see [Create a callout template](/zuora-platform/extensibility/events-and-notifications/callout-templates/create-a-callout-template).

Note: Responses to callouts are truncated down to 60KB before storing them in the database.

## Note

Zuora notification system processes the events in the same order in which they are triggered. The timing and order of callout notifications depend on various factors, such as callout retries, concurrency, and network latency. But Zuora guarantees the best performance possible with the right performance boosters and tuning.
