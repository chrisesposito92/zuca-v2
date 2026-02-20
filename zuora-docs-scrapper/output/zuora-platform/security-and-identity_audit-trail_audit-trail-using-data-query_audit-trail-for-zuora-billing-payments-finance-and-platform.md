---
title: "Audit Trail for Zuora Billing, Payments, Finance, and Platform"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/audit-trail-for-zuora-billing-payments-finance-and-platform"
product: "zuora-platform"
scraped_at: "2026-02-20T17:44:55.008Z"
---

# Audit Trail for Zuora Billing, Payments, Finance, and Platform

Zuora's Audit Trail feature allows tracking of user activities and changes in billing, payments, finance, and platform settings through Data Query, requiring specific platform roles for access.

In Zuora Billing, Payments, Finance, and Platform, you can use Data Query to retrieve Audit Trail records for tracking user login histories, user management settings, product setting changes, and business object changes.

To access Audit Trail records, you must have one of the following [Platform Roles](/zuora-platform/security-and-identity/administrator-settings/user-roles/platform-roles) :

-   Administrator

-   A custom role that has the Audit Trail Access permission


For more detailed information, see

See the following articles for more information about the supported capabilities and how to compose queries and retrieve audit data in Data Query:

-   [Scope of Audit Trail for Zuora Billing, Payments, Finance, and Platform](/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/audit-trail-for-zuora-billing-payments-finance-and-platform/scope-of-audit-trail-for-zuora-billing-payments-finance-and-platform)

-   [Data Model of Audit Trail](/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail)

-   [Sample Queries of Audit Trail](/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail)


Zuora Audit Trail starts tracking and logging audit information when the feature is activated in your tenant. Historical audit information before Audit Trail was activated does not exist.

## Financial transaction histories

As a financial system of record, Zuora’s object model ensures that historical data remains intact and auditable.

-   Versioned subscription change histories: As a change is made to a subscription, a new version of the subscription is created. The corresponding order action or amendment of each subscription version indicates the change made to the subscription. You can view subscription change histories in one of the following ways:

    -   On the subscription detail page. See [View Versioned Subscription Change History](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscription-change-history-view/view-versioned-subscription-change-history) for more information.

    -   Query the SubscriptionStatusHistory object in Data Query or Data Source Exports. See [Query data through Subscription Status History data source](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/data-query-through-subscription-status-history-data-source) for more information.

-   Single version subscription change histories: If the [Single Version Subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/single-version-subscription) feature is activated for your tenant, there is only one version for each subscription. The SubscriptionChangeHistory object provides a clear record of key orders-related changes made to the single version subscription. You can view the change history of a single version subscription in one of the following ways:

    -   On the subscription detail page. See [View Single Version Subscription Change History](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscription-change-history-view/view-single-version-subscription-change-history) for more information.

    -   The [Subscription Change History](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscriptions-details-through-the-reinvented-ui/subscription-change-history-section) API operations.

-   Billing document histories: You can query the InvoiceHistory or MemoHistory object in Data Query to view billing document histories. Additionally, when credit memos or payments are applied to an invoice or debit memo, the following Invoice Settlement objects track the balance changes at both the header and item level. Designed with an immutable model, these objects monitor the changes in unapplied credit and payment amounts, and preserve a complete history of every settlement transaction. You can query these objects in Data Query, Data Source Exports, or Reporting.

    -   InvoiceHistory : Tracks changes made to invoices, such as creation, posting, cancellation, deletion, edit, email activities, PDF generation, reversal, and more.

    -   MemoHistory : Tracks changes made to credit and debit memos, such as creation, posting, cancellation, deletion, edit, as well as special actions for credit memos, such as applied, unapplied, and refund.


    -   CreditMemoApplication

    -   CreditMemoApplicationItem

    -   PaymentApplication

    -   RefundApplication
