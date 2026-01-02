---
title: "GetActiveInvoiceCycle"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getActiveInvoiceCycle/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:44.097Z"
---

## List the active retry cycles for an invoice

Gets information of active retry cycles that have not been completed for an invoice in Configurable Payment Retry.

Security**basicAuth**

Request

##### path Parameters

| invoice_idrequired | stringID of an invoice. |
| --- | --- |

Responses

200

get/api/v1/payments/active\_invoice\_cycle\_information/{invoice\_id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/active\_invoice\_cycle\_information/{invoice\_id}'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "cycles": [

    -   {

        -   "account_id": "2c92c0f96bd69165016bdccdd6ce2f29",

        -   "invoice_id": "2c92c0f8778bf8cd017798168cb50e0b",

        -   "payment_method_id": "2c92c0f9774f2b3e01775f6f06d87b61",

        -   "currency": "USD",

        -   "status": "Cycle Incomplete",

        -   "current_attempt_number": 2,

        -   "next_attempt": "2021-04-01T19:27:34.648Z",

        -   "customer_group": "All Remaining Customers",

        -   "attempts": [

            -   {

                -   "attempt_number": 1,

                -   "zuora_payment_id": "2c92c0867849d42301784bc9ca076c21",

                -   "time_of_execution": "2021-03-19T18:42:20.103Z",

                -   "source": "PR-00000371",

                -   "cpr_generated": false,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Retry"


                    },

                -   "retry_info": {

                    -   "next": "2021-04-01T19:27:34.648-09:00",

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

                -   "zuora_payment_id": "2c92c09c7849d3c101784bce0d0a06d5",

                -   "time_of_execution": "2021-03-19T18:52:24.137Z",

                -   "source": "PR-00000372",

                -   "cpr_generated": true,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Retry"


                    },

                -   "retry_info": {

                    -   "next": "2021-03-19T09:53:39.845-09:00",

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


                }


            ]


        }


    ]


}`
