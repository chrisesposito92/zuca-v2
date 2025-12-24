---
title: "Query processed usage"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/query/query-processed-usage"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:02.173Z"
---

# Query processed usage

You can query the Processed Usage object synchronously through SOAP API to retrieve billed usage records.

## Use case

If the following Billing Rule is used, Round and determine a price for usage records individually when rating usage charges? , the Processed Usage object records will carry the price per usage record that was determined during billing.

## Available fields

The following fields on the Processed Usage object can be accessed from the SOAP API query. Note that WSDL Version 114 or higher is required when making the query call.

-   AccountId

-   BillingPeriodStartDate

-   BillingPeriodEndDate

-   CreatedById

-   CreatedDate

-   InvoiceItemId

-   Quantity

-   RatingAmount

-   SubscriptionId

-   RatePlanChargeId

-   UpdatedById

-   UpdatedDate

-   UsageID


You can use all of these fields to specify conditions when fetching data. However, the Quantity and RatingAmount fields only have value when the Round and determine a price for usage records individually when rating usage charges? billing rule is set to Yes .

## Example

The following is an example of the request body and the response body when querying the Processed Usage object against a specific account.

Request:

<soapenv:Body> <api:query> <api:queryString>select AccountId, BillingPeriodStartDate, BillingPeriodEndDate, CreatedById, CreatedDate, InvoiceItemId, Quantity, RatingAmount, SubscriptionId, RatePlanChargeId, UpdatedById, UpdatedDate, UsageID from ProcessedUsage where AccountId = '402880e77d2e215d017d2e8bfffd0012'and InvoiceItemId = '402880e77d2e215d017d2ec97b1b00cb'</api:queryString> </api:query> </soapenv:Body>

Response:

<soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>true</ns1:done\> <ns1:queryLocator xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="1" /> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:ProcessedUsage"\> <ns2:Id>402880e77d2e215d017d2ec97af200bf</ns2:Id> <ns2:AccountId>402880e77d2e215d017d2e8bfffd0012</ns2:AccountId> <ns2:BillingPeriodEndDate>2021-09-30T11:30:00.000-07:00</ns2:BillingPeriodEndDate> <ns2:BillingPeriodStartDate>2021-08-31T11:30:00.000-07:00</ns2:BillingPeriodStartDate> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2021-11-17T08:44:55.000-08:00</ns2:CreatedDate> <ns2:RatePlanChargeId>402880e77d2e215d017d2ebc8b1a0080</ns2:RatePlanChargeId> <ns2:SubscriptionId>402880e77d2e215d017d2ebc8adc0073</ns2:SubscriptionId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2021-11-17T08:44:55.000-08:00</ns2:UpdatedDate> <ns2:UsageID>402880e77d2e215d017d2ec8f9c200ac</ns2:UsageID> </ns1:records> <ns1:size>1</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body>
