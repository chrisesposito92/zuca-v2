---
title: "GetSingleDecision"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getSingleDecision/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.734Z"
---

## Retrieve a single decision

For compatibility with CDN, any web headers (Referrer, User-Agent) will be accepted and passed onto the rule engine

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| sdkFeatureSlugrequired | stringFeature SDK slugExample: sdkFeatureSlug=featureX |
| --- | --- |
| sessionrequired | stringZephr Session ID, required for trials.Example: session=xxx-xxx-xxx |
| foreign_id.xxxrequired | stringForeign ID used to identify the user. The foreign system is parsed as the remainder of the parameter key name following 'foreign_id.'Example: foreign_id.xxx=xxx-xxx-xxx |
| iprequired | stringClient IP address, defaults to request IP.Example: ip=x.x.x.x |
| userAgentrequired | stringClient user agentExample: userAgent=Mozilla/5.0 (Macintosh; Intel Mac OS X 11)... |
| pathrequired | stringRequest path, required for trials.Example: path=/x.html |
| content_idrequired | stringContent ID, used to perform requests to a 3rd party API for additional content information used in making a decision.Example: content_id=xxx-xxx-xxx |
| jwtrequired | stringA Json web token, may include identity or product holding claims.Example: jwt=xxx-xxx-xxx |
| rawrequired | booleanDefault: falseShould output raw value |

Responses

200

Raw parameter response

get/zephr/decision-engine
