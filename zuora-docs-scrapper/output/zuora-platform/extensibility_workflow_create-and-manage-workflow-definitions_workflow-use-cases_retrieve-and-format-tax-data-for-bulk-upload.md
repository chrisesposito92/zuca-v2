---
title: "Retrieve and format tax data for bulk upload"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/retrieve-and-format-tax-data-for-bulk-upload"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:48.555Z"
---

# Retrieve and format tax data for bulk upload

Learn how to retrieve and format tax data for bulk upload using Workflow.

Bulk tax filing is supported in some places. Taxpayers need to format their tax data as required and bulk upload the data to SFTP servers of tax authorities. If you need to perform these tasks repeatedly, you can create a workflow to automate the process.

In this article, we'll show you how to build such a workflow based on a template.

## Available templates

Invoicing > Invoice to XML Document - XSLT Transform

## Workflow overview

This workflow consists of seven tasks.

1.  [Export](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export): Retrieves the Account, Invoice, and BillToContact data for invoices that are in the scope of the tax filing.

2.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates unique invoices.

3.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): For each unique invoice, retrieves the InvoiceItem data that is required by tax authorities.

4.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): For each unique invoice, retrieves the TaxationItem data that is required by tax authorities.

5.  [JSON transform](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-json-transform): Transforms the JSON data for an invoice into XML.

6.  [XML transform](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-xml-transform): Transforms the XML file based on the XML schema definition from tax authorities.

7.  [SFTP upload](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/upload-ftp-and-sftp): Uploads the XML files to the SFTP server of tax authorities. This task is not included in the template. You need to add the task to the template.


## Configurations

-   In the export task, you need to specify the conditions to determine the invoices that you want to include in this tax filling process. For example, you can retrieve data for invoices that use the same tax rate (products shipping to the same state or country) for the last month. You also need to select the data fields that you want to include in the final XML file.

-   In the two query tasks, you need to select the data fields that you want to include in the final XML file.

-   In the XML transform task, you need to select the XML Transform mode and configure the XSLT code and optionally the XSD template.

-   In the SFTP upload task, you need to specify the host information and the credentials.


## Customizations

If tax authorities require encryption for the files to be bulk uploaded, you can either download and encrypt the output XML files separately, or call APIs to encrypt the files.
