---
title: "Payment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:42.799Z"
---

# Payment data source

Data source to export Payment data

## Overview

Use this data source to export Payment data, including amount, dates, and status. Each row represents a single payment. This data source also includes data on the account and payment methods associated with the payment.

## Objects available in the data source

See [Zuora Business Object Model](/basics/about-zuora/zuora-business-object-model) for more information.

## Base object description

Descriptions for the base Zuora object.

| Zuora object | Description |
| --- | --- |
| Payment | The money sent by a customer to pay for charges related to their subscriptions. Contains the following fields:Accounting CodeAmountApplied Amount (Only applicable if you have Invoice Settlement enabled)Applied Credit Balance AmountAuthorized Transaction IDBank Identification NumberCancelled OnCommentCreated By IDCreated DateCurrencyEffective DateGatewayGateway Order IDGateway Reconciliation StatusGateway Reconciliation ReasonGateway ResponseGateway Response CodeGateway StateIDMarked For Submission OnPayment NumberPayout IdPrepaymentReference IDReferenced Payment IDRefund AmountSecond Payment Reference IDSettled OnSoft DescriptorSoft Descriptor PhoneSourceSource NameStandalone (Only applicable if support for standalone payments is enabled)StatusSubmitted OnTransferred to AccountingTypeUnapplied AmountUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The account that made the payment. |
| Bill To Contact | The bill to contact of the Customer Account that made the payment. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Sold To Contact | The sold to contact of the Customer Account that made the payment. |
| Payment FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Payment Method | Details of the payment method, such as credit card or PayPal. |
| Payment Method Snapshot | A copy of the particular Payment Method used in a transaction. |
| Payment Option | Payment option rule data for ACH payment transactions through the Citi payment gateway integration. |
