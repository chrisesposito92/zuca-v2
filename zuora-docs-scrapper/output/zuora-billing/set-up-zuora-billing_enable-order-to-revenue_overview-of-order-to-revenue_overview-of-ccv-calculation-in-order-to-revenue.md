---
title: "Overview of CCV calculation in Order to Revenue"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/overview-of-ccv-calculation-in-order-to-revenue"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:34.560Z"
---

# Overview of CCV calculation in Order to Revenue

Learn about the calculation of CCV in Order to Revenue, including its generation, updates during the subscription lifecycle, and the impact of various order actions and amendments.

CCV is the estimated cumulative sum of all invoiced or to-be-invoiced charges against a rate plan charge upon booking, inclusive of any proration. CCV is generated when a subscription is created, and it can be updated during the subscription lifecycle.

CCV is calculated based on the billed amount and the unbilled preview amount for each charge segment at the booking time. For more information, see General logic of CCV calculation and CCV calculation examples. To understand how CCV is calculated for evergreen subscriptions, see CCV calculation for evergreen subscriptions.

CCV can be updated throughout the subscription lifecycle due to the following order actions or amendments, as in the table below:

| Amendment Types | Order Actions | CCV Calculation |
| --- | --- | --- |
|  | Create Subscription | Calculated for all charge segments |
| Add Product | Add Product | Calculated for the new charge segment created |
| Update Product | Update Product | Calculated for the new and original impacted segment |
| Remove Product | Remove Product | Calculated for all the impacted charge segments |
| Renew Subscription | Renew Subscription | Calculated for the new renewed charge segments |
| Cancel Subscription | Cancel Subscription | Calculated for all the impacted charge segments |
| Owner Transfer | Owner Transfer | Calculated for all the charge segments |
| Suspend and Resume | Suspend and Resume | Calculated for all the impacted charge segments |
| Terms and Conditions | Terms and Conditions | Calculated for all the impacted charge segments |
|  | Change Plan | Calculated for all the impacted charge segments |
| Change Order from Pending to Active | Change Order from Pending to Active | Calculated for all the impacted charge segments |
