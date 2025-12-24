---
title: "Additional field details"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account/additional-field-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:45.537Z"
---

# Additional field details

Additional details of the fields of the Account object.

## AccountNumber

The unique account number assigned to the account being created. An Account object must include an AccountNumber value, but you don't have to specify the value.

If you choose not to specify a value for the AccountNumber field when you create an account object, then Zuora assigns a unique account number for you based on the account number prefix specified during setup.

If you choose to specify an AccountNumber value, then you need to use a unique string that doesn't use the account number prefix specified during setup; that prefix is exclusively for Zuora's autopopulation.

You can edit this field until there are posted invoices on the account.

## AllowInvoiceEdit

Indicates if associated invoices can be edited. Set to `true` to allow editing. Set to `false` or omit the field to prevent editing.

If you omit this field in the following calls, then Zuora uses the default value, `false` :

-   create()

-   subscribe()

-   subscribeWithExistingAccount() (deprecated)


## AutoPay

Indicates if future payments are automatically collected when they're due during a Payment Run. Set to `true` to automatically bill. Set to `false` to or omit the field to prevent automatic billing.

You can only set this value to `true` when the default payment method is an electronic payment method. If you use the subscribe() call, then you need to pass an electronic method, such as a credit card. If you use the create(account) call, then you need to set the default method to an electronic payment method before you activate the account and before you set the AutoPay value to `true` .

## Batch

A batch organizes your customer accounts into groups to optimize your billing and payment operations. For example, you can create a batch of accounts that are never processed in bill runs because they're canceled, test, or free trial accounts. You can create other batches that group accounts by region or industry.

## BillCycleDay

Indicates the account's billing cycle day (BCD), which is when the bill runs generate invoices for the account. To avoid proration charges on the first invoice, set this field to the same day as the account was created.

If you want the BCD to be the end of the month, regardless of the number of days in the month, then set the `BillCycleDay` value to 31.

For WSDL 30 - 32: Set the value to 0 to automatically set the BCD to the same day as the triggering date of the account's first recurring charge. This auto-set function applies only to recurring charges, not to one-time charges nor usage charges.

For WSDL 33+: If you want to automatically set the BCD to the same day as the triggering date of the account's first recurring charge, then set the optional field, `BcdSettingOption` to `AutoSet` , and set the `BillCycleDay` field to null or to 0.

## BillToId

The ID of the person to bill for the account. This value can be the same as the `SoldToId` value.

If you don't specify a value for this field in a subscribe() call, then Zuora generates the ID from the specified contact.

This field is required for active accounts, but optional for draft accounts.

## CommunicationProfileId

Associates the account with a specified communication profile , which is a set of policies that determine how and which notifications are sent to users with the specified communication profile.

Use this field with a subscribe() call for a new subscription.

## CreditBalance

The total credit balance for the account. A credit balance represents the total amount of credit that can be applied to future invoices or refunded to a customer. For example, a customer pays for a one-year subscription, but cancels after two months. You can retain the amount the customer paid and allow the customer to use that credit to pay toward another invoice.

## CrmId

The CRM account ID for the account. If you create this `Account` object with a subscribe() call, then you need to return later to set or update this value if you want this field in the account.

A CRM is a customer relationship management system, such as Salesforce.com. The CRM ID is the account ID from that system. If you are using Salesforce.com as your CRM, then Zuora 360 uses the CrmId field value to synchronize information from ZBilling to Salesforce.com.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the Account object is `AccountId` .

## InvoiceDeliveryPrefsEmail

Indicates if the customer wants to receive invoices through email.

If you set this value to `true` , there must be a value for `Contact.PersonalEmail` or `Contact.WorkEmail` , otherwise you will receive an error message.

## PaymentTerm

Indicates when the customer pays for subscriptions. The field values are defined in the web-based UI on the Define Payment Terms page. Common payment terms are Due Upon Receipt and Net 60, but your specific values depend on your own configuration.

## SoldToId

The ID of the person who bought the subscription associated with the account. This value can be the same as the `BillToId` value.

This field is required for active accounts, but optional for draft accounts.

## Status

The status of the account in the system.

Omit this field when you use a subscribe() call, which automatically sets the `Status` value to `Active` .

Specify a value for this field when you use a create() call.

Include contact IDs in the `BillToId` and `SoldToId` fields when you change the `Status` value to `Active` .

Cancel all subscriptions associated with this account before you change the `Status` value to `Canceled` . You can't cancel an account that has active subscriptions.

There are a few rules about updating the status of accounts:

-   Draft account: You can update a Draft account to Active, assuming the Bill To/Sold To Contacts are assigned.

-   Active Account: You can update an Active account to Canceled status only if all subscriptions for the account have been canceled (the subscription's Status is set to Cancelled).

-   Cancelled Account: You can update a Canceled account to Active status at any time. However, you cannot update a canceled account to Draft status.

-   You cannot update an Active or Cancelled account to Draft.


Some fields can only be updated while the object is still in `Draft` status. These are noted in the table above with an asterisk (\*) next to the word "Update".

Account Number cannot be updated as well when it's associated with an Invoice.

## TaxExemptEffectiveDate and TaxExemptExpirationDate

The TaxExemptEffectiveDate and TaxExemptExpirationDate fields exist in Zuora WSDL for backward compatibility with custom implementations accessing Zuora. The fields are not used in the Zuora applications; they do not affect the current integration with payment gateways.

You can use these fields as custom fields in your customization.
