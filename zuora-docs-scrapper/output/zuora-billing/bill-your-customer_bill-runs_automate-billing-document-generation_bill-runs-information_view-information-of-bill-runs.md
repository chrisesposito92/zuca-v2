---
title: "View information of bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-information/view-information-of-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:00.018Z"
---

# View information of bill runs

Learn how to navigate to and view detailed information about bill runs.

1.  In the left-hand navigation section, navigate to Billing > Bill Runs.
2.  On the All Bill Runs page, click the bill run that you want to view information of.
3.  On the bill run details page, view the detailed bill run information.

    On the bill run details page, the ID of the bill run is displayed at the top, followed by its status, and created date.

    The bill run details page displays detailed information about the bill run.

    When viewing the details of bill runs, pay attention to certain fields.

    -   Subscription(s) Selected: The numbers of the subscriptions that are invoiced in the bill run.This field is displayed only if you have selected the specific subscriptions that you want to invoice when creating an ad hoc bill run for a single account.
    -   Documents Emailed: Whether the billing documents generated in the bill run are emailed.The value of this field can be Yes only after you have clicked more > Email billing documents on the bill run details page.
    -   Auto-Post documents upon completion of Bill Run: Whether to automatically post billing documents upon the completion of the bill run.This field is displayed only if you set the Support Bill Run Auto-Post? billing rule to Yes.
    -   Email documents after Auto-Post is complete: Whether to automatically email billing documents after they are automatically posted.This field is displayed only if you set the Support Bill Run Auto-Post? billing rule to Yes.
    -   Tax Status: The status of tax calculation related to the billing document.

        -   Complete

        -   Error

    -   Tax Message: The message about the status of tax calculation related to the billing document. If tax calculation fails in one billing document, this field displays the reason for the failure
