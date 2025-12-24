---
title: "Subscriptions view"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscription-information/subscriptions-view"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:31.306Z"
---

# Subscriptions view

This topic explains how to navigate and utilize the Subscriptions module to view and manage subscription details, statuses, and charges effectively.

## Subscription List and Expanded Views

When you access the Subscriptions module, use the following tabs to view the list of subscriptions:

-   Expanded View is the default view that shows an image of the customer account and account name, along with the subscription number, CMRR (Contracted MRR), contract effective date, next renewal date, current term, renewal term, and the status of the subscription(active, cancelled, draft, pending activation, or pending acceptance). From this view, click view to view the subscription in detail or delete to delete the subscription.
-   List View is a more condensed view that shows the subscription number, status (active, cancelled, draft, pending activation, or pending acceptance), account name, along with the subscription CMRR (Contracted MRR), current term, renewal term, contract effective date, and version. Use the Action column to delete the subscription. Click a column header to sort the column for enhanced search capability.

Click the subscription number in either Expanded or List view to see detailed information about a specific subscription.

## Subscription Views

Use the Subscription Views area (located in the upper-right of the Subscriptions page) to quickly see the status of your subscriptions, and view subscriptions by status.

## Active Status Subtypes

In addition, the Zuora web application (UI) displays two types of Active subscriptions:

-   Within a term : Subscriptions that have not reached the end of their term.
-   Out of term: Subscriptions with an Active status, but have reached the end of their term. These subscriptions are considered "Out of Term," but remain active. You can renew these subscriptions or manually cancel them.

If you are using the Zuora API and want to find all active subscriptions that are still in the term, you must specify an additional query condition, querying for all subscriptions with a term end date that is greater than or equal to the current date.

## Subscription Status Cases

The following are common questions about subscription statuses:

What happens to both status when a Termed Subscription is not renewed?

Nothing. The subscription status remains active, even if it is not renewed.

What is the status of a previous version of a subscription where the contract effective date on the new version has not been eclipsed yet?

The status of previous versions is Expired. Regardless of dates, the previous versions of the subscription will always be Expired.

The Expired status does not indicate that a subscription has ended. In Zuora, the "Expired" status is used to identify old versions of a subscription. Zuora creates a new version of a subscription every time that you create an amendment for that subscription.

What is the status of the current version of a subscription where the contract effective date has not been eclipsed yet?

-   If the latest amendment (or order action) on the subscription is Cancel subscription, the subscription status is Cancelled, as long as the dates are set.
-   If the latest amendment (or order action) on the subscription is Suspend, the subscription status is Suspended, as long as the dates are set.
-   Otherwise, the subscription status is Active, as long as the dates are set.

## Subscription Charge Display

In the subscription, under Product & Charges , you can view your charges grouped by product, trigger condition, or key statistics. You can also view the date in which the charge was invoiced through and the history for that charge. Also, by clicking a specific charge name, you can get an expanded view of the detailed information for this charge. For example, you can check which charges are selected for discount application by clicking the discount charge name in the Product & Charges area and then identifying to the Charge Amount > Apply Discount To section.

## Products & Charges Options

Use the Products & Charges area to view subscription information by product, by triggering condition, or by key statistics.

## View By Product

This is the standard view and the default view in the system. This view displays the last segment of each rate plan charge in a product. To view all the segments of a rate plan charge, use View By Key Statistics and check the History column.

## View By Triggering Condition

Viewing your charges by triggering condition is helpful if, for example, you have a setup fee that is triggered immediately on the contract effective date as well as a recurring fee that is triggered off of the service activation date. See Triggering Conditions for more information.

## View By Key Statistics

This view allows you to see your charges by MRR (Monthly Recurring Revenue) and TCV (Total Contract Value) at the charge level.

The Invoice Through Date column displays the last day of the service period for the charge on the most recent invoice. If the charge has not been invoiced, the field will be blank and no date will be displayed.

In the History column, click the icon to view the history for any given charge within a subscription. This is where you can see any amendments that have been made to a subscription, with each segment representing a version of the subscription. For example, if a charge has been updated via an amendment to increase the price from $2 to $4, the history will show two charge segments: the first charge segment will show a value of $2 and the second charge segment will show a value of $4.

## Configuring Your Subscription Products and Charges Display

You can choose the order in which the products and charges on a subscription are displayed in the user interface. To configure your products and charges display, within the subscription, click on the arrows to the left of the product or the charge to move them up or down in the list.
