---
title: "Callout template overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/callout-templates/callout-template-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:13.989Z"
---

# Callout template overview

Callout templates specify details of callout notifications, such as the HTTP method, request URL, and request body.

Zuora allows you to manage callout configurations in notification definitions efficiently by using callout templates.

You can create callout templates for all event types through the Zuora UI or REST API. When creating or editing notification definitions, you can quickly select one or more callout templates for each notification, eliminating the need to configure callout configurations individually.

## Merge fields in callout templates

Merge fields serve as placeholders in callout templates to automatically incorporate values from objects when callout notifications are triggered.

You can add merge fields to the following places in a callout template:

-   Request URL

-   Request body

-   HMAC authentication data

-   Custom callout headers


## Callout template preview

When creating or editing a callout template, you can assign an object ID that corresponds to the callout template's related event. Zuora will replace all advanced and data source merge fields in the request URL, request body, and custom callout headers with actual values from the specified object.

For example, if the related event is Account Created, you can assign an account ID, assuming this is the created account. Zuora will replace merge fields from the Account and other associated objects, such as BillToContact and SoldToContact, with actual values from the specified account object.

## Callout authentication

Zuora supports the following callout authentication types that help you secure your web service calls:

-   Basic and NTLM (NT LAN Manager)

-   OAuth 2.0

-   HMAC


Callout authentication settings are template-level configurations.

If the Retriable checkbox of callout template is selected and callout authentication fails, Zuora will retry the callout notification.

## Callout authentication - Basic and NTLM

To enable basic or NTLM callout authentication, select Username/Password from the Authentication Type list when configuring callout templates.

The following table lists fields that are available only for basic and NTLM authentication.

| Field | Basic authentication | NTLM authentication |
| --- | --- | --- |
| Username | Required | Required |
| Password | Required | Required |
| Domain | (N/A) | Optional |
| Enable Preemptive Authentication | Optional | Optional |

## Callout authentication - OAuth 2.0

To enable OAuth 2.0 callout authentication, select OAuth 2.0 from the Authentication Type list when configuring callout templates.

The Provider Name field is available only for OAuth 2.0 callout authentication. For more information about OAuth providers, see [Add an OAuth 2.0 Provider](/zuora-platform/system-management/administrator-settings/add-an-oauth-2.0-provider).

When a callout notification of OAuth 2.0 authentication is triggered, Zuora sends an HTTP request to the OAuth 2.0 Provider, with the client ID and secret in the request body. If the request fails, Zuora sends another HTTP request with these credentials in the request header, using the HTTP Basic authentication scheme:

`Authorization: Basic <client_id:client_secret>`

Note that `<client_id:client_secret>` is a base64-encoded string.

For example, if your client ID is `username` and client secret is `password` , the HTTP Basic authentication scheme is as follows:

`Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

## Callout authentication - HMAC

HMAC authentication ensures the data integrity and authenticity of callout notifications by using a hash function and a shared secret key between the sender and receiver. This protects against unauthorized modifications and verifies the data's origin.

You can enable the HMAC authentication along with any of the following authentication types:

-   Basic and NTLM

-   OAuth 2.0


When sending callout notifications with HMAC authentication, Zuora uses a specified hash function and secret key to generate signed data of a given message, and then sends the signed data in callout headers. When receiving the message, you can verify data integrity by comparing the signed data generated with the same secret key.
