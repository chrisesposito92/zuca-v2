---
title: "Field descriptions of Usage"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/usage/field-descriptions-of-usage"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:07.547Z"
---

# Field descriptions of Usage

This reference lists all fields of the Usage object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing. See "Field types" for additional information.

| Name | Required? | Allowed Operations | Description |
| --- | --- | --- | --- |
| AccountId | optional | Create Query Filter | The ID of the account associated with the usage data. This field is required if no value is specified for the AccountNumber field.Type : zns:ID Character limit : 32 Version notes :-- Values : a valid account ID |
| AccountNumber | optional | Create Query Filter | The number of the account associated with the usage data. This field is required if no value is specified for the AccountId field.Type : string Character limit : 50 Version notes : WSDL 8.0+ Values : a valid account number |
| AncestorAccountId | optional | Filter | A filter option for querying all subscriptions under the same account hierarchy.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid account ID |
| ChargeId | optional | Create Query Filter | The OrginalId of the rate plan charge related to the usage record, e.g., 2c9081a03c63c94c013c6873357a0117Type : zns:ID Character limit : 32 Version notes : -- Values : a valid rate plan charge OriginalID |
| ChargeNumber | optional | Create Query Filter | A unique number for the rate plan charge related to the usage record, e.g., C-00000007Type : string Character limit : 50 Version notes : -- Values : a unique number of 50 characters or fewer, either set by the user or automatically generated if left null. |
| CreatedById | optional | Query Filter | The user ID of the person who uploaded the usage records.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the usage was generated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| Description | optional | Create Query Update Delete Filter | A description of the usage data.Type : string Character limit : 200 Version notes : -- Values : a string of 200 characters or fewer |
| EndDateTime | optional | Create Query Update Delete Filter | The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation.Type : dateTime Character limit : 29 Version notes : -- Values : a valid date and time value |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID for this object is UsageId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| ImportId | optional | Query Filter | The ID of an import that successfully imported usage data. This value comes from using the Import object or using the web-based UI instead of using the Usage object to upload usage data.Type : zns:ID Character limit : 32 Version notes : WSDL 37.0+ Values : automatically generated |
| InvoiceId | optional | Filter | If this usage has been invoiced, the ID of the invoice.Type : zns:ID Character limit : 32 Version notes : WSDL 33.0+ Values : valid invoice ID |
| InvoiceNumber | optional | Filter | If this usage has been invoiced, the number of the invoice.Type : string Character limit : 32 Version notes : WSDL 33.0+ Values : an invoice number |
| Quantity | required | Create Query Update Delete Filter | Indicates the number of units used.Type : decimal Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : a valid decimal amount equal to or greater than 0 |
| RbeStatus | optional | Query Filter | Indicates if the rating and billing engine (RBE) processed usage data for an invoice.Type : string (enum) Character limit : 9 Version notes : -- Values : automatically generated to be one of the following values: Importing , Pending , Processed |
| SourceName | optional | Query Filter | The name of the source file that contains usage data. This field is generated from the name of the file uploaded in the web-based UI.Type : string Character limit : 50 Version notes : -- Values : automatically generated from the spreadsheet's filename |
| SourceType | optional | Query Filter | Indicates if the usage records were imported from the web-based UI or the API.Type : string (enum) Character limit : 6 Version notes : -- Values : automatically generated to be one of the following values: API , Import |
| StartDateTime | required | Create Query Update Delete Filter | The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the EndDateTime , the StartDateTime field does affect usage calculation.Type : dateTime Character limit : 29 Version notes : -- Values : a valid date and time value |
| SubmissionDateTime | optional | Query Filter | The date when usage was submitted. The value of SubmissionDateTime field is the same as the value of UpdatedTime field.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
| SubscriptionId | optional | Create Query Filter | The OriginalId of the subscription that contains the fees related to the usage data.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid subscription ID |
| SubscriptionNumber | optional | Create Query Filter | The name* of the subscription that contains the fees related to the usage data.Type : string Character limit : 100 Version notes : -- Values : the name of a subscription*Note that the "subscription number" in the Usage object corresponds to the value of the subscription "name" field in the Subscription object. |
| UniqueKey | optional | Create Query Update Delete | Note : The field is only available if you have Prepaid with Drawdown feature enabled.A customer-defined specific identifier of a usage record.Type : stringCharacter limit : 255Version notes : WSDL 114+Values : any string value as defined by customer, for example, UK123. If not specified, its value will be ‘null’ by default. When you upload a usage record and specify the unique key, the system will check if there is an existing usage record with the same unique key. See this article for details. |
| UOM | required | Create Query Update Delete Filter | Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in Z-Billing > Settings .Type : string Character limit : Version notes : -- Values : a valid unit of measure |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the usage upload.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the usage upload was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
