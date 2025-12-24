---
title: "OneID overview"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/oneid-overview"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:07.260Z"
---

# OneID overview

Zuora OneID is an identity and access management platform that enhances security and streamlines user access across Zuora applications, offering features like Single Sign-On, user lifecycle management, and compliance monitoring.

This article provides an overview of Zuora OneID, including the key features and concepts, such as organization, tenant, user, user role, and user group.

## Overview

Zuora OneID is a robust identity and access management (IAM) platform designed to enhance security and streamline user access across various Zuora applications and services. Zuora OneID is a specialized solution for Zuora applications, offering a comprehensive approach to managing employee identities and overseeing their activities within Zuora environments, ensuring compliance with regulatory standards. To know more, take a look at the [Overview of Zuora OneID](https://share.vidyard.com/watch/m1ghDWVFUG4i1bGAzcr7dY) video.

For more information about how to get started, see Get started with OneID.

## Key Attributes for Onboarding with Zuora OneID

The importance of onboarding with Zuora OneID is emphasized by the following essential features and use cases.

## Seamless Single Sign-On (SSO) Integration

Zuora OneID features Single Sign-On functionality, enabling users to access multiple applications with a single set of credentials. By reducing the need for multiple usernames and passwords, this not only enhances security but also improves user experience. With Zuora OneID, you can enjoy IdP-initiated SSO using the SAML 2.0 protocol and effortlessly connect with leading Identity Providers (IdP) such as Okta, Azure AD, Google, Redhat, OneLogin, and more.

## Universal Identity

Zuora OneID acts as a centralized repository for user profiles and identity information across various Zuora applications and services. With a single set of credentials, you can effortlessly access multiple Zuora tenants, eliminating the need to remember and manage multiple passwords.

## User Lifecycle Management

From start to finish, Zuora OneID oversees the entire lifecycle of user identities, including onboarding and offboarding. This involves managing user provisioning, de-provisioning, and profiles across multiple Zuora applications to ensure effective and secure user identity management.

## Authorization and Access Policies

Organizations can use Zuora OneID to establish and enforce access policies through security or user groups, guaranteeing appropriate access levels for users according to their roles. Security groups enable users to simultaneously hold different roles across multiple Zuora applications.

## Automated User Provisioning

Zuora OneID facilitates secure automation of user identity data exchange between service providers and Zuora through SCIM APIs. The cost and complexity of user management operations are reduced through this integration.

## Security and Compliance

Zuora OneID ensures compliance with industry security standards and certifications. With aggregated data across all Zuora applications, organizations can effortlessly monitor user and role creations, assignments, and access details for auditing purposes.

## Organization and tenants

An organization refers to a company contracted with Zuora. A tenant refers to a Zuora tenant in any environment or type. Typically, an organization owns multiple tenants for different purposes, such as development, testing, and production.

## Users in OneID

A OneID user refers to a user account in OneID. A user represents a person with a specific identity (for example, administrator, developer, operator, and so on) in your organization.

There are two user types in OneID: Organization Admin and Standard User.

## Organization admins

Organization admins have access to the OneID Admin Console, where they can create or edit users, user roles, and user groups for your organization. In addition, organization admins can perform any actions that standard users can do, such as link tenant users, and access Zuora tenants with OneID.

The capabilities of an organization admin are as follows:

-   Add users to OneID

-   Manage users in OneID

-   Manage user roles in OneID

-   Manage user groups in OneID

-   Access Zuora tenants with OneID

    -   View Zuora tenants in OneID

    -   Manage your user profile in OneID

    -   Link tenant users to OneID

-   Configure OneID settings

-   Configure single sign-on for OneID


## Standard users

Standard users use OneID as a single entry point to access Zuora tenants.

The capabilities of a standard user are as follows:

-   Access Zuora tenants with OneID

-   Manage your user profile in OneID

-   Link tenant users to OneID


## Distinguish OneID users from tenant users

Tenant users refer to users created in Zuora tenants. Similar to OneID users, a tenant user represents a specific identity in your Zuora tenant.

To access a Zuora tenant with OneID, you need to link a tenant user in that tenant to your OneID user. Then, you can access the tenant on your OneID portal.

The following table shows examples of common identities in OneID and your Zuora tenants, and the relationships between these identities.

| Employee | Responsibility | Identity (user type) in OneID | Identity in Zuora tenants |
| --- | --- | --- | --- |
| Employee A | Running your organization | Organization admin | Administrator |
| Employee B | Managing user accounts in OneID | Organization admin | N/A |
| Employee C | Managing user accounts in your Zuora tenants | Standard user | Administrator |
| Employee D | Managing transaction data in your Zuora tenants | Standard user | Operator |
| Employee E | Developing transaction system for your organization | Standard user | Developer |

In this example, the only task for employee B is managing user accounts in OneID; this employee does not need to log in to your Zuora tenants. So the identity of this employee in OneID is organization admin, and there is no corresponding tenant user in your Zuora tenants.

However, employee C, who manages tenant user accounts, is a standard user in OneID, and an administrator in your Zuorate tenants.

For more information, see Access Zuora tenants with OneID and Link tenant users to OneID.

## User roles in OneID

A OneID user role represents a user identity with permissions for Zuora products in a specific Zuora tenant.

A OneID user role consists of a group of tenant user roles in a Zuora tenant. This group of tenant user roles defines permissions for Zuora products such as Zuora Platform, Billing, Payments, Finance, Commerce, Reporting, and Insight. You can customize user roles in OneID to meet your business needs.

The following table shows three examples of OneID user roles and subordinate tenant user roles in a specific Zuora tenant:

-   User Role A: an administrator user role of this Zuora tenant
-   User Role B: a standard user role of this Zuora tenant
-   User Role C: a customized user role of this Zuora tenant

| Zuora product | User Role A | User Role B | User Role C |
| --- | --- | --- | --- |
| Zuora Platform | Administrator | Standard User | Customized Platform User |
| Billing | Zuora Billing Standard User | Zuora Billing Standard User | Zuora Billing Standard User |
| Payments | Zuora Payments Standard User | Zuora Payments Standard User | Zuora Payments Standard User |
| Finance | Zuora Finance Administrator | Zuora Finance Standard User | Zuora Finance Administrator |
| Commerce | Zuora Commerce Admin User | Zuora Commerce Standard User | Zuora Commerce Standard User |
| Reporting | Zuora Reporting Administrator | Zuora Reporting Standard User | Zuora Reporting Standard User |
| Insight | Zuora Insights Administrator | Zuora Insights Standard User | Zuora Insights Standard User |

## Distinguish OneID user roles from tenant user roles

Tenant user roles are user roles created in a Zuora tenant. A tenant user role defines permission for a specific Zuora product. In contrast, a OneID user role contains a set of tenant user roles, which includes permissions for all Zuora products in that tenant.

In the above example, User Roles A, B, and C are of OneID. Zuora Billing Standard User, Zuora Payments Standard User, and Zuora Commerce Admin User are tenant user roles.

For more information about tenant user roles and permissions in Zuora tenants, see User roles .
