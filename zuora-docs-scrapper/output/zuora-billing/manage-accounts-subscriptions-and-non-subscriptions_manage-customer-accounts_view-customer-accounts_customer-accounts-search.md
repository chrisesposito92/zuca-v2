---
title: "Customer accounts search"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/customer-accounts-search"
product: "zuora-billing"
scraped_at: "2025-12-24T05:17:01.989Z"
---

# Customer accounts search

This topic explains how to search for customer accounts in Zuora Billing or Zuora Payments using manual scrolling or the search feature.

There are two ways to find your customer account in Zuora Billing or Zuora Payments:

-   Manually scroll through the accounts in either expanded or list view and look for a specific account.

-   Use the search feature to search for customers.


## Searching for Customer Accounts

To search for a customer account, navigate to Customers > Customer Accounts and enter your search string, e.g., Soho Plc, into the search box on the right.

There are two search modes: regular search (the default) and filtered search.

## Regular Search

Regular search looks for your search string in all the customer account fields at once. If your search string is found anywhere in a customer account record, that customer is returned in the results. This type of search can return many results, but can take longer to complete than a filtered search. Zuora recommends that you start with a regular search, but if results are slow, try using a filtered search.

To perform a regular search, ensure All is displayed next to the Field label. To change the Field value, click it to show the available options. The Search Type options are unavailable when All is selected.

## Filtered Search

Filtered search looks for your search string in only one specified customer account field, and can, therefore, return results more quickly than a regular search.

To select the specific customer account field that you wish to find your search string in, e.g., Account Name, click the field value next to the Field label, and select one of the following:

-   Account Name: The customer account name, for example, Soho Plc.

-   Account Number: The customer account number, for example, A00001789.

-   Name (FirstName LastName): The full name of the customer account, for example, Soho Plc.

-   CRM ID: The Account ID of this customer in your CRM system, for example, 0017000000oz2K0.

-   Last 4 Digits CC: The last four digits of the customer's credit card, for example, 3403.

-   Work Email: The customer's work email address, for example, sally.tompkins@soho.com.

-   Work Phone: The customer's work phone number, for example, 555-345-48485.

-   Custom Field(s): The values contained in the custom fields that were created on the Account object. This option is only visible if you have 'Custom Field' enabled in your tenant settings.


Your selected field will be remembered between sessions as the default option for future searches.

## Searching for Full Names

To search for a customer's full name e.g. John Smith you should select Name (FirstName LastName) .

The first name is taken to be everything before the first whitespace, and everything after this is taken as the last name. A search is then performed looking for customers whose first name and last names match the separated parts of your search string.

-   A search string of Robert Louis Stevenson would find all customers with the first name of Robert and the last name of Louis Stevenson.

-   A search string of Stevenson Robert Louis would find all customers with the first name of Stevenson and the last name of Robert Louis.


If a customer's first name contains a white space you must use quote marks to define which words comprise the first name.

-   A search string of "Robert Louis" Stevenson would find a customer whose first name was Robert Louis and last name was Stevenson.

-   A search string of Robert Louis Stevenson would not find a customer whose first name was Robert Louis and last name was Stevenson.


If only a single word is entered then this will be searched for in both First Name and Last Name fields.

-   A search string of Robert would find all customers with the first name of Robert, or the last name of Robert, or both.


## Search Type

Specifying a search type allows you to narrow the range of results your searches generate. To select the search type that you want to use, for example, Starts With , click the highlighted field next to the Type label.

The Starts With and Exact Match types return fewer, more accurate results in the fastest possible time. We recommend that you use one of these options in your initial search, as results are returned quickly.

The Contains type will return a result if it finds your search string at the beginning, middle or end of an account field. It is the least restrictive search type, and therefore returns more results and runs more slowly than the other two options. We recommend you only use this option if you can't find the customer account using the other two options, and need to widen your search.

Your selected search type will be remembered between sessions as the default option for future searches.

## Starts With

This search operation checks for a match at the beginning of a word. A word is defined by a sequence of alphanumeric or underscore characters, and the end of a word is indicated by white-space or a non-alphanumeric, non-underscore character. The search is not case-sensitive.

For example, to search for a customer account named “Lilypad Gardens,” the following terms will result in a match:

-   Lilypad Gardens

-   Lilypad

-   Lilypad G

-   Lily

-   Gardens


Searching for the end of a word, such as "dens" in the customer name Lilypad Gardens, will return no results.

## Exact Match

This search operation checks for the exact word(s) you specify in the search string. The search is not case sensitive.

For example, to search for a customer account named “Soho” the following terms will result in a match:

-   Soho

-   soho

-   sOhO


Searching for the beginning of the customer name Soho, such as 'So', or the end of a word such as 'ho', will return no results. Similarly, if searches contain additional words e.g. 'Soho Inc' then no results will be returned.

## Contains

This search operation checks for the word(s) you specify anywhere in the search string. The search is not case sensitive.

For example, to search for a customer account named “Omnicorp Plc” the following terms will result in a match:

-   Omni

-   corp

-   nico

-   corp Pl


Search strings cannot be split, so searching for two parts of the customer name Omnicorp Plc such as 'Omni Plc' will return no results.
