---
title: "Manage audit trails in OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-audit-trails-in-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:05.846Z"
---

# Manage audit trails in OneID

The Audit Trail feature in OneID logs activities such as user management, configuration changes, and login events, providing detailed information on each action.

The Audit Trail feature captures and logs various activities performed within the OneID platform, such as provisioning/de-provisioning, data modifications to user profiles, user login/logout events, and configuration changes in the OneID for your organization. Each recorded event provides information such as the user who initiated the action, the date and time of the event, and the affected field or data.

The following menus support auditing changes:

-   Users: First & Last name, User Groups, email, federated ID, and their active status in OneID.

-   User Groups: Name & description, Group memberships, Tenant and role configurations.

-   User Roles: Name & description, permissions assigned at every permission module


The following operational process support auditing:

-   User management API : Single or bulk operations for Users and Groups.

-   SSO Configuration: Add and remove SSO metadata configuration for Single Sign-On.

-   OAuth Client: Add and delete OAuth clients in OneID.

-   Login history of users: For basic password authentication and Single Sign-On.


## View Audit Trail logs

In the Audit Trail, you'll find a list of recorded logs. Each entry represents a specific action or event. The information provided in an entry includes:

-   Date and Time: The timestamp when the event occurred.

-   User id: The user account associated with the action.

-   Change Type: The type of event, such as Updated, Created, or Deleted

-   Field name and type: The specific data or system component modified or affected by the event.

-   Old value and the new value of the affected data or field

-   Object id, type, and name


## Export audit trail data

To export Audit Trail Data from OneID, create filters or search criteria to display the entries you want to export. For assistance, contact our support team at support@zuora.com.
