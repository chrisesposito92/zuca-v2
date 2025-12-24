---
title: "Refund Transaction Log data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/refund-transaction-log-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:59.155Z"
---

# Refund Transaction Log data source

Data source to export a log of all transactions from Zuora to the gateway for the Refund

## Overview

Use this data source to export a log of all transactions from Zuora to the gateway for the [Refund](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund). This data source includes the request string, response string as well as the related [Refund](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund) and [Account](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account).

## Accessing the data source

Navigation: ​ Reporting > Data Sources and select Refund Transaction Log as the data source.

## Data source detail

This diagram illustrates the hierarchical association between the base Refund Transaction Log object and related (joined) Zuora objects.

![graph_data_refund_transaction.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/298bcf1f-3bc3-4e9a-a926-69e0db76627d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5OGJjZjFmLTNiYzMtNGU5YS1hOTI2LTY5ZTBkYjc2NjI3ZCIsImV4cCI6MTc2NjY4ODQ3NywianRpIjoiYmM5YjBiZDYwOWY0NDdjM2IzZmJhODk0NzNlYTk5ZWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.kB7HmiFUdRWLXgbW-k8XjAfvjwOfiCY1mQ1xHDnCZH4)

## Base object description

| Zuora Object | Description |
| --- | --- |
| Payment Transaction Log | This is the base Zuora object for the Refund Transaction Log data source export and includes the following fields:Authorization: Payment method creation and update.Capture: Used for delayed capture.Sale: Payment creation.Void: Void sale (not void authorization).Credit: Not used.Inquiry: Used for the inquiry call in the payment detail page.RefundAuthorize: Not used.Refund: Refund.VoidAuth: Voids payment method authorization for a credit card.Validate: No longer used. Was used for Spectrum when the authorization amount was 0.Deposit: No longer used. Was used as a batch operation to capture by Spectrum.NonReferenceRefund: Refund credit balance. |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Payment Method Snapshot | A copy of the particular Payment Method used in a transaction.This object includes the following fields:ACH ABA CodeACH Account NameACH Account Number MaskACH Account TypeACH Bank NameAccount IDBank Branch CodeBank Check DigitBank CityBank CodeBank Identification NumberBank NameBank Postal CodeBank Street NameBank Street NumberBank Transfer Account NameBank Transfer Account Number MaskBank Transfer Account TypeBank Transfer TypeBusiness Identification CodeCityCountryCredit Card Address 1Credit Card Address 2Credit Card CityCredit Card CountryCredit Card Expiration MonthCredit Card Expiration YearCredit Card Holder NameCredit Card Mask NumberCredit Card Postal CodeCredit Card StateCredit Card TypeDevice Session IDEmailExisting MandateFirst NameIBANIDIP AddressLast Failed Sale Transaction DateLast NameLast Transaction DateLast Transaction StatusMandate Creation DateMandate IDMandate ReceivedMandate Update DateMax Consecutive Payment FailuresNameNumber of Consecutive FailuresPayment Method IDPayment Method StatusPayment Retry WindowPaypal BAIDPaypal EmailPaypal Preapproval KeyPaypal TypePhonePostal CodeSecond Token IDStateStreet NameStreet NumberToken IDTotal Number Of Error PaymentsTotal Number Of Processed PaymentsTypeUse Default Retry Rule |
| Refund | Represents money that is returned to a customer, or a reversed transaction.This object includes the following fields:Accounting CodeAmountCancelled OnCommentCreated By IDCreated DateGatewayGateway ResponseGateway Response CodeGateway StateIDMarked For Submission OnMethod TypePayment Method IDReason CodeReference IDRefund DateRefund NumberRefund Transaction TimeSecond Refund Reference IDSettled OnSoft DescriptorSoft Descriptor PhoneSource TypeStatusSubmitted OnTransferred to AccountingTypeUpdated By IDUpdated Date |
