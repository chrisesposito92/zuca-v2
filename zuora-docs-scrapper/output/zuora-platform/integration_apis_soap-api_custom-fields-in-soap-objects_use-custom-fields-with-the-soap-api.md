---
title: "Use custom fields with the SOAP API"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/custom-fields-in-soap-objects/use-custom-fields-with-the-soap-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:47.935Z"
---

# Use custom fields with the SOAP API

This reference provides guidelines on how to use custom fields with the SOAP API.

After creating the custom fields with Zuora Billing, they are immediately accessible via the API. All fields can be used in the [create()](/zuora-platform/integration/apis/soap-api/soap-api-calls/create), [query()](/zuora-platform/integration/apis/soap-api/soap-api-calls/query), [update()](/zuora-platform/integration/apis/soap-api/soap-api-calls/update), and [delete()](/zuora-platform/integration/apis/soap-api/soap-api-calls/delete) calls. Account and Subscription custom fields can also be used in the [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call.

When downloading the [Zuora WSDL](/zuora-platform/integration/apis/soap-api/zuora-wsdl) from Zuora Billing all your custom fields are included.

When adding the custom fields to the WSDL, they must conform to the following rules:

-   Custom field names must append `__c` (double underscore and lowercase c) to the end of all custom fields' names (not display names)

-   The custom field name cannot contain spaces

-   The custom field must be of type `string` for the Picklist and Text fields

-   The custom field must be of type `date` for the Date fields

-   You must add custom fields to the existing fields in alphabetical order


For example, if you create two custom fields for the account object ( `MyCustomAccountField` and `AnotherCustomAccountField` ), the field names in the WSDL will be:

-   `AnotherCustomAccountField__c`

-   `MyCustomAccountField__c`


Your WSDL for the Account object will look like the following:

<complexType name="Account"\> <complexContent> <extension base="ons:zObject"\> <sequence> <element minOccurs="0" name="AccountNumber" nillable="true" type\="string" /> <element minOccurs="0" name="AdditionalEmailAddresses" nillable="true" type\="string" /> <element minOccurs="0" name="AllowInvoiceEdit" nillable="true" type\="boolean" /> <element minOccurs="0" name="AnotherCustomAccountField\_\_c" nillable="true" type\="string" /> <element minOccurs="0" name="AutoPay" nillable="true" type\="boolean" /> <element minOccurs="0" name="Balance" nillable="true" type\="double" /> <element minOccurs="0" name="Batch" nillable="true" type\="string" /> <element minOccurs="0" name="BillCycleDay" type\="int" /> <element minOccurs="0" name="BillToId" nillable="true" type\="zns:ID" /> <element minOccurs="0" name="CreatedDate" nillable="true" type\="dateTime" /> <element minOccurs="0" name="CrmId" nillable="true" type\="string" /> <element minOccurs="0" name="Currency" nillable="true" type\="string" /> <element minOccurs="0" name="CustomerServiceRepName" nillable="true" type\="string" /> <element minOccurs="0" name="DefaultPaymentMethodId" nillable="true" type\="zns:ID" /> <element minOccurs="0" name="Gateway" nillable="true" type\="string" /> <element minOccurs="0" name="InvoiceDeliveryPrefsEmail" nillable="true" type\="boolean" /> <element minOccurs="0" name="InvoiceDeliveryPrefsPrint" nillable="true" type\="boolean" /> <element minOccurs="0" name="InvoiceTemplateId" nillable="true" type\="zns:ID" /> <element minOccurs="0" name="MyCustomAccountField\_\_c" nillable="true" type\="string" /> <element minOccurs="0" name="Name" nillable="true" type\="string" /> <element minOccurs="0" name="Notes" nillable="true" type\="string" /> <element minOccurs="0" name="PaymentTerm" nillable="true" type\="string" <element minOccurs="0" name="PurchaseOrderNumber" nillable="true" type\="string" /> <element minOccurs="0" name="SalesRepName" nillable="true" type\="string" /> <element minOccurs="0" name="SoldToId" nillable="true" type\="zns:ID" /> <element minOccurs="0" name="Status" nillable="true" type\="string" /> <element minOccurs="0" name="UpdatedDate" nillable="true" type\="dateTime" /> </sequence> </extension> </complexContent> </complexType>

The custom fields appear in lines 8 and 23.

-   `<element minOccurs="0" name="AnotherCustomAccountField__c" nillable="true" type="string" />`

-   `<element minOccurs="0" name="MyCustomAccountField__c" nillable="true" type="string" />`
