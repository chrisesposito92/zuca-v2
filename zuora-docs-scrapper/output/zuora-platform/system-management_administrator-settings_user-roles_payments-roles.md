---
title: "Payments roles"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/user-roles/payments-roles"
product: "zuora-platform"
scraped_at: "2025-12-24T05:03:26.131Z"
---

# Payments roles

This reference lists the user roles and permissions associated with the Payments role.

See [User roles](/zuora-platform/system-management/administrator-settings/user-roles) for general information about user roles.

## Payments user roles

Your Zuora tenant has one Payments user role by default, the Zuora Payments Standard User role. You can also create custom Payments user roles as needed by clicking Add new role.

## Payments permissions

The following table describes the Payments user permissions, and shows whether each permission is enabled for Zuora Payments Standard Users. Unless otherwise noted, all permissions control operations for both the Zuora UI and the APIs.

| Area | Permission | Description | Granted to standard user? |
| --- | --- | --- | --- |
| Payments | Process External Payment | See Create a payment. | Yes |
| Cancel External Payment | See "Cancel a Payment" in Canceling, Voiding, and Deleting Payments . | Yes |  |
| Process Electronic Payment | See Create a payment. | Yes |  |
| Cancel Electronic Payment | See "Cancel a Payment" in Cancelling, Voiding, and Deleting Payments . | Yes |  |
| Override Transferred to Accounting | Change the Transferred to Accounting field of a payment from Yes to a different value. | No |  |
| Delete Payment | Delete voided or cancelled payments. | Yes |  |
| Override Accounting Code | See Overriding Accounting Codes on Payments . | No |  |
| Hide Cancelled Payments | Hide cancelled payments in the list of payments in the Zuora UI and in the Account Summary REST API call response. | No |  |
| Transfer Payment | See Transfer unapplied payments . | Yes |  |
| Apply Payment | Apply payments to invoices or debit memos. | Yes |  |
| Unapply Payment | Unapply the applied payments from invoices or debit memos. See Unapply Payments from Invoices and Debit Memos . | Yes |  |
| Scrub Sensitive Data of Specific Payment Method | Scrub all sensitive data related to a payment method that is stored in Zuora. See Scrub Payment Methods for more information. | No |  |
| Edit Payment Gateway Status | View and edit the Gateway State field in the Zuora UI. | No |  |
| Edit Payment Gateway Routing | Edit and create rules on the Payment Gateway Routing tab.Users without this permission can only view existing rules on the Payment Gateway Routing tab. | For tenants created after the 2024.05.R1 release, this permission is not granted to Standard User by default.For existing tenants, this permission is granted to Standard User by default. |  |
| Payment Runs | Manage Payment Runs | Create payment runs.Create scheduled payment runs.Cancel payment runs.Stop payment runs.Delete payment runs.The Process Electronic Payment permission also needs to be allowed for a Manage Payment Runs role to work. | Yes |
| Refunds | Override Transferred to Accounting | Change the Transferred to Accounting field of a refund from Yes to a different value. | No |
| Change Reason Code | Change the reason code on an existing transaction. | Yes |  |
| Issue External Refund | See "Creating a Payment Refund" in Creating Refunds . | Yes |  |
| Issue Electronic Refund | See "Creating a Payment Refund" in Creating Refunds . | Yes |  |
| Cancel External Refund | Cancel an external refund. | Yes |  |
| Cancel Electronic Refund | Cancel an electronic refund. | Yes |  |
| Delete Refund | See Deleting a refund . | Yes |  |
| Credit Balance | Override Transferred to Accounting | Change the Transferred to Accounting field of a refund from Yes to a different value. | No |
| Credit Balance Electronic Refund | See Cancel and Refund Credit Balances . | No |  |
| Create Credit Balance Adjustment | See Create a Credit Balance Adjustment . | Yes |  |
| Cancel Credit Balance Adjustment | See Cancel a Credit Balance Adjustment . | Yes |  |
| Delete Cancelled Credit Balance Adjustment | Delete cancelled credit balance adjustments. | Yes |  |
| Credit Balance External Refund | See Cancel and Refund Credit Balances . | Yes |  |
| Admin | Manage Payments Settings | Allows users to access Payment Settings. | Yes |
