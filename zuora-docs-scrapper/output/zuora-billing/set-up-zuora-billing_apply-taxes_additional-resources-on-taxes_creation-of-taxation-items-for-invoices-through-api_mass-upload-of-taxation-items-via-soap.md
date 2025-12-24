---
title: "Mass upload of taxation items via SOAP"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/creation-of-taxation-items-for-invoices-through-api/mass-upload-of-taxation-items-via-soap"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:44.423Z"
---

# Mass upload of taxation items via SOAP

Learn how to perform a mass upload of taxation items via SOAP, including file format requirements, upload process, and error handling.

Mass upload of taxation items does not prevent duplicate taxation items from being created. Taxation items will be duplicated if you upload them more than once.

The create() call lets you upload a file to support mass taxation items. The mass taxation items file is a CSV formatted file or a zipped CSV formatted file sent via Message Transmission Optimization Mechanism (MTOM). The upload and parsing of the CSV file is an asynchronous operation.

The create() call returns fail or success. On success, an Import ID is returned. You can use the Import ID to query the import process and to query the Parse status.

A maximum file size of 1MB is supported for CSV and CSV zipped files.

Table of fields for upload of mass taxation items CSV files:

| Field Name | Column Required? | Value Required? | Description |
| --- | --- | --- | --- |
| InvoiceItemId | Required | Required | The ID of the specific invoice item that the taxation information applies to.Type : string Character limit : 32 Values : a valid invoice item ID |
| Name | Required | Required | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices.Type : string Character limit : 128 Values : a string of 128 characters or fewer |
| TaxCode | Required | Optional | The tax code identifies which tax rules and tax rates to apply to a specific charge.Type : string Character limit : 32 Values : a string of 32 characters or fewer |
| TaxCodeDescription | Required | Optional | The description for the tax code.Type : string Character limit : 255 Values : a string of 255 characters or fewer |
| TaxRate | Required | Required | The tax rate applied to the charge.Type : decimal Character limit : 16 Values : a valid decimal value |
| TaxRateDescription | Required | Optional | The description of the tax rate.Type : string Character limit : 255 Values : a string of 255 characters or fewer |
| TaxRateType | Required | Required | The type of the tax rate applied to the charge.Type : string (enum) Character limit : 10 Values : Percentage , FlatFee |
| TaxAmount | Required | Required | The amount of the tax applied to the charge.Type : decimal (currency) Character limit : 16 Values : a decimal value |
| ExemptAmount | Required | Required | The calculated tax amount excluded due to the exemption.Type : decimal (currency) Character limit : 16 Values : a decimal value |
| Jurisdiction | Required | Optional | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.Type : string Character limit : 32 Values : a string of 32 characterrs or fewer |
| LocationCode | Required | Optional | The identifier for the location based on the value of the TaxCode field.Type : string Character limit : 32 Values : automatically generated |
| TaxDate | Required | Required | The date that the tax is applied to the charge.Type : date Character limit : 29 Values : a valid date formatted MM/dd/yyyy |
| TaxMode | Required* | Required | The type of tax mode for the account.Type : string (enum) Character limit : 32 Values : TaxExclusive , TaxInclusive |
| AccountingCode | Optional | Optional | The accounting code for the taxation item. Accounting codes group transactions that contain similar accounting attributes.Type : string Character limit : 32 Values : an active accounting code in your Zuora Chart of Accounts |

## Example CSV Edit section

![Example CSV](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a140e26d-6ef1-4e8e-9dfe-51defa428aa9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImExNDBlMjZkLTZlZjEtNGU4ZS05ZGZlLTUxZGVmYTQyOGFhOSIsImV4cCI6MTc2NjYzOTQ0MiwianRpIjoiOGFjNTc5NWNlZThhNGI5ZWI3NDI3OTFmZGE1NDJlYzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9nIY07ukR6TeKvk9n7j6FYnNgsBWphi6nklmjeqk3Sw)

## Supported parameters for the create call

| Parameter | Required? | Description |
| --- | --- | --- |
| FileContent | Required | The file containing mass tax items |
| ImportType | Required | The type of file imported |
| Md5 | Optional | A check to validate file integrity |
| Name | Optional | A descriptive name for the import |

## Notifications

After completion of the upload and parse operation, an email will be sent on either success or failure. On success, the email will contain a Total Count (the total number of items processed), a link to the resulting CSV file, and an Import ID. The linked file will be a CSV formatted file containing the taxation IDs in the first column. The data from the original input will begin from the second column as you can see in the following image:

![Successful Message](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5623f018-9457-4dec-80ea-7d51d382bbe7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU2MjNmMDE4LTk0NTctNGRlYy04MGVhLTdkNTFkMzgyYmJlNyIsImV4cCI6MTc2NjYzOTQ0MiwianRpIjoiNzBhZjIyNmZhYjAzNDdlZWExZDZhMjAyMTI3YWNlN2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CjCDsiAXrhRpAC56yEjGlkVmTWCIvRjnYVGBiFbwGKc)

On failure of the parse operation, an email will be sent with a failure message and a link to the resulting CSV file. The success of the parse operation is dependent on every record being valid. One invalid record will result in the failure of the parse operation. The linked file will contain a CSV file containing the original input file contents and a new column added in rightmost position including a failure message or messages if there are multiple invalid records. The message will contain information regarding the specific invalid records that caused the failure. Refer to these messages to find and fix the invalid record. Here is an example of a failure message:

![Failure Message](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7e85c870-15cc-4bd5-bac8-041bbf0dfec2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdlODVjODcwLTE1Y2MtNGJkNS1iYWM4LTA0MWJiZjBkZmVjMiIsImV4cCI6MTc2NjYzOTQ0MiwianRpIjoiMTZmMTM0ZmU1ZDRlNDVlYWExOWFiZjhiMGI3YWUxZTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dV_sQXc4zZYVy_UYE4oUcn0CDuFdlrc0WRERXsBR6OU)

## Returned error messages

An error in a single item of the uploaded CSV file will result in a failure of the parse operation. There are three possible cases in which a failure will occur and return an error message:

1.  Unrecognized column name or required column is missing.
2.  The value of a field is incorrectly formatted or exceeds the maximum length.
3.  Any exception occurs during the import process.

| Message | Related Field |
| --- | --- |
| The TaxMode does not match the tax mode on the invoice item. | TaxMode |
| The magnitude of the tax amount cannot exceed that of the invoice item amount. | TaxAmount/ExemptAmount |
| This customer account is subjected to taxes. The ExemptAmount field must be $0. | ExemptAmount |
| Tax Mode must be 'TaxExclusive' or 'TaxInclusive'. | TaxMode |
| Invoice Detail Id is invalid. | InvoiceItemId |
| Invoice is not Draft status or has been modified. Taxation can not be applied on this invoice. | InvoiceItemId |
| Tax Amount should not be negative. | TaxAmount |
| Tax Amount should not be positive. | TaxAmount |
| The invoice item using inclusive tax don't support to add new taxation item without explicitly tax mode information. | InvoiceItemId/TaxMode |
| The LocationCode field should be less than 32 characters. | LocationCode |
| The Tax Name field should be less than 128 characters. | Name |
| The Tax Rate Description should be less than 255 characters. | TaxRate |
| The Tax Code field should be less than 32 characters. | TaxCode |
| The Jurisdiction field should be less than 32 characters. | Jurisdiction |
| The Tax Code Description field should be less than 255 characters. | TaxCodeDescription |
| Tax Name is required. | Name |
| Tax Rate Type must be 'Percentage' or 'FlatFee'. | TaxRateType |
| Tax Rate must be a number not less than 0. | TaxRate |
| Tax Amount must be a number. | TaxAmount |
| Exempt Amount must be number. | ExemptAmount |
| Tax Date should be in format 'MM/dd/yyyy'. | TaxDate |

## Sample code

This sample code is a simple example for uploading mass tax items. It shows the request body and example replies on success and failure.

Request :

<soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Import"\> <ns2:FileContent>cid:taxation.csv </ns2:FileContent> <ns2:ImportType>TaxationDetail</ns2:ImportType> <ns2:Name>taxation.csv</ns2:Name> </ns1:zObjects> </ns1:create> </soapenv:Body>

Response :

Success

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:createResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>4028901c4974cccf014974d24e150003</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:createResponse> </soapenv:Body> </soapenv:Envelope>

Failure

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:createResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Errors> <ns1:Code>INVALID\_VALUE</ns1:Code> <ns1:Message>Failure Message</ns1:Message> </ns1:Errors> <ns1:Success>false</ns1:Success> </ns1:result> </ns1:createResponse> </soapenv:Body> </soapenv:Envelope>
