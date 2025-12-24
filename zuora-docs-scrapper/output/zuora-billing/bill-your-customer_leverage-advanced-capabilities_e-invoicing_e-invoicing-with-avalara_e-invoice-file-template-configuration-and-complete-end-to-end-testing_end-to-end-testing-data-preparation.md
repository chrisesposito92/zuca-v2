---
title: "End-to-end testing data preparation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/end-to-end-testing-data-preparation"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:50.280Z"
---

# End-to-end testing data preparation

Prepare your Zuora tenant for end-to-end testing by configuring customer accounts, subscriptions, and invoices, including country-specific and e-invoicing settings.

Before conducting end-to-end testing, you must configure your Zuora tenant to prepare data for testing such as customer accounts, subscriptions, and invoices.

## Country-specific settings configuration

You might need to configure country-specific settings if you want to e-invoice your customers in particular countries. For example, specifying specific business information on business regions or creating custom fields on standard objects.

For more information, see [Country-specific configurations management](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management).

## E-invoicing profile configuration for customer accounts

You have the flexibility to enable e-invoicing for customers based on the regulatory requirements of countries. For example, you can enable e-invoicing only for business customers or customers from particular countries.

When enabling e-invoicing for a customer who acts as a buyer, you must collect the business profile of the customer and configure the e-invoicing profile during the customer account creation or modification. For more information about supported profile settings, see [E-invoicing profile settings for accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts).

Make sure that the Business Category of an account in your tenant complies with the country mandate configuration in Avalara. For example, Zuora follows the AU-B2B-PEPPOL mandate when submitting a billing document for Australian accounts with the Business Category configured to B2B. However, if you have not configured the B2B mandate for Australia in Avalara, the e-invoicing transaction will fail. For more information about how to configure country mandates in Avalara, see [Configure Avalara sandbox environment](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/configure-avalara-sandbox-environment).

To configure the e-invoicing profile for a customer account in Zuora UI, see [Configure e-invoicing profiles for accounts through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts).

Alternatively, you can use the [Create an account](https://developer.zuora.com/api-references/api/operation/POST_Account/) or [Update an account](https://developer.zuora.com/api-references/api/operation/PUT_Account/) API operation.

## Creation of subscriptions and invoices

For testing purposes, you must create subscriptions and invoices with taxation information.

To create a subscription, see [Create subscriptions](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions).

When subscriptions are created, you can create bill runs to generate invoices. For more information, see [Create bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation).
