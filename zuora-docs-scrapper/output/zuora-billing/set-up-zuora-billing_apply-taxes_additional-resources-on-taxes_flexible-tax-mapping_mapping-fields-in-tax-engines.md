---
title: "Mapping fields in tax engines"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/flexible-tax-mapping/mapping-fields-in-tax-engines"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:20.496Z"
---

# Mapping fields in tax engines

This reference details the mapping of fields in various tax engines, including Vertex, Taxamo, and Avalara, to the Zuora TaxationItem object, highlighting supported fields and field paths.

The following section illustrates what fields can be mapped and their respective mappings in each tax engine.
Note: Zuora only supports field mapping for the Taxation Item object.

## Vertex O Series Tax Connector app

The following table lists the fields that can be mapped and specified in Field Name. Information about how to figure out the path to fetch a value fromVertex O Series Tax Connector app (Vertex) is also provided.

|  | Description |
| --- | --- |
| Field name | Field on the Zuora TaxationItem object to store a value.The following fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c).For more information about managing custom fields via Zuora UI, see Manage custom fields . |
| Field path | Path to fetch a value from Vertex's response.Only the fields in the Taxesblock can be mapped as field path.A typical response from Vertex is in XML format(<Element attribute></Element>).Path to fetch attribute value: Element, attributePath to fetch element value: Element, __content__(double underscore)Do not fetch any value: blank |

A typical response from Vertex is as follows:

<Taxes taxResult="TAXABLE" taxType="SELLER\_USE" situs="DESTINATION" taxCollectedFromParty="BUYER" taxStructure="SINGLE\_RATE"\> <Jurisdiction jurisdictionLevel="DISTRICT" jurisdictionId="96933"\><!\[CDATA\[RETAIL TRANSACTIONS AND USE TAX (SMGT)\]\]></Jurisdiction> <CalculatedTax>10.0</CalculatedTax> <EffectiveRate>0.005</EffectiveRate> <Taxable>2000.0</Taxable> <Imposition impositionId="1"\>Local Sales and Use Tax</Imposition> <ImpositionType impositionTypeId="1"\>General Sales and Use Tax</ImpositionType> <TaxRuleId>496343</TaxRuleId> </Taxes>

-   To map Zuora’s `name` field with Vertex’s `impositionId` attribute, the field path is `Imposition, impositionId` , and the value stored is `1`

-   To map Zuora’s `name` field with Vertex’s `Imposition` element, the field path is `Imposition, __content__` , and the value stored is `Local Sales and Use Tax`

-   To store no value on Zuora’s `name` field, the field path is `blank`


The following screenshot illustrates how to specify the values for Field Name and Field Path in the Zuora UI:

![Vertex](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c685b4a7-685e-446c-b778-b438cf3d19ca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM2ODViNGE3LTY4NWUtNDQ2Yy1iNzc4LWI0MzhjZjNkMTljYSIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiNjk3M2FjZjk4MzE3NDU0NmIyN2JkNGM1NmI4OGZjMTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.l0p9nl7iq73JoAL4OxnKDQRHTr1Lu0O5yaJ94wzhiqQ)

-   When the field in the response does not have optional attributes such as `<CalculatedTax>10.0</CalculatedTax>` :

    -   Set Field Name to `name`

    -   Set Field Path to the name of the field in the Vertex response field, which is `CalculatedTax` in this case

-   When the field in the response has optional attributes such as `<Imposition impositionId="1">Local Sales and Use Tax</Imposition>` :

    -   Set Field Name to a custom field, which is `Imposition__c` in this case

    -   Set Field Path to `Imposition, __content__`


Note:

The Vertex O Series Tax Connector app also handles flexible fields, mapping fields such as flexible\_code\_field, flexible\_numeric\_field, and flexible\_date\_field into billing responses as custom fields. To know more about the mapping logic, see Map flexible fields from Vertex to billing response.

## Vertex Advantage Tax Connector app

|  | Description |
| --- | --- |
| Field name | Field on the Zuora TaxationItem object to store a value.The following fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c).For more information about managing custom fields via Zuora UI, see Manage custom fields . |
| Field path | Path to fetch a value from Taxamo’s response.Only the fields under the transaction_lines block can be mapped as field path. |

A typical transaction\_lines block from the Taxamo vendor response is as follows:

"transaction\_lines": \[ { "description": "Live - Monthly", "amount": 39.0, "unit\_price": 39.0, "custom\_fields": \[ { "key": "invoiceItemId", "value": "8a28b56b8e554f76018e55f3cbaa3030" }, { "key": "taxCode", "value": "VAT/GST" }, { "key": "taxMode", "value": "0" }, { "key": "dbId", "value": "50715533" }, { "key": "chargeId", "value": "8a28828d68a2803f0168ab2e14ae1d2d" }, { "key": "documentId", "value": "8a28b56b8e554f76018e55f3cb8c302c" }, { "key": "documentNumber", "value": "INV01827680" }, { "key": "discountAmount", "value": "0" } \], "tax\_amount": 2.57, "tax\_deducted": false, "tax\_region": "US", "cached\_rate": false, "tax\_rate": 6.5897435898, "additional\_currencies": { "tax": { "amount": 39.0, "tax\_amount": 2.57, "total\_amount": 41.57 } }, "tax\_country\_code": "US", "line\_key": "YIOeJbRhNhOhm1FU", "custom\_id": "8a28b56b8e554f76018e55f3cbaa3030", "tax\_name": "Texas Tax", "tax\_rate\_checks": \[ "CA-GST-enabled", "CA-BC-PST-enabled", "CA-SK-PST-enabled", "CA-QC-QST-enabled" \], "product\_tax\_code": "310104", "line\_num": 1, "quantity": 1, "total\_amount": 41.57, "tax\_components": \[ { "revenue": 39.0, "tax\_amount": 1.95, "city": "PLANO", "tax\_rate": 6.25, "county": "COLLIN", "tax\_authority\_name": "TEXAS", "tax\_authority\_id": "35763", "tax\_name": "Sales and Use Tax", "revenue\_base": 31.2, "calculated\_tax\_rate\_used": true, "percent\_taxable": 0.8, "jurisdiction\_code": "35763", "calculated\_tax\_rate": 5, "state\_code": "TX" }, { "revenue": 39.0, "tax\_amount": 0.31, "city": "PLANO", "tax\_rate": 1, "county": "COLLIN", "tax\_authority\_name": "PLANO", "tax\_authority\_id": "77891", "tax\_name": "Local Sales and Use Tax", "revenue\_base": 31.2, "calculated\_tax\_rate\_used": true, "percent\_taxable": 0.8, "jurisdiction\_code": "77891", "calculated\_tax\_rate": 0.7948717949, "state\_code": "TX" }, { "revenue": 39.0, "tax\_amount": 0.31, "city": "PLANO", "tax\_rate": 1, "county": "COLLIN", "tax\_authority\_name": "DALLAS METROPOLITAN TRANSIT AUTHORITY", "tax\_authority\_id": "78120", "tax\_name": "Local Sales and Use Tax", "revenue\_base": 31.2, "calculated\_tax\_rate\_used": true, "percent\_taxable": 0.8, "jurisdiction\_code": "78120", "calculated\_tax\_rate": 0.7948717949, "state\_code": "TX" } \], "tax\_entity\_name": "US", "tax\_supported": true } \],

The following screenshot illustrates how to specify the values for Field Name and Field Path in the Zuora UI:

![Taxamo](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8b98c382-8a04-43ef-b548-7fd02fae861c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhiOThjMzgyLThhMDQtNDNlZi1iNTQ4LTdmZDAyZmFlODYxYyIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiNjNmZDQxMzM3YmFhNDA3NmExZTM1OWUwYTRlODA3NjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.C4DaN52Z0PV8Wq9qtwMHwthZPyRNn8fB9cjPeAteE0E)

-   Set Field Name to `name` , and set Field Path to `description`

-   Set Field Name to `total_amount__c` (custom field), and set Field Path to `total_amount`


Note that the preceding example is applicable to invoice. The response body of credit memo is different from the response body of invoice. The fields available for Field Path changes, while the format remains the same. See the following example.

{"refund\_note\_number"\=>nil, "tax\_amount"\=>0, "total\_amount"\=>0, "refunded\_total\_amount"\=>57.82, "refunded\_tax\_amount"\=>8.82, "warnings"\=>\[{"type"\=>"refund-amount-too-high", "message"\=>"Provided amount to be refunded is too high, trimming."}\]}

In addition to maintaining the current flexible fields mapping support, our system also offers the capability to map fields within the tax\_components section of the vendor response, simplifying access through direct access as shown in the following image:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/77fc2abc-6b5b-4bd2-94bb-2b3b4aba5222?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc3ZmMyYWJjLTZiNWItNGJkMi05NGJiLTJiM2I0YWJhNTIyMiIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiNDEzNzg4NGE2NjVkNGIxMjgzYTEyYmIxMmE5M2NlMGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.34ivwSJkHFgLE-XVyBSBvHDmzibIPjdQr_vVI0OxCmY)

Note:

To learn more about enhancing flexible access to tax information in billing and refund responses through the mapping of Vertex advantage tax\_component fields, refer to Tax component field mapping for Vertex advantage tax connector app.

## OneSource Determination app

The following table lists the fields that can be mapped and specified in Field Name. Information about how to figure out the path to fetch a value from OneSource Determination app (Sabrix) is also provided.

|  | Description |
| --- | --- |
| Field name | Field on the Zuora TaxationItem object to store a value.The following fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c).For more information about managing custom fields via Zuora UI, see Manage custom fields . |
| Field path | Path to fetch a value from Sabrix’s response.Only the fields in the TAX block can be mapped as field path. |

A typical TAX block from the OneSource Determination vendor response is as follows:

<TAX> <RULE\_ORDER>9970</RULE\_ORDER> <TAXABLE\_COUNTRY>US</TAXABLE\_COUNTRY> <TAXABLE\_COUNTRY\_NAME>UNITED STATES</TAXABLE\_COUNTRY\_NAME> <TAXABLE\_STATE>PUERTO RICO</TAXABLE\_STATE> <TAXABLE\_COUNTY>PONCE</TAXABLE\_COUNTY> <TAXABLE\_CITY>PONCE</TAXABLE\_CITY> <TAXABLE\_POSTCODE>00780</TAXABLE\_POSTCODE> <TAX\_RATE\_CODE>CU</TAX\_RATE\_CODE> <TAX\_TYPE>CU</TAX\_TYPE> <ZONE\_NAME>PUERTO RICO</ZONE\_NAME> <ZONE\_LEVEL>State</ZONE\_LEVEL> <TAX\_RATE>0.105</TAX\_RATE> <NATURE\_OF\_TAX>P</NATURE\_OF\_TAX> <EU\_TRANSACTION>false</EU\_TRANSACTION> <AUTHORITY\_UUID>fec10be8-57e8-4ce8-81b5-3475f77a3031</AUTHORITY\_UUID> <AUTHORITY\_CURRENCY\_CODE>USD</AUTHORITY\_CURRENCY\_CODE> <CURRENCY\_CONVERSION> <TAX\_EXCHANGE\_RATE\_DATE>2022-08-09</TAX\_EXCHANGE\_RATE\_DATE> </CURRENCY\_CONVERSION> <EXEMPT\_AMOUNT> <DOCUMENT\_AMOUNT>0.00</DOCUMENT\_AMOUNT> <UNROUNDED\_DOCUMENT\_AMOUNT>0.0000000000</UNROUNDED\_DOCUMENT\_AMOUNT> <AUTHORITY\_AMOUNT>0.00</AUTHORITY\_AMOUNT> <UNROUNDED\_AUTHORITY\_AMOUNT>0.0000000000</UNROUNDED\_AUTHORITY\_AMOUNT> </EXEMPT\_AMOUNT> <GROSS\_AMOUNT> <AUTHORITY\_AMOUNT>120.00</AUTHORITY\_AMOUNT> <UNROUNDED\_AUTHORITY\_AMOUNT>120.0000000000</UNROUNDED\_AUTHORITY\_AMOUNT> </GROSS\_AMOUNT> </TAX>

The following screenshot illustrates how to specify the values for Field Name and Field Path in the Zuora UI:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49a6f85c-5753-46ad-a922-d405c57d63ff?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5YTZmODVjLTU3NTMtNDZhZC1hOTIyLWQ0MDVjNTdkNjNmZiIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiMGRmNDZkMGY1MzU4NDhjYjk3ODU1ZTEzZjAwM2E0NDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.i-dDdgwo8EUcbN56FkOwDVttJe5cF2ID6imYaz5TpVA)

Assume that you want to map the field `name` with `TAXABLE_COUNTRY_NAME` and the custom field `GrossAmount__c` with `UNROUNDED_AUTHORITY_AMOUNT` , perform the following actions:

-   Set Field Name to `name` , and Field Path to `TAXABLE_COUNTRY_NAME`

-   Set Field Name to `GrossAmount__c` , and Field Path to `GROSS_AMOUNT, UNROUNDED_AUTHORITY_AMOUNT` As `UNROUNDED_AUTHORITY_AMOUNT` is nested inside `GROSS_AMOUNT` , we follow the rule <outer element>, <nested element> to set Field Path

-   Set Field Path to `blank` to store no value on the `name` field


## Avalara AvaTax for Communication app

The following table lists the fields that can be mapped and specified in Field Name. Information about how to figure out the path to fetch a value from Avalara AvaTax for Communication app (AvalaraTelco) is also provided.

|  | Description |
| --- | --- |
| Field name | Field on the Zuora TaxationItem object to store a value.The following fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c).For more information about managing custom fields via Zuora UI, see Manage custom fields . |
| Field path | Path to fetch a value from AvalaraTelco’s response.Only the fields in the txs block can be mapped as field path. |

A typical txs block from the AvalaraTelco vendor response is as follows:

{ "inv": \[ { "doc": "CM00098111", "itms": \[ { "ref": "8a28e9bd7de2b488017de48c907e2bdc", "txs": \[ { "bill": true, "cmpl": true, "tm": 41.1, "calc": 1, "cat": "UTILITY USER TAXES", "cid": 8, "name": "Utility Users Tax", "exm": 0, "lns": 0, "min": 0, "pcd": 383700, "rate": 0.04, "sur": false, "tax": 1.644, "lvl": 3, "tid": 16 }, { "bill": true, "cmpl": true, "tm": 41.1, "calc": 1, "cat": "EXCISE TAXES", "cid": 4, "name": "Federal Excise Tax", "exm": 0, "lns": 0, "min": 0, "pcd": 0, "rate": 0.03, "sur": false, "tax": 1.233, "lvl": 0, "tid": 6 } \] }, { "ref": "8a28e9bd7de2b488017de48c907d2bd9", "txs": \[ { "bill": true, "cmpl": true, "tm": 20.13, "calc": 1, "cat": "UTILITY USER TAXES", "cid": 8, "name": "Utility Users Tax", "exm": 0, "lns": 0, "min": 0, "pcd": 383700, "rate": 0.04, "sur": false, "tax": -0.8052, "lvl": 3, "tid": 16 }, { "bill": true, "cmpl": true, "tm": 20.13, "calc": 1, "cat": "EXCISE TAXES", "cid": 4, "name": "Federal Excise Tax", "exm": 0, "lns": 0, "min": 0, "pcd": 0, "rate": 0.03, "sur": false, "tax": -0.6039, "lvl": 0, "tid": 6 } \] } \], "incrf": { "acct": "5408166", "ccycd": "USD", "ccydesc": "US Dollar" } } \] }

The following screenshot illustrates how to specify the values for Field Name and Field Path in the Zuora UI:

![AvalaraTelco](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6ff8724f-9b30-4795-bb18-48bf7ff6a96f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZmZjg3MjRmLTliMzAtNDc5NS1iYjE4LTQ4YmY3ZmY2YTk2ZiIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiODE2ZWViNmRiZTljNGIwNWE0NmI4MDViZWJmOTg4YjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YzTJnlTEESrzOTI32std5_tOr17OENnCU_y4kzkW32w)

-   Set Field Name to `name` , and set Field Path to `cat`

-   Set Field Name to `pcd` `__c` (custom field), and set Field Path to `pcd`


## Avalara AvaTax for Salesappand Direct Avalara Integration

Note: These mappings apply equally to both the Avalara AvaTax for Sales app and the Direct Avalara Integration. Ensure your field paths correspond to the structure returned by your selected tax engine.

The following table lists the fields that can be mapped and specified in the Field Name . These mappings apply to both the Avalara AvaTax for Sales app and the Direct Avalara Integration in Zuora:

|  | Description |
| --- | --- |
| Field name | Field on the Zuora TaxationItem object where the value will be stored. The following standard fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c).For more information about managing custom fields via Zuora UI, see Manage custom fields . |
| Field path | The path to extract the value from the tax engine’s response.Only the fields in the details block can be mapped as field path. For example, to map the signatureCode field from AvaTax, use a field path like lines[0].details[0].signatureCode . |

A typical details block from the AvaTax vendor response is as follows:

"lines": \[ { "id": 85013306890397, "transactionId": 85013306890394, "lineNumber": "8ad09c4b8282409a01828601458a5bd8", "boundaryOverrideId": 0, "customerUsageType": "", "entityUseCode": "", "description": "8ad09c4b8282409a01828601456a5bd7", "destinationAddressId": 85013306890395, "originAddressId": 85013306890395, "discountAmount": 0, "discountTypeId": 0, "exemptAmount": 0, "exemptCertId": 0, "exemptNo": "", "isItemTaxable": true, "isSSTP": false, "itemCode": "", "lineAmount": 120, "quantity": 1, "ref1": "", "ref2": "", "reportingDate": "2022-08-09", "revAccount": "", "sourcing": "Destination", "tax": 13.8, "taxableAmount": 120, "taxCalculated": 13.8, "taxCode": "P0000000", "taxCodeId": 8087, "taxDate": "2022-08-09", "taxEngine": "", "taxOverrideType": "None", "businessIdentificationNo": "", "taxOverrideAmount": 0, "taxOverrideReason": "", "taxIncluded": false, "details": \[ { "id": 85013306890400, "transactionLineId": 85013306890397, "transactionId": 85013306890394, "addressId": 85013306890395, "country": "US", "region": "PR", "countyFIPS": "", "stateFIPS": "", "exemptAmount": 0, "exemptReasonId": 4, "inState": true, "jurisCode": "72", "jurisName": "PUERTO RICO", "jurisdictionId": 10190241, "signatureCode": "CXFO", "stateAssignedNo": "", "jurisType": "STA", "jurisdictionType": "State", "nonTaxableAmount": 0, "nonTaxableRuleId": 0, "nonTaxableType": "RateRule", "rate": 0.105, "rateRuleId": 1359492, "rateSourceId": 3, "serCode": "", "sourcing": "Destination", "tax": 12.6, "taxableAmount": 120, "taxType": "Sales", "taxSubTypeId": "S", "taxTypeGroupId": "SalesAndUse", "taxName": "PR STATE TAX", "taxAuthorityTypeId": 45, "taxRegionId": 2131047, "taxCalculated": 12.6, "taxOverride": 0, "rateType": "General", "rateTypeCode": "G", "taxableUnits": 120, "nonTaxableUnits": 0, "exemptUnits": 0, "unitOfBasis": "PerCurrencyUnit", "isNonPassThru": false, "isFee": false, "reportingTaxableUnits": 120, "reportingNonTaxableUnits": 0, "reportingExemptUnits": 0, "reportingTax": 12.6, "reportingTaxCalculated": 12.6, "liabilityType": "Seller" } \],

The following screenshot illustrates how to specify the values for Field Name and Field Path in the Zuora UI:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/070a4be8-2615-4151-bde6-1fb5fbf35b14?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA3MGE0YmU4LTI2MTUtNDE1MS1iZGU2LTFmYjVmYmYzNWIxNCIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiNDk0MTQwODdlNTIyNDIzNjkyOWQ1OWU2M2E0NjdmMjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Vp9MNbutZPcMeZS1MOzG-Ju0ZwCT5KT9tF4Bo8vak9E)

-   Set Field Name to `name` , and set Field Path to `transactionLineId`

-   Set Field Name to `signature_Code__c` (custom field), and set Field Path to `signatureCode`


## CCH SureTax Connector app

The following table lists the fields that can be mapped and specified in Field Name. Information about how to figure out the path to fetch a value from CCH SureTax Connector app (SureTax) is also provided.

|  | Description |
| --- | --- |
| Field name | Field on the Zuora TaxationItem object to store a value.The following fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c).For more information about managing custom fields via Zuora UI, see Manage custom fields . |
| Field path | Path to fetch a value from SureTax’s response.Only the fields in the TaxList block can be mapped as field path. |

A typical TaxList block from the SureTax vendor response is as follows:

<TaxList> <Tax> <TaxTypeCode>051</TaxTypeCode> <TaxTypeDesc>VAT</TaxTypeDesc> <TaxAmount>20.84</TaxAmount> <Revenue>83.36</Revenue> <CountyName>UNKNOWN</CountyName><CityName /> <TaxRate>0.250000000000</TaxRate> <PercentTaxable>1.000000</PercentTaxable> <FeeRate>0</FeeRate> <RevenueBase>83.36</RevenueBase> <TaxOnTax>0</TaxOnTax> <TaxAuthorityID>99999056</TaxAuthorityID> <TaxAuthorityName>DENMARK</TaxAuthorityName><Juriscode /> </Tax> </TaxList>

The following screenshot illustrates how to specify the values for Field Name and Field Path in the Zuora UI:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7a09aa36-5fef-4b95-8c9b-eee09af1f91d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdhMDlhYTM2LTVmZWYtNGI5NS04YzliLWVlZTA5YWYxZjkxZCIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiOTA2OTNjOWViZjRlNGFhZTkwMzgwODc2OWZmMDllYmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rpyfjhLIYu7MinFrTOwHoLEhpzVo3y_o2sEEZES-0ZM)

-   Set Field Name to `name` , and set Field Path to `TaxAuthorityName`

-   Set Field Name to `revenue_base__c` (custom field), and set Field Path to `RevenueBase`


## Avalara for Brazil App

The following table lists the fields that can be mapped and specified in the Field Name:

| Name | Description |
| --- | --- |
| Field Name | Field on the Zuora TaxationItem object where the value will be stored. The following standard fields are supported:namelocationCodejurisdictiontaxCodeDescriptiontaxRateDescriptionAfter activating invoice tax fields through the Zuora UI, you can override the custom fields that are sent in the billing request, in addition to the listed fields. These custom fields will be reflected in the taxation response, ending with suffix __c (double underscore c). |
| Field Path | The path to extract the value from the tax engine's response.Only the fields in the taxDetails block including its direct fields and nested fields can be mapped as field paths. For example, to map the citationId field from Avalara Brazil, use a field path like citationId, map to field name citationId__c.Use a comma (,) to separate nested levels.Examples:Field Name: citationId__cField Path: citationIdField Name: financePriceImpact__cField Path: taxImpact,impactOnFinalPriceField Name: brazilTaxMode__cField Path: taxImpact,impactOnNetAmount |

A typical response from Avalara is as follows:"lines": \[ { "lineCode": 1, "operationType": "standardSales", "itemCode": "8adca22d98c0054c0198c5a4aa752fce", "useType": "use or consumption", ... "taxDetails": \[ { "jurisdictionName": "Brazil", "jurisdictionType": "Country", "taxImpact": { "impactOnFinalPrice": "Informative", "impactOnNetAmount": "Informative", "accounting": "none" }, "taxType": "aproxtribFed", "citation": "Trib aprox R$ 13,45 Federal e R$ 18,00 Estadual Fonte: IBPT", "subtotalTaxable": 100, "rate": 13.45, "tax": 13.45, "exemptionCode": "", "isCustomCitation": false }, ... { "jurisdictionName": "Brazil", "jurisdictionType": "Country", "taxImpact": { "impactOnFinalPrice": "Included", "impactOnNetAmount": "Included", "accounting": "none" }, "taxType": "cofins", "citation": "PIS/COFINS com alíquota zero conforme: \\"Lei nº 10.865/2004, Artigo 28, Inciso VI, incluído pela Lei nº 11.033/2004\\"", "citationId": "1f0f4a6e-4e31-41b5-9d6a-14f36bf00b34", "subtotalTaxable": 100, "rate": 0, "tax": 0, "exemptionCode": "", "cst": "06", "calcMode": "rate", "isCustomCitation": false }, ... \], "cfop": 5101, "lineAdditionalInfo": "", "lineNetFigure": 82 } \],
