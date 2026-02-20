---
title: "Customer Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/customer-field-mappings-netsuite-to-zuora-sync/customer-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:42.936Z"
---

# Customer Mappings

The task involves mapping customer fields between NetSuite and Zuora, detailing how default and custom field names are aligned and the conditions under which specific mappings occur.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field (Invoice Payment) | Notes |
| --- | --- | --- |
| Internal ID | IntegrationId__NS |  |
| n/a | SyncDate__NS | The current timestamp. |
| Customer ID (entityId) Company Name OR First Name + Last Name | AccountNumber | If Z-Suite preference Customer Account Number Mapping is Use Number from Source Record , the NetSuite Customer ID will be used.If Z-Suite preference Customer Account Number Mapping is Use Name from Source Record , the NetSuite Company Name or First Name + Last Name (depending on Type) will be used.If Z-Suite preference Customer Account Number Mapping is Let Destination Auto-Number , no value will be mapped and Zuora will assign the next available Account Number.Whether this field is updated for subsequent updates is determined by the Z-Suite preferences Customer Account Sync Behavior and Customer Account Number Update Behavior . |
| Customer ID (entityId) | CustomerId__NS |  |
| Child Of (parent.InternalId) | ParentId |  |
| ZuoraBatch | BillCycleDay |  |
| ZuoraBillCycleDay | n/a |  |
| Comments | Notes |  |
| n/a | Status | "Draft" initially. "Active" when completed. |
| ZuoraID | Id | For updates only. |
| ZuoraBillToID | Contact.Id | For updates only. |
| ZuoraSoldToID | Contact.Id | For updates only. |
| Currency | Currency | If not populated, the Z-Suite preference Zuora Default Currency will be used. |
| Type (IsPerson) Company Name First Name Last Name | Name | If Type is Individual , First Name and Last Name will be combined, otherwise Company Name will be used. |
| n/a | AllowInvoiceEdit | "true" |
| ZuoraID | Contact.AccountId |  |
| phone | Contact.WorkPhone |  |
| fax | Contact.Fax |  |
| Addresslist.Addressee | Contact.FirstName Contact.LastName | These value are combined if both are populated. If FirstName is empty, LastName is repeated. If LastName is empty, the integration manager will return a warning.This is mapped if defaultBilling is true . |
| Addresslist.Addr1 | Contact.Address1 | This is mapped if defaultBilling is true . |
| Addresslist.Addr2 | Contact.Address2 | This is mapped if defaultBilling is true . |
| Addresslist.city | Contact.City | This is mapped if defaultBilling is true . |
| Addresslist.state | Contact.State | This is mapped if defaultBilling is true . |
| Addresslist.zip | Contact.Zip | This is mapped if defaultBilling is true . |
| Addresslist.country | Contact.Country | This is mapped if defaultBilling is true . |
| n/a | Contact.Description | "Bill To Contact" |
| Addresslist.Addressee | Contact.FirstName Contact.LastName | These value are combined if both are populated. If FirstName is empty, LastName is repeated.This is mapped if defaultShipping is true . |
| Addresslist.Addr1 | Contact.Address1 | This is mapped if defaultShipping is true . |
| Addresslist.Addr2 | Contact.Address2 | This is mapped if defaultShipping is true . |
| Addresslist.city | Contact.City | This is mapped if defaultShipping is true . |
| Addresslist.state | Contact.State | This is mapped if defaultShipping is true . |
| Addresslist.zip | Contact.Zip | This is mapped if defaultShipping is true . |
| Addresslist.country | Contact.Country | This is mapped if defaultShipping is true . |
| n/a | Contact.Description | "Sold To Contract" |
| ZuoraPaymentTerm | PaymentTerm |  |
| ZuoraAutoPay | AutoPay |  |
| ZuoraCRMID | CRM ID |  |
| ZuoraCustomerServiceRepName | Customer Service Rep Name |  |
| ZuoraPurchaseOrderNumber | Purchase Order Number |  |
| ZuoraSalesRep | Sales Rep |  |
| ZuoraDefaultPaymentMethod | Default Payment Method |  |
| ZuoraBillToWorkEmail | Contact.WorkEmail | This is mapped if defaultBilling is true . |
| ZuoraSoldToWorkEmail | Contact.WorkEmail | This is mapped if defaultShipping is true . |
| ZuoraBillToTaxRegion | Contact.TaxRegion | This is mapped if defaultBilling is true . |
| ZuoraTaxExemptStatus | Tax Exempt Status | Only mapped if Z-Suite Advanced Setting Use Standard Invoice Sync is Yes . Otherwise no value is explicitly mapped. |
| ZuoraTaxExemptCertificateID | Tax Exempt Certificate ID | Only mapped if Z-Suite Advanced Setting Use Standard Invoice Sync is Yes . Otherwise no value is explicitly mapped. |
