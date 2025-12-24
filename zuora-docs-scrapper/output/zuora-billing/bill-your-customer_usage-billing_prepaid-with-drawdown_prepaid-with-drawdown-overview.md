---
title: "Prepaid with Drawdown overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepaid-with-drawdown-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:57.458Z"
---

# Prepaid with Drawdown overview

The Prepaid with Drawdown feature allows customers to prepay for services and consume against the balance, with options for topping up or handling overages. It balances upfront commitment with pay-as-you-go models.

The Prepaid with Drawdown feature is a pricing model for consumption-based services, such as data storage. The Prepaid with Drawdown feature enables your customers to pay upfront and then consume against the prepaid balance, with the possibility of topping up or being charged for any overage.

Under this model, customers can either purchase a prepayment balance in currency or a number of units, usually for a period of time like a month or a year. Then they consume against that prepayment balance in a use-it-or-lose-it fashion, with a possibility of topping up more units or being charged for any overage. This model strikes a balance between upfront commitment and the pure pay-as-you-go pricing models.

Prepayment charges are not prorated regardless of the proration billing rules for recurring charges.

You need to turn on the Prepaid with Drawdown feature from the self-service interface.

To create a prepaid type of subscription service, in your Product Catalog, you need to create product rate plans that contain a prepayment charge and a corresponding drawdown charge. The prepayment and drawdown charges do not need to be in the same product rate plan.

Prepaid charges

-   One-time and recurring charges can be used as prepayment charges to create the prepaid balance.

-   Prepaid charges can be either currency or unit based.

    -   For unit based, each UOM under a subscription will create an independent prepaid balance.

    -   For currency based, only one prepaid balance will be created, with the same currency as the subscription.

-   Each charge will create at least one fund under the prepaid balance.


Drawdown charges

-   Usage charges must be used to draw down the prepaid balance.

    -   For currency based prepaid charge, the corresponding drawdown charges must also be currency based and usages will be rated prior to draw down.

    -   For unit based prepaid charges, drawdown charges should be unit based and will draw down units directly. When you upload usage records as the drawdown charge, the UOM of your usage records must comply with the UOM of the drawdown charge.

-   For unit based, drawdown (usage) charges’ UOM can be different from the prepaid charge's UOM. In this case, you should set the drawdown exchange rate so that the proper quantity of the drawdown UOM can be drawn down. For example, various services might draw down “Credits”, and there will be a drawdown rate between “Reports” consumed and equivalent “Credits” to be drawn down.

-   Multiple usage charges can draw down the same prepaid balance; the drawdown happens from one fund to another, one by one. And only when one fund is consumed, draw down will continue from another fund, if available. The drawdown sequence is determined by the business start date and the fund creation date.


## Prerequisites

The following requirements need to be met before you can use this feature:

-   Orders or Orders Harmonization should be enabled.

-   If you are using Orders Harmonization:

    -   You must enable the Auto-renew by Order Billing setting.

    -   You must use order to create prepaid with drawdown subscriptions.

-   If you are using Zuora CPQ, you must tenable the Enable Order for CPQ Billing setting.

-   To use currency based Prepaid with Drawdown, you must first enable Unbilled Usage. If Unbilled Usage is enabled, the isPrepaid field is replaced by Charge Function . You will also see the Commitment Type .


## Notes and limitations

-   This feature deals with non-cash units (for example, GB, Seats, Minutes, or Virtual Currency). Prepaying and holding cash on account uses the dedicated Prepaid Cash with Drawdown feature.

-   Suspend a subscription, Resume a subscription, and Change the owner of a subscription order actions are not yet supported. Invoice ownership transfer is supported.

-   Order Line Item is not yet supported.

-   When a prepayment charge is activated, you cannot change its trigger date.

-   Drawdown charges are not supported by subscription preview.

-   The Delivery Pricing charge model is not supported.

-   Prepaid Validity Period Summary Data Source supports configuring one or more percentage values or fixed numbers of quantity at the validity period level as thresholds and sending notifications when the remaining balance reaches the thresholds.

-   Prepaid with drawdown prepayment charges are incompatible with subscription pending, as the effective date for prepaid with drawdown funds is required.

-   You cannot change the term start date when a subscription is created with a prepayment charge.

-   You can perform the following operations anytime in a validity period: However, the following limitations will be applied:

    -   Cancel a prepayment subscription

    -   Remove a prepayment charge from a prepayment subscription

    -   Change the term of a prepayment subscription


    -   Before performing the above operations, ensure all the billing periods within the validity period are billed.

    -   If a validity period of the prepayment subscription contains multiple billing periods and the credit option of the recurring prepayment charge is set to “Consumption Based”, when no drawdown usage is uploaded to the validity period, you cannot perform the above operations.

-   Currency based PPDD requires unbilled usage, so the supported usage charge models are the same as those of unbilled usage.

-   If a subscription has multiple prepaid balances, the Validity Period Type of each balance must be the same. Mixing use of the Validity Period Type is not supported.

-   To use the Prepaid with Drawdown feature for an evergreen subscription, you must add a recurring charge as the prepayment charge before adding any one-time prepayment charge.

-   We do not support enablement of adding prepayment charges to evergreen subscription.

-   If you come across the following warning message while creating subscription: "ChargeTriggerDate for topup recurring charge" charge TriggerDate goes into the current segment startDate, rather the first version segment.startDate. It is not recommend for Prepaid charge. to have chargeStartDate like monthEnd day (28,29,30), instead Zuora recommends to alignTermStart|alignTermEnd.

-   Currency-based prepaid recurring charges do not support an annual list price. This situation occurs when the recurring charge's List Price Base is set to Per Year or Specific Months, and the Billing Period is shorter than the List Price Base.
