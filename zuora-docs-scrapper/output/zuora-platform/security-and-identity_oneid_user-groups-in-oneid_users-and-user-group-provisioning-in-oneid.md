---
title: "Users and user group provisioning in OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-groups-in-oneid/users-and-user-group-provisioning-in-oneid"
product: "zuora-platform"
scraped_at: "2026-02-19T03:22:00.635Z"
---

# Users and user group provisioning in OneID

Learn how to provision users and user groups in OneID, including managing access through user groups or direct tenant access for optimized security and administrative efficiency.

Your user provisioning decides how you can create, modify, and set user roles. Provisioning users and groups via OneID requires an Administrator account.

## User Groups vs Direct Tenant Access in OneID

When managing access control in OneID, administrators have the choice between utilizing User Groups and Direct Tenant Access. Each method offers distinct advantages and is suited to different scenarios. Understanding when to use User Groups versus Direct Tenant Access is crucial for optimizing security, efficiency, and administrative simplicity within your organization.

## Using User Groups in OneID

Utilize user groups to streamline access control. Assign permissions and roles to groups instead of individual users, decreasing administrative workload and maintaining consistency.

User groups are ideal for:

-   Authorizing only permitted users to access resources, applications, and services.

-   Applying security policies, configurations, and updates consistently to every member of a group.

-   Opting for group-based management to handle numerous users with similar access requirements efficiently.

-   Ensuring consistency across directory services, cloud services, and applications by automating the assignment of users to groups based on roles, departments, or attributes from your IdP and IAM systems.


## Enable Group Provisioning for All Users

If you activate the Enable Group for All Users option under Security Policies in Settings, it will set Group as the exclusive provisioning mode for all users in your organization. As a result, users will be granted access to Zuora applications solely based on the groups they are assigned to.

If you prefer to manage some users via groups and others through Direct Tenant Access (DTA), it is recommended to enable groups at the user level rather than the organization level.

## Change Provisioning Modes

Switching from Direct Tenant Access to Group provisioning will result in users losing access to existing tenants with the status Group Unmapped. To restore access, users must be added to the appropriate groups. Until proper group assignments are made, users will not be able to access tenants they previously had access to under the Direct Tenant Access provisioning mode.

## Using Direct Tenant Access in OneID

The evaluation of Direct Tenant Access is necessary for the specific scenarios listed below.

-   To prevent complexity and security risks, it’s best to avoid groups when permissions need to be highly specific and unique to individual users.

-   To avoid overcrowding your group, it may be more practical to assign individual users for short-term access.

-   For very small organizations or teams, the administrative effort of handling groups might be more than the benefits.

-   When users’ roles and responsibilities change often, using groups to manage permissions can become difficult and prone to mistakes. Leverage Direct Tenant Access with dynamic role-based access control (RBAC) for enhanced flexibility.

-   To avoid creating groups unnecessarily, individual permissions can be a better choice for specific access in one-time or ad-hoc tasks.
