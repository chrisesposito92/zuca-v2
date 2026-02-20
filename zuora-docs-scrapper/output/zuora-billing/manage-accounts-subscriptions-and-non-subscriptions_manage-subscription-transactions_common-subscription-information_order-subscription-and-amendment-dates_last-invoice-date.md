---
title: "Last Invoice Date"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/last-invoice-date"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:23.665Z"
---

# Last Invoice Date

The last invoice date corresponds to the process through date, indicating the final date charges have been processed for a subscription.

The last invoice date is the date until when charges have been processed.

The last invoice date is the same date as the process through date. If there are more than two charges on the subscription, the last invoice date is the same date as the latest process through date of all the charges within the subscription.

1.  Navigate to Customers > Subscriptions in the left-hand navigation section.
2.  Click the name of the subscription to enter the detailed subscription view.
3.  At the bottom of the page in the Product & Charges section, select View by Key Statistics from the drop-down list. The History column is displayed in the table.
4.  Click the icon for a charge in the History column. The Process Through date of the charge is displayed in the Charge History of table.

In the Zuora SOAP API, you can get the process through date of a charge by querying the `ProcessedThroughDate` field on the [RatePlanCharge](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplancharge) object.

In the Zuora REST API, you can get the process through date ( `processedThroughDate` ) of a charge using the Get Subscription by Key methods.
