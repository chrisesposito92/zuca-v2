---
title: "Contacts"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/contacts"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:43.309Z"
---

# Contacts

This reference document lists all the fields associated with the Contacts data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to create | Description |
| --- | --- | --- | --- | --- |
| Contact | accountId | String | Required to Create | The ID of the account associated with the contact.Note: When creating a contact, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. |
| Contact | accountNumber | String | Optional | The number of the customer account associated with the contact.Note: When creating a contact, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. |
| Contact | address1 | String <= 255 characters | Optional | The first line of the contact's address, which is often a street address or business name. |
| Contact | address2 | String <= 255 characters | Optional | The second line of the contact's address. |
| Contact | city | String <= 40 characters | Optional | The city of the contact's address. |
| Contact | contactDescription | String <= 100 characters | Optional | A description for the contact. |
| Contact | country | String <= 64 characters | Optional | The country of the contact's address. |
| Contact | county | String <= 32 characters | Optional | The county. May optionally be used by Zuora Tax to calculate county tax. |
| Contact | fax | String <= 40 characters | Optional | The contact's fax number. |
| Contact | firstName | String <= 100 characters | Required to Create | The contact's first name. |
| Contact | homePhone | String <= 40 characters | Optional | The contact's home phone number. |
| Contact | lastName | String <= 100 characters | Required to Create | The contact's last name. |
| Contact | mobilePhone | String <= 100 characters | Optional | The mobile phone number of the contact. |
| Contact | nickname | String <= 100 characters | Optional | A nickname for the contact. |
| Contact | otherPhone | String <= 40 characters | Optional | An additional phone number for the contact. |
| Contact | otherPhoneType | String | Optional | The type of the additional phone number. Enum: "Work" "Mobile" "Home" "Other" |
| Contact | personalEmail | String <email> <= 80 characters | Optional | The contact's personal email address. |
| Contact | state | String <= 40 characters | Optional | The state or province of the contact's address. |
| Contact | taxRegion | String <= 32 characters | Optional | If using Zuora Tax, a region String as optionally defined in your tax rules. Not required. |
| Contact | workEmail | String <= 74 characters | Optional | The contact's business email address. |
| Contact | workPhone | String <= 40 characters | Optional | The contact's business phone number. |
| Contact | zipCode | String <= 20 characters | Optional | The zip code for the contact's address. |
