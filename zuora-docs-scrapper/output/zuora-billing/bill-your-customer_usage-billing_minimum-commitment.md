---
title: "Minimum Commitment"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/minimum-commitment"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:50.163Z"
---

# Minimum Commitment

The Minimum Commitment feature allows businesses to ensure a baseline revenue by charging customers a true-up if their consumption falls short of the agreed minimum by the end of the service period.

You can use the Minimum Commitment charges to create subscription services that require the customers to consume a minimum amount. The customers will be automatically charged a true-up to meet the minimum commitment if they don't spend enough by the end of the service period. In this case, an invoice item will be generated automatically to collect the difference between the actual consumption and the contracted commitment.

With Minimum Commitment, you can set a competitive price for the services to attract more subscribers and at the same time guarantee a minimum revenue for each subscription.

Note:

To access the Minimum Commitment feature, you need to turn on the Prepaid with Drawdown and Unbilled Usage features from the self-service interface.

## Minimum Commitment concepts

To set up a Minimum Commitment subscription service, you need to make sure to include one recurring charge with the Charge Function field set to Commitment True-up , and one or more usage charges with the Credit Commitment checkbox selected.

Refer to the following information to understand the relevant concepts:

-   Commitment True-up charge: Defines the minimum commitment. If the customer doesn't reach the committed amount, this charge will generate an invoice item that will charge the difference between the actual amount and the minimum commitment.

-   Credit Commitment : Defines the unit price and tracks actual usage. Usage records should be uploaded against the Credit Commitment charges.

-   Commitment Period : The period by the end of which the customer will be charged with a true-up if they fail to spend the minimum amount. The commitment period is defined on the Commitment True-up charge through the Validity Period field. A validity period can contain one or more Billing Periods.


## Example Use Case for Minimum Commitment

![A sample use case for Minimum Commitment](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/da68d6bb-5d85-4ef3-bdd9-7cacbfcacb11?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRhNjhkNmJiLTVkODUtNGVmMy1iZGQ5LTdjYWNiZmNhY2IxMSIsImV4cCI6MTc2NjY1MTQ0NywianRpIjoiYWJlOTBhMzA5ZDFmNDNlZThiYzVkMjljNzMwZTdmZjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IhD7xVjRYXSvYJqI_jMXQK8MbrvqHLYXGndOO74PInQ)

In this example, the customer signed a 1-year contract with a minimum commitment of $12,000. The customer is billed quarterly. As the customer's total spend this year is only $10,000, which doesn't meet the committed amount, a $2,000 true-up charge was generated at the end of the term.

Note that the commitment period can also be set to any period if it is a multiple of the billing period.

## Prerequisites

The following requirements need to be met before you can use this feature:

-   Orders or Orders Harmonization should be enabled.

-   If you are using Orders Harmonization, you must enable the Auto-renew by Order Billing setting and you must use an order to create prepaid with drawdown subscriptions.

-   If you are using Zuora CPQ, you must enable the Enable Order for CPQ Billing setting.

-   By default, the term start date will be set as the billing day of a Commitment True-up charge. Therefore, you must enable the Term Start Day option for the Billing Day setting.


## Supported charge models

The Minimum Commitment feature inherits the same scope of supported charge models from that of the Unbilled Usage feature. For more information, see the supported charge models by the Unbilled Usage feature.

## Create minimum commitment charges

To create a minimum commitment rate plan, you need to set up a Commitment True-up charge and some Drawdown and Credit Commitment charges.

## Commitment true-up charge specific settings

A commitment true-up charge must be a recurring charge. Make sure the following fields are specified during the creation of the charge:

-   Charge Function: This field needs to be specified as Commitment True-up.

-   Commitment Type: Currency only.

-   Validity Period: This field specifies the commitment period, during which the customers commit to a minimum spending.

-   Billing Day: This field cannot be set to Default to Customer Account, or a specific day in a month or week.


## Credit commitment charge specific settings

A credit commitment charge must be a usage charge. Make sure the following fields are specified during the creation of the charge:

-   Credit Commitment: This checkbox needs to be selected.

-   Commitment Type: Currency only.

-   Billing Day: Cannot be set to Default to Customer Account, or a specific day in a month or week.


You can include more than one credit commitment charge in a minimum commitment product rate plan. If a usage charge is both a drawdown charge and a credit commitment charge, select both the Credit Commitment and Drawdown checkboxes. The prepaid balance will be consumed first.

After creating the product that contains minimum commitment charges, you can set up integrations to use Orders to create subscriptions in Zuora whenever a customer subscribes.

## Upload usage records for the usage charges

To track the usage of minimum commitment subscriptions, you need to upload the usage records to the corresponding usage charges.

You can use Unbilled Usage to view usage records and rating results before charges are billed.

## Generate invoices for minimum commitment subscriptions

For minimum commitment subscriptions, when billing at the end of a commitment period, Zuora will compare the total usage of the period with the commitment amount.

If the customer didn't spend the committed amount, a true-up invoice item would be generated to collect the difference between actual usage and the committed amount.

If the customer spent more than the committed amount, Zuora would generate invoices that collect the actual amount.

## Cancel minimum commitment subscriptions

When canceling a minimum commitment subscription, if the validity period is equal to the subscription term, Zuora will check and generate the true-up amount based on the consumed usage

If the validity period is not the same as the subscription term, canceling is not allowed.

## Top up commitment subscriptions

You can increase the minimum commitment by adding an additional committed amount. This can be done by adding new commitment charges to the relevant rate plans. Both one-time and recurring charges can be added as commitment increases.

## Notes and limitations

-   When setting up the commitment charges in Product Catalog:

    -   Only recurring charges are supported. One-time charges cannot be used as commitment charges.

    -   Billing Day cannot be set to Default to Customer Account , or a specific day in a month or week. This is to prevent a mis-match between billing and validity periods, which could make tracking difficult.

    -   Billing Timing can only be In Arrears .

    -   Billing Period and Validity Period of the recurring commitment charge must be set to the same length.

    -   Credit Option is set to Consumption Based by default and cannot be changed.

    -   List Price Base cannot be set to Week, as a week doesn’t evenly multiply into most Billing Periods.

    -   Deferred Revenue G/L account should be maintained the same for commitment charges and usage charges.

-   When using Orders to create and manage minimum commitment subscriptions:

    -   Cannot create a prepayment charge & a commitment charge

    -   Cannot remove/cancel/change a commitment charge if validity period is not sub term

    -   The Suspend and Resume actions are not supported.

    -   Evergreen subscriptions are not supported.

    -   If the commitment charge's validity period is set to Subscription Term, List Price Base must be Per Billing Period.

-   For minimum commitment subscriptions: Subscription preview is not accurate as it doesn't contain the true-up information.
