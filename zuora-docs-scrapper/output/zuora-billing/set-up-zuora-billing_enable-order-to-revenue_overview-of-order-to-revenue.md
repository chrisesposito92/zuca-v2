---
title: "Overview of Order to Revenue"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:11.450Z"
---

# Overview of Order to Revenue

The Order to Revenue feature in Zuora streamlines the quote-to-revenue process, offering a unified data model, standardized data mapping, and automated reconciliations for efficient revenue operations.

The Order to Revenue feature is Zuora’s end-to-end solution to enable the complete quote-to-revenue operations process, from quotes to orders, billing, payments, collections, and revenue recognition. This solution enables a single source of truth across Zuora applications.

## Availability

The Order to Revenue feature is now generally available.

Previously, only new Zuora customers and existing Zuora Billing customers had access to this feature. Zuora Billing-Revenue Integration customers can now migrate to the Order to Revenue feature.

The Order to Revenue feature is the new solution that enables a single source of truth across Zuora applications. The previous solution, Zuora Billing - Revenue Integration, is no longer available to new Zuora customers as of October 1, 2023.

## Benefits of using Order to Revenue

The Order to Revenue feature has the following benefits:

-   Unified data model

-   Standardized data mapping

-   Automated data reconciliations

-   Predictable performance

-   Simple set-up


## Functions provided by Order to Revenue

The Order to Revenue feature generates transactional data as follows:

-   Booking Transaction is for tracking changes on booking items. It consolidates and reflects data creation and changes in the following objects:

    -   Rate Plan Charge

    -   Order Line Item

    -   Dynamin Usage Charges

-   Billing Transaction is for tracking creations and changes on billing items. It consolidates and reflects data creation and changes in the following objects:

    -   Invoice Item

    -   Credit Memo Item

    -   Debit Memo Item

    -   Invoice Item Adjustment

-   Revenue Recognition Events Transaction is for tracking the following types of information generated when using the corresponding features:

    -   Daily Delivery

    -   Unbilled Usage

    -   Daily Consumption

    -   Dynamin Usage Charges


## Expectations

The Order to Revenue feature currently does not support or has limitations on the following features or scenarios:

-   Only the original order date of the rate plan charge is supported for the booking date in Zuora Revenue.

-   Proration credit reversal

-   Terms and Conditions: decreasing term and increasing term when billing in advance

-   Terms and Conditions: no bill run between decreasing term and increasing term

-   Updates to billing trigger dates

-   Un-posting and deleting invoices


## Best Practices

-   Managing ramp contracts

-   Expectations with data from other upstream systems


## Required configurations and best practices

See Required configurations and best practices for using Order to Revenue to achieve proper revenue accounting results in Zuora Revenue.
