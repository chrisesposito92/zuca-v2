---
title: "Contact update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/contact-update"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:16.662Z"
---

# Contact update

This reference article lists the various fields associated with the Contact data dictionary.

This article details the various fields associated with the Contact data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Id* | The ID of the contact that you want to update. | string |
| Address1 | The first line of the contact's address, which is often a street address or business name. | string <= 255 characters |
| Address2 | The second line of the contact's address. | string <= 255 characters |
| City | The city of the contact's address. | string <= 40 characters |
| ContactDescription | A description for the contact. | string <= 100 characters |
| Country | The country of the contact's address. | string <= 64 characters |
| County | The county. May optionally be used by Zuora Tax to calculate county tax. | string <= 32 characters |
| Fax | The contact's fax number. | string <= 40 characters |
| FirstName | The contact's first name. | string <= 100 characters |
| HomePhone | The contact's home phone number. | string <= 40 characters |
| LastName | The contact's last name. | string <= 100 characters |
| MobilePhone | The mobile phone number of the contact. | string <= 100 characters |
| NickName | A nickname for the contact. | string <= 100 characters |
| OtherPhone | An additional phone number for the contact. | string <= 40 characters |
| OtherPhoneType | The type of the additional phone number. Enum: "Work" "Mobile" "Home" "Other" | string |
| PersonalEmail | The contact's personal email address. | string <= 74 characters |
| PostalCode | The state or province of the contact's address. | string <= 40 characters |
| State | The state or province of the contact's address. | string <= 40 characters |
| TaxRegion | If using Zuora Tax, a region string as optionally defined in your tax rules. Not required. | string <= 32 characters |
| WorkEmail | The contact's business email address. | string <= 74 characters |
| WorkPhone | The contact's business phone number. | string <= 40 characters |
