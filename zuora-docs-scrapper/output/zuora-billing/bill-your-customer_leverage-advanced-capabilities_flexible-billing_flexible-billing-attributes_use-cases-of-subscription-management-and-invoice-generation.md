---
title: "Use cases of subscription management and invoice generation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:49.645Z"
---

# Use cases of subscription management and invoice generation

Describes the use cases of Flexible Billing Attributes for managing subscriptions and generating invoices, including pre-conditions and feature details.

Note: The Flexible Billing Attributes feature is generally available and has been enabled for all customers in Sandbox environments. If you want to enable this feature in your Production environments, contact your Zuora account team for assistance.

The following use cases are presented to showcase how you can use Flexible Billing Attributes to manage subscriptions and generate invoices.

## Pre-conditions for all use cases

To simplify the explanation of each use case, the following pre-conditions apply to all use cases in the sections below.

| Condition item | Details |
| --- | --- |
| Customer account | Account number: A00001Account currency: USDPayment term: Net 30Contact: Ray Lockman (default bill-to contact), Steve America, Tom Lee |
| Product rate plan charge | Charge number: C00001Type: RecurringPricing: Flat FeeList price: $100 per monthBilling period: YearTaxable: YesTax code: SalesTaxTax mode: Exclusive |
| Enabled features | OrdersInvoice SettlementTaxation |
| Taxation module | Tax code: SalesTaxTax engine: Zuora Tax |
