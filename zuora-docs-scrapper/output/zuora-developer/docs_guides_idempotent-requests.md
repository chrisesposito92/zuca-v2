---
title: "Idempotent requests"
url: "https://developer.zuora.com/docs/guides/idempotent-requests/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:34.509Z"
---

#

Idempotent requests

The Zuora API supports idempotency that prevents the same operation from being performed multiple times by accident. For example, when you attempt to create a product using the [Create a product](https://developer.zuora.com/other-api/quickstart-api/operation/createProduct/) operation but no response is returned because of the network issue, you can retry the request using the same idempotency key to ensure that only one product is created.

To perform an idempotent request, provide an additional `idempotency-key` header in the request. This idempotency key should be a unique value and the Zuora server identifies subsequent retries of the same request using this value. The value should be less than 255 characters long.

When you submit a request with the `idempotency-key` specified, the resulting status code, headers, and the body of this request is saved regardless of whether it succeeded or failed. Subsequent requests with the same key return the same result. A created idempotency key is automatically removed from the system 24 hours after it is set.

All `POST` and `PATCH` requests accept idempotency keys. Because the `OPTIONS`, `HEAD`, `GET`, `PUT`, and `DELETE` requests are intrinsically idempotent, you should not specify the `idempotency-key` header in these requests.

Note that the following HTTP status codes are specific to using the `idempotency-key` header:

-   **409 Conflict** : Usually caused by submitting concurrent requests for the same cached data while the request is still in progress.
-   **422 Unprocessable Content** : Usually caused by a mismatch of tenant IDs, URLs or HTTP methods.
