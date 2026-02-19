---
title: "Field descriptions of CommunicationProfile"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/communication-profile/field-descriptions-of-communicationprofile"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:44.753Z"
---

# Field descriptions of CommunicationProfile

This reference lists the description of the fields of the CommunicationProfile object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the communication profile in the web-based UI.Type : zns:IDCharacter limi t: 32Version notes : WSDL 30.0Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the communication profile was created in the web-based UI.Type : dateTimeCharacter limit :Version notes : WSDL 30.0Values : automatically generated |
| Description | optional | Query Filter | A description of the communication profile created in the web-based UI.Type : stringCharacter limit :Version notes : WSDL 30.0Values : |
| Id | optional | Query Filter | The ID of this object. Upon creation of this object, this field becomes CommunicationProfileId.Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| ProfileName | required | Query Filter | The name of the communication profile created in the web-based UI.Type : stringCharacter limit :Version notes : WSDL 30.0Values : |
| UpdatedById | optional | Query Filter | The ID of the Zuora user who last updated the communication profile in the web-based UI.Type : zns:IDCharacter limit : 32Version notes : WSDL 30.0Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the communication profile was last updated in the web-based UI.Type : dateTimeCharacter limit :Version notes : WSDL 30.0Values : automatically generated |
