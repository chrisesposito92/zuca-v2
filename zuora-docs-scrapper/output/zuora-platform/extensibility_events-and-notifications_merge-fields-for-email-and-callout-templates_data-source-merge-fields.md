---
title: "Data source merge fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/merge-fields-for-email-and-callout-templates/data-source-merge-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:31.505Z"
---

# Data source merge fields

Most events that email or callout templates relate to are mapped to a data source. You can use fields from the data source as merge fields in email and callout templates to customize your notification emails and callouts.

The following list shows the data source related to each event category. To find out the available fields of each data source, see [Data source reference](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference).

| Event Category | Data Source |
| --- | --- |
| Account | Account |
| Amendment | SubscriptionFor notifications triggered by custom events, merge fields are rendered for only amendment completed events where Amendment.Status == 'Completed'. |
| AmendmentProcessed | Subscription |
| Aqua | Legacy merge fields are used for this event category. |
| Bill Run | Bill Run |
| Bill Run Completion | Bill Run |
| Credit Balance Refund Processed | Refund |
| Datasource | Legacy merge fields are used for this event category. |
| Gateway Reconciliation Job Completion | Legacy merge fields are used for this event category. |
| Import | Import |
| ImportProcessed | Import |
| Invoice | Invoice |
| Invoice Due | Invoice |
| Invoice Posted | Invoice |
| Invoices Past Due, Account Summary | Account |
| Journal Run Completion | Journal Run |
| Key Dates | Subscription |
| Manual Email For Invoice | Invoice |
| Manual Email for Payment | Payment |
| New Subscription Created | Subscription |
| Payment | Legacy merge fields are used for this event category. |
| Payment Declined | Payment |
| Payment Method | Legacy merge fields are used for this event category. |
| Payment Method Closed | PaymentMethod |
| Payment Method Expiration | Legacy merge fields are used for this event category. |
| Payment Method Updated | PaymentMethod |
| Payment Method Updater | Legacy merge fields are used for this event category. |
| Payment Method Updater Completed | Legacy merge fields are used for this event category. |
| Payment Method Updater Started | Legacy merge fields are used for this event category. |
| Payment Processed | Payment |
| Payment Refund Processed | Refund |
| Payment Run Completion | Legacy merge fields are used for this event category. |
| Refund | Refund |
| Subscription | Legacy merge fields are used for this event category. |
| Trial Balance Completion | Accounting Period |
| Upcoming Renewal | Legacy merge fields are used for this event category. |
| Credit memo and debit memo event categoriesNote:This feature is only available if you have the Invoice Settlement feature enabled. |  |
| Credit Memo Created | Credit Memo |
| Credit Memo Posted | Credit Memo |
| Debit Memo Created | Debit Memo |
| Debit Memo Posted | Debit Memo |
| Email Credit Memo | Credit Memo |
| Email Debit Memo | Debit Memo |
