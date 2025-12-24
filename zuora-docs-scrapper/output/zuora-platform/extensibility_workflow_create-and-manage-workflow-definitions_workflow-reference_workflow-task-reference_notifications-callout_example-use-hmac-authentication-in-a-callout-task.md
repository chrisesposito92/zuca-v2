---
title: "Example: Use HMAC authentication in a callout task"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout/example-use-hmac-authentication-in-a-callout-task"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:41.348Z"
---

# Example: Use HMAC authentication in a callout task

Examples of using HMAC authentication in callout tasks.

The callout task supports HMAC authentication. You can use the two examples in this article to learn about how to configure the settings related to HMAC in a callout task.

To learn about the common settings in a callout task, see [Notifications: Callout](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout).

## Example 1: A callout to a payment gateway

1.  In the Headers tab, select the HTTP method, enter the full endpoint, and add the Content-Type and Date headers. For the Date header, you can use the http\_date filter to transform the date to the HTTP-date format.

2.  In the Authentication tab, complete the following settings.

    -   Authentication Type: hmac

    -   Algorithm: SHA-256

    -   Key: Select the global constant that you have defined for the secret key of the payment gateway.

    -   Data: Enter the data to be signed in the correct format. Note that each item including the final item in the data needs to be followed by a new line (LF).

        <HTTP method> <Content-Type> <Date> <CanonicalizedHeaders> <CanonicalizedResource> <new line>
    -   Signed Header Key: Authorization

    -   Value: GCS v1HMAC:<apiKeyId>:{{ Data.HMAC.Signed }}



## Example 2: A callout to CyberSource

1.  In the Headers tab, add the v-c-merchant-id, v-c-date, and Content-Type headers. For POST requests, you also need to add a Digest header, which is a Base64-encoded string that is generated from a hash of the JSON payload. To generate this string, you can use this Liquid expression:

    {{ Data.Request.Body | sha256\_encode64 }}

2.  In the Authentication tab, complete the following settings:

    -   Authentication Type: hmac

    -   Algorithm: SHA-256

    -   Key: Select the global constant that you have defined for the CyberSource secret key. Select Decode Base64 to decode the secret before the hash value is signed.

    -   Data: Enter the data to be signed in the correct format. host: <Host> (request-target): <Lowercase HTTP Method> <Request Path> digest: <Digest Header Value> v-c-merchant-id: <Merchant Id Header Value>

    -   Signed Header Key: Signature

    -   Value: keyid="<apiKeyId>", algorithm="HmacSHA256", headers="host (request-target) digest v-c-merchant-id", signature="{{ Data.HMAC.Signed }}"
