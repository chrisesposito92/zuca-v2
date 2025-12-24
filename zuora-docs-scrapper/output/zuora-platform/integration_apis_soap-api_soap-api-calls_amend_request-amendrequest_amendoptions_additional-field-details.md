---
title: "Additional field details"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest/amendoptions/additional-field-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:28.894Z"
---

# Additional field details

Provides additional field details about InvoiceProcessingOptions and ProcessPayments.

## InvoiceProcessingOptions

`InvoiceProcessingOptions` contains a field related to generating invoices. You only need to use the `InvoiceProcessingOptions` container if you want to both generate invoices with the `amend()` call and specify a target date. If you don't want to do both of these actions, then skip the `InvoiceProcessingOptions` container.

If you decide to generate invoices but don't include this container and its attribute, then Zuora uses the current date as the target date.

You can specify values for the following `InvoiceProcessingOptions` field:

| Name | Required? | Description |
| --- | --- | --- |
| InvoiceDate | optional | The invoice date.Type :date supported as of WSDL version 69+dateTime supported through WSDL version 68Version notes : WSDL 28.0+Values : a valid date and time value |
| InvoiceTargetDate | optional | The date that determines which charges to bill. Charges prior to this date or on this date are billed on the resulting invoices.Type :date supported as of WSDL version 69+dateTime supported through WSDL version 68Version notes : WSDL 28.0+Values : a valid date and time value |

## ProcessPayments

Determines whether to collect payment against the invoice. To set the value to true, the `Account.Autopay` field must also be set to `true` . If the `Account.Autopay` value is `false` , the invoice has a balance, and you don't specify a value for the `ProcessPayments` field, then Zuora returns the following error: `Cannot process payment` .
