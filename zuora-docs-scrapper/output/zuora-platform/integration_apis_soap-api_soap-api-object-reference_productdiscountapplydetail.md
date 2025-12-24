---
title: "ProductDiscountApplyDetail"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productdiscountapplydetail"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:55.499Z"
---

# ProductDiscountApplyDetail

You can use this object to query detailed application information about specific product rate plan charges that use the discount charge model.

The ProductDiscountApplyDetail object is associated with the ProductRatePlanCharge object.

## Supported calls

You can use this object with the query() call.

## Code examples

The following is an example query on the ProductDiscountApplyDetail object.

select id, createdDate,createdById,updatedDate,updatedById,productrateplanchargeid, AppliedProductRatePlanId,AppliedProductRatePlanChargeId from ProductDiscountApplyDetail where productrateplanchargeid='402881ec599b65c901599c74e70c0016'

The following is the example response of the preceding query.

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>true</ns1:done\> <ns1:queryLocator xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:nil="1" /> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:ProductDiscountApplyDetail"\> <ns2:Id>402890525aeab1e2015aeac4f7a500c3</ns2:Id> <ns2:AppliedProductRatePlanChargeId>402881ec5ae47d4b015ae4951adc0008</ns2:AppliedProductRatePlanChargeId> <ns2:AppliedProductRatePlanId>402881ec5ae47d4b015ae494c84e0006</ns2:AppliedProductRatePlanId> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2017-03-20T16:11:01.000+08:00</ns2:CreatedDate> <ns2:ProductRatePlanChargeId>402890525aeab1e2015aeac4f7a500c2</ns2:ProductRatePlanChargeId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2017-03-20T16:11:01.000+08:00</ns2:UpdatedDate> </ns1:records> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:ProductDiscountApplyDetail"\> <ns2:Id>402890525aeab1e2015aeac4f7a500c4</ns2:Id> <ns2:AppliedProductRatePlanChargeId>402881ec5ae47d4b015ae49594a4000e</ns2:AppliedProductRatePlanChargeId> <ns2:AppliedProductRatePlanId>402881ec5ae47d4b015ae494c84e0006</ns2:AppliedProductRatePlanId> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2017-03-20T16:11:01.000+08:00</ns2:CreatedDate> <ns2:ProductRatePlanChargeId>402890525aeab1e2015aeac4f7a500c2</ns2:ProductRatePlanChargeId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2017-03-20T16:11:01.000+08:00</ns2:UpdatedDate> </ns1:records> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:ProductDiscountApplyDetail"\> <ns2:Id>402890525aeab1e2015aeac4f7a500c5</ns2:Id> <ns2:AppliedProductRatePlanChargeId>402881ec5ae47d4b015ae4955810000b</ns2:AppliedProductRatePlanChargeId> <ns2:AppliedProductRatePlanId>402881ec5ae47d4b015ae494c84e0006</ns2:AppliedProductRatePlanId> <ns2:CreatedById>402881e522cf4f9b0122cf5d82860002</ns2:CreatedById> <ns2:CreatedDate>2017-03-20T16:11:01.000+08:00</ns2:CreatedDate> <ns2:ProductRatePlanChargeId>402890525aeab1e2015aeac4f7a500c2</ns2:ProductRatePlanChargeId> <ns2:UpdatedById>402881e522cf4f9b0122cf5d82860002</ns2:UpdatedById> <ns2:UpdatedDate>2017-03-20T16:11:01.000+08:00</ns2:UpdatedDate> </ns1:records> <ns1:size>3</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body> </soapenv:Envelope>
