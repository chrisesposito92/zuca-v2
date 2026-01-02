---
title: "CancelDebitMemo"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/cancelDebitMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:43:32.060Z"
---

## Cancel a debit memo

Cancels a debit memo. Only the debit memos with the `draft` status can be canceled.

Security**bearerAuth**

Request

##### path Parameters

| debit_memo_idrequired | stringIdentifier for the debit_memo_id, either debit_memo_number or debit_memo_id |
| --- | --- |

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, balance, due_date, debit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, posted_by_id, state, reason_code, paid, past_due, billing_document_settings, payment_terms, bill_to_id, invoice_id, currencyExample: fields[]=id,created_time |
| --- | --- |
| debit_memo.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, balance, due_date, debit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, posted_by_id, state, reason_code, paid, past_due, billing_document_settings, payment_terms, bill_to_id, invoice_id, currencyExample: debit_memo.fields[]=id,created_time |
| debit_memo_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, document_item_date, invoice_item_id, sku, name, quantity, recognized_revenue_account, remaining_balance, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, subtotal, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, debit_memo_idExample: debit_memo_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, amount_credited, amount_paid, remaining_balanceExample: taxation_items.fields[]=id,created_time |
| account.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, auto_pay, account_number, bill_to_id, sold_to_id, billing_document_settings, communication_profile_id, crm_id, sales_rep, parent_account_id, payment_gateway, payment_terms, remaining_credit_memo_balance, remaining_debit_memo_balance, remaining_invoice_balance, remaining_payment_balance, sequence_set_id, tax_certificate, batch, tax_identifier, bill_cycle_day, description, name, currency, default_payment_method_id, enabledExample: account.fields[]=id,created_time |
| bill_to.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: bill_to.fields[]=id,created_time |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorial for detailed instructions.Note that the filters on this operation are only applicable to the related objects. For example, when you are calling the "Retrieve a billing document" operation, you can use the filter[] parameter on the related objects such as filter[]=items[account_id].EQ:8ad09e208858b5cf0188595208151c63 |
| page_size | integer [ 1 .. 99 ]The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity, or you do not have multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |

Responses

200

Default Response

400

Bad Request

401

Unauthorized

404

Not Found

405

Method Not Allowed

429

Too Many Requests

500

Internal Server Error

502

Bad Gateway

503

Service Unavailable

504

Gateway Timeout

post/debit\_memos/{debit\_memo\_id}/cancel

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request POST      \--url https://rest.apisandbox.zuora.com/v2/debit\_memos/DM00000288/cancel      \--header 'Content-Type: application/json'      \--header 'x-donut-auth: Bearer 2a79d716ffa44c1cb6e45fffc4047b6f'      \--data '{}'


Response samples

-   200
-   400
-   401
-   404
-   405
-   429
-   500
-   502
-   503
-   504

5 more4295005025035045 more

application/json

Copy

Expand allCollapse all

`{

-   "id": "string",

-   "updated_by_id": "string",

-   "updated_time": "2019-08-24T14:15:22Z",

-   "created_by_id": "string",

-   "created_time": "2019-08-24T14:15:22Z",

-   "custom_fields": {

    -   "property1": "string",

    -   "property2": "string"


    },

-   "custom_objects": {

    -   "property1": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": { },

                    -   "property2": { }


                    },

                -   "type": "string"


                }


            ]


        },

    -   "property2": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": { },

                    -   "property2": { }


                    },

                -   "type": "string"


                }


            ]


        }


    },

-   "account_id": "string",

-   "account_number": "string",

-   "description": "string",

-   "due_date": "2023-01-01",

-   "document_date": "2023-01-01",

-   "reason_code": "string",

-   "invoice_id": "string",

-   "transfer_to_accounting": true,

-   "exclude_from_auto_apply_rules": true,

-   "pay": true,

-   "currency": "string",

-   "debit_memo_number": "string",

-   "amount_refunded": 0,

-   "state_transitions": {

    -   "posted_time": "string",

    -   "canceled_time": "string"


    },

-   "posted_by_id": "string",

-   "state": "draft",

-   "account": {

    -   "id": "string",

    -   "updated_by_id": "string",

    -   "updated_time": "2019-08-24T14:15:22Z",

    -   "created_by_id": "string",

    -   "created_time": "2019-08-24T14:15:22Z",

    -   "custom_fields": {

        -   "property1": "string",

        -   "property2": "string"


        },

    -   "custom_objects": {

        -   "property1": {

            -   "next_page": "string",

            -   "data": [

                -   {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": { },

                        -   "property2": { }


                        },

                    -   "type": "string"


                    }


                ]


            },

        -   "property2": {

            -   "next_page": "string",

            -   "data": [

                -   {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": { },

                        -   "property2": { }


                        },

                    -   "type": "string"


                    }


                ]


            }


        },

    -   "account_number": "A-100001",

    -   "billing_document_settings": {

        -   "credit_memo_template_id": "2c92c08b6a8c978f016a9e0084622b62",

        -   "debit_memo_template_id": "2c92c08c6a8c7e08016a9ec8d72f3ab5",

        -   "email_documents": "alawrence@zuora.com",

        -   "print_documents": false,

        -   "invoice_template_id": "8f64d4d754739d85d0346e00ef77e50d",

        -   "additional_email": "jdoe@zuora.com"


        },

    -   "batch": "string",

    -   "bill_cycle_day": 31,

    -   "bill_to": {

        -   "id": "string",

        -   "updated_by_id": "string",

        -   "updated_time": "2019-08-24T14:15:22Z",

        -   "created_by_id": "string",

        -   "created_time": "2019-08-24T14:15:22Z",

        -   "custom_fields": {

            -   "property1": "string",

            -   "property2": "string"


            },

        -   "custom_objects": {

            -   "property1": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                },

            -   "property2": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                }


            },

        -   "address": {

            -   "line1": "3333 Piedmont Rd NE",

            -   "line2": "Suite 1150",

            -   "city": "Atlanta",

            -   "state": "GA",

            -   "country": "United States",

            -   "county": "string",

            -   "postal_code": "30305"


            },

        -   "first_name": "Amy",

        -   "home_phone": "(888)976-9056",

        -   "last_name": "Lawrence",

        -   "mobile_phone": "(888)101-0011",

        -   "nickname": "Ami",

        -   "other_phone": "(888)100-0001",

        -   "email": "alawrence@gmail.com",

        -   "tax_region": "Georgia",

        -   "work_email": "alawrence@zuora.com",

        -   "work_phone": "(888)976-9056",

        -   "other_phone_type": "work",

        -   "fax": "string",

        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


        },

    -   "sold_to": {

        -   "id": "string",

        -   "updated_by_id": "string",

        -   "updated_time": "2019-08-24T14:15:22Z",

        -   "created_by_id": "string",

        -   "created_time": "2019-08-24T14:15:22Z",

        -   "custom_fields": {

            -   "property1": "string",

            -   "property2": "string"


            },

        -   "custom_objects": {

            -   "property1": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                },

            -   "property2": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                }


            },

        -   "address": {

            -   "line1": "3333 Piedmont Rd NE",

            -   "line2": "Suite 1150",

            -   "city": "Atlanta",

            -   "state": "GA",

            -   "country": "United States",

            -   "county": "string",

            -   "postal_code": "30305"


            },

        -   "first_name": "Amy",

        -   "home_phone": "(888)976-9056",

        -   "last_name": "Lawrence",

        -   "mobile_phone": "(888)101-0011",

        -   "nickname": "Ami",

        -   "other_phone": "(888)100-0001",

        -   "email": "alawrence@gmail.com",

        -   "tax_region": "Georgia",

        -   "work_email": "alawrence@zuora.com",

        -   "work_phone": "(888)976-9056",

        -   "other_phone_type": "work",

        -   "fax": "string",

        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


        },

    -   "communication_profile_id": "2c92c0946a6dffc0016a7faab604299b",

    -   "crm_id": "1a2b3c4d5e",

    -   "default_payment_method_id": "8a95b1946b6aeac8718c32aab8c395f",

    -   "name": "test account",

    -   "description": "description of test account",

    -   "parent_account_id": "8ad093f27d6eee80017d6effd7a66759",

    -   "payment_gateway": "adyen gateway",

    -   "payment_terms": "Net 30",

    -   "sequence_set_id": "2c92a4204a6dffc0016a7faab723041c",

    -   "auto_pay": true,

    -   "tax_certificate": {

        -   "company_code": "ABC",

        -   "id": "string",

        -   "start_date": "2022-01-01",

        -   "description": "string",

        -   "entity_use_code": "string",

        -   "end_date": "2023-01-01",

        -   "issuing_jurisdiction": "Georgia",

        -   "state": "pending",

        -   "tax_identifier": "DE123456789"


        },

    -   "tax_identifier": {

        -   "id": "string"


        },

    -   "currency": "USD",

    -   "sales_rep": "Max",

    -   "enabled": true,

    -   "remaining_debit_memo_balance": 10,

    -   "remaining_invoice_balance": 100,

    -   "remaining_credit_memo_balance": 50,

    -   "remaining_payment_balance": 20,

    -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

    -   "sold_to_id": "8ad0823f8040e52d0180433026b156fe",

    -   "default_payment_method": {

        -   "id": "string",

        -   "updated_by_id": "string",

        -   "updated_time": "2019-08-24T14:15:22Z",

        -   "created_by_id": "string",

        -   "created_time": "2019-08-24T14:15:22Z",

        -   "custom_fields": {

            -   "property1": "string",

            -   "property2": "string"


            },

        -   "custom_objects": {

            -   "property1": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                },

            -   "property2": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "string"


                        }


                    ]


                }


            },

        -   "type": "paypal_express",

        -   "custom_type": "string",

        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

        -   "account": { },

        -   "billing_details": {

            -   "name": "Amy Lawrence",

            -   "address": {

                -   "line1": "3333 Piedmont Rd NE",

                -   "line2": "Suite 1150",

                -   "city": "Atlanta",

                -   "country": "United States",

                -   "state": "GA",

                -   "postal_code": "30305"


                },

            -   "email": "alawrence@gmail.com",

            -   "phone": "(888)976-9056"


            },

        -   "maximum_payment_attempts": 6,

        -   "payment_retry_interval": 3,

        -   "device_session_id": "string",

        -   "ip_address": "192.10.1.123",

        -   "bank_identification_number": "string",

        -   "card": {

            -   "brand": "visa",

            -   "expiry_month": 10,

            -   "expiry_year": 2024,

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                },

            -   "last_4": "2042"


            },

        -   "paypal_express_native": {

            -   "baid": "string",

            -   "email": "string"


            },

        -   "paypal_express": {

            -   "baid": "string",

            -   "email": "string"


            },

        -   "paypal_adaptive": {

            -   "preapproval_key": "2G4EPFSD",

            -   "email": "alawrence@zuora.com"


            },

        -   "sepa_debit": {

            -   "IBAN": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                },

            -   "business_identification_code": "string"


            },

        -   "cc_ref": {

            -   "second_token": "string",

            -   "token": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                },

            -   "card": {

                -   "brand": "visa",

                -   "expiry_month": 10,

                -   "expiry_year": 2024,

                -   "last_4": "2042"


                }


            },

        -   "apple_pay": {

            -   "card": {

                -   "brand": "visa",

                -   "expiry_month": 10,

                -   "expiry_year": 2024,

                -   "mandate": {

                    -   "id": "string",

                    -   "reason": "string",

                    -   "state": "active"


                    },

                -   "last_4": "2042"


                },

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                },

            -   "payment_id": "string",

            -   "token": "string"


            },

        -   "google_pay": {

            -   "card": {

                -   "brand": "visa",

                -   "expiry_month": 10,

                -   "expiry_year": 2024,

                -   "mandate": {

                    -   "id": "string",

                    -   "reason": "string",

                    -   "state": "active"


                    },

                -   "last_4": "2042"


                },

            -   "token": "string"


            },

        -   "ach_debit": {

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                },

            -   "bank_aba_code": "string",

            -   "bank_account_name": "string",

            -   "bank_account_type": "business_saving",

            -   "bank_name": "string",

            -   "bank_account_number": "string"


            },

        -   "betalings_debit": {

            -   "account_number": "string",

            -   "identity_number": "string",

            -   "bank_code": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                }


            },

        -   "autogiro_debit": {

            -   "account_number": "string",

            -   "identity_number": "string",

            -   "branch_code": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                }


            },

        -   "bacs_debit": {

            -   "account_number": "string",

            -   "bank_code": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                }


            },

        -   "au_becs_debit": {

            -   "account_number": "string",

            -   "branch_code": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                }


            },

        -   "nz_becs_debit": {

            -   "account_number": "string",

            -   "branch_code": "string",

            -   "bank_code": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                }


            },

        -   "pad_debit": {

            -   "account_number": "string",

            -   "branch_code": "string",

            -   "bank_code": "string",

            -   "mandate": {

                -   "id": "string",

                -   "reason": "string",

                -   "state": "active"


                }


            },

        -   "state": "active",

        -   "auto_generated": true,

        -   "use_default_retry_rule": true,

        -   "existing_mandate": true,

        -   "last_failed_sale_transaction_time": "2019-08-24T14:15:22Z",

        -   "last_transaction_time": "2019-08-24T14:15:22Z",

        -   "last_transaction_status": "string",

        -   "number_of_consecutive_failures": 0,

        -   "total_number_of_processed_payments": 0,

        -   "total_number_of_error_payments": 0


        },

    -   "billing_documents": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "account_id": "string",

                -   "account_number": "string",

                -   "description": "string",

                -   "due_date": "2023-01-01",

                -   "document_date": "2023-01-01",

                -   "reason_code": "string",

                -   "invoice_id": "string",

                -   "transfer_to_accounting": true,

                -   "exclude_from_auto_apply_rules": true,

                -   "pay": true,

                -   "type": "credit_memo",

                -   "billing_document_number": "string",

                -   "amount_refunded": 0,

                -   "state_transitions": {

                    -   "posted_time": "string",

                    -   "canceled_time": "string"


                    },

                -   "posted_by_id": "string",

                -   "state": "draft",

                -   "account": { },

                -   "items": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "amount": null,

                            -   "subtotal": null,

                            -   "description": null,

                            -   "deferred_revenue_account": null,

                            -   "on_account_account": null,

                            -   "recognized_revenue_account": null,

                            -   "billing_document": null,

                            -   "billing_document_id": null,

                            -   "revenue_recognition_rule_name": null,

                            -   "quantity": null,

                            -   "service_end": null,

                            -   "accounts_receivable_account": null,

                            -   "discount_item": null,

                            -   "applied_to_item_id": null,

                            -   "service_start": null,

                            -   "accounting_code": null,

                            -   "sku": null,

                            -   "product_name": null,

                            -   "subscription_id": null,

                            -   "subscription": null,

                            -   "tax_inclusive": null,

                            -   "remaining_balance": null,

                            -   "unit_of_measure": null,

                            -   "unit_amount": null,

                            -   "booking_reference": null,

                            -   "price_description": null,

                            -   "name": null,

                            -   "price_id": null,

                            -   "purchase_order_number": null,

                            -   "tax": null,

                            -   "tax_code": null,

                            -   "subscription_item_id": null,

                            -   "subscription_item": null,

                            -   "invoice_item_id": null,

                            -   "document_item_date": null,

                            -   "taxation_items": null,

                            -   "type": null


                            }


                        ]


                    },

                -   "total": 0,

                -   "subtotal": 0,

                -   "tax": 0,

                -   "balance": 0,

                -   "remaining_balance": 0,

                -   "amount_paid": 0,

                -   "paid": true,

                -   "past_due": true


                }


            ]


        },

    -   "payments": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "description": "string",

                -   "reference_id": "string",

                -   "account_id": "string",

                -   "account_number": "string",

                -   "amount": 0,

                -   "authorization_id": "string",

                -   "payment_date": "2019-08-24",

                -   "payment_method_id": "string",

                -   "gateway_id": "string",

                -   "gateway_order_id": "string",

                -   "second_reference_id": "string",

                -   "gateway_options": {

                    -   "key": "value"


                    },

                -   "statement_descriptor": "string",

                -   "statement_descriptor_phone": "string",

                -   "external": true,

                -   "currency": "string",

                -   "account": { },

                -   "amount_applied": 0,

                -   "remaining_balance": 0,

                -   "amount_refunded": 0,

                -   "state": "draft",

                -   "payout_id": "string",

                -   "payment_number": "string",

                -   "gateway_response_code": "string",

                -   "payment_method": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "type": "paypal_express",

                    -   "custom_type": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                    -   "account": { },

                    -   "billing_details": {

                        -   "name": "Amy Lawrence",

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "country": null,

                            -   "state": null,

                            -   "postal_code": null


                            },

                        -   "email": "alawrence@gmail.com",

                        -   "phone": "(888)976-9056"


                        },

                    -   "maximum_payment_attempts": 6,

                    -   "payment_retry_interval": 3,

                    -   "device_session_id": "string",

                    -   "ip_address": "192.10.1.123",

                    -   "bank_identification_number": "string",

                    -   "card": {

                        -   "brand": "visa",

                        -   "expiry_month": 10,

                        -   "expiry_year": 2024,

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "last_4": "2042"


                        },

                    -   "paypal_express_native": {

                        -   "baid": "string",

                        -   "email": "string"


                        },

                    -   "paypal_express": {

                        -   "baid": "string",

                        -   "email": "string"


                        },

                    -   "paypal_adaptive": {

                        -   "preapproval_key": "2G4EPFSD",

                        -   "email": "alawrence@zuora.com"


                        },

                    -   "sepa_debit": {

                        -   "IBAN": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "business_identification_code": "string"


                        },

                    -   "cc_ref": {

                        -   "second_token": "string",

                        -   "token": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "card": {

                            -   "brand": null,

                            -   "expiry_month": null,

                            -   "expiry_year": null,

                            -   "last_4": null


                            }


                        },

                    -   "apple_pay": {

                        -   "card": {

                            -   "brand": null,

                            -   "expiry_month": null,

                            -   "expiry_year": null,

                            -   "mandate": { },

                            -   "last_4": null


                            },

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "payment_id": "string",

                        -   "token": "string"


                        },

                    -   "google_pay": {

                        -   "card": {

                            -   "brand": null,

                            -   "expiry_month": null,

                            -   "expiry_year": null,

                            -   "mandate": { },

                            -   "last_4": null


                            },

                        -   "token": "string"


                        },

                    -   "ach_debit": {

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "bank_aba_code": "string",

                        -   "bank_account_name": "string",

                        -   "bank_account_type": "business_saving",

                        -   "bank_name": "string",

                        -   "bank_account_number": "string"


                        },

                    -   "betalings_debit": {

                        -   "account_number": "string",

                        -   "identity_number": "string",

                        -   "bank_code": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            }


                        },

                    -   "autogiro_debit": {

                        -   "account_number": "string",

                        -   "identity_number": "string",

                        -   "branch_code": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            }


                        },

                    -   "bacs_debit": {

                        -   "account_number": "string",

                        -   "bank_code": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            }


                        },

                    -   "au_becs_debit": {

                        -   "account_number": "string",

                        -   "branch_code": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            }


                        },

                    -   "nz_becs_debit": {

                        -   "account_number": "string",

                        -   "branch_code": "string",

                        -   "bank_code": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            }


                        },

                    -   "pad_debit": {

                        -   "account_number": "string",

                        -   "branch_code": "string",

                        -   "bank_code": "string",

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            }


                        },

                    -   "state": "active",

                    -   "auto_generated": true,

                    -   "use_default_retry_rule": true,

                    -   "existing_mandate": true,

                    -   "last_failed_sale_transaction_time": "2019-08-24T14:15:22Z",

                    -   "last_transaction_time": "2019-08-24T14:15:22Z",

                    -   "last_transaction_status": "string",

                    -   "number_of_consecutive_failures": 0,

                    -   "total_number_of_processed_payments": 0,

                    -   "total_number_of_error_payments": 0


                    },

                -   "gateway_response": "string",

                -   "gateway_reconciliation_status": "string",

                -   "gateway_reconciliation_reason": "string",

                -   "gateway_state": "marked_for_submission",

                -   "applied_to": [

                    -   {

                        -   "billing_document_id": "string",

                        -   "id": "string",

                        -   "amount": 0,

                        -   "billing_document": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "account_id": null,

                            -   "account_number": null,

                            -   "description": null,

                            -   "due_date": null,

                            -   "document_date": null,

                            -   "reason_code": null,

                            -   "invoice_id": null,

                            -   "transfer_to_accounting": null,

                            -   "exclude_from_auto_apply_rules": null,

                            -   "pay": null,

                            -   "type": null,

                            -   "billing_document_number": null,

                            -   "amount_refunded": null,

                            -   "state_transitions": null,

                            -   "posted_by_id": null,

                            -   "state": null,

                            -   "account": null,

                            -   "items": null,

                            -   "total": null,

                            -   "subtotal": null,

                            -   "tax": null,

                            -   "balance": null,

                            -   "remaining_balance": null,

                            -   "amount_paid": null,

                            -   "paid": null,

                            -   "past_due": null


                            },

                        -   "billing_document_type": "debit_memo",

                        -   "state": "draft",

                        -   "items": [

                            -   null


                            ]


                        }


                    ],

                -   "payment_schedule_items": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "account_id": "8ad093f27d6eee80017d6effd7a66759",

                        -   "amount": 0,

                        -   "balance": 0,

                        -   "billing_document": {

                            -   "id": null,

                            -   "type": null


                            },

                        -   "cancellation_reason": "string",

                        -   "currency": "USD",

                        -   "description": "description of payment schedule item",

                        -   "payment_schedule_item_number": "string",

                        -   "payment_gateway_id": "8ad093f27d6eee80017d6effd7a66759",

                        -   "payment_method_id": "8a95b1946b6aeac8718c32aab8c395f",

                        -   "payment_option_id": "string",

                        -   "payment_schedule_id": "string",

                        -   "payment_schedule_number": "string",

                        -   "payments": [

                            -   null


                            ],

                        -   "run_hour": 23,

                        -   "scheduled_date": "2022-01-01",

                        -   "standalone": true,

                        -   "state": "pending",

                        -   "error_message": "string",

                        -   "payment": { },

                        -   "payment_schedule": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "account_id": null,

                            -   "account_number": null,

                            -   "amount": null,

                            -   "period": null,

                            -   "billing_document": null,

                            -   "currency": null,

                            -   "description": null,

                            -   "items": [ ],

                            -   "number_of_payments": null,

                            -   "payment_gateway_id": null,

                            -   "payment_method_id": null,

                            -   "payment_schedule_number": null,

                            -   "run_hour": null,

                            -   "standalone": null,

                            -   "start_date": null,

                            -   "total_amount": null,

                            -   "custom": null,

                            -   "next_payment_date": null,

                            -   "recent_payment_date": null,

                            -   "state": null,

                            -   "total_payments_errored": null,

                            -   "total_payments_processed": null,

                            -   "payment_options": [ ],

                            -   "prepayment": null


                            }


                        }


                    ],

                -   "state_transitions": {

                    -   "canceled_time": "2019-08-24T14:15:22Z"


                    },

                -   "gateway_state_transitions": {

                    -   "marked_for_submission_time": "2019-08-24T14:15:22Z",

                    -   "settled_time": "2019-08-24T14:15:22Z",

                    -   "submitted_time": "2019-08-24T14:15:22Z"


                    }


                }


            ]


        },

    -   "payment_methods": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "type": "paypal_express",

                -   "custom_type": "string",

                -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "account": { },

                -   "billing_details": {

                    -   "name": "Amy Lawrence",

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "country": "United States",

                        -   "state": "GA",

                        -   "postal_code": "30305"


                        },

                    -   "email": "alawrence@gmail.com",

                    -   "phone": "(888)976-9056"


                    },

                -   "maximum_payment_attempts": 6,

                -   "payment_retry_interval": 3,

                -   "device_session_id": "string",

                -   "ip_address": "192.10.1.123",

                -   "bank_identification_number": "string",

                -   "card": {

                    -   "brand": "visa",

                    -   "expiry_month": 10,

                    -   "expiry_year": 2024,

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        },

                    -   "last_4": "2042"


                    },

                -   "paypal_express_native": {

                    -   "baid": "string",

                    -   "email": "string"


                    },

                -   "paypal_express": {

                    -   "baid": "string",

                    -   "email": "string"


                    },

                -   "paypal_adaptive": {

                    -   "preapproval_key": "2G4EPFSD",

                    -   "email": "alawrence@zuora.com"


                    },

                -   "sepa_debit": {

                    -   "IBAN": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        },

                    -   "business_identification_code": "string"


                    },

                -   "cc_ref": {

                    -   "second_token": "string",

                    -   "token": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        },

                    -   "card": {

                        -   "brand": "visa",

                        -   "expiry_month": 10,

                        -   "expiry_year": 2024,

                        -   "last_4": "2042"


                        }


                    },

                -   "apple_pay": {

                    -   "card": {

                        -   "brand": "visa",

                        -   "expiry_month": 10,

                        -   "expiry_year": 2024,

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "last_4": "2042"


                        },

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        },

                    -   "payment_id": "string",

                    -   "token": "string"


                    },

                -   "google_pay": {

                    -   "card": {

                        -   "brand": "visa",

                        -   "expiry_month": 10,

                        -   "expiry_year": 2024,

                        -   "mandate": {

                            -   "id": null,

                            -   "reason": null,

                            -   "state": null


                            },

                        -   "last_4": "2042"


                        },

                    -   "token": "string"


                    },

                -   "ach_debit": {

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        },

                    -   "bank_aba_code": "string",

                    -   "bank_account_name": "string",

                    -   "bank_account_type": "business_saving",

                    -   "bank_name": "string",

                    -   "bank_account_number": "string"


                    },

                -   "betalings_debit": {

                    -   "account_number": "string",

                    -   "identity_number": "string",

                    -   "bank_code": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        }


                    },

                -   "autogiro_debit": {

                    -   "account_number": "string",

                    -   "identity_number": "string",

                    -   "branch_code": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        }


                    },

                -   "bacs_debit": {

                    -   "account_number": "string",

                    -   "bank_code": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        }


                    },

                -   "au_becs_debit": {

                    -   "account_number": "string",

                    -   "branch_code": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        }


                    },

                -   "nz_becs_debit": {

                    -   "account_number": "string",

                    -   "branch_code": "string",

                    -   "bank_code": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        }


                    },

                -   "pad_debit": {

                    -   "account_number": "string",

                    -   "branch_code": "string",

                    -   "bank_code": "string",

                    -   "mandate": {

                        -   "id": "string",

                        -   "reason": "string",

                        -   "state": "active"


                        }


                    },

                -   "state": "active",

                -   "auto_generated": true,

                -   "use_default_retry_rule": true,

                -   "existing_mandate": true,

                -   "last_failed_sale_transaction_time": "2019-08-24T14:15:22Z",

                -   "last_transaction_time": "2019-08-24T14:15:22Z",

                -   "last_transaction_status": "string",

                -   "number_of_consecutive_failures": 0,

                -   "total_number_of_processed_payments": 0,

                -   "total_number_of_error_payments": 0


                }


            ]


        },

    -   "subscriptions": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "subscription_number": "string",

                -   "state": "draft",

                -   "version": 0,

                -   "account_id": "string",

                -   "account": { },

                -   "invoice_owner_account_id": "string",

                -   "invoice_owner_account": { },

                -   "auto_renew": true,

                -   "latest_version": true,

                -   "initial_term": {

                    -   "interval_count": 1,

                    -   "interval": "day",

                    -   "start_date": "2020-01-01",

                    -   "type": "evergreen",

                    -   "end_date": "2023-01-01"


                    },

                -   "current_term": {

                    -   "interval_count": 1,

                    -   "interval": "day",

                    -   "start_date": "2020-01-01",

                    -   "type": "evergreen",

                    -   "end_date": "2023-01-01"


                    },

                -   "renewal_term": {

                    -   "interval_count": 1,

                    -   "interval": "day",

                    -   "start_date": "2020-01-01",

                    -   "type": "evergreen",

                    -   "end_date": "2023-01-01"


                    },

                -   "start_date": "2020-01-01",

                -   "end_date": "2023-01-01",

                -   "description": "string",

                -   "contract_effective": "2023-01-01",

                -   "service_activation": "2023-01-01",

                -   "customer_acceptance": "2023-01-01",

                -   "invoice_separately": true,

                -   "order_number": "string",

                -   "subscription_plans": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "subscription": null,

                            -   "subscription_id": null,

                            -   "product_id": null,

                            -   "plan_id": null,

                            -   "plan": null,

                            -   "product": null,

                            -   "name": null,

                            -   "subscription_items": null,

                            -   "subscription_plan_number": null


                            }


                        ]


                    },

                -   "invoice_items": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "amount": null,

                            -   "description": null,

                            -   "deferred_revenue_account": null,

                            -   "recognized_revenue_account": null,

                            -   "revenue_recognition_rule_name": null,

                            -   "quantity": null,

                            -   "service_end": null,

                            -   "accounts_receivable_account": null,

                            -   "discount_item": null,

                            -   "applied_to_item_id": null,

                            -   "service_start": null,

                            -   "accounting_code": null,

                            -   "invoice_id": null,

                            -   "sku": null,

                            -   "subscription_id": null,

                            -   "tax_inclusive": null,

                            -   "remaining_balance": null,

                            -   "unit_of_measure": null,

                            -   "unit_amount": null,

                            -   "booking_reference": null,

                            -   "name": null,

                            -   "document_item_date": null,

                            -   "price_id": null,

                            -   "purchase_order_number": null,

                            -   "tax": null,

                            -   "tax_code": null,

                            -   "subscription_item_id": null,

                            -   "taxation_items": { },

                            -   "invoice": null,

                            -   "line_item": null,

                            -   "subscription": null,

                            -   "subscription_item": null


                            }


                        ]


                    },

                -   "prepaid_balance": [

                    -   {

                        -   "prepaid_UOM": "string",

                        -   "start_date": "2022-01-01",

                        -   "end_date": "2023-01-01",

                        -   "total_balance": 0,

                        -   "remaining_balance": 0,

                        -   "transactions": [

                            -   null


                            ]


                        }


                    ],

                -   "prepaid_balances": [

                    -   {

                        -   "validity_periods": [

                            -   null


                            ]


                        }


                    ],

                -   "contracted_mrr": "string",

                -   "currency": "string",

                -   "cancel_reason": "string",

                -   "last_booking_date": "2023-01-01",

                -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "payment_terms": "string",

                -   "bill_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    },

                -   "billing_document_settings": {

                    -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

                    -   "sequence_set_id": "string"


                    },

                -   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "sold_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    }


                }


            ]


        },

    -   "usage_records": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "account_number": "A-100001",

                -   "account_id": "string",

                -   "subscription_item_id": "string",

                -   "subscription_item_number": "string",

                -   "description": "description of test account",

                -   "end_time": "2019-08-24T14:15:22Z",

                -   "quantity": 0,

                -   "start_time": "2019-08-24T14:15:22Z",

                -   "subscription_id": "string",

                -   "subscription_number": "string",

                -   "unit_of_measure": "string",

                -   "state": "pending",

                -   "account": { },

                -   "subscription_item": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "subscription_item_number": "string",

                    -   "name": "string",

                    -   "description": "string",

                    -   "product_id": "string",

                    -   "charged_through_date": "2019-08-24",

                    -   "recurring": {

                        -   "recurring_on": "_1",

                        -   "on": "_1",

                        -   "usage": true,

                        -   "interval": "month",

                        -   "interval_count": 0,

                        -   "alignment_behavior": "subscription_start",

                        -   "timing": "in_advance",

                        -   "formula": "string",

                        -   "duration_interval": "day",

                        -   "duration_interval_count": 0,

                        -   "rating_group": "billing_period"


                        },

                    -   "active": true,

                    -   "state": "inactive",

                    -   "start_event": "contract_effective",

                    -   "tiers_mode": "graduated",

                    -   "tiers": [

                        -   {

                            -   "up_to": null,

                            -   "amount": null,

                            -   "unit_amount": null


                            }


                        ],

                    -   "tax_code": "string",

                    -   "tax_inclusive": true,

                    -   "unit_of_measure": "string",

                    -   "quantity": 0,

                    -   "amount": 0,

                    -   "unit_amount": 0,

                    -   "discount_amount": 0,

                    -   "discount_percent": 0,

                    -   "apply_discount_to": [

                        -   "one_time"


                        ],

                    -   "discount_level": "account",

                    -   "price_base_interval": "month",

                    -   "overage": {

                        -   "interval_count": 0,

                        -   "type": "rolling_window",

                        -   "included_units": 0,

                        -   "credit_unused_units": true,

                        -   "apply_at_end_of_smoothing_period": true


                        },

                    -   "charge_model": "string",

                    -   "charge_type": "string",

                    -   "price_id": "string",

                    -   "price": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "name": "string",

                        -   "description": "string",

                        -   "recognized_revenue_accounting_code": "string",

                        -   "deferred_revenue_accounting_code": "string",

                        -   "recurring": {

                            -   "recurring_on": null,

                            -   "on": null,

                            -   "usage": null,

                            -   "interval": null,

                            -   "interval_count": null,

                            -   "alignment_behavior": null,

                            -   "timing": null,

                            -   "formula": null,

                            -   "duration_interval": null,

                            -   "duration_interval_count": null,

                            -   "rating_group": null


                            },

                        -   "start_event": "contract_effective",

                        -   "tiers_mode": "graduated",

                        -   "apply_discount_to": [

                            -   null


                            ],

                        -   "tiers": [

                            -   null


                            ],

                        -   "tax_code": "string",

                        -   "tax_inclusive": true,

                        -   "unit_of_measure": "string",

                        -   "quantity": 0,

                        -   "min_quantity": 0,

                        -   "max_quantity": 0,

                        -   "discount_level": "account",

                        -   "revenue_recognition_rule": "string",

                        -   "stacked_discount": true,

                        -   "amounts": {

                            -   "USD": 10,

                            -   "GBP": 15


                            },

                        -   "unit_amounts": {

                            -   "USD": 10,

                            -   "GBP": 15


                            },

                        -   "discount_amounts": {

                            -   "USD": 10,

                            -   "GBP": 15


                            },

                        -   "discount_percent": 0,

                        -   "price_base_interval": "month",

                        -   "overage": {

                            -   "interval_count": null,

                            -   "type": null,

                            -   "included_units": null,

                            -   "credit_unused_units": null,

                            -   "apply_at_end_of_smoothing_period": null


                            },

                        -   "revenue": {

                            -   "exclude_item_billing_from_revenue_accounting": null,

                            -   "exclude_item_booking_from_revenue_accounting": null


                            },

                        -   "accounting_code": "string",

                        -   "prepayment": {

                            -   "credit_option": null,

                            -   "quantity": null,

                            -   "total_quantity": null,

                            -   "unit_of_measure": null,

                            -   "validity_period": null


                            },

                        -   "drawdown": {

                            -   "conversion_rate": null,

                            -   "unit_of_measure": null


                            },

                        -   "taxable": true,

                        -   "price_change_percentage": 0,

                        -   "price_change_option": "latest_catalog_pricing",

                        -   "price_increase_option": true,

                        -   "plan_id": "string",

                        -   "plan_number": "string",

                        -   "active": true,

                        -   "charge_type": "string",

                        -   "charge_model": "string"


                        },

                    -   "subscription_plan_id": "string",

                    -   "subscription_plan": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "subscription": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "subscription_number": null,

                            -   "state": null,

                            -   "version": null,

                            -   "account_id": null,

                            -   "account": null,

                            -   "invoice_owner_account_id": null,

                            -   "invoice_owner_account": null,

                            -   "auto_renew": null,

                            -   "latest_version": null,

                            -   "initial_term": null,

                            -   "current_term": null,

                            -   "renewal_term": null,

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "description": null,

                            -   "contract_effective": null,

                            -   "service_activation": null,

                            -   "customer_acceptance": null,

                            -   "invoice_separately": null,

                            -   "order_number": null,

                            -   "subscription_plans": null,

                            -   "invoice_items": null,

                            -   "prepaid_balance": [ ],

                            -   "prepaid_balances": [ ],

                            -   "contracted_mrr": null,

                            -   "currency": null,

                            -   "cancel_reason": null,

                            -   "last_booking_date": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null,

                            -   "sold_to_id": null,

                            -   "sold_to": null


                            },

                        -   "subscription_id": "string",

                        -   "product_id": "string",

                        -   "plan_id": "string",

                        -   "plan": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "name": null,

                            -   "plan_number": null,

                            -   "description": null,

                            -   "active_currencies": [ ],

                            -   "product_id": null,

                            -   "active": null,

                            -   "product": null,

                            -   "sku": null,

                            -   "prices": null


                            },

                        -   "product": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "name": null,

                            -   "type": null,

                            -   "sku": null,

                            -   "description": null,

                            -   "active": null,

                            -   "plans": null


                            },

                        -   "name": "string",

                        -   "subscription_items": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "subscription_plan_number": "string"


                        },

                    -   "start_date": "2019-08-24",

                    -   "end_date": "2019-08-24",

                    -   "processed_through_date": "2019-08-24"


                    },

                -   "subscription": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "subscription_number": "string",

                    -   "state": "draft",

                    -   "version": 0,

                    -   "account_id": "string",

                    -   "account": { },

                    -   "invoice_owner_account_id": "string",

                    -   "invoice_owner_account": { },

                    -   "auto_renew": true,

                    -   "latest_version": true,

                    -   "initial_term": {

                        -   "interval_count": 1,

                        -   "interval": "day",

                        -   "start_date": "2020-01-01",

                        -   "type": "evergreen",

                        -   "end_date": "2023-01-01"


                        },

                    -   "current_term": {

                        -   "interval_count": 1,

                        -   "interval": "day",

                        -   "start_date": "2020-01-01",

                        -   "type": "evergreen",

                        -   "end_date": "2023-01-01"


                        },

                    -   "renewal_term": {

                        -   "interval_count": 1,

                        -   "interval": "day",

                        -   "start_date": "2020-01-01",

                        -   "type": "evergreen",

                        -   "end_date": "2023-01-01"


                        },

                    -   "start_date": "2020-01-01",

                    -   "end_date": "2023-01-01",

                    -   "description": "string",

                    -   "contract_effective": "2023-01-01",

                    -   "service_activation": "2023-01-01",

                    -   "customer_acceptance": "2023-01-01",

                    -   "invoice_separately": true,

                    -   "order_number": "string",

                    -   "subscription_plans": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "invoice_items": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "prepaid_balance": [

                        -   {

                            -   "prepaid_UOM": null,

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "total_balance": null,

                            -   "remaining_balance": null,

                            -   "transactions": [ ]


                            }


                        ],

                    -   "prepaid_balances": [

                        -   {

                            -   "validity_periods": [ ]


                            }


                        ],

                    -   "contracted_mrr": "string",

                    -   "currency": "string",

                    -   "cancel_reason": "string",

                    -   "last_booking_date": "2023-01-01",

                    -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                    -   "payment_terms": "string",

                    -   "bill_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "billing_document_settings": {

                        -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

                        -   "sequence_set_id": "string"


                        },

                    -   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                    -   "sold_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        }


                    }


                }


            ]


        },

    -   "credit_memos": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "account_id": "string",

                -   "description": "string",

                -   "document_date": "2023-01-01",

                -   "reason_code": "string",

                -   "invoice_id": "string",

                -   "transfer_to_accounting": true,

                -   "exclude_from_auto_apply_rules": true,

                -   "currency": "string",

                -   "credit_memo_number": "string",

                -   "amount_refunded": 0,

                -   "state_transitions": {

                    -   "posted_time": "string",

                    -   "canceled_time": "string"


                    },

                -   "posted_by_id": "string",

                -   "state": "draft",

                -   "account": { },

                -   "items": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "amount": null,

                            -   "subtotal": null,

                            -   "description": null,

                            -   "deferred_revenue_account": null,

                            -   "on_account_account": null,

                            -   "recognized_revenue_account": null,

                            -   "credit_memo": null,

                            -   "credit_memo_id": null,

                            -   "revenue_recognition_rule_name": null,

                            -   "quantity": null,

                            -   "service_end": null,

                            -   "service_start": null,

                            -   "accounts_receivable_account": null,

                            -   "discount_item": null,

                            -   "applied_to_item_id": null,

                            -   "accounting_code": null,

                            -   "sku": null,

                            -   "tax_inclusive": null,

                            -   "remaining_balance": null,

                            -   "unit_of_measure": null,

                            -   "unit_amount": null,

                            -   "name": null,

                            -   "price_id": null,

                            -   "purchase_order_number": null,

                            -   "tax": null,

                            -   "tax_code": null,

                            -   "subscription_id": null,

                            -   "subscription_item_id": null,

                            -   "invoice_item_id": null,

                            -   "document_item_date": null,

                            -   "taxation_items": { },

                            -   "subscription": null,

                            -   "subscription_item": null


                            }


                        ]


                    },

                -   "total": 0,

                -   "subtotal": 0,

                -   "tax": 0,

                -   "balance": 0,

                -   "remaining_balance": 0,

                -   "applied_to": [

                    -   {

                        -   "billing_document_id": "string",

                        -   "id": "string",

                        -   "amount": 0,

                        -   "billing_document": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "account_id": null,

                            -   "account_number": null,

                            -   "description": null,

                            -   "due_date": null,

                            -   "document_date": null,

                            -   "reason_code": null,

                            -   "invoice_id": null,

                            -   "transfer_to_accounting": null,

                            -   "exclude_from_auto_apply_rules": null,

                            -   "pay": null,

                            -   "type": null,

                            -   "billing_document_number": null,

                            -   "amount_refunded": null,

                            -   "state_transitions": null,

                            -   "posted_by_id": null,

                            -   "state": null,

                            -   "account": null,

                            -   "items": null,

                            -   "total": null,

                            -   "subtotal": null,

                            -   "tax": null,

                            -   "balance": null,

                            -   "remaining_balance": null,

                            -   "amount_paid": null,

                            -   "paid": null,

                            -   "past_due": null


                            },

                        -   "billing_document_type": "debit_memo"


                        }


                    ],

                -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "bill_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    },

                -   "billing_document_settings": {

                    -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

                    -   "sequence_set_id": "string"


                    }


                }


            ]


        },

    -   "debit_memos": {

        -   "next_page": "string",

        -   "data": [

            -   { }


            ]


        },

    -   "invoices": {

        -   "next_page": "string",

        -   "data": [

            -   {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "account_id": "string",

                -   "description": "string",

                -   "due_date": "2023-01-01",

                -   "document_date": "2023-01-01",

                -   "transfer_to_accounting": true,

                -   "amount_paid": 1496.4,

                -   "pay": true,

                -   "currency": "string",

                -   "invoice_number": "string",

                -   "state_transitions": {

                    -   "posted_time": "string",

                    -   "canceled_time": "string"


                    },

                -   "posted_by_id": "string",

                -   "state": "draft",

                -   "account": { },

                -   "items": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "amount": null,

                            -   "description": null,

                            -   "deferred_revenue_account": null,

                            -   "recognized_revenue_account": null,

                            -   "revenue_recognition_rule_name": null,

                            -   "quantity": null,

                            -   "service_end": null,

                            -   "accounts_receivable_account": null,

                            -   "discount_item": null,

                            -   "applied_to_item_id": null,

                            -   "service_start": null,

                            -   "accounting_code": null,

                            -   "invoice_id": null,

                            -   "sku": null,

                            -   "subscription_id": null,

                            -   "tax_inclusive": null,

                            -   "remaining_balance": null,

                            -   "unit_of_measure": null,

                            -   "unit_amount": null,

                            -   "booking_reference": null,

                            -   "name": null,

                            -   "document_item_date": null,

                            -   "price_id": null,

                            -   "purchase_order_number": null,

                            -   "tax": null,

                            -   "tax_code": null,

                            -   "subscription_item_id": null,

                            -   "taxation_items": { },

                            -   "invoice": null,

                            -   "line_item": null,

                            -   "subscription": null,

                            -   "subscription_item": null


                            }


                        ]


                    },

                -   "total": 0,

                -   "subtotal": 0,

                -   "tax": 0,

                -   "balance": 0,

                -   "remaining_balance": 0,

                -   "paid": true,

                -   "past_due": true,

                -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "payment_terms": "string",

                -   "bill_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    },

                -   "billing_document_settings": {

                    -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

                    -   "sequence_set_id": "string"


                    },

                -   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "sold_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    }


                }


            ]


        }


    },

-   "items": {

    -   "next_page": "string",

    -   "data": [

        -   {

            -   "id": "string",

            -   "updated_by_id": "string",

            -   "updated_time": "2019-08-24T14:15:22Z",

            -   "created_by_id": "string",

            -   "created_time": "2019-08-24T14:15:22Z",

            -   "custom_fields": {

                -   "property1": "string",

                -   "property2": "string"


                },

            -   "custom_objects": {

                -   "property1": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "type": null


                            }


                        ]


                    },

                -   "property2": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "type": null


                            }


                        ]


                    }


                },

            -   "amount": 0,

            -   "subtotal": 0,

            -   "description": "string",

            -   "deferred_revenue_account": "string",

            -   "on_account_account": "string",

            -   "recognized_revenue_account": "string",

            -   "billing_document": {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "account_id": "string",

                -   "account_number": "string",

                -   "description": "string",

                -   "due_date": "2023-01-01",

                -   "document_date": "2023-01-01",

                -   "reason_code": "string",

                -   "invoice_id": "string",

                -   "transfer_to_accounting": true,

                -   "exclude_from_auto_apply_rules": true,

                -   "pay": true,

                -   "type": "credit_memo",

                -   "billing_document_number": "string",

                -   "amount_refunded": 0,

                -   "state_transitions": {

                    -   "posted_time": "string",

                    -   "canceled_time": "string"


                    },

                -   "posted_by_id": "string",

                -   "state": "draft",

                -   "account": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "account_number": "A-100001",

                    -   "billing_document_settings": {

                        -   "credit_memo_template_id": "2c92c08b6a8c978f016a9e0084622b62",

                        -   "debit_memo_template_id": "2c92c08c6a8c7e08016a9ec8d72f3ab5",

                        -   "email_documents": "alawrence@zuora.com",

                        -   "print_documents": false,

                        -   "invoice_template_id": "8f64d4d754739d85d0346e00ef77e50d",

                        -   "additional_email": "jdoe@zuora.com"


                        },

                    -   "batch": "string",

                    -   "bill_cycle_day": 31,

                    -   "bill_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "sold_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "communication_profile_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "crm_id": "1a2b3c4d5e",

                    -   "default_payment_method_id": "8a95b1946b6aeac8718c32aab8c395f",

                    -   "name": "test account",

                    -   "description": "description of test account",

                    -   "parent_account_id": "8ad093f27d6eee80017d6effd7a66759",

                    -   "payment_gateway": "adyen gateway",

                    -   "payment_terms": "Net 30",

                    -   "sequence_set_id": "2c92a4204a6dffc0016a7faab723041c",

                    -   "auto_pay": true,

                    -   "tax_certificate": {

                        -   "company_code": "ABC",

                        -   "id": "string",

                        -   "start_date": "2022-01-01",

                        -   "description": "string",

                        -   "entity_use_code": "string",

                        -   "end_date": "2023-01-01",

                        -   "issuing_jurisdiction": "Georgia",

                        -   "state": "pending",

                        -   "tax_identifier": "DE123456789"


                        },

                    -   "tax_identifier": {

                        -   "id": "string"


                        },

                    -   "currency": "USD",

                    -   "sales_rep": "Max",

                    -   "enabled": true,

                    -   "remaining_debit_memo_balance": 10,

                    -   "remaining_invoice_balance": 100,

                    -   "remaining_credit_memo_balance": 50,

                    -   "remaining_payment_balance": 20,

                    -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                    -   "sold_to_id": "8ad0823f8040e52d0180433026b156fe",

                    -   "default_payment_method": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "paypal_express",

                        -   "custom_type": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                        -   "account": { },

                        -   "billing_details": {

                            -   "name": null,

                            -   "address": { },

                            -   "email": null,

                            -   "phone": null


                            },

                        -   "maximum_payment_attempts": 6,

                        -   "payment_retry_interval": 3,

                        -   "device_session_id": "string",

                        -   "ip_address": "192.10.1.123",

                        -   "bank_identification_number": "string",

                        -   "card": {

                            -   "brand": null,

                            -   "expiry_month": null,

                            -   "expiry_year": null,

                            -   "mandate": { },

                            -   "last_4": null


                            },

                        -   "paypal_express_native": {

                            -   "baid": null,

                            -   "email": null


                            },

                        -   "paypal_express": {

                            -   "baid": null,

                            -   "email": null


                            },

                        -   "paypal_adaptive": {

                            -   "preapproval_key": null,

                            -   "email": null


                            },

                        -   "sepa_debit": {

                            -   "IBAN": null,

                            -   "mandate": { },

                            -   "business_identification_code": null


                            },

                        -   "cc_ref": {

                            -   "second_token": null,

                            -   "token": null,

                            -   "mandate": { },

                            -   "card": { }


                            },

                        -   "apple_pay": {

                            -   "card": null,

                            -   "mandate": { },

                            -   "payment_id": null,

                            -   "token": null


                            },

                        -   "google_pay": {

                            -   "card": null,

                            -   "token": null


                            },

                        -   "ach_debit": {

                            -   "mandate": { },

                            -   "bank_aba_code": null,

                            -   "bank_account_name": null,

                            -   "bank_account_type": null,

                            -   "bank_name": null,

                            -   "bank_account_number": null


                            },

                        -   "betalings_debit": {

                            -   "account_number": null,

                            -   "identity_number": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "autogiro_debit": {

                            -   "account_number": null,

                            -   "identity_number": null,

                            -   "branch_code": null,

                            -   "mandate": { }


                            },

                        -   "bacs_debit": {

                            -   "account_number": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "au_becs_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "mandate": { }


                            },

                        -   "nz_becs_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "pad_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "state": "active",

                        -   "auto_generated": true,

                        -   "use_default_retry_rule": true,

                        -   "existing_mandate": true,

                        -   "last_failed_sale_transaction_time": "2019-08-24T14:15:22Z",

                        -   "last_transaction_time": "2019-08-24T14:15:22Z",

                        -   "last_transaction_status": "string",

                        -   "number_of_consecutive_failures": 0,

                        -   "total_number_of_processed_payments": 0,

                        -   "total_number_of_error_payments": 0


                        },

                    -   "billing_documents": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "payments": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "payment_methods": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "subscriptions": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "usage_records": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "credit_memos": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "debit_memos": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "invoices": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "items": { },

                -   "total": 0,

                -   "subtotal": 0,

                -   "tax": 0,

                -   "balance": 0,

                -   "remaining_balance": 0,

                -   "amount_paid": 0,

                -   "paid": true,

                -   "past_due": true


                },

            -   "billing_document_id": "string",

            -   "revenue_recognition_rule_name": "string",

            -   "quantity": 0,

            -   "service_end": "string",

            -   "accounts_receivable_account": "string",

            -   "discount_item": true,

            -   "applied_to_item_id": "string",

            -   "service_start": "string",

            -   "accounting_code": "string",

            -   "sku": "string",

            -   "product_name": "string",

            -   "subscription_id": "string",

            -   "subscription": {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "subscription_number": "string",

                -   "state": "draft",

                -   "version": 0,

                -   "account_id": "string",

                -   "account": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "account_number": "A-100001",

                    -   "billing_document_settings": {

                        -   "credit_memo_template_id": "2c92c08b6a8c978f016a9e0084622b62",

                        -   "debit_memo_template_id": "2c92c08c6a8c7e08016a9ec8d72f3ab5",

                        -   "email_documents": "alawrence@zuora.com",

                        -   "print_documents": false,

                        -   "invoice_template_id": "8f64d4d754739d85d0346e00ef77e50d",

                        -   "additional_email": "jdoe@zuora.com"


                        },

                    -   "batch": "string",

                    -   "bill_cycle_day": 31,

                    -   "bill_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "sold_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "communication_profile_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "crm_id": "1a2b3c4d5e",

                    -   "default_payment_method_id": "8a95b1946b6aeac8718c32aab8c395f",

                    -   "name": "test account",

                    -   "description": "description of test account",

                    -   "parent_account_id": "8ad093f27d6eee80017d6effd7a66759",

                    -   "payment_gateway": "adyen gateway",

                    -   "payment_terms": "Net 30",

                    -   "sequence_set_id": "2c92a4204a6dffc0016a7faab723041c",

                    -   "auto_pay": true,

                    -   "tax_certificate": {

                        -   "company_code": "ABC",

                        -   "id": "string",

                        -   "start_date": "2022-01-01",

                        -   "description": "string",

                        -   "entity_use_code": "string",

                        -   "end_date": "2023-01-01",

                        -   "issuing_jurisdiction": "Georgia",

                        -   "state": "pending",

                        -   "tax_identifier": "DE123456789"


                        },

                    -   "tax_identifier": {

                        -   "id": "string"


                        },

                    -   "currency": "USD",

                    -   "sales_rep": "Max",

                    -   "enabled": true,

                    -   "remaining_debit_memo_balance": 10,

                    -   "remaining_invoice_balance": 100,

                    -   "remaining_credit_memo_balance": 50,

                    -   "remaining_payment_balance": 20,

                    -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                    -   "sold_to_id": "8ad0823f8040e52d0180433026b156fe",

                    -   "default_payment_method": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "paypal_express",

                        -   "custom_type": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                        -   "account": { },

                        -   "billing_details": {

                            -   "name": null,

                            -   "address": { },

                            -   "email": null,

                            -   "phone": null


                            },

                        -   "maximum_payment_attempts": 6,

                        -   "payment_retry_interval": 3,

                        -   "device_session_id": "string",

                        -   "ip_address": "192.10.1.123",

                        -   "bank_identification_number": "string",

                        -   "card": {

                            -   "brand": null,

                            -   "expiry_month": null,

                            -   "expiry_year": null,

                            -   "mandate": { },

                            -   "last_4": null


                            },

                        -   "paypal_express_native": {

                            -   "baid": null,

                            -   "email": null


                            },

                        -   "paypal_express": {

                            -   "baid": null,

                            -   "email": null


                            },

                        -   "paypal_adaptive": {

                            -   "preapproval_key": null,

                            -   "email": null


                            },

                        -   "sepa_debit": {

                            -   "IBAN": null,

                            -   "mandate": { },

                            -   "business_identification_code": null


                            },

                        -   "cc_ref": {

                            -   "second_token": null,

                            -   "token": null,

                            -   "mandate": { },

                            -   "card": { }


                            },

                        -   "apple_pay": {

                            -   "card": null,

                            -   "mandate": { },

                            -   "payment_id": null,

                            -   "token": null


                            },

                        -   "google_pay": {

                            -   "card": null,

                            -   "token": null


                            },

                        -   "ach_debit": {

                            -   "mandate": { },

                            -   "bank_aba_code": null,

                            -   "bank_account_name": null,

                            -   "bank_account_type": null,

                            -   "bank_name": null,

                            -   "bank_account_number": null


                            },

                        -   "betalings_debit": {

                            -   "account_number": null,

                            -   "identity_number": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "autogiro_debit": {

                            -   "account_number": null,

                            -   "identity_number": null,

                            -   "branch_code": null,

                            -   "mandate": { }


                            },

                        -   "bacs_debit": {

                            -   "account_number": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "au_becs_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "mandate": { }


                            },

                        -   "nz_becs_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "pad_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "state": "active",

                        -   "auto_generated": true,

                        -   "use_default_retry_rule": true,

                        -   "existing_mandate": true,

                        -   "last_failed_sale_transaction_time": "2019-08-24T14:15:22Z",

                        -   "last_transaction_time": "2019-08-24T14:15:22Z",

                        -   "last_transaction_status": "string",

                        -   "number_of_consecutive_failures": 0,

                        -   "total_number_of_processed_payments": 0,

                        -   "total_number_of_error_payments": 0


                        },

                    -   "billing_documents": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "payments": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "payment_methods": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "subscriptions": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "usage_records": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "credit_memos": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "debit_memos": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "invoices": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "invoice_owner_account_id": "string",

                -   "invoice_owner_account": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "account_number": "A-100001",

                    -   "billing_document_settings": {

                        -   "credit_memo_template_id": "2c92c08b6a8c978f016a9e0084622b62",

                        -   "debit_memo_template_id": "2c92c08c6a8c7e08016a9ec8d72f3ab5",

                        -   "email_documents": "alawrence@zuora.com",

                        -   "print_documents": false,

                        -   "invoice_template_id": "8f64d4d754739d85d0346e00ef77e50d",

                        -   "additional_email": "jdoe@zuora.com"


                        },

                    -   "batch": "string",

                    -   "bill_cycle_day": 31,

                    -   "bill_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "sold_to": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "address": {

                            -   "line1": null,

                            -   "line2": null,

                            -   "city": null,

                            -   "state": null,

                            -   "country": null,

                            -   "county": null,

                            -   "postal_code": null


                            },

                        -   "first_name": "Amy",

                        -   "home_phone": "(888)976-9056",

                        -   "last_name": "Lawrence",

                        -   "mobile_phone": "(888)101-0011",

                        -   "nickname": "Ami",

                        -   "other_phone": "(888)100-0001",

                        -   "email": "alawrence@gmail.com",

                        -   "tax_region": "Georgia",

                        -   "work_email": "alawrence@zuora.com",

                        -   "work_phone": "(888)976-9056",

                        -   "other_phone_type": "work",

                        -   "fax": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                        },

                    -   "communication_profile_id": "2c92c0946a6dffc0016a7faab604299b",

                    -   "crm_id": "1a2b3c4d5e",

                    -   "default_payment_method_id": "8a95b1946b6aeac8718c32aab8c395f",

                    -   "name": "test account",

                    -   "description": "description of test account",

                    -   "parent_account_id": "8ad093f27d6eee80017d6effd7a66759",

                    -   "payment_gateway": "adyen gateway",

                    -   "payment_terms": "Net 30",

                    -   "sequence_set_id": "2c92a4204a6dffc0016a7faab723041c",

                    -   "auto_pay": true,

                    -   "tax_certificate": {

                        -   "company_code": "ABC",

                        -   "id": "string",

                        -   "start_date": "2022-01-01",

                        -   "description": "string",

                        -   "entity_use_code": "string",

                        -   "end_date": "2023-01-01",

                        -   "issuing_jurisdiction": "Georgia",

                        -   "state": "pending",

                        -   "tax_identifier": "DE123456789"


                        },

                    -   "tax_identifier": {

                        -   "id": "string"


                        },

                    -   "currency": "USD",

                    -   "sales_rep": "Max",

                    -   "enabled": true,

                    -   "remaining_debit_memo_balance": 10,

                    -   "remaining_invoice_balance": 100,

                    -   "remaining_credit_memo_balance": 50,

                    -   "remaining_payment_balance": 20,

                    -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                    -   "sold_to_id": "8ad0823f8040e52d0180433026b156fe",

                    -   "default_payment_method": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "type": "paypal_express",

                        -   "custom_type": "string",

                        -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                        -   "account": { },

                        -   "billing_details": {

                            -   "name": null,

                            -   "address": { },

                            -   "email": null,

                            -   "phone": null


                            },

                        -   "maximum_payment_attempts": 6,

                        -   "payment_retry_interval": 3,

                        -   "device_session_id": "string",

                        -   "ip_address": "192.10.1.123",

                        -   "bank_identification_number": "string",

                        -   "card": {

                            -   "brand": null,

                            -   "expiry_month": null,

                            -   "expiry_year": null,

                            -   "mandate": { },

                            -   "last_4": null


                            },

                        -   "paypal_express_native": {

                            -   "baid": null,

                            -   "email": null


                            },

                        -   "paypal_express": {

                            -   "baid": null,

                            -   "email": null


                            },

                        -   "paypal_adaptive": {

                            -   "preapproval_key": null,

                            -   "email": null


                            },

                        -   "sepa_debit": {

                            -   "IBAN": null,

                            -   "mandate": { },

                            -   "business_identification_code": null


                            },

                        -   "cc_ref": {

                            -   "second_token": null,

                            -   "token": null,

                            -   "mandate": { },

                            -   "card": { }


                            },

                        -   "apple_pay": {

                            -   "card": null,

                            -   "mandate": { },

                            -   "payment_id": null,

                            -   "token": null


                            },

                        -   "google_pay": {

                            -   "card": null,

                            -   "token": null


                            },

                        -   "ach_debit": {

                            -   "mandate": { },

                            -   "bank_aba_code": null,

                            -   "bank_account_name": null,

                            -   "bank_account_type": null,

                            -   "bank_name": null,

                            -   "bank_account_number": null


                            },

                        -   "betalings_debit": {

                            -   "account_number": null,

                            -   "identity_number": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "autogiro_debit": {

                            -   "account_number": null,

                            -   "identity_number": null,

                            -   "branch_code": null,

                            -   "mandate": { }


                            },

                        -   "bacs_debit": {

                            -   "account_number": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "au_becs_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "mandate": { }


                            },

                        -   "nz_becs_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "pad_debit": {

                            -   "account_number": null,

                            -   "branch_code": null,

                            -   "bank_code": null,

                            -   "mandate": { }


                            },

                        -   "state": "active",

                        -   "auto_generated": true,

                        -   "use_default_retry_rule": true,

                        -   "existing_mandate": true,

                        -   "last_failed_sale_transaction_time": "2019-08-24T14:15:22Z",

                        -   "last_transaction_time": "2019-08-24T14:15:22Z",

                        -   "last_transaction_status": "string",

                        -   "number_of_consecutive_failures": 0,

                        -   "total_number_of_processed_payments": 0,

                        -   "total_number_of_error_payments": 0


                        },

                    -   "billing_documents": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "payments": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "payment_methods": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "subscriptions": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "usage_records": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "credit_memos": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "debit_memos": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "invoices": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "auto_renew": true,

                -   "latest_version": true,

                -   "initial_term": {

                    -   "interval_count": 1,

                    -   "interval": "day",

                    -   "start_date": "2020-01-01",

                    -   "type": "evergreen",

                    -   "end_date": "2023-01-01"


                    },

                -   "current_term": {

                    -   "interval_count": 1,

                    -   "interval": "day",

                    -   "start_date": "2020-01-01",

                    -   "type": "evergreen",

                    -   "end_date": "2023-01-01"


                    },

                -   "renewal_term": {

                    -   "interval_count": 1,

                    -   "interval": "day",

                    -   "start_date": "2020-01-01",

                    -   "type": "evergreen",

                    -   "end_date": "2023-01-01"


                    },

                -   "start_date": "2020-01-01",

                -   "end_date": "2023-01-01",

                -   "description": "string",

                -   "contract_effective": "2023-01-01",

                -   "service_activation": "2023-01-01",

                -   "customer_acceptance": "2023-01-01",

                -   "invoice_separately": true,

                -   "order_number": "string",

                -   "subscription_plans": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "subscription": null,

                            -   "subscription_id": null,

                            -   "product_id": null,

                            -   "plan_id": null,

                            -   "plan": null,

                            -   "product": null,

                            -   "name": null,

                            -   "subscription_items": null,

                            -   "subscription_plan_number": null


                            }


                        ]


                    },

                -   "invoice_items": {

                    -   "next_page": "string",

                    -   "data": [

                        -   {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "amount": null,

                            -   "description": null,

                            -   "deferred_revenue_account": null,

                            -   "recognized_revenue_account": null,

                            -   "revenue_recognition_rule_name": null,

                            -   "quantity": null,

                            -   "service_end": null,

                            -   "accounts_receivable_account": null,

                            -   "discount_item": null,

                            -   "applied_to_item_id": null,

                            -   "service_start": null,

                            -   "accounting_code": null,

                            -   "invoice_id": null,

                            -   "sku": null,

                            -   "subscription_id": null,

                            -   "tax_inclusive": null,

                            -   "remaining_balance": null,

                            -   "unit_of_measure": null,

                            -   "unit_amount": null,

                            -   "booking_reference": null,

                            -   "name": null,

                            -   "document_item_date": null,

                            -   "price_id": null,

                            -   "purchase_order_number": null,

                            -   "tax": null,

                            -   "tax_code": null,

                            -   "subscription_item_id": null,

                            -   "taxation_items": { },

                            -   "invoice": null,

                            -   "line_item": null,

                            -   "subscription": null,

                            -   "subscription_item": null


                            }


                        ]


                    },

                -   "prepaid_balance": [

                    -   {

                        -   "prepaid_UOM": "string",

                        -   "start_date": "2022-01-01",

                        -   "end_date": "2023-01-01",

                        -   "total_balance": 0,

                        -   "remaining_balance": 0,

                        -   "transactions": [

                            -   null


                            ]


                        }


                    ],

                -   "prepaid_balances": [

                    -   {

                        -   "validity_periods": [

                            -   null


                            ]


                        }


                    ],

                -   "contracted_mrr": "string",

                -   "currency": "string",

                -   "cancel_reason": "string",

                -   "last_booking_date": "2023-01-01",

                -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "payment_terms": "string",

                -   "bill_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    },

                -   "billing_document_settings": {

                    -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

                    -   "sequence_set_id": "string"


                    },

                -   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                -   "sold_to": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "address": {

                        -   "line1": "3333 Piedmont Rd NE",

                        -   "line2": "Suite 1150",

                        -   "city": "Atlanta",

                        -   "state": "GA",

                        -   "country": "United States",

                        -   "county": "string",

                        -   "postal_code": "30305"


                        },

                    -   "first_name": "Amy",

                    -   "home_phone": "(888)976-9056",

                    -   "last_name": "Lawrence",

                    -   "mobile_phone": "(888)101-0011",

                    -   "nickname": "Ami",

                    -   "other_phone": "(888)100-0001",

                    -   "email": "alawrence@gmail.com",

                    -   "tax_region": "Georgia",

                    -   "work_email": "alawrence@zuora.com",

                    -   "work_phone": "(888)976-9056",

                    -   "other_phone_type": "work",

                    -   "fax": "string",

                    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


                    }


                },

            -   "tax_inclusive": true,

            -   "remaining_balance": 0,

            -   "unit_of_measure": "string",

            -   "unit_amount": 0,

            -   "booking_reference": "string",

            -   "price_description": "string",

            -   "name": "string",

            -   "price_id": "string",

            -   "purchase_order_number": "string",

            -   "tax": 0,

            -   "tax_code": "string",

            -   "subscription_item_id": "string",

            -   "subscription_item": {

                -   "id": "string",

                -   "updated_by_id": "string",

                -   "updated_time": "2019-08-24T14:15:22Z",

                -   "created_by_id": "string",

                -   "created_time": "2019-08-24T14:15:22Z",

                -   "custom_fields": {

                    -   "property1": "string",

                    -   "property2": "string"


                    },

                -   "custom_objects": {

                    -   "property1": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "property2": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "subscription_item_number": "string",

                -   "name": "string",

                -   "description": "string",

                -   "product_id": "string",

                -   "charged_through_date": "2019-08-24",

                -   "recurring": {

                    -   "recurring_on": "_1",

                    -   "on": "_1",

                    -   "usage": true,

                    -   "interval": "month",

                    -   "interval_count": 0,

                    -   "alignment_behavior": "subscription_start",

                    -   "timing": "in_advance",

                    -   "formula": "string",

                    -   "duration_interval": "day",

                    -   "duration_interval_count": 0,

                    -   "rating_group": "billing_period"


                    },

                -   "active": true,

                -   "state": "inactive",

                -   "start_event": "contract_effective",

                -   "tiers_mode": "graduated",

                -   "tiers": [

                    -   {

                        -   "up_to": 0,

                        -   "amount": 0,

                        -   "unit_amount": 0


                        }


                    ],

                -   "tax_code": "string",

                -   "tax_inclusive": true,

                -   "unit_of_measure": "string",

                -   "quantity": 0,

                -   "amount": 0,

                -   "unit_amount": 0,

                -   "discount_amount": 0,

                -   "discount_percent": 0,

                -   "apply_discount_to": [

                    -   "one_time"


                    ],

                -   "discount_level": "account",

                -   "price_base_interval": "month",

                -   "overage": {

                    -   "interval_count": 0,

                    -   "type": "rolling_window",

                    -   "included_units": 0,

                    -   "credit_unused_units": true,

                    -   "apply_at_end_of_smoothing_period": true


                    },

                -   "charge_model": "string",

                -   "charge_type": "string",

                -   "price_id": "string",

                -   "price": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "name": "string",

                    -   "description": "string",

                    -   "recognized_revenue_accounting_code": "string",

                    -   "deferred_revenue_accounting_code": "string",

                    -   "recurring": {

                        -   "recurring_on": "_1",

                        -   "on": "_1",

                        -   "usage": true,

                        -   "interval": "month",

                        -   "interval_count": 0,

                        -   "alignment_behavior": "subscription_start",

                        -   "timing": "in_advance",

                        -   "formula": "string",

                        -   "duration_interval": "day",

                        -   "duration_interval_count": 0,

                        -   "rating_group": "billing_period"


                        },

                    -   "start_event": "contract_effective",

                    -   "tiers_mode": "graduated",

                    -   "apply_discount_to": [

                        -   "one_time"


                        ],

                    -   "tiers": [

                        -   {

                            -   "up_to": null,

                            -   "amounts": null,

                            -   "unit_amounts": null


                            }


                        ],

                    -   "tax_code": "string",

                    -   "tax_inclusive": true,

                    -   "unit_of_measure": "string",

                    -   "quantity": 0,

                    -   "min_quantity": 0,

                    -   "max_quantity": 0,

                    -   "discount_level": "account",

                    -   "revenue_recognition_rule": "string",

                    -   "stacked_discount": true,

                    -   "amounts": {

                        -   "USD": 10,

                        -   "GBP": 15


                        },

                    -   "unit_amounts": {

                        -   "USD": 10,

                        -   "GBP": 15


                        },

                    -   "discount_amounts": {

                        -   "USD": 10,

                        -   "GBP": 15


                        },

                    -   "discount_percent": 0,

                    -   "price_base_interval": "month",

                    -   "overage": {

                        -   "interval_count": 0,

                        -   "type": "rolling_window",

                        -   "included_units": 0,

                        -   "credit_unused_units": true,

                        -   "apply_at_end_of_smoothing_period": true


                        },

                    -   "revenue": {

                        -   "exclude_item_billing_from_revenue_accounting": true,

                        -   "exclude_item_booking_from_revenue_accounting": true


                        },

                    -   "accounting_code": "string",

                    -   "prepayment": {

                        -   "credit_option": "time_based",

                        -   "quantity": 0,

                        -   "total_quantity": 0,

                        -   "unit_of_measure": "string",

                        -   "validity_period": "subscription_term"


                        },

                    -   "drawdown": {

                        -   "conversion_rate": 0,

                        -   "unit_of_measure": "string"


                        },

                    -   "taxable": true,

                    -   "price_change_percentage": 0,

                    -   "price_change_option": "latest_catalog_pricing",

                    -   "price_increase_option": true,

                    -   "plan_id": "string",

                    -   "plan_number": "string",

                    -   "active": true,

                    -   "charge_type": "string",

                    -   "charge_model": "string"


                    },

                -   "subscription_plan_id": "string",

                -   "subscription_plan": {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "subscription": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "subscription_number": "string",

                        -   "state": "draft",

                        -   "version": 0,

                        -   "account_id": "string",

                        -   "account": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "account_number": null,

                            -   "billing_document_settings": { },

                            -   "batch": null,

                            -   "bill_cycle_day": null,

                            -   "bill_to": null,

                            -   "sold_to": null,

                            -   "communication_profile_id": null,

                            -   "crm_id": null,

                            -   "default_payment_method_id": null,

                            -   "name": null,

                            -   "description": null,

                            -   "parent_account_id": null,

                            -   "payment_gateway": null,

                            -   "payment_terms": null,

                            -   "sequence_set_id": null,

                            -   "auto_pay": null,

                            -   "tax_certificate": { },

                            -   "tax_identifier": { },

                            -   "currency": null,

                            -   "sales_rep": null,

                            -   "enabled": null,

                            -   "remaining_debit_memo_balance": null,

                            -   "remaining_invoice_balance": null,

                            -   "remaining_credit_memo_balance": null,

                            -   "remaining_payment_balance": null,

                            -   "bill_to_id": null,

                            -   "sold_to_id": null,

                            -   "default_payment_method": null,

                            -   "billing_documents": null,

                            -   "payments": null,

                            -   "payment_methods": null,

                            -   "subscriptions": null,

                            -   "usage_records": null,

                            -   "credit_memos": null,

                            -   "debit_memos": null,

                            -   "invoices": null


                            },

                        -   "invoice_owner_account_id": "string",

                        -   "invoice_owner_account": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "account_number": null,

                            -   "billing_document_settings": { },

                            -   "batch": null,

                            -   "bill_cycle_day": null,

                            -   "bill_to": null,

                            -   "sold_to": null,

                            -   "communication_profile_id": null,

                            -   "crm_id": null,

                            -   "default_payment_method_id": null,

                            -   "name": null,

                            -   "description": null,

                            -   "parent_account_id": null,

                            -   "payment_gateway": null,

                            -   "payment_terms": null,

                            -   "sequence_set_id": null,

                            -   "auto_pay": null,

                            -   "tax_certificate": { },

                            -   "tax_identifier": { },

                            -   "currency": null,

                            -   "sales_rep": null,

                            -   "enabled": null,

                            -   "remaining_debit_memo_balance": null,

                            -   "remaining_invoice_balance": null,

                            -   "remaining_credit_memo_balance": null,

                            -   "remaining_payment_balance": null,

                            -   "bill_to_id": null,

                            -   "sold_to_id": null,

                            -   "default_payment_method": null,

                            -   "billing_documents": null,

                            -   "payments": null,

                            -   "payment_methods": null,

                            -   "subscriptions": null,

                            -   "usage_records": null,

                            -   "credit_memos": null,

                            -   "debit_memos": null,

                            -   "invoices": null


                            },

                        -   "auto_renew": true,

                        -   "latest_version": true,

                        -   "initial_term": {

                            -   "interval_count": null,

                            -   "interval": null,

                            -   "start_date": null,

                            -   "type": null,

                            -   "end_date": null


                            },

                        -   "current_term": {

                            -   "interval_count": null,

                            -   "interval": null,

                            -   "start_date": null,

                            -   "type": null,

                            -   "end_date": null


                            },

                        -   "renewal_term": {

                            -   "interval_count": null,

                            -   "interval": null,

                            -   "start_date": null,

                            -   "type": null,

                            -   "end_date": null


                            },

                        -   "start_date": "2020-01-01",

                        -   "end_date": "2023-01-01",

                        -   "description": "string",

                        -   "contract_effective": "2023-01-01",

                        -   "service_activation": "2023-01-01",

                        -   "customer_acceptance": "2023-01-01",

                        -   "invoice_separately": true,

                        -   "order_number": "string",

                        -   "subscription_plans": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "invoice_items": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "prepaid_balance": [

                            -   null


                            ],

                        -   "prepaid_balances": [

                            -   null


                            ],

                        -   "contracted_mrr": "string",

                        -   "currency": "string",

                        -   "cancel_reason": "string",

                        -   "last_booking_date": "2023-01-01",

                        -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                        -   "payment_terms": "string",

                        -   "bill_to": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "address": { },

                            -   "first_name": null,

                            -   "home_phone": null,

                            -   "last_name": null,

                            -   "mobile_phone": null,

                            -   "nickname": null,

                            -   "other_phone": null,

                            -   "email": null,

                            -   "tax_region": null,

                            -   "work_email": null,

                            -   "work_phone": null,

                            -   "other_phone_type": null,

                            -   "fax": null,

                            -   "account_id": null


                            },

                        -   "billing_document_settings": {

                            -   "template_id": null,

                            -   "sequence_set_id": null


                            },

                        -   "sold_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

                        -   "sold_to": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "address": { },

                            -   "first_name": null,

                            -   "home_phone": null,

                            -   "last_name": null,

                            -   "mobile_phone": null,

                            -   "nickname": null,

                            -   "other_phone": null,

                            -   "email": null,

                            -   "tax_region": null,

                            -   "work_email": null,

                            -   "work_phone": null,

                            -   "other_phone_type": null,

                            -   "fax": null,

                            -   "account_id": null


                            }


                        },

                    -   "subscription_id": "string",

                    -   "product_id": "string",

                    -   "plan_id": "string",

                    -   "plan": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "start_date": "2019-08-24",

                        -   "end_date": "2019-08-24",

                        -   "name": "string",

                        -   "plan_number": "string",

                        -   "description": "string",

                        -   "active_currencies": [

                            -   null


                            ],

                        -   "product_id": "string",

                        -   "active": true,

                        -   "product": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "name": null,

                            -   "type": null,

                            -   "sku": null,

                            -   "description": null,

                            -   "active": null,

                            -   "plans": null


                            },

                        -   "sku": "string",

                        -   "prices": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "product": {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "start_date": "2019-08-24",

                        -   "end_date": "2019-08-24",

                        -   "name": "string",

                        -   "type": "base",

                        -   "sku": "string",

                        -   "description": "string",

                        -   "active": true,

                        -   "plans": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "name": "string",

                    -   "subscription_items": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        },

                    -   "subscription_plan_number": "string"


                    },

                -   "start_date": "2019-08-24",

                -   "end_date": "2019-08-24",

                -   "processed_through_date": "2019-08-24"


                },

            -   "invoice_item_id": "string",

            -   "document_item_date": "2022-01-01T07:08:12-07:00",

            -   "taxation_items": {

                -   "next_page": "string",

                -   "data": [

                    -   {

                        -   "id": "string",

                        -   "updated_by_id": "string",

                        -   "updated_time": "2019-08-24T14:15:22Z",

                        -   "created_by_id": "string",

                        -   "created_time": "2019-08-24T14:15:22Z",

                        -   "custom_fields": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "jurisdiction": "string",

                        -   "location_code": "string",

                        -   "name": "string",

                        -   "amount": 0,

                        -   "tax_code": "string",

                        -   "tax_code_name": "string",

                        -   "tax_date": "2022-01-01",

                        -   "tax_rate": 0,

                        -   "tax_rate_name": "string",

                        -   "amount_exempt": 0,

                        -   "source_tax_item_id": "string",

                        -   "remaining_balance": 0,

                        -   "amount_credited": 0,

                        -   "amount_paid": 0,

                        -   "amount_refunded": 0,

                        -   "amount_applied": 0,

                        -   "sales_tax_payable_account": "string",

                        -   "on_account_account": "string",

                        -   "tax_inclusive": true,

                        -   "tax_rate_type": "percent"


                        }


                    ]


                },

            -   "type": "credit_memo"


            }


        ]


    },

-   "total": 0,

-   "subtotal": 0,

-   "tax": 0,

-   "balance": 0,

-   "remaining_balance": 0,

-   "amount_paid": 0,

-   "paid": true,

-   "past_due": true,

-   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

-   "payment_terms": "string",

-   "bill_to": {

    -   "id": "string",

    -   "updated_by_id": "string",

    -   "updated_time": "2019-08-24T14:15:22Z",

    -   "created_by_id": "string",

    -   "created_time": "2019-08-24T14:15:22Z",

    -   "custom_fields": {

        -   "property1": "string",

        -   "property2": "string"


        },

    -   "custom_objects": {

        -   "property1": {

            -   "next_page": "string",

            -   "data": [

                -   {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": { },

                        -   "property2": { }


                        },

                    -   "type": "string"


                    }


                ]


            },

        -   "property2": {

            -   "next_page": "string",

            -   "data": [

                -   {

                    -   "id": "string",

                    -   "updated_by_id": "string",

                    -   "updated_time": "2019-08-24T14:15:22Z",

                    -   "created_by_id": "string",

                    -   "created_time": "2019-08-24T14:15:22Z",

                    -   "custom_fields": {

                        -   "property1": "string",

                        -   "property2": "string"


                        },

                    -   "custom_objects": {

                        -   "property1": { },

                        -   "property2": { }


                        },

                    -   "type": "string"


                    }


                ]


            }


        },

    -   "address": {

        -   "line1": "3333 Piedmont Rd NE",

        -   "line2": "Suite 1150",

        -   "city": "Atlanta",

        -   "state": "GA",

        -   "country": "United States",

        -   "county": "string",

        -   "postal_code": "30305"


        },

    -   "first_name": "Amy",

    -   "home_phone": "(888)976-9056",

    -   "last_name": "Lawrence",

    -   "mobile_phone": "(888)101-0011",

    -   "nickname": "Ami",

    -   "other_phone": "(888)100-0001",

    -   "email": "alawrence@gmail.com",

    -   "tax_region": "Georgia",

    -   "work_email": "alawrence@zuora.com",

    -   "work_phone": "(888)976-9056",

    -   "other_phone_type": "work",

    -   "fax": "string",

    -   "account_id": "2c92c0f86a8dd422016a9e7a70116b0d"


    },

-   "billing_document_settings": {

    -   "template_id": "2c92c08b6a8c978f016a9e0084622b62",

    -   "sequence_set_id": "string"


    }


}`
