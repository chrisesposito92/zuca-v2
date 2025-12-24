---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/contactsnapshot/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:39.379Z"
---

# Field descriptions

This reference lists the description of the fields of the ContactSnapshot object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Require to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountId | optional | Query Filter | The Zuora account ID associated with this contact. This field is not required when you use the subscribe() call. This field is required for all other calls.Type: zns:IDCharacter limit: 32Version notes: WSDL 85.0+Values: a valid account ID |
| Address1 | optional | Query Filter | The first line of the contact's address, which is often a street address or business name.Type : stringCharacter limit : 255Version notes : WSDL 85.0+Values : a string of 255 characters or fewer |
| Address2 | optional | Query Filter | The second line of the contact's address.Type : stringCharacter limit : 255Version notes : WSDL 85.0+Values : a string of 255 characters or fewer |
| City | optional | Query Filter | The city of the contact's address.Type : stringCharacter limit : 40Version notes : WSDL 85.0+Values: a string of 40 characters or fewer |
| ContactId | optional | Query Filter | The ID of the contact that has the snapshot.Type: zns:IDCharacter limit: 32Version notes: WSDL 85.0+Values: a valid contact ID |
| Country | optional | Query Filter | The country of the contact's address. If using Zuora Tax, be aware that it requires a country in the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.Type : stringCharacter limit : 32: WSDL 85.0+Values : a valid country name or abbreviation |
| County | optional | Query Filter | The country. May optionally be used by Z-Tax to calculate county tax.Type : stringCharacter limit : 32Version notes : WSDL 85.0+Values : a string of 32 characters or fewer |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the contact.Type : zns:IDCharacter limit : 32Version notes : WSDL 85.0+Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the contact was created.Type : dateTimeCharacter limit : 29Version notes : WSDL 85.0+Values : automatically generated |
| Description | optional | Query Filter | A description for the contact.Type : stringCharacter limit : 100Version notes : WSDL 85.0+Values : a string of 100 characters or fewer |
| Fax | optional | Query Filter | The contact's fax number.Type : stringCharacter limit : 40Version notes : WSDL 85.0+Values : a string of 40 characters or fewer |
| FirstName | optional | Query Filter | The contact's first name.Type : stringCharacter limit : 100Version notes : WSDL 85.0+Values : a string of the contact's first name |
| HomePhone | optional | Query Filter | The contact's home phone number.Type : stringCharacter limit : 40Version notes : WSDL 85.0+Values : a string of 40 characters or fewer |
| LastName | optional | Query Filter | The contact's last name.Type : stringCharacter limit : 100Version notes : WSDL 85.0+Values : a string of 100 characters or fewer |
| MobilePhone | optional | Query Filter | The contact's mobile phone number.Type : stringCharacter limit : 40Version notes : WSDL 85.0+Values : a string of 40 characters or fewer |
| NickName | optional | Query Filter | A nickname for the contact.Type : stringCharacter limit : 100Version notes : WSDL 85.0+Values : a string of 100 characters or fewer |
| OtherPhone | optional | Query Filter | An additional phone number for the contact.Type : stringCharacter limit : 40Version notes : WSDL 85.0+Values : a string of 40 characters or fewer |
| OtherPhoneType | optional | Query Filter | The type of the OtherPhone .Type : stringCharacter limit : 20Version notes : WSDL 85.0+Values : Work , Mobile , Home , Other |
| PersonalEmail | optional | Query Filter | The contact's personal email address.Type : stringCharacter limit : 80Version notes : WSDL 85.0+Values : a string of 80 characters or fewer |
| PostalCode | optional | Query Filter | The zip code for the contact's address.Type: stringCharacter limit: 20Version notes: WSDL 85.0+Values: a string of 20 characters or fewer |
| State | optional | Query Filter | The state or province of the contact's address. If using Z-Tax , be aware that if the country is USA or Canada, Z-Tax requires a state or province in the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.Type: stringCharacter limit: 40Version notes: WSDL 85.0+Values: a valid state name or abbreviation |
| TaxRegion | optional | Query Filter | If using Z-Tax , a region string as optionally defined in your tax rules. Not required.Type : stringCharacter limit : 32Version notes : WSDL 85.0+Values : a string defined in your Z-Tax tax rules |
| UpdatedById | optional | Query Filter | The ID of the user who lasted updated the contact.Type : zns:IDCharacter limit : 32Version notes : WSDL 85.0+Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the contact was last updated.Type : dateTimeCharacter limit : 29Version notes :WSDL 85.0+Values : automatically generated |
| WorkEmail | optional | Query Filter | The contact's business email address.Type : stringCharacter limit : 80Version notes : WSDL 85.0+Values : a string of 80 characters or fewer |
| WorkPhone | optional | Query Filter | The contact's business phone number.Type : stringCharacter limit : 40Version notes : WSDL 85.0+Values : a string of 40 characters or fewer |
