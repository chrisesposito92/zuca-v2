---
title: "AmendResult"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/amendresult"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:58.294Z"
---

# AmendResult

The AmendResult object provides the result of the amend() call.

All field names are case sensitive.

| Field | Type | Description |
| --- | --- | --- |
| AmendmentIds | zns:ID | The ID of the Amendment objects. |
| ChargeMetricsData | zns:ID | The ID of the ChargeMetricsData objects. This field is returned only when setting PreviewMode for amend() to true. |
| Errors | zns:Error | An array of errors indicating why the amend request may have failed. |
| GatewayResponse | string | A gateway-dependent message returned from the payment gateway, up to 500 characters. (WSDL 47+) |
| GatewayResponseCode | string | A gateway-dependent response code returned from the payment gateway, up to 20 characters. (WSDL 47+) |
| InvoiceDatas | zns:InvoiceData | A wrapper for an invoice and its line items. This field is returned only when setting PreviewMode for amend() to true. |
| InvoiceId | zns:ID | The system-generated Zuora invoice ID for the created Account. |
| PaymentTransactionNumber | string | A payment transaction number associated with this amendment. |
| SubscriptionId | string | The ID of the subscription that the amendment changes. |
| Success | boolean | Indicates whether the amend request succeeded (true) or did not succeed (false). |
| TotalDeltaMrr | decimal | Total Monthly Recurring Revenue (MRR) for this subscription (WSDL 48+). For renewals, this is the MRR of the new contract. |
| TotalDeltaTcv | decimal | Total Contract Value (TCV) of this subscription (WSDL 48+). For renewals, this is the TCV of the new contract. |
