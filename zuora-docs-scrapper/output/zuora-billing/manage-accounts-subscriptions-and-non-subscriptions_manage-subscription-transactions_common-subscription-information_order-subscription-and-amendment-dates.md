---
title: "Order, subscription and amendment dates"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:44.184Z"
---

# Order, subscription and amendment dates

This article outlines the various dates associated with subscriptions, orders, and amendments, including billing trigger dates, term start dates, and subscription start dates, which are crucial for determining billing cycles and activation timelines.

There are three subscription and amendment dates that serve as billing trigger dates, as well as a term start date and subscription start date.

Billing trigger dates also exist with an order action if you are an Orders or Orders Harmonization customer. For more information, see Billing Trigger Dates on Order Action .

## Types of Dates

-   The billing trigger dates, along with the bill cycle day (as described above), determine when your subscription starts billing.

-   The term start date determines when a subscription term starts (or, if amending the subscription to renew it for a new term, when the new term starts).

-   The subscription start date is a date determined by Zuora and is the term start date for the original subscription.


You do not need to specify a term start date when creating a subscription. If you do not specify a term start date, the subscription contract effective date is populated as the term start date. In this case, the Subscription start date, the term start date, and the subscription contract effective date are all set to the same date.

## Billing Trigger Dates

Zuora allows you to set up to three billing trigger dates:

-   Contract Effective Date: The date of the contract that governs the subscription. This date is required if you use only a single billing trigger date.
-   Service Activation Date : The date on which the services or products within a subscription have been activated and access has been provided to the customer.

-   Customer Acceptance Date : The date on which the services or products within a subscription has been accepted by the customer.


The required trigger dates can vary by product and are configurable from the Default Subscription Settings . If your company's default subscription settings have Require Customer Acceptance of Orders? or Require Service Activation? set to Yes, you must enter those dates to fully activate the subscription. If either of these options are marked No, the applicable date (customer acceptance or service activation) will be made to match the contract effective date.

The billing trigger dates, along with the customer account BCD and the rate plan charge’s billing day all determine when a charge is billed. Often the contract effective date or the date that triggers the subscription charges, such as the service activation date or customer acceptance date, lines up with the bill cycle day specified in the customer account. When the two dates align, your customer will be billed on the anniversary date of subscription activation. This is known as anniversary billing.

The billing trigger dates are sequential. This has the following effects:

-   If your company uses only a single billing trigger date, only the contract effective date is required to activate a subscription. Even if you only specify that a single date is used, the other two dates (the service activation and customer acceptance dates) are automatically defaulted to be the same as the contract effective date.

-   If your company uses two billing trigger dates, you must specify both the contract effective date and the service activate date to activate the subscription. The third date that is not used (the customer acceptance date) is defaulted to the service activation date.

-   If your company uses all three billing dates, you must enter a date for all three billing trigger dates. You can specify the same or different dates for each type.


You need to specify the billing trigger dates when creating a subscription . The system will set the billing trigger dates that you set upon this time as the activation dates of the subscription. Then, if a charge's trigger condition is Upon Contract Effective, Upon Service Activation, or Upon Customer Acceptance, the system will copy the subscription's activation dates as the charge's start date. Note that you can update the billing trigger dates on the subscription only when the subscription is on version 1. The system will correspondingly update the activation dates of the subscription and then update the charge's start date if the charge has not already been billed.

You can view the billing trigger dates of a subscription either from the Zuora UI and REST API:

-   Zuora UI: On the subscription detail page. If the subscription has amendments, click the subscription version to view the billing trigger dates.

-   REST API: Get subscriptions by account , Get subscriptions by key , and Get subscriptions by key and version .


For how to update billing trigger dates, see Update the trigger dates for a subscription and Update the trigger condition for a subscription rate plan charge .

## Billing Trigger Dates on Amendments

You need to specify the billing trigger dates when making an amendment. Not all amendments' billing trigger dates take real effect. Only the product-level amendments' billing trigger dates might take real effect. The subscription-level amendments' billing trigger dates do not take real effect. See more details as follows:

-   The product-level amendments' billing trigger dates determine a charge's start date if the charge's trigger condition is Upon Contract Effective, Upon Service Activation, or Upon Customer Acceptance. If the trigger condition is Upon a Specific Date, the billing trigger dates on the amendment do not take real effect. Amendments of the following types are product-level amendments:

    -   Add a product

    -   Update a product

    -   Remove a product

    -   Change a product

-   The subscription-level amendments' billing trigger dates do not take real effect. You use the specific date required for an amendment other than the amendment's billing trigger dates. Amendments of the following types are subscription-level amendments:

    -   Terms & Conditions: use Term Start Date.

    -   Suspend: use Suspend Date .

    -   Resume: use Resume Date .

    -   Owner Transfer: an Owner Transfer amendment takes effect immediately, so no date is required.

    -   Renewal: the renewal amendment takes effect when the current subscription term ends, so no date is required.

    -   Cancellation: use Cancellation Date .


## Subscription Dates and Cancelation

The Contract Effective Date is the date that your customer provided as the notice of cancelation. You can also use the same date when populating the Customer Acceptance Date and Service Activation Date of your `amend()` call to cancel a subscription.

When canceling a subscription, the Effective Date is the date that actually specifies when an `amend()` to cancel a subscription should take effect.

For example, suppose that you want to cancel a subscription with a service period that ends on April 15, 2012 (2012-04-15). Use the Effective Date 2012-04-16 in the amend() call to cancel the subscription.

If you use an Effective Date of 2012-04-15, the service period of the invoice generated would have an end date of 2012-04-14.

Note:

After the subscription is canceled, the EffectiveDate of the Amendment object is overwritten with the ContractEffectiveDate. The reason for this behavior is that when creating a new subscription with an amend() call this is the desired effect. If you query the Amendment object after cancelling a subscription, the value of EffectiveDate may be different to the one you originally specified, and be different to what is shown as the cancelation date in the web UI. The cancelation date has been set correctly and can be confirmed by querying the TermEndDate of the amended subscription.

## Billing Trigger Dates on Order Action

If you are an Orders or Orders Harmonization customer, you create or amend a subscription by creating an order consisting of order actions. When creating an order, you must specify billing trigger dates for an order action. Not all order actions' billing trigger dates take real effect. See details as follows:

-   The billing trigger dates on the Create Subscription order action determine the subscription's billing trigger dates. Then, the subscription's billing trigger dates conditionally determine a charge's start date when the trigger condition is Upon Contract Effective, Upon Service Activation, or Upon Customer Acceptance.

-   The billing trigger dates on the product-level order actions conditionally determine a charge's start date when the trigger condition is Upon Contract Effective, Upon Service Activation, or Upon Customer Acceptance.

-   The billing trigger dates on the subscription-level order actions do not take real effect.


The following diagram illustrates the date-setting logic:

![BillingTriggerDates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/482c059d-606c-45ac-ab49-7ab7a6bfc441?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ4MmMwNTlkLTYwNmMtNDVhYy1hYjQ5LTdhYjdhNmJmYzQ0MSIsImV4cCI6MTc2NjYzOTkyMiwianRpIjoiZjQwNDhhMjMwMjQwNGNlYmE4NWMxNzAwYjM0M2RmMjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bjkaQ3ewzk1EbaGS46QehSAqyxe5vC0DYwyluLnoVnw)

The following sections give a detailed description of the date-setting logic:

## Billing Trigger Dates on Create Subscription Order Action

As in the preceding diagram, after the billing trigger dates of the Create Subscription order action are set, the system will copy the billing trigger dates on the Create Subscription order action as the activation dates of the subscription. Next, if a charge's trigger condition is Upon Contract Effective, Upon Service Activation, or Upon Customer Acceptance, the system will set the subscription's activation dates as the charge's start date. After the order is activated and the subscription is created, you cannot update the billing trigger dates on the order action. However, you can still update the trigger dates on the subscription when the subscription is on version 1. The system will correspondingly update the activation dates of the subscription, and then update the charge's start date if the charge is not already billed.

The following is an example.

Suppose you create a subscription through the Create Subscription order action, set the charge's trigger condition as Upon Service Activation, and then only set the Contract Effective Date on the order action to January 1, 2023. After the order is placed, both the order and subscription are now in the pending status, and the resulting dates are as follows:

-   On the subscription: The Contract Effective Date is January 1, 2023. The Service Activation Date and Customer Acceptance Date are both not set.

-   On the charge: The start date is not set.


Next, suppose you set the subscription's activation dates as Service Activation Date: January 2, 2023, and Customer Acceptance Date: January 3, 2023. Both the subscription and order are now active, and the resulting dates are as follows:

-   On the charge: The start date is January 2, 2023. You can see that the system sets the charge's start date as the same as the activation date of the subscription.

-   On the Create Subscription order action: Before setting the subscription to active, the system aligns the billing trigger dates on the Create Subscription order action to those of the subscription. The Contract Effective Date is January 1, 2023. The Service Activation Date is January 2, 2023. The Customer Acceptance Date is January 3, 2023.


As no order is further made to the subscription, this subscription is still on version 1, so you can update the billing trigger dates on the subscription. Suppose you update the subscription's activation dates as Service Activation Date: January 4, 2023, and Customer Acceptance Date: January 5, 2023. Also, suppose the rate plan charge has not been billed yet. The resulting dates are as follows:

-   On the subscription: The system correspondingly updates the billing trigger dates on the subscription. The Contract Effective Date is January 1, 2023. The Service Activation Date is January 4, 2023. The Customer Acceptance Date is January 5, 2023.

-   On the rate plan charge: The system updates the charge's start date. The start date is January 4, 2023.

-   On the Create Subscription order action: The billing trigger days on the order action remain unchanged after the subscription is active. The Contract Effective Date is January 1, 2023. The Service Activation Date is January 2, 2023. The Customer Acceptance Date is January 3, 2023.


## Billing Trigger Dates on Product-level Order Actions

The product-level order actions' billing trigger dates determine a charge's start date if the trigger condition is Upon Contract Effective, Upon Service Activation , or Upon Customer Acceptance. If the trigger condition is Upon a Specific Date, the billing trigger dates on the order action do not take real effect. Order actions of the following types are product-level order actions:

-   Add a product

-   Update a product

-   Remove a product

-   Change a product


## Billing Trigger Dates on Subscription-level Order Actions

The subscription-level order actions' billing trigger dates do not take real effect. For these order actions, you only need to use the specific date required for that order action, as follows:

-   Terms & Conditions: Use Term Start Date .

-   Suspend: Use Suspend Date .

-   Resume - Use Resume Date .

-   Owner Transfer: An Owner Transfer order action takes effect immediately when you activate the order, so no date is required.

-   Renewal: A renewal takes effect when the current subscription term ends, so no date is required.

-   Cancellation - Use Cancellation Effective Date.


## Booking date

Booking date is the business’ contract effective date or order effective date in Zuora.

## Revenue

In Revenue, the booking date will be recorded as the Sale Order Date (SO book date) on the Contract item and used in the following areas:

-   Transactions with sales order date on or before the open period will be considered for revenue processing.

-   Deriving the standalone selling price for allocation

-   Determining exchange rates

-   Determining configuration for Revenue Policy


## Recommendations

Consider the following limitations and recommendations when populating the booking date:

-   Future booking dates cause issues during data processing in Zuora Revenue as the billing document might have an earlier document date than the booking date, this results in data validation issues.

-   If you are a Zuora Revenue customer and using the order date as the booking date for revenue recognition, when creating a scheduled order, it is recommended to ensure the order date and scheduled execution date fall into the same accounting period.
