---
title: "GetCreditMemoItems"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getCreditMemoItems/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:43:19.251Z"
---

## List credit memo items

Retrieves information about all items of credit memos. A credit memo item is a single line item in a credit memo.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, credit_memo_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, service_end, service_start, accounts_receivable_account, on_account_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, subtotal, invoice_item_id, document_item_dateExample: fields[]=id,created_time |
| credit_memo_item.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, applied_to_item_id, price_id, discount_item, deferred_revenue_account, description, credit_memo_id, sku, name, purchase_order_number, quantity, recognized_revenue_account, remaining_balance, revenue_recognition_rule_name, service_end, service_start, accounts_receivable_account, on_account_account, subscription_id, subscription_item_id, tax, tax_code, tax_inclusive, unit_amount, unit_of_measure, subtotal, invoice_item_id, document_item_dateExample: credit_memo_item.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_type, source_tax_item_id, amount_applied, amount_refunded, on_account_accountExample: taxation_items.fields[]=id,created_time |
| credit_memo.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, credit_memo_number, state_transitions, description, account_id, total, subtotal, tax, document_date, exclude_from_auto_apply_rules, posted_by_id, state, balance, invoice_id, reason_code, amount_refunded, bill_to_id, billing_document_settings, currencyExample: credit_memo.fields[]=id,created_time |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |
| zuora-org-ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails.If the header is not set, the operation is performed in scope of the user's accessible orgs. |

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

get/credit\_memo\_items

Request samples

-   cURL
-   Java

Copy

curl \-X GET "https://rest.sandbox.na.zuora.com/v2/credit\_memo\_items"
     \-H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
     \-H "Content-Type: application/json"

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

        -   "amount": 0,

        -   "subtotal": 0,

        -   "description": "string",

        -   "deferred_revenue_account": "string",

        -   "on_account_account": "string",

        -   "recognized_revenue_account": "string",

        -   "credit_memo": {

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

                -   "billing_documents": {

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


                            }


                        ]


                    },

                -   "payments": {

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

                            -   "description": null,

                            -   "reference_id": null,

                            -   "account_id": null,

                            -   "account_number": null,

                            -   "amount": null,

                            -   "authorization_id": null,

                            -   "payment_date": null,

                            -   "payment_method_id": null,

                            -   "gateway_id": null,

                            -   "gateway_order_id": null,

                            -   "second_reference_id": null,

                            -   "gateway_options": { },

                            -   "statement_descriptor": null,

                            -   "statement_descriptor_phone": null,

                            -   "external": null,

                            -   "currency": null,

                            -   "account": null,

                            -   "amount_applied": null,

                            -   "remaining_balance": null,

                            -   "amount_refunded": null,

                            -   "state": null,

                            -   "payout_id": null,

                            -   "payment_number": null,

                            -   "gateway_response_code": null,

                            -   "payment_method": { },

                            -   "gateway_response": null,

                            -   "gateway_reconciliation_status": null,

                            -   "gateway_reconciliation_reason": null,

                            -   "gateway_state": null,

                            -   "applied_to": [ ],

                            -   "payment_schedule_items": [ ],

                            -   "state_transitions": { },

                            -   "gateway_state_transitions": { }


                            }


                        ]


                    },

                -   "payment_methods": {

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

                            -   "type": null,

                            -   "custom_type": null,

                            -   "account_id": null,

                            -   "account": null,

                            -   "billing_details": { },

                            -   "maximum_payment_attempts": null,

                            -   "payment_retry_interval": null,

                            -   "device_session_id": null,

                            -   "ip_address": null,

                            -   "bank_identification_number": null,

                            -   "card": { },

                            -   "paypal_express_native": { },

                            -   "paypal_express": { },

                            -   "paypal_adaptive": { },

                            -   "sepa_debit": { },

                            -   "cc_ref": { },

                            -   "apple_pay": { },

                            -   "google_pay": { },

                            -   "ach_debit": { },

                            -   "betalings_debit": { },

                            -   "autogiro_debit": { },

                            -   "bacs_debit": { },

                            -   "au_becs_debit": { },

                            -   "nz_becs_debit": { },

                            -   "pad_debit": { },

                            -   "state": null,

                            -   "auto_generated": null,

                            -   "use_default_retry_rule": null,

                            -   "existing_mandate": null,

                            -   "last_failed_sale_transaction_time": null,

                            -   "last_transaction_time": null,

                            -   "last_transaction_status": null,

                            -   "number_of_consecutive_failures": null,

                            -   "total_number_of_processed_payments": null,

                            -   "total_number_of_error_payments": null


                            }


                        ]


                    },

                -   "subscriptions": {

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


                            }


                        ]


                    },

                -   "usage_records": {

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

                            -   "account_number": null,

                            -   "account_id": null,

                            -   "subscription_item_id": null,

                            -   "subscription_item_number": null,

                            -   "description": null,

                            -   "end_time": null,

                            -   "quantity": null,

                            -   "start_time": null,

                            -   "subscription_id": null,

                            -   "subscription_number": null,

                            -   "unit_of_measure": null,

                            -   "state": null,

                            -   "account": null,

                            -   "subscription_item": null,

                            -   "subscription": null


                            }


                        ]


                    },

                -   "credit_memos": {

                    -   "next_page": "string",

                    -   "data": [

                        -   { }


                        ]


                    },

                -   "debit_memos": {

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

                            -   "currency": null,

                            -   "debit_memo_number": null,

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

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null


                            }


                        ]


                    },

                -   "invoices": {

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

                            -   "account_id": null,

                            -   "description": null,

                            -   "due_date": null,

                            -   "document_date": null,

                            -   "transfer_to_accounting": null,

                            -   "amount_paid": null,

                            -   "pay": null,

                            -   "currency": null,

                            -   "invoice_number": null,

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

                            -   "paid": null,

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null,

                            -   "sold_to_id": null,

                            -   "sold_to": null


                            }


                        ]


                    }


                },

            -   "items": { },

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

                            -   "posted_time": null,

                            -   "canceled_time": null


                            },

                        -   "posted_by_id": "string",

                        -   "state": "draft",

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

                        -   "items": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "total": 0,

                        -   "subtotal": 0,

                        -   "tax": 0,

                        -   "balance": 0,

                        -   "remaining_balance": 0,

                        -   "amount_paid": 0,

                        -   "paid": true,

                        -   "past_due": true


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


            },

        -   "credit_memo_id": "string",

        -   "revenue_recognition_rule_name": "string",

        -   "quantity": 0,

        -   "service_end": "string",

        -   "service_start": "string",

        -   "accounts_receivable_account": "string",

        -   "discount_item": true,

        -   "applied_to_item_id": "string",

        -   "accounting_code": "string",

        -   "sku": "string",

        -   "tax_inclusive": true,

        -   "remaining_balance": 0,

        -   "unit_of_measure": "string",

        -   "unit_amount": 0,

        -   "name": "string",

        -   "price_id": "string",

        -   "purchase_order_number": "string",

        -   "tax": 0,

        -   "tax_code": "string",

        -   "subscription_id": "string",

        -   "subscription_item_id": "string",

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

                -   "billing_documents": {

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


                            }


                        ]


                    },

                -   "payments": {

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

                            -   "description": null,

                            -   "reference_id": null,

                            -   "account_id": null,

                            -   "account_number": null,

                            -   "amount": null,

                            -   "authorization_id": null,

                            -   "payment_date": null,

                            -   "payment_method_id": null,

                            -   "gateway_id": null,

                            -   "gateway_order_id": null,

                            -   "second_reference_id": null,

                            -   "gateway_options": { },

                            -   "statement_descriptor": null,

                            -   "statement_descriptor_phone": null,

                            -   "external": null,

                            -   "currency": null,

                            -   "account": null,

                            -   "amount_applied": null,

                            -   "remaining_balance": null,

                            -   "amount_refunded": null,

                            -   "state": null,

                            -   "payout_id": null,

                            -   "payment_number": null,

                            -   "gateway_response_code": null,

                            -   "payment_method": { },

                            -   "gateway_response": null,

                            -   "gateway_reconciliation_status": null,

                            -   "gateway_reconciliation_reason": null,

                            -   "gateway_state": null,

                            -   "applied_to": [ ],

                            -   "payment_schedule_items": [ ],

                            -   "state_transitions": { },

                            -   "gateway_state_transitions": { }


                            }


                        ]


                    },

                -   "payment_methods": {

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

                            -   "type": null,

                            -   "custom_type": null,

                            -   "account_id": null,

                            -   "account": null,

                            -   "billing_details": { },

                            -   "maximum_payment_attempts": null,

                            -   "payment_retry_interval": null,

                            -   "device_session_id": null,

                            -   "ip_address": null,

                            -   "bank_identification_number": null,

                            -   "card": { },

                            -   "paypal_express_native": { },

                            -   "paypal_express": { },

                            -   "paypal_adaptive": { },

                            -   "sepa_debit": { },

                            -   "cc_ref": { },

                            -   "apple_pay": { },

                            -   "google_pay": { },

                            -   "ach_debit": { },

                            -   "betalings_debit": { },

                            -   "autogiro_debit": { },

                            -   "bacs_debit": { },

                            -   "au_becs_debit": { },

                            -   "nz_becs_debit": { },

                            -   "pad_debit": { },

                            -   "state": null,

                            -   "auto_generated": null,

                            -   "use_default_retry_rule": null,

                            -   "existing_mandate": null,

                            -   "last_failed_sale_transaction_time": null,

                            -   "last_transaction_time": null,

                            -   "last_transaction_status": null,

                            -   "number_of_consecutive_failures": null,

                            -   "total_number_of_processed_payments": null,

                            -   "total_number_of_error_payments": null


                            }


                        ]


                    },

                -   "subscriptions": {

                    -   "next_page": "string",

                    -   "data": [

                        -   { }


                        ]


                    },

                -   "usage_records": {

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

                            -   "account_number": null,

                            -   "account_id": null,

                            -   "subscription_item_id": null,

                            -   "subscription_item_number": null,

                            -   "description": null,

                            -   "end_time": null,

                            -   "quantity": null,

                            -   "start_time": null,

                            -   "subscription_id": null,

                            -   "subscription_number": null,

                            -   "unit_of_measure": null,

                            -   "state": null,

                            -   "account": null,

                            -   "subscription_item": null,

                            -   "subscription": null


                            }


                        ]


                    },

                -   "credit_memos": {

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

                            -   "account_id": null,

                            -   "description": null,

                            -   "document_date": null,

                            -   "reason_code": null,

                            -   "invoice_id": null,

                            -   "transfer_to_accounting": null,

                            -   "exclude_from_auto_apply_rules": null,

                            -   "currency": null,

                            -   "credit_memo_number": null,

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

                            -   "applied_to": [ ],

                            -   "bill_to_id": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null


                            }


                        ]


                    },

                -   "debit_memos": {

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

                            -   "currency": null,

                            -   "debit_memo_number": null,

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

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null


                            }


                        ]


                    },

                -   "invoices": {

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

                            -   "account_id": null,

                            -   "description": null,

                            -   "due_date": null,

                            -   "document_date": null,

                            -   "transfer_to_accounting": null,

                            -   "amount_paid": null,

                            -   "pay": null,

                            -   "currency": null,

                            -   "invoice_number": null,

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

                            -   "paid": null,

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null,

                            -   "sold_to_id": null,

                            -   "sold_to": null


                            }


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

                -   "billing_documents": {

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


                            }


                        ]


                    },

                -   "payments": {

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

                            -   "description": null,

                            -   "reference_id": null,

                            -   "account_id": null,

                            -   "account_number": null,

                            -   "amount": null,

                            -   "authorization_id": null,

                            -   "payment_date": null,

                            -   "payment_method_id": null,

                            -   "gateway_id": null,

                            -   "gateway_order_id": null,

                            -   "second_reference_id": null,

                            -   "gateway_options": { },

                            -   "statement_descriptor": null,

                            -   "statement_descriptor_phone": null,

                            -   "external": null,

                            -   "currency": null,

                            -   "account": null,

                            -   "amount_applied": null,

                            -   "remaining_balance": null,

                            -   "amount_refunded": null,

                            -   "state": null,

                            -   "payout_id": null,

                            -   "payment_number": null,

                            -   "gateway_response_code": null,

                            -   "payment_method": { },

                            -   "gateway_response": null,

                            -   "gateway_reconciliation_status": null,

                            -   "gateway_reconciliation_reason": null,

                            -   "gateway_state": null,

                            -   "applied_to": [ ],

                            -   "payment_schedule_items": [ ],

                            -   "state_transitions": { },

                            -   "gateway_state_transitions": { }


                            }


                        ]


                    },

                -   "payment_methods": {

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

                            -   "type": null,

                            -   "custom_type": null,

                            -   "account_id": null,

                            -   "account": null,

                            -   "billing_details": { },

                            -   "maximum_payment_attempts": null,

                            -   "payment_retry_interval": null,

                            -   "device_session_id": null,

                            -   "ip_address": null,

                            -   "bank_identification_number": null,

                            -   "card": { },

                            -   "paypal_express_native": { },

                            -   "paypal_express": { },

                            -   "paypal_adaptive": { },

                            -   "sepa_debit": { },

                            -   "cc_ref": { },

                            -   "apple_pay": { },

                            -   "google_pay": { },

                            -   "ach_debit": { },

                            -   "betalings_debit": { },

                            -   "autogiro_debit": { },

                            -   "bacs_debit": { },

                            -   "au_becs_debit": { },

                            -   "nz_becs_debit": { },

                            -   "pad_debit": { },

                            -   "state": null,

                            -   "auto_generated": null,

                            -   "use_default_retry_rule": null,

                            -   "existing_mandate": null,

                            -   "last_failed_sale_transaction_time": null,

                            -   "last_transaction_time": null,

                            -   "last_transaction_status": null,

                            -   "number_of_consecutive_failures": null,

                            -   "total_number_of_processed_payments": null,

                            -   "total_number_of_error_payments": null


                            }


                        ]


                    },

                -   "subscriptions": {

                    -   "next_page": "string",

                    -   "data": [

                        -   { }


                        ]


                    },

                -   "usage_records": {

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

                            -   "account_number": null,

                            -   "account_id": null,

                            -   "subscription_item_id": null,

                            -   "subscription_item_number": null,

                            -   "description": null,

                            -   "end_time": null,

                            -   "quantity": null,

                            -   "start_time": null,

                            -   "subscription_id": null,

                            -   "subscription_number": null,

                            -   "unit_of_measure": null,

                            -   "state": null,

                            -   "account": null,

                            -   "subscription_item": null,

                            -   "subscription": null


                            }


                        ]


                    },

                -   "credit_memos": {

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

                            -   "account_id": null,

                            -   "description": null,

                            -   "document_date": null,

                            -   "reason_code": null,

                            -   "invoice_id": null,

                            -   "transfer_to_accounting": null,

                            -   "exclude_from_auto_apply_rules": null,

                            -   "currency": null,

                            -   "credit_memo_number": null,

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

                            -   "applied_to": [ ],

                            -   "bill_to_id": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null


                            }


                        ]


                    },

                -   "debit_memos": {

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

                            -   "currency": null,

                            -   "debit_memo_number": null,

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

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null


                            }


                        ]


                    },

                -   "invoices": {

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

                            -   "account_id": null,

                            -   "description": null,

                            -   "due_date": null,

                            -   "document_date": null,

                            -   "transfer_to_accounting": null,

                            -   "amount_paid": null,

                            -   "pay": null,

                            -   "currency": null,

                            -   "invoice_number": null,

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

                            -   "paid": null,

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null,

                            -   "sold_to_id": null,

                            -   "sold_to": null


                            }


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

                        -   "subscription": { },

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


                        }


                    ]


                },

            -   "invoice_items": {

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

                        -   "amount": 0,

                        -   "description": "string",

                        -   "deferred_revenue_account": "string",

                        -   "recognized_revenue_account": "string",

                        -   "revenue_recognition_rule_name": "string",

                        -   "quantity": 0,

                        -   "service_end": "string",

                        -   "accounts_receivable_account": "string",

                        -   "discount_item": true,

                        -   "applied_to_item_id": "string",

                        -   "service_start": "string",

                        -   "accounting_code": "string",

                        -   "invoice_id": "string",

                        -   "sku": "string",

                        -   "subscription_id": "string",

                        -   "tax_inclusive": true,

                        -   "remaining_balance": 0,

                        -   "unit_of_measure": "string",

                        -   "unit_amount": 0,

                        -   "booking_reference": "string",

                        -   "name": "string",

                        -   "document_item_date": "2019-08-24T14:15:22Z",

                        -   "price_id": "string",

                        -   "purchase_order_number": "string",

                        -   "tax": 0,

                        -   "tax_code": "string",

                        -   "subscription_item_id": "string",

                        -   "taxation_items": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "invoice": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "account_id": null,

                            -   "description": null,

                            -   "due_date": null,

                            -   "document_date": null,

                            -   "transfer_to_accounting": null,

                            -   "amount_paid": null,

                            -   "pay": null,

                            -   "currency": null,

                            -   "invoice_number": null,

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

                            -   "paid": null,

                            -   "past_due": null,

                            -   "bill_to_id": null,

                            -   "payment_terms": null,

                            -   "bill_to": null,

                            -   "billing_document_settings": null,

                            -   "sold_to_id": null,

                            -   "sold_to": null


                            },

                        -   "line_item": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": null,

                            -   "custom_objects": { },

                            -   "unit_of_measure": null,

                            -   "unit_amount": null,

                            -   "target_date": null,

                            -   "deferred_revenue_account": null,

                            -   "description": null,

                            -   "revenue": null,

                            -   "discount_unit_amount": null,

                            -   "discount_percent": null,

                            -   "category": null,

                            -   "state": null,

                            -   "type": null,

                            -   "name": null,

                            -   "item_number": null,

                            -   "list_unit_price": null,

                            -   "product_code": null,

                            -   "price_id": null,

                            -   "purchase_order_number": null,

                            -   "quantity": null,

                            -   "recognized_revenue_account": null,

                            -   "revenue_recognition_rule_name": null,

                            -   "sold_to_id": null,

                            -   "tax_code": null,

                            -   "tax_inclusive": null,

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "invoice_items": null,

                            -   "related_subscription_number": null,

                            -   "billing_rule": null,

                            -   "total": null,

                            -   "subtotal": null,

                            -   "original_order_date": null,

                            -   "accounting_code": null,

                            -   "adjustment_liability_account": null,

                            -   "adjustment_revenue_account": null,

                            -   "discount_total": null,

                            -   "list_price": null,

                            -   "original_sold_to_id": null,

                            -   "unbilled_receivables_account": null


                            },

                        -   "subscription": { },

                        -   "subscription_item": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "subscription_item_number": null,

                            -   "name": null,

                            -   "description": null,

                            -   "product_id": null,

                            -   "charged_through_date": null,

                            -   "recurring": { },

                            -   "active": null,

                            -   "state": null,

                            -   "start_event": null,

                            -   "tiers_mode": null,

                            -   "tiers": [ ],

                            -   "tax_code": null,

                            -   "tax_inclusive": null,

                            -   "unit_of_measure": null,

                            -   "quantity": null,

                            -   "amount": null,

                            -   "unit_amount": null,

                            -   "discount_amount": null,

                            -   "discount_percent": null,

                            -   "apply_discount_to": [ ],

                            -   "discount_level": null,

                            -   "price_base_interval": null,

                            -   "overage": { },

                            -   "charge_model": null,

                            -   "charge_type": null,

                            -   "price_id": null,

                            -   "price": { },

                            -   "subscription_plan_id": null,

                            -   "subscription_plan": { },

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "processed_through_date": null


                            }


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

                        -   {

                            -   "transaction_date": null,

                            -   "type": null,

                            -   "quantity": null


                            }


                        ]


                    }


                ],

            -   "prepaid_balances": [

                -   {

                    -   "validity_periods": [

                        -   {

                            -   "prepaid_UOM": null,

                            -   "start_date": null,

                            -   "end_date": null,

                            -   "total_balance": null,

                            -   "remaining_balance": null,

                            -   "overage_rated_amount": null,

                            -   "overage_rated_quantity": null,

                            -   "transactions": [ ]


                            }


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

                        -   "up_to": 0,

                        -   "amounts": {

                            -   "USD": 10,

                            -   "GBP": 15


                            },

                        -   "unit_amounts": {

                            -   "USD": 10,

                            -   "GBP": 15


                            }


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

                    -   "account": {

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

                        -   "account_number": "A-100001",

                        -   "billing_document_settings": {

                            -   "credit_memo_template_id": null,

                            -   "debit_memo_template_id": null,

                            -   "email_documents": null,

                            -   "print_documents": null,

                            -   "invoice_template_id": null,

                            -   "additional_email": [ ]


                            },

                        -   "batch": "string",

                        -   "bill_cycle_day": 31,

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

                            -   "company_code": null,

                            -   "id": null,

                            -   "start_date": null,

                            -   "description": null,

                            -   "entity_use_code": null,

                            -   "end_date": null,

                            -   "issuing_jurisdiction": null,

                            -   "state": null,

                            -   "tax_identifier": null


                            },

                        -   "tax_identifier": {

                            -   "id": null


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

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "type": null,

                            -   "custom_type": null,

                            -   "account_id": null,

                            -   "account": null,

                            -   "billing_details": { },

                            -   "maximum_payment_attempts": null,

                            -   "payment_retry_interval": null,

                            -   "device_session_id": null,

                            -   "ip_address": null,

                            -   "bank_identification_number": null,

                            -   "card": { },

                            -   "paypal_express_native": { },

                            -   "paypal_express": { },

                            -   "paypal_adaptive": { },

                            -   "sepa_debit": { },

                            -   "cc_ref": { },

                            -   "apple_pay": { },

                            -   "google_pay": { },

                            -   "ach_debit": { },

                            -   "betalings_debit": { },

                            -   "autogiro_debit": { },

                            -   "bacs_debit": { },

                            -   "au_becs_debit": { },

                            -   "nz_becs_debit": { },

                            -   "pad_debit": { },

                            -   "state": null,

                            -   "auto_generated": null,

                            -   "use_default_retry_rule": null,

                            -   "existing_mandate": null,

                            -   "last_failed_sale_transaction_time": null,

                            -   "last_transaction_time": null,

                            -   "last_transaction_status": null,

                            -   "number_of_consecutive_failures": null,

                            -   "total_number_of_processed_payments": null,

                            -   "total_number_of_error_payments": null


                            },

                        -   "billing_documents": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "payments": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "payment_methods": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "subscriptions": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "usage_records": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "credit_memos": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "debit_memos": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "invoices": {

                            -   "next_page": null,

                            -   "data": [ ]


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

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "account_number": "A-100001",

                        -   "billing_document_settings": {

                            -   "credit_memo_template_id": null,

                            -   "debit_memo_template_id": null,

                            -   "email_documents": null,

                            -   "print_documents": null,

                            -   "invoice_template_id": null,

                            -   "additional_email": [ ]


                            },

                        -   "batch": "string",

                        -   "bill_cycle_day": 31,

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

                            -   "company_code": null,

                            -   "id": null,

                            -   "start_date": null,

                            -   "description": null,

                            -   "entity_use_code": null,

                            -   "end_date": null,

                            -   "issuing_jurisdiction": null,

                            -   "state": null,

                            -   "tax_identifier": null


                            },

                        -   "tax_identifier": {

                            -   "id": null


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

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "type": null,

                            -   "custom_type": null,

                            -   "account_id": null,

                            -   "account": null,

                            -   "billing_details": { },

                            -   "maximum_payment_attempts": null,

                            -   "payment_retry_interval": null,

                            -   "device_session_id": null,

                            -   "ip_address": null,

                            -   "bank_identification_number": null,

                            -   "card": { },

                            -   "paypal_express_native": { },

                            -   "paypal_express": { },

                            -   "paypal_adaptive": { },

                            -   "sepa_debit": { },

                            -   "cc_ref": { },

                            -   "apple_pay": { },

                            -   "google_pay": { },

                            -   "ach_debit": { },

                            -   "betalings_debit": { },

                            -   "autogiro_debit": { },

                            -   "bacs_debit": { },

                            -   "au_becs_debit": { },

                            -   "nz_becs_debit": { },

                            -   "pad_debit": { },

                            -   "state": null,

                            -   "auto_generated": null,

                            -   "use_default_retry_rule": null,

                            -   "existing_mandate": null,

                            -   "last_failed_sale_transaction_time": null,

                            -   "last_transaction_time": null,

                            -   "last_transaction_status": null,

                            -   "number_of_consecutive_failures": null,

                            -   "total_number_of_processed_payments": null,

                            -   "total_number_of_error_payments": null


                            },

                        -   "billing_documents": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "payments": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "payment_methods": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "subscriptions": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "usage_records": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "credit_memos": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "debit_memos": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "invoices": {

                            -   "next_page": null,

                            -   "data": [ ]


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

                    -   "start_date": "2019-08-24",

                    -   "end_date": "2019-08-24",

                    -   "name": "string",

                    -   "plan_number": "string",

                    -   "description": "string",

                    -   "active_currencies": [

                        -   "string"


                        ],

                    -   "product_id": "string",

                    -   "active": true,

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

                    -   "sku": "string",

                    -   "prices": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "product": {

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

                    -   "start_date": "2019-08-24",

                    -   "end_date": "2019-08-24",

                    -   "name": "string",

                    -   "type": "base",

                    -   "sku": "string",

                    -   "description": "string",

                    -   "active": true,

                    -   "plans": {

                        -   "next_page": "string",

                        -   "data": [

                            -   null


                            ]


                        }


                    },

                -   "name": "string",

                -   "subscription_items": {

                    -   "next_page": "string",

                    -   "data": [

                        -   { }


                        ]


                    },

                -   "subscription_plan_number": "string"


                },

            -   "start_date": "2019-08-24",

            -   "end_date": "2019-08-24",

            -   "processed_through_date": "2019-08-24"


            }


        }


    ]


}`
