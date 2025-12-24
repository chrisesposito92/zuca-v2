---
title: "Create a drawdown charge - SOAP API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/drawdown-charge/create-a-drawdown-charge---soap-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:20.402Z"
---

# Create a drawdown charge - SOAP API

Learn how to use the SOAP API to create a prepayment charge with the Prepaid with Drawdown feature.

You can use the SOAP API to create a drawdown charge. WSDL version 114+ is required for using the Prepaid with Drawdown feature.

Sample SOAP API request: Create monthly usage drawdown charge.

<ns1:create> <ns1:zObjects xsi:type\="ns2:ProductRatePlanCharge"\> <ns2:AccountingCode>Accounts Receivable</ns2:AccountingCode> <ns2:BillingPeriod>Month</ns2:BillingPeriod> <ns2:BillingPeriodAlignment>AlignToCharge</ns2:BillingPeriodAlignment> <ns2:ChargeModel>Per Unit Pricing</ns2:ChargeModel> <ns2:ChargeType>Usage</ns2:ChargeType> <ns2:Name>Drawdown</ns2:Name> <ns2:ProductRatePlanChargeTierData> <ns1:ProductRatePlanChargeTier xsi:type\="ns2:ProductRatePlanChargeTier"\> <ns2:Active>true</ns2:Active> <ns2:Currency>USD</ns2:Currency> <ns2:Price>5</ns2:Price> </ns1:ProductRatePlanChargeTier> </ns2:ProductRatePlanChargeTierData> <ns2:ProductRatePlanId>2c92c0f87a85be74017a88ee747862a8</ns2:ProductRatePlanId> <ns2:TriggerEvent>ContractEffective</ns2:TriggerEvent> <ns2:UOM>Million calls</ns2:UOM> //Fields related to drawdown charge <ns2:IsPrepaid>true</ns2:IsPrepaid> <ns2:PrepaidOperationType>drawdown</ns2:PrepaidOperationType> <ns2:DrawdownRate>1</ns2:DrawdownRate> <ns2:DrawdownUom>Million calls</ns2:DrawdownUom> </ns1:zObjects> </ns1:create>
