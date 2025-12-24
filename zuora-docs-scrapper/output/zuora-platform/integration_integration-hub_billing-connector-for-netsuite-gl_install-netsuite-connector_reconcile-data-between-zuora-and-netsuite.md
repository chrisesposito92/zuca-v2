---
title: "Reconcile data between Zuora and NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/reconcile-data-between-zuora-and-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:43.579Z"
---

# Reconcile data between Zuora and NetSuite

Learn to reconcile data between Zuora and NetSuite

## Overview

Before performing the NetSuite Integration, you must reconcile data between Zuora and NetSuite.

## Reconciling Revenue Recognition code and template values

The Zuora Revenue Recognition Code Names and NetSuite Revenue Recognition Template Names must match exactly.

1.  In Zuora, go to Settings > Billing > Manage Revenue Recognition Codes.
2.  In NetSuite, go to Lists > Accounting > Revenue Recognition Templates.

## Reconciling currency values

The Zuora Currency Alphabetic Codes and NetSuite Currency Symbols must match exactly.

1.  In Zuora, go to Settings > Billing > Customize Currencies.
2.  In NetSuite, go to Lists > Accounting > Currencies.

Note:

If you have not configured NetSuite to use Multiple Currencies, Zuora recommends that you inactivate all currencies in Zuora other than the currency used in NetSuite.

## Reconciling payment term values

The Zuora Payment Term Name and NetSuite Payment Terms must match exactly. For example, you might need to modify NetSuite to rename "Due on Receipt" to "Due Upon Receipt" to match Zuora.

1.  In Zuora, go to Settings > Billing > Payment Terms.
2.  In NetSuite, go to Setup > Accounting > Accounting Lists. Set the Type to `Term` to view all of the payment terms configured in NetSuite.

![NS_accounting_lists.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3a40a48d-15b1-484f-bdb7-69efe975d1ed?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNhNDBhNDhkLTE1YjEtNDg0Zi1iZGI3LTY5ZWZlOTc1ZDFlZCIsImV4cCI6MTc2NjY0MTkwMCwianRpIjoiZDVkYzg4ZDdhYzBlNDQzNWFmNTM0YjY5YTYyNTZmYTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5nEULyVg7nZCdT8cS7YBfuV4bGdwfl5L4zIGagng_wc)

## Reconciling payment method values

The Zuora Payment Method Name and NetSuite Payment Methods must match exactly.

1.  In Zuora, go to Settings > Payments > Payment Method.
2.  In NetSuite, go to Setup > Accounting > Accounting Lists. Set the Type to `Payment Method` to view all of the payment methods configured in NetSuite.

![NS_accounting_lists_payment_methods.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/17072142-6df7-49b6-b20c-687b660a866c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE3MDcyMTQyLTZkZjctNDliNi1iMjBjLTY4N2I2NjBhODY2YyIsImV4cCI6MTc2NjY0MTkwMCwianRpIjoiNjRmNDBiOTIzYmExNDliZDg4MDhjZDU5ZDUxMWM0M2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WNLV2YtdIu-HAWhd4ckkRbwmsdXRFUwVH2pU886Ryys)

The Zuora values differ from what is displayed in the user interface. You will need to modify NetSuite to match the actual values:

-   ACH
-   Cash
-   Check
-   CreditCard
-   Other
-   PayPal
-   WireTransfer
-   DebitCard
-   CreditCardReferenceTransaction

Note: It is important that you must match the names exactly, including the lack of spaces in the values. For example, `CreditCard`.

When creating NetSuite Payment Methods to correspond to Zuora Credit Card methods, do not check the box to enable CREDIT CARD. If this is enabled, the integration will fail because NetSuite will expect full credit card details for the payment and attempt to process the credit card transaction.

## Using a deposit to account

The Payment or Refund sync will use the Deposit To Account configured in NetSuite for a given Payment Method. If you have not configured a Deposit To Account, the Payment Method will instead use `Undeposited Funds`.

Next, refer to [Configuring Zuora accounting codes](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/reconcile-data-between-zuora-and-netsuite/configuring-zuora-accounting-codes).

## Creating NetSuite items for Zuora tax codes

Note:

It is important to note that if Zuora taxation features are enabled, you must perform these steps before generating any invoices that will be synchronized to NetSuite.

If Zuora taxation features are enabled for the Zuora tenant, you must create a Non-Inventory Sale For Item in NetSuite for each Tax Code configured in Zuora. To create the item in NetSuite, navigate to List > Accounting > Items > New, and select Non-Inventory Items for Sale.

To obtain the NetSuite Internal Id, view the given Item, and look in the browser address bar. For example, in `https://system.netsuite.com/app/common/item/item.nl?id=41`, the Internal NetSuite Id is `41`. After creating the NetSuite Item, you need to:

1.  Go to Settings > Finance > Manage Chart of Accounts Recognition Codes. Create an accounting code with Name as the NetSuite Internal Id and Type as Sales Tax Payable.
2.  Go to Settings > Finance > Configure Accounting Codes. Set the Tax Code's Accounting Code to the one you just created in the last step.

## Default NetSuite tax code

For clients that require the Tax Item to be specified on NetSuite Invoices and Credit Memos, you must configure a Default NetSuite Tax Code in the Integration Setup to use when syncing Invoices and Invoice Item Adjustments. The values must be the exact name of a valid, active Tax Code in NetSuite.

You can view the list of Tax Codes in NetSuite by selecting Setup > Accounting > Tax Codes.

## Coordinating taxes with NetSuite add-ons

Some add-on NetSuite modules, such as Avalara’s AvaTax, require the Tax Item to be populated even if Zuora is calculating taxes. In these cases, create a NetSuite Tax Code with a 0% tax rate and configure that Tax Code as the NetSuite Default Tax Code in the Integration Setup.

![NS_zerotaxcode.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2268d33e-f21c-4f11-84a4-b2fdfd73953d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIyNjhkMzNlLWYyMWMtNGYxMS04NGE0LWIyZmRmZDczOTUzZCIsImV4cCI6MTc2NjY0MTkwMCwianRpIjoiNmE0NDcxY2YyMDczNDY3MGFhNDAwZDU1OTdjNWIwYTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oLTxNDpA4lzJAN8YBjtFJjvg7OE301w9M57PxHqUem8)

## Configuring a default NetSuite tax schedule

For NetSuite clients with the Advanced Taxes feature enabled , you must configure a Default NetSuite Tax Schedule in the Integration Setup to use when syncing Product Rate Plan Charges. Create this Tax Schedule (if it does not already exist) and configure it in NetSuite to not calculate taxes if tax is calculated by Zuora. You can view the status of the Advanced Taxes feature in NetSuite by selecting Setup > Company > Enable Features , selecting the Accounting tab, then viewing Advanced Taxes in the Advanced Features section.

## Configuring a default NetSuite location

For clients with Multi-Location Inventory enabled, or if Locations are required for NetSuite transactions, you must configure a Default NetSuite Location in the Integration Setup to use when syncing Zuora transactions. This value must be the exact name of a valid, active Location in NetSuite. For sub-Locations, enter the fully-qualified, name using a colon, to separate sub-locations. Include a space character before and after the colon. For example: `My Location : My Sub Location`

You can view the status of the Multi-Location Inventory feature in NetSuite by selecting Setup > Company > Enable Features , selecting the Items & Inventory tab, then viewing Multi-Location Inventory in the Inventory section.
