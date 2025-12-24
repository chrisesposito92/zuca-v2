---
title: "Create a prepayment charge -  SOAP API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-charge/create-a-prepayment-charge---soap-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:10.295Z"
---

# Create a prepayment charge - SOAP API

Use the SOAP API to create a prepayment charge, for the Prepaid with Drawdown feature.

You can use the SOAP API to create a prepayment charge. WSDL version 114+ is required for using the Prepaid with Drawdown feature.

Sample SOAP API request: Create a monthly recurring prepayment charge.

<ns1:create> <ns1:zObjects xsi:type\="ns2:ProductRatePlanCharge"\> <ns2:AccountingCode>Accounts Receivable</ns2:AccountingCode> <ns2:BillingPeriod>Month</ns2:BillingPeriod> <ns2:BillingPeriodAlignment>AlignToCharge</ns2:BillingPeriodAlignment> <ns2:ChargeModel>Flat Fee Pricing</ns2:ChargeModel> <ns2:ChargeType>Recurring</ns2:ChargeType> <ns2:Name>Monthly Plan</ns2:Name> <ns2:ProductRatePlanChargeTierData> <ns1:ProductRatePlanChargeTier xsi:type\="ns2:ProductRatePlanChargeTier"\> <ns2:Active>true</ns2:Active> <ns2:Currency>USD</ns2:Currency> <ns2:Price>20</ns2:Price> </ns1:ProductRatePlanChargeTier> </ns2:ProductRatePlanChargeTierData> <ns2:ProductRatePlanId>2c92c0f87a85be74017a88ee747862a8</ns2:ProductRatePlanId> <ns2:TriggerEvent>ContractEffective</ns2:TriggerEvent> //Fields related to prepayment charge <ns2:IsPrepaid>true</ns2:IsPrepaid> <ns2:PrepaidOperationType>topup</ns2:PrepaidOperationType> <ns2:PrepaidQuantity>1</ns2:PrepaidQuantity> <ns2:PrepaidUom>Million calls</ns2:PrepaidUOM> <ns2:ValidityPeriodType>MONTH</ns2:ValidityPeriodType> </ns1:zObjects> </ns1:create>
