---
title: "Delta Monthly Recurring Revenue"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/delta-monthly-recurring-revenue"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:49.651Z"
---

# Delta Monthly Recurring Revenue

The Delta Monthly Recurring Revenue (DMRR) represents the change in monthly recurring revenue after a subscription amendment, calculated using Zuora's REST and SOAP APIs.

Delta Monthly Recurring Revenue (DMRR) is the change in monthly recurring revenue (MRR) between the latest MRR and the previous MRR after a subscription amendment. Zuora only returns the value of DMRR from the Zuora REST and SOAP APIs.

## DMRR Calculation

You can calculate DMRR in the following levels:

-   DMRR for all customer accounts Add up all the account-level DMRR.
-   DMRR in account level Add up all the subscription-level DMRR for that customer.
-   DMRR in subscription level Add up all the charge-level DMRR for that subscription.
-   DMRR in charge level See below for detailed information.

## Charge-level DMRR

Charge-level DMRR is calculated based on the MRR of the charge segments. Zuora calculates MRR for every charge segments of recurring charges. To get the segment MRRs in a recurring charge:

-   SOAP API: Use the query() call on the RatePlanCharge object.
-   REST API: Use Get subscriptions by key or Get subscriptions by account with the `charge-detail` request parameter.


See Segmented rate plan charges for more information.

Follow the formulas below to calculate DMRR in charge level:

DMRR = Sum ( DMRR\_of\_Charge\_Segments )

DMRR\_of\_a\_Charge\_Segment = Latest\_MRR\_of\_the\_Segment - Previous\_MRR\_of\_the\_Segment

For more information about MRR, see Monthly Recurring Revenue .

## Examples of DMRR Calculation

The following examples introduce how to calculate DMRR in charge level.

Suppose your customer subscribes to your recurring charge:

-   Charge Model: Flat Fee Pricing
-   Price: $100

-   List Price Base: Month
-   Billing Period: Month
-   Charge Effective Start Date: January 1
-   Charge Effective End Date: December 31

In this example, only one charge segment in the newly created subscription.

DMRR\_of\_charge\_segment\_1 = Latest\_MRR\_of\_Segment\_1 - 0 = 100

DMRR = 100

Now you create an Update Product amendment and make the following changes:

-   Price: $160
-   Amendment Effective Date: June 1

There are two charge segments after subscription amendments.

DMRR\_of\_charge\_segment\_1 = Latest\_MRR\_of\_Segment\_1 - Previous\_MRR\_of\_Segment\_1 = 100 - 100 = 0

DMRR\_of\_charge\_segment\_2 = Latest\_MRR\_of\_Segment\_2 - Previous\_MRR\_of\_Segment\_1 = 160 - 100 = 60

DMRR = DMRR\_of\_charge\_segment\_1 + DMRR\_of\_charge\_segment\_2 = 60

Now you create a Remove Product amendment with the amendment effective date on March 1.

The Remove Product amendment does not create a new charge segment. So there are still two charge segments.

DMRR\_of\_charge\_segment\_1 = Latest\_MRR\_of\_Segment\_1 - Previous\_MRR\_of\_Segment\_1 = 100 - 100 = 0

DMRR\_of\_charge\_segment\_2 = Latest\_MRR\_of\_Segment\_2 - Previous\_MRR\_of\_Segment\_2 = 160 - 160 =0

DMRR = DMRR\_of\_charge\_segment\_1 + DMRR\_of\_charge\_segment\_2 = 0
