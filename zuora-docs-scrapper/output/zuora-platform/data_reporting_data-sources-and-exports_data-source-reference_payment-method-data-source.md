---
title: "Payment Method data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-method-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:46.166Z"
---

# Payment Method data source

Data source to export payment method information

## Overview

Use this data source to export payment method information.

## Best practice

If you want to query data by joining Payment Method and Stored Credential Profile, use Stored Credential Profile as the base object to achieve better query performance.

## Objects available in the data source

| Object | Description |
| --- | --- |
| Payment Method | An object that stores information about the payment method, such as a credit card, ACH or PayPal. It contains the following fields:ACH ABA CodeACH Account NameACH Account Number MaskACH Account TypeACH Address1ACH Address2ACH Bank NameACH CityACH CountryACH Postal CodeACH StateAccount IDActiveBank Branch CodeBank Check DigitBank CityBank CodeBank Identification NumberBank NameBank Postal CodeBank Street NameBank Street NumberBank Transfer Account NameBank Transfer Account Number MaskBank Transfer Account TypeBank Transfer TypeBusiness Identification CodeCityCompany NameCountryCreated By IDCreated DateCredit Card Address 1Credit Card Address 2Credit Card CityCredit Card CountryCredit Card Expiration MonthCredit Card Expiration YearCredit Card Holder NameCredit Card Mask NumberCredit Card Postal CodeCredit Card StateCredit Card TypeDevice Session IDEmailExisting MandateFirst NameIBANIDIP AddressIdentity NumberIs a companyLast Failed Sale Transaction DateLast NameLast Transaction DateLast Transaction StatusMandate Creation DateMandate IDMandate ReasonMandate ReceivedMandate StatusMandate Update DateMax Consecutive Payment FailuresMethod Reference IdMethod Specific DataNameNumber of Consecutive FailuresPayment Method StatusPayment Retry WindowPaypal BAIDPaypal EmailPaypal Preapproval KeyPaypal TypePhonePostal CodeSecond Token IDStateStreet NameStreet NumberSub-TypeToken IDTotal Number Of Error PaymentsTotal Number Of Processed PaymentsTypeUpdated By IDUpdated DateUse Default Retry RuleUser Reference Id |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Payment Method Tokens | An object that stores information about tokens associated with payment methods. It contains the following fields:Created By IdCreated DateGateway TypeGateway VersionIDToken TypeToken1Token2Token3Updated By IdUpdated DateValidated |
| Stored Credential Profile | Stored credential profiles created for payment methods. See Stored Credential Profile Data Source for more information. |
