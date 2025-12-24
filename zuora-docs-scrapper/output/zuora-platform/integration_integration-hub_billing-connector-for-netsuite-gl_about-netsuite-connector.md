---
title: "About NetSuite Connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/about-netsuite-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:51.895Z"
---

# About NetSuite Connector

An optional solution that leverages the core capabilities of both the Zuora and NetSuite applications

## Overview

NetSuite Connector is an optional solution that leverages the core capabilities of both the Zuora and NetSuite applications. Zuora manages complex subscriptions and NetSuite is a hosted General Ledger (GL) System.

## Features

NetSuite Connector combines Zuora's subscription billing capabilities with NetSuite's ERP/Financials solution with bi-directional integration across every core application module to seamlessly combine the two applications.

This solution is a pre-defined, out-of-the-box integration that synchronizes transactions between the two applications. Zuora provides NetSuite Connector customers with an integration console in the Zuora Billing user interface which is used to set up the integration, control and monitor the synchronization of data, and view any error or success logs from the synchronization.

Integrating Zuora with NetSuite allows you to use Zuora's applications to:

-   Manage complex pricing and packaging models

-   Align charges with existing subscriptions

-   Consolidate billing

-   Streamline renewal patterns


## Advanced pricing configuration

Configure any type of subscription pricing, packages and bundles (including one-time, recurring, usage and metering charges, volume tier pricing, and overage pricing) to link Zuora's Product Catalog and NetSuite's Item Master. For example, simple or complex subscription pricing can be configured in Zuora, such as a cellular phone plan or a data plan with usage, and synchronized to NetSuite.

## Customer account mirroring

Synchronize Customer Accounts, Billing Accounts, and any customer account hierarchies to provide a single view of all customers whether the data is in Zuora or NetSuite. For example, an address change in Zuora is synchronized with the corresponding account address in NetSuite (and synchronized from NetSuite to Zuora).

## Automated sales order-to-subscription workflow

Automate the order/fulfillment process by linking NetSuite's Sales Order functionality with Zuora's Subscription module. This includes passing subscription details such as products, rate plans and time variables including billing frequency, trigger conditions and billing dates when creating the Zuora Subscription. For example, a Sales Order is fulfilled in NetSuite and then a corresponding subscription is created in Zuora without ever having to log out of NetSuite.

## Bi-directional payment operations

Manage the Invoice to Cash process in either Zuora or NetSuite with the two-way integration of Zuora Payment Operations with NetSuite's Accounts Receivable module. For example, a customer is issued a refund in Zuora when a subscription is cancelled and the refund is applied to the appropriate payment in NetSuite.

## Revenue recognition integration

Manage revenue recognition by mapping Zuora's subscription details, including revenue recognition codes, trigger conditions, revenue start dates and revenue end dates to NetSuite's revenue recognition templates.

## Subscription metrics

Drive key business decisions by using Zuora's industry leading subscription metrics, such as Contracted Monthly Recurring Revenue, Total Contract Value, Renewal Rate and Churn.

NetSuite customers can leverage NetSuite's industry leading cloud ERP/Financials solution in mixed cloud application environments, including using the Zuora CPQ solution which seamlessly connects Salesforce CRM and Zuora's subscription commerce platform.

## Deciding to use NetSuite Connector

Use NetSuite Connector to solve the following business problems:

-   You are using Salesforce, and want to launch new recurring business

-   You have a front-end application that manages user interaction

-   You have high-volume, complex requirements and/or require usage processing

-   You have are using NetSuite for one line of your business, but you want to leverage Zuora for subscriptions

-   You have customized NetSuite for subscriptions, but you have reached the limit of the NetSuite customization

-   You are using QuickBooks and want to upgrade your accounting system.


## Integrating transactions between Zuora and NetSuite

Overview of [Transaction Integration Between Zuora and NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite) describes how multiple types of transactions are integrated between Zuora and NetSuite, including invoice transactions, payment transactions, and refund transactions.

## NetSuite Connector and deferred and recognized revenue accounts

NetSuite Connector uses the following rules for the deferred revenue and recognized revenue account used in Netsuite.

-   Deferred Revenue: This is configured as a custom field named `Netsuite Deferred Revenue Account`.

-   Recognized Revenue: This uses the accounting code configured on the product rate plan charge. This accounting code is mapped to two fields based on the revenue recognition rule that you select. If you use the Recognize upon invoicing rule (the default value), this maps to the Recognized Revenue account. If you change the rule to Recognize daily over time, this maps to the Deferred Revenue account.
