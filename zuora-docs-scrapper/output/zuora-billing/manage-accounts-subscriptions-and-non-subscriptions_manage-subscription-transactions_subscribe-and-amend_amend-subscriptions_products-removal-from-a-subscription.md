---
title: "Products removal from a subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-removal-from-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:17.368Z"
---

# Products removal from a subscription

This topic provides steps to remove products from a subscription in the Zuora UI, including handling future-dated updates and API instructions.

Note:

Creating and amending subscriptions in the Zuora Billing UI is only relevant for existing Subscribe and Amend customers who have not transitioned to Orders or Orders Harmonization . Any new customers will not see this UI.

Use the following steps to remove a product from a subscription from the Zuora UI. You can use these steps to remove a product even if there is a future-dated update for the product.

Note:

Once a rate plan charge has been removed from a certain effective date, if you are going to perform another Remove product amendment on the same charge, the system has the following behaviors based on the effective date of the second removal:

-   If the effective date of the second removal is earlier than that of the first removal, the system supports it as in Remove Rate Plan on Subscription before Future-dated Removals .

-   If the effective date of the second removal is the same as or later than that of the first removal, the system behaves in the following manner:

    -   A new subscription version will be created as a result of the second removal.

    -   The second removal will take no effect and the end date of the rate plan charge is still set as the effective date of the first removal.


## Product removal through API

See Removing a Product in the Zuora API Developer's Guide and follow the instructions based on your WSDL version.

Set the contract effective, effective, service activation, and customer acceptance dates to the date you want the cancellation or downgrade to take effect.

-   If proration is enabled and the amendment contract effective date is not set to the start of the next invoice period or next term, the customer will receive a proration credit for the unused portion of a recurring fee. One time charges and usage charges will never prorate.

-   In order to ensure no proration, this should be the first day of the next invoice period or the first day of the next term, depending on whether you want to cancel at the end of the last invoice period or end of term.


For example, if the current invoice period for the product extends from 10/01/2011-10/31/2011 and the next invoice period for this product begins on 11/01/2011, if you do not want proration set the contract effective date to 11/01/2011.

## Products removal with Future-dated Amendments on Subscription

You can remove products even when future-dated amendments exist on the subscription.

See Future-dated Amendments for more information about supported types of future-dated amendments.

See Remove a Product on Subscription with Future-dated Removes for detailed information.
