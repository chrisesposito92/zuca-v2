---
title: "Delivery adjustments creation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-adjustments/delivery-adjustments-creation"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:35.230Z"
---

# Delivery adjustments creation

Explains how to create delivery adjustments for refunding customers due to issues like wet newspaper deliveries, including necessary prerequisites and steps in the Zuora UI.

## Example

An end customer subscribes to newspapers delivered every Saturday and Sunday and thus is charged at the same frequency as follows:

-   Terms subscription with period type is week and period is 4

-   Delivery pricing charges:

    -   Recurring charge of 2 USD every Saturday

    -   Recurring charge of 5 USD every Sunday

-   Contract Effective Date: 2023-04-01


For some reason, the end customer received wet newspapers from 2023-04-01 (Saturday) to 2023-04-02 (Sunday) and initiated a refund for the poor deliveries. You can now create delivery adjustments to refund the end customers.

## Prerequisites

Before creating delivery adjustments, ensure the following tasks are completed:

-   The following features must be enabled. For more information, see Enable billing features by yourself .

    -   Delivery Pricing: For creating delivery charges.

    -   Billing Adjustment: For accessing the Adjustments API.

    -   Invoice Settlement: For credit memos or debit memos auto-generation.

-   An invoice for the current billing period has been created and posted.

-   The Post Credit Memo billing permission has been enabled for the billing role specified in so as to generate and post credit memos for the refund. For more information, see Billing Role .

-   The option of the Invoice/Credit Memo generation rule in is either of the following to ensure the positive charge amount is still within an invoice.

    -   Put all negative charges on a credit memo

    -   Put all negative charges and zero credit charges on a credit memo

-   The default credit memo reason code is created.


You must set the default reason code before creating delivery adjustments. To create the default reason code for credit memos, perform the following steps:

1.  Click your username at the top right in the Zuora UI and then navigate to .
2.  Select the Credit Memo from the drop-down list under Define Reason Codes.
3.  Click Add New Reason Code , enter your customized reason code, for example, "Delivery Complaint", and click Save.
4.  Navigate to .
5.  In the Default Subscription Settings section, click Edit.
6.  In the row of the Default Reason Code for Credit Memo created by Delivery Adjustment setting, select your customized reason code from the drop-down list. The default reason code will be used for all credit memos generated through delivery adjustment creation. Once selected, you cannot edit or deactivate the reason code from .

After completing all prerequisite tasks, you can create delivery adjustments through Zuora UI or API.
