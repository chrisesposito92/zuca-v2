---
title: "Account Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/account-field-mappings-zuora-to-netsuite-sync/account-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:54.547Z"
---

# Account Field Mappings

The document provides a comprehensive mapping of account fields between NetSuite and Zuora, detailing default field names, potential modifications, and specific mapping behaviors based on Z-Suite preferences.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| Account.AccountNumber Account.Name | Customer ID (entityId) | If Z-Suite preference Customer Account Number Mapping is Use Number From Source Record , the Zuora Account Number will be used.If Z-Suite preference Customer Account Number Mapping is Use Name from Source Record , the Zuora Account Name will be used.If Z-Suite preference Customer Account Number Mapping is Let Destination Auto-Number , no value will be mapped and NetSuite will assign the next available Customer ID (assuming Auto-Generated Numbers are enabled within NetSuite).Whether this field is updated for subsequent updates is determined by the Z-Suite preferences Customer Account Sync Behavior and Customer Account Number Update Behavior .Note : Avoid using double quotation mark ( " ) and comma ( , ) in Account.Name because it will cause data sync issues. |
| Account.AccountNumber | Zuora Account Number |  |
| Account.AutoPay | AutoPay custentityzuoraautopay | boolean |
| Account.Batch | Batch custentityzuorabatch |  |
| Account.BillCycleDay | BillCycleDay custentityzuorabillcycleday | Cross-reference to translate Zuora API value back to Zuora label |
| Account.CreatedDate | Zuora Created Date | Text field |
| Account.CrmId | Zuora CRM ID |  |
| Account.Currency | Currency | Lookup to match Zuora Alphabetic Code to the NetSuite Symbol |
| Account.CustomerServiceRepName | Zuora Customer Service Rep Name |  |
| Account.Id | Zuora ID |  |
| Account.Mrr | AccountMRR |  |
| Account.Name | companyname |  |
| Account.Notes | comments |  |
| Account.PaymentTerm | terms | Standard field in NetSuite. |
| Account.PaymentTerm | Zuora Payment Term |  |
| Account.PurchaseOrderNumber | Zuora Purchase Order Number |  |
| Account.SalesRepName | Zuora Sales Rep |  |
| Account.Status | isInactive | If the Status is "Canceled", set this to "true." |
| Account.TaxExemptCertificateID | Zuora Tax Exempt Certificate ID |  |
| Account.TaxExemptCertificateID | Tax Reg. Number (vatRegNumber) | Only mapped if Z-Suite Advanced Setting Use Standard Invoice Sync is No . Otherwise no value is mapped. |
| Account.VATID | Tax Reg. Number (vatRegNumber) | Ensure the accuracy of the VATID field in Zuora prior to syncing. Note that if the field is updated to null from a non-null value in Zuora, it cannot be updated due to limitations in the NetSuite API. This feature is available only for invoice settlement customers. To enable this feature in your tenant, submit a support ticket . |
| Account.TaxExemptStatus | Zuora Tax Exempt Status |  |
| Account.TaxExemptStatus | Taxable (isTaxable) | Only mapped if Z-Suite Advanced Setting Use Standard Invoice Sync is No . Otherwise no value is explicitly mapped. |
| Account.UpdatedDate | Zuora Updated Date |  |
| Account.IntegrationId__NS | internalId | Update Zuora with the NetSuite Internal ID after create/link only. |
| Account.IntegrationStatus__NS | n/a | Update Zuora with "Sync Complete" after create/link only. See Integration Status and Error Recovery for more information. |
| Account.SyncDate__NS | n/a | Update Zuora with current timestamp after create/link only. |
| Account.CustomerType__NS | Type (isPerson) |  |
| BillToContact.Address1 | addressbookList.addr1 | Where defaultBilling=true |
| BillToContact.Address2 | addressbookList.addr2 | Where defaultBilling=true |
| BillToContact.City | addressbookList.city | Where defaultBilling=true |
| BillToContact.Country | addressbookList.country | Where defaultBilling=truestatic xref |
| BillToContact.Fax | fax |  |
| BillToContact.FirstName BillToContact.LastName | addressbookList.addressee | If defaultBilling=true , concatenate the values. |
| BillToContact.FirstName BillToContact.LastName | firstName lastName | Only mapped if CustomerType__NS is "individual." |
| BillToContact.Id | Zuora Bill To ID |  |
| BillToContact.PostalCode | addressbookList.zip | Where defaultBilling=true |
| BillToContact.State | addressbookList.state | Where defaultBilling=trueThe State field cannot be populated in NetSuite from Zuora's Bill To Contact and Sold To Contact fields, except for the United States. |
| BillToContact.TaxRegion | Zuora Bill To Tax Region |  |
| BillToContact.WorkEmail | Zuora Bill To Work Email | There is no field for email on the addressbook list, so this is added to the custom header. |
| BillToContact.WorkEmail | Customer.email | Standard field |
| BillToContact.WorkPhone | phone |  |
| BillToContact.WorkPhone | addressbookList.phone | Where defaultBilling=true |
| DefaultPaymentMethod.Type | Zuora Default Payment Method |  |
| SoldToContact.Address1 | addressbookList.addr1 | Where defaultShipping=true |
| SoldToContact.Address2 | addressbookList.addr2 | Where defaultShipping=true |
| SoldToContact.City | addressbookList.city | Where defaultShipping=true |
| SoldToContact.Country | addressbookList.country | Where defaultShipping=true |
| SoldToContact.FirstName SoldToContact.LastName | addressbookList.addressee | Where defaultShipping=trueConcatenate the values |
| SoldToContact.Id | Zuora Sold To ID |  |
| SoldToContact.PostalCode | addressbookList.zip | Where defaultShipping=true |
| SoldToContact.State | addressbookList.state | Where defaultShipping=true |
| SoldToContact.WorkEmail | Zuora Sold To Work Email | There is no field for email on the addressbook list, so this is added to the custom header. |
| SoldToContact.WorkPhone | addressbookList.phone | Where defaultShipping=true |
| n/a | Zuora Sync Date | Current timestamp |
| n/a | entityStatus | Defaulted by NetSuite. For example, "Customer Closed Won". |
| n/a | addressbookList.replaceAll | If syncing an existing record and Z-Suite preference Customer Sync Behavior is Sync New and Modified Record , map "true". All existing NetSuite address entries will be removed and replaced with the address(es) from the Zuora Account Contact(s). |
| Account.Subsidiary__NS | Subsidiary | Lookup by Full Name to retrieve internalId. The Account.Subsidiary__NS must be the fully-qualified hierarchy name. For example, Parent Record : Child Record . The colon and the spaces surrounding the colon are required.This is available only in NetSuite OneWorld edition |
| n/a | addressbookList.label | "Zuora Bill To Address" or "Zuora Sold To Address" |
| n/a | Tax Item | Mapped from Z-Suite preference NetSuite Default Tax Code if populated. |
