---
title: "Sessions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/coding-overview/sessions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:00.616Z"
---

# Sessions

Provides information about Zuora sessions.

## Number of sessions to create

Each session maps to a particular user, and all data created has the “Created By” information as that user. Zuora recommends using one session per user.

## Session timeout value

The default timeout value is 15 minutes. However, this can be configured in the Zuora application, under . There the session timeout can be changed from as low as 15 minutes to as long as 8 hours.

## Validate sessions

There is currently no way to verify a valid session. If a session is invalid, the system will return an INVALID\_SESSION error, which means that you need to log in again. The recommended approach is to keep a timer and when it passes the configured threshold minus a margin (for example, if the threshold is 15 minutes, then the timer should expire in 10 minutes), to log in again and get a fresh session.

## Handle INVALID\_SESSION errors

INVALID\_SESSION errors can occur when the user's session has reached the configured threshold. The code should retry again with the credentials to obtain a valid session.
