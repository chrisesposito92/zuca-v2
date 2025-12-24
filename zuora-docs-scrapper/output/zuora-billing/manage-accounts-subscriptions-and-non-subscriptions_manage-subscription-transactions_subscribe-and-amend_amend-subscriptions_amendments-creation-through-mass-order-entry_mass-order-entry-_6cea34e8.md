---
title: "Mass Order Entry fields in amendment"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/amendments-creation-through-mass-order-entry/mass-order-entry-fields-in-amendment"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:27.913Z"
---

# Mass Order Entry fields in amendment

This document provides details on the fields available in the Mass Order Entry template, including required fields and conditional entries based on tenant features and custom fields.

The following table describes the information that you can enter in the Mass Order Entry template:

Note:

The template you download may not include all the fields listed below, depending on which features your tenant is using. Also, if your tenant uses custom fields for Rate Plan Charges, the custom fields are included in the template.

| Column | Required? | Description |
| --- | --- | --- |
| (custom fields) | No | If you have created custom fields for Rate Plan Charge, download the template after creating them, and they will automatically appear in the template. |
| Subscription Code | Yes | Subscription Number (unique value). If there is more than one charge in the subscription, enter Prev for any subsequent lines for that subscription. Example: aA-S00000127. |
| Subscription Version | No | Leave this empty. |
| Account Number | No | Leave this empty. |
| Order Type | Yes | String defining the amendment type. Enter this information in the first line of the amendment only. If there is more than one charge in the amendment, please leave any subsequent lines empty for that amendment. Possible values are:New Product : Add a product type of amendment.Update a Product : Update a product of type amendment.Remove a Product : Remove an existing product type of amendment.Renewal : Renew a subscription in advance of the next renewal term start date.Terms and Conditions: Change the terms of a subscription.OwnerTransfer: Transfer the subscription to a different owner. Requires a valid account number for the new owner's account. Note that there is no space in "OwnerTransfer".Cancellation: Cancel a subscription. For this type of amendment, you must specify a Cancel Subscription Date. |
| Order Name (amendments only) | Yes | Name of the amendment |
| Initial Term | Conditional | Initial Term of the new Subscription. Only required for Terms and Conditions Amendment. Set to 1 or greater. If term type is EVERGREEN, must be empty. |
| Renewal Term | Conditional | Renewal Term of new Subscription. Only required for Terms and Conditions Amendment. Set to 1 or greater. If term type is EVERGREEN, must be empty. |
| Term Commitment | No | Leave this empty. |
| AutoRenew | Conditional | Specifies whether to automatically renew this subscription at the end of the term. Only required for Terms and Conditions Amendment. Possible values are true , false .TRUE if you want your subscription autorenew after the initial term expires. This is only applicable to TERMED subscriptions. For EVERGREEN subscriptions, leave empty. |
| Term Start Date | Conditional | Start of of the new subscription term, also used as the basis of renewal date. Only required for Terms and Conditions Amendment - otherwise leave empty.Enter a date in the format MM/DD/YYYY.If left empty, it will default to the Contract Effective Date once the subscription has been imported to Zuora. |
| Save as Draft | No | Leave this empty. |
| Contract Effective Date | Yes | Effective Date of the amendment, as MM/DD/YYYY. |
| Service Activation Date | Yes | Activation Date of the amendment, as MM/DD/YYYY. |
| Customer Acceptance Date | Yes | Date upon which the customer will accept the amendment, as MM/DD/YYYY. |
| Cancel Subscription Date | Conditional | Required if Order Type is Cancellation . Otherwise leave empty.Date upon which the Subscription will be canceled.Enter a date in the format MM/DD/YYYY.This corresponds to the Cancellation Effective Date in the Zuora UI. |
| Product SKU | Yes | Product SKUAs entered in the product catalog. Using the extract of the product catalog, use an appropriate value from the SKU field on the Product tab.Example: SKU-00000107 |
| Product Name | Yes | Product NameAs entered in the product catalog. Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use a value from the Product: Name field. It should correspond to the SKU.Example: Ultimate Screen Capture |
| Rate Plan ID | Yes | Internal Zuora rate plan IDEnter the rate plan ID, or leave empty. If left blank, this will be updated by Zuora based on the rate plan name provided in the next column.Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan ID field.Example: 4028e6963716432e013733b3aaf36ea9 |
| Rate Plan Name | Yes | Rate plan nameAs entered in product catalog.Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan Name field. |
| Rate Plan Component ID | Yes | Internal Zuora Rate Plan IDEnter the rate plan charge ID, or leave empty. If left blank, this will be updated by Zuora based on the charge name provided in the next column.Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan Charge ID.Example: 4028e6963716432e013733b5b29273f3 |
| Charge Name | Yes | Product Rate Plan Charge NameAs entered in the product catalog.Enter the charge name.Using the data sources extract of the product rate plan charge (which includes data on the product, rate plan, and rate plan charge), use the value from the Product Rate Plan Charge: Name. |
| Charge Description | No | Charge description. Leave empty or enter the charge description as it appears in the product catalog. |
| Price | No | Price being charged. Numeric with two decimal places. Example: 12345.67 . |
| Quantity | No | Units being chargedNumber onlyEnter if applicable to the charge type you are using. Some charges do not require Quantity. |
| # Periods To Prepay | No | Leave this empty. |
| Overage Included Units | No | Leave this empty.Enter if applicable to the charge type you are using. |
| Overage Price | No | Leave this empty. |
| Overage (Smoothing) # Periods | No | Leave this empty. |
| Accounting Code | No | Accounting code associated with your acting system. |
| Revenue Recognition Code | No | Enter the Revenue Recognition Code as configured on the charge line. |
| Revenue Recognition Trigger Date | No | Enter the Revenue Recognition Trigger Date as configured on the charge line.Possible values are as follows:Contract Effective DateService Activation DateCustomer Acceptance Date |
| Subscription Term Type | Yes | Specify TERMED or EVERGREEN |
| Overage Credit Back Option | No | Leave this empty. |
| Overage Credit Back Rate | No | Leave this empty. |
| Invoice Separate | No | Leave this empty. Also, this column may not be present in the template you download, depending on your tenant setting for the option "Enable Subscriptions to be Invoiced Separately". You cannot modify the "Invoice Separate" field through the Mass Order Entry feature. To modify it, you can use the Update a subscription operation. |
| Price Change Option | No | Leave this empty. |
| Price Increase Percentage | No | Leave this empty. |
| Use Discount Specific Accounting Code | No | Leave this empty. |
| Invoice Account Number | No | Leave this empty. |
| Destination Account Number | No | Leave this empty. |
| Destination Invoice Account Number | No | Leave this empty. |
| Usage Record Rating Option | No | Leave this empty. |
