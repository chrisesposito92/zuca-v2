---
title: "Field descriptions of Import"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/import/field-descriptions-of-import"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:03.015Z"
---

# Field descriptions of Import

This reference lists the description of the fields of the Import object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query Filter | The user ID of the person who created the import.Type : zns:IDCharacter limit : 32Version notes : WSDL 37.0+Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the import was created.Type : dateTimeCharacter limit : 29Version notes : WSDL 37.0+Values : automatically generated |
| FileContent | required | Create | A Base 64-encoded file that contains the contents of the import.Type : DataHandlerCharacter limit : n/aVersion notes : WSDL 37.0+Values : Base64-encoded file |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID for this object is Import.Id.Type : zns:IDCharacter limit : 32Version notes : WSDL 37.0+Values : automatically generated |
| ImportedCount | optional | Query Filter | The number of records successfully imported.Type : intCharacter limit :Version notes : WSDL 37.0+Values : automatically generated |
| ImportType | required | Create Query Filter | The type of item imported.Type : string (enum)Character limit :Version notes : WSDL 37.0Values : One of the following values:usagepaymentquotetaxationDetailupdateAccountingCodecreateRevenueScheduleupdateRevenueScheduledeleteRevenueScheduleimportFXRate |
| Md5 | optional | Create Query Filter | A check to validate the import file's integrity.Type : stringCharacter limi t: 32Version notes : WSDL 37.0+System-generated : noValues : a string of 32 characters or fewer |
| Name | required | Create Query Filter | A descriptive name for the import.Type : stringCharacter limi t: 100Version notes : WSDL 37.0+Values : one of the following:a string of 100 characters or fewerif NULL default is: import <ImportType_value> |
| OriginalResourceUrl | optional | Query Filter | The URL for your import file, which contains your records for upload. When you upload the file, Zuora assigns it to this address.Type : stringCharacter limit :Version notes : WSDL 37.0+Values : automatic dynamically-generated URL |
| ResultResourceUrl | optional | Query Filter | The URL for the import result file, which is a zipped CSV file.Type : stringCharacter limit :Version notes : WSDL 37.0+Values : automatic dynamically-generated URL |
| Status | optional | Query Filter | The status of the import process.Type : string (enum)Character limit : 10Version notes : WSDL 37.0+Values : automatically generated using one of the following values:PendingProcessingCompletedFailed |
| StatusReason | optional | Query Filter | The reason for the system-generated status. Use this information if the import fails.Type: stringCharacter limit : 2000Version notes : WSDL 37.0+Values : automatically generated error message |
| TotalCount | optional | Query Filter | The number of records in the import file.Type : intCharacter limit :Version notes : WSDL 37.0+Values : automatically generated |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the import.Type : zns:IDCharacter limit : 32Version notes : WSDL 37.0+Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the import was last updated.Type : dateTimeCharacter limi t: 29Version notes : WSDL 37.0+Values : automatically generated |
