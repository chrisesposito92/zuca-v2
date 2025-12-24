---
title: "Mass Order Entry fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/subscriptions-creation-through-mass-order-entry/mass-order-entry-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:04.314Z"
---

# Mass Order Entry fields

The Mass Order Entry Fields allow you to input and manage large volumes of subscription data efficiently, with specific guidelines for fields such as Subscription Code, Account Number, and Rate Plan ID. Ensure compliance with record limits and field requirements to avoid errors.

The following table describes the information that you can enter in the Mass Order Entry template.

If you have more than 200,000 records, the following error is returned:

<timestamp> The total number of records to be exported exceeds the maximum limit of 200000, please contact customer support to complete the export request.

| Column | Required? | Description |
| --- | --- | --- |
| (custom fields) | No | If you have create custom fields for Rate Plan Charge, download the template after creating them, and they will automatically appear in the template. |
| Subscription Code | Yes | Internal Zuora IDEnter New for the first line of a subscription.If there is more than one charge in the subscription, enter Prev for any subsequent lines for that subscription. |
| Subscription Version | No | Internal Zuora IDLeave this empty |
| Account Number | Yes | Customer Account NumberMust be a valid customer account. Will be the account numbers provided from the customer load if they were previously provided.Example: A00001201 |
| Order Type | No | String defining the subscription type. For creating a subscription, the only possible value isCreate Subscription |
| Order Name (amendments only) | No | Leave this empty.Name of the Amendment |
| Change Description (amendments only) | No | Leave this empty.Enter a description for your change. |
| Initial Term | Conditional | Initial Term of the Subscription. Must be 1 or greater. Use only when Subscription Term Type is TERMED - leave empty when Subscription Term Type is EVERGREEN. |
| Renewal Term | Conditional | Renewal Term of the Subscription. Must be 1 or greater. Use only when Subscription Term Type is TERMED - leave empty when Subscription Term Type is EVERGREEN. |
| Term Commitment | No | Leave this empty |
| AutoRenew | Conditional | Should you set the subscription to autorenew?Optional: TRUE or empty.Use when Subscription Term Type is TERMED. Leave empty when Subscription Term Type is EVERGREEN. |
| Term Start Date | Optional | Start of of the new subscription term, as MM/DD/YYYY. Basis of renewal date. If left empty, it will default to the Contract Effective Date once the subscription has been imported to Zuora. |
| Save as Draft | No | Optional. TRUE or empty |
| Contract Effective Date | Yes | Effective Date of the contract, as MM/DD/YYYY |
| Service Activation Date | Yes | Activation Date of the contract, as MM/DD/YYYY |
| Customer Acceptance Date | Yes | Date upon which the customer will accept the contract, as MM/DD/YYYY |
| Cancel Subscription Date | No | Leave this empty |
| Product SKU | No | Product SKUAs entered in the product catalog. Using the extract of the product catalog, use an appropriate value from the SKU field on the Product tab.Example: SKU-00000107 |
| Product Name | No | Product NameAs entered in the product catalog. Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use a value from the Product: Name field. It should correspond to the SKU.Example: Ultimate Screen Capture |
| Rate Plan ID | Yes | Internal Zuora rate plan IDEnter the rate plan ID, or leave empty. If left empty, this will be updated by Zuora based on the rate plan name provided in the next column.Using the data souces extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan ID field. Example: 4028e6963716432e013733b3aaf36ea9 |
| Rate Plan Name | Yes | Rate plan nameAs entered in product catalog.Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan: Name field. |
| Rate Plan Component ID | Yes | Internal Zuora rate plan IDEnter the rate plan charge ID, or leave empty. If left empty, this will be updated by Zuora based on the charge name provided in the next column.Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan Charge ID. Example: 4028e6963716432e013733b5b29273f3 |
| Charge Name | Yes | Charge NameAs entered in the product catalog.Enter the charge nameUsing the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan Charge: Name. |
| Charge Description | No | Charge DescriptionLeave empty or enter the charge description as it appears in the product catalog. |
| Price | No | Price being chargedEnter a price in the format #####.## (for example, 12345.67) |
| Quantity | No | Units being chargedNumber onlyEnter if applicable to the charge type you are using. Some charges do not require Quantity. |
| # Periods To Prepay | No | Leave this empty |
| Overage Included Units | No | Leave this empty.Enter if applicable to the charge type you are using. |
| Overage Price | No | Leave this emptyEnter if applicable to the charge type you are using. |
| Overage (Smoothing) # Periods | No | Leave this emptyEnter if applicable to the charge type you are using. |
| Accounting Code | No | Accounting codeLeave empty. The accounting code will be populated by Zuora and is the accounting code inherited from the product rate plan charge. |
| Revenue Recognition Code | No | Enter the Revenue Recognition Code as configured on the charge line. |
| Revenue Recognition Trigger Date | No | Enter the Revenue Recognition Trigger Date as configured on the charge line. Possible values are as follows:Contract Effective DateService Activation DateCustomer Acceptance Date |
| Subscription Term Type | Yes | Specify TERMED or EVERGREEN |
| Overage Credit Back Option | No | Leave empty. The accounting code will be populated by Zuora and is the accounting code inherited from the product rate plan charge. |
| Overage Credit Back Rate | No | Leave empty. The accounting code will be populated by Zuora and is the accounting code inherited from the product rate plan charge. |
| Invoice Separate | No | Leave empty. This column may not be present in the template you download, depending on your tenant setting for the option "Enable Subscriptions to be Invoiced Separately". |
| Price Increase Percentage | No | Leave empty. Optional. |
| Use Discount Specific Accounting Code | No | Leave empty. Optional. |
| Invoice Account Number | No | Leave empty. Optional. |
| Destination Account Number | No | Leave empty. Optional. |
| Destination Invoice Account Number | No | Leave empty. Optional. |
| Usage Record Rating Option | No | Leave empty. Optional. |
| Billing Period | Optional | Billing period for the charge. |
| Specific Billing Period | Conditional | Customizes the number of months or weeks for the charges billing period. This field is required if you set the value of the Billing Period field to Specific Months or Specific Weeks .The Specific Weeks in the Billing Period field is in Limited Availability. |
| Billing Period Alignment | Optional | Aligns charges within the same subscription if multiple charges begin on different dates. |
| Billing Timing | No | Billing timing for the subscription. Can be In Advance or In Arrears .Note:This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at Zuora Global Support . |
