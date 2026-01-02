---
title: "ExecuteBrowserFeaturesDecisions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/executeBrowserFeaturesDecisions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:31.824Z"
---

## Execute Browser feature decisions

Zephr HTML Features can be run in the browser by calling this API directly or using the Zephr Browser SDK. For compatibility with CDN, any web headers (Referrer, User-Agent) will be accepted and passed onto the rule engine.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| Cookie | stringThe session cookie.Example: blaize_session=... |
| --- | --- |

##### Request Body schema: application/json

| featureIdsrequired | Array of anyArray of HTML Feature IDs |
| --- | --- |
| session | stringZephr Session ID |
| referer | stringBrowser referer |
| path | stringRequest path, defaults to "/". If available, include the content ID as a query parameter. For example, /story.html?content_id=abc-123. |
| content_metadata | object |
| giftToken | stringToken to provide access to content for one session. |
| jwt | stringA Json Web Token, may include identity or product holding claims. |
| customData | objectCustom data to be used in Feature HTML browser rule. Accepts a JSON object. |

Responses

200

OK

post/zephr/feature-decisions

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "featureIds": [

    -   "featureX"


    ],

-   "session": "xxx-xxx-xxx",

-   "referer": "[https://www.zephr.com/](https://www.zephr.com/)",

-   "path": "/x.html",

-   "content_metadata": {

    -   "content_id": "xxx-xxx-xxx"


    },

-   "giftToken": "xxx-xxx-xxx",

-   "jwt": "xxx-xxx-xxx",

-   "customData": {

    -   "key": "value"


    }


}`

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "featureResults": {

    -   "featureX": "blaize.transform.resource('...')"


    },

-   "resources": {

    -   "uiComponents": {

        -   "M-eRFAot": "<h1>Example</h1>"


        }


    },

-   "accessDetails": {

    -   "authenticated": false,

    -   "accessDecisions": {

        -   "W28U8Z": false


        },

    -   "entitlements": {

        -   "W28U8Z": {

            -   "usedInDecision": false,

            -   "decrementedInDecision": false


            }


        },

    -   "credits": {

        -   "W28U8Z": {

            -   "usedInDecision": false,

            -   "decrementedInDecision": false,

            -   "totalCredits": 0,

            -   "remainingCredits": 0


            }


        },

    -   "meters": {

        -   "W28U8Z": {

            -   "usedInDecision": false,

            -   "decrementedInDecision": false,

            -   "totalCredits": 0,

            -   "remainingCredits": 0


            }


        },

    -   "trialTrackingDetails": [

        -   {

            -   "entitlementId": "W28U8Z",

            -   "entitlementType": "entitlement",

            -   "trackCreditsUsed": false,

            -   "trackCreditsRemaining": false,

            -   "creditsUsedKey": "creditsUsed",

            -   "creditsRemainingKey": "creditsRemaining"


            }


        ],

    -   "trials": {

        -   "pLvjuu": {

            -   "totalCredits": 1,

            -   "remainingCredits": 0,

            -   "tracker": "",

            -   "reportInDataLayer": true,

            -   "dataLayerCreditsUsedKey": "trial-pLvjuu-creditsUsed",

            -   "dataLayerCreditsRemainingKey": "trial-pLvjuu-creditsRemaining",

            -   "decrementedInDecision": true,

            -   "usedInDecision": true


            }


        },

    -   "timeTrials": {

        -   "xCoYJr": {

            -   "reportInDataLayer": true,

            -   "trialDurationUnits": "HOURS",

            -   "trialDuration": 1,

            -   "entryTime": "2024-02-08T08:48:33.056008906Z[UTC]",

            -   "trackerHits": 1,

            -   "timeRemainingInTrial": 0,

            -   "dataLayerTrialDurationKey": "trial-xCoYJr-trialDuration",

            -   "dataLayerTrialDurationUnitsKey": "trial-xCoYJr-trialDurationUnits",

            -   "dataLayerTrackerEntryTimeKey": "trial-xCoYJr-trackerEntryTime",

            -   "dataLayerTrackerHitsKey": "trial-xCoYJr-trackerHits",

            -   "dataLayerTrialTimeRemainingKey": "trial-xCoYJr-trialTimeRemaining",

            -   "activeInDecision": true


            }


        },

    -   "testGroups": {

        -   "6663d5ea-d1db-4104-893e-65a21a92e32e": "B"


        },

    -   "activeProducts": [

        -   "example product"


        ]


    }


}`
