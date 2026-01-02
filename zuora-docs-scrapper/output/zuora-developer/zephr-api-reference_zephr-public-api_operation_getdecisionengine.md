---
title: "GetDecisionEngine"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getDecisionEngine/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:31.049Z"
---

## Retrieve the Decision Engine

For compatibility with CDN, any web headers (Referrer, User-Agent) will be accepted and passed onto the rule engine.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| pathrequired | stringUniquely identifies the content Zephr is making a decision about. Request rules can be configured to only execute when the request path matches a provided regular expression. |
| --- | --- |
| sessionrequired | stringZephr Session ID - same as the blaize_session cookie used by the CDN and authentication endpoints. |
| foreign_id.xxxrequired | stringForeign ID used to identify the user. The foreign system is parsed as the remainder of the parameter key name following 'foreign_id.' |
| content_idrequired | stringPassed as metadata.content_id to the Content API template, used to perform requests to a 3rd party API for additional content information used in making a decision. |
| jwtrequired | stringA JSON Web Token, may include identity or product holding claims. |
| btrrequired | stringA trusted referrer token. If Zephr generates a matching token using path, passed-in Referer header and a configured secret, all entitlements used in this decision will be temporarily granted for this request. |

Responses

200

Response status and body are determined by the executed rule. If there is an error executing the rule, a 200 will be returned.

get/blaize/decision-engine
