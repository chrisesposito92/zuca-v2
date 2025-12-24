---
title: "Filtering"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-copilot-for-analytics/work-with-prompts-in-zuora-copilot-for-analytics/filtering"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:44.610Z"
---

# Filtering

This document provides a list of attributes that support filtering, including details on field names, types, and descriptions.

The following table lists the attributes for which filtering is supported:

| Field name | Type | Description |
| --- | --- | --- |
| Invoice Owner Account attributes |  |  |
| InvoiceOwnerAccount.autopay | Boolean | Indicates whether autopay is enabled for the invoice owner account. |
| InvoiceOwnerAccount.accountnumber | String | Represents the unique account number of the invoice owner account. |
| InvoiceOwnerAccount.batch | String Array | Contains an array of batch values, each following the pattern 'Batch' + number (e.g., 'Batch1', 'Batch2') |
| InvoiceOwnerAccount.bcdsettingoption | String | Specifies the billing cycle day setting.Permissible values are 'AutoSet' or 'ManualSet'. |
| InvoiceOwnerAccount.balance | Decimal | Represents the current balance of the invoice owner account. |
| InvoiceOwnerAccount.billcycleday | Integer | Specifies the billing cycle day for the account. |
| InvoiceOwnerAccount.createddate | Timestamp | Timestamp of the account creation can be cast as a timestamp. |
| InvoiceOwnerAccount.currency | String | Denotes the currency using uppercase ISO currency codes (e.g., 'USD'). |
| InvoiceOwnerAccount.paymentgateway | String | Identifies the payment gateway utilized by the account. |
| InvoiceOwnerAccount.salesrepname | String | Names the sales representative linked to the account. |
| InvoiceOwnerAccount.paymentterm | String | Defines payment terms.Valid options are ['Due Upon Receipt', 'Net 90', 'Net 30', 'Net 45', 'Net 60']. |
| Subscription Owner Sold-to Contact attributes |  |  |
| SubscriptionOwnerSoldToContact.city | String | Specifies the city related to the subscription owner's sold-to contact. |
| SubscriptionOwnerSoldToContact.country | String | Indicates the country using ISO alpha-2 or alpha-3 codes (e.g., 'US'). |
| SubscriptionOwnerSoldToContact.county | String | Names the county associated with the sold-to contact. |
| SubscriptionOwnerSoldToContact.state | String | Lists the state related to the sold-to contact. |
| SubscriptionOwnerSoldToContact.postalcode | String | Provides the postal code of the sold-to contact. |
| Rate Plan and Product Rate Plan attributes |  |  |
| RatePlan.createddate | Timestamp | Timestamp of rate plan creation, can be cast as a timestamp. |
| RatePlan.name | String | Designates the name of the rate plan. Case-insensitive. |
| ProductRatePlan.name | String | Names associated with product rate plan. Case-insensitive. |
| Product Rate Plan Charge and other attributes |  |  |
| ProductRatePlanCharge.chargemodel | String | Defines the charge model, accepts specified values in lowercase. |
| ProductRatePlanCharge.chargetype | String | Categorizes the charge type, valid values are ['usage', 'onetime', 'recurring'] in lowercase. |
| ProductRatePlanCharge.createddate | Date | Indicates creation date. Can be cast as a date. |
| ProductRatePlanCharge.discountlevel | String Array | Contains an array of associated discount levels, in lowercase. |
| ProductRatePlanCharge.name | String | Designates the name of the product rate plan charge. Case-insensitive. |
| Product.sku | String | Specifies the SKU. Case-insensitive. |
| RatePlanCharge.chargemodel | String | Defines the charge model. Case-insensitive. |
| RatePlanCharge.name | String | Names the rate plan charge. Case-insensitive. |
| Subscription.status | String | Shows subscription status.Valid values include ['draft', 'pending activation', 'pending acceptance', 'active', 'canceled', 'expired', 'suspended'], in lowercase. |
