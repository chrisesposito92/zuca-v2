---
title: "Configure sync preferences"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences"
product: "zuora-platform"
scraped_at: "2025-12-24T08:25:30.901Z"
---

# Configure sync preferences

Learn how to configure sync preferences

## Overview

In the Sync Preferences screen, configure the synchronization options that the NetSuite integration will use.

You must fill in all the required fields before you can go into the Advanced Settings page upon clicking Next . A required field is marked with an asterisk.

## General currency and tax settings

-   Zuora Default Currency: Enter the "Alphabetic Code" for the Default currency in Zuora to use when syncing map pricing details for the Product Catalog.

-   NetSuite Multiple Currencies: Select `Yes` if you have enabled multiple currencies in NetSuite. Otherwise, select `No`.

    -   Set this to `Yes` if you want the sales order items to be pre-populated with the Netsuite price you specified on the rate plan in Zuora.

    -   If you select `No`, all Zuora Accounts will be synced to NetSuite with the default NetSuite currency, regardless of their currencies configured in Zuora.

-   NetSuite Advanced Pricing: If Multiple Prices or Quantity Pricing are enabled, select `Yes` . Otherwise, select `No`. This is used to map pricing details for the Product Catalog.

-   NetSuite Default Tax Code: If required in NetSuite, enter the exact name of the Tax Code to use when syncing Zuora transactions to NetSuite. You can view the existing tax codes in NetSuite by navigating to Setup > Accounting > Tax Codes.

-   NetSuite Default Tax Schedule: If the Advanced Taxes feature is enabled in your NetSuite tenant, enter the exact name of the Tax Schedule to use for all Zuora Charges created by the integration.


## Viewing multiple currency settings in NetSuite

To view the settings for your company in NetSuite:

1.  Select Setup > Company > Enable Features.
2.  Select the Company tab.
3.  If Multiple Currencies is enabled, you must configure the General Currency and Tax Settings in Zuora Connector for NetSuite.

![NS_company_multicurrency.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6660585e-b3a1-4b32-b5b7-147ffb1f33d2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY2NjA1ODVlLWIzYTEtNGIzMi1iNWI3LTE0N2ZmYjFmMzNkMiIsImV4cCI6MTc2NjY1MTEyNywianRpIjoiNzI0MjU5ZTY1MjU4NGVhZGIzYTg5YWFkYWI1NGNmMWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.udob7gIPSMGghFXGkb4ql0xdeyPKOr8Gc1IrKnlGjks)

## Viewing advanced pricing settings in NetSuite

To view the pricing for your company in NetSuite:

1.  Select Setup > Company > Enable Features.
2.  Select the Transactions tab.
3.  If Multiple Prices or Quantity Pricing is enabled, you must select `Yes` for NetSuite Advanced Pricing in Zuora Connector for NetSuite.

![NS_company_advancepricing.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5a24b55f-7aa3-460f-a64e-69c213cb57d2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVhMjRiNTVmLTdhYTMtNDYwZi1hNjRlLTY5YzIxM2NiNTdkMiIsImV4cCI6MTc2NjY1MTEyNywianRpIjoiMTRiMDI3YWFjMWUzNGE2ZGIxNTE4N2NhZTNkZDA5OGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.OsYE3a6EsCyiiUEJh2zpHfkyR3J6zq0jvh0KhTFOgHU)

## Viewing tax settings in NetSuite

To view the currency and tax settings in NetSuite:

1.  Select Setup > Company > Enable Features.
2.  Select the Accounting tab.
3.  If Advanced Taxes is enabled, you must specify a value for NetSuite Default Tax Schedule in the Integrations Manager.

![NS_company_advancedtaxes.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4782eec9-1eae-4f51-89fb-ba52cff4a19b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3ODJlZWM5LTFlYWUtNGY1MS04OWZiLWJhNTJjZmY0YTE5YiIsImV4cCI6MTc2NjY1MTEyNywianRpIjoiY2MxOWY0N2FkOGMxNGEyNzgzNTk3YzY5ZTQxNjI1YTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.t5yl7ErflaCpWXTTvCYIEVL7dkEpJyTK9l3OMRjkEsk)

## NetSuite classification details

These settings are optional. If these classification settings are enabled in your NetSuite account, use this section to configure default values. These default values are used when syncing Customer Accounts, the Product Catalog, and Transactions from Zuora to NetSuite. Some classifications can also be specified per record within Zuora to override these default values.

-   Default Department: Enter the full name of the default Department to use when syncing all Transactions and Product Catalog Items. For Charges, you can override this value by specifying the Department on the individual record.
-   Default Location: Enter the full name of the default Location to use when syncing all Transactions and Product Catalog Items. This field is required if Multi-Location Inventory is enabled in NetSuite.
-   Default Class: Enter the full name of the default Class to use when syncing all Transactions and Product Catalog Items. For Charges, you can override this value by specifying the Class on the individual record.
-   Default Subsidiary: Enter the full name of the default Subsidiary to use when syncing all Accounts. This setting applies to NetSuite OneWorld only. You can override this value by specifying the Subsidiary on the individual record.

## Viewing company settings in NetSuite

To view the settings for your company in NetSuite:

1.  Select Setup > Company > Enable Features.
2.  If Departments, Locations, or Classes are enabled, you must configure the NetSuite Classification Details values in Zuora Connector for NetSuite.

![NS_company_classifications.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e4a5d0b3-74c3-4884-b028-8ed3ecef4c84?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0YTVkMGIzLTc0YzMtNDg4NC1iMDI4LThlZDNlY2VmNGM4NCIsImV4cCI6MTc2NjY1MTEyNywianRpIjoiNzU4MTI5OTYwNjRlNDY1ODlmMTM4YTZmM2JlNzkyMzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nchohky09RgBC0ZcQQaRQ7O6QGnEzgjzFpsTgsMKGIs)

For information on customer account sync, product catalog sync, and transaction sync, refer to [Customer account sync](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences/customer-account-sync).
