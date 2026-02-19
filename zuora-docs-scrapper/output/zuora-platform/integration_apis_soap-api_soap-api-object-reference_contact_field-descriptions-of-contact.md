---
title: "Field descriptions of Contact"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/contact/field-descriptions-of-contact"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:11.893Z"
---

# Field descriptions of Contact

This reference lists the description of the fields of the Contact object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Require to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountId | optional | Create Query Delete Filter | The Zuora account ID associated with this contact. This field is not required when you use the subscribe() call. This field is required for all other calls.Type: zns:IDCharacter limit: 32Version notes: --Values: a valid account ID |
| Address1 | optional | Create Query Update Delete Filter | The first line of the contact's address, which is often a street address or business name.Type : stringCharacter limit : 255Version notes : WSDL 12.0 and older require this field for Bill To contactsValues : a string of 255 characters or fewer |
| Address2 | optional | Create Query Update Delete Filter | The second line of the contact's address.Type : stringCharacter limit : 255Version notes : --Values : a string of 255 characters or fewer |
| City | optional | Create Query Update Delete Filter | The city of the contact's address.Type : stringCharacter limit : 40Version notes : WSDL 12.0 and older require this field for Bill To contactsValues: a string of 40 characters or fewer |
| Country | conditional | Create Query Update Delete Filter | The country of the contact's address. If using Z-Tax , be aware that it requires a country in the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.Type : stringCharacter limit : 32Version notes : WSDL 12.0 and older require this field for bill-to contactsValues : a valid country name or abbreviation |
| County | optional | Create Query Update Delete Filter | The country. May optionally be used by Z-Tax to calculate county tax.Type : stringCharacter limit : 32Version notes : WSDL 12.0 and older require this field for Bill To contactsValues : a string of 32 characters or fewer |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the contact.Type : zns:IDCharacter limit : 32Version notes : WSDL 20.0+Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the contact was created.Type : dateTimeCharacter limit : 29Version notes : WSDL 20.0+Values : automatically generated |
| Description | optional | Create Query Update Delete Filter | A description for the contact.Type : stringCharacter limit : 100Version notes : --Values : a string of 100 characters or fewer |
| Fax | optional | Create Query Update Delete Filter | The contact's fax number.Type : stringCharacter limit : 40Version notes : --Values : a string of 40 characters or fewer |
| FirstName | required | Create Query Update Delete Filter | The contact's first name.Type : stringCharacter limit : 100Version notes : --Values : a string of the contact's first name |
| HomePhone | optional | Create Query Update Delete Filter | The contact's home phone number.Type : stringCharacter limit : 40Version notes : --Values : a string of 40 characters or fewer |
| Id | required | Query Filter | The ID of this object. Upon creation of this object, this field becomes ContactId .Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| LastName | required | Create Query Update Delete Filter | The contact's last name.Type : stringCharacter limit : 100Version notes : --Values : a string of 100 characters or fewer |
| MobilePhone | optional | Create Query Update Delete Filter | The contact's mobile phone number.Type : stringCharacter limit : 40Version notes : --Values : a string of 40 characters or fewer |
| NickName | optional | Create Query Update Delete Filter | A nickname for the contact.Type : stringCharacter limit : 100Version notes : --Values : a string of 100 characters or fewer |
| OtherPhone | optional | Create Query Update Delete Filter | An additional phone number for the contact.Type : stringCharacter limit : 40Version notes : --Values : a string of 40 characters or fewer |
| OtherPhoneType | optional | Create Query Update Delete Filter | The type of the OtherPhone .Type : stringCharacter limit : 20Version notes : --Values : Work , Mobile , Home , Other |
| PersonalEmail | optional | Create Query Update Delete Filter | The contact's personal email address.Type : stringCharacter limit : 80Version notes : --Values : a string of 80 characters or fewer |
| PostalCode | optional | Create Query Update Delete Filter | The zip code for the contact's address.Type: stringCharacter limit: 20Version notes: WSDL 12.0 and older require this field for Bill To contactsValues: a string of 20 characters or fewer |
| State | optional | Create Query Update Delete Filter | The state or province of the contact's address. If using Z-Tax , be aware that if the country is USA or Canada, Z-Tax requires a state or province in the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.Type: stringCharacter limit: 40Version notes: WSDL 12.0 and older require this field for Bill To contactsValues: a valid state name or abbreviation |
| TaxRegion | optional | Create Query Update Delete Filter | If using Z-Tax , a region string as optionally defined in your tax rules. Not required.Type : stringCharacter limit : 32Version notes : Z-TaxValues : a string defined in your Z-Tax tax rules |
| UpdatedById | optional | Query Filter | The ID of the user who lasted updated the contact.Type : zns:IDCharacter limit : 32Version notes : WSDL 20.0+Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the contact was last updated.Type : dateTimeCharacter limit : 29Version notes : WSDL 20.0+Values : automatically generated |
| WorkEmail | optional | Create Query Update Delete Filter | The contact's business email address.Type : stringCharacter limit : 80Version notes : WSDL 12.0 and older require this field for Bill To contactsValues : a string of 80 characters or fewer |
| WorkPhone | optional | Create Query Update Delete Filter | The contact's business phone number.Type : stringCharacter limit : 40Version notes : --Values : a string of 40 characters or fewer |
