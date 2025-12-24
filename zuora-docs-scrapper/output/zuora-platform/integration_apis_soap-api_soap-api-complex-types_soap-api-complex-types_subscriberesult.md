---
title: "SubscribeResult"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/subscriberesult"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:43.068Z"
---

# SubscribeResult

The SubscribeResult object provides the results of a subscribe() request.

## Syntax

`SubscribeResult[] = subscribe(SubscribeRequest[])`

## Field descriptions

All field names are case sensitive.

| Name | Type | Description |
| --- | --- | --- |
| AccountId | zns:ID | The system-generated Zuora ID for the created account.Values: This field is not editable. |
| AccountNumber | string | The account number.Values: This field is not editable. |
| ChargeMetricsData | zns:ID | The ID of the ChargeMetricsData object.Only returned when using preview mode for subscribe(). |
| Errors | An array of type Error | An array of errors denoting why the subscribe request may have failed.Values: This field is not editable. |
| GatewayResponse | string | A gateway-dependent message returned from the payment gateway, up to 500 characters. (WSDL 47+) |
| GatewayResponseCode | string | A gateway-dependent response code returned from the payment gateway, up to 20 characters. (WSDL 47+) |
| InvoiceData | A wrapper for an invoice and its line items | Only returned when using preview mode for subscribe().Allowable values: This field is not editable. |
| InvoiceId | zns:ID | The system-generated Zuora invoice ID associated with the subscription.Allowable values: This field is not editable. |
| InvoiceNumber | string | An invoice number associated with the subscription.Allowable values: This field is not editable. |
| InvoiceResult | zns:ID, string | The collection of all invoices generated within the subscribe call. The Invoice ID and invoice number are shown for each invoice within invoice result. This field was added in version 30.Allowable values: InvoiceID, InvoiceNumber |
| PaymentId | zns:ID | The ID for the payment.Allowable values: This field is not editable. |
| PaymentTransactionNumber | string | A payment transaction number associated with this subscription.Allowable values: This field is not editable. |
| SubscriptionId | zns:ID | An identification number for the subscription.Allowable values: This field is not editable. |
| SubscriptionNumber | string | A number for the subscription.Allowable values: This field is not editable. |
| Success | boolean | Indicates whether the subscribe request succeeded (true) or did not succeed (false).Allowable values: This field is not editable. |
| TotalMrr | decimal | Total Monthly Recurring Revenue (MRR) for this subscription (WSDL 48+) |
| TotalTcv | decimal | Total Contract Value (TCV) of this subscription (WSDL 48+) |
