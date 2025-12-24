---
title: "SOAP API standards"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/coding-overview/soap-api-standards"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:03.248Z"
---

# SOAP API standards

Explains the SOAP API standards.

The Zuora SOAP API is designed for any developer working on a subscription service who needs a broad range of Zuora functionality and detailed control.

## WSDL

Our SOAP service is defined by a WSDL file that you can download from our application site, described on the page The [Zuora WSDL](/zuora-platform/integration/apis/soap-api/zuora-wsdl).

## Order of fields

When specifying fields to Zuora in an XML SOAP message, you must specify the fields in the order in which they are defined for that object in the WSDL.

## Case-sensitivity

SOAP calls, objects, field names, and most values and other parameters are case-sensitive. Check enumerated values in descriptions to confirm that you are using the correct capitalization and spacing.

## Field required and optional indicators

Fields can be required for some calls and optional for others. Your particular call and use case determine which fields are required.

Field description tables for objects include a column that indicates if each field is required or optional for `create()` calls. If the field is required for `create()` calls, then the field is marked required. If the field is not required, whether because it's read-only or not necessary, then it's marked optional.

Whether or not a field is required is from the perspective of you, as the API user, not the perspective of the database. Therefore, a required field is a field that requires your input in every `create()` call of the object.

For example, the database requires the field, `UpdatedById` . However, Zuora automatically generates its value without your input. Therefore, `UpdatedById` is an optional field.

For most objects, only a few fields are required.

## Field values

Some field values are automatically generated. Don't include a value for fields that are automatically generated.

Some fields have a default value. If you pass the field without a value, it's called a null value. If the field has a default value, then Zuora replaces your null value with the default value.

Some field values are inherited from the values of other fields. These other fields can come from other objects. Similarly, some field values are calculated by Zuora from the values of other fields. Don't include a value for inherited fields nor calculated fields.

Some field values come from a specific, enumerated list of values. Use only these values exactly as described. Make sure you're using the correct spacing and capitalizations.

Some fields require you to input a value in a particular format, such as dateTime fields. These fields include a link in the Values section of the description table. Follow that link if you need some help with the input format.
