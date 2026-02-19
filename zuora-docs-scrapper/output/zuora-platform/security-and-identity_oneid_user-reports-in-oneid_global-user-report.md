---
title: "Global user report"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-reports-in-oneid/global-user-report"
product: "zuora-platform"
scraped_at: "2026-02-19T03:22:31.115Z"
---

# Global user report

The Global user report provides a comprehensive view of user statuses and essential information for organization-wide management within OneID.

The Global user report offers an organization-wide view of user statuses within OneID. This report is ideal for monitoring user accounts when group provisioning mode is enabled across all users.

## Fields in global user report

The fields included in the Global User Report provide essential user information for organization-wide visibility and management.

1.  User ID: A globally unique identifier (GUID) for users within OneID, used in both the OneID Audit trail and Tenant-level reports.
2.  User Name: Unique identifier for login within OneID.
3.  First Name & Last Name: The user's name as registered in OneID.
4.  OneID User Status: The user status in OneID can be Active, Inactive, Pending Activation, or a Pending Setup(Similar to Pending Activation but allows account activation directly from the Billing application using local credentials).
5.  Work Email: The email address used for OneID-related communications.
6.  Federated ID: User identity managed by a Federated Identity Management (FIM) system for Single Sign-On (SSO).
7.  SSO Enabled: Indicates whether Single Sign-On is enabled in OneID.
8.  OneID Role: Indicates if the user has Organization Administrator privileges within OneID.
9.  Created On: Date of account creation in OneID.
10.  Deactivated On: Date of account deactivation in OneID.
11.  User Groups: Lists the user's group memberships within OneID, displayed as a comma-separated field.
12.  Last Login: The last login date and time for the user's OneID account.
