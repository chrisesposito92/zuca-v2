---
title: "ListUsers"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:17.037Z"
---

## List users

Retrieves a list of users wrapped in the element "results".

Security**ZephrHmacHttp**

Request

##### query Parameters

| identifiers.email_addressrequired | stringEmail address of the user to search for.Example: identifiers.email_address=example@example.com |
| --- | --- |
| identifiers.usernamerequired | stringUsername of the user to search for.Example: identifiers.username=username |
| foreign_key.xxxrequired | stringForeign key of the user to search for. The foreign system is parsed as the remainder of the parameter key name following 'foreign_id.'Example: foreign_key.xxx=123abc |
| searchrequired | stringPerforms a general search for the specified value across multiple fields, including attributes.Example: search=abc |
| search_by_attributes | Array of objects (search_by_attributes)Several attribute filters can be specified to search for users with particular attributes. It needs to be Base64 and URL encoded. |

Responses

200

OK

400

Bad Request

get/v3/users

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "user_id": "123456789ABCD",

        -   "identifiers": {

            -   "email_address": "joe.blow@company.com"


            },

        -   "attributes": {

            -   "first_name": "Joe",

            -   "surname": "Blow"


            },

        -   "email_verified": true


        }


    ]


}`
