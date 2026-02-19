---
title: "Field descriptions of UnitOfMeasure"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/unitofmeasure/field-descriptions-of-unitofmeasure"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:33.680Z"
---

# Field descriptions of UnitOfMeasure

This reference provides the fields and corresponding descriptions of the UnitOfMeasure object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required | Allowed operations | Description |
| --- | --- | --- | --- |
| Active | optional | Create Query Update Delete Filter | Indicates if the UOM is available for new product rate plans. The default value is true .Type : boolean Character limit : 5 Version notes : WSDL 45.0+ Values : true , false |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the UOM.Type : zns:ID Character limit : 32 Version notes : WSDL 45.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the UOM was created.Type : dateTime Character limit : 29 Version notes : WSDL 45.0+ Values : automatically generated |
| DecimalPlaces | required | Create Query Update Delete Filter | The number of digits to the right of the decimal point that you want to measure for the unit. To use whole numbers only, set this value to 0. You can't change this value after this UOM is used in any product, subscription, or usage.Type : long Character limit : 1 Version notes : WSDL 45.0+ Values : an integer between 0 and 9, exclusive |
| DisplayedAs | optional | Create Query Update Delete Filter | The name of the UOM that you want displayed on invoices. The default value is the UomName field value.Type : string Character limit : 50 Version notes : WSDL 45.0+ Values : A string of 50 characters or fewer |
| Id | required | Query Filter | The ID of this object. Upon creation of this object, this field becomes UnitOfMeasureId .Type : zns:ID Character limit : 32 Version notes : WSDL 45.0+ Values : automatically generated |
| RoundingMode | optional | Create Query Update Delete Filter | Specifies whether to round the UOM value up or down when the value exceeds the DecimalPlaces field value. The default value is Up .Type : string (enum) Character limit : 4 Version notes : WSDL 45.0+ Values : Up , Down |
| UomName | required | Create Query Update Delete Filter | The name of the UOM, such as license or GB. This name is displayed in query results and in the web-based UI labels. If you want a different name to be displayed on invoices, then use the DisplayedAs field to provide the invoice label.Type : string Character limit : 50 Version notes : WSDL 45.0+ Values : a string of 50 characters or fewer |
| UpdatedById | optional | Query Filter | The ID of the user who lasted updated the UOM.Type : zns:ID Character limit : 32 Version notes : WSDL 45.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the UOM was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 45.0+ Values : automatically generated |
