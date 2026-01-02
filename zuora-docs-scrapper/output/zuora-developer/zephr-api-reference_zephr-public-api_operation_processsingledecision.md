---
title: "ProcessSingleDecision"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/processSingleDecision/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.263Z"
---

## Process a single decision

Processes a single SDK feature decision. An SDK feature rule can be configured in the console, and allows a custom decision to be made using a range of inputs to drive the behaviour of a website or app. SDK features can output any one of several data types as configured in the console.

-   String: The output can be any string.
-   Number: The output can be any numerical value
-   Enum: The output can be one of a list of strings as configured in the developer panel for the rule. This is used for short output strings.
-   Component: The output can be one of a list of strings as configured in the developer panel for the rule. This is used for long output strings, such as HTML or JSON.
-   JSON: The output can be any JSON object. JSON schema validation can optionally be enforced when creating JSON outputs in the console.
-   Transformation: The output will be a JSON array of transformations to be applied to content on a webpage or in an app. This allows the configuration of the same types of outcomes that can be built with an HTML feature rule, such as hiding content and displaying a payment form.

SDK features permit business decisions to drive access or behaviour to be made in an app that is not using HTML content. SDK decisions are relevant for both anonymous and authenticated sessions. If no session is provided via the request then an anonymous session will not be created.

Invoking an SDK decision may cause side effects as configured in the rule, such as invoking webhooks or recording trial usages. When `dryRunMode` is enabled in the request, trial usages will not be recorded.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| rawrequired | booleanDefault: falseIf set to true, then the decision output will be returned in it's raw form, without metadata.If set to false, the decision output will be returned in an escaped form together with metadata about the decision. |
| --- | --- |

##### Request Body schema: application/json

| sdkFeatureSlugrequired | stringFeature SDK slug as configured in the console. |
| --- | --- |
| session | stringZephr Session ID, required for trials and for user-based decisions. |
| foreign_keys | objectA map where the key is a foreign system and the value is an ID used to identify the user in that system. |
| ip | stringClient IP address, defaults to request IP. |
| userAgent | stringClient user agent. |
| path | stringRequest path representing the content being consumed for trials. |
| contentId | stringContent ID, used to perform requests to a 3rd party API for additional content information used in making a decision. The endpoint and path format for content ID requests can be configured in the console. |
| jwt | stringA Json Web Token, may include identity or product holding claims. |
| giftToken | stringEnables a decision to be made in the rule based on whether access should be granted as the user has gift access. |
| dryRunMode | booleanIf the decision should be run without recording trial usage. |
| property name*additional property | stringCustom inputs configured in Feature SDK rule. |

Responses

200

OK. The output of the SDK feature rule, which may be wrapped with metadata according to the `raw` query parameter value.

post/zephr/decision-engine

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "sdkFeatureSlug": "sdk-feature-1",

-   "session": "0f88f32c-b03c-49cd-b977-0ca224d1acee",

-   "foreign_keys": {

    -   "external-system": "user-1"


    },

-   "ip": "56.123.124.23",

-   "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11)...",

-   "path": "/article.html",

-   "contentId": "paid-article-123",

-   "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",

-   "dryRunMode": false,

-   "giftToken": "23810040-8149-4f4e-a4d1-c8268340be7f",

-   "custom-input-1": "custom-value"


}`

Response samples

-   200

application/jsonnoneapplication/json

successerrorsuccess

Copy

`{

-   "sdkFeatureSlug": "sdk-feature-1",

-   "outputType": "ENUM",

-   "outputValue": "YES"


}`
