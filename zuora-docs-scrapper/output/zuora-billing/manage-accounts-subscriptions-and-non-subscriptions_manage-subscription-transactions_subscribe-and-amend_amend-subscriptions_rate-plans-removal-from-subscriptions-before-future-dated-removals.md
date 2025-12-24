---
title: "Rate plans removal from subscriptions before future-dated removals"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/rate-plans-removal-from-subscriptions-before-future-dated-removals"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:21.737Z"
---

# Rate plans removal from subscriptions before future-dated removals

This topic explains about managing Remove Product amendments in subscriptions with future-dated removals using Zuora APIs.

You can create a Remove Product amendment even if there is a future-dated Remove Product amendment on the subscription. The feature is supported through the SOAP API and REST API. The effective date of the Remove Product amendment must be earlier than the effective date of any existing future-dated Remove Product amendment. The system will ignore it if you try to remove a product on a date after the effective date of a future-dated removal.

Note:

Once a rate plan charge has been removed from a certain effective date, if you are going to perform another Remove product amendment on the same charge, the system has the following behaviors based on the effective date of the second removal:

-   If the effective date of the second removal is earlier than that of the first removal, the system supports it as described in this article.

-   If the effective date of the second removal is the same as or later than that of the first removal, the system behaves in the following manner:

    -   A new subscription version will be created as a result of the second removal.

    -   The second removal will take no effect and the end date of the rate plan charge is still set as the effective date of the first removal.


For example:

-   A customer subscribes to your Home Phone Service for one year starting on January 1, 2018.

-   In April, the customer wants to remove this service at a future date, August 1, 2018. The customer uses a cell phone all the time and Home Phone Service is no longer required. You create a future-dated Remove Product amendment by setting the effective date to August 1, 2018.

-   In May, the customer wants to discontinue this service on June 1, 2018 to save more money. You create a Remove Product amendment by setting effective date on June 1, 2018.


After the above subscription amendments, the Home Phone Service ends on June 1, 2018.

## Using the Zuora APIs

You can use Zuora SOAP API and REST API to update a product even when future-dated Remove Product amendments already exist on the subscription:

-   For SOAP API, see Remove a Product (Amendment) use case and follow the instructions based on WSDL version 74.0+.

-   For REST API, use the Update subscription method.
