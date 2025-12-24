---
title: "Audit Trail overview"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/audit-trail-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:04:19.474Z"
---

# Audit Trail overview

Learn how to audit user activities and product configurations across Zuora Billing, Payments, Finance, Revenue, and Platform.

You can audit user activities, product configurations, and more, in Zuora Billing, Payments, Finance, Revenue, and Platform:

-   [Audit Trail for Zuora Billing, Payments, Finance, and Platform](#concept-ac-836__title-306)

-   [Audit Trail for Zuora Revenue](#concept-ac-836__title-343)


## Audit Trail for Zuora Billing, Payments, Finance, and Platform

In Zuora Billing, Payments, Finance, and Platform, you can use Data Query to retrieve Audit Trail records for tracking user login histories, user management settings, product setting changes, and business object changes.

To access Audit Trail records, you must have one of the following Platform Roles :

-   Administrator

-   A custom role that has the Audit Trail Access permission


For more detailed information, see

See the following articles for more information about the supported capabilities and how to compose queries and retrieve audit data in Data Query:

-   [Scope of Audit Trail for Zuora Billing, Payments, Finance, and Platform](/zuora-platform/system-management/audit-trail/scope-of-audit-trail-for-zuora-billing-payments-finance-and-platform)

-   [Data Model of Audit Trail](/zuora-platform/system-management/audit-trail/data-model-of-audit-trail)

-   [Sample Queries of Audit Trail](/zuora-platform/system-management/audit-trail/sample-queries-of-audit-trail)


Zuora Audit Trail starts tracking and logging audit information when the feature is activated in your tenant. Historical audit information before Audit Trail was activated does not exist.

## Financial transaction histories

As a financial system of record, Zuora’s object model ensures that historical data remains intact and auditable.

-   Versioned subscription change histories: As a change is made to a subscription, a new version of the subscription is created. The corresponding order action or amendment of each subscription version indicates the change made to the subscription. You can view subscription change histories in one of the following ways:

    -   On the subscription detail page. See View Versioned Subscription Change History for more information.

    -   Query the SubscriptionStatusHistory object in Data Query or Data Source Exports. See Query data through Subscription Status History data source for more information.

-   Single version subscription change histories: If the Single Version Subscription feature is activated for your tenant, there is only one version for each subscription. The SubscriptionChangeHistory object provides a clear record of key orders-related changes made to the single version subscription. You can view the change history of a single version subscription in one of the following ways:

    -   On the subscription detail page. See View Single Version Subscription Change History for more information.

    -   The Subscription Change History API operations.

-   Billing document histories: You can query the InvoiceHistory or MemoHistory object in Data Query to view billing document histories. Additionally, when credit memos or payments are applied to an invoice or debit memo, the following Invoice Settlement objects track the balance changes at both the header and item level. Designed with an immutable model, these objects monitor the changes in unapplied credit and payment amounts, and preserve a complete history of every settlement transaction. You can query these objects in Data Query, Data Source Exports, or Reporting.

    -   InvoiceHistory : Tracks changes made to invoices, such as creation, posting, cancellation, deletion, edit, email activities, PDF generation, reversal, and more.

    -   MemoHistory : Tracks changes made to credit and debit memos, such as creation, posting, cancellation, deletion, edit, as well as special actions for credit memos, such as applied, unapplied, and refund.


    -   CreditMemoApplication

    -   CreditMemoApplicationItem

    -   PaymentApplication

    -   RefundApplication


## Audit Trail for Zuora Revenue

The audit trail report in Zuora Revenue provides details on user login histories and setting and template changes.

See [Audit Trail for Zuora Revenue](/zuora-platform/system-management/audit-trail/audit-trail-for-zuora-revenue) for more information about the supported capabilities and how to access audit trail reports in Zuora Revenue.
