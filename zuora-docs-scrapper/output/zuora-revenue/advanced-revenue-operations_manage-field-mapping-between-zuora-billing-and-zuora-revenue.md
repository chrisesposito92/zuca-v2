---
title: "Manage field mapping between Zuora Billing and Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-field-mapping-between-zuora-billing-and-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:47.356Z"
---

# Manage field mapping between Zuora Billing and Zuora Revenue

Learn how to manage field mapping between Zuora Billing and Zuora Revenue to ensure accurate data import and transformation.

When Zuora Billing object data is imported into Zuora Revenue, the data will first be saved in the Zuora Revenue pre-staging tables without any processing. Each Zuora Billing object has its own specific pre-staging table to save the imported data. For example, the Invoice object data will be saved to the RPRO\_DS\_INVOICE\_G table. However, the field defined on the Zuora Billing objects might take a different name and format in Zuora Revenue pre-staging tables. You must define the one-to-one field mapping so that each Zuora Billing object field can be mapped to the appropriate Zuora Revenue field.

## Prerequisite

To get a starting point for define the one-to-one field mapping, make sure to run the RevPro3.0 Automate Datasync Setups Process program. After this program completes, the standard Zuora Billing objects and their fields can be populated and then displayed in the Zuora Revenue UI for further customization.

## Procedure

Complete the following steps to review and customize the one-to-one field mapping:

1.  Navigate to Data Interface > Revenue Sync.
2.  Open the side menu and then click Data Mapping. The Data Mapping page opens.
3.  From the Entity dropdown list, select your Zuora entity. Zuora Billing standard objects and fields that have been populated by the RevPro3.0 Automate Datasync Setups Process program will be listed on the page.
4.  You can either add a line to define the mapping for a custom field or edit a line for the standard field mapping.
    -   To add a line, click the '+' icon .
    -   To edit an existing line, directly click the value on the line that you want to modify.
5.  Specify the following information for each line to define the one-to-one relationship:
    -   Billing Object Name: The Zuora Billing object name.
    -   Source Object Column Name: The name of the field in the specified Zuora Billing object. For example, `AccountNumber`.
    -   Revenue Object Column Name: The corresponding field name in Zuora Revenue Line Staging tables. For example, `ACCOUNT_NUMBER`.
6.  Click the save icon. The field mapping item is then created or updated.

## What to do next

The defined fields are available to be selected for each transaction template, which will be used to transform the data to Zuora Revenue transaction lines. For more information, see Create transaction templates.
