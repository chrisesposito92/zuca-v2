---
title: "BillingPreview()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/billingpreview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:41.551Z"
---

# BillingPreview()

Use the BillingPreview() call to generate a preview of future invoice items for one or more customer accounts.

You can use the BillingPreview() call to calculate how much a single customer or group of customers will be invoiced from the most recent invoice to a specific end-of-term date in the future. Additionally, you can use the Billing Preview service to access real-time data on an individual customer's usage consumption. Note that the BillingPreview() call does not calculate taxes for charges in the subscription.

## Usage

Note:

As of Zuora R181, WSDL version 61.0, the feature formerly known as forecast API was renamed to Billing Preview API. Zuora recommends that you upgrade to this latest version as soon as possible. Download WSDL version 61.0+ to use the Billing Preview API.

You can use BillingPreview() with one or more BillingPreviewRequest complex types. You can request preview data for multiple customers by including a BillingPreviewRequest complex type for each customer.

The BillingPreview call synchronously returns a BillingPreviewResult complex type which contains an array of preview [InvoiceItem](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceitem) objects for each of the customers specified in the request.

The Billing Preview call generates preview invoice item data from the first day of the customer's next billing period to the Target Date specified in the BillingPreviewRequest complex type. The customer's next billing period is the period for which the customer has yet to be invoiced. The date this period begins is particular to each customer, and can start in the past or the future depending on the target date of the customer's last bill run.

## Complex type per call

A maximum of 20 `BillingPreviewRequest` complex types per call are allowed.

## Syntax and arguments

The call uses the following items:
| Complex Type | Description |
| --- | --- |
| BillingPreviewRequest | A single complex type of type BillingPreviewRequest |

## Response

The call returns the following items:
| Complex Type | Description |
| --- | --- |
| BillingPreviewResult | A single complex type of type BillingPreviewResult |

## Faults

-   InvalidTypeFault

-   UnexpectedErrorFault


## Sample request

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session>RY5zwdJa6OpXkxSJyY1NWiUYqBrbbY68G5tQpsk2pawGcINc63V7swMO7MtLwG2t-TOj3IAEljX\_YC7LG7zR5tM1Wboe2PVDhGxrfTrZGizfyBDi9X7C0btpSyQc4FKGL1uVqvdWEiE\_ISNNH7KYO9Zg5ja\_ELBRMSCsEEyvIZjH3NsvoMCiBYKMXUNJ4fSe</api:session> </api:SessionHeader> </soapenv:Header> <soapenv:Body> <api:billingPreview> <!--Zero or more repetitions:--> <api:requests> <api:AccountId>402892154627d9a2014627e1b0b60114</api:AccountId> <api:ChargeTypeToExclude>OneTime,Recurring</api:ChargeTypeToExclude> <api:TargetDate>2014-06-01T19:18:09</api:TargetDate> <api:IncludingEvergreenSubscription>true</api:IncludingEvergreenSubscription> </api:requests> </api:billingPreview> </soapenv:Body> </soapenv:Envelope>

## Sample response

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:billingPreviewResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:results> <ns1:AccountId>402892154627d9a2014627e1b0b60114</ns1:AccountId> <ns1:Success>true</ns1:Success> <ns1:Size>2</ns1:Size> <ns1:InvoiceItem xsi:type\="ns2:InvoiceItem" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>91927bf9994846708c071a7cd50add02</ns2:Id> <ns2:ChargeAmount>0</ns2:ChargeAmount> <ns2:ChargeDate>2014-05-28T18:34:49.643+08:00</ns2:ChargeDate> <ns2:ChargeType>Usage</ns2:ChargeType> <ns2:ChargeNumber>A-S00000019</ns2:ChargeNumber> ​​​​​​​<ns2:SubscriptionNumber>C-00000060</ns2:SubscriptionNumber> <ns2:ProcessingType>0</ns2:ProcessingType> <ns2:Quantity>10</ns2:Quantity> <ns2:RatePlanChargeId>402892154627d9a2014627ee5cbd0131</ns2:RatePlanChargeId> <ns2:ServiceEndDate>2014-05-31</ns2:ServiceEndDate> <ns2:ServiceStartDate>2014-05-23</ns2:ServiceStartDate> <ns2:SubscriptionId>402892154627d9a2014627ee5c350129</ns2:SubscriptionId> <ns2:UOM>Each</ns2:UOM> </ns1:InvoiceItem> <ns1:InvoiceItem xsi:type\="ns2:InvoiceItem" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>1c8479cde1784bd38ed70a15d2a6d09b</ns2:Id> <ns2:ChargeAmount>10</ns2:ChargeAmount> <ns2:ChargeDate>2014-05-28T18:34:49.643+08:00</ns2:ChargeDate> <ns2:ChargeType>Usage</ns2:ChargeType> ​​​​​​​<ns2:ChargeNumber>A-S00000021</ns2:ChargeNumber> ​​​​​​​<ns2:SubscriptionNumber>C-00000063</ns2:SubscriptionNumber> <ns2:ProcessingType>0</ns2:ProcessingType> <ns2:Quantity>5</ns2:Quantity> <ns2:RatePlanChargeId>402892154627d9a2014627ee5cbd0131</ns2:RatePlanChargeId> <ns2:ServiceEndDate>2014-05-31</ns2:ServiceEndDate> <ns2:ServiceStartDate>2014-05-23</ns2:ServiceStartDate> <ns2:SubscriptionId>402892154627d9a2014627ee5c350129</ns2:SubscriptionId> <ns2:UOM>Each</ns2:UOM> </ns1:InvoiceItem> </ns1:results> </ns1:billingPreviewResponse> </soapenv:Body> </soapenv:Envelope>
