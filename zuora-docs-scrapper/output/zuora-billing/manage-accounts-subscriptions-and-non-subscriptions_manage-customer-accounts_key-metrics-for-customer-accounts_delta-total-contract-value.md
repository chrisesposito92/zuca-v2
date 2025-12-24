---
title: "Delta Total Contract Value"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/delta-total-contract-value"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:52.184Z"
---

# Delta Total Contract Value

This article provides information about Delta Total Contract Value (DTCV) which represents the change in total contract value after a subscription amendment. DTCV calculated from the difference between the latest and previous TCVs. It is accessible via Zuora's REST and SOAP APIs.

Delta Total Contract Value (DTCV) is the value change in the total contract value (TCV) amount between the latest TCV and the previous TCV after a subscription amendment. Zuora only returns the value of DTCV from the Zuora REST and SOAP APIs.

As TCV does not match the total invoice amounts that are billed for charges over the subscription term and DTCV is calculated based on TCV, DTCV does not match the total invoice amounts, either. See Total Contract Value for information.

## DTCV Calculation

DTCV calculation is based on the charge segment TCVs. Zuora calculates TCV for every charge segment of the one-time and recurring rate plan charges. To get the segment TCVs in a charge:

-   SOAP API: Use the query() call on the RatePlanCharge object.
-   REST API: Use Get subscriptions by key or Get subscriptions by account with the `charge-detail` request parameter.

See Segmented rate plan charges for more information.

If an amendment does not affect a charge segment, the segment keeps the previous DTCV regardless of the base calculation logic.

The value of the DTCV depends on the term setting:

-   If the subscription does not expire (an Evergreen subscription), DTCV is null.
-   If the subscription expires after a period (a Termed subscription), follow the functions below to calculate TCV: DTCV\_of\_a\_Charge = Sum ( DTCV\_of\_Charge\_Segments ) DTCV\_of\_a\_Charge\_Segment = Latest\_TCV\_of\_the\_Segment - Previous\_TCV\_of\_the\_Segment

For more information about TCV, see Total Contract Value .

## Examples of DTCV Calculation

The following examples introduce how to calculate DTCV for one-time and recurring charges.

## Example of a One-time Charge

Suppose your customer subscribes to your one-time charge:

-   Charge model: Flat Fee Pricing
-   Price: $100
-   Charge Effective Start Date: January 1

In this example, only one charge segment in the newly created subscription.

DTCV\_of\_charge\_segment\_1 = Latest\_TCV\_of\_segment\_1 - 0 = 100

DTCV\_of\_charge = 100

Now you create a Remove Product amendment to remove the one-time charge from the subscription. The amendment effective date is on January 1.

DTCV\_of\_charge\_segment\_1 = Latest\_TCV\_of\_segment\_1 - Previous\_TCV\_of\_segment\_1 = 0 - 100 = -100

DTCV\_of\_charge = -100

## Example of a Recurring Charge

Suppose your customer subscribes to your recurring charge:

-   Charge Model: Flat Fee Pricing
-   Price: $100
-   ListPriceBase: Month
-   Billing Period: Month
-   Charge Effective Start Date: January 1
-   Charge Effective End Date: December 31

In this example, only one charge segment in the newly created subscription.

DTCV\_of\_charge\_segment\_1 = Latest\_TCV\_of\_segment\_1 - 0 = 1200

DTCV\_of\_charge = 1200

Now you create an Update Product amendment and make the following changes:

-   Price: $200
-   Amendment Effective Date: July 1

There are two charge segments after subscription amendments.

DTCV\_of\_charge\_segment\_1 = Latest\_TCV\_of\_sengment\_1 - Previous\_TCV\_of\_segment\_1 = 600 - 1200 = -600

DTCV\_of\_charge\_segment\_2 = Latest\_TCV\_of\_sengment\_2 - Previous\_TCV\_of\_segment\_2 = 1200 - 0 = 1200

DTCV\_of\_charge = DTCV\_of\_charge\_segment\_1 + DTCV\_of\_charge\_segment\_2 = -600 + 1200 = 600
