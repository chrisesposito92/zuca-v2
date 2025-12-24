---
title: "Subscriptions cancelation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-cancelation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:54.977Z"
---

# Subscriptions cancelation

This topic explains how to cancel subscriptions in Zuora Billing, including selecting effective dates and handling future-dated amendments.

Note:

Creating and amending subscriptions in the Zuora Billing UI is only relevant for existing Subscribe and Amend customers who have not transitioned to Orders or Orders Harmonization . Any new customers will not see this UI.

During the subscription term, a customer may decide to discontinue their subscription to your company's services. This customer might want to cancel their subscription effective immediately, on a specific date, or at the end of the current term. To stop billing a customer account, you can either create an amendment to remove the applicable products from the subscription, or you can cancel the subscription entirely.

## Cancellation of Effective Dates

When cancelling a subscription, it is important to choose the correct cancellation effective date to avoid any undesired credits being issued back to the customer or additional charges being billed to the customer beyond the cancellation date.

You can also set the cancellation effective date to be before a renewal term or before the last invoice date. For more information, see Amend or Cancel a Subscription Before the Renewal Term and Amend or Cancel a Subscription Before the Last Invoice Date .

The cancellation effective dates available are End of Current Term, Enter a Date (specify a date), and End of Last Invoice Period.

You cannot cancel a subscription if the subscription includes a discount charge and the cancellation effective date is before the start date of the discount charge's last segment.

## End of Current Term

If you select End of Current Term, customer billing continues through the end of current term for the applicable subscription. For example, a subscription with a term start date of 1/1/2010 and an initial term of 60 months would have a term end date of 12/31/2014. Cancelling using the end of term in this example will result in the subscription continuing to bill through 12/31/2014. For the cancellation effective date End of Current Term, Zuora Billing automatically populates the cancellation date field with the date the current term ends.

## Enter a Date

If you select Enter a Date and specify a date, customer billing will be discontinued on the cancellation date entered. Check the service period on the last invoice posted for the applicable customer account prior to setting the cancellation date. This is to avoid undesired credits back to the customer or additional charges billed to the customer beyond the cancellation date. For example, if you've billed through a certain period (for example, the service period on the invoice is from 1/1/2010-12/31/2010), and the subscription is cancelled midway through that service period on 6/1/2010 (using cancel effective date), Zuora Billing will issue a credit back to the customer on the next invoice for the period of 6/1/2010-12/31/2010.

## End of Last Invoice Period

If you select End of Last Invoice Period, customer billing is discontinued as of the day after the last invoiced service period. For the cancel effective date End of Last Invoice Period, Zuora Billing automatically populates the cancellation date field with that date.

## Subscription Cancellation with Future-dated Amendments on Subscription

You can cancel subscriptions when certain types of future-dated amendments exist on the subscription.

See Future-dated Amendments for more information about supported types of future-dated amendments.
