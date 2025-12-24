---
title: "Pre-installation tasks"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/pre-installation-tasks"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:09.277Z"
---

# Pre-installation tasks

Tasks to do before implementing the NetSuite Connector integration

Before implementing the NetSuite Connector integration, analyze the following aspects of your Zuora and NetSuite applications. This information is necessary to properly configure the integration for your specific business requirements.

## Activating NetSuite Connector

Contact [Zuora Global Support](https://support.zuora.com/) to activate NetSuite Connector.

Activating NetSuite Connector adds custom fields to objects in Zuora.

## Supported versions of NetSuite

NetSuite Connector supports the following editions of NetSuite:

-   NetSuite

-   NetSuite One World


## Using a dedicated login for NetSuite

NetSuite Connector will access each application (Zuora and NetSuite) via their web service APIs as a specifically designated user login. Your company must identify the Zuora and NetSuite user credentials to be used for the purpose of NetSuite Connector integration. This designated user must have sufficient permissions to access the records and perform the tasks necessary for the NetSuite Connector integration.

We recommend creating a dedicated user with Administrator-level access (NetSuite Administrator role) which can be used for NetSuite Connector only. Creating a dedicated user for NetSuite Connector allows your company to:

-   Easily identify changes made by the integration versus an actual end user

-   Mitigate changes to credentials


Note:

If multiple users share login credentials, only one person can use the credentials to log in to the account at a single time. If another person logs in to the account, the first user will be logged out automatically.

## Select a NetSuite Connector administrator

To ensure a successful NetSuite Connector implementation, select a user to be responsible for the setup and ongoing maintenance NetSuite Connector. This user is responsible for performing the following tasks:

-   Perform the initial setup and configuration

-   Maintain the configuration if and when you implement changes (such as business processes or credentials)

-   Monitor the integration activity to resolve data- and integration-related issues


To assist with monitoring, configure the user to receive automated alerts so that they are notified of warnings and errors on an exception basis. The ideal user for this role is typically an application administrator who is knowledgeable about the Zuora and NetSuite applications and your company's business processes and data.

## Set up Zuora user permissions

Your Zuora Billing Administrator must create a new User Role with the following user permissions enabled:

| Permission | Value |
| --- | --- |
| Invoice Adjustments | NONE |
| Delete Customer Account | FALSE |
| Override Transferred to Accounting | FALSEOnly the users with this roll can override data in the Transferred to Accounting field. |

After creating this user role, assign it to all users (except for the Administrator user). This will prevent unauthorized users from making changes to the NetSuite Connector settings.

## Configuring the customer creation rules

With Zuora's initial launch of the NetSuite Integration, data is synchronized in one direction: from Zuora to NetSuite. By default, NetSuite Connector assumes that new customers originate in Zuora.

## Users of NetSuite OneWorld

If you have NetSuite OneWorld edition and subsidiaries are enabled, the subsidiary values must be populated in Zuora for new customer accounts.

## Linking to Existing Customers in NetSuite

If you want to link Zuora Accounts to existing NetSuite customers instead of creating new records, you must identify the NetSuite Internal IDs and manually populate those in the Zuora Account as part of a migration effort. If you choose to do this, configure your integration preferences to not sync customer changes to avoid overwriting your existing NetSuite records. See [Migrate Data from NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/migrate-data-from-netsuite-to-zuora) for more information about migrating existing customers.

## Creating items in NetSuite or Zuora

The Item Master determines how the different charges impact the accounting. Setting up the General Ledger (GL) accounts requires a significant amount of configuration. Before performing the initial sync, determine the default income accounts and deferred revenue accounts that should be applied for each Zuora charge.

Your company must decide whether to create NetSuite Items from charges (the default setting), or use existing NetSuite items.

If you want to create NetSuite Items from charges:

-   Zuora will create NetSuite Items from charges. If you create a new charge in Zuora, it will take that item (charge) in Zuora and create a new item in NetSuite during the sync.

-   You must identify the NetSuite GL accounts for Income and Deferred Revenue. The NetSuite GL will be populated on the charges within Zuora's product catalog.

-   By default, NetSuite Connector will create Items in Zuora. For the GL Account, you must identify the Income Account for these charges if you choose not to use the NetSuite default Income Account.

-   If the charges will be set up with a Revenue Recognition Code, your company must identify a Deferred Revenue Account to use and those values must be populated on the Zuora charge.

-   For each charge, your company must identify the NetSuite Item Type to use when creating the Item in NetSuite.


If you want to use existing NetSuite items:

-   You must link the Zuora charges to existing NetSuite items. Zuora allows you to link the items by adding the NetSuite ID to the Zuora charge.

-   You must identify the NetSuite Internal ID and Item Types and manually populate that in Zuora as part of the migration. See [Migrate Data from NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/migrate-data-from-netsuite-to-zuora) for more information about migrating existing items.


## Allowing multiple currencies

If you have configured multiple currencies in NetSuite, these currencies should mirror the currencies set up in Zuora. If you have not configured multiple currencies in NetSuite (only one currency is set up in NetSuite), your company should restrict the currencies in Zuora to only the currency available in NetSuite. If multi-currency is set up in Zuora but not in NetSuite, it can cause problems with transactions if a customer in Zuora is configured to use a currency that is different from the currency for that same customer in NetSuite. In that case, the numbers will not be read in the correct currency for the transactions.

## Assigning taxation rules

Determine which application (Zuora or NetSuite) will calculate tax. If tax will be calculated in Zuora, all invoices will be synchronized to NetSuite as non-taxable to prevent NetSuite from calculating the tax again. Accounts and Items created by NetSuite Connector will be synced as taxable or nontaxable based on the NetSuite default settings.

If tax is calculated in Zuora:

-   Tax charges will be synced over to NetSuite as standalone invoice line items.

-   You must configure the NetSuite Item and populate the ID in the Zuora tax code.


If tax is calculated in NetSuite:

-   Invoices will be synchronized to NetSuite as potentially taxable to let NetSuite calculate the tax.

-   Only invoices transactions will be synchronized. Other Zuora transactions will not be synchronized to NetSuite.


## Setting cutover dates

Zuora allows you to set a cutover date, which indicates that any transactions created prior to the specified cutover date will not be picked up in a subsequent NetSuite Connector integration. For example, if a payment was created before the cutover date, the payment will not be synchronized as part of the NetSuite Connector integration. For each type of transaction, you can specify a date before which the transaction will not be synchronized to NetSuite. For example, if you select a cutover date of May 1, 2011, transactions created on or after that date will be synchronized, but NetSuite Connector will ignore any transactions prior to that date.

This cutover date is used if you have already been using both systems and are manually replicating data in Zuora.

## Configuring data source permissions

Before continuing with the setup process, confirm with your Zuora representative that full access to data sources has been set for your tenant. The NetSuite Integration must be able to access data sources during the integration process.
