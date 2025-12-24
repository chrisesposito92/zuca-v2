---
title: "Billing roles"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/user-roles/billing-roles"
product: "zuora-platform"
scraped_at: "2025-12-24T05:03:23.358Z"
---

# Billing roles

This reference lists the user roles and permissions associated with the Billing role.

## Billing user roles

Your Zuora tenant has one Billing user role by default, the Zuora Billing Standard User role. You can also create custom Billing user roles as needed by clicking Add new role.

## Billing permissions

The following table describes the Billing user permissions, and shows whether each permission is enabled for Zuora Billing Standard Users. Unless otherwise noted, all permissions control operations for both the Zuora UI and the APIs.

| Area | Permission | Description | Granted to standard User? |
| --- | --- | --- | --- |
| Customer Accounts | Delete Accounts | Users can only delete accounts once they've been canceled. To cancel an account, the customer must have canceled their subscription first. | Yes |
| Create Account | Create accounts either manually or by importing customer lists. | Yes |  |
| Create Contact | Each account must have at least one contact before it can be saved. Users can add a maximum of 100 contacts to an account. | Yes |  |
| Create Payment Method | Add Payment Methods for a Subscription - including credit cards, debit cards, bank transfer, e-wallet, direct entry, and prepaid gift cards. | Yes |  |
| Modify Account | The permission includes:Modify basic account information.Modify billing and payment details.Modify contacts.Modify new attachments. See Attachments. | Yes |  |
| Cancel Account | Cancel the account. | Yes |  |
| Change Payment Methods | Change Payment Methods for a Subscription - including credit cards, debit cards, bank transfer, e-wallet, direct entry, and prepaid gift cards. | Yes |  |
| Delete Payment Methods | Delete Payment Methods from a Subscription - including credit cards, debit cards, bank transfer, e-wallet, direct entry, and prepaid gift cards. | Yes |  |
| Hard Delete Billing Document Files | Permanently delete all billing document PDF files. | No |  |
| Scrub Sensitive Data of Contact | Scrub sensitive data of contacts. See Scrub Contacts for more information. | No |  |
| Subscriptions | Manage Subscriptions/Amendments | Add or remove a Subscription as well as amendments or implement order actions to a Subscription. Amendments or order actions include adding, removing, and updating products, changes to terms and conditions, renewals, and owner transfers. See Subscription Amendments and Order Actions . | Yes |
| Delete Subscriptions/Amendments | The permission includes:Delete subscriptions in any status.Delete amendments from a subscription. | Yes |  |
| Override Revenue Recognition Rule | Change the revenue rule in the Revenue Recognition Rule field of the Rate Plan Charge setting when creating a subscription or editing a draft subscription. | No |  |
| Order Line Items | Create Order Line Items Without Product Catalog | Define new charges when creating order line items.You can create order line items from existing products at any time, regardless of whether you have this permission. | Yes |
| Invoices | Post Invoices | Post a Bill Run in order to collect payments for the Invoices in that Bill Run. | Yes |
| Override Transferred to Accounting | Override transaction objects that have been Transferred to Accounting in order to modify them. | No |  |
| Modify Invoice | Allows users to:Edit invoices.Add and edit invoice attachments .Split Invoices (if the feature is enabled on your tenant).Create, update, and delete Taxation Items using the SOAP API. | Yes |  |
| Cancel Invoice | Cancel a posted invoice that becomes effective before the last invoice date. See Amend or Cancel a Subscription Before the Last Invoice Date . | Yes |  |
| Delete Invoice | Delete invoices. See Deleting Incorrect Invoices . | Yes |  |
| Email Invoice | Email invoices. | Yes |  |
| Reverse Invoice | Reverse a posted invoice that contains incorrect information. See Invoice Reversal . | Yes |  |
| Cancel Posted Billing Documents | Unpost posted billing documents, including invoices, credit memos, and debit memos. See Canceling Posted Invoices and Unpost Credit and Debit Memos . | Yes |  |
| Create Standalone Invoice With Product Catalog | Select charges from existing products when creating standalone invoices. For more information, see Create standalone invoices . | Yes |  |
| Create Standalone Invoice Without Product Catalog | Define new charges when creating standalone invoices. For more information, see Create standalone invoices . | Yes |  |
| Billing Document Files | Regenerate PDF | Regenerate PDF files for billing documents, including invoices, credit memos, and debit memos. | Yes |
| Generate MS Word Document | Generate billing documents in Microsoft Word, including invoices, credit memos, and debit memos.Note that if the billing document is using HTML Templates , no MS Word Document is generated even though this permission is enabled. | Yes |  |
| Invoice AdjustmentsNote : Invoice Adjustments is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustments instead. | Create Invoice Adjustment | Create an Invoice Adjustment or Invoice Item Adjustment. See Creating Invoice Adjustments and Invoice Item Adjustments . | Yes |
| Cancel Invoice Adjustment | Cancel an Invoice Adjustment. See "Canceling an Invoice Adjustment" in Create an Invoice Adjustment . | Yes |  |
| Delete Canceled Invoice Adjustment | Delete a canceled Invoice Adjustment. See "Deleting an Invoice Adjustment" in Create an Invoice Adjustment . | Yes |  |
| Override Transferred to Accounting | Change the Transferred to Accounting field of an invoice adjustment from Yes to a different value. | No |  |
| Change Reason Code | Change reason codes so that standard users can apply them to transactions. See Creating and Editing Reason Codes for more information on how to reconfigure reason codes. | Yes |  |
| Invoice Item Adjustments | Hide Canceled Invoice Item Adjustments | Hide canceled invoice item adjustments from the list of Invoice Item Adjustments in the Zuora UI. | No |
| Create Invoice Item Adjustment | Create an Invoice Adjustment or Invoice Item Adjustment. See Creating Invoice Adjustments and Invoice Item Adjustments for more information on adjustments and how to reverse past adjustments. | Yes |  |
| Cancel Invoice Item Adjustment | Cancel an Invoice Adjustment or Invoice Item Adjustment. See "Canceling an Adjustment to an Invoice Item" in Create an Invoice Item Adjustment . | Yes |  |
| Delete Canceled Invoice Item Adjustment | Delete a canceled Invoice Item Adjustment. See "Deleting an Adjustment to an Invoice Item" in Create an Invoice Item Adjustment . | Yes |  |
| Override Transferred to Accounting | Change the Transferred to Accounting field of an invoice item adjustment from Yes to a different value. | No |  |
| Cancel Invoice Item Adjustment without Validation | Allows users to cancel invoice item adjustments , even if doing so causes the invoice balance to:Move from positive to negative, or vice versa.Move away from zero.Unlike this permission, the Cancel Invoice Item Adjustment permission does not allow users to cancel invoice item adjustments in the above cases.Note:Grant this permission with care to a supervisor who fully understands the subsequent impact on accounting caused by the invoice balance change. | No |  |
| Product Catalog | Manage Product Catalog | Add a product to a product catalog. See Create a Product in Product Catalog . | Yes |
|  | Change Revenue Recognition Rule | Allows users to change the revenue rule in the Revenue Recognition Rule field of a rate plan charge when creating a subscription or editing a draft subscription. | Yes |
| Bill Runs | Terminate Bill Runs | Terminate bill runs that are in Processing status. See Terminate bill runs . | No |
| Create Bill Runs | Create a bill run. See Creating Bill Runs . | Yes |  |
| Do bill runs for multiple accounts | Create bill runs for multiple customer accounts. | Yes |  |
| Usage Records | Update Usage Records | Update usage records. See Usage . | Yes |
| Create Usage Records | Add usage records. See Import Usage Data . | Yes |  |
| Delete Usage Records | Delete usage records. See Usage . | Yes |  |
| Attachments | Manage Attachments | View, add, and edit attachments. See Attachments . | Yes |
| Delete Attachments | Delete attachments. Requires the Manage Attachments permission. See Attachments . | No |  |
| Admin | Manage Billing Settings | Allows users to access Billing settings . | Yes |
| Manage OTR Settings | Allows users to configure Revenue settings . If not enabled, the Revenue settings will be read-only, meaning that if you try to change and save them, an error will be returned. | No |  |
| Manage OTR Transactions Regeneration | Allows users to view and use the 'Regenerate booking transaction on subscription' button to enable the feature . This option is available only to admin users. If not enabled, the users will not be able to view the 'Regenerate booking transaction on subscription' button. | No |  |
| Credit MemosNote: This feature is only available if you have the Invoice Settlement feature enabled. | Post Credit Memo | Post the credit memos. | Yes |
| Change Reason Code | Update the reason code of the credit memos. | No |  |
| Refund Credit Memo | Issue full or partial refunds for posted credit memos to customers. See Refund Credit Memos . | Yes |  |
| Create Ad Hoc Credit Memo | Create an ad-hoc credit memo to reduce an invoice and the account balance. See Create Credit Memo or Debit Memo . | Yes |  |
| Cancel Credit Memo | Cancel credit memos only if they are in draft status. See Cancel Credit and Debit Memos . | Yes |  |
| Modify Credit Memo | Allow users to edit credit memos after creation. See Edit Credit and Debit Memos . | Yes |  |
| Delete Credit Memo | Delete credit memos only if they are in Cancelled status. See Delete Credit and Debit Memos . | Yes |  |
| Apply Credit Memo | Apply a credit memo to one or more invoices and debit memos. See Apply Credit Memos to Invoices and Debit Memos . | Yes |  |
| Override Credit Memo Item Name | Override the associated invoice item name with a new credit memo item name when creating or updating credit memos. | Yes |  |
| Unapply Credit Memo | Unapply the applied portion of credit memos from invoices and debit memos. See Unapply Credit Memos from Invoices and Debit Memo . | Yes |  |
| Reverse Credit Memo | Reverse a posted credit memo. See Reverse credit memos for more information. | No |  |
| Debit MemosNote: This feature is only available if you have the Invoice Settlement feature enabled. | Post Debit Memo | Post the debit memos. | Yes |
| Change Reason Code | Update the reason code of the debit memos. | No |  |
| Create Ad Hoc Debit Memo | Create an ad-hoc debit memo to increase the amount customer owes you. See Create Credit Memo or Debit Memo . | Yes |  |
| Cancel Debit Memo | Cancel debit memos only if they are in draft status. See Cancel Credit and Debit Memos . | Yes |  |
| Modify Debit Memo | Allow users to edit debit memos after creation. See Edit Credit and Debit Memos . | Yes |  |
| Delete Debit Memo | Delete debit memos only if they are in Cancelled status. See Delete Credit and Debit Memos . | Yes |  |
| Override Debit Memo Item Name | Override the associated invoice item name with a new debit memo item name when creating or updating debit memos. | Yes |  |
