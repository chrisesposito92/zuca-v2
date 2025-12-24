---
title: "Bill runs review and post"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-review-and-post"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:47.486Z"
---

# Bill runs review and post

Understand how to review and post bill runs to ensure invoices are finalized and payments can be collected.

After a bill run is completed, all invoices for the bill run have been generated and the bill run will have the Completed status. The Completed status does not mean that the invoices for the bill run have been posted. When you post a bill run, it also posts all invoices generated for that bill run.

When your invoices are considered final, you can post them all at once by posting a bill run, as long as your invoices are all part of a single bill run. Posting a bill run makes it possible to collect payments for the invoices in that bill run. Prior to posting your invoices for a bill run, the bill run itself must be in Completed status.

If you have the Advanced AR Settlement feature enabled, when you post a bill run, all the bill run associated credit memos are also posted.

## Bill run notifications

Notifications are available in emails or in the UI for bill run completion or errors.

## Email notifications

When a bill run is completed, or if it cannot be executed due to an error, an email notification from [support@zuora.com](mailto:support@zuora.com) is sent to the user who initiated or scheduled the bill run. The status of the bill run will be Completed or Error.

Note:

The user who is executing an ad hoc bill run will receive a notification. If you would like to change who receives the email notifications for a scheduled bill run, the bill run needs to be scheduled by that user.

## UI error notification

After a bill run has finished, go to to check the status of the bill run.

-   On the all bill run list page, an alert icon is also displayed in the list view, next to the completed status of any bill run which produced errors. Additionally, an alert icon is also displayed in the expanded view, next to the completed status of any bill run which produced errors.

-   On the specific bill run detail page, a tab called Failed Accounts or Subscriptions is displayed if failures occur in the bill run. This tab displays a list of the accounts that produced errors and the individual subscriptions of those accounts in which the billing run error occurred. It helps you to check whether all invoices have been generated or not, and ensures that you don't miss out on any revenue that is due.
