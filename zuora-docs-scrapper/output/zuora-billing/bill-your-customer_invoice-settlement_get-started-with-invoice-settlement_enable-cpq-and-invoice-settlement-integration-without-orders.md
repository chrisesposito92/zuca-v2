---
title: "Enable CPQ and Invoice Settlement integration without Orders"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-cpq-and-invoice-settlement-integration-without-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:55.766Z"
---

# Enable CPQ and Invoice Settlement integration without Orders

Know the enablement process

[Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) supports the integration with CPQ 8.x and above without requiring Orders.

With this integration, you can create Quotes or Amendment Quotes in Salesforce and send them to Zuora Billing as subscriptions or amendments. Subsequently, you can proceed to generate invoices or credit memos, and process payments in Zuora Billing.

## Enablement process

Take the following steps to enable this feature, complete the following steps:

1.  Refer to [Invoice Settlement enablement and checklist guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) to enable the Invoice Settlement feature.
2.  Because the CPQ and Invoice Settlement Integration without Orders feature is currently in Limited Availability, submit a request at [Zuora Global Support](https://support.zuora.com/) to get this feature enabled.

## Known limitations

-   The [Subscribe](https://developer.zuora.com/v1-api-reference/older-api/operation/Action_POSTsubscribe/) and [Amend](https://developer.zuora.com/v1-api-reference/older-api/operation/Action_POSTamend/) API operations can generate credit memos if negative subscription charges or chargebacks exist. However, the generated credit memos will not be returned in the response.

-   The credit memo generated from an API request will be automatically applied to the invoice within the same request, regardless of the value for the `ApplyCreditBalance` field.

-   The outstanding credit memos and unapplied payments on accounts will not be applied to invoices, regardless of the value for the `ApplyCreditBalance` field.
