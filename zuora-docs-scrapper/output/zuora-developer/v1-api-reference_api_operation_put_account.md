---
title: "PUT Account"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Account/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:58.217Z"
---

## Update an account

Updates a customer account by specifying the account-key.

### Notes

1.  Only the fields to be changed should be specified. Any field that is not included in the request body will not be changed.
2.  If an empty field is submitted with this operation, the corresponding field in the account is emptied.
3.  Email addresses: If no email addresses are specified, no change is made to the email addresses or to the email delivery preference. If either the **personalEmail** or **workEmail** of **billToContact** is specified (or both), the system updates the corresponding email address(es) and the email delivery preference is set to `true`. (In that case, emails go to the **workEmail** address, if it exists, or else the **personalEmail**.) On the other hand, if as a result of this call both of the email addresses for the account are empty, the email delivery preference is set to `false`.
4.  The Bill To, Sold To, and Ship To contacts are separate contact entities. However, if you set the `soldToSameAsBillTo` field to `true` when creating an account, the Bill To and Sold To contacts will refer to the same contact entity. As a result, updating either contact will update both. The same behavior applies to the `shipToSameAsBillTo` field and the Ship To contact. In this case, if you want to update only one of the contacts, you must create a new contact and then update the Bill To, Sold To, or Ship To contact to reference the newly created one.

Security**bearerAuth**

Request

##### path Parameters

| account-keyrequired | stringAccount number or account ID. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| additionalEmailAddresses | Array of stringsA list of additional email addresses to receive email notifications. Use commas to separate email addresses. |
| --- | --- |
| autoPay | booleanWhether future payments are to be automatically billed when they are due. |
| batch | stringThe alias name given to a batch. A string of 50 characters or less.Note: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package. |
| billCycleDay | integer <= 2 charactersSets the bill cycle day (BCD) for the charge. The BCD determines which day of the month the customer is billed. Values: Any activated system-defined bill cycle day （1-31） |
| billToContact | object (Contact)Container for bill-to contact information for this account. |
| billToContactId | stringThe ID of a contact that will be the bill-to contact of the current account. |
| communicationProfileId | stringThe ID of the communication profile that this account is linked to.You can provide either or both of the communicationProfileId and profileNumber fields.If both are provided, the request will fail if they do not refer to the same communication profile. |
| creditMemoTemplateId | stringNote: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.The unique ID of the credit memo template, configured in Billing Settings > Manage Billing Document Configuration through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b. |
| crmId | stringCRM account ID for the account, up to 100 characters. |
| customerServiceRepName | string <= 50 charactersName of the account’s customer service representative, if applicable. |
| debitMemoTemplateId | stringNote: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.The unique ID of the debit memo template, configured in Billing Settings > Manage Billing Document Configuration through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2. |
| defaultPaymentMethodId | string <= 64 charactersID of the default payment method for the account.Values: a valid ID for an existing payment method. |
| einvoiceProfile | object (einvoiceProfile)Container for profile information for this account.Note: This field is available only if you have the E-Invoicing feature in Early Adopter phase enabled. |
| gatewayRoutingEligible | booleanDefault: falseIndicates whether to include the applicable billing accounts to gateway routing for controlled adoption. |
| invoiceDeliveryPrefsEmail | booleanWhether the customer wants to receive invoices through email.The default value is false. |
| invoiceDeliveryPrefsPrint | booleanWhether the customer wants to receive printed invoices, such as through postal mail.The default value is false. |
| invoiceTemplateId | stringInvoice template ID, configured in Billing Settings in the Zuora UI. |
| name | stringAccount name, up to 255 characters. |
| notes | stringA string of up to 65,535 characters. |
| parentId | stringIdentifier of the parent customer account for this Account object. The length is 32 characters. Use this field if you have Customer Hierarchy enabled. |
| partnerAccount | booleanDefault: falseWhether the customer account is a partner, distributor, or reseller.You can set this field to true if you have business with distributors or resellers, or operating in B2B model to manage numerous subscriptions through concurrent API requests. After this field is set to true, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments.Note: This field is available only if you have the Reseller Account feature enabled. |
| paymentGateway | stringThe name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway. |
| paymentTerm | stringPayment terms for this account. Possible values are Due Upon Receipt, Net 30, Net 60, Net 90. |
| profileNumber | stringThe number of the communication profile that this account is linked to.You can provide either or both of the communicationProfileId and profileNumber fields.If both are provided, the request will fail if they do not refer to the same communication profile. |
| purchaseOrderNumber | stringThe purchase order number provided by your customer for services, products, or both purchased. |
| salesRep | stringThe name of the sales representative associated with this account, if applicable. Maximum of 50 characters. |
| sequenceSetId | string or nullThe ID of the billing document sequence set to assign to the customer account.The billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set.If a customer account has no assigned billing document sequence set, billing documents generated for this account adopt the prefix and starting document number from the default sequence set. |
| shipToContact | object (Contact)Container for optional ship-to contact. |
| shipToContactId | stringThe ID of a contact that will be the ship-to contact of the current account. |
| soldToContact | object (Contact)Container for optional sold-to contact. |
| soldToContactId | stringThe ID of a contact that will be the sold-to contact of the current account. |
| tagging | string |
| summaryStatementTemplateId | string or nullThe summary statement template ID or number. When a user attempts to generate a summary statement from the "Account Summary Statement" screen, the system utilizes this template to produce the PDF. |
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

put/v1/accounts/{account-key}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

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

-   "success": true


}`
