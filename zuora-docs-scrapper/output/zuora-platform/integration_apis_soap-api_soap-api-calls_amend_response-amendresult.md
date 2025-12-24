---
title: "Response: AmendResult"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/response-amendresult"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:36.563Z"
---

# Response: AmendResult

Use this reference to learn the AmendResult wrapper and its fields.

The AmendResult wrapper is the response for the amend() call.

## AmendResult fields

| Name | Description |
| --- | --- |
| AmendmentId | The ID of the associated Amendment object. There can be as many as three AmendmentId values.Type : zns:IDCharacter limit :Version notes : WSDL 28.0 - 41.0 supports only one AmendmentId value. WSDL 42.0+ supports three AmendmentId values.Values : valid Amendment object IDs |
| Error | An array of errors that indicate why the amend() call failed.Type : zns:ErrorCharacter limit :Version notes : WSDL 28.0+Values : |
| InvoiceData | A wrapper for the associated invoice preview. This field is only returned when the EnablePreviewMode field value is set to true.Type : zns:InvoiceDataCharacter limit :Version notes : WSDL 28.0+Values : |
| InvoiceId | The ID of the associated Invoice object .Type : zns:IDCharacter limit :Version notes : WSDL 28.0+Values : |
| PaymentTransactionNumber | The payment transaction number associated with this amendment.Type : stringCharacter limit :Version notes : WSDL 28.0+Values : |
| SubscriptionId | The ID of the new Subscription object that is created when amending a subscription; the old subscription is cancelled and kept on file with its original ID.Type : zns:IDCharacter limit :Version notes : WSDL 46.0+Allowable values : valid Subscription object IDs |
| Success | Indicates if the amend() call succeeded or failed. The value is true if the call succeeded.Type : booleanCharacter limit :Version notes : WSDL 28.0+Values : true, false |
| TotalDeltaMrr | Total Monthly Recurring Revenue (MRR) for this subscription (WSDL 48+)Type : decimalCharacter limit :Version notes : WSDL 48.0+Values : |
| TotalContractedValue | Total Contract Value (TCV) of this subscription (WSDL 48+)Type : decimalCharacter limit :Version notes : WSDL 48.0+Values : |
