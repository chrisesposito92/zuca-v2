---
title: "SubmitUserConversionData"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/submitUserConversionData/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:23.692Z"
---

## Submit user conversion data

Records a user conversion. In Zephr, a conversion typically represents a user state change, such as transitioning from anonymous to registered or becoming a paying customer. This endpoint can also be used to record any event, like a user clicking on an advert. Conversions are tracked against specific rule versions and outcomes, enabling performance comparison between different outcomes.
Recording this data enables the comparison of performance of different outcomes in a rule. For example, a split test could be set up with two slightly different 'advert' outcomes that each record a conversion when a user interacts with them. After traffic has been processed by the rule, the conversion rates between the two outcomes can be compared in 'analytics' mode in the console. For example, it might show that 5% of users who saw Outcome1 clicked a button, compared to 8% for Outcome2. This analytics data can be downloaded in CSV format for further analysis.
Conversion data is only used to evaluate the performance of outcomes in rules and cannot be accessed on a per-user basis. To track if a particular registered user has interacted with an outcome, update a user attribute value.
This endpoint is only relevant where the Zephr in-rule analytics feature is enabled.
This endpoint must be called with a populated blaize\_tracking\_id cookie. If this cookie is missing, a 400 response code is returned.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### cookie Parameters

| blaize_tracking_idrequired | stringZephr tracking ID cookie used to uniquely identify the user or anonymous sessionExample: blaize_tracking_id=dc8f7f9e-2deb-4485-a9f0-34b44fc7f45e |
| --- | --- |

##### Request Body schema: application/json

| ruleIdrequired | stringThe ID of the specific Zephr rule version that led to the outcome causing this conversion. |
| --- | --- |
| outcomeIdrequired | stringThe ID of the outcome in the rule that triggered this conversion. |
| conversionrequired | stringThe type of conversion to be recorded. For example, Zephr out-of-the-box components will submit conversion strings 'REGISTERED' and 'CUSTOMER' when registering a user or when a user purchases a product. Any string can be used for custom conversions. |

Responses

201

OK. The user conversion data has been successfully recorded.

400

Bad Request. Returned when the request is missing a blaize\_tracking\_id cookie.

post/zephr/public/rule-outcomes/v1/conversions

Request samples

-   Payload

application/json

Copy

`{

-   "ruleId": "article-22",

-   "outcomeId": "graph/1#1,graph/1#2,graph/1#3,graph/2#1,graph/2#2",

-   "conversion": "REGISTERED"


}`
