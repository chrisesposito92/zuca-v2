---
title: "Invoice Settlement Harmonization Settings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/invoice-settlement-harmonization-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:42.247Z"
---

# Invoice Settlement Harmonization Settings

Configure invoice settlement and adjustment settings to manage credit memos and negative invoices in billing operations.

You can define Invoice Settlement and Invoice Adjustment co-existence settings in Billing settings.

## Document Settings

The document settings include configurations that impact the following operations:

Enable Credit Memo Generation instead of Negative Invoices - Enable this option to start generating credit memos instead of negative invoices. The system will generate credit memos based on the invoice/credit memo generation settings defined under the billing rules in the billing settings.

When you turn this setting OFF, the system keeps creating negative invoices for credits when users cancel subscriptions or remove products. These negative invoices can be moved to credit balance adjustments . When you turn this setting ON, the system will generate credit memos according to the invoice/credit memo generation settings you have set up under the billing rules in the billing settings.

## Additional configurations

Ensure that the following configurations are completed and available.

To start generating credit and debit memos

-   Update the invoice template to remove any IIA references and add memo references.

-   Create and update templates

    -   Create and upload billing document templates (Billing settings )

    -   Update accounts with appropriate Credit Memo/Debit Memo templates


During the template setup, one of the templates can be marked as a default template for credit and debit memos. The default template is automatically updated for each customer account. For customer accounts that use a different template, the user can update the template at the customer account level.

-   Create custom fields for Credit Memo/Debit Memo/Memo Items

-   Configure the following:

    -   Accounting codes

    -   Reason codes

    -   Notifications of credit memo/debit memo

-   Sequence Set of billing documents (configuration)

-   Set up billing rules for memo

    -   Invoice/Credit Memo generation rule

    -   Create credit memos mirroring invoice items

    -   Available to credit validation for credit memos

-   Settlement and application rules
