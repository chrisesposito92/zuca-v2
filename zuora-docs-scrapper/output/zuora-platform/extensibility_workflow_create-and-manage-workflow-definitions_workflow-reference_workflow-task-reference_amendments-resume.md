---
title: "Amendments: Resume"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-resume"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:45.114Z"
---

# Amendments: Resume

This reference describes the Amendments: Resume task.

The resume task resumes a suspended subscription. The task provides two groups of options based on the set of Zuora APIs being used (SOAP or REST).

For details about resuming a subscription, see [Resume a Subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-resumption). To learn more about the data fields, see [Amendment object](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment) for SOAP and [API Reference](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ResumeSubscription/) for REST.

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, this task can support to generate credit memos and apply outstanding credit memos and unapplied payments.

## Task Settings

-   Subscription.Id - Manually enter a subscription ID, or select Subscription.Id or Subscription.Number to identify the subscription that you would like to resume.


## SOAP

-   Name - Specify a name to identify the amendment.

-   Description - Optionally enter some description.

-   Resume Date - The date when the subscription resumption takes effect.

-   Contract Effective Date - The date when the customer notifies you that they want to resume thei subscription.

-   Generate Invoice - Enable if you want the workflow to generate an invoice immediately for the subscription.

-   Apply Credit Balance - This option is available only when Generate Invoice is enabled. Enable this option if you want any credit balance on the customer account to be automatically applied to invoices.

-   Process Payment - This option is available only when Generate Invoice is enabled. Enable this option if you want Zuora to collect payment against the invoice. The payment is processed only when AutoPay is enabled.


## REST

-   Resume Policy

    -   Today - The subscription is resumed today.

    -   SpecificDate - The subscription is resumed on a specific date.

    -   FixedPeriodsFromSuspendDate - The subscription is resumed after the specified period based on the suspension date. Specify the length of the period and select one of the following period types: Day(s), Week(s), Month(s), and Year(s).

    -   FixedPeriodsFromToday - The subscription is resumed after the specified period based on today's date.

-   Extend Terms - Enable if you want Zuora to automatically extend the subscription term.
