---
title: "Payment Method Transaction Log data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-method-transaction-log-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:48.339Z"
---

# Payment Method Transaction Log data source

Data source to export payment method transaction log data

## Overview

Use this data source to export payment method transaction log data.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Payment Method Transaction Log as the data source.

## Data source detail

The following sections provide data source details.

## Base object description

| Zuora Object | Description |
| --- | --- |
| Payment Method Transaction Log | This is the base Zuora object for the Payment Method Transaction Log data source export and includes the following fields:GatewayIf Zuora Fraud Protection is enabled, the value Zuora_Fraud_Protection_MSDFP is also contained in this field, in addition to the name of the gateway integration. Results for fraud protection and gateway services are in separate rows for clarity.If the support Plaid account validation solution is enabled, the value Plaid is also contained in this field, in addition to the name of the gateway integration. For clarity, the results for Plaid account validation and gateway services are in separate rows.Gateway Response CodeIf Zuora Fraud Protection is enabled, the data screening result from the fraud protection service is also contained in this field, in addition to the response code from the gateway. Results for fraud protection and gateway services are in separate rows for clarity.Gateway Response Code Description If Zuora Fraud Protection is enabled, the data screening message from the fraud protection service is also contained in this field, in addition to the response message from the gateway. Results for fraud protection and gateway services are in separate rows for clarity.Gateway Transaction IDGateway Transaction TypeFor ThreeDS2EnrollCheck transactions on BlueSnap, see Additional information about 3DS2 enroll check.IP AddressThis is an integer field. Convert the value to a string if required.Request StringResponse StringTransaction DateTransaction Log IDDevice IdThe fingerprinting device ID from the fraud protection serviceHosted Page IdThe ID of the hosted payment method pageService TypeIf Zuora Fraud Protection is enabled, the value is FraudService. Otherwise, the value is empty.If the support Plaid account validation solution is enabled, the value is ValidationService.Created DateIf Zuora Fraud Protection is enabled, the data screening date is also contained in this field, in addition to the transaction creation date. Results for fraud protection and gateway services are in separate rows for clarity. |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The customer account information. Note this is the Subscription Owner account.This object includes the following fields:Account NumberAdditional Email AddressesAllow Invoice EditingAuto PayBill Cycle DayBill Cycle Day Setting OptionBilling BatchCMRR​CRM Account IDCSRCommunicationProfile IDCreated By IDCreated DateCredit BalanceCurrencyIDInvoice Delivery Preferences EmailInvoice Delivery Preferences PrintInvoice Template IDLast Invoice DateNameNotesPO NumberParent IDPayment Gateway NamePayment TermSales RepStatusTax Exempt Certificate IDTax Exempt Certificate TypeTax Exempt DescriptionTax Exempt Effective DateTax Exempt Expiration DateTax Exempt Issuing JurisdictionTax Exempt StatusTotal Invoice BalanceUpdated By IDUpdated Date |
| Bill To | The contact associated with the account to whom your product or service is billed.This object includes the following fields:Account IDAddress 1Address 2CityCountryCountyCreated By IDCreated DateDescriptionFaxFirst NameHome PhoneIDLast NameMobile PhoneNick NameOther PhoneOther Phone TypePersonal EmailPostal CodeState/ProvinceTax RegionUpdated By IDUpdated DateWork EmailWork Phone |
| Default Payment Method | The default payment method used to make payments.This object includes the following fields:ACH ABA CodeACH Account NameACH Account Number MaskACH Account TypeACH Bank NameAccount IDActiveBank Branch CodeBank Check DigitBank CityBank CodeBank Identification NumberBank NameBank Postal CodeBank Street NameBank Street NumberBank Transfer Account NameBank Transfer Account Number MaskBank Transfer Account TypeBank Transfer TypeBusiness Identification CodeCityCountryCreated By IDCreated DateCredit Card Address 1Credit Card Address 2Credit Card CityCredit Card CountryCredit Card Expiration MonthCredit Card Expiration YearCredit Card Holder NameCredit Card Mask NumberCredit Card Postal CodeCredit Card StateCredit Card TypeDevice Session IDEmailExisting MandateFirst NameIBANIDIP AddressLast Failed Sale Transaction DateLast NameLast Transaction DateLast Transaction StatusMandate Creation DateMandate IDMandate ReceivedMandate Update DateMax Consecutive Payment FailuresNameNumber of Consecutive FailuresPayment Method StatusPayment Retry WindowPaypal BAIDPaypal EmailPaypal Preapproval KeyPaypal TypePhonePostal CodeSecond Token IDStateStreet NameStreet NumberToken IDTotal Number Of Error PaymentsTotal Number Of Processed PaymentsTypeUpdated By IDUpdated DateUse Default Retry Rule |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Parent Account | Refers to the parent account associated with the customer account, if applicable.This object includes the following fields:Account BalanceAccount NumberAdditional Email AddressesAllow Invoice EditingAuto PayBill Cycle DayBill Cycle Day Setting OptionBilling BatchCMRRCRM Account IDCSRCommunicationProfile IDCreated By IDCreated DateCredit BalanceCurrencyIDInvoice Delivery Preferences EmailInvoice Delivery Preferences PrintInvoice Template IDLast Invoice DateNameNotesPO NumberParent IDPayment Gateway NamePayment TermSales RepStatusTax Exempt Certificate IDTax Exempt Certificate TypeTax Exempt DescriptionTax Exempt Effective DateTax Exempt Expiration DateTax Exempt Issuing JurisdictionTax Exempt StatusTotal Invoice BalanceUpdated By IDUpdated Date |
| Payment Method | Stores information about payment method, such as a credit card, ACH or PayPal.This object includes the following fields:ACH ABA CodeACH Account NameACH Account Number MaskACH Account TypeACH Bank NameAccount IDActiveBank Branch CodeBank Check DigitBank CityBank CodeBank Identification NumberBank NameBank Postal CodeBank Street NameBank Street NumberBank Transfer Account NameBank Transfer Account Number MaskBank Transfer Account TypeBank Transfer TypeBusiness Identification CodeCityCountryCreated By IDCreated DateCredit Card Address 1Credit Card Address 2Credit Card CityCredit Card CountryCredit Card Expiration MonthCredit Card Expiration YearCredit Card Holder NameCredit Card Mask NumberCredit Card Postal CodeCredit Card StateCredit Card TypeDevice Session IDEmailExisting MandateFirst NameIBANIDIP AddressLast Failed Sale Transaction DateLast NameLast Transaction DateLast Transaction StatusMandate Creation DateMandate IDMandate ReceivedMandate Update DateMax Consecutive Payment FailuresNameNumber of Consecutive FailuresPayment Method StatusPayment Retry WindowPaypal BAIDPaypal EmailPaypal Preapproval KeyPaypal TypePhonePostal CodeSecond Token IDStateStreet NameStreet NumberToken IDTotal Number Of Error PaymentsTotal Number Of Processed PaymentsTypeUpdated By IDUpdated DateUse Default Retry Rule |
| Sold To | The contact associated with the account to whom your product or service is sold.This object includes the following fields:Account IDAddress 1Address 2City<CountryCountyCreated By IDCreated DateDescriptionFaxFirst NameHome PhoneIDLast NameMobile PhoneNick NameOther PhoneOther Phone TypePersonal EmailPostal CodeState/ProvinceTax RegionUpdated By IDUpdated DateWork EmailWork Phone |
