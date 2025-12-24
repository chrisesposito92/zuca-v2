---
title: "Unified authentication for Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/unified-authentication-for-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:49.750Z"
---

# Unified authentication for Zuora Revenue

Learn about the migration of the Zuora Revenue login portal to enhance platform capabilities and the required user actions post-migration.

To enable Zuora Platform capabilities and deliver innovative Zuora Revenue functionalities, such as Close Process Dashboard or Revenue Analytics Dashboard, the login portal of Zuora Revenue will be migrated for all Zuora Revenue Cloud users starting from 37.007.00.00. This migrated login portal can also provide a seamless UI experience for customers who are using different Zuora products, especially for users who are using Billing - Revenue Integration.

## Migration login portal overview

After the login portal is migrated, authentication across all Zuora products is unified. A single URL will be used to access all Zuora products that you have access to. The new URL to be used is based on your location and is listed as follows.

| Customer location | Production | Sandbox |
| --- | --- | --- |
| North America | https://na.zuora.com/apps/newlogin.do | https://sandbox.na.zuora.com/apps/newlogin.do |
| EMEA & APAC | https://eu.zuora.com/apps/newlogin.do | https://sandbox.eu.zuora.com/apps/newlogin.do |

Existing users and their login credentials can still be used after the migration. However, the migrated login portal requires the user ID to be unique across all tenants. If there are duplicates in the existing user IDs, the Zuora team will help update the duplicate ones and get you notified. For example, the following user IDs are the same although they are on two different tenants. One of them will need to be changed to a different one.

| Existing user ID | Tenant | New user ID |
| --- | --- | --- |
| james@zuora.com | CustomerX_Sandbox | james@zuora.com |
| james@zuora.com | CustomerY_Sandbox | James_y123@zuora.com |

## Required user actions

After the migration is done, the following actions are required to use the new URL if applicable:

-   Replace the previous bookmark to use the new login URL as listed in the above table.

-   Reconfigure your single sign-on solutions to point to the new URL.

-   Update BOTs with the new URL.

-   Upon notification from Zuora, update your login credentials as indicated.


Zuora Revenue APIs are not impacted by the migration. You can still use the previous API endpoints.

## Changes and impacts on end users

After the login portal is migrated, some UI changes are also introduced to utilize some of the Zuora Platform capabilities for Zuora Revenue users. The following end-user tasks will be changed or impacted for some time:

-   Log in to Zuora Revenue
-   Edit an individual user account
-   Create a user and assign the user role for the first time
-   Change the password or security questions for a user
-   Manage white-listing for user access
-   Retrieve user list
-   Self-refresh Zuora Revenue sandbox instances

| Task | Before | After |
| --- | --- | --- |
| User login | Different URLs are used to access different instances of Zuora Revenue. For Billing - Revenue Integration users, the URLs to access Zuora Revenue and Zuora Billing are also different. | One URL is used to access all Zuora products.For standalone Zuora Revenue users, if you have multiple instances of Zuora Revenue, after logging in from the new URL, you will select the target instance from the UI to access the Zuora Revenue homepage.For Billing - Revenue Integration users, after logging in from the new URL, the Zuora homepage is displayed. If you have multiple instances of Zuora Revenue, expand the item named Revenue from the main menu and click the target instance name to open the Zuora Revenue homepage. If there is only one Zuora Revenue instance, clicking Revenue from the main menu can open the Zuora Revenue homepage. |
| User management | To access the user management page where you can create or update individual users, the following steps are required:Log in to Zuora Revenue as a superuser or another user who has full access to security submenu options.Navigate to Setups > Security > Users. | To access the user management page, the following steps are required:Log in to Zuora Revenue, click your username on the top right of the UI.Click User Management from the drop-down list. The Administration Settings page is displayed.Click Manage Users. The Users page is displayed. For detailed instructions about the page, see Manage Users.If you are creating a new user, assign the user with the Platform Administrator role for a Superuser in Zuora Revenue, or assign the user with the Platform Standard role for a First User role.For standalone Zuora Revenue users, to go back to the Zuora Revenue home page from the Manage Users page, click Back. For Billing - Revenue Integration users, click Revenue from the main menu. |
| Role management | To assign a specific role to Zuora Revenue users or manage the role privileges, the following steps are required:Log in to Zuora Revenue as a superuser or another user who has full access to security submenu options.Navigate to Setups > Security > Roles. | To assign a specific role to Zuora Revenue users or manage the role privileges, you still need to navigate to Setups > Security > Roles on the Zuora Revenue UI.To create a new user and assign the user role for the first time, click User Management from the profile list to open the new Users page as instructed on the above row for the user management task.A noteworthy change is that when a new user is created as Zuora Platform Administrator, the user will be automatically assigned as the administrator role (Superuser) for Zuora Revenue. Users as other Zuora Platform roles will be assigned as the First User role in Zuora Revenue. |
| Change password | To change the password for a user, you need to navigate to Setups > Security > Users to access the Users page. | To change the password or security question for the current user, the following steps are required:Log in to Zuora Revenue, click your username on the top right of the UI.Click Change Password from the drop-down list. The Change Password page is displayed.Make the changes as needed. To edit the security question and answer, click Reset security question and answer.For standalone Zuora Revenue users, to go back to the Zuora Revenue home page from the Manage Users page, click Back. For Billing - Revenue Integration users, click Revenue from the main menu. |
| Override Approver | Navigate to Users menu under Setups > Security and click on the edit icon of the individual user to enable or disable the override approver capability for the users of a tenant. | The Override Approvers menu option is used to enable or disable the override approver capability for all the users associated with a tenant by using the inline edit mode.Log in to Zuora Revenue.Navigate to Setups > Security > Override Approvers.Enable/Disable the override approver capability as needed against each user.Save the changes. |
| White-listing | Existing white-listing will expire after you have migrated to the new login portal. Zuora Platform will be used to manage new white-listing. | The Zuora Platform capability is used to manage white-listing for Zuora Revenue. This capability is available on the Platform Standard User role.Open the Administration Settings page.Click Manage User Roles.On the Manage Roles page, select Platform from the View Role List of list.Use the Allowable Login IP Address Ranges section to manage white-listing.For more information, see Allowable Login IP Address Ranges. |
| Retrieve user list | Run User Creation Report to retrieve the user list. | The User Creation Report in Zuora Revenue will be deprecated after the migration is done. To retrieve the user list, complete the following steps:Log in to Zuora Revenue, click your username on the top right of the UI.Click User Management from the drop-down list. The Administration Settings page is displayed.Click Manage Users. The Users page is displayed.To export the user list, click Export User List. For more information, see Export user data to a CSV file. |
| Refresh sandbox by yourself | Refresh the sandbox anytime as instructed in Refresh Zuora Revenue sandbox by yourself. | After user migration is completed on sandbox instances and before it is completed on production instances, you cannot refresh the Zuora Revenue sandbox. This functionality will be back to normal after user migration is done for production instances. |
