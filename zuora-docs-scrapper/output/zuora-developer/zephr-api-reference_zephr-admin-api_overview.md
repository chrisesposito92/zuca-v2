---
title: "Admin API Reference (2025-05-06)"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/overview/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:43.281Z"
---

# Admin API Reference (2025-05-06)

Download OpenAPI specification:[Download](https://developer.zuora.com/yaml/admin_api_spec.yaml)

The Zephr Admin API provides RESTful access to all Zephr functionality. It is designed for server-side integrations. All requests must be signed as described in [HMAC Request Signing and Key Pairs](https://knowledgecenter.zuora.com/Zephr/Developer_Documentation/HMAC_Request_Signing_and_Key_Pairs).

The Admin API uses a base URL with the following format: `https://{tenantId}.api.zephr.com`

**Note**: If you have multiple tenants, the current tenant ID is shown in a blue box in the top right of the Admin Console. If you have a single site, you can find the tenant ID by navigating to your site domains. To do this, select **Sites** from the **Delivery** menu, select your site, and then click the **Site Domains** button. The tenant ID is the first part of the domain. For example, if the domain is *news-paper.cdn.zephr.com*, the tenant ID is *news*.
