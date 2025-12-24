---
title: "Field types"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/field-types"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:27.521Z"
---

# Field types

Introduces the data types of fields in Zuora's SOAP API.

The underlying basic data types used in the WSDL, described in "Understanding the Zuora WSDL", can have different interpretations depending on context. For example, text, textarea, email, phone number, enum, and autonumber are all different types of string fields. The possible interpretations of the basic WSDL data types are provided on the following table.

## Field types and descriptions

All field names are case sensitive.

| Field type | Base type | Interpretation |
| --- | --- | --- |
| autonumber | string | When there is an autonumber field, you don’t need to specify a value. Instead, the system automatically generates a number for you based on your administrator settings. If you do specify a value, then it will validate your specified values for consistency against the system definition. |
| boolean | boolean | A boolean value is either true or false. |
| currency | double/decimal | As of v19.0+ of the API, all currency fields are of type decimal. Prior versions of the API use type double for currency fields. |
| date | date | See "Date format and Datetimes in Zuora" for detailed information. |
| dateTime | dateTime | See "Date format and Datetimes in Zuora" for detailed information. |
| email | string | Email fields contain email addresses. It is your responsibility to specify valid and properly formatted email addresses in your create() and update() calls. |
| enum | string | This type is a string that is restricted to a certain set of values. The set depends on the field and the object context. All enum fields are case sensitive. |
| ID | zns: ID | All objects in this API have an ID field. This field is inherited from the zObject object. It is 32 alphanumeric characters. The ID is a unique identifier for each record in an object. Some ID fields are automatically generated or updated by the system, such as CreatedById or LastModifiedById . See "Zuora IDs," below, for more information.Note : If you include an ID field in a call, you must specify a valid value for this field even if the ID field is nillable. Zuora validates the value of this field. An error is returned if the field value is empty or not in a valid format. |
| int | int | An int (integer) data type is a whole number without a decimal point or any value that would follow a decimal point. The value 1 , for example, is an integer; 1.0 and 1. are not. An integer can be a negative number. |
| phone | string | Phone fields contain telephone numbers, which can include alphabetic characters. As with the email fields, it is your responsibility to format phone numbers. |
| quantity | double/decimal | As of version 19.0 of the API, quantity fields are represented of type decimal. Older versions of the API use type double. |
| text | string | A string value. The size varies with the field and object context. |
| textarea | string | A textarea field is a string that is displayed as a multiline text field; it can contain more than 4,000 bytes of text. Unlike string fields, textarea fields cannot be specified in the WHERE clause of a queryString of a query() call. To filter records on this field, you must do so while processing records in the QueryResult . |

## Case sensitivity

All field names are case sensitive. Be sure to check enumerated values in descriptions to confirm that you are using the correct capitalization and spacing.

## Required and optional indicators

Some fields are marked required, and the rest are marked optional. Whether or not a field is required is from the perspective of you, as the API user, not the perspective of the database. Therefore, a required field is a field that requires your input in every call of the object.

For example, the database requires the field, `UpdatedById` . Zuora automatically generates its value without your input. Therefore, `UpdatedById` is an optional field.

For most objects, only a few fields are required.

## Field values

Some field values are automatically generated. Don't include a value for fields that are automatically generated.

Some fields have a default value. If you pass the field without a value, it's called a null value. If the field has a default value, then Zuora replaces your null value with the default value.

Some field values are inherited from the values of other fields. These other fields can come from other objects. Similarly, some field values are calculated by Zuora from the values of other fields. Don't include a value for inherited fields nor calculated fields.

Some field values come from a specific, enumerated list of values. Use only these values exactly as described. Make sure you're using the correct spacing and capitalizations.

Some fields require you to input a value in a particular format, such as dateTime fields. These fields include a link in the Values section of the description table. Follow that link if you need some help with the input format.

## Zuora IDs

Zuora IDs, including the Account ID, Subscription ID, RatePlan ID, and all other IDs in the system, are unique values that are used as Primary Keys for objects. The IDs are generated by Zuora.

The Account ID is included in the URL for an Account. For example:

`https://www.zuora.com/apps/CustomerAccount.do?method=view&id=4028e4862dcd32be012dd4a4bd5f07eb`

In this example, the Account ID is `4028e4862dcd32be012dd4a4bd5f07eb` .
