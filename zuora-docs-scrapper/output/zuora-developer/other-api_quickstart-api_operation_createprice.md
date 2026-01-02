---
title: "CreatePrice"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/createPrice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:02.689Z"
---

## Create a price

Creates a new price for an existing plan.

Security**bearerAuth**

Request

##### query Parameters

| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, tiers, charge_model, charge_type, name, description, revenue_recognition_rule, stacked_discount, recognized_revenue_accounting_code, deferred_revenue_accounting_code, accounting_code, recurring, start_event, tax_code, tax_inclusive, taxable, unit_of_measure, quantity, min_quantity, max_quantity, price_base_interval, discount_level, overage, plan_id, tiers_mode, apply_discount_to, prepayment, drawdown, discount_amounts, unit_amounts, discount_percent, amounts, price_change_percentage, price_change_option, price_increase_optionExample: fields[]=id,created_time |
| --- | --- |
| price.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, tiers, charge_model, charge_type, name, description, revenue_recognition_rule, stacked_discount, recognized_revenue_accounting_code, deferred_revenue_accounting_code, accounting_code, recurring, start_event, tax_code, tax_inclusive, taxable, unit_of_measure, quantity, min_quantity, max_quantity, price_base_interval, discount_level, overage, plan_id, tiers_mode, apply_discount_to, prepayment, drawdown, discount_amounts, unit_amounts, discount_percent, amounts, price_change_percentage, price_change_option, price_increase_optionExample: price.fields[]=id,created_time |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorial for detailed instructions.Note that the filters on this operation are only applicable to the related objects. For example, when you are calling the "Retrieve a billing document" operation, you can use the filter[] parameter on the related objects such as filter[]=items[account_id].EQ:8ad09e208858b5cf0188595208151c63 |
| page_size | integer [ 1 .. 99 ]The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |

##### Request Body schema: application/json
required

| custom_fields | object (CustomFields)Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. |
| --- | --- |
| namerequired | stringThe name of the price. |
| description | stringAn arbitrary string attached to the object. Often useful for displaying to users. |
| recognized_revenue_accounting_code | string <= 100 charactersAn active accounting code in your Zuora chart of accounts. |
| deferred_revenue_accounting_code | string <= 100 charactersAn active accounting code in your Zuora chart of accounts. |
| recurring | object (Recurring)The recurring components of a price such as interval and usage. |
| start_event | stringDefault: "contract_effective"Specifies when to start billing your customer.Enum: "contract_effective" "service_activation" "customer_acceptance" "specific_date" |
| tiers_mode | stringDeprecatedSpecifies the mode for tiered prices.Enum: "graduated" "volume" "high_watermark_volume" "high_watermark_graduated" "graduated_with_overage" |
| apply_discount_to | Array of stringsAny combination of one_time, recurring and plan.Items Enum: "one_time" "recurring" "usage" |
| tiers | Array of objects (Tier)Price information for different tiers. When creating or updating tiered prices, you must specify this field and the tiers_mode field. |
| tax_code | stringA tax code identifier. If a tax_code of a price is not provided when you create or update a price, Zuora will treat the charged amount as non-taxable. If this code is provide, Zuora considers that this price is taxable and the charged amount will be handled accordingly. |
| tax_inclusive | booleanIf this field is set to true, it indicates that amounts are inclusive of tax. |
| unit_of_measure | stringA configured unit of measure. This field is required for per-unit prices. |
| quantity | numberQuantity of the product to which your customers subscribe. |
| min_quantity | numberThe minimum quantity for a price. Specify this field and the max_quantity field to create a range of quantities allowed in a price. |
| max_quantity | numberThe maximum quantity for a price. Specify this field and the min_quantity field to create a range of quantities allowed in a price. |
| discount_level | stringSpecifies at what level a discount should be applied: account, subscription, or plan.Enum: "account" "subscription" "plan" |
| revenue_recognition_rule | stringDetermines when to recognize the revenue for this charge. You can choose to recognize upon invoicing or daily over time. |
| stacked_discount | booleanThis field is only applicable for the Percentage Discount price. This field indicates whether the discount is to be calculated as stacked discount. Possible values are as follows:true: This is a stacked discount, which should be calculated by stacking with other discounts.false: This is not a stacked discount, which should be calculated in sequence with other discounts.For more information, see Stacked discounts |
| amounts | object (money) |
| unit_amounts | object (money) |
| discount_amounts | object (money) |
| discount_percent | numberDiscount percent. Specify this field if you offer a percentage-based discount. |
| price_base_interval | stringDefault: "billing_period"Specifies the base interval of a price. If not provided, this field defaults to billing_period.Enum: "month" "billing_period" "week" |
| overage | object (Overage)DeprecatedAn object defining how overage charges are calculated. |
| revenue | object (Revenue)Accounting configuration if you have Zuora Revenue enabled. |
| accounting_code | stringAn active accounting code defined in Finance Settings > Configure Accounting Codes in your Zuora tenant. |
| prepayment | object (Prepayment) |
| drawdown | object (Drawdown) |
| taxable | boolean |
| price_change_percentage | numberThe percentage to increase or decrease the price of a termed subscription's renewal. |
| price_change_option | stringDefault: "none"Applies an automatic price change when a termed subscription is renewed.Enum: "latest_catalog_pricing" "percentage" "none" |
| price_increase_option | booleanIndicates whether to apply an automatic price change when a termed subscription is renewed. |
| plan_id | stringSpecify the ID of a plan to which this price is associated. |
| plan_number | stringSpecify the number of a plan to which this price is associated. This field is required if plan_id is not supplied |
| custom_field_per_unit_rate | stringName of the custom field that will be used to set a per unit rate under the Pre-Rated Per Unit charge model |
| custom_field_total_amount | stringName of the custom field that will be used to set a total amount under the Pre-Rated charge model |

Responses

201

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

post/prices

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

Expand allCollapse all

`{

-   "name": "Recurring Perunit",

-   "description": "Create Price",

-   "start_event": "contract_effective",

-   "recurring": {

    -   "recurring_on": "account_cycle_date",

    -   "usage": false,

    -   "interval": "month",

    -   "interval_count": 1,

    -   "alignment_behavior": "none",

    -   "timing": "in_advance",

    -   "duration_interval": "subscription_term",

    -   "duration_interval_count": 1


    },

-   "tiers_mode": "graduated",

-   "tiers": [

    -   {

        -   "up_to": 10,

        -   "unit_amounts": {

            -   "USD": 10


            }


        },

    -   {

        -   "unit_amounts": {

            -   "USD": 7


            }


        }


    ],

-   "tax_code": "Avalara",

-   "tax_inclusive": false,

-   "unit_of_measure": "Each",

-   "quantity": 15,

-   "price_base_interval": "billing_period",

-   "plan_id": "8ad0877b813e5774018143f39e98059b",

-   "recognized_revenue_accounting_code": "Subscription Revenue",

-   "deferred_revenue_accounting_code": "Subscription Revenue"


}`

Response samples

-   201
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

-   "id": "8ad08ccf8437067601843a7af4e64rq3",

-   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "updated_time": "2022-08-02T05:56:54-07:00",

-   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

-   "created_time": "2022-08-02T05:56:54-07:00",

-   "custom_fields": {

    -   "field__c": "custom field value"


    },

-   "name": "Recurring Perunit",

-   "description": "from Postman",

-   "recurring": {

    -   "on": "subscription_item_start_day",

    -   "usage": false,

    -   "interval": "month",

    -   "interval_count": 1,

    -   "alignment_behavior": "none",

    -   "timing": "in_advance",

    -   "duration_interval": "subscription_term",

    -   "duration_interval_count": 1


    },

-   "start_event": "contract_effective",

-   "tiers_mode": "graduated",

-   "tiers": [

    -   {

        -   "up_to": 10,

        -   "unit_amounts": {

            -   "USD": 10


            }


        },

    -   {

        -   "unit_amounts": {

            -   "USD": 7


            }


        }


    ],

-   "tax_code": "Avalara",

-   "tax_inclusive": false,

-   "unit_of_measure": "Each",

-   "quantity": 15,

-   "price_base_interval": "billing_period",

-   "plan_id": "8ad0877b813e5774018143f39e98059b",

-   "charge_type": "recurring",

-   "charge_model": "tiered"


}`
