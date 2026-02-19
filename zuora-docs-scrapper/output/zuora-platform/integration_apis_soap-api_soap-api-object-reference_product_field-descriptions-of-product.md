---
title: "Field descriptions of Product"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product/field-descriptions-of-product"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:44.403Z"
---

# Field descriptions of Product

This reference provides the description of the fields of the Product object.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AllowFeatureChanges | optional | Create Query Update Delete Filter | Controls whether to allow your users to add or remove features while creating or amending a subscription.Type : boolean Character limit : ​n/a Version notes : WSDL 58.0+ Values : true, false (default) |
| Category | optional | Create Query Update Delete Filter | Category of the product. Used by Zuora Quotes Guided Product Selector.Type : string Character limit : ​100​ Version notes : WSDL16.0+​ Values : One of the following:Base ProductsAdd On ServicesMiscellaneous Products |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the Product object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the Product object was created.Type : dateTime Character limit : n/a Version notes : WSDL 20.0+ Values : automatically generated |
| Description | optional | Create Query Update Delete Filter | A description of the product.Type : string Character limit : 500 Version notes : -- Values : a string of 500 characters or fewer |
| EffectiveEndDate | required | Create Query Update Delete Filter | The date when the product expires and can't be subscribed to anymore.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : -- Values : a valid date and time value |
| EffectiveStartDate | required | Create Query Update Delete Filter | The date when the product becomes available and can be subscribed to.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : -- Values : a valid date and time value |
| Id | required | Query Filter | The ID of this object. Upon creation, the ID of this object is ProductId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| Name | optional | Create Query Update Delete Filter | The name of the product. This information is displayed in the product catalog pages in the web-based UI.Type : string Character limit : 100 Version notes : -- Values : a string of 100 characters or fewer |
| ProductNumber | optional | Create Update Query | The natural key of the product.For existing objects that were created before this field was introduced, this value will be null. Use this field in the CRUD: Update a product operation to specify a value. Zuora also provides a tool to help you automatically backfill this field with tenant ID for your existing product catalog. If you want to use this backfill tool, contact Zuora Global Support .Type: stringCharacter limit : 100Values : one of the following:leave null for automatically generated stringan alphanumeric string of 100 characters or fewerVersion notes : WSDL 133.0+ |
| SKU | required | Create Query Update Delete Filter | The unique SKU for the product.Type : string Character limit : 50 Version notes : -- Values : one of the following:leave null for automatically generatedan alphanumeric string of 50 characters or fewer |
| UpdatedById | optional | Query Filter | The ID of the last user to update the object.Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the object was last updated.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
