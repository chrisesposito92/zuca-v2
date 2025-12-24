---
title: "PreviewOptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/previewoptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:21.222Z"
---

# PreviewOptions

The PreviewOptions complex type is used to specify whether to preview a subscription or an amendment.

Use the PreviewOptions object with the amend() and subscribe() calls to specify whether the call should return an actual subscription or amendment, or a preview of what the subscription or amendment would be if activated. This is useful when you want to see what charges would be for a customer considering an order (such as a new order, upgrade/downgrade, adding a product, or adding additional units). You can also use this to debug during implementations or when writing new business logic with the SOAP API.

## Supported calls

-   [amend()](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend)

-   [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe)


## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Allowable values | Description |
| --- | --- | --- | --- | --- |
| EnablePreviewMode | No | Boolean | True or False | Specifies whether the call should create a subscription/amendment, or whether it should return a preview of the order. Used with either NumberOfPeriods or PreviewThroughTermEnd. |
| NumberOfPeriods | No | Integer | Positive integer greater than 0 | Specifies the number of periods to show in a preview.Usage notes:EnablePreviewMode=true must be set.This option cannot be used in combination with PreviewThroughTermEnd.If an InvoiceTargetDate is specified in the InvoiceProcessingOptions, then this value will be ignored and the preview will run through the InvoiceTargetDate. |
| PreviewThroughTermEnd | No | Boolean | True or False | Requests to preview the charge through the end of the subscription term. This option is valid for termed subscriptions only, not Evergreen subscriptions.Usage notes:EnablePreviewMode=true must be set.This option is valid for Termed subscriptions only, not Evergreen subscriptions.This option cannot be used in combination with NumberofPeriods.If an InvoiceTargetDate is specified in the InvoiceProcessingOptions, then this value will be ignored and the preview will run through the InvoiceTargetDate.WSDL version: 51.0 |
| PreviewType | No | String | InvoiceItemChargeMetricsInvoiceItemChargeMetrics | The type of preview you will receive from a preview request.Usage notes:InvoiceItem is the default. A preview request will return an invoice item preview.A ChargeMetrics request will return a charge metrics previewAn InvoiceItemChargeMetrics request will return an invoice item and charge metrics of that item. |
| IncludeExistingDraftInvoiceItems | No | Boolean | true or false | Specifies whether to include draft invoice items in amendment previews.Values:true (default). Includes draft invoice items in amendment previews.false . Excludes draft invoice items in amendment previews.Usage notes: This field is only applicable if the EnablePreviewMode field is set to true . |
