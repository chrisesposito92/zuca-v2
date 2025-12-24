---
title: "DiscountApplyDetail"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/discountapplydetail"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:47.184Z"
---

# DiscountApplyDetail

You can use this object to query detailed application information about specific rate plan charges that use the discount charge model.

The DiscountApplyDetail object is associated with the RatePlanCharge object.

## Supported calls

You can use this object with the query() call.

## Code examples

The following is an example query on the DiscountApplyDetail object.

select id, RatePlanChargeId, createdDate,createdById, updateddate, updatedbyid,AppliedProductRatePlanId,AppliedProductRatePlanChargeId from DiscountApplyDetail where rateplanchargeid='402881ec599b65c901599ca366220040'

The following is the example response of the preceding query.

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>true</ns1:done\> <ns1:queryLocator xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="1" /> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:DiscountApplyDetail"\> <ns2:Id>402881ec599b65c901599ca36615003c</ns2:Id> <ns2:AppliedProductRatePlanChargeId>40289052598b807801598c336990012a</ns2:AppliedProductRatePlanChargeId> <ns2:AppliedProductRatePlanId>40289052598b807801598c3285e20128</ns2:AppliedProductRatePlanId> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2017-01-14T19:01:11.000+08:00</ns2:CreatedDate> <ns2:RatePlanChargeId>402881ec599b65c901599ca366220040</ns2:RatePlanChargeId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2017-01-14T19:01:11.000+08:00</ns2:UpdatedDate> </ns1:records> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:DiscountApplyDetail"\> <ns2:Id>402881ec599b65c901599ca36616003d</ns2:Id> <ns2:AppliedProductRatePlanId>40289052598b807801598c31996a0123</ns2:AppliedProductRatePlanId> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2017-01-14T19:01:11.000+08:00</ns2:CreatedDate> <ns2:RatePlanChargeId>402881ec599b65c901599ca366220040</ns2:RatePlanChargeId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2017-01-14T19:01:11.000+08:00</ns2:UpdatedDate> </ns1:records> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:DiscountApplyDetail"\> <ns2:Id>402881ec599b65c901599ca36616003e</ns2:Id> <ns2:AppliedProductRatePlanId>40289052598b807801598c307211011e</ns2:AppliedProductRatePlanId> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2017-01-14T19:01:11.000+08:00</ns2:CreatedDate> <ns2:RatePlanChargeId>402881ec599b65c901599ca366220040</ns2:RatePlanChargeId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2017-01-14T19:01:11.000+08:00</ns2:UpdatedDate> </ns1:records> <ns1:size>3</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body> </soapenv:Envelope>
