---
title: "Booking Date"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/booking-date"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:46.632Z"
---

# Booking Date

The booking date serves as the contract or order effective date in Zuora, crucial for billing and revenue processes.

## Billing

Booking date is the business' contract effective date or order effective date in Zuora.

In Billing, the booking date is captured through the following fields:

| Tenant type | API field | Corresponding UI field |
| --- | --- | --- |
| Orders | Captured through the orderDate field when creating orders | Order Date |
| Subscribe and Amend | Captured through the lastBookingDate field when creating subscriptions or through the bookingDate field when making amendments | Booking Date |
| Orders Harmonization | Captured through either the orderDate or lastBookingDate field, depending on whether you use the order action or amendment to create and manage a subscription | Order Date or Booking Date |

Once the booking date is entered during subscription creation or amendment, you can view the above fields through UI or API.

For the use of the `lastBookingDate` field in API, see the following API operations:

-   Create a subscription

-   List subscriptions by account key

-   Retrieve a subscription by key

-   Retrieve a subscription by key and version

-   CRUD: Retrieve a subscription Limitations and recommendations Consider the following limitations and recommendations when populating the booking date:

    -   Future booking dates cause issues during data processing in Zuora Revenue as the billing document might have an earlier document date than the booking date, this results in data validation issues.

    -   If you're a Zuora Revenue customer and using the order date as the booking date for revenue recognition, when creating a scheduled order, it's recommended to ensure the order date and scheduled execution date fall into the same accounting period.



## Revenue

In Revenue, the booking date will be recorded as the Sale Order Date (SO book date) on the Contract item and used in the following areas:

-   Transactions with sales order date on or before the open period will be considered for revenue processing.

-   Deriving the standalone selling price for allocation

-   Determining exchange rates

-   Determining configuration for Revenue Policy


## Recommendations

Consider the following limitations and recommendations when populating the booking date:

-   Future booking dates cause issues during data processing in Zuora Revenue as the billing document might have an earlier document date than the booking date, this results in data validation issues.
-   If you're a Zuora Revenue customer and using the order date as the booking date for revenue recognition, when creating a scheduled order, it
