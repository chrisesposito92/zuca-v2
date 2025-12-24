---
title: "Billing and payment information for customer accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/billing-and-payment-information-for-customer-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:16:10.965Z"
---

# Billing and payment information for customer accounts

This topic provides detailed information on billing and payment settings for customer accounts, including auto-pay, payment terms, payment gateways, and invoice preferences.

## Auto-Pay

Auto-pay indicates to Zuora Billing that the customer has authorized you to use any electronic payment methods you have on file to collect on any invoices sent to the customer. When enabled, Zuora will automatically collect payments for this account.

You must set an electronic Zuora Payment as the Default Payment Method to be able to select Auto-Pay .

## Payment Term

Payment terms define when customers will pay for their goods and services. It is common for such terms to be included in a customer’s license or services contract (the contract that governs the subscription).

For example, a customer with Due Upon Receipt as their payment term has agreed to pay their invoice upon receipt of the invoice; a customer with Net 60 day payment terms has agreed to pay their invoice within 60 days of the invoice date.

When creating a customer account, you must specify an active payment term. Otherwise, the account creation fails. If no payment term is specified, the default payment term in the Billing Settings > Payment Terms setting will be used.

Payment terms can be customized in your Zuora Billing Admin Settings .

## Payment Gateway

If your company has enabled one or more payment gateways to be used for processing payments, Payment Gateway (on the customer account) will indicate which payment gateway to use when processing payment a customer.

When a customer account is created, Zuora Billing will default the Payment Gateway to Use Default Gateway. However, if your company has set up more than one payment gateway, you can edit the customer account (under Billing and Payment Terms) to indicate use of a different payment gateway for the customer account.

## Default Payment Method

You can indicate on a customer account which payment method is the default payment method to use for the account. If Auto-Pay is enabled, the default payment method must be set to an electronic payment method on file for that account.

This field is optional.

## Currency

This is the currency that your customer will be billed in. Each account can only be billed in one active currency. All transactions (invoices, payments, adjustments) for the account are billed in this currency.

Zuora does not allow you to change the currency for a customer account after it has been created. See Changing the Currency in a Customer Account for a full explanation and workarounds (if you need to change the currency of an account at a later time).

## PO Number

This is the purchase order number provided by your customer for services and/or products purchased. Only one PO number can be stored in the customer account at one time. The PO number can be referenced on any generated invoices.

## Billing Batch

Each customer account must be placed in a specific billing batch. You can select from batch numbers 1-20. You can assign all customer accounts to the same batch, or you can assign accounts to different batches. Placing customers in different batches allows for separate processing.

Consider batching your customers by payment method so that you can process each method separately. For example, Batch 1 can contain all customers paying by credit card, Batch 2 can contain all customers paying by check, and Batch 3 can contain all customers that are paying by wire transfer.

## Bill Cycle Day

The bill cycle day is the day of the month that your customer will be billed. See Customer Account Dates: Bill Cycle Day for more information about this setting.

## Invoice Template

You can choose which invoice template (format) you prefer the invoice to be displayed in. If left blank, the default invoice template will be used.

See Manage Billing Document Configuration for information about configuring the templates that will be available when creating customer accounts. See Creating a Custom Invoice Template for detailed information about creating a custom invoice templates.

## Allow Invoice Editing

Zuora Billing allows users to edit invoices in draft status. For example, quantity and price can be edited at the invoice line item level.

## Invoice Delivery Preference

This is the preferred method for your customer to receive their invoices. Available delivery options include Print for postal mail or Email for electronic email directly from Zuora Billing. You can email in batches or individually. In order to specify email, the Bill To contact must have a valid email address.

If you select Email , the Additional Email Addresses field appears. You can enter additional email addresses there, separating them with commas.

Upon invoice posted, the invoice will be sent to all email addresses in this list in addition to the email address that is configured in the To Email field of the email template. Note that this feature is available only if the Notification and the Configurable Event features are not enabled for your tenant.

See Invoice Delivery Methods for more information.

## Communication Profile

Zuora's customer notifications feature allows you to create communication profiles to manage notifications for different segments of customers. This field allows you to set the communication profile to be used for a specific customer account.

See Notifications for more information about using this feature.
