---
title: "StartUpdateEmailPasswordless"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startUpdateEmailPasswordless/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:23.064Z"
---

## Start the email update flow for a passwordless user

Starts the email update flow for a passwordless user. An email will be sent to the new email address for verification.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| staterequired | stringAn identifier linking this request to a previous one, that set the new email address. |
| --- | --- |

Responses

201

An email with instructions to update your email has been sent to the new email address.

post/blaize/users/update-email-passwordless/{state}
