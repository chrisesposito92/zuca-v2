---
title: "Bill run additional settings"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/bill-run-additional-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:45.429Z"
---

# Bill run additional settings

Additional settings configuration to manage subscription-based charges and order line items in bill runs.

In the Additional Settings section, you can configure options to separately or jointly include Subscription-based charge types and Order Line Items-based invoices. These options help you better control invoice generation and align billing workflows with operational needs.

Subscription-based charge types:

You can explicitly include or exclude the following subscription-based charge types invoices for bill run:
| Charge Types | Description |
| --- | --- |
| OneTime | Select this option to include one-time charges in the bill run. |
| Recurring | Select this option to include recurring charges in the bill run. |
| Usage | Select this option to include usage charges in the bill run. |

Order Line Items (OLIs):

This option allows you to generate invoices separately for OLIs or along with Subscription-based charge types. When you select this option, all the OLIs with the status 'Sent to Billing' will be included in the invoice for the bill run.
