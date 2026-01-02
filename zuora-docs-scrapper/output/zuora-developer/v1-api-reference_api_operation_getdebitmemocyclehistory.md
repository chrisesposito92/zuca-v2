---
title: "GetDebitMemoCycleHistory"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getDebitMemoCycleHistory/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:43.692Z"
---

## List the retry cycle history for a debit memo.

Gets information of all retry cycles for a debit memo in Configurable Payment Retry.

Security**basicAuth**

Request

##### path Parameters

| debit_memo_idrequired | stringID of a debit memo. |
| --- | --- |

Responses

200

get/api/v1/payments/debit\_memo\_cycle\_history/{debit\_memo\_id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/debit\_memo\_cycle\_history/{debit\_memo\_id}'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "cycles": [

    -   {

        -   "account_id": "2c92c0f868e161e70168e25eb51d755f",

        -   "debit_memo_id": "2c92c0fa7853052701785a38f3bb267f",

        -   "payment_method_id": "2c92c0f8774f1afe01775f6e533c4c06",

        -   "currency": "USD",

        -   "status": "Cycle Complete",

        -   "current_attempt_number": 2,

        -   "next_attempt": null,

        -   "customer_group": "All Remaining Customers",

        -   "attempts": [

            -   {

                -   "attempt_number": 1,

                -   "zuora_payment_id": "2c92c085785305e201785a51af791979",

                -   "time_of_execution": "2021-03-23T16:50:18.878Z",

                -   "source": "PR-00000376",

                -   "cpr_generated": false,

                -   "success": false,

                -   "amount_collected": "0.0",

                -   "action_info": {

                    -   "action": "Retry"


                    },

                -   "retry_info": {

                    -   "next": "2021-03-23T07:51:30.380-09:00",

                    -   "criteria": "incremental_time",

                    -   "api_updated_retry_time": "2021-03-26T14:27:21.107-04:00"


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

                -   "zuora_payment_id": "2c92c0857881cf3e01788ee263b0331c",

                -   "time_of_execution": "2021-04-01T19:21:55.207Z",

                -   "source": "PR-00000378",

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
