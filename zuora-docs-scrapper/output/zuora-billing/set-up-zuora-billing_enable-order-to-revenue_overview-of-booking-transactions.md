---
title: "Overview of Booking Transactions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-booking-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:39.559Z"
---

# Overview of Booking Transactions

The Booking Transaction object in Zuora Billing captures key changes and updates during subscription creation or amendment, generating transactions under specific conditions.

Booking transactions capture important changes, custom field direct updates, and the delta values on Rate Plan Charge, Order Line Item, and related objects when a subscription is created or amended in Zuora Billing. It is mainly used for Booking Reconciliation. The Booking Transaction object is available in the data source and Data Query. For more detailed information, see [Booking Transaction object fields and Data Query](/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-booking-transactions/booking-transaction-object-fields-and-data-query)

Note:

Oder to Revenue supports the processing of deleted orders and amendments. For deleted sales order lines, the corresponding booking transaction updates the charge status in Zuora Revenue to void during synchronization.

## Booking transactions for subscriptions

When a subscription is created or amended, booking transactions are generated on the segment level if one of the following conditions is met:

-   The new segment is a discount, and the new segment's quantity is not the same as the previous segment.

-   The new segment is not a discount, and the new segment's Extended List Price (ELP) value is not the same as the previous segment.

-   The new segment's effective start date is not the same as the previous segment.

-   The new segment's effective end date value is not the same as the previous segment.

-   The Charge Contract Value (CCV) of the new segment is not the same as the previous segment.

-   When a charge is created, a new segment is created and a booking transaction is generated for the new segment.

-   When a charge is updated, a new segment is created and a booking transaction is generated for the segment.

-   When an owner transfer occurs to a subscription and the subscription owner gets changed, all the segments that belong to the new version subscription generate booking transactions.

-   If the current segment is a discount charge and the applied to charge segment is changed, a booking transaction is generated for the discount line.

-   The impacted SO lines will be auto reintegrated after BCD changed.

In the following table, you can see how booking transactions get generated for amendments or order actions:

| Amendment Types | Order Actions | Booking Transaction Object |
| --- | --- | --- |
|  | Create Subscription | Records all charge segments |
| Add product | Add product | Records the new charge segment created |
| Update product | Update product | Record the new and old impacted segment |
| Remove Product | Remove Product | Record all impacted charge segments |
| Renew Subscription | Renew Subscription | Record the new renewed charge segments |
| Cancel Subscription | Cancel Subscription | Record all impacted charge segments |
| Subscription Owner Transfer | Subscription Owner Transfer | Record all charge segments |
| Suspend and resume | Suspend and resume | Record all impacted charge segments |
| Terms and Conditions | Terms and Conditions | Record all impacted charge segments |
|  | Change Plan | Record all impacted charge segments |
|  | Component | Record all impacted charge segments |
| Pending to Active | Pending to Active | Record all impacted charge segments |
|  | Revert Order (Only supported with a single version subscription). | Record all impacted charge segments |

## Booking transactions for order line items

When an order line item is created or updated, booking transactions are generated if one of the following conditions is met:

-   The `itemState` field is set to `Booked`, `SentToBilling`, or `Complete` when creating the order line item
-   The `itemState` field is transitioned from `Executing` to `Booked`, `SentToBilling`, or `Complete`.

## Expectations

The booking transactions are not generated for the following conditions:

-   Draft subscriptions
-   Booking Transaction is not generated when the Owner Transfer of subscription's invoice owner is processed.
