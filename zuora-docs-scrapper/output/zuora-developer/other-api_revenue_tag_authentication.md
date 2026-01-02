---
title: "Authentication"
url: "https://developer.zuora.com/other-api/revenue/tag/Authentication/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:12.937Z"
---

# Authentication

The Authentication operation is the authentication layer when you integrate data with Zuora Revenue APIs. Use this operation to authenticate and generate a token that can be valid for a specific time period. The token is required for all the subsequent API calls. By default, a token will be valid for 30 minutes before it expires. If the issued token expires, call this operation again with valid credentials to get a new token.

To acquire the token, you must provide the user role and client name as well as basic authorization in the HTTP request header. An example of basic authorization header is as follows:

`Basic c3lzYWRtaW46fsDFsgsV2cHJvJTEyMw==`

An example of the returned authentication token is as follows:

```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
ybmFtZSI6InZpbm90aC5iYWFsYWppIiwiaXNzIjoiUkV```
```
