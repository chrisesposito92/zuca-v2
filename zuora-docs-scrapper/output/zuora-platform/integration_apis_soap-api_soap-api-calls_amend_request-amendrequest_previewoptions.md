---
title: "PreviewOptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest/previewoptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:31.573Z"
---

# PreviewOptions

Use the PreviewOptions container to preview an amendment before committing its changes to a subscription.

You can use a preview to provide a quote of the new charges to a customer before the customer commits to the amended subscription. For example, send an amend() call with an Amendment object that removes an existing rate plan, another Amendment object that adds a new rate plan, and turn on the preview options.

-   You must use WSDL version 42.0+ to send multiple Amendment objects with a single amend() call. You can't preview changes before committing them if you are using an older WSDL version.

-   You must use WSDL version 120.0 or higher to include taxation items for the corresponding invoices in the preview result.


## PreviewOptions fields

| Name | Required? | Description |
| --- | --- | --- |
| EnablePreviewMode | optional | Determines whether the call creates an amendment or displays a preview of the change.Type : booleanCharacter limit :Version notes : WSDL 28.0+System-generated: noValues : true, falseUsage Notes:If either NumberOfPeriods, PreviewThroughTermEnd, or InvoiceTargetDate are not specified when EnablePreviewMode=true , the preview target date will be today (the date when the preview request is submitted). |
| NumberOfPeriods | optional | Indicates the number of invoice periods to show in a preview.Type : integerCharacter limit :Version notes : WSDL 28.0+System-generated : noValues : a positive integer greater than 0Usage Notes:PreviewOptions must exist and EnablePreviewMode=true must be set.This option cannot be used in combination with the PreviewThroughTermEnd field.If an InvoiceTargetDate field is specified in the InvoiceProcessingOptions , then this value will be ignored. |
| PreviewThroughTermEnd | optional | Request to preview the charge through the end of the subscription term.Type : booleanCharacter limit : N/AVersion notes : WSDL 51.0+System-generated : noValues : true, falseUsage Notes:PreviewOptions must exist and EnablePreviewMode=true must be set. This option is valid for Termed subscriptions only, not Evergreen subscriptions.This option cannot be used in combination with the NumberofPeriods.If an InvoiceTargetDate field is specified in the invoiceProcessingOptions , then this value is ignored. |
| PreviewType | optional | The type of preview you will receive from a preview request.Type : stringValues :InvoiceItemChargeMetricsInvoiceItemChargeMetricsUsage Notes :InvoiceItem is the default. A preview request will return an invoice item preview.A ChargeMetrics request will return a charge metrics previewAn InvoiceItemChargeMetrics request will return an invoice item and charge metrics of that item. |
| IncludeExistingDraftInvoiceItems | optional | Specifies whether to include draft invoice items in amendment previews.Type : booleanCharacter limit : N/AVersion notes : WSDL 72.0+System-generated : NoValues :true (default). Includes draft invoice items in amendment previews.false. Excludes draft invoice items in amendment previews.Usage Notes : This field is only applicable if the EnablePreviewMode field is set to true . |
