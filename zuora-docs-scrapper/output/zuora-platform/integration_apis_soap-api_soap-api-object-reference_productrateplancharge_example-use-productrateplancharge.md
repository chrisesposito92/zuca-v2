---
title: "Example: Use ProductRatePlanCharge"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/example-use-productrateplancharge"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:23.587Z"
---

# Example: Use ProductRatePlanCharge

Provides examples of using the ProductRatePlanCharge object.

## Example: Create DiscountPercentage charge

Request:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>VG5wfW54Wu9bKGyDkRelw3DOFRuN9Xz6JRZSEtOh-2UIDLzKkH6EQ3UyhS9\_j7McGcAVvp4fBRIFXPRHsy-JV2wd6278MI-onjrCGBg6iWNGPbiLY04IuM8lzkVYrcGJ2r1Zxn6vVjl6ldZPclQ0qcDe2uQ\_GJSXh6RDbBa33K8Ul6\_UFEw8obs1ORENg9Iz</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:ProductRatePlanCharge"\> <ns2:Name>API\_discountPercentagecharge</ns2:Name> <ns2:BillCycleType>SubscriptionStartDay</ns2:BillCycleType> <ns2:BillingPeriod>Annual</ns2:BillingPeriod> <ns2:BillingPeriodAlignment>AlignToTermStart</ns2:BillingPeriodAlignment> <ns2:TriggerEvent>ContractEffective</ns2:TriggerEvent> <ns2:ChargeModel>DiscountPercentage</ns2:ChargeModel> <ns2:ChargeType>Recurring</ns2:ChargeType> <ns2:ApplyDiscountTo>RECURRING</ns2:ApplyDiscountTo> <ns2:DiscountLevel>subscription</ns2:DiscountLevel> <ns2:UpToPeriods>6</ns2:UpToPeriods> <ns2:ProductRatePlanChargeTierData> <ns1:ProductRatePlanChargeTier xsi:type\="ns2:ProductRatePlanChargeTier"\> <ns2:DiscountPercentage>9.9</ns2:DiscountPercentage> </ns1:ProductRatePlanChargeTier> </ns2:ProductRatePlanChargeTierData> <ns2:ProductRatePlanId>402892a3384ff47801384ff9e5010004</ns2:ProductRatePlanId> </ns1:zObjects> </ns1:create> </soapenv:Body> </soapenv:Envelope> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:createResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>402892a337e8edd90137ea1482100018</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:createResponse> </soapenv:Body> </soapenv:Envelope>

## Example: Update DiscountPercentage charge

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>Rpg8r3WMihMYauT9YKMk4y4Zz\_zKH7GYO83ROLFYQchVlpCrvcKV84X1Agdcg-\_9U8go3VJi8qZdw0JmvHRbeJXiZwJsHFyoGDrmAEQn-</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:ProductRatePlanCharge"\> <ns2:Id>402892a338a317cc0138a341efe7000a</ns2:Id> <ns2:ChargeModel>DiscountPercentage</ns2:ChargeModel> <ns2:ProductRatePlanChargeTierData> <ns1:ProductRatePlanChargeTier xsi:type\="ns2:ProductRatePlanChargeTier"\> <ns2:DiscountPercentage>22.22</ns2:DiscountPercentage> <ns2:Id>402892a338a317cc0138a341efe7000a</ns2:Id> </ns1:ProductRatePlanChargeTier> </ns2:ProductRatePlanChargeTierData> </ns1:zObjects> </ns1:update> </soapenv:Body> </soapenv:Envelope> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:updateResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>402892a338a317cc0138a341efe7000a</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:updateResponse> </soapenv:Body> </soapenv:Envelope>

## Example: Query DiscountPercentage charge

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session>Rpg8r3WMihMYauT9YKMk4y4Zz\_zKH7GYO83ROLFYQchVlpCrvcK</api:session> </api:SessionHeader> </soapenv:Header> <soapenv:Body> <api:query> <api:queryString>select id,name,ChargeModel,ChargeType,ApplyDiscountTo,DiscountLevel,UpToPeriods from ProductRatePlanCharge where id = '402892a338a317cc0138a341efe7000a'</api:queryString> </api:query> </soapenv:Body> </soapenv:Envelope> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>true</ns1:done\> <ns1:queryLocator xsi:nil="1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/> <ns1:records xsi:type\="ns2:ProductRatePlanCharge" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>402892a338a317cc0138a341efe7000a</ns2:Id> <ns2:ApplyDiscountTo>RECURRING</ns2:ApplyDiscountTo> <ns2:ChargeModel>Discount-Percentage</ns2:ChargeModel> <ns2:ChargeType>Recurring</ns2:ChargeType> <ns2:DiscountLevel>subscription</ns2:DiscountLevel> <ns2:Name>API\_discountPercentagecharge</ns2:Name> <ns2:UpToPeriods>6</ns2:UpToPeriods> </ns1:records> <ns1:size>1</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body> </soapenv:Envelope>

## Example: TaxMode query

Request:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:Session>oX\_WH9vz\_mR5c8PqSlyG86ZotIFOr7rIXpKet8HAqg1-BhcAi0JV4iFv5NPUgRbo-eo1VCTxei2J8uNyG22zioK9wAXvzxPO3LdUbLUGnImdyLjVZhWhqnDbkuQG8\_5E\_TqEGOYq5XyPfVTmo6ExzM-JQDyDKoVQzy5oS2r7s0NFM7Uk-9e0BqPzCl4C1iQo</api:Session> </api:SessionHeader> </soapenv:Header> <soapenv:Body> <api:query> <api:queryString>select Id,TaxMode from ProductRatePlanCharge</api:queryString> </api:query> </soapenv:Body> </soapenv:Envelope>

Response:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>true</ns1:done\> <ns1:queryLocator xsi:nil="1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/> <ns1:records xsi:type\="ns2:ProductRatePlanCharge" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>4028921e3971b317013971b659a300e4</ns2:Id> <ns2:TaxMode>TaxExclusive</ns2:TaxMode> </ns1:records> <ns1:records xsi:type\="ns2:ProductRatePlanCharge" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>4028921e3971b317013971b65b0300e6</ns2:Id> <ns2:TaxMode>TaxInclusive</ns2:TaxMode> </ns1:records> <ns1:size>2</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body> </soapenv:Envelope>
