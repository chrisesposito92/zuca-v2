---
title: "Zuora 360 version 5 release notes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-version-5-release-notes"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:36.387Z"
---

# Zuora 360 version 5 release notes

Explore the latest updates and enhancements in Zuora 360 version 5, including data sync improvements, new fields, and resolved issues for Salesforce CRM integration.

## Maintenance Release 5.23

The 5.23 release includes the following enhancement

## Package updates for Multi-Org support and subscription currency

This package includes minor bug fixes and the following object changes to better support Multi-Org assignments:

-   Introduced the OrderLineItem\_\_c object.

-   Introduced the Organization\_\_c object.

-   Added the Organization\_\_c field to all 360 objects.

-   Added the Currency\_\_c field to the Zuora\_\_Subscription\_\_c object.


Note:

There is no automatic historical data resync for tenants that perform large-scale migrations. Historical backfill can be achieved using the Manual Sync functionality

## Maintenance Release 5.22

The 5.22 release includes the following enhancement

## API version update and currency field fix

This package version updates all Salesforce API versions to 45, in alignment with Salesforce's recent announcement regarding ICU locale enforcement. For more information about Salesforce API versioning and locale changes.

In addition, this release includes a patch to resolve a bug with the Currency field on the Subscription object.

## Maintenance Release 5.20

The 5.15 release includes the following enhancement.

## New checkbox field added to the Subscription object

The Single Version (`Zuora__SingleVersion__c`) checkbox field has been added to the Subscription (`Zuora__Subscription__c`) object. This field indicates whether the subscription is a single version.

## New checkbox field added to the SubscriptionRatePlan object

The Reverted (`Zuora__Reverted__c`) checkbox field has been added to the Subscription Rate Plan (`Zuora__SubscriptionRatePlan__c`) object. This field identifies whether the Rate Plan has been reverted.

## Field extended in the PaymentMethod object

The IP Address (`Zuora__IPAddress__c`) field in the Payment Method (`Zuora__PaymentMethod__c`) object has been extended to support up to 39 characters, allowing compatibility with IPv6 addresses.

## Update - Zuora Data Sync for Salesforce CRM Migration Schedule for Zuora 360+ customers

Customers currently using Zuora 360+ sync will be upgraded to Zuora’s latest Salesforce sync.

The details of the activity are given below for your reference:

-   Migration Date: Between 23rd Jan and 3rd Feb 2023

-   Customers: NA Production, EU Sandbox, and EU Production environments

-   Downtime: Nil


We will post a completion notice after the migration is done.

If you'd like to know more about this update or have concerns/questions, please reach out to your Zuora customer success team or Zuora Global Support .

## Zuora Data Sync for Salesforce CRM Migration Schedule for Zuora 360+ customers

The details of the activity are given below for your reference:

-   Migration Date: Between 13th and 20th Jan 2023

-   Customers: EU Cloud Data Center and US Cloud Data center 1 sandbox environments

-   Downtime: Nil


We will post a completion notice after the migration is done.

Note that the new data sync will be rolled out in the coming weeks to customers with production environments in EU Cloud Data Center 1 and US Cloud Data Center 1.

If you'd like to know more about this update or have concerns/questions, please reach out to your Zuora customer success team or Zuora Global Support .

## Update Announcement - Zuora Data Sync for Salesforce CRM

Customers currently using Zuora 360 and Zuora 360+ sync will be upgraded in waves to Zuora's latest Salesforce sync by Q1 2023. This will ensure you are on the newest version of the Salesforce connector with the latest capabilities.

What is different?

The new Salesforce sync makes improvements to the following:

1.  Performance: Offering improved sync latency at a large scale, 5x faster sync speeds for high volumes of data.
2.  Resilience: Offering improved sync efficiency and reliability.
3.  Simplicity: Enabling faster time to troubleshoot and triage sync errors.
4.  Configurability: Allowing 360 sync customers the benefit of selecting specific objects for sync within the Zuora UI.

How does this impact you?

During the upgrade process, you won't experience any impact and are not required to take any action. There will be a migration of all synced objects in 360 and 360+ to the new version.

## Maintenance Release 5.15(Release Date: 2022-7-8)

The 5.15 release includes the following enhancement.

## Enhancements to Street Number field in PaymentMethod object

Previously, "Street Number" field in PaymentMethod object allowed only 15 characters.

In version 5.15, we have added support for 30 characters to the "Street Number" field in PaymentMethod object.

## Resolved issue: DML Error when syncing Accounts to SFDC

Previously, Salesforce had a limit of 150 DML in a single transaction. Thus, when you update the CRM ID of an account with more than 150 children objects (invoice plus payment plus refund), all children objects will relink to the new CRM account, and you might encounter a relink failure. This issue has been resolved.

## Maintenance Release 5.14(Release Date: 2022-5-5)

The 5.14 release includes the following enhancement.

## Enhancements to Payment Method and Billing Account object Credit Card Types

Previously, Payment Method and Billing Account object Credit Card Types could only be Visa, Mastercard, American Express, and Discover. Now, the below credit card types are supported in the Zuora for Salesforce 360 version 5.14:

-   AmericanExpress

-   Discover

-   MasterCard

-   Visa

-   JCB

-   Diners

-   CUP

-   Maestro

-   Electron

-   AppleVisa

-   AppleMasterCard

-   AppleAmericanExpress

-   AppleDiscover

-   AppleJCB

-   Elo

-   Hipercard

-   Naranja

-   Nativa

-   TarjetaShopping

-   Cencosud

-   Argencard

-   Cabal

-   Dankort

-   MercadoLibre

-   Mir

-   CarteBancaire


## Support for Bill to Contact and Payment Term at Subscription level

The Zuora 360+ Sync now supports the sync of Bill To Contact and Payment Term at the subscription level. Subscriptions with specific billing attributes can now be created at the subscription level, and invoices can be generated for groups of subscriptions with the same billing attributes.

The following attributes are added as new fields on the subscription and invoice objects in the Zuora data model.

-   Bill To Contact

-   Payment Term


## Support to add cascade delete constraint to SubscriptionChargeTierHistory object

Now, you can now add a cascade delete to SubscriptionChargeTierHistory object in SubscriptionProductChargeHistory\_\_c. If you delete SubscriptionProductChargeHistory\_\_c, it will also remove SubscriptionChargeTierHistory since a tier cannot exist without a charge.

## Support for syncing Prepaid Drawdown with ProductRatePlanCharge and RatePlanCharge object fields

Zuora 360 data connect now syncs new fields added to ProductRatePlanCharge and RatePlanCharge objects to support the Prepaid Drawdown feature.

The following fields have been newly added:

| API Field Name | DB Field Name | Type |
| --- | --- | --- |
| IsPrepaid | is_prepaid | bit(1) DEFAULT NULL |
| PrepaidOperationType | prepaid_operation_type | tinyint(4) DEFAULT NULL |
| PrepaidQuantity | prepaid_quantity | decimal(22,9) DEFAULT NULL |
| PrepaidTotalQuantity | prepaid_total_quantity | decimal(22,9) DEFAULT NULL |
| PrepaidUom | prepaid_uom_id | varchar(32) DEFAULT NULL |
| ValidityPeriodType | field_tinyint4_8 | tinyint(4) DEFAULT NULL |
| DrawdownRate | field_decimal_1 | decimal(22,9) DEFAULT '0.000000000' |
| DrawdownUom | field_char32_2 | varchar(32) DEFAULT NULL |
| CreditOption | field_tinyint4_9 | tinyint(4) DEFAULT NULL |

When upgrading to the latest version, you must manually update the access to these fields.

## Maintenance Release 5.13(Release Date: 2021-10-7)

The 5.13 release includes the following enhancement.

## Support for syncing Reversed field on Invoice

The Reversed field is available on the Invoice object if you have the Invoice settlement feature enabled, but this field was not synced by Zuora 360. Thus, we have enhanced Zuora 360 to support syncing this field. The Reversed field from Zuora is now synced to the Reverse Flag field in Salesforce.

See Sync field mapping of Account and Related objects for more information.

## Maintenance Release 5.12(Release Date: 2021-5-10)

The 5.12 release includes the following resolved issue.

## Resolved issue: Mandate ID character limit discrepancy between Zuora and Salesforce

Previously, the Mandate ID field on the Payment Method object in Zuora had a character limit of 36, whereas MandateID (`Zuora__MandateID__c`) in Salesforce had a character limit of 18. It resulted in errors when you tried to sync payment methods with MandateID greater than 18 characters. This issue has been resolved. The character limit for this field is now updated to 255 in both systems.

## Maintenance Release 5.11(Release Date: 2021-4-21)

The 5.11 release includes the following enhancements and resolved issues.

Zuora 360 now supports using Salesforce OAuth credentials for Zuora tenants hosted in the US Cloud Data Center.

For related information, see:

-   Set up sync credentials to connect to Salesforce

-   Zuora Data Centers


## Resolved issue: Failed to sync updates on default payment method on account

Previously, if you took the following steps in Zuora:

1.  Create a payment method for a billing account.
2.  Set the payment method as the default payment method.
3.  Set the default payment method on the billing account back to a non-default one.

After the sync, you could still find that the Default Payment Method checkbox is selected in your Salesforce organization.

In this release, we have enhanced the Zuora 360 and Zuora 360+ processes to trigger DefaultPaymentMethodUpdaterTrigger after the update of the BillingAccountDefaultPaymentMethodTrigger. This issue is now resolved.

## Resolved issue: Invoice PDF not rendered

Previously, invoice PDFs were not rendered for Zuora 360 package 5.8 and above versions. This issue has been resolved now.

## Maintenance Release 5.10(Release Date: 2021-3-19)

The 5.10 release includes the following enhancements and resolved issues.

## Support for Balance field on Invoice Item object through Zuora 360+

The Balance field is now available on the Invoice Item object in Salesforce (`Zuora__Invoice__Balance__Amount__c`) if you have enabled Zuora 360+. It allows you to view invoice item balance within Salesforce.

See New object types supported only when Zuora 360+ enabled for more information.

## Integration with Salesforce Bulk API v51.0

Zuora 360 is now integrated with the Salesforce Bulk API Version 51.0 for the following sync types:

-   Manual Sync

-   Turbo Sync

-   On-Demand Sync

-   Scheduled Sync


It is independent of the package release, no changes are needed.

Previously, Salesforce Bulk API version 27.0 was used.

## Resolved issue: Always sync price for Product Rate Plan Charge in USD

Previously, Zuora 360 always synced the price for the Product Rate Plan Charge object in USD instead of in the default currency of the tenant. This issue has been resolved. Zuora 360 now uses the default currency of the tenant to calculate charge prices.

## Maintenance Release 5.9 (Release Date: 2021-2-3)

The 5.9 release includes the following resolved issue.

## Resolved issue: DefaultPaymentMethodUpdaterTrigger class triggered on PaymentMethod creation

Previously, if you took the following steps:

1.  In your Salesforce account, navigate to a billing account that does not have a default payment method.
2.  Create a new payment method on this billing account.

You might find that the Default Payment Method checkbox of the new payment method was automatically selected. It was because that the `Zuora.DefaultPaymentMethodUpdaterTrigger` class was triggered on the creation of the PaymentMethod object. This issue has been resolved now.

## Maintenance Release 5.8(Release Date: 2021-1-19)

The 5.8 release includes the following enhancement.

## New text field added to SubscriptionProductChargeHistory object

The Product Rate Plan Charge Id (`Zuora__ProductRatePlanChargeId__c`) text field has been added to the Subscription Product & Charge History (`Zuora__SubscriptionProductChargeHistory__c`) object.

See New object types supported only when Zuora 360+ enabled for more information.

## Maintenance Release 5.7(Release Date: 2020-10-20)

The 5.7 release includes the following enhancement.

## Support for OAuth in Zuora Central Sandbox

Zuora 360 now supports OAuth in both the US and EU Zuora Central Sandbox environments.

The URLs used to access the Zuora Central Sandbox are:

-   US: https://test.zuora.com/apps/

-   EU: https://test.eu.zuora.com/apps/


## Maintenance Release 5.5(Release Date: 2020-5-5)

The 5.5 release includes the following enhancements and resolved issues.

## Resolved issue: Associated Accounts missing in synced Invoices/Payments/Refunds

Previously, when Invoices, Payments, or Refunds were synced through 360+ Sync to Salesforce, the associated Accounts might be missing due to the Billing Accounts' CRM ids being added later or being changed in Zuora. This issue has been resolved.

## Maintenance Release 5.4(Release Date: 2020-3-9)

The 5.4 release includes the following enhancements and resolved issues.

## Support for the sync of the Default Payment Method flag in Payment Method

Zuora 360+ Sync now supports the sync of the Default Payment Method flag in the Payment Method object.

## Resolved issue: Date/Time field values within a daylight saving time period shifted one hour backward

Previously, when you run ZOQL with ZApi, the Date/Time field values within a daylight saving time period shifted one hour backward in the returned records. This issue has been resolved.

## Maintenance Release 5.3(Release Date: 2019-9-4)

The 5.3 release includes the following enhancements and resolved issues.

## Support for VAT Id field of Billing Account

The VAT Id field has been added to Billing Account.

## Support for new fields of Product

The following fields have been newly added to Product:

-   Category (`Category__c`)

-   Zuora Created Date (`CreateDate__c`)

-   Effective Start Date (`Effective_Start_Date__c`)

-   Zuora Updated Date (`Updated_Date__c`)


Zuora 360+ Sync will support the sync of these fields soon.

## Support for ZContact object

The ZContact object has been added to Zuora for Salesforce 360 package. Zuora 360+ Sync will support the sync of ZContact objects in the future.

## Support for full-length BankTransferAccountName in PaymentMethod

Zuora 360+ Sync now supports the full length of BankTransferAccountName in PaymentMethod as on Zuora side.

## Length of Country field in PaymentMethod increased to 255

The length of Country(`Zuora__Country__c`) field in PaymentMethod has been increased from 2 to 255.

## Resolved issue: inconsistent number of decimal places for Price and Overage Price fields between Zuora and Salesforce

Previously, the number of decimal places for Price and Overage Price fields in Subscription and Product Charge objects is 2 on Salesforce side and 4 on Zuora side. To be consistent with Zuora side, Zuora 360+ Sync has now supported 4 decimal places for Price and Overage Price fields also on Salesforce side.

## Maintenance Release 5.2(Release Date: 2018-11-21)

The 5.2 release includes the following enhancements.

## Support Object Types for Subscription History

Note:

360+ Sync is an add-on to Zuora 360. If you want to have access to the feature, submit a request at Zuora Global Support .

Zuora 360+ Sync now supports the following object types for Subscription History:

-   Subscriptions History

-   Subscription Rate Plans History

-   Subscription Product & Charges History

-   Subscription Charge Tier History


See Data Connect Object and Field Mapping for more information.

Limitations are applicable to these object types. See Limitations in Data Connect for more information.

## New Global Class GlobalRestHelper in Order Builder

A new global class `GlobalRestHelper` is released in Zuora 360 5.2. This class provides methods to facilitate making REST calls to Zuora using the configuration in 360. You can use the `getServerUrl()` method to retrieve the endpoint URL configured in 360. The `mockRestHelper()` method allows the exposed REST methods to be mocked out for testing purposes. See GlobalRestHelper Class for more information.

## Major Release 5.0(Release Date: 2018-9-12)

The 5.0 release includes the following enhancement and .

## Support Object Types for Invoice Settlement

Note:

360+ Sync is an add-on to Zuora 360. If you want to have access to the feature, submit a request at Zuora Global Support .

Zuora 360+ now supports the following object types for Invoice Settlement:

-   Credit Memo

-   Credit Memo Item

-   Credit Memo Part

-   Debit Memo

-   Debit Memo Item

-   Payment Part

-   Refund Part


See Data Connect Object and Field Mapping for more information.

Limitations are applicable to these object types. See Limitations in Data Connect for more information.
