---
title: "POST Account"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Account/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:58.309Z"
---

## Create an account

Creates a customer account with a payment method, a bill-to contact, and optional sold-to and ship-to contacts. Request and response field descriptions and sample code are provided. Use this operation to optionally create a subscription, invoice for that subscription, and collect payment through the default payment method. The transaction is atomic; if any part fails for any reason, the entire transaction is rolled back.

This operation is CORS Enabled, so you can use client-side Javascript to invoke the call.

### Notes

1.  The account is created in active status.
2.  If the `autoPay` field is set to `true` in the request, you must provide one of the `paymentMethod`, `creditCard`, or `hpmCreditCardPaymentMethodId` field, but not multiple. The one provided becomes the default payment method for this account. If the credit card information is declined or cannot be verified, no account is created.
3.  Customer accounts created with this call are automatically be set to Auto Pay.
4.  If the `invoiceDeliveryPrefsEmail` field is not specified in the request, the account's email delivery preference is always automatically set to `false`, no matter whether the `workEmail` or `personalEmail` field is specified.

### Defaults for customerAcceptanceDate and serviceActivationDate

Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.

|  | serviceActivationDate(SA) specified | serviceActivationDate (SA) NOT specified |
| --- | --- | --- |
| customerAcceptanceDate (CA) specified | SA uses value in the request call; CA uses value in the request call | CA uses value in the request call;SA uses CE as default |
| customerAcceptanceDate (CA) NOT specified | SA uses value in the request call; CA uses SA as default | SA and CA use CE as default |

This call supports a subset of the functionality of our [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call. For use cases where you create a subscription and a billing account at the same time, we recommend using "Create an order" instead of this call. The Orders call has the following advantages:

-   Provides options for managing the entire subscription lifecycle from creation through to cancellation using different order actions.
-   Allows the creation or modifying of multiple subscriptions in a single order.
-   Allows a single order to combine both recurring subscription digital goods or services with order line items for physical goods.
-   Orders are treated as atomic transactions. If any part fails, the entire order, subscription, and billing account creation are rolled back.

You should use this call if you need to create a standalone billing account, and create orders, subscriptions, standalone invoices, or dynamic usage charges later. There are no deprecation plans for this call and we will continue to support this call for existing users.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| accountNumber | stringA unique account number, up to 50 characters that do not begin with the default account number prefix. If no account number is specified, one is generated. |
| --- | --- |
| additionalEmailAddresses | Array of stringsA list of additional email addresses to receive email notifications. Use commas to separate email addresses. |
| applicationOrder | Array of stringsThe priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: CreditMemo, UnappliedPayment.Note:This field is valid only if the applyCredit field is set to true.If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is ["CreditMemo"], only credit memos are used to apply to invoices. |
| applyCredit | booleanWhether to automatically apply credit memos or unapplied payments, or both to an invoice.If the value is true, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is false, no action is taken.Note: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| applyCreditBalance | booleanApplies a credit balance to an invoice.If the value is true, the credit balance is applied to the invoice. If the value is false, no action is taken.Prerequisite: invoice must be true.To view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.Note:If you are using the field invoiceCollect rather than the field invoice, the invoiceCollect value must be true.This field is deprecated if you have the Invoice Settlement feature enabled. |
| autoPay | booleanWhether future payments are to be automatically billed when they are due.If this field is set to true, you must specify either the creditCard field or the hpmCreditCardPaymentMethodId field, but not both.If this field is set to false, you can specify neither the creditCard field nor the hpmCreditCardPaymentMethodId field. |
| batch | stringThe alias name given to a batch. A string of 50 characters or less.Note: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package. |
| billCycleDay | integer <int64>The account's bill cycle day (BCD), when bill runs generate invoices for the account. Specify any day of the month (1-31, where 31 = end-of-month), or 0 for auto-set.Required if no subscription will be created.Optional if a subscription is created and defaults to the day-of-the-month of the subscription's contractEffectiveDate. |
| billToContactrequired | object (Contact)Container for bill-to contact information for this account. If you do not provide a sold-to contact, the bill-to contact is copied to sold-to contact. Once the sold-to contact is created, changes to billToContact will not affect soldToContact and vice versa. |
| collect | booleanDefault: trueCollects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.If the value is true, the automatic payment is collected. If the value is false, no action is taken.Prerequisite: The invoice or runBilling field must be true.Note: This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 196.0 or a later available version. |
| communicationProfileId | stringThe ID of the communication profile that this account is linked to.You can provide either or both of the communicationProfileId and profileNumber fields.If both are provided, the request will fail if they do not refer to the same communication profile.If none is provided, the default communication profile will be used for this account. |
| creditCard | object (creditCard)Note: This field has been deprecated, and is currently available only for backward compatibility. Use the paymentMethod field instead to create a payment method associated with this account.Container for information on a credit card to associate with this account. If the autoPay field is set to true, you must provide one of the paymentMethod, creditCard, or hpmCreditCardPaymentMethodId field, but not multiple. |
| creditMemoReasonCode | stringA code identifying the reason for the credit memo transaction that is generated by the request. The value must be an existing reason code. If you do not pass the field or pass the field with empty value, Zuora uses the default reason code. |
| creditMemoTemplateId | stringNote: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.The unique ID of the credit memo template, configured in Billing Settings > Manage Billing Document Configuration through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b. |
| crmId | stringCRM account ID for the account, up to 100 characters. |
| currencyrequired | stringA currency as defined in Billing Settings in the Zuora UI.For payment method authorization, if the paymentMethod > currencyCode field is specified, currencyCode is used. Otherwise, this currency field is used for payment method authorization. If no currency is specified for the account, the default currency of the account is then used. |
| customerServiceRepName | string <= 50 charactersName of the account's customer service representative, if applicable. |
| debitMemoTemplateId | stringNote: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.The unique ID of the debit memo template, configured in Billing Settings > Manage Billing Document Configuration through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2. |
| documentDate | string <date>The date of the billing document, in yyyy-mm-dd format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.If this field is specified, the specified date is used as the billing document date.If this field is not specified, the date specified in the targetDate is used as the billing document date. |
| einvoiceProfile | object (einvoiceProfile)Container for e-invoicing profile information for this account.Note: This field is available only if you have the E-Invoicing feature in Early Adopter phase enabled. |
| gatewayRoutingEligible | booleanDefault: falseIndicates whether to include the applicable billing accounts to gateway routing for controlled adoption. |
| hpmCreditCardPaymentMethodId | stringThe ID of the payment method associated with this account. You can use this field to set the default payment method for the account. The payment method ID specified in this field will be set as the default payment method for this account. You can pass the ID of any valid payment method, including a system-generated payment method ID, into this field.If the autoPay field is set to true, you must provide the credit card payment method ID for either this field or the creditCard field, but not both.For the Credit Card Reference Transaction payment method, you can specify the payment method ID in this field or use the paymentMethod field to create a CC Reference Transaction payment method for an account. |
| invoiceDeliveryPrefsEmail | booleanDefault: falseWhether the customer wants to receive invoices through email. |
| invoiceDeliveryPrefsPrint | booleanDefault: falseWhether the customer wants to receive printed invoices, such as through postal mail. |
| invoiceTemplateId | stringInvoice template ID or template number, configured in Billing Settings in the Zuora UI. |
| namerequired | stringAccount name, up to 255 characters. |
| notes | stringA string of up to 65,535 characters. |
| organizationLabel | stringName of the organization that the account belongs to.This field is only required when you have already turned on Multi-Org feature. |
| parentId | stringIdentifier of the parent customer account for this Account object. The length is 32 characters. Use this field if you have Customer Hierarchy enabled. |
| partnerAccount | booleanDefault: falseWhether the customer account is a partner, distributor, or reseller.You can set this field to true if you have business with distributors or resellers, or operating in B2B model to manage numerous subscriptions through concurrent API requests. After this field is set to true, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments.Note: This field is available only if you have the Reseller Account feature enabled. |
| paymentGateway | stringThe name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway. |
| paymentMethod | object (POSTPaymentMethodRequest)Payment method information associated with an account. |
| paymentTerm | stringPayment terms for this account. Possible values are: Due Upon Receipt, Net 30, Net 60, Net 90.Note: If you want to specify a payment term when creating a new account, you must set a value in this field. If you do not set a value in this field, Zuora will use the default value set in Billing Settings > Payment Terms from Zuora UI. |
| profileNumber | stringThe number of the communication profile that this account is linked to.You can provide either or both of the communicationProfileId and profileNumber fields.If both are provided, the request will fail if they do not refer to the same communication profile.If none is provided, the default communication profile will be used for this account. |
| purchaseOrderNumber | stringThe purchase order number provided by your customer for services, products, or both purchased. |
| runBilling | booleanDefault: trueCreates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the invoice and credit memo generation rule.The billing documents generated in this operation is only for this subscription, not for the entire customer account.Possible values:true: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.false: No invoice is created.Note: This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 196.0 or a later available version. |
| salesRep | stringThe name of the sales representative associated with this account, if applicable. Maximum of 50 characters. |
| sequenceSetId | string or nullThe ID or number of the billing document sequence set to assign to the customer account.The billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set.If a customer account has no assigned billing document sequence set, billing documents generated for this account adopt the prefix and starting document number from the default sequence set. |
| shipToContact | object (ShipToContact)Container for optional ship-to contact; uses the same field structure as the billToContact field. If this field is not specified and the shipToSameAsBillTo field is false, the ship-to contact of the account is empty. |
| shipToSameAsBillTo | booleanWhether the ship-to contact and bill-to contact are the same entity.The created account has the same bill-to contact and ship-to contact entity only when all the following conditions are met in the request body:This field is set to true.A bill-to contact is specified.No ship-to contact is specified. |
| soldToContact | object (soldToContact)Container for optional sold-to contact; uses the same field structure as the bill-to contact (above). If a sold-to contact is not specified, one is created from the bill-to contact. Once created, these are two separate data entities, and future changes to one do not affect the other. |
| soldToSameAsBillTo | booleanWhether the sold-to contact and bill-to contact are the same entity.The created account has the same bill-to contact and sold-to contact entity only when all the following conditions are met in the request body:This field is set to true.A bill-to contact is specified.No sold-to contact is specified. |
| subscription | object (subscription)Container for subscription information, used if creating a subscription for the new account at the time of account creation. |
| summaryStatementTemplateId | string or nullThe summary statement template ID or number. When a user attempts to generate a summary statement from the "Account Summary Statement" screen, the system utilizes this template to produce the PDF. |
| tagging | string |
| targetDate | string <date>Date through which to calculate charges if an invoice or a credit memo is generated, as yyyy-mm-dd. Default is current date. Note: This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 211.0 or a later available version.Note: The credit memo is only available only if you have the Invoice Settlement feature enabled. |
| taxInfo | objectContainer for tax exempt information, used to establish the tax exempt status of a customer account. |
| Class__NS | string <= 255 charactersValue of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| CustomerType__NS | stringValue of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Company" "Individual" |
| Department__NS | string <= 255 charactersValue of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the account's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Location__NS | string <= 255 charactersValue of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Subsidiary__NS | string <= 255 charactersValue of the Subsidiary field for the corresponding customer account in NetSuite. The Subsidiary field is required if you use NetSuite OneWorld. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the account was sychronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SynctoNetSuite__NS | stringSpecifies whether the account should be synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Yes" "No" |
| property name*additional property | anyCustom fields of the Account object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/accounts

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "name": "Amy Lawrence",

-   "billToContact": {

    -   "firstName": "Amy",

    -   "lastName": "Lawrence",

    -   "country": "United States",

    -   "state": "CA"


    },

-   "autoPay": false,

-   "currency": "USD",

-   "billCycleDay": 1


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true,

-   "accountId": "8ad087d2909293cb0190964171da0999",

-   "accountNumber": "A00000214",

-   "billToContactId": "8ad087d2909293cb019096417222099b",

-   "soldToContactId": "8ad087d2909293cb01909641723e099e"


}`
