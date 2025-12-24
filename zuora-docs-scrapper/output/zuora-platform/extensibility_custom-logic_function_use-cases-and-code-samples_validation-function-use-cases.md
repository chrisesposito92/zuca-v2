---
title: "Validation function use cases"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/use-cases-and-code-samples/validation-function-use-cases"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:16.725Z"
---

# Validation function use cases

Common use cases and code samples of validation function.

## Validate if a product is eligible for delivery to a specific address

The following code sample validates whether the value in the `Address__c` field is included in a given array.

((default\_\_vehicle => { const address = default\_\_vehicle.Address\_\_c; if(\['30324','30326', '30328', '94702', '94027'\].includes(address)){ return { success: true }; } return { success: false, message: "Sorry, we do not deliver to this location" }; })(default\_\_vehicle);

## Validate aged invoices

The following code sample validates whether the date in the `Due_Date__c` field is more than 90 days ahead of the current date, which indicates the invoice aging is greater than 90 days.

((invoice) => { const dueDate = invoice.Due\_Date\_\_c; const currentDate = new Date(); const daysUntilDue = Math.floor((dueDate - currentDate) / (1000 \* 60 \* 60 \* 24)); if (daysUntilDue <= 90) { return { success: true }; } return { success: false, message: "Invoice is overdue and past the 90 days threshold." }; })(invoice);

## Validate currency format

The following code sample validates whether the value in the `AcceptedCurrency__c` field matches the regular expression for the USD currency format.

((account) => { const currency = account.AcceptedCurrency\_\_c; const currencyFormatRegex = /^\\$?\\d{1,3}(,\\d{3})\*(\\.\\d{1,2})?$/; if (currencyFormatRegex.test(currency)) { return { success: true }; } return { success: false, message: "Currency Value should be a valid USD currency format (e.g., $100,456.03)." }; })(account);

## Validate URL protocol

The following code sample validates whether the value in the `Source__c` field is a valid URL.

((default\_\_vehicle) => { const urlValue = default\_\_vehicle.Source\_\_c; const url = new URL(urlValue); if (url.protocol === 'http:' || url.protocol === 'https:') { return { success: true }; } return { success: false, message: "Source should have a valid URL format (e.g., http or https.)" }; })(default\_\_vehicle);

## Validate field entry

The following code sample validates whether the `BillingState__c` field is specified when the value in the `Country__c` field is `United States`.

((account) => { if (account.Country\_\_c === 'United States' && !account.BillingState\_\_c) { return { success: false, message: "Billing State is required for accounts in the United States." }; } return { success: true }; })(account);

## Validate social security number format

The following code sample validates whether the value in the `SSN__c` field is a valid social security number.

((default\_\_Credit\_Check) => { const ssnValue = default\_\_Credit\_Check.SSN\_\_c; const ssnFormatRegex = /^(\\d{3}-\\d{2}-\\d{4}|\\d{9})$/; if (ssnFormatRegex.test(ssnValue)) { return { success: true }; } return { success: false, message: "The SSN should have a valid format (###-##-####)." }; })(default\_\_Credit\_Check);

## Validate positive values

The following code sample validates whether the value in the `Credit_Limit__c` field equals or is greater than 0.

((account) => { const creditLimit = account.Credit\_Limit\_\_c; if (creditLimit >= 0) { return { success: true }; } return { success: false, message: "Credit limit cannot be negative." }; })(account);

## Validate if a field is an email address

The following code sample validates whether the value in the `Email__c` field of the `default__users` custom object is in the format of an email address.

((default\_\_users) => { const email = default\_\_users.Email\_\_c; const emailFormatRegex = /^(\[A-Z0-9\_+-\]+\\.?)\*\[A-Z0-9\_+-\]@(\[A-Z0-9\]\[A-Z0-9-\]\*\\.)+\[A-Z\]{2,}$/i; if (emailFormatRegex.test(email)) { return { success: true }; } return { success: false, message: "User does not have valid email format", }; })(default\_\_users);

## Validate field content length

The following code sample validates whether the value in the Name field of an account is equal to or less than 10 characters.

((account) => { const inputField = account.Name; if (inputField.length > 10) { return { success: false, message: "Account Name is too long" }; } else { return { success: true }; } })(account);

## Validate if a field contains special characters

The following code sample validates whether the value in the Comments field of an invoice contains any special characters.

((invoice) => { const comments = invoice.Comments; const commentFormatRegex = /^\[A-Za-z0-9 ,.\]+$|^$/; if (commentFormatRegex.test(comments)) { return { success: true }; } return { success: false, message: "Invoice Comments Should Not contain special characters", }; })(invoice);
