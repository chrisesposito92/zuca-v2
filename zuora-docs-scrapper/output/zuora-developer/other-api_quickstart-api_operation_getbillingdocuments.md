---
title: "GetBillingDocuments"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getBillingDocuments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:59.246Z"
---

## List billing documents

Returns a dictionary with a data property that contains an array of billing documents, starting after cursor. Each entry in the array is a separate billing document object. If no more billing documents are available, the resulting array will be empty. This request should never return an error.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: fields[]=id,created_time |
| billing_document.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, balance, description, state, taxExample: billing_document.fields[]=id,created_time |
| billing_document_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, price_id, discount_item, deferred_revenue_account, description, name, quantity, recognized_revenue_account, service_end, service_start, accounts_receivable_account, subscription_id, subscription_item_id, tax, tax_inclusive, unit_amountExample: billing_document_items.fields[]=id,created_time |
| taxation_items.fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, amount, amount_exempt, tax_date, jurisdiction, location_code, name, sales_tax_payable_account, tax_code, tax_code_name, tax_rate, tax_rate_name, tax_inclusive, tax_rate_typeExample: taxation_items.fields[]=id,created_time |

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

get/billing\_documents

Request samples

-   cURL
-   Java
-   Node

Copy

curl \-X GET "https://rest.sandbox.na.zuora.com/v2/billing\_documents?expand%5B%5D=items&filter%5B%5D=type.EQ%3Ainvoice"
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


                },

            -   "billing_documents": { },

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

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


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

                        -   "gateway_response": "string",

                        -   "gateway_reconciliation_status": "string",

                        -   "gateway_reconciliation_reason": "string",

                        -   "gateway_state": "marked_for_submission",

                        -   "applied_to": [

                            -   null


                            ],

                        -   "payment_schedule_items": [

                            -   null


                            ],

                        -   "state_transitions": {

                            -   "canceled_time": null


                            },

                        -   "gateway_state_transitions": {

                            -   "marked_for_submission_time": null,

                            -   "settled_time": null,

                            -   "submitted_time": null


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

                        -   "account": { },

                        -   "invoice_owner_account_id": "string",

                        -   "invoice_owner_account": { },

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

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


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

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


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

                            -   "posted_time": null,

                            -   "canceled_time": null


                            },

                        -   "posted_by_id": "string",

                        -   "state": "draft",

                        -   "account": { },

                        -   "items": {

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "total": 0,

                        -   "subtotal": 0,

                        -   "tax": 0,

                        -   "balance": 0,

                        -   "remaining_balance": 0,

                        -   "applied_to": [

                            -   null


                            ],

                        -   "bill_to_id": "2c92c0f86a8dd422016a9e7a70116b0d",

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


                            }


                        }


                    ]


                },

            -   "debit_memos": {

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

                            -   "posted_time": null,

                            -   "canceled_time": null


                            },

                        -   "posted_by_id": "string",

                        -   "state": "draft",

                        -   "account": { },

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

                        -   "past_due": true,

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


                            }


                        }


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

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


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

                            -   "posted_time": null,

                            -   "canceled_time": null


                            },

                        -   "posted_by_id": "string",

                        -   "state": "draft",

                        -   "account": { },

                        -   "items": {

                            -   "next_page": null,

                            -   "data": [ ]


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

                            -   "next_page": null,

                            -   "data": [ ]


                            },

                        -   "property2": {

                            -   "next_page": null,

                            -   "data": [ ]


                            }


                        },

                    -   "amount": 0,

                    -   "subtotal": 0,

                    -   "description": "string",

                    -   "deferred_revenue_account": "string",

                    -   "on_account_account": "string",

                    -   "recognized_revenue_account": "string",

                    -   "billing_document": { },

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

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "custom_objects": {

                            -   "property1": null,

                            -   "property2": null


                            },

                        -   "subscription_item_number": "string",

                        -   "name": "string",

                        -   "description": "string",

                        -   "product_id": "string",

                        -   "charged_through_date": "2019-08-24",

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

                        -   "active": true,

                        -   "state": "inactive",

                        -   "start_event": "contract_effective",

                        -   "tiers_mode": "graduated",

                        -   "tiers": [

                            -   null


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

                            -   null


                            ],

                        -   "discount_level": "account",

                        -   "price_base_interval": "month",

                        -   "overage": {

                            -   "interval_count": null,

                            -   "type": null,

                            -   "included_units": null,

                            -   "credit_unused_units": null,

                            -   "apply_at_end_of_smoothing_period": null


                            },

                        -   "charge_model": "string",

                        -   "charge_type": "string",

                        -   "price_id": "string",

                        -   "price": {

                            -   "id": null,

                            -   "updated_by_id": null,

                            -   "updated_time": null,

                            -   "created_by_id": null,

                            -   "created_time": null,

                            -   "custom_fields": { },

                            -   "custom_objects": { },

                            -   "name": null,

                            -   "description": null,

                            -   "recognized_revenue_accounting_code": null,

                            -   "deferred_revenue_accounting_code": null,

                            -   "recurring": { },

                            -   "start_event": null,

                            -   "tiers_mode": null,

                            -   "apply_discount_to": [ ],

                            -   "tiers": [ ],

                            -   "tax_code": null,

                            -   "tax_inclusive": null,

                            -   "unit_of_measure": null,

                            -   "quantity": null,

                            -   "min_quantity": null,

                            -   "max_quantity": null,

                            -   "discount_level": null,

                            -   "revenue_recognition_rule": null,

                            -   "stacked_discount": null,

                            -   "amounts": { },

                            -   "unit_amounts": { },

                            -   "discount_amounts": { },

                            -   "discount_percent": null,

                            -   "price_base_interval": null,

                            -   "overage": null,

                            -   "revenue": null,

                            -   "accounting_code": null,

                            -   "prepayment": { },

                            -   "drawdown": { },

                            -   "taxable": null,

                            -   "price_change_percentage": null,

                            -   "price_change_option": null,

                            -   "price_increase_option": null,

                            -   "plan_id": null,

                            -   "plan_number": null,

                            -   "custom_field_per_unit_rate": null,

                            -   "custom_field_total_amount": null,

                            -   "active": null,

                            -   "charge_type": null,

                            -   "charge_model": null


                            },

                        -   "subscription_plan_id": "string",

                        -   "subscription_plan": {

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

                            -   null


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

        -   "past_due": true


        }


    ]


}`
