---
title: "ExportUsers"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/exportUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:57.848Z"
---

## Export users

Export users who match the provided parameters.

Security**ZephrHmacHttp**

Request

##### query Parameters

| attributesrequired | booleanWhether or not to include core attributes.Example: attributes=true |
| --- | --- |
| appIdsrequired | stringComma-delimited list of appIds to retrieve extended profile data for. If appIds is present and attributes isn't, only users with matching extended profiles will be returned.Example: appIds=quiz1,survey4 |
| appIdsRestrictive | booleanOnly include users with a matching extended profileExample: appIdsRestrictive=true |
| grants | booleanInclude information about entitlementsExample: grants=true |
| since | stringUsers who were updated after the specified dateExample: since=2020-01-01T00:00:00Z |
| registeredSince | stringUsers who have registered after the specified dateExample: registeredSince=2020-01-01T00:00:00Z |
| registeredBefore | stringUsers who have registered before the specified dateExample: registeredBefore=2020-01-01T00:00:00Z |
| rpp | numberDefault: 500Results per pageExample: rpp=40 |
| page | numberDefault: 1The requested page of resultsExample: page=1 |

Responses

200

OK - The paginated user data has been exported successfully.

get/v3/user-export

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "results": [

    -   [

        -   {

            -   "seq-no": 1,

            -   "user": {

                -   "identifiers": {

                    -   "email_address": "joe.blow@company.com"


                    },

                -   "attributes": {

                    -   "first_name": "Joe",

                    -   "surname": "Blow"


                    }


                },

            -   "grants": {

                -   "results": [

                    -   {

                        -   "grantId": "e196ad75-a6d0-471b-90b3-de3843dd7860",

                        -   "user_id": "e1812285-2f21-441e-8be4-b08835cd4b2c",

                        -   "account_id": "14515649-565f-4b1c-8346-eb98301c1d6b",

                        -   "expiry_state": "pending",

                        -   "entitlement_type": "bundle",

                        -   "entitlement_id": "b74df5c4-fded-492c-ad90-07646bded5db",

                        -   "startTime": "2022-06-01 00:00:00",

                        -   "endTime": "2022-12-31 23:59:59",

                        -   "product_id": "86abb44a-e6f2-4f9b-ac26-46ae0a13ed31",

                        -   "createdAt": "2022-05-31 23:59:59"


                        }


                    ]


                }


            }


        ]


    ],

-   "meta": {

    -   "count": 100,

    -   "rpp": 20,

    -   "paginated": true


    },

-   "links": {

    -   "first": {

        -   "url": "[https://example.com?rpp=10](https://example.com?rpp=10)",

        -   "page": 1


        },

    -   "last": {

        -   "url": "[https://example.com?rpp=10](https://example.com?rpp=10)",

        -   "page": 1


        },

    -   "previous": {

        -   "url": "[https://example.com?rpp=10](https://example.com?rpp=10)",

        -   "page": 1


        },

    -   "next": {

        -   "url": "[https://example.com?rpp=10](https://example.com?rpp=10)",

        -   "page": 1


        }


    }


}`
