---
title: "Format numeric merge field based on communication profiles"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/define-date-and-numeric-formats-for-mail-merge-fields/format-numeric-merge-field-based-on-communication-profiles"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:23.003Z"
---

# Format numeric merge field based on communication profiles

Learn how to format numeric merge fields in templates according to customer communication profile locales.

When defining templates for invoices, credit memos, and debit memos, you can also format numeric merge fields based on your customers' communication profile locales. To enable this feature, complete the followings steps:

1.  Click your username at the upper right and navigate to Settings > Billing > Define Billing Rules .
2.  On the Billing Rules page, click edit .
3.  Select Yes from the Format numeric merge fields based on communication profile locales? list.
4.  Click save .

    The following table includes formatting examples for numeric merge fields based on different communication profile locales.

    | Merge Field Syntax | Field Value | Communication Profile | Rendering Result |
    | --- | --- | --- | --- |
    | {MERGEFIELD Invoice.Total \# #,##0.00} | 123456789.000 | US | 123,456,789.00 |
    | ITALY | 123.456.789,00 |  |  |
    | FRANCE | 123 456 789,00 |  |  |

    The thousands separator might be different based on different communication profile locales.

    | Merge Field Syntax | Field Value | Communication Profile | Rendering Result without This Feature | Rendering Result with This Feature |
    | --- | --- | --- | --- | --- |
    | {MERGEFIELD Invoice.Total \# ,#.00} | 1234.000 | US | 1,234.00 | 1,2,3,4.00 |

    In the preceding case, you have to change the merge field syntax to `{MERGEFIELD Invoice.Total \# ,###.00}` to have the expected rendering result 1,234.00 with this feature.
