---
title: "Update accounts and contact"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-accounts-and-contact"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:43.621Z"
---

# Update accounts and contact

This reference article lists all the fields associated with the Accounts and Contacts module.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Id* | account ID | string |
| Account Name | A string of up to 65,535 characters. | string |
| Account Notes | Account name, up to 255 characters. | string |
| Additional Email Addresses | A list of additional email addresses to receive email notifications. Use commas to separate email addresses. | Array of strings |
| Auto Pay | Whether future payments are to be automatically billed when they are due. | boolean |
| Batch | The alias name given to a batch. A string of 50 characters or less.:Note: By default, you have 50 configurable account batches. | string |
| Bill Cycle Day | Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month the customer is billed. Values: Any activated system-defined bill cycle day （1-31） | integer <= 2 characters |
| CRM Account Id | CRM account ID for the account, up to 100 characters. | string |
| Class NS | Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Communication Id | The ID of the communication profile that this account is linked to. | string |
| Credit Memo Template Id | This field is only available if you have Invoice Settlement (Zuora_Billing/Bill_your_customers/Manage_invoices/manage_invoices.dita) enabled. | string |
| Customer Service Representative Name | You can provide either or both of the communicationProfileId and profileNumber fields. | string <= 50 characters |
| Customer Type NS | Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Company" "Individual" | string |
| Debit Memo Template Id | This field is only available if you have Invoice Settlement enabled. | string |
| Default Payment Method Id | ID of the default payment method for the account. | string <= 64 characters |
| Department NS | Value of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the account's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Invoice Delivery Prefs Email | Whether the customer wants to receive invoices through email. The default value is false | boolean |
| Invoice Delivery Prefs Print | Whether the customer wants to receive printed invoices, such as through postal mail. The default value is false. | boolean |
| Invoice Template Id | Invoice template ID, configured in Billing Settings in the Zuora UI. | string |
| Location NS | Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Partner Account | Default: false | boolean |
| ParentID | The parent customer account associated with this account. To access this field, you must have the CustomerHierarchy enabled | string <= 32 characters |
| Payment Gateway Name | The name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway. | string |
| Payment Term | Payment terms for this account. Possible values are Due Upon Receipt, Net 30, Net 60, Net 90 | string |
| Profile Number | The number of the communication profile that this account is linked to. You can provide either or both of the communicationProfileId and profileNumber fields. | string |
| Purchase Order Number; | The purchase order number provided by your customer for services, products, or both purchased. | string |
| Sales Rep Name | The name of the sales representative associated with this account, if applicable. Maximum of 50 characters. | string |
| Sequence Set Id | The ID of the billing document sequence set to assign to the customer account. | string or null |
| Subsidiary NS | Value of the Subsidiary field for the corresponding customer account in NetSuite. The Subsidiary field is required if you use NetSuite OneWorld. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Sync Date NS | Date when the account was sychronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Sync To Net Suite NS | Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Yes" "No" | string |
| Tagging |  | string |
| BillToContact Address1 | First address line, 255 characters or less. | string |
| BillToContact Address2 | Second address line, 255 characters or less. | string |
| BillToContact City | City, 40 characters or less. | string |
| BillToContact Country | Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided. | string |
| BillToContact County | County; 32 characters or less. May optionally be used by Zuora Tax to calculate county tax. | string |
| BillToContact Fax | Fax phone number, 40 characters or less. | string |
| BillToContact FirstName | First name, 100 characters or less. | string |
| BillToContact HomePhone | Home phone number, 40 characters or less. | string |
| BillToContact LastName | Last name, 100 characters or less. | string |
| BillToContact MobilePhone | Mobile phone number, 40 characters or less. | string |
| BillToContact NickName | Nickname for this contact | string |
| BillToContact OtherPhone | Other phone number, 40 characters or less. | string |
| BillToContact OtherPhoneType | Possible values are: Work, Mobile, Home, Other. | string |
| BillToContact PersonalEmail | Personal email address, 80 characters or less. | string |
| BillToContact PostalCode | Zip code, 20 characters or less. | string |
| BillToContact State | State; must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region. | string |
| BillToContact TaxRegion | If using Zuora Tax, a region string as optionally defined in your tax rules. Not required. | string |
| BillToContact WorkEmail | Work email address, 80 characters or less. | string |
| BillToContact WorkPhone | Work phone number, 40 characters or less. | string |
| salesRep | The name of the sales representative associated with this account. Maximum of 50 characters. | string |
| SoldToContactId | The sold-to contact ID for the current account. | string |
| SoldToContact Address1 | First address line, 255 characters or less. | string |
| SoldToContact Address2 | Second address line, 255 characters or less. | string |
| SoldToContact City | City, 40 characters or less. | string |
| SoldToContact Country | Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided. | string |
| SoldToContact County | County; 32 characters or less. May optionally be used by Zuora Tax to calculate county tax. | string |
| SoldToContact Fax | Fax phone number, 40 characters or less. | string |
| SoldToContact FirstName | First name, 100 characters or less. | string |
| SoldToContact HomePhone | Home phone number, 40 characters or less. | string |
| SoldToContact LastName | Last name, 100 characters or less. | string |
| SoldToContact MobilePhone | Mobile phone number, 40 characters or less. | string |
| SoldToContact NickName | Nickname for this contact | string |
| SoldToContact OtherPhone | Other phone number, 40 characters or less. | string |
| SoldToContact OtherPhoneType | Possible values are: Work, Mobile, Home, Other. | string |
| SoldToContact PersonalEmail | Personal email address, 80 characters or less. | string |
| SoldToContact PostalCode | Zip code, 20 characters or less. | string |
| SoldToContact State | State; must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region. | string |
| SoldToContact TaxRegion | If using Zuora Tax, you can optionally define a region string in your tax rules, but it's not required. | string |
| SoldToContact WorkEmail | Work email address, 80 characters or less. | string |
| SoldToContact WorkPhone | Work phone number, 40 characters or less. | string |
| ShipToContact FirstName* | First name, 100 characters or less. | string |
| ShipToContact LastName* | Last name, 100 characters or less. | string |
| ShipToContact Address1 | First address line, 255 characters or less. | string |
| ShipToContact Address2 | Second address line, 255 characters or less. | string |
| shipToContactId | The ship-to contact ID for the current account. | string |
| ShipToContact City | City, 40 characters or less. | string |
| ShipToContact Country | Country; must be a valid country name or abbreviation. | string |
| ShipToContact County | County; 32 characters or less. Can be optionally used by Zuora Tax to calculate county tax. | string |
| ShipToContact Fax | Fax phone number, 40 characters or less. | string |
| ShipToContact HomePhone | Home phone number, 40 characters or less. | string |
| ShipToContact MobilePhone | Mobile phone number, 40 characters or less. | string |
| ShipToContact NickName | Nickname for this contact. | string |
| ShipToContact OtherPhone | Other phone number, 40 characters or less. | string |
| ShipToContact OtherPhoneType | Possible values are: Work, Mobile, Home, Other. | string |
| ShipToContact PersonalEmail | Personal email address. | string <email> <= 80 characters |
| ShipToContact PostalCode | Zip code, 20 characters or less. | string |
| ShipToContact State | State; must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region. | string |
| ShipToContact TaxRegion | If using Zuora Tax, you can optionally define a region string in your tax rules, but it's not required. | string |
| ShipToContact WorkEmail | Work email address, 80 characters or less. | string |
| ShipToContact WorkPhone | Work phone number, 40 characters or less. | string |
| summaryStatementTemplateId | The summary statement template or ID | string |
| Tax Exempt Certificate Id | ID of the customer tax exemption certificate. Requires Zuora Tax. | string |
| Tax Exempt Certificate Type | Type of tax exemption certificate that the customer holds. Requires Zuora Tax. | string |
| Tax Exempt Description | Description of the tax exemption certificate that the customer holds. Requires Zuora Tax. | string |
| Tax Exempt Effective Date | Date when the customer tax exemption starts. Requires Zuora Tax. Format: yyyy-mm-dd. Defaults to the current date. | string <date> |
| Tax Exempt Entity UseCode | A unique entity use code to apply exemptions in Avalara AvaTax. | tring <= 64 characters |
| Tax Exempt Expiration Date | Date when the customer tax exemption expires. Requires Zuora Tax. Format: yyyy-mm-dd. Defaults to the current date. | string <date> |
| Tax Exempt Issuing Jurisdiction | Jurisdiction in which the customer tax exemption certificate was issued. | string |
| Tax Exempt Status | Status of the account tax exemption. Requires Zuora Tax. | string |
| Tax Exempt VATId | EU Value Added Tax ID. | string |
