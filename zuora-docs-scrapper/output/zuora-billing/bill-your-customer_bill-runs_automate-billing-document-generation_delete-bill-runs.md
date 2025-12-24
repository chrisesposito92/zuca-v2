---
title: "Delete bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/delete-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:55.326Z"
---

# Delete bill runs

Learn how to delete bill runs in Canceled or Error status using the Zuora UI or REST API, ensuring no financial impact.

You can delete any bill run in Canceled or Error status through both the Zuora UI or REST API. The deletion removes the bill run and associated invoices from the Zuora application. Deleting a bill run does not have any financial impact.

To delete a bill run through the REST API, use the [Delete a bill run](https://www.zuora.com/developer/api-references/api/operation/DELETE_DeleteBillRun/) operation.

To delete a bill run through the Zuora UI, perform the following steps:

1.  In the left-hand navigation, go to Billing > Bill Runs to view the list of bill runs.
2.  On the Bill Runs page, locate the [bill run that you have canceled](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-cancelation) or that has errors, and then click the Delete icon on the right side of the row.
3.  In the displayed Delete dialog, click Delete to confirm the bill run deletion.

    Alternatively, you can go to the bill run details page, and then click Delete Bill Run in the upper right.


The bill run and all of the associated invoices are deleted.
