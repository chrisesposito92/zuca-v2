---
title: "Fields related to Prepaid with Drawdown"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge/fields-related-to-prepaid-with-drawdown"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:15.811Z"
---

# Fields related to Prepaid with Drawdown

This reference lists the fields related to the Prepaid with Drawdown feature.

Note:

These fields are only available if you have the Prepaid with Drawdown feature enabled.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| IsPrepaid | Required | Create Update Query | Indicates whether this charge is a prepayment (topup) charge or a drawdown charge.Type : boolean Character limit : 5 Version notes : WSDL 114+ Values : true or false |
| PrepaidOperationType | Required | Create Query | The type of this charge. It is either a prepayment (topup) charge or a drawdown charge.Type : string(enum) Character limit : - - Version notes : WSDL 114+ Values : topup or drawdown |
| PrepaidQuantity | Optional (Required for prepayment charge) | Create Update Query | The number of units included in a prepayment charge.Type : decimal Character limit : 22 Version notes : WSDL 114+ Values : must be a positive number (>0). Null for drawdown charge. |
| PrepaidTotalQuantity | Optional | Query | The total amount of units that end customers can use during a validity period when they subscribe to a prepayment charge.Type : decimal Character limit : 22 Version notes : WSDL 114+ Values : calculated with the formula “PrepaidQuantity * Default Quantity”. Only available for prepayment charge. Null for drawdown charge. |
| PrepaidUom | Optional (Required for prepayment charge) | Create Update Query | Unit of measurement for a prepayment charge.Type : string Character limit : – Version notes : WSDL 114+ Values : a configured unit of measure, such as Each. |
| ValidityPeriodType | Optional (Required for prepayment charge) | Create Update Query | The period in which the prepayment units are valid to use as defined in a prepayment charge.Type : enum Character limit : – Version notes : WSDL 114+ Values : One of the following:Subscription_TermAnnualSemi_AnnualQuarterMonth |
| CreditOption | Optional | Create Update Query | The way to calculate credit.Type : enum Character limit : – Version notes : WSDL 114+ Values : One of the following:TimeBasedConsumptionBasedFullCreditBack |
| DrawdownRate | Optional | Create Update Query | The conversion rate between DrawdownUom and UOM in a drawdown charge, as follows: DrawdownRate = DrawdownUom/UOMDrawdownUom is set in the drawdown charge, but you should set this field to the same as the prepayment charge's UOM, which corresponds to the PrepaidUom field of the prepayment charge.UOM is the drawdown (usage) charge's UOM, which corresponds the UOM field of the drawdown charge.Type : decimal Character limit : – Version notes : WSDL 114+ Values :Must be a positive number (>0).Drawdown Rate must be 1 when Drawdown UOM is the same as Usage UOM.If both DrawdownRate and DrawdownUOM are empty, the system will set default values respectively:DrawdownRate: 1DrawdownUOM: Same as the Usage UOM of this drawdown charge.DrawdownRate and DrawdownUOM need to have values or be empty at the same time. |
| DrawdownUom | Optional (Required for drawdown charge) | Create Update Query | The unit of measurement that is configured in a drawdown charge. You should set this field to be the same as the PrepaidUom field of the corresponding prepayment charge. Note that the unit of measurement for the usage is configured in the UOM field of your drawdown charge.Type : string Character limit : – Version notes : WSDL 114+ Values : a configured unit of measure, such as Each. |
