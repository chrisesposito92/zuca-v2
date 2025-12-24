---
title: "E-invoice file template configuration and complete end-to-end testing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:11.754Z"
---

# E-invoice file template configuration and complete end-to-end testing

This article describes how to prepare data for testing and complete end-to-end testing for e-invoicing with the Sovos sandbox environment.

## Data preparation for end-to-end testing

Before conducting end-to-end testing, you must configure your Zuora tenant to prepare data for testing such as customer accounts, subscriptions, and invoices.

## Country-specific settings configuration

You might need to configure country-specific settings if you want to e-invoice your customers in particular countries. For example, specifying specific business information on business regions or creating custom fields on standard objects.

For more information, see [Country-specific configurations management](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management).

## E-invoicing profile configuration for customer accounts

You have the flexibility to enable e-invoicing for customers based on the regulatory requirements of countries. For example, you can enable e-invoicing only for business customers or customers from particular countries.

When enabling e-invoicing for a customer who acts as a buyer, you must collect the business profile of the customer and configure the e-invoicing profile during the customer account creation or modification. For more information about supported profile settings, see [E-invoicing profile settings for accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts).

To configure the e-invoicing profile for a customer account in Zuora UI, see [Configure e-invoicing profiles for accounts through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts).

Alternatively, you can use the [Create an account](https://developer.zuora.com/api-references/api/operation/POST_Account/) or [Update an account](https://developer.zuora.com/api-references/api/operation/PUT_Account/) API operation.

## Subscriptions and invoices creation

For testing purposes, you must create subscriptions and invoices with taxation information.

To create a subscription, see [Create subscriptions](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions).

When subscriptions are created, you can create bill runs to generate invoices. For more information, see [Create bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation).

## E-invoice file templates creating and testing

Before sending electronic billing documents to the Sovos sandbox environment, you must create e-invoice file templates in Zuora for Invoice, Credit Memo, and Debit Memo.

When a billing document is posted for a customer from a country that supports e-invoicing, Zuora generates a Sovos-compliant electronic billing document based on the e-invoice file template and then sends the electronic billing document to Sovos.

For more information about Sovos' requirements regarding the document format, see [Standard business documents for Sovos](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos).

The procedure for creating an e-invoice file template varies depending on whether it is for a country with which Zuora is pre-integrated.
