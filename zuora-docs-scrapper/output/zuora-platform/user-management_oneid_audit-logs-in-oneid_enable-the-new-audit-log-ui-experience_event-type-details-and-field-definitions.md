---
title: "Event Type Details and Field Definitions"
url: "https://docs.zuora.com/en/zuora-platform/user-management/oneid/audit-logs-in-oneid/enable-the-new-audit-log-ui-experience/event-type-details-and-field-definitions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:16:44.165Z"
---

# Event Type Details and Field Definitions

This document provides detailed information on event types and field definitions for OneID and Billing tenant activities, including login attempts, administrative actions, and configuration changes.

## OneID Log-In Activity

This event type tracks the login activity of users who log in to your Zuora account through OneID.

| Field | Description |
| --- | --- |
| Timestamp | Time when the event occurred. |
| Username | The username or login name used during authentication. |
| User Email | The user’s work email address. |
| Status | Indicates whether the login succeeded or failed. |
| Auth Type | Authentication mechanism used: SSO, password-based login, or MFA. |
| IP Address | The IP address of the user performing the login. |

## OneID Admin & Settings Changes

This event type captures administrative actions performed within OneID, including user provisioning, policy changes, and configuration updates.

| Field | Description |
| --- | --- |
| Date & Time | The timestamp when the administrative action occurred. |
| Tenant ID | The numeric identifier of the tenant. |
| Object Type | The type of OneID entity affected. Examples include:configsecurity_policyuseroauth_clientrolesetgroupsaml_config |
| Object Affected | The identifier or name of the specific object that was modified. For example, a user email, a role name, a group name, or the label for an SSO or security policy configuration. |
| Action | Describes the administrative action in plain language, such as User created, User activated, MFA reset, Role updated, or SSO configuration updated. |
| Updated By | Identifies who performed the action. |
| Previous Value | Shows the value of the attribute before the change, when available. |
| New Value | Shows the value after the change, when available. |

## Billing Tenant Log-In Activity

This event type tracks login attempts into Zuora Billing tenants. To view these events, you must select a Billing tenant before applying the filter.

| Field | Description |
| --- | --- |
| Timestamp | Indicates when the login attempt occurred. |
| Tenant ID | Identifies the Billing tenant processing the login attempt. |
| Username | The username used during authentication. |
| User Email | The user’s work email. |
| Status | Indicates whether the login was successful or failed. |
| Authentication Method | The authentication type used by the Billing tenant. |
| IP Address | The IP address of the user performing the login. |

## Billing Tenant Configuration Changes

This event type captures configuration updates made within the Billing tenant, such as gateway settings, invoice settings, and notification configuration.

To view these events, you must select a Billing tenant before applying the filter.

| Field | Description |
| --- | --- |
| Date & Time | Indicates when the configuration change occurred. |
| Tenant ID | Identifies the Billing tenant where the configuration was modified. |
| User | Shows the user who performed the update. |
| Action | Describes the type of change, such as Created, Updated, or Deleted. |
| Changed Attribute | Specifies the configuration field you updated |
| Previous Value | Displays the value before the change |
| New Value | Displays the value after the change |

## Billing Tenant Object Change Events

This event type tracks changes made to Billing domain objects such as accounts, subscriptions, rate plans, invoices, and payment methods.

| Field | Description |
| --- | --- |
| Date & Time | Shows when the Billing system committed the object change. |
| Tenant ID | Identifies the Billing tenant where the object was modified |
| User | Indicates the user who performed the update. |
| Action | Describes the operation applied to the object, such as Created, Updated, Deleted, or Status changed. |
| Changed Attribute | Identifies the specific field or property that was modified. |
| Previous Value | Shows the attribute value before the change. |
| New Value | Shows the attribute value after the change. |
