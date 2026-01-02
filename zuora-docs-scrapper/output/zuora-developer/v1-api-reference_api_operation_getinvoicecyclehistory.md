---
title: "GetInvoiceCycleHistory"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getInvoiceCycleHistory/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:44.211Z"
---

## List the retry cycle history for an invoice

Gets information of all retry cycles for an invoice in Configurable Payment Retry.

Security**basicAuth**

Request

##### path Parameters

| invoice_idrequired | stringID of an invoice. |
| --- | --- |

Responses

200

get/api/v1/payments/invoice\_cycle\_history/{invoice\_id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/invoice\_cycle\_history/{invoice\_id}'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "cycles": [

    -   {

        -   "account_id": "2c92c0f96bd69165016bdcbf55ad5e62",

        -   "invoice_id": "2c92c0fa7849b3ff01784bc5e8ee18b5",

        -   "payment_method_id": "2c92c0f9774f2b3e01775f6cf2fb726a",

        -   "currency": "USD",

        -   "status": "Cycle Complete",

        -   "current_attempt_number": 1,

        -   "next_attempt": null,

        -   "customer_group": "Testing Group",

        -   "attempts": [

            -   {

                -   "attempt_number": 1,

                -   "zuora_payment_id": "2c92c0867849d42301784bc9ce806c31",

                -   "time_of_execution": "2021-04-01T19:11:21.639Z",

                -   "source": "PR-00000370",

                -   "cpr_generated": false,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Stop"


                    },

                -   "retry_info": { },

                -   "mapping_info": {

                    -   "label": "Hard Decline",

                    -   "level": "code",

                    -   "customer_group_id": 5


                    },

                -   "gateway_info": {

                    -   "id": "2c92c0f85e2d19af015e3a61d8947e5d",

                    -   "code": "insufficient_funds",

                    -   "response": "Your card has insufficient funds."


                    }


                }


            ]


        },

    -   {

        -   "account_id": "2c92c0f96bd69165016bdcbf55ad5e62",

        -   "invoice_id": "2c92c0fa7849b3ff01784bc5e8ee18b5",

        -   "payment_method_id": "2c92c0f9774f2b3e01775f6cf2fb726a",

        -   "currency": "USD",

        -   "status": "Cycle Complete",

        -   "current_attempt_number": 2,

        -   "next_attempt": null,

        -   "customer_group": "All Remaining Customers",

        -   "attempts": [

            -   {

                -   "attempt_number": 1,

                -   "zuora_payment_id": "2c92c0867849d42301784bc9ce806c31",

                -   "time_of_execution": "2021-03-19T18:42:20.103Z",

                -   "source": "PR-00000371",

                -   "cpr_generated": false,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Retry"


                    },

                -   "retry_info": {

                    -   "next": "2021-03-19T09:43:28.670-09:00",

                    -   "criteria": "incremental_time"


                    },

                -   "mapping_info": {

                    -   "label": "Hard Decline",

                    -   "level": "code",

                    -   "customer_group_id": 1


                    },

                -   "gateway_info": {

                    -   "id": "2c92c0f85e2d19af015e3a61d8947e5d",

                    -   "code": "insufficient_funds",

                    -   "response": "Your card has insufficient funds."


                    }


                },

            -   {

                -   "attempt_number": 2,

                -   "zuora_payment_id": "2c92c09c7849d3c101784bcdfc010671",

                -   "time_of_execution": "2021-03-19T18:52:24.137Z",

                -   "source": "PR-00000372",

                -   "cpr_generated": true,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Stop"


                    },

                -   "retry_info": { },

                -   "mapping_info": {

                    -   "label": "Hard Decline",

                    -   "level": "code",

                    -   "customer_group_id": 1


                    },

                -   "gateway_info": {

                    -   "id": "2c92c0f85e2d19af015e3a61d8947e5d",

                    -   "code": "insufficient_funds",

                    -   "response": "Your card has insufficient funds."


                    }


                }


            ]


        }


    ]


}`
