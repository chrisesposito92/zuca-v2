---
title: "HPM reCAPTCHA Validation Result data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/hpm-recaptcha-validation-result-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:00.918Z"
---

# HPM reCAPTCHA Validation Result data source

Data source to export reCAPTCHA validation result data for Payment Pages 2.0

Use this data source to export reCAPTCHA validation result data for Payment Pages 2.0, such as the ID of the hosted page, the ID of the payment method, IP address, validation decision, and validation response. Each row in the export represents one validation result record.

## Accessing the data source

​Navigation: Reporting > Data Sources and select HPM reCAPTCHA Validation Result as the data source.

## Objects available in the data source

The following sections provide the lists of objects available in the data source.

## Base object

| Zuora object | Description |
| --- | --- |
| HPM reCAPTCHA Validation Result | An object that stores information about the HPM reCAPTCHA v3 validation result. It contains the following fields:IDAccount IDTrace IDIP AddressHosted Page IDPayment Method IDPayment Method Transaction Log IDScoreScore ThresholdValidate DecisionRecaptcha VersionValidate ResponseCreated Date |

## Related object

| Zuora object | Description |
| --- | --- |
| Account | The account that made the payment. See Account Data Source for more information. |
| Bill To | The Bill-To Contact of the account. |
| Default Payment Method | The default payment method of the account. See Payment Method Data Source for more information. |
| Entity | The entity that the data relates to.Part of the Multi-entity feature.Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Parent Account | The parent account associated with the customer account, if applicable. |
| Payment Method | The payment method used to make the payments. See Payment Method Data Source for more information. |
| Payment Method Transaction Log | The transaction log of the payment method used to make the payments. See Payment Method Transaction Log Data Source for more information. |
| Sold To | The Sold-To Contact of the account. |
