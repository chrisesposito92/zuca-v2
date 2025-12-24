---
title: "Data backfill"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/data-backfill"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:16.543Z"
---

# Data backfill

Learn how to perform data backfill to update object records with necessary field values for revenue recognition and view backfill logs for your tenant.

On the Data Backfill page, you can perform data backfill to update the object records with necessary field values for revenue recognition, such as updating the booking date on a rate plan charge or updating the accounting codes on a product rate plan charge.

You can also view the backfill logs for your tenant.

You can perform the following data backfill actions:

-   Use Charge Original Created on Date as Booking Date

    Note:

    If you became a Zuora customer after 2022, you do not need to perform the Use Charge Original Created on Date as Booking Date action.

-   Update Product Rate Plan Charge

-   Use Product Rate Plan Charge Revenue Related Fields Value for RPC

    Note:

    If there are any new data such as a new subscription version/RPC generated once an auto backfill job is submitted, it will not be covered.

-   Use Product Rate Plan Charge Revenue Related Fields Value for OLI

    Note:

    If there are any new data such as a new OLI generated once an auto backfill job is submitted, it will not be covered.

-   Update Rate Plan Charge

-   Update Invoice Item

-   Update Credit Memo Detail

-   Update Debit Memo Detail

-   Update Invoice Item Adjustment

-   Update Order Line Item


Note:

You must perform data backfill when enabling the Order to Revenue feature on an existing Billing tenant. Data backfill must be performed after configuring the revenue settings and before data migration. For more information about the required operation sequence, see Implementation guide .

Also, perform data backfill only once before your tenant goes live. If you perform data backfill again after your tenant goes live, data inconsistency will occur between Zuora Billing and Zuora Revenue.
