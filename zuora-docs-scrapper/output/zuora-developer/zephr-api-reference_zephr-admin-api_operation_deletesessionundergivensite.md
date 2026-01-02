---
title: "DeleteSessionUnderGivenSite"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteSessionUnderGivenSite/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:49.540Z"
---

## Delete a session under a given site

This endpoint is used to delete a specific session for a given site. You need to provide the unique identifiers for the site and the session. This operation is useful when you want to manually end a session before it naturally expires.

Security**ZephrHmacHttp**

Request

##### path Parameters

| siterequired | stringThe unique site identifier within the tenant. |
| --- | --- |
| sessionIdrequired | stringUnique session identifier assigned to each session, enabling precise identification and retrieval of session-related information within the API. |

Responses

200

OK. The session was successfully deleted.

401

Unauthorized. No valid authentication was provided.

404

No session found. The site or the session ID is invalid.

delete/v4/sessions/{site}/{sessionId}
