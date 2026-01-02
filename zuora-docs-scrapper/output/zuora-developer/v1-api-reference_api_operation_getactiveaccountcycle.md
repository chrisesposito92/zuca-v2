---
title: "GetActiveAccountCycle"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getActiveAccountCycle/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:44.040Z"
---

## List the active retry cycles for an account

Gets information of active retry cycles that have not been completed for an account in Configurable Payment Retry.

Security**basicAuth**

Request

##### path Parameters

| account_idrequired | stringID of an account. |
| --- | --- |

Responses

200

get/api/v1/payments/active\_account\_cycle\_information/{account\_id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/active\_account\_cycle\_information/{account\_id}'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "cycles": [

    -   {

        -   "account_id": "2c92c0f96bd69165016bdccdd6ce2f29",

        -   "debit_memo_id": "2c92c0fb78532b0001785a38f6427976",

        -   "payment_method_id": "2c92c0f9774f2b3e01775f6f06d87b61",

        -   "currency": "USD",

        -   "status": "Cycle Incomplete",

        -   "current_attempt_number": 1,

        -   "next_attempt": "2021-04-01T19:27:34.473Z",

        -   "customer_group": "All Remaining Customers",

        -   "attempts": [

            -   {

                -   "attempt_number": 1,

                -   "zuora_payment_id": "2c92c085785305e201785a5199a6192d",

                -   "time_of_execution": "2021-03-23T16:50:18.878Z",

                -   "source": "PR-00000376",

                -   "cpr_generated": false,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Retry"


                    },

                -   "retry_info": {

                    -   "next": "2021-03-23T07:51:27.521-09:00",

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


        },

    -   {

        -   "account_id": "2c92c0f96bd69165016bdccdd6ce2f29",

        -   "invoice_id": "2c92c0fa7853052701785a38c6622473",

        -   "payment_method_id": "2c92c0f9774f2b3e01775f6f06d87b61",

        -   "currency": "USD",

        -   "status": "Cycle Incomplete",

        -   "current_attempt_number": 1,

        -   "next_attempt": "2021-04-01T19:27:34.436Z",

        -   "customer_group": "All Remaining Customers",

        -   "attempts": [

            -   {

                -   "attempt_number": 1,

                -   "zuora_payment_id": "2c92c085785305e201785a519d85193b",

                -   "time_of_execution": "2021-03-23T16:50:18.878Z",

                -   "source": "PR-00000376",

                -   "cpr_generated": false,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Retry"


                    },

                -   "retry_info": {

                    -   "next": "2021-03-23T07:51:28.161-09:00",

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
