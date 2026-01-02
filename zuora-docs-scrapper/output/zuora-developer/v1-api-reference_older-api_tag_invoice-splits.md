---
title: "Invoice Splits"
url: "https://developer.zuora.com/v1-api-reference/older-api/tag/Invoice-Splits/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:32:50.063Z"
---

Search the docs

GET STARTED[
Introduction
](/v1-api-reference/introduction/)[
Zuora object model
](/v1-api-reference/object-model/)[
CORS and Zuora v1 API
](/v1-api-reference/cors-rest/)

API versions

[
API object names for Describe
](/v1-api-reference/api-object-names/)ENDPOINTS

v1 API

[
API Reference
](/v1-api-reference/api/overview/)Authentication[

OAuth

](/v1-api-reference/api/tag/OAuth/)Commerce[

Commerce

](/v1-api-reference/api/tag/Commerce/)Customer Accounts[

Accounts

](/v1-api-reference/api/tag/Accounts/)[

Contacts

](/v1-api-reference/api/tag/Contacts/)[

Contact Snapshots

](/v1-api-reference/api/tag/Contact-Snapshots/)Orders and Subscriptions[

Sign Up

](/v1-api-reference/api/tag/Sign-Up/)[

Orders

](/v1-api-reference/api/tag/Orders/)[

Order Actions

](/v1-api-reference/api/tag/Order-Actions/)[

Order Line Items

](/v1-api-reference/api/tag/Order-Line-Items/)[

Fulfillments

](/v1-api-reference/api/tag/Fulfillments/)[

Ramps

](/v1-api-reference/api/tag/Ramps/)[

Subscriptions

](/v1-api-reference/api/tag/Subscriptions/)[

Omnichannel Subscriptions

](/v1-api-reference/api/tag/Omnichannel-Subscriptions/)[

Subscription Change History

](/v1-api-reference/api/tag/Subscription-Change-History/)[

Rate Plans

](/v1-api-reference/api/tag/Rate-Plans/)[

Commitments

](/v1-api-reference/api/tag/Commitments/)Advanced Consumption Billing[

Prepaid with Drawdown

](/v1-api-reference/api/tag/Prepaid-with-Drawdown/)Usage[

Usage

](/v1-api-reference/api/tag/Usage/)Mediation[

Meters

](/v1-api-reference/api/tag/Meters/)Billing Documents[

Delivery Adjustments

](/v1-api-reference/api/tag/Delivery-Adjustments/)[

Billing Documents

](/v1-api-reference/api/tag/Billing-Documents/)[

Invoices

](/v1-api-reference/api/tag/Invoices/)[

Credit Memos

](/v1-api-reference/api/tag/Credit-Memos/)[

Debit Memos

](/v1-api-reference/api/tag/Debit-Memos/)[

E-Invoicing

](/v1-api-reference/api/tag/E-Invoicing/)[

Invoice Schedules

](/v1-api-reference/api/tag/Invoice-Schedules/)[

Taxation Items

](/v1-api-reference/api/tag/Taxation-Items/)[

Sequence Sets

](/v1-api-reference/api/tag/Sequence-Sets/)[

Operations

](/v1-api-reference/api/tag/Operations/)[

Summary Statements

](/v1-api-reference/api/tag/Summary-Statements/)Bill Runs[

Bill Run

](/v1-api-reference/api/tag/Bill-Run/)[

Billing Preview Run

](/v1-api-reference/api/tag/Billing-Preview-Run/)Payment Methods[

Payment Methods

](/v1-api-reference/api/tag/Payment-Methods/)[

Custom Payment Method Types

](/v1-api-reference/api/tag/Custom-Payment-Method-Types/)[

Payment Method Updater

](/v1-api-reference/api/tag/Payment-Method-Updater/)[

Payment Method Snapshots

](/v1-api-reference/api/tag/Payment-Method-Snapshots/)[

Payment Method Transaction Logs

](/v1-api-reference/api/tag/Payment-Method-Transaction-Logs/)[

Hosted Pages

](/v1-api-reference/api/tag/Hosted-Pages/)[

RSA Signatures

](/v1-api-reference/api/tag/RSA-Signatures/)Payments[

Payment Authorization

](/v1-api-reference/api/tag/Payment-Authorization/)[

Payment Gateways

](/v1-api-reference/api/tag/Payment-Gateways/)[

Payment Gateway Reconciliation

](/v1-api-reference/api/tag/Payment-Gateway-Reconciliation/)[

Payments

](/v1-api-reference/api/tag/Payments/)[

Payment Transaction Logs

](/v1-api-reference/api/tag/Payment-Transaction-Logs/)[

Payment Runs

](/v1-api-reference/api/tag/Payment-Runs/)[

Payment Schedules

](/v1-api-reference/api/tag/Payment-Schedules/)[

Refunds

](/v1-api-reference/api/tag/Refunds/)[

Payment Profiles

](/v1-api-reference/api/tag/Payment-Profiles/)[

Configurable Payment Retry

](/v1-api-reference/api/tag/Configurable-Payment-Retry/)Object Query[

Object Queries

](/v1-api-reference/api/tag/Object-Queries/)Finance[

Accounting Codes

](/v1-api-reference/api/tag/Accounting-Codes/)[

Accounting Periods

](/v1-api-reference/api/tag/Accounting-Periods/)[

Summary Journal Entries

](/v1-api-reference/api/tag/Summary-Journal-Entries/)[

Journal Runs

](/v1-api-reference/api/tag/Journal-Runs/)[

Mass Updater

](/v1-api-reference/api/tag/Mass-Updater/)Events and Notifications[

Notifications

](/v1-api-reference/api/tag/Notifications/)[

Custom Event Triggers

](/v1-api-reference/api/tag/Custom-Event-Triggers/)[

Custom Scheduled Events

](/v1-api-reference/api/tag/Custom-Scheduled-Events/)Custom Objects[

Custom Object Definitions

](/v1-api-reference/api/tag/Custom-Object-Definitions/)[

Custom Object Records

](/v1-api-reference/api/tag/Custom-Object-Records/)[

Custom Object Jobs

](/v1-api-reference/api/tag/Custom-Object-Jobs/)System Health[

API Health

](/v1-api-reference/api/tag/API-Health/)[

Bill Run Health

](/v1-api-reference/api/tag/Bill-Run-Health/)[

Electronic Payments Health

](/v1-api-reference/api/tag/Electronic-Payments-Health/)[

Tax Health

](/v1-api-reference/api/tag/Tax-Health/)Workflow[

Workflows

](/v1-api-reference/api/tag/Workflows/)Data Query[

Data Queries

](/v1-api-reference/api/tag/Data-Queries/)AQuA[

Aggregate Queries

](/v1-api-reference/api/tag/Aggregate-Queries/)Deployment Manager[

Configuration Templates

](/v1-api-reference/api/tag/Configuration-Templates/)[

Metadata

](/v1-api-reference/api/tag/Metadata/)Data Loader[

Bulk Data

](/v1-api-reference/api/tag/Bulk-Data/)OneID[

SCIM

](/v1-api-reference/api/tag/SCIM/)Multiple Organizations[

Data Labeling

](/v1-api-reference/api/tag/Data-Labeling/)Order to Revenue[

Data Backfill

](/v1-api-reference/api/tag/Data-Backfill/)[

Regenerate

](/v1-api-reference/api/tag/Regenerate/)Test Environments[

Test Environments

](/v1-api-reference/api/tag/Test-Environments/)[

Test Environment Jobs

](/v1-api-reference/api/tag/Test-Environment-Jobs/)[

Test Environment Notifications

](/v1-api-reference/api/tag/Test-Environment-Notifications/)General-Purpose Operations[

Actions

](/v1-api-reference/api/tag/Actions/)[

Settings

](/v1-api-reference/api/tag/Settings/)[

Files

](/v1-api-reference/api/tag/Files/)[

Imports

](/v1-api-reference/api/tag/Imports/)[

Custom Exchange Rates

](/v1-api-reference/api/tag/Custom-Exchange-Rates/)[

Attachments

](/v1-api-reference/api/tag/Attachments/)[

Describe

](/v1-api-reference/api/tag/Describe/)Legacy v1 Products[

Products

](/v1-api-reference/api/tag/Products/)[

Catalog

](/v1-api-reference/api/tag/Catalog/)[

Catalog Groups

](/v1-api-reference/api/tag/Catalog-Groups/)[

Product Rate Plans

](/v1-api-reference/api/tag/Product-Rate-Plans/)[

Product Rate Plan Definitions

](/v1-api-reference/api/tag/Product-Rate-Plan-Definitions/)[

Product Rate Plan Charges

](/v1-api-reference/api/tag/Product-Rate-Plan-Charges/)[

Product Charge Definitions

](/v1-api-reference/api/tag/Product-Charge-Definitions/)[

Product Rate Plan Charge Tiers

](/v1-api-reference/api/tag/Product-Rate-Plan-Charge-Tiers/)[

Zuora Revenue Integration

](/v1-api-reference/api/tag/Zuora-Revenue-Integration/)

Legacy API Reference

[
Older API Reference
](/v1-api-reference/older-api/overview/)[

Actions

](/v1-api-reference/older-api/tag/Actions/)[

Accounts

](/v1-api-reference/older-api/tag/Accounts/)[

Amendments

](/v1-api-reference/older-api/tag/Amendments/)[

Bill Runs

](/v1-api-reference/older-api/tag/Bill-Runs/)[

Contacts

](/v1-api-reference/older-api/tag/Contacts/)[

Catalog

](/v1-api-reference/older-api/tag/Catalog/)[

Charge Metrics

](/v1-api-reference/older-api/tag/Charge-Metrics/)[

Charge Revenue Summaries

](/v1-api-reference/older-api/tag/Charge-Revenue-Summaries/)[

Communication Profiles

](/v1-api-reference/older-api/tag/Communication-Profiles/)[

Connections

](/v1-api-reference/older-api/tag/Connections/)[

Credit Balance Adjustments

](/v1-api-reference/older-api/tag/Credit-Balance-Adjustments/)[

Document Properties

](/v1-api-reference/older-api/tag/Document-Properties/)[

Entities

](/v1-api-reference/older-api/tag/Entities/)[

Entity Connections

](/v1-api-reference/older-api/tag/Entity-Connections/)[

Exports

](/v1-api-reference/older-api/tag/Exports/)[

Features

](/v1-api-reference/older-api/tag/Features/)[

HMAC Signatures

](/v1-api-reference/older-api/tag/HMAC-Signatures/)[

Invoice Adjustments

](/v1-api-reference/older-api/tag/Invoice-Adjustments/)[

Invoice Item Adjustments

](/v1-api-reference/older-api/tag/Invoice-Item-Adjustments/)[

Invoice Items

](/v1-api-reference/older-api/tag/Invoice-Items/)[

Invoice Payments

](/v1-api-reference/older-api/tag/Invoice-Payments/)[

Invoice Split Items

](/v1-api-reference/older-api/tag/Invoice-Split-Items/)[

Invoice Splits

](/v1-api-reference/older-api/tag/Invoice-Splits/)

[

get

CRUD: Retrieve an invoice split

](/v1-api-reference/older-api/operation/Object_GETInvoiceSplit/)

[

Invoices

](/v1-api-reference/older-api/tag/Invoices/)[

Orders

](/v1-api-reference/older-api/tag/Orders/)[

Payment Gateway Transaction Logs

](/v1-api-reference/older-api/tag/Payment-Gateway-Transaction-Logs/)[

Payment Methods

](/v1-api-reference/older-api/tag/Payment-Methods/)[

Payments

](/v1-api-reference/older-api/tag/Payments/)[

Product Features

](/v1-api-reference/older-api/tag/Product-Features/)[

Quotes Document

](/v1-api-reference/older-api/tag/Quotes-Document/)[

Rate Plan Charge Tiers

](/v1-api-reference/older-api/tag/Rate-Plan-Charge-Tiers/)[

Rate Plan Charges

](/v1-api-reference/older-api/tag/Rate-Plan-Charges/)[

Rate Plans

](/v1-api-reference/older-api/tag/Rate-Plans/)[

Refund Invoice Payments

](/v1-api-reference/older-api/tag/Refund-Invoice-Payments/)[

Refund Transaction Logs

](/v1-api-reference/older-api/tag/Refund-Transaction-Logs/)[

Refunds

](/v1-api-reference/older-api/tag/Refunds/)[

Reporting

](/v1-api-reference/older-api/tag/Reporting/)[

Revenue Events

](/v1-api-reference/older-api/tag/Revenue-Events/)[

Revenue Items

](/v1-api-reference/older-api/tag/Revenue-Items/)[

Revenue Rules

](/v1-api-reference/older-api/tag/Revenue-Rules/)[

Revenue Schedules

](/v1-api-reference/older-api/tag/Revenue-Schedules/)[

Subscription Product Features

](/v1-api-reference/older-api/tag/Subscription-Product-Features/)[

Subscriptions

](/v1-api-reference/older-api/tag/Subscriptions/)[

Taxation Items

](/v1-api-reference/older-api/tag/Taxation-Items/)[

Transactions

](/v1-api-reference/older-api/tag/Transactions/)[

Unit Of Measure

](/v1-api-reference/older-api/tag/Unit-Of-Measure/)[

Usage

](/v1-api-reference/older-api/tag/Usage/)[

Users

](/v1-api-reference/older-api/tag/Users/)

# Invoice Splits

Use invoice splits to hold two or more invoice split items.

[Next to **CRUD: Retrieve an invoice split**](/v1-api-reference/older-api/operation/Object_GETInvoiceSplit/)
