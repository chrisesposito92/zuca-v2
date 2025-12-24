---
title: "Create transaction templates"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/create-transaction-templates_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:41:52.821Z"
---

# Create transaction templates

Learn how to create and configure transaction templates in Zuora Revenue to transform billing data into transaction lines using mapping templates.

After Billing object data are saved in Zuora Revenue pre-staging tables without any processing, they will be transformed into Zuora Revenue transaction lines and saved in the Staging tables by the Revenue Sync job. This data transformation is based on mapping templates for each transaction type. In Zuora Revenue, at least one template is required for each transaction type that is to be processed in Zuora Revenue, otherwise, data in pre-staging tables cannot be transformed and saved in the Staging tables. You can have more than one mapping template for each transaction type. However, only the one that is specified as default will be used for data transformation.

The following table lists the supported transaction types by the Revenue Sync job and the pre-configured mapping templates. The pre-configured mapping templates are initially set to default. However, they cannot be used directly because the entity ID is not provided in the template definition. You must create a copy of the pre-configured template and then edit the copy to specify the entity ID. Only one entity ID can be specified in each template. If you have multiple entities, configure the mapping template for each entity separately.

| Supported transaction type | Seeded (Pre-configured) mapping template name |
| --- | --- |
| Order | Subscription Order Template |
| Invoice | Subscription Invoice Template |
| Invoice Item Adjustment | Subscription Invoice Item Adjustment Template |
| Credit Memo | Subscription Credit Memo Template |
| Debit Memo | Subscription Debit Memo Template |

## Prerequisite

When you create the transaction template based on the pre-configured one, you can customize the field mapping for each template. The available fields for your selection are determined when you are defining the field mapping between Zuora Billing object field and Zuora Revenue field in Staging tables. Make sure that the field that will be used in the transaction template is already defined for field mapping. For more information, see [Manage field mapping between Zuora Billing and Zuora Revenue](/zuora-revenue/advanced-revenue-operations/manage-field-mapping-between-zuora-billing-and-zuora-revenue).

## Procedure

To create a transaction mapping template and set it as default, perform the following steps:

1.  Navigate to File Upload > Transactions/Cost.
2.  Locate the pre-configured mapping template that you want to use, hover the mouse over the line, and then click the copy icon.
3.  Confirm your selection by clicking OK.
4.  In the Copy Template window, specify a unique template name and click Copy. A separate line is created with the specified template name.
5.  Hover the mouse over the line and click the edit icon.
6.  In the Edit Transaction Upload Template window, specify the details on the Template Definition tab as necessary. The following fields are mandatory for this tab:
    -   RC Grouping Rule: Determines how transaction lines are grouped into revenue contracts.
    -   Name: The unique name of this transaction template.
    -   Entity: The Zuora entity ID.
    -   Category: The data category of this transaction template. This value should be aligned with the pre-configured transaction template. For example, if the current template is a copy of the pre-configured Subscription Invoice Template, select Invoice Item for the category.
7.  To set the mapping template as the default for a specific transaction type, on the Template Definition tab, toggle the Is this a default template? switch to Yes.
8.  If you have custom objects and fields defined in Zuora Billing for the current transaction type, use the Field Mapping tab to define the mapping between the two systems. To do this, add a line on this tab and specify the following columns:
    -   Staging Field Name: The field name in Zuora Revenue staging tables that are defined in [field mapping](/zuora-revenue/advanced-revenue-operations/manage-field-mapping-between-zuora-billing-and-zuora-revenue).
    -   Input Value Label: The combined Zuora Billing object and field name.
    -   Input Value Type: The field type, which can be character, date, or number.
9.  Save your changes and close the Edit Upload Transaction Template window.
10.  (Optional): To avoid any further changes to the Field Mapping tab in this template, hover the mouse over the line and click the freeze icon.
