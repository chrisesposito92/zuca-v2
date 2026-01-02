---
title: "Public API Reference (2024-07-30)"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/overview/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:35.727Z"
---

# Public API Reference (2024-07-30)

Download OpenAPI specification:[Download](https://developer.zuora.com/yaml/public_api_spec.yaml)

The Zephr Public API provides common client-side actions tied to a session cookie. Unlike the Admin API, neither users nor other resources can be dereferenced; the only data that can be accessed is owned by the user who is currently signed-in. This design is used to protect other users from malicious attacks.

You can find the base URL for the Public API by navigating to your site domains. To do this, select **Sites** from the **Delivery** menu, select your site, and then click the **Site Domains** button. The base URL is the Live domain.

Zephr forms use the Public API by default, with relative URLs based on the base URL.
