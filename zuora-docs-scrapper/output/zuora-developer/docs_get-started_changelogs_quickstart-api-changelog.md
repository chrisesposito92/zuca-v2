---
title: "Quickstart API changelog"
url: "https://developer.zuora.com/docs/get-started/changelogs/quickstart-api-changelog/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:58.729Z"
---

#

Quickstart API changelog

From Zuora Release 2022.09.R1, the Quickstart API is available to customers with the Orders (or Order Harmonization) and Invoice Settlement features enabled. The Quickstart API allows new integrators to swiftly integrate with Zuora, and it supports essential business use cases.

This changelog outlines the latest API updates and resolved issues to the Quickstart API, and documentation updates to the [Quickstart API Reference](https://developer.zuora.com/other-api/quickstart-api/overview/). We would love to hear your feedback on how we can improve it. If you have any comments on the Changelog for the Quickstart API, please send an e-mail to [docs@zuora.com](mailto:docs@zuora.com).

##

September 27, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Create a refund" operation, corrected the schema for the `credit_memo` > `taxation_items` field.

##

August 9, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   For each of the following operations, corrected the HTTP status code for the success response from `200` to `201` :
    -   Post an invoice
    -   Unpost an invoice
-   In the "Preview an existing subscription" operation, updated the Java request sample.

##

July 15, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API update is available as of July 15, 2024.

-   [Accounts](https://developer.zuora.com/other-api/quickstart-api/tag/Accounts/) - In the request body of the "Generate billing documents for an account" operation, updated the data type of the `charges_excluded` parameter from string to array of strings.

##

April 22, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of April 22, 2024.

-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following updates:
    -   Added the following fields to the Order object:

        -   `scheduled_date`
        -   `scheduled_date_policy`

        They can be accessed through the following operations:

        -   Create an order
        -   List orders
        -   Retrieve an order
    -   In the request body of the "Create an order" operation, added the following parameters:
        -   `scheduling_options`
        -   `subscriptions` > `change_reason`
        -   `processing_options` > `apply_credit`
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following updates:
    -   In the request body the "Update a subscription" operation, added the following parameters:
        -   `change_reason`
        -   `add_subscription_plans` > `change_reason`
        -   `add_subscription_plans` > `subscription_plan` > `prices` > `price_change_percentage`
        -   `add_subscription_plans` > `subscription_plan` > `prices` > `price_change_option`
        -   `remove_subscription_plans` > `change_reason`
        -   `replace_subscription_plans` > `change_reason`
        -   `replace_subscription_plans` > `subscription_plan` > `prices` > `price_change_percentage`
        -   `replace_subscription_plans` > `subscription_plan` > `prices` > `price_change_option`
        -   `update_subscription_plans` > `change_reason`
        -   `renew` > `change_reason`
        -   `renewals` > `change_reason`
        -   `pause` > `change_reason`
        -   `resume` > `change_reason`
    -   In the request body of the "Create a subscription" and "Update a subscription" operations, added the following request parameters:
        -   `change_reason`
        -   `subscription_plans` > `prices` > `price_change_percentage`
        -   `subscription_plans` > `prices` > `price_change_option`
    -   In the request body of the "Preview an existing subscription" operation, added the following parameters:
        -   `add_subscription_plans` > `change_reason`
        -   `remove_subscription_plans` > `change_reason`
        -   `replace_subscription_plans` > `change_reason`
        -   `update_subscription_plans` > `change_reason`
    -   Added the `subscription_plan_number` field to the Subscription Plan object. It can be accessed through the following operations by setting the `expand[]=subscription_plans` query parameter:
        -   Create a subscription
        -   Activate a subscription
        -   Pause a subscription
        -   Cancel a subscription
        -   Resume a subscription
        -   Retrieve a subscription
        -   List subscriptions
        -   Update a subscription
        -   List all versions of a subscription
-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - Made the following updates:
    -   Added the following fields to the Price object:

        -   `price_change_percentage`
        -   `price_change_option`
        -   `price_increase_option`

        They can be accessed through the following operations:

        -   Create a price
        -   Retrieve a price
        -   List prices
    -   Added the following parameters to the request body of the "Create a price" and "Update a price" operations:
        -   `price_change_percentage`
        -   `price_change_option`
        -   `price_increase_option`
-   [Subscription Plans](https://developer.zuora.com/other-api/quickstart-api/tag/Subscription-Plans/) - Added the `subscription_plan_number` field to the Subscription Plan object. It can be accessed through the following operations:
    -   Retrieve a subscription plan
    -   List subscription plans
-   [Usage Records](https://developer.zuora.com/other-api/quickstart-api/tag/Usage-Records/) - In the request body of the "Create a usage record" operation, added the `subscription_item_number` parameter.

###

Resolved issues

This section lists the issues that have been resolved as of April 22, 2024.

We have resolved the following issues:

-   Only 3 price tiers was returned in the response of the [Retrieving a price](https://developer.zuora.com/other-api/quickstart-api/operation/getPrice/) operation if the price contains more than 3 price tiers. Now it will return all tiers in this case.
-   When [listing products](https://developer.zuora.com/other-api/quickstart-api/operation/getProducts/) with the exact match ( `EQ` ) filtering condition on the `name` field, no matching results were returned if the product name contained leading or trailing white spaces or other special characters. Now these products are correctly returned.
-   When [retrieving a subscription](https://developer.zuora.com/other-api/quickstart-api/operation/getSubscriptionByKey/) , `subscription_plans` > `subscription_plan_number` was not returned as expected. This issue has been resolved and `subscription_plan_number` is returned as part of the Subscription Plan object.
-   If you did not specify a specific date when trying to downgrade a subscription plan using [Update a subscription](https://developer.zuora.com/other-api/quickstart-api/operation/patchSubscription/) , the date for the new plan was incorrectly set by the system. This issue has been resolved and the date would be automatically set to the end of the billing period as designed.
-   When filtering payment methods with a specific state using the [List payment methods](https://developer.zuora.com/other-api/quickstart-api/operation/getPaymentMethods/) operation, un expected error occurred. This issue has been resolved and the correct collection of payment methods is returned for this case.
-   When [creating a price](https://developer.zuora.com/other-api/quickstart-api/operation/createPrice/) with a payload that doesn't contain the `unit_amounts` , `amounts` , or `tiers` field, an error occurred indicating that these mutually exclusive fields were provided.
-   When attempting to use the default payment gateway for an account by setting `payment_gateway` to `null` in the [Update an account](https://developer.zuora.com/other-api/quickstart-api/operation/updateAccount/) payload, you would run into an `invalid_parameter` error. This issue has been resolved and you can set `payment_gateway` to `null` to use the default payment gateway.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response of [List credit memo items](https://developer.zuora.com/other-api/quickstart-api/operation/getCreditMemoItems/) operation, updated the `credit_memo` field as expandable. This field is returned only if you specify the `expand[]=credit_memo` query parameter.
-   In the response of [List debit memo items](https://developer.zuora.com/other-api/quickstart-api/operation/getDebitMemoItems/) operation, updated the `debit_memo` field as expandable. This field is returned only if you specify the `expand[]=debit_memo` query parameter.

##

January 24, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of Janurary 24, 2024.

-   [Billing Documents](https://developer.zuora.com/other-api/quickstart-api/tag/Billing-Documents/) and [Billing Document Items](https://developer.zuora.com/other-api/quickstart-api/tag/Billing-Document-Items/) - Moved all operations in these sections to the "Deprecated" category. If you have used these operations in your integration, you can continue to use them. However, these operations are no longer under active development.

##

January 10, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of Janurary 10, 2024.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following updates:
    -   In the response body of the following operations, added the `prepaid_balances` field and deprecated the `prepaid_balance` field on the Subscription object:
        -   Create a subscription
        -   List subscriptions
        -   Retrieve a subscription
        -   Update a subscription
        -   Pause a subscription
        -   Resume a subscription
        -   Cancel a subscription
        -   Activate a subscription
        -   List all versions of a subscription
    -   Added the following query parameter to all Subscription operations:
        -   `prepaid_balances.fields[]`
        -   `validity_period.fields[]`
    -   Added `prepaid_balances` as a supported value for the `expand[]` query parameter for the Subscription object. See [Expand responses](https://developer.zuora.com/quickstart-api/tutorial/expand-responses/) for details.
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - For the "List invoices" operation, added support for filtering results by `due_date` . See [Filter lists](https://developer.zuora.com/quickstart-api/tutorial/filter-lists/#invoices) for details.

###

Resolved issues

This section lists the issues that have been resolved as of Janurary 10, 2024.

We have resolved the following issue:

-   Previously, when using the `page_size` query parameter to retrieve the list of subscriptions for the "List orders" operation, not all results were returned. We have resolved this issue by unapplying the `page_size` parameter for this case.

##

December 20, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of December 20, 2023.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following changes:
    -   In the response object of each of the "List subscriptions" and "Retrieve a subscription" operations, added the following fields:
        -   `cancel_reason`
        -   `last_booking_date`
    -   In the request body and response in each of the following operations, added the `currency` field:
        -   Create a subscription
        -   Preview a subscription
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following changes:
    -   In the request body and response of the "Create an order" operation, added the `subscriptions` > `currency` field.
    -   In the request body of the "Preview an order" operation, added the `subscriptions` > `currency` parameter.
    -   For the "Create an order" operation, updated the behavior of the `subscriptions` > `subscription_number` parameter. Now, if you specify an existing `subscription_number` in the request, the order will update that subscription. If the specified `subscription_number` does not exist in the tenant, a new subscription is created instead.
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - In the request body and response of the "Create an invoice" operation, added the `currency` field.
-   [Credit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Credit-Memos/) - In the request body and response of the "Create a credit memo" operation, added the `currency` field.
-   [Debit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Debit-Memos/) - In the request body and response of the "Create a debit memo" operation, added the `currency` field.

###

Resolved issues

This section lists the issues that have been resolved as of December 20, 2023.

We have resolved the following issues:

-   When the request payload for the [Create a payment run](https://developer.zuora.com/other-api/quickstart-api/operation/createPaymentRuns/) operation did not include `bill_cycle_day` , an unexpected error was thrown.
-   For the [Create an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) operation, the `add_subscription_plan` , `update_subscription_plan` , and `replace_subscription_plan` order actions did not include `custom_fields` .
-   When [retrieving a custom object](https://developer.zuora.com/other-api/quickstart-api/operation/getCustomObject/) , if one of the fields was a reference to a Zuora object and the field name ended in `Id__c` , an unexpected error was sometimes thrown.

##

November 29, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of November 29, 2023.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - In the request body of the "Update a subscription" operation, added the `start_on` field and its nested fields, which allows you to update the contract effective date, service activation date, and customer acceptance date of the subscription.
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - In the request body of the "Update a payment method" operation, added the following fields:
    -   `gateway_id`
    -   `gateway_options`
-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - In each of the following operations, added `amounts` as a supported value for the `fields[]` query parameter:
    -   Create a price
    -   Retrieve a price
    -   List prices
    -   Update a price
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following changes:
    -   For the "Create an order" operation, added the support for updating subscriptions for Pre-Rated Pricing charge models.
    -   In the response body of each of the following operations:

        -   Retrieve an order
        -   List orders

        Made the following changes:

        -   Increased the maximum number of subscriptions that can be retrieved for each order from 99 to 300.
        -   Increased the maximum number of order actions across all subscriptions of each order from 99 to 300.

###

Resolved issues

This section lists the issues that have been resolved as of November 29, 2023.

We have resolved the following issues:

-   When retrieving usage overage prices using the "List Prices" operation or using `prices` as a value of the `expand[]` query parameter, the active currencies in `unit_amounts` were returned as `null` .
-   When creating an order, if the `charge_model` field of the price associated with a subscription item was `volume` or `tiered` , and the `amount` field was populated, an unexpected error occurred.
-   When retrieving payment methods using the "List payment methods" or "Retrieve a payment method" operation, if the payment method type was `bacs_debit` and the `bank_code` field was not specified, a 500 error occurred.
-   When retrieving a boolean-type custom field with a `false` value, the returned value might be `true` .
-   When retrieving invoices or debit memos of a specific state using the `state` filter, a 400 error occurred.
-   In the response body of the "List orders" operation, updated the description of the `data` > `subscriptions` > `actions` > `type` field to make it consistent with actual order action types.
-   In the response body of the "Retrieve an order" operation, updated the description of the `subscriptions` > `actions` > `type` field to make it consistent with actual order action types.

##

November 21, 2023

We have reverted all API documentation updates published on November 16, 2023, except for the resolved issue specific to the `renewals` and future-dated `update_subscription_plan` order actions.

These changes will be delivered in an upcoming release.

##

November 16, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of November 16, 2023.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - In the request body of the "Update a subscription" operation, added the `start_on` request parameter, which allows you to update the activation dates of the subscription.
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - In the request body of the "Update a payment method" operation, added the following request parameters:
    -   `gateway_id`
    -   `gateway_options`
-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - In each of the following operations, added `amounts` as a supported value for the `fields[]` query parameter:
    -   Create a price
    -   Retrieve a price
    -   List prices
    -   Update a price

###

Resolved issues

This section lists the issues that have been resolved as of November 16, 2023.

We have resolved the following issues:

-   When retrieving usage-based overage prices using the [List Prices](https://developer.zuora.com/other-api/quickstart-api/operation/getPrices/) operation or when using `prices` as a value of the `expand[]` query parameter, the active currencies in `unit_amounts` were returned as `null` .
-   When [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) that included `renewals` and a future-dated `update_subscription_plan` order action, an unexpected error was thrown.
-   When [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) with the `charge_model` of the price associated with a `subscription_item` set to `volume` or `tiered` , an unexpected error was thrown and the `amount` field was populated even though it was not a valid parameter for these charge models.

##

November 8, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of November 8, 2023.

-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - In the request body of the "Create an order" operation, added the following parameters:
    -   `subscriptions` > `remove_subscription_plans` > `unique_token`
    -   `subscriptions` > `update_subscription_plans` > `start_date`

###

Resolved issues

This section lists the issues that have been resolved as of November 8, 2023.

We have resolved the following issues:

-   When updating a subscription plan against a specific subscription item using the [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) operation, an error occurred indicating that the subscription item does not exist even though it indeed existed.
-   When you were adding future-dated product rate plans to a subscription using the [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) operation, an error occurred.
-   When the `process_options` was left empty when you were [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) , the 500 error response was returned.
-   When the API requests were submitted exceeding the rate limits, the 400 error response was returned instead of the expected 429 response.

##

October 19, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of October 19, 2023.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following updates:
    -   In the request body of the "Update a subscription", added the `renewals` parameter to replace the `renewal` parameter.
    -   In the request body of the "Create a subscription" operation, added the following parameters to support the Pre-Rated Per Unit Pricing charge model:
        -   `subscription_plans` > `prices` > `custom_field_total_amount`
        -   `subscription_plans` > `prices` > `custom_field_per_unit_rate`
-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - In the request body of the "Create a price" operation, added the following parameters to support the Pre-Rated Per Unit Pricing charge model:
    -   `custom_field_total_amount`
    -   `custom_field_per_unit_rate`
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following updates:
    -   In the request body and 200 response body of the "Preview an order" operation, added the `line_items` fields.
    -   In the 200 response body of the "Preview an order" operation, added the `subscriptions` > `actions` > `subscription_items` > `tcv` field.
    -   In the request body of the following operations, added the `subscriptions` > `renewals` parameter to replace the `subscriptions` > `renewal` parameter:
        -   Create an order
        -   Preview an order
    -   In the 200 response body of the "Cancel an order" operation, added the following fields:
        -   `ar_transactions`
        -   `write_offs`

###

Resolved issues

This section lists the issues that have been resolved as of October 19, 2023.

We have resolved the following issues:

-   When creating subscriptions for prices of the Multi-Attribute Pricing charge model using the [Create an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) operation, you might encounter the issue where an error was thrown.
-   When filtering results by `end_date` on the Product object, you might encounter the issue where the results were returned as if you were filtering on `start_date` . This issue has been resolved. In addition, we have enhanced our error handling mechanism for the `filter[]` query paramter. An error will be thrown with details about which filter parameters need to be edited.
-   When updating the `included_units` of an overage charge of a subscription item using the [Create an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) operation, the `included_units` were not updated successfully.
-   When you set `email_zero_amount_invoices` to `true` when [creating a bill run](https://developer.zuora.com/other-api/quickstart-api/operation/createBillRun/) , the result was that the zero-amount invoices were not emailed. On the contrary, setting it to `false` resulted that the zero-amount invoices were sent. This issue has been resolved and the behaviors for setting it to `true` and `false` are inverted.

##

September 25, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of September 25, 2023.

-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - Made the following update:
    -   Added the `taxable` field on the Price object. You can access this field or set this field through the following operations:
        -   Create a price
        -   Update a price
        -   List prices
        -   Retrieve a price
    -   Added support for the `day` enum value for the `recurring` > `interval` field on the Price object for the following operations:
        -   Create a price
        -   Update a price
    -   Enhanced the "Create a price" operation to support multiple-year intervals.
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following updates:
    -   Added the "Delete an order" operation.
    -   Enhanced the "Create an order" operation to support creating subscriptions for overage price.
-   [Bill Runs](https://developer.zuora.com/other-api/quickstart-api/tag/Bill-Runs/) - Added the following parameters to the "Create a bill run" operation:
    -   `type`
    -   `subscription_ids`
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Added the `prepaid_balance` and `contracted_mrr` fields to the returned Subscription object in the response of the following operations:
    -   Retrieve a subscription
    -   List subscriptions
    -   List all versions of a subscription
    -   Create a subscription
    -   Update a subscription
    -   Activate a subscription
    -   Cancel a subscription
    -   Resume a subscription
    -   Pause a subscription

###

Resolved issues

This section lists the issues that have been resolved as of September 25, 2023.

We have resolved the following issues:

-   When [updating a payment method](https://developer.zuora.com/other-api/quickstart-api/operation/updatePaymentMethod/) , if the `billing_details` > `address` > `line1` and `billing_details` > `address` > `line2` fields were specified in the request, the specified values were exchanged in the response.
-   When [listing payments](https://developer.zuora.com/other-api/quickstart-api/operation/getPayments/) with the `expand[]=payment_applied_to` parameter, you might find that debit memos were unexpectedly included in the `applied_to` field, whereas the payment was never applied to debit memos in reality.

##

September 7, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of September 7, 2023.

-   [Payment Schedules](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Schedules) - Added a "Payment Schedules" section that contains the following operations:
    -   Create a payment schedule
    -   Update a payment schedule
    -   Retrieve a payment schedule
    -   Cancel a payment schedule
-   [Payment Schedule Items](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Schedule-Items) - Added a "Payment Schedule Items" section that contains the following operations:
    -   Create a payment schedule item
    -   Update a payment schedule item
    -   Retrieve a payment schedule item
    -   Cancel a payment schedule item
    -   Retry a payment schedule item
    -   Skip a payment schedule item
-   [Accounts](https://developer.zuora.com/other-api/quickstart-api/tag/Accounts/) - Added the `fax` nested parameter to the `bill_to` and `sold_to` parameters in the following operations:
    -   Create an account
    -   Update an account
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - For the `expand[]` query parameter of the Subscription operations, added `invoice_items` as a supported value to allow expanding invoice items.
-   [Refunds](https://developer.zuora.com/other-api/quickstart-api/tag/Refunds/) - For the `expand[]` query parameter of the Refund operations, added the following supported values:
    -   `applied_to.payment`
    -   `applied_to.items`
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following updates to support prepaid products on the "Create an order" operation:
    -   Support the `term_end_day` enum value for the following parameters:
        -   `subscriptions` > `subscription_plans` > `prices` > `recurring` > `recurring_on`
        -   `subscriptions` > `add_subscription_plans` > `subscrption_plan` > `prices` > `recurring` > `recurring_on`
        -   `subscriptions` > `update_subscription_plans` > `subscrption_plan` > `subscription_items` > `recurring` > `recurring_on`
        -   `subscriptions` > `replace_subscription_plans` > `subscrption_plan` > `prices` > `recurring` > `recurring_on`
    -   Support the `term_end` enum value for the following parameters:
        -   `subscriptions` > `subscription_plans` > `prices` > `recurring` > `alignment_behavior`
        -   `subscriptions` > `add_subscription_plans` > `subscrption_plan` > `prices` > `recurring` > `alignment_behavior`
        -   `subscriptions` > `update_subscription_plans` > `subscrption_plan` > `subscription_items` > `recurring` > `alignment_behavior`
        -   `subscriptions` > `replace_subscription_plans` > `subscrption_plan` > `prices` > `recurring` > `alignment_behavior`
-   We have enhanced `custom_fields` to allow being defined as any data type on all objects. Previously it could only be defined as the string type.

###

Resolved issues

This section lists the issues that have been resolved as of September 7, 2023.

We have resolved the following issues:

-   When [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) with custom fields on the Order Action object specified, the request succeeded but the Order Action custom fields were not populated. We have resolved this issue to support custom fields on the Order Action object.
-   When [creating an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) with the `state` parameter set to `draft` , an error would occur indicating that `processing_options` was not supported even if you did not specify the `processing_option` parameter.

##

August 22, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of August 22, 2023.

-   [Bill Runs](https://developer.zuora.com/other-api/quickstart-api/tag/Bill-Runs/) - Made the following updates:
    -   In the request body of the "Create a bill run" operation, added the `name` parameter.
    -   In the 200 response body of the following operations, added the `name` field to the returned Bill Run object:
        -   Create a bill run
        -   Retrieve a bill run
        -   List bill runs
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - In the 200 response body of the following operations, added the `sold_to_id` and `sold_to` fields to the returned Invoice object:
    -   Create an invoice
    -   Retrieve an invoice
    -   List invoices
    -   Update an invoice
    -   Reverse an invoice
    -   Post an invoice
    -   Unpost an invoice
    -   Pay an invoice
    -   Cancel an invoice
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - In the 200 response body of the following operations, added the `sold_to_id` and `sold_to` fields to the returned Subscription object:
    -   Create a subscription
    -   Retrieve a subscription
    -   List subscriptions
    -   Update a subscription
    -   Pause a subscription
    -   Resume a subscription
    -   Cancel a subscription
    -   Activate a subscription
    -   List all versions of a subscription
-   [Taxation Items](https://developer.zuora.com/other-api/quickstart-api/tag/Taxation-Items/) - In the request body of the "Create a taxation item" operation, updated the `invoice_item_id` parameter from optional to required.

###

Resolved issues

This section lists the issues that have been resolved as of August 22, 2023.

We have resolved the following issue:

-   When creating termed subscriptions using the [Create an order](https://developer.zuora.com/other-api/quickstart-api/operation/createOrder/) or [Create a subscription](https://developer.zuora.com/other-api/quickstart-api/operation/createSubscription/) operation without the `renewal_term` parameter specified, you might receive misleading API error messages. We have enhanced the error handling for such a case to clearly indicate that the `renewal_term` field is required when `initial_term.type` is `termed` .

##

May 31, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of May 31, 2023.

####

Enhancements for the Prepaid Drawdown feature

-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - Added `prepayment` and `drawdown` fields to the Price object. The following operations are affected:
    -   Create a price
    -   List prices
    -   Retrieve a price
    -   Update a price
-   [Subscription Items](https://developer.zuora.com/other-api/quickstart-api/tag/Subscription-Items/) - In the response body of the "List subscription items" operation, added the `prepayment` and `drawdown` nested fields to the `price` field.

####

Other enhancents

-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/) - Added the `stacked_discount` and `revenue_recognition_rule` fields to the Price object to support the stacked discount charges. The following operations are affected:
    -   Create a price
    -   Update a price
    -   List prices
    -   Retrieve a price
-   [Refunds](https://developer.zuora.com/other-api/quickstart-api/tag/Refunds/) - In the request body of the "Create a refund" operation, added the `credit_memo` field to support creating a refund for a credit memo.
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following updates:
    -   For the `expand[]` query parameter of the "List all versions of a subscription" operation, added `order` as a supported value to allow expanding on orders.
    -   For the `expand[]` query parameter of all Subscriptions operations, added `invoice_owner_account` as a supported value to support expanding on invoice owner account details.
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - Made the following updates:
    -   Added the `apple_pay` and `google_pay` fields to the Payment Method object. The following operations are affected:
        -   Create a payment method
        -   Retrieve a payment method
        -   List payment methods
        -   Update a payment method
        -   Verify a payment method
    -   Added the `cc_ref` > `card` field to the Payment Method object. The following operations are affected:
        -   Create a payment method
        -   Retrieve a payment method
        -   List payment methods
        -   Update a payment method
        -   Verify a payment method
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - In the response body of all Orders operations, added the `next_page` nested field to the `subscriptions` > `actions` > `subscription_plans` field.
-   [Usage Records](https://developer.zuora.com/other-api/quickstart-api/tag/Usage-Records/) - For the "Create a usage record" operation, added `subscription_number` as a filterable field for the `filter[]` query parameter. See [Filter Lists](https://developer.zuora.com/quickstart-api/tutorial/filter-lists/) for more information.
-   Add support for the `IN` operator for the `filter[]` query parameter to allow filtering on one field with multiple values. For more information about how to use this operator, see [Filter Lists](https://developer.zuora.com/quickstart-api/tutorial/filter-lists/) .
-   The default `page_size` for all List endpoints are now updated to 30. Previously, it was not consistent across the objects.
-   The maximum `page_size` value has been updated to 99. Previously, up to 50 records were allowed.
-   Added support for specifying the fields of the top-level resource without specifying the object name. Previously, it was required that you specify the top level object name such as `account.fields[]` when submitting the "List accounts" request. Either `account.fields[]` or `fields[]` are now allowed to achieve the same result.

###

Resolved issues

This section lists the issues that have been resolved as of May 31, 2023.

We have resolved the following issues:

-   The `account_number` field was not supported as the path parameter for the "Preview an account" operation.
-   When fetching a tiered with overage price or subscription item, an empty tier was returned in the tier list.

##

April 26, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of April 26, 2023.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following updates:
    -   Added the "List all versions of a subscription" operation.
    -   In the request body of the "Cancel a subscription" operation, added the following fields to support the canceling a subscription with write-off use case:
        -   `write_off`
        -   `write_off_behavior`
    -   In the request body of the "Create a subscription" operation, added the `subscription_plans` > `plan_number` field.
    -   In the request body of the "Update a subscription" operation, added the following fields:
        -   `add_subscription_plans` > `subscription_plan` > `plan_number`
        -   `replace_subscription_plans` > `subscription_plan` > `plan_number`
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - In the request body of the "Create an order" operation, added the following fields:
    -   `subscriptions` > `subscription_plans` > `plan_number`
    -   `subscriptions` > `add_subscription_plans` > `plan_number`
    -   `subscriptions` > `replace_subscription_plans` > `subscription_plans` > `plan_number`
-   [Plans](https://developer.zuora.com/other-api/quickstart-api/tag/Plans/) - Made the following updates:
    -   In the request body of each of the following operations, added the `plan_number` field:
        -   Create a plan
        -   Update a plan
    -   In the 200 response body of each of the following operations, added the `plan_number` field:
        -   Retrieve a plan
        -   List plans

##

April 18, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed, as well as general API enhancements.

The following API updates are available as of April 18, 2023.

-   Added the `<object>.fields[]` query parameter to all operations to support returning only the intended fields in the response.
-   [Fulfillments](https://developer.zuora.com/other-api/quickstart-api/tag/Fulfillments/) - Added the "Fulfillments" section that contains the following operations:
    -   Create a fulfillment
    -   Create fulfillments
    -   Retrieve a fulfillment
    -   List fulfillments
    -   Update a fulfillment
    -   Delete a fulfillment
-   [Fulfillment Items](https://developer.zuora.com/other-api/quickstart-api/tag/Fulfillment-Items/) - Added the "Fulfillment Items" section that contains the following operations:
    -   Create a fulfillment item
    -   Create fulfillment items
    -   Retrieve a fulfillment item
    -   List fulfillment items
    -   Update a fulfillment item
    -   Delete a fulfillment item
-   [Bill Run Previews](https://developer.zuora.com/other-api/quickstart-api/tag/Bill-Run-Previews/) - Added the "Bill Run Previews" section that contains the following operations:
    -   Create a bill run preview
    -   Retrieve a bill run preview
-   [Query Runs](https://developer.zuora.com/other-api/quickstart-api/tag/Query-Runs/) - Added the "Query Runs" section that contains the following operations:
    -   Create a query run
    -   Retrieve a query run
    -   Cancel a query run
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Added the following operations:
    -   Activate an order
    -   Cancel an order
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - Added the following operations:
    -   Create a payment authorization
    -   Cancel a payment authorization
-   [Accounts](https://developer.zuora.com/other-api/quickstart-api/tag/Accounts/) - Made the following changes:
    -   Added support for the account number to be used in the `account_id` path parameter:
        -   Retrieve an account
        -   Update an account
        -   Delete an account
        -   Generate billing document for an account
    -   Added the following supported values for the `expand[]` query parameter on the Account object:
        -   `credit_memos`
        -   `debit_memos`
        -   `invoices`
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Added support for the invoice number to be used in the `invoice_id` path parameter for the following operations:

    -   Update an invoice
    -   Post an invoice
    -   Unpost an invoice

    Previously, only the invoice ID was allowed.

-   [Payment Runs](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Runs/) - Added `summary` as the supported value for the `expand[]` parameter to retrieve the payment run summary information.
-   Deprecated the `balance` field on the following objects and replaced it with the `remaining_balance` field:
    -   Billing Document
    -   Invoice
    -   Credit Memo
    -   Debit Memo

###

Resolved issues

This section lists the issues that have been resolved as of April 18, 2023.

We have resolved the following issues:

-   If there was incorrect user or tenant permission when using the [Update a price](https://developer.zuora.com/other-api/quickstart-api/operation/patchPrice/) operation to update a price, the internal server error was thrown.
-   When [creating a contact](https://developer.zuora.com/other-api/quickstart-api/operation/createContact/) or [updating a contact](https://developer.zuora.com/other-api/quickstart-api/operation/updateContact/) , the specified `nickname` field was ignored.
-   When you attempted to make API calls without the Orders feature enabled for your tenant, an unclear error message was returned. We have enhanced error handling for this case.

##

March 13, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of March 13, 2023.

####

Enhancements for the Flexible Billing feature

Made the following changes to support the Flexible Billing feature:

-   [Credit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Credit-Memos/) - Added the following fields:

    -   `bill_to_id`
    -   `bill_to` (expandable)
    -   `billing_document_settings`

    To the Credit Memo object in the response body of the following operations:

    -   Retrieve a credit memo
    -   List all credit memos
    -   Create a credit memo
    -   Update a credit memo
    -   Apply a credit memo
    -   Unapply a credit memo
    -   Unpost a credit memo
    -   Post a credit memo
    -   Cancel a credit memo
-   [Debit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Debit-Memos/) - Added the following fields:

    -   `bill_to_id`
    -   `bill_to` (expandable)
    -   `billing_document_settings`
    -   `payment_terms`

    To the Debit Memo object in the response body of the following operations:

    -   Retrieve a debit memo
    -   List debit memos
    -   Create a debit memo
    -   Update a debit memo
    -   Cancel a debit memo
    -   Post a debit memo
    -   Unpost a debit memo
    -   Pay a debit memo
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Added the following fields:

    -   `bill_to_id`
    -   `bill_to` (expandable)
    -   `billing_document_settings`
    -   `payment_terms`

    To the Invoice object in the response body of the following operations:

    -   Retrieve an invoice
    -   List invoices
    -   Create an invoice
    -   Update an invoice
    -   Reverse an invoice
    -   Post an invoice
    -   Cancel an invoice
    -   Write off an invoice
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Made the following changes:

    -   Added the following fields:

        -   `bill_to_id`
        -   `billing_document_settings`
        -   `payment_terms`

        To the request body of the following operations:

        -   Create a subscription
        -   Preview a subscription
        -   Update a subscription
    -   Added the following fields:

        -   `bill_to_id`
        -   `bill_to` (expandable and read-only)
        -   `billing_document_settings`
        -   `payment_terms`

        To the Subscription object in the response body of the following operations:

        -   Retrieve a subscription
        -   List subscriptions
        -   Create a subscription
        -   Update a subscription
        -   Pause a subscription
        -   Resume a subscription
        -   Cancel a subscription
        -   Activate a subscription
        -   Cancel a subscription

    Note that these fields are only applicable for new subscriptions, or updating a subscription when changing terms, invoice owners, or renewals.

-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following changes:

    -   Added the following nested fields:

        -   `subscriptions` > `bill_to_id`
        -   `subscriptions` > `billing_document_settings`
        -   `subscriptions` > `payment_terms`

        To the request body of the following operations:

        -   Create an order
        -   Preview an order
    -   Added the following nested fields:

        -   `subscriptions` > `bill_to_id`
        -   `subscriptions` > `bill_to` (expandable and read-only)
        -   `subscriptions` > `billing_document_settings`
        -   `subscriptions` > `payment_terms`

        To the Order object in the response body of the following operations:

        -   List orders
        -   Retrieve an order
        -   Create an order
        -   Preview an order

    Note that these fields are only applicable for new subscriptions, or updating a subscription when changing terms, invoice owners, or renewals.


####

Other API enhancements

-   [Payment Runs](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Runs/) - Added the "Payment Runs" section that contains the following operations:
    -   Create a payment run
    -   List payment runs
    -   Retrieve a payment run
    -   Update a payment run
    -   Delete a payment run
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Added the following operation:
    -   Preview an existing subscription
    -   List subscription items
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Made the following updates:
    -   Added the `canceled_time` supported value to the `state_transitions` field of the Invoice object.
    -   Changed the following `state` field enum values for the Invoice object:
        -   Updated `open` to `posted`
        -   Updated `uncollectible` to `canceled`
-   [Debit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Debit-Memos/) and [Credit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Credit-Memos/) - Made the following value changes for the `state` field for the Credit Memo and Debit Memo objects:
    -   Updated `open` to `posted`
    -   Updated `uncollectible` to `canceled`
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - Added `other` to the `type` field enum values of the Payment Method object to indicate external payment methods.

###

Resolved issues

This section lists the issues that have been resolved as of March 13, 2023.

We have resolved the following issue:

-   The description on an account could not be successfully updated when using the [Update an account](https://developer.zuora.com/other-api/quickstart-api/operation/updateAccount/) operation.
-   When you were using the [Uncancel a subscription](https://developer.zuora.com/other-api/quickstart-api/operation/uncancelSubscription/) operation, an unexpected error would be thrown if the cancellation was created within around 2 seconds of the subscription creation. We have resolved this issue by ensuring that the subscription can be successfully updated and enhancing the error message.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added all error responses to all operations.

##

March 7, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of March 7, 2023.

-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Made the following updates:
    -   Added the following operations:
        -   Email an invoice
        -   Write off an invoice
    -   In the "List invoice items" operation, added the `line_item` expand\[\] parameter to support expanding order line items on invoice items.
-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following updates:
    -   In the request body of the "Create an order" operation, added the `subscription` > `term` nested field to support changing terms and conditions in an order.
    -   In the following operations, added the `account` and `line_items.invoice_items` expand\[\] parameters:
        -   List orders
        -   Create an order
        -   Retrieve an order
-   [Usage Records](https://developer.zuora.com/other-api/quickstart-api/tag/Usage-Records/) - In the following operations, added the `account` expand\[\] parameter to support expanding account data on usage records:
    -   Create a usage record
    -   Retrieve a usage record
    -   List usage records
    -   Update a usage record
-   [Accounts](https://developer.zuora.com/other-api/quickstart-api/tag/Accounts/) - In the following operations, added the `usage_records` expand\[\] parameter to support expanding usage records on accounts:
    -   Create an account
    -   List all accounts
    -   Retrieve an account
    -   Update an account

###

Resolved issues

This section lists the issues that have been resolved as of March 7, 2023.

We have resolved the following issue:

-   An unexpected error was thrown if you attempted to create a refund for an existing payment using [Create a refund](https://developer.zuora.com/other-api/quickstart-api/operation/createRefund/) when the Invoice Settlement feature was not enabled.

##

February 27, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of February 27, 2023.

-   [Bill Runs](https://developer.zuora.com/other-api/quickstart-api/tag/Bill-Runs/) - Added the "Bill Runs" section with the following operations:
    -   Create a bill run
    -   Retrieve a bill run
    -   List bill runs
    -   Update a bill run
    -   Delete a bill run
    -   Post a bill run
    -   Cancel a bill run
-   [Taxation Items](https://developer.zuora.com/other-api/quickstart-api/tag/Taxation-Items/) - Added the "Taxation Items" section with the following operations:
    -   Create a taxation item
    -   Retrieve a taxation item
    -   List taxation items
    -   Update a taxation item
    -   Delete a taxation item
-   [Usage Records](https://developer.zuora.com/other-api/quickstart-api/tag/Usage-Records/) - Added the "Usage Records" section with the following operations:
    -   Create a usage record
    -   Retrieve a usage record
    -   List usage records
    -   Update a usage record
    -   Delete a usage record
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Added the following operations:
    -   Update an invoice
    -   Reverse an invoice
    -   Pay an invoice
    -   Delete an invoice
-   [Debit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Debit-Memos/) - Added the following operations:
    -   Update a debit memo
    -   Pay a debit memo
    -   Cancel a debit memo
    -   Delete a debit memo
-   [Credit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Credit-Memos/) - Made the following updates:
    -   Added the following operations:
        -   Update a credit memo
        -   Delete a credit memo
    -   In the `billing_documents` > `items` nested field of the request body of the "Apply a credit memo" operation, added the following fields:
        -   `credit_memo_item_id`
        -   `credit_memo_taxation_item_id`
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - Added the "Scrub a payment method" operation.

##

February 6, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of February 6, 2023.

-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Made the following updates:
    -   Added the "List orders" operation.
    -   In the `subscription` field in the request body of the "Create an order" operation, added the `replace_subscription_plans` nested field.
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - In the request body of the "Update a subscription" operation, added the `replace_subscription_plans` field.
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Added the following operations:
    -   List invoice items
    -   Post an invoice
    -   Unpost an invoice
    -   Cancel an invoice
-   [Debit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Debit-Memos/) - Added the following operations:
    -   List debit memo items
    -   Post a debit memo
    -   Unpost a debit memo
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/) - Added the "Verify a payment method" operation.
-   [Refunds](https://developer.zuora.com/other-api/quickstart-api/tag/Refunds/) - Added the following operations:
    -   Delete a refund
    -   Cancel a refund
-   For all GET methods that retrieve a single object, added the `page_size` query parameter.

###

Resolved issues

This section lists the issues that have been resolved as of February 6, 2023.

We have resolved the following issues:

-   When you retrieved a billing document using the [Retrieve a billing document](https://developer.zuora.com/other-api/quickstart-api/operation/getBillingDocument/) while expanding on `items` , the cursor of the billing document item returned duplicate values.
-   When you created or updated a bank transfer payment method using the [Create a payment method](https://developer.zuora.com/other-api/quickstart-api/operation/createPaymentMethod/) or [Update a payment method](https://developer.zuora.com/other-api/quickstart-api/operation/updatePaymentMethod/) operation, the `billing_details` field could not be successfully set.
-   When you created or updated a contact using the [Create a contact](https://developer.zuora.com/other-api/quickstart-api/operation/createContact/) or [Update a contact](https://developer.zuora.com/other-api/quickstart-api/operation/updateContact/) operation, the `address` > `county` field could not be successully set.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the request and response payload examples to each of the following operations:
    -   Create an order
    -   Preview an order

##

January 16, 2023

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of January 16, 2023.

-   [Orders](https://developer.zuora.com/other-api/quickstart-api/tag/Orders/) - Added the "Orders" section that contains the following operations:
    -   Create an order
    -   Preview an order
    -   Retrieve an order
-   [Invoices](https://developer.zuora.com/other-api/quickstart-api/tag/Invoices/) - Added the "Invoices" section that contains the following operations:
    -   Create an invoice
    -   Retrieve an invoice
    -   List all invoices
-   [Credit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Credit-Memos/) - Added the "Credit Memos" section that contains the following operations:
    -   Create a credit memo
    -   Apply a credit memo
    -   Unapply a credit memo
    -   Post a credit memo
    -   Unpost a credit memo
    -   Retrieve a credit memo
    -   List all credit memos
-   [Debit Memos](https://developer.zuora.com/other-api/quickstart-api/tag/Debit-Memos/) - Added the "Debit Memos" section that contains the following operations:
    -   Create a debit memo
    -   Retrieve a debit memo
    -   List all debit memos
-   [Accounts](https://developer.zuora.com/other-api/quickstart-api/tag/Accounts/) - Made the following updates:
    -   In the request body of each of the following operations, added the `sales_rep` field:
        -   Create an account
        -   Update an account
    -   In the response body of each of the following operations, added the `sales_rep` field:
        -   Retrieve an account
        -   List all accounts
-   Added the following query parameters to the List operations on all objects:
    -   `page_size`
    -   `sort[]`

##

December 20, 2022

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of December 20, 2022.

-   [Contacts](https://developer.zuora.com/other-api/quickstart-api/tag/Contacts/) - Made the following updates:
    -   Added the "Scrub a contact" operation.
    -   In the request body of each of the following operations, renamed the `nick_name` field to `nickname` :
        -   Create a contact
        -   Update a contact
    -   In the 200 response of each of the following operations, renamed the `nick_name` field to `nickname` :
        -   Create a contact
        -   Update a contact
        -   Retrieve a contact
        -   List all contacts

###

Resolved issues

This section lists the issues that have been resolved as of December 20, 2022.

We have resolved the following issues:

-   An issue that prevented you from setting the `state` field of a tax certificate to `verified` using the following operations:
    -   Create an account
    -   Update an account
-   An issue that prevented you from specifying the sales representative associated with an account using one of the following operations:
    -   Create an account
    -   Update an account
-   An issue that prevented you from setting the `reason_code` field when creating credit memos from invoices, using the "Create a billing document" operation.
-   An unexpected error was thrown when running a workflow with the required parameters using the "Run a workflow" operation.

##

December 9, 2022

###

Resolved issues

This section lists the issues that have been resolved as of December 9, 2022.

We have resolved the following issue:

-   In the response body of each of the following operations, some fields on the custom object were not returned:
    -   List custom objects
    -   Create a custom object
    -   Retrieve a custom object
    -   Update a custom object

##

December 5, 2022

###

API Updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of December 5, 2022.

-   In all "Create" and "Update" requests of Zuora standard objects, added the `expand[]` query parameter. It allows you to expand related objects when creating or updating an object, and the related objects will be expanded in the response.
-   [Payment Methods](https://developer.zuora.com/other-api/quickstart-api/operation/createPaymentMethod/) - In the request body of the "Create a payment method" operation, updated the `account_id` field to an optional field.
-   [Custom Objects](https://developer.zuora.com/other-api/quickstart-api/tag/Custom-Objects/) - In the following operations, added the `expand[]` query parameter:
    -   Retrieve a custom object
    -   List custom objects Note that you can expand Zuora objects to related custom objects by specifying the custom objects' plural names.
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - In the `filter[]` query parameter of the following operations, added support for filtering by `end_date` :
    -   Retrieve a subscription
    -   List all subscriptions

###

Resolved issues

This section lists the issues that have been resolved as of December 5, 2022.

We have resolved the following issues:

-   When the `apply` field was set to `true` in the request body of the "Create a billing document" operation, the credit memo was not automatically applied.
-   The `price_id` field on the billing document item was not returned in the response body of the following operations:
    -   List billing document items
    -   Retrieve a billing document
    -   List all billing documents
-   When the `account_data` field was specified in the request body of the "Preview a subscription" operation, an error occurred.

##

November 21, 2022

###

API changes

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of November 21, 2022.

-   [Contacts](https://developer.zuora.com/other-api/quickstart-api/tag/Contacts/) - Made the following updates:
    -   In the request body of each of the following operations, renamed the `nickname` field to `nick_name` :
    -   Create a contact
    -   Update a contact
    -   In the 200 response of each of the following operations, renamed the `nickname` field to `nick_name` :
    -   Create a contact
    -   Update a contact
    -   Retrieve a contact
    -   List all contacts
-   [Refunds](https://developer.zuora.com/other-api/quickstart-api/tag/Refunds/) - In the 200 response body of each of the following operations, added the `comment` field:
    -   Create a refund
    -   Update a refund
    -   Retrieve a refund
    -   List all refunds

###

Resolved issues

This section lists the issues that have been resolved as of November 21, 2022.

We have resolved the following issues:

-   The `updated_time` field of the Billing Document Item object was not returned in the 200 response body of the following operations:
    -   Create a billing document
    -   Retrieve a billing document
    -   List all billing documents
    -   List billing document items
-   The `reason_code` field of the Billing Document object was not returned in the 200 response body of the following operations:
    -   Create a billing document
    -   Retrieve a billing document
    -   List all billing documents
-   The `description` field of the Refund object was not returned in the 200 response of the following operations:
    -   Create a refund
    -   Update a refund
    -   Retrieve a refund
    -   List all refunds
-   The `active_currencies` field of the Plan object was not returned in the 200 response body of the following operations:
    -   Create a plan
    -   Update a plan
    -   Retrieve a plan
    -   List all plans
-   If you specified an unknown field called `payment_gateway` in the request using the “Create a payment method” operation, this field was incorrectly identified as the `gateway_id` field instead of `payment_gateway` in the error response.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the Quickstart API Reference to highlight that the following features must be enabled to use the Quickstart API:
    -   Orders or Orders Harmonization
    -   Invoice Settlement
-   Removed the misdocumented `account_number` from the 200 response body of each of the following operations:
    -   Create a subscription
    -   Update a subscription
    -   Retrieve a subscription
    -   List all subscriptions
    -   Pause a subscription
    -   Resume a subscription
    -   Cancel a subscription
    -   Activate a subscription
    -   Preview a subscription
-   In the request body of the "Create a billing document" operation, updated the description of the following fields:
    -   `reason_code`
    -   `invoice_id`
    -   `exclude_from_auto_apply_rules`
    -   `items` > `document_item_date`
    -   `items` > `name`

##

November 7, 2022

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   For the "Create a custom object" operation, added the missing definition for the `custom_object_type` path parameter.
-   For the "Create a subscription" operation, corrected the request sample of the JSON payload.
-   In the 200 response body of each of the following operations:
    -   Retrieve a subscription plan
    -   List all subscription plans
-   Removed the following redundant fields:
    -   `plan`
    -   `product`

##

October 24, 2022

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of October 24, 2022.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Added the "Preview a subscription" operation. This operation allows you to preview the charge metrics and invoice items of a subscription.

###

Resolved issues

This section lists the issues that have been resolved as of October 24, 2022.

We have resolved the following issues:

-   An issue where the `state` field of the subscription item was set to `expired` when the subscription item was still active. This issue applied to the following operations:
    -   Retrieve a subscription
    -   List all subscriptions
    -   Retrieve a subscription plan
    -   List all subscription plans
-   An issue that prevented you from successfully specifying the following fields on a contact using the [Create a contact](https://developer.zuora.com/other-api/quickstart-api/operation/createContact) operation:
    -   `home_phone`
    -   `tax_region`
    -   `nickname`
    -   `other_phone`

##

October 17, 2022

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of October 17, 2022.

-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/) - Made the following changes:
    -   In the 200 response body of each of the following operations, added the `version` field that can be used in the `filter[]` query parameter to filter subscriptions:
        -   Retrieve a subscription
        -   Update a subscription
        -   List all subscriptions
        -   Create a subscription
        -   Pauses a subscription
        -   Resume a subscription
        -   Cancel a subscription
        -   Activate a subscription
    -   In the request body of the "Resume a subscription" operation, added the `resume_at` field that allows you to resume a paused subscription from the pause date.
-   [Products](https://developer.zuora.com/other-api/quickstart-api/tag/Products/) - In the request body of the "Update a product" operation, added the `sku` field.
-   [Custom Objects](https://developer.zuora.com/other-api/quickstart-api/tag/Custom-Objects/) - In the "List custom objects" operation, removed the `expand[]` and `filter[]` query parameters.
-   In all requests, added the following header parameters to support request and response compression:
    -   `Content-Encoding`
    -   `Accept-Encoding`

###

Resolved issues

This section lists the issues that have been resolved as of October 17, 2022.

We have resolved the following issues:

-   A 400 error was returned when you attempted to create a subscription with an invalid `start_date` field using the [Create a subscription](https://developer.zuora.com/other-api/quickstart-api/operation/createSubscription) operation
-   An issue that prevented you from using the `parent_account_id` field in the `filter[]` query parameter to filter accounts using the [List all accounts](https://developer.zuora.com/other-api/quickstart-api/operation/getAccounts) operation
-   An incomplete response was returned when you attempted to create a subscription by specifying mutually exclusive fields, `account_id` and `account_data` , using the [Create a subscription](https://developer.zuora.com/other-api/quickstart-api/operation/createSubscription) operation

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the "Request and Response Compression" section.
-   In the 200 response body of each of the following operations:

    -   Retrieve a payment
    -   Update a payment
    -   List all payments
    -   Create a payment
    -   Cancel a payment
    -   Apply a payment
    -   Unapply a payment

    Corrected the description of the following fields:

    -   `state_transitions` > `canceled_time`
    -   `gateway_state_transitions` > `marked_for_submission_time`
    -   `gateway_state_transitions` > `settled_time`
    -   `gateway_state_transitions` > `submitted_time`

##

September 30, 2022

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of September 30, 2022.

-   [Prices](https://developer.zuora.com/other-api/quickstart-api/tag/Prices/)  - Made the following changes:
    -   In the following places:

        -   The request body of the "Create a price" operation
        -   The request body of the "Update a price" operation
        -   The response body of the "Retrieve a price" operation
        -   The response body of the "List all prices" operation

        Made the following changes:

        -   Updated the following fields as deprecated:
            -   `recognized_revenue_accounting_code`
            -   `deferred_revenue_accounting_code`
        -   Moved the following fields within the  `revenue`  field as nested fields:
            -   `exclude_item_booking_from_revenue_accounting`
            -   `exclude_item_booking_from_revenue_accounting`
    -   In the response body of each of the following operations, updated the  `active`  field as deprecated:
        -   Retrieve a price
        -   List all prices
-   [Billing Document Items](https://developer.zuora.com/other-api/quickstart-api/tag/Billing-Document-Items/)  - In the "List billing document items" operation, enhanced the  `expand[]`  query parameter to support expanding the associated billing documents.
-   [Subscriptions](https://developer.zuora.com/other-api/quickstart-api/tag/Subscriptions/)  - In the request body of the "Pause a subscription" operation, updated the processing logic of the  `pause_interval`  and  `pause_interval_count`  fields. They now define the period where the subscription is paused. Previously they were used to define the period before the pause begins.
-   [Plans](https://developer.zuora.com/other-api/quickstart-api/tag/Plans/)  - In the request body of the "Create a plan" operation, updated the processing logic of the `start_date`  and  `end_date`  fields. If the  `start_date`  and  `end_date`  fields are not specified in the request, they are automatically set based on the  `start_date`  and  `end_date`  of the parent product of this plan.
-   Added the  `idempotency-key`  header parameter to all POST and PATCH operations
-   Enhanced error handling by providing the  `invalid_parameter`  error code consistently in the error response for all operations.\\

###

Resolved issues

This section lists the issues that have been resolved as of September 30, 2022.

We have resolved the following issues:

-   An unhelpful error message was returned when creating an evergreen subscription with the  `auto_renew`  field set to  `true`  using the  [Create a subscription](https://developer.zuora.com/quickstart-api/operation/createSubscription)  operation.
-   An unexpected  `invalid_value`  error code was returned when creating a subscription with the initial term set as the  `evergreen`  type and with  `interval_count`  and  `interval`  specified in the request body of the  [Create a subscription](https://developer.zuora.com/quickstart-api/operation/createSubscription)  operation.
-   The  `created_time` ,  `updated_time` ,  `created_by_id` , and  `updated_by_id`  fields were not returned in the response of the  [Create a subscription](https://developer.zuora.com/quickstart-api/operation/createSubscription)  operation.
-   The created payment method was unexpectedly set as the default payment method for an account using the  [Create a payment method](https://developer.zuora.com/quickstart-api/operation/createPaymentMethod)  operation.
-   Some fields in the response were returned as  `null`  even though the payment method was created successfully using the  [Create a payment method](https://developer.zuora.com/quickstart-api/operation/createPaymentMethod)  operation.
-   A 500 error was returned when you were deleting a product using the  [Delete a product](https://developer.zuora.com/quickstart-api/operation/deleteProduct)  operation.
-   An issue that prevented you from updating an ACH payment method using the  [Update a payment method](https://developer.zuora.com/quickstart-api/operation/updatePaymentMethod)  operation.
-   An issue that prevented you from applying the  `tax_identifier`  field to an account using the  [Create an account](https://developer.zuora.com/quickstart-api/operation/createAccount)  operation.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the "Idempotent Requests" section.
-   In the request body of the "Pause a subscription" operation, updated the description of the  `pause_at`  field to indicate that it can be used to pause a subscription on a specific date or pause from the end of the current invoice period.
-   In the request body of the "Update an account" operation, removed the incorrect  `currency`  field.
-   In the request body of the "Create an account" operation, updated the description of the  `currency`  field.

##

September 20, 2022

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of September 20, 2022.

-   [Accounts](https://developer.zuora.com/quickstart-api/tag/Accounts) - Removed the `account_id` nested field from the `bill_to` and `sold_to` fields in the request body of each of the following operations:
    -   Create an account
    -   Update an account
-   [Refunds](https://developer.zuora.com/quickstart-api/tag/Refunds) - Made the following changes:
    -   In the request body of each of the following operations, removed the `transfer_to_accounting` field:
        -   Create a refund
        -   Update a refund
    -   In the response schema of each of the following operations, removed the `transferred_to_accounting` field:
        -   List all refunds
        -   Retrieve a refund
    -   Added the "Update a refund" operation.
-   [Payments](https://developer.zuora.com/quickstart-api/tag/Payments) - Made the following changes:
    -   Added the "Unapply a payment" operation.
    -   In the request body of the "Create a payment" operation, added the `gateway_options` field.
-   For all DELETE operations, we now return the **204 No Content** status code for successful requests.

###

Resolved issues

This section lists the issues that have been resolved as of September 20, 2022.

We have resolved the following issues:

-   An issue that prevented you from updating a tiered price using the [Update a price](https://developer.zuora.com/quickstart-api/operation/patchPrice) operation
-   An issue that prevented you from creating a refund from an invoice using the [Create a refund](https://developer.zuora.com/quickstart-api/operation/createRefund) operation
-   An issue that prevented you from creating a refund with the `statement_descriptor_phone` field specified using the [Create a refund](https://developer.zuora.com/quickstart-api/operation/createRefund) operation
-   An issue that prevented you from creating a billing document with the `taxation_items` field specified using the [Create a billing document](https://developer.zuora.com/quickstart-api/operation/postBillingDocument) operation
-   An issue that prevented you from creating a credit memo from an invoice using the [Create a billing document](https://developer.zuora.com/quickstart-api/operation/postBillingDocument) operation
-   An issue that prevented you from creating a credit memo while excluding the credit memo from being automatically applied to future charges using the [Create a billing document](https://developer.zuora.com/quickstart-api/operation/postBillingDocument) operation
-   An issue that prevented you from paging through subscription plans in the response for the [List all subscriptions](https://developer.zuora.com/quickstart-api/operation/getSubscriptions) and [Retrieve a subscription](https://developer.zuora.com/quickstart-api/operation/getSubscriptionByKey) operations
-   An incorrect response code was returned when retrieving a billing document with an unknown identifier using the [Retrieve a billing document](https://developer.zuora.com/quickstart-api/operation/getBillingDocument) operation
