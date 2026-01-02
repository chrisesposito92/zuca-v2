---
title: "v1 API changelog"
url: "https://developer.zuora.com/docs/get-started/changelogs/v1-api-changelog/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:30.262Z"
---

#

v1 API changelog

This page summarizes the changes that are made to the API Reference for Billing, Payments, and Central Platform.

For release notes for all Zuora products, see [Latest release](https://docs.zuora.com/en/release-notes/latest-release).

##

December 23, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Write off an invoice" operation, moved the enhanced write-off permission note from the `items` > `taxationItems` field to the `items` field, as this information applies to all nested fields.
-   In the request body of the "Create an account" operation, updated the description of the `invoiceTemplateId` field for better clarity.

##

December 17, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.1.1](https://docs.zuora.com/en/release-notes/latest-release).

-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Made the following updates:
    -   Added the "List schedules for a commitment" operation.
    -   In the response body of the "List commitments for an account" operation, made the following updates to the `commitments` object:
    -   Added the following fields:
        -   `periodAlignmentOption`
        -   `specificPeriodAlignmentDate`
    -   Renamed the `amount` field to `totalAmount` .
    -   In the response body of the "Retrieve a commitment" operation, made the following updates:
    -   Added the following fields:
        -   `periodAlignmentOption`
        -   `specificPeriodAlignmentDate`
    -   Renamed the `amount` field to `totalAmount` .
    -   In the response body of the "List periods for a commitment" operation, added the `periods` > `isProrated` field.
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Update an order

        Made the following updates to the Commitments object:

        -   Added the following fields:
            -   `periodAlignmentOption`
            -   `specificPeriodAlignmentDate`
            -   `schedules`
    -   Removed the `periods` field.
    -   In the response body of each of the following operations:

        -   Create an order
        -   Activate an order

        Made the following updates to the Commitments object:

        -   Added the `schedules` field.
        -   Removed the `periods` field.
        -   Renamed the `amount` field to `totalAmount` .
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   Retrieve an order

        Made the following updates to the Commitments object:

        -   Added the following fields:
            -   `periodAlignmentOption`
            -   `specificPeriodAlignmentDate`
            -   `schedules`
        -   Removed the `periods` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added examples and additional description text for the query parameters in each of the following operations:
    -   Retrieve the audit trail entries for a meter
    -   Retrieve the list of export jobs for a meter
    -   Create a job to export audit trail data for a meter
-   For the "List periods for a commitment" operation, corrected the  `commitmentKey`  parameter from a path parameter to a query parameter, and updated the endpoint from  `/v1/commitments/{commitment-key}/periods`  to  `/v1/commitments/periods` .

The following update applies to the Older API Reference:

-   In the request body of the "Amend" operation, removed the unsupported `requests` > `Amendments` > `RatePlanData` > `RatePlan` > `CustomFields` field.
-   In the response body of the "List all invoices for an account" operation, updated the description of the `invoices` > `invoiceTargetDate` field for better clarity.
-   In the response body of each of the "Retrieve an amendment" and "Retrieve the last amendment of a subscription" operations, corrected the enum values of the `Status` field.

##

December 12, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the description of the "Post invoices" operation, added a note to clarify that bulk invoice posting is synchronous and processes invoices sequentially.
-   In the request body of each of the following operations, added the enum values to all applicable fields for better clarity:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Update a product rate plan charge with Dynamic Pricing
    -   Query a product rate plan charge with Dynamic Pricing
    -   Create a product with plans and charges
    -   Update a product
    -   Create a product rate plan
    -   Update a product rate plan
    -   Query product rate plan details
    -   Query product rate plans
    -   Query legacy products from the Product Catalog
    -   Update a product rate plan charge tier
    -   Query purchase options by PRP ID
-   In the request body of the "Create a product rate plan charge with Dynamic Pricing" operation, added the following missing fields:
    -   `charge` > `bill_cycle` > `day_of_month`
    -   `charge` > `bill_cycle` > `day_of_week`
    -   `charge` > `end_date_condition`
    -   `charge` > `up_to_periods_type`
    -   `charge` > `up_to_periods`
    -   `charge` > `specific_list_price_base`
-   In the request body of the "Create a product with plans and charges" operation, added the following missing nested fields under `plans` > `charges` :
    -   `max_quantity`
    -   `min_quantity`
    -   `bill_cycle` > `day_of_week`
    -   `bill_cycle` > `specific_period`
    -   `overage_options`
    -   `price_increase_percentage`
    -   `price_change_option`
    -   `use_tenant_default_for_price_change`
    -   `discount_options`
-   In the request body of the "Query a product rate plan charge with Dynamic Pricing" operation, added the missing `evaluation_level` field.
-   In the request body of the following operations, added the missing `end_date_condition` , `up_to_periods_type` , `up_to_periods` , and `specific_list_price_base` fields:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Create a product rate plan
    -   Create a product with plans and charges
-   In the response body of the following operations, added the missing `upToPeriodsType` , `upToPeriods` , `specificListPriceBase` , and `specificListPriceBase` fields:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Create a product rate plan
    -   Create a product with plans and charges
    -   Query product rate plans
    -   Retrieve a product by key
    -   Query purchase options by PRP ID
-   Removed the unsupported "Query products from the Product Catalog" operation.

The following update applies to the Older API Reference:

-   Removed the end-of-support note from the description of each of the following sections and their related operations:
    -   Invoice Item Adjustments
    -   Invoice Adjustments
    -   Credit Balance Adjustments
-   In the request body of the "CRUD: Update an amendment" operation and the response body of the "CRUD: Retrieve an amendment" operation, corrected the enum values of the `Status` field.

##

December 5, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.1.0](https://docs.zuora.com/en/release-notes/latest-release).

-   [Meters](https://developer.zuora.com/v1-api-reference/api/tag/Meters/) - Added the following operations:
    -   Retrieve summary data for a meter
    -   Retrieve the audit trail entries for a meter
    -   Retrieve the list of export jobs for a meter
    -   Create a job to export audit trail data for a meter
    -   Retrieve the presigned URL for an export job

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   [Commerce](https://developer.zuora.com/v1-api-reference/api/tag/Commerce/) - Made the following updates:
    -   In the request body of the "Create a product rate plan charge with Dynamic Pricing" operation, added the `charge` > `specificListPriceBase` nested field.
    -   In the response body of the "Create a product rate plan charge with Dynamic Pricing" operation, added the `specificListPriceBase` field.
    -   Added a corresponding request example.

##

November 26, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.0.1](https://docs.zuora.com/en/release-notes/latest-release/overview).

-   [Product Rate Plan Charges](https://developer.zuora.com/api-references/api/tag/Product-Rate-Plan-Charges/) - Made the following updates:
    -   In the request body of the "CRUD: Create a product rate plan charge" operation, updated the maximum value of the `SpecificListPriceBase` field from `200` to `120` .
    -   Added a corresponding request example.
-   [Configuration Templates](https://developer.zuora.com/v1-api-reference/api/tag/Configuration-Templates/) - In the response body of the "List all detais of source components" operation, added the following fields:
    -   `dataQuery`
    -   `multiOrg`
    -   `organizationHierarchy`

##

November 21, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.0.1](https://docs.zuora.com/en/release-notes/latest-release/overview).

-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Made the following updates:
    -   In the response body of the "List commitments for an account" operation, added the `commitments` > `status` field.
    -   In the response body of the "Retrieve a commitment" operation, added the `status` field.
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Update an order

        Made the following updates:

        -   Added the `commitments` > `status` field.
        -   Updated the `commitments` > `eligibleAccountConditions` field from optional to required.
        -   Updated the description of the `commitments` > `eligibleChargeConditions` field.
    -   In the response body of each of the following operations, added the `commitments` > `status` field:
        -   Create an order
        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   Retrieve an order
        -   Activate an order
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Preview an order
        -   Preview an order aynchronously
        -   Update an order

        Updated the description of each of the following fields:

        -   `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `termsandConditions` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `termsandConditions` > `shipToContactId`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number
        -   Retrieve an order

        Updated the description of each of the following fields:

        -   `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `termsandConditions` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `termsandConditions` > `shipToContactId`
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Added the `instant` parameter to the `CustomObjectMigration` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, added the `between-inclusive` enum value to the `operator` field:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Update a product rate plan charge with Dynamic Pricing

##

November 14, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.0.0](https://docs.zuora.com/en/release-notes/latest-release/overview).

-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the response body of the "List all items of an invoice" operation, added the following fields:
    -   `invoiceItems` > `commitmentId`
    -   `invoiceItems` > `commitmentPeriodId`
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   In the response body of the "List credit memo items" operation, added the following fields:
        -   `items` > `commitmentId`
        -   `items` > `commitmentPeriodId`
    -   In the response body of the "Retrieve a credit memo item" operation, added the following fields:
        -   `commitmentId`
        -   `commitmentPeriodId`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Updated the description of each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
    -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `negotiatedPricingTable`
    -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricingAttributes`
-   In the response body of the "Retrieve an order" operation, updated the description of the following fields:
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner

    Updated the description of each of the following fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
-   In the response body of each of the following operations, updated the description of the `ratePlans` > `ratePlanCharges` > `pricingAttributes` field:
    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version
-   In the response body of the "List subscriptions by account key" operation, updated the description of the `subscriptions` > `ratePlans` > `ratePlanCharges` > `pricingAttributes` field.

The following change is applicable to the Older API Reference:

-   Updated the description of the "Reporting" section to avoid confusion.

##

November 7, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.0.0](https://docs.zuora.com/en/release-notes/latest-release/overview).

####

API updates for the Contact object fields' character limit change

The following items are the API updates specific to the character limit changes for the Contact object fields.

-   [Contacts](https://developer.zuora.com/v1-api-reference/api/tag/Contacts/) - In the request body of each of the "Create a contact" and "Update a contact" operations, updated the character limit for the following fields:
    -   `city`
    -   `county`
    -   `state`
    -   `taxRegion`
-   [Accounts](https://developer.zuora.com/v1-api-reference/api/tag/Accounts/) - In the request body of each of the "Create an account" and "Update an account" operations, updated the character limit for the following fields:
    -   `billToContact` > `city`
    -   `billToContact` > `county`
    -   `billToContact` > `state`
    -   `billToContact` > `taxRegion`
    -   `shipToContact` > `city`
    -   `shipToContact` > `county`
    -   `shipToContact` > `state`
    -   `shipToContact` > `taxRegion`
    -   `soldToContact` > `city`
    -   `soldToContact` > `county`
    -   `soldToContact` > `state`
    -   `soldToContact` > `taxRegion`
-   [Omnichannel subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Omnichannel-Subscriptions/) - In the request body of the "Create an omnichannel subscription" operation, updated the character limit for the following fields:
    -   `accountData` > `billToContact` > `city`
    -   `accountData` > `billToContact` > `county`
    -   `accountData` > `billToContact` > `state`
    -   `accountData` > `billToContact` > `taxRegion`
    -   `accountData` > `soldToContact` > `city`
    -   `accountData` > `soldToContact` > `county`
    -   `accountData` > `soldToContact` > `state`
    -   `accountData` > `soldToContact` > `taxRegion`
-   [Sign up](https://developer.zuora.com/v1-api-reference/api/tag/Sign-Up/) - In the request body of the "Sign up" operation, updated the character limit for the following fields:
    -   `accountData` > `billToContact` > `city`
    -   `accountData` > `billToContact` > `county`
    -   `accountData` > `billToContact` > `state`
    -   `accountData` > `billToContact` > `taxRegion`
    -   `accountData` > `shipToContact` > `city`
    -   `accountData` > `shipToContact` > `county`
    -   `accountData` > `shipToContact` > `state`
    -   `accountData` > `shipToContact` > `taxRegion`
    -   `accountData` > `soldToContact` > `city`
    -   `accountData` > `soldToContact` > `county`
    -   `accountData` > `soldToContact` > `state`
    -   `accountData` > `soldToContact` > `taxRegion`
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of the "Create an order" and "Create an order asynchronously" operations updated the character limit for each of the following fields:
        -   `newAccount` > `billToContact` > `city`
        -   `newAccount` > `billToContact` > `county`
        -   `newAccount` > `billToContact` > `state`
        -   `newAccount` > `billToContact` > `taxRegion`
        -   `newAccount` > `shipToContact` > `city`
        -   `newAccount` > `shipToContact` > `county`
        -   `newAccount` > `shipToContact` > `state`
        -   `newAccount` > `shipToContact` > `taxRegion`
        -   `newAccount` > `soldToContact` > `city`
        -   `newAccount` > `soldToContact` > `county`
        -   `newAccount` > `soldToContact` > `state`
        -   `newAccount` > `soldToContact` > `taxRegion`
    -   In the request body of the "Update an order" operation, updated the character limit for each of the following fields:
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `billToContact` > `city`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `billToContact` > `county`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `billToContact` > `state`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `billToContact` > `taxRegion`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `soldToContact` > `city`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `soldToContact` > `county`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `soldToContact` > `state`
        -   `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `soldToContact` > `taxRegion`
    -   In the request body of each of the "Preview an order" and "Preview an order asynchronously" operations, updated the character limit for each of the following fields:
        -   `previewAccountInfo` > `shipToContact` > `city`
        -   `previewAccountInfo` > `shipToContact` > `county`
        -   `previewAccountInfo` > `shipToContact` > `state`
        -   `previewAccountInfo` > `shipToContact` > `taxRegion`
        -   `previewAccountInfo` > `soldToContact` > `city`
        -   `previewAccountInfo` > `soldToContact` > `county`
        -   `previewAccountInfo` > `soldToContact` > `state`
        -   `previewAccountInfo` > `soldToContact` > `taxRegion`
    -   In the response body of each of the following operations:

        -   List orders
        -   Retrieve an order
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Updated the character limit for each of the following fields:

        -   `orders` > `existingAccountDetails` > `billToContact` > `city`
        -   `orders` > `existingAccountDetails` > `billToContact` > `county`
        -   `orders` > `existingAccountDetails` > `billToContact` > `state`
        -   `orders` > `existingAccountDetails` > `billToContact` > `taxRegion`

####

Other API updates

-   [Commerce](https://developer.zuora.com/v1-api-reference/api/tag/Commerce/) - Added the "Query purchase options by PRP ID" operation.
-   [E-Invoicing](https://developer.zuora.com/v1-api-reference/api/tag/E-Invoicing/) - Made the following updates:
    -   Added the "Cancel the e-invoice file for an invoice" operation.
    -   Added the `use_certificate` field to the request body and the sample payload of each of the following operations:
        -   Create an e-invoicing service provider
        -   Update an e-invoicing service provider
    -   Added the `use_certificate` field to the response body and the sample response of each of the following operations:
        -   Create an e-invoicing service provider
        -   Update an e-invoicing service provider
        -   Retrieve an e-invoicing service provider
        -   List e-invoicing service providers
-   [Billing Preview Run](https://developer.zuora.com/v1-api-reference/api/tag/Billing-Preview-Run/) - In the request body of the "Create a billing preview run" operation, added the `filters` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "Query legacy products from the Product Catalog" operation for better clarity.
-   Corrected the sample request payload of the "Query product rate plan details" operation.
-   Removed the unsupported `rejectUnknownFields` query parameter and `Zuora-Version` header parameter from each of the following operations:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Query a product rate plan charge with Dynamic Pricing
    -   Query legacy products from the Product Catalog
    -   Create a product rate plan
    -   Update a product rate plan
    -   Query product rate plans
    -   Query product rate plan details
    -   Create a product with plans and charges
    -   Retrieve a product by key
    -   Update a product rate plan charge tier
-   In the request body and response body of each of the following operations, added the missing `accounting` field:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Update a product rate plan charge with Dynamic Pricing
    -   Create a product with plans and charges
    -   Create a product rate plan
-   In the response body of each of the following operations, added the missing `accounting` field:
    -   Query product rate plans
    -   Query products from the Product Catalog
    -   Query a product rate plan charge with Dynamic Pricing
-   In the response body of each of the following operations, corrected the response schema for the `subscriptions` > `ramp` nested field of the Order object:
    -   List orders
    -   Retrieve an order
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number
-   Updated the description of each of the following operations for better clarity:
    -   Export bulk PDF files
    -   Upload a file for an invoice
-   Corrected the endpoint for each of the following operations:
    -   Download a debit memo in the specified file format
    -   Download a credit memo in the specified file format
-   Corrected the endpoint of the "Submit an aggregate query job" operation from `/v1/batch-query/` to `/v1/batch-query` for consistency. Note that `/v1/batch-query/` is still supported for backward compatibility.
-   Corrected the endpoint of the "Update a payment" operation from `/v1/payments/{paymentId}` to `/v1/payments/{paymentKey}` .
-   Corrected the endpoint of the "Update a refund" operation from `/v1/refunds/{refundId}` to `/v1/refunds/{refundKey}` .
-   In the response body of each of the following Object Query operations, removed the unsupported `invoices` > `invoiceItems` nested field of the Account object:
    -   List accounts
    -   Retrieve an account

##

October 24, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.0.0](https://docs.zuora.com/en/release-notes/latest-release).

-   [Commerce](https://developer.zuora.com/v1-api-reference/api/tag/Commerce/) - Added the following operations:
    -   Query legacy products from the Product Catalog
    -   Update a product rate plan
    -   Query product rate plans
    -   Update a product
    -   Update a product rate plan charge tier
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the "Create an order" and "Update an order" operations, made the following updates:
        -   Added the following nested fields to the `commitments` field:
            -   `eligibleAccountConditions`
            -   `eligibleChargeConditions`
            -   `periods` > `status`
        -   Removed the following nested fields from the `commitments` field:
            -   `associationRules`
            -   `accountingCode`
    -   In the 200 response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   Retrieve an order
        -   Activate an order

        Made the following updates:

        -   Added the following nested fields to the `commitments` field:
            -   `eligibleAccountConditions`
            -   `eligibleChargeConditions`
        -   Removed the following nested fields from the `commitments` field:
        -   `associationRules`
        -   `accountingCode`
        -   `associatedAccounts`
        -   `version`
-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Made the following updates:
    -   Added the "Retrieve the balance for a commitment" operation.
    -   In the 200 response body of the "List commitments for an account" operation, made the following updates:
        -   Added the following fields:
            -   `commitments` > `eligibleAccountConditions`
            -   `commitments` > `eligibleChargeConditions`
        -   Removed the following fields:
            -   `commitments` > `associationRules`
            -   `commitments` > `accountingCode`
    -   In the 200 response body of the "Retrieve a commitment" operation, made the following updates:
        -   Added the following fields:
            -   `eligibleAccountConditions`
            -   `eligibleChargeConditions`
        -   Removed the following fields:
            -   `associationRules`
            -   `accountingCode`
    -   In the 200 response body of the "List periods for a commitment" operation, added the `periods` > `status` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Preview an order
    -   Preview an order asynchronously

    Corrected the format and description of each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `negotiatedPricingTable`
-   In the request body of "Create an order asynchronously" operation, updated the response body from 202 to 200.
-   In the 200 response body of each of the following operations in the "Orders" section:

    -   Retrieve an order
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner

    Added the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`

##

October 17, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q4.0.0](https://docs.zuora.com/en/release-notes/latest-release/billing).

-   [Commerce](https://developer.zuora.com/v1-api-reference/api/tag/Commerce/) - Added the following operations:
    -   Create a product rate plan
    -   Create a product with plans and charges
    -   Query product rate plans
    -   Query products from the Product Catalog
    -   Retrieve a product by key
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations:

    -   Preview an order
    -   Preview an order asynchronously

    Added the following fields:

    -   `previewAccountInfo` > `soldToContact` > `address1`
    -   `previewAccountInfo` > `soldToContact` > `address2`
    -   `previewOptions` > `skipTax`
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - In the 200 response body of the "Preview a subscription by subscription key" operation, added the following fields:
    -   `creditMemos` > `creditMemoItems` > `discountDetails` > `serviceStartDate`
    -   `creditMemos` > `creditMemoItems` > `discountDetails` > `serviceEndDate`
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   Renamed the following endpoints for better consistency and usability. Note that the legacy endpoints are still supported for backward compatibility:
        -   Renamed `/object-query/delivery-adjustment` to `/object-query/delivery-adjustments`
        -   Renamed `/object-query/delivery-adjustment/{key}` to `/object-query/delivery-adjustments/{key}`
        -   Renamed `/object-query/fulfillment` to `/object-query/fulfillments`
        -   Renamed `/object-query/fulfillment/{key}` to `/object-query/fulfillments/{key}`
        -   Renamed `/object-query/ramp` to `/object-query/ramps`
        -   Renamed `/object-query/ramp/{key}` to `/object-query/ramps/{key}`
    -   For the `{key}` path parameter of each of the following operations, added support for specifying the object number:
        -   Retrieve a delivery adjustment
        -   Retrieve a fulfillment
        -   Retrieve a ramp

##

October 10, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.2.1](https://docs.zuora.com/en/release-notes/previous-release-notes/previous-release-notes). For release notes for all Zuora products, see [Latest release](https://docs.zuora.com/en/release-notes/latest-release).

-   [Commerce](https://developer.zuora.com/v1-api-reference/api/tag/Commerce/) - Added the following operations:
    -   Create a product rate plan charge with Dynamic Pricing
    -   Update a product rate plan charge with Dynamic Pricing
    -   Query a product rate plan charge with Dynamic Pricing
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously

        Added the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `negotiatedPricingTable`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricingAttributes`
        -   `subscriptions` > `orderActions` > `addProduct` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `updateProduct` > `isAddingSubsetCharges`
    -   In the request body of each of the following operations:

        -   Preview an order
        -   Preview an order asynchronously

        Made the following updates:

        -   Removed the `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `isAddingSubsetCharges` field.
        -   Added the following fields:
            -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
            -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
            -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
            -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
            -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
            -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
            -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `negotiatedPricingTable`
            -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricingAttributes`
            -   `subscriptions` > `orderActions` > `updateProduct` > `isAddingSubsetCharges`
    -   In the 200 response body of the "Retrieve an order" operation, added the following fields:
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
    -   In the 200 response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner

        Added the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `negotiatedPriceTable`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricingAttributes`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `negotiatedPriceTable`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricingAttributes`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `negotiatedPriceTable`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricingAttributes`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageOverrage` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `originalListPrice`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - Made the following updates:
    -   In the 200 response body of each of the following operations:

        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version

        Added the following fields:

        -   `ratePlans` > `ratePlanCharges` > `pricingAttributes`
        -   `ratePlans` > `ratePlanCharges` > `originalListPrice`
        -   `ratePlans` > `ratePlanCharges` > `isDimensionalPrice`
        -   `ratePlans` > `ratePlanCharges` > `isPriceNegotiated`
        -   `ratePlans` > `ratePlanCharges` > `tiers` > `originalListPrice`
    -   In the 200 response body of the "List subscriptions by account key" operation, added the following fields:
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `pricingAttributes`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `originalListPrice`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `isDimensionalPrice`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `isPriceNegotiated`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `tiers` > `originalListPrice`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Preview an order
    -   Preview an order asynchronously

    Updated the field description by removing the note from the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `changePlan` > `createSubscription` > `subscribeToRatePlans` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
-   In the 200 response body of the "Retrieve an order" operation, removed the note from the description of the following fields:
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringDelivery` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `chargeModelData` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usageTiered` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usageVolume` > `tiers` > `originalListPrice`
    -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usageTieredWithOverage` > `tiers` > `originalListPrice`

##

October 2, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the 200 response body of each of the following operations, corrected the data type of the `invoiceSeparately` field from string to boolean:
    -   List subscriptions by account key
    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version
-   Corrected the description for each of the following operations to avoid confusion:
    -   Create an account
    -   Sign up
    -   Create a subscription

##

September 26, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.1.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Preview an order
        -   Preview an order asynchronously
        -   Update an order

        Removed the `priceIntervals` nested field from each of the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringDeliveryBased`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume`
        -   `subscriptions` > `orderActions` > `changeplan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringDeliveryBased`
        -   `subscriptions` > `orderActions` > `changeplan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee`
        -   `subscriptions` > `orderActions` > `changeplan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit`
        -   `subscriptions` > `orderActions` > `changeplan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered`
        -   `subscriptions` > `orderActions` > `changeplan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringDeliveryBased`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description for each of the following operations for better clarity:
    -   Create an account
    -   Sign up
    -   Create a subscription

##

September 19, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.1.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the "Create an order" and "Update an order" operations, made the following updates:
        -   Added the following fields:
            -   `commitments` > `accountReceivableAccountingCode`
            -   `commitments` > `periods` > `action`
        -   Updated the data type of the `customFields` field from array to object
    -   In the response body of "Retrieve an order" operation, made the following updates:
        -   Added the following fields:
            -   `order` > `commitments` > `accountReceivableAccountingCode`
            -   `order` > `commitments` > `periods` > `id`
        -   Updated the data type of the `order` > `commitments` > `customFields` field from array to object.
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Made the following updates:

        -   Added the following fields:
            -   `orders` > `commitments` > `accountReceivableAccountingCode`
            -   `orders` > `commitments` > `periods` > `id`
        -   Updated the data type of the `orders` > `commitments` > `customFields` field from array to object.
    -   In the response body of each of the following operations, updated the data type of the `commitments` > `associationRules` field from object to array:
        -   Retrieve an order
        -   List orders of a subscription owner
        -   List order by subscription owner
        -   List orders of an invoice number
        -   List orders by subscription number
        -   List pending orders by subscription number
    -   In the request body of each of the following operations, updated the maximum length of the `subscription` > `notes` field to 1000 from 500:
        -   Create an order
        -   Create an order asynchronously
        -   Preview an order
        -   Preview an order asynchronously
-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Made the following updates:
    -   In the response body of the "List commitments for an account" operation, made the following updates:
        -   Added the following fields:
            -   `commitments` > `accountReceivableAccoutingCode`
            -   `commitments` > `revenueAmortizationMethod`
            -   `commitments` > `revenueRecognitionTiming`
        -   Removed the `commitments` > `periods` field.
        -   Updated the data type of the `commitments` > `customFields` field from array to object.
    -   In the response body of the "Retrieve a commitment" operation, made the following updates:
        -   Added the following fields:
            -   `accountReceivableAccoutingCode`
            -   `revenueAmortizationMethod`
            -   `revenueRecognitionTiming`
        -   Removed the `periods` field.
        -   Updated the data type of the `customFields` field from array to object.
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - In the request body of each of the following operations, updated the maximum length of the `notes` field to 1000 from 500:
    -   Create a subscription
    -   Update a subscription
    -   Preview a subscription

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "Bulk Data" section for better clarity.

##

September 12, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.2](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the "Create an order" and "Update an order" operations:
        -   Added the following fields:
            -   `commitments` > `revenueAmortizationMethod`
            -   `commitments` > `revenueRecognitionTiming`
        -   Corrected the following fields from optional to required:
            -   `commitments` > `name`
            -   `commitments` > `type`
            -   `commitments` > `periods`
            -   `commitments` > `priority`
    -   In the response body of each of the "Create an order" and "Update an order" operations, added the following fields:
        -   `commitments` > `startDate`
        -   `commitments` > `endDate`
        -   `commitments` > `amount`
-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Made the following updates:
    -   In the response body of the "List commitments for an account" operation, added the `commitments` > `excludeItemBookingFromRevenueAccounting` field.
    -   In the response body of the "Retrieve a commitment" operation, added the `excludeItemBookingFromRevenueAccounting` field.

##

September 5, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.2](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Commitment feature

The following items are the API updates specific to the Commitment feature.

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the "Create an order" and "Update an order" operations, made the following updates:
        -   Added `commitments` > `periods` field.
        -   Removed the `commitments` > `prorationOption` field.
        -   Renamed the following nested fields of the `commitments` field:
            -   From `defaultAssociationRule` to `associationRules`
            -   From `taxCodeName` to `taxCode`
        -   Updated the `associationRules` field from optional to required.
    -   In the 200 response body of each of the "Create an order" and "Update an order" operations, made the following updates:
        -   Removed the `segments` field.
        -   Added the following fields:
            -   `startDate`
            -   `endDate`
            -   `amount`
            -   `periods`
    -   In the 200 response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   Retrieve an order
        -   Activate an order

        Made the following updates to the Order object:

        -   Added the `periods` nested field to the `commitments` field.
        -   Renamed the following fields of the `commitments` field:
            -   From `defaultAssociationRule` to `associationRules`
            -   From `taxCodeName` to `taxCode`
        -   Removed the following nested fields from the `commitments` field:
            -   `segments`
            -   `prorationOption`
-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Made the following updates:
    -   Removed the following operations:
        -   List commitment cycles
        -   List all segments of a commitment
    -   Added the "List periods for a commitment" operation.
    -   In the 200 response body of each of the "List commitments by account number" and "Retrieve a commitment" operations, made the following updates to the Commitment object:
        -   Added the following fields:
            -   `startDate`
            -   `endDate`
            -   `amount`
            -   `periods`
        -   Renamed the following fields:
            -   From `defaultAssociationRule` to `associationRules`
            -   From `taxCodeName` to `taxCode`
        -   Removed the following fields:
            -   `prorationOption`
            -   `cyclePeriodType`
            -   `specificCyclePeriodLength`
            -   `cycleDayType`
            -   `cycleDay`
            -   `cycleAlignmentDate`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "Accounts" section to avoid confusion.
-   In the request body of the "Create an order" operation, updated the description of each of the following fields for better clarity:
    -   `existingAccountId`
    -   `existingAccountNumber`
-   Added the missing `sourceId` query parameter to the "List credit memos" operation.
-   In the response body of each of the following operations, updated the description of each of the `chargeAmount` and `unitPrice` fields for the Invoice Item object for better clarity:
    -   List all items of an invoice
    -   Object Query: List invoices
    -   Object Query: Retrieve an invoice
    -   Object Query: List invoice items
    -   Object Query: Retrieve an invoice item
    -   Object Query: List order line items
    -   Object Query: Retrieve an order line item
    -   Object Query: List processed usage records
    -   Object Query: Retrieve processed usage records
    -   Object Query: List rating results
    -   Object Query: Retrieve a rating result
    -   Object Query: List subscriptions
    -   Object Query: Retrieve a subscription

##

August 22, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of the "Create an order" operation, added the `mitTransactionSource` nested field to the `processingOptions` > `electronicPaymentOptions` field.
    -   In the request body of each of the following operations, added the `communicationProfileId` and `clearingExistingCommunicationProfile` nested fields to the `subscriptions > orderActions > termsAndConditions` field:
        -   Preview an order
        -   Preview an order asynchronously
        -   Create an order
        -   Create an order asynchronously
        -   Update an order
    -   In the response body of each of the following operations, added the `communicationProfileId` nested field to the `orderLineItems` field of the Order object:
        -   List orders
        -   Retrieve an order
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number
-   [Order Line Items](https://developer.zuora.com/v1-api-reference/api/tag/Order-Line-Items/) - In the response body of each of the following operations, added the `communicationProfileId` field to the Order Line Item object:
    -   Retrieve an order line item
    -   Update order line items
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the response body of each of the following operations, added the `communicationProfileId` field to the Invoice object:
    -   Create a standalone invoice
    -   Create standalone invoices
    -   Retrieve an invoice
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - In the response body of each of the following operations, added the `communicationProfileId` field to the Subscription object:
    -   List subscriptions by account key
    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - In the response body of each of the following operations, added the `communicationProfileId` field to the Credit Memo object:
    -   List credit memos
    -   Create a credit memo from a charge
    -   Create credit memos
    -   Update credit memos
    -   Retrieve a credit memo
    -   Update a credit memo
    -   Apply a credit memo
    -   Cancel a credit memo
    -   Post a credit memo
    -   Unapply a credit memo
    -   Unpost a credit memo
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - In the response body of each of the following operations, added the `communicationProfileId` field to the Debit Memo object:
    -   List debit memos
    -   Create a debit memo from a charge
    -   Create debit memos
    -   Update debit memos
    -   Retrieve a debit memo
    -   Update a debit memo
    -   Cancel a debit memo
    -   Post a debit memo
    -   Unpost a credit memo
    -   Create a debit memo from an invoice
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   In the response body of each of the following operations, added the `communicationProfileId` and `clearingExistingCommunicationProfile` fields to the Order Action object:
        -   List order actions
        -   Retrieve an order action
        -   List orders
        -   Retrieve an order
    -   In the response body of each of the following operations, added the `communicationProfileId` field to the Invoice object:
        -   List invoices
        -   Retrieve an invoice
        -   List invoice items
        -   Retrieve an invoice
        -   List accounts
        -   Retrieve an account
-   [Accounting Codes](https://developer.zuora.com/v1-api-reference/api/tag/Accounting-Codes/) - Made the following updates:
    -   In the response body of the "List all accounting codes" operation, added the `accountingCodes` > `segmentConstantValues` field.
    -   In the request body of each of the "Create an accounting code" and "Update an accounting code" operations, added the `segmentConstantValues` field.
    -   In the response body of the "Retrieve an accounting code" operation, added the `segmentConstantValues` field.
-   [Accounting Periods](https://developer.zuora.com/v1-api-reference/api/tag/Accounting-Periods/) - Made the following updates:
    -   In the request body of the "Create an accounting period" operation, made the following updates:
        -   Updated the data type of the `fiscalYear` field from string to integer.
        -   Renamed the `fiscal_quarter` field to `fiscalQuarter` , updated the data type from string to integer, and added a description.
    -   In the response body of the "List all accounting periods" operation, made the following updates:
        -   Updated the data type of the `accountingPeriods` > `fiscalYear` field from string to integer.
        -   Renamed the `accountingPeriods` > `fiscal_quarter` field to `fiscalQuarter` , updated the data type from string to integer, and added a description.
    -   In the response body of the "Retrieve an accounting period" operation, made the following updates:
        -   Updated the data type of the `fiscalYear` field from string to integer.
        -   Renamed the `fiscal_quarter` field to `fiscalQuarter` , updated the data type from string to integer, and added a description.
    -   In the request body of the "Update an accounting period" operation, made the following updates:
        -   Updated the data type of the `fiscalYear` field from string to integer.
        -   Updated the data type of the `fiscalQuarter` field from string to integer and added a description.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of the "Retrieve an order line item" operation, updated the description of each of the following fields:
    -   `OrderLineItem` > `adjustmentLiabilityAccountingCode`
    -   `OrderLineItem` > `adjustmentRevenueAccountingCode`
    -   `OrderLineItem` > `contractAssetAccountingCode`
    -   `OrderLineItem` > `contractLiabilityAccountingCode`
    -   `OrderLineItem` > `contractRecognizedRevenueAccountingCode`
    -   `OrderLineItem` > `unbilledReceivablesAccountingCode`
-   In the request body of the "Update an order line item" operation, updated the description of each of the following fields:
    -   `adjustmentLiabilityAccountingCode`
    -   `adjustmentRevenueAccountingCode`
    -   `contractAssetAccountingCode`
    -   `contractLiabilityAccountingCode`
    -   `contractRecognizedRevenueAccountingCode`
    -   `unbilledReceivablesAccountingCode`
-   Updated the description of each of the following operations for better clarity:
    -   Generate an e-invoice file for an invoice
    -   Generate an e-invoice file for a debit memo
-   In the request body of each of the following operations, corrected the `commitments` > `segments` > `committedAmount` field to `commitments` > `segments` > `cycleAmount` :
    -   Create an order
    -   Update an order
-   In the response body of each of the following operations, corrected the `commmitments` > `segments` > `committedAmount` field to `commmitments` > `segments` > `cycleAmount` of the Order object:
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   Retrieve an order

##

August 18, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Commitment feature

The following items are the API updates specific to the Commitment feature.

-   [Commitments](https://developer.zuora.com/v1-api-reference/api/tag/Commitments/) - Added a "Commitments" section that contains the following operations:
    -   List commitment cycles
    -   List commitments for an account
    -   Retrieve a commitment
    -   List all segments of a commitment
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body and 200 response body of each of the following operations, added the `commitments` field:
        -   Create an order
        -   Update an order
    -   In the 200 response body of each of the following operations, added the `commmitments` field to the Order object:
        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   Retrieve an order
        -   Activate an order

##

August 14, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [E-Invoicing](https://developer.zuora.com/v1-api-reference/api/tag/E-Invoicing/) - Made the following updates:
    -   Added the following operations:
        -   List mandates for downloading files
        -   Retrieve a mandate for downloading a file
        -   Retrieve a mandate for downloading a credit memo
        -   Retrieve a mandate for downloading a debit memo
        -   Download a file in the specified file format
        -   Download a credit memo in the specified file format
        -   Download a debit memo in the specified file format
    -   In the request body of each of the following operations, added the `fileFormat` field and updated the corresponding request sample:
        -   Create an e-invoicing business region
        -   Update an e-invoicing business region
    -   In the response body of each of the following operations, added the `fileFormat` field and updated the corresponding response sample:
        -   Create an e-invoicing business region
        -   Update an e-invoicing business region
        -   List e-invoicing business regions
        -   Retrieve an e-invoicing business region
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Added the `RetrieveTimeOut` enum value to the `einvoiceStatus` field of the Invoice object of each of the following operations:
    -   Create a standalone invoice
    -   Create standalone invoices
    -   Retrieve an invoice
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Added the `RetrieveTimeOut` enum value to the `einvoiceStatus` field of the Credit Memos object of each of the following operations:
    -   List credit memos
    -   Create a credit memo from a charge
    -   Create credit memos
    -   Update credit memos
    -   Retrieve a credit memo
    -   Update a credit memo
    -   Apply a credit memo
    -   Cancel a credit memo
    -   Post a credit memo
    -   Unapply a credit memo
    -   Unpost a credit memo
    -   Create a credit memo from an invoice
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Added the `RetrieveTimeOut` enum value to the `einvoiceStatus` field of the Debit Memos object of each of the following operations:
    -   List debit memos
    -   Create a debit memo from a charge
    -   Create debit memos
    -   Update debit memos
    -   Retrieve a debit memo
    -   Update a debit memo
    -   Cancel a debit memo
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Added the `RetrieveTimeOut` enum value to the `einvoiceStatus` field of the Invoice object of each of the following operations:
    -   List accounts
    -   Retrieve an account
    -   List credit memos
    -   List debit memos
    -   List invoices
    -   Retrieve an invoice
    -   List invoice items
    -   Retrieve an invoice item
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Added the `Per_Validity_Period` enum value to the `listPriceBase` parameter of the `BillingListPriceBase` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of each of the following operations:
    -   Sync the e-Invoice status of an invoice
    -   Sync the e-Invoice status of a debit memo
    -   Sync the e-Invoice status of a credit memo
    -   Generate an e-invoice file for an invoice
    -   Generate an e-invoice file for a credit memo
    -   Generate an e-invoice file for a debit memo

##

August 8, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations, added the `existingAccountId` field:
    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field and updated the field description:
        -   Create a credit memo from a charge
        -   Create a credit memo from an invoice
        -   Retrieve a credit memo
        -   Update a credit memo
        -   Apply a credit memo
        -   Unapply a credit memo
        -   Post a credit memo
        -   Unpost a credit memo
        -   Cancel a credit memo
    -   In the response body of each of the following operations, added the `Voided` enum value to the `memos` > `taxStatus` field and updated the field description:
        -   Create credit memos
        -   Update credit memos
    -   In the response body of the "List credit memos" operation, added the `Voided` enum value to the `creditmemos` > `taxStatus` field and updated the field description.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates:
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field and updated the field description:
        -   Create a debit memo from a charge
        -   Create a debit memo from an invoice
        -   Retrieve a debit memo
        -   Update a debit memo
        -   Post a debit memo
        -   Unpost a debit memo
        -   Cancel a debit memo
    -   In the response body of each of the following operations, added the `Voided` enum value to the `memos` > `taxStatus` field and updated the field description:
        -   Create debit memos
        -   Update debit memos
    -   In the response body of the "List debit memos" operation, added the `Voided` enum value to the `debitmemos` > `taxStatus` field and updated the field description.
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates:
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field and updated the field description:
        -   Create a standalone invoice
        -   Retrieve an invoice
    -   In the response body of the "Create standalone invoices" operation, added the `Voided` enum value to the `invoices` > `taxStatus` field and updated the field description.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field of the Credit Memo object and updated the description for clarity:
        -   List credit memos
        -   Retrieve a credit memo
        -   List credit memo applications
        -   Retrieve a credit memo application
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field of the Debit Memo object and updated the description for clarity:
        -   List debit memos
        -   Retrieve a debit memo
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field of the Invoice object:
        -   List invoices
        -   Retrieve an invoice
        -   List invoice items
        -   Retrieve an invoice item
    -   In the response body of each of the following operations, added the `Voided` enum value to the `taxStatus` field of each of the Credit Memo, Debit Memo, and Invoice objects:
        -   List accounts
        -   Retrieve an account
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - In the description of the "List all settings" operation, updated the setting name from "Avalara Tax Engine" to "Direct Integration Tax Engine" to reflect support for all Direct Integration tax engines.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of each of the following operations, added the missing enum values to the `taxStatus` field:
    -   Create a credit memo from a charge
    -   Create a credit memo from an invoice
    -   Retrieve a credit memo
    -   Update a credit memo
    -   Apply a credit memo
    -   Unapply a credit memo
    -   Post a credit memo
    -   Unpost a credit memo
    -   Cancel a credit memo
    -   Create a debit memo from a charge
    -   Create a debit memo from an invoice
    -   Retrieve a debit memo
    -   Update a debit memo
    -   Post a debit memo
    -   Unpost a debit memo
    -   Cancel a debit memo
-   In the response body of each of the following operations, added the missing enum values to the `memos` > `taxStatus` field:
    -   Create credit memos
    -   Update credit memos
    -   Create debit memos
    -   Update debit memos
-   In the response body of the "List credit memos" operation, added the missing enum values to the `creditmemos` > `taxStatus` field.
-   In the response body of the "List debit memos" operation, added the missing enum values to the `debitmemos` > `taxStatus` field.
-   In the "Object Queries" section, made the following updates:
    -   In the response body of each of the following operations, added the missing enum values to the `taxStatus` field of the Credit Memo object:
        -   List credit memos
        -   Retrieve a credit memo
        -   List credit memo applications
        -   Retrieve a credit memo application
    -   In the response body of each of the following operations, added the missing enum values to the `taxStatus` field of the Debit Memo object:
        -   List debit memos
        -   Retrieve a debit memo
    -   In the response body of each of the following operations, added the missing enum values to the `taxStatus` field of each of the Credit Memo and Debit Memo objects:
        -   List accounts
        -   Retrieve an account

The following change is applicable to the Older API Reference:

-   In the description of each of the following operations, removed the note that informs user that Mutli-Entity is Early Availability:
    -   Multi-entity: Disconnect a connection
    -   Multi-entity: Deny a connection request
    -   Multi-entity: Accept a connection request
    -   Multi-entity: Initiate a connection request
    -   Multi-entity: List connections
    -   Multi-entity: Provision an entity
    -   Multi-entity: Delete an entity
    -   Multi-entity: Retrieve an entity
    -   Multi-entity: Update an entity
    -   Multi-entity: List entities
    -   Multi-entity: Create an entity
    -   Multi-entity: List all entities that a user can access
    -   Multi-entity: Share a product with an entity
    -   Multi-entity: Send user access requests
    -   Multi-entity: Accept user access
    -   Multi-entity: Deny user access

##

August 1, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Added the following operations:
    -   List delivery adjustments
    -   Retrieve a delivery adjustment
    -   List fulfillments
    -   Retrieve a fulfillment
    -   List ramps
    -   Retrieve a ramp

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Create an account" operation, updated the description of the `hpmCreditCardPaymentMethodId` field for better clarity.
-   In the request body of each of the following operations, corrected the `invoiceItems` > `taxItems` > `taxCode` field of the Invoice object from required to optional:
    -   Create a standalone invoice
    -   Create standalone invoices

The following change is applicable to the Older API Reference:

-   Corrected the request body schema and example for the "Run a report" operation.

##

July 25, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q3.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q3_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `productRatePlanChargeId`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `productRatePlanChargeNumber`
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously

        Updated the description of each of the following fields:

        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `productRatePlanChargeId`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `productRatePlanChargeNumber`
    -   In the request body of each of the following operations, added the `subscriptions` > `notes` field:
        -   Preview an order
        -   Preview an order asynchronously
        -   Create an order
        -   Create an order asynchronously
    -   In the 200 response body of each of the following operations, added the `notes` field to the `orders` > `subscriptions` nested field:
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number
        -   List orders
    -   In the 200 response body of the "Retrieve an order" operation, added the `notes` field to the `order` > `subscriptions` nested field.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates to each operation for the release of the new `2025-08-12` version:

    -   Added the `Zuora-Version` header parameter.
    -   Added the 500 error response.
    -   Consolidated the 400, 401, and 403 errors into a 4XX error, and updated its schema and example.

    Note that the error response changes are applicable only if you have upgraded the API version in your tenant to `2025-08-12`, or have specified `Zuora-Version` to `2025-08-12` in the request.

-   [Bulk Data](https://developer.zuora.com/v1-api-reference/api/tag/Bulk-Data/) - Renamed the following endpoints for better consistency and usability:
    -   Renamed `/bulk-jobs` to `/bulk-data/bulk-jobs`
    -   Renamed `/bulk-jobs/{id}/submissions` to `/bulk-data/bulk-jobs/{id}/submissions`
    -   Renamed `/bulk-jobs/{id}/summary` to `/bulk-data/bulk-jobs/{id}/summary`
    -   Renamed `/bulk-jobs/{id}/cancellations` to `/bulk-data/bulk-jobs/{id}/cancellations`
    -   Renamed `/bulk-jobs/{id}/aborts` to `/bulk-data/bulk-jobs/{id}/aborts`
    -   Renamed `/bulk-jobs/{id}/downloads` to `/bulk-data/bulk-jobs/{id}/downloads`
    -   Renamed `/bulk-jobs/summaries` to `/bulk-data/bulk-jobs/summaries`
    -   Renamed `/bulk-jobs/{id}/mappings` to `/bulk-data/bulk-jobs/{id}/mappings`
-   [Test Environments](https://developer.zuora.com/v1-api-reference/api/tag/Test-Environments/) - Added a "Test Environments" section that contains the following operations:
    -   List all test environments
    -   Retrieve a test environment response
-   [Test Environment Jobs](https://developer.zuora.com/v1-api-reference/api/tag/Test-Environment-Jobs/) - Added a "Test Environment Jobs" section that contains the following operations:
    -   Create a Test Environment job
    -   List all jobs of a test environment
    -   Retrieve a job of a test environment
    -   Perform an action on a test environment job
-   [Test Environment Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Test-Environment-Notifications/) - Added a "Test Environment Notifications" section that contains the following operations:
    -   Create a test environment notification
    -   List all email notifications of a test environment
    -   Retrieve a notification response of a test environment
    -   Update a test environment notification
    -   Delete a notification of a test environment

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the missing `Zuora-Entity-Ids` header parameter to the "Create an OAuth token" operation.
-   For the "List product rate plans by external ID" operation, made the following updates:
    -   In the response schema, added the `productRatePlans` and `productRatePlanNumber` fields.
    -   Updated the 200 response sample.
-   Corrected the base URL from `https://rest.test.zuora.com` to `https://one.zuora.com` in each of the following operations:
    -   List users
    -   Create a user
    -   Bulk create users
    -   Bulk update users
    -   Delete a list of users
    -   Retrieve a user
    -   Update a user
    -   Delete a user
    -   Partially update a user
-   Renamed the "Bulk Jobs" section to "Bulk Data" for consistency and usability.
-   Updated the description of the "Create a bulk job" operation to include a cURL example and clarify the next step after job creation.
-   For each of the following operations, corrected the HTTP method from DELETE to POST:
    -   Cancel a bulk job
    -   Abort a bulk job
-   For each of the following operations:

    -   Create a bulk job
    -   Submit a bulk job for processing

    Made the following updates:

    -   Updated the description of the `objectType` field in the request body of the following operations for better readability.
    -   Corrected the `mappings` field to add the following nested fields:
        -   `mappings` > `source`
        -   `mappings` > `target`
        -   `mappings` > `type`
        -   `mappings` > `arrayType`
-   In the "Submit a bulk job for processing" operation, updated the request payload and the 200 response sample.
-   In the "Create a job" operation, updated the response schema for better readability.
-   In the "List download links for a bulk job" operation, corrected the response example for better clarity.

##

July 18, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   For the "List product rate plans by external ID" operation, updated the 200 response sample.
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously

    Updated the description of each of the following fields:

    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeId`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productRatePlanChargeId`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productRatePlanChargeNumber`
    -   `subscriptions` > `orderActions` > `changePlan` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeId`
    -   `subscriptions` > `orderActions` > `changePlan` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
-   In the request body of each of the following operations:

    -   Apply a payment
    -   Refund a payment with auto-unapplying
    -   Unapply a payment

    Added a note about the Payment Cross Account (PCA) feature to the description of each of the following fields:

    -   `debitMemos` > `debitMemoId`
    -   `debitMemos` > `debitMemoNumber`
    -   `invoices` > `invoiceId`
    -   `invoices` > `invoiceNumber`
-   In the request body of the "Create a payment" operation, added a note about the Payment Cross Account (PCA) feature to the description of each of the following fields:
    -   `debitMemos` > `debitMemoId`
    -   `invoices` > `invoiceId`

##

July 11, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.2.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Added the following operations:
    -   List rating details
    -   Retrieve a rating detail

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Made the following changes to the "Submit a data query" operation:
    -   Updated the description for better clarity.
    -   Added the `Content-Type` header parameter.
    -   Added the `415` error response.

The following changes are applicable to the Older API Reference:

-   Corrected the request example of the "Run a report" operation.

##

July 4, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.2.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Contacts](https://developer.zuora.com/v1-api-reference/api/tag/Contacts/) - Added the "Transfer a contact" operation.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - In each operation, added the `includeNullFields` query parameter.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Update a fulfillment" operation, removed the following unsupported fields:
    -   `excludeItemBillingFromRevenueAccounting`
    -   `excludeItemBookingFromRevenueAccounting`
    -   `fulfillmentType`
    -   `orderLineItemId`
-   In the request body of the "Update an order line item" operation, removed the unsupported `itemNumber` field.
-   In the request body of the "Update an order action" operation, removed the unsupported `orderActions` container and moved its nested fields to the root level.
-   In the request body of each of the following operations, removed the unsupported `externallyManagedBy` field:
    -   Create an order
    -   Update an order

The following changes are applicable to the Older API Reference:

-   In the "Transfer report ownership" operation, updated the description and request example for better clarity.

##

June 27, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.1.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Configuration Templates](https://developer.zuora.com/v1-api-reference/api/tag/Configuration-Templates/) - Added an operation called "Sync a deployment template with latest changes".

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the "Configurable Payment Retry" section to the "Payments" section group.

##

June 18, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.1.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Added the `useOriginalExchangeRateForCredits` parameter to the `AccountingRules` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Update invoices" operation, corrected the `templateId` field to the `invoices` > `templateId` nested field.
-   In the 200 response body of the "Update an invoice" operation, added the missing `templateId` field.
-   In the request body of the "Invoice and collect" operation, made the following updates:
    -   Removed the unsupported `invoiceNumber` field.
    -   Updated the description of the `invoiceId` field.
-   In the request body of the "Update an accounting period" operation, corrected the `fiscal_quarter` field to `fiscalQuarter` .

##

June 13, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.1.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the request body of each of the following operations, added the `templateId` field:
    -   Update an invoice
    -   Update invoices
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Updated the `requestTemplate` parameter in each of the following settings to add support for the `null` value:

    -   `TaxEngines`
    -   `AllTaxEngines`

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).

-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   Added the following operations:
        -   List contact snapshots
        -   Retrieve a contact snapshot
    -   In each of the following operations, added the `billtocontactsnapshot` , `soldtocontactsnapshot` , and `shiptocontactsnapshot` enum values to the `expand[]` query parameter:
        -   List invoices
        -   Retrieve an invoice
        -   List debit memos
        -   Retrieve a debit memo
        -   List credit memos
        -   Retrieve a credit memo

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "Create a contact" operation.
-   In each of the following operations, added the missing `as-of-date` query parameter:
    -   List subscriptions by account key
    -   Retrieve a subscription by key and version
-   In the request body of the "Regenerate booking transactions" operation, corrected the `subscriptionNumber` field to `subscriptionName` .
-   In the request body of the "Regenerate billing transactions" operation, corrected the `documentId` field to `id` .
-   Updated the `zuora-version` header parameter to `Zuora-Version` for better consistency. Note that the headers are case-insensitive in Zuora, so you can use either format in API calls.

##

June 5, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.2](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Product Rate Plan Charge Tiers](https://developer.zuora.com/v1-api-reference/api/tag/Product-Rate-Plan-Charge-Tiers/) - In the request body of the "CRUD: Update a product rate plan charge tier" operation, added the following fields:
    -   `PriceFormat`
    -   `DiscountPercentage`
    -   `DiscountAmount`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, corrected the description of the `filterRule` > `condition` field:
    -   Create a notification definition
    -   Update a notification definition
-   In the 200 response body of each of the following operations, corrected the description of the `filterRule` > `condition` field:
    -   Create a notification definition
    -   Retrieve a notification definition
    -   Update a notification definition
-   In the 200 response body of the "List notification definitions" operation, corrected the description of the `data` > `filterRule` > `condition` field.
-   Corrected the description of the "Create an event trigger" operation.
-   Updated the request and 200 response samples of each of the following operations:
    -   Create a notification definition
    -   Create an event trigger
    -   Update an event trigger
-   Updated the 200 response sample of each of the following operations:
    -   List notification definitions
    -   Retrieve a notification definition
    -   Update a notification definition
    -   List event triggers
    -   Retrieve an event trigger
-   In the request body of each of the following operations, corrected the description of the `condition` field:
    -   Create a scheduled event
    -   Update a scheduled event by ID
-   In the 200 response body of each of the following operations, corrected the description of the `condition` field:
    -   Create a scheduled event
    -   Retrieve a scheduled event by ID
    -   Update a scheduled event by ID
-   In the 200 response body of the "List all scheduled events" operation, corrected the description of the `data` > `condition` field.

##

May 30, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for the Pending Subscription Processing feature

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `estimatedStartDate`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `estimatedStartDate`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `estimatedStartDate`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `estimatedStartDate`
    -   In the request body of each of the "Create an order" and "Update an order" operations, updated the description of the `status` field.
    -   In the 200 response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `estimatedStartDate`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `estimatedStartDate`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `estimatedStartDate`
        -   `orders` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `estimatedStartDate`
    -   In the 200 response body of the "Retrieve an order" operation, added the following fields:
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `estimatedStartDate`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `estimatedStartDate`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `estimatedStartDate`
        -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `estimatedStartDate`
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - Made the following updates:
    -   In the 200 response body of each of the "Retrieve a subscription by key" and "Retrieve a subscription by key and version" operations, added the following fields:
        -   `ratePlans` > `ratePlanCharges` > `estimatedStartDate`
        -   `ratePlans` > `ratePlanCharges` > `estimatedEndDate`
    -   In the 200 response body of the "List subscriptions by account key" operation, added the following fields:
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `estimatedStartDate`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `estimatedEndDate`
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - In the 200 response body of each of the "List rate plan charges" and "Retrieve a rate plan charge" operations, added the following fields to the Rate Plan Charge object:
    -   `estimatedStartDate`
    -   `estimatedEndDate`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the 200 response body of each of the following Object Queries operations, corrected the format of the `postedDate` field of the Invoice object:
    -   List invoices
    -   Retrieve an invoice
    -   List accounts
    -   Retrieve an account
    -   List invoice items
    -   Retrieve an invoice item

##

May 16, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Payment Authorization](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Authorization/) - In the request body of the "Create authorization" operation, updated the description the `paymentGatewayId` field.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - Made the following updates:
    -   In the request body of the each of the following operations, updated the description of the `authGateway` field:
        -   Create a payment method
        -   Update a payment method
    -   In the request body of the "Verify a payment method" operation, updated the description of the `paymentGatewayName` field.
    -   In the request body of the "Create a payment session" operation, updated the description of the `paymentGateway` field.

The following changes are applicable to the Older API Reference:

-   [Reporting](https://developer.zuora.com/v1-api-reference/older-api/tag/Reporting/) - Added an operation called "Transfer report ownership".

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the missing `zuora-version` header parameter to each operation that contains `v1` in the endpoint.
-   In each of the following operations, updated the description of the `charge-detail` query parameter for better clarity:
    -   Retrieve a subscription by key and version
    -   Retrieve a subscription by key
    -   List subscriptions by account key
-   Updated the description of the `Zuora-Org-Ids` header parameter for better clarity.
-   Updated the description of the "Bulk Jobs" section to add the Knowledge Center tutorial link for performing data ingestion with a CSV file in Zuora Billing.

##

May 9, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Ship-To Contact feature

The following items are the API updates specific to the Ship-To Contact feature.

-   [Accounts](https://developer.zuora.com/v1-api-reference/api/tag/Accounts/) - Made the following updates:
    -   Updated the description of each of the following operations:
        -   Create an account
        -   Update an account
    -   In the request body of the "Create an account" operation, added the following fields:
        -   `shipToContact`
        -   `shipToSameAsBillTo`
    -   In the 200 response body of the "Create an account" operation, added the `shipToContactId` field.
    -   In the request body of the "Update an account" operation, added the following fields:
        -   `shipToContact`
        -   `shipToContactId`
    -   In the 200 response body of each of the following operations:

        -   Retrieve an account
        -   Retrieve an account summary

        Added the following fields:

        -   `shipToContact`
        -   `billToContact` > `asBillTo`
        -   `billToContact` > `asShipTo`
        -   `billToContact` > `asSoldTo`
        -   `soldToContact` > `asBillTo`
        -   `soldToContact` > `asShipTo`
        -   `soldToContact` > `asSoldTo`
-   [Contacts](https://developer.zuora.com/v1-api-reference/api/tag/Contacts/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create a contact
        -   Update a contact

        Added the following fields:

        -   `asBillTo`
        -   `asShipTo`
        -   `asSoldTo`
    -   In the 200 response body of each of the following operations:

        -   Create a contact
        -   Retrieve a contact
        -   Update a contact

        Added the following fields:

        -   `asBillTo`
        -   `asShipTo`
        -   `asSoldTo`
-   [Contact Snapshots](https://developer.zuora.com/v1-api-reference/api/tag/Contact-Snapshots/) - In the 200 response body of the "Retrieve a contact snapshot" operation, added the following fields:
    -   `asBillTo`
    -   `asShipTo`
    -   `asSoldTo`
-   [Sign Up](https://developer.zuora.com/v1-api-reference/api/tag/Sign-Up/) - In the request body of the "Sign up" operation, added the `accountData` > `shipToContact` field.
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `previewAccountInfo` > `shipToContact`
        -   `orderLineItems` > `shipTo`
        -   `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `shipToContactId`
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously

        Added the following fields:

        -   `newAccount` > `shipToContact`
        -   `newAccount` > `shipToSameAsBillTo`
        -   `orderLineItems` > `shipTo`
        -   `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `shipToContactId`
    -   In the request body of the "Update an order" operation, added the following fields:
        -   `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingShipToContact`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `shipToContactId`
    -   In the 200 response body of the "Retrieve an order" operation, added the following fields:
        -   `order` > `existingAccountDetails` > `billToContact` > `asBillTo`
        -   `order` > `existingAccountDetails` > `billToContact` > `asShipTo`
        -   `order` > `existingAccountDetails` > `billToContact` > `asSoldTo`
        -   `order` > `orderLineItems` > `shipTo`
        -   `order` > `orderLineItems` > `shipToSnapshotId`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `order` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `order` > `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingShipToContact`
        -   `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `shipToContactId`
    -   In the 200 response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `existingAccountDetails` > `billToContact` > `asBillTo`
        -   `orders` > `existingAccountDetails` > `billToContact` > `asShipTo`
        -   `orders` > `existingAccountDetails` > `billToContact` > `asSoldTo`
        -   `orders` > `orderLineItems` > `shipTo`
        -   `orders` > `orderLineItems` > `shipToSnapshotId`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `shipToContactId`
        -   `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingShipToContact`
        -   `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `shipToContactId`
        -   `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingShipToContact`
        -   `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `shipToContactId`
        -   `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingShipToContact`
        -   `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `shipToContactId`
-   [Order Line Items](https://developer.zuora.com/v1-api-reference/api/tag/Order-Line-Items/) - Made the following updates:
    -   In the request body of the "Update an order line item" operation, added the `shipTo` field.
    -   In the request body of the "Update order line items" operation, added the `orderLineItems` > `shipTo` field.
    -   In the 200 response body of each of the following operations:

        -   Update order line items
        -   Retrieve an order line item

        Added the following fields:

        -   `orderLineItem` > `shipTo`
        -   `orderLineItem` > `shipToSnapshotId`
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - Made the following updates:
    -   In the 200 response body of the "List subscriptions by account key" operation, added the `subscriptions` > `shipToContact` field.
    -   In the 200 response body of each of the following operations, added the `shipToContact` field:
        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates:
    -   In the request body of the "Create a standalone invoice" operation, added the following fields:
        -   `shipToContact`
        -   `shipToContactId`
        -   `shipToSameAsBillTo`
    -   In the request body of the "Create standalone invoices" operation, added the following fields:
        -   `invoices` > `shipToContact`
        -   `invoices` > `shipToContactId`
        -   `invoices` > `shipToSameAsBillTo`
    -   In the 200 response body of each of the following operations:

        -   Create a standalone invoice
        -   Retrieve an invoice

        Added the following fields:

        -   `shipToContactId`
        -   `shipToContactSnapshotId`
    -   In the 200 response body of the "Create standalone invoices" operation, added the following fields:
        -   `invoices` > `shipToContactId`
        -   `invoices` > `shipToContactSnapshotId`
    -   In the 200 response body of the "List all items of an invoice" operation, added the `invoiceItems` > `shipToContactId` field.
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   In the 200 response body of the "List credit memo items" operation, added the `items` > `shipToContactId` field.
    -   In the 200 response body of the "Retrieve a credit memo item" operation, added the `shipToContactId` field.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates:
    -   In the 200 response body of the "List debit memo items" operation, added the `items` > `shipToContactId` field.
    -   In the 200 response body of the "Retrieve a debit memo item" operation, added the `shipToContactId` field.
-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Made the following updates:
    -   In the request body of the "Create or update email templates" operation, made the following updates:
        -   Updated the description of each of the following fields:
            -   `emailTemplates` > `ccEmailType`
            -   `emailTemplates` > `toEmailType`
        -   Added the `ShipToContact` and `InvoiceOwnerShipToContact` enum values to each of the following fields:
            -   `emailTemplates` > `ccEmailType`
            -   `emailTemplates` > `toEmailType`
    -   In the request body of each of the following operations:

        -   Create an email template
        -   Update an email template

        Made the following updates:

        -   Updated the description of each of the following fields:
            -   `ccEmailType`
            -   `toEmailType`
        -   Added the `ShipToContact` and `InvoiceOwnerShipToContact` enum values to each of the following fields:
            -   `ccEmailType`
            -   `toEmailType`
    -   In the 200 response body of each of the following operations:

        -   Create an email template
        -   Retrieve an email template
        -   Update an email template

        Added the `ShipToContact` and `InvoiceOwnerShipToContact` enum values to each of the following fields:

        -   `ccEmailType`
        -   `toEmailType`
    -   In the 200 response body of the "List email templates" operations, added the `ShipToContact` and `InvoiceOwnerShipToContact` enum values to each of the following fields:
        -   `data` > `ccEmailType`
        -   `data` > `toEmailType`
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   In each of the "List accounts" and "Retrieve an account" operations, made the following updates:
        -   Added the `shipto` enum value to the `expand[]` query parameter.
        -   In the 200 response body, added the `shipToId` and `shipTo` fields to the Account object.
    -   In the 200 response body of each of the "List contacts" and "Retrieve a contact" operations, added the following fields to the Contact object:
        -   `asBillTo`
        -   `asShipTo`
        -   `asSoldTo`
    -   In the 200 response body of each of the following operations, added the `shipToContactSnapshotId` field to the Credit Memo object:
        -   List credit memos
        -   Retrieve a credit memo
    -   In the 200 response body of each of the following operations, added the `shipToContactSnapshotId` field to the Debit Memo object:
        -   List debit memos
        -   Retrieve a debit memo
    -   In the 200 response body of each of the following operations, added the `itemShipToContactId` and `shipToContactSnapshotId` fields to the Credit Memo Item object:
        -   List credit memo items
        -   Retrieve a credit memo item
    -   In the 200 response body of each of the following operations, added the `itemShipToContactId` and `shipToContactSnapshotId` fields to the Debit Memo Item object:
        -   List debit memo items
        -   Retrieve a debit memo item
    -   In the 200 response body of each of the following operations, added the `shipToContactId` and `shipToContactSnapshotId` fields to the Invoice object:
        -   List invoices
        -   Retrieve an invoice
    -   In the 200 response body of each of the following operations, added the `shipToContactId` and `shipToContactSnapshotId` fields to the Subscription object:
        -   List subscriptions
        -   Retrieve a subscription
    -   In the 200 response body of each of the "List invoice items" and "Retrieve an invoice item" operations, added the following fields to the Invoice Item object:
        -   `itemShipToContactId`
        -   `shipToContactId`
        -   `shipToContactSnapshotId`
    -   In the 200 response body of each of the "List order actions" and "Retrieve an order action" operations, added the `clearingExistingShipToContact` and `shipToContactId` fields to the Order Action object.
    -   In the 200 response body of each of the "List order line items" and "Retrieve an order line item" operations, added the `shipTo` and `shipToSnapshotId` fields to the Order Line Item object.

####

Other API updates

-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Made the following updates:

    -   Added support for the GET, PUT, and DELETE methods to the `ReusableBlock` setting.
    -   Added support for the GET and POST methods to the `AllReusableBlocks` setting.
    -   Updated the description of the "List all settings" operation to add Knowledge Center tutorial links for the Reusable Block feature.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.csv).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the 200 response body of each of the following operations:

    -   Retrieve an account summary
    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version

    Updated the description of each of the following fields for better clarity:

    -   `billToContact`
    -   `soldToContact`
-   In the 200 response body of the "List subscriptions by account key" operation, updated the description of each of the following fields for better clarity:
    -   `subscriptions` > `billToContact`
    -   `subscriptions` > `soldToContact`
-   In the request body of each of the following operations:

    -   Create a contact
    -   Update a contact

    Updated the description of each of the following fields for better clarity:

    -   `country`
    -   `state`
-   In the 200 response body of each of the following operations：

    -   Create a contact
    -   Retrieve a contact
    -   Update a contact

    Updated the description of each of the following fields for better clarity:

    -   `country`
    -   `state`
-   In the request body of each of the following operations, updated the description of the `orderNumber` field for better clarity:
    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   In each of the following operations, updated the description of the `exclude-rate-plans-with-no-charges` query parameter for better clarity:
    -   Retrieve a subscription by key and version
    -   Retrieve a subscription by key
    -   List subscriptions by account key
-   Added the missing `CustomObjectMigration` setting to the Settings API.

##

April 30, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations:

    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously

    Updated the description of each of the following fields to clarify the impacts of the new billing permission for order line items:

    -   `orderLineItems`
    -   `orderLineItems` > `productRatePlanChargeId`
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates to clarify the impacts of the new billing permissions for standalone invoices:
    -   Updated the description of each of the following operations:
        -   Create a standalone invoice
        -   Create standalone invoices
    -   In the request body of the "Create a standalone invoice" operation, updated the description of each of the following fields:
        -   `invoiceItems`
        -   `invoiceItems` > `productRatePlanChargeId`
    -   In the request body of the "Create standalone invoices" operation, updated the description of each of the following fields:
        -   `invoices` > `invoiceItems`
        -   `invoices` > `invoiceItems` > `productRatePlanChargeId`
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates to the "Reverse an invoice" operation for the support of asynchronous invoice reversal:
    -   Updated the operation description.
    -   In the 200 response body, added the following fields:
        -   `id`
        -   `jobId`
        -   `jobStatus`
-   [Operations](https://developer.zuora.com/v1-api-reference/api/tag/Operations/) - Made the following updates to the "Retrieve an operation job" operation for the support of asynchronous invoice reversal:
    -   Updated the operation description.
    -   In the 200 response body, added the `Reverse` enum value to the `operationType` field.
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Added the following operations:
    -   Unapply a credit memo asynchronously
    -   Apply a credit memo aysnchronously
    -   Retrieve an async unapply credit memo job by ID
    -   Retrieve an async apply credit memo job by ID
-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Added the following operations:
    -   Create or update reusable blocks
    -   Create a reusable block
    -   List reusable blocks
    -   Retrieve a reusable block
    -   Update a reusable block
    -   Delete a reusable block

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "E-Invoicing" section, made the following updates:
    -   Renamed the "Update the e-Invoice status of a credit memo" operation to "Sync the e-Invoice status of a credit memo".
    -   Renamed the "Update the e-Invoice status of a debit memo" operation to "Sync the e-Invoice status of a debit memo".
-   In the "Object Queries" section, added the missing `Zuora-Org-Ids` header parameter to each operation.
-   Updated the description of the "Retrieve the default payment method of an account" operation for better clarity.

##

April 25, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Accounts](https://developer.zuora.com/v1-api-reference/api/tag/Accounts/) - Made the following updates:
    -   In the request body of each of the following operations, added the `gatewayRoutingEligible` field:
        -   Create an account
        -   Update an account
    -   In the 200 response body of the "Retrieve an account" operation, added the `gatewayRoutingEligible` field.
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - In the 200 response body of the "Preview a subscription by subscription key" operation, added the following fields:
    -   `invoices` > `invoiceItems` > `discountDetails` > `discountChargeName`
    -   `creditMemos` > `creditMemoItems` > `discountDetails` > `discountChargeName`
-   [Sign Up](https://developer.zuora.com/v1-api-reference/api/tag/Sign-Up/) - In the request body of the "Sign up" operation, added the `accountData` > `organizationLabel` field.
-   [Operations](https://developer.zuora.com/v1-api-reference/api/tag/Operations/) - In the request body of the "Export bulk PDF files" operation, added the `persistIndexFile` field.
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the response body of each of the following operations, updated the description of the `einvoiceStatus` field and added the `ApprovedByAuthority` and `Rejected` enum values to this field:
    -   Create a standalone invoice
    -   Retrieve an invoice
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - In the response body of each of the following operations, updated the description of the `einvoiceStatus` field of the Credit Memo object and added the `ApprovedByAuthority` and `Rejected` enum values to this field:
    -   Apply a credit memo
    -   Cancel a credit memo
    -   Post a credit memo
    -   Unapply a credit memo
    -   Unpost a credit memo
    -   Retrieve a credit memo
    -   Create a credit memo from an invoice
    -   Create a credit memo from a charge
    -   List credit memos
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - In the response body of each of the following operations, updated the description of the `einvoiceStatus` field of the Debit Memo object and added the `ApprovedByAuthority` and `Rejected` enum values to this field:
    -   Cancel a debit memo
    -   Post a debit memo
    -   Unpost a debit memo
    -   Retrieve a debit memo
    -   Update a debit memo
    -   Create a debit memo from an invoice
    -   Create a debit memo from a charge
    -   List debit memos
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - In the response body of each of the following operations, updated the description of the `einvoiceStatus` field and added the `ApprovedByAuthority` and `Rejected` enum values to this field:
    -   Retrieve a credit memo
    -   List credit memos
    -   Retrieve a debit memo
    -   List debit memos
    -   Retrieve an invoice
    -   List invoices
-   [Meters](https://developer.zuora.com/v1-api-reference/api/tag/Meters/) - Added the following operations:
    -   Bulk delete events from an event store
    -   Retrieve the latest query job of a specific event store

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Preview an order
    -   Preview an order asynchronously

    Updated the description of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `addProduct` > `customFields`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `customFields`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `customFields`
-   In each of the following operations, updated the description of the `exclude-rate-plans-with-no-charges` query parameter for better clarity:
    -   Retrieve a subscription by key and version
    -   Retrieve a subscription by key
    -   List subscriptions by account key
-   In the request body of each of the following operations, updated the description of the `Quantity` field for better clarity:
    -   CRUD: Create a usage record
    -   CRUD: Update a usage record
-   In the 200 response body of the "CRUD: Retrieve a usage record" operation, updated the description of the `Quantity` field for better clarity.
-   In the 200 response body of the "Retrieve usage rate detail for an invoice item" operation, updated the description of the `data` > `quantity` field for better clarity.
-   Moved the following operations to the "E-Invoicing" section from the "Invoices", "Credit Memo", and "Debit Memo" sections respectively:
    -   Generate an e-invoice file for an invoice
    -   Sync the e-Invoice status of an invoice
    -   Generate an e-invoice file for a credit memo
    -   Update the e-Invoice status of a credit memo
    -   Generate an e-invoice file for a debit memo
    -   Update the e-Invoice status of a debit memo

The following change is applicable to the Older API Reference:

-   In the 200 response body of the "Retrieve a usage record" operation, updated the description of the `usage` > `quantity` field for better clarity.

##

April 22, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Meters" section, made the following updates:
    -   Updated the description of this section for better clarity.
    -   Removed the redundant "Run a meter" operation.
    -   Corrected the following endpoints:
        -   Corrected `/meter/run/{meterId}/{version}` to `/meters/run/{meterId}/{version}`
        -   Corrected `/meter/debug/{meterId}/{version}` to `/meters/debug/{meterId}/{version}`
        -   Corrected `/meters/{meterId}/{version}/run-status` to `/meters/{meterId}/{version}/runStatus`
        -   Corrected `/meter/export/{meterId}` to `/meters/export/{meterId}`
        -   Corrected `/meter/import` to `/meters/import`
        -   Corrected `/meters/create-file` to `/meters/files`
        -   Corrected `/meters/streaming/ingestion/{meterGlobalId}` to `/usage/bulk/{meterGlobalId}`

##

April 18, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q2.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025_Q2_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Meters](https://developer.zuora.com/v1-api-reference/api/tag/Meters/) - Added a "Meters" section that contains the following operations:
    -   Run a meter
    -   Run a specific version of a meter
    -   Test a specific version of a meter
    -   Retrieve the run status of a specific meter version
    -   Export details of a specific meter
    -   Import a meter definition
    -   Upload a file
    -   Ingest usage events for a meter
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In each of the following operations, added the `summarizeInvoiceItem` query parameter:
        -   Preview an order
        -   Preview an order asynchronously
    -   In the 200 response body of the "Preview an order" operation, added the `previewResult` > `invoices` > `invoiceItemSummary` field.
-   [Invoice Schedules](https://developer.zuora.com/v1-api-reference/api/tag/Invoice-Schedules/) - Added the following operations:
    -   Detach charges from an invoice schedule
    -   Attach charges to an invoice schedule
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Added an operation called "Sync the e-Invoice status of an invoice".
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Added an operation called "Update the e-Invoice status of a credit memo".
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Added an operation called "Update the e-Invoice status of a debit memo".
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Added the following operations:
    -   List invoice schedules
    -   Retrieve an invoice schedule

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, updated the description of the `revenueImpacting` field for better clarity:
    -   Write off an invoice
    -   Write off a debit memo
-   Updated the description of the "Notifications" section for better clarity.

##

April 11, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.2.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations, updated the description of each of the `existingAccountNumber` and `subscriptions` fields:
    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Made the following updates:

    -   Added the `calloutTemplate` parameter to the `AuditTrailSettings` setting.
    -   Updated the `segmentConstantValues` parameter in each of the following settings to add the support of the `null` value:
        -   `ChartOfAccounts`
        -   `ChartOfAccountsItem`
    -   Updated the endpoint of the `TaxEngines` setting to `/tax-engines/{id}` .
    -   Updated each of the following parameters in the `TaxEngines` setting to add the support of the `null` value:
        -   `jsonFields`
        -   `networkOpenTimeoutInSeconds`
        -   `networkReadTimeoutInSeconds`
        -   `requestHeaders`
        -   `responseMappings`
    -   Updated each of the following parameters in the `AllTaxEngines` setting to add the support of the `null` value:
        -   `accessTokenUrl`
        -   `clientId`
        -   `clientSecret`
        -   `jsonFields`
        -   `networkOpenTimeoutInSeconds`
        -   `networkReadTimeoutInSeconds`
        -   `requestHeaders`
        -   `responseMappings`
        -   `securityToken`
        -   `url`
        -   `voidUrl`

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.csv).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Retrieve a subscription by key" operation, made the following updates:
    -   In the 200 response body, added the missing `chargeSegments` nested field to the `ratePlans` > `ratePlanCharges` field.
    -   Updated the description of the `charge-detail` query parameter for better clarity.
    -   Corrected the `asOfDay` query parameter to `as-of-date` .
    -   In the source YAML file, renamed the `GETDiscountApplyDetailsType` schema to `DiscountApplyDetails` .
-   Removed the `Authorization` header parameter from each operation for OpenAPI specification compliance. With the security scheme available in each operation, this parameter is no longer explicitly needed.

##

April 3, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Update an account" operation, added the missing `billToContactId` and `soldToContactId` fields.
-   In the request body of each of the following operations, updated the description of the `customRates` field of the Invoice object for better clarity:
    -   Create a standalone invoice
    -   Create standalone invoices
-   In the request body of each of the following operations, updated the description of the `customRates` field of the Credit Memo object for better clarity:
    -   Create a credit memo from a charge
    -   Create credit memos
-   In the request body of each of the following operations, updated the description of the `customRates` field of the Debit Memo object for better clarity:
    -   Create a debit memo from a charge
    -   Create debit memos
-   In the request body of the "Create a payment" operation, updated the description of the `customRates` field for better clarity.

##

March 28, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.1.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the response body of the "Retrieve the PDF file generation status of invoices" operation, made the following updates to the `invoiceFiles > pdfGenerationStatus` field:
    -   Added the `Archived` enum value.
    -   Updated the description of this field to explain the `Obsolete` and `Archived` enum values.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/operation/POST_PaymentMethods/) - In the request body of the "Create a payment method" operation, added the `AmazonPay` enum value to the `type` field for the newly supported Amazon Pay payment method.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "CRUD: Create a product rate plan charge" operation, updated the description of the `ListPriceBase` field.
-   In the "Object Queries" section, made the following updates:
    -   Added the 200 response sample to each operation for better clarity.
    -   In the 200 response body of each of the "List product rate plan charges" and "Retrieve a product rate plan charge" operations, added the following missing fields to the Product Rate Plan Charge object:
        -   `chargeFunction`
        -   `isAllocationEligible`
        -   `isUnbilled`
        -   `applyToBillingPeriodPartially`
    -   In the 200 response body of each of the "List product rate plan charge tiers" and "Retrieve a product rate plan charge tier" operations, corrected the enum values for the `priceFormat` field of the Product Rate Plan Charge Tier object.
    -   In the 200 response body of each of the "List rate plans" and "Retrieve a rate plan" operations, added the missing `reverted` field to the Rate Plan object.
    -   In the 200 response body of each of the "List rate plan charges" and "Retrieve a rate plan charge" operations, made the following updates to the Rate Plan Charge object:
        -   Corrected the enum values for the `endDateCondition` field.
        -   Added the following missing fields:
            -   `taxable`
            -   `reverted`
            -   `reflectDiscountInNetAmount`
    -   In the 200 response body of each of the "List amendments" and "Retrieve an amendment" operations, added the missing `Composite` enum value to the `type` field of the Amendment object.
    -   In the 200 response body of each of the "List validity period summaries" and "Retrieve a validity period summary" operations, added the missing `billingTiming` field to the Validity Period Summary object.
    -   In the 200 response body of each of the "List processed usage records" and "Retrieve a processed usage record" operations, added the missing `ratePlanChargeId` field to the Processed Usage object.
    -   In the 200 response body of each of the "List bill runs" and "Retrieve a bill run" operations, added the missing `includeSubscriptions` and `includeOrderLineItems` fields to the Bill Run object.
    -   In the 200 response body of each of the "List invoice items" and "Retrieve an invoice item" operations, made the following updates to the Invoice Item object:
        -   Corrected the enum values for the `processingType` field.
        -   Added the missing `subscriptionOwnerId` field.
    -   In the 200 response body of each of the "List credit memo items" and "Retrieve a credit memo item" operations, made the following updates to the Credit Memo Item object:
        -   Corrected the enum values for the `processingType` field.
        -   Added the missing `revenueImpacting` field.
    -   In the 200 response body of each of the "List debit memo items" and "Retrieve a debit memo item" operations, corrected the enum values for the `processingType` field of the Debit Memo Item object.
    -   In the 200 response body of each of the "List taxation items" and "Retrieve a taxation item" operations, added the following missing fields to the Taxation Item object:
        -   `taxableAmount`
        -   `periodStartDate`
        -   `periodEndDate`
    -   In the 200 response body of each of the "List payment methods" and "Retrieve a payment method" operations, added the following missing fields to the Payment Method object:
        -   `cardBrand`
        -   `cardClass`
        -   `cardIssuingBank`
        -   `cardIssuingCountry`
        -   `cardProductType`
    -   In the 200 response body of each of the "List payment schedule items" and "Retrieve a payment schedule item" operations, made the following updates to the Payment Schedule Item object:
        -   Corrected the enum values for the `status` field.
        -   Added the missing `paymentScheduleId` field.
    -   Renamed the "List custom objects" and "Retrieve a custom object" operations to "List custom object records" and "Retrieve a custom object record" respectively for better clarity.

##

March 21, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.1.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create a callout template
        -   Update a callout template

        Added the following fields:

        -   `hmacAlgorithm`
        -   `hmacData`
        -   `hmacKey`
        -   `hmacOutputFormat`
        -   `hmacSecret`
        -   `hmacValue`
    -   In the request body of the "Create or update callout templates" operation, added the following fields:
        -   `calloutTemplates` > `hmacAlgorithm`
        -   `calloutTemplates` > `hmacData`
        -   `calloutTemplates` > `hmacKey`
        -   `calloutTemplates` > `hmacOutputFormat`
        -   `calloutTemplates` > `hmacSecret`
        -   `calloutTemplates` > `hmacValue`
    -   In the 200 response body of each of the following operations:

        -   Create a callout template
        -   Retrieve a callout template
        -   Update a callout template

        Added the following fields:

        -   `hmacAlgorithm`
        -   `hmacData`
        -   `hmacKey`
        -   `hmacOutputFormat`
        -   `hmacSecret`
        -   `hmacValue`
    -   In the 200 response body of the "List callout templates" operation, added the following fields:
        -   `data` > `hmacAlgorithm`
        -   `data` > `hmacData`
        -   `data` > `hmacKey`
        -   `data` > `hmacOutputFormat`
        -   `data` > `hmacSecret`
        -   `data` > `hmacValue`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Moved the "Retrieve a usage record" operation in the "Usage" section from the v1 API reference to the Older API Reference. It is no longer recommended to use. The recommended alternatives are [Retrieve a usage record](https://developer.zuora.com/v1-api-reference/api/operation/queryUsageByKey/) and [List usage records](https://developer.zuora.com/v1-api-reference/api/operation/queryUsages/) Object Query operations.
-   In the request body of the "Create a debit memo from an invoice" operation, corrected the `items` > `taxItems` > `amount` field from optional to required.

##

March 13, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.1.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts) - Made the following updates:
    -   In the request body of the "Create an account" operation, added the following fields:
        -   `customerServiceRepName`
        -   `purchaseOrderNumber`
    -   In the response body of the "List payment methods of an account" operation, added the following fields:
        -   `returnedPaymentMethodType` > `accountVerificationService`
        -   `returnedPaymentMethodType` > `accountVerificationStatus`
    -   In the response body of the "Retrieve the default payment method of an account" operation, added the following fields:
        -   `accountVerificationService`
        -   `accountVerificationStatus`
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - In the response body of the "Retrieve a payment method" operation, added the following fields:
    -   `accountVerificationService`
    -   `accountVerificationStatus`
-   [Object Queries](https://developer.zuora.com/api-references/api/tag/Object-Queries) - Made the following changes:
    -   In the response body of the "List payment methods" operation, added the following fields:
        -   `data` > `accountVerificationService`
        -   `data` > `accountVerificationStatus`
    -   In the response body of the "Retrieve a payment method" operation, added the following fields:
        -   `accountVerificationService`
        -   `accountVerificationStatus`
-   [Billing Documents](https://developer.zuora.com/api-references/api/tag/Billing-Documents/) - In the request body of the "Generate billing documents by account ID" operation, added the following fields:
    -   `includeSubscriptions`
    -   `includeOrderLineItems`
-   [Bill Run](https://developer.zuora.com/v1-api-reference/api/tag/Bill-Run/) - Made the following updates:
    -   In the request and response body of the "Create a bill run" operation, added the following fields:
        -   `includeSubscriptions`
        -   `includeOrderLineItems`
    -   In the response body of the "Retrieve a bill run" operation, added the following fields:
        -   `includeSubscriptions`
        -   `includeOrderLineItems`
-   [Describe](https://developer.zuora.com/v1-api-reference/api/tag/Describe/) - In the "Describe an object" operation, made the following updates:
    -   Added the `showRelationships` query parameter.
    -   Added the missing 200 response schema.
    -   Updated the description of this operation.
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Made the following updates:

    -   Added the `usedTheSameTransactionRuleAsDebitMemoItem` parameter to the `AllRevenueRecognitionRules` setting.
    -   Added support for the GET, PUT, and DELETE methods to the `TaxEngines` setting.
    -   Added support for the POST method to the `AllTaxEngines` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.csv).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously
    -   Update an order

    Updated the description of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `changePlan`
    -   `subscriptions` > `orderActions` > `type`
-   In the 200 response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Updated the description of each of the following fields for better clarity:

    -   `orders` > `subscriptions` > `orderActions` > `changePlan`
    -   `orders` > `subscriptions` > `orderActions` > `type`
-   In the 200 response body of the "Retrieve an order" operation, updated the description of each of the following fields for better clarity:
    -   `order` > `subscriptions` > `orderActions` > `changePlan`
    -   `order` > `subscriptions` > `orderActions` > `type`
-   In the 200 response body of each of the following operations for Object Query, updated the description of the `type` field of the Order Action object for better clarity:
    -   Retrieve an order
    -   List orders
    -   Retrieve an order action
    -   List order actions
-   In the description of the "Retry failed payment schedule items" operation, removed the Early Adopter note because this feature is now generally available.

##

March 7, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Object Queries" section, made the following updates:
    -   Added the missing `fields[]` query parameter to all operations.
    -   Updated the description of this section to remove duplicate information on the Developer Center.
-   In the description of the "Apply a credit memo" operation, corrected the value of the proration rule.
-   In the description of the "Unapply a credit memo" operation, removed the proration rule information because the information is no longer applicable.
-   In the request body of each of the following operations, updated the description of the `callout` > `calloutBaseurl` field for better clarity：
    -   Create a notification definition
    -   Update a notification definition
-   In the request body of the "Create or update callout templates" operation, updated the description of the `calloutTemplates` > `calloutBaseurl` field for better clarity.
-   In the request body of each of the following operations, updated the description of the `calloutBaseurl` field for better clarity：
    -   Create a callout template
    -   Update a callout template

##

February 28, 2025

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   For the "Delete a workflow version" operation, corrected the endpoint from `/versions/{version_id}` to `/workflows/versions/{version_id}` .
-   Updated the description of the "Object Queries" section to clarify the pagination limitation of the Object Query API.
-   For each of the following Object Query operations, corrected the description of the `key` path parameter:
    -   Retrieve a product
    -   Retrieve a product rate plan
    -   Retrieve a product rate plan charge
    -   Retrieve a product rate plan charge tier
    -   Retrieve a rate plan
    -   Retrieve a rate plan charge
    -   Retrieve a rate plan charge tier
-   Updated the example in the description of the "SCIM" section for better clarity.
-   Updated the description for each of the 200 and 401 responses for a number of operations to provide better explanation.

The following change is applicable to the Older API Reference:

-   Updated the description of the "Reporting" section for better clarity.

##

February 21, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.0.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases)

####

API updates for renaming endpoints in the "Payments" section

The following items are the API updates for the renaming of endpoints in the "Payments" section for better consistency and usability. Note that if you have integrated with the previous endpoints, you do not need to make any update for these changes because the previous endpoints are still supported for backward compatibility.

-   Renamed `/v1/payments/{paymentKey}/parts/{partid}/itemparts` to `/v1/payments/{paymentKey}/parts/{partid}/item-parts`
-   Renamed `/v1/payments/{paymentKey}/parts/{partid}/itemparts/{itempartid}` to `/v1/payments/{paymentKey}/parts/{partid}/item-parts/{itempartid}`
-   Renamed `/v1/refunds/{refundKey}/parts/{refundpartid}/itemparts` to `/v1/refunds/{refundKey}/parts/{refundpartid}/item-parts`
-   Renamed `/v1/refunds/{refundKey}/parts/{refundpartid}/itemparts/{itempartid}` to `/v1/refunds/{refundKey}/parts/{refundpartid}/item-parts/{itempartid}`

####

Other API updates

-   [Payments](https://developer.zuora.com/v1-api-reference/api/tag/Payments/) - In the request body of the "Refund a payment with auto-unapplying" operation, added the `writeOffOptions` > `taxAutoCalculation` field.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - In the request body of the "Write off a debit memo" operation, added the `taxAutoCalculation` field.
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the request body of the "Write off an invoice" operation, added the `taxAutoCalculation` field.
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Made the following updates:

    -   Added the `createJournalEntriesForPendingPayments` parameter to the `AccountingRules` setting.
    -   Added the `segmentConstantValues` parameter to each of the following settings:
        -   `ChartOfAccounts`
        -   `ChartOfAccountsItem`
    -   Added the following parameters to the `GLSegments` setting:
        -   `defaultBlankSegmentValue`
        -   `segmentDelimiterValue`

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "Orders" section for better clarity.
-   In the response body of the "Retrieve an account" operation, added the missing `basicInfo` > `customerServiceRepName` field.
-   In the response body of the "Retrieve an order" operation, added the missing `order` > `existingAccountDetails` > `basicInfo` > `customerServiceRepName` field.
-   In the response body of each of the following operations, added the missing `orders` > `existingAccountDetails` > `basicInfo` > `customerServiceRepName` field:
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice number
    -   List pending orders by subscription number
-   For the description of each of the following operations, removed the Early Adopter note for the Standalone Orders feature because this feature is now generally available:
    -   Create an order
    -   Preview an order
-   In the response body of each of the following operations, added the missing `Scheduled` enum value to the `status` field:
    -   Create an order
    -   Update an order
-   In the 200 response body of the "Update a subscription" operation, updated the description of each of the following fields for better clarity:
    -   `chargeMetrics`
    -   `creditMemo`
    -   `creditMemoId`
    -   `invoice`
    -   `invoiceId`
    -   `invoiceItems`
    -   `targetDate`
    -   `taxAmount`
-   In the source YAML file, added the global security scheme in compliance with the OpenAPI specification.
-   In the request body of the "Create a billing preview run" operation, updated the description of the `storageOption` field for better clarity.

##

February 14, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.0.1](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases)

####

API updates for System Health enhancements

-   [Tax Health](https://developer.zuora.com/v1-api-reference/api/tag/Tax-Health/) - Added a "Tax Health" section that contains the following operation:
    -   List tax system health records
-   [API Health](https://developer.zuora.com/v1-api-reference/api/tag/API-Health/) - Added the "List API usage detail records" operation.
-   [Electronic Payments Health](https://developer.zuora.com/v1-api-reference/api/tag/Electronic-Payments-Health/) - Added the "List payment system health records" operation.

####

Other API updates

-   [Payments](https://developer.zuora.com/v1-api-reference/api/tag/Payments/) - For the "Refund a payment with auto-unapplying" operation, made the following updates:
    -   In the description of this operation, added a note to clarify the availability permission required to use this operation.
    -   In the request body, updated the description of the `debitMemos` > `debitMemoId` and `invoices` > `invoiceId` fields.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, corrected the maximum length of the `workEmail` field to 80 from 74:
    -   Create a contact
    -   Update a contact
-   In the response body of each of the following operations, corrected the maximum length of the `workEmail` field of the Contact object to 80 from 74:
    -   Create a contact
    -   Update a contact
    -   Retrieve a contact
    -   Object Query: Retrieve a contact
    -   Object Query: List contacts
-   In the request body of the "Create a payment" operation, corrected the following fields from required to optional:
    -   `debitMemos` > `amount`
    -   `invoices` > `amount`
-   For each of the following Object Query operations, added the missing enum values to the `expand[]` query parameter:
    -   List invoice items
    -   Retrieve an invoice item
    -   List payment schedule items
    -   Retrieve a payment schedule item
    -   List payments
    -   Retrieve a payment
    -   List product rate plan charges
    -   Retrieve a product rate plan charge
    -   List product rate plans
    -   Retrieve a product rate plan
    -   List products
    -   Retrieve a product
    -   List rate plan charges
    -   Retrieve a rate plan charge
    -   List rate plans
    -   Retrieve a rate plan
    -   List subscriptions
    -   Retrieve a subscription
-   Updated the description of the "List all settings" operation to include the get accounting rules reference.
-   Updated the request and response examples of a number of operations across different sections to provide better-structured code samples.

##

February 7, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases)

####

API updates for Data Loader feature

-   [Bulk Jobs](https://developer.zuora.com/v1-api-reference/api/tag/Bulk-Jobs/) - Added a "Bulk Jobs" section that contains the following operations:
    -   Create a bulk job
    -   Submit a bulk job for processing
    -   Retrieve the summary of a bulk job
    -   List download links for a bulk job
    -   List job summaries for bulk jobs
    -   List mappings for a bulk job
    -   Abort a bulk job
    -   Cancel a bulk job

####

Other API updates

-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates:
    -   In the response body of each of the following operations, updated the description of the `einvoiceStatus` field and added the `ConditionalSuccess` enum value:
        -   Create a standalone invoice
        -   Retrieve an invoice
    -   In the response body of the "Create standalone invoices" operation, updated the description of the `invoices` > `einvoiceStatus` field and added the `ConditionalSuccess` enum value.
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   In the response body of each of the following operations, updated the description of the `memos` > `einvoiceStatus` field and added the `ConditionalSuccess` enum value:
        -   Create credit memos
        -   Update credit memos
    -   In the response body of each of the following operations, updated the description of the `einvoiceStatus` field and added the `ConditionalSuccess` enum value:
        -   Create a credit memo from a charge
        -   Create a credit memo from an invoice
        -   Retrieve a credit memo
        -   Update a credit memo
        -   Apply a credit memo
        -   Unapply a credit memo
        -   Cancel a credit memo
        -   Post a credit memo
        -   Unpost a credit memo
    -   In the response body of the "List credit memos" operation, updated the description of the `creditmemos` > `einvoiceStatus` field and added the `ConditionalSuccess` enum value.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates:
-   In the response body of each of the following operations, updated the description of the `memos` > `einvoiceStatus` field and added the `ConditionalSuccess` enum value:
    -   Create debit memos
    -   Update debit memos
-   In the response body of each of the following operations, updated the description of the `einvoiceStatus` field and added the `ConditionalSuccess` enum value:
    -   Create a debit memo from a charge
    -   Create a debit memo from an invoice
    -   Retrieve a debit memo
    -   Update a debit memo
    -   Apply a debit memo
    -   Unapply a debit memo
    -   Cancel a debit memo
    -   Post a debit memo
    -   Unpost a debit memo
-   In the response body of the "List debit memos" operation, updated the description of the `debitmemos` > `einvoiceStatus` field and added the `ConditionalSuccess` enum value.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - In the request body of the "Create an Apple Pay payment method" operation, updated the description of each of the following fields for the newly introduced support for Worldpay 1.4 payment gateway integrations:
    -   `mitConsentAgreementSrc`
    -   `mitProfileAction`
    -   `mitProfileType`
-   [Accounting Periods](https://developer.zuora.com/v1-api-reference/api/tag/Accounting-Periods/) - In the "Retrieve an accounting period" operation, added the `fileIds` > `accountsReceivableDebitMemoAgingDetailExportFileId` field to the response body and updated the corresponding sample code.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   For the 200 response of the "Create an order" operation, removed the incorrectly documented `subscriptions` > `OrderActions` field, and updated the corresponding response sample.
-   In the request body of each of the following operations, updated the description of the `subscriptions` > `orderActions` > `updateProduct` > `specificUpdateDate` field for better clarity:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously
-   In the response body of each of the following operations, updated the description of the `orders` > `subscriptions` > `orderActions` > `updateProduct` > `specificUpdateDate` field for better clarity:
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number
-   In the response body of the "Retrieve an order" operation, updated the description of the `order` > `subscriptions` > `orderActions` > `updateProduct` > `specificUpdateDate` field for better clarity.
-   In the 200 response body of each of the following Object Query operations, removed the incorrectly documented `taxationItems` nested field from the `invoiceItems` field:
    -   List invoices
    -   Retrieve an invoice

##

January 24, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases)

####

API updates for renaming endpoints in the "Billing Documents" section

The following items are the API updates for the renaming of endpoints in the "Billing Documents" section for better consistency and usability. Note that if you have integrated with the previous endpoints, you do not need to make any update for these changes because the previous endpoints are still supported for backward compatibility.

-   Renamed the following terms in all related endpoints:
    -   From `creditmemos` to `credit-memos`
    -   From `debitmemos` to `debit-memos`
    -   From `taxationitems` to `taxation-items`
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   Updated the endpoint of the "Generate an e-invoice file for a credit memo" operation from `/v1/creditmemos/{creditMemoKey}/einvoice/generate` to `/v1/credit-memos/{creditMemoKey}/e-invoice/generate` .
    -   Updated the endpoint of the "Refund a credit memo" operation from `/v1/creditmemos/{creditMemoKey}/refunds` to `/v1/credit-memos/{creditMemoKey}/refund` .
    -   Updated the endpoint of the "Create a credit memo from an invoice" operation from `/v1/invoices/{invoiceKey}/creditmemos` to `/v1/credit-memos/invoice/{invoiceKey}` .
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates:
    -   Updated the endpoint of the "Generate an e-invoice file for a debit memo" operation from `/v1/debitmemos/{debitMemoKey}/einvoice/generate` to `/v1/debit-memos/{debitMemoKey}/e-invoice/generate` .
    -   Updated the endpoint of the "Create a debit memo from an invoice" operation from `/v1/invoices/{invoiceKey}/debitmemos` to `/v1/debit-memos/invoice/{invoiceKey}` .

####

Other API updates

-   [E-Invoicing](https://developer.zuora.com/v1-api-reference/api/tag/E-Invoicing/) - Made the following updates:
    -   In the request and reponse body of each of the following operations:

        -   Create an e-invoicing business region
        -   Update an e-invoicing business region

        Added the following fields:

        -   `invoiceFilters`
        -   `creditMemoFilters`
        -   `debitMemoFilters`
    -   In the reponse body of each of the following operations:

        -   Retrieve an e-invoicing business region
        -   List e-invoicing business regions

        Added the following fields:

        -   `invoiceFilters`
        -   `creditMemoFilters`
        -   `debitMemoFilters`
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   In each of the following Object Query operations, added the `subscriptionowner` enum value to the `expand[]` query parameter, and the `subscriptionowner` expanded object to the response:
        -   List credit memo items
        -   Retrieve a credit memo item
        -   List debit memo items
        -   Retrieve a debit memo item
        -   List invoice items
        -   Retrieve an invoice item
    -   In each of the following Object Query operations, added the `credittaxationitems` enum value to the `expand[]` query parameter, and the `creditTaxationItems` expanded object to the response:
        -   List credit memo items
        -   Retrieve a credit memo item
    -   In each of the following Object Query operations, added the `debittaxationitems` enum value to the `expand[]` query parameter, and the `debitTaxationItems` expanded object to the response:
        -   List debit memo items
        -   Retrieve a debit memo item
-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Made the following updates:
    -   In the request body of each of the following operations, added the `certificate` field:
        -   Create a callout template
        -   Update a callout template
    -   In the request body of the "Create or update callout templates" operation, added the `calloutTemplates` > `certificate` field.
    -   In the 200 response body of each of the following operations, added the `certificate` field:
        -   Create a callout template
        -   Retrieve a callout template
        -   Update a callout template
    -   In the 200 response body of the "List callout templates" operation, added the `data` > `certificate` field.
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Added the `invoicePastTermEndWhenChargeEndDateOnOrBeforeTermEndDate` parameter to the `BillingRules` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).

-   We have reverted API documentation updates about the "Create an Apple Pay payment method" operation published on January 17, 2025. These changes will be delivered in an upcoming release.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Create a payment method" operation, for the `Bacs` payment method type, removed the incorrect `identityNumber` field from the request sample.
-   In the request body of the "Export bulk PDF files" operation, updated the description of the `skippedDocuments` field in the 200 response example.
-   In the request body of each of the following operations, updated the description of the `existingAccountNumber` field for better clarity:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously
-   In the request body of each of the "Create an order" and "Create an order asynchronously" operations, updated the description of the `newAccount` field for better clarity.
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Updated the description of each of the following fields for better clarity:

    -   `orders` > `existingAccountNumber`
    -   `orders` > `existingAccountDetails`
-   In the response body of the "Retrieve an order" operation, updated the description of each of the following fields for better clarity:
    -   `order` > `existingAccountNumber`
    -   `order` > `existingAccountDetails`
-   For the "Create a Payment Method Updater batch asynchronously" operation, corrected the 200 response schema and sample.
-   Removed the Subscribe and Amend deprecation note from the "Subscriptions" section.
-   In the description of each of the following operations, removed the Subscribe and Amend deprecation note:
    -   Preview a subscription
    -   Create a subscription
    -   Delete a subscription by number
    -   Update subscription custom fields of a subscription version

The following changes are applicable to the Older API Reference:

-   In the description of the `Subscribe` action, removed the Subscribe and Amend deprecation note.
-   Removed the Subscribe and Amend deprecation note from the "Subscription Product Features" section.
-   In the description of the `CRUD: Retrieve a subscription product feature` operation, removed the Subscribe and Amend deprecation note.
-   Removed the Subscribe and Amend deprecation note from the "Subscriptions" section.
-   In the description of each of the following operations, removed the Subscribe and Amend deprecation note:
    -   CRUD: Retrieve a subscription
    -   CRUD: Update a subscription
    -   CRUD: Delete a subscription
-   Removed the Subscribe and Amend deprecation note from the "Amendments" section.
-   In the description of each of the following operations, removed the Subscribe and Amend deprecation note:
    -   Retrieve an amendment
    -   Retrieve the last amendment of a subscription
    -   CRUD: Retrieve an amendment
    -   CRUD: Update an amendment
    -   CRUD: Delete an amendment

##

January 17, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2025.Q1.0.0](https://knowledgecenter.zuora.com/Releases/2025_releases/Zuora_2025.Q1_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases)

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   Added the "Delete an order asynchronously" operation.
    -   In the request body of each of the "Create an order" and "Create an order asynchronously" operations, added the `chargeTypeToExclude` nested field to the `processingOptions` > `billingOptions` field.
    -   In the request body of each of the "Preview an order" and "Preview an order asynchronously" operations, added the `chargeTypeToExclude` nested field to the `previewOptions` field.
    -   In the request body of each of the following operations, added the `invoiceOwnerAccountNumber` nested field to the `subscriptions` > `orderActions` > `createSubscription` field:
        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously
    -   In the response body of each of the following operations, added the `invoiceOwnerAccountNumber` nested field to the `orders` > `subscriptions` > `orderActions` > `createSubscription` field:
        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number
    -   In the response body of the "Retrieve an order" operation, added the `invoiceOwnerAccountNumber` nested field to the `order` > `subscriptions` > `orderActions` > `createSubscription` field.
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the `originalListPrice` nested field to the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringTiered` > `tiers`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers`
        -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringVolume` > `tiers`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the `originalListPrice` nested field to the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringTiered` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers`
        -   `orders` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringVolume` > `tiers`
    -   In the response body of the "Retrieve an order" operation, added the `originalListPrice` nested field to the following fields:
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringTiered` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `tiers`
        -   `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringVolume` > `tiers`
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Made the following updates:

        -   Added the `taxable` nested field to the following fields:
            -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides`
            -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides`
        -   Updated the description of each of the following fields:
            -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
            -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
            -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
            -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Made the following updates:

        -   Added the `taxable` nested field to the following fields:
            -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides`
            -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides`
        -   Updated the description of each of the following fields:
            -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
            -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
            -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
            -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
    -   In the response body of the "Retrieve an order" operation, made the following updates:
        -   Added the `taxable` nested field to the following fields:
            -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides`
            -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides`
        -   Updated the description of the following fields:
            -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
            -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
            -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
            -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
    -   Updated the description of the "Preview an order" operation to clarify that you can skip the accounting period validation.
-   [Bill Run](https://developer.zuora.com/v1-api-reference/api/tag/Bill-Run/) - Made the following updates:
    -   Updated the description of the "Create a bill run" operation.
    -   In the request body and response body of the "Create a bill run" operation, made the following updates:
        -   Added the `objectType` and `condition` nested fields to the `billRunFilters` field.
        -   Added `FilterCondition` enum value to the `billRunFilters` > `filterType` field.
        -   Updated the description of each of the `billRunFilters` field and its nested field `filterType` .
    -   In the response body of each of the following operations:

        -   Delete a bill run
        -   Retrieve a bill run
        -   Cancel a bill run
        -   Post a bill run

        Made the following updates:

        -   Added the `objectType` and `condition` nested fields to the `billRunFilters` field.
        -   Added `FilterCondition` enum value to the `billRunFilters` > `filterType` field.
        -   Updated the description of each of the `billRunFilters` field and its nested field `filterType` .
-   [Operations](https://developer.zuora.com/v1-api-reference/api/tag/Operations/) - Made the following updates to the "Export bulk PDF files" operation:
    -   In the request body, added the `ignoreArchivedFiles` field.
    -   Updated the 200 response example.
    -   Added a `skippedDocuments` field in the 200 response example.
-   [Payment Gateways](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Gateways/) - Added the "Trigger a pre-debit notification" operation.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - Made the following updates:
    -   In the request body of the "Create a payment method" operation, for the `ACH` payment method type, updated the description of each of the following fields for ACH tokenization support:
        -   `bankAccountNumber`
        -   `bankAccountMaskNumber`
        -   `tokens` and the nested fields
    -   Updated the description of the "Create a payment session" operation for newly introduced support for Alipay transactions.
    -   In the request body of the "Create a payment session" operation, added the `gatewayOptions` field.
    -   In the request body of the "Create an Apple Pay payment method" operation, updated the description of each of the following fields for newly introduced support on Worldpay 1.4 payment gateway integrations:
        -   `mitConsentAgreementSrc`
        -   `mitProfileAction`
        -   `mitProfileType`
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Added the `rateSetName` parameter to the `FxCurrency` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, updated the nested field name from `paymentOptions` to `paymentProfile` in the `subscriptions` > `orderActions` > `createSubscription` field:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order

    Added the following missing nested field:

    -   `subscriptions` > `orderActions` > `ownerTransfer` > `paymentProfile`
    -   `subscriptions` > `orderActions` > `termsAndConditions` > `paymentProfile`
-   In the response body of the "Retrieve the status and response of a job" operation, introduced a filtering mechanism for the `jobType` field, to show only the relevant fields for the selected job type.
-   In the request body of the "Write off a debit memo" operation, replaced the wrongly added `recognizedRevenueAccountingCode` field with the correct `nonRevenueWriteOffAccountingCode` field.
-   Updated the description of the "Object Queries" section for better clarity.

##

January 9, 2025

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.3](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases)

-   [Rate Plans](https://developer.zuora.com/v1-api-reference/api/tag/Rate-Plans/) - Updated the description of the "Retrieve a rate plan" operation to clarify that the returned objects may be different since amendment, order, and order action are generated asynchronously.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Sign up" operation, updated the description of the `accountData` > `currency` field for better clarity.

##

December 20, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "CRUD: Update a product rate plan charge" operation, updated the description of the `DeferredRevenueAccount` field for better clarity.
-   In the request body of the "Create an account" operation, updated the description of the `paymentTerm` field for better clarity.
-   In each of the following operations, updated the 200 response example:
    -   Retrieve the PDF file generation status of invoices
    -   Retrieve the PDF file generation status of credit memos
    -   Retrieve the PDF file generation status of debit memos

The following change is applicable to the Older API Reference:

-   In the request body of the "CRUD: Create a payment method" operation, updated the description of the `IBAN` field for better clarity.

##

December 13, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of a hotfix released to sandbox on Dec 12, 2024. For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Rate Plans](https://developer.zuora.com/v1-api-reference/api/tag/Rate-Plans/) - In the response body of the "Retrieve a rate plan" operation, added the `customFields` nested field to the following fields:
    -   `order` > `orderActions`
    -   `amendment`
-   [Custom Payment Method Types](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Payment-Method-Types/) - In the request body of each of the following operations, added the `isSupportAsyncPayment` field:
    -   Create a draft custom payment method type
    -   Update a custom payment method type

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Object Queries" section, made the following updates:
    -   Added the following missing operations:
        -   List daily consumption summaries
        -   Retrieve a daily consumption summary
        -   List rate plan charge tiers
        -   Retrieve a rate plan charge tier
    -   Updated the description of the `filter[]` query parameter for each applicable operation to reflect that the filter is case-insensitive, and querying on indexed custom fields is supported.
    -   Added the custom field (additional property) to the response body of each applicable object.
-   In the response body of the "Retrieve a product rate plan charge" operation, updated the description of the `pricingSummary` field for better clarity.
-   In the response body of the "List all product rate plans of a product" operation, updated the description of the `productRatePlans` > `productRatePlanCharges` > `pricingSummary` field for better clarity.
-   In the reqeust body of each of the "Create an order" and "Create an order asynchronously" operations, updated the description of the `newAccount` > `paymentTerm` field for better clarity.
-   In the request body of the "Email billing documents generated from a bill run" operation, updated the description of the `resend` field for better clarity.

##

December 6, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.2](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for deprecation of `overageRatedQuantity` and `overageRatedAmount` fields of Validity Period Summary object

-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   In the 200 response body of the "List prepaid balance funds" operation, added a deprecation note for each of the following fields:
        -   `data` > `vpSummary` > `overageRatedAmount`
        -   `data` > `vpSummary` > `overageRatedQuantity`
    -   In the 200 response body of the "List validity period summaries" operation, added a deprecation note for each of the following fields:
        -   `data` > `overageRatedAmount`
        -   `data` > `overageRatedQuantity`
    -   In the 200 response body of the "Retrieve a prepaid balance fund" operation, added a deprecation note for each of the following fields:
        -   `vpSummary` > `overageRatedAmount`
        -   `vpSummary` > `overageRatedQuantity`
    -   In the 200 response body of the "Retrieve a validity period summary" operation, added a deprecation note for each of the following fields:
        -   `overageRatedAmount`
        -   `overageRatedQuantity`

####

Other API updates

-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - In the request body of the "Create a payment session" operation, updated the description of the `accountId` field for a system behavior change.
-   [Custom Object Definitions](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Object-Definitions/) - Updated the description of the "Update a custom object definition" operation to add a note about the bulk deletion of custom fields being temporarily unavailable.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Create debit memos" operation, updated the description of each of the following fields for better clarity:
    -   `memos` > `billToContactId`
    -   `memos` > `soldToContactId`
-   In the request body of the "Create a debit memo from an invoice" operation, updated the description of each of the following fields for better clarity:
    -   `billToContactId`
    -   `soldToContactId`
-   In the 200 response body of the "List all files of an invoice" operation, updated the description of the `invoiceFiles` > `pdfFileUrl` field for better clarity.
-   In the 200 response body of the "List all files of a credit memo" operation, updated the description of the `creditMemoFiles` > `pdfFileUrl` field for better clarity.
-   In the 200 response body of the "List all files of a debit memo" operation, updated the description of the `debitMemoFiles` > `pdfFileUrl` field for better clarity.
-   In the "Create an Apple Pay payment method" operation, made the following updates for better clarity:
    -   In the request body, updated the description of each of the following fields:
        -   `cardHolderInfo`
        -   `cardHolderInfo` > `cardHolderName`
        -   `paymentToken`
    -   Updated the request example.
-   In the source YAML file, added the `CreateApplePayPaymentMethodCardholderInfo` schema, and updated the schema reference of the `cardHolderInfo` field in the request body of the "Create an Apple Pay payment method" operation to this schema.
-   In each of the following Object Query operations, added the missing custom field for the Order object:
    -   List order actions
    -   Retrieve an order action
    -   List orders
    -   Retrieve an order
-   In each of the "List orders" and "Retrieve an order" Object Query operations, added the `{indexedcustomfield}` enum value to the `filter[]` query parameter.
-   In the response body of each of the "List invoices" and "Retrieve an invoice" Object Query operations, updated the description of each of the following fields to avoid confusion:
    -   `account` > `billTo`
    -   `account` > `soldTo`
    -   `account` > `defaultPaymentMethod`
    -   `account` > `subscriptions`
    -   `account` > `payments`
    -   `account` > `refunds`
    -   `account` > `creditMemos`
    -   `account` > `debitMemos`
    -   `account` > `invoices`
    -   `account` > `usages`
    -   `account` > `paymentMethods`
    -   `invoiceItems` > `invoice`
    -   `invoiceItems` > `subscription`
    -   `invoiceItems` > `taxationItems`
    -   `invoiceItems` > `ratePlanCharge`
    -   `invoiceItems` > `orderLineItem`
-   In the response body of each of the "List invoice items" and "Retrieve an invoice item" Object Query operations, updated the description of each of the following fields to avoid confusion:
    -   `invoice` > `account`
    -   `invoice` > `billToContact`
    -   `invoice` > `invoiceItems`
    -   `subscription` > `account`
    -   `subscription` > `invoiceOwner`
    -   `subscription` > `billToContact`
    -   `subscription` > `invoiceItems`
    -   `subscription` > `ratePlans`
    -   `ratePlanCharge` > `ratePlan`
    -   `ratePlanCharge` > `productRatePlanCharge`
    -   `orderLineItem` > `invoiceItems`

##

November 22, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the API reference to include API version information for better clarify.
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Updated the availability note of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`
-   In the 200 response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Updated the availability note of each of the following fields for better clarity:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`
-   In the 200 response body of the "Retrieve an order" operation, updated the availability note of each of the following fields for better clarity:
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`
-   In the request body of each of the "Update an order line item" and "Update order line items" operations, updated the availability note of each of the following fields on the Order Line Item object for better clarity:
    -   `isAllocationEligible`
    -   `isUnbilled`
-   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, updated the availability note of each of the following fields for better clarity:
    -   `IsAllocationEligible`
    -   `IsUnbilled`
-   In the request body of each of the "CRUD: Create a product rate plan charge" and "CRUD: Update a product rate plan charge" operations, updated the availability note of each of the following fields for better clarity:
    -   `IsAllocationEligible`
    -   `IsUnbilled`
-   In the 200 response body of the "Retrieve a product rate plan charge" operation, updated the availability note of each of the following fields for better clarity:
    -   `isAllocationEligible`
    -   `isUnbilled`
-   In the 200 response body of each of the "Retrieve a product charge definition" and "List product charge definitions" operations, updated the availability note of each of the following fields on the Product Charge Definition object for better clarity:
    -   `isAllocationEligible`
    -   `isUnbilled`
-   In the request body of the "Create a subscription" operation, updated the availability note of each of the following fields for better clarity:
    -   `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
    -   `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
-   In the request body of the "Update a subscription" operation, updated the availability note of each of the following fields for better clarity:
    -   `add` > `chargeOverrides` > `isAllocationEligible`
    -   `add` > `chargeOverrides` > `isUnbilled`
    -   `change` > `chargeOverrides` > `isAllocationEligible`
    -   `change` > `chargeOverrides` > `isUnbilled`
-   In the 200 response body of each of the "Retrieve a subscription by key" and "Retrieve a subscription by key and version" operations, updated the availability note of each of the following fields for better clarity:
    -   `ratePlans` > `ratePlanCharges` > `isAllocationEligible`
    -   `ratePlans` > `ratePlanCharges` > `isUnbilled`
-   In the 200 response body of the "List subscriptions by account key" operation, updated the availability note of each of the following fields for better clarity:
    -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `isAllocationEligible`
    -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `isUnbilled`
-   In the request body of the "Create an e-invoicing business region" operation, updated description of each of the following fields for better clarity:
    -   `invoiceEnabled`
    -   `creditMemoEnabled`
    -   `debitMemoEnabled`
-   In the request body of the "Update an e-invoicing business region" operation, added the following missing fields:
    -   `invoiceEnabled`
    -   `creditMemoEnabled`
    -   `debitMemoEnabled`

##

November 15, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Custom Exchange Rates](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Exchange-Rates/) - In the "List custom exchange rates by currency" operation, added the `rateSetName` field to the response body and updated the corresponding sample code.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of the "Retrieve a rate plan" operation, removed the wrongly documented `customFields` nested field from the `order` > `orderActions` field.
-   In the request body of the "Create an account" operation, updated the description of each of the following fields for better clarity:
    -   `communicationProfileId`
    -   `profileNumber`
-   Updated the description of the "Update an invoice" operation for better clarity.
-   In the request body of the "Create a payment method" operation, for the `ACH` payment method type, corrected the `bankName` field to be required.
-   For the "Object Queries" section, updated the description to add the missing limitations.
-   In each of the "Retrieve an order" and "List orders" Object Query operations, made the following updates for better clarity:
    -   Updated the description of the `expand[]` query parameter.
    -   Updated the description of the `orderAction` > `subscription` field of the Order object.

##

November 8, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.0](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations, added the `paymentOptions` nested field to the `subscriptions` > `orderActions` > `createSubscription` field:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   In the response of each operation where the endpoint contains `/v1` , added the following header parameters to provide visibility to the concurrency limit:
    -   `Concurrency-Limit-Type`
    -   `Concurrency-Limit-Limit`
    -   `Concurrency-Limit-Remaining`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In each of the "CRUD: Create a product plan" and "CRUD: Update a product rate plan" operations, made the following updates:
    -   Added the following missing fields to the request body:
        -   `ExternalIdSourceSystem`
        -   `ExternalRateplanIds`
    -   Updated the request sample code.
-   In the request body of the "Cancel a delivery adjustment" operation, added the missing request body.
-   In the request body of the "Create a delivery adjustment" operation, added the missing `creditMemoCustomFields` field.
-   In the response body of the "Preview an order" operation, upated the description of the `previewResult` > `invoices` > `invoiceItems` > `productRatePlanChargeId` field for better clarity.
-   In the request body of each of the "Create an order" and "Create an order asynchronously" operations, updated the description of the `processingOptions` > `billingOptions` > `targetDate` field for better clarity.
-   In the request body of the "Update an order line item" operation, updated the description of the `billTargetDate` field for better clarity.
-   In the request body of the "Update order line items" operation, updated the description of the `orderLineItems` > `billTargetDate` field for better clarity.
-   In the response body of the "List orders" Object Query operation, update the description of the `data` > `orderActions` > `subscription` for better clarity and removed the incorrectly documented `data` > `orderActions` > `order` field.
-   In the response body of the "Retrieve an order" Object Query operation, update the description of the `orderActions` > `subscription` for better clarity and removed the incorrectly documented `orderActions` > `order` field.
-   Updated the description of the "Retrieve a payment method" operation for better clarity.
-   In the description of the "List all settings" operation, added the Avalara Tax Engine section.

##

November 1, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.0](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   Added the following endpoints for the APAC data center to the servers list:
    -   [https://rest.test.ap.zuora.com](https://rest.test.ap.zuora.com)
    -   [https://rest.ap.zuora.com](https://rest.ap.zuora.com)
-   We have reverted the API documentation updates in the Custom Object Definitions section published on October 25, 2024. These changes will be delivered in an upcoming release.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "CRUD: Create a product rate plan charge" operation, updated the description of the `ChargeModel` field to add the minimal required WSDL version information for the following charge models:
    -   `Delivery Pricing`
    -   `MultiAttributePricing`
    -   `PreratedPerUnit`
    -   `PreratedPricing`
    -   `HighWatermarkVolumePricing`
    -   `HighWatermarkTieredPricing`
-   In the request body of the "Create an Apple Pay payment method" operation, corrected the description of each of the following fields:
    -   `paymentGateway`
    -   `processPayment`
-   For the "List subscriptions metrics by subscription numbers" operation, made the following updates:
    -   Renamed this operation to "List subscription metrics by subscription numbers".
    -   Added the missing `500` response, and corrected the `4XX` responses.

##

October 25, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.0](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Omnichannel Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Omnichannel-Subscriptions/) - Added the "Omnichannel Subscriptions" section that contains the following operations:
    -   Create an omnichannel subscription
    -   Retrieve an omnichannel subscription
    -   Delete an omnichannel subscription
-   [Payment Schedules](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Schedules/) - Made the following updates:
    -   Added the following operations:
        -   Delete a payment schedule item
        -   Delete a payment schedule
    -   In the "Create a payment schedule" operation, made the following updates:
        -   Updated the description of the operation to add the multi-currency characeteristics.
        -   In the request body, updated the description of each of the `currency` and `items` > `currency` fields for multi-currency characeteristics.
    -   In the "Update a payment schedule" and "Update a payment schedule item" operation, made the following updates:
        -   Updated the description of each of the operations to add the multi-currency characeteristics.
        -   In the request body of each of the operations, updated the description of the `currency` for multi-currency characeteristics.
    -   In the "Add payment schedule items to a custom payment schedule" operation, made the following updates:
        -   Updated the description of the operation to add the multi-currency characeteristics.
        -   In the request body, updated the description of the `items` > `currency` field for multi-currency characeteristics.
-   [Custom Object Definitions](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Object-Definitions/) - Made the following updates:
    -   In the request body of the "Create custom object definitions" operation, added the following fields:
        -   `definitions` > *`property name*`* > `masked`
        -   `definitions` > *`property name*`* > `properties` > *`property name*`* > `maskedFieldLength`
    -   In the 200 response body of each of the following operations:

        -   Create custom object definitions
        -   List custom object definitions

        Added the following fields:

        -   `definitions` > *`property name*`* > `schema` > `masked`
        -   `definitions` > *`property name*`* > `schema` > `properties` > *`property name*`* > `maskedFieldLength`
    -   In the request body and 200 response body of the "Update a custom object definition" operation, added the following fields:
        -   `actions` > `field` > `masked`
        -   `actions` > `field` > `definition` > `maskedFieldLength`
    -   In the 200 response body of the "Retrieve a custom object definition" operation, added the following fields:
        -   `schema` > `masked`
        -   `schema` > `properties` > *`property name*`* > `maskedFieldLength`
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Added the `stackedDiscountClassApplyRule` parameter to the `BillingRules` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of each of the following sections for better clarity:
    -   Configuration Templates
    -   Metadata
-   In the 200 response body of the "Settle a payment" operation, added the following missing fields:
    -   `accountNumber`
    -   `paymentGatewayNumber`
-   In the 200 response body of the "Create a summary statement run" operation, added the following missing fields:
    -   `statementRunNumber`
    -   `updatedById`
    -   `updatedDate`

##

October 18, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.0](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates:
    -   In the request body of the "Reverse an invoice" operation, added the following fields:
        -   `comment`
        -   `reasonCode`
    -   In the request body of each of the "Update an invoice" and "Update invoices" operations, added the following fields:
        -   `invoices` > `invoiceItems` > `bookingReference`
        -   `invoices` > `invoiceItems` > `delete`
        -   `invoices` > `invoiceItems` > `productRatePlanChargeId`
    -   In the request body of each of the "Update an invoice" and "Update invoices" operations, updated the description of the `invoices` > `invoiceItems` > `id` field for better clarity.
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   In the request body of the "Reverse a credit memo" operation, added the following fields:
        -   `comment`
        -   `reasonCode`
    -   In the request body of each of the "Update a credit memo" and "Update credit memos" operations, added the following fields:
        -   `memos` > `items` > `delete`
        -   `memos` > `items` > `productRatePlanChargeId`
    -   In the request body of each of the "Update a credit memo" and "Update credit memos" operations, changed the `memos` > `items` > `id` field from required to optional and updated the field description for better clarity.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates:
    -   In the request body of each of the "Update a debit memo" and "Update debit memos" operations, added the following fields:
        -   `memos` > `items` > `delete`
        -   `memos` > `items` > `productRatePlanChargeId`
    -   In the request body of each of the "Update a debit memo" and "Update debit memos" operations, changed the `memos` > `items` > `id` field from required to optional and updated the field description for better clarity.
    -   In the request body of the "Create a debit memo from an invoice" operation, added the following fields:
        -   `billToContactId`
        -   `soldToContactId`
        -   `soldToSameAsBillTo`
    -   In the 200 response body of the "Create a debit memo from an invoice" operation, added the following fields:
        -   `soldToContactId`
        -   `soldToContactSnapshotId`
-   [Summary Statements](https://developer.zuora.com/v1-api-reference/api/tag/Summary-Statements/) - Added a "Summary Statements" section that contains the following operation:
    -   Create a summary statement run
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Added the following operations:
    -   List summary statement runs
    -   Retrieve a summary statement run
    -   List summary statements
    -   Retrieve a summary statement
-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create a notification definition
        -   Update a notification definition

        Made the following updates:

        -   Added the following fields:
            -   `calloutTemplateIds`
            -   `communicationProfileIds`
        -   Updated the description of each of the following fields:
            -   `callout`
            -   `communicationProfileId`
    -   In the 200 response body of each of the following operations:

        -   Create a notification definition
        -   Retrieve a notification definition
        -   Update a notification definition

        Made the following updates:

        -   Added the following fields:
            -   `calloutTemplateIds`
            -   `communicationProfileIds`
        -   Updated the description of the `communicationProfileId` field.
    -   In the 200 response body of the "List notification definitions" operation, made the following updates:
        -   Added the following fields:
            -   `data` > `calloutTemplateIds`
            -   `data` > `communicationProfileIds`
        -   Updated the description of the `data` > `communicationProfileId` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "List all settings" operation to add references to the Summary Statement operations.
-   Updated the description of each of the "Execute an invoice schedule" and "Pause an invoice schedule" operations for better clarity.
-   In the request body of each of the following operations, updated the description of the `charge-detail` query parameter for better clarity:
    -   List subscriptions by account key
    -   Retrieve a subscription by key
    -   ​​Retrieve a subscription by key and version
-   Corrected the endpoint from `/scim/v2/Group` to `/scim/v2/Groups` for the following operations:
    -   List groups
    -   Create a group
-   Corrected the endpoint from `/scim/v2/Group/bulk` to `/scim/v2/Groups/bulk` for the following operations:
    -   Bulk create groups
    -   Bulk update groups
-   Added the missing request schemas for each of the following OneID operations:
    -   Create a user
    -   Update a user
    -   Partially update a user
    -   Create a group
    -   Bulk delete groups
    -   Update a group
    -   Partially update a group
-   Added the missing request example for each of the following OneID operations:
    -   Bulk create users
    -   Bulk create groups
    -   Bulk update groups
    -   Update a group
-   Added the missing 200 response example for each of the following OneID operations:
    -   List all schemas of resources
    -   Create a user
    -   Bulk create users
    -   Update a user
    -   Bulk create groups
    -   Bulk delete groups
    -   Retrieve a group
    -   Delete a list of users
-   Corrected the 200 response schema for each of the following OneID operations:
    -   Create a user
    -   List groups

The following changes are applicable to the Older API Reference:

-   Made the following updates to align with the system behavior for orphan payment methods:
    -   Updated the description of each of the following operations:
        -   Create a credit card payment method
        -   CRUD: Create a payment method
    -   In the request body of the "Create a credit card payment method" operation, updated the description of the `accountKey` field.
    -   In the request body of the "CRUD: Create a payment method" operation, updated the description of the `AccountId` field.
-   For the "Run a report" operation, added the missing request body and the corresponding example.

##

October 11, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.Q4.0.0](https://knowledgecenter.zuora.com/Releases/47_2024_releases/21_Zuora_2024.Q4_release_notes). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Product Rate Plan Charges](https://developer.zuora.com/api-references/api/tag/Product-Rate-Plan-Charges/) - Made the following updates:
    -   In the request body of the "CRUD: Create a product rate plan charge" operation, added the `ReflectDiscountInNetAmount` field.
    -   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the `ReflectDiscountInNetAmount` field.
    -   In the 200 response body of the "Retrieve a product rate plan charge" operation, added the `reflectDiscountInNetAmount` field.
-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of the "Create an order" operation, added the following nested fields to the `subscriptions` > `orderActions` > `termsAndConditions` field:
        -   `scheduledCancelDate`
        -   `scheduledSuspendDate`
        -   `scheduledResumeDate`
        -   `clearingScheduledCancelDate`
        -   `clearingScheduledSuspendDate`
        -   `clearingScheduledResumeDate`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following nested fields to the `orders` > `subscriptions` > `orderActions` > `termsAndConditions` field:

        -   `scheduledCancelDate`
        -   `scheduledSuspendDate`
        -   `scheduledResumeDate`
    -   In the response body of the "Retrieve an order" operation, added the following nested fields to the `order` > `subscriptions` > `orderActions` > `termsAndConditions` field:
        -   `scheduledCancelDate`
        -   `scheduledSuspendDate`
        -   `scheduledResumeDate`
    -   In the request body of the "Revert an order" operation, added the `orderDate` field.
-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - Made the following updates:
    -   Added a new operation called "List subscriptions metrics by subscription numbers".
    -   In the response body of each of the following operations:

        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version

        Added the following fields:

        -   `ratePlans` > `ratePlanCharges` > `reflectDiscountInNetAmount`
        -   `netTotalContractedValue`
    -   In the response body of the "List subscriptions by account key" operation, added the following fields:
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `reflectDiscountInNetAmount`
        -   `netTotalContractedValue`
    -   Updated the description of the `getDetailedMetrics` query parameter in each of the following operations:
        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version
        -   List subscriptions by account key
    -   In the response body of the "List subscriptions by account key" operation, added the following nested fields to the `subscriptions` field:
        -   `scheduledCancelDate`
        -   `scheduledSuspendDate`
        -   `scheduledResumeDate`
    -   In the response body of each of the "Retrieve a subscription by key" and "Retrieve a subscription by key and version" operations, added the following fields:
        -   `scheduledCancelDate`
        -   `scheduledSuspendDate`
        -   `scheduledResumeDate`
    -   In the response body of each of the following operations, added the `originalListPrice` nested field to the `ratePlans` > `ratePlanCharges` field:
        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version
    -   In the response body of the "List subscriptions by account key" operation, added the `originalListPrice` nested field to the `subscriptions` > `ratePlans` > `ratePlanCharges` field.
-   [Invoices](https://developer.zuora.com/api-references/api/tag/Invoices) - Made the following updates:
    -   In the 200 response body of the "List all items of an invoice" operation, added the `invoiceItems` > `reflectDiscountInNetAmount` field.
    -   Made the following updates to the "Retrieve the PDF file generation status of invoices" operation:
        -   Updated the description of the `invoiceKeys` query parameter.
        -   In the `invoiceFiles` field of the response body, added the following nested fields:
            -   `pdfFileURL`
            -   `errorCategory`
            -   `errorMessage`
        -   In the response body, removed the `Archived` status from the `invoiceFiles > pdfGenerationStatus` field.
        -   Updated the response sample.
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates:
    -   In the 200 response body of the "List credit memo items" operation, added the `items` > `reflectDiscountInNetAmount` field.
    -   In the 200 response body of the "Retrieve a credit memo item" operation, added the `reflectDiscountInNetAmount` field.
    -   Made the following updates to the "Retrieve the PDF file generation status of credit memos" operation:
        -   Updated the description of the `creditMemoKeys` query parameter.
        -   In the `creditMemoFiles` field of the response body, added the following nested fields:
            -   `pdfFileURL`
            -   `errorCategory`
            -   `errorMessage`
        -   In the response body, removed the `Archived` status from the `creditMemoFiles > pdfGenerationStatus` field.
        -   Updated the response sample.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates:
    -   In the 200 response body of the "List debit memo items" operation, added the `items` > `reflectDiscountInNetAmount` field.
    -   In the 200 response body of the "Retrieve a credit memo item" operation, added the `reflectDiscountInNetAmount` field.
    -   Made the following updates to the "Retrieve the PDF file generation status of debit memos" operation:
        -   Updated the description of the `debitMemoKeys` query parameter.
        -   In the `debitMemoFiles` field of the response body, added the following nested fields:
            -   `pdfFileURL`
            -   `errorCategory`
            -   `errorMessage`
        -   In the response body, removed the `Archived` status from the `debitMemoFiles > pdfGenerationStatus` field.
        -   Updated the response sample.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - Made the following updates:
    -   In the request body of the "Update a payment method" operation, added the following fields:
        -   `maxConsecutivePaymentFailures`
        -   `paymentRetryWindow`
        -   `useDefaultRetryRule`
    -   In the response body of the "Retrieve a payment method" operation, added the `cardBinInfo` field.
-   [Payment Runs](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Runs/) - In the request body and response body of the "Create a payment run" operation, added the `useCustomPaymentMethods` field.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   Added the `reflectDiscountInNetAmount` field to the Credit Memo Item object. You can access these fields through the following operations:
        -   Retrieve a rate plan charge
        -   List rate plan charges
        -   List credit memo items
        -   Retrieve a credit memo item
        -   List subscriptions
        -   Retrieve a subscription
    -   Added the `reflectDiscountInNetAmount` field to the Debit Memo Item object. You can access these fields through the following operations:
        -   Retrieve a rate plan charge
        -   List rate plan charges
        -   List debit memo items
        -   Retrieve a debit memo item
        -   List subscriptions
        -   Retrieve a subscription
    -   Added the `reflectDiscountInNetAmount` field to the Invoice Item object. You can access these fields through the following operations:
        -   List invoice items
        -   Retrieve an invoice item
        -   List invoices
        -   Retrieve an invoice
        -   List subscriptions
        -   Retrieve a subscription
        -   List taxation items
        -   Retrieve a taxation item
        -   Retrieve a rate plan charge
        -   List rate plan charges

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the 200 response body of the "Retrieve a product rate plan charge" operation, corrected the availability note of each of the following fields:
    -   `excludeItemBillingFromRevenueAccounting`
    -   `excludeItemBookingFromRevenueAccounting`
-   In the request body of the "Create fulfillments" operation, corrected the availability note of each of the following fields:
    -   `fulfillments` > `excludeItemBillingFromRevenueAccounting`
    -   `fulfillments` > `excludeItemBookingFromRevenueAccounting`
-   In the request body of the "Update a fulfillment" operation, corrected the availability note of each of the following fields:
    -   `excludeItemBillingFromRevenueAccounting`
    -   `excludeItemBookingFromRevenueAccounting`
-   In the 200 response body of the "Retrieve a fulfillment" operation, corrected the availability note of each of the following fields:
    -   `fulfillment` > `excludeItemBillingFromRevenueAccounting`
    -   `fulfillment` > `excludeItemBookingFromRevenueAccounting`
-   In the request body of each of the following operations, added the missing `invoiceSeparately` nested field to the `subscriptions` > `orderActions` > `termsAndConditions` field:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Updated the description of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `billing` > `billingPeriodAlignment`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `billing` > `billingPeriodAlignment`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `billing` > `billingPeriodAlignment`
    -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `billing` > `billingPeriodAlignment`
-   In the request body of the "Create an order" operation, updated the description of the `processingOptions` > `writeOff` field for better clarity.
-   In the request body of each of the "Create an order" and "Create an order asynchronously" operations, added the string maximum length for the `subscriptions` > `orderActions` > `changeReason` field.
-   In the request body of the "Update a subscription" operation, corrected the availability note of each of the following fields:
    -   `add` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
    -   `add` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
    -   `change` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
    -   `change` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
-   In the request body of each of the following operations, updated the description of the `revenueImpacting` field:
    -   Write off an invoice
    -   Write off a debit memo
-   In the response body of each of the following operations, updated the description of the `revenueImpacting` field:
    -   List credit memos
    -   Retrieve a credit memo
-   In the response body of the "List credit memo items" operation, updated the description of the `items` > `revenueImpacting` field.
-   In the response body of the "Retrieve a credit memo item" operation, updated the description of the `revenueImpacting` field.
-   Updated the description of the "Create a payment session" operation for better clarity.
-   Updated the description of each of the following operations to add a reference to the use case article in the Knowledge Center:
    -   Cancel a payment schedule
    -   Refund a payment
    -   Refund a payment with auto-unapplying
-   For the "Describe an object" operation, removed the incorrectly documented `4XX` error response.

##

September 27, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - Added a "Retrieve the balance of a bank account" operation.

##

September 23, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

-   We have reverted the API documentation updates in the Invoices, Credit Memos, and Debit Memos sections published on September 20, 2024. These changes will be delivered in an upcoming release.

##

September 20, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - Made the following updates to the "Retrieve the PDF file generation status of invoices" operation:
    -   Updated the description of the `invoiceKeys` query parameter.
    -   In the `invoiceFiles` field of the response body, added the following nested fields:
        -   `pdfFileURL`
        -   `errorCategory`
        -   `errorMessage`
    -   In the response body, removed the `Archived` status from the `invoiceFiles > pdfGenerationStatus` field.
    -   Updated the response sample.
-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - Made the following updates to the "Retrieve the PDF file generation status of credit memos" operation:
    -   Updated the description of the `creditMemoKeys` query parameter.
    -   In the `creditMemoFiles` field of the response body, added the following nested fields:
        -   `pdfFileURL`
        -   `errorCategory`
        -   `errorMessage`
    -   In the response body, removed the `Archived` status from the `creditMemoFiles > pdfGenerationStatus` field.
    -   Updated the response sample.
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Made the following updates to the "Retrieve the PDF file generation status of debit memos" operation:
    -   Updated the description of the `debitMemoKeys` query parameter.
    -   In the `debitMemoFiles` field of the response body, added the following nested fields:
        -   `pdfFileURL`
        -   `errorCategory`
        -   `errorMessage`
    -   In the response body, removed the `Archived` status from the `debitMemoFiles > pdfGenerationStatus` field.
    -   Updated the response sample.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Write off a debit memo" operation, made the following updates:
    -   In the description, added a note to clarify the availability permission required to use this operation.
    -   In the request body, corrected the description of the `revenueImpacting` field.
-   In the request body of the "Write off an invoice" operation, made the following updates:
    -   Updated the description for each of the following fields to add the availability permission required to use these fields:
        -   `revenueImpacting`
        -   `amount`
        -   `nonRevenueWriteOffAccountingCode`
    -   Corrected the description of the `amountWithoutTax` field.
    -   Added the missing `items` > `taxationItems` nested field.

##

September 13, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order

        Added the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isAddingSubsetCharges`
        -   `subscriptions` > `orderActions` > `updateProduct` > `isAddingSubsetCharges`
    -   In the request body of the "Update an order" operation, added the `productRatePlanChargeNumber` and `productRatePlanChargeId` nested fields to the `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` field.
-   [Product Charge Definitions](https://developer.zuora.com/v1-api-reference/api/tag/Product-Charge-Definitions/) - In the response body of the "Create product charge definitions" operation, made the following updates:
    -   Removed the `productChargeDefinitions` field.
    -   Added the following fields:
        -   `results`
        -   `success`
        -   `summary`
-   [Settings](https://developer.zuora.com/v1-api-reference/api/tag/Settings/) - Made the following updates:

    -   Added the `Delivery` enum value to the `chargeModels` parameter of the `ChargeModels` setting.
    -   Added the `taxGroupingRule` parameter to the `BillingRules` setting.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Updated the description of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeNumber`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeNumber`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeNumber`
-   In the request body of each of the "Create a standalone invoice" and "Create standalone invoices" operations, corrected the data type of the `invoiceItems` > `quantity` field on the Invoice object from string to number.
-   In the request body of the "Refund a payment with auto-unapplying" operation, deleted the incorrectly documented default value for the `writeOffOptions` field.
-   In the request body of the "Create a payment schedule" operation, deleted the incorrectly documented default value for the `billingDocument` field.
-   In the request body of the "Create a payment schedule" operation, added the default value for the `billingDocument` > `type` field.
-   Made the following updates to the Settings API:

    -   Updated the description of each of the following operations for better clarity:
        -   Submit settings requests
        -   List all settings
    -   Added the following missing enum values to the `chargeModels` parameter of the `ChargeModels` setting:
        -   `HighWaterMarkTieredPricing`
        -   `HighWaterMarkVolumePricing`
        -   `MultiAttributePricing`
        -   `PreratedPerUnit`
        -   `PreratedPricing`

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


##

September 5, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Single Version Subscription feature

The following items are the API updates specific to the Single Version Subscription feature.

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   Added the "Revert an order" operation.
    -   In the description of the "Delete an order" operation, updated information about the reverted order.
    -   In the response body of each of the following operations, updated the description of the `orders` > `status` field for reverted orders:
        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
    -   In the response body of the "Retrieve an order" operation, updated the description of the `order` > `status` field for reverted orders.
-   [Subscription Change History](https://developer.zuora.com/v1-api-reference/api/tag/Subscription-Change-History) - Added the "Subscription Change History" section that contains the following operations:
    -   List change histories of a subscription
    -   List change histories of subscriptions by order number
    -   Retrieve a change history of a subscription by version
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   In the response body of each of the "List accounts" and "Retrieve an account" operations, updated the description of each of the following fields on the Subscription object to clarify that these fields are not available for single version subscriptions:
        -   `subscriptions` > `creatorAccountId`
        -   `subscriptions` > `creatorInvoiceOwnerId`
        -   `subscriptions` > `isLatestVersion`
        -   `subscriptions` > `originalId`
        -   `subscriptions` > `previousSubscriptionId`
        -   `subscriptions` > `subscriptionVersionAmendmentId`
    -   In the response body of each of the "List subscriptions" and "Retrieve a subscription" operations, updated the description of each of the following fields on the Subscription object to clarify that these fields are not available for single version subscriptions:
        -   `creatorAccountId`
        -   `creatorInvoiceOwnerId`
        -   `isLatestVersion`
        -   `originalId`
        -   `previousSubscriptionId`
        -   `subscriptionVersionAmendmentId`
    -   In the response body of each of the "List rate plans" and "Retrieve a rate plan" operations, made the following updates:
        -   Updated the description of each of the following fields on the Rate Plan object to clarify that these fields are not available for single version subscriptions:
            -   `amendmentId`
            -   `amendmentType`
            -   `subscriptionOfferId`
        -   Updated the description of each of the following fields on the Subscription object to clarify that these fields are not available for single version subscriptions:
            -   `subscription` > `creatorAccountId`
            -   `subscription` > `creatorInvoiceOwnerId`
            -   `subscription` > `isLatestVersion`
            -   `subscription` > `originalId`
            -   `subscription` > `previousSubscriptionId`
            -   `subscription` > `subscriptionVersionAmendmentId`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the request and response examples of a number of operations across different sections to provide better-structured code samples.
-   Renamed the "Scim" section to "SCIM", and updated its description.

The following changes are applicable to the Older API Reference:

-   Updated the request and response examples of several operations across different sections to provide better-structured code samples.

##

August 29, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for flexible billing attributes on order line items

The following API updates are specific to the enhancements of the [flexible billing attributes](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Flexible_Billing_Attributes) on the [order line items](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_non-subscription_transactions/Order_Line_Items).

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations，added the `paymentTerm` and `invoiceTemplateId` nested fields to the `orderLineItems` field:
        -   Preview an order
        -   Preview an order asynchronously
        -   Create an order
        -   Create an order asynchronously
    -   In the response body of each of the following operations, added the `paymentTerm` and `invoiceTemplateId` nested fields to the `orders` > `orderLineItems` field:
        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number
    -   In the response body of the "Retrieve an order" operation, added the `paymentTerm` and `invoiceTemplateId` nested fields to the `order` > `orderLineItems` field.
-   [Order Line Items](https://developer.zuora.com/api-references/api/tag/Order-Line-Items) - Made the following updates:
    -   In the request body of the "Update order line item" operation，added the `paymentTerm` and `invoiceTemplateId` fields.
    -   In the request body of the "Update order line items" operation，added the `paymentTerm` and `invoiceTemplateId` nested fields to the `orderLineItems` field.
    -   In the response body of the "Retrieve an order line item" operation, added the `paymentTerm` and `invoiceTemplateId` nested fields to the `orderLineItem` field.

####

Other API updates

The following items are other API updates included in this release:

-   [Scim](https://developer.zuora.com/v1-api-reference/api/tag/SCIM/) - Added the "Scim" section that contains the following operations:
    -   List groups
    -   Create a group
    -   Bulk create groups
    -   Bulk update groups
    -   Bulk delete groups
    -   Retrieve a group
    -   Update a group
    -   Delete a group
    -   Partially update a group
    -   List all resource types
    -   Retrieve a resource type
    -   List all schemas of resources
    -   List schemas of a resource
    -   Retrieve the service provider configuration
    -   List users
    -   Create a user
    -   Bulk create users
    -   Bulk update users
    -   Delete a list of users
    -   Retrieve a user
    -   Update a user
    -   Delete a user
    -   Partially update a user
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - Added a "Write off a debit memo" operation.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - Made the following updates for a system behavior change for orphan payment methods:
    -   Updated the description of the "Create a payment method" operation.
    -   In the request body of the "Create a payment method" operation, updated the description of the `accountKey` field.
    -   In the request body of the "Create an Apple Pay payment method" operation, updated the description of the `accountID` field.

##

August 23, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [API Health](https://developer.zuora.com/v1-api-reference/api/tag/API-Health/) - Added a "List API Failure records" operation.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of each of the following Order Metrics related objects and fields for better clarity:

    -   the Order Item object
    -   the Order ELP object
    -   the `generatedReason` and `orderItemId` fields of the Order MRR, Order TCB, Order TCV, and Order Quantity objects

    The following operations are affected:

    -   Preview an order
    -   Retrieve an order
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number
-   Updated the description of each of the following operations for better clarity:
    -   Preview a subscription by subscription key
    -   List subscriptions by account key
    -   Retrieve a subscription by key
    -   Update a subscription
    -   Retrieve a subscription by key and version
    -   Renew a subscription
    -   Cancel a subscription
    -   Resume a subscription
    -   Suspend a subscription
-   In the request body of the "Update a payment schedule" operation, added the missing `description` field.
-   In the description of the "List all settings" operation, added the following sections:
    -   Zuora Tax Rate Period
    -   Zuora Tax Code
    -   Zuora Tax Rate
-   In the "Restore a file" operation, corrected the sample cURL request.

##

August 16, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Accounts](https://developer.zuora.com/v1-api-reference/api/tag/Accounts/) - Made the following updates:
    -   In the request body of each of the following operations, added a nested custom field to the `einvoiceProfile` field:
        -   Create an account
        -   Update an account
    -   In the response body of the "Retrieve an account" operation, added a nested custom field to the `einvoiceProfile` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of each of the following fields on the Payment Method object for better clarity:

    -   `active`
    -   `isSystem`

    You can access these fields through the following Object Queries operations:

    -   Retrieve an account
    -   List accounts
    -   Retrieve a payment
    -   List payments
    -   Retrieve a payment method
    -   List payment methods
    -   Retrieve a refund
    -   List refunds
    -   Retrieve a payment method snapshot
    -   List payment method snapshots

##

August 9, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, updated the description of the `summaryStatementTemplateId` field for better clarity:
    -   Create an account
    -   Update an account
-   In the request body of each of the following operations, updated the description of the `subscriptions` > `orderActions` > `changePlan` > `resetBcd` field for better clarity:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously
-   For each of the following Object Queries operations, added the missing `rateplans.rateplancharges.rateplanchargetiers` enum value to the `expand[]` query parameter:
    -   List subscriptions
    -   Retrieve a subscription
-   For the "Create a payment session" operation, made the following updates:
    -   In the request body, updated the description of each of the following fields to clarify the field requirements:
        -   `amount`
        -   `invoices`
    -   In the response body, updated the description of the `token` field for better clarity.
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Updated the description of each of the following fields to remove the incorrect requirement for setting a WSDL version:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Updated the description of each of the following fields to remove the incorrect requirement for setting a WSDL version:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`
-   In the response body of the "Retrieve an order" operation, updated the description of each of the following fields to remove the incorrect requirement for setting a WSDL version:
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`

##

August 2, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Accounts](https://developer.zuora.com/v1-api-reference/api/tag/Accounts/) - In the request body of each of the following operations, added the `summaryStatementTemplateId` field :
    -   Create an account
    -   Update an account
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - In the request body of the "Create a payment method" operation, made the following updates for the support of payment method tokenization:
    -   For the `PayPalCP` payment method type, added the following fields:
        -   `tokenize`
        -   `tokens`
    -   For the `CreditCard` payment method type, updated the description of each of the following fields:
        -   `cardMaskNumber`
        -   `tokens`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of the "Retrieve an account" operation, added the description for the `summaryStatementTemplateId` field for better clarity.
-   Updated the description of the `billTo` field of the OrderLineItem object for better clarity. The following operations are affected:
    -   Retrieve an order line item
    -   Update an order line item
    -   Update order line items
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number
    -   Retrieve an order
-   In the request body of the "Cancel a payment schedule" operation, updated the description of the `cancelDate` field for better clarity.
-   Updated the description of the "List all settings" operation by adding a link to the article about creating a notification definition under a particular communication profile.

##

July 26, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.08.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/22_Zuora_Release_2024.08.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Dynamic Usage Charges feature

The following API updates are specific to the [Dynamic Usage Charges](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Dynamic_Usage_Charges) feature.

-   [Usage](https://developer.zuora.com/v1-api-reference/api/tag/Usage/) - Made the following updates:
    -   In the request body of the "CRUD: Create a usage record" operation, added the `ProductRatePlanChargeNumber` field.
    -   In the response body of the "CRUD: Retrieve a usage record" operation, added the `ProductRatePlanChargeNumber` field.
    -   In the response body of the "Retrieve a usage record" operation, added the `usage` > `productRatePlanChargeNumber` field.
    -   In the template usage file that is uploaded by the "Upload a usage file" operation, added the `PRODUCT_RATE_PLAN_CHARGE_ID` column.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Added the `productRatePlanChargeId` field to the Usage Record object. You can access this field through the following Object Queries operations:
    -   Retrieve a usage record
    -   List usage records
    -   Retrieve an account
    -   List accounts
-   [Regenerate](https://developer.zuora.com/v1-api-reference/api/tag/Regenerate/) - In the request body of the "Regenerate booking transactions" operation, made the following updates:
    -   Added the `ratePlanChargeId` field
    -   Added the `chargeNumber` field
    -   Added the `DynamicUsageCharge` enum value to the `type` field

####

API updates for Charge Level Proration feature enhancements

The following API updates are specific to the enhancements of the [Charge Level Proration](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge) feature.

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Added the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`

    Added the `CustomizeProrationOptionOverrides` enum value to each of the following the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Added the following fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`

    Added the `CustomizeProrationOptionOverrides` enum value to each of the following the following fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`
-   In the response body of the "Retrieve an order" operation:

    Added the following fields:

    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `isProratePartialMonth`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `prorationUnit`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `ratingPropertiesOverride` > `daysInMonth`

    Added the `CustomizeProrationOptionOverrides` enum value to each of the following the following fields:

    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`

####

Other API updates

The following items are other API updates included in this release:

-   [Orders](https://developer.zuora.com/v1-api-reference/api/tag/Orders/) - In the request body of each of the following operations, updated the description of the `subscriptions` field for the support of creating an order that contains multiple subscriptions with different invoice owner accounts:
    -   Create an order
    -   Create an order asynchronously
-   [Operations](https://developer.zuora.com/v1-api-reference/api/tag/Operations/) - In the request body of the "Export bulk PDF files" operation, added the `FailedDocuments` field.
-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - In the request body of the "Create a payment method" operation, made the following updates for the support of payment method tokenization:
    -   For the `ACH` payment method type, made the following changes:
        -   Added the `tokenize` field.
        -   Updated the description of the `bankName` field.
    -   For the `CreditCard` payment method type, updated the description of the `tokenize` field.
    -   For the `SEPA` payment method type, updated the description of each of the following fields:
        -   `accountMaskNumber`
        -   `accountHolderInfo`
        -   `IBAN`
        -   `tokens`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, corrected the maximum length of the `personalEmail` field to 80 from 74:
    -   Create a contact
    -   Update a contact
-   In the response body of each of the following operations, corrected the maximum length of the `personalEmail` field of the Contact object to 80 from 74:
    -   Create a contact
    -   Update a contact
    -   Retrieve a contact
    -   Object Query: Retrieve a contact
    -   Object Query: List contacts
-   In the request body of the "Create an account" operation, updated the description of the `sequenceSetId` field for better clarity.
-   In the request body of the "Update order line items" operation, updated the description of the `orderLineItems` > `sequenceSetId` field for better clarity.
-   In the request body of the "Update an order line item" operation, updated the description of the `sequenceSetId` field for better clarity.
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Added the following missing fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`

    Corrected the permission required for each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Added the following missing fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`

    Corrected the permission required for each of the following fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
-   In the response body of the "Retrieve an order" operation:

    Added the following missing fields:

    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `prorationOption`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `prorationOption`

    Corrected the permission required for each of the following fields:

    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
-   Added the missing `prorationOption` field on the Product Rate Plan Charge object. You can access this field through the following Object Queries operations:
    -   List products
    -   Retrieve a product
    -   List product rate plans
    -   Retrieve a product rate plan
    -   List product rate plan charges
    -   Retrieve a product rate plan charge
    -   List product rate plan charge tiers
    -   Retrieve a product rate plan charge tier
    -   List rate plan charges
    -   Retrieve a rate plan charge
-   In the request body of each of the following operations:

    -   CRUD: Create a product rate plan charge
    -   CRUD: Update a product rate plan charge

    Added the missing `ProrationOption` field and corrected the permission required for each of the following fields:

    -   `ChargeFunction`
    -   `CommitmentType`
-   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the missing `ProrationOption` field and corrected the permission required for each of the following fields:
    -   `ChargeFunction`
    -   `CommitmentType`
-   In the 200 response body of the "Retrieve a product rate plan charge" operation, added the missing `prorationOption` field and corrected the permission required for each of the following fields:
    -   `chargeFunction`
    -   `commitmentType`
-   In the response body of each of the following operations:

    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version

    Corrected the permission required for each of the following fields:

    -   `ratePlans` > `ratePlanCharges` > `chargeFunction`
    -   `ratePlans` > `ratePlanCharges` > `commitmentType`
-   In the response body of the "List subscriptions by account key" operation, corrected the permission required for each of the following fields:
    -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `chargeFunction`
    -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `commitmentType`
-   In the request body of each of the following operations, updated the description of the `id` query parameter for better clarity.
    -   Delete a sequence set
    -   Retrieve a sequence set
    -   Update a sequence set
-   Updated the description of the "Create a payment method" operation to clarify the required fields for payment method tokenization.

##

July 19, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.07.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/23_Zuora_Release_2024.07.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Credit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Credit-Memos/) - In the request body of each of the following operations, updated the description of the `customRates` field for a behavior change:
    -   Create a credit memo from a charge
    -   Refund a credit memo
-   [Debit Memos](https://developer.zuora.com/v1-api-reference/api/tag/Debit-Memos/) - In the request body of the "Create a debit memo from a charge" operation, updated the description of the `customRates` field for a behavior change.
-   [Invoices](https://developer.zuora.com/v1-api-reference/api/tag/Invoices/) - In the request body of each of the following operations, updated the description of the `customRates` field of the Invoice object for a behavior change:
    -   Create a standalone invoice
    -   Create standalone invoices
-   [Payments](https://developer.zuora.com/v1-api-reference/api/tag/Payments/) - In the request body of each of the following operations, updated the description of the `customRates` field for a behavior change:
    -   Create a payment
    -   Refund a payment

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Retrieve a payment schedule" operation, added the missing `cancellationReason` field in the response body and response sample code.
-   In the "Retrieve a payment schedule item" operation, made the following changes:
    -   Added the following missing fields to the response body:
        -   `cancelledById`
        -   `cancelledOn`
    -   Updated the response sample code.
-   In the request body of each of the following operations, corrected the type of the `invoiceItems` > `amount` field from string to number:
    -   Create a standalone invoice
    -   Update an invoice
-   In the request body of each of the following operations, corrected the type of the `invoices` > `invoiceItems` > `amount` field from string to number:
    -   Create standalone invoices
    -   Update invoices
-   In the response body of the "Retrieve an account" operation, corrected the data type of the `billingAndPayment` > `billCycleDay` field from string to integer, and updated the data format of this field to int64.

##

July 12, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the "Create an order" and "Create an order asynchronously" operations, updated string maximum length for the `orderLineItems` > `description` field.
-   In the description of the "Create an order" operation, added a note to clarify the special characters not allowed in the Orders operations.
-   In the description of each of the "Preview an order" and "Preview an order asynchronously" operations, added a note to clarify that these operations do not support previewing usage charges.
-   From the following fields of the "Preview an order" and "Preview an order asynchronously" operations:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing`
    -   `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing`

    Removed the following unsupported fields:

    -   `usageFlatFee`
    -   `usageOverage`
    -   `usagePerUnit`
    -   `usageTiered`
    -   `usageTieredWithOverage`
    -   `usageVolume`

##

July 4, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.07.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/23_Zuora_Release_2024.07.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Settings](https://developer.zuora.com/api-references/api/tag/Settings) - For each of the following settings:

    -   `AllTaxEngines`
    -   `CreateGlobalTaxHubTaxEngine`
    -   `GlobalTaxHubTaxEngine`

    Made the following updates:

    -   Added the `oauthScope` parameter.
    -   Added the `OneSource_REST` enum value to the `vendor` parameter.

    See [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json).


###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of each of the following operations, updated the description of the `ratePlans` > `ratePlanCharges` > `rolloverPeriodLength` field for better clarity.
    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version
-   In the response body of the "List subscriptions by account key" operation, updated the description of the `subscriptions` > `ratePlans` > `ratePlanCharges` > `rolloverPeriodLength` field for better clarity.
-   In the request body of each of the following operations, updated the description of the `RolloverPeriodLength` field for better clarity.
    -   CRUD: Create a product rate plan charge
    -   CRUD: Update a product rate plan charge
-   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, updated the description of the `RolloverPeriodLength` field for better clarity.
-   In the 200 response body of the "Retrieve a product rate plan charge" operation, updated the description of the `rolloverPeriodLength` field for better clarity.
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Updated the description of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriodLength`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriodLength`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `rolloverPeriodLength`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Updated the description of each of the following fields for better clarity:

    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriodLength`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriodLength`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `rolloverPeriodLength`
-   In the response body of the "Retrieve an order" operation, updated the description of each of the following fields for better clarity:
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriodLength`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriodLength`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `rolloverPeriodLength`
-   Updated the description of the `rolloverPeriodLength` field on the Rate Plan Charge object for better clarity. You can access this field through the following Object Queries operations:
    -   Retrieve a rate plan
    -   List rate plans
    -   Retrieve a rate plan charge
    -   List rate plan charges
    -   List credit memo items
    -   Retrieve a credit memo item
    -   List debit memo items
    -   Retrieve a debit memo item
    -   List invoice items
    -   Retrieve an invoice item
    -   List rating results
    -   Retrieve a rating result
-   Updated the description of the `rolloverPeriodLength` field on the Product Rate Plan Charge object for better clarity. You can access this field through the following Object Queries operations:
    -   List products
    -   Retrieve a product
    -   List product rate plans
    -   Retrieve a product rate plan
    -   List product rate plan charges
    -   Retrieve a product rate plan charge
    -   List product rate plan charge tiers
    -   Retrieve a product rate plan charge tier
    -   List rate plan charges
    -   Retrieve a rate plan charge
-   In the request body of the "Create a payment session" operation, updated the description of each of the following fields for better clarity:
    -   `accountId`
    -   `invoices`
-   In the request body of each of the following operations, corrected the `memos` > `invoiceId` field to required and updated the field description for better clarity:
    -   Create credit memos
    -   Create debit memos
-   Updated the description of the "Unapply a credit memo" operation for better clarity.
-   Added multiple payload examples to the "Update a callout template" operation.
-   For the "List taxation items" and "Retrieve a taxation item" Object Queries operations, added the missing description for each of the following fields:
    -   `customerCode`
    -   `sellerRegistration`
    -   `balance`

##

June 28, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.07.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/23_Zuora_Release_2024.07.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Added the following operations:
    -   Create or update callout templates
    -   Create a callout template
    -   List callout templates
    -   Retrieve a callout template
    -   Update a callout template
    -   Delete a callout template

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the `Zuora-Entity-Ids` header field for better clarity.
-   Removed the unsupported `sort[]` query parameters from the "List custom objects" and "Retrieve a custom object" operations.
-   Updated the description of the "Object Query" section for better clarity.

##

June 26, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.07.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/23_Zuora_Release_2024.07.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Payment Methods](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Methods/) - In the request body of the "Create a payment session" operation, made the following updates for support of Payment Form implementation:
    -   Added the following fields:
        -   `storePaymentMethod`
        -   `invoices`
    -   Updated the description of each of the following fields:
        -   `amount`
        -   `authAmount`
        -   `paymentGateway`
        -   `processPayment`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of the "Create a payment" operation for better clarity.

##

June 21, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.07.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/23_Zuora_Release_2024.07.R1).

####

API updates for Standalone Orders feature enhancements

The following items are the API updates specific to the enhancements of the Standalone Orders feature.

-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Added the following fields to support setting the configurations for the Order to Revenue feature in a standalone order:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionTiming`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueAmortizationMethod`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionTiming`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueAmortizationMethod`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `revenueRecognitionTiming`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `revenueAmortizationMethod`

####

API updates for availability permission change in Advanced Consumption Billing feature

-   [Usage](https://developer.zuora.com/api-references/api/tag/Usage/) - Made the following updates:
    -   In the request body of the "CRUD: Create a usage record" operation, changed the availability permission required to use the `UniqueKey` field.
    -   In the response body of the "Retrieve a usage record" operation, changed the availability permission required to use the `usage` > `uniqueKey` field.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Changed the availability permission required to use the `uniqueKey` field of the Usage Record object. You can access this field through the following operations:
    -   Retrieve a usage record
    -   List usage records
    -   Retrieve an account
    -   List accounts

####

API updates for Payment Schedules enhancements

The following items are specific to the [Payment Schedules](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Schedules) feature:

-   [Payment Schedules](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Schedules/) - Made the following updates:
    -   In the request body of the "Create a payment schedule" operations, added the `billingDocuments` field.
    -   In the request body of the "Create multiple payment schedules at once" operation, added the `paymentSchedules` > `billingDocuments` nested field.
    -   In the response body of each of the following operations, added the `billingDocuments` field:
        -   Create a payment schedule
        -   Retrieve a payment schedule
        -   List payment schedules by customer account

####

Other API updates

The following items are other API updates included in this release:

-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of each of the following operations, added the `processingOptions` > `electronicPaymentOptions` > `gatewayOptions` nested field:
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   [Payment Authorization](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Authorization/) - In the request body of the "Cancel authorization" operation, updated the description of each of the following fields for a system behavior change:
    -   `accountId`
    -   `accountNumber`
    -   `paymentGatewayId`
-   [Payment Profiles](https://developer.zuora.com/v1-api-reference/api/tag/Payment-Profiles/) - Added the "Payment Profiles" section that contains the following operation:
    -   Create or update payment profiles in bulk

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the missing `revenueRecognitionTiming` and `revenueAmortizationMethod` fields to the Rate Plan Charge object. You can access these fields through the following operations:
    -   Retrieve a rate plan
    -   List rate plans
    -   Retrieve a rate plan charge
    -   List rate plan charges
    -   List credit memo items
    -   Retrieve a credit memo item
    -   List debit memo items
    -   Retrieve a debit memo item
    -   List invoice items
    -   Retrieve an invoice item
    -   List prepaid balance funds
    -   Retrieve a prepaid balance fund
    -   List rating results
    -   Retrieve a rating result

##

June 14, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.06.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/24_Zuora_Release_2024.06.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Specialized Payment Connections integrations

The following items are the API updates specific to [payment method tokenization](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information) on certain integrations requested through the [Specialized Payment Connections](https://knowledgecenter.zuora.com/Zuora_Payments/Specialized_Payment_Connections) service.

-   [Payment Methods](https://developer.zuora.com/api-references/api/tag/Payment-Methods/) - In the request body of the "Create a payment method" operation, added the following fields for the `CreditCard` payment method type:
    -   `cardMaskNumber`
    -   `tokenize`
    -   `tokens`
-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts) - In the request body of the "Create an account" operation, added the following fields for the `CreditCard` payment method type:
    -   `paymentMethod` > `cardMaskNumber`
    -   `paymentMethod` > `tokenize`
    -   `paymentMethod` > `tokens`
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously

    Added the following fields for the `CreditCard` payment method type:

    -   `newAccount` > `paymentMethod` > `cardMaskNumber`
    -   `newAccount` > `paymentMethod` > `tokenize`
    -   `newAccount` > `paymentMethod` > `tokens`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the missing `orderId` field to the Subscription object in the following Object Queries operations:
    -   List accounts
    -   Retrieve an account
    -   List order actions
    -   Retrieve an order action
    -   List rate plans
    -   Retrieve a rate plan
    -   List rating results
    -   Retrieve a rating result
    -   List invoice items
    -   Retrieve an invoice item
    -   List debit memo items
    -   Retrieve a debit memo item
    -   List credit memo items
    -   Retrieve a credit memo item
    -   List prepaid balances
    -   Retrieve a prepaid balance
-   Updated the description of the "Create a payment session" operation for better clarity.

##

June 7, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Added the missing `paymentMethodCascadingConsent` field to the expanded `account` object. The following Object Queries operations are affected:
    -   List subscriptions
    -   Retrieve a subscription
    -   List credit memos
    -   Retrieve a credit memo
    -   List debit memos
    -   Retrieve a credit memo
    -   List invoices
    -   Retrieve an invoice
    -   List orders
    -   Retrieve an order
    -   List payments
    -   Retrieve a payment
    -   List payment methods
    -   Retrieve a payment method
    -   List prepaid balance
    -   Retrieve a prepaid balance
    -   List prepaid balance transactions
    -   Retrieve a prepaid balance transaction
    -   List rating results
    -   Retrieve a rating result
    -   List Refunds
    -   Retrieve a refund
    -   List usage records
    -   Retrieve a usage record
    -   List validity period summaries
    -   Retrieve a validity period summary

##

May 30, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.06.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/24_Zuora_Release_2024.06.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for E-Invoicing

The following items are the API updates specific to the [E-Invoicing](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/E-Invoicing/AA_E-Invoicing_overview) feature.

-   [E-Invoicing](https://developer.zuora.com/v1-api-reference/api/tag/E-Invoicing/) - Made the following updates:
    -   In the request body of the "Create an e-invoicing business region" operation, added the following fields:
        -   `processType`
        -   `invoiceEnabled`
        -   `creditMemoEnabled`
        -   `debitMemoEnabled`
    -   In the response body of the "List e-invoicing business regions" operation, added the following nested fields to the `regions` field:
        -   `processType`
        -   `invoiceEnabled`
        -   `creditMemoEnabled`
        -   `debitMemoEnabled`
    -   In the request body of the "Create an e-invoicing business region" operation, updated the description of the `responseMapping` for better clarity.
    -   In the response body of the "List e-invoicing business regions" operation, updated the description of the `regions` > `responseMapping` nested field for better clarity.
    -   In the request body of the "Create an e-invoicing service provider" operation, added the `Avalara` enum value to the `provider` field.
    -   In the response body of each of the following operations，added the `Avalara` enum value to the `provider` field:
        -   Create an e-invoicing service provider
        -   Retrieve an e-invoicing service provider
    -   In the response body of the "List e-invoicing service providers" operation, added the `Avalara` enum value to the `serviceProviders` > `provider` field.
    -   In the request body of the "Create an e-invoicing service provider" operation, updated the description of each of the following fields to clarify the required fields for different service providers:
        -   `apiKey`
        -   `secretKey`
    -   In the request body of the "Update an e-invoicing service provider" operation, updated the description of each of the following fields to clarify the required fields for different service providers:
        -   `apiKey`
        -   `secretKey`
        -   `clientCertificate`
        -   `clientCertificateType`
        -   `clientCertificatePassword`
    -   In the response body of each of the following operations:

        -   Create an e-invoicing service provider
        -   Update an e-invoicing service provider
        -   Retrieve an e-invoicing service provider

        Updated the description of each of the following fields to clarify the required fields for different service providers:

        -   `apiKey`
        -   `clientCertificate`
        -   `clientCertificateType`
    -   In the response body of the "List e-invoicing service providers" operation, updated the description of each of the following fields to clarify the required fields for different service providers:
        -   `serviceProviders` > `apiKey`
        -   `serviceProviders` > `clientCertificate`
        -   `serviceProviders` > `clientCertificateType`

####

Other API updates

-   [Subscriptions](https://developer.zuora.com/v1-api-reference/api/tag/Subscriptions/) - Made the following updates:
    -   In the response body of each of the following operations, added the `salesPrice` nested field to the `ratePlans` > `ratePlanCharges` field:
        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version
    -   In the response body of the "List subscriptions by account key" operation, added the `salesPrice` nested field to the `subscriptions` > `ratePlans` > `ratePlanCharges` field.
-   [Object Queries](https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/) - Made the following updates:
    -   Added the `salesPrice` field to the Rate Plan Charge object. You can access this field through the following operations:
        -   Retrieve a rate plan
        -   List rate plans
        -   Retrieve a rate plan charge
        -   List rate plan charges
        -   List credit memo items
        -   Retrieve a credit memo item
        -   List debit memo items
        -   Retrieve a debit memo item
        -   List invoice items
        -   Retrieve an invoice item
        -   List prepaid balance funds
        -   Retrieve a prepaid balance fund
        -   List rating results
        -   Retrieve a rating result
    -   Added the `orderId` field to the Subscription object. You can access this field through the following operations:
        -   Retrieve a subscription
        -   List subscriptions
-   [Notifications](https://developer.zuora.com/v1-api-reference/api/tag/Notifications/) - Made the following updates:
    -   In the request body and 200 response body of each of the following operations, added the `PATCH` enum value to the `callout` > `httpMethod` field:
        -   Create a notification definition
        -   Update a notification definition
    -   In the 200 response body of the "List notification definitions" operation, added the `PATCH` enum value to the `data` > `callout` > `httpMethod` field.
    -   In the 200 response body of the "Retrieve a notification definition" operation, added the `PATCH` enum value to the `callout` > `httpMethod` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   For each of the following operations, removed the unsupported `Idempotency-Key` request header parameter:
    -   Create custom object definitions
    -   Update a custom object definition
    -   Create custom object records
    -   Partially update a custom object record
    -   Update or delete custom object records
    -   Submit a custom object bulk job
    -   Upload a file for a custom object bulk job
    -   Cancel a custom object bulk job

##

May 23, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.06.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/24_Zuora_Release_2024.06.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for new API versioning scheme

The following items are the API updates specific to the new API versioning scheme.

-   Moved the "API Verisons" section from this API Reference to a separate page called [API versions](https://developer.zuora.com/v1-api-reference/api-versions/) .
-   Removed all version-controlled fields that are not available in the latest minor verison, `2024-05-20` . For details about the fields are no longer available, see [API upgrades](https://developer.zuora.com/v1-api-reference/api-upgrades/) .
-   Updated the description for each of the version-controlled fields that are available in the latest minor verison, `2024-05-20` . For details about the available version-controlled fields, see [API upgrades](https://developer.zuora.com/v1-api-reference/api-upgrades/) .
-   Added the 4XX and 500 responses to each of the operations with an endpoint prefixed with `/v1` , except for [Actions](https://developer.zuora.com/v1-api-reference/api/tag/Actions/) and CRUD operations.

For more information about the new API versioning scheme, see the following pages:

-   [API upgrade guide](https://developer.zuora.com/v1-api-reference/api-upgrade-guide/)
-   [Release note: New Zuora v1 API versioning scheme](https://knowledgecenter.zuora.com/Releases/47_2024_releases/24_Zuora_Release_2024.06.R1#New_Zuora_v1_API_versioning_scheme)
-   [Community post: Announcing a new API versioning scheme](https://community.zuora.com/discussion/announcing-a-new-api-versioning-scheme)

####

Other API updates

The following items are other API updates included in this release:

-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - Updated the description of the "List all application parts of a debit memo" operation.
-   [Data Backfill](https://developer.zuora.com/api-references/api/tag/Data-Backfill/) - Made the following updates:
    -   Added the following operations:
        -   Create an auto backfill job
        -   List all auto backfill jobs
        -   Retrieve an auto backfill job
        -   Stop an auto backfill job
    -   In the response body of the "List all booking date backfill jobs" operation, added the `jobs` > `type` field.
    -   In the response body of the "Retrieve a booking date backfill job" operation, added the `job` > `type` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the description of the "Object Queries" section, updated limitations for better clarity.
-   In the "Prepaid with Drawdown" section, added the missing "Deplete funds" operation.
-   In the request body of each of the following operations, updated the description of the `accountKey` field for better clarity:
    -   Create a payment method
    -   Update a payment method
-   Corrected the endpoint of the "Download a data backfill template file" operation.

##

May 16, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of each of the following operations:

    -   Retrieve a subscription by key
    -   Retrieve a subscription by key and version

    Added the following missing fields:

    -   `contractedNetMrr`
    -   `asOfDayGrossMrr`
    -   `asOfDayNetMrr`
-   In the description of the "Object Queries" section, updated limitations for better clarity.

##

May 10, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.05.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/25_Zuora_Release_2024.05.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Standalone Orders feature enhancements

The following items are the API updates specific to the enhancements of the Standalone Orders feature.

-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following changes to support using a standalone order to create a Minimum Commitment subscription:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `creditOption`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `creditOption`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `creditOption`

        Enhanced the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `validityPeriodType`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `validityPeriodType`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `validityPeriodType`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `creditOption`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `creditOption`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `creditOption`

        Enhanced the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `validityPeriodType`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `validityPeriodType`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `validityPeriodType`
    -   In the response body of the "Retrieve an order" operation:

        Added the following fields:

        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeFunction`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `commitmentType`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `creditOption`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeFunction`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `commitmentType`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `creditOption`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeFunction`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `commitmentType`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `creditOption`

        Enhanced the following fields:

        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `validityPeriodType`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `validityPeriodType`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `validityPeriodType`

####

API updates for retrieving account owner details from orders or subscriptions

The following items are the API updates for the retrieving account owner details from orders or subscriptions use case.

-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - Made the following updates:
    -   In the request body of the "Retrieve an order" operation, added the `getAccountDetails` query parameter.
    -   In the response body of the "Retrieve an order" operation, made the following changes:
        -   Added the `existingAccountDetails` nested field to the `order` field.
        -   Added the `subscriptionOwnerAccountDetails` nested field to the `order` > `subscriptions` field.
    -   In the response body of the “Create an order” operation, added the `subscriptionOwnerNumber` and `subscriptionOwnerID` fields.
-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - Made the following updates:
    -   In the request body of the "Retrieve a subscription by key" operation, added the `getSubscriptionOwnerDetails` and `getInvoiceOwnerDetails` query parameters.
    -   In the response body of the "Retrieve a subscription by key" operation, made the following changes:
        -   Added the `accountOwnerDetails` and `invoiceOwnerAccountDetails` fields.
        -   Updated the description of each of the `billToContact` and `soldToContact` fields.

####

Other API updates

The following items are other API updates included in this release:

-   [Files](https://developer.zuora.com/api-references/api/tag/Files) - Added the following operations:
    -   Restore a file
    -   Retrieve file status
-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - Made the following updates:
    -   In each of the following operations:

        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version

        Added the following query parameters:

        -   `getDetailedMetrics`
        -   `asOfDay`

        Added the following fields in the response body:

        -   `contractedNetMrr`
        -   `asOfDayGrossMrr`
        -   `asOfDayNetMrr`
        -   `ratePlans` > `contractedMrr`
        -   `ratePlans` > `contractedNetMrr`
        -   `ratePlans` > `asOfDayGrossMrr`
        -   `ratePlans` > `asOfDayNetMrr`
    -   In the "List subscriptions by account key" operation:

        Added the following query parameters:

        -   `getDetailedMetrics`
        -   `asOfDay`

        Added the following fields in the response body:

        -   `subscriptions` > `contractedNetMrr`
        -   `subscriptions` > `asOfDayGrossMrr`
        -   `subscriptions` > `asOfDayNetMrr`
        -   `subscriptions` > `ratePlans` > `contractedMrr`
        -   `subscriptions` > `ratePlans` > `contractedNetMrr`
        -   `ratePlans` > `asOfDayGrossMrr`
        -   `subscriptions` > `ratePlans` > `asOfDayNetMrr`
-   [Object Queries](https://developer.zuora.com/api-references/api/tag/Object-Queries/) - Made the following updates:
    -   In the "List invoices" and "Retrieve an invoice" operations, added the following enum values to the `expand[]` query parameter:
        -   `invoiceitems.subscription`
        -   `invoiceitems.subscription.account`
    -   In the "List credit memos" and "Retrieve an credit memo" operations, added the following enum values to the `expand[]` query parameter:
        -   `creditmemoitems.subscription`
        -   `creditmemoitems.subscription.account`
    -   In the "List debit memos" and "Retrieve an debit memo" operations, added the following enum values to the `expand[]` query parameter:
        -   `debitmemoitems.subscription`
        -   `debitmemoitems.subscription.account`
-   [Custom Object Definitions](https://developer.zuora.com/api-references/api/tag/Custom-Object-Definitions/) - Made the following updates to add support for the Long Text custom field type:
    -   Updated the description of the "Create custom object definitions" operation.
    -   In the request body of the "Create custom object definitions" operation, updated the description of the `definitions` > *`property name*`* > `properties` > *`property name*`* > `maxLength` field.
    -   In the 200 response body of each of the following operations, updated the description of the `definitions` > *`property name*`* > `schema` > `properties` > *`property name*`* > `maxLength` field.
        -   Create custom object definitions
        -   List custom object definitions
    -   In the 200 response body of the "Retrieve a custom object definition" operation, updated the description of the `schema` > `properties` > *`property name*`* > `maxLength` field.
    -   In the request body and 200 response body of the "Update a custom object definition" operation, updated the description of the `actions` > `field` > `definition` > `maxLength` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Preview an order
    -   Preview an order asynchronously

    Added the missing `DiscountFixedAmount` and `DiscountPercentage` enum values for each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`

    Removed the incorrect `DiscountFixedAmount` and `DiscountPercentage` enum values from each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Added the following missing fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Added the following missing fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
-   In the response body of the "Retrieve an order" operation, added the following missing fields:
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeTiered` > `uom`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `uom`
-   In the response body of the "Retrieve an order" operation, added the following missing fields:
    -   `productRatePlans` > `productRatePlanCharges` > `chargeFunction`
    -   `productRatePlans` > `productRatePlanCharges` > `commitmentType`
-   For the following objects in all relevant operations, updated the description of the `state` field in the request body and response body for better clarity:
    -   Bill To Contact
    -   Sold To Contact
    -   Payment Method
-   For the Payment Method object in all relevant Object Queries operations, updated the description of the `achState` field in the response body for better clarity.
-   For the Account object in all relevant Object Queries operations, added the missing `paymentMethodCascadingConsent` field to the response body.
-   In the response body of the "List payment methods of an account" operation, added enum values for the `returnedPaymentMethodType` > `type` field.
-   In the response body of the "Retrieve the default payment method of an account" operation, added enum values for the `type` field.
-   In the response body of the "Retrieve an account summary" operation, added enum values for the `basicInfo` > `defaultPaymentMethod` > `paymentMethodType` field.
-   In the request body of the "Create a journal run" operation, corrected the data type and updated the description of the `organizationLabels` field.

The following changes are applicable to the Older API Reference:

-   In the description of each of the "Amend" and "Subscribe" actions, added a missing note for the deprecation of the Subscribe and Amend features.
-   Updated the description of the "Amendments" section for better clarity.

##

April 29, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.05.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/25_Zuora_Release_2024.05.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for deprecation of the Subscribe and Amend features

-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions/) - In the description of the "Subscriptions" section and the description of each of the following operations, added a note for the deprecation of the Subscribe and Amend features:
    -   Preview a subscription
    -   Preview a subscription by subscription key
    -   Create a subscription
    -   List subscriptions by account key
    -   Retrieve a subscription by key
    -   Update a subscription
    -   Retrieve a subscription by key and version
    -   Renew a subscription
    -   Cancel a subscription
    -   Resume a subscription
    -   Suspend a subscription
    -   Delete a subscription by number
    -   Update subscription custom fields of a subscription version
-   [Object Queries](https://developer.zuora.com/api-references/api/tag/Object-Queries/) - In the description of each of the following operations, added a note for the deprecation of the Subscribe and Amend features:
    -   List amendments
    -   Retrieve an amendment

The following changes apply to the Older API Reference:

-   [Subscriptions](https://developer.zuora.com/api-references/older-api/tag/Subscriptions/) - In the description of the "Subscriptions" section and the description of each of the following operations, added a note for the deprecation of the Subscribe and Amend features:
    -   CRUD: Retrieve a subscription
    -   CRUD: Update a subscription
    -   CRUD: Delete a subscription
-   [Amendments](https://developer.zuora.com/api-references/older-api/tag/Amendments/) - In the description of the "Amendments" section and the description of each of the following operations, added a note for the deprecation of the Subscribe and Amend features:
    -   Retrieve an amendment
    -   Retrieve the last amendment of a subscription
    -   CRUD: Retrieve an amendment
    -   CRUD: Update an amendment
    -   CRUD: Delete an amendment
-   [Subscription Product Features](https://developer.zuora.com/api-references/older-api/tag/Subscription-Product-Features/) - In the description of the "Subscription Product Features" section and the description of each of the following operations, added a note for the deprecation of the Subscribe and Amend features:
    -   CRUD: Retrieve a subscription product feature

####

API updates for deprecation of the Invoice Adjustments, Invoice Item Adjustments, and Credit Balance Adjustments features

The following changes apply to the Older API Reference:

-   [Invoice Adjustments](https://developer.zuora.com/api-references/older-api/tag/Invoice-Adjustments/) - In the description of the "Invoice Adjustments" section and the description of each of the following operations, added a note for the deprecation of the Invoice Adjustment, Invoice Item Adjustment, and Credit Balance Adjustment features:
    -   CRUD: Create an invoice adjustment
    -   CRUD: Retrieve an invoice adjustment
    -   CRUD: Update an invoice adjustment
    -   CRUD: Delete an invoice adjustment
-   [Invoice Item Adjustments](https://developer.zuora.com/api-references/older-api/tag/Invoice-Item-Adjustments/) - In the description of the "Invoice Item Adjustments" section and the description of each of the following operations, added a note for the deprecation of the Invoice Adjustment, Invoice Item Adjustment, and Credit Balance Adjustment features:
    -   CRUD: Create an invoice item adjustment
    -   CRUD: Retrieve an invoice item adjustment
    -   CRUD: Update an invoice item adjustment
    -   CRUD: Delete an invoice item adjustment
-   [Credit Balance Adjustments](https://developer.zuora.com/api-references/older-api/tag/Credit-Balance-Adjustments/) - In the description of the "Credit Balance Adjustments" section and the description of each of the following operations, added a note for the deprecation of the Invoice Adjustment, Invoice Item Adjustment, and Credit Balance Adjustment features:
    -   CRUD: Create a credit balance adjustment
    -   CRUD: Retrieve a credit balance adjustment
    -   CRUD: Update a credit balance adjustment

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the following Object Queries operations, corrected the `filter[]` query parameter to required and updated the description of each of the operations:
    -   List rate plan charges
    -   List invoice items
    -   List payment method snapshots
-   In the description of the "Object Queries" section, updated the limitations to clarify that filtering on `null` or an empty string ( `''` ) is not supported.

##

April 26, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.05.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/25_Zuora_Release_2024.05.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Bill Run](https://developer.zuora.com/api-references/api/tag/Bill-Run) - Made the following updates:
    -   In the request body of the "Create a bill run" operation, added the following fields:
        -   `invoiceDateMonthOffset`
        -   `invoiceDateDayOfMonth`
        -   `targetDateMonthOffset`
        -   `targetDateDayOfMonth`
        -   `schedule` > `monthlyOnEndOfMonth`
    -   In the response body of each of the following operations:

        -   Create a bill run
        -   Retrieve a bill run
        -   Post a bill run
        -   Cancel a bill run
        -   Delete a bill run

        Added the following fields:

        -   `invoiceDateMonthOffset`
        -   `invoiceDateDayOfMonth`
        -   `targetDateMonthOffset`
        -   `targetDateDayOfMonth`
        -   `schedule` > `monthlyOnEndOfMonth`
-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos/) - In the request body of the "Create a credit memo from a charge" operation, added the `number` field.
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - In the request body of the "Create a debit memo from a charge" operation, added the `number` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the "Object Queries" section, made the following updates:
    -   Corrected the maximum value of the `pageSize` query parameter to 99 from 50.
    -   Added `10` as the default value for the `pageSize` query parameter.
    -   In the description of this section, added a limitation to clarify that filtering on unindexed fields is not supported.
    -   In the description of the "List custom objects" operation, added a note to clarify that sorting custom objects by ID is not supported.
-   Updated the "Base URL" section to add information about upcoming environments.

##

April 18, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "CRUD: Update a product rate plan charge" operation, updated the description of each of the following fields to include the WSDL version information:
    -   `RevenueRecognitionTiming`
    -   `RevenueAmortizationMethod`
-   In the "Update an account" operation, corrected the following nested fields in the `​​soldToContact` and `billToContact` fields to non-required:
    -   `firstName`
    -   `lastName`
-   In the request body of the "Create a billing preview run" operation, updated the description of the `storageOption` parameter.
-   Renamed the "Access to the API" section to "Base URL", and updated the base URL table for better clarity.

##

April 12, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.04.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/26_Zuora_Release_2024.04.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts/) - Made the following updates:
    -   Added the following operations:
        -   Configure cascading payment methods for an account
        -   Retrieve configuration of cascading payment methods for an account
    -   In the response body of the "Retrieve an account" operation, added the `billingAndPayment` > `paymentMethodCascadingConsent` nested field.
    -   In the response body of the "Retrieve an account summary" operation, added the `basicInfo` > `paymentMethodCascadingConsent` nested field.
-   [E-Invoicing](https://developer.zuora.com/api-references/api/tag/E-Invoicing) - Made the following updates:
    -   In the request body of each of the following operations, added the `responseMapping` field.
        -   Create an e-invoicing business region
        -   Update an e-invoicing business region
    -   In the 200 response body of each of the following operations, added the `responseMapping` field:
        -   Create an e-invoicing business region
        -   Retrieve an e-invoicing business region
        -   Update an e-invoicing business region
    -   In the 200 response body of the "List e-invoicing business regions" operation, added the `responseMapping` nested field to the `regions` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, added the missing `excludeItemBillingFromRevenueAccounting` nested field to the `charges` field:
    -   Create a debit memo from a charge
    -   Create a credit memo from a charge
-   In the request body of each of the following operations:

    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously
    -   Update an order

    Updated the description of each of the following fields for better clarity:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `billing` > `billingPeriod`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `billing` > `billingPeriod`
    -   `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `billing` > `billingPeriod`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner

    Updated the description of each of the following fields for better clarity:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `billing` > `billingPeriod`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `billing` > `billingPeriod`
    -   `orders` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `billing` > `billingPeriod`
-   In the response body of the "Retrieve an order" operation, updated the description of each of the following fields for better clarity:
    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `billing` > `billingPeriod`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `billing` > `billingPeriod`
    -   `order` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `billing` > `billingPeriod`
-   Updated the description of the "Data Labeling" section for better clarity.
-   Updated the description of the "List all settings" operation to remove the deprecated settings for custom fields.
-   Renamed the "Generate bulk PDF files" operation to "Export bulk PDF files".
-   Updated the description of the "Export bulk PDF files" to add a reference to an FAQ article in the Knowledge Center.

The following update applies to the Older API Reference:

-   In the request body of the "Amend" action, added the missing `requests` > `Amendments` > `RatePlanData` > `RatePlan` > `AmendmentSubscriptionRatePlanId` field.

##

April 5, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.04.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/26_Zuora_Release_2024.04.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Delivery-based Billing feature

The following items are the API updates specific to the General Availability announcement of the [Delivery-based Billing](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Delivery-based_Billing/A_Overview_of_Delivery-based_Billing) feature.

-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions/) - Made the following updates:
    -   In the response body of the "List subscriptions by account key" operation, removed the availability note in the description of the `subscriptions` > `ratePlans` > `ratePlanCharges` > `numberOfDeliveries` field.
    -   In the response body of each of the following operations, removed the availability note in the description of the `ratePlans` > `ratePlanCharges` > `numberOfDeliveries` field:
        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - Removed the availability note in each of the `recurringDelivery` and `recurringDeliveryBased` fields. The following operations are affected:
    -   Preview an order
    -   Preview an order asynchronously
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   List orders
    -   Retrieve an order
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

####

API updates for E-Invoicing feature

The following items are the API updates specific to the [E-Invoicing](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/E-Invoicing/AA_E-Invoicing_overview) feature.

-   [E-Invoicing](https://developer.zuora.com/api-references/api/tag/E-Invoicing) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an e-invoicing service provider
        -   Update an e-invoicing service provider

        Added the following fields:

        -   `apiKey`
        -   `secretKey`
        -   `clientCertificate`
        -   `clientCertificateType`
        -   `clientCertificatePassword`
    -   In the response body of the "Retrieve an e-invoicing service provider" operation, added the following fields:
        -   `apiKey`
        -   `clientCertificate`
        -   `clientCertificateType`
    -   In the response body of the "List e-invoice service providers" operation, added the following nested fields to the `serviceProviders` field:
        -   `apiKey`
        -   `clientCertificate`
        -   `clientCertificateType`

####

Other API updates

The following items are other API updates included in this release:

-   [Notifications](https://developer.zuora.com/api-references/api/tag/Notifications/) - Made the following updates:
    -   In the request body of the "Create or update email templates" operation, added the `emailHeaders` field to the `emailTemplates` field.
    -   In the request body of each of the following operations, added the `emailHeaders` field:
        -   Create an email template
        -   Update an email template
    -   In the 200 response body of each of the following operations, added the `emailHeaders` field:
        -   Create an email template
        -   Retrieve an email template
        -   Update an email template
    -   In the 200 response body of the "List email templates" operation, added the `emailHeaders` field to the `data` field.
-   [Data Queries](https://developer.zuora.com/api-references/api/tag/Data-Queries/) - In the "List data query jobs" operation, increased the number of records per page size in the `pageSize` query parameter from 100 to 1000.
-   [AQuA](https://developer.zuora.com/api-references/api/tag/Aggregate-Queries/) - Made the following updates:
    -   In the request body of the "Submit an aggregate query job" operation, deprecated the following field and field value:
        -   The `warehouseSize` field
        -   The `warehouse` enum value for the `sourceData` field
    -   In the response body of the "Submit an aggregate query job" operation, deprecated the `warehouse` value for the `sourceData` field.

##

March 28, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.04.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/26_Zuora_Release_2024.04.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Object Queries](https://developer.zuora.com/api-references/api/tag/Object-Queries/) - Added an "Object Queries" section that contains standardized GET methods to query Billing and Payments objects. For more information about Object Queries, see [2024.04.R1 Release Notes](https://knowledgecenter.zuora.com/Releases/47_2024_releases/26_Zuora_Release_2024.04.R1#Object_Query_API_operations_now_available) .
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following updates to support the Tiered Pricing charge model for the [Standalone Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/Standalone_Orders/AA_Overview_of_Standalone_Orders) feature:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order

        Added the `Tiered` enum value for each of the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
        -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the `Tiered` enum value for each of the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
    -   In the response body of the "Retrieve an order" operations, added the `Tiered` enum value for each of the following fields:
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order
    -   Preview an order
    -   Preview an order asynchronously

    Added the `endDate` nested field to the following fields:

    -   `subscriptions` > `orderActions` > `createSubscription` > `terms` > `initialTerm`
    -   `subscriptions` > `orderActions` > `termsAndConditions` > `lastTerm`
-   [Usage](https://developer.zuora.com/api-references/api/tag/Usage/) - Made the following updates to support the Negative Quantity Usage feature:
    -   In the request body of each of the following operations, enhanced the `Quantity` field to support negative values:
        -   CRUD: Create a usage record
        -   CRUD: Update a usage record
    -   In the response body of the "CRUD: Retrieve a usage record" operation, enhanced the the `Quantity` field to support negative values.
    -   In the response body of the "Retrieve a usage record" operation, enhanced the `usage` > `quantity` field to support negative values.
    -   In the response body of the "Retrieve usage rate detail for an invoice item" operation, enhanced the `data` > `quantity` field to support negative values.
-   [Billing Preview Run](https://developer.zuora.com/api-references/api/tag/Billing-Preview-Run/) - In the request body of the "Create a billing preview run" operation, added the `storeDifference` and `comparedBillingPreviewRunId` fields to support comparing the current billing preview run result with a specified billing preview run result and storing the difference in the database.
-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos/) - In the description of the "Unpost a credit memo" operation, added information about preventing the unpost operation.
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - In the description of the "Unpost a debit memo" operation, added information about preventing the unpost operation.
-   [Payment Schedules](https://developer.zuora.com/api-references/api/tag/Payment-Schedules/) - In the "Retrieve a payment schedule" operation, added the following fields to the response body and updated the corresponding sample values:
    -   `cancelledById`
    -   `cancelledOn`
    -   `cancelDate`
-   [Data Labeling](https://developer.zuora.com/api-references/api/tag/Data-Labeling/) - In the request body of the "Submit a data labeling job" operation, updated the description of the following fields to support the use case of unlabeling objects:
    -   `orgIds`
    -   `orgs`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order

    Added the missing `DiscountFixedAmount` and `DiscountPercentage` enum values for each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`

    Removed the incorrect `DiscountFixedAmount` and `DiscountPercentage` enum values from each of the following fields:

    -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
    -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
    -   `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
-   In the response body of each of the following operations:

    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
    -   List pending orders by subscription number

    Added the missing `DiscountFixedAmount` and `DiscountPercentage` enum values for each of the following fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`

    Removed the incorrect `DiscountFixedAmount` and `DiscountPercentage` enum values from each of the following fields:

    -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
    -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
    -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
-   In the response body of the "Retrieve an order" operation:

    Added the missing `DiscountFixedAmount` and `DiscountPercentage` enum values for each of the following fields:

    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`

    Removed the incorrect `DiscountFixedAmount` and `DiscountPercentage` enum values from each of the following fields:

    -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
    -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
    -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
-   In the response body of the `Retrieve usage rate detail for an invoice item` operation, corrected the type and format of the `data` > `quantity` field.
-   In the response body of the `Retrieve a usage record` operation, corrected the type and format of the `usage` > `quantity` field.
-   In the description of the "List all settings" operation, added the Zuora Tax Engine section.
-   In the request body of the "Create a standalone invoice" and "Create standalone invoices" operations, updated the description of the `invoices` > `invoiceItems` field for better clarity.
-   Updated the description of the "Refund a payment with auto-unapplying" operation.
-   Updated the description of the "Data Labeling" section for better clarity.

##

March 22, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.03.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/27_Zuora_Release_2024.03.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Payment Methods](https://developer.zuora.com/api-references/api/tag/Payment-Methods/) - In the request body of the "Create a payment method" operation, added the following fields for the `ACH` payment method type:
    -   `tokens`
    -   `bankAccountMaskNumber`
-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts) - In the request body of the "Create an account" operation, added the following fields for the `ACH` payment method type:
    -   `paymentMethod` > `tokens`
    -   `paymentMethod` > `bankAccountMaskNumber`
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously

    Added the following fields for the `ACH` payment method type:

    -   `newAccount` > `paymentMethod` > `tokens`
    -   `newAccount` > `paymentMethod` > `bankAccountMaskNumber`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Generate bulk PDF files" operation, added enum values for the `docType` field.
-   Updated the description of each of the following operations for better clarity:
    -   Create an order
    -   Update an order
    -   Cancel an order
-   In the request body of each of the following operations, updated the descriptions of the `status` and `schedulingOptions` fields for better clarity:
    -   Create an order
    -   Update an order
-   In the response body of the "Retrieve an order" operation, updated the descriptions of the `status` and `schedulingOptions` nested fields of the `order` field for better clarity.
-   In the response body of each of the following operations, updated the descriptions of the `status` and `schedulingOptions` nested fields of the `orders` field for better clarity:
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
-   For the following objects in all relevant operations, updated the description of the `country` field in the request body and response body for better clarity:
    -   E-Invoicing Business Region
    -   E-Invoice File Template
    -   Payment Method
-   In the "List e-invoice file templates" operation, updated the description of the `country` query parameter for better clarity.
-   In the description of the "List payments" operation, added filtering condition information.
-   In the request body and response body of the "Submit an aggregate query job" operation, corrected the data type of the `offset` field from number to integer.

##

March 15, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.03.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/27_Zuora_Release_2024.03.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for E-Invoicing with PEPPOL

The following items are the API updates specific to the [E-invoicing with PEPPOL](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/E-Invoicing/AE_E-invoicing_with_PEPPOL) feature.

-   [E-Invoicing](https://developer.zuora.com/api-references/api/tag/E-Invoicing) - Made the following updates:
    -   In the request body of the "Create an e-invoicing service provider" operation, added the `PEPPOL` enum value to the `provider` field.
    -   In the 200 response body of each of the following operations, added the `PEPPOL` enum value to the `provider` field:
        -   Create an e-invoicing service provider
        -   Retrieve an e-invoicing service provider
        -   Update an e-invoicing service provider
    -   In the 200 response body of the "List e-invoicing service providers" operation, added the `PEPPOL` enum value to the `serviceProviders` > `provider` field.
-   [Invoices](https://developer.zuora.com/api-references/api/tag/Invoices) - In the 200 response body of the "Retrieve an invoice" operation, added the `Generated` enum value to the `einvoiceStatus` field.
-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos/) - Made the following updates:
    -   In the 200 response body of each of the following operations, added the `Generated` enum value to the `memos` > `einvoiceStatus` field.
        -   Create credit memos
        -   Update credit memos
    -   In the 200 response body of each of the following operations, added the `Generated` enum value to the `einvoiceStatus` field.
        -   Create a credit memo from a charge
        -   Create a credit memo from an invoice
        -   Retrieve a credit memo
        -   Update a credit memo
        -   Apply a credit memo
        -   Unapply a credit memo
        -   Cancel a credit memo
        -   Post a credit memo
        -   Unpost a credit memo
    -   In the 200 response body of the "List credit memos" operation, added the `Generated` enum value to the `creditmemos` > `einvoiceStatus` field.
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - Made the following updates:
    -   In the 200 response body of each of the following operations, added the `Generated` enum value to the `memos` > `einvoiceStatus` field.
        -   Create debit memos
        -   Update debit memos
    -   In the 200 response body of each of the following operations, added the `Generated` enum value to the `einvoiceStatus` field.
        -   Create a debit memo from a charge
        -   Create a debit memo from an invoice
        -   Retrieve a debit memo
        -   Update a debit memo
        -   Cancel a debit memo
        -   Post a debit memo
        -   Unpost a debit memo
    -   In the 200 response body of the "List debit memos" operation, added the `Generated` enum value to the `debitmemos` > `einvoiceStatus` field.

####

API updates for adding support for "Zuora custom event" event type in Notifications

The following items are the API updates specific to adding support for the "Zuora custom event" event type in the Events and Notifications feature.

-   [Notifications](https://developer.zuora.com/api-references/api/tag/Notifications/) - Made the following updates:
    -   Updated the description of each of the following operations:
        -   Create a notification definition
        -   List notification definitions
        -   Retrieve a notification definition
        -   Update a notification definition
        -   Delete a notification definition
    -   In the request body of the "Create a notification definition" operation, updated the description of each of the following fields:
        -   `eventTypeName`
        -   `eventTypeNamespace`
    -   In the 200 response body of each of the following operations:

        -   Create a notification definition
        -   Retrieve a notification definition
        -   Update a notification definition

        Updated the description of each of the following fields:

        -   `eventTypeName`
        -   `eventTypeNamespace`
    -   For the "List notification definitions" operation, updated the description of the `eventTypeName` query parameter.
    -   In the 200 response body of the "List notification definitions" operation, updated the description of each of the following fields:
        -   `data` > `eventTypeName`
        -   `data` > `eventTypeNamespace`

####

Other API updates

The following items are other API updates included in this release:

-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - Made the following updates:
    -   In the response body of each of the following operations:

        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version

        Added the following fields:

        -   `ratePlans` > `ratePlanCharges` > `upsellOriginChargeNumber`
        -   `ratePlans` > `ratePlanCharges` > `chargeFunction`
        -   `ratePlans` > `ratePlanCharges` > `commitmentType`
    -   In the response body of the "List subscriptions by account key" operation, added the following fields:
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `upsellOriginChargeNumber`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `chargeFunction`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `commitmentType`
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `upsellOriginChargeNumber`
        -   `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `upsellOriginChargeNumber`
        -   `orderLineItems` > `currency`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `upsellOriginChargeNumber`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `upsellOriginChargeNumber`
        -   `orders` > `orderLineItems` > `currency`
    -   In the response body of the "Retrieve an order" operations, added the following fields:
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `upsellOriginChargeNumber`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `upsellOriginChargeNumber`
        -   `order` > `orderLineItems` > `currency`
    -   In the request body of the "Update an order" operation, deprecated the `newAccount` field.
-   [Order Line Items](https://developer.zuora.com/api-references/api/tag/Order-Line-Items) - Made the following updates:
    -   In the response body of each of the following operations, added the `orderLineItem` > `currency` field:
        -   Retrieve an order line item
        -   Update order line items
-   [Product Rate Plan Charges](https://developer.zuora.com/api-references/api/tag/Product-Rate-Plan-Charges/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   CRUD: Create a product rate plan charge
        -   CRUD: Update a product rate plan charge

        Added the following fields:

        -   `ChargeFunction`
        -   `CommitmentType`
    -   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the following fields:
        -   `ChargeFunction`
        -   `CommitmentType`
    -   In the 200 response body of the "Retrieve a product rate plan charge" operation, added the following fields:
        -   `chargeFunction`
        -   `commitmentType`
-   [Regenerate](https://developer.zuora.com/api-references/api/tag/Regenerate/) - In each of the following operations, added the `onlyReSend` query parameter:
    -   Regenerate booking transactions
    -   Regenerate billing transactions
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Preview an order
        -   Preview an order asynchronously
        -   Create an order
        -   Create an order asynchronously

        Added the `subscriptionRatePlanNumber` field to the following nested fields:

        -   `subscriptions` > `addProduct`
        -   `subscriptions` > `createSubscription` > `subscribeToRatePlans`
        -   `subscriptions` > `changePlan`
    -   In the response body of the "Preview an order" operation, added the `subscriptionRatePlanNumber` field to the following nested fields:
        -   `previewResult` > `chargeMetrics` > `charges`
        -   `previewResult` > `orderMetrics` > `orderActions` > `orderMetrics`
-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos/) - Added an operation called "List all files of a credit memo".
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - Added an operation called "List all files of a debit memo".
-   [Operations](https://developer.zuora.com/api-references/api/tag/Operations/) - Added the following operations:
    -   Generate bulk PDF files
    -   Retrieve information of a bulk PDF file generation job
-   [Invoices](https://developer.zuora.com/api-references/api/tag/Invoices/) - Updated the description of the "List all application parts of an invoice" operation.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   Updated the description of each of the following operations for better clarity:
    -   Create an order
    -   Update an order
    -   Cancel an order
-   In the request body of each of the following operations, updated the descriptions of the `status` and `schedulingOptions` fields for better clarity:
    -   Create an order
    -   Update an order
-   In the response body of the "Retrieve an order" operation, updated the descriptions of the `status` and `schedulingOptions` nested fields of the `order` field for better clarity.
-   In the response body of each of the following operations, updated the descriptions of the `status` and `schedulingOptions` nested fields of the `orders` field for better clarity:
    -   List orders
    -   List orders of a subscription owner
    -   List orders by subscription number
    -   List orders of an invoice owner
-   In the response body of the "Create an order" operation, corrected the data format for each of the following fields:
    -   `orderLineItems` > `id`
    -   `orderLineItems` > `itemNumber`
-   In each of the following operations, updated the description of the `reMigrate` query parameter:
    -   Regenerate booking transactions
    -   Regenerate billing transactions
-   In the request body of the "Create an account" operation, updated the description of each of the following fields for better clarity:
    -   `paymentMethod` > `tokenize` for the `Bacs` payment method type
    -   `paymentMethod` > `processingOptions` > `checkDuplicated` for the `CreditCard` payment method type
-   In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously

    Updated the description of each of the following fields for better clarity:

    -   `newAccount` > `paymentMethod` > `tokenize` for the `Bacs` payment method type
    -   `newAccount` > `paymentMethod` > `processingOptions` > `checkDuplicated` for the `CreditCard` payment method type
-   In the request body of the "Create a payment method" operation, updated the description of each of the following fields for better clarity:
    -   `tokenize` for the `Bacs` payment method type
    -   `processingOptions` > `checkDuplicated` for the `CreditCard` payment method type
-   Updated the description of each of the following operations for better clarity:
    -   Create custom object records
    -   Update a custom object record
    -   Partially update a custom object record
    -   Update or delete custom object records

##

March 7, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.03.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/27_Zuora_Release_2024.03.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - Added a new operation called "Preview a subscription by subscription key".

##

March 1, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.03.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/27_Zuora_Release_2024.03.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for passing identity number when creating Credit Card payment method

The following items are the API updates specific to a system behavior change introduced by the support of passing the identity number in the creation of a Credit Card payment method.

-   [Payment Methods](https://developer.zuora.com/api-references/api/tag/Payment-Methods/) - Made the following updates:
    -   In the request body of the "Create a payment method" operation, added the `identityNumber` field for the `CreditCard` payment method type.
    -   In the response body of the "Retrieve a payment method" operation, updated the description of the `identityNumber` nested field.
-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts) - Made the following updates:
    -   In the request body of the "Create an account" operation, added the `paymentMethod` > `identityNumber` nested field for the `CreditCard` payment method type.
    -   In the response body of the "List payment methods of an account" operation, updated the description of the `returnedPaymentMethodType` > `identityNumber` nested field.
    -   In the response body of the "Retrieve the default payment method of an account" operation, updated the description of the `identityNumber` nested field.
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of each of the following operations, added the `newAccount` > `paymentMethod` > `identityNumber` nested field for the `CreditCard` payment method type:
    -   Create an order
    -   Create an order asynchronously

###

API updates on currency field in response of billing document operations

-   [Billing Documents](https://developer.zuora.com/api-references/api/tag/Billing-Documents/) - In the response body of the "List billing documents for an account" operation, added the `currency` field.
-   [Invoices](https://developer.zuora.com/api-references/api/tag/Invoices/) - In the response body of the "Retrieve an invoice" operation, updated the description of the `currency` field.
-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos/) - Made the following updates:
    -   In the response body of the "Retrieve a credit memo" operation, updated the description of the `currency` field.
    -   In the response body of the "List credit memos" operation, updated the description of the `creditmemos` > `currency` field.
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - Made the following updates:
    -   In the response body of the "Retrieve a debit memo" operation, updated the description of the `currency` field.
    -   In the response body of the "List debit memos" operation, updated the description of the `debitmemos` > `currency` field.

###

Other API updates

-   [Regenerate](https://developer.zuora.com/api-references/api/tag/Regenerate/) - Made the following updates:
    -   Updated the API endpoint for each of the following operations:
        -   Regenerate revenue recognition events transactions for Delivery Schedule
        -   Regenerate revenue recognition events transactions for Daily Consumption
    -   In each of the following operations, added a query parameter called `forRevenueRecollect` :
        -   Regenerate revenue recognition events transactions for Delivery Schedule
        -   Regenerate revenue recognition events transactions for Daily Consumption
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `subscriptions` > `orderActions` > `removeProduct` > `customFields`
        -   `subscriptions` > `orderActions` > `removeProduct` > `chargeUpdates`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `subscriptions` > `orderActions` > `removeProduct` > `customFields`
        -   `orders` > `subscriptions` > `orderActions` > `removeProduct` > `chargeUpdates`
    -   In the response body of the "Retrieve an order" operations, added the following fields:
        -   `order` > `subscriptions` > `orderActions` > `removeProduct` > `customFields`
        -   `order` > `subscriptions` > `orderActions` > `removeProduct` > `chargeUpdates`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of the "List all items of an invoice" operation, added the missing `applicableTaxUnRounded` and `country` nested fields to the `taxationItems` field.
-   For each of the following settings in the Settings API, corrected the `templateFileName` field from required to optional:
    -   `AllCreditMemoTemplates`
    -   `AllDebitMemoTemplates`

##

February 23, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.02.R2](https://knowledgecenter.zuora.com/Releases/47_2024_releases/28_Zuora_Release_2024.02.R2). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Payments](https://developer.zuora.com/api-references/api/tag/Payments/) - For the "Refund a payment with auto-unapplying" operation, made the following updates:
    -   In the request body, removed the availability note for each of the following fields because these fields are now generally available:
        -   `writeOff`
        -   `writeOffOptions`
    -   In the response body, removed the availability note for the `writeOffResults` field because this field is now generally available.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Update a payment schedule item" operation, corrected the data type and the correspnding sample value for each of the following fields:
    -   `linkPayments`
    -   `unlinkPayments`
-   In the response body of the "Invoice and collect" operation, made the following updates:
    -   Corrected the `creditMemos` > `memoAmount` field to the `creditMemos` > `totalAmount` field.
    -   Corrected the data type of the `amountCollected` field from string to number.
-   In the request body of each of the following operations, introduced a filtering mechanism for the  `type`  field within the payment method object, to show only the relevant fields for the selected payment method type:
    -   Create a payment method
    -   Create an order
    -   Create an order asynchronously
    -   Update an order
-   In the request body of the "Generate an RSA signature" operation, corrected the value for the US Cloud 1 Sandbox environment in the `uri` field.

The following update applies to the Older API Reference:

-   In the request body of the "Amend" action, updated the description of the `Amendments` > `BookingDate` field for better clarity.

##

February 8, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.02.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/29_Zuora_Release_2024.02.R1).

-   [Data Backfill](https://developer.zuora.com/api-references/api/tag/Data-Backfill/) - Added a section called "Data Backfill" that contains the following operations:
    -   Create a booking date backfill job
    -   List all booking date backfill jobs
    -   Retrieve a booking date backfill job
    -   Stop a booking date backfill job
    -   Create a data backfill job
    -   Retrieve a data backfill job
    -   Stop a data backfill job
    -   List all data backfill jobs
    -   Download a data backfill template file
-   [Prepaid with Drawdown](https://developer.zuora.com/api-references/api/tag/Prepaid-with-Drawdown/) - Added an operation called "Deplete funds".
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `orderLineItems` > `RevenueAmortizationMethod`
        -   `orderLineItems` > `RevenueRecognitionTiming`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `orderLineItems` > `RevenueAmortizationMethod`
        -   `orders` > `orderLineItems` > `RevenueRecognitionTiming`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueAmortizationMethod`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionTiming`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueAmortizationMethod`
        -   `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionTiming`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `revenueAmortizationMethod`
        -   `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `revenueRecognitionTiming`
    -   In the response body of the "Retrieve an order" operations, added the following fields:
        -   `order` > `orderLineItems` > `RevenueAmortizationMethod`
        -   `order` > `orderLineItems` > `RevenueRecognitionTiming`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueAmortizationMethod`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionTiming`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueAmortizationMethod`
        -   `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionTiming`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `revenueAmortizationMethod`
        -   `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `revenueRecognitionTiming`
-   [Order Line Items](https://developer.zuora.com/api-references/api/tag/Order-Line-Items) - Made the following updates:
    -   In the request body of the "Update an order line item" operation, added the `revenueAmortizationMethod` and `revenueRecognitionTiming` fields.
    -   In the request body of the "Update order line items" operation, added the `revenueAmortizationMethod` and `revenueRecognitionTiming` nested fields to the `orderLineItems` field.
    -   In the response body of each of the following operations, added the `revenueAmortizationMethod` and `revenueRecognitionTiming` nested fields to the `orderLineItem` field:
        -   Retrieve an order line item
        -   Update order line items
-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - Made the following updates:
    -   In the response body of each of the following operations:

        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version

        Added the following fields:

        -   `ratePlans` > `ratePlanCharges` > `revenueAmortizationMethod`
        -   `ratePlans` > `ratePlanCharges` > `revenueRecognitionTiming`
    -   In the response body of the "List subscriptions by account key" operation, added the following fields:
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `revenueAmortizationMethod`
        -   `subscriptions` > `ratePlans` > `ratePlanCharges` > `revenueRecognitionTiming`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of the "Update order line items" operation, adding the missing `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting` nested fields to the `orderLineItems` field.
-   In the source YAML file, made the following updates to avoid confusion:
    -   Renamed the `CommonResponseType` schema to `CommonResponse` .
    -   Removed the redundant `CommonErrorResponse` schema.
    -   Updated each reference to the `CommonErrorResponse` or `CommonResponseType` schema to be referencing `CommonResponse` .

##

February 2, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.02.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/29_Zuora_Release_2024.02.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for duplication check on payment methods

The following items are the API updates specific to a system behavior change for duplication check on payment methods.

-   [Payment Methods](https://developer.zuora.com/api-references/api/tag/Payment-Methods/) - Made the following updates:
    -   In the request body of each of the following operations, added the `processingOptions` field and its nested field:
        -   Create a payment method
        -   Update a payment method
    -   In the request body of the "Create a payment method" operation, updated the description of the `checkDuplicated` field.
-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts) - In the request body of the "Create an account" operation, made the following updates:
    -   Added the `processingOptions` field and its nested field to the `paymentMethod` field.
    -   Updated the description of the `paymentMethod` > `checkDuplicated` nested field.
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of each of the following operations:

    -   Create an order
    -   Create an order asynchronously
    -   Update an order

    Made the following updates:

    -   Added the `processingOptions` field and its nested field to the `newAccount` > `paymentMethod` field.
    -   Updated the description of the `newAccount` > `paymentMethod` > `checkDuplicated` nested field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create a notification definition
    -   Update a notification definition

    Reorganized the nested fields of the `callout` field according to the following scenarios:

    -   Without authentication
    -   Base authentication
    -   OAuth 2.0 authentication

##

January 26, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.02.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/29_Zuora_Release_2024.02.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for the Invoice Grouping feature

The following items are the API updates specific to the [Invoice Grouping](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Invoice_Grouping) feature.

-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos) - Made the following updates:
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` field:
        -   Create a credit memo from a charge
        -   Create a credit memo from an invoice
        -   Retrieve a credit memo
        -   Update a credit memo
        -   Apply a credit memo
        -   Unapply a credit memo
        -   Cancel a credit memo
        -   Post a credit memo
        -   Unpost a credit memo
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` nested field to the `memos` field:
        -   Create credit memos
        -   Update credit memos
    -   In the response body of the "List credit memos" operation, added the `invoiceGroupNumber` nested field to the `creditmemos` field.
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos) - Made the following updates:
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` field:
        -   Create a debit memo from a charge
        -   Create a debit memo from an invoice
        -   Retrieve a debit memo
        -   Update a debit memo
        -   Cancel a debit memo
        -   Post a debit memo
        -   Unpost a debit memo
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` nested field to the `memos` field:
        -   Create debit memos
        -   Update debit memos
    -   In the response body of the "List debit memos" operation, added the `invoiceGroupNumber` nested field to the `debitmemos` field.
-   [Invoices](https://developer.zuora.com/api-references/api/tag/Invoices) - Made the following updates:
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` field:
        -   Retrieve an invoice
        -   Create a standalone invoice
    -   In the response body of the "Create standalone invoices" operation, added the `invoiceGroupNumber` nested field to the `invoices` field.
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders/) - Made the following changes:
    -   In the request body of each of the following operations:

        -   Create an order
        -   Create an order asynchronously
        -   Update an order
        -   Preview an order
        -   Preview an order asynchronously

        Added the following fields:

        -   `orderLineItems` > `invoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `createSubscription` > `invoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingInvoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `invoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingInvoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceGroupNumber`
        -   `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingInvoiceGroupNumber`
    -   In the response body of each of the following operations:

        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number

        Added the following fields:

        -   `orders` > `orderLineItems` > `invoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingInvoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `invoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingInvoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceGroupNumber`
        -   `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingInvoiceGroupNumber`
    -   In the response body of the "Retrieve an order" operations, added the following fields:
        -   `order` > `orderLineItems` > `invoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingInvoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `renewSubscription` > `invoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingInvoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceGroupNumber`
        -   `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingInvoiceGroupNumber`
-   [Order Line Items](https://developer.zuora.com/api-references/api/tag/Order-Line-Items) - Made the following updates:
    -   In the request body of the "Update an order line item" operation, added the `invoiceGroupNumber` field.
    -   In the request body of the "Update order line items" operation, added the `invoiceGroupNumber` nested field to the `orderLineItems` field.
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` nested field to the `orderLineItem` field:
        -   Retrieve an order line item
        -   Update order line items
-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - Made the following updates:
    -   In the response body of each of the following operations, added the `invoiceGroupNumber` field:
        -   Retrieve a subscription by key
        -   Retrieve a subscription by key and version
    -   In the response body of the "List subscriptions by account key" operation, added the `invoiceGroupNumber` nested field to the `subscriptions` field.

####

Other API updates

The following items are other API updates included in this release:

-   [Notifications](https://developer.zuora.com/api-references/api/tag/Notifications/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   Create an email template
        -   Update an email template

        Updated the description of each of the following fields to clarify that merge fields enclosed by double curly brackets are supported now.

        -   `emailBody`
        -   `emailSubject`
    -   In the request body of the "Create or update email templates" operation, updated the description of each of the following fields to clarify that merge fields enclosed by double curly brackets are supported now.
        -   `emailTemplates` > `emailBody`
        -   `emailTemplates` > `emailSubject`
    -   In the 200 response body of each of the following operations:

        -   Create an email template
        -   Update an email template
        -   Retrieve an email template

        Updated the description of each of the following fields to clarify that merge fields enclosed by double curly brackets are supported now.

        -   `emailBody`
        -   `emailSubject`
    -   In the 200 response body of the "List email templates" operation, updated the description of each of the following fields to clarify that merge fields enclosed by double curly brackets are supported now.
        -   `data` > `emailBody`
        -   `data` > `emailSubject`

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations, updated the description of the `associatedAccount` field for better clarity.
    -   Create a notification definition
    -   Update a notification definition
-   In the 200 response body of each of the following operations, updated the description of the `associatedAccount` field for better clarity.
    -   Create a notification definition
    -   Retrieve a notification definition
    -   Update a notification definition
-   In the 200 response body of the "List notification definitions" operation, updated the description of the `data` > `associatedAccount` field for better clarity.

##

January 19, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.02.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/29_Zuora_Release_2024.02.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Invoices](https://developer.zuora.com/api-references/api/tag/Invoices/) - Added an operation called "Retrieve the PDF file generation status of invoices".
-   [Credit Memos](https://developer.zuora.com/api-references/api/tag/Credit-Memos/) - Added an operation called "Retrieve the PDF file generation status of credit memos".
-   [Debit Memos](https://developer.zuora.com/api-references/api/tag/Debit-Memos/) - Added an operation called "Retrieve the PDF file generation status of debit memos".
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - Made the following changes:
    -   In the response body of each of the following operations, added the `scheduledOrderActivationResponse` nested field to the `orders` field:
        -   List orders
        -   List orders of a subscription owner
        -   List orders by subscription number
        -   List orders of an invoice owner
        -   List pending orders by subscription number
    -   In the response body of the "Retrieve an order" operation, added the `scheduledOrderActivationResponse` nested field to the `order` field.
-   [Payment Gateway Reconciliation](https://developer.zuora.com/api-references/api/tag/Payment-Gateway-Reconciliation/) - Updated the description of each of the following operations for system behavior changes introduced by a Gateway Reconciliation enhancement:
    -   Reject a payment
    -   Reverse a payment
-   [Notifications](https://developer.zuora.com/api-references/api/tag/Notifications/) - Made the following changes:
    -   Updated the description of each of the following operations for supporting notification definitions for standard events:
        -   Create a notification definition
        -   List notification definitions
        -   Retrieve a notification definition
        -   Update a notification definition
        -   Delete a notification definition
    -   In the request body of the "Create a notification definition" operation, made the following updates:
        -   Added the `eventCategory` field.
        -   Updated the description of each of the following fields for better clarity:
            -   `eventTypeName`
            -   `eventTypeNamespace`
    -   In the 200 response body of each of the following operations:

        -   Create a notification definition
        -   Retrieve a notification definition
        -   Update a notification definition

        Made the following updates:

        -   Added the following fields:
            -   `eventCategory`
            -   `eventId`
        -   Updated the description of each of the following fields for better clarity:
            -   `eventTypeName`
            -   `eventTypeNamespace`
    -   For the "List notification definitions" operation, made the following updates:
        -   Added a query parameter called `eventCategory` that accepts the event category codes for standard events.
        -   Updated the description of the `eventTypeName` query parameter for better clarity.
    -   In the 200 response body of the "List notification definitions" operation, made the following updates:
        -   Added the following fields:
            -   `data` > `eventCategory`
            -   `data` > `eventId`
        -   Updated the description of each of the following fields for better clarity:
            -   `data` > `eventTypeName`
            -   `data` > `eventTypeNameSpace`
-   [E-Invoicing](https://developer.zuora.com/api-references/api/tag/E-Invoicing) - Made the following updates:
    -   In the request body of each of the "Create an e-invoicing service provider" and "Update an e-invoicing service provider" operations:
        -   Added the `companyIdentifier` field.
        -   Removed the `apiKey` and `secretKey` fields.
    -   In the 200 response body of each of the following operations, added the `companyIdentifier` field and removed the `apiKey` field:
        -   Create an e-invoicing service provider
        -   Retrieve an e-invoicing service provider
        -   Update an e-invoicing service provider
    -   In the 200 response body of the "List e-invoicing service providers" operation, made the following updtes:
        -   Added the `companyIdentifier` nested field to the `serviceProviders` field.
        -   Removed the `apiKey` nested field from the `serviceProviders` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

####

Doc updates for the Delivery Adjustments feature

The following items are the documentation updates specific to the [Delivery Adjustments](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Delivery_Adjustments) feature.

-   In the request body of each of the following operations:

    -   Create a delivery adjustment
    -   Preview a delivery adjustment

    Updated the description of each of the following fields for better clarity:

    -   `deferredRevenueAccountingCode`
    -   `recognizedRevenueAccountingCode`
    -   `revenueRecognitionRuleName`
-   In the response body of each of the following operations:

    -   Create a delivery adjustment
    -   Preview a delivery adjustment

    Updated the description of each of the following fields for better clarity:

    -   `adjustments` > `deferredRevenueAccountingCode`
    -   `adjustments` > `recognizedRevenueAccountingCode`
    -   `adjustments` > `revenueRecognitionRuleName`
    -   `ineligibleAdjustments` > `deferredRevenueAccountingCode`
    -   `ineligibleAdjustments` > `recognizedRevenueAccountingCode`
    -   `ineligibleAdjustments` > `revenueRecognitionRuleName`
-   In the response body of the "List all delivery adjustments of a subscription" operation, updated the description of each of the following fields for better clarity:
    -   `adjustments` > `deferredRevenueAccountingCode`
    -   `adjustments` > `recognizedRevenueAccountingCode`
    -   `adjustments` > `revenueRecognitionRuleName`
-   In the response body of the "Retrieve a delivery adjustment" operation, updated the description of each of the following fields for better clarity:
    -   `deferredRevenueAccountingCode`
    -   `recognizedRevenueAccountingCode`
    -   `revenueRecognitionRuleName`

####

Other doc updates

The following items are the other general documentation updates included in this release:

-   In the description of the "Create an event trigger" operation, added the missing base objects.
-   In the request body of each of the following operations, added the missing `Formula` field.
    -   CRUD: Create a product rate plan charge
    -   CRUD: Update a product rate plan charge
-   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the missing `Formula` field.
-   In the 200 response body of the "Retrieve a product rate plan charge" operation, added the following missing fields.
    -   `formula`
    -   `applyToBillingPeriodPartially`
    -   `isPrepaid`
    -   `prepaidOperationType`
    -   `prepaidQuantity`
    -   `prepaidTotalQuantity`
    -   `prepaidUom`
    -   `validityPeriodType`
    -   `drawdownRate`
    -   `drawdownUom`
    -   `creditOption`
    -   `isRollover`
    -   `rolloverApply`
    -   `rolloverPeriodLength`
    -   `rolloverPeriods`
-   In the 200 reponse body of the "CRUD: Retrieve a product rate plan charge" operation and the request body of each of the following operations:

    -   CRUD: Create a product rate plan charge
    -   CRUD: Update a product rate plan charge

    Updated the description for each of the following fields to indicate the requirement of the `X-Zuora-WSDL-Version` request header:

    -   `IsAllocationEligible`
    -   `IsUnbilled`
    -   `ProductCategory`
    -   `ProductClass`
    -   `ProductFamily`
    -   `ProductLine`
-   In the request body of the "Create a payment" operation, updated the description of the `type` field.
-   In the request body of the "Create credit memos" operation, updated the description of the `memos` > `items` > `taxMode` field to clarify that this field only needs to be included when the credit memo needs to be processed with a different tax mode.

##

January 11, 2024

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of the "Create a payment method" operation, updated the enum values of the `bankAccountType` field.
-   In the response body of the "Retrieve a payment method" operation, updated the enum values of the `bankAccountType` field.
-   In the response body of the "List custom exchange rates by currency" operation, corrected the data type for the `rates` field.

##

January 5, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.01.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/30_Zuora_Release_2024.01.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

####

API updates for Payment Gateway Routing

The following items are the API updates specific to a system behavior change introduced by the [Payment Gateway Routing](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Payment_Gateway_Routing) feature.

-   [Payments](https://developer.zuora.com/api-references/api/tag/Payments) - In the request body of the "Create a payment" operation, updated the description of the `gatewayId` field.
-   [Orders](https://developer.zuora.com/api-references/api/tag/Orders) - In the request body of the "Create an order" operation, updated the description of the nested `processingOptions` > `electronicPaymentOptions` > `paymentGatewayId` field.
-   [Subscriptions](https://developer.zuora.com/api-references/api/tag/Subscriptions) - In the request body of the "Create a subscription" operation, updated the description of the `gatewayId` field.
-   [Payment Runs](https://developer.zuora.com/api-references/api/tag/Payment-Runs) - In the request body of the "Create a payment run" operation, updated the description of the nested `data` > `paymentGatewayId` field.

####

Other API updates

The following items are other API updates included in this release:

-   [Payment Methods](https://developer.zuora.com/api-references/api/tag/Payment-Methods/) - In the request body of the "Create a payment method" operation, updated the description of the `tokenize` field for the newly supported BACS payment methods on Adyen Integration v2.0.
-   [Accounts](https://developer.zuora.com/api-references/api/tag/Accounts) - Made the following updates:
    -   In the request body of each of the following operations, added the `businessCategory` nested field to the `einvoiceProfile` field:
        -   Create an account
        -   Update an account
    -   In the response body of the "Retrieve an account" operation, added the `businessCategory` nested field to the `einvoiceProfile` field.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the response body of the "Retrieve an invoice" operation, added the missing `success` field.
-   From the response body of the "List all items of an invoice" operation, made the following updates:
    -   Added the following missing nested fields to the `invoiceItems` field:
        -   `fulfillmentId`
        -   `orderLineItemId`
    -   Removed the unsupported `success` nested field from the `invoiceItems` field.
-   Updated the request examples of the "Update a payment schedule item" operation.
-   In the "Create a payment" operation, made the following updates:
    -   Updated the description of this operation for the Multiple Currencies feature.
    -   In the request body, updated the desciption of each of the following fields:
        -   `currency`
        -   `effectiveDate`
-   In the request body of the "Create a payment run" operation, updated the description of each of the following fields:
    -   `data`
    -   `data` > `dataItems`

##

January 3, 2024

###

API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of [Zuora Release 2024.01.R1](https://knowledgecenter.zuora.com/Releases/47_2024_releases/30_Zuora_Release_2024.01.R1). For release notes for all Zuora products, see [Latest releases](https://knowledgecenter.zuora.com/Releases/Latest_releases).

-   [Product Rate Plan Charges](https://developer.zuora.com/api-references/api/tag/Product-Rate-Plan-Charges/) - Made the following updates:
    -   In the request body of each of the following operations:

        -   CRUD: Create a product rate plan charge
        -   CRUD: Update a product rate plan charge

        Added the following fields:

        -   `RevenueRecognitionTiming`
        -   `RevenueAmortizationMethod`
    -   In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the following fields:
        -   `RevenueRecognitionTiming`
        -   `RevenueAmortizationMethod`
    -   In the 200 response body of the "Retrieve a product rate plan charge" operation, added the following fields:
        -   `revenueRecognitionTiming`
        -   `revenueAmortizationMethod`
-   [Product Charge Definitions](https://developer.zuora.com/api-references/api/tag/Product-Charge-Definitions/) - Made the following updates:
    -   In the 200 response body of each of the "List product charge definitions" and "Update product charge definitions" operations, added the following fields:
        -   `chargeDefinitions` > `revenueRecognitionTiming`
        -   `chargeDefinitions` > `revenueAmortizationMethod`
    -   In the 200 response body of each of the "Retrieve a product charge definition" and "Update a product charge definition" operations, added the `revenueRecognitionTiming` and `revenueAmortizationMethod` fields.

###

Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

-   In the request body of each of the following operations:

    -   Create a product charge definition
    -   Update a product charge definition

    Removed the following fields:

    -   `excludeItemBillingFromRevenueAccounting`
    -   `excludeItemBookingFromRevenueAccounting`
    -   `isAllocationEligible`
    -   `isUnbilled`
    -   `productCategory`
    -   `productClass`
    -   `productFamily`
    -   `productLine`
-   In the request body of each of the following operations:

    -   Create product charge definitions
    -   Update product charge definitions

    Removed the following fields:

    -   `productChargeDefinitions` > `excludeItemBillingFromRevenueAccounting`
    -   `productChargeDefinitions` > `excludeItemBookingFromRevenueAccounting`
    -   `productChargeDefinitions` > `isAllocationEligible`
    -   `productChargeDefinitions` > `isUnbilled`
    -   `productChargeDefinitions` > `productCategory`
    -   `productChargeDefinitions` > `productClass`
    -   `productChargeDefinitions` > `productFamily`
    -   `productChargeDefinitions` > `productLine`
-   We have reverted API documentation updates about the Gateway Reconciliation enhancements published on December 22, 2023. These changes will be delivered in an upcoming release.
