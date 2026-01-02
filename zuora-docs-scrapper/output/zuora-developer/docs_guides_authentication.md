---
title: "Authentication"
url: "https://developer.zuora.com/docs/guides/authentication/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:35.343Z"
---

#

Authentication

The Zuora API uses bearer tokens for authentication. See the [Get started tutorial](/docs/get-started/introduction/) to learn how to generate a bearer token.

All API requests should include a bearer token in an Authorization HTTP header as follows:


```bash
Authorization: Bearer $ZUORA_BEARER_TOKEN
```

##

Organization (optional)

For users who belong to multiple organizations, you can pass a header to specify which organization, or organizations, to user for an API request.

Example:



```bash
curl https://test.zuora.com/v2/accounts \
  -H "Authorization: Bearer $ZUORA_BEARER_TOKEN" \
  -H "Zuora-Org-Ids: YOUR_ORG_ID"
```
