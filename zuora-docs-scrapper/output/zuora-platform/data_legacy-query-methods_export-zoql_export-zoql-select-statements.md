---
title: "Export ZOQL Select Statements"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/export-zoql-select-statements"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:27.913Z"
---

# Export ZOQL Select Statements

Learn how to use Export ZOQL for creating exports from Zuora data sources, including syntax differences, query examples, wildcard support, and handling reserved characters.

Export ZOQL is used for creating exports from Zuora data sources and uses a different syntax than standard ZOQL.

## Query Examples

To query for all accounts that have active subscriptions that pay with a Visa credit card, issue the following query:

SELECT Subscription.Name, Account.Name FROM Subscription WHERE Subscription.Status='Active' AND DefaultPaymentMethod.CreditCardType='Visa'

You need not use the data source name as a qualifier for its fields. An identical query to the one above would be:

SELECT Name, Account.Name FROM Subscription WHERE Status='Active' AND DefaultPaymentMethod.CreditCardType='Visa'

## Asterisk Wildcard Support

If you want to see all of the fields for a given object, you can use an asterisk in place of the field names:

SELECT \* FROM Account

This query returns all of the fields of the Account object.

## Wildcard Support for Joined Objects

Use the asterisk wildcard to return all fields for an associated object:

SELECT AccountNumber, Balance, billtocontact.\* FROM Account

You can optionally specify the primary object name before its fields. The following queries will return identical information:

SELECT Accountnumber, Balance, BillToContact.Firstname, BillToContact.Lastname, BillToContact.Homephone FROM Account SELECT Account.accountnumber, Account.balance, Billtocontact.firstname, Billtocontact.lastname, Billtocontact.homephone FROM Account

## Reserved and Escaped Characters

You must escape single (') and double quotes ("). You can escape single or double quotes by repeating them, as in SQL.

For example, to escape a single quote:

SELECT AccountNumber FROM account WHERE Name = 'San Francisco''s Finest'

## Column Alias Support

You can specify an alias for a column name when you create a data source export.

Use the following syntax to create a column alias:

`select field as "name" from table;`

Where field is the name of the field that you are creating an alias for, name is the alias (specified in quotes), and table is the name of the table that contains the field.

Note:

You cannot choose the same alias for different fields when you create a data source export. For example, the following statements will be rejected:

`select field1 as "First Name", field2 as "First Name" from table;`

After you make this query, you would get the following error message:

`Duplicate column aliases First Name were defined.`

Note:

When an alias in the SELECT clause is the same as the corresponding full column name of the object (case insensitive), the header name in the result file uses the full column name instead of the alias.

For example, for `select Account.Id, Account.InvoiceDeliveryPrefsEmail as "account.invoicedeliveryprefsemail" from Account`, the header names in the result file are `Account.Id, Account.InvoiceDeliveryPrefsEmail`. The all lower-case `account.invoicedeliveryprefsemail` is ignored.
