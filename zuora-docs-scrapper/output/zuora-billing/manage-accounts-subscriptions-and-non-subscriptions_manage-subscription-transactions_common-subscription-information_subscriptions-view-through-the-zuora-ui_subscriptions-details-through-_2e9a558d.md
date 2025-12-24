---
title: "Associated events section"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscriptions-details-through-the-reinvented-ui/associated-events-section"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:23.660Z"
---

# Associated events section

This topic details subscription-associated events, including invoices, credit memos, debit memos, and order line items, with sorting and display options.

This section includes subscription-associated events, including invoices, credit memos, debit memos, and order line items.

You can click either the Invoices , Credit Memos , Debit Memos , or Order Line Items tab to display the selected type of events. The number next to the event type name indicates the number of available events.

You can click the up arrow icon ![Image: up-arrow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b7189c97-9d24-424e-9728-601f3e06bf3a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3MTg5Yzk3LTlkMjQtNDI0ZS05NzI4LTYwMWYzZTA2YmYzYSIsImV4cCI6MTc2NjYzOTkwMSwianRpIjoiOWVjOWI0ZTM0Y2M0NGFmMmEzZGYwYzc5NTViZmVlMzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3hz0nnFvN-jubUFiJMJNSaeAFYQVeuiWjtiaIQAnw1c) or down arrow icon ![Image: down-arrow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/90b4f9ed-d314-4142-aa59-aa640d5a1afe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkwYjRmOWVkLWQzMTQtNDE0Mi1hYTU5LWFhNjQwZDVhMWFmZSIsImV4cCI6MTc2NjYzOTkwMSwianRpIjoiYzBiOWM4NzM5OTQ4NGJjZmJiNmJmYmIwYmIwM2I2ZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hieCr_g_c_qfRJyxu_0HTHdn89Owo27um5lKNRtDt-M) next to any of the columns to sort the event information by the values of the column. For example, you can click the down arrow next to the Invoice Number to sort the invoices in descending order of the invoice numbers.

Each invoice includes the following information:

| Field | Description |
| --- | --- |
| Invoice Number | Displays the unique identifier for the invoice. For example, INV00000001. |
| Invoice Date | Displays the invoice date . |
| Due Date | Displays the invoice due date . |
| Total Amount | Displays the total amount of the invoice. |
| Balance | Displays the invoice balance. |
| Status | Displays whether the invoice is in a draft, posted, or canceled status . |

Each credit memo includes the following information:

| Field | Description |
| --- | --- |
| Credit Number | Displays the unique identifier for the credit memo. For example, CM00000001. |
| Invoice | Displays the invoice number to which the credit memo applies. |
| Amount | Displays the credit amount for the invoice . |
| Unapplied Amount | Displays the unapplied payment amount |
| Transaction Date | Displays the transaction date |
| Status | Displays the status of the credit memo. The available status is draft, generating, error, posted, canceled, cancel in progress, or pending for tax |

Each debit memo includes the following information:

| Field | Description |
| --- | --- |
| Debit Number | Displays the unique identifier for the debit memo. For example, DM00000007.. |
| Invoice | Displays the invoice number to which the debit memo applies. |
| Amount | Displays the debit amount for the invoice. |
| Balance | Displays the debit memo balance.. |
| Transaction Date | Displays the transaction date |
| Status | Displays the status of the credit memo. The available status is draft, generating, error, posted, canceled, cancel in progress, or pending for tax |

Each order line item includes the following information.

| Field | Description |
| --- | --- |
| Order Line Item | Displays the unique identifier for the debit memo. For example, DM00000007.. |
| Order | Displays the order number containing the order line item. |
| Line Category | Displays whether the category of the order line item is Sales or Return. |
| Item state | Displays item state. The possible value is Executing, Booked, Sent To Billing, Complete or Canceled |
| Quantity | Displays the quantity of the items to be purchased or returned depending on whether the Line Category is Sales or Return. |
| Amount | Displays the charge amount calculated by multiplying the Quantity and Amount Per Unit values of the order line item. |

Note: The

Order Line Items

feature is now generally available. You need to enable the

Orders

or

Orders Harmonization

feature to access the Order Line Items feature.
